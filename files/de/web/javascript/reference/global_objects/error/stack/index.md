---
title: Error.prototype.stack
slug: Web/JavaScript/Reference/Global_Objects/Error/Stack
tags:
  - Error
  - JavaScript
  - Non-standard
  - Property
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Error/Stack
---
{{JSRef}} {{non-standard_header}}

Die nicht standardisierte **`stack`** Eigenschaft des {{jsxref("Error")}} Objektes zeigt den Verlauf der aufgerufenen Funktionen. Dabei wird die Reihenfolge der Aufrufe, der Zeile und die Datei der Aufrufes und die übergebenen Argumenten angegeben. Der stack String verläuft von den jüngsten Aufrufen zu den vorherigen Aufrufen, bis zum globalen Scope zurück.

## Beschreibung

Jeder Schritt wird durch einen neue Zeile getrennt. Der erste Teil einer Zeile besteht aus dem Funktionsnamen (wenn es kein Aufruf vom globalen Scope ist), gefolgt von einem @-Zeichen, dem Dateiort (ausgenommen, wenn die Funktion der Error-Konstruktor des geworfenen Errors ist), einem Doppelpunkt und einer Zeilennummer, wenn ein Dateiort existiert. Zu beachten ist, dass das {{jsxref("Error")}} Objekt auch die Eigenschaften `fileName`, `lineNumber` und `columnNumber` besitzt, um dieses von geworfenen Error wiederherzustellen (aber nur dem Fehler und nicht seinem trace).

Zu beachten ist, dass dieses das Format von Firefox ist. Es gibt keine Standardformat, auch wenn Safari 6+ und Opera 12- ein ähnliches Format verwenden. Browser die die V8 JavaScript Umgebung benutzen (z. B. Chrome, Opera 15+, Android Browser) und IE10+ nutzen ein anderes Format (zusehen in den MSDN [error.stack](http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx) docs).

**Parameter Werte im Stack:** Bis Firefox 14 ({{bug("744842")}}) folgten auf den Funktionsnamen die zu Strings konvertierten Werte der Parameter in runden Klammern vor dem @-Zeichen. Während ein Objekt (oder Array, etc.) zu` "[object Object]"` konvertiert werden und diese Werte nicht zurück zu einem existierenden Objekt ausgewertet werden können, können skalare Werte zurückverfolgt werden (manchmal kann es einfacher sein — nur in Firefox 14 möglich — `arguments.callee.caller.arguments` zu benutzen, der Funktionsname kann mit `arguments.callee.caller.name` erfragt werden). `"undefined"` wird mit `"(void 0)"` dargestellt. Zu beachten ist, dass String Argumente (oder auch Dateinamen), die Zeichen wie "@", "(", ")" beinhalten dazu führen, dass es nicht einfach ist, die Zeile in seine Komponenten aufzuteilen. In Firefox 14+ ist dieses kein Problem mehr.

Verschiedene Browser setzen den this Wert zu verschiedenen Zeitpunkten. Zum Beispiel setzt Firefox diesen beim erstellen eines {{jsxref("Error")}} Objektes, während PhantomJS dieses nur setzt, wenn das {{jsxref("Error")}} Objekt geworfen wird und [MSDN docs](http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx) scheinen diesem verhalten auch zu folgen.

## Beispiele

Der folgende HTML-Quelltext demonstriert den Einsatz der `stack` Eigenschaft.

```html
<!DOCTYPE HTML>
<meta charset="UTF-8">
<title>Stack Trace Example</title>
<body>
<script>
function trace() {
  try {
    throw new Error('myError');
  }
  catch(e) {
    alert(e.stack);
  }
}
function b() {
  trace();
}
function a() {
  b(3, 4, '\n\n', undefined, {});
}
a('first call, firstarg');
</script>
```

Angenommen der oben stehende Quelltext ist auf einen Windows Datei System unter `C:\example.html` gespeichert, wird der folgende Text ausgegeben:

Mit Firefox 30+ wird die Spaltennummer mit angegeben ({{bug("762556")}}):

    trace@file:///C:/example.html:9:17
    b@file:///C:/example.html:16:13
    a@file:///C:/example.html:19:13
    @file:///C:/example.html:21:9

Von Firefox 14 bis Firefox 29:

    trace@file:///C:/example.html:9
    b@file:///C:/example.html:16
    a@file:///C:/example.html:19
    @file:///C:/example.html:21

Bis Firefox 13 wird folgender Text ausgegeben:

    Error("myError")@:0
    trace()@file:///C:/example.html:9
    b(3,4,"\n\n",(void 0),[object Object])@file:///C:/example.html:16
    a("first call, firstarg")@file:///C:/example.html:19
    @file:///C:/example.html:21

### Stacks von eval Quelltext

Angefangen mit Firefox 30 {{geckoRelease("30")}} enthällt der Stack von Errors auch Informationen von `Function()` und `eval()` Aufrufen mit detailierten Spalten- und Zeilennummern innerhalb dieser Aufrufe. Funktionsaufrufe werden mit `"> Function"` angezeigt, Aufrufe mit eval werden mit `"> eval"` angezeigt. Siehe {{bug("332176")}}.

```js
try {
  new Function('throw new Error()')();
} catch (e) {
  console.log(e.stack);
}

// anonymous@file:///C:/example.html line 7 > Function:1:1
// @file:///C:/example.html:7:6


try {
  eval("eval('FAIL')");
} catch (x) {
  console.log(x.stack);
}

// @file:///C:/example.html line 7 > eval line 1 > eval:1:1
// @file:///C:/example.html line 7 > eval:1:1
// @file:///C:/example.html:7:6
```

Man kann auch die `//# sourceURL` Direktive benutzen, um den eval-Code zu benennen. Siehe auch [Debug eval sources](/de/docs/Tools/Debugger/How_to/Debug_eval_sources) in den [Debugger](/de/docs/Tools/Debugger) docs und diesen [Blogeintrag](http://fitzgeraldnick.com/weblog/59/).

## Spezifikationen

Ist kein Teil einer Spezifikation, nicht standardisiert.

## Browserkompatibilität

{{Compat("javascript.builtins.Error.stack")}}

## Siehe auch

- [Components.stack](/de/docs/Components.stack)
- Externe Projekte: [TraceKit](https://github.com/csnover/TraceKit/) und [javascript-stacktrace](https://github.com/eriwen/javascript-stacktrace)
- MSDN: [error.stack](http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx) docs
- [Überblick über die V8 JavaScript Stack Trace API](https://github.com/v8/v8/wiki/Stack%20Trace%20API)
