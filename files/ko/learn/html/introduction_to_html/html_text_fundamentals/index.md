---
title: HTML text fundamentals
slug: Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

HTML의 주요 작업 중 하나는 브라우저가 텍스트를 올바르게 표시 할 수 있도록 텍스트 구조와 의미 (시멘틱({{glossary ( "semantics")}})라고도 함)를 제공하는 것입니다.
이번 글에서는 {{glossary ( "HTML")}}을 사용하여 제목 및 단락을 추가하고, 단어를 강조하고, 목록을 만드는 등의 방법으로 텍스트 페이지를 구성하는 방법을 설명합니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">선행 학습:</th>
      <td>
        <a href="/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >HTML 시작하기</a
        >에서 다뤄봤던 HTML의 기초에 익숙해지기.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        문단, 제목, 목록, 강조 및 인용구를 포함한 구조와 의미를 부여하기 위해
        텍스트의 기본 페이지를 표시하는 방법에 대해 배웁니다.
      </td>
    </tr>
  </tbody>
</table>

## 기본적인 것: 제목과 단락

대부분의 구조화 된 텍스트는 기사, 신문, 대학 교과서, 잡지 등 무엇을 읽든지 간에 제목과 단락으로 구성됩니다.

![An example of a newspaper front cover, showing use of a top level heading, subheadings and paragraphs.](newspaper_small.jpg)

구조화된 컨텐츠는 읽는 경험을 더 쉽고 즐겁게 만들어줍니다.

HTML에서는 각 단락은 {{htmlelement("p")}} 요소 안에 둘러싸여 있어야 합니다. 다음에 나오는 것 처럼 :

```html
<p>저는 문단입니다, 오 네 저는 그렇습니다.</p>
```

각 제목도 heading 요소 안에 둘려싸여 있어야 합니다 :

```html
<h1>저는 그 이야기의 제목입니다.</h1>
```

heading 요소는 총 6개가 있습니다— {{htmlelement("h1")}}, {{htmlelement("h2")}}, {{htmlelement("h3")}}, {{htmlelement("h4")}}, {{htmlelement("h5")}}, and {{htmlelement("h6")}}. 각 요소는 문서에서 다른 수준의 내용을 나타냅니다 ; 메인 제목을 `<h1>` 으로 나타내고, 소제목을 `<h2>` 으로 나타내고, 소제목의 소제목을 `<h3>`으로 나타내고 이런 식으로 제목들을 나타냅니다 .

### 구조화된 계층을 구현하기

예를 들어, 한 이야기에서 \<h1>은 이야기의 제목을 나타내고 \<h2>는 각 장의 제목을 나타내고 \<h3>는 각 장의 하위 절을 나타내고 이런 식으로 나타냅니다.

```html
<h1>The Crushing Bore</h1>

<p>저자 크리스 밀리스</p>

<h2>1장: 어두운 밤</h2>

<p>
  어두운 밤이었습니다. 어디선가, 부엉이가 울었습니다. 비가 세차게
  쏟아졌습니다...
</p>

<h2>2장: 영원한 침묵</h2>

<p>우리의 주인공은 그림자에서 속삭이는 것만큼 속삭일 수 없었습니다...</p>

<h3>망령이 말합니다</h3>

<p>
  몇 시간이 더 지났을 때, 갑자기 망령이 꼿꼿이 앉고 소리쳤습니다. "제발 내
  영혼에 자비를 베풀어 주세요!"
</p>
```

구조화된 계층이 타당해 보이는 한 연관된 요소들이 정확히 무엇을 나타내는지는 당신에게 달려있습니다. 다만 그러한 구조들을 만들 때 다음 몇 가지의 관례만 기억하면 됩니다:

