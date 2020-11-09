/**
 * @author Sodium United
 * @version 1.0.0
 * @path_to_bin /usr/local/bin/react-webpack 
 * @path_to_lib /usr/local/lib/node_modules/react-webpack-cli
**/

const copy = require('./clone').copyDir

function reactWebpackCli() {
    const src_dirPath   = `${__dirname}/react-webpack`
    const dist_dirPath  = `${process.cwd()}/${process.argv[2]}`

    copy(src_dirPath, dist_dirPath)
}

exports.reactWebpackCli = reactWebpackCli