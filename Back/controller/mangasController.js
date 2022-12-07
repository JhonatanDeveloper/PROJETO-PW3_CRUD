const express = require('express');

const router = express.Router();

const modelMangas = require('../model/mangasModel');

router.get('/listarMangas', (req, res)=>{

    modelMangas.findAll()
        .then(
            (mangas)=>{
                return res.status(200).json(mangas);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados dos seus mangas',
                    erroBancoDados: erro
                });
            }
        );

});

router.get('/listarManga/:id',(req, res)=>{

    let {id} = req.params;

    modelMangas.findByPk(id)
        .then(
            (manga)=>{
                res.status(200).json(manga);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados do manga',
                    erroBancoDados: erro
                });
            }
        );

});

router.post('/inserirManga', (req, res)=>{
    let {nome_mangas}  = req.body ;
    modelMangas.create(
        {nome_mangas}
    ).then(
        ()=>{
                return res.status(201).json({
                    erroStatus: false,
                    menssagemStatus: 'Manga inserido com sucesso!'
            });
        }
    ).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao cadastrar o Manga',
                        erroBancoDados: erro
                    });
        }
    );

});

router.put('/alterarManga', (req, res)=>{

    let {id, nome_mangas} = req.body;

    modelMangas.update(
        {nome_mangas},
        {where:{id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Manga lterado com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao alterar o manga',
                        erroBancoDados: erro
                    });
        }
    );

});

router.delete('/excluirManga/:id', (req, res)=>{

    let {id} = req.params;

    modelMangas.destroy(
        {where: {id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Manga excluido com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao excluir o manga',
                        erroBancoDados: erro
                    });
        }
    );

});

module.exports = router;