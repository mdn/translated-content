---
title: Window.navigator
slug: Web/API/Window/navigator
tags:
  - API
  - DOM
  - DOM Reference
  - HTML-DOM
  - Property
  - Reference
  - WebAPI
  - Window
  - Window.navigator
translation_of: Web/API/Window/navigator
---

{{ApiRef}}

La propiedad de solo lectura `Window.navigator` es una referencia al objeto {{domxref("Navigator")}}, el cual puede ser utilizado para obtener información sobre la aplicación que está ejecutando el script.

## Sintaxis

```js
navigatorObject = window.navigator
```

## Ejemplos

### Ejemplo #1: Detectar un navegador y retornar un string

```js
var sBrowser, sUsrAg = navigator.userAgent;

if(sUsrAg.indexOf("Chrome") > -1) {
    sBrowser = "Google Chrome";
} else if (sUsrAg.indexOf("Safari") > -1) {
    sBrowser = "Apple Safari";
} else if (sUsrAg.indexOf("Opera") > -1) {
    sBrowser = "Opera";
} else if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox";
} else if (sUsrAg.indexOf("MSIE") > -1) {
    sBrowser = "Microsoft Internet Explorer";
}

alert("Usted está utilizando: " + sBrowser);
```

### Ejemplo #2: Detectar un navegador y retornar un índice

```js
function obtenerIdNavegador() {
    var
        aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
        sUsrAg = navigator.userAgent, nIdx = aKeys.length - 1;

    for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

    return nIdx
}

console.log(obtenerIdNavegador());
```

## Especificación

- {{SpecName("HTML5 W3C", "webappapis.html#the-navigator-object","window.navigator")}}
- {{SpecName("HTML5.1", "webappapis.html#the-navigator-object", "window.navigator")}}
- {{SpecName("HTML WHATWG", "timers.html#the-navigator-object", "window.navigator")}}

## Vea además