- 가급적이면 페이지 당 하나의 `<h1>` 만 사용해야 합니다. — `<h1>`은 최상위에 있는 표제이며 나머지 다른 표제들은 계층적으로 이것 밑에 위치합니다.
- 각 표제들을 계층적으로 올바른 순서로 사용해야 함을 명심하세요. \<h3>을 하위 표제로 사용하고 그 다음 \<h2>를 하위 표제의 하위로 사용하지 마십시오. 이해하기 어려울 뿐더러 이상한 결과를 야기할 수 있습니다.
- 6개의 Heading을 사용할 수 있지만 꼭 필요한 것이 아니라면 한 페이지에 3개 이상을 사용하지 않도록 하십시오. 많은 목차 레벨을 가진 문서(예를 들어 너무 깊은 heading 계층)는 다루기 힘들고 탐색하기 어려습니다. 이러한 상황에서는 가능하다면 컨텐츠를 여러 페이지로 나누는 것이 바람직합니다.

### 왜 우리는 구조가 필요할까요?

이 질문에 대답하기 위해, [text-start.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-start.html) — 이 글에서 작동 원리를 보여주는 예시 첫 부분 (맛있는 hummus 레시피)- 을 봅시다. 이후 실습에서 필요하기 때문에 당신의 로컬 저장소에 이 파일의 복사본을 저장해야 합니다. 이 문서의 body는 다양한 컨텐츠 조각들을 가지고 있습니다. 이것들이 Marked up 된 것은 아니지만 줄바꿈으로 구분되어 있습니다. (다음 줄로 가기 위해 Enter/Return이 눌림)

하지만, 당신이 브라우저에서 문서를 열어보았을 때 당신은 텍스트가 한 덩어리로 뭉쳐있는 것을 볼 것입니다!

![A webpage that shows a wall of unformatted text, because there are no elements on the page to structure it.](screen_shot_2017-03-29_at_09.20.35.png)

이는 컨텐츠에 구조를 입히는 요소가 없기 때문인데, 그래서 브라우저는 무엇이 heading이고 무엇이 문단인지 알 수 없는 것입니다. 추가로:

