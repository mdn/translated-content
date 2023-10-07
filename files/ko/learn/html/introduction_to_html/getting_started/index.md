---
title: HTML 시작하기
slug: Learn/HTML/Introduction_to_HTML/Getting_started
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}

이 문서는 HTML 의 기본적인 내용에 대한 글입니다. 이 글에서는 HTML 에 관련된 용어들(Element, Attribute ..)의 정의에 대해 설명할 것입니다. 또한 HTML이 무엇으로 이루어져 있는지(구성요소), 어떻게 구성되어 있는지(구조), 중요한 특징은 무엇인지에 대해 설명할 것입니다. 독자의 흥미를 위해 간단한 HTML 을 작성하는 과정도 포함되어 있습니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">사전 지식</th>
      <td>
        기본적인 컴퓨터의 이해,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"
          >기본 소프트웨어 설치하기</a
        >,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"
          >파일 다루기</a
        >의 기본적 지식.
      </td>
    </tr>
    <tr>
      <th scope="row">목표</th>
      <td>HTML언어에 대해 익숙해지고, HTML을 이용하여 실습해봅니다.</td>
    </tr>
  </tbody>
</table>

## HTML이란?

{{glossary("HTML")}} (Hypertext Markup Language,하이퍼텍스트 마크업 언어)는 프로그래밍 언어는 아니고, 우리가 보는 웹페이지가 어떻게 구조화되어 있는지 브라우저로 하여금 알 수 있도록 하는 마크업 언어입니다. 이는 개발자로 하여금 복잡하게도 간단하게도 프로그래밍 할 수 있습니다. HTML은 {{glossary("Element", "elements")}}로 구성되어 있으며, 이들은 적절한 방법으로 나타내고 실행하기 위해 각 컨텐츠의 여러 부분들을 감싸고 마크업 합니다. {{glossary("Tag", "tags")}} 는 웹 상의 다른 페이지로 이동하게 하는 하이퍼링크 내용들을 생성하거나, 단어를 강조하는 등의 역할을 합니다. 예를들어, 다음의 내용을 봅시다.

```
My cat is very grumpy
```

만약 다음의 문장을 그냥 그 자체로 표시하고 싶다면, 태그 중 ({{htmlelement("p")}})로 감싸 엘리먼트를 문단으로 명시할 수 있습니다.

```html
<p>My cat is very grumpy</p>
```

> **참고:** HTML 요소는 대소문자를 구분하지 않습니다. 그 말은 {{htmlelement("title")}} 요소는 `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>` 들과 같이 사용할 수 있습니다. 하지만 대게는 가독성과 기타 이유때문에 소문자로 작성합니다.

## HTML 요소(Element)의 구조

HTML에서의 요소에 대해 좀 더 알아봅시다.

![](grumpy-cat-small.png)

엘리먼트의 주요 부분은 다음과 같습니다.

1. **여는 태그(Opening tag):** 이것은 요소의 이름과(이 경우 p), 열고 닫는 꺽쇠 괄호로 구성됩니다. 요소가 시작(이 경우 단락의 시작 부분)부터 효과가 적용되기 시작합니다.
2. **닫는 태그(Closing tag):** 이것은 요소의 이름 앞에 슬래시(/)가 있는것을 제외하면 여는 태그(opening tag)와 같습니다. 이것은 요소의 끝(이 경우 단락의 끝 부분)에 위치합니다. 닫는 태그를 적어주지 않는 것은 흔한 초심자의 오류이며, 이것은 이상한 결과를 낳게됩니다.
3. **내용(Content):** 요소의 내용이며, 이 경우 단순한 텍스트이다.
4. **요소(Element):** 여는 태그, 닫는 태그, 내용을 통틀어 요소(element)라고한다.

### 실습: 첫 번째 HTML 요소 만들어보기

Input 영역 아래의 줄을 `<em>` 과 `</em>` 태그를 이용해서 감싸 보세요. (줄의 앞에 요소를 열기위해 `<em>`태그를, 뒤에는 요소를 닫기위해 `</em>`태그를 두세요.) — 이것은 그 줄에 이탤릭강조효과를 줍니다! 여러분이 수정하는 결과는 실시간으로 Output 영역에서 볼 수 있습니다.

만약 실수를 했다면, 언제든지 Reset 버튼을 눌러서 초기화 할 수 있습니다. 만약 아무래도 답을 모르겠다면, Show solution 버튼을 이용해서 답을 볼 수 있습니다.

