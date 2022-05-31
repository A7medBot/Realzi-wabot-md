const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	anto: 'https://hardianto.xyz',
    zenz: 'https://zenzapis.xyz',
}


// Apikey Website Api
global.APIKeys = {
        'https://hardianto.xyz': 'hardianto',
        'https://zenzapis.xyz': '7d1e10e532', //Untuk Mendapatkan Apikey Silahkan Register Di : https://zenzapi.xyz
        
}


// Other
global.Prefix = 'Multi'
global.modelMenu = 'locButton'
global.owner = ['9647717555198']
global.premium = ['9647717555198']
global.meki = '9647717555198'
global.ownerNumber = '9647717555198'
global.packname = 'Potato'
global.author = 'AĦMED ALHUJAJ '
global.sessionName = 'Fauzi'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.Mode = 'Public'
global.mess = {
    success: 'SUKSES!!.',
    admin: 'Future For Admin Group!',
    botAdmin: 'Bot Should Be Admin First!',
    owner: 'Futures for Owner Bot',
    group: 'Future Used Only For Group!',
    private: 'Future Used Only For Private Chat!',
    bot: 'Future User Only Number Bot',
    wait: 'Loading...',
    done: 'Done',
    endLimit: 'Exhausted your Daily Limit, Limit will be reset every clock 12',
    wrongFormat: 'Commands One !! \ Include links after Command ..',
    example1: 'Welcome @user By Group @subject Don't forget to read the rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: 'Good Bye @user By Group @subject Don't forget to read the rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)', 
    endLimit: 'Exhausted your Daily Limit, Limit will be reset every clock 12'
}
global.limitawal = {
    premium: "Infinity",
    free: "Infinity" 
}
global.thumb = fs.readFileSync('./media/zyy.jpg')
global.pathImg = fs.readFileSync('./media/gambar.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
