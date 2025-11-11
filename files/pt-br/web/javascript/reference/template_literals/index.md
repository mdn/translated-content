---
title: Template strings
slug: Web/JavaScript/Reference/Template_literals
---

{{JsSidebar("More")}}

_Template_ Strings são *string*s que permitem expressões embutidas. Você pode _utilizar string_ multi-linhas e interpolação de _string_ com elas.

Basicamente é uma nova forma de criar strings e tornar o seu código um pouco mais legível.

## Sintaxe

```js-nolint
`corpo de texto`

`texto linha 1
 texto linha 2`

`texto string ${expression} texto string`

tag `texto string ${expression} texto string`
```

## Descrição

_Template strings_ são envolvidas por ([acentos graves](https://pt.wikipedia.org/wiki/Acento_grave)) (\` \`) em vez de aspas simples ou duplas. _Template strings_ podem possuir _placeholders_. Estes são indicados por um cifrão seguido de chaves (`${expression}`). As expressões nos _placeholders_, bem como o texto em volta delas são passados a uma função. A função padrão apenas concatena as partes em uma _string_ única. Se existir uma expressão precedendo a _template string_ (função `tag` exemplo), a _template string_ é definida como "_tagged template string_". No caso, a expressão _tag_ (geralmente uma função) é chamada pela _template string_ processada, que você pode manipular antes de produzir o resultado.

```js
`\`` === "`"; // --> true
```

### Strings multi-linhas

Qualquer caracter de nova linha inserido no código é parte da _template string_. Utilizando _strings_ normais, você teria de usar a síntaxe a seguir para obter strings multi-linhas:

```js
console.log("texto string linha 1\n" + "texto string linha 2");
// "texto string linha 1
// texto string linha 2"
```

Para obter o mesmo efeito com strings multi-linhas, você agora pode escrever:

```js
console.log(`texto string linha 1
texto string linha 2`);
// "texto string linha 1
//  texto string linha 2"
```

### Interpolação de Expressões

Para encapsular expressões dentro de strings, você precisava utilizar a seguinte sintaxe:

```js
var a = 5;
var b = 10;
console.log("Quinze é " + (a + b) + " e\nnão " + (2 * a + b) + ".");
// "Quinze é 15 e
// não 20."
```

Agora, com template strings, você pode utilizar as substituições sintáticas tornando o código mais legível:

```js
var a = 5;
var b = 10;
console.log(`Quinze é ${a + b} e
não ${2 * a + b}.`);
// "Quinze é 15 e
// não 20."
```

### Tagged template strings

Uma forma mais avançada dos _template string_ são os _template strings_ com marcações ou tags, ou _tagged template strings_. Com eles, você tem a possibilidade de modificar a saída dos _template strings_ usando uma função. O primeiro argumento contém um array de literais ("Hello" e "World" neste exemplo). Do segundo em diante e cada argumento subsequente contém valores previamente processados (algumas vezes chamados _cooked_) pelas expressões de substituição ("15" e "50" no caso do exemplo). No final, a função retorna a string ja manipulada:

```js
var a = 5;
var b = 10;

function tag(strings, ...values) {
  console.log(strings[0]); // "Hello "
  console.log(strings[1]); // " world "
  console.log(values[0]); // 15
  console.log(values[1]); // 50

  return "Bazinga!";
}

tag`Hello ${a + b} world ${a * b}`;
// "Bazinga!"
```

### Strings _Raw_

A propriedade especial `raw`, disponível no primeiro argumento da função da _tagged template string_ acima, permite o acesso as strings de maneira pura (_raw_) exatamente como elas foram especificadas:

```js
function tag(strings, ...values) {
  return strings.raw[0];
}

tag`string text line 1 \n string text line 2`;
// "string text line 1 \\n string text line 2"
```

Adicionalmente, o método {{jsxref("String.raw()")}} permite a criação de strings cruas, exatamente como as _template functions_ e as concatenações deveram criar.

```js
String.raw`Hi\n${2 + 3}!`; // "Hi\\n5!"
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("String")}}
- {{jsxref("String.raw()")}}
- [Gramática léxica](/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar)
- [Template-like strings in ES3 compatible syntax](https://gist.github.com/WebReflection/8f227532143e63649804)
- ["ES6 in Depth: Template strings" on hacks.mozilla.org](https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/)
- <https://styled-components.com/>
