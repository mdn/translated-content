---
title: ":active"
slug: Web/CSS/:active
---

{{CSSRef}}

**`:active`** [CSS](/ko/docs/Web/API/CSS) [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)는 사용자가 활성화한 요소(버튼 등)를 나타냅니다. 마우스를 사용하는 경우, "활성"이란 보통 마우스 버튼을 누르는 순간부터 떼는 시점까지를 의미합니다.

```css
/* 활성화된 모든 <a> 태그를 선택 */
a:active {
  color: red;
}
```

`:active` 의사 클래스는 대개 {{HTMLElement("a")}}, {{HTMLElement("button")}}과 함께 사용합니다. 다른 흔한 대상으로는 활성화된 요소를 포함한 다른 요소와, 연결된 {{HTMLElement("label")}}로 선택한 입력 폼 요소 등이 있습니다.

`:active` 의사 클래스로 정의한 스타일은 자신보다 뒤에 위치하고 동등한 명시성을 가진 다른 링크 의사 클래스({{cssxref(":link")}}, {{cssxref(":hover")}}, {{cssxref(":visited")}})가 덮어씁니다. 링크를 적절히 디자인하려면 _LVHA-순서(_`:link` — `:visited` — `:hover` — `:active`)를 따라, `:active` 규칙을 다른 모든 링크 규칙들보다 뒤에 배치하세요.

> **참고:** CSS3 명세에 따르면, 다수의 버튼을 가진 마우스라도 `:active` 의사 클래스는 주 버튼에만 적용돼야 합니다. 오른손잡이 마우스 기준, 주 버튼은 보통 맨 왼쪽 버튼입니다.

## 구문

{{csssyntax}}

## 예제

### 활성화 링크

#### HTML

```html
<p>
  링크를 포함하는 문단입니다.
  <a href="#">이 링크는 클릭하는 동안 색이 빨갛게 됩니다.</a>
  이 문단은 클릭하는 동안 배경색이 회색이 됩니다.
</p>
```

#### CSS

```css
a:link {
  color: blue;
} /* 방문하지 않은 링크 */
a:visited {
  color: purple;
} /* 방문한 링크 */
a:hover {
  background: yellow;
} /* 마우스를 올린 링크 */
a:active {
  color: red;
} /* 활성화한 링크 */

p:active {
  background: #eee;
} /* 활성화한 문단 */
```

#### 결과

{{EmbedLiveSample('활성화_링크')}}

### 활성화 폼 요소

#### HTML

```html
<form>
  <label for="my-button">내 버튼: </label>
  <button id="my-button" type="button">제 라벨이나 저를 클릭해보세요!</button>
</form>
```

#### CSS

```css
form :active {
  color: red;
}

form button {
  background: white;
}
```

#### 결과

{{EmbedLiveSample('활성화_폼_요소')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 링크 관련 의사 클래스: {{cssxref(":link")}}, {{cssxref(":visited")}}, {{cssxref(":hover")}}.
