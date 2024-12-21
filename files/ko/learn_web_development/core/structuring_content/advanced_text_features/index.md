---
title: 고급 텍스트 서식 지정
slug: Learn_web_development/Core/Structuring_content/Advanced_text_features
original_slug: Learn/HTML/Introduction_to_HTML/Advanced_text_formatting
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}

텍스트 서식에 있어서 [HTML 텍스트 기본](/ko/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) 에서 이야기 하지 않은 수많은 요소들이 있습니다. 이 글에서 설명하는 요소들은 비교적 많이 알려져 있지않지만 여전히 유용합니다(그리고 이것은 완전한 목록이 아닙니다). 이 글에서 여러분은 인용구, 서술문, 컴퓨터 코드 및 관력 텍스트, 아래 첨자, 위 첨자, 연락처 정보 등을 표시하는 방법에 대해 배울 것입니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        <a href="/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >HTML 시작하기</a
        >
        에 설명된 기본적인 HTML 숙련도.
        <a
          href="/ko/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML 텍스트 기본</a
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

## 설명 목록

HTML 텍스트 기본에서 [기본 목록을 마크업하는 방법](/ko/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists)을 안내했지만, 해당 글에는 여러분이 앞으로 종종 마주할 세 번째 리스트 타입인 **설명 목록**에 대해선 언급하지 않았습니다. 이 리스트의 목적은 용어 및 정의, 질문 및 답변과 같은 일련의 항목 및 관련 설명을 표시하는 것입니다. 아래의 예시를 살펴봅시다.

```plain
soliloquy
드라마에서 등장인물이 혼잣말을 하며 내면의 생각이나 감정을 표현하고 그 과정에서 청중에게 전달합니다 (다른 등장인물에게는 전달하지 않음.)
monologue
드라마에서 등장인물이 자신의 생각을 큰 소리로 말하여 청중 및 다른 등장인물과 공유하는 것을 말합니다.
aside
드라마에서 캐릭터가 유머러스하거나 극적인 효과를 위해 청중에게만 의견을 공유하는 경우. 일반적으로 느낌, 생각 또는 추가 배경 정보입니다.
```

설명 목록은 다른 타입의 리스트와 다르게 {{htmlelement("dl")}} 태그를 사용합니다. 또한 각 용어는 {{htmlelement("dt")}} (설명 용어) 요소를 사용하고, 각 설명은 {{htmlelement("dd")}} (설명 정의) 요소를 사용합니다.

### 설명 목록 예제

예제 마크업을 마무리해 보겠습니다.

```html
<dl>
  <dt>soliloquy</dt>
  <dd>
    드라마에서 등장인물이 혼잣말을 하며 내면의 생각이나 감정을 표현하고 그
    과정에서 청중에게 전달합니다 (다른 등장인물에게는 전달하지 않음.)
  </dd>
  <dt>monologue</dt>
  <dd>
    드라마에서 등장인물이 자신의 생각을 큰 소리로 말하여 청중 및 다른 등장인물과
    공유하는 것을 말합니다.
  </dd>
  <dt>aside</dt>
  <dd>
    드라마에서 캐릭터가 유머러스하거나 극적인 효과를 위해 청중에게만 의견을
    공유하는 경우. 일반적으로 느낌, 생각 또는 추가 배경 정보입니다.
  </dd>
</dl>
```

브라우저에서 제공하는 기본 스타일에 의해서 약간 들여쓰기된 설명 목록과 함께 설명이 표시됩니다.

{{EmbedLiveSample('Description_list_example', '100%', '285px')}}

### 하나의 용어에 대한 다중 설명

하나의 용어에 여러 개의 설명이 포함될 수 있다는 점에 유의하세요. 아래는 예시입니다.

```html
<dl>
  <dt>aside</dt>
  <dd>
    드라마에서 캐릭터가 유머러스하거나 극적인 효과를 위해 청중에게만 의견을
    공유하는 경우. 일반적으로 느낌, 생각 또는 추가 배경 정보입니다.
  </dd>
  <dd>
    서면에서는 현재 주제와 관련되어 있지만 콘텐츠의 주요 흐름에 직접 들어가지
    않으므로 근처에 표시됩니다 (종종 옆의 상자에 표시됨.)
  </dd>
</dl>
```

{{EmbedLiveSample('Multiple_descriptions_for_one_term', '100%', '193px')}}

### 추가 학습: 일련의 정의 표시

