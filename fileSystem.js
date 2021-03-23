const fs = require('fs')

const book = {
    title: '原子習慣',
    author: '詹姆斯克利爾'
}

//把object 轉成 JSON 格式
const bookJSON = JSON.stringify(book);

//透過fs 寫入到book.json
fs.writeFileSync('book.json', bookJSON);

//透過fs 讀取book.js檔
const dataBuffer = fs.readFileSync('book.json');//會得到一堆byte
const dataJSON = dataBuffer.toString()//轉成JSON
const data = JSON.parse(dataJSON)//把JSON 轉成 Object
console.log(data);

//修改資料
data.title = '冰雪奇緣2'
data.author = '迪士尼'


//把object 轉成 JSON 格式，再透過fs 寫入到book.json
const newDataJSON = JSON.stringify(data);
fs.writeFileSync('book.json', newDataJSON);