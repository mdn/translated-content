---
title: JSON
slug: Glossary/JSON
translation_of: Glossary/JSON
original_slug: JSON
---
**JSON** (Notação de Objetos JavaScript) e um formato de dados permutável. Ele assemelha - se próximo a um sub tipo da sintaxe do [JavaScript](/pt-BR/docs/Trash/MDN/JavaScript/About_JavaScript), mas ele não é um tipo de script. (Veja [JSON](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON) em [Referências JavaScript](/en/JavaScript/Reference) para todos os detalhes). Isto é útil quando escrevemos qualquer tipo de aplicação baseada em JavaScript, incluindo web sites e extensões de navegadores. Por exemplo, você pode armazenar informações no formato em JSON no formato de [cookies](/en/DOM/document.cookie), ou você pode armazenar as preferências de extensões em JSON como valor de texto nas preferências do navegador.

JSON e capaz de representar números, booleanos, textos, vazios, e listas (sequência ordenada de valores) e objetos (mapeamento de valores de texto) composto por estes valores (ou por outras listas e objetos). Ele não representa nativamente tipos complexos de dados como funções, expressões regulares, datas, e muito mais. (Objetos de dados por padrão inicializam como texto contendo os dados no formato ISO, enquanto eles não mudam, a informação não é completamente perdida.) Se você precisa preservar muitos valores, você pode transformar valores como eles são inicializados, ou prioritariamente descontinuados, para habilitar JSON para representar tipos de dados adicionais.

## Documentação

- [Objetos JSON](/en/JavaScript/Reference/Global_Objects/JSON)
  - : Os objetos JSON contém métodos para converter valores para Notação de objetos javascript (JSON) e para converter JSON para valores.
- [Usando o JSON nativo](/en/Using_native_JSON)
  - : Este artigo cobre o ECMAScript 5 compilando a linguagem nativa JSON somado em Gecko 1.9.1.
- [Caminho JSON](/en/JSON/JSONPath)
  - : Caminho JSON significa o uso XPath como sintaxe para a estrutura de requisições do JSON. Ele não é o padrão, mas apresenta maneiras de requisição em JavaScript diretamente sem precisar converte - la para xml.
