const pv = require("../package.json")
const { exec } = require("child_process");
console.log(pv.version)
console.log(typeof pv.version.split('.')[1])
const node_version=pv.version
const numbers = pv.version.split(".")
let {
    first, second, last
} = {
    first: parseInt(numbers[0]),
    second: parseInt(numbers[1]),
    last: parseInt(numbers[2])
}

console.log(first,second, last)

if (last <9) {
    last+=1
}else if (last >=9){
    last=0
    run_second()

}

function run_second() {
    if (second<9) {
        second+=1
    }else if(second >=9) {
        second=0
        first+=1
    }
}

const newVersion=first+"."+second+"."+last


async function writeVersion() {
    await exec(`sed -i "s/${node_version}/${newVersion}/g" package.json`, ((error, stdout, stderr) => {
        if(error) console.log(`stdout:${error}`)
        if(stderr) console.log(`stderr: ${stderr}`)
        console.log("increased version", newVersion)
    }))
}

writeVersion().then(r => console.log(r))
