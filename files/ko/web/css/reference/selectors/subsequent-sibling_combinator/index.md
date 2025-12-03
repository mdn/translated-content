---
title: 일반 형제 결합자
slug: Web/CSS/Reference/Selectors/Subsequent-sibling_combinator
original_slug: Web/CSS/Subsequent-sibling_combinator
---

**일반 형제 결합자**(`~`)는 두 개의 선택자 사이에 위치하여 뒤쪽 선택자의 요소와 앞쪽 선택자 요소의 부모 요소가 같고, 뒤쪽 선택자의 요소가 뒤에 위치할 때 선택합니다. 두 요소가 서로 붙어있을 필요는 없습니다.

```css
/* 서로 형제인 문단 중 이미지 뒤쪽인 경우에만 선택 */
img ~ p {
  color: red;
}
```

## 구문

```
former_element ~ target_element { style properties }
```

## 예제

### CSS

```css
p ~ span {
  color: red;
}
```

### HTML

```html
<span>이건 빨강이 아닙니다.</span>
<p>여기 문단이 있습니다.</p>
<code>그리고 코드도 있습니다.</code>
<span>이제 빨강입니다!</span>
<code>더 많은 코드가 있습니다.</code>
<span>이것도 빨강입니다!</span>
```

### 결과

{{EmbedLiveSample("예제", "100%", 120)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [인접 형제 결합자](/ko/docs/Web/CSS/Next-sibling_combinator)
