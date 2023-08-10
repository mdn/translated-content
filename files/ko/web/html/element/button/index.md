---
title: "<button>: 버튼 요소"
slug: Web/HTML/Element/button
---

{{HTMLSidebar}}

**HTML `<button>` 요소**는 클릭 가능한 버튼을 나타냅니다. 버튼은 [양식](/ko/docs/Learn/HTML/Forms) 내부는 물론 간단한 표준 버튼 기능이 필요한 곳이라면 문서 어디에나 배치할 수 있습니다. 기본값의 HTML 버튼은 {{glossary("user agent", "사용자 에이전트")}}의 호스트 플랫폼과 비슷한 디자인을 따라가지만, 외형은 [CSS](/ko/docs/Web/CSS)로 변경할 수 있습니다.

{{EmbedInteractiveExample("pages/tabbed/button.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#대화형_콘텐츠"
          >대화형 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#양식_관련_콘텐츠"
          >양식 관련 콘텐츠</a
        >(<a href="/ko/docs/Web/Guide/HTML/Content_categories#나열됨">나열됨</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#레이블_가능"
          >레이블 가능</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#제출_가능"
          >제출 가능</a
        >), 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#대화형_콘텐츠"
          >대화형 콘텐츠</a
        >를 제외한
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
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td>
        <code
          ><a href="/ko/docs/Web/Accessibility/ARIA/Roles/button_role"
            >button</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/checkbox_role'><code>checkbox</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/link_role'><code>link</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/menuitem_role'><code>menuitem</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role'><code>menuitemcheckbox</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role'><code>menuitemradio</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/radio_role'><code>radio</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/switch_role'><code>switch</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/tab_role'><code>tab</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLButtonElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

<dl>

- {{htmlattrdef("autofocus")}}

  - : 페이지 로드 후, 이 버튼에 포커스가 위치해야 하는지 나타냅니다. 문서 내에서 **하나의 요소**만 `autofocus` 특성을 가질 수 있습니다.

- {{htmlattrdef("autocomplete")}} {{non-standard_inline}}

  - : This attribute on a {{HTMLElement("button")}} is nonstandard and Firefox-specific. Unlike other browsers, [Firefox persists the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a {{HTMLElement("button")}} across page loads. Setting `autocomplete="off"` disables this feature; see [Firefox bug 654072](https://bugzil.la/654072).

- {{htmlattrdef("disabled")}}

  - : 버튼과 사용자의 상호작용, 즉 누르거나 클릭하는 것을 막습니다.

  Firefox, unlike other browsers, [persist the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a {{HTMLElement("button")}} across page loads. Use the [`autocomplete`](/ko/docs/Web/HTML/Element/button#autocomplete) attribute to control this feature.

- {{htmlattrdef("form")}}

  - : 버튼과 연결할 {{HTMLElement("form")}} 요소("양식 소유자"). 같은 문서에 존재하는 `<form>` 요소의 [`id`](/ko/docs/Web/HTML/Global_attributes#id) 특성 값을 사용해야 합니다. `form` 특성을 지정하지 않았으나 조상 중 `<form>` 요소가 존재하면 해당 `<form>`과 연결됩니다.

  `form` 특성을 사용하면 버튼을 `<form>` 요소에 넣지 않고도 연결할 수 있고, 조상 중 `<form>`이 있더라도 소유자를 재정의할 수 있습니다.

- {{htmlattrdef("formaction")}}

  - : `<button>`이 제출 버튼인 경우, 제출한 정보를 처리할 URL. 지정한 경우, 버튼의 양식 소유자가 가진 [`action`](/ko/docs/Web/HTML/Element/form#action) 특성보다 우선합니다. 양식 소유자가 존재하지 않으면 영향을 주지 않습니다.

- {{htmlattrdef("formenctype")}}

  - : `<button>`이 제출 버튼인 경우, `formenctype` 특성은 양식을 서버로 제출할 때 사용할 양식 데이터 인코딩을 지정합니다. 가능한 값은 다음과 같습니다.

  - `application/x-www-form-urlencoded`: 기본값.
  - `multipart/form-data`: [`type`](/ko/docs/Web/HTML/Element/input#type) 특성이 `file`인 {{HTMLElement("input")}}이 존재하는 양식에서 사용하세요.
  - `text/plain`: 디버깅 전용으로 명세에 추가된 값입니다. 실제 양식 제출 시 사용해선 안됩니다.

  지정한 경우, 버튼의 양식 소유자가 가진 [`enctype`](/ko/docs/Web/HTML/Element/form#enctype) 특성보다 우선합니다.

- {{htmlattrdef("formmethod")}}

  - : `<button>`이 제출 버튼인 경우, `formmethod` 특성은 양식을 서버로 제출할 때 사용할 [HTTP 메서드](/ko/docs/Web/HTTP/Methods)를 지정합니다. 가능한 값은 다음과 같습니다.

  - `post`: 양식의 데이터를 HTTP 요청 본문에 넣습니다. 비밀번호처럼, 양식 데이터 중 공개하지 않아야 하는 항목이 있으면 사용하세요.
  - `get`: 양식 `action` URL 뒤에 `?` 를 추가한 후 양식 데이터를 덧붙입니다. 검색 양식처럼, 양식이 사이드 이펙트를 갖지 않을 때 사용하세요.

  지정한 경우, 버튼의 양식 소유자가 가진 [`method`](/ko/docs/Web/HTML/Element/form#method) 특성보다 우선합니다.

- {{htmlattrdef("formnovalidate")}}

  - : `<button>`이 제출 버튼인 경우, `formnovalidate` 특성은 양식을 제출할 때 [유효성 검사](/ko/docs/Learn/Forms/Form_validation)를 하지 않겠다는 것을 지정합니다. 지정한 경우, 버튼의 양식 소유자가 가진 [`novalidate`](/ko/docs/Web/HTML/Element/form#novalidate) 특성보다 우선합니다.

- {{htmlattrdef("formtarget")}}

  - : `<button>`이 제출 버튼인 경우, `formtarget` 특성에는 양식 제출의 결과를 표시할 위치를 나타내는 표준 키워드 혹은 사용자 지정 이름을 사용할 수 있습니다. 가능한 값은 {{glossary("browsing context", "브라우징 맥락")}}(탭, 창, {{htmlelement("iframe")}})의 이름 또는 키워드입니다. 지정한 경우, 버튼의 양식 소유자가 가진 [`target`](/ko/docs/Web/HTML/Element/form#target) 특성보다 우선합니다. 다음 키워드는 특별한 뜻을 가지고 있습니다.

  - `_self`: 응답을 현재 브라우징 맥락에 표시합니다. 기본값.
  - `_blank`: 응답을 새로운 브라우징 맥락에 표시합니다. 보통 새 탭이지만, 사용자가 브라우저 설정을 통해 새 창으로 바꿀 수 있습니다.
  - `_parent`: 응답을 현재 브라우징 맥락의 부모에 표시합니다. 부모가 존재하지 않으면 `_self`와 동일하게 행동합니다.
  - `_top`: 응답을 최상단 브라우징 맥락(현재 맥락의 부모면서 자신의 부모가 존재하지 않는, 제일 높은 맥락)에 표시합니다. 부모가 존재하지 않으면 `_self`와 동일하게 행동합니다.

- {{htmlattrdef("name")}}

  - : 버튼의 이름. 제출할 때, 버튼의 `value` 특성과 함께 양식 데이터의 일부를 구성합니다.

- {{htmlattrdef("type")}}

  - : 버튼의 행동 방식. 가능한 값은 다음과 같습니다.

  - `submit`: 버튼이 서버로 양식 데이터를 제출합니다. 지정하지 않은 경우 기본값이며, 유효하지 않은 값일 때도 사용합니다.
  - `reset`: `<input type="reset">`처럼, 모든 컨트롤을 초깃값으로 되돌립니다.
  - `button`: 기본 행동이 없으며 클릭했을 때 아무것도 하지 않습니다. 클라이언트측 스크립트와 연결할 수 있습니다.

- {{htmlattrdef("value")}}
  - : 버튼의 초깃값. 제출할 때, 버튼의 `value` 특성과 함께 양식 데이터의 일부를 구성합니다.

## 참고

`<button>` 요소는 {{HTMLElement("input")}} 요소보다 스타일을 적용하기 훨씬 수월합니다. `<input>`은 `value` 특성에 텍스트 값밖에 지정할 수 없지만, `<button>`은 내부 HTML 콘텐츠(`<em>`, `**`, 심지어 `<img>`도)에 더해 {{Cssxref("::after")}}와 {{Cssxref("::before")}} 의사 요소를 사용하는 복잡한 렌더링도 가능합니다.

양식 제출용 버튼이 아니라면 `type` 특성을 `button`으로 지정하는걸 잊지 마세요. 기본값에서는 버튼을 눌렀을 때 양식 데이터를 제출하고, (존재하지 않는) 응답을 불러오려고 시도하는 과정에서 문서의 현재 상태가 사라질 수 있습니다.

## 예제

```html
<button name="button">눌러보세요</button>
```

{{ EmbedLiveSample('예제', 200, 64) }}

## 접근성 고려사항

### 아이콘 버튼

아이콘만 사용해 기능을 표현하는 버튼은 접근 가능한 이름을 갖지 않습니다. 접근 가능한 이름은 스크린 리더 등 접근성 보조 기술이 문서를 분석하고 [접근성 트리](/ko/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs)를 생성할 때 사용할 수 있는 프로그램 훅을 제공합니다. 그 후 보조 기술이 페이지 콘텐츠를 탐색하고 조작할 때 접근성 트리를 사용합니다.

아이콘 버튼에 접근 가능한 이름을 부여하려면, `<button>` 요소의 기능을 간략히 묘사하는 텍스트를 안에 포함하세요.

#### 예제

```html
<button name="favorite" type="button">
  <svg aria-hidden="true" viewBox="0 0 10 10">
    <path d="M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z" />
  </svg>
  Add to favorites
</button>
```

텍스트를 숨기고 싶은 경우, 접근 가능한 방식은 [CSS 속성을 조합](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link)해 시각적으로는 숨기고, 보조 기술은 읽을 수 있는 형태로 남기는 것입니다.

그러나, 버튼의 텍스트를 시각적으로 남겨놓는 것은 아이콘의 뜻이나 버튼의 기능에 익숙하지 않은 사용자도 도울 수 있다는 점을 명심해야 합니다. 특히 기술과 가깝지 않거나, 문화적으로 다른 해석을 할 수 있는 사용자를 고려하세요.

- [What is an accessible name? | The Paciello Group](https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/)
- [MDN Understanding WCAG, Guideline 4.1 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Robust#Guideline_4.1_—_Compatible_Maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Understanding Success Criterion 4.1.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### 크기와 간격

#### 크기

버튼과 같은 대화형 요소는 상호작용하기 충분한 크기의 활성화 영역을 가져야 합니다. 충분한 크기는 운동 조절 장애를 가진 사용자와, 터치스크린처럼 정확하지 않은 입력 도구 사용자처럼 다양한 사람을 돕습니다. 최소 44x44의 [CSS 픽셀](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) 크기를 권고합니다.

- [Understanding Success Criterion 2.5.5: Target Size | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5 | Adrian Roselli](http://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets - The A11Y Project](https://a11yproject.com/posts/large-touch-targets/)

#### 간격

버튼과 같은 대화형 요소 다수를 시각적으로 가까이 배치할 땐 서로를 분리하는 공간을 둬야 합니다. 간격은 운동 조절 장애를 가진 사용자가 원하지 않는 상호작용을 하는걸 방지할 수 있습니다.

간격은 {{cssxref("margin")}}과 같은 CSS 속성으로 설정할 수 있습니다.

- [Hand tremors and the giant-button-problem - Axess Lab](https://axesslab.com/hand-tremors/)

### Firefox

Firefox will add a small dotted border on a focused button. This border is declared through CSS in the browser stylesheet, but you can override it to add your own focused style using `<a href="/ko/docs/Web/CSS/::-moz-focus-inner">button::-moz-focus-inner { }</a>`.

If overridden, it is important to **ensure that the state change when focus is moved to the button is high enough** that people experiencing low vision conditions will be able to perceive it.

Color contrast ratio is determined by comparing the luminosity of the button text and background color values compared to the background the button is placed on. In order to meet current [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/intro/wcag), a ratio of 4.5:1 is required for text content and 3:1 for large text. (Large text is defined as 18.66px and {{cssxref("font-weight", "bold")}} or larger, or 24px or larger.)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### 클릭과 포커스

`<button>`을 클릭했을 때 포커스를 얻는 여부는 브라우저와 운영체제에 따라 다릅니다. 아래 표는 {{HTMLElement("input")}}이 `type="button"` 또는 `type="submit"`일 때도 동일합니다.

<table>
  <caption>
    {{HTMLElement("button")}}을 클릭했을 때 포커스를 부여하나?
  </caption>
  <thead>
    <tr>
      <th>데스크톱 브라우저</th>
      <th>Windows 8.1</th>
      <th>OS X 10.X</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Firefox</th>
      <td class="bc-supports-yes">예 - Firefox 30.0</td>
      <td class="bc-supports-no">
        (<code>tabindex</code>가 존재해도) 아니오 - Firefox 63
      </td>
    </tr>
    <tr>
      <th>Chrome</th>
      <td class="bc-supports-yes">예 - Chrome 35</td>
      <td class="bc-supports-yes">예 - Chrome 65</td>
    </tr>
    <tr>
      <th>Safari</th>
      <td style="background: #eee">N/A</td>
      <td class="bc-supports-no">
        (<code>tabindex</code>가 존재해도) 아니오 - Safari 12 (<a
          href="https://bugs.webkit.org/show_bug.cgi?id=22261"
          >bug 22261</a
        >)
      </td>
    </tr>
    <tr>
      <th>Internet Explorer</th>
      <td class="bc-supports-yes">예 - Internet Explorer 11</td>
      <td style="background: #eee">N/A</td>
    </tr>
    <tr>
      <th>Presto</th>
      <td class="bc-supports-yes">예 - Opera 12</td>
      <td class="bc-supports-yes">예 - Opera 12</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>
    {{HTMLElement("button")}}을 탭했을 때 포커스를 부여하나?
  </caption>
  <thead>
    <tr>
      <th>모바일 브라우저</th>
      <th>iOS 7.1.2</th>
      <th>Android 4.4.4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Safari Mobile</th>
      <td class="bc-supports-no">(<code>tabindex</code>가 존재해도) 아니오</td>
      <td style="background-color: #eeeeee">N/A</td>
    </tr>
    <tr>
      <th>Chrome 35</th>
      <td class="bc-supports-no">(<code>tabindex</code>가 존재해도) 아니오</td>
      <td class="bc-supports-yes">예</td>
    </tr>
  </tbody>
</table>

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
