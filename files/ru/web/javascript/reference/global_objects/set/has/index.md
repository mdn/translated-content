---
title: Set.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
---

{{JSRef}}

Метод **`has()`** возвращает логическое значение, показывающее, существует ли элемент с указанным значением в объекте `Set` или нет.

{{EmbedInteractiveExample("pages/js/set-prototype-has.html")}}

## Syntax

```
mySet.has(value);
```

### Parameters

- value
  - : Required. The value to test for presence in the `Set` object.

### Return value

- Boolean

  - : Returns `true` if an element with the specified value exists in the `Set` object; otherwise `false`.

    > **Примечание:** Technically speaking, `has()` uses the [`sameValueZero`](/ru/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value-zero_equality) algorithm to determine whether the given element is found.

## Examples

### Using the `has` method

```js
var mySet = new Set();
mySet.add("foo");

mySet.has("foo"); // returns true
mySet.has("bar"); // returns false

var set1 = new Set();
var obj1 = { key1: 1 };
set1.add(obj1);

set1.has(obj1); // returns true
set1.has({ key1: 1 }); // returns false because they are different object references
set1.add({ key1: 1 }); // now set1 contains 2 entries
```

## Specifications

| Specification                                                          | Status               | Comment             |
| ---------------------------------------------------------------------- | -------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-set.prototype.has', 'Set.prototype.has')}}  | {{Spec2('ES2015')}}  | Initial definition. |
| {{SpecName('ESDraft', '#sec-set.prototype.has', 'Set.prototype.has')}} | {{Spec2('ESDraft')}} |                     |

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.add()")}}
- {{jsxref("Set.prototype.delete()")}}
