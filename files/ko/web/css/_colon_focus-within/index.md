---
title: ":focus-within"
slug: Web/CSS/:focus-within
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`:focus-within`** [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)는 포커스를 받았거나, 포커스를 받은 요소를 포함하는 요소를 나타냅니다. 즉 스스로 {{CSSxRef(":focus")}} 의사 클래스와 일치하거나, 그 자손 중 하나가 `:focus`와 일치하는 요소를 나타냅니다. ([섀도 트리](/ko/docs/Web/Web_Components/Shadow_DOM) 내부도 포함)

```css
/* Selects a <div> when one of its descendants is focused */
div:focus-within {
  background: cyan;
}
```

흔히 쓸 수 있는 예시로서, {{HTMLElement("form")}}의 {{HTMLElement("input")}} 필드 중 하나가 포커스된 경우 전체 `<form>`을 강조해야 할 때 유용하게 사용할 수 있습니다.

## 구문

{{CSSSyntax}}

## 예제

다음 예제에서는 두 텍스트 입력 칸 중 하나라도 포커스를 받은 경우 양식을 강조합니다.

### HTML

```html
<p>아래 양식의 값을 채워주세요.</p>

<form>
  <label for="given_name">이름:</label>
  <input id="given_name" type="text" />
  <br />
  <label for="family_name">성:</label>
  <input id="family_name" type="text" />
</form>
```

### CSS

```css
form {
  border: 1px solid;
  color: gray;
  padding: 4px;
}

form:focus-within {
  background: #ff8;
  color: black;
}

input {
  margin: 4px;
}
```

### 결과

{{EmbedLiveSample("예제", 500, 150)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}} {{Experimental_Inline}}
