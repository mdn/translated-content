---
title: WindowEventHandlers.onhashchange
slug: conflicting/Web/API/Window/hashchange_event
original_slug: Web/API/WindowEventHandlers/onhashchange
---

{{APIRef("HTML DOM")}}

Событие **hashchange** происходит когда изменяется hash (смотри {{domxref("Window.location", "location.hash")}}).

## Синтаксис

```
window.onhashchange = funcRef;
```

**или**

```
<body onhashchange="funcRef();">
```

**или**

```
window.addEventListener("hashchange", funcRef, false);
```

### Параметры

- `funcRef`
  - : Ссылка на функцию.

## Пример

```js
if ("onhashchange" in window) {
    alert("The browser supports the hashchange event!");
}

function locationHashChanged() {
    if (location.hash === "#somecoolfeature") {
        somecoolfeature();
    }
}

window.onhashchange = locationHashChanged;
```

## The hashchange event

The dispatched `hashchange` event has the following fields:

| Field    | Type        | Description                                           |
| -------- | ----------- | ----------------------------------------------------- |
| `newURL` | `DOMString` | The new URL to which the window is navigating.        |
| `oldURL` | `DOMString` | The previous URL from which the window was navigated. |

## Specifications

| Specification                                                                                        | Status                           | Comment |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', '#windoweventhandlers', 'GlobalEventHandlers')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5.1', '#windoweventhandlers', 'GlobalEventHandlers')}}         | {{Spec2('HTML5.1')}}     |         |
| {{SpecName("HTML5 W3C", "#windoweventhandlers", "GlobalEventHandlers")}}     | {{Spec2('HTML5 W3C')}}     |         |

## Поддержка браузерами

{{Compat}}
