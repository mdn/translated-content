---
title: Erweitern
slug: Web/JavaScript/Reference/Classes/extends
tags:
  - Classes
  - ECMAScript 2015
  - JavaScript
translation_of: Web/JavaScript/Reference/Classes/extends
original_slug: Web/JavaScript/Reference/Klassen/extends
---
{{jsSidebar("Classes")}}

Das **`extends`** Schlüsselwort wird in einer [Klassendeklaration ](/de/docs/Web/JavaScript/Reference/Statements/class)oder in einem [Klassenausdruck ](/de/docs/Web/JavaScript/Reference/Operators/class)verwendet, um eine, von einer anderen Klasse, abgeleitete Klasse zu erzeugen.

## Syntax

    class KindKlasse extends ElternKlasse { ... }

## Beschreibung

Das Schlüsselwort `extends` kann verwendet werden, um von selbst erstellen Klassen als auch von standardmäßig eingebaute Objekte abzuleiten.

Das `prototype` Objekt, des zu erweiternden Objekt, muss entweder von Typ {{jsxref("Object")}} oder{{jsxref("null")}} sein.

## Beispiele

### Verwendung von `extends`

Das erste Beispiel erzeugt einen Klasse mit dem Namen `Square,` die von der Klasse `Polygon` abgeleitet ist. Dieses Beispiel wurde aus dieser [live Demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(Quellcode)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) entnommen.

```js
class Square extends Polygon {
  constructor(length) {
    // Hier wird die constructor Methode der Eltern-Klasse aufgerufen,
    // für die Parameter width und height wurde der übergebene length Parameter verwendet
    super(length, length);
    // Anmerkung: In abgeleiteten Klassen, muss die super() Methode aufgerufen werden,
    // bevor man das 'this' Objekt verwenden kann, da es sonst zu einen Referenz Fehler kommt
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.height = this.width = Math.sqrt(value);
    this.area = value;
  }
}
```

### Verwendung mit standardmäßig eingebautem Objekt

In diesem Beispiel wird das standardmäßig eingebaute {{jsxref("Date")}} Objekt erweitert. Dieses Beispiel wurde aus dieser [live Demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(Quellcode)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) entnommen.

```js
class myDate extends Date {
  constructor() {
    super();
  }

  getFormattedDate() {
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return this.getDate() + "-" + months[this.getMonth()] + "-" + this.getFullYear();
  }
}
```

### Ableiten von `null`

Das Ableiten von {{jsxref("null")}} funktioniert genauso wie mit jeder anderen Klasse, mit der Ausnahme, dass das `prototype` Objekt nicht von {{jsxref("Object.prototype")}} abgeleitet ist.

```js
class nullExtends extends null {
  constructor() {}
}

Object.getPrototypeOf(nullExtends); // Function.prototype
Object.getPrototypeOf(nullExtends.prototype) // null
```

## Spezifikationen

| Spezifikation                                                                    | Status                       | Kommentar            |
| -------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-class-definitions', 'extends')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-class-definitions', 'extends')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Classes](/de/docs/Web/JavaScript/Reference/Classes)
- [super](/de/docs/Web/JavaScript/Reference/Operators/super)
