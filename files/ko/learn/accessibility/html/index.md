---
title: "HTML: 접근성의 좋은 기반"
slug: Learn/Accessibility/HTML
l10n:
  sourceCommit: d3cdafcdb4d22e5c55771501e7c80451a96aa032
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}

HTML 요소를 늘 올바른 목적에 따라 사용하는 것 만으로 수많은 웹 콘텐츠가 접근성을 갖춥니다. 이번 글에서는 접근성을 최대한으로 보장하기 위해 HTML을 어떻게 사용해야 하는지 자세히 설명합니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        기본적인 컴퓨터 활용 능력, HTML에 대한 기본적인 이해 (<a href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 소개</a
        > 참고), 그리고 <a href="/ko/docs/Learn/Accessibility/What_is_accessibility"
          >접근성이 무엇인지</a
        >에 대한 이해.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        접근성 이점을 가져다주는 HTML 요소와 웹 문서에서 그들을 적절하게 사용하는 방법에 익숙해지기.
      </td>
    </tr>
  </tbody>
</table>

## HTML과 접근성

HTML에 대해 더 많은 자료와 예제를 접하고, 더 많이 배우면 배울수록 당신은 시맨틱 HTML(POSH 또는 Plain Old Semantic HTML라고 부르기도 합니다)을 사용하는 것이 중요하다는 공통 주제를 계속해서 접하게 될 것입니다. 이것은 최대한 올바른 HTML 요소를 그 의도에 맞는 목적으로 사용하는 것을 의미합니다.

이게 왜 그렇게 중요한지 이해되지 않을 수도 있습니다. 사실 CSS와 JavaScript 조합만으로 거의 모든 HTML 요소들을 원하는 방식으로 동작시킬 수 있습니다. 예를 들어 사이트에서 동영상을 재생하기 위한 버튼을 이렇게 마크업 할 수 있습니다.

```html
<div>Play video</div>
```

하지만 나중에 더 자세히 살펴볼 것처럼, 작업에 올바른 HTML 요소를 사용하는 것이 합리적입니다.

```html
<button>Play video</button>
```

HTML `<button>`은 적절한 스타일(아마 덮어쓰고 싶을지 모르지만)이 기본적으로 적용되어 있을 뿐 아니라, 키보드 접근성도 내장되어 있습니다. 사용자는 <kbd>Tab</kbd> 키를 사용해서 버튼 사이를 이동할 수 있고, <kbd>Space</kbd>, <kbd>Return</kbd> 또는 <kbd>Enter</kbd> 키를 사용해 선택된 버튼을 활성화 시킬 수 있습니다.

시맨틱 HTML을 프로젝트 초기부터 지속적으로 사용한다면 시맨틱하지 않은, 즉 나쁜 마크업을 작성하는 것보다 더 오래 걸리지도 않습니다. 사실 시맨틱 마크업은 접근성 외의 이점도 가지고 있습니다.

1. **개발이 더 쉬워집니다** — 앞서 언급했듯이 내장된 몇몇 기능을 활용할 수 있으며, 이해하기에도 확실히 더 쉽습니다.
2. **모바일 환경에서 더 좋습니다** — 시맨틱 HTML은 시맨틱하지 않은 스파게티 코드보다 파일 사이즈가 가볍고 반응형으로 만들기도 더 쉽습니다.
3. **SEO에 좋습니다** — 검색 엔진은 의미가 없는 `<div>` 등의 태그보다 헤딩, 링크 등의 태그 내부 키워드에 더 많은 가중치를 부여합니다. 이는 고객들이 웹 문서를 더 찾기 쉽도록 만들어줍니다.

이제 접근성 있는 HTML에 대해 더 자세하게 살펴봅시다.

> **참고:** 앞으로 살펴볼 예시들을 테스트 해볼 수 있도록 로컬 컴퓨터에 스크린 리더를 설치해두는 것이 좋습니다. [스크린 리더 가이드](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers)에서 더 자세한 내용을 확인할 수 있습니다.

## 좋은 시맨틱

우리는 제대로 된 시맨틱의 중요성, 그리고 왜 작업에 적합한 HTML 요소를 사용해야 하는지에 대해 이미 이야기했습니다. 이것은 제대로 다뤄지지 않았을 때 접근성을 심각하게 저해하는 요인이기 때문에 무시할 수 없습니다.

하지만 실제 웹에서 사람들은 HTML 마크업으로 아주 이상한 짓들을 합니다. 몇몇 HTML 오용은 레거시 관행의 잔재에, 몇몇은 단순한 무지에 기인합니다. 어떤 경우든 그런 나쁜 코드들은 고쳐져야 합니다.

가끔은 당신이 형편없는 마크업을 제거할 수 없는 위치에 있을지도 모릅니다. 페이지가 전적으로 제어할 수 없는 서버 사이드 프레임워크에 의해 생성되었을 수 있거나, 광고 배너처럼 제어할 수 없는 외부 콘텐츠가 페이지에 포함되어 있을 수 있습니다.

다만 목표는 "전부 또는 아무것도"가 아니라는 점을 생각하세요. 개선을 위한 노력 하나하나가 접근성 증진에 도움이 될 것입니다.

### 문자 콘텐츠

헤딩, 패러그래프, 리스트 등으로 이루어진 완벽한 콘텐츠 구조는 스크린 리더 사용자가 제공받을 수 있는 가장 좋은 접근성 지원 중 하나입니다. 다음은 완벽한 시맨틱 예시입니다.

```html example-good
<h1>My heading</h1>

<p>This is the first section of my document.</p>

<p>I'll add another paragraph here too.</p>

<ol>
  <li>Here is</li>
  <li>a list for</li>
  <li>you to read</li>
</ol>

<h2>My subheading</h2>

<p>
  This is the first subsection of my document. I'd love people to be able to
  find this content!
</p>

<h2>My 2nd subheading</h2>

<p>
  This is the second subsection of my content, which I think is more interesting
  than the last one.
</p>
```

