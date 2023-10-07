---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
---

{{JSRef("Global_Objects", "String")}}

## Resumo

O método `replace()` retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere (ou caracteres). O padrão pode ser uma string ou uma {{jsxref("RegExp")}}, e a substituição pode ser uma string ou uma função a ser chamada para cada correspondência. Se o padrão for uma string, apenas a primeira ocorrência será substituída.

A string original não é modificada.

{{EmbedInteractiveExample("pages/js/string-replace.html")}}

## Sintaxe

```
str.replace(regexp|substr, newSubStr|function)
```

### Parâmetros

- `regexp`
  - : Um objeto {{jsxref ("RegExp")}} ou literal. A correspondência ou correspondências são substituídas por _`newSubStr`_ ou o valor retornado pela `function` especificada.
- `substr`
  - : Uma {{jsxref ("String")}} que será substituída por `newSubStr`. Ele é tratado como uma string textual e não é interpretado como uma expressão regular. Apenas a primeira ocorrência será substituída.
- `newSubStr`

  - : A {{jsxref("Global_Objects/String", "String")}} que substitui a `substr` recebida do parâmetro #1. Uma série de padrões de substituições especiais são suportados. Veja a seção "

    Especificando uma string como parâmetro

    " abaixo.

- `function`

  - : A função (function) chamada cria uma nova substring (para ser colocada no lugar da substring recebida pelo parametro #1). Os argumentos fornececidos para essa função estão descritos na seção "

    Especificando uma função como parâmetro

    " mais abaixo.

- `flags` {{non-standard_inline}}

  - : Uma string especificando uma combinação de [flags de expressão regular](/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions). O uso do parâmetro `flags` no método `String.prototype.replace()` é não-padrão. Ao invés de usar este parâmetro, use um objeto {{jsxref("Global_Objects/RegExp", "RegExp")}} com as flags correspondentes. O valor deste parâmetro deve ser uma string consistindo em um ou mais dos seguintes caracteres para afetar a operação, tais como descrito:

    - `g`
      - : Combinação global.
    - `i`
      - : Ignora diferenças entre maiúsculas e minúsculas.
    - `m`
      - : Combinação em várias linhas.
    - `y` {{experimental_inline}}
      - : Sticky

    > **Nota:**O argumento `flags` não funciona no v8 Core (Chrome e NodeJs).

### Valor retornado

Uma nova string com alguma ou todas as combinações do padrão substituído(s) pelo valor de substituição.

## Descrição

Este método não muda o objeto {{jsxref("Global_Objects/String", "String")}}. Ele simplesmente retorna uma nova string.

Para realizar uma pesquisa global e substituir, inclua a flag `g` na expressão regular ou se o primeiro parâmetro for uma string, inclua `g` no parâmetro flags.

### Especificando uma string como parâmetro

A string substituidora pode incluir o seguinte padrão de substituição especial:

| **Padrão**    | **Insere**                                                                                                                                                                          |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$$`          | Insere um "$".                                                                                                                                                                      |
| `$&`          | Insere a string casada.                                                                                                                                                             |
| `` $` ``      | Insere a porção da string que precede a substring combinada.                                                                                                                        |
| `$'`          | Insere a porção da string que segue a substring combinada.                                                                                                                          |
| `$n` ou `$nn` | Onde `n` ou `nn` são dígitos decimais, insere a _n_-ésima substring entre parêntesis casada, dado o primeiro argumento foi um objeto {{jsxref("Global_Objects/RegExp", "RegExp")}}. |

### Especificando uma função como parâmetro

Você pode especificar uma função no segundo parâmetro. Neste caso, a função será chamada depois que a correspôndecia for encontrada. O resultado da função (valor retornado) será usado como a string substituta. (Atenção: os padrões de substituição citados acima não se aplicam neste caso). Note que a função será chamada múltiplas vezes para combinação que deve ser substituída se a expressão regular no primeiro parâmetro tiver a regra global.

Os parâmetros da função são:

| **Possíveis nomes** | **Valor fornecido**                                                                                                                                                                                                                                                                           |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `match`             | A substring encontrada. Corresponde ao `$&` acima.                                                                                                                                                                                                                                            |
| `p1, p2, ...`       | O enésimo parâmetro entre parênteses da RegEx no primeiro parâmetro na função `replace()` {{jsxref("Global_Objects/RegExp", "RegExp")}}. (Corresponde a `$1`, `$2`, etc. acima.) Por exemplo, se `/(\a+)(\b+)/`, for o primeiro parâmetro, `p1` é a combinação para `\a+`, e `p2` para `\b+`. |
| `offset`            | O offset da string encontrada em relação ao resto da string. Por exemplo, se a string for 'abcd' e a string a ser encontrada for 'bc', então este parâmetro terá o valor 1.                                                                                                                   |
| `string`            | A string completa que está sendo examinada.                                                                                                                                                                                                                                                   |

(O número exato de argumentos dependerá se o primeiro parâmetro for uma {{jsxref("Global_Objects/RegExp", "RegExp")}} e de quantas combinações entre parênteses houver).

O exemplo a seguir irá substituir o valor de `newString` para `'abc - 12345 - #$*%'`:

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 não possui digitos,
  // p2 possui dígitos, e p3 não possui alfanuméricos
  return [p1, p2, p3].join(" - ");
}
var newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);

