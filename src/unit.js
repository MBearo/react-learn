import { Element } from './element'
class Unit {
  constructor(element) {
    this._currentElement = element
  }
}

class TextUnit extends Unit {
  getMarkUp(reactId) {
    this._reactId = reactId
    return `<span data-reactid="${reactId}">${this._currentElement}</span>`
  }
}

class NativeUnit extends Unit {
  getMarkUp(reactId) {
    this._reactId = reactId
    let { type, props } = this._currentElement
    let tagStart = `<${type}`
    let childString = ''
    let tagEnd = `</${type}>`
    for (let propName in props) {
      if (props.hasOwnProperty(propName)) {
        if (/^on[A-Z]/.test(propName)) { // event

        } else if (propName === 'style') {

        } else if (propName === 'children') {

        } else if (propName === 'className') {

        } else {
          tagStart += (` ${propName}="${props[propName]}"`)
        }
      }
    }
    return tagStart + '>' + childString + tagEnd
  }
}

function createUnit(element) {
  console.log(element);
  console.log(element instanceof Element);
  console.log(typeof element === 'string');
  if (typeof element === 'string' || typeof element === 'number') {
    return new TextUnit(element)
  } else if (element instanceof Element && typeof element.type === 'string') {
    return new NativeUnit(element)
  }

}

export {
  createUnit,
}