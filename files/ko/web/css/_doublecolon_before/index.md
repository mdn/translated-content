---
title: ::before
slug: Web/CSS/::before
l10n:
  sourceCommit: 632289fcc10e926d166e1b49e5ba3505de182856
---

{{CSSRef}}

CSS에서, **`::before`** 는 선택된 요소의 첫번째 자식인 [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)를 생성합니다. 이는 종종 {{cssxref("content")}} 속성을 활용하여 요소에 장식 콘텐츠를 추가하는 데에 사용됩니다. 기본적으로 인라인 형식입니다.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-before.html", "tabbed-standard")}}

> [!NOTE] > `::before` 와 `::after` 로 생성된 의사 요소들은 마치 해당 요소가 적용된 요소의 직속 자식인 것처럼 생성된 박스입니다. 즉, 원본 요소의 직계 자식이기 때문에 {{htmlelement("img")}} 처럼 콘텐츠가 CSS 서식 모델의 범위를 벗어나는 [대체 요소](/ko/docs/Web/CSS/Replaced_element) 에는 적용할 수 없습니다.

## 구문

```css-nolint
::before {
  content: /* value */;
  /* properties */
}
```

[`content`](/ko/docs/Web/CSS/content) 속성이 정의되지 않았거나 유효하지 않은 값을 가지거나, 값으로 `normal` 이나 `none` 을 가지고 있다면 `::before` 가상 요소는 렌더되지 않고 `display: none` 이 설정된 것처럼 동작합니다.

> **Note:** [선택자 레벨 3](https://drafts.csswg.org/selectors-3/#gen-content) 에서는 콜론 표기법인 `::before` 를 [의사 요소](/ko/docs/Web/CSS/Pseudo-elements) 의 [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes) 의 하나로 소개합니다. 브라우저는 세미콜론 표기인 `:before` 도 수용하며, 이는 CSS2에서 소개되어 있습니다.

## 접근성

스크린 리더에서는 원활히 접근되지 않기 때문에 콘텐츠를 추가하기 위해 `::before` 의사 요소를 사용하는 것은 권장되지 않습니다.

## 예제

### 인용 표시 추가하기

아래는 `::before` 의사 요소를 사용하여 인용 표시를 추가하는 예제입니다. 인용 문자를 추가하기 위해 `::before` 와 {{Cssxref("::after")}} 를 모두 사용합니다.

#### HTML

```html
<q>Some quotes</q>, he said, <q>are better than none.</q>
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

#### 결과

{{EmbedLiveSample('Adding_quotation_marks', '500', '50')}}

### 장식 예제

{{cssxref("content")}} 속성 내의 텍스트나 이미지 또한 원하는대로 수정할 수 있습니다.

#### HTML

```html
<span class="ribbon">오렌지색 박스가 어디에 있는지 보세요.</span>
```

#### CSS

```css
.ribbon {
  background-color: #5bc8f7;
}

.ribbon::before {
  content: "여기 오렌지색 박스가 있습니다.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### 결과

{{EmbedLiveSample('Decorative_example', 450, 60)}}

### 투두 리스트

이번 예제에서는 의사 요소를 활용하여 투두 리스트를 만듭니다. 여기서는 적은 공수를 들여 UI 와 사용자 경험을 향상시켰습니다.

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
const list = document.querySelector("ul");
list.addEventListener(
  "click",
  (ev) => {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("done");
    }
  },
  false,
);
```

위 코드가 실행된 이후의 결과를 확인할 수 있습니다. 아무런 아이콘도 사용되지 않았고, 체크 표시는 보이는 바와 같이 CSS 내의 스타일에서 `::before` 에 설정된 것입니다. 몇 가지 일을 완료로 처리해 보세요.

#### 결과

{{EmbedLiveSample('To-do_list', 400, 300)}}

### 특수 문자

HTML이 아니라 CSS라는 특성 때문에 마크업 요소들을 콘텐츠 값에 사용할 수 없습니다. 만일 특수 문자를 사용해야 하는데 CSS 콘텐츠 문자열에 직접 입력할 수 없는 경우, 백슬래시와 16진수 유니코드 값으로 구성된 유니코드 이스케이프 시퀀스를 사용하십시오.

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

#### 결과

{{EmbedLiveSample('Special_characters', 400, 200)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{Cssxref("::after")}}
- {{Cssxref("content")}}
