---
title: Document.body
slug: Web/API/Document/body
---

{{APIRef("DOM")}}

Retorna o elemento {{HTMLElement("body")}} ou o {{HTMLElement("frameset")}} do documento atual, ou `null` se nenhum destes elementos existir.

## Sintaxe

```
var objRef = document.body;
document.body = objRef;
```

## Exemplo

```js
// No HTML: <body id="oldBodyElement"></body>
alert(document.body.id); // "oldBodyElement"

var aNewBodyElement = document.createElement("body");

aNewBodyElement.id = "newBodyElement";
document.body = aNewBodyElement;
alert(document.body.id); // "newBodyElement"
```

## Notas

`document.body` é o elemento que envolve o conteúdo do documento. Em documentos com conteúdo no `<body>`, retorna o elemento `<body>`, e em documentos que usam frameset, retorna o elemento `<frameset>` mais periférico.

Apesar do `body` ser configurável, definir um novo `body` em um documento irá remover todos os elementos contidos no elemento `<body>` existente.

## Especificação

- [DOM Level 2 HTML: HTMLDocument.body](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-56360201)
- [HTML5: DOM Tree Accessors](https://www.w3.org/TR/html5/dom.html#dom-tree-accessors)

## Veja Também

- {{domxref("document.head")}}
