---
title: 자식 결합자
slug: Web/CSS/Child_combinator
---

{{CSSRef("Selectors")}}

**자식 결합자**(`>`)는 두 개의 CSS 선택자 사이에 위치하여 뒤쪽 선택자의 요소가 앞쪽 선택자 요소의 바로 밑에 위치할 경우에만 선택합니다.

```css
/* List items that are children of the "my-things" list */
ul.my-things > li {
  margin: 2em;
}
```

뒤쪽 선택자의 요소는 앞쪽 선택자 요소의 바로 아래에 위치해야 하므로, DOM 트리의 깊이에 상관하지 않고 아래의 모든 요소를 선택하는 [자손 결합자](/ko/docs/Web/CSS/Descendant_combinator)보다 더 엄격합니다.

## 구문

```
selector1 > selector2 { style properties }
```

## 예제

### CSS

```css
span {
  background-color: white;
}

div > span {
  background-color: DodgerBlue;
}
```

### HTML

```html
<div>
  <span
    >Span #1, in the div.
    <span>Span #2, in the span that's in the div.</span>
  </span>
</div>
<span>Span #3, not in the div at all.</span>
```

### 결과

{{EmbedLiveSample("예제", "100%", 100)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [자손 결합자](/ko/docs/Web/CSS/Descendant_combinator)
