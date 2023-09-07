---
title: 목록 스타일링
slug: Learn/CSS/Styling_text/Styling_lists
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}

[목록](/en-US/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#Lists) 은 대부분 다른 텍스트처럼 작동하지만, 알아야 할 목록과 관련된 몇 가지 CSS 속성과 고려해야 할 모범 사례가 있습니다. 이 기사는 모든 것을 설명합니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">전제조건:</th>
      <td>
        기본적인 컴퓨터의 이해, HTML 기본 (
        <a href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 소개</a
        > 둘러보기), CSS 기본 (
        <a href="/ko/docs/Learn/CSS/Introduction_to_CSS"
          >CSS 소개</a
        > 둘러보기),
        <a href="/ko/docs/Learn/CSS/Styling_text/Fundamentals"
          >CSS 글꼴과 폰트 기본</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>목록 스타일과 관련된 모범 사례 및 속성에 익숙해지기.</td>
    </tr>
  </tbody>
</table>

## 간단한 목록 예제

우선, 간단한 목록 예제를 봅시다. 이 기사 전체에서 우리는 순서가 없는, 순서가 있는, 설명 목록을 살펴볼 것입니다. 모두 유사한 스타일링 기능이 있으며, 일부 유형은 목록 유형과 다릅니다. 스타일이 지정되지 않은 예제는 [Github 에서 가능](http://mdn.github.io/learning-area/css/styling-text/styling-lists/unstyled-list.html) 합니다 ([소스 코드](https://github.com/mdn/learning-area/blob/master/css/styling-text/styling-lists/unstyled-list.html) 도 확인하십시오.)

목록 예제의 HTML 은 다음과 같습니다.

```html
<h2>장바구니</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<ul>
  <li>허머스</li>
  <li>피타</li>
  <li>그린 샐러드</li>
  <li>할루미</li>
</ul>

<h2>레시피 목록</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<ol>
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>

<h2>성분 설명 목록</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<dl>
  <dt>Hummus</dt>
  <dd>
    A thick dip/sauce generally made from chick peas blended with tahini, lemon
    juice, salt, garlic, and other ingredients.
  </dd>
  <dt>Pita</dt>
  <dd>A soft, slightly leavened flatbread.</dd>
  <dt>Halloumi</dt>
  <dd>
    A semi-hard, unripened, brined cheese with a higher-than-usual melting
    point, usually made from goat/sheep milk.
  </dd>
  <dt>Green salad</dt>
  <dd>That green healthy stuff that many of us just use to garnish kebabs.</dd>
</dl>
```

지금 라이브 예제로 이동하여 [브라우저 개발자 도구](/ko/docs/Learn/Common_questions/What_are_browser_developer_tools)를 사용하여 목록 요소를 조사하면, 몇 가지 스타일 기본값을 알 수 있습니다.:

- {{htmlelement("ul")}} 및 {{htmlelement("ol")}} 요소의 위쪽 및 아래쪽 {{cssxref("margin")}}은 `16px`(`1em`)이고 {{cssxref("padding-left")}}은 `40px`(`2.5em`)입니다.
- 목록 항목({{htmlelement("li")}} 요소)에는 간격에 대한 기본값이 설정되어 있지 않습니다.
- {{htmlelement("dl")}} 요소에는 `16px`(`1em`)의 상단 및 하단 {{cssxref("margin")}}이 있지만 안쪽 여백 세트는 없습니다.
- {{htmlelement("dd")}} 요소의 {{cssxref("margin-left")}}는 `40px`(`2.5em`)입니다.
- 참조용으로 포함된 {{htmlelement("p")}} 요소의 상단 및 하단 {{cssxref("margin")}}은 다른 목록 유형과 마찬가지로 `16px`(`1em`)입니다.

## 목록 간격 처리

목록 스타일을 지정할 때 스타일을 조정하여 주변 요소(예: 단락 및 이미지, 때로는 수직 리듬이라고도 함)와 동일한 세로 간격을 유지하고 서로 동일한 가로 간격을 유지해야 합니다(Github에서 완성된 [스타일 예제](http://mdn.github.io/learning-area/css/styling-text/styling-lists/)를 볼 수 있으며 [소스 코드](https://github.com/mdn/learning-area/blob/master/css/styling-text/styling-lists/index.html)도 찾을 수 있음).

텍스트 스타일 및 간격에 사용되는 CSS는 다음과 같습니다.

```css
/* General styles */

html {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 10px;
}

h2 {
  font-size: 2rem;
}

ul,
ol,
dl,
p {
  font-size: 1.5rem;
}

li,
p {
  line-height: 1.5;
}

/* Description list styles */

dd,
dt {
  line-height: 1.5;
}

dt {
  font-weight: bold;
}

dd {
  margin-bottom: 1.5rem;
}
```

- 첫 번째 규칙은 사이트 전체 글꼴과 기준 글꼴 크기를 10px로 설정합니다. 이는 페이지의 모든 항목에 상속됩니다.
- 두번째 규칙과 세번째 규칙은 제목, 다양한 목록 유형(목록 요소의 자식이 이를 상속함) 및 단락에 대한 상대 글꼴 크기를 설정합니다. 즉, 각 단락과 목록은 동일한 글꼴 크기와 위쪽 및 아래쪽 간격을 가지므로 세로 리듬을 일관되게 유지하는 데 도움이 됩니다.
- 네번째 규칙은 단락과 목록 항목에 동일한 {{cssxref("line-height")}}를 설정하므로 단락과 각 개별 목록 항목은 줄 사이의 간격이 동일합니다. 이것은 또한 수직 리듬을 일관되게 유지하는 데 도움이 됩니다.
- 다섯번째 규칙과 여섯번째 규칙은 설명 목록에 적용됩니다. 단락 및 목록 항목에서와 마찬가지로 설명 목록 용어 및 설명에 동일한 `line-height`를 설정했습니다. 다시 말하지만 일관성이 좋습니다! 또한 설명 용어를 굵은 글꼴로 만들어 시각적으로 더 쉽게 눈에 띕니다.

## 목록별 스타일

이제 목록에 대한 일반적인 간격 기술을 살펴보았습니다. 이제 몇 가지 목록 관련 속성을 살펴보겠습니다. {{htmlelement("ul")}} 또는 {{htmlelement("ol")}} 요소에 설정할 수 있는 세 가지 속성으로 시작해야 합니다.

- {{cssxref("list-style-type")}}: 목록에 사용할 글머리 기호 유형을 설정합니다. 예를 들어 정렬되지 않은 목록의 경우 사각형 또는 원형 글머리 기호, 순서가 지정된 목록의 경우 숫자, 문자 또는 로마 숫자입니다.
- {{cssxref("list-style-position")}}: 글머리 기호가 목록 항목 내부에 표시되는지 아니면 각 항목 시작 전에 목록 항목 외부에 표시되는지 설정합니다.
- {{cssxref("list-style-image")}}: 간단한 사각형이나 원이 아닌 글머리 기호에 대한 사용자 지정 이미지를 사용할 수 있습니다.

### 글머리 기호 스타일

위에서 언급했듯이, {{cssxref("list-style-type")}} 속성을 사용하면 글머리 기호에 사용할 글머리 기호 유형을 설정할 수 있습니다. 예시에서는 대문자 로마 숫자를 사용하도록 정렬된 목록을 다음과 같이 설정했습니다.

```css
ol {
  list-style-type: upper-roman;
}
```

이는 다음과 같은 모습을 보여줍니다.

![an ordered list with the bullet points set to appear outside the list item text.](outer-bullets.png)

{{cssxref("list-style-type")}} 참조 페이지를 확인하면 더 많은 옵션을 찾을 수 있습니다.

### 글머리 기호 위치

{{cssxref("list-style-position")}} 속성은 글머리 기호가 목록 항목 내부에 표시되는지 또는 각 항목 시작 전에 목록 항목 외부에 표시되는지를 설정합니다. 기본값은 `outside`이며, 위에 표시된 것처럼 글머리 기호가 목록 항목 외부에 위치합니다.

값을 `inside`로 설정하면 글머리 기호가 줄 안쪽에 표시됩니다.

```css
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

![an ordered list with the bullet points set to appear inside the list item text.](inner-bullets.png)

### 맞춤 글머리 기호 이미지 사용

{{cssxref("list-style-image")}} 속성을 사용하면 글머리 기호에 맞춤 이미지를 사용할 수 있습니다. 구문은 매우 간단합니다.

```css
ul {
  list-style-image: url(star.svg);
}
```

그러나 이 속성은 글머리 기호의 위치, 크기 등을 제어하는 ​​측면에서 약간 제한됩니다. [스타일 지정 상자](/ko/docs/Learn/CSS/Styling_boxes) 모듈에서 자세히 알아볼 {{cssxref("background")}} 속성 계열을 사용하는 것이 좋습니다. 지금은 맛보기가 있습니다!

완성된 예제에서는 정렬되지 않은 목록의 스타일을 다음과 같이 지정했습니다.(위에서 이미 본 것 위에)

```css
ul {
  padding-left: 2rem;
  list-style-type: none;
}

ul li {
  padding-left: 2rem;
  background-image: url(star.svg);
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```

여기서 우리는 다음을 수행했습니다.

- {{htmlelement("ul")}}의 {{cssxref("padding-left")}}를 기본 `40px`에서 `20px`로 아래로 설정한 다음 목록 항목에 동일한 양을 설정합니다. 이는 전체 목록 항목이 여전히 주문 목록 항목 및 설명 목록 설명과 정렬되지만 목록 항목에는 배경 이미지가 내부에 놓일 수 있도록 약간의 패딩이 있습니다. 이렇게 하지 않으면 배경 이미지가 목록 항목 텍스트와 겹쳐 지저분해 보일 수 있습니다.
- 기본적으로 글머리 기호가 표시되지 않도록 {{cssxref("list-style-type")}}을 `none`으로 설정합니다. 대신 글머리 기호를 처리하기 위해 {{cssxref("background")}} 속성을 사용할 것입니다.
- 순서가 지정되지 않은 각 목록 항목에 글머리 기호를 삽입했습니다. 관련 속성은 다음과 같습니다.
  - {{cssxref("background-image")}}: 글머리 기호로 사용하려는 이미지 파일의 경로를 참조합니다.
  - {{cssxref("background-position")}}: 선택한 요소의 배경에서 이미지가 나타날 위치를 정의합니다. 이 경우에는 `0 0`을 의미합니다. 이는 글머리 기호가 각 목록 항목의 왼쪽 상단에 나타남을 의미합니다.
  - {{cssxref("background-size")}}: 배경 이미지의 크기를 설정합니다. 우리는 이상적으로 글머리 기호가 목록 항목과 같은 크기(또는 아주 약간 작거나 더 크게)를 원합니다. 우리는 `1.6rem`(`16px`)의 크기를 사용하고 있는데, 이는 글머리 기호가 안쪽에 놓이도록 허용한 `20px` 안쪽 여백과 매우 잘 맞습니다.
  - {{cssxref("background-repeat")}}: 기본적으로 배경 이미지는 사용 가능한 배경 공간을 채울 때까지 반복됩니다. 각각의 경우에 하나의 이미지 사본만 삽입하기를 원하므로 `no-repeat` 값으로 설정합니다.

결과는 다음과 같습니다.

![an unordered list with the bullet points set as little star images](list_formatting.png)

### 목록 스타일 속기

위에서 언급한 세 가지 속성은 모두 {{cssxref("list-style")}}이라는 단일 속기 속성을 사용하여 설정할 수 있습니다. 예를 들어 다음 CSS는 다음과 같습니다.

```css
ul {
  list-style-type: square;
  list-style-image: url(example.png);
  list-style-position: inside;
}
```

다음으로 대체할 수 있습니다.

```css
ul {
  list-style: square url(example.png) inside;
}
```

값은 임의의 순서로 나열할 수 있으며 1개, 2개 또는 3개 모두를 사용할 수 있습니다(포함되지 않은 속성에 사용되는 기본값은 `disc`, `none`, `outside`임). `type`과 `image`가 모두 지정된 경우 어떤 이유로 이미지를 로드할 수 없는 경우 해당 유형이 폴백으로 사용됩니다.

## 목록 계산 제어

때로는 순서가 지정된 목록에서 다르게 계산하고 싶을 수 있습니다. 1이 아닌 숫자부터 시작하거나 거꾸로 세거나 1보다 많은 단계로 세십시오. HTML과 CSS에는 여기에서 도움이 되는 몇 가지 도구가 있습니다.

### start

{{htmlattrxref("start","ol")}} 속성을 사용하면 1이 아닌 숫자부터 카운트하는 목록을 시작할 수 있습니다. 예시는 다음과 같습니다.

```html
<ol start="4">
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

다음과 같은 출력을 제공합니다.

{{ EmbedLiveSample('start', '100%', 150) }}

### reversed

{{htmlattrxref("reversed","ol")}} 속성은 목록을 위로 카운트하는 대신 카운트 다운을 시작합니다. 예시는 다음과 같습니다.

```html
<ol start="4" reversed>
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

다음과 같은 출력을 제공합니다.

{{ EmbedLiveSample('reversed', '100%', 150) }}

> **참고:** 반전된 목록에 `start` 속성 값보다 더 많은 목록 항목이 있는 경우 개수는 계속해서 0이 된 다음 음수 값이 됩니다.

### value

{{htmlattrxref("value","ol")}} 속성을 사용하면 목록 항목을 특정 숫자 값으로 설정할 수 있습니다. 예시는 다음과 같습니다.

```html
<ol>
  <li value="2">Toast pita, leave to cool, then slice down the edge.</li>
  <li value="4">
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li value="6">Wash and chop the salad.</li>
  <li value="8">Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

다음과 같은 출력을 제공합니다.

{{ EmbedLiveSample('value', '100%', 150) }}

> **참고:** 숫자가 아닌 {{cssxref("list-style-type")}}을 사용하는 경우에도 `value` 속성에 동일한 숫자 값을 사용해야 합니다.

## 능동적 학습: 중첩 목록 스타일 지정

이 활성 학습 세션에서는 위에서 배운 내용을 사용하여 중첩 목록의 스타일을 지정해 보기를 바랍니다. HTML을 제공했고, 그 다음을 수행하시기 바랍니다.

1. 정렬되지 않은 목록에 사각형 글머리 기호를 지정합니다.
2. 정렬되지 않은 목록 항목과 정렬된 목록 항목에 글꼴 크기의 1.5 `line-height`를 지정합니다.
3. 순서가 지정된 목록에 하위 알파벳 글머리 기호를 지정합니다.
4. 글머리기호 유형, 간격 또는 찾을 수 있는 모든 항목을 실험하면서 목록 예제를 원하는 만큼 자유롭게 사용해 보십시오.

실수한 경우 _재설정_ 버튼을 사용하여 언제든지 재설정할 수 있습니다. 정말 막히면 _해결 방법 표시_ 버튼을 눌러 잠재적인 답변을 확인하세요.

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Input</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
<ul>
  <li>First, light the candle.</li>
  <li>Next, open the box.</li>
  <li>Finally, place the three magic items in the box, in this exact order, to complete the spell:
    <ol>
      <li>The book of spells</li>
      <li>The shiny rod</li>
      <li>The goblin statue</li>
    </ol>
  </li>
</ul></textarea
  >

  <h2>CSS Input</h2>
  <textarea
    id="code"
    class="css-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></textarea>

  <h2>Output</h2>
  <div
    class="output"
    style="width: 90%;height: 12em;padding: 10px;border: 1px solid #0095dd;overflow: auto;"></div>
  <div class="controls">
    <input
      id="reset"
      type="button"
      value="Reset"
      style="margin: 10px 10px 0 0;" />
    <input
      id="solution"
      type="button"
      value="Show solution"
      style="margin: 10px 0 0 10px;" />
  </div>
</div>
```

```js hidden
var htmlInput = document.querySelector(".html-input");
var cssInput = document.querySelector(".css-input");
var reset = document.getElementById("reset");
var htmlCode = htmlInput.value;
var cssCode = cssInput.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

var styleElem = document.createElement("style");
var headElem = document.querySelector("head");
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", function () {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

solution.addEventListener("click", function () {
  htmlInput.value = htmlCode;
  cssInput.value =
    "ul {\n  list-style-type: square;\n}\n\nul li, ol li {\n  line-height: 1.5;\n}\n\nol {\n  list-style-type: lower-alpha\n}";
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code', 700, 800) }}

## 또한

CSS counters는 목록 계산 및 스타일 지정을 사용자 지정하기 위한 고급 도구를 제공하지만 매우 복잡합니다. 실력을 늘리고 싶다면 다음을 살펴보는 것이 좋습니다.

- {{cssxref("@counter-style")}}
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}

## 요약

몇 가지 관련 기본 원칙과 특정 속성을 알고 있으면 목록의 스타일을 비교적 쉽게 익힐 수 있습니다. 다음 본문에서는 스타일링 기술을 연결하는 방법을 살펴보겠습니다.

{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}
