---
title: 거짓 같은 값
slug: Glossary/Falsy
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**거짓 같은 값**(Falsy, **falsey**로 쓰이기도 함) 값은 {{Glossary("Boolean")}} 문맥에서 `false`로 평가되는 값입니다.

{{Glossary("JavaScript")}}는 {{Glossary("Conditional", "조건절")}}, {{Glossary("Loop", "반복문")}} 등 불리언 값이 필요한 곳에서 {{Glossary("Type_Conversion", "형 변환")}}을 이용해 특정 값을 불리언 값으로 변환합니다.

다음은 JavaScript의 거짓 같은 값들입니다.

| 값                          | 타입      | 설명                                                                                                                                                          |
| --------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{Glossary("null")}}        | Null      | [`null`](/ko/docs/Web/JavaScript/Reference/Operators/null) 키워드는 아무런 값도 없음을 의미합니다.                                                            |
| {{Glossary("undefined")}}   | Undefined | [`undefined`](/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)는 원시값을 의미합니다.                                                              |
| `false`                     | Boolean   | [`false`](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) 키워드.                                                                           |
| {{Glossary("NaN")}}         | Number    | [`NaN`](/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN)은 숫자가 아님을 의미합니다.                                                                     |
| `0`                         | Number    | The {{jsxref("Number")}} 0, `0.0`, `0x0` 등도 포함합니다.                                                                                                     |
| `-0`                        | Number    | The {{jsxref("Number")}} 음수 0, `-0.0`, `-0x0` 등도 포함합니다.                                                                                              |
| `0n`                        | BigInt    | The {{jsxref("BigInt")}} 0, `0x0n` 등도 포함합니다. Note that there is no {{jsxref("BigInt")}}에 음수 0가 없다는 것에 주목하세요. `0n`의 음수 0은 `0n`입니다. |
| `""`                        | String    | 비어있는 [string](/ko/docs/Web/JavaScript/Reference/Global_Objects/String) 값, also `''` 및 ` `` `도 포함합니다..                                             |
| {{domxref("document.all")}} | Object    | JavaScript의 유일한 거짓 같은 객체는 내장 {{domxref("document.all")}}입니다.                                                                                  |

`null` 및 `undefined` 값은 또한 [nullish](/ko/docs/Glossary/Nullish)입니다..

## 예제

다음은 거짓 같은 값의 예시입니다. 거짓 같은 값은 불리언 문맥에서 false로 변환되므로, 아래의 모든 `if` 블록은 실행되지 않습니다.

```js
if (false) {
  // 도달할 수 없습니다.
}

if (null) {
  // 도달할 수 없습니다.
}

if (undefined) {
  // 도달할 수 없습니다.
}

if (0) {
  // 도달할 수 없습니다.
}

if (-0) {
  // 도달할 수 없습니다.
}

if (0n) {
  // 도달할 수 없습니다.
}

if (NaN) {
  // 도달할 수 없습니다.
}

if ("") {
  // 도달할 수 없습니다.
}
```

### 논리 AND 연산자, &&

첫 번째 객체가 거짓 같은 값이라면, 해당 객체를 반환합니다.

```js
console.log(false && "dog");
// ↪ false

console.log(0 && "dog");
// ↪ 0
```

## 같이 보기

- {{Glossary("Truthy", "참 같은 값")}}
- {{Glossary("Type_coercion", "형 변환")}}
- {{Glossary("Boolean", "불리언")}}
- [불리언 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion)
