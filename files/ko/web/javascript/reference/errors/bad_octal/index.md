---
title: 'SyntaxError: "x" is not a legal ECMA-262 octal constant'
slug: Web/JavaScript/Reference/Errors/Bad_octal
---

{{jsSidebar("Errors")}}

## 메시지

```
    Warning: SyntaxError: 08 is not a legal ECMA-262 octal constant.
    Warning: SyntaxError: 09 is not a legal ECMA-262 octal constant.
```

## 에러 형식

{{jsxref("SyntaxError")}}`.` 엄격 모드([strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode))에서만 경고 됨.

## 무엇이 잘못되었을까?

10진법의 리터럴은 `0`을 가장 앞 자리에 표시하고 뒤따라 다른 10진 숫자가 오게 할 수 있지만, `0`으로 시작하여 그 뒤를 따르는 모든 숫자들이 8보다 작다면, 그 수는 8진수로 해석됩니다. 이런 경우에는 `08`과 `09`는 허용되지 않기 때문에 JavaScript는 경고를 띄웁니다.

8진 리터럴과 8진 escape sequence는 사라지고 추가적인 경고가 나타날 것임을 알아 두세요. ECMAScript 6와 그 이후 버전의 구문은, 맨 앞자리에 위치하는 `0`의 뒤에 소문자 또는 대문자의 라틴 문자 "O" 를 위치시키도록 합니다 (`0o` or `0O)`. 더 자세한 설명은 [lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Octal) 페이지를 보세요.

## 예

### 유효하지 않은 8진수

```js example-bad
08;
09;
// SyntaxError: 08 is not a legal ECMA-262 octal constant
// SyntaxError: octal literals and octal escape sequences are deprecated
```

### 유효한 8진수

선두로 사용된 `0`의 뒤에는 문자 "o"가 오도록 한다.

```js example-good
0O755;
0o644;
```

## 참고

- [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Octal)