- [Baixando JSON e extensões em Javascript](/en/Downloading_JSON_and_JavaScript_in_extensions)
  - : A pratica habitual encontrada em muitas extensões está usando XMLHttpRequest (ou outros mecanismos) para baixar Javascript ou [JSON](/en/JSON) (eles são diferentes) para um site web remoto. Uma vez o conteúdo já sido baixado, a extensão escrita procedida pelo uso [eval()](/en/Core_JavaScript_1.5_Reference/Functions/eval) para decodificar o texto contendo objetos JavaScript, a escolha e uma prática perigosa e não deve, de fato passar na revisão [AMO.](http://addons.mozilla.org) Este artigo mostra como evitar isto.
- [JXON](/en/JXON)
  - : JXON padrões sem perdas de Notação de Objetos JavaScript XML, ele é um nome genérico pelo qual e definida a representação da árvore dos objetos JavaScript (JSON) usando XML.
- [`Método JSON.stringify`](/en/JavaScript/Reference/Global_Objects/JSON/stringify)
  - : Converta valores para JSON, opcionalmente substituindo valores se a função for específica, ou opcionalmente incluindo somente propriedades especificas se a substituição na lista for especifica.
- [`Método JSON.parse`](/en/JavaScript/Reference/Global_Objects/JSON/parse)
  - : Analisa a string como JSON, opcionalmente transforma o valor produzido pela análise.

## Comunidade

- Veja os foruns Mozilla...
- {{DiscussionList("dev-tech-json","mozilla.dev.tech.json") }}

## Ferramentas

- [JSON polyfills](/en/JavaScript/Reference/Global_Objects/JSON#Browser_compatibility)
- [JSONSelect](http://jsonselect.org)

## Topicos Relacionados

- [AJAX](/en/AJAX),
- [JavaScript](/en/JavaScript),
- [XUL](/en/XUL)

## Usando JSON atráves de objetos JavaScript JSON

O mais simples, fácil caminho para usar JSON e através do padrão de [objetos JSON](/en/JavaScript/Reference/Global_Objects/JSON) em JavaScript. Use [JSON.stringify](/en/JavaScript/Reference/Global_Objects/JSON/stringify) para inicializar valores em JSON, e use [JSON.parse](/en/JavaScript/Reference/Global_Objects/JSON/parse) para deserializar um valor JSON.

Por exemplo, para inicializar um objeto JavaScript, use o método JSON.stringify():

```js
var foo = {};
foo.bar = "new property";
foo.baz = 3;

var JSONfoo = JSON.stringify(foo);
```

`JSONfoo` now holds `{"bar":"new property","baz":3}`. Para fazer JSONfoo voltar a ser um objeto JavaScript faça:

```js
var backToJS = JSON.parse(JSONfoo);
```

Para mais informações, veja a [documentação de objetos JSON](/en/JavaScript/Reference/Global_Objects/JSON).

## Método toJSON()

Se um objeto define o método toJSON(), JSON.stringify pode se chamar estes métodos para determinar a representação de objetos JSON. Por exemplo:

```js
x = {};
x.foo = "foo";
x.toJSON = function() { return "bar"; };
var json1 = JSON.stringify(x);
```

`json1` now contains '"bar"'.

## Limitações

Você não pode inicializar objetos que sejam membros escolhidos para funções. As especificações JSON não permitem. Por exemplo:

```js
foo.qwerty = function(){alert('foobar');};
foo.qwerty()
var JSONfoo = JSON.toString(foo);
```

will raise a `TypeError on line XXX: No JSON representation for this object!`

## Usando JSON através do nsIJSON

Versões do Firefox anteriores a 3.5 nativamente não suportam JSON, e há um único caminho para acessar as funcionalidades JSON é através do componente `nsIJSON, implementado` desde o Firefox 3. Codificando e decodificando são executados através nsIJON's métodos de codificação e decodificação. Estes métodos não acessam o JSON através de objetos JSON, e eles somente suportam valores escolhidos por listas de objetos, sem textos, booleanos, números ou vazios. (Estes valores são suportados somente por listas e objetos: o simples número 5 não irá funcionar, mas o objeto {"valor": 5} funcionará.)

Por causa nsIJSON não ser tão eficaz como um objeto JSON, ele codifica e decodifica métodos já removidos para Firefox 7. Desenvolvedores devem escolher para uso objeto JSON.

O seguinte código inicializa um objeto JavaScript usando `nsIJSON`:

```js
var Ci = Components.interfaces;
var Cc = Components.classes;

var foo = {};
foo.bar = "new property";
foo.baz = 3;

var nativeJSON = Cc["@mozilla.org/dom/json;1"].createInstance(Ci.nsIJSON);
var JSONfoo = nativeJSON.encode(foo);
```

The `JSONfoo` variable now holds the string `{"bar":"new property","baz":3}`. To create an object corresponding to `JSONfoo`, just do:

```js
var backToJS = nativeJSON.decode(JSONfoo);
```

## Usando JSON em outras situações

Enquanto na teoria e possível usar JSON usando [eval](/en/JavaScript/Reference/Global_Objects/eval) (mas somente para descerializar objetos, e não para inicializar textos) ou usando [json2.js](https://github.com/douglascrockford/JSON-js), Está não é uma boa ideia. Isto não e seguro para analisar JSON usando eval por que ele permite muito mais sintaxe que JSON faz (Melhora para execução de um código aleatório). Como para json2.js, este problema e que ele adiciona métodos para compilação como Object.prototype, escolha o mais útil para parar a execução do código antecipando está possibilidade.

Você deve quase sempre usa - lo ou os métodos formulados para usar JSON em preferências para qualquer outro caminho.

## Veja também

- `nsIJSON`
