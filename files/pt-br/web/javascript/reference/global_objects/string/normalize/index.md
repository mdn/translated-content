---
title: String.prototype.normalize()
slug: Web/JavaScript/Reference/Global_Objects/String/normalize
---

{{JSRef}}

O método **`normalize()`** retorna a Forma de Normalização Unicode (Unicode Normalization Form) de uma dada string (se o valor não é uma string, ele será convertido para uma primeiramente).

## Sintaxe

```
str.normalize([form])
```

### Parâmetros

- `form`

  - : Opcional. Um dentre os seguintes valores: `"NFC"`, `"NFD"`, `"NFKC"`, ou `"NFKD"`, especificando o formato de normalização. Se o valor for omitido ou for {{jsxref("undefined")}}, `"NFC"` será utilizado.

    - `NFC` — Formato de Normalização Canônico de Composição.
    - `NFD` — Formato de Normalização Canônico de Decomposição.
    - `NFKC` — Formato de Normalização de Compatibilidade de Composição.
    - `NFKD` — Formato de Normalização de Compatibilidade de Decomposição.

### Valor retornado

Uma string contendo a Forma de Normalização Unicode da string dada.

### Erros lançados

- {{jsxref("RangeError")}}
  - : Em erro {{jsxref("RangeError")}} é lançado se `form` não for um dos valores especificados acima.

## Descrição

O Unicode atribui um valor numérico exclusivo, denominado _ponto de código_, a cada caractere. Por exemplo, o ponto de código para _"A"_ é fornecido como U+0041. No entanto, às vezes mais de um ponto de código, ou sequência de pontos de código, podem representar o mesmo caractere abstrato - o caractere `"ñ"`, por exemplo, pode ser representado por:

- Apenas um ponto de código U+00F1.
- O ponto de código para `"n"` (U+006E) seguido pelo ponto de código para o til (U+0303).

```js
let string1 = "\u00F1";
let string2 = "\u006E\u0303";

console.log(string1); //  retorna ñ
console.log(string2); //  retorna ñ
```

No entanto, como os pontos de código são diferentes, a comparação de strings não os tratará como iguais. E como o número de pontos de código em cada versão é diferente, eles até mesmo possuem comprimentos diferentes.

```js
let string1 = "\u00F1"; // ñ
let string2 = "\u006E\u0303"; // ñ

console.log(string1 === string2); // retorna false
console.log(string1.length); // retorna 1
console.log(string2.length); // retorna 2
```

O método `normalize()` ajuda a resolver esse problema convertendo uma string em uma forma normalizada comum para todas as sequências de pontos de código que representam os mesmos caracteres. Existem duas principais formas de normalização, uma baseada na **equivalência canônica** e a outra baseada na **compatibilidade**.

### Normalização de equivalência canônica

Em Unicode, duas sequências de pontos de código têm equivalência canônica se representarem os mesmos caracteres abstratos e tiverem sempre a mesma aparência visual e comportamento (por exemplo, eles devem sempre ser classificados da mesma maneira).

Você pode usar o `normalize()` usando os argumentos `"NFD"` ou `"NFC"` para produzir uma forma de string que será a mesma para todas as strings canonicamente equivalentes. No exemplo abaixo, normalizamos duas representações do caractere `"ñ"`:

```js
let string1 = "\u00F1"; // ñ
let string2 = "\u006E\u0303"; // ñ

string1 = string1.normalize("NFD");
string2 = string2.normalize("NFD");

console.log(string1 === string2); // retorna true
console.log(string1.length); // retorna 2
console.log(string2.length); // retorna 2
```

#### Formas compostas e decompostas

Observe que o comprimento da forma normalizada em `"NFD"` é `2`. Isso porque `"NFD"` fornece a versão **decomposta** da forma canônica, na qual pontos de código únicos são divididos em vários combinados. A forma canônica decomposta para `"ñ"` é `"\u006E\u0303"`.

Você pode especificar `"NFC"` para obter a forma canônica **composta**, na qual vários pontos de código são substituídos por pontos de código únicos sempre que possível. A forma canônica composta para `"ñ"` é `"\u00F1"`:

```js
let string1 = "\u00F1"; // ñ
let string2 = "\u006E\u0303"; // ñ

string1 = string1.normalize("NFC");
string2 = string2.normalize("NFC");

console.log(string1 === string2); // true
console.log(string1.length); // 1
console.log(string2.length); // 1
console.log(string2.codePointAt(0).toString(16)); // f1
```

