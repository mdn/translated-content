---
title: HTML 텍스트 기본
slug: Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

HTML의 주요 작업 중 하나는 브라우저가 텍스트를 올바르게 표시 할 수 있도록 텍스트 구조와 의미 (시멘틱({{glossary ( "semantics")}})라고도 함)를 제공하는 것입니다.
이번 글에서는 {{glossary ( "HTML")}}을 사용하여 제목 및 단락을 추가하고, 단어를 강조하고, 목록을 만드는 등의 방법으로 텍스트 페이지를 구성하는 방법을 설명합니다.

<table>
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

## 기본적인 것 : 제목과 단락

대부분의 구조화 된 텍스트는 기사, 신문, 대학 교과서, 잡지 등 무엇을 읽든지 간에 제목과 단락으로 구성됩니다.

![An example of a newspaper front cover, showing use of a top level heading, subheadings and paragraphs.](newspaper_small.jpg)

구조화된 컨텐츠는 읽는 경험을 더 쉽고 즐겁게 만들어줍니다.

HTML에서는 각 단락은 {{htmlelement("p")}} 요소 안에 둘러싸여 있어야 합니다. 다음에 나오는 것처럼요.

```html
<p>저는 문단입니다, 오 네 저는 그렇습니다.</p>
```

각 제목도 heading 요소 안에 둘려싸여 있어야 합니다.

```html
<h1>저는 그 이야기의 제목입니다.</h1>
```

heading 요소는 총 6개가 있습니다. {{htmlelement("h1")}}, {{htmlelement("h2")}}, {{htmlelement("h3")}}, {{htmlelement("h4")}}, {{htmlelement("h5")}}, 그리고 {{htmlelement("h6")}}. 각 요소는 문서에서 다른 수준의 내용을 나타냅니다. 메인 제목을 `<h1>` 으로 나타내고, 소제목을 `<h2>` 으로 나타내고, 소제목의 소제목을 `<h3>`으로 나타내고 이런 식으로 제목들을 나타냅니다.

### 구조화된 계층을 구현하기

예를 들어, 한 이야기에서 \<h1>은 이야기의 제목을 나타내고 \<h2>는 각 장의 제목을 나타내고 \<h3>는 각 장의 하위 절을 나타내고 이런 식으로 나타냅니다.

```html
<h1>The Crushing Bore</h1>

<p>저자 크리스 밀리스</p>

<h2>1장: 어두운 밤</h2>

<p>
  어두운 밤이었습니다. 어디선가, 부엉이가 울었습니다. 비가 세차게 쏟아졌습니다…
</p>

<h2>2장: 영원한 침묵</h2>

<p>우리의 주인공은 그림자에서 속삭이는 것만큼 속삭일 수 없었습니다…</p>

<h3>>망령이 말합니다</h3>

<p>
  몇 시간이 더 지났을 때, 갑자기 망령이 꼿꼿이 앉고 소리쳤습니다. "제발 내
  영혼에 자비를 베풀어 주세요!"
</p>
```

구조화된 계층이 타당해 보이는 한 연관된 요소들이 정확히 무엇을 나타내는지는 당신에게 달려있습니다. 다만 그러한 구조들을 만들 때 다음 몇 가지의 관례만 기억하면 됩니다.

- 가급적이면 페이지 당 하나의 `<h1>` 만 사용해야 합니다. `<h1>`은 최상위에 있는 표제이며 나머지 다른 표제들은 계층적으로 이것 밑에 위치합니다.
- 각 표제들을 계층적으로 올바른 순서로 사용해야 함을 명심하세요. \<h3>을 하위 표제로 사용하고 그 다음 \<h2>를 하위 표제의 하위로 사용하지 마십시오. 이해하기 어려울 뿐더러 이상한 결과를 야기할 수 있습니다.
- 6개의 Heading을 사용할 수 있지만, 꼭 필요한 것이 아니라면 한 페이지에 3개 이상을 사용하지 않도록 하십시오. 많은 목차 레벨을 가진 문서(예를 들어, 너무 깊은 heading 계층)는 다루기 힘들고 탐색하기 어려습니다. 이러한 상황에서는 가능하다면 컨텐츠를 여러 페이지로 나누는 것이 바람직합니다.

### 왜 우리는 구조가 필요할까요?

