---
title: ID 선택자
slug: Web/CSS/ID_selectors
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **ID 선택자**는 요소의 [`id`](/ko/docs/Web/HTML/Global_attributes#id) 특성 값을 비교하여, 완전히 동일한 `id`를 가진 요소를 선택합니다.

```css
/* id="demo" 요소 선택 */
#demo {
  border: red 2px solid;
}
```

## 구문

```
#id_value { style properties }
```

위의 구문은 [특성 선택자](/ko/docs/Web/CSS/Attribute_selectors)를 사용한 다음 구문과 동일합니다.

```
[id=id_value] { style properties }
```

## 예제

### CSS

```css
#identified {
  background-color: skyblue;
}
```

### HTML

```html
<div id="identified">특별한 ID를 가진 요소에요!</div>
<div>이건 그냥 div에요.</div>
```

### 결과

{{EmbedLiveSample("Example", '100%', 50)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
