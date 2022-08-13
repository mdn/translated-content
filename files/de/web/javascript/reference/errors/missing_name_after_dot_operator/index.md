---
title: 'SyntaxError: missing name after . operator'
slug: Web/JavaScript/Reference/Errors/Missing_name_after_dot_operator
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_name_after_dot_operator
original_slug: Web/JavaScript/Reference/Fehler/Missing_name_after_dot_operator
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: missing name after . operator

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

Der Punktoperator (`.`) wird für den [Zugriff auf Eigenschaften](/de/docs/Web/JavaScript/Reference/Operators/Property_Accessors) genutzt. Man muss den Namen der Eigenschaft spezifizieren, auf den man zugreifen möchte. Um berechnete Eigenschaftsnamen zu benutzen muss statt dem Punkt eckige Klammern genutzt werden. Das erlaubt es einen Ausdruck zu berechnen. Manchmal möchte man Konkatenation stattdessen erreichen. Dafür wird ein Plusoperator (`+`) genutzt werden.

## Beispiele

### Zugriff auf Eigenschaften

[Zugriff auf Eigenschaften](/de/docs/Web/JavaScript/Reference/Operators/Property_Accessors) wird in JavaScript entweder mit einem Punkt oder eckigen Klammern erreicht, aber nicht beides. Eckige Klammern erlauben es auch Eigenschaftsnamen zu berechnen.

```js example-bad
var obj = { foo: { bar: "baz", bar2: "baz2" } };
var i = 2;

obj.[foo].[bar]
// SyntaxError: missing name after . operator

obj.foo."bar"+i;
// SyntaxError: missing name after . operator
```

Um das Problem zu lösen, muss auf das Objekt wie folgt zugegriffen werden:

```js example-good
obj.foo.bar; // "baz"
// or alternatively
obj["foo"]["bar"]; // "baz"

// computed properties require square brackets
obj.foo["bar" + i]; // "baz2"
```

### Zugriff auf Eigenschaften vs. Konkatenation

Wenn man aus einer anderen Programmiersprache kommt (z. B. {{Glossary("PHP")}}), ist es einfach den Punktoperator (`.`) und den Konkatenationsoperator (`+`) zu vermischen.

```js example-bad
console.log("Hello" . "world");

// SyntaxError: missing name after . operator
```

Stattdessen muss man das Pluszeichen für Konkatenation benutzen:

```js example-good
console.log("Hello" + "World");
```

## Siehe auch

- [Zugriff auf Eigenschaften](/de/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
