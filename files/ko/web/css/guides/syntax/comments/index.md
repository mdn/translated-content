---
title: Comments
slug: Web/CSS/Guides/Syntax/Comments
original_slug: Web/CSS/CSS_syntax/Comments
---

CSS **주석**은 코드에 설명을 넣거나, 브라우저가 스타일 시트의 특정 부분을 읽지 못하도록 방지할 때 사용합니다. 주석은 문서의 레이아웃에 영향을 주지 않습니다.

## 구문

주석은 스타일 시트에서 공백이 위치할 수 있는 곳 어디에나 넣을 수 있습니다. 한 줄로도, 여러 줄로도 사용할 수 있습니다.

```
/* Comment */
```

## 예제

```css
/* 한 줄 주석 */

/*
여러
줄을
차지하는
주석
*/

/* 아래와 같이 사용하면
   스타일을 숨길 수 있음 */
/*
span {
  color: blue;
  font-size: 1.5em;
}
*/
```

## 참고

한 줄과 여러 줄 주석 모두 `/* */` 구문을 사용하며 다른 방법은 없습니다. 그러나 {{htmlelement("style")}} 요소를 사용하는 경우 `<!-- -->`를 이용해 구형 브라우저에게서 CSS를 숨길 수 있지만, 추천하는 방법은 아닙니다. `/* */` 주석 구문을 사용하는 대부분의 언어와 마찬가지로 주석을 중첩할 수는 없습니다. 즉 `/*`을 뒤따르는 첫 번째 `*/`이 주석을 끝냅니다.

## 명세

- [CSS 2.1 구문과 기본 데이터 형식 #comments](https://www.w3.org/TR/CSS21/syndata.html#comments)

## 같이 보기

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
