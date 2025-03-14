---
title: 표준 순서 (Canonical order)
slug: Glossary/Canonical_order
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

CSS에서 표준 순서는 별도의 값을 지정(또는 {{Glossary("parse", "구문 분석")}})해야 하거나 CSS 속성 값의 일부로 {{Glossary("serialization", "직렬화")}}해야 하는 순서를 참조하는 데 사용됩니다. 표준 순서는 속성의 형식적 {{Glossary("syntax", "문법")}}에 의해 정의되며 일반적으로 단일 단축 값의 일부로 정식 값을 지정해야 하는 순서를 나타냅니다.

예를 들어, {{cssxref("background")}} 단축 속성 값은 여러 개의 `background-*` 기본 속성으로 구성됩니다. 기본 값의 표준 순서는 다음과 같이 정의됩니다.

1. {{cssxref("background-image")}}
2. {{cssxref("background-position")}}
3. {{cssxref("background-size")}}
4. {{cssxref("background-repeat")}}
5. {{cssxref("background-attachment")}}
6. {{cssxref("background-origin")}}
7. {{cssxref("background-clip")}}
8. {{cssxref("background-color")}}

또한, 해당 문법은 {{cssxref("background-size")}}의 값을 받게 되면, **반드시** {{cssxref("background-position")}}의 값 **뒤에** 슬래시로 구분해서 지정되어야 한다고 정의합니다. 다른 값은 순서에 상관없이 나타날 수 있습니다.

## 같이 보기

- StackOverflow의 유용한 추가 토론인 [CSS 속성과 관련해 "표준 순서"는 무엇을 의미하나요?](https://stackoverflow.com/questions/28963536/what-does-canonical-order-mean-with-respect-to-css-properties)
- MDN의 [CSS 값에 사용되는 공식 문법에 대한 설명](/ko/docs/Web/CSS/Value_definition_syntax)
