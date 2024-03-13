---
title: 설정자
slug: Web/JavaScript/Reference/Functions/set
---

{{jsSidebar("Functions")}}

**`set`** 구문은 객체의 속성에 할당을 시도할 때 호출할 함수를 바인딩합니다.

{{EmbedInteractiveExample("pages/js/functions-setter.html")}}

## 구문

```js
{set prop(val) { . . . }}
{set [expression](val) { . . . }}
```

### 매개변수

- `prop`
  - : 주어진 함수를 바인딩할 속성 이름.
- `val`
  - : `prop`에 할당을 시도한 값.
- `expression`
  - : ECMAScript 2015 이후, 주어진 함수를 바인딩할 속성 이름을 구하는 표현식을 사용할 수도 있습니다.

## 설명

JavaScript의 설정자(_setter_)를 사용하면 지정한 속성 값의 변경을 시도할 때마다 함수를 호출할 수 있습니다. 설정자는 보통 접근자(_getter_)와 함께 '유사 속성'을 정의할 때 사용합니다. 어떤 속성에 설정자를 바인딩하는 동시에, 해당 속성이 값도 가지도록 할 수는 없습니다.

`set` 구문을 이용할 때는 다음 사항을 주의하세요.

- 설정자의 식별자는 숫자나 문자열일 수 있습니다.
- 설정자 함수는 최대 한 개의 매개변수만 가질 수 있습니다.
- 객체 리터럴에서, 같은 속성 키에 다수의 설정자를 바인딩할 수 없습니다.

  ```js example-bad
  {
    set x() { }, set x() { }
  }
  ```

- 객체 리터럴에서, 설정자는 데이터 속성과 같은 키를 사용할 수 없습니다.

  ```js example-bad
  {
    x: ..., set x() { }
  }
  ```

## 예제

### 객체 초기자에서 새로운 객체의 설정자 정의하기

다음 예제는 객체 `language`에 유사 속성 `current`를 생성합니다. `current`에 값을 할당하면, 해당 값을 `log` 속성에 저장합니다.

```js
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: [],
};

language.current = "EN";
console.log(language.log); // ['EN']

language.current = "FA";
console.log(language.log); // ['EN', 'FA']
```

`current`의 값은 정의하지 않았으므로, 할당이 아니라 접근을 시도하면 `undefined`만 반환하는 것에 주의하세요.

### `delete` 연산자로 설정자 제거하기

접근자를 삭제하려면 간단히 {{jsxref("Operators/delete", "delete")}} 연산자를 사용하세요.

```js
delete language.current;
```

### `defineProperty`를 이용해 이미 존재하는 객체에 설정자 정의하기

이미 존재하는 객체에 설정자를 추가하려면 {{jsxref("Object.defineProperty()")}}를 사용하세요.

```js
const o = { a: 0 };

Object.defineProperty(o, "b", {
  set: function (x) {
    this.a = x / 2;
  },
});

o.b = 10;
// 설정자 실행, a 속성에 10 / 2 = 5 할당

console.log(o.a);
// 5
```

### 계산된 속성 이름 사용하기

```js
const expr = "foo";

const obj = {
  baz: "bar",
  set [expr](v) {
    this.baz = v;
  },
};

console.log(obj.baz);
//  "bar"

obj.foo = "baz";
//  run the setter

console.log(obj.baz);
//  "baz"
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [접근자](/ko/docs/Web/JavaScript/Reference/Functions/get)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__defineGetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- JavaScript 안내서의 [접근자와 설정자 정의하기](/ko/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)