```html hidden
<h2>Live output</h2>
<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  코드 영역에서 포커스를 이동하려면 Esc키를 누르십시오 (Tab키로 탭 문자를 삽입).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
  This is my text.
</textarea>

<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
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
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var htmlSolution = "<em>This is my text.</em>";
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
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

{{ EmbedLiveSample('Playable_code', 700, 400, "", "", "hide-codepen-jsfiddle") }}

### 포함(내포:內包)된 요소(Nesting elements)

요소 안에 다른 요소가 들어갈 수 있습니다. 그런 요소는 내포되었다고 표현합니다. "고양이가 매우 사납다" 라는 문단을 강조하기 위해서, '매우'라는 단어를 강조하는 {{htmlelement("strong")}} 요소를 중첩해서 사용할 수 있습니다.

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

요소 내표를 위해서는 확인해야 할 것이 있습니다. 위의 예제에서는 `p` 요소가 먼저 열렸고, 그리고 `strong` 요소가 열렸습니다. 그렇기 때문에 `strong` 요소가 먼저 닫힌 후에 `p` 요소가 닫혀야 합니다. 아래와 같은 문장은 중첩(重疊 : 서로 포개어(overlap 또는 stacking) 지거나, 엇갈려 겹쳐짐)되었으므로 잘못된 문장입니다.

```html example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```

요소 내포을 위해서, 내포되어 지는 요소는 다른 요소 속에서 열고 닫혀야 하며 다른 요소를 포함시키는 요소는 그 바깥에서 열고 닫혀야 합니다. 위의 잘못된 예제와 같이 내포가 제대로 되지 않았을 경우엔 웹 브라우저가 임의로 결과를 보일 것이며, 그것은 원치않는 것일 수 있습니다. 그런데 잘못 된 내포에도 불구하고 어떤 브라우저에서 이상없이 보일 수도 있습니다. 하지만 그 것은 그저 그 브라우저가 문법에 흐물흐물(permittable)해서 웬만한 오류는 자체 수정해서 브라우저 창에 rendering해주기 때문일 뿐 입니다. '웬만한 오류는 알아서 처리해 준다.' 는 부분에서 초보자는 특히 주의해야 합니다.

### 블럭 레벨 요소 vs 인라인 요소(Block versus inline elements)

HTML에는 두가지 종류의 요소(Element) 가 있습니다. 블록 레벨 요소(Block level element) 와 인라인 요소(Inline element) 입니다.

- 블록 레벨 요소(Block-level elements) 는 웹페이지 상에 블록(Block)을 만드는 요소입니다. 블록 레벨 요소는 앞뒤 요소 사이에 새로운 줄(Line)을 만들고 나타납니다. 즉 블록 레벨 요소 이전과 이후 요소사이의 줄을 바꿉니다. 블록 레벨 요소는 일반적으로 페이지의 구조적 요소를 나타낼 때 사용됩니다. 예를 들어 개발자는 블록 레벨 요소를 사용하여 단락(Paragraphs), 목록(lists), 네비게이션 메뉴(Navigation Menus), 꼬리말(Footers) 등을 표현할 수 있습니다. 블록 레벨 요소는 인라인 요소(Inline elements)에 중첩될(Nested inside)수 없습니다. 그러나 블록 레벨 요소는 다른 블록 레벨 요소에 중첩될 수 있습니다.
- 인라인 요소(Inline elements)는 항상 블록 레벨 요소내에 포함되어 있습니다. 인라인 요소는 문서의 한 단락같은 큰 범위에는 적용될 수 없고 문장, 단어 같은 작은 부분에 대해서만 적용될 수 있습니다. 인라인 요소는 새로운 줄(Line)을 만들지 않습니다. 즉 인라인 요소를 작성하면 그것을 작성한 단락내에 나타나게 됩니다. 예를 들어, 인라인 요소에는 하이퍼링크를 정의하는 요소인 {{htmlelement("a")}} , 텍스트(Text)를 강조하는 요소인 {{htmlelement("em")}},{{htmlelement("strong")}} 등이 있습니다.

다음 예시를 봅시다:

```html
<em>first</em>
<em>second</em>
<em>third</em>

