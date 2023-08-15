const modulesFiles = require.context("../router", true, /\.routes\.js/)
const modules = modulesFiles.keys().reduce((prev, cur) => {
    prev.push(modulesFiles(cur).default)
    return prev
}, [])
export default modules



