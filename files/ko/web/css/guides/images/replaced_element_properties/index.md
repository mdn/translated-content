---
title: 대체 요소
slug: Web/CSS/Guides/Images/Replaced_element_properties
original_slug: Web/CSS/CSS_images/Replaced_element_properties
---

[CSS](/ko/docs/Web/CSS)의 **대체 요소**(replaced element)란 자신의 표현 결과가 CSS의 범위를 벗어나는 요소로서, CSS 서식 모델과는 분리된 외부 객체인 요소입니다.

간단히 말해서, 대체 요소는 자신의 콘텐츠가 현재 문서 스타일의 영향을 받지 않는 요소라고 할 수 있습니다. CSS는 대체 요소의 위치에 영향을 줄 수 있지만 콘텐츠에는 미치지 못합니다. {{htmlelement("iframe")}} 등 일부 대체 요소는 자신만의 스타일 시트를 가질 수도 있지만, 부모 문서의 스타일을 상속하지는 않습니다.

CSS가 대체 요소에 영향을 줄 수 있는 다른 유일한 방법은, 일련의 속성을 통해 요소 박스에서 콘텐츠의 위치를 제어하는 것입니다. [콘텐츠 박스 내부의 객체 위치 제어](#콘텐츠_박스_내부의_객체_위치_제어) 항목을 참고하세요.

## 대체 요소

전형적인 대체 요소는 다음과 같습니다.

- {{HTMLElement("iframe")}}
- {{HTMLElement("video")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("img")}}

일부 요소는 특정한 경우에만 대체 요소로 취급합니다.

- {{HTMLElement("option")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("object")}}

HTML 명세에 따르면 {{htmlelement("input")}} 또한 대체될 수 있습니다. `<input>` 유형이 `"image"`인 경우 {{htmlelement("img")}}와 유사한 대체 요소이기 때문입니다. 그러나 다른 유형의 `<input>`을 포함한 나머지 양식 컨트롤 요소는 비대체 요소라고 명시하고 있습니다. (명세는 양식 요소의 플랫폼별 기본 렌더링을 "위젯"(Widget)이라는 용어로 설명하고 있습니다.)

CSS {{cssxref("content")}} 속성을 사용해 추가한 객체도 대체 요소로, HTML 마크업에는 존재하지 않기 때문에 "익명" 대체 요소라고 합니다.

## 대체 요소와 CSS

CSS는 바깥 여백이나 일부 `auto` 값 계산 등 특정 상황에서 대체 요소를 특별히 취급합니다.

일부 대체 요소는 고유 크기 또는 정의된 기준선을 가질 수 있으며, {{cssxref("vertical-align")}} 등의 CSS 속성이 사용할 수 있습니다. 오직 대체 요소만이 고유 크기를 가질 수 있습니다.

## 명세서

{{Specifications}}

## 같이 보기

- [HTML 명세](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)
- CSS 주요 개념
  - [CSS 문법](/ko/docs/Web/CSS/CSS_syntax/Syntax)
  - [@규칙](/ko/docs/Web/CSS/CSS_syntax/At-rule)
  - [주석](/ko/docs/Web/CSS/CSS_syntax/Comments)
  - [명시도](/ko/docs/Web/CSS/CSS_cascade/Specificity)
  - [상속](/ko/docs/Web/CSS/CSS_cascade/Inheritance)
  - [박스 모델](/ko/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [레이아웃 모드](/ko/docs/Glossary/Layout_mode)
  - [시각적 서식 모델](/ko/docs/Web/CSS/Visual_formatting_model)
  - [마진 중첩](/ko/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - 값
    - [초깃값](/ko/docs/Web/CSS/CSS_cascade/Value_processing)
    - [계산값](/ko/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_4129c9bf28ee4c2570fe2528f20c4b2cd9a30d9cf2ec4e75fb56fe903059e63e)
    - [결정값](/ko/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_a47f4c6da6bce4fc52f8ed2ce27dc58e53fa5bd72bfef0bb04a61adbc5249cc4)
    - [지정값](/ko/docs/conflicting/Web/CSS/CSS_cascade/Value_processing)
    - [사용값](/ko/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_ec5028512f59a0673c4ed5cfd5bcbbe4dcec85980166da23f909867f8a36e8b2)
    - [실제값](/ko/docs/Web/CSS/actual_value)

  - [값 정의 구문](/ko/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
  - [단축 속성](/ko/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - [대체 요소](/ko/docs/Web/CSS/CSS_images/Replaced_element_properties)
