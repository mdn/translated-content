---
title: HTML 시작하기
slug: Learn/HTML/Introduction_to_HTML/Getting_started
page-type: learn-module-chapter
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}

이 문서는 HTML의 기본적인 내용에 대한 글입니다. 이 글에서는 HTML에 관련된 용어들(Element, Attribute ..)의 정의에 대해 설명할 것입니다. 또한 HTML이 무엇으로 이루어져 있는지(구성요소), 어떻게 구성되어 있는지(구조), 중요한 특징은 무엇인지에 대해 설명할 것입니다. 그 과정에서 HTML을 가지고 놀 수 있는 기회도 있을 것입니다!

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">사전 지식</th>
      <td>
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
      <td>HTML에 익숙해지고, 몇 가지 HTML 요소를 작성하는 연습을 합니다.</td>
    </tr>
  </tbody>
</table>

## HTML이란?

{{glossary("HTML")}} (Hypertext Markup Language)은 웹 페이지를 구조화하는 방법을 웹 브라우저에게 알려주는 _마크업 언어_입니다. 이는 웹 개발자에 따라 간단하거나 복잡할 수 있습니다. HTML은 일련의 {{glossary("Element", "elements")}}로 구성되어 있는데, 콘텐츠를 특정한 방식으로 보이거나 동작하도록 만들기 위해 콘텐츠의 다른 부분을 둘러싸거나, 마크업하는 데 사용합니다. 닫는 {{glossary("Tag", "tags")}}는 콘텐츠를 다른 페이지에 연결하기 위한 하이퍼링크로 만들고, 단어를 이탤릭체로 만드는 등의 작업을 할 수 있습니다. 예를 들어, 다음 텍스트를 보세요.

```
My cat is very grumpy
```

만약 다음의 문장을 단독으로 사용하려면, 단락({{htmlelement("p")}}) 요소로 감싸 단락임을 지정할 수 있습니다:

```html
<p>My cat is very grumpy</p>
```

> **참고:** HTML 태그는 대소문자를 구분하지 않습니다. 예를 들어, {{htmlelement("title")}} 요소는 `<title>`, `<TITLE>`, `<Title>`, `<TiTlE>`들과 같이 사용할 수 있습니다. 그러나 일관성과 가독성을 위해 소문자로 쓰는 것이 가장 좋습니다.

## HTML 요소(Element)의 구조

앞 절에서의 단락 요소에 대해 자세히 알아보겠습니다:

![](grumpy-cat-small.png)

요소의 주요 부분은 다음과 같습니다.

- **여는 태그(the opening tag):** 이것은 요소의 이름과(이 경우 p), 열고 닫는 꺽쇠 괄호로 구성됩니다. 요소가 시작(이 경우 단락의 시작 부분)부터 효과가 적용되기 시작합니다.
- **내용(the content):** 요소의 내용이며, 이 경우 단순한 텍스트이다.
- **닫는 태그(the closing tag):** 이것은 요소의 이름 앞에 슬래시(/)가 있는것을 제외하면 여는 태그와 같습니다. 이것은 요소의 끝(이 경우 단락의 끝 부분)에 위치합니다. 닫는 태그를 적어주지 않는 것은 흔한 초심자의 오류이며, 이것은 이상한 결과를 낳게됩니다.

### 실습: 첫 번째 HTML 요소 만들어보기

편집할 수 있는 코드 영역의 아래 줄을 `<em>` 과 `</em>` 태그를 이용해서 수정합니다. 요소를 열려면 줄의 시작 부분에 여는 태그 `<em>`을 놓고, 요소를 닫으려면 닫는 태그 `</em>`을 줄의 끝부분에 놓습니다. 이렇게 하면 이탤릭체 텍스트 형식이 제공됩니다! 여러분이 수정한 결과는 실시간으로 Output 영역에서 볼 수 있습니다.

만약 실수했다면, Reset 버튼을 눌러서 수정한 내용을 초기화할 수 있습니다. 정말 모르겠다면, _Show solution_ 버튼을 이용해서 정답을 확인해보세요.

