---
title: 접근성 트리
slug: Glossary/Accessibility_tree
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**접근성 트리**는 대부분의 HTML 요소에 대한 정보와 관련된 {{Glossary("accessibility", "접근성")}}을 포함합니다.

브라우저는 마크업을 [DOM tree](/ko/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model)로 불리는 내부적인 표현으로 전환시킵니다. DOM 트리는 모든 마크업의 요소, 특성, 텍스트 노드를 표현하는 객체들을 포함합니다. 그 다음 브라우저는 DOM 트리에 기반된 접근성 트리를 생성합니다. 이 트리는 플랫폼별 접근성 API에서 스크린 리더와 같은 보조 기술이 이해할 수 있는 표현을 제공하기 위해 사용됩니다.

접근성 트리 객체에는 4가지 속성들이 있습니다.

- **이름**
  - : 이것을 어떻게 나타내야 합니까? 예를 들어, "더 읽기" 텍스트가 있는 링크는 "더 읽기"가 이름입니다. (이름들이 [접근 가능한 이름과 설명 계산 사양](https://www.w3.org/TR/accname-1.1/)에서 계산되는 방법에 대해 더 알아보기)
- **설명**
  - : 이름 이상으로 더 많은 설명을 제공하고 싶으면, 이것을 어떻게 설명해야 합니까? 테이블의 설명은 테이블이 포함하는 정보의 종류로 설명할 수 있습니다.
- [**역할**](/ko/docs/Web/Accessibility/ARIA/Roles)
  - : 이것의 종류는 무엇입니까? 예를 들어, 버튼, 탐색 모음 혹은 아이템들의 목록입니까?
- **상태**
  - : 이것이 상태를 가집니까? 예제들로 선택 또는 선택 해제된 체크박스, 접기 또는 확장된 [`<summary>`](/ko/docs/Web/HTML/Element/summary) 요소를 포함합니다.

추가적으로, 접근성 트리는 주로 요소와 함께 수행될 수 있는 것에 대한 정보를 포함합니다. 링크를 '추적'하거나 텍스트 인풋을 '입력'할 수 있습니다.

2022년 4월 기준 아직은 초안 형태이나 웹 인큐베이터 커뮤니티 그룹(Web Incubator Community Group)에서 접근성 시멘틱들을 더 쉽게 표현하고 계산된 접근성 트리에 읽기 접근을 허용하는 API들을 만들어내기 위한 **[접근성 객체 모델](https://wicg.github.io/aom/explainer.html) (AOM)** 도 있습니다.

## 같이 보기

- [용어 사전](/ko/docs/Glossary)

  - {{Glossary("Accessibility", "접근성")}}
  - {{Glossary("ARIA")}}
