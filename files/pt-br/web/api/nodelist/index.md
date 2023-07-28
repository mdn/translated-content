---
title: NodeList
slug: Web/API/NodeList
---

{{APIRef("DOM")}}

Objetos **`NodeList`** são coleções de nodos semelhantes aos objetos retornados pelos métodos {{domxref("Node.childNodes")}} e {{domxref("document.querySelectorAll()")}}.

> **Nota:** Apesar de `NodeList` não ser um `Array`, é possível ser iterada usando o método `forEach()`. Muitos navegadores antigos ainda não implementaram este método.

Em alguns casos, `NodeList` é uma _coleção viva_, ou seja, toda alteração feita no {{ Glossary("DOM") }} reflete nos elementos da coleção. Por exemplo, {{ domxref("Node.childNodes") }} é uma coleção viva:

```js
var parent = document.getElementById("parent");
var child_nodes = parent.childNodes;
console.log(child_nodes.length); // let's assume "2"
parent.appendChild(document.createElement("div"));
console.log(child_nodes.length); // should output "3"
```

Já em outros casos `NodeList` é um _coleção estática_, significando que toda alteração subsequente ao {{ Glossary("DOM") }} não afeta o conteúdo da coleção. {{domxref("document.querySelectorAll()")}} é um exemplo de método que retorna uma `NodeList` estática.

É aconselhável lembrar dessa distinção quando for escolher como iterar sobre os itens de uma `NodeList`, e como você faz o _cache_ do tamanho dessa lista.

## Propriedades

- {{domxref("NodeList.length")}}
  - : A quantidade de nodos na `NodeList`.

## Métodos

- {{domxref("NodeList.item()")}}
  - : Retorna um item da lista pelo índice, ou `null` se o índice for inválido; pode ser usado como uma alternativa a `nodeList[idx]` (que retorna `undefined` quando `idx` é inválido).
- {{domxref("NodeList.entries()")}}
  - : Retorna um {{jsxref("Iteration_protocols","iterador")}} que permite passar por todos os pares chave/valor contidos no objeto.
- {{domxref("NodeList.forEach()")}}
  - : Executa uma função recebida uma vez para cada elemento no `NodeList`.
- {{domxref("NodeList.keys()")}}
  - : Retorna um {{jsxref("Iteration_protocols","iterador")}} que permite passar por todas as chaves dos pares chave/valor contidos no objeto.
- {{domxref("NodeList.values()")}}
  - : Retorna um {{jsxref("Iteration_protocols","iterador")}} que permite passar por todos os valores dos pares chave/valor contidos no objeto.

## Exemplo

É possivel iterar sobre os items de um `NodeList` usando:

```js
for (var i = 0; i < myNodeList.length; ++i) {
  var item = myNodeList[i]; // Calling myNodeList.item(i) isn't necessary in JavaScript
}
```

Não caia na tentação de usar [for...in](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in) ou [for each...in](/pt-BR/docs/Web/JavaScript/Reference/Statements/for_each...in) para enumerar os items de uma lista, já que também serão enumeradas as propriedades `length` e `item` da `NodeList`, o que causará erros se o seu script assumir que processará apenas objetos {{ domxref("element") }}. Não esquecendo que `for..in` **não** garante a iteração nas propriedades de forma ordenada.

[`for...of`](/pt-BR/docs/JavaScript/Reference/Statements/for...of) iterará sobre os objetos da `NodeList` de maneira correta:

```js
var list = document.querySelectorAll("input[type=checkbox]");
for (var item of list) {
  item.checked = true;
}
```

Navegadores modernos suportam métodos de iteração, {{ domxref("NodeList.forEach()", "forEach()") }}, bem como {{ domxref("NodeList.entries()", "entries()") }}, {{ domxref("NodeList.values()", "values()") }}, e {{ domxref("NodeList.keys()", "keys()") }}

Há também um jeito compatível com o Internet Explorer de usar {{ jsxref("Array.forEach()", "Array.prototype.forEach") }} para iteração.

```js
var list = document.querySelectorAll("input[type=checkbox]");
Array.prototype.forEach.call(list, function (item) {
  item.checked = true;
});
```

## NodeList prototype

Você também pode adicionar protótipos para `NodeList`:

```js
var elements = document.querySelectorAll(".suggestions");

NodeList.prototype.addEventListener = function (event, func) {
  this.forEach(function (content, item) {
    content.addEventListener(event, func);
  });
};

function log() {
  console.log(this, " was clicked");
}

elements.addEventListener("click", log);
//or
elements.addEventListener("click", function () {
  console.log(this, "  awas clicked");
});
// output from both will be element was clicked the element would be HTML Element
```

Para mais informações sobre forEach veja {{ jsxref("Array.forEach()", "Array.prototype.forEach") }}.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
