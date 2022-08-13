---
title: Atomics
slug: Web/JavaScript/Reference/Global_Objects/Atomics
tags:
  - JavaScript
  - Shared Memory
  - Specifications
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics
---
{{JSRef}}

Das **`Atomics`** Objekt unterstützt atomare Operationen als statische Methoden. Diese werden mit {{jsxref("SharedArrayBuffer")}} Objekte benutzt.

Die atomaren Operationen sind auf dem `Atomics` Modul installiert. Anders, als bei anderen globalen Objekten, ist, dass `Atomics` kein Konstruktor ist. Man kann `Atomics` nicht mit einem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) oder als Funktion verwenden. Alle Eigenschaften und Methoden von `Atomics` sind statisch (genauso wie zum Beispiel bei dem {{jsxref("Math")}} Objekt).

## Eigenschaften

- `Atomics[Symbol.toStringTag]`
  - : Der Wert dieser Eigenschaft ist: `"Atomics"`.

## Methoden

### Atomare Operationen

Wenn Speicher geteilt wird, können mehrere Threads auf dem gleichen Speicher lesen und schreiben. Atomare Operationen stellen sicher, dass Werte in einer Operation geschrieben und gelesen werden bevor mit der nächste Operation begonnen wird und dass eine Operation nicht unterbrochen wird.

- {{jsxref("Atomics.add()")}}
  - : Addiert den angegebenen Wert dem existierenden Wert an der gegebenen Position im Array hinzu. Gibt den alten Wert an der Position zurück.
- {{jsxref("Atomics.and()")}}
  - : Berechnet ein Bitweises UND mit dem Wert an der angegebenen Position im Array und dem angegebenen Wert. Gibt den alten Wert an der Position zurück.
- {{jsxref("Atomics.compareExchange()")}}
  - : Speichert einen angegebenen Wert an der angegebenen Position im Array, wenn dieser gleich einem angegebene Wert ist. Gibt den alten Wert zurück.
- {{jsxref("Atomics.exchange()")}}
  - : Speichert einen angegebenen Wert an einer angegebenen Position im Array. Gibt den alten Wert zurück.

- {{jsxref("Atomics.load()")}}
  - : Gibt den Wert an einer angegebenen Position im Array zurück.
- {{jsxref("Atomics.or()")}}
  - : Berechnet ein Bitweises ODER mit dem gegebenen Wert an der angegebenen Position im Array und dem angegebenen Wert. Gibt den alten Wert an der Position zurück.
- {{jsxref("Atomics.store()")}}
  - : Speichert einen angegebenen Wert an einer angegebenen Position im Array. Gibt den Wert zurück.
- {{jsxref("Atomics.sub()")}}
  - : Subtrahiert einen angegebenen Wert von einem Wert an einer angegebenen Position im Array. Gibt den alten Wert an der Position zurück.
- {{jsxref("Atomics.xor()")}}
  - : Berechnet ein Bitweises XOR mit dem Wert an einer angegebenen Position im Array und einem angegebenen Wert. Gibt den alten Wert an der Position zurück.

### Wait und notify

Die `wait()` und `notify()` Methoden sind auf Linux Futexes ("fast user-space mutex") modelliert und ermöglichen es zu warten, bis eine bestimmte Bedingung `true` wird, und wird als blockierendes Konstrukt verwendet.

- {{jsxref("Atomics.wait()")}}
  - : Überprüft, ob an der angegebenen Position in einem Array einen angegebener Wert enthalten ist und wartet oder bekommt ein Timeout. Es wird `"ok"`, `"not-equal"`, oder `"timed-out"` zurückgegeben. Wenn Warten im ausführenden Agenten nicht erlaubt ist, wird ein Fehler geworfen (die meisten Browser erlauben kein `wait()` im Browser main Thread).
- {{jsxref("Atomics.notify()")}}
  - : Benachrichtigt Agenten, die auf die angegebene Arrayposition warten. Gibt die Zahl der benachrichtigten Agenten zurück.
- {{jsxref("Atomics.isLockFree()", "Atomics.isLockFree(size)")}}
  - : Eine primitive Optimierung, die feststellten kann, ob Locks und atomare Operationen benutzt werden können. Gibt `true` zurück, wenn atomare Operationen auf einem Array der gegebenen Elementgröße mit einer atomaren Hardwareoperation implementiert ist (im Gegensatz zu einem Lock). Nur für Experten.

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar                      |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------------------------ |
| {{SpecName('ESDraft', '#sec-atomics-object', 'Atomics')}} | {{Spec2('ESDraft')}} | Initiale Definition in ES2017. |
| {{SpecName('ES8', '#sec-atomics-object', 'Atomics')}}     | {{Spec2('ES8')}}         |                                |

## Browserkompatibilität

{{Compat("javascript.builtins.Atomics")}}

## Kompatibilitätshinweise

Vor Firefox 48 waren die neuesten API-Namen und Semantiken noch nicht implementiert. Die Unterschiede zwischen der Firefox Version 46 und der Version 48 sind:

- Die Methoden `Atomics.futexWakeOrRequeue()` und `Atomics.fence()` sind vollständig entfernt ({{bug(1259544)}} und {{bug(1225028)}}).
- Die Methoden {{jsxref("Atomics.wait()")}} and {{jsxref("Atomics.wake()")}} hießen `Atomics.futexWait()` und `Atomics.futexWake()` ({{bug(1260910)}}). Hinweis: Die alten Namen wurden in den Version 49 und später entfernt ({{bug(1262062)}}).
- Die Eigenschaften `Atomics.OK`, `Atomics.TIMEDOUT`, `Atomics.NOTEQUAL` wurden entfernt. die Methode {{jsxref("Atomics.wait()")}} gibt jetzt die Strings `"ok"`, `"timed-out"` und `"not-equal"` zurück ({{bug(1260835)}}).
- Der `count` Parameter der {{jsxref("Atomics.wake()")}} Methode wurde geändert: Der Standardwert ist `+Infinity` und nicht `0` ({{bug(1253350)}}).

## Siehe auch

- {{jsxref("ArrayBuffer")}}
- [JavaScript getypte Arrays](/de/docs/Web/JavaScript/Typed_arrays)
- [Web Workers](/de/docs/Web/API/Web_Workers_API)
- [parlib-simple](https://github.com/lars-t-hansen/parlib-simple)– Eine einfache Bibliothek, die Synchronisation und verteilte Abstraktionen ermöglicht.
- [Geteilter Speicher (Shared Memory) – ein kurzes Tutorial](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md)
- [A Taste of JavaScript’s New Parallel Primitives – Mozilla Hacks](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/)
