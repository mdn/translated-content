---
title: Array.prototype[Symbol.unscopables]
short-title: "[Symbol.unscopables]"
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables
l10n:
  sourceCommit: 34a34bee83fb4accf073ebc0c8cfc8eff956dc9b
---

{{JSRef}}

`Array.prototype`의 **`[Symbol.unscopables]`** 데이터 속성은 모든 {{jsxref("Array")}} 인스턴스에서 공유됩니다. 여기에는 ES2015 버전 이전에는 ECMAScript 표준에 포함되지 않았고, [`with`](/ko/docs/Web/JavaScript/Reference/Statements/with) 문 바인딩을 위해 무시되는 속성 이름이 포함되어 있습니다.

## 값

아래에 있는 속성 이름과 해당 값이 `true`로 설정된 [널 프로토타입 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#null_프로토타입_객체)입니다.

{{js_property_attributes(0, 0, 1)}}

## 설명

`with` 문 바인딩 목적으로 무시되는 기본 `Array` 속성은 다음과 같습니다.

- [`at()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- [`copyWithin()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
- [`entries()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)
- [`fill()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
- [`find()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [`findIndex()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [`findLast()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)
- [`findLastIndex()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)
- [`flat()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [`flatMap()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
- [`includes()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [`keys()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)
- [`toReversed()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)
- [`toSorted()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
- [`toSpliced()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced)
- [`values()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/values)

`Array.prototype[Symbol.unscopables]`는 위의 모든 속성 이름과 `true` 값만 포함하는 빈 객체입니다. 이 [객체의 프로토타입은 `null`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#null_프로토타입_객체)이므로 실수로 [`toString`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)과 같은 `Object.prototype` 속성은 범위 지정이 불가능해지지 않으며, `with` 문 내의 `toString()`은 배열에서 계속 호출됩니다.

객체에 범위 지정 불가능 속성을 설정하는 방법은 {{jsxref("Symbol.unscopables")}}를 참조하세요.

## 예제

아래의 `keys.push('something')` 호출이 ECMAScript 2015 이전에 작성된 코드에 있다고 가정해 보겠습니다.

```js
var keys = [];

with (Array.prototype) {
  keys.push("something");
}
```

ECMAScript 2015에 {{jsxref("Array.prototype.keys()")}} 메서드가 도입되었을 때, `[Symbol.unscopables]` 데이터 속성이 함께 도입되지 않았다면, JavaScript 런타임이 `keys`를 예제 코드에 정의된 `keys` 배열이 아닌 {{jsxref("Array.prototype.keys()")}} 메서드로 해석하기 때문에 해당 `keys.push('something')` 호출이 중단될 수 있었습니다.

따라서 `Array.prototype`에 대한 `[Symbol.unscopables]` 데이터 속성을 사용하면 ECMAScript 2015에 도입된 `Array` 속성이 `with` 문 바인딩 목적으로 무시되므로 ECMAScript 2015 이전에 작성된 코드가 중단되지 않고 예상대로 계속 작동할 수 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.prototype[Symbol.unscopables]` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스된 콜렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Statements/with", "with")}}
- {{jsxref("Symbol.unscopables")}}
