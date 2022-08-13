---
title: Statische Methoden
slug: Web/JavaScript/Reference/Classes/static
tags:
  - Classes
  - ECMAScript 2015
  - JavaScript
  - Static
translation_of: Web/JavaScript/Reference/Classes/static
original_slug: Web/JavaScript/Reference/Klassen/static
---
{{jsSidebar("Classes")}}

Das **`static`** Schüsselwort definiert statische Methoden für eine Klasse.

{{EmbedInteractiveExample("pages/js/classes-static.html")}}

## Syntax

    static methodenName() { ... }

## Beschreibung

Statische Methoden werden ohne Instanzierung einer Klasse aufgerufen und sind über eine erzeugte Instanz nicht aufrufbar. Oft werden in statische Methoden für Hilfsfunktionen verwendet.

## Aufruf von statischen Methoden

### Von einer anderen statischen Methode

Um eine statische Methode aus einer anderen statischen Methode der gleichen Klasse aufzurufen, kann das [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Schlüsselwort verwendet werden.

```js
class StaticMethodCall {
    static staticMethod() {
        return 'Static method has been called';
    }
    static anotherStaticMethod() {
        return this.staticMethod() + ' from another static method';
    }
}
StaticMethodCall.staticMethod();
// 'Static method has been called'

StaticMethodCall.anotherStaticMethod();
// 'Static method has been called from another static method'
```

### Für Klassenkonstruktoren und anderen Methoden

Statische Methoden sind mit dem [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Schlüsselwort nicht direkt erreichbar von nicht statischen Methoden. Man kann sie mit dem Klassennamen aufrufen: `KLASSENNAME.STATISCH_METHODE_NAME` oder mit der Aufrufen einer Eigenschaft von `constructor`: ` this.constructor.``STATISCH_METHODE_NAME `.

```js
class StaticMethodCall{
    constructor(){
        console.log(StaticMethodCall.staticMethod());
        // 'static method has been called'

        console.log(this.constructor.staticMethod());
        // 'static method has been called'
    }

    static  staticMethod(){
        return 'static method has been called.';
    }
}
```

## Beispiele

Das folgende Beispiel demonstriert mehrere Dinge:

1. Wie eine statische Methode in einer Klasse implementiert wird.
2. Das von einer Klasse mit statischen Eigenschaften geerbt werden kann.
3. Wie eine statische Methode aufgerufen werden kann und wie nicht.

```js
class Triple {
  static triple(n) {
    if (n === undefined) {
      n = 1;
    }
    return n * 3;
  }
}

class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

console.log(Triple.triple());        // 3
console.log(Triple.triple(6));       // 18

var tp = new Triple();

console.log(BiggerTriple.triple(3));
// 81 (not affected by parent's instantiation)

console.log(tp.triple());
// 'tp.triple is not a function'.
```

## Spezifikationen

| Spezifikation                                                                                | Status                       | Kommentar            |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-class-definitions', 'Class definitions')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.classes.static")}}

## Siehe auch

- [`class` expression](/de/docs/Web/JavaScript/Reference/Operators/class)
- [`class` declaration](/de/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/de/docs/Web/JavaScript/Reference/Classes)