```html hidden
<h2>Live output</h2>
<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  코드 영역에서 포커스를 이동하려면 Esc키를 누르십시오 (Tab키로 탭 문자를 삽입).
</p>

<textarea id="code" class="playable-code" style="min-height: 100px; width: 95%">
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
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution = "<em>This is my text.</em>";
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

{{ EmbedLiveSample('Playable_code', 700, 400, "", "", "hide-codepen-jsfiddle") }}

### 포함(내포:內包)된 요소(Nesting elements)

요소 안에 다른 요소가 들어갈 수 있습니다. 그런 요소는 내포되었다고 표현합니다. "고양이가 매우 사납다" 라는 문장을 강조하기 위해서, '매우'라는 단어를 강조하는 {{htmlelement("strong")}} 요소를 중첩해서 사용할 수 있습니다.

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

요소 내표를 위해서는 확인해야 할 것이 있습니다. 위의 예제에서는 `p` 요소가 먼저 열렸고, 그리고 `strong` 요소가 열렸습니다. 그렇기 때문에 `strong` 요소가 먼저 닫힌 후에 `p` 요소가 닫혀야 합니다. 아래와 같은 문장은 중첩(重疊 : 서로 포개어(overlap 또는 stacking) 지거나, 엇갈려 겹쳐짐)되었으므로 잘못된 문장입니다.

```html example-bad
<p>My cat is <strong>very grumpy.</p></strong>
```
**태그들은 서로 안쪽 또는 바깥쪽에 있는 방식으로 열리고 닫아야 합니다.** 위의 예제에 있는 일종의 겹침으로 브라우저는 당신의 의도를 추측해야 하고, 이는 예상치 못한 결과를 낳을 수 있습니다.

### 빈 요소
모든 요소가 여는 태그, 내용 및 닫는 태그의 패턴을 따르는 것은 아닙니다. 일부 요소는 일반적으로 문서에 무엇인가를 삽입하거나 삽입하는 데 사용되는 단일 태그로 구성됩니다. 이러한 요소를 void element라고 합니다. 예를 들어, `<img>` 요소는 페이지에 이미지 파일을 포함합니다:

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon" />
```

위의 결과는 다음과 같습니다:
{{ EmbedLiveSample('Void_elements', 700, 300, "", "") }}

## 속성(Attributes)

요소는 아래 이미지와 같이 속성을 가질 수 있습니다:

![paragraph tag with 'class="editor-note"' attribute emphasized](grumpy-cat-attribute-small.png)

속성은 요소에 실제론 나타내고 싶지 않지만 추가적인 내용을 담고 싶을 때 사용합니다. 위에는 나중에 스타일에 관련된 내용이나 기타 내용을 위해 해당 목표를 구분할 수 있는 `class` 속성을 부여했습니다.

속성을 사용할 때에는 아래 내용을 지켜야 합니다:

- 요소 이름 다음에 바로 오는 속성은 요소 이름과 속성 사이에 공백이 있어야 되고, 하나 이상의 속성들이 있는 경우엔 속성 사이에 공백이 있어야 합니다.
- 속성 이름 다음엔 등호(=)가 붙습니다.
- 속성 값은 열고 닫는 따옴표로 감싸야 합니다.

### 실습: 요소에 속성 추가하기

`<img>` 요소는 다음과 같은 여러 속성을 취할 수 있습니다:
- `src`
  - `src` 속성은 이미지의 위치를 지정하는 **필수** 속성입니다. 예: `src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"`

- `alt`
  - `alt` 속성은 이미지를 설명합니다. 예: `alt="The Firefox icon"`

- `width`
  - `width` 속성은 단위가 픽셀인 이미지의 너비를 지정합니다. 예: `width="300"`

- `height`
  - `height` 속성은 단위가 픽셀인 이미지의 높이를 지정합니다. 예: `height="300"`

Input(입력) 영역에서 아래 행을 편집하여 이미지로 바꿉니다.

1. 온라인에서 마음에 드는 이미지를 찾고 마우스 오른쪽 버튼을 클릭한 후 _이미지 주소 복사_를 누릅니다.
2. 아래 영역으로 돌아가서 `src` 속성을 추가하고 1단계의 링크로 채웁니다.
3. `alt` 속성을 설정합니다.
4. `width` 및 `height` 속성을 추가합니다.

Output(출력) 영역에서 변경 내용을 실시간으로 확인할 수 있습니다.

실수하면 언제든지 Reset 버튼을 사용하여 리셋할 수 있습니다. 정말 막히면 Show solution 버튼을 눌러 정답을 확인합니다.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="min-height: 100px;width: 95%">
&lt;img alt="I should be an image" &gt;
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
  '<img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png" alt="Firefox icon" width="100" height="100" />';
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

{{ EmbedLiveSample('Active_learning_Adding_attributes_to_an_element', 700, 400, "", "") }}


### 참과 거짓 속성(Boolean attributes)

