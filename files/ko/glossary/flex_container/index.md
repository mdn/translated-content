---
title: 플렉스 컨테이너
slug: Glossary/Flex_Container
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

{{glossary("flexbox", "플렉스박스")}} 레이아웃은 부모 요소의 `display` 속성에 `flex` 또는 `inline-flex` 값을 지정해 정의합니다. 이 때, 부모 요소는 **플렉스 컨테이너**, 각각의 자식 요소를 {{glossary("flex item", "플렉스 항목")}}이 됩니다.

`flex` 값은 요소를 블록 레벨 플렉스 컨테이너로 지정하고, `inline-flex`는 인라인 레벨 플렉스 컨테이너로 지정합니다. 두 값은 요소에 새로운 **플렉스 서식 맥락**을 생성합니다. 플렉스 서식 맥락은 블록 서식 맥락과 유사하여 플로팅 요소가 컨테이너를 침범하지 않으며, 컨테이너의 바깥 여백이 자기 아래 플렉스 항목의 바깥 여백과 상쇄되지 않습니다.

## 같이 보기

### 속성 참고서

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("flex")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("justify-content")}}

### 더 읽어보기

- CSS Flexbox Guide: [Flexbox의 기본 개념](/ko/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- CSS Flexbox Guide: [flex container 항목 나열](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
- CSS Flexbox Guide: [flex items 래핑 마스터하기](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
- Firefox Developer Tools > How to: [CSS Flexbox 검사기: Flexbox 레이아웃 검사](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html)
