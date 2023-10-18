---
title: Módulos JavaScript
slug: Web/JavaScript/Guide/Modules
---

{{JSSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

Este guia fornece tudo o que você precisa para começar com a sintaxe de módulo do JavaScript.

## Um background em módulos

Os programas JavaScript começaram muito pequenos - a maior parte do seu uso nos primeiros dias era para executar tarefas isoladas de script, fornecendo um pouco de interatividade às suas páginas da Web sempre que necessário, de modo que scripts grandes geralmente não eram necessários. Com o avanço rápido da tecnologia agora temos aplicativos completos sendo executados em navegadores com muito JavaScript, além de JavaScript ser usado em outros contextos ([Node.js](/pt-BR/docs/Glossary/Node.js), por exemplo).

Portanto, fez sentido nos últimos anos começar a pensar em fornecer mecanismos para dividir programas JavaScript em módulos separados que podem ser importados quando necessário. O Node.js possui essa capacidade há muito tempo e existem várias bibliotecas e estruturas JavaScript que permitem o uso do módulo (por exemplo, outros [CommonJS](https://en.wikipedia.org/wiki/CommonJS) e [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)-sistemas de módulos baseados em [RequireJS](https://requirejs.org/), e mais recentemente [Webpack](https://webpack.github.io/) e [Babel](https://babeljs.io/)).

A boa notícia é que os navegadores modernos começaram a dar suporte nativamente à funcionalidade do módulo, e é sobre isso que este artigo trata. Isso só pode ser uma coisa boa - os navegadores podem otimizar o carregamento de módulos, tornando-o mais eficiente do que ter que usar uma biblioteca e fazer todo esse processamento extra no lado do cliente e viagens de ida e volta extras.

## Suporte do navegador

O uso de módulos JavaScript nativos depende do{{JSxRef("Statements/import", "import")}} e {{JSxRef("Statements/export", "export")}} afirmações; estes são suportados nos navegadores da seguinte maneira:

### importa

{{Compat("javascript.statements.import")}}

### exporta

{{Compat("javascript.statements.export")}}

## Apresentando um exemplo

Para demonstrar o uso dos módulos, criamos um [conjunto simples de exemplos](https://github.com/mdn/js-examples/tree/master/module-examples) que você pode encontrar no GitHub. Estes exemplos demonstram um conjunto simples de módulos que criam um[`<canvas>`](/pt-BR/docs/Web/HTML/Element/canvas) em uma página da Web e desenhe (e relate informações sobre) formas diferentes na tela.

Estes são bastante triviais, mas foram mantidos deliberadamente simples para demonstrar claramente os módulos.

> **Nota:** **Nota: Se você deseja fazer o download dos exemplos e executá-los localmente, precisará executá-los por meio de um servidor da web local.**

## Exemplo de uma estrutura básica

No nosso primeiro exemplo (consulte [basic-modules](https://github.com/mdn/js-examples/tree/master/module-examples/basic-modules)) nós temos uma estrutura de arquivos da seguinte maneira:

```
index.html
main.js
modules/
    canvas.js
    square.js
```

> **Nota:** **Nota: Todos os exemplos neste guia têm basicamente a mesma estrutura; o exposto acima deve começar a ficar bem familiar.**

Os dois módulos do diretório modules são descritos abaixo:

- `canvas.js` — contém funções relacionadas à configuração da tela:

  - `create()` — cria uma tela com uma largura e altura especificadas dentro de um invólucro [`<div>`](/pt-BR/docs/Web/HTML/Element/div) com um ID especificado, que é anexado dentro de um elemento pai especificado. Retorna um objeto que contém o contexto 2D da tela e o ID do [wrapper](/pt-BR/docs/Glossario/Wrapper).
  - `createReportList()` — cria uma lista não ordenada anexada dentro de um elemento de wrapper especificado, que pode ser usado para gerar dados de relatório. Retorna o ID da lista.

- `square.js` — contém:

  - `name` — uma constante contendo a string 'square'.
  - `draw()` — desenha um quadrado em uma tela especificada, com um tamanho, posição e cor especificados. Retorna um objeto que contém o tamanho, a posição e a cor do quadrado.
  - `reportArea()` — grava a área de um quadrado em uma lista de relatórios específica, considerando seu tamanho.
  - `reportPerimeter()` — grava o perímetro de um quadrado em uma lista de relatórios específica, considerando seu comprimento.

## Aside — `.mjs` versus `.js`

Neste artigo, usamos extensões .js para nossos arquivos de módulo, mas em outros recursos você pode ver a extensão .mjs usada. [A documentação da V8 recomenda isso](https://v8.dev/features/modules#mjs), por exemplo. Os motivos apresentados são:

- É bom para maior clareza, ou seja, deixa claro quais arquivos são módulos e quais são JavaScript regulares.
- Ele garante que seus arquivos de módulo sejam analisados como um módulo por tempos de execução, como [Node.js](https://nodejs.org/api/esm.html#esm_enabling), e construir ferramentas como [Babel](https://babeljs.io/docs/en/options#sourcetype).

No entanto, decidimos continuar usando .js, pelo menos por enquanto. Para que os módulos funcionem corretamente em um navegador, você precisa garantir que seu servidor os esteja servindo com um cabeçalho Content-Type que contenha um tipo MIME JavaScript, como text / javascript. Caso contrário, você receberá um erro estrito de verificação do tipo MIME, de acordo com as linhas "O servidor respondeu com um tipo MIME não JavaScript" e o navegador não executará seu JavaScript. A maioria dos servidores já define o tipo correto para arquivos .js, mas ainda não para arquivos .mjs. Servidores que já veiculam arquivos .mjs incluem corretamente [GitHub Pages](https://pages.github.com/) e [`http-server`](https://github.com/http-party/http-server#readme) para Node.js.

Tudo bem se você já estiver usando esse ambiente ou se não estiver, mas souber o que está fazendo e tiver acesso (ou seja, você pode configurar o servidor para definir a configuração correta [`Content-Type`](/pt-BR/docs/Web/HTTP/Headers/Content-Type) para arquivos `.mjs`). No entanto, isso pode causar confusão se você não controlar o servidor do qual está servindo arquivos ou publicar arquivos para uso público, como estamos aqui.

Para fins de aprendizado e portabilidade, decidimos manter o`.js`.

Se você realmente valoriza a clareza de usar .mjs para módulos versus usar .js para arquivos JavaScript "normais", mas não deseja se deparar com o problema descrito acima, sempre poderá usar .mjs durante o desenvolvimento e convertê-los em .js durante sua etapa de construção.

Também é importante notar que:

- Algumas ferramentas podem nunca suportar .mjs, como[TypeScript](https://www.typescriptlang.org/).
- O atributo `<script type="module">`é usado para indicar quando um módulo está sendo apontado, como você verá abaixo.

## Exportando recursos do módulo

A primeira coisa que você faz para obter acesso aos recursos do módulo é exportá-los. Isso é feito usando o {{JSxRef("Statements/export", "export")}} declaração.

A maneira mais fácil de usá-lo é colocá-lo na frente de qualquer item que você queira exportar para fora do módulo, por exemplo:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color,
  };
}
```

Você pode exportar funções, `var`, `let`, `const`, e — como veremos mais tarde - classes. Eles precisam ser itens de nível superior; você não pode usar a exportação dentro de uma função, por exemplo.

Uma maneira mais conveniente de exportar todos os itens que você deseja exportar é usar uma única instrução de exportação no final do arquivo do módulo, seguida por uma lista separada por vírgula dos recursos que você deseja exportar envoltos em chaves. Por exemplo:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importando recursos para o seu script

Depois de exportar alguns recursos do seu módulo, é necessário importá-los para o script para poder usá-los. A maneira mais simples de fazer isso é a seguinte:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Você usa o {{JSxRef("Statements/import", "import")}} , seguida por uma lista separada por vírgula dos recursos que você deseja importar agrupados em chaves, seguidos pela palavra-chave de, seguida pelo caminho para o arquivo do módulo - um caminho relativo à raiz do site, que para nossa `basic-modules` exemplo seria`/js-examples/modules/basic-modules`.

No entanto, escrevemos o caminho de maneira um pouco diferente - estamos usando a sintaxe de ponto (.) Para significar "o local atual", seguido pelo caminho além do arquivo que estamos tentando encontrar. Isso é muito melhor do que escrever todo o caminho relativo a cada vez, pois é mais curto e torna o URL portátil - o exemplo ainda funcionará se você o mover para um local diferente na hierarquia do site.

Então, por exemplo:

```
/js-examples/modules/basic-modules/modules/square.js
```

torna-se

```
./modules/square.js
```

Você pode ver essas linhas em ação em [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/basic-modules/main.js).

> **Nota:** **Nota: Em alguns sistemas de módulos, você pode omitir a extensão do arquivo e o ponto**(e.g. `'/modules/square'`). Isso não funciona nos módulos JavaScript nativos.

Depois de importar os recursos para o seu script, você pode usá-los exatamente como eles foram definidos no mesmo arquivo. O seguinte é encontrado em
`main.js`, abaixo das linhas de importação:

```js
let myCanvas = create("myCanvas", document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> **Nota:** **Nota: Embora os recursos importados estejam disponíveis no arquivo, eles são visualizações somente leitura do recurso que foi exportado. Você não pode alterar a variável importada, mas ainda pode modificar propriedades semelhantes à const. Além disso, esses recursos são importados como ligações ativas, o que significa que eles podem mudar de valor mesmo que você não possa modificar a ligação ao contrário de const.**

## Aplicando o módulo ao seu HTML

Agora, apenas precisamos aplicar o módulo main.js. à nossa página HTML. Isso é muito semelhante ao modo como aplicamos um script regular a uma página, com algumas diferenças notáveis.

Primeiro de tudo, você precisa incluir `type="module"` no [`<script>`](/pt-BR/docs/Web/HTML/Element/script) elemento, para declarar esse script como um módulo. Para importar o `main.js` script, usamos este:

```html
<script type="module" src="main.js"></script>
```

Você também pode incorporar o script do módulo diretamente no arquivo HTML, colocando o código JavaScript no corpo do elemento \<script>:

```js
<script type="module">/* JavaScript module code here */</script>
```

O script para o qual você importa os recursos do módulo atua basicamente como o módulo de nível superior. Se você o omitir, o Firefox, por exemplo, exibirá um erro "SyntaxError: as declarações de importação podem aparecer apenas no nível superior de um módulo".

Você só pode usar `import` e `export` instruções dentro de módulos, não scripts regulares.

## Outras diferenças entre módulos e scripts padrão

- Você precisa prestar atenção nos testes locais - se você tentar carregar o arquivo HTML localmente (i.e. com um arquivo`://` URL), você encontrará erros do CORS devido a requisitos de segurança do módulo JavaScript. Você precisa fazer seus testes através de um servidor.
- Além disso, observe que você pode obter um comportamento diferente das seções de script definidas dentro dos módulos e não nos scripts padrão. Isso ocorre porque os módulos usam {{JSxRef("Strict_mode", "strict mode", "", 1)}} automaticamente.
- Não há necessidade de usar o atributo deferir (consulte [`<script>` attributes](/pt-BR/docs/Web/HTML/Element/script#Attributes)) ao carregar um script de módulo; módulos são adiados automaticamente.
- Os módulos são executados apenas uma vez, mesmo que tenham sido referenciados em várias tags \<script>.
- Por último, mas não menos importante, vamos esclarecer: os recursos do módulo são importados para o escopo de um único script - eles não estão disponíveis no escopo global. Portanto, você poderá acessar apenas os recursos importados no script para o qual eles foram importados e não poderá acessá-los no console JavaScript, por exemplo. Você ainda receberá erros de sintaxe mostrados no DevTools, mas não poderá usar algumas das técnicas de depuração que você esperava usar.

## Exportações padrão versus exportações nomeadas

A funcionalidade que exportamos até agora foi composta por **named exports** — cada item (seja uma função, const, etc.) foi referido por seu nome na exportação e esse nome também foi usado para se referir a ele na importação.

Há também um tipo de exportação chamado **default export** — isso foi projetado para facilitar a função padrão fornecida por um módulo e também ajuda os módulos JavaScript a interoperar com os sistemas de módulos CommonJS e AMD existentes (conforme explicado em [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) por Jason Orendorff; procure por "Exportações padrão").

Vejamos um exemplo ao explicar como ele funciona. Nos nossos módulos básicos `square.js` você pode encontrar uma função chamada `randomSquare()` que cria um quadrado com cor, tamanho e posição aleatórios. Queremos exportar isso como padrão, portanto, na parte inferior do arquivo, escrevemos isso:

```js
export default randomSquare;
```

Note a falta dos colchetes.

Em vez disso, poderíamos acrescentar `export default` na função e defina-a como uma função anônima, assim:

```js
export default function(ctx) {
  ...
}
```

No nosso arquivo main.js., importamos a função padrão usando esta linha:

```js
import randomSquare from "./modules/square.js";
```

Isso ocorre porque há apenas uma exportação padrão permitida por módulo e sabemos que _randomSquare_ é isso.

```js
import { default as randomSquare } from "./modules/square.js";
```

> **Nota:** **Nota: A sintaxe as para renomear itens exportados é explicada abaixo no** [Renaming imports and exports](#Renaming_imports_and_exports) seção.

## Evitando conflitos de nomenclatura

Até agora, nossos módulos de desenho de forma de tela parecem estar funcionando bem. Mas o que acontece se tentarmos adicionar um módulo que lide com o desenho de outra forma, como um círculo ou triângulo? Essas formas provavelmente teriam funções associadas, como `draw()`, `reportArea()`, etc. também; se tentássemos importar diferentes funções com o mesmo nome para o mesmo arquivo de módulo de nível superior, acabaríamos com conflitos e erros.

Felizmente, existem várias maneiras de contornar isso. Veremos isso nas próximas seções.

## Renomeando importações e exportações

Dentro dos colchetes da instrução de importação e exportação, você pode usar a palavra-chave junto com um novo nome de recurso, para alterar o nome de identificação que será usado para um recurso dentro do módulo de nível superior.

Por exemplo, os dois itens a seguir executariam o mesmo trabalho, embora de uma maneira ligeiramente diferente:

```js
// inside module.js
export { function1 as newFunctionName, function2 as anotherNewFunctionName };

// inside main.js
import { newFunctionName, anotherNewFunctionName } from "./modules/module.js";
```

```js
// inside module.js
export { function1, function2 };

// inside main.js
import {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName,
} from "./modules/module.js";
```

Vejamos um exemplo real. Na nossa [renaming](https://github.com/mdn/js-examples/tree/master/module-examples/renaming) diretório, você verá o mesmo sistema de módulos do exemplo anterior, exceto que adicionamos `circle.js` e `triangle.js` módulos para desenhar e relatar círculos e triângulos.

Dentro de cada um desses módulos, temos recursos com os mesmos nomes sendo exportados e, portanto, cada um tem o mesmo `export` declaração na parte inferior:

```js
export { name, draw, reportArea, reportPerimeter };
```

Ao importá-los para o main.js, se tentarmos usar

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

O navegador geraria um erro como "SyntaxError: redeclaration of import name" (Firefox).

Em vez disso, precisamos renomear as importações para que sejam únicas:

```js
import {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
} from "./modules/square.js";

import {
  name as circleName,
  draw as drawCircle,
  reportArea as reportCircleArea,
  reportPerimeter as reportCirclePerimeter,
} from "./modules/circle.js";

import {
  name as triangleName,
  draw as drawTriangle,
  reportArea as reportTriangleArea,
  reportPerimeter as reportTrianglePerimeter,
} from "./modules/triangle.js";
```

Observe que você pode resolver o problema nos arquivos do módulo, e.g.

```js
// in square.js
export {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
};
```

```js
// in main.js
import {
  squareName,
  drawSquare,
  reportSquareArea,
  reportSquarePerimeter,
} from "./modules/square.js";
```

E funcionaria da mesma forma. Qual o estilo que você usa depende de você, no entanto, sem dúvida faz mais sentido deixar o código do módulo em paz e fazer as alterações nas importações. Isso faz especialmente sentido quando você está importando de módulos de terceiros sobre os quais você não tem controle.

24/5000

Criando um objeto de módulo

O método acima funciona bem, mas é um pouco confuso e longo. Uma solução ainda melhor é importar os recursos de cada módulo dentro de um objeto de módulo. O seguinte formulário de sintaxe faz isso:

```js
import * as Module from "./modules/module.js";
```

Isso captura todas as exportações disponíveis no module.js e as torna disponíveis como membros de um objeto `Module`, efetivamente dando o seu próprio namespace. Então, por exemplo:

```js
Module.function1()
Module.function2()
etc.
```

Novamente, vejamos um exemplo real. Se você for ao nosso [module-objects](https://github.com/mdn/js-examples/tree/master/module-examples/module-objects) diretório, você verá o mesmo exemplo novamente, mas reescrito para aproveitar essa nova sintaxe. Nos módulos, as exportações são todas da seguinte forma simples:

```js
export { name, draw, reportArea, reportPerimeter };
```

As importações, por outro lado, são assim:

```js
import * as Canvas from "./modules/canvas.js";

import * as Square from "./modules/square.js";
import * as Circle from "./modules/circle.js";
import * as Triangle from "./modules/triangle.js";
```

Em cada caso, agora você pode acessar as importações do módulo abaixo do nome do objeto especificado, por exemplo:

```js
let square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

Agora você pode escrever o código da mesma forma que antes (contanto que inclua os nomes dos objetos quando necessário) e as importações sejam muito mais limpas.

## Módulos e classes

Como sugerimos anteriormente, você também pode exportar e importar classes; essa é outra opção para evitar conflitos no seu código e é especialmente útil se você já tiver o código do módulo gravado em um estilo orientado a objetos.

Você pode ver um exemplo do nosso módulo de desenho de forma reescrito com as classes ES em nosso [classes](https://github.com/mdn/js-examples/tree/master/module-examples/classes) diretório. Como exemplo, o [`square.js`](https://github.com/mdn/js-examples/blob/master/module-examples/classes/modules/square.js) O arquivo agora contém todas as suas funcionalidades em uma única classe:

```js
class Square {
  constructor(ctx, listId, length, x, y, color) {
    ...
  }

  draw() {
    ...
  }

  ...
}
```

que exportamos então:

```js
export { Square };
```

No main.js, nós o importamos assim:

```js
import { Square } from "./modules/square.js";
```

E então use a classe para desenhar nosso quadrado:

```js
let square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square1.draw();
square1.reportArea();
square1.reportPerimeter();
```

## Módulos de agregação

Haverá momentos em que você desejará agregar módulos. Você pode ter vários níveis de dependências, nos quais deseja simplificar as coisas, combinando vários submódulos em um módulo pai. Isso é possível usando a sintaxe de exportação dos seguintes formulários no módulo pai:

```js
export * from "x.js";
export { name } from "x.js";
```

Por exemplo, veja nosso [module-aggregation](https://github.com/mdn/js-examples/tree/master/module-examples/module-aggregation) diretório. Neste exemplo (com base no exemplo de classes anteriores), temos um módulo extra chamado shapes.js, que agrega toda a funcionalidade de circle.js, square.js e triangle.js juntos. Também movemos nossos submódulos para dentro de um subdiretório dentro do diretório modules chamado shapes. Portanto, a estrutura do módulo neste exemplo é:

```
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

Em cada um dos submódulos, a exportação é da mesma forma, e.g.

```js
export { Square };
```

Em seguida, vem a parte de agregação. Dentro de shapes.js, incluímos as seguintes linhas:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Eles capturam as exportações dos submódulos individuais e os disponibilizam efetivamente no módulo shapes.js.

> **Nota:** **Nota: As exportações mencionadas no shapes.js são basicamente redirecionadas pelo arquivo e realmente não existem nele, portanto, você não poderá escrever nenhum código relacionado útil dentro do mesmo arquivo.**

Portanto, agora no arquivo main.js., podemos obter acesso às três classes de módulos substituindo

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

com a seguinte linha única:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Carregamento dinâmico do módulo

A parte mais recente da funcionalidade dos módulos JavaScript a estar disponível nos navegadores é o carregamento dinâmico de módulos. Isso permite que você carregue módulos dinamicamente somente quando eles forem necessários, em vez de precisar carregar tudo antecipadamente. Isso tem algumas vantagens óbvias de desempenho; vamos ler e ver como isso funciona.

Essa nova funcionalidade permite que você ligue {{JSxRef("Statements/import", "import()", "#Dynamic_Imports")}} como uma função, passando o caminho para o módulo como um parâmetro. Retorna um{{JSxRef("Promise")}}, que cumpre com um objeto de módulo (consulte [Creating a module object](#Creating_a_module_object)) dando acesso às exportações desse objeto, e.g.

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

Vejamos um exemplo. No [dynamic-module-imports](https://github.com/mdn/js-examples/tree/master/module-examples/dynamic-module-imports) diretório, temos outro exemplo baseado em nosso exemplo de classes. Desta vez, no entanto, não estamos desenhando nada na tela quando o exemplo é carregado. Em vez disso, incluímos trêsbuttons — "Circle", "Square", e "Triangle" — que, quando pressionado, carrega dinamicamente o módulo necessário e, em seguida, usa-o para desenhar os shape.

Neste exemplo, fizemos apenas alterações em nossa [`index.html`](https://github.com/mdn/js-examples/blob/master/module-examples/dynamic-module-imports/index.html) e [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/dynamic-module-imports/main.mjs) arquivos - as exportações do módulo permanecem as mesmas de antes.

No main.js, pegamos uma referência a cada botão usando um[`Document.querySelector()`](/pt-BR/docs/Web/API/Document/querySelector) chamada, por exemplo:

```js
let squareBtn = document.querySelector(".square");
```

Em seguida, anexamos um ouvinte de evento a cada botão para que, quando pressionado, o módulo relevante seja carregado dinamicamente e usado para desenhar a forma(shape):

```js
squareBtn.addEventListener("click", () => {
  import("./modules/square.js").then((Module) => {
    let square1 = new Module.Square(
      myCanvas.ctx,
      myCanvas.listId,
      50,
      50,
      100,
      "blue",
    );
    square1.draw();
    square1.reportArea();
    square1.reportPerimeter();
  });
});
```

Observe que, como o cumprimento da promessa retorna um objeto de módulo, a classe é então transformada em uma sub-característica do objeto, portanto, agora precisamos acessar o construtor com `Module.` anexado a ele, e.g. `Module.Square( ... )`.

## Solução de problemas

Aqui estão algumas dicas que podem ajudá-lo se você estiver com problemas para fazer seus módulos funcionarem. Sinta-se livre para adicionar à lista se descobrir mais!

- Mencionamos isso antes, mas para reiterar: arquivos`.js` precisa ser carregado com um tipo MIME de `text/javascript` (ou outro tipo MIME compatível com JavaScript, mas `text/javascript` é recomendável), caso contrário, você receberá um erro estrito de verificação do tipo MIME como "O servidor respondeu com um tipo MIME não JavaScript".
- Se você tentar carregar o arquivo HTML localmente (i.e. com um arquivo`://` URL), você encontrará erros do CORS devido a requisitos de segurança do módulo JavaScript. Você precisa fazer seus testes através de um servidor. As páginas do GitHub são ideais, pois também servem arquivos .js com o tipo MIME correto.
- Como .mjs é uma extensão de arquivo não padrão, alguns sistemas operacionais podem não reconhecê-lo ou tentar substituí-lo por outra. Por exemplo, descobrimos que o macOS estava adicionando silenciosamente .js ao final dos arquivos .mjs e ocultando automaticamente a extensão do arquivo. Então, todos os nossos arquivos foram lançados como x.mjs.js. Depois de desativarmos ocultar automaticamente as extensões de arquivo e treiná-lo para aceitar .mjs, tudo bem.

## Veja também

- [Using JavaScript modules on the web](https://developers.google.com/web/fundamentals/primers/modules#mjs), por Addy Osmani e Mathias Bynens
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), Postagem no blog Hacks por Lin Clark
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Publicação de blog de Hacks por Jason Orendorff
- Livro de Axel Rauschmayer [Exploring JS: Modules](http://exploringjs.com/es6/ch_modules.html)

{{Previous("Web/JavaScript/Guide/Meta_programming")}}
