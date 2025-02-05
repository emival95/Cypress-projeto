/// <reference types="cypress"/>
import {faker} from '@faker-js/faker';

import commum_page from '../support/pages/commum_page'
import cadastro_page from '../support/pages/cadastro_usuario_page'

describe('Cadastro do usuario', ()=>{

    beforeEach('Acessar o cadastro de usuario', () => {
            commum_page.acessarCadastroUsuario()
            
    })

    it('Campo nome vazio', () => {
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')
    })


    it('Campo e-mail vazio', () => {
        cadastro_page.preecnheNome(faker.name.fullName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })


    it('e-mail invalido', () => {
        cadastro_page.preecnheNome(faker.name.fullName())
        cadastro_page.preecnheEmail(faker.name.firstName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo senha vazia', () => {
        cadastro_page.preecnheNome(faker.name.fullName())
        cadastro_page.preecnheEmail(faker.internet.email())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo senha invalida', () => {
        cadastro_page.preecnheNome(faker.name.fullName())
        cadastro_page.preecnheEmail(faker.internet.email())
        cadastro_page.preencherSenha('123')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com sucesso', async () => {

       const name = await faker.name.fullName()

        cadastro_page.preecnheNome(name)
        cadastro_page.preecnheEmail(faker.internet.email())
        cadastro_page.preencherSenha('123456')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemSucesso(name)

    })
})