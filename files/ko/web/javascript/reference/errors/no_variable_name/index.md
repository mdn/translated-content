---
title: "SyntaxError: missing variable name"
slug: Web/JavaScript/Reference/Errors/No_variable_name
---

{{jsSidebar("Errors")}}

## 메시지

```
    SyntaxError: missing variable name (Firefox)
    SyntaxError: Unexpected token = (Chrome)
```

## 에러 타입

{{jsxref("SyntaxError")}}

## 무엇이 잘 못 되었을까?

변수에 이름이 없습니다. 이것은 코드 내의 구문 에러 때문일 수도 있습니다. 어쩌면 콤마를 잘 못 된 곳에 찍었거나, 변수명을 지을 때 애를 먹었을 수도 있습니다. 그럴 수도 있죠! 작명은 너무 어려우니까요.

## 예제

### 이름을 잃은 변수

```js example-bad
var = "foo";
```

좋은 이름을 떠올리기 어려웠을 거예요. 우리 모두 겪는 일이죠.

```js example-good
var ohGodWhy = "foo";
```

### 예약어는 변수명이 될 수 없어요

예약어로 지정된 이름들이 변수로 쓰여 있습니다. 이것들은 사용할 수 없어요. 미안합니다. :(

```js example-bad
var debugger = "whoop";
// SyntaxError: missing variable name
```

### 여러 변수를 선언하기

여러 변수를 한 번에 선언할 때에는 콤마에 주의를 기울여야 합니다. 쓸 데없는 콤마를 더 찍지는 않았는지? 무심코 세미콜론 대신 콤마를 찍지는 않았는지?

```js example-bad
var x, y = "foo",
var x, = "foo"

var first = document.getElementById('one'),
var second = document.getElementById('two'),

// SyntaxError: missing variable name
```

올바르게 수정한 버전:

```js example-good
var x,
  y = "foo";
var x = "foo";

var first = document.getElementById("one");
var second = document.getElementById("two");
```

### 배열

JavaScript 의 {{jsxref("Array")}} 리터럴은 대괄호로 감싸주어야 합니다. 이건 동작하지 않아요.

```js example-bad
var arr = 1,2,3,4,5;
// SyntaxError: missing variable name
```

이렇게 해야 맞습니다:

```js example-good
var arr = [1, 2, 3, 4, 5];
```

## 더 보기

- [Good variable names](http://wiki.c2.com/?GoodVariableNames)
- [`var`](/ko/docs/Web/JavaScript/Reference/Statements/var)
- [Variable declarations in the JavaScript Guide](/ko/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations)
