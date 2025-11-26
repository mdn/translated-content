---
title: Using CSS nesting
slug: Web/CSS/Guides/Nesting/Using
original_slug: Web/CSS/CSS_nesting/Using_CSS_nesting
l10n:
  sourceCommit: c8f8d139207c796a49390614fbe4e65a8ab9bfac
---

[CSS 중첩](/ko/docs/Web/CSS/CSS_nesting) 모듈은 스타일시트의 가독성을 높이고 모듈화하며 그리고 유지 보수하기 용이하게 만듭니다. 선택자를 반복하여 작성하지 않아도 되고, 이로 인해 파일 크기도 줄어들 수 있습니다.

CSS 중첩은 [Sass](https://sass-lang.com/) 와 같은 CSS 전처리기와는 다릅니다. CSS 전처리기는 사전에 컴파일되지만, CSS 중첩은 브라우저에 의해 파싱됩니다. 또한 CSS 중첩에서는, [`&` 중첩 선택자의 명시도](/ko/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)는 {{cssxref(':is',':is()')}} 함수와 유사하며, 관련 선택자 목록과 연관에서 가장 높은 명시도를 이용하여 계산합니다.

이 안내서는 CSS 에서 중첩을 사용하는 각기 다른 방법에 대해 설명합니다.

## 자식 선택자

CSS 중첩을 사용하면 부모의 자식 선택자를 생성할 수 있는데, 이것을 이용하여 특정 부모의 자식 요소를 타겟팅할 수 있습니다. 이는 [`&` 중첩 선택자](/ko/docs/Web/CSS/Nesting_selector) 를 사용하는 경우와 사용하지 않는 경우에도 가능합니다.

`&` 중첩 선택자 사용이 필수적이거나 도움이 되는 특수한 인스턴스들이 있습니다.

- [결합 선택자들](#compound_selectors) 혹은 [가상의 클래스](/ko/docs/Web/CSS/Pseudo-classes) 와 같이 선택자들을 함께 사용할 때.
- 역호환성을 고려할 때.
- 가독성을 위한 시각적 표시로써, `&` 중첩 선택자를 보는 것처럼 CSS 중첩이 사용되고 있음을 표현할 때.

```css
/* 중첩 선택자를 사용하는 경우 */
parent {
  /* 부모 스타일 */
  child {
    /* 부모의 자식 스타일 */
  }
}

/* 중첩 선택자를 사용하지 않는 경우 */
parent {
  /* 부모 스타일 */
  & child {
    /* 부모의 자식 스타일 */
  }
}

/* 브라우저는 위 두 방법을 각각 아래 예시처럼 파싱합니다. */
parent {
  /* 부모 스타일 */
}
parent child {
  /* 부모의 자식 스타일 */
}
```

### 예제

아래 예제들에서는, `&` 중첩 선택자를 사용하는 경우 하나, 그리고 다른 하나는 사용하지 않는 경우로써, `<label>` 과 `<input>` 이 형제 요소일 때와 `<label>` 내부에 `<input>` 이 있는 경우가 어떻게 다르게 스타일되는지 확인할 수 있습니다. 이는 `&` 중첩 선택자를 생략했을 때의 영향을 보여줍니다.

> [!NOTE]
> 이 예제는 본래의 명세서를 구현하 브라우저와 현재의 중첩 명세를 구현한 브라우저에서의 다른 결과를 보여줍니다. 2023년 8월 이전에 크롬 혹은 사파리에서 구현된 명세에서는 `&` 중첩 선택자를 필요로 했습니다. 현재의 명세를 지원하는 브라우저라면 두 가지 예제 모두에서 두번째 예제와 동일한 결과를 보여줍니다.

#### 중첩 선택자를 사용하지 않는 경우

##### HTML

```html-nolint
<form>
  <label for="name">Name:
    <input type="text" id="name" />
  </label>
  <label for="email">email:</label>
  <input type="text" id="email" />
</form>
```

##### CSS

```css hidden
form,
label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

```css
input {
  /* label 외부에 있는 input 을 위한 스타일 */
  border: tomato 2px solid;
}
label {
  /* label 을 위한 스타일 */
  font-family: system-ui;
  font-size: 1.25rem;
  input {
    /* label 내부에 있는 input 을 위한 스타일 */
    border: blue 2px dashed;
  }
}
```

##### 결과

{{EmbedLiveSample('Without_nesting_selector','100%','120')}}

#### 중첩 선택자를 사용하는 경우

##### HTML

```html-nolint
<form>
  <label for="name">Name:
    <input type="text" id="name" />
  </label>
  <label for="email">email:</label>
  <input type="text" id="email" />
</form>
```

##### CSS

```css hidden
form,
label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

```css
input {
  /* label 외부에 있는 input 을 위한 스타일 */
  border: tomato 2px solid;
}
label {
  /* label 을 위한 스타일 */
  font-family: system-ui;
  font-size: 1.25rem;
  & input {
    /* label 내부에 있는 input 을 위한 스타일 */
    border: blue 2px dashed;
  }
}
```

##### 결과

{{EmbedLiveSample('With_nesting_selector','100%','120')}}

## 결합자

[CSS 결합자](/ko/docs/Learn_web_development/Core/Styling_basics/Combinators) 역시 `&` 중첩 선택자가 사용되거나 사용되지 않을 수 있습니다.

### 예제

#### 형제 결합자의 중첩

이 예제에서는, 각 `<h2>` 뒤 첫번째 단락이 CSS 중첩의 [인접 형제 결합자 (`+`)](/ko/docs/Web/CSS/Next-sibling_combinator) 로 타겟팅됩니다.

##### HTML

```html
<h2>Heading</h2>
<p>첫번째 단락입니다.</p>
<p>두번째 단락입니다.</p>
```

##### CSS

```css
h2 {
  color: tomato;
  + p {
    color: white;
    background-color: black;
  }
}
/* 이 코드는 & 중첩 선택자를 이용하여 작성할 수도 있습니다. */
/* 
h2 {
  color: tomato;
  & + p {
    color: white;
    background-color: black;
  }
}
*/
```

##### 결과

{{EmbedLiveSample('Nesting_the_sibling_combinator','100%','135')}}

## 결합 선택자

중첩 CSS 의 [결합 선택자](/ko/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) 를 사용할 때에는 `&` 중첩 선택자를 **반드시** 사용해야 합니다. 이는 브라우저가 `&` 중첩 선택자를 사용하지 않는 경우에 자동으로 선택자들 사이에 공백을 삽입하기 때문입니다.

`class="a b"` 를 가진 요소를 타겟하기 위해서는 `&` 중첩 선택자가 필요한데, 이를 사용하지 않으면 공백이 결합 선택자를 끊어버립니다.

```css
.a {
  /* class="a" 를 가진 요소를 위한 스타일 */
  .b {
    /* class="a"의 자손인 class="b" 요소에 대한 스타일 */
  }
  &.b {
    /* class="a b" 를 가진 요소를 위한 스타일 */
  }
}

/* 브라우저는 다음과 같이 파싱합니다. */
.a {
  /* class="a" 를 가진 요소를 위한 스타일 */
}
.a .b {
  /* class="a"의 자손인 class="b" 요소에 대한 스타일 */
}
.a.b {
  /* class="a b" 를 가진 요소를 위한 스타일 */
}
```

### 예제

#### 중첩과 결합 선택자들

이 예제에서 `&` 중첩 선택자는 다중 클래스를 가진 요소를 스타일하는 결합 선택자를 생성하기 위해 사용되었습니다.

##### HTML

```html
<div class="notices">
  <div class="notice">
    <h2 class="notice-heading">Notice</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
  <div class="notice warning">
    <h2 class="warning-heading">Warning</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
  <div class="notice success">
    <h2 class="success-heading">Success</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</div>
```

##### CSS

{{cssxref('CSS_flexible_box_layout', 'flexbox layout')}} 를 활용하여 행을 생성하기 위해 `.notices` 에 스타일을 적용합니다.

```css
.notices {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 90%;
  margin: auto;
}
```

아래 CSS 코드에서는, 중첩은 `&` 를 사용하거나 사용하지 않는 경우 모두에 결합 선택자를 생성하기 위해 사용되었습니다. 최상위 레벨의 선택자는 `class="notice"` 를 가진 요소에 기본적인 스타일을 정의합니다. `&` 중첩 선택자는 `class="notice warning"` 를 가진 요소 혹은 `class="notice success"` 를 가진 요소들에 결합 선택자를 생성하기 위해 사용되었습니다. 추가적으로, `&` 를 명시적으로 사용하지 않고 중첩을 이용한 결합 선택자를 생성하는 `.notice .notice-heading::before` 선택자도 확인할 수 있습니다.

```css
.notice {
  width: 90%;
  justify-content: center;
  border-radius: 1rem;
  border: black solid 2px;
  background-color: #ffc107;
  color: black;
  padding: 1rem;
  .notice-heading::before {
    /* `.notice .notice-heading::before` 와 동일합니다. */
    content: "ℹ︎ ";
  }
  &.warning {
    /* equivalent to `.notice.warning` */
    background-color: #d81b60;
    border-color: #d81b60;
    color: white;
    .warning-heading::before {
      /* `.notice.warning .warning-heading::before` 와 동일합니다. */
      content: "! ";
    }
  }
  &.success {
    /* `.notice.success` 와 동일합니다. */
    background-color: #004d40;
    border-color: #004d40;
    color: white;
    .success-heading::before {
      /* `.notice.success .success-heading::before` 와 동일합니다. */
      content: "✓ ";
    }
  }
}
```

##### 결과

{{EmbedLiveSample('Nesting_and_compound_selectors','100%', '455')}}

## 추가된 중첩 선택자

`&` 중첩 선택자는 중첩된 선택자에 추가될 수 있으며, 이는 맥락을 반대로 하는 효과를 부여합니다.

이는 부모 요소에 다른 클래스가 부여될 때 자식 요소의 스타일이 변경되는 경우에 유용하게 사용할 수 있습니다.

```html
<div>
  <span class="foo">text</span>
</div>
```

위와 대조하여,

```html
<div class="bar">
  <span class="foo">text</span>
</div>
```

```css
.foo {
  /* .foo 스타일 */
  .bar & {
    /* .bar .foo 스타일 */
  }
}
```

### 결과

#### 중첩 선택자 추가하기

이 예제에서는 3개의 카드가 있고, 그 중 하나는 특색이 있는 카드입니다. 이 카드들은 모두 완벽히 동일하지만, 특색 카드의 제목은 다른 색상을 가지고 있습니다. `&` 중첩 선택자를 추가함으로써 `h2` 의 스타일 내부에서 `.featured .h2` 를 사용하여 스타일을 중첩할 수 있습니다.

##### HTML

```html
<div class="wrapper">
  <article class="card">
    <h2>Card 1</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </article>
  <article class="card featured">
    <h2>Card 2</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </article>
  <article class="card">
    <h2>Card 3</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </article>
</div>
```

##### CSS

```css
.wrapper {
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  font-family: system-ui;
}
```

아래 CSS 에서는, `.card` 와 `.card h2` 에 대한 스타일을 생성하였습니다. 그리고 `h2` 스타일 블록 내에서는 `&` 중첩 선택자가 추가된 `.featured` 클래스를 중첩하여 `.card :is(.featured h2)` 에 대한 스타일을 생성하는데, 이는 `:is(.card h2):is(.featured h2)` 와 동일합니다.

```css
.card {
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  & h2 {
    /* `.card h2` 와 동일합니다. */
    color: slateblue;
    .featured & {
      /* `:is(.card h2):is(.featured h2)` 와 동일합니다. */
      color: tomato;
    }
  }
}
```

##### 결과

{{EmbedLiveSample('Appending_nesting_selector','100%','250')}}

## 연쇄 (불가능)

[Sass](https://sass-lang.com/) 와 같은 CSS 전처리기에서는 중첩을 활용해 문자열끼리 연결하여 새로운 클래스들을 만드는 것이 가능합니다. 이는 [BEM](https://getbem.com/naming/) 와 같은 CSS 방법론에서 흔한 일입니다.

```css example-bad
.component {
  &__child-element {
  }
}
/* In Sass this becomes */
.component__child-element {
}
```

> **경고** 이것은 CSS 중첩에서는 불가능한 일입니다. [결합자](/ko/docs/Learn_web_development/Core/Styling_basics/Combinators)가 사용되지 않는다면 중첩 선택자는 [타입 선택자](/ko/docs/Web/CSS/Type_selectors) 처럼 취급됩니다. 문자열 연쇄를 허용하면 이는 끊기게 됩니다.

[걸합 선택자](/ko/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) 에서는, 타입 선택자가 가장 처음으로 위치해야 합니다. ([타입 선택자](/ko/docs/Web/CSS/Type_selectors)인) `&Element` 를 사용하는 것은 CSS 선택자 뿐만 아니라, 전체 선택자 블록을 무효로 만듭니다. 타입 선택자가 가장 먼저 위치함에 따라 결합 선택자는 `Element&` 로 작성되어야만 합니다.

```css example-good
.my-class {
  element& {
  }
}

/* 브라우저는 이것을 결합 선택자가 되도록 파싱합니다. */
.my-class {
}
element.my-class {
}
```

## 무효한 중첩 스타일 규칙

중첩된 CSS 규칙이 무효한 경우, 해당 규칙에 포함되어 있는 모든 스타일들이 무시됩니다. 이는 부모나 이전 규칙들에는 영향을 미치지 않습니다.

다음 예제에서는, 유효하지 않은 선택자 (`%` 는 선택자로 사용되기에 유효하지 않은 문자) 가 있습니다. 이 선택자를 포함하는 규칙은 무시되지만, 이후 유효한 규칙들은 무시되지 않습니다.

```css example-bad
.parent {
  /* .parent 스타일은 유효합니다. */
  & %invalid {
    /* 무효한 %invalid 스타일들은 무시됩니다. */
  }
  & .valid {
    /* .parent .valid 스타일은 유효합니다. */
  }
}
```

## 같이 보기

- [CSS 중첩](/ko/docs/Web/CSS/CSS_nesting) 모듈
- [`&` 중첩 선택자](/ko/docs/Web/CSS/Nesting_selector)
- [`@` 규칙 중첩](/ko/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
- [중첩과 명시도](/ko/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
