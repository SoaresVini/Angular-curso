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

injectble - uma classe injetavel pode ser usado em outras class com um metodo 

provededIn - fornecedor - usado em toda a aplicação por estar em 'root'

-----------Injeção de dependência----------------

private http: HttpClient

Acesso a todos os metodos dessa classe. 

A injençãode dependicias é um padrão de projeto, que primeite a classe a solicitat dependicias externas ao invez de criálas

Aplicação -> Requisições htttp(Crud) -> Servidor
Angular     Chamadas ao servidor

não faz o impir só na classe, no modulo tambem


-----------Observables----------------

observable - observavel - transferência de dados contínua, emite varios dadosdurante sua existencia biblioteca RXJS já funciona por de baico dos panos do angular


------------Formularios---------------

Orientados a Templetes e a Dados(furmularios reativos)

Importar o modulo de formularios reativos do angular - ReactiveFormsModule

! - exceção não nulo do type script.

passar o formulario do TS para o form do HTML usando o [formGroup]="formulario"

para associar aos inputs usar o formControlName no lugar do name dos inputs

acessar qualquer controle do formulario pelo get

Validators.varias opções

this.formulario.valid - já da para testar se o formulario é valido ou não

*ngIf="formulario.get('conteudo')?.errors && formulario.get('conteudo')?.touched"

se eu passar um get com o conteudo e chamar um errors, consigo ver se tem algum problema no prenchimento do campo e usando o get tambem e chamado ao final o touche assm que o usuario sair no input ela vai adiconar uma mensagem de erro a baixo do input

Duas formas de configurar o Component para passar as informações para os inputs, uma forma no componente criar e a mais correta no componente editar


===Habilitar e desabilitar botoes===

[disabled]="!formulario.valid"

vou passar para essa

----------Botão cancelar está estranho do editar----------------


==========httpParams============

Ela representa o corpo da requisição resposta HTTP, incluindo, os parâmetros serializados. Então, vamos refatorar para utilizar essa classe.

HttpParams().set("_page", pagina)

Subistituir o valor 

HttpParams.has()

Informa se o corpo inclui um ou mais valores para um determinado parâmetro.
HttpParams.get()

Recupera o primeiro valor de um parâmetro.
HttpParams.getAll()

Recupera todos os valores de um parâmetro.
HttpParams.keys()

Recupera todos os parâmetros para este corpo da requisição.
HttpParams.append()

Acrescenta um novo valor aos valores existentes para um parâmetro.
HttpParams.appendAll()

Constrói um novo corpo com valores anexados para o nome do parâmetro fornecido.
HttpParams.delete()

Remove um determinado valor ou todos os valores de um parâmetro.
HttpParams.toString()

Serializa o corpo da requisição em uma string codificada, em que os pares de chave-valor (separados por =) são separados por & s.


Limpar os espaços vazios - trim()

Evemto chamado apoś o clique na tecla - (keyup)

Paginação 

.set("_page", parametro)
.set("_limit", parametro)


Pesquisa

params.set("q", filtro)

GET /posts?title=json-server&author=typicode
  Para filtrar posts pelo título e autor

  .set("posts", "title")
  .set("comments", body)
  .set("profile", name)

GET /comments?author.name=typicode
  Para filtrar comentários pela propriedade ‘name’ do autor, usando o . (ponto) para acessar objetos aninhados.


location.reload() - F5
