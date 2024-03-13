---
title: Introdução Express/Node
slug: Learn/Server-side/Express_Nodejs/Introduction
---

{{LearnSidebar}}{{NextMenu("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs")}}

Neste primeiro artigo sobre Express responderemos as questões " O que é Node?" e "O que é Express?", além de dar a você uma visão geral sobre o que torna o Express um framework web tão especial. Vamos descrever as principais características e mostrar alguns dos principais blocos de códigos de construção de um aplicativo Express (embora neste momento você ainda não tenha um ambiente de desenvolvimento para testá-lo).

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimentos básicos em informática. Uma compreensão geral de
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/First_steps"
          >programação web no lado servidor (backend)</a
        >, em particular, nos mecanismos de
        <a
          href="/pt-BR/docs/Learn/Server-side/First_steps/Client-Server_overview"
          >interação cliente-servidor de websites</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivos:</th>
      <td>
        Familiarizar-se com Express, como este framework trabalha junto ao Node,
        quais as funcionalidades que fornece e quais são os principais blocos de
        construção de um aplicativo Express.
      </td>
    </tr>
  </tbody>
</table>

## O que é Express e Node ?

[Node](https://nodejs.org/) (ou formalmente _Node.js_) é um ambiente em tempo de execução open-source (código aberto) e multiplataforma que permite aos desenvolvedores criarem todo tipo de aplicativos e ferramentas do lado servidor (backend) em [JavaScript](/pt-BR/docs/Glossary/JavaScript). Node é usado fora do contexto de um navegador (ou seja executado diretamente no computador ou no servidor). Como tal, o ambiente omite APIs JavaScript específicas do navegador e adiciona suporte para APIs de sistema operacional mais tradicionais, incluindo bibliotecas de sistemas HTTP e arquivos.

Do ponto de vista do desenvolvimento de um servidor web, o Node possui vários benefícios:

- Performance excelente. Node foi projetado para otimizar a taxa de transferência e a escalabilidade em aplicações web. É uma ótima combinação para resolver muitos problemas comuns no desenvolvimento da web (por exemplo, aplicações em tempo real).
- O código é escrito em "JavaScript simples e antigo". Isso significa menos tempo gasto para lidar com mudanças de código entre navegador e servidor web, não sendo necessária uma mudança na linguagem.
- JavaScript é uma linguagem de programação relativamente nova e apresenta algumas vantagens quando comparadas a outras linguagens tradicionais de servidor (por exemplo Python, PHP, etc.). Muitas outras linguagens novas e populares compilam/convertem em JavaScript, permitindo que você também use essas linguagens, como TypeScript, CoffeeScript, ClosureScript, Scala, LiveScript, etc.
- O Gerenciador de Pacotes do Node (NPM, na sigla em inglês) provê acesso a centenas de milhares de pacotes reutiliváveis. NPM possui a melhor coleção de dependências e também pode ser usado para automatizar a maior parte da cadeia de ferramentas de compilação.
- É portátil, com versões para diferentes sistemas operacionais, como Microsoft Windows, OS X, Linux, Solaris, FreeBSD, OpenBSD, WebOS e NonStop. Além disso, tem excelente suporte de muitos provedores de hospedagem na web, que muitas vezes fornecem documentação e infraestrutura específica para hospedar sites desenvolvidos em Node.
- Possui uma comunidade de desenvolvedores e um ecossistema muito ativo, com muitas pessoas dispostas a ajudar.

Você pode utilizar o Node.js para criar um simples servidor web, utilizando o pacote Node HTTP.

### Olá, Node.js

O exemplo a seguir cria um servidor web que escuta qualquer tipo de requisição HTTP na URL `http://127.0.0.1:8000/` — quando uma requisição é recebida, o script vai responder com a string (texto) "Olá Mundo". Se você já instalou o Node, você pode seguir os passos seguintes deste exemplo.

1. Abre o Terminal (no Windows, abra o prompt da linha de comando)
2. Crie uma pasta onde você quer salvar o programa, por exemplo, `test-node`. Então, entre na pasta com o seguinte comando no terminal:

```
cd test-node
```

Use o seu editor de texto preferido, crie um arquivo chamado `hello.js` e cole o código a seguir:

```js
// Carrega o modulo HTTP do Node
var http = require("http");

// Cria um servidor HTTP e uma escuta de requisições para a porta 8000
http
  .createServer(function (request, response) {
    // Configura o cabeçalho da resposta com um status HTTP e um Tipo de Conteúdo
    response.writeHead(200, { "Content-Type": "text/plain" });

    // Manda o corpo da resposta "Olá Mundo"
    response.end("Olá Mundo\n");
  })
  .listen(8000, "127.0.0.1");

// Imprime no console a URL de acesso ao servidor
console.log("Servidor executando em http://127.0.0.1:8000/");
```

Salve o arquivo na pasta que você criou acima.

Por último, vá para o terminal e digite o comando a seguir:

`node hello.js`

Enfim, abra o browser e digite `http://localhost:8000`. Você verá o texto "**Olá, Mundo**", no canto superior esquerdo.

## Web Frameworks

Algumas tarefas comuns no desenvolvimento web não são suportadas diretamente pelo Node. Se você quiser que a sua aplicação possua diferentes verbos HTTP (por exemplo `GET`, `POST`, `DELETE`, etc), que gerencie requisições de diferentes URLs ("rotas"), apresente arquivos estáticos ou utilize templates para mostrar as respostas (response) de maneira dinâmica, você não terá muita praticidade usando apenas o Node. Você terá duas opções. Escrever o código por conta própria ou então evitar todo esse trabalho de reinventar a roda ao utilizar um framework.

## Introduzindo o Express

[Express](https://expressjs.com/) é o framework Node mais popular e a biblioteca subjacente para uma série de outros frameworks do Node. O Express oferece soluções para:

- Gerenciar requisições de diferentes verbos HTTP em diferentes URLs.
- Integrar "view engines" para inserir dados nos templates.
- Definir as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta.
- Adicionar novos processos de requisição por meio de "middleware" em qualquer ponto da "fila" de requisições.

O _Express_ é bastante minimalista, no entanto, os desenvolvedores têm liberdade para criar pacotes de middleware específicos com o objetivo de resolver problemas específicos que surgem no desenvolvimento de uma aplicação. Há bibliotecas para trabalhar com cookies, sessões, login de usuários, parâmetros de URL, dados em requisições POST, cabeçalho de segurança e tantos outros. Você pode achar uma lista de pacotes de middleware mantidos pela equipe Express em [Express Middleware](http://expressjs.com/en/resources/middleware.html) (juntamente com uma lista de pacotes populares desenvolvidos por terceiros).

> **Nota:** Essa flexibilidade do Express é uma espada de dois gumes. Há pacotes de middleware para resolver quase qualquer problema ou requisito ao longo do desenvolvimento, mas utilizar os pacotes corretos para cada situação às vezes se torna um grande desafio. Não há "caminho certo" para estruturar um aplicativo. Muitos exemplos que você encontra na Internet não são bons ou mostram apenas uma pequena parte do que você precisa fazer para desenvolver uma aplicação web.

## De onde o Node e o Express vieram?

Node foi inicialmente lançado em 2009, mas naquela época apenas para Linux. O gerenciador de pacotes NPM veio no ano seguinte, 2010, e o suporte nativo do Windows chegou em 2012. A versão atual do Long Term Support (LTS) é o Node v8.9.3, enquanto a versão mais recente é o Node 9. Esse é um resumo da rica histórica do Node, mas é possível conhecer mais na [Wikipédia](https://pt.wikipedia.org/wiki/Node.js#History).

O Express foi lançado em novembro de 2010 e atualmente está na versão 4.16 da API. Você pode verificar o [changelog](https://expressjs.com/en/changelog/4x.html) para obter informações sobre as mudanças na versão atual e o [GitHub](https://github.com/expressjs/express/blob/master/History.md) para obter notas detalhadas das versões históricas.

## O quão popular é Node/Express ?

É importante considerar a popularidade de um framework web porque indica se a ferramenta continuará sendo mantida e atualizada, além de apontar quais recursos provavelmente estarão disponíveis na documentação, nas bibliotecas de complemento e no suporte técnico.

Não há nenhum número capaz de medir precisamente a popularidade de um framework (apesar de que alguns sites como o [Hot Frameworks](http://hotframeworks.com/) avaliarem a popularidade a partir do número de projetos do GitHub e do número de perguntas do StackOverflow relativas a cada tecnologia). Diante dessa limitação, o mais importante é fazermos algumas outras perguntas para saber se o Node e o Express são "suficientemente populares" para não caírem nos problemas clássicos das tecnologias com pouca adesão da comunidade.

O Node e o Express continuam a evoluir ? Você pode obter ajuda na comunidade caso precise? Existe uma oportunidade para você receber trabalho remunerado ao dominar o Node e o Express ?

Baseado no [número de empresas de alto perfil](https://expressjs.com/en/resources/companies-using-express.html) que usam Express, no número de pessoas contribuindo para o código base, e no número de pessoas que oferecem suporte (gratuito ou pago), a reposta é sim. O Node e o Express são tecnologias populares!

## Express é opinativo ?

Os frameworks web costumam se autodeclararem "opinativos" ou "não opinativos".

Os frameworks opinativos são aqueles com "opiniões" sobre o "caminho certo" para lidar com qualquer tarefa específica. Muitas vezes, apoiam o desenvolvimento rápido em um domínio particular (resolvendo problemas de um tipo específico) porque a maneira correta de fazer qualquer coisa geralmente é bem compreendida e bem documentada. No entanto, são menos flexíveis na resolução de problemas fora de seu domínio principal e tendem a oferecer menos opções para quais componentes e abordagens podem usar nesses casos.

Frameworks não opinativos, por outro lado, têm muito menos restrições sobre a melhor maneira de utilizar componentes para atingir um objetivo, ou mesmo quais componentes devem ser usados. Eles tornam mais fácil para os desenvolvedores usar as ferramentas mais adequadas para completar uma tarefa específica, embora você precise encontrar esses componentes por si próprio.

Express é um framework não opinativo. Você pode inserir qualquer middleware que você goste no manuseio das solicitações em quase qualquer ordem que desejar. Pode estruturar o aplicativo em um arquivo ou em vários, usar qualquer estrutura de pastas dentro do diretório principal, etc.

## Como se parece o código do Express ?

Em um site tradicional baseado em dados, um aplicativo da Web aguarda pedidos HTTP do navegador da web (ou outro cliente). Quando um pedido é recebido, o aplicativo descreve quais ações são necessárias com base no padrão de URL e possivelmente informações associadas contidas em dados POST ou GET. Dependendo do que é necessário, pode-se ler ou escrever informações em um banco de dados ou executar outras tarefas necessárias para satisfazer a solicitação. O aplicativo retornará uma resposta ao navegador da Web, criando, de forma dinâmica, uma página HTML para o navegador, exibindo e inserindo os dados recuperados em espaços reservados em um modelo HTML.

Express fornece métodos para especificar qual função é chamada quando chega requisição HTTP (GET, POST, SET, etc.) e de rotas e métodos para especificar o mecanismo de modelo ("view") usado, onde o modelo arquivos estão localizados e qual modelo usar para renderizar uma resposta. Você pode usar o middleware Express para adicionar suporte para cookies, sessões e usuários, obtendo parâmetros POST / GET, etc. Você pode usar qualquer mecanismo de banco de dados suportado por Node (o Express não define nenhum comportamento relacionado a banco de dados).

As seções a seguir explicam algumas das coisas comuns que você verá ao trabalhar com o código Express e Node.

### Olá Mundo Express

Primeiro, considere o padrão do exemplo do Express [Olá Mundo](http://expressjs.com/pt-br/starter/hello-world.html) (discutiremos cada trecho do código nas seções abaixo e nas seções a seguir).

> **Nota:** **Dica:** Se você tiver o Node e o Express já instalados (ou se você os instalar como mostrado no [próximo artigo](/pt-BR/docs/Learn/Server-side/Express_Nodejs/development_environment), você pode salvar este código em um arquivo chamado **app.js** e executá-lo em um prompt, ao digitar o comando `node app.js`.

```js
var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Olá Mundo!");
});

app.listen(3000, function () {
  console.log("App de Exemplo escutando na porta 3000!");
});
```

As duas primeiras linhas `require()` importam o módulo Express e criam uma aplicação [Express](https://expressjs.com/en/4x/api.html#app). Esse objeto (tradicionalmente nomeado de `app`), tem métodos de roteamento de requisições HTTP, configurações de middleware, renderização de views HTML, registro de engines de templates e modificação das [configurações](https://expressjs.com/en/4x/api.html#app.settings.table) que controlam como o aplicativo se comporta (por exemplo, o modo de ambiente, se as definições de rota são sensíveis a maiúsculas e minúsculas, etc).

A parte do meio do código (as três linhas que começam com `app.get`) mostra uma definição de rota. O método `app.get()` especifica uma função de retorno de chamada que será invocada sempre que exista uma solicitação HTTP `GET` com um caminho (`'/'`) relativo à raiz do site. A função de retorno de chamada requer uma solicitação e um objeto de resposta como argumentos, e simplesmente chama [`send()`](https://expressjs.com/en/4x/api.html#res.send) na resposta para retornar a string "Olá Mundo!"

O bloco final inicia o servidor na porta '3000' e imprime um comentário de log no console. Com o servidor em execução, você pode acessar o `localhost:3000` em seu navegador para ver o exemplo de resposta retornado.

### Importando e criando módulos

Um módulo é uma biblioteca/arquivo de JavaScript que você pode importar para outro código usando a função `require()` do Node. Express por si é um módulo, assim como as bibliotecas de middleware e banco de dados que usamos em nossos aplicativos Express.

O código abaixo mostra como importamos um módulo por nome, usando o quadro Express como um exemplo. Primeiro invocamos a função `require()`, especificando o nome do módulo como uma string (`'express'`), e chamando o objeto retornado para criar um [aplicativo Express](https://expressjs.com/en/4x/api.html#app). Podemos então acessar as propriedades e funções do objeto da aplicação.

```js
var express = require("express");
var app = express();
```

Você também pode criar seus próprios módulos para serem importados da mesma maneira.

> **Nota:** **Dica:** Você vai _**querer**_ criar seus próprios módulos porque isso permite que você organize seu código em peças gerenciáveis - um aplicativo monolítico (de arquivo único) é difícil de entender e manter. O uso de módulos também ajuda você a gerenciar o namespace, pois somente as variáveis que você exporta explicitamente são importadas quando você usa um módulo.

Para tornar os objetos disponíveis fora do módulo, você precisa apenas atribuí-los ao objeto `exports`. Por Exemplo, o módulo **square.js** abaixo é um arquivo que exporta os métodos `area()` e `perimeter()`:

```js
exports.area = function (width) {
  return width * width;
};
exports.perimeter = function (width) {
  return 4 * width;
};
```

Nós podemos importar este módulo usando `require()`. Depois, conecte ao(s) método(s) exportado(s) como mostrado a seguir:

```js
var square = require("./square"); // Chamamos o arquivo utilizando o require()
console.log("The area of a square with a width of 4 is " + square.area(4));
```

> **Nota:** Você também pode especificar um caminho absoluto para o módulo (ou um nome, como fizemos inicialmente).

Se você deseja exportar um objeto completo em uma atribuição, em vez de criar uma propriedade de cada vez, atribua ao module.exports como mostrado abaixo (você também pode fazer isso para tornar a raiz do objeto exporter um construtor ou outra função):

```js
module.exports = {
  area: function (width) {
    return width * width;
  },

  perimeter: function (width) {
    return 4 * width;
  },
};
```

Para muitas outras informações sobre módulos veja [Módulos](https://nodejs.org/api/modules.html#modules_modules) (Node API docs).

### Usando APIs assíncronas

O código JavaScript frequentemente usa APIs assíncronas em vez de síncronas para operações que podem levar algum tempo para serem concluídas. Uma API síncrona é aquela em que cada operação deve ser concluída antes que a próxima operação seja iniciada. Por exemplo, as seguintes funções de log são síncronas e imprimirão o texto no console em ordem (Primeiro, Segundo).

```js
console.log("Primeiro");
console.log("Segundo");
```

Em contrapartida, uma API assíncrona é aquela em que a API iniciará uma operação e retornará imediatamente (antes da conclusão da operação). Assim que a operação terminar, a API usará algum mecanismo para executar operações adicionais. Por exemplo, o código abaixo imprimirá "Segundo, Primeiro". Isso porque, mesmo que o método `setTimeout()` seja chamado primeiro e retornae imediatamente, a operação precisa de três segundos para finalizar.

```js
setTimeout(function () {
  console.log("Primeiro");
}, 3000);
console.log("Segundo");
```

O uso de APIs assíncronas não bloqueadoras é ainda mais importante no Node do que no navegador, pois o Node é um ambiente de execução orientado por evento único (single threaded). "Single threaded" significa que todos os pedidos para o servidor são executados no mesmo tópico (em vez de serem gerados em processos separados). Esse modelo é extremamente eficiente em termos de velocidade e recursos do servidor, mas isso significa que, se qualquer uma das suas funções chamar métodos síncronos que demoram muito para completar, eles bloquearão não apenas a solicitação atual, mas todas as outras solicitações serão tratadas por sua aplicação web.

Há várias maneiras de uma API assíncrona notificar para a aplicação que alguma função chegou ao fim. A maneira mais comum é registrar uma função de retorno de chamada quando você invoca a API assíncrona, que será chamada de volta quando a operação for concluída. Usamos essa abordagem acima.

> **Nota:** **Dica:** O uso de callbacks pode ser bastante "bagunçado" se você tiver uma sequência de operações assíncronas dependentes que devem ser executadas em ordem, porque isto resulta em multiplo níveis de callbacks aninhados. Este problema é comumente conhecido como "inferno de callback" ou "código hadouken". Pode-se reduzir o problema ao adotar boas práticas de programação (veja <http://callbackhell.com/>), utilizar um módulo como [async](https://www.npmjs.com/package/async), ou mesmo adotar recursos do ES6, como [Promises](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise).

> **Nota:** **Dica:** Uma convenção comum para Node e Express é usar as devoluções de retorno de erro. Nesta convenção, o primeiro valor em suas funções de retorno de chamada é um valor de erro, enquanto os argumentos subseqüentes contêm dados de sucesso. Há uma boa explicação de por que essa abordagem é útil neste blog: [The Node.js Way - Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js) (fredkschott.com).

### Criando manipuladores de rotas

No nosso _Olá Mundo_ em Express (veja acima), nós definimos uma (callback) função manipuladora de rota para requisição `GET` HTTP para a raiz do site (`'/'`).

```js
app.get("/", function (req, res) {
  res.send("Olá Mundo");
});
```

A função de retorno de chamada requer uma solicitação e um objeto de resposta como argumento. Neste caso, o método simplesmente chama [`send()`](https://expressjs.com/en/4x/api.html#res.send) na resposta para retornar a string "Olá Mundo!" [Há uma série de outros métodos de resposta](https://expressjs.com/en/guide/routing.html#response-methods) para encerrar o ciclo de solicitação / resposta, por exemplo, você poderia chamar [`res.json()`](https://expressjs.com/en/4x/api.html#res.json) para enviar uma resposta JSON ou [`res.sendFile()`](https://expressjs.com/en/4x/api.html#res.sendFile) para enviar um arquivo.

> **Nota:** **Dica JavaScript:** Você pode usar qualquer argumento que você gosta nas funções de retorno de chamada. Quando o retorno de chamada é invocado, o primeiro argumento sempre será o pedido e o segundo sempre será a resposta. Faz sentido nomeá-los de tal forma que você possa identificar o objeto que você está trabalhando no corpo do retorno de chamada.

O Express também fornece métodos para definir manipuladores de rotas para todas as outras requisições HTTP, que são usadas exatamente da mesma maneira: `post()`, `put()`, `delete()`, `options()`, `trace()`, `copy()`, `lock()`, `mkcol()`, `move()`, `purge()`, `propfind()`, `proppatch()`, `unlock()`, `report()`, `mkactivity()`, `checkout()`, `merge()`, `m-search()`, `notify()`, `subscribe()`, `unsubscribe()`, `patch()`, `search()`, e `connect()`.

Há um método de roteamento especial, `app.all()`, que será chamado em resposta a qualquer método HTTP. É usado para carregar funções de middleware em um caminho específico para todos os métodos de solicitação. O exemplo a seguir (da documentação Express) mostra um manipulador que será executado para solicitações `/secret`, independentemente do verbo HTTP usado (desde que seja suportado pelo módulo http).

```js
app.all("/secret", function (req, res, next) {
  console.log("Acessando a sessão secreta...");
  next(); // passa o controle para o próximo manipulador
});
```

As rotas permitem combinar padrões de caracteres específicos em um URL e extrair alguns valores do URL e passá-los como parâmetros para o manipulador de rotas (como atributos do objeto de solicitação passado como parâmetro).

Muitas vezes, é útil agrupar manipuladores de rotas para uma determinada parte de um site e acessá-los usando um prefixo de rota comum (por exemplo, um site com um Wiki pode ter todas as rotas relacionadas ao wiki em um arquivo e tê-los acessado com um prefixo de rota de / wiki /). Em Express, isso é alcançado usando o objeto [`express.Router`](http://expressjs.com/en/guide/routing.html#express-router). Por exemplo, podemos criar nossa rota wiki em um módulo chamado wiki.js e, em seguida, exportar o objeto `Router`, conforme mostrado abaixo:

```js
// wiki.js - Rotas de Wiki

var express = require("express");
var router = express.Router();

// Home page route
router.get("/", function (req, res) {
  res.send("Wiki home page");
});

// About page route
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;
```

> **Nota:** Adicionar rotas ao objeto `Router` é como adicionar rotas ao objeto `app` (como mostrado anteriormente).

Para usar o roteador em nosso arquivo de aplicativo principal, então, `require()` o módulo de rota (**wiki.js**) e depois `use()` no aplicativo Express para adicionar o Router ao caminho de gerenciamento de middleware. As duas rotas serão acessíveis a partir de `/wiki/` e `/wiki/about/`.

```js
var wiki = require("./wiki.js");
// ...
app.use("/wiki", wiki);
```

Vamos mostrar-lhe muito mais sobre trabalhar com rotas e, em particular, sobre o uso do `Router`, mais tarde, na seção vinculada [Rotas e controladores](/pt-BR/docs/Learn/Server-side/Express_Nodejs/routes).

### Usando middleware

O Middleware é usado extensivamente em aplicativos Express para que as tarefas ofereçam arquivos estáticos ao tratamento de erros, a comprensão de respostas HTTP. Enquanto as funções de rota terminam o ciclo de solicitação-resposta HTTP, retornando alguma resposta ao cliente HTTP, as funções de middleware normalmente executam alguma operação na solicitação ou resposta e, em seguida, ligue para a próxima função na "pilha", que pode ser mais um middleware ou uma rota manipuladora. A ordem em que o middleware é chamado depende do desenvolvedor do aplicativo.

> **Nota:** O middleware pode executar qualquer operação, executar qualquer código, fazer alterações no objeto de solicitação e resposta, e também pode encerrar o ciclo de solicitação-resposta. Se não terminar o ciclo, ele deve chamar o `next()` para passar o controle para a próxima função de middleware (ou a solicitação ficará pendurada).

A maioria dos aplicativos usará middleware de terceiros para simplificar tarefas comuns de desenvolvimento web, como trabalhar com cookies, sessões, autenticação de usuários, acessar dados `POST` e JSON, log, etc. Você pode encontrar uma [lista de pacotes de middleware](http://expressjs.com/en/resources/middleware.html) mantidos pela equipe Express (que também inclui outros pacotes populares de terceiros). Outros pacotes Express estão disponíveis no gerenciador de pacotes do NPM.

Para usar middleware de terceiros, primeiro você precisa instalá-lo em seu aplicativo usando NPM. Por exemplo, para instalar o logger [morgan](http://expressjs.com/en/resources/middleware/morgan.html) HTTP, você faria isso:

```bash
npm install morgan
```

Você pode então chamar `use()` no objeto do aplicativo Express para adicionar o middleware à pilha:

```js
var express = require('express');
var logger = require('morgan');
var app = express();
app.use(logger('dev'));
...
```

> **Nota:** O middleware e as funções de roteamento são chamadas na ordem em que são declaradas. Para alguns middleware, a ordem é importante (por exemplo, se o middleware de sessão depende do middleware de cookies, então o manipulador de cookies deve ser adicionado primeiro). É quase sempre o caso em que o middleware é chamado antes de definir rotas, ou seus manipuladores de rotas não terão acesso à funcionalidade adicionada pelo seu middleware.

Você pode escrever suas próprias funções de middleware. É provável que você tenha que fazê-lo (somente para criar código de manipulação de erro). A única diferença entre uma função de middleware e um retorno de chamada de manipulador de rotas é que as funções de middleware têm um terceiro argumento `next`, que as funções de middleware devem chamar se não completam o ciclo de solicitação (quando a função de middleware é chamada, isso contém a próxima função que deve ser chamado).

Você pode adicionar uma função de middleware à cadeia de processamento com `app.use()` ou `app.add()`, dependendo se você deseja aplicar o middleware a todas as respostas ou a respostas com um verbo HTTP específico (`GET`, `POST`, etc. ). Você especifica rotas o mesmo em ambos os casos, embora a rota seja opcional ao chamar **app.use()**.

O exemplo abaixo mostra como você pode adicionar a função middleware usando ambos os métodos e com/sem rota.

```js
var express = require("express");
var app = express();

// Um exemplo de função middleware
var a_middleware_function = function (req, res, next) {
  // ... Executa alguma operação
  next(); // next() Chama o próximo middleware ou função de rotas
};

// Função adicionada com use() para todas rotas e requisições
app.use(a_middleware_function);

// Função adicionada com use() para uma rota específica
app.use("/someroute", a_middleware_function);

// função middleware adicionado para uma rota e requisição específica
app.get("/", a_middleware_function);

app.listen(3000);
```

> **Nota:** **Dica JavaScript:** Acima, declaramos a função de middleware separadamente e, em seguida, configuramos como retorno de chamada. Na nossa função anterior do operador de rotas, declaramos a função de retorno de chamada quando foi utilizada. Em JavaScript, ambas abordagens são válidas.

A documentação Express possui uma documentação excelente sobre como usar e escrever o middleware Express.

### Servindo arquivos estáticos

Você pode usar o middleware [express.static](http://expressjs.com/en/4x/api.html#express.static) para servir arquivos estáticos, incluindo suas imagens, CSS e JavaScript (`static()` é a única função de middleware que é realmente parte do Express). Por exemplo, você usaria a linha abaixo para exibir imagens, arquivos CSS e arquivos JavaScript de um diretório chamado 'public' no mesmo nível onde você chama o nó:

```js
app.use(express.static("public"));
```

Todos os arquivos no diretório público são atendidos adicionando o nome do arquivo (relativo ao diretório "público" base) ao URL base. Então, por exemplo:

```
http://localhost:3000/images/dog.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/about.html
```

Você pode chamar `static()` várias vezes para atender vários diretórios. Se um arquivo não puder ser encontrado por uma função de middleware, ele simplesmente será transmitido ao middleware subsequente (a ordem em que o middleware é chamado é baseada em sua ordem de declaração).

```js
app.use(express.static("public"));
app.use(express.static("media"));
```

Você também pode criar um prefixo virtual para seus URL estáticos, em vez de ter os arquivos adicionados ao URL base. Por exemplo, aqui [especificamos um caminho de montagem](http://expressjs.com/en/4x/api.html#app.use) para que os arquivos sejam carregados com o prefixo "/media":

```js
app.use("/media", express.static("public"));
```

Agora, você pode carregar os arquivos que estão no diretório `public` a partir do prefixo de caminho `/media`.

```
http://localhost:3000/media/images/dog.jpg
http://localhost:3000/media/video/cat.mp4
http://localhost:3000/media/cry.mp3
```

Para obter mais informações, consulte [Servindo arquivos estáticos no Express](<Serving static files in Express>).

### Erros de manipulação

Os erros são tratados por uma ou mais funções de middleware especiais que possuem quatro argumentos, em vez dos três habituais: `(err, req, res, next)`. Por exemplo:

```js
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

Isso pode retornar qualquer conteúdo exigido, mas deve ser chamado depois de todas as outras chamadas `app.use()` e rotas para que sejam o último middleware no processo de solicitação de pedidos!

Express vem com um manipulador de erros embutido, que cuida de todos os erros que podem ser encontrados no aplicativo. Essa função de middleware de gerenciamento de erros padrão é adicionada no final da pilha de funções do middleware. Se você passar um erro para `next()` e você não lidar com isso em um manipulador de erro, ele será tratado pelo manipulador de erros incorporado; o erro será gravado no cliente com o rastreamento da pilha.

> **Nota:** O rastreamento da pilha não está incluído no ambiente de produção. Para executá-lo no modo de produção, você precisa configurar a variável de ambiente `NODE_ENV` para `'production'`.

> **Nota:** HTTP404 e outros códigos de status de "erro" não são tratados como erros. Se você quiser lidar com isso, você pode adicionar uma função de middleware para fazê-lo. Para mais informações, consulte as [FAQ](http://expressjs.com/en/starter/faq.html#how-do-i-handle-404-responses).

Para obter mais informações, consulte [Gerenciamento de erros](http://expressjs.com/en/guide/error-handling.html) (Express docs).

### Usando Banco de Dados

Aplicativos Express podem usar qualquer mecanismo de banco de dados suportado pelo Node (o Express em si não define nenhum comportamento/requisitos adicionais específicos para gerenciamento de banco de dados). Existem muitas opções, incluindo PostgreSQL, MySQL, Redis, SQLite, MongoDB, etc.

Para usá-los, você deve primeiro instalar o driver do banco de dados usando NPM. Por exemplo, para instalar o driver para o popular NoSQL MongoDB você usaria o comando:

```bash
npm install mongodb
```

O próprio banco de dados pode ser instalado localmente ou em um servidor em nuvem. No seu código Express, você precisa do driver, conecte-se ao banco de dados e execute as operações criar, ler, atualizar e excluir (CRUD). O exemplo abaixo (da documentação Express) mostra como você pode encontrar registros de "mamíferos" usando MongoDB.

```js
var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/animals", function (err, db) {
  if (err) throw err;

  db.collection("mammals")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;

      console.log(result);
    });
});
```

Outra abordagem popular é acessar seu banco de dados indiretamente, através de um Object Relational Mapper ("ORM"). Nesta abordagem, você define seus dados como "objetos" ou "modelos" e o ORM mapeia estes para o formato de banco de dados subjacente. Esta abordagem tem o benefício de que, como desenvolvedor, você pode continuar a pensar em termos de objetos JavaScript, em vez de semântica de banco de dados, e que existe um local óbvio para realizar a validação e verificação de dados recebidos. Falaremos mais sobre bancos de dados em um artigo posterior.

Para obter mais informações, consulte [integração com banco de dados](https://expressjs.com/en/guide/database-integration.html) (documentos express).

### Renderizando dados (views)

Os mecanismos de modelo (referidos como "view engines" por Express) permitem que você especifique a estrutura de um documento de saída em um modelo, usando marcadores de posição para os dados que serão preenchidos quando uma página for gerada. Os modelos geralmente são usados para criar HTML, mas também podem criar outros tipos de documentos. Express tem suporte para uma série de [mecanismos de modelos](https://github.com/expressjs/express/wiki#template-engines), e há uma comparação útil dos motores mais populares aqui: [Comparing JavaScript Templating Engines: Jade, Mustache, Dust and More](https://strongloop.com/strongblog/compare-javascript-templates-jade-mustache-dust/).

No seu código de configurações do aplicativo você configurou o mecanismo do modelo para usar e o local onde Express deve procurar modelos usando as configurações 'visualizações' e 'visualizar mecanismos', conforme mostrado abaixo (você também terá que instalar o pacote que contém a biblioteca do modelo também !)

```js
var express = require("express");
var app = express();

//  Definir o diretório para conter os modelos ('views')
app.set("views", path.join(__dirname, "views"));

// Definir o motor de visualização para usar, neste caso 'some_template_engine_name'
app.set("view engine", "some_template_engine_name");
```

A aparência do modelo dependerá do mecanismo que você usa. Supondo que você tenha um arquivo de modelo chamado "índice. \<Template_extension>" que contenha espaços reservados para variáveis de dados denominadas 'título' e 'mensagem', você chamaria [`Response.render()`](http://expressjs.com/en/4x/api.html#res.render) em uma função de roteador de rotas para criar e enviar a resposta HTML :

```js
app.get("/", function (req, res) {
  res.render("index", { title: "About dogs", message: "Dogs rock!" });
});
```

Para obter mais informações, consulte [usando motores de modelo com Express](http://expressjs.com/en/guide/using-template-engines.html) (Express docs).

### Estrutura de Arquivos

Express não faz suposições em termos de estrutura ou quais os componentes que você usa. Rotas, visualizações, arquivos estáticos e outra lógica específica da aplicação podem viver em qualquer número de arquivos com qualquer estrutura de diretório. Embora seja perfeitamente possível ter todo o aplicativo Express em um único arquivo, geralmente faz sentido dividir seu aplicativo em arquivos com base em função (por exemplo, gerenciamento de contas, blogs, fóruns de discussão) e domínio de problema arquitetônico (por exemplo, modelo, exibição ou controlador se você está usando uma [arquitetura MVC](/pt-BR/docs/Web/Apps/Fundamentals/Modern_web_app_architecture/MVC_architecture)).

Em um tópico posterior, usaremos o Express Application Generator, que cria um esqueleto de aplicativo modular que podemos estender facilmente para criar aplicativos da web.

## Sumário

Parabéns, você completou o primeiro passo em sua viagem Express/Node! Agora você deve entender os principais benefícios do Express e Node, e aproximadamente o que as principais partes de um aplicativo Express podem ser (rotas, middleware, tratamento de erros e código de modelo). Por ser um framework não opinativo, o Express permite que você defina a maneira como essas partes e essas bibliotecas são integradas.

Claro que Express é deliberadamente uma estrutura de aplicativos web muito leve, tanto seu benefício e potencial vem de bibliotecas e recursos de terceiros. Examinaremos essa questão com mais detalhes nos próximos artigos. No artigo a seguir, vamos analisar a criação de um ambiente de desenvolvimento de Node, para que você possa começar a ver algum código Express em ação.

## Veja também

- [Venkat.R - Manage Multiple Node versions](https://medium.com/@ramsunvtech/manage-multiple-node-versions-e3245d5ede44)
- [Modules](https://nodejs.org/api/modules.html#modules_modules) (Node API docs)
- [Express](https://expressjs.com/) (home page)
- [Basic routing](http://expressjs.com/en/starter/basic-routing.html) (Express docs)
- [Routing guide](http://expressjs.com/en/guide/routing.html) (Express docs)
- [Using template engines with Express](http://expressjs.com/en/guide/using-template-engines.html) (Express docs)
- [Using middleware](https://expressjs.com/en/guide/using-middleware.html) (Express docs)
- [Writing middleware for use in Express apps](http://expressjs.com/en/guide/writing-middleware.html) (Express docs)
- [Database integration](https://expressjs.com/en/guide/database-integration.html) (Express docs)
- [Serving static files in Express](<Serving static files in Express>) (Express docs)
- [Error handling](http://expressjs.com/en/guide/error-handling.html) (Express docs)

{{NextMenu("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs")}}

## Próximos módulos

- [Introdução Express/Node](/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction) - Módulo Atual
- [Configurando um ambiente de desenvolvimento Node (Express)](/pt-BR/docs/Learn/Server-side/Express_Nodejs/development_environment)
- [Express Tutorial: The Local Library website](/pt-BR/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)
- [Express Tutorial Part 2: Criando um esqueleto de website](/pt-BR/docs/Learn/Server-side/Express_Nodejs/skeleton_website)
- [Express Tutorial Part 3: Utilizando Banco de Dados (com Mongoose)](/pt-BR/docs/Learn/Server-side/Express_Nodejs/mongoose)
- [Express Tutorial Part 4: Rotas e Controladores](/pt-BR/docs/Learn/Server-side/Express_Nodejs/routes)
- [Express Tutorial Part 5: Displaying library data](/pt-BR/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
- [Express Tutorial Part 6: Trabalhando com formulários](/pt-BR/docs/Learn/Server-side/Express_Nodejs/forms)
- [Express Tutorial Part 7: Deploying to production](/pt-BR/docs/Learn/Server-side/Express_Nodejs/deployment)
