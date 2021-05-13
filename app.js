
async function f() {

 return Promise.resolve(1)

}

const alert = console.log("hello");


f().then(alert)

let value = await promise;