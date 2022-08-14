---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
tags:
  - Constructor
  - JavaScript
  - Object
translation_of: Web/JavaScript/Reference/Global_Objects/Object
---
{{JSRef}}

## Zusammenfassung

Der **`Object`**-Konstruktor erstellt ein Objekt

## Konstruktor

    // Object Initialisierer / Literal
    { [ NameWertPaar1 [, NameWertPaar2 [, ...NameWertPaarN] ] ] }

    // Konstruktor-Form
    new Object( [ Wert ] )

### Parameter

- NameWertPaar1, NameWertPaar2, ... NameWertPaarN
  - : Paare von Namen (**`String`**) und Werten (eines beliebigen Typs) bei denen der Name durch ein Doppelpunkt vom Wert getrennt ist.

<!---->

- Wert
  - : Ein Wert eines beliebigen Typs.

## Beschreibung

Der `Object` Konstruktor erstellt ein Objekt für den übergebenen Wert. Wenn der Wert {{jsxref("null")}} oder {{jsxref("undefined")}} ist, wird ein leeres `Object` erstellt und zurückgegeben. Ansonsten wird ein Objekt des Typs erstellt, welcher dem übergebenen Wert entspricht. Sollte der Wert bereits ein vom Typ `Object` sein, wird dieses zurückgeggeben.

Wenn sie nicht als Konstruktor aufgerufen wird (d.h. ohne `new`), verhält sich die Funktion `Object` genau so wie `new Object()`.

Siehe auch den [Object Intialisierer / Literal Syntax](/de/docs/Web/JavaScript/Reference/Operators/Objekt_Initialisierer).

## Eigenschaften des `Object` Konstruktors

- `Object.length`
  - : Hat den Wert 1.
- {{jsxref("Object.prototype")}}
  - : Erlaubt es neue Eigenschaften zu allen Objekten des Typs Object hinzuzufügen.

## Methoden des `Object` Konstruktors

- {{jsxref("Object.assign()")}}
  - : Kopiert die Werte aller **eigenen**, aufzählbaren Eigenschaften von einem oder mehreren Quellobjekten in ein Zielobjekt.
- {{jsxref("Object.create()")}}
  - : Erstellt ein neues Objekt mit dem angegebenen Protoyp-Objekt und optionalen Eigenschaften.
- {{jsxref("Object.defineProperty()")}}
  - : Fügt eine neue Eigenschaft einem bestimmten Objekt hinzu, welche durch Zusatzinformationen beschrieben wird.
- {{jsxref("Object.defineProperties()")}}
  - : Fügt mehrere Eigenschaften einem bestimmten Objekt hinzu, welche durch Zusatzinformationen beschrieben werden.
- {{jsxref("Object.entries()")}}
  - : Gibt ein Array zurück, welches alle **eigenen**, aufzählbaren String-Eigenschaften in der Form von `[Name, Wert]`-Paaren enthält.
- {{jsxref("Object.freeze()")}}
  - : **Friert** ein Objekt **ein**: Die Eigenschaften können nicht mehr geändert oder gelöscht werden.
- {{jsxref("Object.fromEntries()")}}
  - : Erstellt ein Objekt aus einer Liste von `[Name, Wert]`-Paaren (kehrt {{jsxref("Object.entries")}} um).
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
  - : Gibt die Zusatzinformationen einer bestimmten **eigenen** Eigenschaft zurück.
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
  - : Gibt ein Objekt zurück, welches die Zusatzinformationen aller **eigenen** Eigenschaften enthält.
- {{jsxref("Object.getOwnPropertyNames()")}}
  - : Gibt ein Array zurück, welches die Namen aller **eigenen**, aufzählbaren und nicht-aufzählbaren Eigenschaften enthält.
- {{jsxref("Object.getOwnPropertySymbols()")}}
  - : Gibt ein Array zurück, welches die Symbole aller **eigenen** Eigenschaften enthält.
- {{jsxref("Object.getPrototypeOf()")}}
  - : Gibt den Protoypen des angegebenen Objekts zurück.
