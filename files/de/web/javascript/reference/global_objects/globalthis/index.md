---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
tags:
  - JavaScript
  - Property
  - Reference
  - global
  - globalThis
  - this
translation_of: Web/JavaScript/Reference/Global_Objects/globalThis
---
{{jsSidebar("Objects")}}

Die Eigenschaft **`globalThis`** gibt das globale Objekt der obersten Ebene zurück.

{{EmbedInteractiveExample("pages/js/globalprops-globalthis.html","shorter")}}

{{JS_Property_Attributes(1, 0, 1)}}

## Beschreibung

In der Vergangenheit war für den Zugriff auf das globale Objekt in verschiedenen JavaScript-Umgebungen eine unterschiedliche Syntax erforderlich. Im Web kann man {{domxref("Window.window", "window")}}, {{domxref("Window.self", "self")}} oder {{domxref("Window.frames", "frames")}} verwenden - aber in [Web Workers](/de/docs/Web/API/Worker) funktioniert nur `self`. In Node.js funktioniert keines der aufgezählten, und es muss stattdessen `global` verwendet werden.

Das Schlüsselwort `this` kann in Funktionen verwendet werden, die nicht im Strict-Mode ausgeführt werden, ist jedoch in Modulen und in Funktionen, die im Strict-Mode ausgeführt werden, `undefined`. Es kann `Function('return this')()` verwendet werden, aber Umgebungen, die {{jsxref("eval", "eval()")}} deaktiviert haben, wie etwa durch {{Glossary("CSP")}} in Browsern, verhindern die Verwendung von {{jsxref("Function")}} auf diese Weise.

Die Eigenschaft `globalThis` bietet eine Standardmethode für den Zugriff auf den globalen Wert `this` (und damit auf das globale Objekt selbst) in verschiedenen Umgebungen. Im Gegensatz zu ähnlichen Eigenschaften wie `window` und `self` funktioniert es garantiert in Fenster- und Nicht-Fenster-Kontexten. Auf diese Weise können Sie auf konsistente Weise auf das globale Objekt zugreifen, ohne wissen zu müssen, in welcher Umgebung der Code ausgeführt wird. Um sich den Namen zu merken, denken Sie daran, dass `this` im globalen Bereich `globalThis` ist.

### HTML und WindowProxy

In vielen Engines ist `globalThis` ein Verweis auf das tatsächliche globale Objekt. In Webbrowsern wird jedoch aus Gründen der iframe- und fensterübergreifenden Sicherheit ein {{jsxref("Proxy")}} um das tatsächliche globale Objekt (das nicht direkt verwendet werden kann). Diese Unterscheidung ist im allgemeinen Sprachgebrauch selten relevant, aber wichtig zu beachten.

### Benennung

Mehrere andere populäre Namen wie `self` und `global` wurden aus dem Vorschlag entfernt, da sie die Kompatibilität mit existierendem Code potenziell brechen könnten. Siehe das Dokument ["Naming Constraints"](https://github.com/tc39/proposal-global/blob/master/NAMING.md) für weitere Details.

## Beispiele

### Umgebungsübergreifend den globalen Kontext finden

Vor `globalThis` war `Function('return this')()` die einzige zuverlässige, plattformübergreifende Methode, um das globale Objekt für eine Umgebung abzurufen. Dies führt jedoch in einigen Einstellungen zu [CSP](/de/docs/Web/HTTP/CSP)Verstößen. Daher verwendet [es6-shim](https://github.com/paulmillr/es6-shim) eine Prüfung wie diese:

```js
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};

var globals = getGlobal();

if (typeof globals.setTimeout !== 'function') {
  // no setTimeout in this environment!
}
```

Mit der Verfügbarkeit von `globalThis`, ist die zusätzliche umgebungsübergreifende Suche nach dem Global Kontext nicht mehr notwendig:

```js
if (typeof globalThis.setTimeout !== 'function') {
  // no setTimeout in this environment!
}
```

## Spezifikationen

| Specification                                                                |
| ---------------------------------------------------------------------------- |
| {{SpecName("ESDraft", "#sec-globalthis", "globalThis")}} |

## Browserkompatibilität

{{Compat("javascript.builtins.globalThis")}}

## Siehe auch

- {{jsxref("this")}}
