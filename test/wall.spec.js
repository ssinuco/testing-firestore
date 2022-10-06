import JSDOMEnvironment from "jest-environment-jsdom";
import { paintPost } from "../src/wall";

jest.mock('../src/lib/store.js')
jest.mock('../src/lib/app.js')

describe('wall', () =>{

  it('deberia pintar 1 post cuando hay 1 post en firestore', () => {    
    //1. asegurar condiciones para la prueba
    document.body.innerHTML = '<div id="food"></div>'
    //2. ejecutar la funcion que se quiere probar
    paintPost();
    //3. confirmaciones
    setTimeout(
      ()=> {
        const food = document.getElementById('food');
        expect(food.children.length).toBe(1);    
      }
    ,1000)
  });
})