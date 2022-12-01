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

const errorMsg = (message) => {
  console.log('\x1b[31m');
  console.dir(message , { 'colors': false, "depth": null });
  console.log('\x1b[0m');
};

const errorMessage = (type , message) => {
  console.dir(`-------------------------${type} FAILED --------------------------`, { 'colors': true, "depth": null });
  console.dir(message , { 'colors': true, "depth": null });
};

 

const printMessage = (message) => { 
  console.dir(message , { 'colors': true, "depth": null })
}

module.exports = {
  processArgs,
  errorMsg,
  errorMessage,
  printMessage,
};