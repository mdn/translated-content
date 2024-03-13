---
title: 상속
slug: Web/CSS/Inheritance
---

{{cssref}}

MDN 내 각 [CSS 속성(property) 정의](/ko/docs/Web/CSS/CSS_Reference) 페이지의 요약절은 그 속성이 기본(default)으로 상속되는지("Inherited: Yes") 혹은 상속되지 않는지("Inherited: no") 쓰여 있습니다. 이 상속 여부는 요소의 속성에 어떤 값이 지정되지 않을 때 일어나는 일을 제어합니다.

## 상속되는 속성

요소의 **상속되는 속성**에 값이 지정되지 않은 경우, 요소는 부모 요소의 해당 속성의 [계산값](/ko/docs/Web/CSS/computed_value)을 얻습니다. 오직 문서의 루트 요소만 속성의 요약절에 주어진 [초기값](/ko/docs/Web/CSS/initial_value)을 얻습니다.

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

요소의 **상속되지 않는 속성**(Mozilla 코드에서는 가끔 **reset 속성**으로 불림)에 어떤 값이 지정되지 않는 경우, 요소는 그 속성의 [초기값](/ko/docs/Web/CSS/initial_value)을 얻습니다(속성의 요약절에 지정된 대로).

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

- [CSS 참고서](/ko/docs/Web/CSS/CSS_Reference)
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

- {{ Cssxref("inherit") }}
