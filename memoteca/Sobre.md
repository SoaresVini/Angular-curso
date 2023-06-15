# Angular-curso
Treinamento Angular

Framework front-end criado para desenvolver aplicaçãoes de pg Unica - Single-Page Application(SPA)

Estrutura baseada em componentes com uma coleção de bibliotecas integradas(gerenciar formularior, rotas, comunicação entre cliente/Servidor, entre outros)

Conjunto de ferramentas de desenvolvimento para Criar, testar e atulizar o codigo de uma forma mais facil

Node_modules_ - todas as Dependencias para o desenvolvimento 

package.json - Declaração das dependencias de produção e desenvolvimento

karma.conf.js - executor de tese 

angular.json possui as configurações do projeto 

\src
    - Criado um TS para configurações
    - Criado arquivo CSS global que não interfere nos CSS dos componenstes

    - Cad'a componente possui seu estilo proprio e um TS para configurações

    \assets - Imagens 

    - main.TS - arqivo de entrada 
    - index.html - PG unica

    \app - padrão de quase todo o componente
        app-componente.css - estilo
        app-componente.html - templete
        app-componente.ts - O componente(Passa o seletor, o html e o CSS do componente)
        app-routing.module.ts - Configurar as rotas da aplicação
        app.module - Um bloco que organiza de forma logica a aplicação - declara os componentes, modulos imports, providers[classes de serviços] - Tudo que eu quero mostrar - na principal tem o bootstrap - arquivo de entrada
        app-componente.spec.ts - espedificação - Para teste unitario


 ng generate component(ng g c) home - gera componente usando o angular-CLI

 Add tag na app-componente.html

 https://cursos.alura.com.br/course/angular-explorando-framework/task/110730


