---
title: <a>
slug: Web/HTML/Element/a
---

{{HTMLSidebar}}

**HTML `<a>` 요소**(앵커 요소)는 [`href`](/ko/docs/Web/HTML/Element/a#href) 특성을 통해 다른 페이지나 같은 페이지의 어느 위치, 파일, 이메일 주소와 그 외 다른 URL로 연결할 수 있는 하이퍼링크를 만듭니다. `<a>` 안의 콘텐츠는 링크 목적지의 설명을 **나타내야 합니다**.

{{EmbedInteractiveExample("pages/tabbed/a.html")}}

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("download")}}

  - : 링크로 이동하는 대신 사용자에게 URL을 저장할지 물어봅니다. 값을 지정할 수도 있고, 지정하지 않을 수도 있습니다.

    - 값이 없으면 파일 이름과 확장자는 브라우저가 다양한 인자로부터 생성해 제안합니다.

      - {{HTTPHeader("Content-Disposition")}} HTTP 헤더
      - [URL 경로](/ko/docs/Web/API/URL/pathname)의 마지막 조각
      - {{glossary("MIME type", "미디어 유형")}} ({{HTTPHeader("Content-Type")}} 헤더, [`data:` URL](/ko/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)의 시작 부분, [`blob:` URL](/ko/docs/Web/API/URL/createObjectURL)의 {{domxref("Blob.type")}}에서 알아냄)

    - 값을 지정하면 저장할 때의 파일 이름으로서 제안합니다. `/`와 `\` 문자는`_`로 변환합니다. 파일시스템에서 다른 문자도 제한할 수 있으므로, 필요한 경우 브라우저가 추가로 이름을 조정할 수 있습니다.

    > **참고:**- `download`는 [동일 출처 URL](/ko/docs/Web/Security/Same-origin_policy)과 `blob:`, `data:` 스킴에서만 작동합니다.
    >
    > - `Content-Disposition`의 `filename`이 `download`와 다를 땐 헤더가 우선권을 가집니다. (`Content-Disposition: inline`일 때, Firefox는 헤더를 우선하고 Chrome은 `download`를 우선합니다.)

- {{HTMLAttrDef("href")}}

  - : 하이퍼링크가 가리키는 URL. 링크는 HTTP 기반 URL일 필요는 없고, 브라우저가 지원하는 모든 URL 스킴을 사용할 수 있습니다.

    - 페이지 구획을 가리키는 프래그먼트 URL
    - 미디어 파일 일부를 가리키는 미디어 프래그먼트
    - `tel:` URL을 사용하는 전화번호
    - `mailto:` URL을 사용하는 이메일 주소
    - 웹 브라우저는 다른 URL 스킴을 지원하지 않지만, 웹사이트는 {{domxref("Navigator.registerProtocolHandler()")}}를 통해 지원할 수 있습니다.

- {{htmlattrdef("hreflang")}}
  - : 링크 URL의 인간 언어에 대한 힌트. 특별한 내장 기능은 없습니다. 가능한 값은 [전역 `lang` 특성](/ko/docs/Web/HTML/Global_attributes/lang)과 동일합니다.
- {{HTMLAttrDef("ping")}}
  - : 하나의 스페이스로 구분하는 URL 목록. 링크를 클릭해 따라갈 경우, 브라우저가 URL 각각에 {{HTTPMethod("POST")}} 요청을 전송합니다. 대개 추적 용도로 사용합니다.
- {{htmlattrdef("referrerpolicy")}} {{experimental_inline}}
  - : URL을 가져올 때 사용할 리퍼러. {{httpheader("Referrer-Policy")}} 문서에서 가능한 값과 효과를 확인하세요.
- {{htmlattrdef("rel")}}
  - : 하나의 스페이스로 구분하는, 연결한 URL과의 관계를 나타내는 [링크 유형](/ko/docs/Web/HTML/Link_types) 목록.
- {{htmlattrdef("target")}}

  - : 링크한 URL을 표시할 위치. 가능한 값은 브라우징 맥락으로, 즉 탭, 창, `<iframe>`의 이름이나 특정 키워드입니다. 다음 키워드는 특별한 뜻을 가지고 있습니다.

    - `_self`: URL을 현재 브라우징 맥락에 표시합니다. 기본값.
    - `_blank`: URL을 새로운 브라우징 맥락에 표시합니다. 보통 새 탭이지만, 사용자가 브라우저 설정을 통해 새 창으로 바꿀 수 있습니다.
    - `_parent`: URL을 현재 브라우징 맥락의 부모에 표시합니다. 부모가 존재하지 않으면 `_self`와 동일하게 행동합니다.
    - `_top`: URL을 최상단 브라우징 맥락(현재 맥락의 부모면서 자신의 부모가 존재하지 않는, 제일 높은 맥락)에 표시합니다. 부모가 존재하지 않으면 `_self`와 동일하게 행동합니다.

    > **참고:** `target`을 사용할 때, `rel="noreferrer"`를 추가해 `window.opener` API의 악의적인 사용을 방지하는걸 고려하세요.

    > **참고:** 최근의 브라우저(Firefox 79+ 등)에서는 target="\_blank"를 지정하면 `rel="noopener"`를 적용한 것과 같은 동작을 합니다.

- {{htmlattrdef("type")}}
  - : 링크 URL의 {{Glossary("MIME type")}}에 대한 힌트. 특별한 내장 기능은 없습니다.

## 속성

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a
          href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          title="HTML/Content categories#Flow content"
          >플로우 콘텐츠</a
        >,
        <a
          href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          title="HTML/Content categories#Phrasing content"
          >구문 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#대화형_콘텐츠"
          >대화형 컨텐츠</a
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#투명_콘텐츠_모델"
          >투명함</a
        >.
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >(대화형 콘텐츠 제외) 또는
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <p>
          <a
            href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
            title="HTML/Content_categories#Phrasing_content"
            >구문 콘텐츠</a
          >를 허용하는 모든 요소, 또는 플로우 콘텐츠를 허용하는 모든 요소. 단,
          다른 <code>&#x3C;a></code> 요소는 불가능.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td>
        <code>href</code> 특성이 존재하면 <a href='/ko/docs/Web/Accessibility/ARIA/Roles/link_role'><code>link</code></a>, 그 외의
        경우
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >대응하는 역할 없음</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>
        <p><code>href</code> 특성이 존재할 경우,</p>
        <ul>
          <li><a href='/ko/docs/Web/Accessibility/ARIA/Roles/button_role'><code>button</code></a></li>
          <li><a href='/ko/docs/Web/Accessibility/ARIA/Roles/checkbox_role'><code>checkbox</code></a></li>
          <li><a href='/ko/docs/Web/Accessibility/ARIA/Roles/menuitem_role'><code>menuitem</code></a></li>
          <li><a href='/ko/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role'><code>menuitemcheckbox</code></a></li>
          <li><a href='/ko/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role'><code>menuitemradio</code></a></li>
          <li><a href='/ko/docs/Web/Accessibility/ARIA/Roles/option_role'><code>option</code></a></li>
          <li><a href='/ko/docs/Web/Accessibility/ARIA/Roles/radio_role'><code>radio</code></a></li>
          <li><a href='/ko/docs/Web/Accessibility/ARIA/Roles/switch_role'><code>switch</code></a></li>
          <li><a href='/ko/docs/Web/Accessibility/ARIA/Roles/tab_role'><code>tab</code></a></li>
          <li><a href='/ko/docs/Web/Accessibility/ARIA/Roles/treeitem_role'><code>treeitem</code></a></li>
        </ul>
        <p><code>href</code> 특성이 존재하지 않을 경우,</p>
        <ul>
          <li>모두</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLAnchorElement")}}</td>
    </tr>
  </tbody>
</table>

## 예제

### 절대 URL로 연결

#### HTML

```html
<a href="https://www.mozilla.com">Mozilla</a>
```

#### 결과

{{EmbedLiveSample('절대_URL로_연결')}}

### 상대 URL로 연결

#### HTML

```html
<a href="//example.com">Scheme-relative URL</a>
<a href="/ko/docs/Web/HTML">Origin-relative URL</a>
<a href="./p">Directory-relative URL</a>
```

```css hidden
a {
  display: block;
  margin-bottom: 0.5em;
}
```

#### 결과

{{EmbedLiveSample('상대_URL로_연결')}}

### 같은 페이지의 요소로 연결

```html
<!-- <a> 요소로 아래의 구획에 연결 -->
<p><a href="#Section_further_down">아래 제목으로 건너뛰기</a></p>

