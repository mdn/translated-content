---
title: arguments[@@iterator]()
slug: Web/JavaScript/Reference/Functions/arguments/@@iterator
tags:
  - Deprecated
  - Functions
  - JavaScript
  - Property
  - arguments
translation_of: Web/JavaScript/Reference/Functions/arguments/@@iterator
---
{{jsSidebar("Functions")}}

Der Initialwert der **`@@iterator`** Eigenschaft ist das selbe Funktionsobjekt wie der Initialwert der {{jsxref("Array.prototype.values")}} Eigenschaft.

## Syntax

    arguments[Symbol.iterator]()

## Beispiele

### Iterieren mit einer `for...of` Schleife

```js
function f() {
  // der Browser muss for..of Schleifen und
  // let-Variablen in for Schleifen unterstützen
  for (let letter of arguments) {
    console.log(letter);
  }
}
f('w', 'y', 'k', 'o', 'p');
```

## Spezifikationen

| Spezifikation                                                                                                                | Status                       | Kommentar            |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-createunmappedargumentsobject', ' CreateUnmappedArgumentsObject')}}     | {{Spec2('ES6')}}         | Initiale Definition. |
| {{SpecName('ES6', '#sec-createmappedargumentsobject', ' CreateMappedArgumentsObject')}}         | {{Spec2('ES6')}}         | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-createunmappedargumentsobject', 'CreateUnmappedArgumentsObject')}} | {{Spec2('ESDraft')}} |                      |
| {{SpecName('ESDraft', '#sec-createmappedargumentsobject', 'CreateMappedArgumentsObject')}}     | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.functions.arguments.@@iterator")}}

## Siehe auch

- {{jsxref("Array.prototype.values()")}}
