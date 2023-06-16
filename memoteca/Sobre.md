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
        app-component.css - estilo
        app-component.html - templete
        app-component.ts - O componente(Passa o seletor, o html e o CSS do componente)
        app-routing.module.ts - Configurar as rotas da aplicação
        app.module - Um bloco que organiza de forma logica a aplicação - declara os componentes, modulos imports, providers[classes de serviços] - Tudo que eu quero mostrar - na principal tem o bootstrap - arquivo de entrada
        app-component.spec.ts - espedificação - Para teste unitario


 ng generate component(ng g c) home - gera componente usando o angular-CLI

 Add tag na app-componente.html


 component - arquivo TS 
 html - Templete

------------Data Binding unidirecional--------------
-fluxo de dados unico

===========Property Binding============

Component -> Templete 

{{valor}} - interpolação

[propriedade] = "valor"

===========Event Binding============

Templete -> Component

(event)="propriedade"

------------Data Binding bidirecional--------------

-fluxo de dados de mão dupla

diretiva - São classes que conseguem modificar elementos dentro da aplicação.

------------Rotas do Angular--------------

<router-outlet></router-outlet> 

- Diretiva atuará como um espaço reservado que será preenchido pelo próprio Angular dinamicamente.

Ele vai emitir os componentes que eu preciso e seram carregados dinamicamente

precisa configurar as rotas para elas aparecerem 

objeto de configuração que define as rotas da aplicação

Path(caminho) + nome do componente
const routes: Routes = [
  {
    path: 
  }
];

routerLink - Diretiva que eu passo no botão para ir até a rota qe eu preciso

quando a rota for vazia
pathMatch: 'full' - vai ler a rota inteira e se nã tiver nada ira direcionar 

{Para ver:
O RouterModule possui a propriedade routerLinkActive que é necessário apenas passar a classe com o estilo que será aplicado no link.}

------------Diretivas--------------

*ngFor

*ngIf = "listaPensamentos.length > 0, else semPensamentos""

ngClass - 

passar um metodo de TS para modificar o estilo do componente

ng-template #semPensamentos></ng-template>
cria um templete que só vai ser usado se for chamado

listar-pensamento é pai de pensamento

Componente filho receber a lista do pai

adiconar um decoraitor Input() que vai dizer que o objeto pensamento irá receber dados da classe pai

entre [parametro classe filha] = "parametro que recebe a lista do componente pai"


Diretivas de componentes: usado com um modelo. Esse tipo de diretiva é a mais comum.

Ex: <app-listarPensamentos>.

Diretivas estruturais: altera o layout do DOM adicionando e removendo elementos DOM.

Ex: NgIf, NgFor. NgSwitch.

Diretivas de atributos: altera a aparência ou o comportamento de um elemento, componente ou outra diretiva.

Ex: NgClass, NgStyle.

Type os dados dos objetos de pensamento 


-----------Services----------------

Logicas de negocio e fazer as requisiçoes ao servidor

Cria o service = n g s caminho/componente

injectble - pode ser usado em outras class com um metodo 

provededIn - fornecedor - usado em toda a aplicação por estar em 'root'



 https://cursos.alura.com.br/course/angular-explorando-framework/task/110730


