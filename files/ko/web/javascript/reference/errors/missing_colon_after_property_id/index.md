---
title: "SyntaxError: missing : after property id"
slug: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
---

{{jsSidebar("Errors")}}

## 메세지

```
    SyntaxError: Expected ':' (Edge)
    SyntaxError: missing : after property id (Firefox)
```

## 에러 타입

{{jsxref("SyntaxError")}}

## 무엇이 문제일까?

[객체 초기자](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer) 구문으로 객체를 만들 때 콜론(`:`)은 객체의 속성을 키와 값으로 분리합니다.

```js
var obj = { propertyKey: "value" };
```

## 예제

### 콜론 vs. 등호

객체 초기자 구문에는 등호를 사용할 수 없으므로 아래 예제는 실패합니다.

```js example-bad
var obj = { propertyKey = 'value' };
// SyntaxError: missing : after property id
```

콜론을 사용하거나 객체를 생성한 뒤에 대괄호를 사용하여 새로운 속성을 할당하는 것이 바릅니다.

```js example-good
var obj = { propertyKey: "value" };

// 또는

var obj = {};
obj["propertyKey"] = "value";
```

### 빈 속성

아래와 같이 빈 속성을 만들 수 없습니다:

```js example-bad
var obj = { propertyKey; };
// SyntaxError: missing : after property id
```

만약 값 없이 속성을 정의해야 한다면 값으로 {{jsxref("null")}}을 지정할 수 있습니다.

```js example-good
var obj = { propertyKey: null };
```

### 계산된 속성

식으로 속성의 키를 만드는 경우 대괄호를 사용해야 합니다. 그렇지 않으면 속성 이름에 계산된 값을 사용할 수 없습니다:

```js example-bad
var obj = { 'b'+'ar': 'foo' };
// SyntaxError: missing : after property id
```

식에 대괄호를 넣으세요 `[]`:

```js example-good
var obj = { ["b" + "ar"]: "foo" };
```

## 같이 보기

- [객체 초기자](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)
