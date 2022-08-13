---
title: 'TypeError: can''t redefine non-configurable property "x"'
slug: Web/JavaScript/Reference/Errors/Cant_redefine_property
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Cant_redefine_property
original_slug: Web/JavaScript/Reference/Fehler/Cant_redefine_property
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: can't redefine non-configurable property "x" (Firefox)
    TypeError: Cannot redefine property: "x" (Chrome)

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist falsch gelaufen?

Es wurde versucht eine Eigenschaft erneut zu definieren, aber die Eigenschaft ist nicht konfigurierbar ([non-configurable](/de/docs/Web/JavaScript/Data_structures#Properties)). Das `configurable` Attribut kontrolliert, ob eine Eigenschaft von einem Objekt gelöscht werden kann und seine Attribute (anders als `writable`) geändert werden können. Eigenschaften von einem Objekt, dass von einem [Objekt-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellt wurden, sind konfigurierbar. Immer, wenn zum Beispiel {{jsxref("Object.defineProperty()")}} eingesetzt wird, ist die Eigenschaft nicht ohne weiteres konfigurierbar.

## Beispiele

### Nicht konfigurierbare Eigenschaften mit `Object.defineProperty` erstellen

Die {{jsxref("Object.defineProperty()")}} Funktion erstellt nicht konfiguriertbare Eigenschaften wenn sie nicht extra als konfigurierbar spezifiziert sind.

```js example-bad
var obj = Object.create({});
Object.defineProperty(obj, "foo", {value: "bar"});

Object.defineProperty(obj, "foo", {value: "baz"});
// TypeError: can't redefine non-configurable property "foo"
```

Die "foo" Eigenschaft muss als Konfigurierbar eingestellt werden, wenn diese später im Quelltext erneut definiert bzw. überschrieben werden soll.

```js example-good
var obj = Object.create({});
Object.defineProperty(obj, "foo", {value: "bar", configurable: true});
Object.defineProperty(obj, "foo", {value: "baz", configurable: true});
```

## Siehe auch

- [\[\[Configurable\]\]](/de/docs/Web/JavaScript/Data_structures#Properties)
- {{jsxref("Object.defineProperty()")}}
