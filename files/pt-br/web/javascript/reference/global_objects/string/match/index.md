---
title: String.prototype.match()
slug: Web/JavaScript/Reference/Global_Objects/String/match
---

{{JSRef("Global_Objects", "String")}}

## Resumo

O método `match()` retorna uma correspondência entre uma string com uma [expressão regular](/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions).

## Sintaxe

```
str.match(regexp);
```

### Parâmetros

- `regexp`

  - : Um objeto de [expressão regular](/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions). Se _`regexp`_ não for uma **`RegExp`**, o mesmo será convertido para uma nova RegExp usando `new RegExp(regexp)`.

    Se você não fornecer nenhum parâmetro ao usar o método `match()`, você obterá um {{jsxref ("Array")}} com uma string vazia: `[""]`.

### Valor retornado

- Se o sinalizador `g` for usado, todos os resultados correspondentes à expressão regular serão retornados, mas a captura de grupos não.
- se o sinalizador `g` não for usado, apenas a primeira correspondência completa e seus grupos de captura relacionados serão retornados. Nesse caso, o item devolvido terá propriedades adicionais conforme descrito a seguir.

<!---->

- `array`
  - : Um {{jsxref ("Array")}} cujo conteúdo depende da presença ou ausência do sinalizador global (`g`), ou {{jsxref ("null")}} se nenhuma correspondência for encontrada.

#### Propriedades adicionais

Conforme explicado acima, alguns resultados contêm propriedades adicionais conforme descrito abaixo.

- `groups`
  - : Um objeto de grupos de captura nomeados cujas chaves são os nomes, e valores são os grupos de captura ou {{jsxref ("undefined")}} se nenhum grupo de captura nomeado foi definido. Consulte [Grupos e Intervalos](/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges) para obter mais informações.
- `index`
  - : O índice da pesquisa em que o resultado foi encontrado.
- `input`
  - : Uma cópia da string pesquisada.

## Descrição

Se a expressão regular não incluir o sinalizador `g`, `str.match()` retornará o mesmo resultado que {{jsxref ("RegExp.prototype.exec()", "RegExp.exec()")}}.

### Veja também: métodos RegExp

- Se você precisar saber se uma string corresponde a uma expressão regular, use {{jsxref("RegExp.test()", "RegExp.test()")}}.
- Se você quiser encontrar apenas uma correspondência, você pode querer usar {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}}.
- Se você deseja obter grupos de captura e o sinalizador global (`g`) está definido, você precisa usar {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}} ou {{jsxref("String. prototype.matchAll() ")}} em vez disso.

## Exemplos

### Usando `match()`

No exemplo a seguir, `match()` é usado para encontrar "Capítulo", seguido de um ou mais caracteres numéricos, seguido por um ponto decimal e caracteres numéricos 0 ou mais vezes. A expressão inclui a flag `i` para que diferenças de maiúscula/minúscula sejam ignoradas.

```js
const str = "Para maiores informações, veja o Capítulo 3.4.5.1";
const re = /(capítulo \d+(\.\d)*)/i;
const found = str.match(re);

console.log(found);

// retorna ["Capítulo 3.4.5.1",
            "Capítulo 3.4.5.1",
            ".1",
            index: 33,
            input: "Para maiores informações, veja o Capítulo 3.4.5.1"]

// "Capítulo 3.4.5.1" é a primeira correspondência e o primeiro valor
//  capturado a partir de (capítulo \d+(\.\d)*).
// ".1" é o útlimo valor de (\.\d).
// A propriedade "index" (33) é o índice de base zero da correspôndencia inteira.
// A propriedade "input" é a string original que foi analisada.
```

### Usando as bandeiras (flags) global e ignore com<br>`match()`

O exemplo a seguir demonstra o uso das bandeiras (flags) global e ignore com `match()`. Todas as letras de `A` a `E` e `a` a `e` são retornadas, com cada letra sendo um elemento no array.

```js
const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regexp = /[A-E]/gi;
const matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

> **Nota:** Veja também {{jsxref("String.prototype.matchAll()")}} e [Pesquisa avançada com sinalizadores](/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions#Pesquisa_avan%C3%A7ada_com_Flags).

### Usando grupos de captura nomeados

Em navegadores que suportam grupos de captura nomeados, o código a seguir captura "`fox`" ou "`cat`" em um grupo denominado "`animal`":

```js
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";

const capturingRegex = /(?<animal>fox|cat) jumps over/;
const found = paragraph.match(capturingRegex);
console.log(found.groups); // {animal: "fox"}
```

### Usando `match()` sem parâmetros

```js
const str = "nada se perde, tudo se transforma";

str.match(); // retorna [""]
```

### Um objeto não-RegExp como parâmetro

Quando o parâmetro _`regexp`_ é uma string ou um número, ele é convertido implicitamente em um {{jsxref("RegExp")}} usando o `new RegExp(regexp)`.

Se for um número positivo com um sinal positivo, `RegExp()` irá ignorar o sinal positivo.

```js
const str1 =
  "NaN significa 'não é um número'. Infinity contem -Infinity e +Infinity em JavaScript.";
const str2 = "Meu avô tem 65 anos e minha avô tem 63.";
const str3 = "O contrato foi declarado null (nulo) e void (sem efeito)";
str1.match("número"); // "número" é um string. retorna ["número"]
str1.match(NaN); // o tipo de NaN é um número. retorna ["NaN"]
str1.match(Infinity); // o tipo de Infinity é um número. retorna ["Infinity"]
str1.match(+Infinity); // retorna ["Infinity"]
str1.match(-Infinity); // retorna ["-Infinity"]
str2.match(65); // retorna ["65"]
str2.match(+65); // Um número com sinal positivo. retorna ["65"]
str3.match(null); // retorna ["null"]
```

## Especificações

| Especificações                                                               | Estado             | Comentário                                        |
| ---------------------------------------------------------------------------- | ------------------ | ------------------------------------------------- |
| ECMAScript 3rd Edition.                                                      | Standard           | Definição inicial. Implementado no JavaScript 1.2 |
| {{SpecName('ES5.1', '#sec-15.5.4.10', 'String.prototype.match')}}            | {{Spec2('ES5.1')}} |                                                   |
| {{SpecName('ES6', '#sec-string.prototype.match', 'String.prototype.match')}} | {{Spec2('ES6')}}   |                                                   |

## Navegadores compatíveis

{{Compat("javascript.builtins.String.match")}}

## Veja também

- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
