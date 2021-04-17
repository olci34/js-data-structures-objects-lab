// Write your solution in this file!
let driver = {awesome: "maan"}

function updateDriverWithKeyAndValue(obj, key, value) {
    const newObj = {}
    newObj[key] = value
    return Object.assign({},obj, newObj)
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    const newObj = {}
    newObj[key] = value
    return Object.assign(obj,newObj)
}

function deleteFromDriverByKey(obj, key) {
    let newObj = { ...obj } // IF THIS WOULD BE const newObj = obj, THEN obj WOULD BE DESTRUCTIVELY CHANGED(pointers)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key]
    return obj
}