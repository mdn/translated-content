---
title: unset
slug: Web/CSS/unset
---

{{CSSRef}}

CSS **`unset`** 키워드를 적용한 속성은, 부모로부터 상속할 값이 존재하면 상속값을, 그렇지 않다면 [초깃값](/ko/docs/Web/CSS/initial_value)을 사용합니다. 다르게 표현하자면, 전자일 땐 {{cssxref("inherit")}} 키워드처럼, 후자일 땐 {{cssxref("initial")}} 키워드처럼 동작합니다. {{cssxref("all")}} 단축 속성을 포함한 모든 속성에 사용할 수 있습니다.

## 예제

### 글자 색

#### HTML

```html
<p>This text is red.</p>
<div class="foo">
  <p>This text is also red.</p>
</div>
<div class="bar">
  <p>This text is green (default inherited value).</p>
</div>
```

#### CSS

```css
.foo {
  color: blue;
}
.bar {
  color: green;
}

p {
  color: red;
}
.bar p {
  color: unset;
}
```

#### 결과

{{ EmbedLiveSample('글자_색') }}

### 테두리

#### HTML

```html
<p>This text has a red border.</p>
<div>
  <p>This text has a red border.</p>
</div>
<div class="bar">
  <p>This text has has a black border (initial default, not inherited).</p>
</div>
```

#### CSS

```css
div {
  border: 1px solid green;
}

p {
  border: 1px solid red;
}

.bar p {
  border-color: unset;
}
```

#### 결과

{{ EmbedLiveSample('테두리', 'auto', 200) }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("initial")}}을 사용해 속성의 초깃값을 사용하세요.
- {{cssxref("revert")}}를 사용해 사용자 에이전트가 지정한 값(또는 사용자가 수정한 값)으로 속성을 되돌리세요.
- {{cssxref("inherit")}}을 사용해 속성의 값이 부모와 같도록 지정하세요.
- {{cssxref("all")}} 속성을 사용하면 요소의 모든 속성을 한꺼번에 `initial`, `inherit`, `revert`, `unset`할 수 있습니다.
