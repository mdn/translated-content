---
title: 'TypeError: can''t assign to property "x" on "y": not an object'
slug: Web/JavaScript/Reference/Errors/Cant_assign_to_property
---

{{jsSidebar("Errors")}}Ошибка строгого режима JavaScript "can't assign to property" ("невозможно присвоить свойство") происходит в тот момент, когда вы пытаетесь создать свойство примитивного типа данных (такого как символ, строка, число или булевое значение). Примитивные типы данных не могут содержать никаких свойств.

## Message

```
TypeError: can't assign to property "x" on {y}: not an object> (Firefox)
TypeError: Cannot create property 'x' on {y} (Chrome)
```

## Error type

{{jsxref("TypeError")}}.

## What went wrong?

In {{jsxref("Strict_mode")}}, a {{jsxref("TypeError")}} is raised when attempting to create a property on [primitive](/ru/docs/Glossary/primitive) value such as a [symbol](/ru/docs/Glossary/symbol), a [string](/ru/docs/Glossary/string), a [number](/ru/docs/Glossary/number) or a [boolean](/ru/docs/Glossary/boolean). [Primitive](/ru/docs/Glossary/Primitive) values cannot hold any [property](/ru/docs/Glossary/property/JavaScript).

The problem might be that an unexpected value is flowing at an unexpected place, or that an object variant of a {{jsxref("String")}} or a {{jsxref("Number")}} is expected.

## Examples

### Invalid cases

```js example-bad
"use strict";

var foo = "my string";
// The following line does nothing if not in strict mode.
foo.bar = {}; // TypeError: can't assign to property "bar" on "my string": not an object
```

### Fixing the issue

Either fix the code to prevent the [primitive](/ru/docs/Glossary/primitive) from being used in such places, or fix the issue is to create the object equivalent {{jsxref("Object")}}.

```js example-good
"use strict";

var foo = new String("my string");
foo.bar = {};
```

## See also

- {{jsxref("Strict_mode")}}
- [primitive](/ru/docs/Glossary/primitive)
