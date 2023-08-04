---
title: Window.innerHeight
slug: Web/API/Window/innerHeight
---

{{APIRef}}

Altura (em pixels) da janela de visualização do navegador, incluindo, se renderizado, a barra de rolagem horizontal.

> **Nota:** If you use `nsIDOMWindowUtils.setCSSViewport()` to set the virtual window size for page layout purposes, the value returned by this property corresponds to the viewport height set using that method.

## Syntax

```
var intViewportHeight = window.innerHeight;
```

### Value

On return, `intViewportHeight` is the height of the browser window's viewport.

The `window.innerHeight` property is read only; it has no default value.

## Notes

The `innerHeight` property is supported in any window object like a {{domxref("window")}}, a frame, a frameset, or a secondary window.

There is [an algorithm](https://bugzilla.mozilla.org/show_bug.cgi?id=189112#c7) to obtain the height of the viewport excluding, if rendered, the horizontal scrollbar.

## Example

### Assuming a frameset

```js
var intFrameHeight = window.innerHeight; // or

var intFrameHeight = self.innerHeight;
// will return the height of the frame viewport within the frameset

var intFramesetHeight = parent.innerHeight;
// will return the height of the viewport of the closest frameset

var intOuterFramesetHeight = top.innerHeight;
// will return the height of the viewport of the outermost frameset
```

{{todo("link to an interactive demo here")}}

To change the size of a window, see {{domxref("window.resizeBy()")}} and {{domxref("window.resizeTo()")}}.

To get the outer height of a window, i.e. the height of the whole browser window, see {{domxref("window.outerHeight")}}.

### Graphical example

The following figure shows the difference between `outerHeight` and `innerHeight`.

![innerHeight vs outerHeight illustration](/@api/deki/files/213/=FirefoxInnerVsOuterHeight2.png)

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- {{domxref("window.innerWidth")}}
- {{domxref("window.outerHeight")}}
- {{domxref("window.outerWidth")}}
