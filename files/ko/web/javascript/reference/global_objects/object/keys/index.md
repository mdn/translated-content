---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
---
{{JSRef}}

**`Object.keys()`** 메소드는 주어진 객체의 속성 이름들을 일반적인 반복문과
동일한 순서로 순회되는 열거할 수 있는 배열로 반환합니다.

{{EmbedInteractiveExample("pages/js/object-keys.html")}}

## 구문

```js
Object.keys(obj)
```

### 매개변수

- `obj`
  - : 열거할 수 있는 속성 이름들을 반환 받을 객체

### 반환 값

전달된 객체의 열거할 수 있는 모든 속성 이름들을 나타내는 문자열 배열

## 설명

`Object.keys()` 는 전달된 객체에서 직접 찾은 열거할 수 있는 속성 이름에 해당하는 문자열 배열을 반환합니다.
속성 이름의 순서는 객체의 속성을 수동으로 반복하여 지정하는 것과 동일합니다.

## 예시

### Using Object.keys

```js
// 단순 배열
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// 배열형 객체
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// 키와 순서가 무작위인 배열형 객체
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo 는 열거할 수 없는 속성입니다.
const myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
```

만약 열거할 수 없는 속성도 포함한 속성 이름들을 원한다면, 다음을 참고할 수 있습니다.
{{jsxref("Object.getOwnPropertyNames()")}}.

### 비객체 강제 형변환

ES5에서, 이 메서드의 인수에 비객체(원시형)을 전달할 경우, {{jsxref("TypeError")}}가 발생합니다.

ES2015부터는 객체가 아닌 인수는 객체로 강제 변환됩니다.

```js
// ES5
Object.keys('foo');  // TypeError: "foo" is not an object

// ES2015+
Object.keys('foo');  // ["0", "1", "2"]
```

## 폴리필

`Object.keys`를 지원하지 않는 환경에서 사용하시려면 다음 스니펫을 복사하십시오.

```js
// From https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}
```

위의 코드에는 다른 창에서 객체를 전달했을 때 IE7 (그리고 아마 IE8)에서는 열거할 수 없는 키가 포함되어 있습니다.

간단한 브라우저 폴리필은 다음을 참고하세요. [Javascript - Object.keys Browser Compatibility](https://tokenposts.blogspot.com.au/2012/04/javascript-objectkeys-browser.html).

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `Object.keys` 의 폴리필 코드는 아래에서 확인할 수 있습니다. [`core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Enumerability
  and ownership of properties](/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.entries()")}}
