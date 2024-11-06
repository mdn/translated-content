---
title: user-select
slug: Web/CSS/user-select
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`user-select`** 속성은 사용자가 텍스트를 선택할 수 있는지 지정합니다.

```css
/* 키워드 값 */
user-select: none;
user-select: auto;
user-select: text;
user-select: contain;
user-select: all;

/* 전역 값 */
user-select: inherit;
user-select: initial;
user-select: unset;
```

## 구문

- `none`

  - : 이 요소와 아래 요소의 텍스트를 선택하지 못하도록 막습니다. 단 {{domxref("Selection")}} 객체는 `none`인 요소(와 그 아래)를 포함할 수 있습니다.

- `auto`
  - : `auto`의 사용값은 아래와 같이 결정됩니다.
    - `::before`와 `::after` 의사 요소의 사용값은 `none`입니다.
    - 편집 가능한 요소의 사용값은 `contain`입니다.
    - 그렇지 않고, 부모 요소 `user-select`의 사용값이 `all`이면 이 요소의 사용값도 `all`입니다.
    - 그렇지 않고, 부모 요소 `user-select`의 사용값이 `none`이면 이 요소의 사용값도 `none`입니다.
    - 그렇지 않으면 사용값은 `text`입니다.
- `text`
  - : 사용자가 텍스트를 선택할 수 있습니다.
- `all`
  - : 요소의 콘텐츠가 원자적으로 선택됩니다. 즉 선택 범위는 이 요소와 그 아래의 자손 전체를 포함해야 하며 일부만 담을 수는 없습니다. 하위 요소에서 더블 클릭이나 콘텍스트 클릭이 발생한 경우, `all`을 지정한 조상 요소 중 제일 상위 요소를 선택합니다.
- `contain`
  - : 선택의 시작을 이 요소 안에서 한 경우, 범위가 요소 바깥으로 벗어날 수 없습니다.

## 형식 정의

{{CSSInfo}}

## 형식 구문

{{csssyntax}}

## 예제

### HTML

```html
<p>You should be able to select this text.</p>
<p class="unselectable">Hey, you can't select this text!</p>
<p class="all">Clicking once will select all of this text.</p>
```

### CSS

```css
.unselectable {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.all {
  -moz-user-select: all;
  -webkit-user-select: all;
  -ms-user-select: all;
  user-select: all;
}
```

### 결과

{{EmbedLiveSample("예제")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{Cssxref("::selection")}} 의사 요소
- JavaScript {{domxref("Selection")}} 객체.