이제 설명 목록을 사용해 볼 차례입니다. 입력 필드에 요소들을 추가하여 출력 필드에 설명목록이 표시되도록 하세요. 원하시는 경우 자신만의 용어와 설명을 사용해 볼 수도 있습니다.

실수를 하셨을 경우에는, Reset 버튼을 통해서 재시작하실 수 있습니다. 해답을 찾지 못하셨을 경우에 Show solution 버튼을 통해서 해답을 보실 수 있습니다.

```html hidden
<h2>실시간 출력</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>편집 가능한 코드</h2>
<p class="a11y-label">
  코드 영역에서 포커스를 이동하려면 Esc키를 누르십시오 (Tab키로 탭 문자를 삽입).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
베이컨
세상을 하나로 묶는 접착제.
달걀
케이크를 하나로 묶어주는 접착제.
커피
아침에 세상을 움직이게 하는 음료.
연한 갈색.
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
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
  "<dl>\n <dt>베이컨</dt>\n <dd>세상을 하나로 묶는 접착제.</dd>\n <dt>달걀</dt>\n <dd>케이크를 하나로 묶어주는 접착제.</dd>\n <dt>커피</dt>\n <dd>아침에 세상을 움직이게 하는 음료.</dd>\n <dd>연한 갈색.</dd>\n</dl>";
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
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
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code', 700, 500) }}

## 인용구

HTML에는 인용구 표시에 사용할 수 있는 요소가 존재합니다. 해당 요소는 블록 또는 인라인 요소인지에 따라서 다르게 표시됩니다.

### 블록 인용구

블록 레벨 컨텐츠의 섹션(문단, 여러 단락, 리스트 등)이 인용된 경우, 이를 나타내는 {{htmlelement("blockquote")}} 요소로 감싸야합니다. 그리고 [`cite`](/ko/docs/Web/HTML/Element/blockquote#cite) 속성에 출처를 표기합니다. 아래의 예시는 MDN `<blockquote>` 요소 페이지를 인용한 것 입니다.

```html
<p>
  <strong>HTML <code>&lt;blockquote&gt;</code> 요소</strong> (또는
  <em>HTML 인용 블록 요소</em>)는 안쪽의 텍스트가 긴 인용문임을 나타냅니다.
</p>
```

이것을 블록 인용구 변경하기 위해서 아래와 같이 할 수 있습니다.

```html
<p>다음은 블록 인용구입니다.</p>
<blockquote
  cite="https://developer.mozilla.org/ko/docs/Web/HTML/Element/blockquote">
  <p>
    <strong>HTML <code>&lt;blockquote&gt;</code> 요소</strong> (또는
    <em>HTML 인용 블록 요소</em>)는 안쪽의 텍스트가 긴 인용문임을 나타냅니다.
  </p>
</blockquote>
```

브라우저 기본 스타일은 인용구를 표현할 때, 들여쓰기 된 단락으로 나타냅니다. MDN은 추가적인 스타일링과 함께 이를 나타냅니다.

{{EmbedLiveSample('Blockquotes', '100%', '200px')}}

### 인라인 인용구

인라인 인용구는 {{htmlelement("q")}} 요소를 사용한다는 점만 제외하면 블록 인용구와 동일하게 동작합니다. 아래의 마크업 예시는 MDN `<q>` 페이지의 인용문을 포함합니다.

```html
<p>
  인용구 요소 — <code>&lt;q&gt;</code> — 는
  <q cite="https://developer.mozilla.org/ko/docs/Web/HTML/Element/q">
    단락 나누기가 필요 없는 짧은 인용구를 위한 것입니다.
  </q>
</p>
```

브라우저 기본 스타일은 인라인 인용구를 따옴표로 묶은 일반 텍스트로 표현합니다.

{{EmbedLiveSample('Inline_quotations', '100%', '78px')}}

### 인용

[`cite`](/ko/docs/Web/HTML/Element/blockquote#cite) 속성의 컨텐츠는 유용하게 보이지만 안타깝게도 브라우저, 스크린 리더 등은 이를 이용해서 할 수 있는 것이 많지 않습니다. 브라우저는 JavaScript나 CSS로 여러분이 직접 해결책을 제시하지 않는다면 `cite` 컨텐츠를 화면에 표시할 방법이 없습니다. 페이지에서 인용 출처를 화면에 나타나게 하고 싶다면 링크나 다른 적절한 방법을 통해 텍스트에서 볼 수 있게 만들어야 합니다.

{{htmlelement("cite")}} 요소가 있지만 이는 인용되는 자료의 제목(예: 책 이름)을 포함하기 위한 것입니다. 그러나 `<cite>` 안에 있는 텍스트를 어떤 식으로든 인용 출처에 연결하지 못할 이유는 없습니다.

```html-nolint
<p>
  <a href="/ko/docs/Web/HTML/Element/blockquote">
    <cite>MDN 블록 인용구 페이지</cite></a>에 따르면
