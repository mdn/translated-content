---
title: 원시 값
slug: Glossary/Primitive
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

{{Glossary("JavaScript")}}에서, **원시 값**(primitive, 또는 원시 자료형)이란 {{Glossary("object", "객체")}}가 아니면서 {{glossary("method", "메서드")}} 또는 [속성](/ko/docs/Glossary/Property/JavaScript)도 가지지 않는 데이터입니다. 원시 값에는 7가지의 종류가 있습니다.

- {{Glossary("string")}}
- {{Glossary("number")}}
- {{Glossary("bigint")}}
- {{Glossary("boolean")}}
- {{Glossary("undefined")}}
- [symbol](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- {{Glossary("null")}}

대부분의 경우, 원시 값은 언어 구현체의 가장 저수준 단계에서 표현됩니다.

모든 원시 값은 "불변"하여 변형할 수 없습니다. 원시 값 자체와, 원시 값을 할당한 변수를 혼동하지 않는 것이 중요합니다. 변수는 새로운 값을 다시 할당할 수 있지만, 이미 생성한 원시 값은 객체, 배열, 함수와는 달리 변형할 수 없습니다. 언어에서는 원시 값을 변경하는 기능을 제공하지 않습니다.

원시 값에는 메서드가 없지만 마치 메서드가 있는 것처럼 동작합니다. 원시 값에서 속성에 접근하려면, JavaScript는 값을 래퍼 객체로 "자동으로 포장"하고 대신 해당 객체 속성에 접근합니다. 예를 들어, `"foo".includes("f")`는 암시적으로 [`String`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String) 래퍼 객체를 생성하고 해당 객체에 대해 `String.prototype.includes()`를 호출합니다. 이 "자동으로 포장"은 JavaScript 코드에서 관찰할 수 없지만 다양한 동작에 대한 좋은 정신적인 모델입니다. 예를 들어, "값을 변경하는" 원시 값이 작동하지 않는 이유는 `str.foo = 1`이 `str` 자체의 `foo` 속성에 할당되지 않기 때문입니다. 하지만, 임시 래퍼 객체에는 적용됩니다.

## 같이 보기

- [JavaScript 자료 구조](/ko/docs/Web/JavaScript/Data_structures)
- 위키백과의 [윈시 데이터 타입](https://en.wikipedia.org/wiki/Primitive_data_type)
- [Glossary](/ko/docs/Glossary)

  - {{Glossary("JavaScript")}}
  - {{Glossary("string")}}
  - {{Glossary("number")}}
  - {{Glossary("bigint")}}
  - {{Glossary("boolean")}}
  - {{Glossary("null")}}
  - {{Glossary("undefined")}}
  - [symbol](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
