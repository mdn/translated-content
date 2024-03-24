---
title: ":enabled"
slug: Web/CSS/:enabled
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`:enabled`** [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)는 모든 활성 요소를 나타냅니다. 활성 요소란 활성(선택, 클릭, 입력 등등)하거나 포커스를 받을 수 있는 요소를 말합니다. 반대 상태인 비활성 요소도 존재합니다.

```css
/* 모든 활성 <input> 선택 */
input:enabled {
  color: blue;
}
```

## 구문

{{csssyntax}}

## 예제

다음 예제는 모든 활성 텍스트 및 버튼 {{htmlElement("input")}}의 글자 색을 초록색으로 만들고, 비활성 상태는 회색으로 만듭니다. 이런 구분을 통해 사용자는 상호작용 가능한 요소를 쉽게 구별할 수 있습니다.

### HTML

```html
<form action="url_of_form">
  <label for="FirstField">First field (enabled):</label>
  <input type="text" id="FirstField" value="Lorem" /><br />

  <label for="SecondField">Second field (disabled):</label>
  <input type="text" id="SecondField" value="Ipsum" disabled="disabled" /><br />

  <input type="button" value="Submit" />
</form>
```

### CSS

```css
input:enabled {
  color: #2b2;
}

input:disabled {
  color: #aaa;
}
```

### 결과

{{EmbedLiveSample("예제", 550, 95)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{Cssxref(":disabled")}}
