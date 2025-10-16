---
title: 스타일링 링크
slug: Learn_web_development/Core/Text_styling/Styling_links
original_slug: Learn/CSS/Styling_text/Styling_links
l10n:
  sourceCommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

[링크](/ko/docs/Learn_web_development/Core/Structuring_content/Creating_links)의 스타일을 지정할 때는 의사 클래스를 사용하여 링크의 상태를 효과적으로 스타일링하는 방법을 이해하는 것이 중요합니다. 탐색 메뉴 및 탭과 같이 콘텐츠가 다양한 공통 인터페이스 기능에서 사용할 링크의 스타일을 지정하는 방법도 알아야 합니다. 이 글에서는 이 두 가지 주제를 모두 살펴보겠습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        기본적인 컴퓨터 활용 능력, HTML 기초(<a href="/ko/docs/Learn/HTML/Introduction_to_HTML">HTML 입문L</a> 학습), CSS 기초(<a href="/ko/docs/Learn/CSS/First_steps">CSS 입문</a> 학습), <a href="/ko/docs/Learn/CSS/Styling_text/Fundamentals">CSS 텍스트 및 글꼴 기초</a>를 학습합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        링크 상태의 스타일을 지정하는 방법과 탐색 메뉴와 같은 일반적인 UI 기능에서 링크를 효과적으로 사용하는 방법을 알아보세요.
      </td>
    </tr>
  </tbody>
</table>

## 몇 가지 링크를 살펴보겠습니다

[하이퍼링크 만들기](/ko/docs/Learn_web_development/Core/Structuring_content/Creating_links)의 모범 사례에 따라 HTML에서 링크가 구현되는 방식을 살펴봤습니다. 이 글에서는 이러한 지식을 바탕으로 링크의 스타일을 지정하는 모범 사례를 보여드리겠습니다.

### 링크 상태

