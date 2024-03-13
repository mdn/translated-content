---
title: ":default"
slug: Web/CSS/:default
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`:default`** [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)는 연관 요소 내에서의 기본값인 요소를 선택합니다.

이 선택자는 [HTML Standard §4.16.3 Pseudo-classes](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-default)에 정의되어 있듯 {{htmlelement("button")}}, [`<input type="checkbox">`](/ko/docs/Web/HTML/Element/input/checkbox), [`<input type="radio">`](/ko/docs/Web/HTML/Element/input/radio), {{htmlelement("option")}} 요소를 아래와 같은 경우에 선택합니다.

- 옵션 요소의 기본값은 `selected` 특성을 가진 제일 첫 요소, 즉 DOM 순서 기준으로 제일 앞의 활성화 옵션입니다. `multiple` 특성의 {{htmlelement("select")}}는 둘 이상의 `selected` 옵션을 가질 수도 있으므로, 모든 옵션이 `:default`로 선택됩니다.
- `<input type="checkbox">`와 `<input type="radio">`는 `checked` 특성을 가지고 있으면 선택됩니다.
- {{htmlelement("button")}}은 {{htmlelement("form")}} 요소의 [기본 제출 버튼](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission), 즉 DOM 순서 기준으로 양식에 속하는 제일 첫 `<button>`이면 선택됩니다. (`image`와 `submit`처럼, 양식을 제출하는 다른 {{htmlelement("input")}} 유형에도 적용됩니다.)

## 구문

{{csssyntax}}

## 예제

### HTML

```html
<fieldset>
  <legend>Favorite season</legend>

  <input type="radio" name="season" id="spring" />
  <label for="spring">Spring</label>

  <input type="radio" name="season" id="summer" checked />
  <label for="summer">Summer</label>

  <input type="radio" name="season" id="fall" />
  <label for="fall">Fall</label>

  <input type="radio" name="season" id="winter" />
  <label for="winter">Winter</label>
</fieldset>
```

### CSS

```css
input:default {
  box-shadow: 0 0 2px 1px coral;
}

input:default + label {
  color: coral;
}
```

### 결과

{{EmbedLiveSample("예제")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
