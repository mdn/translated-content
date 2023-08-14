---
title: 'SyntaxError: "0"-prefixed octal literals and octal escape seq. are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_octal
---

{{jsSidebar("Errors")}}

## 메시지

```
    SyntaxError: Octal numeric literals and escape characters not allowed in strict mode (Edge)
    SyntaxError:
    "0"-prefixed octal literals and octal escape sequences are deprecated;
    for octal literals use the "0o" prefix instead
```

## 에러 타입

{{jsxref("SyntaxError")}} [strict mode](/ko/docs/Web/JavaScript/Reference/Strict_mode) 내에서만.

## 무엇이 잘 못 되었을까?

8진 리터럴과 8진수 이스케이프 시퀀스는 더 이상 사용하지 않으며, 엄격 모드(strict mode) 내에서는 {{jsxref("SyntaxError")}} 에러를 던질 것입니다. ECMAScript 2015와 이 후의 버전의 표준화된 구문은 0을 맨 앞자리에 두고 그 뒤를 대문자 또는 소문자의 라틴 문자 "O" 를 사용하도록 합니다. (`0o` 또는 `0O)`

## 예제

### "0"이 접두인 8진 리터럴

```js example-bad
"use strict";

03;

// SyntaxError: "0"-prefixed octal literals and octal escape sequences
// are deprecated (0으로 시작하는 8진수와 8진 이스케이프 시퀀스는 더 이상 사용되지 않습니다. )
```

### 8진수 이스케이프 시퀀스

```js example-bad
"use strict";

"\251";

// SyntaxError: "0"-prefixed octal literals and octal escape sequences
// are deprecated (0으로 시작하는 8진수와 8진 이스케이프 시퀀스는 더 이상 사용되지 않습니다. )
```

### 유효한 8진 수들

0뒤에 "o" 또는 "O"를 사용합니다. :

```js example-good
0o3;
```

8진수 이스케이프 시퀀스 대신 16진수 이스케이프 시퀀스를 사용할 수도 있습니다. :

```js example-good
"\xA9";
```

## See also

- [Lexical grammar](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#Octal)
- [Warning: 08/09 is not a legal ECMA-262 octal constant](/ko/docs/Web/JavaScript/Reference/Errors/Bad_octal)