<!-- 링크가 향할 제목 -->
<h2 id="Section_further_down">아래의 제목</h2>
```

> **참고:** `href="#top"`이나 빈 프래그먼트(`href="#"`)를 사용하면 현재 페이지의 최상단으로 이동하는 링크를 생성할 수 있습니다. [HTML 명세](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier)를 확인하세요.

### 이메일 주소로 연결

사용자의 이메일 프로그램을 통해 새로운 메일을 보낼 수 있는 링크를 생성하려면 `mailto:` 스킴을 사용하세요.

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

제목과 본문 포함 등, `mailto:` URL에 관한 자세한 내용은 [이메일 링크](/ko/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#이메일_링크)와 {{RFC(6068)}}을 참고하세요.

### 전화번호로 연결

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(555)5309">(555) 5309</a>
```

`tel:` 링크는 장치의 능력에 따라 행동이 바뀝니다.

- 휴대전화에서는 번호를 자동으로 입력합니다.
- 대부분의 운영체제에는 Skype, FaceTime처럼 전화를 걸 수 있는 프로그램이 있습니다.
- 웹사이트는 {{domxref("Navigator.registerProtocolHandler()")}}를 사용해 전화를 걸 수 있습니다. `web.skype.com`을 참고하세요.
- 다른 행동으로는 연락처에 저장하기와 다른 장치로 전송 등이 있습니다.

