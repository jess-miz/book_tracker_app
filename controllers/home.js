module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    updateModal: (req, res) => {
        try{
            const id = req.params.id;
            res.render('updateModal.ejs', { id });
        }catch(err){
            console.log(err)
        } 
    }
}