- 웹 페이지를 보는 유저는 필요한 컨텐츠를 빠르게 훑어보는 경향이 있고 자주 heading만 읽기도 합니다. (we usually [spend a very short time on a web page](http://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/) 우리는 보통 웹 페이지에서 매우 짧은 시간을 보냅니다.). 몇 초 안에 필요한 어떤 것도 찾지 못하면 그들은 실망하고 다른 곳으로 갈 수도 있습니다.
- 검색 엔진들은 당신의 페이지 내 heading을 페이지 검색 순위에 영향을 주는 중요한 키워드로 고려해 indexing 합니다. heading이 없다면, 당신의 페이지는 검색 엔진 최적화에 관해서는 형편없게 됩니다. {{glossary("SEO")}} (Search Engine Optimization).
- 심각한 시각 장애인들은 자주 웹페이지를 읽지 못합니다. 대신 그들은 듣습니다. 이는 [screen reader](http://en.wikipedia.org/wiki/Screen_reader) 라고 불리는 소프트웨어를 사용해 이루어집니다. 이 소프트웨어는 텍스트 컨텐츠에 더 빠르게 접근할 수 있는 방안을 제공합니다. 사용된 다양한 기술 중 하나로, 그들은 heading을 읽어줌으로서 문서의 개요를 제공하며 그들의 사용자들이 필요로 하는 정보를 빠르게 찾을 수 있도록 합니다. heading이 없었더라면 그들은 어쩔 수 없이 문서 전체를 읽어야 했을 것입니다.
- 컨텐츠를 {{glossary("CSS")}}로 꾸미거나, {{glossary("JavaScript")}}로 흥미로운 일을 하게 하기 위해서, 당신은 관련 컨텐츠를 감싸는 요소가 필요합니다. 그렇게 하면 CSS/JavaScript는 효과적으로 그에 적용될 수 있습니다.

그러므로 우리는 컨텐츠를 구조적인 markup에 적용시켜야 합니다.

### 활동적인 학습: 컨텐츠에 구조 입히기

실제 예시에 바로 적용해 봅시다. 아래 예시에서, Input 부분에 있는 raw text에 요소를 더해서 Output 부분에 heading과 두 문단으로 나오도록 해 봅시다.

실수를 하면 언제든 Reset 버튼을 눌러 리셋할 수 있습니다. 진행 중 막히면, Show solution 버튼을 눌러 답을 볼 수 있습니다.

```html hidden
<h2>입력</h2>
<textarea id="code" class="input">
나의 짧은 이야기

저는 경찰이고 저의 이름은 트리쉬입니다.

제 다리는 판지로 만들어졌고 저는 물고기와 결혼했습니다. </textarea
>
<h2>출력</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="초기화" />
  <input id="solution" type="button" value="해답 보기" />
</div>
```

```css hidden
body {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

.input,
.output {
  width: 90%;
  height: 8em;
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
    "<h1>나의 짧은 이야기</h1>\n<p>저는 경찰이고 저의 이름은 트리쉬입니다.</p>\n<p>제 다리는 판지로 만들어졌고 저는 물고기와 결혼했습니다.</p>";
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code', 700, 500) }}

### 우리는 왜 Semantic을 필요로 할까?

Semantic(직역 : 의미를 담은, 의미론적인)은 우리 주변 어디에서나 사용됩니다. 우리는 과거의 경험으로부터 일상적인 대상의 기능이 무엇인지 구분합니다. 우리가 어떤 것을 보면 그것의 기능은 무엇일지 알 수 있습니다. 그래서, 예를 들어, 우리가 빨간 신호등을 '멈춤'으로, 초록 신호등을 '출발'로 인식합니다. 잘못된 semantic들이 적용될 경우 상황은 복잡해집니다. (빨간색을 '출발'로 사용하는 나라가 있을까요? 없기를 바랍니다.)

비슷한 맥락에서, 우리는 정확한 요소를 사용하고 있는지, 우리의 컨텐츠에 정확한 의미, 기능, 모습을 담았는지 확실히 해야 합니다. 이 맥락에서 {{htmlelement("h1")}} 요소 또한 텍스트에 "내 페이지 최상위 heading"의 역할로 감싸는 semantic 요소입니다.

```html
<h1>이것은 최상위 heading입니다</h1>
```

기본적으로, 브라우저는 이에 큰 사이즈의 폰트를 적용해 heading처럼 보이게 할 것입니다. (비록 당신이 CSS를 사용해 원하는 어떤 모습으로도 스타일 할 수 있지만 말입니다.) 더 중요하게, 이것의 의미론적인 가치는 다양한 방식으로 사용될 것입니다. 예를 들어 검색 엔진이나 screen reader들에서 말이죠. (위에서 서술한 것처럼.)

반면에, 당신은 어떤 요소도 최상위 heading처럼 _보이게_ 할 수 있습니다. 다음을 고려해 봅시다:

```html
<span style="font-size: 32px; margin: 21px 0;"
  >이것은 최상위 heading인가요?</span
>
```

이것은 {{htmlelement("span")}} 요소입니다. 의미가 없죠. 당신은 컨텐츠에 추가적인 의미를 더하지 않고 CSS 를 적용하고 싶을 때 (혹은 JavaScript를 적용해 무언가를 하고 싶을 때) 이것을 사용합니다. (이것들에 대해서는 코스 뒤에서 더 알게 될겁니다.) 우리는 이것에 CSS를 더해 최상위 heading처럼 보이게 했지만, 이것이 semantic(의미론적인) 가치는 없기 때문에, 위에서 서술된 추가적인 이득들은 얻지 못할 것입니다. 작업에 관계있는 HTML 요소를 사용하는 것이 좋은 생각입니다.

## Lists

이제 List에 집중해 봅시다. List는 삶의 모든 부분에 있습니다 - 쇼핑 리스트에서 당신이 매일 집에 오기 위해 무의식적으로 따르는 지시들의 리스트까지, 이 튜토리얼에서 당신이 따르는 지시들의 리스트까지! 웹에서도 List는 어디에나 있습니다. 그리고 우리는 고려해야 할 3개의 종류를 가지고 있습니다.

### Unordered (순서 없음)

정렬되지 않은 목록은 항목의 순서가 중요하지 않은 항목 목록을 표시하는 데 사용됩니다

- 쇼핑 리스트 항목으로 예를 들어보자

```
우유
달걀
빵
후무스
```

순서 없는 리스트를 정렬하기 위해 {{htmlelement("ul")}} element 를 이용해 감싸줍니다.

모든 리스트 아이템:

```html-nolint
<ul>
  우유
  달걀
  빵
  후무스
</ul>
```

마지막으로 그안의 리스트 항목들을 {{htmlelement("li")}} (list item) 태그로 감싸줍니다.

```html
<ul>
  <li>우유</li>
  <li>달걀</li>
  <li>빵</li>
  <li>후무스</li>
</ul>
```

#### 활동적인 학습 : 순서 없는 리스트 만들기

HTML 순서 없는(unordered) 리스트를 만들기 위해 아래에 있는 샘플을 편집해보자.

```html hidden
<h2>입력</h2>
<textarea id="code" class="input">
우유
달걀
빵
후무스</textarea
>
<h2>출력</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="초기화" />
  <input id="solution" type="button" value="해답 보기" />
</div>
```

```css hidden
body {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

.input,
.output {
  width: 90%;
  height: 6em;
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
    "<ul>\n<li>우유</li>\n<li>달걀</li>\n<li>빵</li>\n<li>후무스</li>\n</ul>";
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_2', 700, 400) }}

### Ordered (순서 있음)

순서 있는 리스트는 항목의 순서가 중요한 목록 입니다. 순서를 꼭 정해주세요

예제:

```
도로의 끝까지 운전합니다
우회전합니다
처음 두 개의 로터리를 가로질러 직진합니다
세 번째 로터리에서 좌회전합니다
길을 따라 300미터 올라가면 오른쪽에 학교가 있습니다
```

{{htmlelement("ul")}}태그가 아닌 {{htmlelement("ol")}} 태그로 감싸는것을 제외하고는 마크업 구조는 순서가 없는 리스트와 동일하다.

```html
<ol>
  <li>도로의 끝까지 운전합니다</li>
  <li>우회전합니다</li>
  <li>처음 두 개의 로터리를 가로질러 직진합니다</li>
  <li>세 번째 로터리에서 좌회전합니다</li>
  <li>길을 따라 300미터 올라가면 오른쪽에 학교가 있습니다</li>
</ol>
```

#### 활동적인 학습: 순서가 있는 리스트를 만들어보자

HTML 순서가 있는(ordered) 리스트를 만들기 위해 아래에 있는 샘플을 편집해보자.

```html hidden
<h2>입력</h2>
<textarea id="code" class="input">
도로의 끝까지 운전합니다
우회전합니다
처음 두 개의 로터리를 가로질러 직진합니다
세 번째 로터리에서 좌회전합니다
길을 따라 300미터 올라가면 오른쪽에 학교가 있습니다</textarea
>
<h2>출력</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="초기화" />
  <input id="solution" type="button" value="해답 보기" />
</div>
```

```css hidden
body {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

.input,
.output {
  width: 90%;
  height: 8em;
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
    "<ol>\n<li>도로의 끝까지 운전합니다</li>\n<li>우회전합니다</li>\n<li>처음 두 개의 로터리를 가로질러 직진합니다</li>\n<li>세 번째 로터리에서 좌회전합니다</li>\n<li>길을 따라 300미터 올라가면 오른쪽에 학교가 있습니다</li>\n</ol>";
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_3', 700, 500) }}

### 활동적인 학습: 우리의 레시피 페이지를 만들어보자

이제 우리는 레시피 페이지 예시를 만드는 데 필요한 모든 정보를 가지고 있습니다. text-start.html 시작 파일을 저장해 그곳에서 작업을 하셔도 좋고, 아래에 있는 편집 가능한 샘플에서 작업을 할 수도 있습니다. 따로 파일을 생성해서 작업을 하면 언제든지 편집이 가능합니다. 아래 샘플에서 작업을 하면 다음에 이 페이지를 열 때 작업 기록이 사라져 있을 것입니다. 이 두가지 방법은 장점과 단점 모두를 지니고 있습니다.

```html hidden
<h2>입력</h2>
<textarea id="code" class="input">
빠른 후무스 레시피

    이 레시피는 문제 없이 맛있는 후무스를 빠르게 만들 수 있습니다. 수년 동안 제가 읽은 레시피는 여러 가지 다른 레시피에서 변형한 것입니다.

    후무스는 그리스와 중동 요리에 많이 사용되는 맛있고 두툼한 페이스트입니다. 샐러드, 구운 고기, 그리고 피타 빵과 함께 먹으면 매우 맛있습니다.

    재료

    병아리콩(가르반조 콩) 1캔(400g)
    타히니 175g
    햇볕에 말린 토마토 6개
    붉은 고추 반 개
    카이엔 고추 약간
    마늘 1쪽
    올리브 오일 약간

    Instructions만드는 방법

    마늘 껍질을 벗기고, 굵게 다집니다.
    후추에서 씨와 꼭지를 모두 제거하고, 굵게 다집니다.
    모든 재료를 푸드 프로세서에 넣습니다.
    모든 재료를 페이스트 형태로 가공합니다.
    거친 후무스 "덩어리"를 원하시면, 짧은 시간 동안 가공합니다.
    부드러운 후무스를 원하신다면, 더 오래 가공해 주세요.

    색다른 맛을 원한다면, 레몬과 고수, 칠리고추, 라임과 치폴레, 하리사와 민트, 또는 시금치와 페타 치즈를 소량 섞어보세요. 실험을 통해 자신에게 맞는 조합을 찾아보세요.

    보관

    완성된 후무스를 밀폐 용기에 담아 냉장 보관하세요. 만든 후 일주일 정도는 사용할 수 있습니다. 거품이 나기 시작하면, 반드시 버려야 합니다.

    후무스는 냉동 보관에 적합하므로 해동 후 두 달 이내에 사용해야 합니다.</textarea
>
<h2>출력</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="초기화" />
  <input id="solution" type="button" value="해답 보기" />
</div>
```

```css hidden
body {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

.input,
.output {
  width: 90%;
  height: 8em;
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
    '<h1>빠른 후무스 레시피</h1>\n\n<p>이 레시피는 문제 없이 맛있는 후무스를 빠르게 만들 수 있습니다. 수년 동안 제가 읽은 레시피는 여러 가지 다른 레시피에서 변형한 것입니다.</p>\n\n<p>후무스는 그리스와 중동 요리에 많이 사용되는 맛있고 두툼한 페이스트입니다. 샐러드, 구운 고기, 그리고 피타 빵과 함께 먹으면 매우 맛있습니다.</p>\n\n<h2>재료</h2>\n\n<ul>\n<li>병아리콩(가르반조 콩) 1캔(400g)</li>\n<li>타히니 175g</li>\n<li>햇볕에 말린 토마토 6개</li>\n<li>붉은 고추 반 개</li>\n<li>카이엔 고추 약간</li>\n<li>마늘 1쪽</li>\n<li>올리브 오일 약간</li>\n</ul>\n\n<h2>만드는 방법</h2>\n\n<ol>\n<li>마늘 껍질을 벗기고, 굵게 다집니다.</li>\n<li>후추에서 씨와 꼭지를 모두 제거하고, 굵게 다집니다.</li>\n<li>모든 재료를 푸드 프로세서에 넣습니다.</li>\n<li>모든 재료를 페이스트 형태로 가공합니다.</li>\n<li>거친 후무스 "덩어리"를 원하시면, 짧은 시간 동안 가공합니다.</li>\n<li>부드러운 후무스를 원하신다면, 더 오래 가공해 주세요.</li>\n</ol>\n\n<p>색다른 맛을 원한다면, 레몬과 고수, 칠리고추, 라임과 치폴레, 하리사와 민트, 또는 시금치와 페타 치즈를 소량 섞어보세요. 실험을 통해 자신에게 맞는 조합을 찾아보세요.</p>\n\n<h2>보관</h2>\n\n<p>완성된 후무스를 밀폐 용기에 담아 냉장 보관하세요. 만든 후 일주일 정도는 사용할 수 있습니다. 거품이 나기 시작하면, 반드시 버려야 합니다.</p>\n\n<p>후무스는 냉동 보관에 적합하므로 해동 후 두 달 이내에 사용해야 합니다.</p>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);

window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_4', 700, 500) }}

위의 문제를 해결하는데 어려움을 겪고있다면, _Show solution_ 버튼을 클릭하여 해답을 확인하거나, GitHub 레포지토리에 존재하는 [text-complete.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-complete.html) 파일을 확인해 주시길 바랍니다.

### 리스트 내부의 리스트(Nesting lists)

하나의 리스트 내부에 다른 리스트를 추가하는 것은 아무런 문제가 없습니다. 당신이 최상위 리스트 아이템의 내부에 다른 리스트를 추가하고 싶다면, 하단의 예제들 중 두번째 예제를 확인해주세요.

```html
<ol>
  <li>마늘 껍질을 벗기고, 굵게 다집니다.</li>
  <li>후추에서 씨와 꼭지를 모두 제거하고, 굵게 다집니다.</li>
  <li>모든 재료를 푸드 프로세서에 넣습니다.</li>
  <li>모든 재료를 페이스트 형태로 가공합니다.</li>
  <li>거친 후무스 "덩어리"를 원하시면, 짧은 시간 동안 가공합니다.</li>
  <li>부드러운 후무스를 원하신다면, 더 오래 가공해 주세요.</li>
</ol>
```

마지막 두개의 리스트 아이템은 `Process all the ingredients into a paste.`와 밀접한 관계가 있는 내용입니다. 그러므로 두개의 리스트 아이템은 `Process all the ingredients into a paste.`의 내부에 중첩되어 나타나는 것이 더 좋을 것입니다. 하단과 같은 방법을 사용해서 말이죠.

```html
<ol>
  <li>마늘 껍질을 벗기고, 굵게 다집니다.</li>
  <li>후추에서 씨와 꼭지를 모두 제거하고, 굵게 다집니다.</li>
  <li>모든 재료를 푸드 프로세서에 넣습니다.</li>
  <li>
    모든 재료를 페이스트 형태로 가공합니다.
    <ul>
      <li>거친 후무스 "덩어리"를 원하시면, 짧은 시간 동안 가공합니다.</li>
      <li>부드러운 후무스를 원하신다면, 더 오래 가공해 주세요.</li>
    </ul>
  </li>
</ol>
```

첫번째의 예제로 돌아가, 두번째의 예제처럼 변경하는 연습을 해보시길 바랍니다.

## 중요와 강조

우리는 문장의 의미를 바꾸거나 특정한 단어를 강조하기위해 종종 일반적인 방법과 다르게 표현하기도 합니다. HTML은 그런 경우를 표시할 수 있도록 다양한 의미 요소를 제공하며, 이 섹션에서는 가장 일반적인 몇 가지 요소를 살펴보기로 합니다.

### 중요(Emphasis)

우리는 말을 하면서 특정 단어를 강세를 두고 발음하는 방법으로 의미를 다르게 표현합니다. 마찬가지로, 글에서는 단어에 강세를 두기 위해 이탤릭체로 표현하는 경향이 있습니다. 예를 들어, 다음 두 문장은 다른 의미를 가집니다.

당신이 늦지 않아서 다행입니다.

당신이 _늦지_ 않아서 _다행_\입니다.

첫 문장은 상대가 늦지 않은 것에 대해 진심으로 안도하는 것처럼 들립니다. 이와는 대조적으로, 두 번째 문장은 상대가 조금 늦게 도착한 것에대해 비꼬거나 짜증을 표현하는 것처럼 들립니다.

HTML에서는 이러한 경우를 표시하기 위해 {{htmlelement("em")}} (emphasis) 요소를 사용합니다. 문서를 더 흥미롭게 읽게 될 뿐만 아니라, 화면판독기에 인식되면 다른 톤의 목소리로 표현됩니다. 브라우저에서는 기본적으로 이탤릭체로 스타일을 지정하지만, 단지 이탤릭체로 스타일링하기 위해 이 태그를 사용하는 것은 지양합니다. 스타일링을 위해서는{{htmlelement("span")}} 요소에 약간의 CSS를 더하거나 {{htmlelement("i")}}요소를 사용할 수 있습니다.(아래 참조).

```html
<p>당신이 <em>늦지</em> 않아서 <em>다행</em>입니다.</p>
```

### 강조(Strong importance)

우리는 중요한 단어를 강조하기 위해 강세를 두고 말하거나 글자를 두껍게 표현합니다. 예를들면,

이 액체는 **독성이 강합니다**.

당신만 믿고 있어요. 늦지 **마세요**!

HTML에서는 이러한 경우를 표시하기 위해 {{htmlelement("strong")}} (strong importance)요소를 사용합니다. 문서를 더 유용하게 만드는 것뿐만 아니라, 화면판독기에 인식되면 다른 톤의 목소리로 표현됩니다. 브라우저에서는 기본적으로 굵은 텍스트로 스타일을 지정하지만, 단지 굵게 스타일링하기 위해 이 태그를 사용하는 것은 지양합니다. 스타일링을 위해서는 {{htmlelement("span")}} 요소에 약간의 CSS를 더하거나 {{htmlelement("b")}} 요소를 사용할 수 있습니다.(아래 참조).

```html
<p>이 액체는 <strong>독성이 강합니다</strong>.</p>

<p>당신만 믿고 있어요. 늦지 <strong>마세요</strong>!</p>
```

원한다면 각각의 태그가 서로의 안에 위치할 수 있습니다.

```html
<p>
  이 액체는 <strong>독성이 강합니다</strong>. 그것을 마시면,
  <strong>당신은 <em>사망</em>할 수도 있습니다</strong>.
</p>
```

### Active learning: Let's be important!

이 Active Learning 섹션에서는 편집 가능한 예시를 제공하였습니다. 이 안에서 여러분이 필요하다고 생각되는 단어에 강조와 중요성을 더해보며 연습할 수 있기를 바랍니다.

```html hidden
<h2>입력</h2>
<textarea id="code" class="input">
<h1>중요한 공지</h1>

<p>2010년 1월 9일 일요일에, 밀워키 시내의 한 쇼핑 센터에서 고트족이
정원 요정 여러 마리를 훔치는 장면이 목격되었습니다.
그들은 모두 녹색 점프슈트와 우스꽝스러운 모자를 쓰고 있었고,
즐거운 시간을 보내고 있는 것 같았습니다.
이 사건에 대해 어떠한 정보가 있으신 분은
지금 바로 경찰에 연락해 주세요.</p></textarea
>
<h2>출력</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="초기화" />
  <input id="solution" type="button" value="제안 보기" />
</div>
```

```css hidden
body {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

.input,
.output {
  width: 90%;
  height: 8em;
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
    "<h1>중요한 공지</h1>\n<p><strong>2010년 1월 9일 일요일</strong>에, <strong>밀워키</strong> 시내의 한 쇼핑 센터에서 <em>고트</em>족이 <strong>정원 요정 <em>여러 마리</em></strong>를 훔치는 장면이 목격되었습니다. 그들은 모두 <em>녹색 점프슈트</em>와 <em>우스꽝스러운 모자</em>를 쓰고 있었고, 즐거운 시간을 보내고 있는 것 같았습니다. 이 사건에 대해 <strong>어떠한</strong> 정보가 있으신 분은 <strong>지금 바로</strong> 경찰에 연락해 주세요.</p>";
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_5', 700, 500) }}

### Italic, bold, underline

우리가 지금까지 얘기했던 요소들은 관련된 의미들을 명확히 구분했습니다. {{htmlelement("b")}}, {{htmlelement("i")}}, {{htmlelement("u")}}의 상황들은 좀 복잡하죠. 이 요소들은 CSS가 형편없이 지원되거나 완전히 지원되지 않는 경우에 이탤릭체 또는 밑줄 등을 표현할 수 있도록 고안되었습니다. 의미론적이 아닌 표현에만 영향을 주는 이와 같은 요소들은 **현재적 요소**로 알려져 있으며, 더 이상 사용되어서는 안됩니다. 앞에서 살펴본 바와 같이 의미론은 접근성, SEO 등에 매우 중요하기 때문이죠.

HTML5 에서는 `<b>`, `<i>,` `<u>` 를 조금 혼란스럽긴 하지만 새로운 의미론적 역할로 재정립하였습니다.

가장 좋은 경험법칙: 적합한 요소가 더 없다면, 과거로부터 줄곧 굵거나 이탤릭체를 쓰거나 밑줄을 치는 방법으로 표현했던 의미를 전달하기 위해 `<b>`, `<i>`, `<u>` 를 사용하는 것이 적절할 것 같다. 그러나 늘 접근성에 관해 염두하는 것은 항상 중요하다. 이탤릭체의 개념은 스크린리더를 사용하는 사람이나 라틴 문자체계 이외의 사용자에게는 별로 도움이 되지 않는다.

- {{HTMLElement('i')}} 요소는 과거로부터 줄곧 기울임꼴로 전달되는 의미를 전달하기 위해 사용된다. 외래어, 분류학 명칭, 전문 용어, 생각...
- {{HTMLElement('b')}} 요소는 과거로부터 줄곧 굵은 글씨로 전달되는 의미를 전달할 때 사용한다. 주요 단어, 제품 이름, 주요 문장...
- {{HTMLElement('u')}} 요소는 과거로부터 줄곧 밑줄을 치는 것으로 전달되는 의미를 전달할 떄 사용한다. 적절한 이름, 잘못된 철자...

> **참고:** 밑줄에 대한 위험성 중 하나: **사람들은 밑줄을 하이퍼링크와 강하게 연관시킨다.** 따라서 웹에서는 링크에만 밑줄을 긋는 것이 가장 좋다. 의미론적으로 적합한 경우 `<u>` 요소를 사용하되, CSS를 사용하여 기본 밑줄을 웹에서 더 적합하게 변경할 수 있는지 고려한다. 그것이 어떻게 이루어질 수 있는지는 아래의 예에서 확인할 수 있다.

```html
<!-- 학명 -->
<p>
  붉은목벌새 (<i>Archilochus colubris</i>)는 북아메리카 동부에서 가장 흔한
  벌새입니다.
</p>

<!-- 외래어 -->
<p>
  메뉴에는 <i lang="uk-latn">vatrushka</i>, <i lang="id">nasi goreng</i>, 그리고
  <i lang="fr">soupe à l'oignon</i>과 같은 이국적인 단어가 가득했습니다.
</p>

<!-- 알려진 철자 오류 -->
<p>언젠가 <u>철자</u>를 더 잘 쓰는 방법을 배울 거예요.</p>

<!-- 일련의 지침에서 키워드를 강조 표시합니다 -->
<ol>
  <li>빵 한 덩어리에서 빵 두 조각을 <b>자릅니다</b>.</li>
  <li>빵 조각 사이에 토마토 슬라이스와 상추 한 잎을 <b>넣습니다</b>.</li>
</ol>
```

## 요약

일단 이게 다에요! 이 글을 통해 여러분은 HTML에서 텍스트를 표현하기 시작하는 방법에 대해 좋은 아이디어를 얻었고, 이 영역에서 가장 중요한 몇가지 요소들을 알게되었습니다. 이 코스에에서 다룰 의미론적 요소는 훨씬 더 많으며 [하이퍼링크를 만드는 방법](/ko/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)에 대해 자세히 알아보도록 합시다.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}
