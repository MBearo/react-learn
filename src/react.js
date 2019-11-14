
import {createUnit} from './unit.js'
import {createElement} from './element'

let React={
  render,
  createElement,
  reactId:0
}
function render(element,container){
  console.log('done');
  //container.innerHTML=`<span data-react-id="${React.reactId}">${element}</span>`
  let unit =createUnit(element)
  let markUp=unit.getMarkUp(React.reactId)
  console.log(markUp);
  container.innerHTML=markUp
}

export default React