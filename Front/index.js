const express = require('express');

const app = express();
const axios = require('axios').default;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//MAPEAMENTO DA PASTA PUBLIC
app.use(express.static('public'));

//CONFIGURA O EJS COMO VIEW ENGINE (REDENRIZA AS PÁGINAS DE FRONT-END)
app.set('view engine', 'ejs');

app.get('',(req,res)=>{
    const urlListagemMangas = 'http://localhost:3000/listarMangas';

    axios.get(urlListagemMangas)
    .then((response)=> {
        let mangas = response.data;
        res.render('manga/listagemMangas',{mangas});
    });
})

app.get('/cadastroMangas',(req,res)=>{
    res.render('manga/index');
})

app.get('/listagemMangas',(req,res)=>{

    const urlListagemMangas = 'http://localhost:3000/listarMangas';

    axios.get(urlListagemMangas)
    .then((response)=> {
        let mangas = response.data;
        res.render('manga/listagemMangas',{mangas});
    });
});

app.get('/formEdicaoMangas/:id', (req, res)=>{
        
    let {id} = req.params;

    const urlListagemMangas = `http://localhost:3000/listarManga/${id}`;
    
    axios.get(urlListagemMangas)
    .then(
        (response)=>{

            let manga = response.data;
            res.render('manga/editarManga', {manga});

        }
    )
});

app.post('/alterarManga', (req, res)=>{

    const urlAlterarManga = 'http://localhost:3000/alterarManga';
    console.log(req.body);

    axios.put(urlAlterarManga, req.body)
    .then(
        res.send('ALTERADO!')
    )

});

app.get ('/deletarManga/:id',(req, res)=>{
    let id = req.params.id;
    const urlDeletarManga = `http://localhost:3000/excluirManga/${id}`;
    axios.delete(urlDeletarManga, req.body)
    .then(
        res.send('DELETADO')
)});

app.listen(3001, ()=>{
        console.log('SERVIDOR RODANDO EM: http://localhost:3001');
});