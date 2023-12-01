---
title: in 연산자
slug: Web/JavaScript/Reference/Operators/in
---

{{jsSidebar("Operators")}}

**`in` 연산자**는 명시된 속성이 명시된 객체에 존재하면 `true`를 반환합니다.

## 구문

```js
속성 in 객체명;
```

### 인자

- `속성`
  - : 속성의 이름이나 배열의 인덱스를 뜻하는 문자열 또는 수 값입니다.
- `객체명`
  - : 객체의 이름입니다.

## 설명

다음 예제들은 `in` 연산자의 용도를 보여 줍니다.

```js
// 배열
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
0 in trees; // true를 반환합니다.
3 in
  trees(
    // true를 반환합니다.
    1 + 2,
  ) in
  trees; // true를 반환합니다. 연산자 우선 순위에 의하여 이 구문의 괄호는 없어도 됩니다.
6 in trees; // false를 반환합니다.
"bay" in trees; // false를 반환합니다. 당신은 배열의 내용이 아닌, 인덱스 값을 명시하여야 합니다.
"length" in trees; // true를 반환합니다. length는 Array(배열) 객체의 속성입니다.

// 미리 정의된 객체
"PI" in Math; // true를 반환합니다.
"P" + "I" in Math; // true를 반환합니다.

// 사용자가 정의한 객체
var myCar = {
  company: "Lamborghini",
  model: "Lamborghini Veneno Roadster",
  year: 2014,
};
"company" in myCar; // true를 반환합니다.
"model" in myCar; // true를 반환합니다.
```

당신은 반드시 `in` 연산자의 오른쪽에 객체를 명시하여야 합니다. 예컨대 당신은 `String` 생성자로 만들어진 문자열을 명시할 수 있지만 문자열 리터럴은 명시할 수 없습니다.

```js
var color1 = new String("green");
"length" in color1; // true를 반환합니다.

var color2 = "coral";
"length" in color2; // color2는 String 객체가 아니기에 오류를 냅니다.
```

### 제거되었거나 정의되지 않은 속성에 대하여 `in` 연산자 사용하기

`in` 연산자는 [`delete`](/ko/docs/Web/JavaScript/Reference/Operators/delete) 연산자로 제거된 속성에 대하여 `false`를 반환합니다.

```js
var myCar = {
  company: "Lamborghini",
  model: "Lamborghini Veneno Roadster",
  year: 2014,
};
delete myCar.company;
"company" in myCar; // false를 반환합니다.

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
3 in trees; // false를 반환합니다.
```

만약 당신이 속성을 {{jsxref("Global_Objects/undefined", "undefined")}}로 설정하였는데 그것을 제거하지 않으면, `in` 연산자는 그 속성에 대하여 `true`를 반환합니다.

```js
var myCar = {
  company: "Lamborghini",
  model: "Lamborghini Veneno Roadster",
  year: 2014,
};
myCar.company = undefined;
"company" in myCar; // true를 반환합니다.
```

```js
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
3 in trees; // true를 반환합니다.
```

### 상속된 속성

`in` 연산자는 프로토타입 체인에 의하여 접근할 수 있는 속성에 대하여 `true`를 반환합니다.

```js
"toString" in {}; // true를 반환합니다.
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 관련 문서

- [`delete`](/ko/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Reflect.has()")}}
- [속성의, 소유와 셀 수 있는 성질](/ko/docs/Enumerability_and_ownership_of_properties)
