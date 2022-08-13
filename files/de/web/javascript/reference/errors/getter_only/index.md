---
title: 'TypeError: setting getter-only property "x"'
slug: Web/JavaScript/Reference/Errors/Getter_only
tags:
  - Error
  - Errors
  - JavaScript
  - Strict Mode
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Getter_only
original_slug: Web/JavaScript/Reference/Fehler/Getter_only
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: setting getter-only property "x" (Firefox)
    TypeError: Cannot set property "prop" of #<Object> which has only a getter (Chrome)

## Fehlertyp

{{jsxref("TypeError")}} nur im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist falsch gelaufen?

Wenn versucht wird einen neuen Wert einer Wichenschaft zuzuweisen, welche nur als [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) spezifiziert wurde. Wenn kein strict mode verwendet wird, wird dieses stillschweigend ignoriert, während im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ein {{jsxref("TypeError")}} erzeugt wird.

## Beispiele

Das folgende Beispiel zeigt, wie eine Eigenschaft als Getter eingestellt wird. Es wird kein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) definiert, so dass ein `TypeError` erzeugt wird, wenn die `temperature` Eigenschaft mit dem Wert `30` beschrieben werden soll. Für mehr Details siehe auf der {{jsxref("Object.defineProperty()")}} Seite.

```js example-bad
"use strict";

function Archiver() {
  var temperature = null;
  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    }
  });
}

var arc = new Archiver();
arc.temperature; // 'get!'

arc.temperature = 30;
// TypeError: setting getter-only property "temperature"
```

Um den Fehler zu beheben, muss einefach die Zeile 16 entfernt werden, weil dort der Versuch ist die `temperature` Eigenschaft zu beschreiben, oder es muss ein [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) definiert werden, wie zum Beispiel dieser:

```js example-good
"use strict";

function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

## Siehe auch

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