</p>

<blockquote
  cite="https://developer.mozilla.org/ko/docs/Web/HTML/Element/blockquote">
  <p>
    <strong>HTML <code>&lt;blockquote&gt;</code> 요소</strong> (또는
    <em>HTML 인용 블록 요소</em>)는 안쪽의 텍스트가 긴 인용문임을 나타냅니다.
  </p>
</blockquote>

<p>
  인용구 요소 — <code>&lt;q&gt;</code> — 는
  <q cite="https://developer.mozilla.org/ko/docs/Web/HTML/Element/q">
    단락 나누기가 필요 없는 짧은 인용구를 위한 것입니다.
  </q>
  — <a href="/ko/docs/Web/HTML/Element/q"><cite>MDN q 페이지</cite></a>.
</p>
```

인용은 기본적으로 이탤릭체로 스타일이 지정됩니다.

{{EmbedLiveSample('Citations', '100%', '179px')}}

### 추가 학습: 누가 말했나요?

다른 실습 과제를 할 시간입니다! 이번 예제에서는 아래 항목을 수행하고자 합니다.

1. 중간 단락을 `cite` 속성을 포함하는 블록 인용구로 바꿉니다.
2. 세 번째 단락의 "부정적인 자기 대화를 없애야 할 필요성"을 인라인 인용으로 바꾸고 `cite` 속성을 포함하세요.
3. 각 소스의 제목을 `<cite>` 태그로 감싸고 각 소스를 해당 소스로 연결되는 링크로 바꿉니다.

필요한 인용 출처는 다음과 같습니다.

- `http://www.brainyquote.com/quotes/authors/c/confucius.html` 공자 명언
- `http://example.com/affirmationsforpositivethinking` "부정적인 자기 대화를 없애야 할 필요성"

실수를 하셨을 경우에는, Reset 버튼을 통해서 재시작하실 수 있습니다. 해답을 찾지 못하셨을 경우에 Show solution 버튼을 통해서 해답을 보실 수 있습니다.

```html hidden
<h2>실시간 출력</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>편집 가능한 코드</h2>
<p class="a11y-label">
  코드 영역에서 포커스를 이동하려면 Esc키를 누르십시오 (Tab키로 탭 문자를 삽입).
</p>

<textarea id="code" class="input" style="min-height: 150px; width: 95%">
<p>안녕하세요, 제 동기 부여 페이지에 오신 것을 환영합니다. 공자의 명언 사이트에서 말했듯이.</p>
<p>멈추지 않는 한 얼마나 천천히 가느냐는 중요하지 않습니다.</p>
<p>저는 또한 긍정적 사고의 개념과 부정적인 자기 대화를 없애야 할 필요성(긍정적 사고를 위한 긍정의 힘에서 언급된 바와 같이)을 좋아합니다.</p>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
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
  '<p>안녕하세요, 제 동기 부여 페이지에 오신 것을 환영합니다. <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"><cite>공자의 명언 사이트</cite></a>에서 말했듯이.</p>\n\n<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">\n <p>멈추지 않는 한 얼마나 천천히 가느냐는 중요하지 않습니다.</p>\n</blockquote>\n\n<p>저는 또한 긍정적 사고의 개념과 <q cite="http://example.com/affirmationsforpositivethinking">부정적인 자기 대화를 없애야 할 필요성</q>(<a href="http://example.com/affirmationsforpositivethinking"><cite>긍정적 사고를 위한 긍정의 힘</cite></a>에서 언급된 바와 같이)을 좋아합니다.</p>';
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
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
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Who_said_that', 700, 450) }}

## 약어

웹에서 흔히 볼 수 있는 또 다른 요소는 약어 또는 약어를 둘러싸는 데 사용되는 {{htmlelement("abbr")}}입니다. 약어나 약어를 포함할 때는 처음 사용할 때 약어를 표시하는 `<abbr>`과 함께 해당 용어의 전체 내용을 일반 텍스트로 제공하세요. 이렇게 하면 사용자 에이전트에게 콘텐츠를 공지/표시하는 방법에 대한 힌트를 제공하는 동시에 모든 사용자에게 약어가 무엇을 의미하는지 알릴 수 있습니다.

약어 외에 확장어를 제공하는 것이 의미가 없고 약어 또는 약어가 상당히 단축된 용어인 경우에는 해당 용어의 전체 확장어를 [`title`](/ko/docs/Web/HTML/Global_attributes#title) 속성의 값으로 제공합니다.

### 약어 예제

예를 들어 보겠습니다.

```html
<p>
  웹 문서를 구성하는 데는 하이퍼텍스트 마크업 언어인 <abbr>HTML</abbr>을
  사용합니다.
