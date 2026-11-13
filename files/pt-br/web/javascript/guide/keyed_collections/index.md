---
title: Coleções chaveadas
slug: Web/JavaScript/Guide/Keyed_collections
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}

Este capítulo apresenta coleções de dados que são ordenados por uma chave; Objetos Map e Set contêm elementos que são iteráveis em ordem de inserção.

## Mapas

### `Objeto Map`

ECMAScript 6 apresenta uma nova estrutura de dados para mapear valores para valores. Um objeto {{jsxref("Map")}} é um simples mapa de chave/valor que pode ter seus elementos iterados por ordem de inserção.

O código a seguir mostra algumas operações básicas com um `Map`. Veja também a página de referência do {{jsxref("Map")}} para mais exemplos e a API completa. Você pode usar um laço {{jsxref("Statements/for...of","for...of")}} para retornar um array de `[chave, valor]` para cada iteração.

```js
var sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (var [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
```

### `Object` e `Map` comparados

Tradicionalmente, {{jsxref("Object", "objetos", "", 1)}} tem sido usado para mapear strings para valores. Objetos permitem que você defina chaves para valores, recupere esses valores, exclua chaves e detecte se algo está armazenado em uma chave. Objetos `Map`, contudo, possuem algumas vantagens que os tornam mapas melhores.

- As chaves de um `Objeto` são {{jsxref("String","Strings")}}, onde elas podem ser de qualquer valor para um `Map`.
- Você pode obter o tamanho de um `Map` facilmente enquanto que para um `Object`, você tem que obter manualmente o seu tamanho.
- A iteração de mapas é por ordem de inserção dos elementos.
- Um `Object` tem um protótipo, então existem chaves padrão no mapa. (este pode ser ignorado usando `map = Object.create(null)`).

Estes dois tipos podem ajudar você a decidir se usa um `Map` ou um `Object`:

- Use mapas sobre objetos quando as chaves forem desconhecidas até a execução, e quando todas as chaves são do mesmo tipo e todos valores são do mesmo tipo.
- Use mapas caso haja a necessidade de armazenar valores primitivos como chaves, porque objetos tratam cada chave como uma string ou um valor numérico, valor booleano ou qualquer outro valor primitivo.
- Use objetos quando há uma lógica que opera em elementos individuais.

### `Objeto WeakMap`

O objeto {{jsxref("WeakMap")}} é uma coleção de pares de chave/valor em que as **chaves são somente objetos** e seus valores podem ser valores arbitrários. As referências do objeto nas chaves são _fracamente_ mantidas, isso significa que eles são alvo da garbage collection (coleta de lixo) se não houver nenhuma outra referência para o objeto. A API `WeakMap` é a mesma API do `Map`.

Uma diferença para objetos `Map` é que chaves `WeakMap` não são enumeráveis (isto é, não há um método que dê a você uma lista de chaves). Se eles fossem, a lista dependeria do estado da coleta de lixo, introduzindo um não-determinismo.

Para mais informações e código de exemplo, veja também "Por quê WeakMap?" na página de referência {{jsxref("WeakMap")}}.

Um caso de uso de objetos `WeakMap` é armazenar dados privados para um objeto ou ocultar detalhes de implementação. O exemplo a seguir é Nick Fitzgerald a partir de um post ["Ocultando detalhes de implementação com WeakMaps ECMAScript 6"](https://fitzgen.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html) em seu blog. Os dados privados e métodos pertencem ao objeto e são armazenados nos objetos WeakMap `privados`. Tudo exposto na instância e o protótipo é público, todo o restante é inacessível a partir do mundo externo por que `privado` não é exportado pelo módulo.

```js
const privates = new WeakMap();

function Public() {
  const me = {
    // Dados privados vem aqui
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // Faça coisas com dado privado em `me`...
};

module.exports = Public;
```

## Conjuntos

### `Objeto Set`

Objetos {{jsxref("Set")}} são coleções de valores. Você pode iterar seus elementos em ordem de inserção. Um valor em um `Set` só pode ocorrer uma vez; ele é único em uma coleção `Set`.

O código a seguir mostra algumas operações básicas com um `Set`. Veja também a página de referência {{jsxref("Set")}} para mais exemplos e a API completa.

```js
var mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"
```

### Conversão entre Array e Set

Você pode criar um {{jsxref("Array")}} a partir de um Set usando {{jsxref("Array.from")}} ou o [operador de propagação](/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax). Além disso, o construtor `Set` aceita um `Array` para converter em outra direção. Observe novamente que objetos `Set` armazenam valores únicos, então quaisquer elementos duplicados de um Array são excluídos quando convertidos.

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### `Array` e `Set` comparados

Tradicionalmente, um conjunto de elementos tem sido armazenados em arrays JavaScript em muitas situações. O novo objeto `Set`, contudo, tem algumas vantagens:

- Checar se um elemento existe em uma coleção usando {{jsxref("Array.indexOf", "indexOf")}} para arrays é lento.
- Objetos `Set` permitem que você exclua elementos por seu valor. Com um array você teria que unir baseado no índice do elemento.
- O valor {{jsxref("NaN")}} não pode ser encontrado com `indexOf` no array.
- Objetos `Set` armazenam valores únicos, você não tem que manter o controle de duplicidades manualmente por você mesmo.

### `Objeto WeakSet`

Objetos {{jsxref("WeakSet")}} são coleções de objetos. Um objeto no `WeakSet` só pode ocorrer uma vez; Isto é único em coleções `WeakSet` e objetos não são enumeráveis.

As principais diferenças para objetos {{jsxref("Set")}} são:

- Em contraste com `Sets`, `WeakSets` são **apenas coleções de objetos** e não de valores arbritários de qualquer tipo.
- O `WeakSet` é _fraco_: Referências para objetos são fracamente realizadas na coleção. Se não há outra referência para um objeto armazenado no `WeakSet`, eles podem ser coletados pelo coletor de lixo. Isso significa também que não há uma lista de objetos correntes armazenados na coleção. `WeakSets` não são enumeráveis.

Os casos de uso do objeto `WeakSet` são limitados. Eles não vão desperdiçar memória para ser seguro o uso de elementos DOM como chaves e marcá-los para propósitos de controle, por exemplo.

## Igualdade de chave e valor do `Map` and `Set`

Ambos, a igualdade de chaves de objetos `Map` e a igualdade de valor de objetos `Set`, são baseados no "[algoritmo mesmo valor de zero](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)":

- Igualdade funciona como o operador de comparação de identidade `===`.
- `-0` e `+0` são considerados iguais.
- {{jsxref("NaN")}} é considerado igual a ela mesmo (contrário de `===`).

{{PreviousNext("Web/JavaScript/Guide/Indexed_collections", "Web/JavaScript/Guide/Working_with_objects")}}