<p>fourth</p>
<p>fifth</p>
<p>sixth</p>
```

{{htmlelement("em")}} 은 인라인 요소(inline element) 이므로, 밑에서 보실 수 있듯이, 처음 세 개의 요소는 서로 같은 줄에, 사이에 공백이 없이 위치합니다. 한편, {{htmlelement("p")}} 는 블록 레벨 요소이므로, 각 요소들은 새로운 줄에 나타나며, 위와 아래에 여백이 있습니다 (여백은 브라우저가 문단에 적용하는 기본 [CSS styling](/ko/docs/Learn/CSS/Introduction_to_CSS) 때문에 적용됩니다).

{{ EmbedLiveSample('Block_versus_inline_elements', 700, 200, "", "") }}

> **참고:** HTML5에서 요소 분류를 재정의 했습니다: [Element content categories](http://www.whatwg.org/specs/web-apps/current-work/complete/section-index.html#element-content-categories). 이러한 정의는 이전의 정의보다 더 정확하고 덜 모호하지만, "블록"과 "인라인"보다 이해하기 훨씬 더 복잡하기 때문에, 이 주제 내내 이 정의들을 고수할 것입니다.

> **참고:** 이 주제에서 사용되는 "블럭(block)"과 "인라인(inline)"의 뜻은 [the types of CSS boxes](/ko/docs/Learn/CSS/Introduction_to_CSS/Box_model#Types_of_CSS_boxes)에서 사용하고 있는 같은 단어와 혼돈하면 안 됩니다. 기본적으로는 상관관계가 있지만 CSS 표시 유형을 변경해도 요소의 범주는 변경되지 않으며 요소가 포함할 수 있는 요소와 요소가 포함될 수 있는 요소에는 영향을 주지 않는다. HTML5가 이러한 용어들을 삭제했던 이유 중 하나는 이러한 다소 흔한 혼란을 막기 위해서였다.

> **참고:** [Block-level elements](/ko/docs/Web/HTML/Block-level_elements)문서와 [Inline elements](/ko/docs/Web/HTML/Inline_elements)문서를 참고하면 블럭과 인라인 요소에 대한 유용한 내용을 찾을 수 있습니다.

### 빈 요소(Empty elements)

모든 요소가 위에 언급된 여는 태그, 내용, 닫는 태그 패턴을 따르는 것은 아닙니다. 주로 문서에 무언가를 첨부하기 위해 단일 태그(Single tag)를 사용하는 요소도 있습니다. 예를 들어 {{htmlelement("img")}} 요소는 해당 위치에 이미지를 삽입하기 위한 요소입니다:

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png" />
```

위에 대한 결과는 다음과 같이 나올 것입니다:

{{ EmbedLiveSample('Empty_elements', 700, 300, "", "", "hide-codepen-jsfiddle") }}

> **참고:** 빈 요소는 가끔 Void 요소로 불리기도 합니다.

## 속성(Attributes)

요소는 아래 이미지와 같이 속성을 가질 수 있습니다:

![My cat is very grumpy](grumpy-cat-attribute-small.png)

속성은 요소에 실제론 나타내고 싶지 않지만 추가적인 내용을 담고 싶을 때 사용합니다. 위에는 나중에 스타일에 관련된 내용이나 기타 내용을 위해 해당 목표를 구분할 수 있는 `class` 속성을 부여했습니다.

속성을 사용할 때에는 아래 내용을 지켜야 합니다:

1. 요소 이름 다음에 바로 오는 속성은 요소 이름과 속성 사이에 공백이 있어야 되고, 하나 이상의 속성들이 있는 경우엔 속성 사이에 공백이 있어야 합니다.
2. 속성 이름 다음엔 등호(=)가 붙습니다.
3. 속성 값은 열고 닫는 따옴표로 감싸야 합니다.

### 실습: 요소에 속성 추가하기

또다른 요소 중 하나인 {{htmlelement("a")}} 요소는 "anchor"를 의미하는데, 닻이 배를 항구로 연결하듯 텍스트를 감싸서 하이퍼링크로 만듭니다. 이 요소는 여러 속성을 가질 수 있지만 아래에 있는 두 개가 주로 사용됩니다:

- `href`
  - : 이 속성에는 당신이 연결하고자 하는 웹 주소를 지정합니다. 그 예로, `href="https://www.mozilla.org/"`.
- `title`
  - : `title` 속성은 링크에 대한 추가 정보를 나타냅니다. 그 예로, `title="The Mozilla homepage"`. 이 내용은 링크 위로 마우스를 옮겼을 때 나타날 것입니다.
