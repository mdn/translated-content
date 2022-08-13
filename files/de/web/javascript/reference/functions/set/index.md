---
title: Setter
slug: Web/JavaScript/Reference/Functions/set
tags:
  - ECMAScript 5
  - Functions
  - JavaScript
translation_of: Web/JavaScript/Reference/Functions/set
---
{{jsSidebar("Functions")}}

Die **`set`** Syntax bindet eine Objekteigenschaft an eine Funktion welche aufgerufen wird, wenn die Eigenschaft neu beschrieben wird.

{{EmbedInteractiveExample("pages/js/functions-setter.html")}}

## Syntax

    {set prop(val) { . . . }}
    {set [expression](val) { . . . }}

### Parameter

- `prop`
  - : Der Name der Eigenschaft, die an die gegebene Funktion gebunden wird.

<!---->

- `val`
  - : Ein Alias für die Variable, die den Wert enthält, der der Eigenschaft `prop` zugewiesen wird.
- expression
  - : Beginnend mit ECMAScript 2015, kann auch ein Ausdruck für einen berechneten Eigenschaftsnamen genutzt werden, der an die Funktion gebunden wird.

## Beschreibung

In JavaScript kann ein _Setter_ benutzt werden, um eine Funktion aufzurufen, wenn eine Eigenschaft geändert werden soll. Setter werden oft in Verbindung mit Gettern als Pseudoeigenschaft benutzt. Es ist nicht möglich gleichzeitig einen Setter auf einer Eigenschaft zu haben, die eine tatsächlichen Wert hält.

Das folgende ist zu beachten, wenn mit der `set` Syntax gearbeitet wird:

- Sie kann ein Bezeichner enthalten, welcher entweder eine Zahl oder ein String ist
- Sie muss exakt einen Parameter haben (siehe [Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) für mehr Informationen);
- Sie darf nicht in einem Objektliteral mit einem anderen `set` oder einen Dateneintrag mit der gleichen Eigenschaft geben. (`{ set x(v) { }, set x(v) { } }` und `{ x: ..., set x(v) { } }` sind verboten)

Ein Setter kann mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete "en-US/docs/JavaScript/Reference/Operators/Special/delete") Operator gelöscht werden.

## Beispiele

### Definieren eines Setters in einem neuen Objekt in der Objektinitialisierung

Das folgende definiert eine Pseudoeigenschaft `current` im Objekt `language`, die bei einer Zuweisung einen Wert in das `log` Array hinzufügt:

```js
var language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
}

language.current = 'EN';
console.log(language.log); // ['EN']

language.current = 'FA';
console.log(language.log); // ['EN', 'FA']
```

Zu beachten ist, dass `current` nicht definiert ist und der Zugriff auf diese `undefined` als Ergebnis liefert.

### Löschen eines Setter mit dem `delete` Operator

Wenn ein Setter gelöscht werden soll, muss man einfach [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) benutzen:

```js
delete o.current;
```

### Definieren eines Setters auf einem existierenden Objekts mit `defineProperty`

Um einen Setter später zu einem existierenden Objekt hinzuzufügen, benutzt man {{jsxref("Object.defineProperty()")}}.

```js
var o = {a: 0};

Object.defineProperty(o, 'b', { set: function(x) { this.a = x / 2; } });

o.b = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.a) // 5
```

### Einsatz eines berechneten Eigenschaftsnamen

```js
var expr = 'foo';

var obj = {
  baz: 'bar',
  set [expr](v) { this.baz = v; }
};

console.log(obj.baz); // "bar"
obj.foo = 'baz';      // run the setter
console.log(obj.baz); // "baz"
```

## Spezifikationen

| Spezifikation                                                                                    | Status                       | Kommentar                                 |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------- |
| {{SpecName('ES5.1', '#sec-11.1.5', 'Object Initializer')}}                     | {{Spec2('ES5.1')}}     | Initiale Definition.                      |
| {{SpecName('ES6', '#sec-method-definitions', 'Method definitions')}}     | {{Spec2('ES6')}}         | Berechnete Eigenschaftsnamen hinzugefügt. |
| {{SpecName('ESDraft', '#sec-method-definitions', 'Method definitions')}} | {{Spec2('ESDraft')}} |                                           |

## Browserkompatibilität

{{Compat("javascript.functions.set")}}

## Siehe auch

- [Getter](/de/docs/Web/JavaScript/Reference/Functions/get)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineGetter", "__defineGetter__")}}
- {{jsxref("Object.defineSetter", "__defineSetter__")}}
- [Defining Getters and Setters](/de/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters) im JavaScript Guide
