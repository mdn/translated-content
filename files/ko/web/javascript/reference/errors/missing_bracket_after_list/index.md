---
title: "SyntaxError: missing ] after element list"
slug: Web/JavaScript/Reference/Errors/Missing_bracket_after_list
---

{{jsSidebar("Errors")}}

## 메세지

```
    SyntaxError: missing ] after element list
```

## 에러 타입

{{jsxref("SyntaxError")}}.

## 무엇이 잘못되었을까?

배열 초기자 구문에 오류가 있습니다. 닫는 대괄호("`]`") 또는 콤마("`,`")가 빠진 것 같습니다.

## 예제

### 완성되지 않은 배열 초기자

```js example-bad
var list = [1, 2,

var instruments = [
  'Ukulele',
  'Guitar',
  'Piano'
};

var data = [{foo: 'bar'} {bar: 'foo'}];
```

바르게 고치면:

```js example-good
var list = [1, 2];

var instruments = ["Ukulele", "Guitar", "Piano"];

var data = [{ foo: "bar" }, { bar: "foo" }];
```

## 같이 보기

- {{jsxref("Array")}}
