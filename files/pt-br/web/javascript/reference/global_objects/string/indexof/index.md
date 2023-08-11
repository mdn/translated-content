---
title: String.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/indexOf
---

{{JSRef("Global_Objects", "String")}}

## Sumário

O método `indexOf()` retorna o índice da primeira ocorrência do valor fornecido em searchValue, começando a busca a partir de `fromIndex`. Retorna `-1` se o valor não for encontrado.

> **Nota:** Para o método de Array, veja {{jsxref("Array.prototype.indexOf()")}}.

## Sintaxe

```
str.indexOf(searchValue[, fromIndex])
```

### Parâmetros

- `searchValue`
  - : Uma string representando o valor a ser buscado. Se nenhuma string for fornecida explicitamente, `searchValue` terá o valor de `undefined`, e esse valor será buscado na string atual. Por exemplo, `'undefined'.indexOf()` retornará `0`, já que `undefined` é encontrado na posição `0`. Já `'undefine'.indexOf()` retornará `-1`, já que `undefined` não pôde ser encontrado.
- `fromIndex`
  - : Um número inteiro representando um índice da string original a partir da qual a busca deve começar. Por padrão é `0`. Se `fromIndex < 0`, a string toda é percorrida (equivale a passar 0). Se `fromIndex >= str.length`, o método retornará `-1`, já que a busca será iniciada após o final da string.

### Valor retornado

O índice da primeira ocorrência de _searchValue_, ou `-1` se não for encontrado.

Uma string vazia no _searchValue_ produz resultados estranhos. Sem `fromIndex`, ou com qualquer `fromIndex` menor que o comprimento da string, o valor retornado é o próprio `fromIndex`:

```js
"Olá, mundo".indexOf(""); // retorna 0
"Olá, mundo".indexOf("", 0); // retorna 0
"Olá, mundo".indexOf("", 3); // retorna 3
"Olá, mundo".indexOf("", 8); // retorna 8
```

Entretanto, com qualquer `fromIndex` igual ou maior que o comprimento da string, o valor retornado é o comprimento da string:

```js
"Olá, mundo".indexOf("", 11); // retorna 10
"Olá, mundo".indexOf("", 13); // retorna 10
"Olá, mundo".indexOf("", 22); // retorna 10
```

## Descrição

Caracteres em uma string são indexados da esquerda para a direita. O índice do primeiro caractere é `0`, e o índice do último caractere de uma string chamada `stringName` é `stringName.length - 1`.

```js
"Blue Whale".indexOf("Blue"); // retorna  0
"Blue Whale".indexOf("Whale"); // retorna  5
"Blue Whale".indexOf("Blute"); // retorna -1
"Blue Whale".indexOf("Whale", 0); // retorna  5
"Blue Whale".indexOf("Whale", 5); // retorna  5
"Blue Whale".indexOf("Whale", 7); // retorna -1
"Blue Whale".indexOf(""); // retorna  0
"Blue Whale".indexOf("", 9); // retorna  9
"Blue Whale".indexOf("", 10); // retorna 10
"Blue Whale".indexOf("", 11); // retorna 10
```

### Verificando ocorrências

Note que um retorno `0` não implica em `true`, e `-1` não implica em `false`. Portanto, a maneira correta de se verificar se uma string específica está contida em outra string seria:

```js
"Blue Whale".indexOf("Blue") !== -1; // true
"Blue Whale".indexOf("Bloe") !== -1; // false
```

## Exemplos

### Usando `indexOf()`

O exemplo a seguir usa `indexOf()` para localizar valores dentro da string "`Brave new world`".

```js
var anyString = "Brave new world";

console.log(
  "O índice do primeiro w partindo do começo é " + anyString.indexOf("w"),
);
// Exibe 8

console.log(
  "O índice de 'new' partindo do começo é " + anyString.indexOf("new"),
);
// Exibe 6
```

### `indexOf()` e sensibilidade a maiúsculas e minúsculas

O exemplo a seguir define duas variáveis string. Ambas contém a mesma string, exceto que a segunda string tem letras maiúsculas. O primeiro método {{domxref("console.log()")}} exibe `19`. Porém, como o método `indexOf` é sensível a letras maiúsculas e minúsculas, a string `"cheddar"` não é encontrada em `myCapString`, portanto, o segundo método {{domxref("console.log()")}} exibe `-1`.

```js
var myString = "brie, pepper jack, cheddar";
var myCapString = "Brie, Pepper Jack, Cheddar";

console.log('myString.indexOf("cheddar") é ' + myString.indexOf("cheddar"));
// Exibe 19
console.log(
  'myCapString.indexOf("cheddar") é ' + myCapString.indexOf("cheddar"),
);
// Exibe -1
```

### Usando `indexOf()` para contar as ocorrências de uma letra numa string

O exemplo a seguir atribui à variável `count` o número de ocorrências da letra `x` na string `str`:

```js
const str = "Serx ou não ser, eisx a questão";
count = 0;
pos = str.indexOf("x"); // retorna 3

while (pos != -1) {
  count++;
  pos = str.indexOf("x", pos + 1 /* o mesmo que 3 + 1 */);
}

console.log(count);
```

## Especificações

| Especificação                                                                    | Situação           | Comentário         |
| -------------------------------------------------------------------------------- | ------------------ | ------------------ |
| {{SpecName('ES1')}}                                                              | {{Spec2('ES1')}}   | Definição inicial. |
| {{SpecName('ES5.1', '#sec-15.5.4.7', 'String.prototype.indexOf')}}               | {{Spec2('ES5.1')}} |                    |
| {{SpecName('ES6', '#sec-string.prototype.indexof', 'String.prototype.indexOf')}} | {{Spec2('ES6')}}   |                    |

## Navegadores compatíveis

{{Compat("javascript.builtins.String.indexOf")}}

## Veja também

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
