---
title: text-overflow
slug: Web/CSS/Reference/Properties/text-overflow
original_slug: Web/CSS/text-overflow
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

**`text-overflow`** [CSS](/ko/docs/Web/CSS) 속성은 숨겨진 넘치는 콘텐츠를 사용자에게 어떻게 표시할지 설정합니다. 이는 말줄임표 (`…`)를 표시하여 생략되거나, 사용자 지정 문자열로 대체될 수 있습니다.

{{InteractiveExample("CSS Demo: text-overflow")}}

```css interactive-example-choice
text-overflow: clip;
```

```css interactive-example-choice
text-overflow: ellipsis;
```

```css interactive-example-choice
text-overflow: "-";
```

```css interactive-example-choice
text-overflow: "";
```

```html interactive-example
<section id="default-example">
  <div id="example-element-container">
    <p id="example-element">"Is there any tea on this spaceship?" he asked.</p>
  </div>
</section>
```

```css interactive-example
#example-element-container {
  width: 100%;
  max-width: 18em;
}

#example-element {
  line-height: 50px;
  border: 1px solid #c5c5c5;
  overflow: hidden;
  white-space: nowrap;
  font-family: sans-serif;
  padding: 0 0.5em;
  text-align: left;
}
```

`text-overflow` 속성은 넘침을 유발하지는 않습니다. 컨테이너에서 텍스트가 넘치게 하려면 {{cssxref("overflow")}} 나 {{cssxref("white-space")}} 와 같은 다른 CSS 속성들을 적용해야 합니다. 아래는 예시입니다.

```css
overflow: hidden;
white-space: nowrap;
```

`text-overflow` 속성은 블록 컨텐이너 요소에서 인라인 진행 방향으로 넘치는 콘텐츠에만 영향을 미칩니다. (예시로, 박스 하단에서 넘치는 텍스트에는 영향을 주지 않습니다.)

## 구문

```css
text-overflow: clip;
text-overflow: ellipsis ellipsis;
text-overflow: ellipsis " [..]";

/* 전역 값 */
text-overflow: inherit;
text-overflow: initial;
text-overflow: revert;
text-overflow: revert-layer;
text-overflow: unset;
```

`text-overflow` 속성은 한 개 혹은 두 개의 값을 이용하여 설정할 수 있습니다. 만일 한 개의 값이 주어진다면 이는 줄의 끝부분 (왼쪽에서 오른쪽으로 읽는 텍스트라면 오른쪽, 오른쪽에서 왼쪽으로 읽는 텍스트라면 왼쪽)에서 넘침을 설정합니다. 두 개의 값이 주어진다면 첫번째 값은 줄의 왼쪽 끝부분을, 두번째 값은 줄의 오른쪽 끝부분의 넘침을 설정합니다. 이 속성은 키워드 값 (`clip` 혹은 `ellipsis`) 또는 문자열 값을 허용합니다.

### 값

- `clip`
  - : 이 속성의 기본 값입니다. 이 키워드 값은 [콘텐츠 영역](/ko/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) 의 한계에서 텍스트를 자릅니다. 그렇기 때문에 문자열 중간에서 줄바꿈이 일어날 수 있습니다. `text-overflow: '';` 가 브라우저에서 지원된다면, 빈 문자열로 `text-overflow` 를 설정하여 문자열과 문자열 사이에서 잘리도록 할 수 있습니다.
- `ellipsis`
  - : 이 키워드는 말줄임표 (`'…'`, `U+2026 HORIZONTAL ELLIPSIS`) 를 잘린 텍스트에 대치합니다. 말줄임표는 [콘텐츠 영역](/ko/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) 안에서 표시되고, 표시되는 텍스트의 양을 줄입니다. 말줄임표를 표시할 여유 공간이 없다면 이 역시 생략됩니다.
- 문자열
  - : {{cssxref("&lt;string&gt;", "문자열")}} 은 생략된 텍스트를 나타내는 데에 사용됩니다. 문자열은 [콘텐츠 영역](/ko/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) 안에서 표시되고, 표시되는 텍스트의 길이를 줄입니다. 문자열을 표시할 여유 공간이 없다면 이 역시 생략됩니다.

