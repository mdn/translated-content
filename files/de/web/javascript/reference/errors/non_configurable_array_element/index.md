---
title: 'TypeError: can''t delete non-configurable array element'
slug: Web/JavaScript/Reference/Errors/Non_configurable_array_element
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Non_configurable_array_element
original_slug: Web/JavaScript/Reference/Fehler/Non_configurable_array_element
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: can't delete non-configurable array element (Firefox)
    TypeError: Cannot delete property '2' of [object Array] (Chrome)

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist falsch gelaufen?

Es wurde versucht die [Länge eines Arrays zu kürzen](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length#Verkürzung_eines_Arrays) obwohl eines der Arrayelemente nicht Konfigurierbar([non-configurable](/de/docs/Web/JavaScript/Data_structures#Properties)) ist. Beim Kürzen eines Arrays werden die Elemente hinter der neuen Länge gelöscht, was in dieser Situation nicht funktioniert.

Das `configurable` Attribut kontrolliert, ob eine Eigenschaft von einem Objekt gelöscht werden kann und seine Attribute (anders als `writable`) geändert werden können.

Eigenschaften von einem Objekt, dass von einem [Array-Initialisierer](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#Syntax) erstellt wurden, sind konfigurierbar. Immer, wenn zum Beispiel {{jsxref("Object.defineProperty()")}} eingesetzt wird, ist die Eigenschaft nicht ohne weiteres konfigurierbar.

## Beispiele

### Nicht konfigurierbare Eigenschaften mit `Object.defineProperty` erstellen

Die {{jsxref("Object.defineProperty()")}} Funktion erstellt nicht konfiguriertbare Eigenschaften wenn sie nicht extra als konfigurierbar spezifiziert sind.

```js example-bad
var arr = [];
Object.defineProperty(arr, 0, {value: 0});
Object.defineProperty(arr, 1, {value: "1"});

arr.length = 1;
// TypeError: can't delete non-configurable array element
```

Die Elemente müssen als Konfigurierbar eingestellt werden, wenn das Array später im Quelltext gekürzt werden soll.

```js example-good
var arr = [];
Object.defineProperty(arr, 0, {value: 0, configurable: true});
Object.defineProperty(arr, 1, {value: "1", configurable: true});

arr.length = 1;
```

### Ein Array versiegeln (`seal`)

Die {{jsxref("Object.seal()")}} Funktion markiert alle existirenden Elements als nicht Konfugurierbar.

```js example-bad
var arr = [1,2,3];
Object.seal(arr);

arr.length = 1;
// TypeError: can't delete non-configurable array element
```

Man muss den Aufruf von {{jsxref("Object.seal()")}} entfernen oder ein Kopie des Arrays machen. Im fall einer Kopie führt das Kürzen des kopierten Arrays zu keiner Änderung des Original Arrays.

```js example-good
var arr = [1,2,3];
Object.seal(arr);

// Copy the initial array to shorten the copy
var copy = Array.from(arr);
copy.length = 1;
// arr.length == 3
```

## Siehe auch

- [\[\[Configurable\]\]](/de/docs/Web/JavaScript/Data_structures#Properties)
- {{jsxref("Array.length")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.seal()")}}
