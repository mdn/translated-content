---
title: Array.prototype.splice()
slug: Web/JavaScript/Reference/Global_Objects/Array/splice
---

{{JSRef("Global_Objects", "Array")}}

## Resumo

O método **splice()** altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

{{EmbedInteractiveExample("pages/js/array-splice.html")}}

## Sintaxe

```
array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])

array.splice(indice) // SpiderMonkey/Firefox extension
```

### Parâmetros

- `indice`
  - : Índice o qual deve iniciar a alterar a lista. Se maior que o tamanho total da mesma, nenhum elemento será alterado. Se negativo, irá iniciar a partir daquele número de elementos a partir do fim.
- `deleteCount`

  - : Um inteiro indicando o número de antigos elementos que devem ser removidos.

    Se o parâmetro `deleteCount` não é especificado, ou se é maior que o número de elementos restantes na lista iniciando pelo índice, então todos os elementos até o fim da lista serão deletados.

    Se `deleteCount` é 0, nenhum elemento é removido. Neste caso você deve especificar pelo menos um novo elemento.

- `elemento1, ..., elementoN`
  - : Os elementos a adicionar na lista. Se você não especificar nenhum elemento, splice simplesmente removerá elementos da mesma.

### Retorno

Uma lista contendo os elementos removidos. Se apenas um elemento é removido, por exemplo, uma lista contendo apenas um elemento é retornada. Se nenhum elemento é removido, uma lista vazia é retornada.

**Descrição**

Se você especificar um número diferente de elementos a inserir comparado ao número de elementos que você está removendo, a lista terá um tamanho diferente no final da execução.

## Exemplo

### Exemplo: Removendo 0 elementos do indice 2, e inserindo "drum"

O script a seguir ilustra o uso do _splice_:

```js
var myFish = ["angel", "clown", "mandarin", "surgeon"];

//remove 0 elementos a partir do índice 2, e insere "drum"
var removed = myFish.splice(2, 0, "drum");
//myFish é ["angel", "clown", "drum", "mandarin", "surgeon"]
//removed é [], nenhum elemento removido

//remove 1 elemento do índice 3
removed = myFish.splice(3, 1);
//myFish é ["angel", "clown", "drum", "surgeon"]
//removed é ["mandarim"]

//remove 1 elemento a partir do índice 2, e insere "trumpet"
removed = myFish.splice(2, 1, "trumpet");
//myFish é ["angel", "clown", "trumpet", "surgeon"]
//removed é ["drum"]

//remove 2 elementos a partir do índice 0, e insere "parrot", "anemone" e "blue"
removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
//myFish é ["parrot", "anemone", "blue", "trumpet", "surgeon"]
//removed é ["angel", "clown"]

//remove 2 elementos a partir do indice 3
removed = myFish.splice(3, Number.MAX_VALUE);
//myFish é ["parrot", "anemone", "blue"]
//removed é ["trumpet", "surgeon"]
```

## Especificações

| Especificação                                                                | Status             | Comentário                                        |
| ---------------------------------------------------------------------------- | ------------------ | ------------------------------------------------- |
| ECMAScript 3rd Edition                                                       | Padrão             | Definição inicial. Implementado no JavaScript 1.2 |
| {{SpecName('ES5.1', '#sec-15.4.4.12', 'Array.prototype.splice')}}            | {{Spec2('ES5.1')}} |                                                   |
| {{SpecName('ES6', '#sec-array.prototype.splice', 'Array.prototype.splice')}} | {{Spec2('ES6')}}   |                                                   |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.splice")}}

## Veja Também

- {{jsxref("Array.push", "push")}} / {{jsxref("Array.pop", "pop")}} - adiciona/remove elementos do final do array;
- {{jsxref("Array.unshift", "unshift")}} / {{jsxref("Array.shift", "shift")}} - adiciona/remove elementos do início do array;
- {{jsxref("Array.concat", "concat")}} - returns a new array comprised of this array joined with other array(s) and/or value(s).
