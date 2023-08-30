---
title: 자손 결합자
slug: Web/CSS/Descendant_combinator
---

{{CSSRef("Selectors")}}

보통 한 칸의 공백 문자로 표현하는 **자손 결합자**(" ")는 두 개의 선택자를 조합하여, 뒤쪽 선택자 요소의 조상(부모, 부모의 부모, 부모의 부모의 부모...)에 앞쪽 선택자 요소가 존재할 경우 선택합니다. 자손 결합자를 활용하는 선택자를 자손 선택자라고 부릅니다.

```css
/* List items that are descendants of the "my-things" list */
ul.my-things li {
  margin: 2em;
}
```

기술적으로, 자손 결합자는 하나 이상의 {{Glossary("CSS")}} 공백 문자이므로 스페이스 외에도 캐리지 리턴, 폼 피드, 새 줄, 탭 문자도 해당합니다. 또한 결합자를 구성하는 공백 문자는 CSS 주석을 임의의 개수만큼 포함할 수 있습니다.

## 구문

```
selector1 selector2 {
  /* property declarations */
}
```

## 예제

### CSS

```css
li {
  list-style-type: disc;
}

li li {
  list-style-type: circle;
}
```

### HTML

```html
<ul>
  <li>
    <div>Item 1</div>
    <ul>
      <li>Subitem A</li>
      <li>Subitem B</li>
    </ul>
  </li>
  <li>
    <div>Item 2</div>
    <ul>
      <li>Subitem A</li>
      <li>Subitem B</li>
    </ul>
  </li>
</ul>
```

### 결과

{{EmbedLiveSample("예제", "100%", 160)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [자식 결합자](/ko/docs/Web/CSS/Child_combinator)
