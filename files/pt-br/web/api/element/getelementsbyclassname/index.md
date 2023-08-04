---
title: Element.getElementsByClassName()
slug: Web/API/Element/getElementsByClassName
---

{{APIRef("DOM")}}

O método **`getElementsByClassName()`** da interface {{domxref("Element")}} retorna um {{domxref("HTMLCollection")}} atualizado simultaneamente que contém todos os elementos descendentes da classe ou das classes especificadas.

O método {{domxref("Document.getElementsByClassName", "getElementsByClassName()")}} da interface {{domxref("Document")}} funciona da mesma forma, exceto que atua em todo o documento, começando da raíz.

## Sintaxe

```
var elements = element.getElementsByClassName(names);
```

### Parâmetros

- `names`
  - : Uma {{domxref("DOMString")}} contendo um ou mais nomes de classes separados por espaço em branco.

### Valor de retorno

Um {{domxref("HTMLCollection")}} que contém uma lista de elementos atualizada em tempo real com todos os elementos que são membros das classes especificadas em `names`.

## Notas de uso

Habitualmente, o conjunto de elementos retornado será atualizado simultaneamente com as mudanças feitas, refletindo no estado atual da árvore DOM, no elemento em que a função foi chamada. Assim que novos elementos que satisfazem as classes contidas em `names` são adicionados na subárvore, eles imediatamente aparecem no conjunto de elementos. Em um exemplo similar, se um elemento existente que não satisfaz nenhuma classe contida em `names` tem as suas classes ajustadas para que satisfaça, ele irá instantaneamente ser adicionado ao conjunto de elementos.

O oposto disso também acontece; os elementos que não satisfazerem mais as classes contidas em `name` serão removidos instantaneamente do conjunto.

> **Nota:** No modo [quirks](/pt-BR/docs/Web/HTML/Quirks_Mode_and_Standards_Mode), o nome das classes são comparadas da forma case-insensitive. Caso contrário, considere case sensitive.

## Exemplos

### Usando uma única classe

Para procurarmos elementos que incluem uma classe específica, nós apenas informamos o nome da classe ao chamar `getElementsByClassName()`:

```js
element.getElementsByClassName("test");
```

Esse exemplo retorna todos os elementos que possuem a classe `test`, e que também são filhos do elemento que possui o `id` com valor `main`:

```js
document.getElementById("main").getElementsByClassName("test");
```

### Usando várias classes

Para retornar elementos que incluem as classes `red` and `test`:

```js
element.getElementsByClassName("red test");
```

### Examinando os resultados

You can use either the {{domxref("HTMLCollection.item", "item()")}} method on the returned `HTMLCollection` or standard array syntax to examine individual elements in the collection. However **the following code will not work** as one might expect because `"matches"` will change as soon as any `"colorbox"` class is removed.

```js
var matches = element.getElementsByClassName("colorbox");

for (var i = 0; i < matches.length; i++) {
  matches[i].classList.remove("colorbox");
  matches.item(i).classList.add("hueframe");
}
```

Instead, use another method, such as:

```js
var matches = element.getElementsByClassName("colorbox");

while (matches.length > 0) {
  matches.item(0).classList.add("hueframe");
  matches[0].classList.remove("colorbox");
}
```

This code finds descendant elements with the `"colorbox"` class, adds the class `"hueframe"`, by calling `item(0)`, then removes `"colorbox"` (using array notation). Another element (if any are left) will then become `item(0)`.

### Filtering the results using array methods

We can also use methods of {{jsxref("Array.prototype")}} on any {{ domxref("HTMLCollection") }} by passing the {{domxref("HTMLCollection")}} as the method's `this` value. Here we'll find all {{HTMLElement("div")}} elements that have a class of `test`:

```js
var testElements = document.getElementsByClassName("test");
var testDivs = Array.prototype.filter.call(
  testElements,
  function (testElement) {
    return testElement.nodeName === "DIV";
  },
);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