- `target`
  - : `target` 속성은 링크가 어떻게 열릴 것인지를 지정합니다. 예를 들어, `target="_blank"` 는 링크를 새 탭에서 보여줍니다. 당신이 현재 탭에서 링크를 보여주고싶다면 이 속성을 생략하면 됩니다.

당신이 즐겨 찾는 웹 사이트에 대한 링크를 만들기 위해 아래 입력 영역에서 행을 편집해 봅시다. 첫 번째로, `<a>` 요소를 추가합니다. 다음으로 `href` 속성과 `title` 속성을 추가합니다. 마지막으로 새 탭에서 링크를 열도록 `target` 속성을 지정합니다. 당신은 출력 영역에서 수정사항이 바로 변경되는 것을 볼 수 있습니다. 링크 위에 마우스를 올리면 `title` 속성 내용이 보여지고, 클릭하면 `href` 요소의 웹 주소로 이동할 것입니다. 각 요소의 이름과 그 값 사이에는 빈 칸이 필요하다는 것을 기억해야 합니다.

만약 실수했다면 Reset 버튼을 눌러 처음으로 돌아갈 수 있습니다. 도움이 필요한 경우에는 답을 Show solution 버튼을 눌러 정답을 볼 수 있습니다.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="min-height: 100px;width: 95%">
  &lt;p&gt;A link to my favorite website.&lt;/p&gt;
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
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var htmlSolution =
  '<p>A link to my <a href="https://www.mozilla.org/" title="The Mozilla homepage" target="_blank">favorite website</a>.</p>';
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
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

{{ EmbedLiveSample('Playable_code2', 700, 400, "", "", "hide-codepen-jsfiddle") }}

### 참과 거짓 속성(Boolean attributes)

