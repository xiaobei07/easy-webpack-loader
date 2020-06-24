const {getOptions} = require('loader-utils')

module.exports = function(source){
    const opts = getOptions(this) || {}
    const replace = source.replace(new RegExp(`{{${opts.word}}}`), opts.replace)
    this.callback(null,replace)
    return replace
}