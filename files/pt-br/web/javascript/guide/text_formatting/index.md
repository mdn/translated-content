---
title: Formatando texto
slug: Web/JavaScript/Guide/Text_formatting
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_Expressions")}}

Esse capítulo introduz como trabalhar com strings e texto em JavaScript.

## Strings

O tipo {{Glossary("String")}} do JavaScript é usado para representar informações de texto. É um conjunto de "elementos" composto por valores inteiros de 16-bits sem sinal. Cada elemento dentro da String ocupa uma posição dentro dessa String. O primeiro elemento está no índice 0, o próximo no índice 1, e assim sucessivamente. O tamanho de uma String é a quantidade de elementos que ela possui. Você pode criar strings usando strings literais ou objetos string.

### Strings literais

Você pode criar strings usando aspas simples ou aspas duplas:

```js-nolint
'foo';
"bar";
```

Strings mais avançadas podem ser criadas usando [sequências de escape](https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_escape):

#### Sequências de escape hexadecimais

O número depois de \x é interpretado como um número [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal).

```js
"\xA9"; // "©"
```

#### Sequências de escape unicode

As sequências de escape unicode requerem no mínimo quatro caracteres depois do `\u`.

```js
"\u00A9"; // "©"
```

#### Sequências de escape Unicode code point

É novo no ECMAScript 6. Com essas sequências, cada caractere pode ser "escapado" usando números hexadecimais, sendo possível usar pontos de código Unicode de até 0x10FFFF. Com escapes Unicode simples muitas vezes é necessário escrever as metades substitutas separadamente para obter o mesmo resultado.

Veja também {{jsxref("String.fromCodePoint()")}} or {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}";

// o mesmo com escapes Unicode simples
"\uD87E\uDC04";
```

### Objetos String

O objeto {{jsxref("String")}} é como uma "capa" ao redor do tipo primitivo string.

```js
var s = new String("foo"); // Cria um objeto String
console.log(s); // Exibe no console: { '0': 'f', '1': 'o', '2': 'o'}
typeof s; // Retorna 'object'
```

Você pode chamar qualquer um dos métodos do objeto `String` em cima de uma string literal — JavaScript automaticamente converte a string literal em um objeto `String` temporário, chama o método, e então descarta o objeto `String` temporário. Você pode também usar a propriedade `String.length` com uma string literal.

Você deve usar strings literais a menos que você realmente precise usar um objeto `String`, pois objetos `String` podem ter comportamentos inesperados. Por exemplo:

```js
var s1 = "2 + 2"; // Cria uma string literal
var s2 = new String("2 + 2"); // Creates um objeto String
eval(s1); // Retorna o número 4
eval(s2); // Retorna a string "2 + 2"
```

Um objeto `String` possui uma propriedade, `length`, que indica o número de caracteres na string. Por exemplo, o código a seguir atribui o valor 11 à variável `x`, pois "Olá, mundo!" possui 11 caracteres:

```js
var minhaString = "Olá, mundo!";
var x = minhaString.length;
```

Um objeto `String` possui uma variedade de métodos: por exemplo aqueles que retornam uma variação da própria string, como `substring` e `toUpperCase`.

A tabela a seguir lista os métodos de objetos {{jsxref("String")}}.

| Método                                                                                                                                | Descrição                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("String.charAt", "charAt")}}, {{jsxref("String.charCodeAt", "charCodeAt")}}, {{jsxref("String.codePointAt", "codePointAt")}} | Retorna o código do caractere ou o caractere em uma posição específica na string.                                                                |
| {{jsxref("String.indexOf", "indexOf")}}, {{jsxref("String.lastIndexOf", "lastIndexOf")}}                                              | Retorna a posição de uma substring específica na string ou a última posição da substring específica, respectivamente.                            |
| {{jsxref("String.startsWith", "startsWith")}}, {{jsxref("String.endsWith", "endsWith")}}, {{jsxref("String.includes", "includes")}}   | Retorna se uma string começa, termina ou contém uma outra string específica.                                                                     |
| {{jsxref("String.concat", "concat")}}                                                                                                 | Concatena o texto de duas strings e retorna uma nova string.                                                                                     |
| {{jsxref("String.fromCharCode", "fromCharCode")}}, {{jsxref("String.fromCodePoint", "fromCodePoint")}}                                | Cria uma string a partir de uma sequência específica de valores Unicode. Esse é um método da classe String, não de uma instância do tipo String. |
| {{jsxref("String.split", "split")}}                                                                                                   | Separa um objeto `String` em um array de strings, separando a string em substrings.                                                              |
| {{jsxref("String.slice", "slice")}}                                                                                                   | Extrai uma seção de uma string e retorna uma nova string.                                                                                        |
| {{jsxref("String.substring", "substring")}}, {{jsxref("String.substr", "substr")}}                                                    | Retorna um subconjunto específico de uma string, definindo os índices inicial e final, ou definindo um índice e um tamanho.                      |
| {{jsxref("String.match", "match")}}, {{jsxref("String.replace", "replace")}}, {{jsxref("String.search", "search")}}                   | Trabalha com expressões regulares.                                                                                                               |
| {{jsxref("String.toLowerCase", "toLowerCase")}}, {{jsxref("String.toUpperCase", "toUpperCase")}}                                      | Retorna a string com todos caracteres em minúsculo, ou maiúsculo, respectivamente.                                                               |
| {{jsxref("String.normalize", "normalize")}}                                                                                           | Retorna a Forma Normalizada Unicode (Unicode Normalization Form) da string que chama o método.                                                   |
| {{jsxref("String.repeat", "repeat")}}                                                                                                 | Retorna uma string contendo os elementos do objeto repetidos pela quantidade de vezes dada.                                                      |
| {{jsxref("String.trim", "trim")}}                                                                                                     | Retira espaços em branco no começo e no final da string.                                                                                         |

### Template strings com várias linhas

[Template strings](/pt-BR/docs/Web/JavaScript/Reference/template_strings) são strings literais que permitem expressões no seu conteúdo. Você pode usar os recursos de strings com multiplas linhas e interpolações de string com as template strings.

Template strings são declaradas com o acento grave (\`\`) ao invés de aspas simples ou aspas duplas. Essas strings podem conter place holders. Os place holders são indicados pelo cifrão e com chaves ( `${expressao}` ).

#### Várias linhas (Multi-lines)

Qualquer caractere de nova linha ( `'\n'` ) inserido na string também faz parte das template string. Usando strings normais, você teria que usar a sintaxe a seguir para conseguir uma string de várias linhas

```js
console.log(
  "linha de texto 1\n\
linha de texto 2",
);
// "linha de texto 1
// linha de texto 2"
```

Para obter o mesmo efeito com strings multi-lines, você pode agora escrever:

```js
console.log(`linha de texto 1
linha de texto 2`);
// "linha de texto 1
// linha de texto 2"
```

#### Expressões inseridas

Para conseguir inserir expressões com strings normais, você teria que usar a seguinte sintaxe:

```js
var a = 5;
var b = 10;
console.log("Quinze é " + (a + b) + " e\nnão " + (2 * a + b) + ".");
// "Quinze é 15 e
// não 20."
```

Agora, com template strings, você tem a capacidade de usar uma forma mais simples e legível para fazer essas substituições:

```js
var a = 5;
var b = 10;
console.log(`Quinze é ${a + b} e\nnão ${2 * a + b}.`);
// "Quinze é 15 e
// não 20."
```

Para mais informações, leia sobre [Template strings](/pt-BR/docs/Web/JavaScript/Reference/template_strings) na [referência JavaScript](/pt-BR/docs/Web/JavaScript/Reference).

## Internacionalização

O objeto {{jsxref("Intl")}} é o _namespace_ para a API de Internacionalização do ECMAScript, que oferece comparação de strings sensíveis à linguagem, formatação de números, e formatação de datas e horas. Os construtores para os objetos {{jsxref("Collator")}}, {{jsxref("NumberFormat")}}, e {{jsxref("DateTimeFormat")}} são propriedades do objeto `Intl`.

### Formatação de data e hora

O objeto {{jsxref("DateTimeFormat")}} é útil para a formatação de data e hora. O código a seguir formata uma data em inglês no formato que é utilizado nos Estados Unidos. (O resultado é diferente em outro fuso horário).

```js
var msPorDia = 24 * 60 * 60 * 1000; // número de milisegundos em um dia

