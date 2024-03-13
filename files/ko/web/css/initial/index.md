---
title: initial
slug: Web/CSS/initial
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`initial`** 키워드는 속성의 [초깃값(기본값)](/ko/docs/Web/CSS/initial_value)을 요소에 적용합니다. 초깃값은 브라우저가 지정합니다. 모든 속성에서 사용할 수 있으며, {{cssxref("all")}}에 지정할 경우 모든 CSS 속성을 초깃값으로 재설정합니다.

> **참고:** [상속 속성](/ko/docs/Web/CSS/inheritance#Inherited_properties)의 초깃값은 예상치 못한 값일 수도 있습니다. 따라서, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} 키워드의 사용을 대신 고려해보세요.

## 예제

#### HTML

```html
<p>
  <span>This text is red.</span>
  <em>This text is in the initial color (typically black).</em>
  <span>This is red again.</span>
</p>
```

#### CSS

```css
p {
  color: red;
}

em {
  color: initial;
}
```

{{EmbedLiveSample('예제')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("all")}}
