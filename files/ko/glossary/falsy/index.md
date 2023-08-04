---
title: 거짓같은 값
slug: Glossary/Falsy
---

**거짓 같은 값**(Falsy, **falsey**로 쓰이기도 함) 값은 {{Glossary("Boolean","불리언")}} 문맥에서 `false`로 평가되는 값입니다.

{{Glossary("JavaScript")}}는 {{Glossary("Conditional", "조건절")}}, {{Glossary("Loop", "반복문")}} 등 불리언 값이 필요한 곳에서 {{Glossary("Type_Conversion", "형 변환")}}을 이용해 특정 값을 불리언 값으로 변환합니다.

다음은 8가지 거짓 같은 값들입니다:

| `false`                   | 키워드 [false](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#구형_표준의_확장_예약_키워드)                                           |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `0`                       | 숫자 [zero](/ko/docs/Web/JavaScript/Data_structures#Number_타입)                                                                         |
| `-0`                      | 음수 [zero](/ko/docs/Web/JavaScript/Data_structures#Number_타입)                                                                         |
| `0n`                      | [BigInt](/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt). 불리언으로 사용될 경우, 숫자와 같은 규칙을 따름. `0n`은 거짓 같은 값. |
| `""`                      | 빈 [string](/ko/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                     |
| {{Glossary("null")}}      | [null](/ko/docs/Web/JavaScript/Reference/Global_Objects/null) - 아무런 값도 없음                                                         |
| {{Glossary("undefined")}} | [undefined](/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined) - 원시값                                                         |
| {{Glossary("NaN")}}       | [NaN](/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN) - 숫자가 아님                                                                |

> **참고:** 오브젝트는 [\[\[IsHTMLDDA\]\] internal slot](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot) 을 가지고 있어야 거짓같은 값이 됩니다. 이 슬롯은 [`document.all`](/ko/docs/Web/API/Document/all) 에만 존재하며 자바스크립트로 설정될 수 없습니다.

## 예제

다음은 거짓 같은 값의 예시입니다. 거짓 같은 값은 불리언 문맥에서 false로 변환되므로, 아래의 모든 `if` 블록은 실행되지 않습니다.

```js
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
```

### 논리 AND 연산자, &&

첫 번째 객체가 거짓 같은 값이라면, 해당 객체를 반환합니다.

```js
false && "dog";
// ↪ false

0 && "dog";
// ↪ 0
```

## 같이 보기

- {{Glossary("Truthy", "참 같은 값")}}
- {{Glossary("Boolean", "불리언")}}

{{QuickLinksWithSubpages("/ko/docs/Glossary")}}
