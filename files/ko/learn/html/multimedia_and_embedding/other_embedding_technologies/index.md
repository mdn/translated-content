---
title: <object> 로부터 <iframe>까지 — 기타 임베딩 기술
slug: Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies
l10n:
  sourceCommit: 2b9c5bb9eaa56df82286c06e4405851b5d87c8aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}

이제 웹 페이지에 이미지와 비디오, 오디오를 추가하는 방법을 이해하셨을 겁니다. 이 시점에서 옆으로 한발 비켜서서, 웹 페이지에 다양한 형태의 콘텐츠를 넣을 수 있는 {{htmlelement("iframe")}} 요소와 {{htmlelement("embed")}} 요소, {{htmlelement("object")}} 요소를 살펴보겠습니다. `<iframe>` 요소는 다른 웹 페이지를 삽입하기 위해, 다른 두 요소는 PDF 파일과 같은 외부 자원을 웹 페이지에 추가하기 위해 사용합니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        기본적인 컴퓨터 활용 능력,
        <a
          href="/ko/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >기본적인 소프트웨어 설치</a
        >,
        <a
          href="/ko/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >파일 작업</a>에 대한 기본 지식
          , HTML 기초 지식(
        <a href="/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >HTML 시작하기</a
        >에서 다룸)과 이 과정에 포함된 이전 문서를 익힘
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        {{htmlelement("object")}} 요소, {{htmlelement("embed")}} 요소, {{htmlelement("iframe")}} 요소를 사용하여 웹 페이지에 PDF 문서나 다른 웹 페이지를 삽입하는 방법을 배워봅니다.
      </td>
    </tr>
  </tbody>
</table>

## 임베딩의 짧은 역사

과거에는 개별 HTML 페이지에 저장된 웹사이트의 작은 부분을 일컫는 **frame**을 사용하여 웹사이트를 만드는 방식이 유행했습니다. 메인이 되는 문서인 **frameset**에 frame이 삽입되었습니다. 테이블의 행과 열의 크기를 조정하듯 화면에 각 frame이 채워질 영역을 설정할 수 있었습니다. 90년대 중후반에는 이와 같은 방식을 가장 근사하다고 여겼고 이를 증명하기라도 하듯 웹페이지는 더 작은 덩어리로 쪼개졌습니다. 당시 네트워크 속도를 고려했을 때 다운로드 속도가 더 빠르다는 이점이 있었습니다. 하지만 네트워크 속도가 빨라짐에 따라 장점보다 여러 문제점이 더 부각되어 이제는 보기 어려운 방식입니다.

얼마 후인 90년대 후반과 2000년대 초반에는 [Java Applets](/ko/docs/Glossary/Java)와 [Flash](/ko/docs/Glossary/Adobe_Flash) 같은 플러그인 기술이 유행하여 웹 개발자는 HTML만으로는 불가능했던 영상이나 애니메이션 같은 풍부한 콘텐츠를 웹페이지에 넣는 작업을 할 수 있게 되었습니다. 이런 작업은 {{htmlelement("object")}} 요소나 그보다는 사용 빈도가 낮았던 {{htmlelement("embed")}} 요소 등을 이용하면 가능했고 당시에는 매우 유용했습니다. 그러나 접근성이나 보안, 파일 크기 등 여러 문제로 인해 인기가 사그라들었습니다. 최근 주요 브라우저는 Flash 같은 플러그인에 대한 지원을 중단했습니다.

마지막으로 {{htmlelement("canvas")}}나 {{htmlelement("video")}} 등 콘텐츠를 삽입하는 다른 방식과 함께 {{htmlelement("iframe")}}요소가 등장했습니다. 이 요소를 사용하면 {{htmlelement("img")}}요소를 웹 문서에 포함하듯이 전체 웹 문서를 다른 웹 문서에 넣을 수 있습니다. 요즘 주로 사용하는 방식입니다.

역사 이야기는 여기서 마치고 이러한 요소를 어떻게 사용하는지 알아보겠습니다.