</p>

<p>
  제 생각에는 그린 <abbr title="목사">목사</abbr>가 전기톱으로 부엌에서 한 것
  같아요.
</p>
```

다음과 같이 표시됩니다.

{{EmbedLiveSample('Abbreviation_example', '100%', '150')}}

> [!NOTE]
> 이전 버전의 HTML에는 {{htmlelement("acronym")}} 요소에 대한 지원도 포함되어 있었지만, 약어와 두문자어를 모두 표현하기 위해 `<abbr>`을 사용하는 것을 선호하여 HTML 사양에서 제거되었습니다. `<acronym>`는 사용해서는 안 됩니다.

### 추가 학습: 약어 만들기

아래의 간단한 실습 과제를 통해 약어 사용에 대한 학습을 하고자 합니다. 아래의 샘플을 그대로 사용하시거나 여러분의 샘플로 교체 하실 수 있습니다.

```html hidden
<h2>실시간 출력</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>편집 가능한 코드</h2>
<p class="a11y-label">
  코드 영역에서 포커스를 이동하려면 Esc키를 누르십시오 (Tab키로 탭 문자를 삽입).
</p>

<textarea id="code" class="input" style="min-height: 50px; width: 95%">
<p>NASA(미국 항공우주국)는 흥미로운 일을 많이 하고 있습니다.</p>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
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
  "<p><abbr>NASA</abbr>(미국 항공 우주)는 흥미로운 일을 많이 하고 있습니다.</p>";
let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
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
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_marking_up_an_abbreviation', 700, 300) }}

## 연락처 세부 사항 표시

HTML에서 {{htmlelement("address")}} 요소를 이용해서 연락처 세부 정보를 표시할 수 있습니다. 이 요소는 연락처 세부 정보를 감싸고 있습니다. 아래는 예시입니다.

```html
<address>크리스 밀스, 맨체스터, 그림노스, 영국</address>
```

아래 예시와 같이 더 복잡한 마크업이나 다른 형태의 연락처 정보도 포함할 수도 있습니다.

```html
<address>
  <p>
    크리스 밀스<br />
    맨체스터<br />
    그림노스<br />
    영국
  </p>

  <ul>
    <li>전화: 01234 567 890</li>
    <li>이메일: me@grim-north.co.uk</li>
  </ul>
</address>
```

링크된 페이지에 연락처 정보가 포함되어 있는 경우에도 이와 같은 방식은 괜찮습니다.

```html
<address>
  <a href="../authors/chris-mills/">크리스 밀스</a>가 작성한 페이지.
</address>
```

> **참고:** {{htmlelement("address")}} 요소는 가장 가까운 {{htmlelement("article")}} 또는 {{htmlelement("body")}} 요소에 포함된 문서의 연락처 정보를 제공할 때만 사용해야 합니다. 사이트 푸터에 전체 사이트의 연락처 정보를 포함하거나 문서 내부에 작성자의 연락처 정보를 포함할 때 사용하는 것이 맞지만, 해당 페이지의 콘텐츠와 관련이 없는 주소 목록을 표시하는 데는 사용하지 않는 것이 좋습니다.

## 위 첨자와 아래 첨자

여러분은 종종 날짜, 화학 공식 및 수학 방적식과 같은 항목을 표시할 때 올바른 의미를 갖도록 위 첨자 아래 첨자를 사용해야 할 수도 있습니다. {{htmlelement("sup")}} 과 {{htmlelement("sub")}} 요소들은 이를 위해 사용할 수 있습니다.

```html
<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>
  Caffeine's chemical formula is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>
```

표시될 결과는 아래와 같습니다.

{{ EmbedLiveSample('Superscript_and_subscript', '100%', 160) }}

## 컴퓨터 코드를 나타내기

HTML 을 이용해 컴퓨터 코드를 나타낼 때 아래와 같은 많은 요소들을 사용할 수 있습니다.