// retorna "abc - 12345 - #$*%"
```

## Exemplos

### Definindo uma expressão regular com `replace()`

No exemplo a seguir foi definida uma expressão regular com a flag "`i`" (que ignora diferenças entre maiúsculas e minúsculas) no método `replace()`.

```js
var str = "Twas the night before Xmas...";
var newstr = str.replace(/xmas/i, "Christmas");

console.log(newstr);
// retorna "Twas the night before Christmas..."
```

> **Nota:** Veja [este guia](/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions) para maiores explicações as sobre expressões regulares.

### Usando `global` e `ignore` com `replace()`

Substituir globalmente, "`g`", só pode ser feito com uma expressão regular. No exemplo a seguir, a expressão regular inclui as flags global e ignore que permitem a função `replace()` substituir cada "`maçãs`" por "`laranjas`" na string.

```js
var re = /maçãs/gi;
var str = "As maçãs são redondas. As maçãs são suculentas.";
var newstr = str.replace(re, "laranjas");

console.log(newstr);
// retorna
// "As laranjas são redondas. As laranjas são suculentas."
```

### Trocando palavras em uma string

O script a seguir troca as palavras na string. Para o texto que vai substituir, o script usa [grupos de captura](/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges) e os padrões de substituição `$1` e `$2`.

```js
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr); // Smith, John
```

### Usando uma função que modifica os caracteres coincidentes

Neste exemplo, todas as ocorrências de letras maiúsculas na string são convertidas em minúsculas e um hífen é inserido antes do local de correspondência. O importante aqui é que é necessário uma operação adicional no item antes dele ser retornado como substituído.

A função de substituição aceita a string coincidida como parâmetro e usa ela para transformar os caracteres e concatenar um hífen antes de retornar.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Dado o seguinte parâmetro: `styleHyphenFormat('borderTop')`, o valor retornado é '`border-top`'.

Como queremos transformar o resultado da coincidencia antes da substituição final, nós devemos usar uma função. Isto força que a transformação seja feita antes da chamada do método {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}}. Se tivéssemos tentado isto sem a função, o método {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} não teria efeito.

```js
let newString = propertyName.replace(/[A-Z]/g, "-" + "$&".toLowerCase()); // não funciona
```

Isso acontece porque `'$&'.toLowerCase()` será executada antes (resultando no mesmo que `'$&'`) em vez de usar os caracteres da string a ser transformada.

### Substituindo graus Fahrenheit em Celsius

O exemplo a seguir converte graus Fahrenheit em Celsius. O grau Fahrenheit deve ser um número terminado com "`F`". A função retorna o número em Celsius terminando em "`C`". Por exemplo, se o valor de entrada for "`212F`", a função deve retornar "`100C`". Se o número for "`0F`", a função deve retornar "`-17.77777777777778C`".

A expressão regular `test` verifica por números que terminem com "`F`". O número de graus Fahrenheit é acessível pela função pelo segundo parâmetro, `p1`. A função calcula o Celsius baseado no Fahrenheit passado via string para a função `f2c()`. A `f2c()` então retorna o número em Celsius.

```js
function f2c(x) {
  function convert(str, p1, offset, s) {
    return ((p1 - 32) * 5) / 9 + "C";
  }
  var s = String(x);
  var test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
```

### Use uma função com expressão regular para evitar loops for

O exemplo a seguir pega um padrão de string e converte em um array de objetos.

**Entrada:**

Uma string com caracteres: `x`, `-` e `_`

```
x-x_
x---x---x---x---
x-xxx-xx-x-
x_x_x___x___x___
```

**Saída:**

Um array de objetos. Um `'x'` denota um estado `'on'`, um `'-'` (hífen) denota um estado `'off'` e um `'_'` (underline) denota o comprimento do estado `'on'`.

```
[
  { on: true, length: 1 },
  { on: false, length: 1 },
  { on: true, length: 2 }
  ...
]
```

**Código:**

```js
var str = "x-x_";
var retArr = [];
str.replace(/(x_*)|(-)/g, function (match, p1, p2) {
  if (p1) {
    retArr.push({ on: true, length: p1.length });
  }
  if (p2) {
    retArr.push({ on: false, length: 1 });
  }
});

console.log(retArr);
```

O código gera um array de 3 objetos como desejado sem usar uma função de loop.

## Especificações

| Especificação                                                                    | Status             | Comentário                                        |
| -------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------- |
| ECMAScript 3rd Edition.                                                          | Standard           | Defnição inicial. Implementado no JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.5.4.11', 'String.prototype.replace')}}              | {{Spec2('ES5.1')}} |                                                   |
| {{SpecName('ES6', '#sec-string.prototype.replace', 'String.prototype.replace')}} | {{Spec2('ES6')}}   |                                                   |

## Navegadores compatíveis

{{Compat("javascript.builtins.String.replace")}}

## Veja também

- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
