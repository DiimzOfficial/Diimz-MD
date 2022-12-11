let handler = async m => m.reply(`
「 Donate • Via Pulsa / Via Non Pulsa 」

⫹⫺ Via Pulsa Telkomsel : 628127012058
⫹⫺ Via Dana : 6281270120658
⫹⫺ Via Ovo : 6281270120658
⫹⫺ Via Saweria :
⫹⫺ https://saweria.co/Diimz

*Note:* Hasil Donasi Nantinya Akan Digunakan Untuk Membayar Web Host Agar Bot Dapat Online 24 Jam Nonstop.

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
handler.rowner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler 