가장 먼저 이해해야 할 것은 링크가 존재할 수 있는 다양한 상태인 링크 상태의 개념입니다. 이러한 상태는 다양한 [의사 클래스](/ko/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#pseudo-classes)를 사용하여 스타일을 지정할 수 있습니다.

- **링크**: {{cssxref(":link")}} 의사 클래스를 사용하여 스타일이 지정된 대상(즉, 명명된 앵커가 아닌)이 있는 링크입니다.
- **방문 횟수**: 이미 방문한 링크(브라우저 기록에 존재)로, {{cssxref(":visited")}} 의사 클래스를 사용하여 스타일이 지정됩니다.
- **호버**: 사용자의 마우스 포인터로 가리키는 링크이며, {{cssxref(":hover")}} 의사 클래스를 사용하여 스타일이 지정됩니다.
- **포커스**: 초점이 맞춰진 링크(예: 키보드 사용자가 <kbd>Tab</kbd> 키 또는 이와 유사한 키를 사용하여 이동하거나 {{domxref("HTMLElement.focus()")}}를 사용하여 프로그래밍 방식으로 초점이 맞춰진 링크) {{cssxref(":focus")}} 의사 클래스를 사용하여 스타일이 지정됩니다.
- **활성**: 활성화(예: 클릭)된 링크이며, {{cssxref(":active")}} 의사 클래스를 사용하여 스타일이 지정됩니다.

### 기본 스타일

아래 예시는 링크의 기본 모양과 동작을 보여 주지만, CSS는 텍스트를 확대하고 중앙에 배치하여 더 눈에 잘 띄도록 합니다. 예시에서 기본 스타일링의 모양과 동작을 이 페이지에서 더 많은 CSS 스타일이 적용된 다른 링크의 모양과 동작과 비교할 수 있습니다. 기본 링크에는 다음과 같은 속성이 있습니다.

- 링크는 밑줄이 그어져 있습니다.
- 방문하지 않은 링크는 파란색입니다.
- 방문한 링크는 자주색입니다.
- 링크를 가리키면 마우스 포인터가 작은 손 아이콘으로 바뀝니다.
- 초점이 맞춰진 링크에는 주위에 윤곽선이 표시되므로 탭 키를 눌러 키보드로 이 페이지의 링크에 초점을 맞출 수 있습니다. Mac의 경우 <kbd>option</kbd> \+ <kbd>tab</kbd> 을 사용하거나 [전체 키보드 액세스: 모든 컨트롤](https://support.apple.com/en-us/guide/mac-help/mchlp1399/mac) 옵션을 활성화해야 합니다(Mac에서는 <kbd>Ctrl</kbd> + <kbd>F7</kbd>을 눌러 활성화해야 합니다.
- 활성 링크는 빨간색입니다. 링크를 클릭할 때 마우스 버튼을 길게 눌러 보세요.

```html
<p><a href="#">A simple link</a></p>
```

```css
p {
  font-size: 2rem;
  text-align: center;
}
```

{{ EmbedLiveSample('Default_styles', '100%', 130) }}

> [!NOTE]
> 이 페이지의 모든 링크 예시는 해당 창 상단으로 연결됩니다. 빈 조각(`href="#"`)은 간단한 예제를 생성하고 각각 {{HTMLElement("iframe")}}에 포함된 라이브 예제가 깨지지 않도록 하는 데 사용됩니다.

흥미롭게도 이러한 기본 스타일은 1990년대 중반 브라우저 초창기 때와 거의 동일합니다. 링크의 스타일이 달라지면 많은 사람들이 혼란스러워할 것이기 때문에 사용자들은 이러한 동작을 알고 있고 기대하게 되었기 때문입니다. 그렇다고 링크 스타일을 전혀 지정하지 말아야 한다는 뜻은 아닙니다. 다만 예상되는 동작에서 너무 멀리 벗어나지 않아야 한다는 의미입니다. 최소한 아래와 같도록 해야 합니다.

- 링크에는 밑줄을 사용하되 다른 항목에는 밑줄을 사용하지 마세요. 링크에 밑줄을 긋고 싶지 않다면 다른 방법으로 강조 표시하세요.
- 마우스를 가져가거나 초점을 맞추면 어떤 방식으로 반응하고, 활성화하면 약간 다른 방식으로 반응하도록 설정하세요.

기본 스타일은 다음 CSS 속성을 사용하여 해제/변경할 수 있습니다.

- {{cssxref("color")}}을 텍스트 색상으로 지정합니다.
- 마우스 포인터 스타일에 대한 {{cssxref("cursor")}}는 특별한 이유가 없는 한 이 기능을 끄지 않는 것이 좋습니다.
- {{cssxref("outline")}}을 텍스트 윤곽선으로 설정합니다. 윤곽선은 테두리와 비슷합니다. 유일한 차이점은 테두리는 상자에서 공간을 차지하지만 윤곽선은 그렇지 않고 배경 위에 위치한다는 것입니다. 윤곽선은 유용한 접근성 보조 도구이므로 초점이 맞춰진 링크를 표시하는 다른 방법을 추가하지 않고 제거해서는 안 됩니다.

> [!NOTE]
> 링크 스타일 지정에 위의 속성만 사용할 수 있는 것이 아니라 원하는 모든 속성을 자유롭게 사용할 수 있습니다.

### 일부 링크 스타일링

이제 기본 상태에 대해 자세히 살펴봤으니 일반적인 링크 스타일 세트를 살펴보겠습니다.

우선 빈 규칙 집합을 작성해 보겠습니다.

```css
a {
}

a:link {
}

a:visited {
}

a:focus {
}

a:hover {
}

a:active {
}
```

링크 스타일은 서로를 기반으로 구축되므로 이 순서가 중요합니다. 예를 들어 첫 번째 규칙의 스타일은 이후의 모든 규칙에 적용됩니다. 링크가 활성화되면 보통은 마우스가 링크 위에 올라가있습니다. 이러한 규칙을 잘못된 순서로 배치하고 각 규칙 집합에서 동일한 속성을 변경하면 예상대로 작동하지 않습니다. 순서를 기억하기 위해 **L**o**V**e **F**ears **HA**te와 같은 니모닉을 사용해 볼 수 있습니다.

이제 스타일을 제대로 지정하기 위해 몇 가지 정보를 추가해 보겠습니다.

```css
body {
  width: 300px;
  margin: 0 auto;
  font-size: 1.2rem;
  font-family: sans-serif;
}

p {
  line-height: 1.4;
}

a {
  outline: none;
}

a:link {
  color: #6900ff;
}

a:visited {
  color: #a5c300;
}

a:focus {
  text-decoration: none;
  background: #bae498;
}

a:hover {
  text-decoration: none;
  background: #cdfeaa;
}

a:active {
  background: #6900ff;
  color: #cdfeaa;
}
```

또한 CSS를 적용할 수 있는 몇 가지 샘플 HTML도 제공합니다.

```html
<p>
  There are several browsers available, such as <a href="#">Mozilla Firefox</a>,
  <a href="#">Google Chrome</a>, and <a href="#">Microsoft Edge</a>.
</p>
```

이 두 가지를 합치면 다음과 같은 결과가 나옵니다.

{{ EmbedLiveSample('Styling_some_links', '100%', 200) }}

그래서 우리는 여기서 무엇을 했나요? 기본 스타일링과는 확실히 달라 보이지만 사용자가 무슨 일이 일어나고 있는지 알 수 있을 정도로 친숙한 경험을 제공합니다.

- 처음 두 가지 규칙은 이 논의에서 그다지 흥미롭지 않습니다.
- 세 번째 규칙은 `a` 선택자를 사용하여 브라우저마다 다를 수 있는 초점이 맞춰진 윤곽선을 제거합니다.
- 다음으로, `a:link` 및 `a:visited` 선택자를 사용하여 방문하지 않은 링크와 방문한 링크에 몇 가지 색상 변형을 설정하여 구분할 수 있도록 합니다.
- 다음 두 규칙은 `a:focus` 및 `a:hover`를 사용하여 초점이 맞춰진 링크와 마우스오버된 링크에 밑줄이 없고 배경색이 다르도록 설정합니다.
- 마지막으로, `a:active`는 링크가 활성화되는 동안 반전된 색 구성표를 사용하여 중요한 일이 일어나고 있음을 명확하게 표시하는 데 사용됩니다!

### 능동적 학습: 나만의 링크 스타일 지정

이 능동적 학습 세션에서는 빈 규칙 세트를 가지고 자신만의 선언문을 추가하여 링크를 멋지게 만들어 보시기 바랍니다. 상상력을 마음껏 발휘해 보세요. 위의 예시처럼 더 멋지고 기능적인 것을 생각해낼 수 있을 것입니다.

실수한 경우 언제든지 재설정 버튼을 사용하여 재설정할 수 있습니다. 정말 막히는 경우 솔루션 표시 버튼을 눌러 위에 표시된 예제를 삽입하세요.

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Input</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
<p>There are several browsers available, such as <a href="#">Mozilla
 Firefox</a>, <a href="#">Google Chrome</a>, and
<a href="#">Microsoft Edge</a>.</p>
  </textarea>

  <h2>CSS Input</h2>
  <textarea
    id="code"
    class="css-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
a {

}

a:link {

}

a:visited {

}

a:focus {

}

a:hover {

}

a:active {

}
  </textarea>

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
    <input
      id="solution"
      type="button"
      value="Show solution"
      style="margin: 10px 0 0 10px;" />
  </div>
</div>
```

```js hidden
const htmlInput = document.querySelector(".html-input");
const cssInput = document.querySelector(".css-input");
const reset = document.getElementById("reset");
const htmlCode = htmlInput.value;
const cssCode = cssInput.value;
const output = document.querySelector(".output");
const solution = document.getElementById("solution");

const styleElem = document.createElement("style");
const headElem = document.querySelector("head");
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", () => {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

solution.addEventListener("click", () => {
  htmlInput.value = htmlCode;
  cssInput.value = `p {
  font-size: 1.2rem;
  font-family: sans-serif;
  line-height: 1.4;
}

a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: #265301;
}

a:visited {
  color: #437A16;
}

a:focus {
  border-bottom: 1px solid;
  background: #BAE498;
}

a:hover {
  border-bottom: 1px solid;
  background: #CDFEAA;
}

a:active {
  background: #265301;
  color: #CDFEAA;
}`;
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Active_learning_Style_your_own_links', 700, 800) }}

## 링크에 아이콘 포함하기

링크에 아이콘을 추가하여 링크가 가리키는 콘텐츠의 종류를 더 쉽게 알 수 있도록 하는 것이 일반적입니다. 외부 링크(다른 사이트로 연결되는 링크)에 아이콘을 추가하는 아주 간단한 예를 살펴봅시다. 이러한 아이콘은 일반적으로 상자 밖을 가리키는 작은 화살표처럼 보입니다. 이 예제에서는 [icons8.com의 이 훌륭한 예제](https://icons8.com/icon/741/external-link)를 사용하겠습니다.

원하는 효과를 낼 수 있는 몇 가지 HTML과 CSS를 살펴봅시다. 먼저 스타일을 지정할 간단한 HTML입니다.

```html-nolint
<p>
  For more information on the weather, visit our <a href="#">weather page</a>,
  look at <a href="https://en.wikipedia.org/">weather on Wikipedia</a>, or check
  out
  <a href="https://www.nationalgeographic.org/topics/resource-library-weather/">
    weather on National Geographic</a>.
</p>
```

다음은 CSS입니다.

```css
body {
  width: 300px;
  margin: 0 auto;
  font-family: sans-serif;
}

p {
  line-height: 1.4;
}

a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: blue;
}

a:visited {
  color: purple;
}

a:focus,
a:hover {
  border-bottom: 1px solid;
}

a:active {
  color: red;
}

a[href^="http"] {
  background: url("external-link-52.png") no-repeat 100% 0;
  background-size: 16px 16px;
  padding-right: 19px;
}
```

{{ EmbedLiveSample('Including_icons_on_links', '100%', 150) }}

무슨 내용일까요? 대부분의 CSS는 이전에 살펴본 것과 동일한 정보이므로 생략하겠습니다. 하지만 마지막 규칙이 흥미로운데, 지난 글에서 [목록 항목의 사용자 정의 글머리 기호](/ko/docs/Learn_web_development/Core/Text_styling/Styling_lists#using_a_custom_bullet_image)를 처리한 것과 비슷한 방식으로 외부 링크에 사용자 정의 배경 이미지를 삽입하고 있습니다. 하지만 이번에는 개별 속성 대신 {{cssxref("background")}} 약어를 사용합니다. 삽입할 이미지의 경로를 설정하고, 사본이 한 번만 삽입되도록 `no-repeat`로 지정한 다음, 위치를 텍스트 콘텐츠의 오른쪽 100%, 상단에서 0픽셀로 지정합니다.

또한 {{cssxref("background-size")}}를 사용하여 배경 이미지가 표시될 크기를 지정할 수 있습니다. 반응형 웹 디자인을 위해 아이콘을 크게 만든 다음 필요에 따라 이와 같이 크기를 조정하는 것이 유용합니다. 하지만 이 기능은 IE 9 이상에서만 작동합니다. 따라서 이전 브라우저를 지원해야 하는 경우 이미지 크기를 조정하여 그대로 삽입하면 됩니다.

마지막으로, 배경 이미지가 텍스트와 겹치지 않도록 링크에 {{cssxref("padding-right")}}을 설정하여 배경 이미지가 표시될 공간을 확보했습니다.

마지막으로 외부 링크만 어떻게 선택했나요? [HTML 링크](/ko/docs/Learn_web_development/Core/Structuring_content/Creating_links)를 올바르게 작성했다면 외부 링크에는 절대 URL만 사용해야 하며, 내 사이트의 다른 부분으로 연결할 때는 상대 링크를 사용하는 것이 더 효율적입니다(첫 번째 링크와 마찬가지로). 따라서 "http" 텍스트는 두 번째 및 세 번째 링크와 같이 외부 링크에만 표시되어야 하며, [속성 선택자](/ko/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#attribute_selectors)를 사용하여 이를 선택할 수 있습니다. `a[href^="http"]`는 {{htmlelement("a")}} 요소를 선택하지만 값이 "http"로 시작하는 [`href`](/ko/docs/Web/HTML/Reference/Elements/a#href) 속성이 있는 경우에만 선택됩니다.

여기까지입니다. 위의 능동적 학습 섹션을 다시 한 번 살펴보고 이 새로운 기법을 사용해 보세요!

> [!NOTE]
> `href` 값이 이상하게 보이는데, 여기서는 실제로 아무데도 연결되지 않는 더미 링크를 사용했습니다. 그 이유는 실제 링크를 사용하면 라이브 예제가 임베드된 `<iframe>`에 외부 사이트가 로드되어 예제가 손실될 수 있기 때문입니다.

> [!NOTE]
> [배경](/ko/docs/Learn_web_development/Core/Styling_basics)과 [반응형 웹 디자인](/ko/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)에 아직 익숙하지 않더라도 다른 곳에서 설명되어 있으니 걱정하지 마세요.

## 버튼으로 링크 스타일링하기

이 글에서 지금까지 살펴본 도구는 다른 방식으로도 사용할 수 있습니다. 예를 들어, 링크뿐만 아니라 문단, 목록 항목 등의 마우스오버 상태를 스타일링하는 등 다양한 요소의 스타일을 지정하는 데 마우스오버 상태를 사용할 수 있습니다.

또한 링크는 특정 상황에서 버튼처럼 보이고 작동하도록 스타일링하는 것이 일반적입니다. 웹사이트 탐색 메뉴는 링크 집합으로 마크업할 수 있으며, 사용자가 사이트의 다른 부분에 액세스할 수 있도록 제어 버튼이나 탭 집합처럼 보이도록 스타일을 지정할 수 있습니다. 방법을 살펴보겠습니다.

먼저 HTML입니다.

```html
<nav class="container">
  <a href="#">Home</a>
  <a href="#">Pizza</a>
  <a href="#">Music</a>
  <a href="#">Wombats</a>
  <a href="#">Finland</a>
</nav>
```

그리고 이제 CSS입니다.

```css
body,
html {
  margin: 0;
  font-family: sans-serif;
}

.container {
  display: flex;
  gap: 0.625%;
}

a {
  flex: 1;
  text-decoration: none;
  outline: none;
  text-align: center;
  line-height: 3;
  color: black;
}

a:link,
a:visited,
a:focus {
  background: palegoldenrod;
  color: black;
}

a:hover {
  background: orange;
}

a:active {
  background: darkred;
  color: white;
}
```

이렇게 하면 다음과 같은 결과가 나옵니다.

{{ EmbedLiveSample('Styling_links_as_buttons', '100%', 120) }}

HTML은 `"container"` 클래스가 있는 {{HTMLElement("nav")}} 요소를 정의합니다. `<nav>`에는 링크가 포함되어 있습니다.

CSS에는 컨테이너와 컨테이너에 포함된 링크에 대한 스타일이 포함됩니다.

- 두 번째 규칙은 다음과 같습니다.
  - 컨테이너는 [플렉스 박스](/ko/docs/Learn_web_development/Core/CSS_layout/Flexbox)입니다. 여기에 포함된 항목(이 경우 링크)은 *플렉스 항목*이 됩니다.
  - 플렉스 항목 사이의 간격은 컨테이너 너비의 `0.625%`가 됩니다.
- 세 번째 규칙은 링크의 스타일을 지정합니다.
  - 첫 번째 선언인 `flex: 1`은 컨테이너의 사용 가능한 모든 공간을 사용하도록 항목의 너비를 조정한다는 의미입니다.
  - 다음으로, 기본 {{cssxref("text-decoration")}}과 {{cssxref("outline")}}을 꺼서 모양을 망치지 않도록 합니다.
  - 마지막 세 가지 선언은 각 링크 내부의 텍스트를 가운데에 배치하고, {{cssxref("line-height")}}를 3으로 설정하여 버튼에 약간의 높이를 부여하고(텍스트가 세로로 중앙에 배치되는 이점도 있습니다), 텍스트 색상을 검정색으로 설정하는 것입니다.

## 요약

이 글이 링크에 대해 알아야 할 모든 것을 알려드렸기를 바랍니다. 스타일링 텍스트 모듈의 마지막 글에서는 웹사이트에 [사용자 정의 글꼴](/ko/docs/Learn_web_development/Core/Text_styling/Web_fonts)(또는 더 잘 알려진 웹 글꼴)을 사용하는 방법에 대해 자세히 설명합니다.

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}
