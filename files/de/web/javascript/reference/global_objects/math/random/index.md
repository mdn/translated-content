---
title: Math.random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/random
original_slug: Web/JavaScript/Reference/Global_Objects/Math/math.random
---
{{JSRef}}

Die **`Math.random()`** Funktion gibt eine Pseudozufallszahl in Form einer Gleitkommazahl im Bereich von 0 - 1 (0 inklusiv, aber 1 nicht) annähernd gleichverteilt zurück, die dann zur gewünschten Größe skaliert werden kann. Die Zufallszahl wird von der Implementierung bestimmt; sie kann nicht vom Benutzer ausgewählt oder zurückgesetzt werden.

{{EmbedInteractiveExample("pages/js/math-random.html")}}

> **Note:** `Math.random()` stellt _keine_ kryprografisch sicheren Zufallszahlen bereit. Verwenden Sie sie auf keinen Fall für etwas, das in Verbindung mit Sicherheit steht. Benutzen Sie stattdessen die Web Crypto API, genauer gesagt die {{domxref("RandomSource.getRandomValues()", "window.crypto.getRandomValues()")}}-Methode.

## Syntax

    Math.random()

### Rückgabewert

Eine pseudozufällige Gleitkommazahl zwischen `0` (inklusiv) und `1` (exklusiv).

## Beispiele

Beachten Sie, dass, weil Zahlen in JavaScript IEEE 754 Gleitkommazahlen sind, mit dem Verhalten zur nächsten geraden Zahl zu runden, die Bereiche für die folgenden Funktionen - mit Ausnahme für `Math.random()` selbst - nicht exakt sind.
Wenn extrem große Grenzen (253 oder höher) gewählt werden, ist es in äußerst seltenen Fällen möglich, dass die eigentlich ausgeschlossenen Obergrenzen mit eingerechnet werden.

### Erzeugt eine Zufallszahl zwischen 0 (inklusive) und 1 (exklusive)

```js
function getRandom() {
  return Math.random();
}
```

### Erzeugt eine Zufallszahl zwischen zwei Zahlen

Das Beispiel gibt eine zufällige Zahl zwischen zwei Zahlen zurück. Der Rückgabewert is größer oder gleich `min` und kleiner als `max`.

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### Erzeugt eine ganze Zufallszahl zwischen zwei Zahlen

Das Beispiel gibt eine zufällige ganze Zahl zwischen den spezifizierten Werten zurück. Der Wert ist nicht kleiner als `min` (oder der nächstgrößeren ganzen Zahl von `min`, wenn `min` keine ganze Zahl ist) und ist kleiner als (aber nicht gleich) `max`.

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

> **Note:** Es könnte verlockend sein, `Math.round()` zu verwenden, um das Ergebnis zu erreichen, aber das würde dazu führen, dass die zufälligen Zahlen einer ungleichmäßigen Verteilung folgen würden, die möglicherweise nicht den geforderten Bedürfnisse entsprechen würde.

### Erzeugt eine ganze Zufallszahl zwischen zwei Zahlen (inklusiv)

Die obere `getRandomInt()` Funktion hat ein inklusives Minimum und ein exklusives Maximum. Was ist, wenn sowohl das Minimum als auch das Maximum inklusive sein sollen? Die `getRandomIntInclusive()` Funktion ermöglicht dieses:

    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min +1)) + min;
    }

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar                                                                                    |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Initiale Definition. JavaScript 1.0 (nur auf UNIX) / JavaScript 1.1 (auf allen Plattformen). |
| {{SpecName('ES5.1', '#sec-15.8.2.14', 'Math.random')}}     | {{Spec2('ES5.1')}}     |                                                                                              |
| {{SpecName('ES6', '#sec-math.random', 'Math.random')}}     | {{Spec2('ES6')}}         |                                                                                              |
| {{SpecName('ESDraft', '#sec-math.random', 'Math.random')}} | {{Spec2('ESDraft')}} |                                                                                              |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.random")}}
