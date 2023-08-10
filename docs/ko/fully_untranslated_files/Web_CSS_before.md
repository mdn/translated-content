---
title: "::before (:before)"
slug: Web/CSS/::before
---

{{CSSRef}}

CSS에서, **`::before`** 는 선택한 요소의 첫 자식으로 [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)를 하나 생성합니다. 보통 {{cssxref("content")}} 속성과 함께 짝지어, 요소에 장식용 콘텐츠를 추가할 때 사용합니다. 기본값은 인라인입니다.

```css
/* 링크 앞에 하트 추가 */
a::after {
  content: "♥";
}
```

> **참고:** `::before`와 `::after`로 생성한 의사 요소는 [원본 요소의 서식 박스에 포함되므로](https://www.w3.org/TR/CSS2/generate.html#before-after-content), {{HTMLElement("img")}}나 {{HTMLElement("br")}} 등 [대체 요소](/ko/docs/Web/CSS/Replaced_element)에 적용할 수 없습니다.

## 구문

{{csssyntax}}

> **참고:** [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)와 [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)를 구분하기 위해 CSS3부터`::before` 구문을 도입했습니다. 그러나 브라우저는 CSS2 구문인 `:before`도 허용합니다.

## 예제

### 인용 표시 추가

One simple example of using `::before` pseudo-elements is to provide quotation marks. Here we use both `::before` and `{{Cssxref("::after")}}` to insert quotation characters.

#### HTML

```html
<q>Some quotes,</q> he said, <q>are better than none.</q>
```

#### CSS

```css
q::before {
  content: "«";
  color: blue;
}

q::after {
  content: "»";
  color: red;
}
```

#### Result

{{EmbedLiveSample('인용_표시_추가', '500', '50', '')}}

### 장식 예제

We can style text or images in the {{cssxref("content")}} property almost any way we want.

#### HTML

```html
<span class="ribbon">Notice where the orange box is.</span>
```

#### CSS

```css
.ribbon {
  background-color: #5bc8f7;
}

.ribbon::before {
  content: "Look at this orange box.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### Result

{{EmbedLiveSample('장식_예제', 450, 60)}}

### 할 일 목록

In this example we will create a simple to-do list using pseudo-elements. This method can often be used to add small touches to the UI and improve user experience.

#### HTML

```html
<ul>
  <li>Buy milk</li>
  <li>Take the dog for a walk</li>
  <li>Exercise</li>
  <li>Write code</li>
  <li>Play music</li>
  <li>Relax</li>
</ul>
```

#### CSS

```css
li {
  list-style-type: none;
  position: relative;
  margin: 2px;
  padding: 0.5em 0.5em 0.5em 2em;
  background: lightgrey;
  font-family: sans-serif;
}

li.done {
  background: #ccff99;
}

li.done::before {
  content: "";
  position: absolute;
  border-color: #009933;
  border-style: solid;
  border-width: 0 0.3em 0.25em 0;
  height: 1em;
  top: 1.3em;
  left: 0.6em;
  margin-top: -1em;
  transform: rotate(45deg);
  width: 0.5em;
}
```

#### JavaScript

```js
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("done");
    }
  },
  false,
);
```

Here is the above code example running live. Note that there are no icons used, and the check-mark is actually the `::before` that has been styled in CSS. Go ahead and get some stuff done.

#### Result

{{EmbedLiveSample('할_일_목록', 400, 300)}}

### 특수문자

As this is CSS; not HTML, you can **not** use markup entities in content values. If you need to use a special character, and can not enter it literally into your CSS content string, use a unicodeescape sequence, consistingof a backslash followed by the hexadecimal unicode value.

#### HTML

```html
<ol>
  <li>Crack Eggs into bowl</li>
  <li>Add Milk</li>
  <li>Add Flour</li>
  <li aria-current="step">Mix thoroughly into a smooth batter</li>
  <li>Pour a ladleful of batter onto a hot, greased, flat frying pan</li>
  <li>Fry until the top of the pancake loses its gloss</li>
  <li>Flip it over and fry for a couple more minutes</li>
  <li>serve with your favorite topping</li>
</ol>
```

#### CSS

```css
li {
  padding: 0.5em;
}

li[aria-current="step"] {
  font-weight: bold;
}

li[aria-current="step"]::after {
  content: " \21E6"; /* Hexadecimal for Unicode Leftwards white arrow*/
  display: inline;
}
```

#### Result

{{EmbedLiveSample('특수문자', 400, 200)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{Cssxref("::after")}}
- {{Cssxref("content")}}
