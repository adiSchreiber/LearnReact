import person from './init'
import {data as d} from './init'
import {Human} from './classes'
import {Person} from './classes'

console.log(person.name);
console.log(d);

const p = new Person();
p.printMyName();
p.printGender();


const oldarray = [1,2];
const newarray = [...oldarray,3,4];
console.log(oldarray);
console.log(newarray);
