---
title: <form>
slug: Web/HTML/Element/form
---

{{HTMLSidebar}}

**HTML `<form>` 요소**는 정보를 제출하기 위한 대화형 컨트롤을 포함하는 문서 구획을 나타냅니다.

{{EmbedInteractiveExample("pages/tabbed/form.html", "tabbed-standard")}}

`<form>` 요소를 꾸밀 땐, 모든 {{domxref("HTMLFormElement.elements", "elements")}}의 유효성을 나타내는 CSS {{cssxref(":valid")}}와 {{cssxref(":invalid")}} [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)를 사용할 수 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        다른 <code>&#x3C;form></code> 요소를 제외한
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
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
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/group_role'><code>group</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/presentation_role'><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLFormElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("accept")}} {{deprecated_inline}}

  - : A comma-separated list of content types that the server accepts.

    > **참고:** **사용시 주의:** 이 속성은 HTML5에서 제거되고 더 이상 사용되서는 안됩니다. 대신에, {{HTMLElement("input")}} 요소의 [`accept`](/ko/docs/Web/HTML/Element/input#accept) 속성을 사용하세요.

- {{htmlattrdef("accept-charset")}}
  - : 스페이스로 구분한, 서버가 허용하는 문자 인코딩의 목록. 브라우저는 목록을 순서대로 사용합니다. 기본값은 [페이지 인코딩](/ko/docs/Web/HTTP/Headers/Content-Encoding)과 같습니다.
- {{htmlattrdef("action")}}
  - : 양식 데이터를 처리할 프로그램의 {{glossary("URI")}}. {{HTMLElement("button")}}, [`<input type="submit">`](/ko/docs/Web/HTML/Element/input/submit), [`<input type="image">`](/ko/docs/Web/HTML/Element/input/image) 요소의 [`formaction`](/ko/docs/Web/HTML/Element/button#formaction) 특성으로 재정의할 수 있습니다.
- {{htmlattrdef("autocapitalize")}} {{non-standard_inline}}

  - : 양식 요소 내에서 영문을 입력할 때 자동으로 대문자 변환하는 방식. iOS Safari에서만 사용하는 비표준 특성입니다. 각 요소의 `autocapitalize` 특성이 `<form>`에 정의된 값을 재정의합니다.

    - `none`: 자동 대문자 입력을 비활성화합니다.
    - `sentences`: 문장의 첫 글자를 대문자로 변환합니다. 기본값.
    - `words`: 각 단어의 첫 글자를 대문자로 변환합니다.
    - `characters`: 모든 글자를 대문자로 변환합니다.

- {{htmlattrdef("autocomplete")}}

  - : 입력 요소가 자동완성된 값을 기본값으로 가질 수 있는지 나타냅니다. 각 요소의 `autocomplete` 특성이 `<form>`에 정의된 값을 재정의합니다.

    - `off`: 브라우저가 각 항목에 자동으로 값을 채워 넣지 않습니다. (로그인 양식으로 의심되는 경우 보통 무시합니다)
    - `on`: 사용자의 과거 입력값에 기반하여 브라우저가 자동으로 값을 채워 넣습니다.

- {{htmlattrdef("enctype")}}

  - : `method` 특성이 `post`인 경우, `enctype`은 양식 제출 시 데이터의 [MIME 유형](https://ko.wikipedia.org/wiki/%EB%AF%B8%EB%94%94%EC%96%B4_%ED%83%80%EC%9E%85)을 나타냅니다.

    - `application/x-www-form-urlencoded`: 기본값.
    - `multipart/form-data`: `<input type="file">`이 존재하는 경우 사용하세요.
    - `text/plain`: HTML 5에서 디버깅 용으로 추가된 값.

    {{HTMLElement("button")}}, [`<input type="submit">`](/ko/docs/Web/HTML/Element/input/submit), [`<input type="image">`](/ko/docs/Web/HTML/Element/input/image) 요소의 [`formenctype`](/ko/docs/Web/HTML/Element/button#formenctype) 특성으로 재정의할 수 있습니다.

- {{htmlattrdef("method")}}

  - : 양식을 제출할 때 사용할 [HTTP](/ko/docs/Web/HTTP) 메서드.

    - `post`: [POST 메서드](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5). 양식 데이터를 [요청 본문](/ko/docs/Web/API/Body)으로 전송합니다.
    - `get`: [GET 메서드](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3). 양식 데이터를 `action` URL과 `?` 구분자 뒤에 이어 붙여서 전송합니다.
    - dialog: 양식이 {{htmlelement("dialog")}} 안에 위치한 경우, 제출과 함께 대화 상자를 닫습니다.

    {{HTMLElement("button")}}, [`<input type="submit">`](/ko/docs/Web/HTML/Element/input/submit), [`<input type="image">`](/ko/docs/Web/HTML/Element/input/image) 요소의 [`formmethod`](/ko/docs/Web/HTML/Element/button#formmethod) 특성으로 재정의할 수 있습니다.

- {{htmlattrdef("name")}} {{deprecated_inline}}
  - : 양식의 이름. HTML 4부터 사용 중단됐습니다. [`id`](/ko/docs/Web/HTML/Global_attributes#id)를 사용하세요.
- {{htmlattrdef("novalidate")}}
  - : 지정한 경우 양식의 유효성 검증을 건너뜁니다. `novalidate` 특성을 지정하지 않은(양식의 검증을 수행하는) 경우에도 {{HTMLElement("button")}}, [`<input type="submit">`](/ko/docs/Web/HTML/Element/input/submit), [`<input type="image">`](/ko/docs/Web/HTML/Element/input/image) 요소의 [`formnovalidate`](/ko/docs/Web/HTML/Element/button#formnovalidate) 특성으로 재정의할 수 있습니다.
- {{htmlattrdef("target")}}

  - : 양식 제출의 결과를 표시할 위치를 나타내는 표준 키워드 혹은 사용자 지정 이름. 가능한 값은 {{glossary("browsing context", "브라우징 맥락")}}(탭, 창, {{htmlelement("iframe")}})의 이름 또는 키워드입니다. 지정한 경우, 버튼의 양식 소유자가 가진 [`target`](/ko/docs/Web/HTML/Element/form#target) 특성보다 우선합니다. 다음 키워드는 특별한 뜻을 가지고 있습니다.

    - `_self`: 응답을 현재 브라우징 맥락에 표시합니다. 기본값.
    - `_blank`: 응답을 새로운 브라우징 맥락에 표시합니다. 보통 새 탭이지만, 사용자가 브라우저 설정을 통해 새 창으로 바꿀 수 있습니다.
    - `_parent`: 응답을 현재 브라우징 맥락의 부모에 표시합니다. 부모가 존재하지 않으면 `_self`와 동일하게 행동합니다.
    - `_top`: 응답을 최상단 브라우징 맥락(현재 맥락의 부모면서 자신의 부모가 존재하지 않는, 제일 높은 맥락)에 표시합니다. 부모가 존재하지 않으면 `_self`와 동일하게 행동합니다.

    {{HTMLElement("button")}}, [`<input type="submit">`](/ko/docs/Web/HTML/Element/input/submit), [`<input type="image">`](/ko/docs/Web/HTML/Element/input/image) 요소의 [`formtarget`](/ko/docs/Web/HTML/Element/button#formtarget) 특성으로 재정의할 수 있습니다.

## 예제

```html
<!-- Form which will send a GET request to the current URL -->
<form>
  <label
    >Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Save</button>
</form>

<!-- Form which will send a POST request to the current URL -->
<form method="post">
  <label
    >Name:
    <input name="submitted-name" autocomplete="name" />
  </label>
  <button>Save</button>
</form>

<!-- Form with fieldset, legend, and label -->
<form method="post">
  <fieldset>
    <legend>Title</legend>
    <label><input type="radio" name="radio" /> Select me</label>
  </fieldset>
</form>
```

{{ EmbedLiveSample('예제', '100%', 110) }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [HTML 양식 안내서](/ko/docs/Web/Guide/HTML/Forms)
