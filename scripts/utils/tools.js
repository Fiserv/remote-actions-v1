const fs = require('fs');

const processArgs = (args = []) => {
  const argsAndValues = {};
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (/^--.+/.test(arg)) {
      const key = arg.match(/^--(.+)/)[1];
      const next = args[i + 1];
      if (/^--.+/.test(next)) {
        argsAndValues[key] = false;
        continue;
      }
      argsAndValues[key] = next;
      i++;
    }
  }
  return argsAndValues;
};

const warningMsg = (message) => { 
  console.log(`\x1b[35m Warning : ${message} \x1b[0m`  );
};

const errorMsg = (message) => { 
  console.log(`\x1b[31m ${message} \x1b[0m`  );
};

const errorMessage = (type , message) => {
  console.log(`\x1b[31m \x1b[1m-------------------------${type} FAILED -------------------------- \x1b[0m` );
  console.log(`\x1b[33m ${message} \x1b[0m`  );
};
  
const printMessage = (message) => { 
  console.log(`\x1b[32m \x1b[1m ${message} \x1b[0m`  );
}

const provideReferenceFolder = (path) => {
  let folder = path+"/reference";
  try { 
    const check = fs.existsSync(path+"/references");
    if(check){
      folder = path+"/references";
    } 
  } catch (err) {
    return folder;
  } 
  return folder;
};


const isDocOnlyTenant = async (dir) => { 
  const files = await fs.promises.readdir(dir, { withFileTypes: true });
  let check = false; 
  for (const file of files) {   
    if (file?.name === 'tenant.json'){
      try{ 
       
        const fileName = `${dir}/${file.name}`;
        const content = await fs.promises.readFile(fileName, 'utf8'); 
        const tenantData = JSON.parse(content);   
        if (tenantData?.apiVersions && tenantData?.apiVersions.length > 0){
          return true;
        } 
      }catch (e){
        errorMessage(YAML_VALIDATOR  ,e?.message);
        check = false;
      }  
    }   
  };
  return check;
};


module.exports = {
  processArgs,
  errorMsg,
  errorMessage,
  printMessage,
  provideReferenceFolder,
  warningMsg,
  isDocOnlyTenant,
};