- {{htmlelement("code")}}: 일반적인 컴퓨터 코드를 표시합니다.
- {{htmlelement("pre")}}: 공백(일반적으로 코드 블록)을 유지하기 위해 사용합니다. 택스트 내에서 들여 쓰기 또는 초과 공백을 사용하면 브라우저가 이를 무시하고 렌더링 된 페이지에 공백을 표시하지 않습니다. 그러나 `<pre></pre>` 태그로 텍스트를 감싸면 공백이 텍스트 편집기에서 보는 것과 동일하게 렌더링 됩니다.
- {{htmlelement("var")}}: 변수 이름을 명확하게 표시합니다.
- {{htmlelement("kbd")}}: 컴퓨터에 입력 된 키보드 (및 기타 유형) 입력을 표시합니다.
- {{htmlelement("samp")}}: 컴퓨터 프로그램의 출력을 표시합니다.

이러한 요소의 예와 컴퓨터 코드를 표현하는 데 어떻게 사용되는지 살펴봅시다. 전체 파일을 보려면 [other-semantics.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/advanced-text-formatting/other-semantics.html) 샘플 파일을 살펴보세요. 파일을 다운로드하여 브라우저에서 열어 직접 확인할 수 있지만, 여기서는 코드의 일부를 소개합니다.

```html
<pre><code>const para = document.querySelector('p');

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

{{ EmbedLiveSample('Representing_computer_code','100%',350) }}

## 시간과 날짜 표시

HTML은 기계가 읽을 수 있는 형식(machine-readable)으로 시간과 날짜를 표시하기 위한 {{htmlelement("time")}} 요소를 제공합니다. 예를 들면 아래와 같습니다.

```html
<time datetime="2016-01-20">20 January 2016</time>
```

이것이 왜 유용할까요? 인간이 날짜를 기록하는 방법에는 여러 가지가 있습니다. 위 날짜는 아래와 같이 나타낼 수 있습니다.

<!-- markdownlint-disable MD033 -->

- 20 January 2016
- 20th January 2016
- Jan 20 2016
- 20/01/16
- 01/20/16
- The 20th of next month
- <span lang="fr">20e Janvier 2016</span>
- <span lang="ja">2016 年 1 月 20 日</span>
- And so on

<!-- markdownlint-enable MD033 -->

그러나 이러한 다른 형식들은 컴퓨터가 쉽게 인식할 수 없습니다. 페이지의 모든 이벤트 날짜를 자동으로 인식하여 캘린더에 삽입하려면 어떻게 해야합니까? {{htmlelement("time")}} 요소를 사용하면 기계가 읽을 수 있는 명확한 시간/날짜를 첨부 할 수 있습니다.

아래의 기본 예제는 간단한 기계 판독 가능 날짜를 제공하지만 사용 가능한 다른 많은 옵션들이 존재합니다.

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
<!-- Date and time with timezone offset -->
<time datetime="2016-01-20T19:30+01:00">
  7.30pm, 20 January 2016 is 8.30pm in France
</time>
<!-- Calling out a specific week number -->
<time datetime="2016-W04">The fourth week of 2016</time>
```

## 실력을 시험해 보세요!

이 장의 마지막까지 읽었지만 가장 중요한 정보를 기억할 수 있나요? 계속 진행하기 전에 이 정보를 기억하고 있는지 확인할 수 있는 몇 가지 추가 테스트가 있으니 [실력 테스트: 고급 HTML 텍스트](/ko/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_Advanced_HTML_text)를 참조하세요.

## 요약

HTML 텍스트 의미론에 대한 스터디가 끝났습니다. 이 과정에서 학습한 내용이 HTML 텍스트 요소의 전부가 아님을 명심하십시오. 우리는 필수 요소를 위주로 다루고 싶었고, 여러분이 일반적인 상황에서 보거나 적어도 흥미롭게 다가올 수 있는 더 일반적인 것들 중 일부를 다루려고 했습니다. 더 많은 HTML 요소를 찾으려면 [HTML element reference](/ko/docs/Web/HTML/Element)를 살펴보십시오.([인라인 텍스트 시멘틱](/ko/docs/Web/HTML/Element#인라인 텍스트 시멘틱) 섹션은 시작하기에 좋은 장소입니다). 다음 장에서는 [HTML 문서의 다른 부분을 구조화](/ko/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)하는 데 사용할 HTML 요소를 살펴 보겠습니다.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}
