---
title: Advanced text formatting
slug: Learn/HTML/Introduction_to_HTML/Advanced_text_formatting
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}

텍스트 서식에 있어서 [HTML text fundamentals](/ko/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) 에서 이야기 하지 않은 수많은 요소들이 있습니다. 이 글에서 설명하는 요소들은 비교적 많이 알려져 있지않지만 여전히 유용합니다. (그리고 이것은 완전한 목록이 아닙니다.). 이 글에서 여러분은 인용구, 서술문, 컴퓨터 코드 및 관력 텍스트, 첨자, 위첨자, 연락처 정보 등을 표시하는 방법에 대해 알아봅시다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">요구 기술:</th>
      <td>
        <a href="/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Getting started with HTML</a
        >
        에 설명된 기본적인 HTML 숙련도.
        <a
          href="/ko/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML text fundamentals</a
        >
        에서 설명하는 텍스트 포맷팅에 대한 지식.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        <p>
          비교적 알려지지 않은 HTML 요소들을 사용하여 고급 시맨틱 기능을
          사용하여 HTML을 구성하는 방법을 학습합니다.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Description lists

[HTML text fundamentals](/ko/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) 에서 [mark up basic lists](/en-US/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#Lists) 를 볼 수 있습니다. 하지만 해당 글에는 여러분이 앞으로 종종 마주할 세 번째 리스트 타입인 **description lists**에 대해선 언급하지 않았습니다. 이 리스트의 목적은 용어 및 정의, 질문 및 답변과 같은 일련의 항목 및 관련 설명을 표시하는 것입니다. 아래의 예시를 살펴봅시다.

```
soliloquy
In drama, where a character speaks to themselves, representing their inner thoughts or feelings and in the process relaying them to the audience (but not to other characters.)
monologue
In drama, where a character speaks their thoughts out loud to share them with the audience and any other characters present.
aside
In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought or piece of additional background information
```

Description lists 는 다른 타입의 리스트와 다르게 {{htmlelement("dl")}} 태그를 사용합니다. 용어, 질문과 같은 상위 항목은 {{htmlelement("dt")}} (description term) 요소를 사용하고,\ 정의, 답변과 같은 하위 항목은 {{htmlelement("dd")}} (description definition) 요소를 사용합니다. 이해를 돕기위해 아래의 마크업 예시가 준비되어 있습니다.

```html
<dl>
  <dt>soliloquy</dt>
  <dd>
    In drama, where a character speaks to themselves, representing their inner
    thoughts or feelings and in the process relaying them to the audience (but
    not to other characters.)
  </dd>
  <dt>monologue</dt>
  <dd>
    In drama, where a character speaks their thoughts out loud to share them
    with the audience and any other characters present.
  </dd>
  <dt>aside</dt>
  <dd>
    In drama, where a character shares a comment only with the audience for
    humorous or dramatic effect. This is usually a feeling, thought or piece of
    additional background information.
  </dd>
</dl>
```

브라우저에서 제공하는 기본 스타일에 의해서 정의, 답변과 같은 하위 항목에 대해서 들여쓰기가 적용됩니다. 현재 보고계시는 description list 는 MDN에서 제공하는 스타일이 적용되어 있습니다. 이는 브라우저에서 제공하는 기본 스타일과 매우 유사하게 정의 되어 있습니다만, 추가적으로 정의된 스타일입니다.

<dl><dt>soliloquy</dt><dd>In drama, where a character speaks to themselves, representing their inner thoughts or feelings and in the process relaying them to the audience (but not to other characters.)</dd><dt>monologue</dt><dd>In drama, where a character speaks their thoughts out loud to share them with the audience and any other characters present.</dd><dt>aside</dt><dd>In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought or piece of additional background information.</dd><dt></dt></dl>

아래의 예시와 같이 하나의 `<dt>` 에는 여러개의 `<dd>` 가 존재할 수 있습니다.

```
<dl>
  <dt>aside</dt>
  <dd>In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought, or piece of additional background information.</dd>
  <dd>In writing, a section of content that is related to the current topic, but doesn't fit directly into the main flow of content so is presented nearby (often in a box off to the side.)</dd>
</dl>
```

<dl><dt>aside</dt><dd>In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought or piece of additional background information.</dd><dd>In writing, a section of content that is related to the current topic, but doesn't fit directly into the main flow of content so is presented nearby (often in a box off to the side.)</dd><dt></dt></dl>

### 추가학습: 일련의 정의 표시

description list 를 직접 시도해볼 시간입니다. input 필드에 요소들을 추가하여 output 필드에 description list 로 표시되도록 하십시오. 원하시는 경우에 추가적인 요소들을 추가하셔도 좋습니다.

실수를 하셨을 경우에는, _Reset_ 버튼을 통해서 재시작하실 수 있습니다. 해답을 찾지 못하셨을 경우에 _Show solution_ 버튼을 통해서 해답을 보실 수 있습니다.

```html hidden
<h2>Input</h2>
<textarea id="code" class="input">
Bacon
The glue that binds the world together.
Eggs
The glue that binds the cake together.
Coffee
The drink that gets the world running in the morning.
A light brown color.</textarea
>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
body {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

.input,
.output {
  width: 90%;
  height: 10em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function () {
  textarea.value =
    "<dl>\n  <dt>Bacon</dt>\n  <dd>The glue that binds the world together.</dd>\n  <dt>Eggs</dt>\n  <dd>The glue that binds the cake together.</dd>\n  <dt>Coffee</dt>\n  <dd>The drink that gets the world running in the morning.</dd>\n  <dd>A light brown color.</dd>\n</dl>";
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code', 700, 500) }}

## 인용구

HTML에는 인용구 표시에 사용할 수 있는 요소가 존재합니다. 해당 요소는 블록 또는 인라인 요소인지에 따라서 다르게 표시됩니다.

### Blockquotes

블록 레벨 컨텐츠의 섹션(문단, 여러 단락, 리스트등)이 인용된 경우, 이를 나타내는 `<blockquote>`요소로 감싸야합니다. 그리고 `cite` 속성에 출처를 표기합니다. 아래의 예시는 MDN `<blockquote>` 요소 페이지를 인용한 것 입니다.

```html
<p>
  The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
  <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an
  extended quotation.
</p>
```

이것을 block quote 로 변경하기 위해서 아래와 같이 할 수 있습니다.

```html
<blockquote
  cite="https://developer.mozilla.org/ko/docs/Web/HTML/Element/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>
```

브라우저 기본 스타일은 인용구를 표현할 때, 들여쓰기 된 단락으로 나타냅니다. MDN은 추가적인 스타일링과 함께 이를 나타냅니다.

> The **HTML `<blockquote>` Element** (or _HTML Block Quotation Element_) indicates that the enclosed text is an extended quotation.

### Inline quotations

인라인 인용구는 `<q>` 요소를 사용한다는 점만 제외하면 블럭 인용구와 동일하게 동작합니다. 아래의 마크업 예시는 MDN `<q>` 페이지의 인용문을 포함합니다.

```html
<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/ko/docs/Web/HTML/Element/q"
    >intended for short quotations that don't require paragraph breaks.</q
  >
</p>
```

브라우저 기본 스타일은 인라인 인용구를 따옴표로 묶은 일반 텍스트로 표현합니다.

The quote element — `<q>` — is "intended for short quotations that don't require paragraph breaks."

### Citations

[`cite`](/ko/docs/Web/HTML/Element/blockquote#cite)요소의 컨텐츠는 유용하게 보이지만 안타깝게도 브라우저, 스크린 리더 등은 이를 이용해서 할 수 있는 것이 많지 않습니다. 브라우저는 javascript나 CSS로 여러분이 직접 해결책을 제시하지 않는다면 `cite` 컨텐츠를 화면에 표시할 방법이 없습니다. 페이지에서 인용 출처를 화면에 나타나게 하고 싶다면 `<cite>` 요소를 사용하는 것이 더 좋습니다. 이는 이름 그대로 출처를 포함하기 위해서 사용됩니다. — `<cite>` 요소 안에 있는 출처에 대한 링크를 연결할 수 있습니다.

```html
<p>
  According to the
  <a href="https://developer.mozilla.org/ko/docs/Web/HTML/Element/blockquote">
    <cite>MDN blockquote page</cite></a
  >:
</p>

<blockquote
  cite="https://developer.mozilla.org/ko/docs/Web/HTML/Element/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>

<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/ko/docs/Web/HTML/Element/q"
    >intended for short quotations that don't require paragraph breaks.</q
  >
  --
  <a href="https://developer.mozilla.org/ko/docs/Web/HTML/Element/q">
    <cite>MDN q page</cite></a
  >.
</p>
```

Citations are styled in italic font by default. You can see this code at work in our [quotations.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/advanced-text-formatting/quotations.html) example.

### 추가학습: 누가 말했어?

다른 실습 과제를 할 시간입니다! 이번 예제에서는 아래 항목을 수행하고자 합니다.

1. 중간에 위치한 문단을 `cite` 속성을 지닌 블럭 인용구로 변경하십시오.
2. 세 번째 문단의 일부를 `cite` 속성을 지닌 인라인 인용구로 변경하십시오.
3. 각 링크에 \<cite> 요소를 포함시키십시오.

적절한 출처를 찾기 위해서 온라인 검색을 이용하십시오.

실수를 하셨을 경우에는, _Reset_ 버튼을 통해서 재시작하실 수 있습니다. 해답을 찾지 못하셨을 경우에 _Show solution_ 버튼을 통해서 해답을 보실 수 있습니다.

```html hidden
<h2>Input</h2>
<textarea id="code" class="input">
<p>Hello and welcome to my motivation page. As Confucius once said:</p>

<p>It does not matter how slowly you go as long as you do not stop.</p>

<p>I also love the concept of positive thinking, and The Need To Eliminate Negative Self Talk
(as mentioned in Affirmations for Positive Thinking.)</p></textarea
>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
body {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

.input,
.output {
  width: 90%;
  height: 10em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function () {
  textarea.value =
    '<p>Hello and welcome to my motivation page. As <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"><cite>Confucius</cite></a> once said:</p>\n\n<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">\n  <p>It does not matter how slowly you go as long as you do not stop.</p>\n</blockquote>\n\n<p>I also love the concept of positive thinking, and <q cite="http://www.affirmationsforpositivethinking.com/index.htm">The Need To Eliminate Negative Self Talk</q> (as mentioned in <a href="http://www.affirmationsforpositivethinking.com/index.htm"><cite>Affirmations for Positive Thinking</cite></a>.)</p>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_2', 700, 500) }}

## 약어

웹을 둘러 볼 때 `<abbr>` 요소를 꽤 많이 볼 수 있습니다. 이는 머리 글자 또는 약어를 나타내는데 사용됩니다. title 속성을 통해 원래의 용어를 나태날 수 있습니다. 몇가지 예제를 살펴 보겠습니다.

```
<p>We use <abbr title="Hypertext Markup Language">HTML</abbr> to structure our web documents.</p>

<p>I think <abbr title="Reverend">Rev.</abbr> Green did it in the kitchen with the chainsaw.</p>
```

위의 코드는 아래와 같이 보입니다. 용어의 전체 뜻은 마우스를 올려 놓으면 툴팁에 표시됩니다.

We use HTML to structure our web documents.

I think Rev. Green did it in the kitchen with the chainsaw.

> **참고:** 약어를 나타내기 위해 \<abbr> 과 동일하게 사용할 수 있는 `<acronym>` 가 존재합니다. 이는 사용중지 되었으며 브라우저에서도 호환되지 않는 경우가 있습니다. 따라서 `<abbr>` 을 대신 사용하는 것을 추천드립니다.

### 추가학습: 약어 만들기

아래의 간단한 실습 과제를 통해 약어 사용에 대한 학습을 하고자 합니다. 아래의 샘플을 그대로 사용하시거나 여러분의 샘플로 교체 하실 수 있습니다.

```html hidden
<h2>Input</h2>
<textarea id="code" class="input">
<p>NASA sure does some exciting work.</p></textarea
>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
body {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

.input,
.output {
  width: 90%;
  height: 5em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function () {
  textarea.value =
    '<p><abbr title="National Aeronautics and Space Administration">NASA</abbr> sure does some exciting work.</p>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_3', 700, 350) }}

## 연락처 세부 사항 표시

HTML 에서 `<address>` 태그를 이용해서 연락처 세부 정보를 표시할 수 있습니다. 이것은 단순히 연락처 정보를 표시하는 것입니다.

```html
<address>
  <p>Chris Mills, Manchester, The Grim North, UK</p>
</address>
```

그러나 기억해야 할 것은 \<address> 요소는 HTML 문서를 작성한 사람의 연락처 정보를 표시하기 위해서 사용되어야 한다는 것입니다. 따라서 Chris 가 마크 업이 표시된 문서를 작성한 경우에만 위의 예제가 정상입니다. 아래와 같은 예제도 괜찮습니다.

```html
<address>
  <p>Page written by <a href="../authors/chris-mills/">Chris Mills</a>.</p>
</address>
```

## 위첨자와 아래 첨자

여러분은 종종 날짜, 화학 공식 및 수학 방적식과 같은 항목을 표시 할 때 올바른 의미를 갖도록 위첨자 아래 첨자를 사용해야 할 수도 있습니다. `<sup>` 과 `<sub>` 요소들은 이를 위해 사용할 수 있습니다.

```html
<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>
  Caffeine's chemical formula is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>
```

표시될 결과는 아래와 같습니다.

My birthday is on the 25th of May 2001.

Caffeine's chemical formula is C8H10N4O2.

If x2 is 9, x must equal 3 or -3.

## 컴퓨터 코드를 나타내기

HTML 을 이용해 컴퓨터 코드를 나타낼 때 아래와 같은 많은 요소들을 사용할 수 있습니다.

- {{htmlelement("code")}}: 일반적인 컴퓨터 코드를 표시합니다.
- {{htmlelement("pre")}}: 공백(일반적으로 코드 블록)을 유지하기 위해 사용합니다. 택스트 내에서 들여 쓰기 또는 초과 공백을 사용하면 브라우저가 이를 무시하고 렌더링 된 페이지에 공백을 표시하지 않습니다. 그러나 `<pre></pre>` 태그로 텍스트를 감싸면 공백이 텍스트 편집기에서 보는 것과 동일하게 렌더링 됩니다.
- {{htmlelement("var")}}: 변수이름을 특별하게 표시합니다.
- {{htmlelement("kbd")}}: 컴퓨터에 입력 된 키보드 (및 기타 유형) 입력을 표시합니다.
- {{htmlelement("samp")}}: 컴퓨터 프로그램의 출력을 표시합니다.

몇 가지 예를 살펴 보겠습니다. 이 예제들을 통해서 자유롭게 학습해보십시오. (다른 [other-semantics.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/advanced-text-formatting/other-semantics.html) 샘플 파일의 사본을 사용하실 수 있습니다).

```html
<pre><code>var para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>
  You shouldn't use presentational elements like <code>&lt;font&gt;</code> and
  <code>&lt;center&gt;</code>.
</p>

<p>
  In the above JavaScript example, <var>para</var> represents a paragraph
  element.
</p>

<p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

위의 코드는 아래와 같이 표시됩니다.

{{ EmbedLiveSample('Representing_computer_code','100%',300, "", "", "hide-codepen-jsfiddle") }}

## 시간과 날짜 표시

HTML 은 기계가 읽을 수 있는 형식(machine-readable)으로 시간과 날짜를 표시하기 위한 `<time>` 요소를 제공합니다. 예를 들면 아래와 같습니다.

```html
<time datetime="2016-01-20">20 January 2016</time>
```

이것이 왜 유용할까요? 인간이 날짜를 기록하는 방법에는 여러 가지가 있습니다. 위 날짜는 아래와 같이 나타낼 수 있습니다.

- 20 January 2016
- 20th January 2016
- Jan 20 2016
- 20/06/16
- 06/20/16
- The 20th of next month
- 20e Janvier 2016
- 2016 年 1 月 20 日
- And so on

그러나 이러한 다른 형식들은 컴퓨터가 쉽게 인식할 수 없습니다. 페이지의 모든 이벤트 날짜를 자동으로 인식하여 캘린더에 삽입하려면 어떻게 해야합니까? `<time>` 요소를 사용하면 기계가 읽을 수 있는 명확한 시간 / 날짜를 첨부 할 수 있습니다.

아래의 기본 예지는 간단한 기계 판독 가능 날짜를 제공하지만 사용 가능한 다른 많은 옵션들이 존재합니다.

```html
<!-- Standard simple date -->
<time datetime="2016-01-20">20 January 2016</time>
<!-- Just year and month -->
<time datetime="2016-01">January 2016</time>
<!-- Just month and day -->
<time datetime="01-20">20 January</time>
<!-- Just time, hours and minutes -->
<time datetime="19:30">19:30</time>
<!-- You can do seconds and milliseconds too! -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- Date and time -->
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
<!-- Date and time with timezone offset-->
<time datetime="2016-01-20T19:30+01:00"
  >7.30pm, 20 January 2016 is 8.30pm in France</time
>
<!-- Calling out a specific week number-->
<time datetime="2016-W04">The fourth week of 2016</time>
```

## 요약

HTML 텍스트 시맨틱에 대한 스터디가 끝났습니다. 이 과정에서 학습한 내용이 HTML 텍스트 요소의 전부가 아님을 명심하십시오. 우리는 필수 요소를 위주로 다루고 싶었고, 여러분이 일반적인 상황에서 보거나 적어도 흥미롭게 다가올 수 있는 더 일반적인 것들 중 일부를 다루려고 했습니다. 더 많은 HTML 요소를 찾으려면 [HTML element reference](/ko/docs/Web/HTML/Element) 를 살펴보십시오.([Inline text semantics](/ko/docs/Web/HTML/Element#Inline_text_semantics) 섹션은 시작하기에 좋은 장소입니다.). 다음 문서에서는 HTML 문서의 다른 부분을 구성하는 데 사용할 HTML 요소를 살펴 보겠습니다.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}
