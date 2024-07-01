---
title: Immutable
slug: Glossary/Immutable
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

불변 값은 완전히 새로운 값을 생성하지 않고는 내용을 변경할 수 없는 값입니다.

{{glossary("JavaScript")}}에서, {{Glossary("primitive", "원시 값")}}은 불변입니다. 원시 값이 생성되면 변경할 수 없지만, 이를 가진 변수에 다른 값을 다시 할당할 수 있습니다. 반대로, {{Glossary("Object","객체")}} 및 {{Glossary("Array","배열")}}은 기본적으로 변경할 수 있습니다. 새 값을 다시 할당하지 않고도 속성과 요소를 변경할 수 있습니다.

몇 가지 이유로 불변 객체를 사용하는 것이 도움될 수 있습니다.

- 성능 향상하기(향후 객체의 변경에 대한 계획 없음)
- 메모리 사용을 줄이기(전체 객체를 복제하는 대신 {{glossary("object reference","객체 참조")}} 만들기)
- 스레드 안전성(여러 스레드가 서로 간섭하지 않고 동일한 객체 참조 가능)
- 개발자의 정신적인 부담 감소(객체의 상태가 변경되지 않고 항상 일관됨)

변경 가능성을 쉽게 증명할 수 있습니다. 속성을 변경할 수 있는 한 가지 방법을 제공하는 한 객체는 변경 가능합니다. 반면에, "불변성"은 이를 보호할 언어적 의미가 없다면 증명하기 어렵습니다. 이는 개발자 간 약속의 문제입니다. 예를 들어, {{jsxref("Object.freeze()")}}는 JavaScript에서 객체를 변경할 수 없도록 만드는 언어 수준 메서드입니다.

## 같이 보기

- 위키피디아의 [불변 객체](https://ko.wikipedia.org/wiki/%EB%B6%88%EB%B3%80%EA%B0%9D%EC%B2%B4)
- {{glossary("Mutable")}}
