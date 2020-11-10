/**
 * @author Sodium United
 * @version 1.0.0
 * @path_to_bin /usr/local/bin/react-webpack 
 * @path_to_lib /usr/local/lib/node_modules/react-webpack-cli
 * @param {string} src  The path to the thing to copy.
 * @param {string} dest The path to the new copy.
**/

const FSP = require('fs').promises
const Path = require('path')

async function copyDir(src, dest) {
    const entries = await FSP.readdir(src, {withFileTypes: true})
    await FSP.mkdir(dest)
    for(let entry of entries) {
        const srcPath = Path.join(src, entry.name)
        const destPath = Path.join(dest, entry.name)
        if(entry.isDirectory()) {
            await copyDir(srcPath, destPath)
        } else {
            await FSP.copyFile(srcPath, destPath)
        }
    }
}

function reactWebpackCli() {
    const src_dirPath   = `${__dirname}/react-webpack`
    const dist_dirPath  = `${process.cwd()}/${process.argv[2]}`

    copyDir(src_dirPath, dist_dirPath)
}

exports.reactWebpackCli = reactWebpackCli