### Normalização de compatibilidade

No Unicode, duas sequências de pontos de código são compatíveis se representarem os mesmos caracteres abstratos e devem ser tratadas da mesma forma em algumas - mas não necessariamente em todas - aplicações.

Todas as sequências canonicamente equivalentes também são compatíveis, mas não o contrário.

Por exemplo:

- o ponto de código U+FB00 representa a [ligadura](/pt-BR/docs/Glossary/Ligature) `"ﬀ"`. É compatível com dois pontos de código U+0066 consecutivos (`"ff"`).
- o ponto de código U+24B9 representa o símbolo `"Ⓓ"`. É compatível com o ponto de código U+0044 (`"D"`).

Em alguns aspectos (como classificação), eles devem ser tratados como equivalentes - e em alguns (como a aparência visual) não devem, portanto, não são canonicamente equivalentes.

Você pode usar o `normalize()` usando os argumentos `"NFKD"` ou `"NFKC"` para produzir uma forma de string que será a mesma para todas as strings compatíveis:

```js
let string1 = "\uFB00";
let string2 = "\u0066\u0066";

console.log(string1); // ﬀ
console.log(string2); // ff
console.log(string1 === string2); // false
console.log(string1.length); // 1
console.log(string2.length); // 2

string1 = string1.normalize("NFKD");
string2 = string2.normalize("NFKD");

console.log(string1); // ff <- aparência visual modificada
console.log(string2); // ff
console.log(string1 === string2); // true
console.log(string1.length); // 2
console.log(string2.length); // 2
```

Ao aplicar a normalização de compatibilidade, é importante considerar o que você pretende fazer com as strings, uma vez que a forma normalizada pode não ser apropriada para as aplicações. No exemplo acima, a normalização é apropriada para pesquisa, porque permite que um usuário encontre a string pesquisando por `"f"`. Mas pode não ser apropriado para exibição, porque a representação visual é diferente.

Como na normalização canônica, você pode solicitar formulários compatíveis decompostos ou compostos passando `"NFKD"` ou `"NFKC"`, respectivamente.

## Exemplos

### Usando `normalize()`

```js
// String Inicial

// U+1E9B: CARACTERE LATINO - LETRA S COMPRIDA COM PONTO ACIMA
// U+0323: COMBINANDO PONTO ABAIXO
var str = "\u1E9B\u0323";

// Formato de Normalização Canônico de Composição (NFC)

// U+1E9B: CARACTERE LATINO - LETRA S COMPRIDA COM PONTO ACIMA
// U+0323: COMBINANDO PONTO ABAIXO
str.normalize("NFC"); // '\u1E9B\u0323'
str.normalize(); // igual à linha de cima

// Formato de Normalização Canônico de Decomposição (NFD)

// U+017F: CARACTERE LATINO - LETRA S COMPRIDA
// U+0323: COMBINANDO PONTO ABAIXO
// U+0307: COMBINANDO PONTO ACIMA
str.normalize("NFD"); // '\u017F\u0323\u0307'

// Formato de Normalização de Compatibilidade de Composição. (NFKC)

// U+1E69: CARACTERE LATINO - LETRA S COMPRIDA COM PONTO ACIMA E ABAIXO
str.normalize("NFKC"); // '\u1E69'

// Formato de Normalização de Compatibilidade de Decomposição (NFKD)

// U+0073: CARACTERE LATINO - LETRA S COMPRIDA
// U+0323: COMBINANDO PONTO ABAIXO
// U+0307: COMBINANDO PONTO ACIMA
str.normalize("NFKD"); // '\u0073\u0323\u0307'
```

## Especificações

| Especificação                                                                            | Status               | Comentário         |
| ---------------------------------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES2015', '#sec-string.prototype.normalize', 'String.prototype.normalize')}}  | {{Spec2('ES2015')}}  | Definição inicial. |
| {{SpecName('ESDraft', '#sec-string.prototype.normalize', 'String.prototype.normalize')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.normalize")}}

## Veja também

- [Unicode Standard Annex #15, Unicode Normalization Forms](http://www.unicode.org/reports/tr15/)
- [Unicode equivalence](http://en.wikipedia.org/wiki/Unicode_equivalence)
