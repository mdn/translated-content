---
title: "SyntaxError: illegal character"
slug: Web/JavaScript/Reference/Errors/Illegal_character
---

{{jsSidebar("Errors")}}

## 메세지

```
  SyntaxError: Invalid character (Edge)
  SyntaxError: illegal character (Firefox)
  SyntaxError: Invalid or unexpected token (Chrome)
```

## 에러 타입

{{jsxref("SyntaxError")}}

## 무엇이 잘못되었을까?

코드에 해당 구문에 맞지 않거나 예기치 않은 토큰이 있습니다. 마이너스 기호(`-`)와 대시(`–`) 또는 따옴표(`"`)와 비표준 따옴표(`“`) 등이 잘못 사용된 경우에 대해 문법 체크를 해주는 편집기를 사용하여 코드를 주의 깊게 확인해야 합니다.

## 예제

### 잘못 사용된 문자

일부 문자들은 비슷하게 보이지만 파서가 코드 해석을 실패하게 만듭니다. 유명한 예로 따옴표, 마이너스 또는 세미콜론([greek questionmark (U+37e)](https://en.wikipedia.org/wiki/Question_mark#Greek_question_mark)과 동일하게 보입니다)이 있습니다.

```js example-bad
“This looks like a string”;  // SyntaxError: illegal character
                             // 비슷해 보이지만 “와 ”는 "이 아닙니다

42 – 13;                     // SyntaxError: illegal character
                             // 비슷해 보이지만 –은 -이 아닙니다

var foo = 'bar';             // SyntaxError: illegal character
                             // 비슷해 보이지만 <37e>은 ;이 아닙니다
```

아래 예제는 정상적으로 동작합니다:

```js example-good
"This is actually a string";
42 - 13;
var foo = "bar";
```

일부 편집기와 IDE는 문제가 있는 부분을 알려주거나 적어도 강조 표시를 해주지만 전부는 아닙니다. 이런 에러가 발생했을 때 무엇이 문제인지 찾을 수 없는 경우, 문제가 있는 줄을 지우고 다시 작성하는 것 가장 좋습니다.

### 문자 빠트리기

앞이나 뒤에 오는 문자를 잊어버리기 쉽습니다.

```js example-bad
var colors = ['#000', #333', '#666'];
// SyntaxError: illegal character
```

`'#333'`에 빠진 작은따옴표를 추가합니다.

```js example-good
var colors = ["#000", "#333", "#666"];
```

### 숨겨진 문자

다른 곳에서 코드를 복사하여 붙여넣은 경우 잘못된 문자가 포함돼 있을 수 있습니다. 주의하세요!

```js example-bad
var foo = 'bar';​
// SyntaxError: illegal character
```

Vim과 같은 편집기에서 아래 코드를 체크하면 폭 없는 공백([zero-width space (ZWSP) (U+200B)](https://en.wikipedia.org/wiki/Zero-width_space)) 문자가 있는 것을 확인할 수 있습니다.

```js
var foo = 'bar';​<200b>
```

## 같이 보기

- [문법](/ko/docs/Web/JavaScript/Reference/Lexical_grammar)
