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

우선, 간단한 목록 예제를 봅시다. 이 기사 전체에서 우리는 순서가 없는, 순서가 있는, 설명 목록을 살펴볼 것입니다 — 모두 유사한 스타일링 기능이 있으며, 일부 유형은 목록 유형과 다릅니다. 스타일이 지정되지 않은 예제는 [Github 에서 가능](http://mdn.github.io/learning-area/css/styling-text/styling-lists/unstyled-list.html) 합니다 ([소스 코드](https://github.com/mdn/learning-area/blob/master/css/styling-text/styling-lists/unstyled-list.html) 도 확인하십시오.)

목록 예제의 HTML 은 다음과 같습니다.

```html
<h2>장바구니</h2>

<p>참조 단락, 참조 단락, 참조 단락, 참조 단락, 참조 단락,
참조 단락, 참조 단락, 참조 단락, 참조 단락, 참조 단락.</p>

<ul>
  <li>허머스</li>
  <li>피타</li>
  <li>그린 샐러드</li>
  <li>할루미</li>
</ul>

<h2>레시피 목록</h2>

<p>참조 단락, 참조 단락, 참조 단락, 참조 단락, 참조 단락,
참조 단락, 참조 단락, 참조 단락, 참조 단락, 참조 단락.</p>

<ol>
  <li>피타를 토스트하고 식힌 다음 가장자리를 자릅니다.</li>
  <li>달라붙지 않는 얕은 팬에 할루미를 튀겨 양면이 갈색이 되도록 합니다.</li>
  <li>샐러드를 씻고 자릅니다.</li>
  <li>샐러드, 후무스, 튀긴 할루미로 피타 속을 채웁니다.</li>
</ol>

<h2>성분 설명 목록</h2>

<p>참조 단락, 참조 단락, 참조 단락, 참조 단락, 참조 단락,
참조 단락, 참조 단락, 참조 단락, 참조 단락, 참조 단락.</p>

<dl>
  <dt>허머스</dt>
  <dd>일반적으로 타히니, 레몬 주스, 소금, 마늘 및 기타 재료와 혼합된 병아리콩으로 만든 걸쭉한 딥/소스입니다.</dd>
  <dt>피타</dt>
  <dd>부드러우면서 살짝 누룩을 넣은 플랫브레드입니다.</dd>
  <dt>할루미</dt>
  <dd>일반적으로 염소/양의 우유로 만들어지며 녹는점이 평소보다 높은 반경성, 숙성되지 않은 소금물에 절인 치즈입니다.</dd>
  <dt>그린 샐러드</dt>
  <dd>많은 사람들이 케밥을 장식하는 데에 사용하는 녹색 건강 재료입니다.</dd>
</dl>
```

지금 라이브 예제로 이동하여 [브라우저 개발자 도구](/ko/docs/Learn/Common_questions/What_are_browser_developer_tools)를 사용하여 목록 요소를 조사하면, 몇 가지 스타일 기본값을 알 수 있습니다.:

- {{htmlelement("ul")}} 및 {{htmlelement("ol")}} 요소의 위쪽 및 아래쪽 {{cssxref("margin")}}은 16px(1em)이고 {{cssxref("padding-left")}}은 40px(2.5em)입니다.
- 목록 항목({{htmlelement("li")}} 요소)에는 간격에 대한 기본값이 설정되어 있지 않습니다.
- {{htmlelement("dl")}} 요소에는 16px(1em)의 상단 및 하단 {{cssxref("margin")}}이 있지만 안쪽 여백 세트는 없습니다.
- {{htmlelement("dd")}} 요소의 {{cssxref("margin-left")}}는 40px(2.5em)입니다.
- 참조용으로 포함된 {{htmlelement("p")}} 요소의 상단 및 하단 {{cssxref("margin")}}은 다른 목록 유형과 마찬가지로 16px(1em)입니다.

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

ul,ol,dl,p {
  font-size: 1.5rem;
}

li, p {
  line-height: 1.5;
}

/* Description list styles */


dd, dt {
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

값을 `inside`에 설정하면 글머리 기호가 줄 안쪽에 표시됩니다.

```css
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```

![an ordered list with the bullet points set to appear inside the list item text.](inner-bullets.png)

### Using a custom bullet image

The {{cssxref("list-style-image")}} property allows you to use a custom image for your bullet. The syntax is pretty simple:

```css
ul {
  list-style-image: url(star.svg);
}
```

However, this property is a bit limited in terms of controlling the position, size, etc. of the bullets. You are better off using the {{cssxref("background")}} family of properties, which you'll learn a lot more about in the [Styling boxes](/ko/docs/Learn/CSS/Styling_boxes) module. For now, here's a taster!

In our finished example, we have styled the unordered list like so (on top of what you've already seen above):

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

Here we've done the following:

- Set the {{cssxref("padding-left")}} of the {{htmlelement("ul")}} down from the default `40px` to `20px`, then set the same amount on the list items. This is so that overall the list items are still lined up with the order list items and the description list descriptions, but the list items have some padding for the background images to sit inside. If we didn't do this, the background images would overlap with the list item text, which would look messy.
- Set the {{cssxref("list-style-type")}} to `none`, so that no bullet appears by default. We're going to use {{cssxref("background")}} properties to handle the bullets instead.
- Inserted a bullet onto each unordered list item. The relevant properties are as follows:

  - {{cssxref("background-image")}}: This references the path to the image file you want to use as the bullet.
  - {{cssxref("background-position")}}: This defines where in the background of the selected element the image will appear — in this case we are saying `0 0`, which means the bullet will appear in the very top left of each list item.
  - {{cssxref("background-size")}}: This sets the size of the background image. We ideally want the bullets to be the same size as the list items (or very slightly smaller or larger). We are using a size of `1.6rem` (`16px`), which fits very nicely with the `20px` padding we've allowed for the bullet to sit inside — 16px plus 4px of space between the bullet and the list item text works well.
  - {{cssxref("background-repeat")}}: By default, background images repeat until they fill up the available background space. We only want one copy of the image inserted in each case, so we set this to a value of `no-repeat`.

This gives us the following result:

![an unordered list with the bullet points set as little star images](list_formatting.png)

### list-style shorthand

The three properties mentioned above can all be set using a single shorthand property, {{cssxref("list-style")}}. For example, the following CSS:

```css
ul {
  list-style-type: square;
  list-style-image: url(example.png);
  list-style-position: inside;
}
```

Could be replaced by this:

```css
ul {
  list-style: square url(example.png) inside;
}
```

The values can be listed in any order, and you can use one, two or all three (the default values used for the properties that are not included are `disc`, `none`, and `outside`). If both a `type` and an `image` are specified, the type is used as a fallback if the image can't be loaded for some reason.

## Controlling list counting

Sometimes you might want to count differently on an ordered list — e.g. starting from a number other than 1, or counting backwards, or counting in steps of more than 1. HTML and CSS have some tools to help you here.

### start

The {{htmlattrxref("start","ol")}} attribute allows you to start the list counting from a number other than 1. The following example:

```html
<ol start="4">
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>Fry the halloumi in a shallow, non-stick pan, until browned on both sides.</li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

Gives you this output:

{{ EmbedLiveSample('start', '100%', 150) }}

### reversed

The {{htmlattrxref("reversed","ol")}} attribute will start the list counting down instead of up. The following example:

```html
<ol start="4" reversed>
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>Fry the halloumi in a shallow, non-stick pan, until browned on both sides.</li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

Gives you this output:

{{ EmbedLiveSample('reversed', '100%', 150) }}

> **참고:** If there are more list items in a reversed list than the value of the `start` attribute, the count will continue to zero and then into negative values.

### value

The {{htmlattrxref("value","ol")}} attribute allows you to set your list items to specific numerical values. The following example:

```html
<ol>
  <li value="2">Toast pita, leave to cool, then slice down the edge.</li>
  <li value="4">Fry the halloumi in a shallow, non-stick pan, until browned on both sides.</li>
  <li value="6">Wash and chop the salad.</li>
  <li value="8">Fill pita with salad, hummus, and fried halloumi.</li>
</ol>
```

Gives you this output:

{{ EmbedLiveSample('value', '100%', 150) }}

> **참고:** Even if you are using a non-number {{cssxref("list-style-type")}}, you still need to use the equivalent numerical values in the `value` attribute.

## Active learning: Styling a nested list

In this active learning session, we want you to take what you've learned above and have a go at styling a nested list. We've provided you with the HTML, and we want you to:

1. Give the unordered list square bullets.
2. Give the unordered list items and the ordered list items a line height of 1.5 of their font-size.
3. Give the ordered list lower alphabetical bullets.
4. Feel free to play with the list example as much as you like, experimenting with bullet types, spacing, or whatever else you can find.

If you make a mistake, you can always reset it using the _Reset_ button. If you get really stuck, press the _Show solution_ button to see a potential answer.

```html hidden
<div class="body-wrapper" style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Input</h2>
  <textarea id="code" class="html-input" style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"><ul>
  <li>First, light the candle.</li>
  <li>Next, open the box.</li>
  <li>Finally, place the three magic items in the box, in this exact order, to complete the spell:
    <ol>
      <li>The book of spells</li>
      <li>The shiny rod</li>
      <li>The goblin statue</li>
    </ol>
  </li>
</ul></textarea>

  <h2>CSS Input</h2>
  <textarea id="code" class="css-input" style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></textarea>

  <h2>Output</h2>
  <div class="output" style="width: 90%;height: 12em;padding: 10px;border: 1px solid #0095dd;overflow: auto;"></div>
  <div class="controls">
    <input id="reset" type="button" value="Reset" style="margin: 10px 10px 0 0;">
    <input id="solution" type="button" value="Show solution" style="margin: 10px 0 0 10px;">
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

var styleElem = document.createElement('style');
var headElem = document.querySelector('head');
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", function() {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

solution.addEventListener("click", function() {
  htmlInput.value = htmlCode;
  cssInput.value = 'ul {\n  list-style-type: square;\n}\n\nul li, ol li {\n  line-height: 1.5;\n}\n\nol {\n  list-style-type: lower-alpha\n}';
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code', 700, 800) }}

## See also

CSS counters provide advanced tools for customizing list counting and styling, but they are quite complex. We recommend looking into these if you want to stretch yourself. See:

- {{cssxref("@counter-style")}}
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}

## Summary

Lists are relatively easy to get the hang of styling once you know a few associated basic principles and specific properties. In the next article we'll get on to link styling techniques.

{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}