이 질문에 대답하기 위해, [text-start.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-start.html) — 이 글에서 작동 원리를 보여주는 예시 첫 부분(맛있는 후무스 레시피)을 봅시다. 이후 실습에서 필요하기 때문에 당신의 로컬 저장소에 이 파일의 복사본을 저장해야 합니다. 이 문서의 body는 다양한 컨텐츠 조각들을 가지고 있습니다. 이것들이 Marked up 된 것은 아니지만 줄바꿈으로 구분되어 있습니다. (다음 줄로 가기 위해 Enter/Return이 눌림)

하지만, 당신이 브라우저에서 문서를 열어보았을 때 당신은 텍스트가 한 덩어리로 뭉쳐있는 것을 볼 것입니다!

![A webpage that shows a wall of unformatted text, because there are no elements on the page to structure it.](screen_shot_2017-03-29_at_09.20.35.png)

이는 컨텐츠에 구조를 입히는 요소가 없기 때문인데, 그래서 브라우저는 무엇이 heading이고 무엇이 문단인지 알 수 없는 것입니다. 추가로:

- 웹 페이지를 보는 유저는 필요한 컨텐츠를 빠르게 훑어보는 경향이 있고 자주 heading만 읽기도 합니다. (we usually [spend a very short time on a web page](http://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/) 우리는 보통 웹 페이지에서 매우 짧은 시간을 보냅니다.). 몇 초 안에 필요한 어떤 것도 찾지 못하면 그들은 실망하고 다른 곳으로 갈 수도 있습니다.
- 검색 엔진들은 당신의 페이지 내 heading을 페이지 검색 순위에 영향을 주는 중요한 키워드로 고려해 indexing 합니다. heading이 없다면, 당신의 페이지는 검색 엔진 최적화에 관해서는 형편없게 됩니다. {{glossary("SEO")}} (Search Engine Optimization).
- 심각한 시각 장애인들은 자주 웹 페이지를 읽지 못합니다. 대신 그들은 듣습니다. 이는 [screen reader](http://en.wikipedia.org/wiki/Screen_reader) 라고 불리는 소프트웨어를 사용해 이루어집니다. 이 소프트웨어는 텍스트 컨텐츠에 더 빠르게 접근할 수 있는 방안을 제공합니다. 사용된 다양한 기술 중 하나로, 그들은 heading을 읽어줌으로서 문서의 개요를 제공하며 그들의 사용자들이 필요로 하는 정보를 빠르게 찾을 수 있도록 합니다. heading이 없었더라면 그들은 어쩔 수 없이 문서 전체를 읽어야 했을 것입니다.
- 컨텐츠를 {{glossary("CSS")}}로 꾸미거나, {{glossary("JavaScript")}}로 흥미로운 일을 하게 하기 위해서, 당신은 관련 컨텐츠를 감싸는 요소가 필요합니다. 그렇게 하면 CSS/JavaScript는 효과적으로 그에 적용될 수 있습니다.

그러므로 우리는 컨텐츠를 구조적인 markup에 적용시켜야 합니다.

### 활동적인 학습: 컨텐츠에 구조 입히기

실제 예시에 바로 적용해 봅시다. 아래 예시에서, Input 부분에 있는 raw text에 요소를 더해서 Output 부분에 heading과 두 문단으로 나오도록 해 봅시다.

실수를 하면 언제든 초기화 버튼을 눌러 리셋할 수 있습니다. 진행 중 막히면, 해답 보기 버튼을 눌러 답을 볼 수 있습니다.

```html hidden
<h2>실시간 출력</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>편집 가능한 코드</h2>
<p class="a11y-label">
  Esc 키를 눌러 코드 영역에서 초점을 멀리 이동합니다. (Tab 키를 누르면 탭 문자가
  삽입됩니다.)
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
나의 짧은 이야기 저는 경찰이고 저의 이름은 트리쉬입니다.

제 다리는 판지로 만들어졌고 저는 물고기와 결혼했습니다.
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="초기화" />
  <input id="solution" type="button" value="해답 보기" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution = `<h1>나의 짧은 이야기</h1>
<p>
  저는 경찰이고 저의 이름은 트리쉬입니다.
</p>
<p>
  제 다리는 판지로 만들어졌고 저는 물고기와 결혼했습니다.
</p>`;

let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "해답 보기";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "해답 보기") {
    textarea.value = solutionEntry;
    solution.value = "해답 숨기기";
  } else {
    textarea.value = userEntry;
    solution.value = "해답 보기";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// Stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead
textarea.onkeydown = (e) => {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code
textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "해답 보기") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Giving_our_content_structure', 700, 400, "", "") }}

### 우리는 왜 Semantic을 필요로 할까?

Semantic(직역 : 의미를 담은, 의미론적인)은 우리 주변 어디에서나 사용됩니다. 우리는 과거의 경험으로부터 일상적인 대상의 기능이 무엇인지 구분합니다. 우리가 어떤 것을 보면 그것의 기능은 무엇일지 알 수 있습니다. 그래서, 예를 들어, 우리가 빨간 신호등을 '멈춤'으로, 초록 신호등을 '출발'로 인식합니다. 잘못된 semantic들이 적용될 경우 상황은 복잡해집니다. (빨간색을 '출발'로 사용하는 나라가 있을까요? 없기를 바랍니다.)

비슷한 맥락에서, 우리는 정확한 요소를 사용하고 있는지, 우리의 컨텐츠에 정확한 의미, 기능, 모습을 담았는지 확실히 해야 합니다. 이 맥락에서 {{htmlelement("h1")}} 요소 또한 텍스트에 "내 페이지 최상위 heading"의 역할로 감싸는 semantic 요소입니다.

```html
<h1>이것은 최상위 heading입니다</h1>
```

기본적으로, 브라우저는 이에 큰 사이즈의 폰트를 적용해 heading처럼 보이게 할 것입니다. (비록 당신이 CSS를 사용해 원하는 어떤 모습으로도 스타일 할 수 있지만 말입니다.) 더 중요하게, 이것의 의미론적인 가치는 다양한 방식으로 사용될 것입니다. 예를 들어 검색 엔진이나 screen reader들에서 말이죠. (위에서 서술한 것처럼.)

반면에, 당신은 어떤 요소도 최상위 heading처럼 _보이게_ 할 수 있습니다. 다음을 고려해 봅시다.

```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  이것은 최상위 heading인가요?
</span>
```

이것은 {{htmlelement("span")}} 요소입니다. 의미가 없죠. 당신은 컨텐츠에 추가적인 의미를 더하지 않고 CSS 를 적용하고 싶을 때 (혹은 JavaScript를 적용해 무언가를 하고 싶을 때) 이것을 사용합니다. (이것들에 대해서는 이 과정 뒤에서 더 알게 될 것입니다.) 우리는 이것에 CSS를 더해 최상위 heading처럼 보이게 했지만, 이것이 semantic(의미론적인) 가치는 없기 때문에 위에서 서술된 추가적인 이득들은 얻지 못할 것입니다. 작업에 관계있는 HTML 요소를 사용하는 것이 좋은 생각입니다.

## Lists

이제 List에 집중해 봅시다. List는 삶의 모든 부분에 있습니다 - 쇼핑 리스트에서 당신이 매일 집에 오기 위해 무의식적으로 따르는 지시들의 리스트까지, 이 튜토리얼에서 당신이 따르는 지시들의 리스트까지! 웹에서도 List는 어디에나 있습니다. 그리고 우리는 고려해야 할 3개의 종류를 가지고 있습니다.

### Unordered (순서 없음)

정렬되지 않은 목록은 항목의 순서가 중요하지 않은 항목 목록을 표시하는 데 사용됩니다. 쇼핑 리스트 항목으로 예를 들어봅니다.

```plain
우유
달걀
빵
후무스
```

모든 정렬되지 않은 목록은 모든 목록 항목을 감싸는 {{htmlelement("ul")}} 요소로 시작됩니다.

```html-nolint
<ul>
  우유
  달걀
  빵
  후무스
</ul>
```

마지막 단계는 각 목록 항목을 {{htmlelement("li")}} (목록 항목) 요소로 감싸는 것입니다.

```html
<ul>
  <li>우유</li>
  <li>달걀</li>
  <li>빵</li>
  <li>후무스</li>
</ul>
```

#### 활동적인 학습 : 순서 없는 리스트 만들기

아래의 실시간 샘플을 편집하여 나만의 HTML 순서 없는 목록을 만들어 보세요.

```html hidden
<h2>실시간 출력</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>편집 가능한 코드</h2>
<p class="a11y-label">
  Esc 키를 눌러 코드 영역에서 초점을 멀리 이동합니다. (Tab 키를 누르면 탭 문자가
  삽입됩니다.)
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
우유
달걀
빵
후무스
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="초기화" />
  <input id="solution" type="button" value="해답 보기" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution =
  "<ul>\n<li>우유</li>\n<li>달걀</li>\n<li>빵</li>\n<li>후무스</li>\n</ul>";
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "해답 보기";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "해답 보기") {
    textarea.value = solutionEntry;
    solution.value = "해답 숨기기";
  } else {
    textarea.value = userEntry;
    solution.value = "해답 보기";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code
textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "해답 보기") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```
