---
title: Document.fullscreen
slug: Web/API/Document/fullscreen
---

{{APIRef("Fullscreen API")}}{{Deprecated_Header}}

A propriedade de somente leitura da interface **`fullscreen`** retorna se o documento correspondente está mostrando conteúdo em modo de tela cheia (full-screen).

Apesar dessa propriedade ser de somente leitura, ela não será executa se for modificada (mesmo em modo estrito); o setter não é um operador e não será modificado.

> **Nota:** Desde que esta propriedade foi descontinuada, você pode determinar se o modo full-screen está ativo no documento checando se {{DOMxRef("Document.fullscreenElement")}} não é `null`.

## Síntaxe

```
var isFullScreen = document.fullscreen;
```

### Valor

Um valor booleano é `true` se o documento está mostrando um elemento no modo full-screen; se não, o valor é `false`.

## Exemplo

Esta simples função retorna se o modo full-sreen está ativo, usando a obsoleta propriedade **`fullscreen`**.

```js
function isDocumentInFullScreenMode() {
  return document.fullscreen;
}
```

Neste próximo exemplo, de outra maneira, usa a propriedade atual `fullscreenElement` para determinar a mesma coisa:

```js
function isDocumentInFullScreenMode() {
  return document.fullscreenElement !== null;
}
```

Se `fullscreenElement` não é `null`, retorna `true`, indicando se modo full-screen está sendo usado.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Fullscreen API](/pt-BR/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](/pt-BR/docs/Web/API/Fullscreen_API/Guide)
- {{DOMxRef("Document.fullscreenEnabled")}}
