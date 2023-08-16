import express from 'express';

const app = express();
const PORT = 3000;
app.get('/', (req, res) => { 
    res.json({ msg : 'Lenny Laura Valencia Aruquipa'});
});

app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
});