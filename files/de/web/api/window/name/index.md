---
title: Window.name
slug: Web/API/Window/name
tags:
  - API
translation_of: Web/API/Window/name
---
{{APIRef}}

Holt oder setzt den Namen des Fensters.

## Syntax

    string = window.name;
    window.name = string;

## Beispiel

```js
window.name = "lab_view";
```

## Hinweise

Der Name von Fenstern wird hauptsächlich als Ziel von Hyperlinks und Formularen verwendet. Fenster benötigen grundsätzlich keinen Namen.

`window.name` wurde auch in Frameworks verwendet um Domain-übergreifend zu kommunizieren (z.B. mit [SessionVars](http://www.thomasfrank.se/sessionvars.html) oder Dojo's [dojox.io.windowName](https://www.sitepen.com/blog/2008/07/22/windowname-transport/)) als sicherere Alternative JSONP. Moderne Webanwendungen sollten sich jedoch nicht auf `window.name` verlassen, sondern die [postMessage API](/de/docs/Web/API/Window/postMessage) verwenden.

`window.name` konvertiert alle Werte zu ihre String-Repräsentation durch die Verwendung ihrer `toString` Methode.

## Spezifikationen

| Specification                                                                                | Status                           | Comment |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', 'browsers.html#dom-name', 'Window.name')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'browsers.html#dom-name', 'Window.name')}}     | {{Spec2('HTML5 W3C')}}     |         |

## Browserkompatibilität

{{Compat("api.Window.name")}}