- {{jsxref("Object.is()")}}
  - : Vergleicht ob zwei Werte den gleichen Wert haben.
- {{jsxref("Object.isExtensible()")}}
  - : Gibt an, ob ein Objekt erweitert werden kann (ob neue Eigenschaften angelegt werden können).
- {{jsxref("Object.isFrozen()")}}
  - : Gibt an, ob ein Objekt eingefroren ist.
- {{jsxref("Object.isSealed()")}}
  - : Gibt an, ob ein Objekt versiegelt ist.
- {{jsxref("Object.keys()")}}
  - : Gibt ein Array zurück, welches die Namen aller **eigenen** aufzählbaren String-Eigenschaften enthält.
- {{jsxref("Object.preventExtensions()")}}
  - : Verbietet das ein Objekt erweitert werden kann.
- {{jsxref("Object.seal()")}}
  - : Verbietet das Eigenschaften gelöscht werden können - versiegelt das Objekt.
- {{jsxref("Object.setPrototypeOf()")}}
  - : Legt den Prototyp fest (z.Bsp. die interne `[[Prototype]]` Eigenschaft)
- {{jsxref("Object.values()")}}
  - : Gibt ein Array zurück, welches die Werte aller **eigenen** aufzählbaren String-Eigenschaften enthält.

## `Object` Instanzen und das Prototyp-Objekt

Alle Objekte in JavaScript stammen von `Object` ab; alle Objekte bekommen die Methoden und Eigenschaften vom {{jsxref("Object.prototype")}} vererbt, jedoch können sie überschrieben werden. Zum Beispiel können Prototypen andere Kontruktoren die `constructor`-Eigenschaft überschreiben oder aber ihre eigene `toString()` Methode implementieren. Änderungen am `Object` Prototypen wirken sich auch auf alle anderen Objekte aus, es sei denn die Eigenschaften oder Methoden sind entlang der Prototyp-Kette schon überschrieben worden.

### Eigenschaften

{{ page('/de/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype', 'Attribute') }}

### Methoden

{{ page('/de/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype', 'Methoden') }}

## Eine Eigenschaft von einem Objekt löschen

Es gibt keine Methode von `Object` selbst, um eine Eigenschaft zu löschen (wie z.Bsp. [`Map.prototype.delete()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/delete)). Um das zu erreichen, muss der [delete Operator](/de/docs/Web/JavaScript/Reference/Operators/delete) benutzt werden.

## Beispiele

### `Object` mit `undefined` und `null` Typen nutzen

Die folgenden Beispiele speichern ein leeres `Object` in `o`:

```js
var o = new Object();
```

```js
var o = new Object(undefined);
```

```js
var o = new Object(null);
```

### `Object` nutzen um `Boolean`-Objekte zu erstellen

Die folgenden Beispiele speichern {{jsxref("Boolean")}}-Objekte in `o`:

```js
// das gleiche wie: var o = new Boolean(true);
var o = new Object(true);
```

```js
// das gleiche wie: var o = new Boolean(false);
var o = new Object(Boolean());
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar                                                                                            |
| ---------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Initiale Definition. In JavaScript 1.0 implementiert                                                 |
| {{SpecName('ES5.1', '#sec-15.2', 'Object')}}                 | {{Spec2('ES5.1')}}     |                                                                                                      |
| {{SpecName('ES6', '#sec-object-objects', 'Object')}}         | {{Spec2('ES6')}}         | `Object.assign`, `Object.getOwnPropertySymbols`, `Object.setPrototypeOf` und `Object.is` hinzugefügt |
| {{SpecName('ESDraft', '#sec-object-objects', 'Object')}} | {{Spec2('ESDraft')}} | `Object.entries`, `Object.values` und `Object.getOwnPropertyDescriptors` hinzugefügt.                |

## Browser-Kompatibilität

{{Compat("javascript.builtins.Object")}}

## Siehe auch

- [Object initializer](/de/docs/Web/JavaScript/Reference/Operators/Objekt_Initialisierer)
