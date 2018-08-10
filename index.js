var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
  var returnObj = {};
  Object.assign(returnObj, obj)
  returnObj[key] = value;
  return returnObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}

function deleteFromObjectByKey(object, key){
  var returnObj = Object.create(object)
  delete returnObj.key
  return returnObj
}
