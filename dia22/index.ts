let myChannel: string = 'Front Beginners'
let is20K = true

myChannel += ' has 20K followers'

console.log(myChannel)

const num: number = 10
const regex: RegExp = /eeee/

const array1: string[] = myChannel.split(' ')
const array2: Array<number | string> = [1, 2, 3, 'a']

interface ExemploProps {
    name: string
    role: string
    isAdmin: boolean
    age: 32
}


const objeto: ExemploProps = {
    name: 'Jorge',
    role: 'Developer',
    isAdmin: true,
    age: 32,
}

function exemplo({name, role, isAdmin, age}: ExemploProps) {}

const ids: Record<number, string>= {
    [10]: 'a',
    [20]: 'b',
}

ids[30] = 'c'

if (ids[30] === 'asre') {
}

const arrayTeste = [1, 2, 3].forEach((v) => `${v + 1}`)