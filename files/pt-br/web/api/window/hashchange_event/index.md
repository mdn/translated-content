---
title: WindowEventHandlers.onhashchange
slug: Web/API/Window/hashchange_event
translation_of: Web/API/WindowEventHandlers/onhashchange
original_slug: Web/API/WindowEventHandlers/onhashchange
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

| Campo                                                 | Tipo        | Descrição                                       |
| ----------------------------------------------------- | ----------- | ----------------------------------------------- |
| `newURL` {{gecko_minversion_inline("6.0")}} | `DOMString` | A nova URL para a qual a janela está navegando. |
| `oldURL` {{gecko_minversion_inline("6.0")}} | `DOMString` | A antiga URL da qual a janela veio.             |

## Especificações

| Especificação                                                                                        | Status                           | Comentário |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG', '#windoweventhandlers', 'GlobalEventHandlers')}} | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5.1', '#windoweventhandlers', 'GlobalEventHandlers')}}         | {{Spec2('HTML5.1')}}     |            |
| {{SpecName("HTML5 W3C", "#windoweventhandlers", "GlobalEventHandlers")}}     | {{Spec2('HTML5 W3C')}}     |            |

## Compatibilidade dos Browsers

{{Compat("api.Window.hashchange_event")}}
