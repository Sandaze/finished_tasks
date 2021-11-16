const getObjectProperty = (obj, path, defaultValue = undefined) => {
  let pathOfArray = path.split('.'),
      resultObj   = obj,
      error       = null;
  pathOfArray.map(el => {
    try {
      resultObj = resultObj[el]; // перезапись массива
    }
    catch (e) {
       error = undefined; //в случае отсутсвия свойства
    }
  });
  return error == undefined ? defaultValue : resultObj;
}
const obj = {
  'pupa': {
    'lupa': {
      'beep': 'boop',
    },
  'foo': 'bar',
  },
};
  console.log(getObjectProperty(obj, "pupa.ne.tuda"));
// getObjectProperty(obj, "pupa.lupa"); // > { beep : 'boop' }
// getObjectProperty(obj, "pupa.lupa.beep"); // > 'boop'
// getObjectProperty(obj, "pupa.foo"); // > 'bar'
// getObjectProperty(obj, "pupa.ne.tuda"); // > undefined
// getObjectProperty(obj, "pupa.ne.tuda", true); // > true
// getObjectProperty(obj, "pupa.ne.tuda", "Default value"); // > 'Default value'
