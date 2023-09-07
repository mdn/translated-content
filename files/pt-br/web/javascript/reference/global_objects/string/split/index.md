---
title: String.prototype.split()
slug: Web/JavaScript/Reference/Global_Objects/String/split
---

{{JSRef}}

O método `split()` divide uma {{jsxref ("String")}} em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.

{{EmbedInteractiveExample("pages/js/string-split.html", "taller")}}

## Sintaxe

```
str.split([separator[, limit]])
```

### Parâmetros

- O caso mais simples é quando o separador é apenas um único caractere que será usado para dividir a string. Por exemplo, uma string contendo valores separados por tabulação (TSV) poderia ser analisada passando um caractere de tabulação como separador, como este: myString.split ("\ t").
- Se o `separator` contiver vários caracteres, toda a sequência de caracteres deve ser encontrada para ser dividida.
- Se o `separator` for omitido ou não aparecer dentro da `str`, o array retornará um elemento consistindo em toda a string.
- Se o `separator` aparecer no início (ou no final) da string, ele ainda terá o efeito de divisão. O resultado é uma string vazia (ou seja, `str.length == 0`), que aparece na primeira (ou última) posição do array retornado.
- Se o `separator` for uma string vazia (""), `str` será convertido em um array contendo cada um de seus caracteres em UTF-16.

<!---->

- `separator`
  - : Opcional. Especifica o caractere, ou conjunto de caracteres, a ser usado para separar a string. O separador pode ser uma string ou uma {{jsxref("Global_Objects/RegExp", "expressão regular", "", 1)}}.

> **Aviso:** Quando uma string vazia (`""`) é usada como separador, a string não é dividida por caracteres percebidos pelo usuário ([grapheme clusters](https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)) ou caracteres Unicode (pontos de código), mas por unidades de código UTF-16. Isso destrói [pares substitutos](http://unicode.org/faq/utf_bom.html#utf16-2). Consulte "[Como você transforma uma string em um array de caracteres em JavaScript?" no StackOverflow](https://stackoverflow.com/questions/4547609/how-do-you-get-a-string-to-a-character-array-in-javascript/34717402#34717402).

- `limite`

  - : Opcional. Um número inteiro não negativo especificando um limite no número de divisões a serem encontradas. O método `split()` ainda dividirá em cada ocorrência do separador, até que o número de itens divididos corresponda ao limite ou que a string fique aquém do separador.

    - O array pode conter menos entradas do que o `limit` se o final da string for alcançado antes que o limite seja atingido.
    - Se o `limit` for `0`, `[]` será retornado.

### Valor retornado

Um array de strings divididos em cada ponto onde o separador ocorre na string informada.

## Descrição

Quando encontrado, o caractere designado como o `separator` é removido da string e as substrings são retornadas em um array. Se o `separator` não for encontrado ou for omitido, o array irá conter um elemento consistindo da string inteira. Se o `separator` for uma string vazia, `str` será convertida em um array de caracteres.

Se o separador for uma expressão regular que contenha parênteses de captura, cada vez que o `separator` for encontrado, os resultados (incluindo qualquer resultado `undefined`) dos parênteses de captura serão emendados ao array de saída. Entretanto, nem todos os navegadores possuem suporte a isso.

## Exemplos

### Usando `split()`

Quando a string está vazia, o `split()` irá retornar um array contendo uma string vazia ao invés de um array vazio. Se a string e o separador forem ambos strings vazias, um array vazio será retornado.

```js
const myString = "";
const splits = myString.split();

console.log(splits);

// retorna [""]
```

O exemplo a seguir define uma função que divide uma string em um array de strings usando o separador especificado. Depois de dividir a string, a função exibe mensagens indicando a string original (antes da divisão), o separador usado, o número de elementos no array e os elementos individuais do array.

```js
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('A string original é: "' + stringToSplit + '"');
  console.log('O separador é: "' + separator + '"');
  console.log(
    "O array tem " +
      arrayOfStrings.length +
      " elementos: " +
      arrayOfStrings.join(" / "),
  );
}

var tempestString = "Oh brave new world that has such people in it.";
var monthString = "Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez";

var space = " ";
var comma = ",";

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
```

Esse exemplo produz a saída a seguir:

```
A string original é: "Oh brave new world that has such people in it."
O separador é: " "
O array possui 10 elementos: Oh / brave / new / world / that / has / such / people / in / it.

A string original é: "Oh brave new world that has such people in it."
O separador é: "undefined"
O array possui 1 elementos: Oh brave new world that has such people in it.

A string original é: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
O separador é: ","
O array possui 12 elementos: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec
```

### Removendo espaços de uma string

No exemplo a seguir, `split()` procura por 0 ou mais espaços seguidos por um ponto e vírgula seguido por 0 ou mais espaços e, quando encontrar, remove os espaços e os pontos e vírgulas da string. `nameList` é o array retornado como resultado do `split()`.

```js
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);

var re = /\s*;\s*/;
var nameList = names.split(re);

console.log(nameList);
```

O retorno do código acima são duas linhas. A primeira linha registra a string original e a segunda linha registra o array resultante.

```
Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand " ]
```

### Retornando um número limitado de divisões

No exemplo a seguir, o `split()` procura por 0 ou mais espaços em uma string e retorna as 3 primeiras divisões que encontrar.

```js
var myString = "Hello World. How are you doing?";
var splits = myString.split(" ", 3);

console.log(splits);
```

O script exibirá o texto a seguir:

```
["Hello", "World.", "How"]
```

### Parênteses de Captura

Se o `separator` contém parênteses de captura, os resultados correspondentes são retornados no array.

```js
var myString = "Hello 1 word. Sentence number 2.";
var splits = myString.split(/(\d)/);

console.log(splits);
```

O script exibirá o texto a seguir:

```
[ "Hello ", "1", " word. Sentence number ", "2", "." ]
```

> **Nota:**`\d` corresponde à classe de caracteres para dígitos entre 0 e 9.

### Revertendo uma String usando `split()`

> **Aviso:** Esta não é a melhor maneira de reverter uma string:
>
> ```js example-bad
> const str = "asdfghjkl";
> const strReverse = str.split("").reverse().join("");
> // 'lkjhgfdsa'
>
> // split() retorna um array onde os métodos
> // reverse() e join() podem ser aplicados
> ```
>
> Não funciona se a string contém `grapheme clusters`, mesmo ao usar uma divisão compatível com Unicode. (Use, por exemplo, [esrever](https://github.com/mathiasbynens/esrever) no lugar.)
>
> ```js example-bad
> const str = "résumé";
> const strReverse = str.split(/(?:)/u).reverse().join("");
> // retorna "́emuśer"
> ```
>
> **Bonus:** use o operador {{jsxref("Operators/Comparison_Operators", "===", "#Identity_strict_equality_(===)")}} para testar se a string original era um palíndromo.

## Especificações

| Especificação                                                                    | Status               | Comentário                                         |
| -------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES3')}}                                                              | {{Spec2('ES3')}}     | Definição inicial. Implementado no JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.5.4.14', 'String.prototype.split')}}                | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-string.prototype.split', 'String.prototype.split')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-string.prototype.split', 'String.prototype.split')}} | {{Spec2('ESDraft')}} |                                                    |

## Navegadores compatíveis

{{Compat("javascript.builtins.String.split")}}

## Veja também

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.join()")}}
