---
title: 인접 형제 결합자
slug: Web/CSS/Reference/Selectors/Next-sibling_combinator
original_slug: Web/CSS/Next-sibling_combinator
---

**인접 형제 결합자**(`+`)는 앞에서 지정한 요소의 **바로 다음**에 위치하는 형제 요소만 선택합니다.

```css
/* Paragraphs that come immediately after any image */
img + p {
  font-weight: bold;
}
```

## 구문

```
former_element + target_element { style properties }
```

## 예제

### CSS

```css
li:first-of-type + li {
  color: red;
}
```

### HTML

```html
<ul>
  <li>One</li>
  <li>Two!</li>
  <li>Three</li>
</ul>
```

### 결과

{{EmbedLiveSample("예제", "100%", 100)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [일반 형제 결합자](/ko/docs/Web/CSS/Subsequent-sibling_combinator)