## 형식 정의

{{CSSInfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 단일 값 구문

이 예제는 `text-overflow` 가 왼쪽에서 오른쪽으로 읽는 텍스트 단락과, 오른쪽에서 왼쪽으로 읽는 단락에서 다른 값이 적용됨을 보여줍니다.

#### HTML

```html
<div class="ltr">
  <h2>왼쪽에서 오른쪽으로 읽는 텍스트</h2>
  <pre>clip</pre>
  <p class="overflow-clip">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>ellipsis</pre>
  <p class="overflow-ellipsis">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>" [..]"</pre>
  <p class="overflow-string">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</div>

<div class="rtl">
  <h2>오른쪽에서 왼쪽으로 읽는 텍스트</h2>
  <pre>clip</pre>
  <p class="overflow-clip">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>ellipsis</pre>
  <p class="overflow-ellipsis">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <pre>" [..]"</pre>
  <p class="overflow-string">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</div>
```

#### CSS

```css
p {
  width: 200px;
  border: 1px solid;
  padding: 2px 5px;

  /* 아래 두 속성은 text-overflow의 필수값입니다. */
  white-space: nowrap;
  overflow: hidden;
}

.overflow-clip {
  text-overflow: clip;
}

.overflow-ellipsis {
  text-overflow: ellipsis;
}

.overflow-string {
  text-overflow: " [..]";
}

body {
  display: flex;
  justify-content: space-around;
}

.ltr > p {
  direction: ltr;
}

.rtl > p {
  direction: rtl;
}
```

#### 결과

{{EmbedLiveSample('One-value_syntax', 600, 320)}}

### 두 개의 값 구문

아래는 `text-overflow` 의 두 개의 값 구문에 대한 예제이며, 텍스트의 시작과 끝 부분에 대해 서로 다른 넘침을 정의할 수 있습니다.

효과를 보여주기 위해서는 텍스트의 시작 부분도 숨겨지도록 줄을 스크롤해야 합니다.

#### HTML

```html
<pre>clip clip</pre>
<p class="overflow-clip-clip">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<pre>clip ellipsis</pre>
<p class="overflow-clip-ellipsis">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<pre>ellipsis ellipsis</pre>
<p class="overflow-ellipsis-ellipsis">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<pre>ellipsis " [..]"</pre>
<p class="overflow-ellipsis-string">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
```

#### CSS

```css
p {
  width: 200px;
  border: 1px solid;
  padding: 2px 5px;

  /* 아래 두 속성은 text-overflow의 필수값입니다. */
  white-space: nowrap;
  overflow: scroll;
}

.overflow-clip-clip {
  text-overflow: clip clip;
}

.overflow-clip-ellipsis {
  text-overflow: clip ellipsis;
}

.overflow-ellipsis-ellipsis {
  text-overflow: ellipsis ellipsis;
}

.overflow-ellipsis-string {
  text-overflow: ellipsis " [..]";
}
```

#### JavaScript

```js
// 단락을 스크롤하여 시작 부분을 숨겨보세요.
const paras = document.querySelectorAll("p");

for (const para of paras) {
  para.scroll(100, 0);
}
```

#### 결과

{{EmbedLiveSample('Two-value_syntax', 600, 360)}}

## 명세서

{{Specifications}}

이 인터페이스의 이전 버전은 Candidate Recommendation 상태에 도달했습니다. 위험 목록에 없던 일부 기능들을 제거해야 했기 때문에, 명세는 작업 초안 수준으로 강등되었습니다. 이는 브라우저들이 CR 상태가 아님에도 불구하고 이 속성을 접두사 없이 구현한 이유입니다.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 관련 CSS 속성: {{cssxref("overflow")}}, {{cssxref("white-space")}}
- 단어의 줄바꿈을 제어하는 CSS 속성들: {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}}
