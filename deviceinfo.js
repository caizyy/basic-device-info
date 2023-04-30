const os = require("node:os")
const { colortext } = require("./recolor.js")
const bytesToGB = (bytes)=>{
    return Math.round(bytes / (1024 * 1024 * 1024))
}
const bytesToGBFloat = (bytes)=>{
    return (bytes / (1024 * 1024 * 1024)).toFixed(1)
}

const getDeviceInfo = ()=>{
    let arch = os.arch()
    let cpumodel = os.cpus()[0].model
    return(` ${cpumodel}\n ${bytesToGB(os.totalmem)}GB total ${bytesToGBFloat(os.totalmem - os.freemem)}GB in use ${bytesToGBFloat(os.freemem)}GB remaining`)
}
const getOsInfo = ()=>{
    let platform = os.platform()
    let uptime = os.uptime()
    return `${colortext(`${platform === 'win32' ? 'windows' : platform}`, "yellow")} has been up for ${colortext(`${(uptime / 3600).toFixed(2)}`, "yellow")} hours`
}
console.clear()
console.log(getDeviceInfo(), "\n", getOsInfo())