우리는 당신이 스크린 리더를 사용해볼 수 있도록 더 긴 내용이 포함된 버전을 준비했습니다 ([good-semantics.html](https://mdn.github.io/learning-area/accessibility/html/good-semantics.html)을 살펴보세요). 한번 시도해 보면 이 문서가 스크린 리더로 탐색하기에 꽤 쉽다는 것을 알 수 있을 것입니다.

1. 콘텐츠를 읽어나가는 동안 스크린 리더가 어떤 것이 헤딩이고, 어떤 것이 문단인지를 알려주면서 각각의 헤더를 읽어줍니다.
2. 당신이 편안한 속도로 탐색을 진행할 수 있도록 하나의 요소가 끝나면 멈춥니다.
3. 많은 스크린 리더에서 다음/직전 헤딩으로 이동할 수 있습니다.
4. 또한 많은 스크린 리더에서 모든 헤딩의 목록을 제공합니다. 특정 정보를 찾기 위한 편리한 목차로써 활용할 수 있습니다.

사람들은 종종 헤딩, 문단 등을 줄바꿈이나 스타일링만을 위한 HTML 요소를 통해 작성하기도 합니다. 다음 예시처럼요.

```html example-bad
<span style="font-size: 3em">My heading</span> <br /><br />
This is the first section of my document.
<br /><br />
I'll add another paragraph here too.
<br /><br />
1. Here is
<br /><br />
2. a list for
<br /><br />
3. you to read
<br /><br />
<span style="font-size: 2.5em">My subheading</span>
<br /><br />
This is the first subsection of my document. I'd love people to be able to find
this content!
<br /><br />
<span style="font-size: 2.5em">My 2nd subheading</span>
<br /><br />
This is the second subsection of my content. I think is more interesting than
the last one.
```

이것의 긴 버전을 스크린 리더로 읽어본다면 ([bad-semantics.html](https://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)을 살펴보세요) 좋지 못한 경험을 하게 될 것입니다. 스크린 리더가 표지판으로 사용할 수 있는 요소가 아무것도 없기 때문에 당신은 유용한 목차를 찾을 수 없고, 페이지 전체가 하나의 커다란 블록으로 여겨져 한번에 전부 읽어집니다.

접근성 외에도 다른 이슈들이 발생합니다. 예를 들어, 선택자로 사용할 수 있는 요소가 없기 때문에 CSS를 사용해 콘텐츠를 스타일링하거나 JavaScript를 사용해 조작하기 어렵습니다.

#### 명확한 언어 사용하기

당신이 사용하는 언어도 접근성에 영향을 줄 수 있습니다. 대체로 지나치게 복잡하지 않고 불필요한 전문 용어나 비속어를 사용하지 않는 명확한 표현을 사용해야 합니다. 이는 인지 또는 다른 장애가 있는 사람들뿐 아니라 작성 언어가 모국어가 아닌 사람들, 어린 사람들 등, 결론적으로 모든 사람들에게 도움이 됩니다. 그 외에도 스크린 리더가 똑바로 읽을 수 없는 언어나 문자의 사용을 지양해야 합니다. 다음과 같은 예시가 있습니다.

- 가능하다면 대시를 사용하지 마세요. 5-7로 쓰는 대신에 5에서 7로 작성하세요.
- 약어는 실제 표현으로 대체하세요. Jan 대신 January를 사용하세요.
- 두문자어는 적어도 한 번에서 두 번은 본 표현으로 사용하고, 설명을 위해 [`<abbr>`](/ko/docs/Web/HTML/Element/abbr) 태그를 사용하세요.

### 페이지 레이아웃

HTML 테이블을 사용해 페이지 레이아웃을 만들던 시절이 있습니다. 헤더, 푸터, 사이드바, 메인 콘텐츠 열 등을 각각 테이블 셀 내부에 작성한 것이죠. 이것은 좋은 생각이 아닙니다. 스크린 리더가 읽는 내용이 혼란스러워질 가능성이 높기 때문입니다. 특히 레이아웃이 복잡하고 테이블이 중첩되어 있을 경우 그렇습니다.

저희의 예시 [table-layout.html](https://mdn.github.io/learning-area/accessibility/html/table-layout.html)를 한번 시도해보세요. 이런 식으로 생겼습니다.

```html
<table width="1200">
  <!-- main heading row -->
  <tr id="heading">
    <td colspan="6">
      <h1 align="center">Header</h1>
    </td>
  </tr>
  <!-- nav menu row -->
  <tr id="nav" bgcolor="#ffffff">
    <td width="200">
      <a href="#" align="center">Home</a>
    </td>
    <td width="200">
      <a href="#" align="center">Our team</a>
    </td>
    <td width="200">
      <a href="#" align="center">Projects</a>
    </td>
    <td width="200">
      <a href="#" align="center">Contact</a>
    </td>
    <td width="300">
      <form width="300">
        <label
          >Search
          <input
            type="search"
            name="q"
            placeholder="Search query"
            width="300" />
        </label>
      </form>
    </td>
    <td width="100">
      <button width="100">Go!</button>
    </td>
  </tr>
  <!-- spacer row -->
  <tr id="spacer" height="10">
    <td></td>
  </tr>
  <!-- main content and aside row -->
  <tr id="main">
    <td id="content" colspan="4">
      <!-- main content goes here -->
    </td>
    <td id="aside" colspan="2" valign="top">
      <h2>Related</h2>

      <!-- aside content goes here -->
    </td>
  </tr>
  <!-- spacer row -->
  <tr id="spacer" height="10">
    <td></td>
  </tr>
  <!-- footer row -->
  <tr id="footer">
    <td colspan="6">
      <p>©Copyright 1996 by nobody. All rights reversed.</p>
    </td>
  </tr>
</table>
```

일부 스크린 리더가 테이블 레이아웃과 데이터 테이블을 구분할 수 있기는 하지만, 스크린 리더로 이 문서를 탐색하려고 한다면 아마도 살펴볼 테이블이 있다고 말해줄 것입니다. 당신이 어떤 스크린 리더를 사용하는지에 따라 다르지만 테이블 객체로 들어가 내부 속성들을 따로따로 살펴보고 다시 나와서 콘텐츠 탐색을 계속해야 할지도 모릅니다.

테이블 레이아웃은 과거의 유물입니다. 브라우저에 CSS 지원이 널리 보급되지 않았을 때는 의의가 있었지만 지금은 스크린 리더 사용자들에게 혼란을 불러올 뿐입니다. 또, 이런 소스 코드는 더 많은 마크업을 필요로 하기 때문에 유연성과 유지보수성이 떨어집니다. 당신은 다음과 같은 [더 현대적인 웹 사이트 구조 예시](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/)와 이전의 예시를 비교하며 이를 증명할 수 있을 것입니다.

```html
<header>
  <h1>Header</h1>
</header>

<nav>
  <!-- main navigation in here -->
</nav>

<!-- Here is our page's main content -->
<main>
  <!-- It contains an article -->
  <article>
    <h2>Article heading</h2>

    <!-- article content in here -->
  </article>

  <aside>
    <h2>Related</h2>

    <!-- aside content in here -->
  </aside>
</main>

<!-- And here is our main footer that is used across all the pages of our website -->

<footer>
  <!-- footer content in here -->
</footer>
```

스크린 리더로 현대적인 예시를 시도해본다면, 더 이상 콘텐츠 읽기에 레이아웃 마크업이 끼어들어 혼란을 만들지 않는다는 것을 알 수 있을 것입니다. 코드 사이즈 면에서도 훨씬 간결하고 작습니다. 유지보수가 더 쉽고, 사용자가 다운로드 할 때 더 적은 대역폭이 필요하다는 것을 의미합니다 (특히 네트워크가 느린 사용자에게 유용합니다).

레이아웃을 생성할 때 고려할 다른 사항은 위의 예시처럼 HTML 시맨틱 요소들([콘텐츠 섹션](/ko/docs/Web/HTML/Element#콘텐츠_섹션)을 확인하세요)을 사용하는 것입니다. {{htmlelement("div")}} 요소들을 중첩해서 레이아웃을 만들 수도 있지만, 네비게이션 메뉴는 {{htmlelement("nav")}}, 푸터는 {{htmlelement("footer")}}, 반복되는 콘텐츠 단위는 {{htmlelement("article")}}로 감싸는 등 적절한 섹션 요소들을 사용하는 것이 더 좋습니다. 이것은 스크린 리더 또는 다른 도구들에 추가적인 의미를 제공함으로써 유저에게 탐색 중인 콘텐츠에 대한 단서를 추가적으로 제공합니다 (스크린 리더 지원에 대해 더 알아보고 싶다면 [스크린 리더의 HTML5 섹션 요소 지원](https://www.accessibilityoz.com/2020/02/html5-sectioning-elements-and-screen-readers/)을 참고하세요).

> **참고:** 좋은 시맨틱과 매력적인 레이아웃을 제공하는 것에 더불어 당신의 콘텐츠는 논리적인 순서에 따라 배치되어야 합니다. 물론 추후 CSS를 사용해 원하는 위치에 놓을 수 있지만, 스크린 리더 사용자들이 말도 안 되는 내용을 듣게 되지 않도록 처음부터 제대로 된 순서를 지켜야 합니다.

### UI 컨트롤

UI 컨트롤이란, 웹 문서에서 사용자와 상호작용하는 주요 영역들을 의미합니다. 일반적으로 버튼, 링크, 폼 컨트롤 요소들을 포함합니다. 이번 섹션에서는 이런 컨트롤 요소를 생성할 때 알고 있어야 하는 기본적인 접근성 이슈들을 살펴보겠습니다. 나중에 나오게 될 WAI-ARIA와 멀티미디어에 관한 아티클에서 UI 접근성에 대한 또 다른 관점들을 보게 될 것입니다.

UI 컨트롤 접근성에 대한 핵심적인 측면 중 하나는 브라우저가 기본적으로 키보드로 이들을 조작할 수 있도록 한다는 것입니다. [native-keyboard-accessibility.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) 예시에서 시험해 볼 수 있습니다. ([소스 코드](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) 참고). 이 예시를 새 탭에서 열고 탭 키를 눌러보세요. 몇 번 누르면 탭 포커스가 다른 포커스 가능 요소로 이동하는 것을 볼 수 있습니다. 모든 브라우저에서 포커스 된 요소는 기본적으로 강조 스타일링 되기 때문에 (브라우저마다 조금씩 다르기는 합니다) 어떤 요소에 포커스가 있는지 구분할 수 있을 것입니다.

!["Click me!", "Click me too!", 그리고 "And me!"라고 쓰여있는 세 개의 버튼. 세번째 버튼은 현재 탭 포커스를 드러내기 위해 둘레에 파란색 테두리가 있습니다.](button-focused-unfocused.png)

> **참고:** 개발자 도구에서 페이지의 탭 순서를 보여주는 오버레이를 활성화 할 수 있습니다. 더 많은 정보는 다음 링크에서 확인하세요. [Accessibility Inspector > Show web page tabbing order](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#show-web-page-tabbing-order).

그런 다음 엔터 또는 뒤로 가기 키를 눌러 포커스 된 링크로 이동하거나, 버튼을 누르거나 (예시에는 버튼을 눌렀을 때 경고 메세지가 표시되도록 하는 JavaScript가 포함되어 있습니다), 텍스트 인풋에 내용을 입력할 수 있습니다. 서로 다른 폼 요소들은 다른 컨트롤을 제공합니다. 예를 들어, {{htmlelement("select")}} 요소는 위 아래 방향키로 옵션을 보여주고 순회할 수 있도록 합니다.

> **참고:** 브라우저마다 조작 옵션이 다를 수 있습니다. 자세한 내용은 [네이티브 키보드 접근성 사용하기](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#using_native_keyboard_accessibility)에서 확인하세요.

적절한 요소를 사용하는 것 만으로 이런 기능을 활용할 수 있습니다. 다음 예시처럼 말이죠.

```html example-good
<h1>Links</h1>

<p>This is a link to <a href="https://www.mozilla.org">Mozilla</a>.</p>

<p>
  Another link, to the
  <a href="https://developer.mozilla.org">Mozilla Developer Network</a>.
</p>

<h2>Buttons</h2>

<p>
  <button data-message="This is from the first button">Click me!</button>
  <button data-message="This is from the second button">Click me too!</button>
  <button data-message="This is from the third button">And me!</button>
</p>

<h2>Form</h2>

<form>
  <div>
    <label for="name">Fill in your name:</label>
    <input type="text" id="name" name="name" />
  </div>
  <div>
    <label for="age">Enter your age:</label>
    <input type="text" id="age" name="age" />
  </div>
  <div>
    <label for="mood">Choose your mood:</label>
    <select id="mood" name="mood">
      <option>Happy</option>
      <option>Sad</option>
      <option>Angry</option>
      <option>Worried</option>
    </select>
  </div>
</form>
```

이것은 링크, 버튼, 폼 요소, 그리고 라벨(폼 컨트롤을 위한 {{htmlelement("label")}} 요소 포함)을 적절하게 사용하는 것을 의미합니다.

그러나 여기서 또 사람들이 HTML로 이상한 짓을 하는 상황이 발생합니다. 예를 들어, 당신은 가끔 {{htmlelement("div")}}를 사용해 버튼을 마크업한 것을 보게 됩니다. 예를 들면 다음과 같습니다.

```html example-bad
<div data-message="This is from the first button">Click me!</div>
<div data-message="This is from the second button">Click me too!</div>
<div data-message="This is from the third button">And me!</div>
```

이런 식의 코드를 사용하는 것은 권장되지 않습니다. {{htmlelement("button")}} 요소를 사용했다면 있었을 내장 키보드 접근성과 기본 CSS 스타일링을 곧장 잃게 됩니다. 혹시라도 버튼을 위해 버튼 외의 요소를 사용해야 하는 아주 아주 드문 경우가 있다면, [`button` role](/ko/docs/Web/Accessibility/ARIA/Roles/button_role)을 사용하고 키보드와 마우스 지원을 포함한 버튼의 모든 내장 기능을 구현하세요.

#### 키보드 접근성 다시 구축하기

이런 장점을 다시 추가하는 작업에는 노력이 꽤 필요합니다. ([fake-div-buttons.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) 예시를 참고하세요. [소스 코드](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)도 확인할 수 있습니다.) 이 예시에서는 가짜 `<div>` 버튼에 `tabindex="0”` 속성을 부여해 탭을 통한 조작을 포함한 포커스 기능을 추가했습니다. 또한 `role="button"` 명시를 통해서 스크린 리더 사용자가 요소에 포커스하고 상호작용 가능함을 알 수 있도록 했습니다.

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
<div data-message="This is from the second button" tabindex="0" role="button">
  Click me too!
</div>
<div data-message="This is from the third button" tabindex="0" role="button">
  And me!
</div>
```

기본적으로 [`tabindex`](/ko/docs/Web/HTML/Global_attributes#tabindex) 속성의 주된 의도는 탭 키로 접근 가능한 요소들의 탭 선택 순서를 양수로 표현해 정해진 소스 순서 외로 커스텀 하는 것 입니다. 사실 대부분의 경우에 큰 혼란을 만들 수 있기 때문에 나쁜 생각입니다. 정말로 필요할 때만 이것을 사용하세요. 예를 들어, 소스 코드의 순서와 아주 다른 시각적 순서로 요소들을 보여주는 레이아웃에서 더 논리적인 동작을 원하는 경우가 있겠습니다. `tabindex`의 다른 옵션이 두 가지 더 있습니다.

- `tabindex="0”` — 위에서 말했듯 이 값은 기본적으로 탭 키로 접근이 불가능한 요소들을 접근이 가능하게 만듭니다. 아마 `tabindex`의 가장 유용한 값일 것입니다.
- `tabindex="-1”` — 기본적으로 탭 키로 접근이 불가능한 요소에 프로그래밍적으로 포커스가 잡히도록 할 수 있습니다. 예를 들어, JavaScript를 통해서나 링크의 타겟으로 말이죠.

이런 추가 작업이 우리가 버튼에 탭을 사용할 수 있도록 하지만, 우리가 <kbd>Enter</kbd>/<kbd>Return</kbd> 키를 통해 그것들을 활성화 시킬 수 있게 해주지는 않습니다. 그걸 위해서는 다음과 같은 약간의 JavaScript 트릭을 추가해야 합니다.

```js
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === "Enter") {
    document.activeElement.click();
    33;
  }
};
```

여기에서 우리는 키보드 버튼이 눌렸을 때 `document` 객체가 감지하도록 리스너를 추가했습니다. 이벤트 객체의 [`key`](/ko/docs/Web/API/KeyboardEvent/key) 프로퍼티를 통해 어떤 키가 눌렸는지 확인하고, <kbd>Enter</kbd>/<kbd>Return</kbd>이라면 `document.activeElement.click()` 스크립트를 통해 버튼의 `onclick` 핸들러를 작동시킵니다. [`activeElement`](/ko/docs/Web/API/Document/activeElement)는 페이지에서 현재 포커스 되어있는 요소를 반환합니다.

이렇게 기능을 다시 구현하는 작업은 꽤 번거로울 뿐 아니라 다른 문제들을 야기할 수밖에 없습니다. **처음부터 알맞은 작업에 알맞은 요소를 사용하는 편이 낫습니다.**

#### 의미있는 텍스트 라벨

UI 컨트롤에서 텍스트 라벨은 모든 사용자에게 유용하지만, 이들의 올바른 사용은 장애가 있는 사용자들에게 특히 중요합니다.

버튼과 링크의 텍스트 라벨이 이해하기 좋고 구별 가능하도록 해야합니다. 라벨에 "여기를 클릭하세요" 같은 문구만 사용하지 마세요. 스크린 리더 사용자들은 때때로 버튼과 폼 컨트롤 리스트를 만나기도 합니다. 다음 스크린샷은 Mac VoiceOver에서 우리의 컨트롤이 열거되는 방식을 보여줍니다.

![Mac VoiceOver 소프트웨어에서 열거하는 폼 인풋 라벨 목록. 이 목록에는 버튼, 텍스트 필드, 링크 등의 다양한 폼 컨트롤 요소에 적용된 'happy menu button' 같은 의미없는 라벨이 포함되어 있습니다.](voiceover-formcontrols.png)

맥락 밖에서도 이해 가능한 라벨을 사용하세요. 혼자 읽혀졌을 때에도 속해있는 문단 맥락 안에서 읽힐 때만큼 의미를 드러내야 합니다. 다음 예시는 좋은 링크 텍스트를 보여줍니다.

```html example-good
<p>
  Whales are really awesome creatures.
  <a href="whales.html">Find out more about whales</a>.
</p>
```

이건 나쁜 예시입니다.

```html example-bad
<p>
  Whales are really awesome creatures. To find out more about whales,
  <a href="whales.html">click here</a>.
</p>
```

> **참고:** [하이퍼링크 만들기](/ko/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) 아티클에서 링크 구현과 모범 사례에 대한 더 많은 정보를 찾아볼 수 있습니다. 또한 [good-links.html](https://mdn.github.io/learning-area/accessibility/html/good-links.html)와 [bad-links.html](https://mdn.github.io/learning-area/accessibility/html/bad-links.html)에서도 좋은 예시와 나쁜 예시들을 살펴볼 수 있습니다.

폼 라벨은 또한 각각의 인풋에 어떤 내용을 입력해야 하는지에 대한 단서를 주기 때문에 중요합니다. 다음 예시는 충분히 합리적인 것처럼 보입니다.

```html example-bad
Fill in your name: <input type="text" id="name" name="name" />
```

하지만 장애가 있는 사용자들에게는 그리 유용하지 않습니다. 위 예시는 볼 수 없는 사용자에게 폼의 인풋과 라벨을 명확하게 연관짓고 입력 영역을 어떻게 채워야 하는지 알려주는 어떤 것도 제공하지 않습니다. 스크린 리더로 이것을 읽는다면 "edit text"라는 설명 한 줄만 주어질 것입니다.

다음 예시가 훨씬 낫습니다.

```html example-good
<div>
  <label for="name">Fill in your name:</label>
  <input type="text" id="name" name="name" />
</div>
```

이 코드로는 라벨이 인풋과 명확하게 연관지어집니다. 스크린 리더 설명은 "Fill in your name: edit text"와 같을 것입니다.

!['Fill in your name'으로 읽히는 좋은 폼 라벨이 주어진 텍스트 인풋 폼 컨트롤.](voiceover-good-form-label.png)

추가로 대부분의 브라우저에서 폼의 라벨과 인풋을 연결하는 것은 라벨을 클릭해 폼 요소를 선택하거나 활성화시킬 수 있음을 의미합니다. 즉, 라벨까지 포함하는 더 큰 영역을 통해 인풋을 쉽게 선택할 수 있습니다.

> **참고:** [good-form.html](https://mdn.github.io/learning-area/accessibility/html/good-form.html)과 [bad-form.html](https://mdn.github.io/learning-area/accessibility/html/bad-form.html)에서 폼의 좋은 예시와 나쁜 예시들을 볼 수 있습니다.

다음의 영상에서는 제대로 된 텍스트 라벨의 중요성에 대한 좋은 설명과 [Firefox Accessibility Inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html)를 사용해 텍스트 라벨 이슈를 조사하는 방법을 배울 수 있습니다.

{{EmbedYouTube("YhlAVlfH0rQ")}}

## 접근성 있는 데이터 테이블

기본적인 데이터 테이블은 다음처럼 아주 간단한 마크업으로 나타낼 수 있습니다.

```html
<table>
  <tr>
    <td>Name</td>
    <td>Age</td>
    <td>Pronouns</td>
  </tr>
  <tr>
    <td>Gabriel</td>
    <td>13</td>
    <td>he/him</td>
  </tr>
  <tr>
    <td>Elva</td>
    <td>8</td>
    <td>she/her</td>
  </tr>
  <tr>
    <td>Freida</td>
    <td>5</td>
    <td>she/her</td>
  </tr>
</table>
```

하지만 여기에는 문제가 있습니다. 스크린 리더 사용자가 테이블의 행과 열을 데이터 그룹으로 연결지을 수 있는 방법이 없다는 점입니다. 이를 위해서는 헤더 행이 무엇인지, 그리고 이들이 행이나 열 등을 어떻게 표시하고 있는지 알아야 합니다. 위의 예시에서는 시각적으로만 이루어집니다. ([bad-table.html](https://mdn.github.io/learning-area/accessibility/html/bad-table.html) 예시를 직접 살펴보세요.)

이제 [punk bands table 예시](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-complete.html)를 보면, 몇몇 접근성 지원이 효과적으로 작동하는 것을 볼 수 있습니다.

- 테이블 헤더가 {{htmlelement("th")}} 요소를 통해 정의되어 있습니다. 또한 `scope` 속성을 통해 행을 위한 헤더인지 열을 위한 헤더인지도 명시할 수 있습니다. 이것은 스크린 리더가 하나의 단위로 읽을 수 있는 완전한 데이터 그룹을 만듭니다.
- {{htmlelement("caption")}} 요소와 `<table>` 요소의 `summary` 속성은 둘 다 테이블의 대체 텍스트로서 비슷한 기능을 합니다. 스크린 리더 사용자에게 테이블 내용에 대한 유용하고 빠른 요약을 제공하는 것이죠. 사실 두개 다 사용하지는 않아도 됩니다. 주로 볼 수 있는 사용자들에게도 해당 콘텐츠를 제공하는 `<caption>` 요소가 선호됩니다.

> **참고:** [HTML table advanced features and accessibility](/ko/docs/Learn/HTML/Tables/Advanced) 아티클에서 접근성을 갖춘 데이터 테이블에 대한 더 자세한 내용을 살펴보세요.

## 대체 텍스트

텍스트 기반 콘텐츠는 내재적으로 접근성을 제공하는 반면 멀티미디어 콘텐츠는 그렇지 않습니다. 시각장애인은 이미지나 영상 콘텐츠를 볼 수 없고, 청각장애인은 음성 콘텐츠를 들을 수 없습니다. 이런 영상과 음성 콘텐츠는 [접근성을 갖춘 멀티미디어](/ko/docs/Learn/Accessibility/Multimedia)에서 더 자세하게 다룰 예정이고, 이번 아티클에서는 소박하게 {{htmlelement("img")}} 요소의 접근성을 살펴보겠습니다.

동일한 이미지 네 개의 복제본들을 표시하는 간단한 예시 [accessible-image.html](https://mdn.github.io/learning-area/accessibility/html/accessible-image.html)이 준비되어 있습니다.

```html
<img src="dinosaur.png" />

<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />

<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."
  title="The Mozilla red dinosaur" />

<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">
  The Mozilla red Tyrannosaurus Rex: A two legged dinosaur standing upright like
  a human, with small arms, and a large head with lots of sharp teeth.
</p>
```

첫번째 이미지는 스크린 리더로 봤을 때 사용자에게 별 도움을 주지 않습니다. 예를 들어 VoiceOver는 "/dinosaur.png, image"라고 읽어줍니다. 조금의 도움이라도 제공하기 위해 파일명을 읽어주는 것이죠. 이 예시에서는 유저가 적어도 어떤 종류의 공룡이라는 점을 알 수 있지만, 대부분의 경우 파일명은 기계(예를 들면 디지털 카메라)가 생성합니다. 아마 이미지 내용에 대한 어떤 맥락도 제공하지 않겠죠.

> **참고:** 이것이 이미지 안에 텍스트 콘텐츠를 포함해서는 안되는 이유입니다. 스크린 리더는 그 정보에 접근할 수 없습니다. 다른 단점도 있습니다. 그것을 선택하거나 복사/붙여넣기 할 수 없습니다. 하지 말라면 하지마세요.

두번째 이미지에 대해서는 스크린 리더가 "A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."라는 alt 속성 전부를 읽어줍니다.

이는 **대체 텍스트** 제공이 불가능한 경우를 위해 파일명을 의미있게 작성하는 것만큼, 가능하다면 `alt` 속성에 대체 텍스트를 제공하는 것이 중요하다는 것을 되새겨줍니다.

`alt` 속성 값은 항상 이미지와 이미지가 시각적으로 나타내는 내용에 대한 직접적인 표현을 제공해야 한다는 점에 주목하세요. 대체 텍스트는 짧고 간결해야 하며 이미지가 전달하는 정보 중 주위 텍스트와 중복되지 않는 모든 정보를 포함해야 합니다.

하나의 이미지에 대한 `alt` 속성 값은 맥락에 따라 다를 수 있습니다. 예를 들어, 강아지 Fluffy의 사진이 Yuckymeat 개 사료 리뷰 옆에 위치한 아바타라면, `alt="Fluffy"`는 적절합니다. 하지만 같은 사진이 동물 구호 단체의 입양 페이지에 사용된다면, 예비 강아지 부모를 위해 주변 설명으로는 제공되지 않는, 이미지를 통해서만 알 수 있는 정보가 포함되어야 합니다. `alt="Fluffy, 아주 짧은 세 가지 색의 털을 가진 테리어. 그녀는 입에 테니스 공을 물고 있음.”`와 같은 더 긴 설명이 적절하겠습니다. 플러피의 크기와 종 등은 아마 주위 텍스트를 통해 설명했을 것이므로, `alt` 내용에 포함되지 않습니다. 하지만 강아지에 대한 설명에 털 길이나 색상, 어떤 장난감을 좋아하는지에 대한 설명은 없을 가능성이 많으므로 포함됩니다. 야외에서 찍은 사진인지, 플러피가 파란색 목줄이 달린 목걸이를 하고 있는지는 반려견을 입양할 때 중요하지 않으므로 포함되지 않습니다. 대체 텍스트를 짧고 정확하고 유용하게 유지하세요. 이미지 내용 중 사용자가 접근할 수 있으면서 맥락에 어울리는 것들만이 전달되어야 하는 전부입니다.

이미지를 그 전에 본적이 없는 사람에게 유용하지 않은, 개인적 지식 또는 추가 설명은 포함되지 않아야 합니다. 공이 Fluffy가 좋아하는 장난감인지, 또는 사이트 사용자가 이미지에서 그것을 알 수 있는지 여부는 포함하지 마세요.

한 가지 고려할 부분은 이미지 내용에 의미가 포함되어 있는지, 아니면 순전히 시각적인 장식을 위한 것인지 입니다. 그저 장식 요소라면 `alt` 속성에는 빈 문자열([빈 alt 속성](#빈_alt_속성))을 확인하세요)을 작성하거나 CSS background로 페이지에 포함시키는 편이 좋습니다.

> **참고:** 이미지 구현에 대한 훨씬 많은 정보와 모범 사례가 궁금하다면 [HTML의 이미지](/ko/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)과 [반응형 이미지](/ko/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)를 읽어보세요.

추가로 맥락 정보를 제공하고 싶다면, 이미지 주변 텍스트나 위에서 살펴본 것처럼 `title` 속성 내부에 입력하세요. 이 경우 스크린 리더는 대체 텍스트, title 속성, 그리고 파일명을 읽어줍니다. 또한 브라우저가 마우스 오버에 title 텍스트를 툴팁으로 제공할 것입니다.

!["The mozilla red dinosaur"라는 글자가 마우스 오버 툴팁에 나타나있는 빨간색 티라노사우루스의 스크린샷.](title-attribute.png)

네 번째 방식에 대해서도 빠르게 살펴봅시다.

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">The Mozilla red Tyrannosaurus…</p>
```

이 경우는 `alt` 속성을 전혀 사용하지 않습니다. 대신, 이미지에 대한 설명을 일반적인 문단으로 작성하고, `id` 속성을 부여한 뒤 `aria-labelledby` 속성을 사용해 해당 `id`를 가리키도록 했습니다. 이렇게 하면 스크린 리더가 해당하는 문단을 이미지의 대체 텍스트/라벨로 사용합니다. 이런 방식은 여러 개의 이미지에 대해 같은 텍스트 라벨을 사용하고 싶을 때 특히 유용합니다. `alt` 속성만으로는 불가능한 일이죠.

> **참고:** [`aria-labelledby`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)는 개발자가 스크린 리더 접근성을 개선하기 위해 마크업에 추가 시맨틱을 구현할 수 있도록 해주는 [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/) 스펙의 일부입니다. 더 알아보기 위해서는 [WAI-ARIA 기초](/ko/docs/Learn/Accessibility/WAI-ARIA_basics) 아티클을 읽어보세요.

### 피규어와 피규어 캡션

HTML에는 {{htmlelement("figure")}}와 어떤 종류(이미지 외에 어떤 것도 될 수 있습니다)의 피규어를 그 캡션과 연동하는 {{htmlelement("figcaption")}} 태그가 있습니다.

```html
<figure>
  <img
    src="dinosaur.png"
    alt="The Mozilla Tyrannosaurus"
    aria-describedby="dinodescr" />
  <figcaption id="dinodescr">
    A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a
    human, with small arms, and a large head with lots of sharp teeth.
  </figcaption>
</figure>
```

모든 스크린 리더가 이것을 지원하는 것은 아니지만, 아닌 경우에도 [`aria-labelledby`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)나 [`aria-describedby`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)를 사용해 연동을 지원할 수 있습니다. 이런 요소 구조를 사용하는 것은 CSS 스타일링에 유용할 뿐 아니라 이미지에 대한 설명을 소스 옆에 위치시키는 방법을 제공합니다.

### 빈 alt 속성

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tyrannosaurus Rex: the king of the dinosaurs
</h3>
```

페이지 디자인에 포함되어 있는 이미지가 시각적인 장식의 목적만을 가지는 경우가 있습니다. 위 코드 예시에서는 이미지의 `alt` 속성이 비어있는 것을 볼 수 있는데, 이는 스크린 리더가 이미지를 인식해도 설명을 시도하지 않게 하기 위함입니다. "이미지" 같은 것을 말하기보다요.

`alt` 속성을 아예 사용하지 않는 대신 빈 문자열을 넣는 것은 많은 스크린 리더가 `alt` 속성이 없는 경우 이미지 URL 자체를 알려주기 때문입니다. 위 예시의 이미지는 관련된 머릿말을 시각적으로 꾸미는 역할을 합니다. 이런 경우, 또는 정말로 의미있는 내용 없이 장식 요소인 경우 `img` 요소에 빈 `alt` 속성을 추가해야 합니다. 또 다른 방법으로는 aria [`role`](/ko/docs/Web/Accessibility/ARIA/Roles) 속성을 활용해 [`role="presentation"`](/ko/docs/Web/Accessibility/ARIA/Roles/presentation_role) 설정을 할 수 있습니다. 이 역시 스크린 리더가 대체 텍스트를 읽지 않도록 합니다.

> **참고:** 가능하다면 장식용 이미지는 CSS를 통해 표시하기를 권장합니다.

## 링크 더 알아보기

`href` 속성을 가지는 [`<a>`](/ko/docs/Web/HTML/Element/a) 요소, 즉 링크는 어떻게 사용되는지에 따라 접근성을 개선하기도 저해하기도 합니다. 기본적으로 링크는 접근성을 제공하는 것처럼 보입니다. 사용자가 문서의 다른 섹션으로 빠르게 이동할 수 있도록 도와 접근성을 향상시킵니다. 그러나 접근성 있는 스타일이 제거되거나 JavaScript로 인해 예상치 못한 동작을 제공한다면 접근성에 해가 되기도 합니다.

### 링크 스타일링

색상과 [text-decoration](/ko/docs/Web/CSS/text-decoration) 면에서 링크는 다른 텍스트 요소들과 시각적으로 다릅니다. 기본 링크는 파란색에 밑줄이 그어져있고, 방문한 경우 보라색 밑줄, 키보드 포커스가 되어있을 때는 [focus-ring](/ko/docs/Web/CSS/:focus)이 생깁니다.

색상만으로 링크가 아닌 콘텐츠와 링크를 구분해서는 안됩니다. 다른 모든 텍스트와 마찬가지로 링크 텍스트의 색은 배경 색상과 시각적인 차이를 가져야 합니다 ([4.5:1 contrast](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)). 또, 링크는 링크가 아닌 텍스트와도 시각적으로 달라야 합니다. 링크 텍스트와 주위 텍스트, 그리고 기본 상태, 방문된 상태, 포커스/활성화된 상태 사이에는 각각 적어도 3:1의 대비가 요구됩니다. 모든 상태 색상 값과 배경 색상 사이에는 4.5:1의 대비가 요구됩니다.

### `onclick` 이벤트

`<a>` 태그의 `onclick` 이벤트는 종종 의사 버튼을 만들기 위한 목적으로 잘못 사용됩니다. 페이지 리프레시를 막기 위해 **href** 속성을 `"#"`로, 또는 `"javascript:void(0)"`를 설정하는 식입니다.

이런 값들은 링크를 복사하거나 드래그할 때, 새 탭이나 창에서 열 때, 북마크 할 때, 그리고 JavaScript가 로드되는 동안 예상하지 못한 동작을 발생시킵니다. 또한 스크린 리더 등의 보조 기술에 잘못된 의미를 전달합니다. 이런 경우 {{HTMLElement("button")}} 요소를 사용하는 것을 권장합니다. 일반적으로 anchor는 올바른 URL을 사용한 탐색을 위해서만 사용해야 합니다.

### 외부 링크와 HTML 외 자원 링크

`target="_blank”` 선언으로 새로운 탭이나 창에서 열리는 링크나 `href` 속성 값이 파일 리소스를 가리키는 링크의 경우, 활성화 되었을 때 일어나는 동작에 대한 표시를 포함해야 합니다.

저시력 증상이 있거나 스크린 리더 기술의 도움을 받아 탐색하는 사람들, 또는 인지적인 문제를 가진 사람들은 예상하지 못한 새 탭이나 창, 애플리케이션이 열렸을 때 혼란을 겪을 수 있습니다. 오래된 버전의 스크린 리더 소프트웨어들은 이런 동작을 알려주지 않을 수도 있습니다.

#### 새 탭이나 창에서 열리는 링크

```html
<a target="_blank" href="https://www.wikipedia.org/"
  >Wikipedia (opens in a new window)</a
>
```

#### HTML 외 자원으로 이동하는 링크

```html
<a target="_blank" href="2017-annual-report.ppt"
  >2017 Annual Report (PowerPoint)</a
>
```

만약 이런 링크 동작을 나타내기 위해 텍스트 대신 아이콘이 사용된다면 [대체 텍스트](/ko/docs/Web/HTML/Element/img#alt)를 꼭 포함하도록 하세요.

- [WebAIM: Links and Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN Understanding WCAG, Guideline 3.2 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Opening new windows and tabs from a link only when necessary | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Giving users advanced warning when opening a new window | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### 스킵 링크

skipnav라고도 불리는 스킵 링크는 페이지 주요 콘텐츠 영역의 시작으로 연결되는 `a` 요소입니다. {{HTMLElement("body")}} 오프닝 태그와 최대한 가까이 위치합니다. 이는 사람들이 웹 사이트의 헤더, 주 네비게이션 바 등 여러 페이지에 걸쳐 반복되는 콘텐츠를 뛰어넘을 수 있도록 해줍니다.

스킵 링크는 특히 스위치 컨트롤, 음성 명령, 마우스 스틱과 헤드 완드 등의 보조 기술의 도움을 받는 사용자들에게 유용합니다. 이들에게 반복되는 링크들을 탐색하는 것은 굉장히 힘든 작업이기 때문입니다.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [How–to: Use Skip Navigation links - The A11Y Project](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN Understanding WCAG, Guideline 2.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### 근접성

anchor를 포함해 많은 상호작용 가능한 콘텐츠들은 서로에게 시각적으로 근접해있기도 합니다. 이런 경우 주변 요소와 분리해 주는 여백을 일부 가져야 합니다. 이 여백은 잘못해서 상호작용 요소를 활성화시키기 쉬운, 운동 장애를 겪는 사람들에게 도움을 줄 수 있습니다.

여백은 {{CSSxRef("margin")}} 등의 CSS 프로퍼티를 사용해 만들어질 수 있습니다.

- [Hand tremors and the giant-button-problem - Axess Lab](https://axesslab.com/hand-tremors/)

## 테스트 해보기

아티클을 끝까지 읽었습니다. 중요한 정보들을 전부 기억하고 있나요? 다음 단계로 넘어가기 전에 [Test your skills: HTML Accessibility](/ko/docs/Learn/Accessibility/Test_your_skills:_HTML_accessibility)에서 이번에 배운 내용을 확인해보세요.

## 요약

이제 당신은 대부분의 상황에서 접근성있는 HTML을 작성하는 능력을 갖췄을 것입니다. 이번 아티클에서는 아주 기본적인 내용들을 다뤘고, 남은 부분 WAI-ARIA 아티클에서 채워질 것입니다. 다음에는 CSS와 JavaScript에 대해 알아보고 모범적인 또는 잘못된 사용이 접근성에 어떻게 영향을 주는지 살펴보겠습니다.

{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}
