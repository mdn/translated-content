---
title: Object.isFrozen()
slug: Web/JavaScript/Reference/Global_Objects/Object/isFrozen
translation_of: Web/JavaScript/Reference/Global_Objects/Object/isFrozen
---
{{JSRef}}

**`Object.isFrozen()`** gibt an ob ein Objekt {{jsxref("Object.freeze()", "eingefroren", "", 1)}} ist.

{{EmbedInteractiveExample("pages/js/object-isfrozen.html")}}

## Syntax

    Object.isFrozen(obj)

### Parameter

- `obj`
  - : Das Objekt, welches überprüft werden soll.

### Rückgabewert

Ein {{jsxref("Boolean")}}-Wert, der angibt ob das Objekt eingefroren ist oder nicht.

## Beschreibung

Ein Objekt gilt dann und nur dann als eingefroren, wenn es nicht {{jsxref("Object.isExtensible()", "erweiterbar", "", 1)}} ist, all seine Eigenschaften nicht konfigurierbar sind und all seine Daten-Eigenschaften (d.h. Eigenschaften die nicht durch Getter oder Setter definiert sind) nicht schreibbar sind.

## Beispiele

```js
// Ein neues Objekt ist erweiterbar, also nicht eingefroren.
Object.isFrozen({}); // === false

// An leeres Objekt, das nicht erweiterbar ist,
// ist sinnlos eingefroren.
var sinnlos = Object.preventExtensions({});
Object.isFrozen(sinnlos); // === true

// Ein neues Objekt mit einer einzelnen Eigenschaft, ist auch erweiterbar,
// ergo nicht eingefroren.
var eineEigenschaft = { p: 42 };
Object.isFrozen(eineEigenschaft); // === false

// Das Objekt nicht erweiterbar zu machen, friert es nicht ein,
// da die Eigenschaft immer nocht konfigurierbar und schreibbar ist.
Object.preventExtensions(eineEigenschaft);
Object.isFrozen(eineEigenschaft); // === false

// ...wenn man die Eigenschaft aber löscht,
// wird das Objekt sinnlos
delete eineEigenschaft.p;
Object.isFrozen(eineEigenschaft); // === true

// Ein nicht erweiterbares Objekt, mit einer nicht schreibbaren
// jedoch konifgurierbaren Eigenschaft gilt als nicht eingefroren.
var nichtSchreibbar = { e: 'plep' };
Object.preventExtensions(nichtSchreibbar);
Object.defineProperty(nichtSchreibbar, 'e', {
  writable: false
}); // `e` wird nicht schreibbar
Object.isFrozen(nichtSchreibbar); // === false

// Wird diese Eigenschaft nicht konfigurierbar,
// so friert das Objekt ein.
Object.defineProperty(nichtSchreibbar, 'e', {
  configurable: false
}); // `e` wird nicht konfigurierbar
Object.isFrozen(nichtSchreibbar); // === true

// Ein nicht erweiterbares Objekt, mit einer nicht konfigurierbaren
// jedoch schreibbaren Eigenschaft gilt ebenfalls als nicht eingefroren.
var nichtKonfigurierbar = { release: 'the kraken!' };
Object.preventExtensions(nichtKonfigurierbar);
Object.defineProperty(nichtKonfigurierbar, 'release', {
  configurable: false
});
Object.isFrozen(nichtKonfigurierbar); // === false

// Wird diese Eigenschaft nicht schreibbar,
// so friert das Objekt ein.
Object.defineProperty(nichtKonfigurierbar, 'release', {
  writable: false
});
Object.isFrozen(nichtKonfigurierbar); // === true

// Ein nicht erweiterbares Objekt, mit einer konfigurierbaren
// dynamischen Eigenschaft (get/set) ist nicht eingefroren.
var dynamisch = { get food() { return 'yum'; } };
Object.preventExtensions(dynamisch);
Object.isFrozen(dynamisch); // === false

// ABER, wird diese Eigenschaft nicht konfigurierbar,
// friert das Objekt ein.
Object.defineProperty(dynamisch, 'food', {
  configurable: false
});
Object.isFrozen(dynamisch); // === true

// Am Ende ist die einfachste Methode um ein Objekt einzufrieren,
// Object.freeze aufzurufen.
var eingefroren = { 1: 81 };
Object.isFrozen(eingefroren); // === false
Object.freeze(eingefroren);
Object.isFrozen(eingefroren); // === true

// Per Definition ist ein eingefrorenes Objekt nicht erweiterbar.
Object.isExtensible(eingefroren); // === false

// Und es ist ebenfalls versiegelt.
Object.isSealed(eingefroren); // === true
```

## Anmerkungen

In ES5, wirft die Methode einen {{jsxref("TypeError")}}, wenn der Parameter kein primitives Objekt ist.

In ES2015 wird der Parameter, sollte er kein primitives Objekt sein, als bereits eingefrorenes Objekt betrachtet und gibt dementsprechend einfach `true` zurück.

```js
Object.isFrozen(1);
// TypeError: 1 is not an object (ES5 code)

Object.isFrozen(1);
// true                          (ES2015 code)
```

## Spezifikationen

| Spezifikation                                                                            | Status                       | Kommentar                                               |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.12', 'Object.isFrozen')}}             | {{Spec2('ES5.1')}}     | Initiale Definition. In JavaScript 1.8.5 implementiert. |
| {{SpecName('ES6', '#sec-object.isfrozen', 'Object.isFrozen')}}     | {{Spec2('ES6')}}         |                                                         |
| {{SpecName('ESDraft', '#sec-object.isfrozen', 'Object.isFrozen')}} | {{Spec2('ESDraft')}} |                                                         |

## Browser Kompatibilität

{{Compat("javascript.builtins.Object.isFrozen")}}

## Siehe auch

- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