때때로 값이 없는 속성을 볼 수 있을텐데 이것은 허용되는 것입니다. 이를 불 속성이라고 하며, 일반적으로 그 속성의 이름과 동일한 하나의 값만을 가질 수 있습니다. 예를 들어 [`disabled`](/ko/docs/Web/HTML/Element/input#disabled) 속성을 양식 입력 요소에 할당하면 사용자가 데이터를 입력할 수 없도록 비활성화(회색으로 표시) 할 수 있습니다.

```
<input type="text" disabled="disabled">
```

이것은 다음과 같이 줄여쓸 수 있습니다. (당신이 참고할 수 있도록 비활성화를 하지 않은 형태도 포함했습니다.)

```html
<input type="text" disabled />

<input type="text" />
```

이 둘은 다음과 같은 결과를 보여줍니다.

{{ EmbedLiveSample('Boolean_attributes', 700, 100, "", "", "hide-codepen-jsfiddle") }}

### 속성값의 따옴표 생략

웹을 둘러보면 따옴표가 없는 속성값을 포함한 온갖 이상한 마크업 스타일을 볼 것입니다. 어떤 상황에선 이런 것이 허용되지만, 다른 상황에서는 당신의 마크업 형식을 망쳐버립니다. 이전에 작성한 코드에서 우리는 `href` 속성만 있는 기본적인 버전을 작성했습니다.

```html
<a href=https://www.mozilla.org/>favorite website</a>
```

하지만 여기에 `title` 속성을 추가하면 문제가 발생합니다.

```html
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
```

이 때 브라우저는 당신의 마크업을 잘못 해석해서 title이 세 개의 속성값을 가진다고 생각할 것입니다. `title` 속성값 "The"와 두 개의 불 속성값 `Mozilla`, `homepage`라고 말이죠. 이 것은 우리가 의도한 것도 아닐 뿐더러 아래의 예시처럼 오류가 발생하거나 예상치 못한 동작을 할 수도 있습니다. 링크 위에 마우스를 올려 title이 어떻게 보이는지 확인해 보세요.

{{ EmbedLiveSample('Omitting_quotes_around_attribute_values', 700, 100, "", "", "hide-codepen-jsfiddle") }}

우리는 항상 속성값에 따옴표를 붙이라고 조언합니다. 이런 오류를 피할 수도 있고, 코드의 가독성도 좋아지기 때문입니다.

### 작은 따옴표, 큰 따옴표?

이 글에서 모든 속성값은 큰 따옴표에 둘러싸여 있는 것을 볼 수 있습니다. 하지만 당신은 어떤 사람의 HTML에서 작은 따옴표를 볼 수 있을 것입니다. 이 것은 스타일의 문제로, 당신이 좋아하는 방법을 사용하면 됩니다. 아래 두 문장은 똑같이 동작합니다.

```html
<a href="http://www.example.com">A link to my example.</a>

<a href="http://www.example.com">A link to my example.</a>
```

주의해야할 점은 두 개를 섞어 쓰면 안된다는 것입니다. 다음은 잘못 사용한 예입니다.

```html
<a href="http://www.example.com'>A link to my example.</a>
```

만약 한 가지 따옴표를 사용했다면 다른 따옴표로 속성값을 둘러싸서 오류를 방지할 수 있습니다.

```html
<a href="http://www.example.com" title="Isn't this fun?"
  >A link to my example.</a
>
```

하지만 만약 당신이 따옴표 안에 같은 따옴표를 사용하고 싶다면(작은 따옴표든 큰 따옴표든) 따옴표를 표시하기 위해서 [HTML entities](/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Entity_references_Including_special_characters_in_HTML)를 사용하세요. 예를 들어 이렇게 하면 잘못됩니다.

```
<a href='http://www.example.com' title='Isn't this fun?'>A link to my example.</a>
```

그래서 이렇게 바꿔주면 잘 작동합니다.

```
<a href='http://www.example.com' title='Isn&#39;t this fun?'>A link to my example.</a>
```

## HTML 문서의 구조

That wraps up the basics of individual HTML elements, but they aren't very useful on their own. 이제 어떻게 개별 요소를 결합해 전체 HTML 페이지를 구성하는지에 대해 살펴봅시다.

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

여기를 보면,

1. `<!DOCTYPE html>`: 문서 형식을 나타냅니다. HTML 초창기에 (1991\~2년) doctype은 HTML 페이지가 자동 오류 검사나 다른 유용한 것이 가능한 좋은 HTML을 의미하는 연결고리처럼 작동하는 것을 뜻했습니다. 이런 형식으로 사용했습니다.

   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   하지만 요즘에는 아무도 신경쓰지 않으며, 그저 모든 것이 제대로 작동하기 위해 포함되어야 하는 역사적 유물일 뿐입니다. `<!DOCTYPE html>` 은 유효한 문서 형식을 나타내는 짧은 문장이고, 이 것만 알고 있으면 됩니다.

2. `<html></html>`: {{htmlelement("html")}} 요소입니다. 이 요소는 전체 페이지의 콘텐츠를 포함하며, 기본 요소로도 알려져 있습니다.
3. `<head></head>`: `<head>` 요소입니다. 이 요소는 홈페이지 이용자에게는 보이지 않지만 검색 결과에 노출 될 키워드, 홈페이지 설명, CSS 스타일, character setdeclaration 등 HTML 페이지의 모든 내용을 담고 있습니다. 자세한 내용은 다음 장에서 다룹니다.
4. `<meta charset="utf-8">`: 이 요소는 HTML 문서의 문자 인코딩 설정을 UTF-8로 지정하는 것이며 예시에서 지정한 UTF-8에는 전세계에서 사용되는 언어에 대한 대부분의 문자가 포함됩니다. 이 설정을 사용하면 페이지에 포함 된 모든 텍스트 내용을 처리 할 수 있습니다. 이것을 설정하면 나중에 문자 인코딩과 관련된 일부 문제를 피하는 데 도움이 될 수 있으므로 문자 인코딩 설정을 하지 않을 이유가 없습니다.
5. `<title></title>`: {{htmlelement ( "title")}} 요소입니다. 이 요소를 사용하면 페이지 제목이 설정되며 페이지가 로드되는 브라우저 탭에 표시되는 제목으로 사용됩니다. 페이지 제목은 페이지가 책갈피 될 때 페이지를 설명하는 데에도 사용됩니다.
6. `<body></body>`: {{htmlelement ( "body")}} 요소 여기에는 텍스트, 이미지, 비디오, 게임, 재생 가능한 오디오 트랙 등을 비롯하여 페이지에 표시되는 모든 콘텐츠가 포함됩니다.

### 실습: HTML 문서에 일부 기능 추가하기

로컬 컴퓨터에서 일부 HTML을 작성하여 실험하고 싶다면 다음을 수행하십시오.

1. 위에 나열된 HTML 페이지 예제를 복사하십시오.
2. 텍스트 편집기에서 새 파일을 작성하십시오.
3. 코드를 새 텍스트 파일에 붙여 넣습니다.
4. 파일을 `index.html`로 저장하십시오.

> **참고:** 기본 HTML 템플릿은 [MDN Learning Area Github repo](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html) 에서도 찾을 수 있습니다.

이제 웹 브라우저에서 이 파일을 열어 렌더링 된 코드의 모양을 확인할 수 있습니다. 코드를 편집하고 브라우저를 새로 고침하여 결과를 확인하십시오. 첫 페이지는 다음과 같습니다.

![A simple HTML page that says This is my page](template-screenshot.png)이 연습에서는 앞에서 설명한대로 컴퓨터에서 로컬로 코드를 편집하거나 아래 샘플 창에서 편집 할 수 있습니다 (편집 가능한 샘플 창은 {{htmlelement ( "body")}} 요소의 내용만 나타냄 이 경우). 다음 작업을 구현하여 기술을 익히십시오.

- {{htmlelement ( "body")}} 요소의 시작 태그 바로 아래에 문서의 기본 제목을 추가하십시오. `<h1>` 여는 태그와 `</h1>` 닫는 태그 안에 싸야합니다.
- 관심있는 주제에 대한 텍스트를 포함하도록 단락 컨텐츠를 편집하십시오.
- 중요한 단어는 `<strong>` 여는 태그와 `</ strong>` 닫는 태그 안에 넣어 굵게 표시하십시오.
- [이 글의 앞부분에서 설명](/en-US/Learn/HTML/Introduction_to_HTML/Getting_started#Active_learning_Adding_attributes_to_an_element)한대로 단락에 대한 링크를 추가하십시오.
- 문서에 이미지를 추가하십시오. [이 글의 앞부분에서 설명](/en-US/Learn/HTML/Introduction_to_HTML/Getting_started#Empty_elements)한대로 단락 아래에 배치하십시오. 다른 이미지 (컴퓨터의 로컬 또는 웹의 다른 위치)에 연결하면 보너스 포인트를 얻을 수 있습니다.

만약 실수한 경우 언제든지 _Reset_ 버튼을 사용하여 초기화 할 수 있습니다. 문제가 발생하면 _Show solution_ 단추를 눌러 답변을 확인하십시오.

```html hidden
<h2>Live Output</h2>

<div class="output" style="min-height: 50px"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  코드 영역에서 포커스를 이동하려면 Esc 키를 누르십시오 (탭은 탭 문자를
  삽입합니다).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
  &lt;p&gt;This is my page&lt;/p&gt;
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

h1 {
  color: blue;
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

img {
  max-width: 100%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

var htmlSolution =
  '<h1>Some music</h1><p>I really enjoy <strong>playing the drums</strong>. One of my favorite drummers is Neal Peart, who plays in the band <a href="https://en.wikipedia.org/wiki/Rush_%28band%29" title="Rush Wikipedia article">Rush</a>. My favourite Rush album is currently <a href="http://www.deezer.com/album/942295">Moving Pictures</a>.</p> <img src="http://www.cygnus-x1.net/links/rush/images/albums/sectors/sector2-movingpictures-cover-s.jpg">';
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
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

{{ EmbedLiveSample('Playable_code3', 700, 600, "", "", "hide-codepen-jsfiddle") }}

### HTML 공백

위의 예에서 많은 공백이 코드에 포함되어 있음을 알 수 있습니다. 이것은 선택 사항입니다. 이 두 코드 스니펫은 동일합니다.

```html-nolint
<p>Dogs are silly.</p>

<p>Dogs        are
         silly.</p>
```

HTML 요소 내용 내에서 얼마나 많은 공백을 사용하든 (하나 이상의 공백 문자를 포함 하거나 줄 바꿈 포함) HTML 파서는 코드를 렌더링 할 때 각 공백 시퀀스를 단일 공백으로 줄입니다. 왜 그렇게 많은 공백을 사용합니까? 답은 가독성입니다.

코드의 보기 좋게 정리되어 있다면 코드에서 무슨 일이 일어나고 있는지 이해하는 것이 더 쉬울 수 있습니다. HTML에는 중첩 된 각 요소가 내부에있는 것보다 두 칸 더 들여 쓰기되어 있습니다. 서식 스타일 (예 : 각 들여 쓰기 수준에 대한 공백 수)을 선택하는 것은 사용자의 몫이지만 서식을 고려해야합니다.

## Entity references: HTML에 특수 문자 포함

HTML에서 문자 `<`,`>`, `"`및 `&`는 특수 문자입니다. 이들은 HTML 구문 자체의 일부입니다. 그럼 어떻게 이러한 특수 문자 중 하나를 내가 사용하고 싶은 텍스트에 포함할까요? 예를 들어, 앰퍼샌드 또는 이하 기호를 텍스트에 사용하고 HTML 코드로 해석되지 않게 하려는 경우와 같이 말입니다.

표를 참고하여 실습해보세요. 오른쪽의 특별한 코드는 특수 문자를 표현할 때 사용되는 문자 참조 코드입니다. 각 문자 참조는 앰퍼샌드 (&)로 시작하고 세미콜론 (;)으로 끝납니다.

| Literal character | Character reference equivalent |
| ----------------- | ------------------------------ |
| <                 | &lt;                           |
| >                 | &gt;                           |
| "                 | &quot;                         |
| '                 | &apos;                         |
| &                 | &amp;                          |

문자 참조에 해당하는 문자는 '\&lt;'보다 작거나 '\&quot;'에 대한 인용 및 기타 문자 참조와 유사하게 볼 수 있기 때문에 쉽게 기억할 수 있습니다. 엔터티 참조에 대한 자세한 내용은 [List of XML and HTML character entity references](http://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references) (Wikipedia)을 참조하십시오.

아래 예시는 두 개의 단락이 있습니다.

```html-nolint
<p>In HTML, you define a paragraph using the <p> element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
```

아래의 라이브 출력에서 첫 번째 단락이 잘못되었음을 알 수 있습니다. 브라우저는 \<p>의 두 번째 인스턴스를 새 단락을 시작하는 것으로 해석합니다. 두 번째 단락에는 문자 참조가있는 꺾쇠 괄호가 있으므로 잘 보입니다.

{{ EmbedLiveSample('Entity_references_Including_special_characters_in_HTML', 700, 200, "", "", "hide-codepen-jsfiddle") }}

> **참고:** HTML의 [문자 인코딩이 UTF-8로 설정](/ko/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Specifying_your_document's_character_encoding)되어 있기 때문에 최신 브라우저는 실제 기호를 잘 처리하므로 다른 기호에 대해서는 엔티티 참조를 사용할 필요가 없습니다.

## HTML 주석

HTML에는 코드에 주석을 작성하는 메커니즘이 있습니다. 브라우저는 주석을 무시하여 사용자가 주석을 보이지 않게합니다. 주석의 목적은 코드에 메모를 포함시켜 논리 또는 코딩을 설명 할 수 있도록하는 것입니다. 이것은 코드를 완전히 기억하지 못할 정도로 오랫동안 멀어진 후 코드베이스로 돌아 오는 경우에 매우 유용합니다. 마찬가지로, 다른 사람들이 변경하고 업데이트함에 따라 의견이 매우 중요합니다.

HTML 주석을 쓰려면 특수 마커 `<!-` 및 `->`로 주석을 묶습니다. 예를 들면 다음과 같습니다.

```html
<p>I'm not inside a comment</p>

<!-- <p>I am!</p> -->
```

아래에서 볼 수 있듯이 첫 번째 단락만 라이브 출력에 표시됩니다.

{{ EmbedLiveSample('HTML_comments', 700, 100, "", "", "hide-codepen-jsfiddle") }}

## Summary

HTML 기본 사항을 둘러 보셨기를 바랍니다.

이 글을 읽고나면 HTML의 모양과 기본 수준에서 작동하는 방식을 이해해야합니다. 또한 몇 가지 요소와 속성을 작성할 수 있어야합니다. 이 모듈의 후속 기사에서는 여기에 소개 된 주제 중 일부에 대해 더 설명하고 언어의 다른 개념을 제시합니다.

> **참고:** HTML에 대해 더 배우기 시작하면 CSS (Cascading Style Sheets)의 기본 사항을 배우십시오. [CSS](/ko/docs/Learn/CSS)는 웹 페이지의 스타일을 지정하는데 사용되는 언어입니다. (예 : 글꼴 또는 색상 변경 또는 페이지 레이아웃 변경) HTML과 CSS는 곧 발견 될 것입니다.

{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}
