var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
  var returnObj = {};
  Object.assign(returnObj, obj)
  returnObj[key] = value;
  return returnObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  Object.assign(obj, {key: value})
  return obj
}