// July 17, 2014 00:00:00 UTC.
var july172014 = new Date(msPorDia * (44 * 365 + 11 + 197));

var opcoes = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
};
var americanDateTime = new Intl.DateTimeFormat("en-US", opcoes).format;

console.log(americanDateTime(july172014)); // 07/16/14, 5:00 PM PDT
```

### Formatação de números

O objeto {{jsxref("NumberFormat")}} é útil para formatar números, por exemplo unidade monetária.

```js
var precoGasolina = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 3,
});

console.log(precoGasolina.format(5.259)); // $5.259

var hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {
  style: "currency",
  currency: "CNY",
});

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五
```

### Collation

O objeto {{jsxref("Collator")}} é usado para comparar e ordenar strings.

Por exemplo, existem atualmente duas ordens diferentes de classificação no Alemão: _listaTelefônica_ e _dicionário_. A ordenação da _listaTelefônica_ enfatiza o som, e é como se "ä", "ö", e assim por diante, fossem expandidos para "ae", "oe", e assim sucessivamente, para definir a ordem.

```js
var nomes = ["Hochberg", "Hönigswald", "Holzman"];

var phonebookAlemao = new Intl.Collator("de-DE-u-co-phonebk");

// como se ordenasse ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(phonebookAlemao.compare).join(", "));
// imprime "Hochberg, Hönigswald, Holzman"
```

Algumas palavras do alemão são conjugadas com tremas extras, mas no _dicionário_ essas palavras são ordenadas ignorando os tremas (exceto quando ordenando palavras que tem _apenas_ o trema como diferença: _schon_ antes de _schön_).

```js
var dicionarioAlemao = new Intl.Collator("de-DE-u-co-dict");

// como se ordenasse ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(dicionarioAlemao.compare).join(", "));
// imprime "Hochberg, Holzman, Hönigswald"
```

Para mais informação sobre a API {{jsxref("Intl")}}, veja também [Introducing the JavaScript Internationalization API (em inglês)](https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/).

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_Expressions")}}
