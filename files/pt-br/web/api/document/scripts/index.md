---
title: Document.scripts
slug: Web/API/Document/scripts
---

{{ ApiRef("DOM") }}

Retorna uma lista dos elementos {{HTMLElement("script")}} no documento. O objeto retornado é um {{domxref("HTMLCollection")}}.

## Sintaxe

```
var scriptList = document.scripts;
```

O `scriptList retornado é um` {{domxref("HTMLCollection")}}. Você pode usar isso apenas como um array para obter todos os elementos da lista.

## Exemplo

Este exemplo é para ver se a página contém elementos {{HTMLElement("script")}}.

```js
var scripts = document.scripts;

if (scripts.length) {
  alert("This page has scripts!");
}
```

## Especificação

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
