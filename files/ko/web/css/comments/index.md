---
title: Comments
slug: Web/CSS/Comments
---

{{CSSRef}}

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

  - [CSS 문법](/ko/docs/Web/CSS/Syntax)
  - [@규칙](/ko/docs/Web/CSS/At-rule)
  - [주석](/ko/docs/Web/CSS/Comments)
  - [명시도](/ko/docs/Web/CSS/Specificity)
  - [상속](/ko/docs/Web/CSS/inheritance)
  - [박스 모델](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [레이아웃 모드](/ko/docs/Web/CSS/Layout_mode)
  - [시각적 서식 모델](/ko/docs/Web/CSS/Visual_formatting_model)
  - [마진 중첩](/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - 값

    - [초깃값](/ko/docs/Web/CSS/initial_value)
    - [계산값](/ko/docs/Web/CSS/computed_value)
    - [결정값](/ko/docs/Web/CSS/resolved_value)
    - [지정값](/ko/docs/Web/CSS/specified_value)
    - [사용값](/ko/docs/Web/CSS/used_value)
    - [실제값](/ko/docs/Web/CSS/actual_value)

  - [값 정의 구문](/ko/docs/Web/CSS/Value_definition_syntax)
  - [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)
  - [대체 요소](/ko/docs/Web/CSS/Replaced_element)
