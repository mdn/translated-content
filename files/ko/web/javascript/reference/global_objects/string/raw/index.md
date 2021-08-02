---
title: String.raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
tags:
- ECMAScript 2015
- JavaScript
- Method
- Reference
- String
- Polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/String/raw
---
{{JSRef}}


`String.raw()`메서드는 [템플릿 리터럴](/ko/docs/Web/JavaScript/Reference/Template_literals)의 태그 함수입니다.  
이는 Pyhon의 `r` 접두사 또는 C#의 문자열 리터럴의 `@` 접두사와 유사합니다.(그러나 동일 하지는 않습니다. 이 문제에 관해서는 여기 [이슈](https://bugs.chromium.org/p/v8/issues/detail?id=5016)를 참조하십시오.)  
이 메서드는 템플릿 리터럴의 윈시 문자열을 가져오는데 사용됩니다. 즉, 대체(예: `${foo}`)는 처리되지만 이스케이프(예: `\n`)는 처리되지 않습니다.

{{EmbedInteractiveExample("pages/js/string-raw.html")}}


## 구문

```js 
String.raw(callSite, ...substitutions)

String.raw`templateString`
```

### 매개변수

- `callSite`
  - : 정해진 형식의 템플릿 호출 개체 예: `{ raw: ['foo', 'bar', 'baz'] }`.
- `...substitutions`
  - : 대체값을 포함합니다.
- `templateString`
  - : {{jsxref("template_literals", "템플릿 리터럴", "", 1)}}, 선택사항으로 대체를 포함 예:(`${...}`).

### 반환값

주어진 템플릿 리터럴의 원시 문자열 형식.

### 예외

- {{jsxref("TypeError")}}
  - : 첫번째 인자의 객체의 포맷이 올바르지 않은 경우 {{jsxref("TypeError")}}예외가 발생(throw)한다.

## 설명

`String.raw()`의 경우 보통 템플릿 리터럴과 많이 사용하고, 첫번째 구문의 경우 잘 사용되지 않습니다.  
왜냐하면 자바스크립트 엔진이 당신을 위해서 자동으로 적절한 인수로 호출해주기 때문입니다. ( 다른 [태그 메서드](/ko/docs/Web/JavaScript/Reference/Template_literals#tagged_template_literals) 들과 마찬가지로).

`String.raw()`은 템플릿 리터럴의 유일한 내장 함수입니다. 기본 템플릿 기능과 동일하게 작동하며 연결을 수행합니다.  JavaScript 코드를 사용하여 다시 구현할 수도 있습니다.

## 예시

### String.raw() 사용

```js
String.raw`Hi\n${2+3}!`;
// 'Hi\\n5!', the character after 'Hi'
// is not a newline character,
// '\' and 'n' are two characters.

String.raw`Hi\u000A!`;
// 'Hi\\u000A!', same here, this time we will get the
//  \, u, 0, 0, 0, A, 6 characters.
// All kinds of escape characters will be ineffective
// and backslashes will be present in the output string.
// You can confirm this by checking the .length property
// of the string.

let name = 'Bob';
String.raw`Hi\n${name}!`;
// 'Hi\\nBob!', substitutions are processed.

// Normally you would not call String.raw() as a function,
// but to simulate `foo${2 + 3}bar${'Java' + 'Script'}baz` you can do:
String.raw({
  raw: ['foo', 'bar', 'baz']
}, 2 + 3, 'Java' + 'Script'); // 'foo5barJavaScriptbaz'
// Notice the first argument is an object with a 'raw' property,
// whose value is an iterable representing the separated strings
// in the template literal.
// The rest of the arguments are the substitutions.

// The first argument’s 'raw' value can be any iterable, even a string!
// For example, 'test' is treated as ['t', 'e', 's', 't'].
// The following is equivalent to
// `t${0}e${1}s${2}t`:
String.raw({ raw: 'test' }, 0, 1, 2); // 't0e1s2t'
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `String.raw`의 폴리필은 여기를 참고[`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)  
- [Template literals](/ko/docs/Web/JavaScript/Reference/Template_literals)
- {{jsxref("String")}}
- [Lexical grammar](/ko/docs/Web/JavaScript/Reference/Lexical_grammar)
