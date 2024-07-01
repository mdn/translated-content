---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
---

{{JSRef}}

**`JSON.stringify()`** 메서드는 JavaScript 값이나 객체를 JSON 문자열로 변환합니다. 선택적으로, `replacer`를 함수로 전달할 경우 변환 전 값을 변형할 수 있고, 배열로 전달할 경우 지정한 속성만 결과에 포함합니다.

{{EmbedInteractiveExample("pages/js/json-stringify.html")}}

## 구문

```js
    JSON.stringify(value[, replacer[, space]])
```

### 매개변수

- `value`
  - : JSON 문자열로 변환할 값.
- `replacer` {{optional_inline}}
  - : 문자열화 동작 방식을 변경하는 함수, 혹은 JSON 문자열에 포함될 값 객체의 속성들을 선택하기 위한 화이트리스트(whitelist)로 쓰이는 {{jsxref("String")}} 과 {{jsxref("Number")}} 객체들의 배열. 이 값이 null 이거나 제공되지 않으면, 객체의 모든 속성들이 JSON 문자열 결과에 포함된다.
- `space` {{optional_inline}}
  - : 가독성을 목적으로 JSON 문자열 출력에 공백을 삽입하는데 사용되는 {{jsxref("String")}} 또는 {{jsxref("Number")}} 객체. 이것이 `Number` 라면, 공백으로 사용되는 스페이스(space)의 수를 나타낸다; 이 수가 10 보다 크면 10 으로 제한된다. 1 보다 작은 값은 스페이스가 사용되지 않는 것을 나타낸다. 이것이 `String` 이라면, 그 문자열(만약 길이가 10 보다 길다면, 첫번째 10 개의 문자)이 공백으로 사용된다. 이 매개 변수가 제공되지 않는다면(또는 null 이면), 공백이 사용되지 않는다.

### 반환 값

주어진 값과 대응하는 JSON 문자열.

### 예외

순환 참조를 발견할 경우 {{jsxref("TypeError")}}(`cyclic object value`).

## 설명

`JSON.stringify()`는 값을 JSON 표기법으로 변환한다.

- 배열이 아닌 객체의 속성들은 어떤 특정한 순서에 따라 문자열화 될 것이라고 보장되지 않는다. 같은 객체의 문자열화에 있어서 속성의 순서에 의존하지 않는다.
- {{jsxref("Boolean")}}, {{jsxref("Number")}}, {{jsxref("String")}} 객체들은 문자열화 될 때 전통적인 변환 의미에 따라 연관된 기본형(primitive) 값으로 변환된다.
- {{jsxref("undefined")}}, 함수, 심볼(symbol)은 변환될 때 생략되거나(객체 안에 있을 경우) {{jsxref("null")}} 로 변환된다(배열 안에 있을 경우).
- 심볼을 키로 가지는 속성들은 `replacer` 함수를 사용하더라도 완전히 무시된다.
- 열거 불가능한 속성들은 무시된다.

```js
JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify("foo"); // '"foo"'
JSON.stringify([1, "false", false]); // '[1,"false",false]'
JSON.stringify({ x: 5 }); // '{"x":5}'

JSON.stringify(new Date(2006, 0, 2, 15, 4, 5));
// '"2006-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}' or '{"y":6,"x":5}'
JSON.stringify([new Number(1), new String("false"), new Boolean(false)]);
// '[1,"false",false]'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol("") });
// '{}'
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, [Symbol.for("foo")]);
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, function (k, v) {
  if (typeof k === "symbol") {
    return "a symbol";
  }
});
// '{}'

// Non-enumerable properties:
JSON.stringify(
  Object.create(null, {
    x: { value: "x", enumerable: false },
    y: { value: "y", enumerable: true },
  }),
);
// '{"y":"y"}'
```

### `replacer` 매개 변수

`replacer` 매개변수는 함수 또는 배열이 될 수 있다. 함수일 때는 문자열화 될 key 와 value, 2개의 매개변수를 받는다. key 가 발견된 객체는 리플레이서의 `this` 매개변수로 제공된다. 맨 처음에는 문자열화될 그 객체를 나타내는 비어 있는 key와 함께 호출되고, 그 다음에는 문자열화될 그 객체나 배열의 각 속성에 대해 호출된다. 이것은 JSON 문자열에 추가되어야 하는 값을 반환해야한다:

