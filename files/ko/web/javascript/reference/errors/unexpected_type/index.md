---
title: 'TypeError: "x" is (not) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
---

{{jsSidebar("Errors")}}

## Message

```
    TypeError: "x" is (not) "y"

    Examples:
    TypeError: "x" is undefined
    TypeError: "x" is null
    TypeError: "undefined" is not an object
    TypeError: "x" is not an object or null
    TypeError: "x" is not a symbol
```

## Error type

{{jsxref("TypeError")}}.

## What went wrong?

그것은 정확하지 않은 형태이다. 그것은 가끔{{jsxref("undefined")}} 나 {{jsxref("null")}} 값을 발생한다.

또한, {{jsxref("Object.create()")}} 또는 {{jsxref("Symbol.keyFor()")}}와 같은 메서드는 반드시 제공되어야하는 특별한 형태를 요구한다.

## Examples

### Invalid cases

```js example-bad
// undefined and null cases on which the substring method won't work
var foo = undefined;
foo.substring(1); // TypeError: foo is undefined

var foo = null;
foo.substring(1); // TypeError: foo is null

// Certain methods might require a specific type
var foo = {};
Symbol.keyFor(foo); // TypeError: foo is not a symbol

var foo = "bar";
Object.create(foo); // TypeError: "foo" is not an object or null
```

### Fixing the issue

undefined 나 null 값을 가진 null 포인터를 고치기 위해서 아래 예제와 같이 [typeof](/ko/docs/Web/JavaScript/Reference/Operators/typeof) 연산자를 사용할 수 있다.

```js
if (typeof foo !== "undefined") {
  // Now we know that foo is defined, we are good to go.
}
```

## 같이 보기

- {{jsxref("undefined")}}
- {{jsxref("null")}}
