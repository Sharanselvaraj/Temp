const{readFileSync, writeFileSync} = require('fs')

const first= readFileSync('./content/first.txt', 'utf-8')
const second= readFileSync('./content/second.txt','utf-8')

writeFileSync('./content/results.txt', `${first}and ${second}`, {flag:'a'})