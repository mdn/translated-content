---
title: Console.table()
slug: Web/API/Console/table
translation_of: Web/API/Console/table
---
{{APIRef("Console API")}}

Exibe dados tabulares como uma tabela.

Essa função recebe um parâmetro obrigatório `data`, que deve ser um array ou um objeto, e um parametro opcional `columns`.

Registra `data` como uma tabela. Cada elemento no array (ou propriedade enumerável se `data` for um objeto) será uma linha na tabela.

A primeira coluna na tabela será rotulada `(index)`. Se `data` for um array, seus valores serão os índices da matriz. Se `data` for um objeto, seus valores serão os nomes das propriedades. Observe que (no Firefox) o `console.table` está limitado a exibir 1000 linhas (a primeira linha é o índice rotulado).

{{AvailableInWorkers}}

### Coleções de tipos primitivos

O argumento `data` pode ser um array ou um objeto.

```js
// um array de strings

console.table(["apples", "oranges", "bananas"]);
```

![](https://mdn.mozillademos.org/files/8567/console-table-array.png)

```js
// um objeto cujas propriedades são strings

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var me = new Person("John", "Smith");

console.table(me);
```

![](https://mdn.mozillademos.org/files/8559/console-table-simple-object.png)

### Coleções de tipos compostos

Se os elementos no array, ou propriedades no objeto, forem arrays ou objetos, seus elementos ou propriedades serão enumerados na linha, um por coluna:

```js
// um array de arrays

var people = [["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]]
console.table(people);
```

![Table displaying array of arrays](https://mdn.mozillademos.org/files/8561/console-table-array-of-array.png)

```js
// um array de objetos

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var john = new Person("John", "Smith");
var jane = new Person("Jane", "Doe");
var emily = new Person("Emily", "Jones");

console.table([john, jane, emily]);
```

Observe que, se a matriz contiver objetos, as colunas serão rotuladas com o nome da propriedade.

![Table displaying array of objects](https://mdn.mozillademos.org/files/8563/console-table-array-of-objects.png)

```js
// um objeto cujas propriedades são objetos

var family = {};

family.mother = new Person("Jane", "Smith");
family.father = new Person("John", "Smith");
family.daughter = new Person("Emily", "Smith");

console.table(family);
```

![Table displaying object of objects](https://mdn.mozillademos.org/files/8565/console-table-object-of-objects.png)

### Restringindo as colunas exibidas

Por padrão, `console.table()` lista todos os elementos em cada linha. Você pode usar o parâmetro opcional `columns` para selecionar um subconjunto de colunas a serem exibidas:

```js
// um array de objetos, registrando apenas firstName

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

var john = new Person("John", "Smith");
var jane = new Person("Jane", "Doe");
var emily = new Person("Emily", "Jones");

console.table([john, jane, emily], ["firstName"]);
```

![Table displaying array of objects with filtered output](https://mdn.mozillademos.org/files/8569/console-table-array-of-objects-firstName-only.png)

### Classificando colunas

Você pode classificar a tabela por uma coluna específica clicando no rótulo dessa coluna.

## Sintaxe

```
console.table(data [, columns]);
```

### Parâmentros

- `data`
  - : Os dados a serem exibidos. Deve ser um array ou um objeto.
- `columns`
  - : Um array contendo os nomes das colunas para incluir na saída.

## Especificações

| Especificação                                                                | Status                           | Comentário        |
| ---------------------------------------------------------------------------- | -------------------------------- | ----------------- |
| {{SpecName("Console API", "#table", "console.table()")}} | {{Spec2("Console API")}} | Definição inicial |

## Compatibilidade com navegadores

{{Compat("api.Console.table")}}
