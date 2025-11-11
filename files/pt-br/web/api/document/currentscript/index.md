---
title: Document.currentScript
slug: Web/API/Document/currentScript
---

{{ ApiRef("DOM") }}

Retorna o elemento que está sendo processado atualmente.

## Sintaxe

```
var curScriptElement = document.currentScript;
```

## Exemplo

O exemplo abaixo verifica se o script está sendo executado de forma assíncrona:

```js
if (document.currentScript.async) {
  console.log("Execução assíncrona");
} else {
  console.log("Execução síncrona");
}
```

[View Live Examples](https://mdn.dev/archives/media/samples/html/currentScript.html)

## Nota

Se o código estiver sendo chamado como um callback ou manipulador de eventos, ele não irá referenciar o elemento; a referência ao elemento só acontece quando ele está sendo processado inicialmente.

## Compatibilidade com navegadores

{{Compat}}

## Especificações

- [HTML5](https://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#dom-document-currentscript)

## Veja também

- {{HTMLElement("script")}}
- {{domxref("element.onafterscriptexecute")}}
- {{domxref("element.onbeforescriptexecute")}}
