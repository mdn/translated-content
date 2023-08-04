---
title: Document.createDocumentFragment()
slug: Web/API/Document/createDocumentFragment
---

{{ApiRef("DOM")}}

Создаёт новый пустой {{domxref("DocumentFragment")}}.

## Syntax

```
var fragment = document.createDocumentFragment();
```

`fragment` это ссылка на пустой объект {{domxref("DocumentFragment")}}.

## Description

`DocumentFragment`s являются DOM нодами. Они, при этом, не являются частями основного дерева DOM. Обычно используются для создания фрагмента документа, добавления в него новых элементов/нод, а затем присоединения этого фрагмента к основному дереву. В основном дереве фрагмент буден заменён собственными дочерними элементами.

Поскольку фрагмент документа хранится **в памяти** и не является частью основного дерева, добавление в него дочерних элементов не вызывает [reflow](https://developers.google.com/speed/articles/reflow?csw=1) (вычисление геометрии и позиций элементов). В следствие этого, использование фрагментов документа часто [увеличивает производительность](http://ejohn.org/blog/dom-documentfragments/).

## Example

```js
var element = document.getElementById("ul"); // assuming ul exists
var fragment = document.createDocumentFragment();
var browsers = ["Firefox", "Chrome", "Opera", "Safari", "Internet Explorer"];

browsers.forEach(function (browser) {
  var li = document.createElement("li");
  li.textContent = browser;
  fragment.appendChild(li);
});

element.appendChild(fragment);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- {{domxref("DOMImplementation.createDocument", "document.implementation.createDocument()")}}
- {{domxref("documentFragment")}}
