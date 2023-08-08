---
title: Set
slug: Web/JavaScript/Reference/Global_Objects/Set
---

{{JSRef("Global_Objects", "Set")}}

## Sumário

O objeto **`Set`** permite que você armazene valores _únicos_ de qualquer tipo, desde {{Glossary("Primitive", "valores primitivos")}} a referências a objetos.

## Sintaxe

```
 new Set([iterable]);
```

### Parâmetros

- iterable
  - : Se um [objeto iterável](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of) é passado, todos os seus elementos serão adicionados ao novo Set. Se tal parâmetro não for específicado, ou se seu valor for `null`, o novo `Set` estará vazio.

## Descrição

Objetos `Set` são coleções de valores nas quais é possível iterar os elementos em ordem de inserção. Um valor no `Set` **pode ocorrer apenas uma vez**; ele é único na coleção do `Set`.

### Igualdade de valores

Como cada valor no Set deve ser único, a igualdade será checada e não é baseada no mesmo algoritmo que aquele usado no operador ===. Especificamente, para `Set`s, `+0` (que é exatamente igual a - 0) e `- 0` são valores diferentes. No entanto, isto foi modificado na última especificação ECMAScript 2015. Iniciado com o Gecko 29.0 ([Erro do Firefox 952870](https://bugzil.la/952870)) e pelo [recent nightly Chrome](https://code.google.com/p/v8/issues/detail?id=3069), +0 e -0 são tratados com sendo o mesmo valor em objetos conjunto (Set). Também, `NaN` e `undefined` podem ser armazenados em um conjunto Set.

## Propriedades

- `Set.length`

  - : O valor da propriedade comprimento é 0.

    Para contar o número de elementos de um `Set`, use {{jsxref("Set.prototype.size")}}.

- {{jsxref("Set.@@species", "get Set[@@species]")}}
  - : A função construtora usada para criar objetos derivados.
- {{jsxref("Set.prototype")}}
  - : Representa o prototype do constructor do `Set`. Permite a adição de propriedades para todos os objetos do tipo `Set`.

## Instâncias `Set`

Todas as instâncias de `Set` herdam de {{jsxref("Set.prototype")}}.

### Propriedades

{{page('pt-BR/Web/JavaScript/Reference/Global_Objects/Set/prototype','Properties')}}

### Métodos

{{page('pt-BR/Web/JavaScript/Reference/Global_Objects/Set/prototype','Methods')}}

## Exemplos

### Utilizando o objeto `Set`

```js
var meuSet = new Set();

meuSet.add(1); // meuSet [1]
meuSet.add(5); // meuSet [1, 5]
meuSet.add(5); // 5 já foi adicionando, portanto, meuSet [1, 5]
meuSet.add("texto");
var o = { a: 1, b: 2 };
meuSet.add(o);

meuSet.add({ a: 1, b: 2 }); //  o está referenciando outro objeto

meuSet.has(1); // true
meuSet.has(3); // false, 3 não foi adicionado ao set (Conjunto)
meuSet.has(5); // true
meuSet.has(Math.sqrt(25)); // true
meuSet.has("Texto".toLowerCase()); // true
meuSet.has(o); // true

meuSet.size; // 5

meuSet.delete(5); // remove 5 do set
meuSet.has(5); // false, 5 já foi removido

meuSet.size; // 4, nós simplesmente removemos um valor

console.log(meuSet); // Set { 1, 'texto', { a: 1, b: 2 }, { a: 1, b: 2 } }
```

### Iterando objetos `Set`

```js
// iterar sobre os itens em set
// loga os itens na ordem: 1, "texto"
for (let item of meuSet) console.log(item);

// loga os itens na ordem: 1, "texto"
for (let item of meuSet.keys()) console.log(item);

// loga os itens na ordem: 1, "texto"
for (let item of meuSet.values()) console.log(item);

// loga os itens na ordem: 1, "texto"
//(key e value são os mesmos aqui)
for (let [key, value] of meuSet.entries()) console.log(key);

// converte Set para um Array
var meuArr = [v for (v of mySet)]; // [1, "some text"]

// o seguinte também funcionará se for executado em um documento HTML
mySet.add(document.body);
mySet.has(document.querySelector("body")); // true

// a conversão entre Set e Array
mySet2 = Set([1,2,3,4]);
mySet2.size; // 4
[...mySet2]; // [1,2,3,4]

// intersecção pode ser simulado via
var intersection = new Set([...set1].filter(x => set2.has(x)));

// Iterar entradas set com forEach
meuSet.forEach(function(value) {
  console.log(value);
});

// 1
// 2
// 3
// 4
```

### Implementando operações básicas entre conjuntos

```js
function isSuperset(set, subset) {
  for (var elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

function uniao(setA, setB) {
  var _uniao = new Set(setA);
  for (var elem of setB) {
    _uniao.add(elem);
  }
  return _uniao;
}

function interseccao(setA, setB) {
  var _interseccao = new Set();
  for (var elem of setB) {
    if (setA.has(elem)) {
      _interseccao.add(elem);
    }
  }
  return _interseccao;
}

function diferencaSimetrica(setA, setB) {
  var _diferenca = new Set(setA);
  for (var elem of setB) {
    if (_diferenca.has(elem)) {
      _diferenca.delete(elem);
    } else {
      _diferenca.add(elem);
    }
  }
  return _diferenca;
}

function diferenca(setA, setB) {
  var _diferenca = new Set(setA);
  for (var elem of setB) {
    _diferenca.delete(elem);
  }
  return _diferenca;
}

//Exemplos
var setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]),
  setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // => true
uniao(setA, setC); // => Set [1, 2, 3, 4, 5, 6]
interseccao(setA, setC); // => Set [3, 4]
diferencaSimetrica(setA, setC); // => Set [1, 2, 5, 6]
diferenca(setA, setC); // => Set [1, 2]
```

### Relação com objetos `Array`

```js
var myArray = ["value1", "value2", "value3"];

// Use o construtor regular de Set para transformar um array dentro de um Set
var mySet = new Set(myArray);

mySet.has("value1"); // retorna true

// Use o operador de propagação para transformar um Set em um Array.
alert(uneval([...mySet])); // Irá mostrar-lhe exatamente o mesmo Array como myArray
```

### Removendo elementos duplicados de um `Array`

```js
// Use para remover elementos duplicados de um Array

const numeros = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

console.log([...new Set(numeros)]);

// [2, 3, 4, 5, 6, 7, 32]
```

### Relação com objetos `String`

```js
var texto = "India";

var meuSet = new Set(texto); // Set ['I', 'n', 'd', 'i', 'a']
meuSet.size; // 5
```

## Especificações

| Especificação                                      | Status               | Comentário         |
| -------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES2015', '#sec-set-objects', 'Set')}}  | {{Spec2('ES2015')}}  | Definição inicial. |
| {{SpecName('ESDraft', '#sec-set-objects', 'Set')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Set")}}

## Veja também

- {{jsxref("Map")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
