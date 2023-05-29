---
title: HTMLElement.contextMenu
slug: orphaned/Web/API/HTMLElement/contextMenu
original_slug: Web/API/HTMLElement/contextMenu
---

{{APIRef("HTML DOM")}}{{deprecated_header()}}

A propriedade **`HTMLElement.contextMenu`** refere-se ao menu de contexo atribuído aum elemento usando o {{htmlattrxref("contextmenu")}} atributo. O menu em sí é criado usando o {{HTMLElement("menu")}} elemento.

## Sintaxe

```
var elementContextMenu = element.contextMenu;
```

## Exemplo

```js
var contextMenu = document.getElementById("element").contextMenu;

// Altere o label da primeira entrada do menu
contextMenu.firstElementChild.label = "New label";
```

## Compatibilidade com navegadores

{{Compat("api.HTMLElement.contextMenu")}}

## Veja também

- {{htmlattrxref("contextmenu")}}
- {{HTMLElement("menu")}}
- {{HTMLElement("menuitem")}}