## 능동적으로 학습하기: 대표적인 임베딩 사용

이번 글에서는 곧바로 능동적으로 학습하기 부분으로 바로 넘어가겠습니다. 임베딩 기술이 어떻게 유용한지 바로 알 수 있도록 말이죠. 온라인 세상에서 [YouTube](https://www.youtube.com)는 굉장히 익숙하지만, YouTube에서 제공하는 영상 공유 방법을 모두 알고 있는 사람은 많지 않습니다. {{htmlelement("iframe")}} 요소를 이용하여 우리가 원하는 웹 페이지에 YouTube 영상을 삽입하는 방법을 알아보겠습니다.

1. 우선 YouTube에 접속하여 원하는 영상을 찾습니다.
2. 영상 아래에 있는 "공유" 버튼을 선택하여 공유 옵션을 화면에 표시하세요.
3. "퍼가기" 버튼을 선택하면 `<iframe>` 코드가 나옵니다. 해당 코드를 복사하세요.
4. 아래에 있는 입력 상자에 복사한 코드를 붙여 넣은 후 결과 화면을 살펴보세요.

추가로 [Google Map](https://www.google.com/maps/)도 넣어볼 수 있습니다. 다음 예시를 참고해보세요.

1. Google Map에 접속하여 원하는 지도를 찾습니다.
2. UI 왼쪽 상단에 위치한 가로줄이 세 개 있는 "메뉴" 버튼을 클릭하세요.
3. "공유" 옵션을 선택합니다.
4. "지도 퍼가기" 옵션을 선택하면 `<iframe>` 코드가 나옵니다. 해당 코드를 복사하세요.
5. 아래에 있는 입력 상자에 복사한 코드를 붙여 넣은 후 결과 화면을 살펴보세요.

잘못 입력했다면 언제든 _Reset_ 버튼을 눌러 초기화할 수 있습니다. 도저히 모르겠다면 _Show solution_ 버튼을 눌러 답을 확인해보세요.

```html hidden
<h2>실시간 결과</h2>

<div class="output" style="min-height: 250px;"></div>

<h2>편집 가능한 코드</h2>
<p class="a11y-label">
  코드 영역에서 포커스를 움직이기 위해서는 ESC 키를 누르세요 (Tab 키를 누르면 탭
  문자가 입력됩니다).
</p>

<textarea
  id="code"
  class="input"
  style="width: 95%;min-height: 100px;"></textarea>

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
let code = textarea.value;
let userEntry = textarea.value;

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

const htmlSolution =
  '<iframe width="420" height="315" src="https://www.youtube.com/embed/QH2-TGUlwu4" frameborder="0" allowfullscreen>\n</iframe>\n\n<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37995.65748333395!2d-2.273568166412784!3d53.473310471916975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae6c05743d3d%3A0xf82fddd1e49fc0a1!2sThe+Lowry!5e0!3m2!1sen!2suk!4v1518171785211" width="600" height="450" frameborder="0" style="border:0" allowfullscreen>\n</iframe>';
let solutionEntry = htmlSolution;

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
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_classic_embedding_uses', 700, 600) }}

## iframes 자세히 보기

간단하고 재밌었죠? {{htmlelement("iframe")}} 요소를 사용하면 현재 웹 문서에 다른 웹 문서를 삽입할 수 있습니다. 이는 직접 조작할 수 없거나 자체적인 버전을 구현하고 싶지 않은 외부 콘텐츠를 여러분의 웹사이트에 포함할 때 아주 유용합니다. 예를 들면 온라인 비디오 제공자의 영상이나 [Disqus](https://disqus.com/)와 같은 댓글 시스템, 온라인 지도 제공자의 지도, 광고 배너 등이 있습니다. 이 과정에서 사용하고 있는 실시간 예제도 `<iframe>`을 사용하여 구현했습니다.

`<iframe>`를 사용하기 전에 알고 계셔야 할 [보안 문제](#security_concerns)가 몇 가지 존재합니다. 웹 페이지에 MDN 용어사전을 넣으려고 한다면 아마 아래와 같은 형태로 코드를 작성하실 겁니다. 아래 코드를 웹 페이지에 추가하면 용어사전 페이지 대신 에러 메시지가 표시되는 걸 보고 놀랄 수 있습니다.

```html
<head>
  <style>
    iframe {
      border: none;
    }
  </style>
</head>
<body>
  <iframe
    src="https://developer.mozilla.org/ko/docs/Glossary"
    width="100%"
    height="500"
    allowfullscreen
    sandbox>
    <p>
      <a href="/ko/docs/Glossary"> iframes을 지원하지 않는 브라우저용 링크 </a>
    </p>
  </iframe>
</body>
```

브라우저 콘솔 창을 보면 아래와 같은 에러 메시지를 확인할 수 있습니다.

```
Refused to display 'https://developer.mozilla.org/' in a frame because it set 'X-Frame-Options' to 'deny'.
```

아래에 있는 [보안](#security_concerns) 부분에서 왜 이런 에러가 표시되는지 좀 더 자세히 다룹니다. 우선 지금은 이 코드가 어떤 작업을 하는지 살펴봅시다.

이 예시는 `<iframe>`을 사용하기 위한 가장 기본적인 필수 요소를 포함하고 있습니다.

- [`border: none`](/ko/docs/Web/CSS/border)
  - : 이를 적용하면, `<iframe>` 은 테두리 없이 표시됩니다. 적용하지 않으면 브라우저는 `<iframe>`을 기본적으로 테두리가 있는 상태로 표시하는데, 일반적으로 바람직하지는 않습니다.
- [`allowfullscreen`](/ko/docs/Web/HTML/Element/iframe#allowfullscreen)
  - : 이를 설정하면, `<iframe>`에서 [Fullscreen API](/ko/docs/Web/API/Fullscreen_API)를 통해 전제화면 모드를 실행할 수 있습니다. Fullscreen API는 본문에서 다루는 범위를 넘어선 내용입니다.
- [`src`](/ko/docs/Web/HTML/Element/iframe#src)
  - : {{htmlelement("video")}}/{{htmlelement("img")}}와 마찬가지로 삽입될 문서의 URL 경로를 저장합니다.
- [`width`](/ko/docs/Web/HTML/Element/iframe#width) 와 [`height`](/ko/docs/Web/HTML/Element/iframe#height)
  - : iframe 요소에 원하는 너비와 높이를 설정할 수 있습니다.
- 대체 콘텐츠
  - : {{htmlelement("video")}} 요소와 같이 유사한 다른 요소들과 마찬가지로, `<iframe></iframe>` 여닫는 태그 사이에 대체 콘텐츠를 추가하여 브라우저가 `<iframe>`을 지원하지 않는 경우 대체 콘텐츠를 표시할 수 있습니다. 위 예시에서는 해당 페이지로 이동하는 링크를 추가하였습니다. 요즘 `<iframe>`을 지원하지 않는 브라우저를 마주칠 일은 거의 없겠지만요.
- [`sandbox`](/ko/docs/Web/HTML/Element/iframe#sandbox)
  - : IE 10 이상에서 지원되는`<iframe>`의 다른 기능보다 이 특성은 상대적으로 최신 브라우저에서 작동하며 높은 보안 설정을 요구합니다. 이에 대해서는 다음 내용에서 다룰 예정입니다.

> **참고:** 속도를 향상하기 위해 메인 콘텐츠가 완전히 로딩된 이후에 JavaScript로 iframe의 src 특성을 설정하는 편이 좋습니다. 웹 페이지를 더 빠르게 이용할 수 있고 {{glossary("SEO")}} 측정 시 중요한 지표인 웹 페이지 로딩 시간을 단축할 수 있습니다.

### 보안 문제

위에서 언급했던 보안 문제를 좀 더 자세히 살펴봅시다. 이 내용을 한 번에 완벽하게 이해하실 필요는 없습니다. 다만 이러한 문제가 있다는 점을 알고 계시길 바라며 참고 자료를 제공하오니 경험을 더 쌓고 `<iframe>`을 작업에 사용하려고 할 때 돌아와서 보시기를 바랍니다. 또한 겁먹고 `<iframe>` 사용을 피할 이유는 없습니다. 주의해서 사용하기만 한다면요. 계속 읽어보세요.

브라우저 제작사와 웹 개발자들이 얻은 값비싼 교훈이 있는데요, iframe이 웹상에서 악의를 품은 사람들의 일반적인 공격 목표(공식 용어로는 **공격 벡터**)가 된다는 점입니다. **해커**, 더 정확히는 **크래커**라 불리는 이 나쁜 사람들은 iframe을 악용하여 여러분의 웹페이지를 수정하거나, 사람들을 속여 사용자 명이나 비밀번호 등 민감한 정보를 유출하려 합니다. 이 때문에 명세 엔지니어와 브라우저 개발자는 `<iframe>`을 더 안전하게 만들기 위해 다양한 보안 장치를 개발했고, 고려할만한 모범 사례도 있습니다. 아래에서 다뤄보겠습니다.

> **참고:** [클릭재킹](/ko/docs/Glossary/Clickjacking)은 iframe 공격 방식의 하나입니다. 눈에 보이지 않는 iframe을 여러분의 웹 문서에 삽입하거나, 해커들의 악성 웹사이트에 여러분의 웹페이지를 삽입하여 사용자들의 활동을 빼돌립니다. 이는 사용자들을 잘못된 행동으로 유도하거나 민감한 데이터를 훔쳐내는 일반적인 기술입니다.

우선 간단한 예시를 보겠습니다. 위에서 보여드린 예제를 브라우저에 표시해 보세요. [GitHub에서 실시간 동작 확인](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html)도 가능합니다([소스 코드](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/iframe-detail.html)도 살펴보세요). 예상과 달리 "페이지를 열 수 없음"과 같은 문구가 표시될 겁니다. [브라우저 개발자 도구](/ko/docs/Learn/Common_questions/What_are_browser_developer_tools)를 열어 '콘솔' 창을 보면 그 이유를 알려주는 문구를 확인할 수 있습니다. Firefox 브라우저의 경우 "The loading of 'https\://developer.mozilla.org/ko/docs/Glossary' in a frame is denied by 'X-Frame-Options' directive set to 'DENY'"라는 문구가 적혀 있습니다. 이는 다른 사이트에서 MDN 웹페이지를 `<iframe>`안에 포함하지 못하도록 MDN 개발자들이 설정했기 때문입니다. (아래에 있는 [CSP 지시어를 설정하세요](#configure_csp_directives) 참고) 당연한 일입니다. 여러분의 웹사이트에 전체 MDN 페이지를 삽입해두고 자기 사이트라고 우기거나 [클릭재킹](/ko/docs/Glossary/Clickjacking)으로 데이터를 훔치려 들면 안 되잖아요. 게다가 모두가 MDN 페이지를 삽입한다면 대역폭이 추가로 들어 Mozilla에서 큰 비용을 지불해야 할 겁니다.

#### 필요한 경우에만 삽입하세요

가끔 YouTube 영상이나 지도 같은 외부 콘텐츠를 삽입해야 하는 경우가 있습니다. 정말로 필요한 경우에만 외부 콘텐츠를 삽입한다면 골머리를 앓을 일은 별로 없을 겁니다. 웹 보안을 위해 이런 규칙을 따르면 좋습니다. "아무리 조심해도 지나치지 않습니다. 당신이 만들었다면 아무튼 다시 확인하세요. 다른 사람이 만들었다면 안전하다고 증명되기 전까지 위험 요소가 있다고 간주하세요."

보안 외에도 지적재산권 문제도 알고 있어야 합니다. 온라인, 오프라인을 막론하고 대부분의 콘텐츠는 저작권 보호를 받습니다. [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page)에 있는 대다수의 이미지를 포함하여 생각지도 못한 콘텐츠에도 저작권이 있습니다. 본인 소유가 아니거나 저작권자에게 서면으로 명백한 허락을 받지 않았다면 자신의 웹페이지에 해당 콘텐츠를 절대로 게시해서는 안 됩니다. 저작권 위반에 대한 처벌은 엄중합니다. 다시 한번 말씀드리지만, 아무리 조심해도 지나치지 않습니다.

콘텐츠의 라이선스를 얻었다면, 라이선스 규정을 준수해야 합니다. 예를 들어 MDN에 있는 콘텐츠는 [저작권표시-동일조건변경허락 (CC-BY-SA) 라이선스](/ko/docs/MDN/Writing_guidelines/Attrib_copyright_license#documentation)를 적용하고 있습니다. 즉 MDN 콘텐츠를 인용할 때 내용을 상당 부분 수정하더라도 [올바른 저작권 표시](https://wiki.creativecommons.org/wiki/Best_practices_for_attribution)를 해야 합니다.

#### HTTPS를 사용하세요

{{Glossary("HTTPS")}}는 {{Glossary("HTTP")}}가 암호화된 버전입니다. 불가피한 경우를 제외하고는 항상 HTTPS를 사용하여 웹사이트를 전송해야 합니다.

1. HTTPS는 콘텐츠가 전송 도중에 변조될 위험을 줄여줍니다.
2. HTTPS는 삽입된 콘텐츠와 이를 포함하고 있는 문서가 서로에게 접근하는 것을 방지합니다.

웹사이트에 HTTPS를 적용하려면 특별한 보안 인증서를 설치해야 합니다. 여러 호스팅 업체에서는 직접 인증서를 설치하지 않아도 HTTPS를 적용할 수 있는 호스팅을 제공합니다. 하지만 직접 HTTPS를 적용해야 한다면, [Let's Encrypt](https://letsencrypt.org/)에서 Apache 웹 서버나 Nginx 등 널리 사용되는 웹 서버를 지원할 뿐만 아니라 자동으로 필요한 인증서를 생성하고 설치할 수 있는 도구와 설명서를 제공하고 있습니다. Let's Encrypt는 이 과정을 최대한 쉽게 만들도록 설계되었습니다. 그러니 웹페이지에 HTTPS를 적용하기 위하여 Let's Encrypt를 사용하지 않을 이유가 전혀 없습니다.

> **참고:** [GitHub pages](/ko/docs/Learn/Common_questions/Using_Github_pages)는 기본적으로 HTTPS를 통해 콘텐츠 전송을 허용하므로 콘텐츠를 호스팅하기에 유용합니다. 만약 다른 호스팅 업체를 사용하는데 HTTPS 적용 여부가 확실하지 않다면 업체에 문의해보세요.

#### 항상 `sandbox` 특성을 사용하세요

웹사이트를 악용하려는 사람들이 공격할 여지를 최소화하기 위해 삽입된 콘텐츠에 대해서는 필요한 작업만 허용해야 합니다. 물론 여러분의 콘텐츠에도 해당합니다. 다른 코드베이스에 영향을 미치지 않으면서도 특정 코드를 테스트하거나 적절하게 사용할 수 있도록 코드를 감싸고 있는 영역을 [sandbox](<https://en.wikipedia.org/wiki/Sandbox_(computer_security)>)라고 합니다.

샌드박스를 적용하지 않은 콘텐츠는 JavaScript를 실행하거나, 폼을 제출하거나, 새 창을 띄우는 등의 작업을 할 수 있습니다. 이전 예시에서 보았듯 기본적으로 `sandbox` 특성을 파라미터 없이 사용하여 가능한 모든 제약을 부과해야 합니다.

꼭 필요한 경우 `sandbox=""` 특성값 안에 하나씩 권한을 부여할 수 있습니다. [`sandbox`](/ko/docs/Web/HTML/Element/iframe#sandbox) 항목을 참고하여 사용할 수 있는 옵션을 살펴보세요. 한 가지 명심하셔야 할 점은 절대로 `sandbox` 특성에 `allow-scripts`와 `allow-same-origin` 옵션을 동시에 적용하면 안 된다는 점입니다. 두 옵션을 동시에 적용하면 삽입된 콘텐츠는 스크립트 실행을 방지하는 [동일 출처 정책](/ko/docs/Glossary/Same-origin_policy)을 우회하여 샌드박스 특성을 해제하는 JavaScript를 사용할 수 있게 됩니다.

> **참고:** 공격자들이 사용자를 속여 `iframe` 외부에서 직접 악성 콘텐츠로 접근하게 한다면 샌드박스는 이를 보호할 수 없습니다. 만약 사용자가 생성한 콘텐츠 등 악의적인 콘텐츠일 가능성이 있는 경우, 여러분의 웹사이트와 다른 {{glossary("domain")}}에서 메인 사이트로 제공하도록 하세요.

#### CSP 지시어를 설정하세요

{{Glossary("CSP")}}는 **[콘텐츠 보안 정책](/ko/docs/Web/HTTP/CSP)** 을 나타내며 HTML 문서 보안을 개선하기 위해 고안된 일련의 HTTP 헤더를 제공합니다. HTTP 헤더란 웹 서버에서 웹페이지가 전송될 때 동반되는 메타데이터입니다. `<iframe>` 보안과 연관 지어 말씀드리자면, [적절한 `X-Frame-Options` 헤더를 전송하도록 설정할 수 있습니다](/ko/docs/Web/HTTP/Headers/X-Frame-Options). 이렇게 하면 다른 웹사이트에서 여러분의 웹페이지를 삽입하지 못하도록 만들어서 [클릭재킹](/ko/docs/Glossary/Clickjacking)이나 다른 공격의 대상이 되는 일을 막을 수 있습니다. 이전 예시에서 보셨듯이 이것이 바로 MDN 개발자들이 설정해 둔 것입니다.

> **참고:** 프레데리크 브라운의 게시글 [On the X-Frame-Options Security Header](https://blog.mozilla.org/security/2013/12/12/on-the-x-frame-options-security-header/)에서 이 주제와 관련된 배경지식을 더 찾아볼 수 있습니다. 자세한 설명을 다루기에는 이 글의 범위를 벗어납니다.

## \<embed> 와 \<object> 요소

{{htmlelement("embed")}}와 {{htmlelement("object")}}요소는 {{htmlelement("iframe")}}와 다른 기능을 제공합니다. 이 요소들은 PDF 같은 외부 콘텐츠를 포함하기 위한 일반적인 임베딩 도구입니다.

하지만 이 요소를 사용하는 경우는 별로 없습니다. PDF를 표시하려면 웹페이지에 포함하기보다 보통 파일을 링크로 연결하는 편이 좋습니다.

역사적으로 이 요소들은 {{Glossary("Adobe Flash")}}처럼 브라우저 {{Glossary("Plugin", "plugins")}}이 제어하는 콘텐츠를 삽입하는 데도 사용되었습니다. 하지만 이 기술은 이제 최신 브라우저에서 지원하지 않습니다.

만약 플러그인 콘텐츠를 삽입하려면 적어도 아래와 같은 정보를 알고 있어야 합니다.

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">{{htmlelement("embed")}}</th>
      <th scope="col">{{htmlelement("object")}}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>삽입된 콘텐츠의 {{glossary("URL")}}</td>
      <td><a href="/ko/docs/Web/HTML/Element/embed#src"><code>src</code></a></td>
      <td><a href="/ko/docs/Web/HTML/Element/object#data"><code>data</code></a></td>
    </tr>
    <tr>
      <td>
        삽입된 콘텐츠의 정확한 {{glossary("MIME type", 'media type')}}
      </td>
      <td><a href="/ko/docs/Web/HTML/Element/embed#type"><code>type</code></a></td>
      <td><a href="/ko/docs/Web/HTML/Element/object#type"><code>type</code></a></td>
    </tr>
    <tr>
      <td>
        플러그인이 제어하는 박스의 높이와 너비(CSS 픽셀단위)
      </td>
      <td>
        <a href="/ko/docs/Web/HTML/Element/embed#height"><code>height</code></a><br /><a href="/ko/docs/Web/HTML/Element/embed#width"><code>width</code></a>
      </td>
      <td>
        <a href="/ko/docs/Web/HTML/Element/object#height"><code>height</code></a><br /><a href="/ko/docs/Web/HTML/Element/object#width"><code>width</code></a>
      </td>
    </tr>
    <tr>
      <td>플러그인으로 넘길 매개변수의 이름과 값</td>
      <td>동일한 이름과 값을 가진 특성</td>
      <td>
        단일 태그 {{htmlelement("param")}}요소, <code>&#x3C;object></code>태그 안에 포함
      </td>
    </tr>
    <tr>
      <td>이용 불가 리소스에 대한 대체 HTML 콘텐츠</td>
      <td>지원하지 않음 (<code>&#x3C;noembed></code>는 더 이상 사용되지 않음)</td>
      <td>
        <code>&#x3C;object></code>태그 안에 포함,
        <code>&#x3C;param></code> 요소 다음
      </td>
    </tr>
  </tbody>
</table>

PDF 파일을 페이지에 포함하는 `<object>` 사용 예제를 보겠습니다. ([동작 예시](https://mdn.github.io/learning-area/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)와 [소스 코드](https://github.com/mdn/learning-area/blob/main/html/multimedia-and-embedding/other-embedding-technologies/object-pdf.html)를 참고하세요)

```html
<object data="mypdf.pdf" type="application/pdf" width="800" height="1200">
  <p>
    You don't have a PDF plugin, but you can
    <a href="mypdf.pdf">download the PDF file. </a>
  </p>
</object>
```

PDF는 종이와 디지털을 연결하는 필수적인 징검다리 역할을 했습니다. 하지만 많은 [접근성 문제](https://webaim.org/techniques/acrobat/acrobat)가 있었고 작은 화면에서 읽기 어려웠습니다. 여전히 이를 선호하는 사람들도 있지만 웹페이지에 삽입하기보다 링크를 통해 내려받거나 별도의 페이지에서 읽을 수 있도록 하는 편이 더 낫습니다.

## 실력을 테스트해보세요!

이 글의 마지막에 다다랐습니다. 가장 중요한 정보가 무엇인지 기억하시나요? 다른 글로 넘어가기 전에 이번에 배운 내용을 확인할 수 있는 테스트가 있습니다. [Test your skills: Multimedia and embedding](/ko/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content/Test_your_skills:_Multimedia_and_embedding) 글을 참고하세요.

## 요약

웹 문서에 다른 콘텐츠를 삽입하는 주제는 복잡한 이야기로 빠지기 쉽습니다. 그래서 이번 글에서는 고급 기능에 대한 힌트도 있으면서 간단하고 친숙한 형태로 소개했습니다. 처음에는 지도나 영상 외에 외부 콘텐츠를 웹페이지에 삽입할 일은 많지 않을 겁니다. 하지만 점점 경험이 많아지면서 더 많은 용도를 알게 될 겁니다.

여기서 다룬 것 외에도 외부 콘텐츠를 삽입하는 기술은 여럿 존재합니다. 이전 글에서 다룬 {{htmlelement("video")}}나 {{htmlelement("audio")}}, {{htmlelement("img")}} 등이 있으며, 아직 살펴보지 않은 기술로는 JavaScript로 생성한 2D, 3D 그래픽을 삽입하는 {{htmlelement("canvas")}}, 벡터 그래픽을 삽입하는 {{SVGElement("svg")}} 등이 있습니다. 이 과정의 다음 글에서 [SVG](/ko/docs/Web/SVG)를 살펴보겠습니다.

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding")}}
