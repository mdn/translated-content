---
title: WindowEventHandlers.onhashchange
slug: Web/API/Window/hashchange_event
---

{{APIRef("HTML DOM")}}

O evento **hashchange** é disparado quando a _hash_ da _window_ muda. (ver {{domxref("Window.location", "location.hash")}}).

## Sintaxe

```
window.onhashchange = funcRef;
```

**ou**

```
<body onhashchange="funcRef();">
```

**ou**

```
window.addEventListener("hashchange", funcRef, false);
```

### Parâmetros

- `funcRef`
  - : Referência a uma função

## Exemplo

```js
if ("onhashchange" in window) {
  alert("O browser têm suporte ao evento hashchange!");
}

function locationHashChanged() {
  if (location.hash === "#algointeressante") {
    algoInteressante();
  }
}

window.onhashchange = locationHashChanged;
```

## O evento hashchange

O evento hashchange disparado possui os seguintes campos

| Campo    | Tipo        | Descrição                                       |
| -------- | ----------- | ----------------------------------------------- |
| `newURL` | `DOMString` | A nova URL para a qual a janela está navegando. |
| `oldURL` | `DOMString` | A antiga URL da qual a janela veio.             |

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
