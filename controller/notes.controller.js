import { query } from "../database/db.js"



// Mampu menampilkan semua notes
export const getNotes = async(req,res)=>{
    try{
        const result = await query('Select * from notes')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
// Mampu membuat notes baru
export const insertNotes = async(req,res)=>{
    const {title,datetime,note}= req.body
    try {
        await query("INSERT INTO notes(title,datetime,note) values (?,?,?)", [title,datetime,note])
        return res.status(200).json({msg:"Notes Ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
// Mampu mengubah notes (judul, tanggal, dan catatan)
export const updateNotes = async(req,res)=>{
    const {title,datetime,note}= req.body
    const {id}=req.params
    try {
        await query("UPDATE notes SET title=?, datetime=?, note=? where id=?", [title,datetime,note, id])
        return res.status(200).json({msg:"Notes Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
// Mampu menghapus notes
export const deleteNotes = async(req,res)=>{
    const {id}=req.params
    try {
        await query("DELETE FROM notes where id=?", [id])
        return res.status(200).json({msg:"Notes Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
// Mampu menampilkan salah satu notes
export const getNotesById = async(req,res)=>{
    const {id}=req.params
    try{
        const result = await query('Select * from notes where id=?', [id])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

// export const getSiswaTest = async(req,res)=>{
//     const {id, nama} = req.query
//     console.log(id, nama)
//     console.log("TERPANGGIL")
//     try{
//         const result = await query('Select * from siswa where id=?', [id,nama])
//         return res.status(200).json({success:true, data:result})
//     }catch(e){
//         console.log("Terjadi kesalahan", e)
//         return res.status(500).json({msg:"terjadi kesalahan pada server"})
//     }
// }