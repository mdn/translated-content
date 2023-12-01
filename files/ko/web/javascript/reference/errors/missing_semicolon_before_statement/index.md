---
title: "SyntaxError: missing ; before statement"
slug: Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement
---

{{jsSidebar("Errors")}}

## 메시지

```
    SyntaxError: missing ; before statement
```

## 오류 타입

{{jsxref("SyntaxError")}}.

## 무엇이 잘 못 되었나?

어딘가에 세미 콜론(`;`)이 빠져 있습니다. [JavaScript 구문](/ko/docs/Web/JavaScript/Reference/Statements)은 반드시 세미 콜론으로 끝나야 합니다. 일부는 자동 세미콜론 삽입 ([automatic semicolon insertion (ASI)](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion))의 영향을 받습니다. 그러나 이 경우에는 직접 세미 콜론을 써주어야 합니다. 그래야 JavaScript가 올바르게 해석 될 수 있기 때문입니다.

그러나, 가끔, 이 오류는 또 다른 오류의 결과로도 나타날 수도 있습니다. 문자열을 escape 문자로 적절히 처리해 주지 않았을 때, 또는 `var` 키워드를 잘 못 사용했을 때와 같은 경우 입니다. 또한 어딘가에 너무 많은 괄호 기호를 사용했을 것입니다. 이 오류가 발생했을 때에는 문법을 신중히 검토해야 합니다.

## 예제

### Escape 처리되지 않은 문자열

이 오류는 문자열을 escape 처리 하지 않았을 때, JavaScript 엔진이 문자열 끝을 미리 예측하여 발생합니다. 예를 들자면 아래와 같습니다. :

```js example-bad
var foo = 'Tom's bar';
// SyntaxError: missing ; before statement
```

문자열을 묶어줄 때 쌍 따옴표를 사용하거나, 역슬래시를 이용해서 홑따옴표를 사용 할 수 있습니다. :

```js-nolint example-good
var foo = "Tom's bar";
var foo = 'Tom\'s bar';
```

### var와 함께 선언하는 것

이미 `var` 선언된 object나 array의 요소를 새로 선언 할 수 없습니다.

```js example-bad
var obj = {};
var obj.foo = 'hi'; // SyntaxError missing ; before statement

var array = [];
var array[0] = 'there'; // SyntaxError missing ; before statement
```

대신에, `var` 키워드를 생략하고 정의합니다. :

```js example-good
var obj = {};
obj.foo = "hi";

var array = [];
array[0] = "there";
```

## 참조 문서

- [Automatic semicolon insertion (ASI)](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion)
- [JavaScript statements](/ko/docs/Web/JavaScript/Reference/Statements)
