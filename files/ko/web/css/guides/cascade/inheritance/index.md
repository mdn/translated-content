---
title: 상속
slug: Web/CSS/Guides/Cascade/Inheritance
original_slug: Web/CSS/CSS_cascade/Inheritance
---

MDN 내 각 [CSS 속성(property) 정의](/ko/docs/Web/CSS/Reference) 페이지의 요약절은 그 속성이 기본(default)으로 상속되는지("Inherited: Yes") 혹은 상속되지 않는지("Inherited: no") 쓰여 있습니다. 이 상속 여부는 요소의 속성에 어떤 값이 지정되지 않을 때 일어나는 일을 제어합니다.

## 상속되는 속성

요소의 **상속되는 속성**에 값이 지정되지 않은 경우, 요소는 부모 요소의 해당 속성의 [계산값](/ko/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_4129c9bf28ee4c2570fe2528f20c4b2cd9a30d9cf2ec4e75fb56fe903059e63e)을 얻습니다. 오직 문서의 루트 요소만 속성의 요약절에 주어진 [초기값](/ko/docs/Web/CSS/CSS_cascade/Value_processing)을 얻습니다.

상속되는 속성의 대표적인 예는 {{ Cssxref("color") }} 속성입니다. 주어진 스타일 규칙:

```css
p {
  color: green;
}
```

과 마크업:

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

`em` 요소는 `p` 요소로부터 {{ Cssxref("color") }} 속성값을 상속했기 때문에, "emphasized text"는 녹색으로 보입니다. 속성의 초기값(페이지가 어떤 색을 지정하지 않았을 때 루트 요소에 사용된 색)을 얻지 *않*습니다.

## 상속되지 않는 속성

요소의 **상속되지 않는 속성**(Mozilla 코드에서는 가끔 **reset 속성**으로 불림)에 어떤 값이 지정되지 않는 경우, 요소는 그 속성의 [초기값](/ko/docs/Web/CSS/CSS_cascade/Value_processing)을 얻습니다(속성의 요약절에 지정된 대로).

상속되지 않는 속성의 대표적인 예는 {{ Cssxref("border") }} 속성입니다. 주어진 스타일 규칙:

```css
p {
  border: medium solid;
}
```

과 마크업:

```html
<p>This paragraph has <em>emphasized text</em> in it.</p>
```

"emphasized text"는 테두리가 없습니다({{ Cssxref("border-style") }}의 초기값이 `none`이기 때문에).

## 참고

{{ Cssxref("inherit") }} 키워드는 작성자가 명시적으로 상속을 지정할 수 있게 합니다. 상속되는 속성과 상속되지 않는 속성 모두에 작동합니다.

## 같이 보기

- [CSS 참고서](/ko/docs/Web/CSS/Reference)
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

- {{ Cssxref("inherit") }}
