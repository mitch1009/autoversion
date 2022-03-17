const exed = require("child_process")

exed(`git tag | xargs git tag -d`, (error, stdout, stderr)=>{
    if(error) console.log(error)
    if(stderr) console.log(stderr)
    console.log(stdout)
})
