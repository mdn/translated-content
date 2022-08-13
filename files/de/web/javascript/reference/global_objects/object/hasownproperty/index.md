---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
tags:
  - JavaScript
  - Method
  - Object
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
---
{{JSRef}}

Die Methode **`hasOwnProperty() `**gibt einen boolean Wert zurück abhängig von der Existenz des gegebenen **Attributs** in einem **Objekt.**

## Syntax

    obj.hasOwnProperty(prop)

### Parameter

- `prop`
  - : Der Name des Attributs auf dessen Existenz im Objekt geprüft wird

### Rückgabewert

Ein {{jsxref("Boolean")}} der besagt, ob eine Eigenschaft in dem gegebenen Objekte vorhanden ist oder nicht.

## Beschreibung

Jedes untergeordnete Objekt / jeder untergeordneter Wert in einem Objekt trägt die hasOwnProperty Methode mit sich. Diese Methode ermöglicht das Nachfragen eines untergeordneten Wertes/Objekts innerhalb eines Objekts. Anders als die {{jsxref("Operators/in", "in")}} Methode ermöglicht die hasOwnProperty Methode keinen Zugriff auf die Kindeskinder eines Objekts.

## Beispiele

### Einsatz von hasOwnProperty zur Überprüfung der Existenz eines Attributs in einem Objekt

Das folgende Beispiel prüft ob das Objekt `o` ein Attribut mit dem Namen `prop` beinhaltet.

```js
o = new Object();
o.prop = 'exists';

function changeO() {
  o.newprop = o.prop;
  delete o.prop;
}

o.hasOwnProperty('prop');   // gibt true zurück
changeO();
o.hasOwnProperty('prop');   // gibt false zurück
```

### Direkter Nachfolger vs Geerbtes Attribut

Das folgende Beispiel unterscheidet zwischen direkten Kind-Attributen eines Objekts und den Attributen die durch die prototype - Verarbeitung entstehen.

```js
o = new Object();
o.prop = 'exists';
o.hasOwnProperty('prop');             // gibt true zurück
o.hasOwnProperty('toString');         // gibt false zurück
o.hasOwnProperty('hasOwnProperty');   // gibt false zurück
```

### Über die Eigenschaften eines Objektes iterieren

Das folgende Beispiel zeigt, wie man über die Eigenschaften eines Objektes iteriert ohne vererbte Eigenschaften auszuführen. Zu Beachten ist, dass eine {{jsxref("Statements/for...in", "for...in")}} Schleife nur über zählbare (enumerable) Eigenschaften iteriert, jedoch sollte man durch diese Einschränkung nicht annehmen, dass nicht-zählbare Eigenschaften gezeigt werden, denn `hasOwnProperty` selbst kann nur auf zählbare Eigenschaften angewendet werden (wie auch die {{jsxref("Object.getOwnPropertyNames()")}} Funktion):

```js
var buz = {
  fog: 'stack'
};

for (var name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log('this is fog (' + name + ') for sure. Value: ' + buz[name]);
  }
  else {
    console.log(name); // toString or something else
  }
}
```

### Einsatz von `hasOwnProperty` als Eigenschaftsname

JavaScript schützt die den Eigenschaftsnamen `hasOwnProperty` nicht. Dadurch ist es möglich, dass ein Objekt eine Eigenschaft mit diesem namen hat. Das ermöglicht es eine externe `hasOwnProperty` Funktion zu benutzen:

```js
var foo = {
  hasOwnProperty: function() {
    return false;
  },
  bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // always returns false

// Use another Object's hasOwnProperty and call it with 'this' set to foo
({}).hasOwnProperty.call(foo, 'bar'); // true

// It's also possible to use the hasOwnProperty property from the Object prototype for this purpose
Object.prototype.hasOwnProperty.call(foo, 'bar'); // true
```

Zu beachten ist, dass im letzten Fall kein neues Objekt erstellt wird.

## Spezifikationen

| Spezifikation                                                                                                                        | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                                             | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.5. |
| {{SpecName('ES5.1', '#sec-15.2.4.5', 'Object.prototype.hasOwnProperty')}}                                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-object.prototype.hasownproperty', 'Object.prototype.hasOwnProperty')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-object.prototype.hasownproperty', 'Object.prototype.hasOwnProperty')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat}}

## See also

- [Aufzählbarkeit und Zugehörigkeit von Eigenschaften](/de/docs/Web/JavaScript/Aufzählbarkeit_und_Zugehörigkeit_von_Eigenschaften)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
