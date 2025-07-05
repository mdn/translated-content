---
title: 타입 (Type)
slug: Glossary/Type
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**타입** 은 저장할 수 있는 데이터 종류와 데이터가 지켜야 할 구조에 영향을 미치는 {{glossary("value", "값")}}의 특성입니다. 예를 들어, {{Glossary("boolean", "불리언")}} [데이터 타입](/ko/docs/Web/JavaScript/Guide/Data_structures)은 일정 시간에 `true` 또는 `false` 값만 가질 수 있는 반면, {{Glossary("string", "문자열")}}은 문자열 또는 일련의 문자를 보유할 수 있는 기능이 있습니다. {{Glossary("number", "숫자")}}는 모든 종류의 숫자 값 등을 보유할 수 있습니다.

값의 데이터 타입은 해당 값에 유효한 작업에도 영향을 미칩니다. 예를 들어, 숫자 타입의 값은 다른 숫자와 곱할 수 있지만, 문자열로는 곱할 수 없습니다. 문자열 '2'와 같이 해당 문자열에 숫자'만' 포함되어 있는 경우에도 마찬가지입니다.

타입은 또한 서로 다른 값 간의 비교에 대한 유용한 지식을 제공합니다. 구조화된 타입 간의 비교는 항상 쉬운 가정은 아닙니다. 이전 데이터 구조가 동일하더라도 [프로토타입 체인](/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) 내부에 상속된 구조가 있을 수 있기 때문입니다.

값 유형을 잘 모르는 경우, [`typeof`](/ko/docs/Web/JavaScript/Reference/Operators/typeof) 연산자를 사용할 수 있습니다.

## 같이 보기

- 위키백과의 [데이터 타입](https://en.wikipedia.org/wiki/Data_type)
- [JavaScript 데이터 타입](/ko/docs/Web/JavaScript/Guide/Data_structures)
- [용어 사전](/ko/docs/Glossary)
  - {{Glossary("JavaScript")}}
  - {{Glossary("string")}}
  - {{Glossary("number")}}
  - {{Glossary("bigint")}}
  - {{Glossary("boolean")}}
  - {{Glossary("null")}}
  - {{Glossary("undefined")}}
  - {{Glossary("symbol")}}