`tel:` URL의 구문, 추가 기능, 그 외 더 자세한 정보는 {{RFC(3966)}}을 참고하세요.

### `download` 특성으로 `<canvas>`를 PNG로 저장하기

[`download`](/ko/docs/Web/HTML/Element/a#download) 특성과 `data:` URL을 사용해 {{HTMLElement("canvas")}} 요소의 콘텐츠를 이미지로 저장할 수 있습니다.

#### 저장 링크를 가진 그림판 예제

##### HTML

```html
<p>
  마우스 드래그로 그림을 그려보세요.
  <a href="" download="my_painting.png">다운로드</a>
</p>

<canvas width="300" height="300"></canvas>
```

##### CSS

```css
html {
  font-family: sans-serif;
}
canvas {
  background: #fff;
  border: 1px dashed;
}
a {
  display: inline-block;
  background: #69c;
  color: #fff;
  padding: 5px 10px;
}
```

##### JavaScript

```js
var canvas = document.querySelector("canvas"),
  c = canvas.getContext("2d");
c.fillStyle = "hotpink";

function draw(x, y) {
  if (isDrawing) {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI * 2);
    c.closePath();
    c.fill();
  }
}

canvas.addEventListener("mousemove", (event) =>
  draw(event.offsetX, event.offsetY),
);
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));

document
  .querySelector("a")
  .addEventListener(
    "click",
    (event) => (event.target.href = canvas.toDataURL()),
  );
```

##### 결과

{{EmbedLiveSample('저장_링크를_가진_그림판_예제', '100%', '400')}}

## 보안과 개인정보

`<a>` 요소는 사용자의 보안과 개인정보에 중요한 영향을 줄 수 있습니다. [`Referer` 헤더: 개인정보와 보안 고려사항](/ko/docs/Web/Security/Referer_header:_privacy_and_security_concerns) 문서에서 자세한 내용을 알아보세요.

`target="_blank"`를 `rel="noreferrer"`와 `rel="noopener"` 없이 사용하면 웹사이트가 {{domxref("Window.opener", "window.opener")}} API 악용 공격에 취약해집니다. ([취약점 설명](https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/)) 다만, 최근 브라우저(Firefox 79+ 등)는 `target="_blank"`를 지정하면 임의로 `rel="noopener"` 설정과 동일한 보호 수준을 적용합니다.

## 접근성

### 강한 링크 텍스트

링크 안의 콘텐츠는, 맥락에서 벗어나더라도 링크가 향하는 곳을 설명해야 합니다.

#### 접근성 떨어지는 약한 링크 텍스트

심각하게 흔한 실수는 "여기를 클릭"이나 "여기"라는 단어에 링크를 한다는 것입니다.

```html example-bad
<p>저희의 제품을 더 알아보시려면 <a href="/products">여기</a>를 클릭하세요.</p>
```

#### 강한 링크 텍스트

다행히도 쉽게 수정할 수 있는 데다가, 접근성이 떨어지는 버전보다 더 짧습니다!

```html example-good
<p>저희의 <a href="/products">제품을 더 알아보세요</a>.</p>
```

접근성 보조 기술은 페이지 안의 모든 링크를 나열하는 단축키가 있습니다. 그러나 강한 링크 텍스트가 보조 기술 사용자에게만 도움을 주는 것은 아닙니다. 모든 링크 나열 단축키는 시각적 사용자가 페이지를 빠르게 훑는 것을 흉내 내는 것이기 때문입니다.

### `onclick` 이벤트

앵커 요소의 `href`를 `#`이나 `javascript:void(0)`으로 지정해 페이지 새로고침을 막고, `click` 이벤트 처리기를 등록해서 가짜 버튼을 만드는 방식으로 남용하는 경우가 많습니다.

이런 가짜 `href` 값은 링크를 복사하거나 드래그할 때, 링크를 새 탭이나 새 창에서 열 때, 즐겨찾기에 추가할 때와 JavaScript를 불러오고 있거나 스크립트 오류가 발생했을 때, 아니면 비활성화했을 때 예측하지 못한 동작을 유발합니다. 또한 스크린 리더 등 보조 기술에도 잘못된 의미를 전달합니다.

대신 {{HTMLElement("button")}}을 사용하세요. **하이퍼링크는 진짜 URL로의 탐색 용도로만 사용해야 합니다**.

### 외부 링크와 비 HTML 리소스 링크

`target="_blank"`로 인해 새 탭/창을 여는 링크와, 파일을 다운로드하는 링크는, 링크를 클릭했을 때 무슨 일이 발생할건지 명시해야 합니다.

시력이 나쁘거나 스크린 리더로 탐색하는 사용자, 혹은 지각 능력이 낮은 사용자는 예상하지 못한 상황에서 새 탭, 새 창, 다른 앱이 켜지는 순간 혼란스러울 수 있습니다. 오래된 스크린 리더는 이런 상황을 아예 알려주지 못할 수도 있습니다.

#### 새로운 탭/창을 여는 링크

```html
<a target="_blank" href="https://ko.wikipedia.org">
  위키백과 (새 탭에서 열림)
</a>
```

#### 비 HTML 리소스 링크

```html
<a href="2017-annual-report.ppt">2017 연간 보고서 (PowerPoint)</a>
```

아이콘을 사용해 링크의 행동을 강조할 땐 [대체 텍스트](/ko/docs/Web/HTML/Element/img#alt)를 꼭 지정하세요.

```html
<a target="_blank" href="https://ko.wikipedia.org">
  위키백과
  <img alt="(새 탭에서 열림)" src="newtab.svg" />
</a>

<a href="2017-annual-report.ppt">
  2017 연간 보고서
  <img alt="(PowerPoint 파일)" src="ppt-icon.svg" />
</a>
```

- [WebAIM: Links and Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Understanding WCAG, Guideline 3.2](/ko/docs/Web/Accessibility/Understanding_WCAG/Understandable#Guideline_3.2_—_Predictable_Make_Web_pages_appear_and_operate_in_predictable_ways)
- [G200: Opening new windows and tabs from a link only when necessary](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Giving users advanced warning when opening a new window](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### 건너뛰기 링크

**건너뛰기 링크**(skip link)는 {{HTMLElement("body")}} 콘텐츠에서 가능한 앞쪽에 배치하는 링크로, 페이지의 주요 콘텐츠 시작점을 가리킵니다. 건너뛰기 링크는 보통 포커스 전까지 숨겨집니다.

```html
<body>
  <a href="#content">내용으로 건너뛰기</a>

  <header>…</header>

  <main id="content"><!-- 여기로 건너뜀 --></main>
</body>
```

```css
.skip-link {
  position: absolute;
  top: -3em;
  background: #fff;
}
.skip-link:focus {
  top: 0;
}
```

건너뛰기 링크는 헤더 내비게이션과 같이 여러 페이지에서 반복되는 콘텐츠를 키보드 사용자가 쉽게 생략할 수 있도록 도와줍니다.

건너뛰기 링크는 스위치 조작, 음성 명령, 마우스 스틱/헤드 완드처럼 반복 콘텐츠를 건너뛰기 힘든 보조 기술 사용자에게 큰 도움이 됩니다.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [How-to: Use Skip Navigation links](https://a11yproject.com/posts/skip-nav-links/)
- [MDN / Understanding WCAG, Guideline 2.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.4_%E2%80%94_Navigable_Provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### 크기와 간격

#### 크기

링크와 같은 대화형 요소는 상호작용하기 충분한 크기의 활성화 영역을 가져야 합니다. 충분한 크기는 운동 조절 장애를 가진 사용자와, 터치스크린처럼 정확하지 않은 입력 도구 사용자처럼 다양한 사람을 돕습니다. 최소 44x44의 [CSS 픽셀](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) 크기를 권고합니다.

산문 내의 텍스트로만 이루어진 링크는 위 규칙에서 제외할 수 있지만, 그래도 활성화하기 쉬운 크기를 확보하는 것이 좋습니다.

- [Understanding Success Criterion 2.5.5: Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5](http://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets](https://a11yproject.com/posts/large-touch-targets/)

#### 간격

링크와 같은 대화형 요소 다수를 시각적으로 가까이 배치할 땐 서로를 분리하는 공간을 둬야 합니다. 간격은 운동 조절 장애를 가진 사용자가 원하지 않는 상호작용을 하는걸 방지할 수 있습니다.

간격은 {{CSSxRef("margin")}}과 같은 CSS 속성으로 설정할 수 있습니다.

- [Hand tremors and the giant-button-problem](https://axesslab.com/hand-tremors/)

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("link")}}는 `<a>`와 유사하지만, 사용자에게 노출하지 않는 메타데이터 하이퍼링크를 위한 요소입니다.
- {{CSSxRef(":link")}}는 유효한 `href` 특성을 가진 `<a>` 요소를 선택하는 CSS 의사 클래스입니다.
