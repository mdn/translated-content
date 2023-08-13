---
title: Começando com React
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Neste artigo mostraremos como dizer Olá para o React. Descobriremos um pouco sobre e os casos de usos, configurar uma React toolchain no computador localmente, e criar e usar um app simples como partida, aprendendo um pouco sobre como os processos do React funcionam.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        <p>
          Familiaridade com <a href="/pt-BR/docs/Learn/HTML">HTML</a>,
          <a href="/pt-BR/docs/Learn/CSS">CSS</a>, e linguagem
          <a href="/pt-BR/docs/Learn/JavaScript">JavaScript</a>, conhecimento de
          <a
            href="/pt-BR/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >terminal/linha de comandos.</a
          >
        </p>
        <p>
          React usa a sintaxe HTML-in-JavaScript com o nome JSX (JavaScript e
          XML). Familiaridade em ambos HTML e JavaScript ajudará aprender JSX, e
          identificar melhor se os erros na sua aplicação estão relacionado ao
          JavaScript ou na parte especifíca do React.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Configurar um ambiente local de desenvolvimento React, criar o primeiro
        app e entender o básico de como as coisas funcionam.
      </td>
    </tr>
  </tbody>
</table>

## Olá, React

Segundo seu slogan oficial, [React](https://reactjs.org/) é uma biblioteca para construção de interfaces de usuário. React não é um framework – nem mesmo é exclusivo para web. É utilizado com outras bibliotecas para renderização em certos ambientes. Por exemplo, [React Native](https://reactnative.dev/) pode ser usado para construção de aplicativos móveis; [React 360](https://facebook.github.io/react-360/) pode ser usado para construir aplicações de realidade virtual; e muitas outras possibilidades.

Para construir para web, desenvolvedores usam React em conjunto com [ReactDOM](https://reactjs.org/docs/react-dom.html). React e ReactDOM são frequentemente discutidos nos mesmos espaços e utlizados para resolver os mesmos problemas como outros arcabouços (frameworks). Quando referimos React como "arcabouço" (framework) estamos trabalhando com o termo/entendimento coloquial.

A meta primária do React é minimizar os erros que ocorrem quando os desenvolvedores estão construindo UIs (User Interface). Isto é devido ao uso de componentes - autocontidos, partes lógicas de códigos que descrevem uma parte da interface do usuário. Estes componentes são adicionados para criar uma UI completa e o React concentra muito do trabalho de renderizar, proporcionando que se concentre no projeto de UI.

## Casos de uso

Diferente de outros frameworks comentados neste módulo, React não implementa regras restritas no código como convenções ou organizações de arquivos. Isto permite que times criem convenções próprias que melhor se adequem e para adotar o React do jeito que desejar. React pode manusear um botão único, poucas partes da interface ou a interface inteira de um app.

Enquanto React pode ser utilizado por [pequenos pedaços de interface](https://reactjs.org/docs/add-react-to-a-website.html) e não "cai" em uma aplicação com uma biblioteca como jQuery ou até mesmo como um framework como Vue - é mais acessível quando você constrói todo o app com React.

Além disso, muitos dos beneficios da experiencias de desenvolvimento de uma aplicação React, tais como escrever interfaces com JSX, requerem um processo de compilação. Adicionar um compilador como o Babel em um website faz o código funcionar lentamente, então os desenvolvedores geralmente configuram algumas ferramentas para fazer compilações em etapas. React, sem duvídas, tem um grande ecossistema de ferramentas, mas isso pode ser aprendido.

Este artigo será focado no caso de uso do React para renderizar toda a interface do usuario de um aplicativo, usando ferramentas fornecidas pelo próprio [create-react-app](https://create-react-app.dev/) do Facebook.

## Como React usa JavaScript?

React utiliza características de JavaScript moderno para muitos de seus padrões. O maior desvio do React para o JavaScript dá-se pela utilização sintaxe [JSX](https://reactjs.org/docs/introducing-jsx.html). O JSX estende a sintaxe padrão do JavaScript hablitando-o a utilizar código similar a HTML que pode viver lado a lado ao JSX. Por exemplo:

```js
const heading = <h1> Mozilla Developer Network</h1>;
```

A constante _heading_ acima é conhecida como uma **expressão JSX.** React pode utilizá-la para renderizar a _tag_ [`<h1>`](/pt-BR/docs/Web/HTML/Element/Heading_Elements) em nosso aplicativo.

Suponha que quiséssemos conter nosso cabeçalho em uma tag [`<header>`](/pt-BR/docs/Web/HTML/Element/header), por razões semânticas? A aproximação em JSX permite-nos aninhar nossos elementos dentro uns dos outros, do mesmo jeito que fazemos com o HTML:

```js
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> **Nota:** Os parenteses no recorte de código anterior não são exclusivos ao JSX e não têm nenhum efeito na sua aplicação. Eles estão lá para sinalizar para você (e seu computador) que as múltiplas linhas de código dentro do mesmo são parte da mesma expressão. Você poderia muito bem escrever a expressão do cabeçalho do seguinte jeito:
>
> ```js
> const header = (
>   <header>
>     <h1>Mozilla Developer Network</h1>
>   </header>
> );
> ```
>
> Entretanto, isso é meio estranho, porquê a tag [`<header>`](/pt-BR/docs/Web/HTML/Element/header) que inicia a expressão não está alinhada na mesma posição que sua tag de fechamento correspondente.

Claro, seu navegador não é capaz de ler o JSX sem alguma ajuda. Quando compilado (utilizando uma ferramenta como [Babel](https://babeljs.io/) ou [Parcel](https://parceljs.org/)), nossa expressão de cabeçalho ficaria assim:

```js
const header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Mozilla Developer Network"),
);
```

É _possível_ pular o processo de compilação e utilizar [`React.createElement()`](https://reactjs.org/docs/react-api.html#createelement) para escrever sua UI você mesmo. Ao fazer isso, entretanto, você perde o benefício declarativo do JSX, e seu código torna-se mais difícil de ler. Compilação é um passo adicional no processo de desenvolvimento, porém muitos desenvolvedores na comunidade do React acham que a legibilidade do JSX vale a pena. Ainda mais, ferramentas populares fazem a parte de compilar JSX-para-JavaScript parte do próprio processo de configuração. Você não vai ter que configurar a compilação você mesmo, a não ser que você queira.

Por conta do JSX ser uma mistura de HTML e JavaScript, muitos desenvolvedores acham o JSX intuitivo. Outros dizem que a natureza mista torna o mesmo mais confuso. Entretanto, assim que você estiver confortável com o JSX, este irá permitir que você construa interfaces de usuários mais rapidamente e intuitivamente, e permitirá que outros melhor entendam seu código com apenas algumas olhadas.

Para ler mais sobre o JSX, confira este artigo do time do React, [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html).

## Configurando seu primeiro app React

Existem muitos jeitos de utilizar o React, mas nós iremos utilizar a ferramenta de interface de linha de comando (CLI), _create-react-app_, como mencionado anteriormente, que acelera o processo de desenvolvimento da aplicação em React instalando alguns pacotes e criando alguns arquivos para você, lidando com os processos de automação mencionados acima.

É possível [adicionar React á um website sem create-react-app](https://reactjs.org/docs/add-react-to-a-website.html) copiando alguns elementos [`<script>`](/pt-BR/docs/Web/HTML/Element/script) em um arquivo HTML, mas o a interface de linha de comando _create-react-app_ é um ponto de partida comum para aplicações em React. Utilizar-lo vai permitir que você passe mais tempo construindo seu aplicativo e menos tempo incomodando-se com configurações.

### Requisitos

Para começar a utilizar o _create-react-app,_ você precisa ter o [Node.js](https://nodejs.org/en/) instalado. É recomendado que você utilize a versão com suporte de longa data (LTS). _Node_ inclui o _npm_ (o gerenciador de pacotes node), e o _npx_ (o executador de pacotes do node).

Você também pode utilizar o gerenciador de pacotes _Yarn_ como uma alternativa, mas nós iremos assumir que você está utilizando o _npm_ para esta série de tutoriais. Veja [Gerenciador de pacotes - básico](/pt-BR/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) para mais informações sobre o _npm_ ou o _Yarn_.

Se você está utilizando o Windows, você vai precisar instalar alguns softwares adicionais para que você tenha as mesmas capacidades de um terminal Unix/macOS e utilizar os comandos de terminal que serão mencionados neste tutorial. **Gitbash** (que vem junto como parte do pacote de ferramentas [Git para o Windows](https://gitforwindows.org/)) ou o [subsistema Windows para Linux](https://docs.microsoft.com/en-us/windows/wsl/about) (**WSL**) ambos são adequados. Veja o [Curso intensivo - Linha de comando](/pt-BR/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)para mais informações sobre estes e sobre comandos de terminal no geral.

Mantenha em mente também que React e ReactDOM produzem aplicativos que funcionam apenas em navegadores consideravelmente modernos, IE9+ (Internet Explorer 9) com o auxílio de alguns [polyfills](<https://en.wikipedia.org/wiki/Polyfill_(programming)>). É recomendado que você utilize um navegador moderno com o Firefox, Safari, Chrome ou Edge enquanto estiver trabalhando nestes tutoriais.

Veja também os seguintes artigos para mais informações:

- ["O que é NPM" no NodeJS.org](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)
- ["Introdução ao NPX" no blog npm](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [Documentação do create-react-app](https://create-react-app.dev/)

### Inicializando seu app

O _create-react-app_ leva apenas um argumento: o nome que você quer dar ao seu aplicativo. _create-react-app_ utiliza este nome para criar uma nova pasta, e então cria os arquivos necessários para o funcionamento do seu aplicativo dentro desta pasta. Certifique-se de utilizar o comando `cd` até o local em seu computador que você deseja que seu aplicativo viva dentro de seu disco rígido, feito isso, utilize o seguinte comando em seu terminal:

```bash
npx create-react-app moz-todo-react
```

Isto criará a pasta `moz-todo-react`, e também faz mais algumas coisas dentro desta:

- Instala alguns pacotes _npm_ essenciais para a funcionalidade do app.
- Escreve scripts para iniciar e servir a aplicação.
- Cria a estrutura de arquivos e pastas que define a arquitetura básica do aplicativo.
- Inicializa o diretório como um _repositório git_, se você tem o _git_ instalado em seu computador.

> **Nota:** Se você tem o gerenciador de pacotes _Yarn_ instalado, _create-react-app_ vai utilizá-lo por padrão em vez de utilizar o _npm_. Se você tem ambos gerenciadores de pacotes instalados e explicitamente quer utilizar o NPM, você pode adicionar a opção `--use-npm` quando você executar o _create-react-app_:
>
> ```bash
> npx create-react-app moz-todo-react --use-npm
> ```

_create-react-app_ vai mostrar várias mensagens em seu terminal enquanto ele trabalha; isto é normal! Isso pode levar alguns minutos, agora pode ser uma boa hora para ir preparar uma xícara de chá.

Quando o processo finalizar, dê um `cd` para dentro da pasta `moz-todo-react` e execute o comando `npm start`. Os scripts instalados pelo _create-react-app_ vão começar a serem servidos em um servidor local, no endereço _localhost:3000,_ e abrirão o aplicativo em uma nova aba em seu navegador. Seu navegador vai mostrar algo como isto:

![Screenshot of Firefox MacOS, open to localhost:3000, showing the default create-react-app application](default-create-react-app.png)

### Estrutura da aplicação

_create-react-app_ dá para você tudo que você precisa para desenvolver uma aplicação React. A estrutura inicial do arquivo vai ficar assim:

```
moz-todo-react
├── README.md
├── node_modules
├── package.json
├── package-lock.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

A pasta `src` é onde nós iremos ficar a maior parte do nosso tempo, é onde o código fonte da nossa aplicação vive.

A pasta `public` contém arquivos que serão lidos pelo navegador enquanto você desenvolve o aplicativo; o mais importante de todos estes arquivos é o `index.html`. O React irá injetar seu código neste arquivo para que seu navegador possa executá-lo. Existem outras marcações que ajudam o _create-react-app_ a funcionar, então cuidado para não editar estas, a não ser que você saiba o que você está fazendo. Você é encorajado a mudar o texto dentro do elemento [`<title>`](/pt-BR/docs/Web/HTML/Element/title) neste arquivo, esta mudança irá refletir no título de sua aplicação. Títulos de páginas precisos são importante para acessibilidade!

A pasta `public` também será publicada quando você construir e lançar uma versão de produção de seu aplicativo. Nós não cobriremos _lançamento_ (deploy) de aplicações neste tutorial, entretanto você provavelmente conseguirá implementar uma solução similar para isso descrito em nosso tutorial [Lançando nosso app](/pt-BR/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment).

O arquivo `package.json` contém informações sobre o nosso projeto, dentre as quais, o nome do projeto e os pacotes instalados. O Node.js/npm usa esse aquivo para manter tudo organizado. O arquivo `package.json` não é exclusivo para aplicações em React; o _create-react-app_ simplesmente encarrega-se de criá-lo. Você não precisa entender este arquivo para completar este tutorial, entretanto, se você estiver interessado em aprender mais sobre este, você pode ler [O que é o arquivo 'package.json'? no NodeJS.org](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/); nós também falamos sobre ele no nosso tutorial [Básico sobre gerenciamento de pacotes.](/pt-BR/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)

## Explorando seu primeiro componente React — `<App/>`

No React, um **componente** é um módulo reutilizável que renderiza parte de nosso aplicativo. Estas partes podem ser grandes ou pequenas, mas elas geralmente são claramente definidas: elas servem um único propósito, um propósito óbvio.

Vamos o arquivo `src/App.js` dado que a mensagem exibida em nosso navegador está nos instigando a editá-lo. Esse arquivo contém nosso primeiro componente, `App`, e algumas outras linhas de código.

```jsx
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
```

O arquivo `App.js` consiste de três partes principais: algumas declarações de [`import`](/pt-BR/docs/Web/JavaScript/Reference/Statements/import) no topo, o componente `App` no meio, e uma declaração de [`export`](/pt-BR/docs/Web/JavaScript/Reference/Statements/export) na parte de baixo. A maioria dos componentes React segue este padrão.

### Declarações de _import_

As declaração de `import` no topo de nosso arquivo `App.js` nos permitem utilizar código que foi definido em outro lugar fora de nosso arquivo. Vamos dar uma olhada nestas declarações mais de perto.

```jsx
import React from "react";
import logo from "./logo.svg";
import "./App.css";
```

A primeira declaração importa a própria biblioteca React mesmo. Por conta do React transformar o JSX que nós escrevemos em declarações de `React.createElement()`, todos componentes React devem importar o módulo `React`. Se você pular este passo, sua aplicação irá resultar em um erro.

A segunda declaração importa um logo de `.'/logo.svg`. Note que o `./` no começo do caminho e a extensão `.svg` no final — estes nos falam que o arquivo é local e que não é um arquivo de JavaScript. De fato, o arquivo `logo.svg` vive em nossa pasta base.

Nós não escrevemos um caminho ou extensão quando importando o módulo `React` — este não é um arquivo local; em vez disso, este é listado como uma dependência em nosso arquivo `package.json`. Tome cuidado com esta distinção enquanto você trabalha nesta lição!

A terceira declaração importa o CSS relacionado ao nosso componente App. Note que não existe um nome de variável e também não há a diretriz `from`. Essa declaração de _import_ em particular não é nativa à sintaxe de módulos do Javascript — esta vem do _Webpack_, a ferramenta que o aplicativo _create-react-app_ utiliza para agrupar todos nosso arquivos de JavaScript e servi-los ao navegador.

### O componente `App`

Depois dos _imports,_ nós temos uma função chamada `App`. Enquanto a maior parte da nossa comunidade JavaScript prefere nomes utilizando o padrão _camel-case_ como `helloWorld`, os componentes React utilizam o padrão de formatação para variáveis em _pascal-case_, como `HelloWorld`, para ficar claro que um dado elemento JSX é um componente React e não apenas uma _tag_ de HTML comum. Se você mudasse o nome da função `App` para `app`o seu navegador iria mostrar um erro.

Vamos dar uma olhada em `App` mais de perto.

```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
```

A função `App` retrona uma expressão JSX. Essa expressão define o que, no fim, o seu navegador irá renderizar para o DOM.

Alguns elementos na expressão têm atributos, que são escritos assim como no HTML, seguindo o seguinte padrão de `atributo="valor"`. Na linha 3, a tag [`<div>`](/pt-BR/docs/Web/HTML/Element/div) de abertaura tem o atributo _`className`_. Isso é o mesmo que o atributo [`class`](/pt-BR/docs/Web/HTML/Global_attributes/class)no HTML, porém por conta do JSX ser Javascript, nós não podemos utilizar a palavra `class` — esta é reservada, isso quer dizer que o JavaScript já utiliza-a para um propósito específico e causaria problemas no nosso código inseri-lá aqui. Alguns outros atributos de HTML são escritos diferentes em JSX em comparação com o HTML, pela mesma razão. Nós falaremos sobre estes quando encontrarmos os mesmos.

Tome um momento para mudar a _tag_ [`<p>`](/pt-BR/docs/Web/HTML/Element/p) na linha 6 para que esta diga "Hello, world!", e então salve o arquivo. Você irá notar que esta mudança é imediatamente refletida e renderiza no servidor de desenvolvimento executando em `http://localhost:3000` em seu navegador. Agora delete a _tag_ [`<a>`](/pt-BR/docs/Web/HTML/Element/a) e salve; o link _"Learn React"_ vai desaparecer.

Seu componente `App` deve estar assim agora:

```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, World!</p>
      </header>
    </div>
  );
}
```

### Declarações _export_

Bem no final do seu arquivo `App.js`, a declaração `export default App` faz com que seu componente `App` esteja disponível para outros módulos.

## Interrogando o _index_

Vamos abrir `src/index.js`, porque é onde nosso componente `App` está sendo utilizado. Esse arquivo é o ponto de entrada para nosso aplicativo, e inicialmente parece-se assim:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

Assim como em `App.js`, o arquivo começa importando todos os módulos JS (JavaScript) e outros recursos que precisa executar. `src/index.css` contém os estilos globais (CSS) que são aplicados em todo nosso aplicativo. Nós podemos também ver nosso componente `App` importado aqui; este é disponibilizado para ser importado graças à declaração de `export` no final do nosso arquivo `App.js`.

A linha 7 invoca a função `ReactDOM.render()` com dois argumentos:

- O componente que queremos renderizar, `<App />` neste caso.
- O elemento do DOM que queremos que nosso componente seja renderizado dentro, neste caso é o elemento com o ID de `root`. Se você olhar dentro de `public/index.html`, você verá que existe um elemento `<div>` logo ali dentro do elemento `<body>`.

Tudo isso diz para o React que nós queremos renderizar nossa aplicação React como o componente `App` como a raíz do app, ou o primeiro componente.

> **Nota:** No JSX, componentes React e elementos HTML precisam ter barras de fechamento. Escrever apenas `<App>` ou apenas `<img>` irá causar um erro.

[Service Workers](/pt-BR/docs/Web/API/Service_Worker_API/Using_Service_Workers) são pedaços interessantes de código que ajudam na perfomance da aplicação e permitem a utilização de características de aplicações Web modernas, como o funcionamento _offline_, porém estes não estão no escopo deste artigo. Você pode deletar a linha 5, como também as linhas 9 até a 12.

Seu arquivo `index.js` final deve estar assim:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

## Variáveis e props

A seguir, nós usaremos algumas de nossas habilidades de JavaScript para ficarmos mais confortáveis editando componentes e trabalhando com dados no React. Nós falaremos sobre como variáveis são utilizadas dentro do JSX, introduziremos _props_, que são por si uma forma de passar dados para um componente (que então podem ser acessadas utilizando-se de variáveis).

### Variáveis no JSX

De volta ao `App.js` vamos focar na linha 9:

```js
<img src={logo} className="App-logo" alt="logo" />
```

Aqui, na _tag_`<img />` o atributo `src` está entre chaves ( { } ). É assim que o JSX reconhece variáveis. React irá ver `{logo}` e saberá que você está se referindo ao _import_ do logo, na linha 2 do nosso aplicativo, e então buscar o arquivo logo para renderizá-lo no navegador.

Vamos tentar fazer uma variável própria. Antes da declaração de _return_ de `App` adicione `const subject = 'React';`. Seu componente `App` deve estar assim agora:

```jsx
function App() {
  const subject = "React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, World!</p>
      </header>
    </div>
  );
}
```

Muda a linha 8 para usar a nossa variável `subject` em vez da palavra "world", desta forma:

```jsx
function App() {
  const subject = "React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, {subject}!</p>
      </header>
    </div>
  );
}
```

Quando você salvar, seu navegador deverá mostrar "Hello, React!", em vez de mostrar "Hello, world!"

Variáveis são convenientes, mas esta que nós definimos não faz jus aos ótimos recursos do React. É aí que entram as _props_.

### _props_ de Componentes

Uma **prop** é qualquer dado passado para um componente React. _Props_ são escritos dentro de invocações de componentes e utilizam a mesma sintaxe que atributos de HTML — `prop="valor"`. Vamos abrir o `index.js` e dar à nossa invocação do `<App/>` nossa primeira _prop_.

Adicione a _prop_ `subject` na invocação do componente `<App/>`, com o valor de `Clarice`. Quando você terminar, seu código deve estar assim:

```jsx
ReactDOM.render(<App subject="Clarice" />, document.getElementById("root"));
```

De volta ao `App.js`, vamos revisitar a própria função App, que é lida da seuginte forma (com a declaração de `return` encurtada, a fim de ser breve.)

```js
function App() {
  const subject = "React";
  return (
    // return statement
  );
}
```

Mude a definação da nossa função `App` para que aceite `props` como um parâmetro. Assim como qualquer outro parâmetro, você pode colocar `props` em um `console.log()` para ler o que este contém no console de seu navegador. Vá em frente e faça justamente isto depois da sua constante `subject` porém antes da sua declaração de `return`, da seguinte forma:

```js
function App(props) {
  const subject = "React";
  console.log(props);
  return (
    // return statement
  );
}
```

Salve seu arquivo e dê uma olhada no console do navegador. Você deve ver algo assim nos _logs_:

```js
Object { subject: "Clarice" }
```

A propriedade `subjet` deste objeto corresponde à _prop_ `subject` que nós adicionamos à nossa chamada do componente `<App />`, e a _string_ `Clarice` corresponde ao seu valor. _props_ de coponentes no React são sempre coletadas em objetos neste mesmo estilo.

Agora que `subjet` é uma de nossas _props_, vamos utilizá-la em `App.js`. Mude a constante `subject` para que, em vez de ler a string que diz `React`, você está lendo o valor de `props.subject`. Você também pode deletar o `console.log()`, se você quiser.

```js
function App(props) {
  const subject = props.subject;
  return (
    // return statement
  );
}
```

Quando você salvar o arquivo, o aplicativo agora deve dizer "Hello, Clarice!". Se você retornar ao `index.js`, editar o valor de `subject` e salvar, seu texto irá mudar.

## Sumário

Isto nos traz ao fim da nossa primeira olhada no React, incluindo como instalá-lo localmente, criando um aplicativo inicial e como o básico funciona. No próximo artigo nós começaremos a construir nossa primeira aplicação de verdade — uma lista de tarefas. Antes de fazermos isso, entretanto, vamos relembrar algumas coisas que aprendemos.

No React

- Componentes podem importar módulos que eles precisam e devem exportar a si mesmo no final de seus respectivos arquivos.
- Componentes em forma de função são nomeados com `PascalCase`.
- Você pode ler variáveis de JSX ao colocá-las entre chaves, da seguinte forma `{assim}`.
- Alguns atributos de JSX são diferente dos atributos de HTML, isto é feito para que eles não entrem em conflito com palavras reservadas do JavaScript. Por exemplo. `class` no HTML transforma-se em `className` no JSX. Note que atributos com múltiplas palavras são escritos no padrão de formatação _camel-case_.
- _Props_ são escritas bem como atributos dentro das invocações de componentes e são passadas para dentro de componentes.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
