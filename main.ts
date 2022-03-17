// @ts-ignore
import * as  pv from './package.json'
import * as exec from "child_process"
import * as github from '@actions/github'
import * as core from '@actions/core'


const node_version = pv.version
const numbers = pv.version.split(".")

let {
    first, second, last
} = {
    first: parseInt(numbers[0]),
    second: parseInt(numbers[1]),
    last: parseInt(numbers[2])
}


if (last < 9) {
    last += 1
} else if (last >= 9) {
    last = 0
    run_second()

}

function run_second() {
    if (second < 9) {
        second += 1
    } else if (second >= 9) {
        second = 0
        first += 1
    }
}

const newVersion = first + "." + second + "." + last


export async function writeVersion() {
    try {
        const override = core.getInput('override')
        // @ts-ignore
        await exec(`sed -i "s/${node_version}/${newVersion}/g" package.json`, ((error, stdout, stderr) => {
            if (error) console.log(`stdout:${error}`)
            if (stderr) console.log(`stderr: ${stderr}`)
            console.log(`increased version", ${newVersion}  with an overide ${override}`)
        }))
    } catch (err) {

    }


}


