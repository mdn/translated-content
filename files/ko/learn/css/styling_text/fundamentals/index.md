---
title: 기본적인 텍스트 및 글꼴 스타일링
slug: Learn/CSS/Styling_text/Fundamentals
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text")}}

이 기사에서는 {{glossary("CSS")}} 를 사용하여 텍스트 스타일링을 마스터하기 위한 과정을 시작합니다. 여기에서는 글꼴 굵기, 종류 및 스타일, 글꼴 약식 (shorthand), 텍스트 정렬 및 기타 효과, 줄 및 문자 간격 설정을 포함하여, 텍스트/글꼴 스타일링의 모든 기본 사항에 대해 자세히 설명합니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">전제조건</th>
      <td>
        Basic computer literacy, HTML basics (study
        <a href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >), CSS basics (study
        <a href="/ko/docs/Learn/CSS/Introduction_to_CSS"
          >Introduction to CSS</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>
        웹 페이지에서 텍스트 스타일을 지정하는 데 필요한 기본 속성 및 기술
        습득하기.
      </td>
    </tr>
  </tbody>
</table>

## CSS 에서 텍스트 스타일링과 관련이 있는 것은 무엇입니까?

HTML 및 CSS 를 사용한 작업에서 이미 경험한 것처럼 요소 내부의 텍스트는 요소의 내용 박스안에 배치됩니다. 콘텐츠 영역의 왼쪽 상단 (또는 RTL 언어 콘텐츠의 경우, 오른쪽 상단) 에서 시작하여 행의 끝으로 흐릅니다. 끝까지 도달하면 다음 줄로 내려가서 모든 내용이 박스에 들어갈 때까지 다음 줄로 계속 진행합니다. 텍스트 내용은 일련의 인라인 요소처럼 효과적으로 작동하며, 서로 인접한 줄에 배치되면 줄 끝에 도달할 때까지 줄 바꿈을 만들지 않거나, {{htmlelement("br")}} 요소를 사용하여 수동으로 줄 바꿈을 수행하지 않습니다.

> **참고:** 위의 단락으로 인해 혼동을 느끼게 되더라도 상관없이 — go back and review our [박스 모델](/ko/docs/Learn/CSS/Introduction_to_CSS/Box_model) 기사를 검토하여, 박스 모델 이론을 정리하십시오.

텍스트 스타일을 지정하는 데 사용되는 CSS 속성은 일반적으로 두 가지 카테고리로 분류되며, 이 기사에서는 별도로 살펴보겠습니다.properties used to style text generally fall into two categories, which we'll look at separately in this article:

- **글꼴 스타일**: 텍스트에 적용되는 글꼴에 영향을 주고, 적용되는 글꼴, 크기, 굵기, 이탤릭체 등에 영향을 주는 속성입니다.
- **텍스트 레이아웃 스타일**: 텍스트의 간격 및 기타 레이아웃 기능에 영향을 주는 속성으로, 예를 들어 선 과 문자 사이의 간격 및 내용 박스 내에서 텍스트가 정렬되는 방식을 조작할 수 있습니다.

> **참고:** 요소 내부의 텍스트는 모두 하나의 단일 entity 로 영향을 받습니다. 텍스트의 하위 섹션은 적절한 요소 (예: {{htmlelement("span")}} 또는 {{htmlelement("strong")}}) 으로 감싸거나, or use a text-specific pseudo-element like [::first-letter](/ko/docs/Web/CSS/::first-letter) (요소 텍스트의 첫 번째 문자 선택), [::first-line](/ko/docs/Web/CSS/::first-line) (요소 텍스트의 첫 번째 행 선택) 또는 [::selection](/ko/docs/Web/CSS/::selection) (커서로 현재 강조 표시된 텍스트 선택) 과 같은 텍스트 특정 pseudo-element 를 사용하십시오.

## 글꼴

글꼴 스타일링의 속성을 살펴보도록 하겠습니다. 이 예에서는 동일한 HTML 샘플에 몇 가지 다른 CSS 속성을 적용합니다:

```html
<h1>Tommy the cat</h1>

<p>I remember as if it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

[완성된 예제는 Github](http://mdn.github.io/learning-area/css/styling-text/fundamentals/) 에서 찾을 수 있습니다 ([소스 코드](https://github.com/mdn/learning-area/blob/master/css/styling-text/fundamentals/index.html) 참조.)

### 색상

{{cssxref("color")}} 속성은 선택한 요소의 전경 내용의 색상을 설정합니다 (일반적으로 텍스트이지만, {{cssxref("text-decoration")}} 속성을 사용하여 텍스트에 배치되는 밑줄이나 오버라인과 같은 몇 가지 다른 것도 포함할 수 있습니다.

`color` 은 모든 [CSS 색상 단위](/en-US/Learn/CSS/Introduction_to_CSS/Values_and_units#Colors) 를 사용할 수 있습니다. 예를 들면 다음과 같습니다:

```css
p {
  color: red;
}
```

이렇게하면 다음과 같이 표준 브라우저 기본값이 검은색이 아닌 빨간색으로 표시됩니다:

```html hidden
<h1>Tommy the cat</h1>

<p>I remember as if it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

{{ EmbedLiveSample('Color', '100%', 220) }}

### 글꼴 종류

텍스트에 다른 글꼴을 설정하려면, {{cssxref("font-family")}} 속성을 사용하여 브라우저에서 선택한 요소에 적용할 글꼴 (또는 글꼴 목록) 을 지정할 수 있습니다. 브라우저는 웹 사이트에 액세스하는 컴퓨터에서 글꼴을 사용할 수 있는 경우에만 글꼴을 적용합니다; 그렇지 않으면, 브라우저 [default font](#default_fonts) 만 사용합니다. 간단한 예는 다음과 같습니다:

```css
p {
  font-family: arial;
}
```

이렇게하면 페이지의 모든 단락이 임의의 컴퓨터에 있는 arial 글꼴을 채택하게 됩니다.

#### 웹 안전 글꼴

글꼴 사용가능 여부에 대해 말하자면, 일반적으로 모든 시스템에서 사용할 수 있는 글꼴의 수는 한정되어 있으므로 큰 걱정없이 사용할 수 있습니다. 이른바 **웹 안전 글꼴** 입니다.

대부분의 경우, 웹 개발자로서 텍스트 내용을 표시하는 데 사용되는 글꼴을 보다 구체적으로 제어하려고 합니다. 문제는 웹 페이지를 보는 데 사용되는 컴퓨터에서 어떤 글꼴을 사용할 수 있는지 알 수 있는 방법을 찾는 것입니다. 모든 경우에 이것을 알 수 있는 방법은 없지만, 웹 안전 글꼴은 가장 많이 사용되는 운영 체제 (윈도우, 맥, 가장 일반적인 리눅스 배포판, 안드로이드 및 iOS) 의 거의 모든 인스턴스에서 사용할 수 있는 것으로 알려져 있습니다.

실제 웹 안전 글꼴 목록은 운영 체제가 발전함에 따라 변경될 수 있지만, 최소한 다음과 같은 웹 안전 글꼴을 고려하는 것이 좋습니다 (이중 많은 글꼴이 90 년대 후반과 2000 년대 초에 웹 initiative 를 위한 Microsoft _[Core 글꼴](https://en.wikipedia.org/wiki/Core_fonts_for_the_Web)_ 덕분에 많은 사람들이 대중화 되었습니다):

| 이름            | 일반 유형  | 참고                                                                                                                                                                                                                                              |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arial           | sans-serif | It's often considered best practice to also add _Helvetica_ as a preferred alternative to _Arial_ as, although their font faces are almost identical, _Helvetica_ is considered to have a nicer shape, even if _Arial_ is more broadly available. |
| Courier New     | monospace  | Some OSes have an alternative (possibly older) version of the _Courier New_ font called _Courier_. It's considered best practice to use both with _Courier New_ as the preferred alternative.                                                     |
| Georgia         | serif      |                                                                                                                                                                                                                                                   |
| Times New Roman | serif      | Some OSes have an alternative (possibly older) version of the _Times New Roman_ font called _Times_. It's considered best practice to use both with _Times New Roman_ as the preferred alternative.                                               |
| Trebuchet MS    | sans-serif | You should be careful with using this font — it isn't widely available on mobile OSes.                                                                                                                                                            |
| Verdana         | sans-serif |                                                                                                                                                                                                                                                   |

> **참고:** Among various resources, the [cssfontstack.com](http://www.cssfontstack.com/) website maintains a list of web safe fonts available on Windows and macOS operating systems, which can help you make your decision about what you consider safe for your usage.

> **참고:** There is a way to download a custom font along with a webpage, to allow you to customize your font usage in any way you want: **web fonts**. This is a little bit more complex, and we will be discussing this in a separate article later on in the module.

#### 기본 글꼴

CSS 는 글꼴의 일반적인 다섯 가지 이름: `serif`, `sans-serif`, `monospace`, `cursive` 및 `fantasy` 를 정의합니다. 이러한 일반 이름을 사용할 때 사용되는 정확한 글꼴은 각 브라우저에 달려 있으며, 실행중인 운영체제에 따라 다를 수 있습니다. 브라우저가 최소한 적합한 글꼴을 제공하기 위해 최선을 다하는 최악의 시나리오를 나타나냅니다. `serif`, `sans-serif` 및 `monospace` 는 상당히 예측가능하며 합리적인 무언가를 제공해야 합니다. 반면에 , `cursive` 및 `fantasy` 는 예측하기 어렵기 때문에, 테스트할 때 신중하게 사용하는 것이 좋습니다.

5 개의 이름은 다음과 같이 정의됩니다:

| 용어         | 정의                                                                                                              | 예제                |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------------------- |
| `serif`      | serifs 가 있는 글꼴 (the flourishes and other small details you see at the ends of the strokes in some typefaces) | My big red elephant |
| `sans-serif` | serifs 가 없는 글꼴.                                                                                              | My big red elephant |
| `monospace`  | 모든 문자의 너비가 같은 글꼴로, 일반적으로 코드 목록에 사용됩니다.                                                | My big red elephant |
| `cursive`    | Fonts that are intended to emulate handwriting, with flowing, connected strokes.                                  | My big red elephant |
| `fantasy`    | 장식용 글꼴.                                                                                                      | My big red elephant |

#### Font stacks

웹 페이지에서 글꼴의 사용가능 여부를 보장할 수 없으므로 (어똔 이유로 웹 글꼴이 실패할 수 있음) 브라우저에서 선택할 수 있는 **글꼴 스택 (font stack)** 을 제공할 수 있습니다. 여기에는 여러 글꼴 이름으로 구성된 `font-family` 값이 포함됩니다. 예제:

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

이 경우, 브라우저는 목록 시작 부분에서 시작하여 해당 글꼴이 시스템에서 사용 가능한지 확인합니다. 이 글꼴이 있으면, 해당 글꼴이 선택한 요소에 적용됩니다. 그렇지 않으면, 다음 글꼴로 이동합니다.

나열된 글꼴 중 사용 가능한 글꼴이 없는 경우, 브라우저가 최소한 대략 비슷한 것을 제공할 수 있도록 스택 끝에 적절한 일반 글꼴 이름을 제공하는 것이 좋습니다.이 점을 강조하기 위해 다른 옵션 — 일반적으로 Time New Roman — 을 사용할 수 없는 경우 단락에 기본 serif 글꼴이 제공됩니다. 이는 san-serif 글꼴에 적합하지 않습니다!

> **참고:** `Trebuchet MS` 와 같이 둘 이상의 단어가 있는 글꼴 이름은 따옴표로 묶어야합니다, 예를 들면 `"Trebuchet MS"`.

#### font-family 예제

단락에 sans-serif 글꼴을 제공하여 이전 예제에 추가하겠습니다:

```css
p {
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

결과는 다음과 같습니다:

```html hidden
<h1>Tommy the cat</h1>

<p>I remember as if it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

{{ EmbedLiveSample('A_font-family_example', '100%', 220) }}

### 글꼴 크기

In our previous module's [CSS values and units](/ko/docs/Learn/CSS/Introduction_to_CSS/Values_and_units) article, we reviewed [length and size units](/en-US/Learn/CSS/Introduction_to_CSS/Values_and_units#Length_and_size). Font size (set with the {{cssxref("font-size")}} property) can take values measured in most of these units (and others, such as [percentages](/en-US/Learn/CSS/Introduction_to_CSS/Values_and_units#Percentages)), however the most common units you'll use to size text are:

- `px` (pixels): The number of pixels high you want the text to be. This is an absolute unit — it results in the same final computed value for the font on the page in pretty much any situation.
- `em`s: 1em is equal to the font size set on the parent element of the current element we are styling (more specifically, the width of a capital letter M contained inside the parent element.) This can become tricky to work out if you have a lot of nested elements with different font sizes set, but it is doable, as you'll see below. Why bother? It is quite natural once you get used to it, and you can use `em`s to size everything, not just text. You can have an entire website sized using ems, which makes maintenance easy.
- `rem`s: These work just like `em`s, except that 1`rem` is equal to the font size set on the root element of the document (i.e. {{htmlelement("html")}}), not the parent element. This makes doing the maths to work out your font sizes much easier, but unfortunately `rem`s are not supported in Internet Explorer 8 and below. If you need to support older browsers with your project, you can either stick to using `em`s or `px`, or use a {{glossary("polyfill")}} such as [REM-unit-polyfill](https://github.com/chuckcarpenter/REM-unit-polyfill).

The `font-size` of an element is inherited from that element's parent element. This all starts with the root element of the entire document — {{htmlelement("html")}} — the `font-size` of which is set to 16px as standard across browsers. Any paragraph (or other element that doesn't have a different size set by the browser) inside the root element will have a final size of 16px. Other elements may have different default sizes, for example an {{htmlelement("h1")}} element has a size of 2ems set by default, so will have a final size of 32px.

Things become more tricky when you start altering the font size of nested elements. For example, if you had an {{htmlelement("article")}} element in your page, and set its font-size to `1.5em`s (which would compute to 24px final size), and then wanted the paragraphs inside the `<article>` elements to have a computed font size of 20px, what em value would you use?

```html
<!-- document base font-size is 16px -->
<article>
  <!-- If my font-size is 1.5em -->
  <p>My paragraph</p>
  <!-- How do I compute to 20px font-size? -->
</article>
```

You would need to set its em value to 20/24, or `0.83333333em`s. The maths can be complicated, so you need to be careful about how you style things. It is best to use rems where you can, to keep things simple, and avoid setting the font-size of container elements where possible.

#### A simple sizing example

When sizing your text, it is usually a good idea to set the base `font-size` of the document to 10px, so that then the maths is a lot easier to work out — required (r)em values are then the pixel font size divided by 10, not 16. After doing that, you can easily size the different types of text in your document to what you want. It is a good idea to list all your `font-size` rulesets in a designated area in your stylesheet, so they are easy to find.

Our new result is like so:

```html hidden
<h1>Tommy the cat</h1>

<p>I remember as if it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem;
}

p {
  font-size: 1.4rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

{{ EmbedLiveSample('A_simple_sizing_example', '100%', 220) }}

### Font style, font weight, text transform, and text decoration

CSS provides four common properties to alter the visual weight/emphasis of text:

- {{cssxref("font-style")}}: Used to turn italic text on and off. Possible values are as follows (you'll rarely use this, unless you want to turn some italic styling off for some reason):

  - `normal`: Sets the text to the normal font (turns existing italics off.)
  - `italic`: Sets the text to use the _italic version of the font_ if available; if not available, it will simulate italics with oblique instead.
  - `oblique`: Sets the text to use a simulated version of an italic font, created by slanting the normal version.

- {{cssxref("font-weight")}}: Sets how bold the text is. This has many values available in case you have many font variants available (such as _-light_, _-normal_, _-bold_, _-extrabold_, _-black_, etc.), but realistically you'll rarely use any of them except for `normal` and `bold`:

  - `normal`, `bold`: Normal and **bold** font weight
  - `lighter`, `bolder`: Sets the current element's boldness to be one step lighter or heavier than its parent element's boldness.
  - `100`–`900`: Numeric boldness values that provide finer grained control than the above keywords, if needed.

- {{cssxref("text-transform")}}: Allows you to set your font to be transformed. Values include:

  - `none`: Prevents any transformation.
  - `uppercase`: Transforms all text to capitals.
  - `lowercase`: Transforms all text to lower case.
  - `capitalize`: Transforms all words to have the first letter capitalized.
  - `full-width`: Transforms all glyphs to be written inside a fixed-width square, similar to a monospace font, allowing aligning of e.g. latin characters along with asian language glyphs (like Chinese, Japanese, Korean.)

- {{cssxref("text-decoration")}}: Sets/unsets text decorations on fonts (you'll mainly use this to unset the default underline on links when styling them.) Available values are:

  - `none`: Unsets any text decorations already present.
  - `underline`: **Underlines the text**.
  - `overline`: Gives the text an overline.
  - `line-through`: Puts a ~~strikethrough over the text~~.

  You should note that {{cssxref("text-decoration")}} can accept multiple values at once, if you want to add multiple decorations simultaneously, for example `text-decoration: underline overline`. Also note that {{cssxref("text-decoration")}} is a shorthand property for {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, and {{cssxref("text-decoration-color")}}. You can use combinations of these property values to create interesting effects, for example `text-decoration: line-through red wavy`.

Let's look at adding a couple of these properties to our example:

Our new result is like so:

```html hidden
<h1>Tommy the cat</h1>

<p>I remember as if it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem;
  text-transform: capitalize;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.4rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

{{ EmbedLiveSample('Font_style_font_weight_text_transform_and_text_decoration', '100%', 220) }}

### Text drop shadows

You can apply drop shadows to your text using the {{cssxref("text-shadow")}} property. This takes up to four values, as shown in the example below:

```css
text-shadow: 4px 4px 5px red;
```

The four properties are as follows:

1. The horizontal offset of the shadow from the original text — this can take most available CSS [length and size units](/en-US/Learn/CSS/Introduction_to_CSS/Values_and_units#Length_and_size), but you'll most commonly use px. This value has to be included.
2. The vertical offset of the shadow from the original text; behaves basically just like the horizontal offset, except that it moves the shadow up/down, not left/right. This value has to be included.
3. The blur radius — a higher value means the shadow is dispersed more widely. If this value is not included, it defaults to 0, which means no blur. This can take most available CSS [length and size units](/en-US/Learn/CSS/Introduction_to_CSS/Values_and_units#Length_and_size).
4. The base color of the shadow, which can take any [CSS color unit](/en-US/Learn/CSS/Introduction_to_CSS/Values_and_units#Colors). If not included, it defaults to `black`.

> **참고:** Positive offset values move the shadow right and down, but you can also use negative offset values to move the shadow left and up, for example `-1px -1px`.

#### Multiple shadows

You can apply multiple shadows to the same text by including multiple shadow values separated by commas, for example:

```css
text-shadow:
  -1px -1px 1px #aaa,
  0px 4px 1px rgba(0, 0, 0, 0.5),
  4px 4px 5px rgba(0, 0, 0, 0.7),
  0px 0px 7px rgba(0, 0, 0, 0.4);
```

If we applied this to the {{htmlelement("h1")}} element in our Tommy the cat example, we'd end up with this:

```html hidden
<h1>Tommy the cat</h1>

<p>I remember as if it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css hidden
html {
  font-size: 10px;
}

h1 {
  font-size: 26px;
  text-transform: capitalize;
  text-shadow:
    -1px -1px 1px #aaa,
    0px 2px 1px rgba(0, 0, 0, 0.5),
    2px 2px 2px rgba(0, 0, 0, 0.7),
    0px 0px 3px rgba(0, 0, 0, 0.4);
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 14px;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

{{ EmbedLiveSample('Multiple_shadows', '100%', 220) }}

> **참고:** You can see more interesting examples of `text-shadow` usage in the Sitepoint article [Moonlighting with CSS text-shadow](http://www.sitepoint.com/moonlighting-css-text-shadow/).

## 텍스트 레이아웃

With basic font properties out the way, let's now have a look at properties we can use to affect text layout.

### 텍스트 정렬

The {{cssxref("text-align")}} property is used to control how text is aligned within its containing content box. The available values are as follows, and work in pretty much the same way as they do in a regular word processor application:

- `left`: Left justifies the text.
- `right`: Right justifies the text.
- `center`: Centers the text.
- `justify`: Makes the text spread out, varying the gaps in between the words so that all lines of text are the same width. You need to use this carefully — it can look terrible, especially when applied to a paragraph with lots of long words in it. If you are going to use this, you should also think about using something else along with it, such as {{cssxref("hyphens")}}, to break some of the longer words across lines.

If we applied `text-align: center;` to the {{htmlelement("h1")}} in our example, we'd end up with this:

```html hidden
<h1>Tommy the cat</h1>

<p>I remember as if it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css hidden
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem;
  text-transform: capitalize;
  text-shadow:
    -1px -1px 1px #aaa,
    0px 2px 1px rgba(0, 0, 0, 0.5),
    2px 2px 2px rgba(0, 0, 0, 0.7),
    0px 0px 3px rgba(0, 0, 0, 0.4);
  text-align: center;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.4rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

{{ EmbedLiveSample('Text_alignment', '100%', 220) }}

### Line height

The {{cssxref("line-height")}} property sets the height of each line of text — this can take most [length and size units](/en-US/Learn/CSS/Introduction_to_CSS/Values_and_units#Length_and_size), but can also take a unitless value, which acts as a multiplier and is generally considered the best option — the {{cssxref("font-size")}} is multiplied to get the `line-height`. Body text generally looks nicer and is easier to read when the lines are spaced apart; the recommended line height is around 1.5–2 (double spaced.) So to set our lines of text to 1.5 times the height of the font, you'd use this:

```css
line-height: 1.5;
```

Applying this to the {{htmlelement("p")}} elements in our example would give us this result:

```html hidden
<h1>Tommy the cat</h1>

<p>I remember as if it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css hidden
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem;
  text-transform: capitalize;
  text-shadow:
    -1px -1px 1px #aaa,
    0px 2px 1px rgba(0, 0, 0, 0.5),
    2px 2px 2px rgba(0, 0, 0, 0.7),
    0px 0px 3px rgba(0, 0, 0, 0.4);
  text-align: center;
}

h1 + p {
  font-weight: bold;
}

p {
  font-size: 1.4rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.5;
}
```

{{ EmbedLiveSample('Line_height', '100%', 250) }}

### Letter and word spacing

The {{cssxref("letter-spacing")}} and {{cssxref("word-spacing")}} properties allow you to set the spacing between letters and words in your text. You won't use these very often, but might find a use for them to get a certain look, or to improve the legibility of a particularly dense font. They can take most [length and size units](/en-US/Learn/CSS/Introduction_to_CSS/Values_and_units#Length_and_size).

So as an example, if we applied the following to the first line of the {{htmlelement("p")}} elements in our example:

```css
p::first-line {
  letter-spacing: 2px;
  word-spacing: 4px;
}
```

We'd get the following:

```html hidden
<h1>Tommy the cat</h1>

<p>I remember as if it were a meal ago...</p>

<p>
  Said Tommy the Cat as he reeled back to clear whatever foreign matter may have
  nestled its way into his mighty throat. Many a fat alley rat had met its
  demise while staring point blank down the cavernous barrel of this awesome
  prowling machine. Truly a wonder of nature this urban predator — Tommy the cat
  had many a story to tell. But it was a rare occasion such as this that he did.
</p>
```

```css hidden
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem;
  text-transform: capitalize;
  text-shadow:
    -1px -1px 1px #aaa,
    0px 2px 1px rgba(0, 0, 0, 0.5),
    2px 2px 2px rgba(0, 0, 0, 0.7),
    0px 0px 3px rgba(0, 0, 0, 0.4);
  text-align: center;
}

h1 + p {
  font-weight: bold;
}

p::first-line {
  letter-spacing: 2px;
  word-spacing: 4px;
}

p {
  font-size: 1.4rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.5;
}
```

{{ EmbedLiveSample('Letter_and_word_spacing', '100%', 250) }}

### 볼 가치가 있는 다른 속성들

The above properties give you an idea of how to start styling text on a webpage, but there are many more properties you could use. We just wanted to cover the most important ones here. Once you've become used to using the above, you should also explore the following:

Font styles:

- {{cssxref("font-variant")}}: Switch between small caps and normal font alternatives.
- {{cssxref("font-kerning")}}: Switch font kerning options on and off.
- {{cssxref("font-feature-settings")}}: Switch various [OpenType](https://en.wikipedia.org/wiki/OpenType) font features on and off.
- {{cssxref("font-variant-alternates")}}: Control the use of alternate glyphs for a given font-face.
- {{cssxref("font-variant-caps")}}: Control the use of alternate capital glyphs.
- {{cssxref("font-variant-east-asian")}}: Control the usage of alternate glyphs for East Asian scripts, like Japanese and Chinese.
- {{cssxref("font-variant-ligatures")}}: Control which ligatures and contextual forms are used in text.
- {{cssxref("font-variant-numeric")}}: Control the usage of alternate glyphs for numbers, fractions, and ordinal markers.
- {{cssxref("font-variant-position")}}: Control the usage of alternate glyphs of smaller sizes positioned as superscript or subscript.
- {{cssxref("font-size-adjust")}}: Adjust the visual size of the font independently of its actual font size.
- {{cssxref("font-stretch")}}: Switch between possible alternative stretched versions of a given font.
- {{cssxref("text-underline-position")}}: Specify the position of underlines set using the `text-decoration-line` property `underline` value.
- {{cssxref("text-rendering")}}: Try to perform some text rendering optimization.

Text layout styles

- {{cssxref("text-indent")}}: Specify how much horizontal space should be left before the beginning of the first line of the text content.
- {{cssxref("text-overflow")}}: Define how overflowed content that is not displayed is signaled to users.
- {{cssxref("white-space")}}: Define how whitespace and associated line breaks inside the element are handled.
- {{cssxref("word-break")}}: Specify whether to break lines within words.
- {{cssxref("direction")}}: Define the text direction (This depends on the language and usually it's better to let HTML handle that part as it is tied to the text content.)
- {{cssxref("hyphens")}}: Switch on and off hyphenation for supported languages.
- {{cssxref("line-break")}}: Relax or strengthen line breaking for Asian languages.
- {{cssxref("text-align-last")}}: Define how the last line of a block or a line, right before a forced line break, is aligned.
- {{cssxref("text-orientation")}}: Define the orientation of the text in a line.
- {{cssxref("word-wrap")}}: Specify whether or not the browser may break lines within words in order to prevent overflow.
- {{cssxref("writing-mode")}}: Define whether lines of text are laid out horizontally or vertically and the direction in which subsequent lines flow.

## 글꼴 약식 (shorthand)

Many font properties can also be set through the shorthand property {{cssxref("font")}}. These are written in the following order: {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}}, and {{cssxref("font-family")}}.

Among all those properties, only `font-size` and `font-family` are required when using the `font` shorthand property.

A forward slash has to be put in between the {{cssxref("font-size")}} and {{cssxref("line-height")}} properties.

A full example would look like this:

```css
font:
  italic normal bold normal 3em/1.5 Helvetica,
  Arial,
  sans-serif;
```

## Active learning: Playing with styling text

In this active learning session, we don't have any specific exercises for you to do: we'd just like you to have a good play with some font/text layout properties, and see what you can produce! You can either do this using offline HTML/CSS files, or enter your code into the live editable example below.

If you make a mistake, you can always reset it using the _Reset_ button.

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Input</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
  <p>Some sample text for your delight</p></textarea
  >

  <h2>CSS Input</h2>
  <textarea
    id="code"
    class="css-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
p {

  }</textarea
  >

  <h2>Output</h2>
  <div
    class="output"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></div>
  <div class="controls">
    <input
      id="reset"
      type="button"
      value="Reset"
      style="margin: 10px 10px 0 0;" />
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

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code', 700, 800) }}

## Summary

We hoped you enjoyed playing with text in this article! The next article will give you all you need to know about styling HTML lists.

{{NextMenu("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text")}}
