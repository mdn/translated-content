---
title: Methoden Definitionen
slug: Web/JavaScript/Reference/Functions/Method_definitions
tags:
  - ECMAScript 2015
  - Funktionen
  - JavaScript
  - Objekte
  - Syntax
translation_of: Web/JavaScript/Reference/Functions/Method_definitions
original_slug: Web/JavaScript/Reference/Functions/Methoden_Definitionen
---
{{JsSidebar("Functions")}}

Beginnend mit ECMAScript 2015 wurde eine kürzere Syntax für Methodendefinitionen in Objekt Initialisierungen eingeführt. Es ist eine Abkürzung für die Zuweisung einer Funktion an einen Methodennamen.

## Syntax

    var obj = {
      property( parameters… ) {},
      *generator( parameters… ) {},
    // also with computed keys:
      [property]( parameters… ) {},
      *[generator]( parameters… ) {},
    // compare ES5 getter/setter syntax:
      get property() {},
      set property(value) {}
    };

## Beschreibung

Die Syntax der Kurzschreibweise ähnelt der in ECMAScript 2015 eingeführten Syntax der [getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [setter](/de/docs/Web/JavaScript/Reference/Functions/set).

Gegeben sei der folgende Quellcode:

```js
var obj = {
  foo: function() {},
  bar: function() {}
};
```

Jetzt können Sie das abkürzen zu:

```js
var obj = {
  foo() {},
  bar() {}
};
```

> **Hinweis:** Die kurze Syntax benutzt benamte Funktionen statt anonymen Funktionen (wie in ...`foo: function() {}`...). Benamte Funktionen können sich vom Funktionskörper aus aufrufen (für anonyme Funktionen ist das unmöglich, weil sie keinen Bezeichner haben). Für mehr Details, siehe {{jsxref("Operators/function","function","#Beispiele")}}.

### Kurze Generatormethoden

[Generatormethoden](/de/docs/Web/JavaScript/Reference/Statements/function*) können mit der kurzen Syntax ebenfalls definiert werden. Zu beachten ist, dass der Stern (\*) in der kurzen Syntax nur vor dem Namen der Generatoreigenschaft geschrieben werden kann. `* g(){}` funktioniert, `g *(){}` funktioniert nicht.

```js
// Using a named property (pre-ES2015)
var obj2 = {
  g: function*() {
    var index = 0;
    while(true)
      yield index++;
  }
};

// The same object using shorthand syntax
var obj2 = {
  * g() {
    var index = 0;
    while(true)
      yield index++;
  }
};

var it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1
```

### Methodendefinitionen die nicht konstruiert werden können

Alle Methodendefinitionen die keine Konstruktoren sind werden einen {{jsxref("TypeError")}} erzeugen, wenn man versucht sie zu instantieren.

```js example-bad
var obj = {
  method() {},
};
new obj.method; // TypeError: obj.method is not a constructor

var obj = {
  * g() {}
};
new obj.g; // TypeError: obj.g is not a constructor (changed in ES2016)
```

## Beispiele

### Ein einfacher Testfall

```js
var obj = {
  a : "foo",
  b(){ return this.a; }
};
console.log(obj.b()); // "foo"
```

### Berechnete Eigenschaftsnamen

Die Kurzschreib-Syntax unterstützt auch berechnete Eigenschaftsnamen.

```js
var bar = {
  foo0 : function (){return 0;},
  foo1(){return 1;},
  ["foo" + 2](){return 2;},
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2
```

## Spezifikationen

| Spezifikation                                                                                    | Status                       | Kommentar                                                                                                                               |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES2015', '#sec-method-definitions', 'Method definitions')}} | {{Spec2('ES2015')}}     | Initiale Definition.                                                                                                                    |
| {{SpecName('ES7', '#sec-method-definitions', 'Method definitions')}}     | {{Spec2('ES7')}}         | Geändert, dass Generatormethoden ebenfalls nicht initialisierbar sind und einen Fehler schmeißen, wenn sie mit `new` eingesetzt werden. |
| {{SpecName('ESDraft', '#sec-method-definitions', 'Method definitions')}} | {{Spec2('ESDraft')}} |                                                                                                                                         |

## Browserkompatibilität

{{Compat}}

## SpiderMonkey spezifische Hinweise

- Vor SpiderMonkey 38 {{geckoRelease(38)}} waren "`get`" und "`set`" nicht valide Namen für Generatormethoden. Das wurde in {{bug(1073809)}} behoben.
- Vor SpiderMonkey 41 {{geckoRelease(41)}} mussten geschweifte Klammern für Methoden nicht notwendiger weise benutzt werden. Jetzt sind sie vorausgesetzt, um konform zur ES2015 Spezifikation zu sein. Es wird ein {{jsxref("SyntaxError")}} in dieser und späteren Versionen erzeugt ({{bug(1150855)}}).

  ```js example-bad
  var o = {x() 12}; // SyntaxError
  ```

- Die Restriktion, dass Generatormethoden Konstuktoren sind wurde in SpiderMonkey 41 {{geckoRelease(41)}} implementiert. Dazu siehe auch {{bug(1059908)}} und {{bug(1166950)}}

## See also

- [`get`](/de/docs/Web/JavaScript/Reference/Functions/get)
- [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)
- [Lexical grammar](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
