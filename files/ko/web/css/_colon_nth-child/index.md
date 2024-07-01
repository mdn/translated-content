---
title: ":nth-child"
slug: Web/CSS/:nth-child
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`:nth-child()`** [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)는 형제 사이에서의 순서에 따라 요소를 선택합니다.

```css
/* 목록의 두 번째 <li> 선택 */
li:nth-child(2) {
  color: lime;
}

/* 임의의 그룹에서 네 번째에 위치하는 모든 요소 선택 */
:nth-child(4n) {
  color: lime;
}
```

## 구문

`nth-child` 의사 클래스는 형제의 목록에서, 선택하려는 요소의 인덱스 패턴을 나타내는 하나의 매개변수를 사용해 지정합니다. 인덱스는 1부터 시작합니다.

### 키워드 값

- `odd`
  - : 형제 요소에서 홀수번째(1, 3, 5, ...)인 요소를 나타냅니다.
- `even`
  - : 형제 요소에서 짝수번째(2, 4, 6, ...)인 요소를 나타냅니다.

### 함수형 표기법

- `<An+B>`

  - : 사용자 지정 패턴을 만족한 인덱스를 가지는 요소를 나타냅니다. An+B의 형태로 나타내며,

    - `A`는 정수 인덱스 증감량,
    - `B`는 정수 오프셋,
    - `n`은 0부터 시작하는 모든 양의 정수를 나타냅니다.

  목록의 **An+B**번째 요소라고 해석할 수 있습니다.

### 형식 구문

{{csssyntax}}

## 예제

### 선택자

- `tr:nth-child(odd)` 또는 `tr:nth-child(2n+1)`
  - : HTML 표의 홀수번째 행을 나타냅니다.
- `tr:nth-child(even)` 또는 `tr:nth-child(2n)`
  - : HTML 표의 짝수번째 행을 나타냅니다.
- `:nth-child(7)`
  - : 임의의 7번째 요소를 나타냅니다.
- `:nth-child(5n)`
  - **: 5** \[=5×1], **10** \[=5×2], **15** \[=5×3], **...** 번째의 요소를 나타냅니다. 패턴 공식을 만족하는 첫 번째 값은 **0** \[=5x0]으로서 아무 요소도 선택하지 않는데, 요소의 인덱스는 1부터 시작하지만 `n`은 0부터 증가하기 때문입니다. 다소 의아할 수 있으나, 바로 아래 예제처럼 공식의 B 부분이 >0인 경우 보다 납득하기 쉬워집니다.
- `:nth-child(n+7)`
  - : 7번째와 그 이후의 모든 요소, 즉 **7** \[=0+7], **8** \[=1+7], **9** \[=2+7], **...** 를 나타냅니다.
- `:nth-child(3n+4)`
  - **: 4** \[=(3×0)+4], **7** \[=(3×1)+4], **10** \[=(3×2)+4], **13** \[=(3×3)+4], **...** 번째의 요소를 나타냅니다.
- `:nth-child(-n+3)`
  - : 앞에서 세 개의 요소를 나타냅니다. \[=-0+3, -1+3, -2+3]
- `p:nth-child(n)`
  - : 형제 그룹 내의 모든 `<p>` 요소를 나타냅니다. 단순한 `p` 선택자와 동일하지만 더 높은 [명시도](/ko/docs/Web/CSS/Specificity)를 가집니다.
- `p:nth-child(1)` 또는 `p:nth-child(0n+1)`
  - : 형제 그룹 내의 모든 첫 번째 `<p>` 요소를 나타냅니다. {{cssxref(":first-child")}} 선택자와 동일하며 같은 [명시도](/ko/docs/Web/CSS/Specificity)를 가집니다.
- `p:nth-child(n+8):nth-child(-n+15)`
  - : 형제 그룹 내에서 8번째부터 15번째 까지의 `<p>` 요소를 나타냅니다.

### 자세한 예제

#### HTML

```html
<h3>
  <code>span:nth-child(2n+1)</code>, WITHOUT an <code>&lt;em&gt;</code> among
  the child elements.
</h3>
<p>Children 1, 3, 5, and 7 are selected.</p>
<div class="first">
  <span>Span 1!</span>
  <span>Span 2</span>
  <span>Span 3!</span>
  <span>Span 4</span>
  <span>Span 5!</span>
  <span>Span 6</span>
  <span>Span 7!</span>
</div>

<br />

<h3>
  <code>span:nth-child(2n+1)</code>, WITH an <code>&lt;em&gt;</code> among the
  child elements.
</h3>
<p>
  Children 1, 5, and 7 are selected.<br />
  3 is used in the counting because it is a child, but it isn't selected because
  it isn't a <code>&lt;span&gt;</code>.
</p>
<div class="second">
  <span>Span!</span>
  <span>Span</span>
  <em>This is an `em`.</em>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
</div>

<br />

<h3>
  <code>span:nth-of-type(2n+1)</code>, WITH an <code>&lt;em&gt;</code> among the
  child elements.
</h3>
<p>
  Children 1, 4, 6, and 8 are selected.<br />
  3 isn't used in the counting or selected because it is an
  <code>&lt;em&gt;</code>, not a <code>&lt;span&gt;</code>, and
  <code>nth-of-type</code> only selects children of that type. The
  <code>&lt;em&gt;</code> is completely skipped over and ignored.
</p>
<div class="third">
  <span>Span!</span>
  <span>Span</span>
  <em>This is an `em`.</em>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
</div>
```

#### CSS

```css
html {
  font-family: sans-serif;
}

span,
div em {
  padding: 5px;
  border: 1px solid green;
  display: inline-block;
  margin-bottom: 3px;
}

.first span:nth-child(2n + 1),
.second span:nth-child(2n + 1),
.third span:nth-of-type(2n + 1) {
  background-color: lime;
}
```

#### 결과

{{EmbedLiveSample('자세한_예제', 550, 550)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{ Cssxref(":nth-of-type") }}, {{ Cssxref(":nth-last-child") }}
