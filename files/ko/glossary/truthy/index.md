---
title: 참 같은 값
slug: Glossary/Truthy
---

{{Glossary("JavaScript")}}에서, **참 같은 값**(Truthy)인 값이란 {{Glossary("Boolean", "불리언")}}을 기대하는 문맥에서 `true`로 평가되는 값입니다. 따로 {{Glossary("Falsy", "거짓 같은 값")}}으로 정의된 값이 아니면 모두 참 같은 값으로 평가됩니다. (예: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`와 `NaN` 등)

JavaScript는 불리언 문맥에서 {{Glossary("Type_Conversion", "형 변환")}}을 사용합니다.

다음은 참 같은 값에 대한 예시입니다. JavaScript는 불리언 문맥에서 참 같은 값을 `true`로 변환하기 때문에 아래의 모든 `if` 블록을 실행합니다.

```js
    if (true)
    if ({})
    if ([])
    if (42)
    if ("0")
    if ("false")
    if (new Date())
    if (-42)
    if (12n)
    if (3.14)
    if (-3.14)
    if (Infinity)
    if (-Infinity)
```

## 같이 보기

- {{Glossary("Falsy", "거짓 같은 값")}}
- {{Glossary("Type_Conversion", "형변환")}}
- {{Glossary("Boolean", "불리언")}}

{{QuickLinksWithSubpages("/ko/docs/Glossary")}}