때때로 값이 없는 속성을 볼 수 있을텐데 이것은 허용되는 것입니다. 이를 불 속성이라고 하며, 일반적으로 그 속성의 이름과 동일한 하나의 값만을 가질 수 있습니다. 예를 들어 [`disabled`](/ko/docs/Web/HTML/Element/input#disabled) 속성을 양식 입력 요소에 할당하면 사용자가 데이터를 입력할 수 없도록 비활성화(회색으로 표시) 할 수 있습니다.

```Html
<input type="text" disabled="disabled">
```

이것을 약어로 다음과 같이 쓸 수 있습니다:

```html
<!-- disabled 속성을 있어 사용자가 텍스트를 입력할 수 없습니다. -->
<input type="text" disabled />

<!-- disabled 속성이 없어 사용자가 텍스트를 입력할 수 있습니다. -->
<input type="text" />
```

참고로, 위 예제는 비활성화되지 않은 입력 요소도 포함합니다. 위 예제의 HTML은 다음과 같습니다:

{{ EmbedLiveSample('Boolean_attributes', 700, 100, "", "") }}

### 속성값의 따옴표 생략
다른 많은 사이트의 코드를 보면 따옴표가 없는 속성 값을 비롯하여 여러 가지 이상한 마크업 스타일을 만날 수 있습니다. 특정 상황에서는 허용되지만 다른 상황에서는 마크업을 깨트릴 수도 있습니다. 아래 코드에서 `<a>`를 앵커라고 합니다. 앵커는 텍스트를 감싸서 링크로 바꿉니다. `href` 속성은 링크가 가리키는 웹 주소를 지정합니다. 이 기본 버전은 다음과 같이 `href` 속성만으로 작성할 수 있습니다:

```html
<a href=https://www.mozilla.org/>favorite website</a>
```

앵커는 연결된 페이지에 대한 설명인 `title` 속성을 가질 수도 있습니다. 그러나 `href` 속성과 같은 방식으로 제목을 추가하는 순간 다음과 같은 문제가 발생합니다:

```html-nolint example-bad
<a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>
```

이 때 브라우저는 당신의 마크업을 잘못 해석해서 `title`이 세 개의 속성을 가진다고 생각할 것입니다. `title` 속성값 `The`와 두 개의 불 속성값 `Mozilla`, `homepage`라고 말이죠. 이 것은 우리가 의도한 것도 아닐 뿐더러 아래의 예시처럼 오류가 발생하거나 예상치 못한 동작을 할 수도 있습니다. 링크 위에 마우스를 올려 title이 어떻게 보이는지 확인해 보세요.

{{ EmbedLiveSample('Omitting_quotes_around_attribute_values', 700, 100, "", "", "hide-codepen-jsfiddle") }}

우리는 항상 속성값에 따옴표를 붙이라고 조언합니다. 이런 오류를 피할 수도 있고, 코드의 가독성도 좋아지기 때문입니다.

### 작은 따옴표, 큰 따옴표?

이 글에서 모든 속성값은 큰 따옴표에 둘러싸여 있는 것을 볼 수 있습니다. 하지만 당신은 어떤 사람의 HTML에서 작은 따옴표를 볼 수 있을 것입니다. 이 것은 스타일의 문제로, 당신이 좋아하는 방법을 사용하면 됩니다. 아래 두 문장은 똑같이 동작합니다.

```html-nolint
<a href="http://www.example.com">A link to my example.</a>

<a href="http://www.example.com">A link to my example.</a>
```

주의해야할 점은 두 개를 섞어 쓰면 안된다는 것입니다. 다음은 잘못 사용한 예입니다.

```html-nolint example-bad
<a href="http://www.example.com'>A link to my example.</a>
```

만약 한 가지 따옴표를 사용했다면 다른 따옴표로 속성값을 둘러싸서 오류를 방지할 수 있습니다.

```html
<a href="http://www.example.com" title="Isn't this fun?"
  >A link to my example.</a
>
```

하지만 만약 당신이 따옴표 안에 같은 따옴표를 사용하고 싶다면(작은 따옴표든 큰 따옴표든) 따옴표를 표시하기 위해서 [HTML entities](/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Entity_references_Including_special_characters_in_HTML)를 사용하세요. 예를 들어 이렇게 하면 잘못됩니다:

```html-nolint example-bad
<a href='http://www.example.com' title='Isn't this fun?'>A link to my example.</a>
```

그래서 이렇게 바꿔주면 잘 작동합니다.

```html-nolint
<a href='http://www.example.com' title='Isn&#39;t this fun?'>A link to my example.</a>
```

## HTML 문서의 구조

각각의 HTML 요소는 그 자체로 그다지 유용하지 않습니다. 다음으로 각각의 요소들이 어떻게 조합하여 전체 HTML 페이지를 구성하는지 알아보겠습니다:

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

1. `<!DOCTYPE html>`: 문서 형식을 나타냅니다. HTML 초창기에 (1991-1992) doctype은 HTML 페이지가 자동 오류 검사나 다른 유용한 것이 가능한 좋은 HTML을 의미하는 연결고리처럼 작동하는 것을 뜻했습니다. 이런 형식으로 사용했습니다.

   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```

   최근에는 다른 모든 것이 제대로 작동하기 위해 포함되어야 하는 역사적 유물입니다. `<!DOCTYPE html>` 은 유효한 문서 형식을 나타내는 짧은 문장이고, 이것만 알고 있으면 됩니다.

2. `<html></html>`: {{htmlelement("html")}} 요소입니다. 이 요소는 전체 페이지의 콘텐츠를 포함하며, 루트 요소로도 알려져 있습니다.
3. `<head></head>`: {{htmlelement("head")}} 요소입니다. 이 요소는 홈페이지 이용자에게는 **보이지 않지만** 검색 결과에 노출 될 키워드, 홈페이지 설명, CSS 스타일, 문자 집합 선언 등 HTML 페이지의 모든 내용을 담고 있습니다. 자세한 내용은 다음 장에서 다룹니다.
4. `<meta charset="utf-8">`: {{htmlelement("meta")}} 요소입니다. 이 요소는 다른 HTML 메타 관련 요소(예: `<base>`, `<link>`, `<script>`, `<style>` 또는 `<title>`)로 표현할 수 없는 메타데이터를 나타냅니다. 문자 집합 속성은 문서에 대한 문자 인코딩을 UTF-8로 지정하며, 여기에는 인간이 작성한 언어의 대다수의 문자가 포함됩니다. 이 설정을 사용하면 페이지가 포함할 수 있는 텍스트 내용을 처리할 수 있습니다. 이것을 설정하지 않을 이유가 없으며, 나중에 몇 가지 문제를 방지하는 데 도움이 될 수 있습니다.
5. `<title></title>`: {{htmlelement ( "title")}} 요소입니다. 이 요소를 사용하면 페이지 제목이 설정되며 페이지가 로드되는 브라우저 탭에 표시되는 제목으로 사용됩니다. 페이지 제목은 페이지가 책갈피 될 때 페이지를 설명하는 데에도 사용됩니다.
6. `<body></body>`: {{htmlelement ( "body")}} 요소입니다. 여기에는 텍스트, 이미지, 비디오, 게임, 재생 가능한 오디오 트랙 등을 비롯하여 페이지에 표시되는 모든 콘텐츠가 포함됩니다.x

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
- 중요한 단어는 `<strong>` 여는 태그와 `</strong>` 닫는 태그 안에 넣어 굵게 표시하십시오.
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
<p id="noWhitespace">Dogs are silly.</p>

<p id="whitespace">Dogs
    are
        silly.</p>
```

HTML 요소 내용 내에서 얼마나 많은 공백을 사용하든 (하나 이상의 공백 문자를 포함 하거나 줄 바꿈 포함) HTML 파서는 코드를 렌더링 할 때 각 공백 시퀀스를 단일 공백으로 줄입니다. 왜 그렇게 많은 공백을 사용합니까? 답은 가독성입니다.

코드의 보기 좋게 정리되어 있다면 코드에서 무슨 일이 일어나고 있는지 이해하는 것이 더 쉬울 수 있습니다. HTML에는 중첩 된 각 요소가 내부에있는 것보다 두 칸 더 들여 쓰기되어 있습니다. 서식 스타일 (예 : 각 들여 쓰기 수준에 대한 공백 수)을 선택하는 것은 사용자의 몫이지만 서식을 고려해야합니다.

브라우저가 위의 두 단락을 공백이 있는 경우와 없는 경우에 어떻게 렌더링하는지 살펴보겠습니다:

{{ EmbedLiveSample('Whitespace_in_HTML', 700, 100) }}

> **참고:** 자바스크립트에서 요소들의 [innerHTML](/en-US/docs/Web/API/Element/innerHTML)에 접근하면 모든 공백이 그대로 유지됩니다. 브라우저에서 공백을 제거하면 예기치 않은 결과가 반환될 수 있습니다.

```js
const noWhitespace = document.getElementById("noWhitespace").innerHTML;
console.log(noWhitespace);
// "Dogs are silly."

const whitespace = document.getElementById("whitespace").innerHTML;
console.log(whitespace);
// "Dogs
//    are
//        silly."
```

## Entity references: HTML에 특수 문자 포함

HTML에서 문자 `<`,`>`, `"`, `'`및 `&`는 특수 문자입니다. 이들은 HTML 구문 자체의 일부입니다. 그럼 어떻게 이러한 특수 문자 중 하나를 내가 사용하고 싶은 텍스트에 포함할까요? 예를 들어, 앰퍼샌드 또는 이하 기호를 텍스트에 사용하고 HTML 코드로 해석되지 않게 하려는 경우와 같이 말입니다.

표를 참고하여 실습해보세요. 오른쪽의 특별한 코드는 특수 문자를 표현할 때 사용되는 문자 참조 코드입니다. 각 문자 참조는 앰퍼샌드 (&)로 시작하고 세미콜론 (;)으로 끝납니다.

| Literal character | Character reference equivalent |
| ----------------- | ------------------------------ |
| <                 | `&lt;`                         |
| >                 | `&gt;`                         |
| "                 | `&quot;`                       |
| '                 | `&apos;`                       |
| &                 | `&amp;`                        |

문자 참조에 해당하는 문자는 `\&lt;`보다 작거나 `\&quot;`에 대한 인용 및 기타 문자 참조와 유사하게 볼 수 있기 때문에 쉽게 기억할 수 있습니다. 엔터티 참조에 대한 자세한 내용은 [List of XML and HTML character entity references](http://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references) (Wikipedia)을 참조하십시오.

아래 예시는 두 개의 단락이 있습니다.

```html-nolint
<p>In HTML, you define a paragraph using the <p> element.</p>

<p>In HTML, you define a paragraph using the &lt;p&gt; element.</p>
```

아래의 라이브 출력에서 첫 번째 단락이 잘못되었음을 알 수 있습니다. 브라우저는 `<p>`의 두 번째 인스턴스를 새 단락을 시작하는 것으로 해석합니다. 두 번째 단락에는 문자 참조가있는 꺾쇠 괄호가 있으므로 잘 보입니다.

{{ EmbedLiveSample('Entity_references_Including_special_characters_in_HTML', 700, 200, "", "") }}

> **참고:** HTML의 [문자 인코딩이 UTF-8로 설정](/ko/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Specifying_your_document's_character_encoding)되어 있기 때문에 최신 브라우저는 실제 기호를 잘 처리하므로 다른 기호에 대해서는 엔티티 참조를 사용할 필요가 없습니다.

## HTML 주석

HTML에는 코드에 주석을 작성하는 메커니즘이 있습니다. 브라우저는 주석을 무시하여 사용자가 주석을 보이지 않게합니다. 주석의 목적은 코드에 메모를 포함시켜 논리 또는 코딩을 설명 할 수 있도록하는 것입니다. 이것은 코드를 완전히 기억하지 못할 정도로 오랫동안 멀어진 후 코드베이스로 돌아 오는 경우에 매우 유용합니다. 마찬가지로, 다른 사람들이 변경하고 업데이트함에 따라 의견이 매우 중요합니다.

HTML 주석을 사용하려면 `<!--` 및 `-->`로 주석을 묶습니다. 예를 들면 다음과 같습니다:

```html
<p>I'm not inside a comment</p>

<!-- <p>I am!</p> -->
```

아래에서 볼 수 있듯이 첫 번째 단락만 라이브 출력에 표시됩니다.

{{ EmbedLiveSample('HTML_comments', 700, 100, "", "") }}

## 요약

HTML 기본 사항을 둘러 보셨기를 바랍니다.

이 글을 읽고나면 HTML의 모양과 기본 수준에서 작동하는 방식을 이해해야합니다. 또한 몇 가지 요소와 속성을 작성할 수 있어야합니다. 이 모듈의 후속 기사에서는 여기에 소개 된 주제 중 일부에 대해 더 설명하고 언어의 다른 개념을 제시합니다.

- HTML에 대해 더 배우기 시작하면 CSS (Cascading Style Sheets)의 기본 사항을 배우십시오. [CSS](/ko/docs/Learn/CSS)는 웹 페이지의 스타일을 지정하는데 사용되는 언어입니다. (예 : 글꼴 또는 색상 변경 또는 페이지 레이아웃 변경) HTML과 CSS는 곧 발견 될 것입니다.

## 더보기
- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_colors/Applying_color)

{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}
