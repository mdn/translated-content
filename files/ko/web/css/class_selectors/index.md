---
title: 클래스 선택자
slug: Web/CSS/Class_selectors
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **클래스 선택자**는 요소의 [`class`](/ko/docs/Web/HTML/Global_attributes#class) 특성에 기반해 요소를 선택합니다.

```css
/* All elements with class="spacious" */
.spacious {
  margin: 2em;
}

/* All <li> elements with class="spacious" */
li.spacious {
  margin: 2em;
}

/* All <li> elements with a class list that includes both "spacious" and "elegant" */
/* For example, class="elegant retro spacious" */
li.spacious.elegant {
  margin: 2em;
}
```

## 구문

```
.class_name { style properties }
```

위의 구문은 [특성 선택자](/ko/docs/Web/CSS/Attribute_selectors)를 사용한 다음 구문과 동일합니다.

```
[class~=class_name] { style properties }
```

## 예제

### CSS

```css
.red {
  color: #f33;
}

.yellow-bg {
  background: #ffa;
}

.fancy {
  font-weight: bold;
  text-shadow: 4px 4px 3px #77f;
}
```

### HTML

```html
<p class="red">빨간 글자색의 문단입니다.</p>
<p class="red yellow-bg">빨간 글자색과 노란 배경의 문단입니다.</p>
<p class="red fancy">빨간 글자색과 "멋진" 스타일을 가진 문단입니다.</p>
<p>이건 그냥 문단이에요.</p>
```

### 결과

{{EmbedLiveSample('예제')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
