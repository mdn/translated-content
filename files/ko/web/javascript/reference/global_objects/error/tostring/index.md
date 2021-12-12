---
title: Error.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
tags:
  - JavaScript
  - Method
  - Prototype
browser-compat: javascript.builtins.Error.toString
---
{{JSRef}}

**`toString()`** 메서드는 명시된 {{jsxref("Error")}} 객체를 표현하는 문자열을 반환합니다.

## 구문

```js
toString()
```

### 반환값

명시된 {{jsxref("Error")}} 객체를 표현하는 문자열.

## 설명

{{jsxref("Error")}} 객체는 모든 객체가 상속받는 {{jsxref("Object.prototype.toString()")}} 메서드를 재정의합니다.
이 의미는 다음과 같습니다({{jsxref("Object")}}과 {{jsxref("String")}}는 그들 만의 원본 값이 있다고 가정합니다):

```js
Error.prototype.toString = function() {
  'use strict';

  var obj = Object(this);
  if (obj !== this) {
    throw new TypeError();
  }

  var name = this.name;
  name = (name === undefined) ? 'Error' : String(name);

  var msg = this.message;
  msg = (msg === undefined) ? '' : String(msg);

  if (name === '') {
    return msg;
  }
  if (msg === '') {
    return name;
  }

  return name + ': ' + msg;
};
```

## 예제

### toString() 사용하기

```js
var e1 = new Error('fatal error');
console.log(e1.toString()); // 'Error: fatal error'

var e2 = new Error('fatal error');
e2.name = undefined;
console.log(e2.toString()); // 'Error: fatal error'

var e3 = new Error('fatal error');
e3.name = '';
console.log(e3.toString()); // 'fatal error'

var e4 = new Error('fatal error');
e4.name = '';
e4.message = undefined;
console.log(e4.toString()); // ''

var e5 = new Error('fatal error');
e5.name = 'hello';
e5.message = undefined;
console.log(e5.toString()); // 'hello'
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error.prototype.toSource()")}}
