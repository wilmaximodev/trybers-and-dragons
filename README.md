hi# Trybers and Dragons 🐉

## 📄 Sobre:

Projeto desenvolvido durante o módulo de back-end do curso de desenvolvimento web da [Trybe](https://www.betrybe.com/).

Neste projeto foi desenvolvido uma estrutura de jogo no estilo [RPG](https://en.wikipedia.org/wiki/Role-playing_game). 

Para seu desenvolvimento foram utilizandos os princípios de <strong>Programação Orientada a Objeto (POO)</strong> e os princípios de arquitetura <strong>SOLID</strong>.

Os objetivos principais do projetos eram:
> * Aplicar e praticar os conceitos de SOLID
> * Aplicar e praticar os conceitos de POO

O projeto foi desenvolvido utilizando <strong>TypeScript</strong>.

## ⚙️ Execução

Para executar a aplicação inicie realizando o clone deste repositório com o comando abaixo.

    git clone https://github.com/wilmaximodev/trybers-and-dragons.git
    
Navegue até a raíz do projeto.

    cd players-and-dragons/
    
Uma vez na raiz do projeto, execute o comando abaixo para instalar as dependências do projeto.
    
    npm install

<details>
   <summary><strong>Rodando a aplicação com o Docker</strong></summary> 
  </br>
  
  <strong>Obs:</strong> Para rodar a aplicação dessa forma você deve ter o [Docker](https://www.docker.com/) instalado na sua máquina.
  
  </br>
  
  Na raíz do projeto, suba os containers <strong>players_and_dragons</strong> utilizando o docker-compose.

      docker-compose up -d
    
  Abra o terminal do container <strong>players_and_dragons</strong>.

      docker exec -it players_and_dragons bash

  Caso não tenha instalado anteriormente, uma vez no terminal do container, execute o comando abaixo para instalar as dependências do projeto.
    
      npm install
    
  Inicie a aplicação com ts-node usando o comando abaixo.
  
      npm start
    
  Para iniciar a aplicação com o nodemon, use o script abaixo.
   
      npm run dev
    
</details>
<br/>

## 🤹🏽 Habilidades Desenvolvidas:
* Criar classes, atributos e métodos
* Criar interfaces e tipos
* Buscar aplicar conceitos de POO
  * Abstração
  * Encapsulamento
  * Herança
  * Composição
  * Polimorfismo
* Buscar aplicar princípios SOLID
  * Responsabilidade Única
  * Aberto-Fechado
  * Substituição de Liskov
  * Segregação da Interface
  * Inversão da Dependência

</br>

## 🧰 Ferramentas:
* TypeScript
* POO (Programação Orientada a Objeto)
* SOLID
</br>
