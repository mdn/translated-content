---
title: WindowEventHandlers.onhashchange
slug: Web/API/Window/hashchange_event
tags:
  - Eigenschaft
  - Event
  - HTML-DOM
  - Referenz
  - WindowEventHandlers
translation_of: Web/API/WindowEventHandlers/onhashchange
original_slug: Web/API/WindowEventHandlers/onhashchange
---
{{APIRef("HTML DOM")}}

Das **hashchange** Event wird ausgelöst wenn sich der window\.hash verändert (siehe {{domxref("Window.location", "location.hash")}}).

## Syntax

    window.onhashchange = funcRef;

**oder**

    <body onhashchange="funcRef();">

**oder**

    window.addEventListener("hashchange", funcRef, false);

### Parameter

- `funcRef`
  - : Ein Verweis auf eine Funktion.

## Beispiel

```js
if ("onhashchange" in window) {
    alert("Der Browser unterstützt das hashchange-Event!");
}

function locationHashChanged() {
    if (location.hash === "#irgendeinCoolesFeature") {
        featureFunction();
    }
}

window.onhashchange = locationHashChanged;
```

## Das hashchange Event

Das ausgelöste `hashchange` Event hat folgende Eigenschaften:

| Eigenschaft                                           | Typ         | Beschreibung                                           |
| ----------------------------------------------------- | ----------- | ------------------------------------------------------ |
| `newURL` {{gecko_minversion_inline("6.0")}} | `DOMString` | Die neue URL zu der das Fenster nun navigiert.         |
| `oldURL` {{gecko_minversion_inline("6.0")}} | `DOMString` | Die vorherige URL, von der aus das Fenster navigierte. |

| Specification                                                                                        | Status                           | Comment |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', '#windoweventhandlers', 'GlobalEventHandlers')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5.1', '#windoweventhandlers', 'GlobalEventHandlers')}}         | {{Spec2('HTML5.1')}}     |         |
| {{SpecName("HTML5 W3C", "#windoweventhandlers", "GlobalEventHandlers")}}     | {{Spec2('HTML5 W3C')}}     |         |

## Browser-Kompatiblität

{{Compat}}

- [Browserverlauf manipulieren](/de/docs/DOM/Manipulating_the_browser_history "DOM/Manipulating the browser history"), [history.pushState() und history.replaceState()](/de/docs/DOM/window.history "DOM/window.history")-Methoden, [popstate](/de/docs/DOM/window.onpopstate "DOM/window.onpopstate")-Event.
