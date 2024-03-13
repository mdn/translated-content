---
title: Object.getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
---

{{JSRef}}

**`Object.getOwnPropertyNames()`** 메서드는 전달된 객체의 모든 속성 (심볼을 사용하는 속성을 제외한 열거할 수 없는 속성 포함) 들을 배열로 반환합니다.

{{EmbedInteractiveExample("pages/js/object-getownpropertynames.html")}}

## 구문

```js
Object.getOwnPropertyNames(obj);
```

### 매개변수

- `obj`
  - : 반환 받을 열거형 속성과 열거형이 아닌 속성을 가진 객체

### 반환 값

전달된 객체에 있는 속성들의 문자열 배열을 반환합니다.

## 설명

`Object.getOwnPropertyNames()` 는 전달된 객체(`obj`)의 열거형 및 열거할 수 없는 속성들을 문자열 배열로 반환합니다.
배열의 열거할 수 있는 속성들의 순서는 {{jsxref("Statements/for...in", "for...in")}} 반복문 (또는 {{jsxref("Object.keys()")}})이 처리되는 순서와 일치합니다.
ES6 문법에 따라, 객체의 정수형 키 (열거형 및 비-열거형 포함)가 먼저 배열에 오름차순으로 추가된 다음 문자열 키를 삽입하는 순서로 추가됩니다.

ES5에서는 인수(`obj`)가 객체가 아닌 경우 (원시 타입) {{jsxref("TypeError")}} 가 발생합니다.
ES2015에서는, 객체가 아닌 인수를 객체 타입으로 강제 형변환합니다.

```js
Object.getOwnPropertyNames("foo");
// TypeError: "foo" is not an object (ES5 code)

Object.getOwnPropertyNames("foo");
// ["0", "1", "2", "length"]  (ES2015 code)
```

## 예시

### Using Object.getOwnPropertyNames()

```js
var arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort()); // .sort() 는 배열 메서드입니다.
// logs ["0", "1", "2", "length"]

// 배열형 객체
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.getOwnPropertyNames(obj).sort()); // .sort() 는 배열 메서드입니다.
// logs ["0", "1", "2"]

// 속성 명과 속성 값을 Array.forEach 메서드를 사용하여 로깅합니다.
Object.getOwnPropertyNames(obj).forEach(function (val, idx, array) {
  console.log(val + " -> " + obj[val]);
});
// logs
// 0 -> a
// 1 -> b
// 2 -> c

// 열거할 수 없는 속성
var my_obj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
      enumerable: false,
    },
  },
);
my_obj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj).sort());
// logs ["foo", "getFoo"]
```

만약 열거 가능한 속성만 사용한다면, {{jsxref("Object.keys()")}} 또는 {{jsxref("Statements/for...in", "for...in")}} 반복문을 사용하는걸 권장합니다.
(이는 객체의 프로토타입 체인을 먼저 사용하여 열거 가능한 속성을 반환합니다. 단, 후자는{{jsxref("Object.prototype.hasOwnProperty()", "hasOwnProperty()")}}에 필터 됩니다.)

프로토타입 체인에 있는 요소들은 나열되지 않음:

```js
function ParentClass() {}
ParentClass.prototype.inheritedMethod = function () {};

function ChildClass() {
  this.prop = 5;
  this.method = function () {};
}
ChildClass.prototype = new ParentClass();
ChildClass.prototype.prototypeMethod = function () {};

console.log(
  Object.getOwnPropertyNames(
    new ChildClass(), // ["prop", "method"]
  ),
);
```

### 열거할 수 없는 속성만 가져오기

이 방법은 {{jsxref("Array.prototype.filter()")}} 함수를 사용해 (`Object.getOwnPropertyNames()` 을 통해 얻은) 모든 키 중 ({{jsxref("Object.keys()")}} 을 통해 얻은) 열거 가능한 키들을 제거하여 열거할 수 없는 키들만 출력합니다.

```js
var target = myObject;
var enum_and_nonenum = Object.getOwnPropertyNames(target);
var enum_only = Object.keys(target);
var nonenum_only = enum_and_nonenum.filter(function (key) {
  var indexInEnum = enum_only.indexOf(key);
  if (indexInEnum == -1) {
    // enum_only 에 키 값이 없다는 것은
    // 그 키가 열거할 수 없는 키 임을 의미합니다.
    // 그래서 이 필터에서 true를 반환합니다.
    return true;
  } else {
    return false;
  }
});

console.log(nonenum_only);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `Object.getOwnPropertyNames` 의 폴리필 코드는 아래에서 확인 할 수 있습니다. [`core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Enumerability and ownership of properties](/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Array.forEach()")}}
