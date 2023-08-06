---
title: 유형 선택자
slug: Web/CSS/Type_selectors
---

{{CSSRef("Selectors")}}

[CSS](/ko/docs/Web/CSS) **유형 선택자**는 노드 이름을 사용해 요소를 선택합니다. 즉 문서 내에서 주어진 유형의 모든 요소를 선택합니다.

```css
/* All <a> elements. */
a {
  color: red;
}
```

## 구문

```
element { style properties }
```

## 예제

### CSS

```css
span {
  background-color: DodgerBlue;
  color: #ffffff;
}
```

### HTML

```html
<span>텍스트를 가진 span입니다.</span>
<p>텍스트를 가진 p입니다.</p>
<span>또 다시 텍스트를 가진 span입니다.</span>
```

### 결과

{{EmbedLiveSample('예제', 200, 150)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