- {{jsxref("Number")}} 를 반환하면, JSON 문자열에 추가될 때 그 수를 나타내는 문자열이 그 속성의 값으로 사용된다.
- {{jsxref("String")}} 을 반환하면, 그것이 JSON 문자열에 추가될 때 속성의 값으로 사용된다.
- {{jsxref("Boolean")}} 을 반환하면, 그것이 JSON 문자열에 추가될 때 "true" 또는 "false" 이 속성의 값으로 사용된다.
- 다른 객체를 반환하면, 그 객체는 `replacer` 함수를 각각의 속성에 대해 호출하며 순환적으로 JSON 문자열로 문자열화된다. 그 객체가 함수인 경우에는 JSON 문자열에 아무것도 추가되지 않는다.
- `undefined` 를 반환하면, 그 속성은 JSON 문자열 결과에 포함되지 않는다.

> **참고:** **유의:** `replacer` 함수를 배열로부터 값을 제거하기위해 사용할 수 없다. 만약 `undefined` 나 함수를 반환한다면 `null` 이 대신 사용될 것이다.

#### 함수에 대한 예제

```js
function replacer(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

var foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};
var jsonString = JSON.stringify(foo, replacer);
```

JSON 문자열 결과는 `{"week":45,"month":7}` 이다.

#### 배열에 대한 예제

`replacer` 가 배열인 경우, 그 배열의 값은 JSON 문자열의 결과에 포함되는 속성의 이름을 나타낸다.

```js
JSON.stringify(foo, ["week", "month"]);
// '{"week":45,"month":7}', 단지 "week" 와 "month" 속성을 포함한다
```

### `space` 매개 변수

`space` 매개변수는 최종 문자열의 간격을 제어한다. 숫자일 경우 최대 10자 만큼의 공백 문자 크기로 들여쓰기되며, 문자열인 경우 해당 문자열 또는 처음 10자 만큼 들여쓰기 된다.

```js
JSON.stringify({ a: 2 }, null, " ");
// '{
//  "a": 2
// }'
```

'\t'를 사용하면 일반적으로 들여쓰기 된 코드스타일과 유사함.

```js
JSON.stringify({ uno: 1, dos: 2 }, null, "\t");
// returns the string:
// '{
//     "uno": 1,
//     "dos": 2
// }'
```

### `toJSON()` 작동

If an object being stringified has a property named `toJSON` whose value is a function, then the `toJSON()` method customizes JSON stringification behavior: instead of the object being serialized, the value returned by the `toJSON()` method when called will be serialized. For example:

```js
var obj = {
  foo: "foo",
  toJSON: function () {
    return "bar";
  },
};
JSON.stringify(obj); // '"bar"'
JSON.stringify({ x: obj }); // '{"x":"bar"}'
```

### Example of using `JSON.stringify()` with `localStorage`

In a case where you want to store an object created by your user and allowing it to be restored even after the browser has been closed, the following example is a model for the applicability of `JSON.stringify()`:

> **경고:** Functions are not a valid JSON data type so they will not work. However, they can be displayed if first converted to a string (e.g. in the replacer), via the function's toString method. Also, some objects like {{jsxref("Date")}} will be a string after {{jsxref("JSON.parse()")}}.

```js
// Creating an example of JSON
var session = {
  screens: [],
  state: true,
};
session.screens.push({ name: "screenA", width: 450, height: 250 });
session.screens.push({ name: "screenB", width: 650, height: 350 });
session.screens.push({ name: "screenC", width: 750, height: 120 });
session.screens.push({ name: "screenD", width: 250, height: 60 });
session.screens.push({ name: "screenE", width: 390, height: 120 });
session.screens.push({ name: "screenF", width: 1240, height: 650 });

// Converting the JSON string with JSON.stringify()
// then saving with localStorage in the name of session
localStorage.setItem("session", JSON.stringify(session));

// Example of how to transform the String generated through
// JSON.stringify() and saved in localStorage in JSON object again
var restoredSession = JSON.parse(localStorage.getItem("session"));

// Now restoredSession variable contains the object that was saved
// in localStorage
console.log(restoredSession);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("JSON.parse()")}}
