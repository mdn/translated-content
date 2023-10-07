---
title: String.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/String/slice
---

{{JSRef("Global_Objects", "String")}}

## Sumário

O método `slice()` extrai uma parte de uma string e a retorna como uma nova string, sem modificar a string original.

{{EmbedInteractiveExample("pages/js/string-slice.html", "taller")}}

## Sintaxe

```
str.slice(startIndex[, endIndex])
```

### Paramêtros

- `startIndex`

  - : É o índice, de base zero, onde se inicia a extração. Se for um número negativo, será o mesmo que executar _`str.length + startIndex`_ (por exemplo, se _`startIndex`_ for _`-3`_, será o mesmo que executar _`str.length - 3`_).

    ```js
    const nome = "Ricardo";
    console.log(nome.slice(-3)); // retorna 'rdo'
    ```

    Se _`startIndex`_ for maior ou igual a `str.length`, uma string vazia será retornada.

    ```js
    const nome = "Ricardo";
    console.log(nome.slice(7)); // retorna <empty string>'
    ```

- `endIndex`

  - : Opcional. É o índice, de base zero, onde termina a extração. O caractere que possuir este índice não será incluso.

    Se omitido ou possuir valor de _`undefined`_, ou for maior que `str.length`, _`slice()`_ extrairá até o fim da string.

    ```js
    const nome = "Ricardo";

    // omitindo fimSlice
    console.log(nome.slice(0)); // retorna 'Ricardo'

    // undefined fimSlice
    let i; // variável criada sem atribuir valor
    console.log(nome.slice(0, i)); // retorna 'Ricardo'

    // passando número maior que o tamanho da string
    console.log(nome.slice(0, 7)); // retorna 'Ricardo'
    ```

    Se negativo, é o mesmo que executar _`str.length + endIndex`_ onde _`str.length`_ é o tamanho da string (por exemplo, se _`endIndex`_ é _`-3`_, é como executar `str.length - 3`).

    ```js
    const nome = "Ricardo";
    console.log(nome.slice(0, -3)); // retorna 'Rica'
    ```

    Se for um valor diferente de indefinido e, ao mesmo tempo não for um número, uma string vazia será retornada

    ```js
    const nome = "Ricardo";
    let i; // variável criada sem valor atribuído

    // passando algum valor ≠ de undefined e ≠ de número
    console.log(nome.slice(0, NaN)); // retorna <empty string>
    console.log(nome.slice(2, false)); // retorna <empty string>
    console.log(nome.slice(5, i)); // retorna 'Ricardo'
    ```

    Se `endIndex` for definido e `startIndex` for negativo, `endIndex` deve ser negativo também, do contrário uma string vazia é retornada.

    ```js
    const nome = "Ricardo";
    console.log(nome.slice(-3, 0)); // retorna <empty string>
    ```

    Caso `endIndex` seja definido e `startIndex` e `endIndex` sejam ambos positivos ou negativos, `endIndex` deve ser maior que `startIndex`, do contrário uma string vazia é retornada.

    ```js
    const nome = "Ricado";
    console.log(nome.slice(-1, -3)); // retorna <empty string>
    console.log(nome.slice(3, 1)); // retorna <empty string>
    ```

### Retorno

Uma nova string contento a porção extraída da string.

## Descrição

_`slice()`_ extrai um texto de uma string e retorna uma nova string. Modificações realizadas no texto de uma string não afetam a outra string.

_`slice()`_ extrai até, mas não inclue _`endIndex`._

`str.slice(1, 4)` extrai a partir do segundo caractere até o quarto caractere (ou seja, os caracteres de índices _`1`_, _`2`_, e _`3`_).

Por exemplo, _`str.slice(2, -1)`_ extrai a partir do terceiro carácter até o penúltimo caractere da string.

```js
const nome = "Ricardo";
console.log(nome.slice(2, -1)); // retorna 'card'
```

## Exemplos

### Exemplo: Usando `slice()` para criar uma nova string

O exemplo a seguir usa _`slice()`_ para criar uma nova string.

```js
var str1 = "A manhã está sobre nós", // o tamanho de str1 é 22
  str2 = str1.slice(3, 10),
  str3 = str1.slice(2, -2),
  str4 = str1.slice(13),
  str5 = str1.slice(22);
console.log(str2); // retorna 'anhã es'
console.log(str3); // retorna 'manhã está sobre n'
console.log(str4); // retorna 'sobre nós'
console.log(str5); // retorna <empty string>
```

### Exemplo: Usando `slice()` com índices negativos

O exemplo a seguir usa o _`slice()`_ com índices negativos.

```js
var str = "A manhã está sobre nós";
str.slice(-3); // retorna 'nós'
str.slice(-3, -1); // retorna 'nó'
str.slice(0, -1); // retorna 'A manhã está sobre nó'
```

O exemplo abaixo percorre o índice no sentido anti-horário (de trás para frente) até chegar ao índice 11 da string, que será o início. Logo após, percorre o índice da string no sentido horário até chegar ao índice 16 da string, que será o fim.

```js
console.log(str.slice(-11, 16)); // retorna "á sob"
```

O exemplo abaixo percorre o índice no sentido horário até chegar ao índice 10 da string, que será o início. Logo após, percorre o índice da string no sentido anti-horário até chegar ao índice 7 da string, que será o fim.

```js
console.log(str.slice(10, -7)); // retorna "tá so"
```

O exemplo abaixo percorre o índice no sentido anti-horário até chegar ao índice 5 da string, que será o início. Logo após, percorre o índice da string novamente no sentido anti-horário até chegar ao índice 1 da string, que será o fim.

```js
console.log(str.slice(-5, -1)); // retorna "e nó"
```

## Especificações

| Specification                                                                | Status             | Comment                                            |
| ---------------------------------------------------------------------------- | ------------------ | -------------------------------------------------- |
| ECMAScript 3rd Edition.                                                      | Standard           | Initial definition. Implemented in JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.5.4.13', 'String.prototype.slice')}}            | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-string.prototype.slice', 'String.prototype.slice')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.slice")}}

## Veja também

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.substring()")}}
- {{jsxref("Array.prototype.slice()")}}
