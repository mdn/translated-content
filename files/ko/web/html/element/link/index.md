---
title: "<link>: 외부 리소스 연결 요소"
slug: Web/HTML/Element/link
---

{{HTMLSidebar}}

**HTML `<link>`** 요소는 현재 문서와 외부 리소스의 관계를 명시합니다. `<link>`는 {{glossary("CSS", "스타일 시트")}}를 연결할 때 제일 많이 사용하지만, 사이트 아이콘("파비콘"과 홈 화면 아이콘) 연결 등 여러가지로 쓰일 수 있습니다.

{{EmbedInteractiveExample("pages/tabbed/link.html")}}

외부 스타일 시트를 연결하려면 {{htmlelement("head")}} 안에 다음과 같은 `<link>` 요소를 배치하세요.

```html
<link href="main.css" rel="stylesheet" />
```

위의 간단한 예제는 `href` 특성에 스타일 시트의 경로를, `rel` 특성에 `stylesheet`을 사용합니다. `rel` 은 관계(**rel**ationship)를 뜻하며, 현재 문서와 연결한 아이템의 관계가 어떻게 되는지 설명합니다. 따라서 `<link>` 요소의 제일 중요한 기능 중 하나라고 볼 수 있습니다. [링크 유형](/ko/docs/Web/HTML/Link_types) 참고서에서 볼 수 있듯 관계에는 다양한 종류가 있습니다.

그중에서도 몇 가지 자주 쓰이는 유형이 있습니다. 사이트의 파비콘을 연결하려면 다음과 같이 사용합니다.

```html
<link rel="icon" href="favicon.ico" />
```

아이콘을 위한 `rel` 값도 여러개가 있으며, 주 용도는 다양한 휴대기기 플랫폼의 특별한 아이콘을 나타내기 위함입니다.

```html
<link
  rel="apple-touch-icon-precomposed"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

`sizes` 특성은 아이콘 크기를, `type` 특성은 연결한 리소스의 MIME을 포함합니다. 브라우저는 이런 여러가지 정보를 통해 가장 적합한 아이콘을 선택합니다.

`media` 특성을 사용해 미디어 유형이나 쿼리를 지정할 수도 있습니다. 그러면 해당 미디어 조건을 만족할 때만 리소스를 불러옵니다.

```html
<link href="print.css" rel="stylesheet" media="print" />
<link
  href="mobile.css"
  rel="stylesheet"
  media="screen and (max-width: 600px)" />
```

새로운 성능 및 보안 관련 기능도 `<link>` 요소에 추가됐습니다. 다음 코드로 살펴보겠습니다.

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

`rel`의 `preload` 값은 브라우저가 이 리소스를 미리 불러와야 한다는 것(자세한 정보는 [이 문서](/ko/docs/Web/HTML/Preloading_content)를 참고하세요)을 나타내고, `as` 특성은 가져오는 리소스가 어떤 리소스인지 나타냅니다. `crossorigin` 특성은 리소스를 {{glossary("CORS")}} 요청으로 불러와야 하는지에 대한 값입니다.

Other usage notes:

- A `<link>` element can occur either in the {{HTMLElement("head")}} or {{HTMLElement("body")}} element, depending on whether it has a [link type](https://html.spec.whatwg.org/multipage/links.html#body-ok) that is **body-ok**. For example, the `stylesheet` link type is body-ok, and therefore `<link rel="stylesheet">` is permitted in the body. However, this isn't a good practice to follow; it makes more sense to separate your `<link>` elements from your body content, putting them in the `<head>`.
- When using `<link>` to establish a favicon for a site, and your site uses a Content Security Policy (CSP) to enhance its security, the policy applies to the favicon. If you encounter problems with the favicon not loading, verify that the {{HTTPHeader("Content-Security-Policy")}} header's [`img-src` directive](/ko/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) is not preventing access to it.
- The HTML and XHTML specifications define event handlers for the `<link>` element, but it is unclear how they would be used.
- Under XHTML 1.0, empty elements such as `<link>` require a trailing slash: `<link />`.
- WebTV supports the use of the value `next` for `rel` to preload the next page in a document series.

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다

- {{HTMLAttrDef("as")}}

  - : `<link>` 요소에 `rel="preload"` 또는 `rel="prefetch"` 특성을 지정했을 때만 사용합니다. `as` 특성은 `&#x3C;link>` 요소가 불러오는 콘텐츠의 유형을 지정합니다. 요청 매칭, 올바른 콘텐츠 보안 정책의 적용, 올바른 {{HTTPHeader("Accept")}} 요청 헤더 적용에 필요합니다. 이에 더해, `rel="preload"`는 `as` 특성을 사용해 요청 우선순위를 매깁니다. 다음 표는 특성의 유효한 값과, 해당 값이 적용되는 요소 또는 리소스를 나열합니다.

     <table class="standard-table">
        <thead>
          <tr>
            <th scope="col">Value</th>
            <th scope="col">Applies To</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>audio</td>
            <td><code>&#x3C;audio></code> elements</td>
          </tr>
          <tr>
            <td>document</td>
            <td><code>&#x3C;iframe></code> and <code>&#x3C;frame></code> elements</td>
          </tr>
          <tr>
            <td>embed</td>
            <td><code>&#x3C;embed></code> elements</td>
          </tr>
          <tr>
            <td>fetch</td>
            <td>
              <p>fetch, XHR</p>
              <div class="notecard note">
                <p>
                  **Note:** This value also requires
                  <code>&#x3C;link></code> to contain the crossorigin attribute.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>font</td>
            <td>CSS @font-face</td>
          </tr>
          <tr>
            <td>image</td>
            <td>
              <code>&#x3C;img></code> and <code>&#x3C;picture></code> elements with
              srcset or imageset attributes, SVG <code>&#x3C;image></code> elements,
              CSS <code>*-image</code> rules
            </td>
          </tr>
          <tr>
            <td>object</td>
            <td><code>&#x3C;object></code> elements</td>
          </tr>
          <tr>
            <td>script</td>
            <td>
              <code>&#x3C;script></code> elements, Worker <code>importScripts</code>
            </td>
          </tr>
          <tr>
            <td>style</td>
            <td>
              <code>&#x3C;link rel=stylesheet></code> elements, CSS
              <code>@import</code>
            </td>
          </tr>
          <tr>
            <td>track</td>
            <td><code>&#x3C;track></code> elements</td>
          </tr>
          <tr>
            <td>video</td>
            <td><code>&#x3C;video></code> elements</td>
          </tr>
          <tr>
            <td>worker</td>
            <td>Worker, SharedWorker</td>
          </tr>
        </tbody>
      </table>

- {{htmlattrdef("crossorigin")}}

  - : 리소스를 가져올 때 {{glossary("CORS")}}를 사용해야 하는지 나타내는 열거형 특성입니다. [CORS 활성화 이미지](/ko/docs/Web/HTML/CORS_Enabled_Image)는 {{HTMLElement("canvas")}} 요소를 "오염"(taint)시키지 않고 재사용할 수 있습니다. 가능한 값은 다음과 같습니다.
  - `anonymous`
    - : 교차 출처 요청({{HTTPHeader("Origin")}} HTTP 헤더를 가진 요청)을 수행하지만 인증 정보, 즉 쿠키, X.509 인증서, HTTP Basic 인증 중 어떠한 것도 전송하지 않습니다. 서버에서 {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP 헤더를 설정하지 않아서 출처 사이트에 인증 정보를 전달하지 않으면 리소스가 오염되어 사용처가 제한됩니다.
  - `use-credentials` - : 교차 출처 요청({{HTTPHeader("Origin")}} HTTP 헤더를 가진 요청)을 수행하면서 인증 정보, 즉 쿠키, X.509 인증서, HTTP Basic 인증 중 한 가지 이상을 수행합니다. 서버에서 {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP 헤더를 설정하지 않아서 출처 사이트에 인증 정보를 전달하지 않으면 리소스가 오염되어 사용처가 제한됩니다.

  `crossorigin` 특성이 존재하지 않으면 리소스를 {{Glossary("CORS")}} 요청 없이 가져오므로 리소스의 오염 없이는 사용이 불가능합니다. 유효하지 않은 값은 **anonymous**를 지정한 것으로 간주합니다. [CORS 설정 특성](/ko/docs/Web/HTML/Attributes/crossorigin) 문서에서 더 자세한 정보를 알아보세요.

- {{htmlattrdef("disabled")}}

  - : `rel="stylesheet"`에 한정하여, `disabled` 불리언 특성은 스타일시트를 불러와서 문서에 적용할지 나타냅니다. HTML을 불러오는 시점에 `disabled`를 지정한 경우 스타일시트는 페이지 로딩 시점에 불러오지 않습니다. 이후에 `disabled` 특성이 `false`로 바뀌거나 아예 제거될 때는 불러옵니다.

    DOM에서 `disabled` 속성을 지정하면 문서의 {{domxref("document.styleSheets")}} 리스트에서 스타일시트를 제거합니다.

- {{HTMLAttrDef("href")}}
  - : 연결할 리소스의 {{glossary("URL")}}입니다. 절대와 상대 URL 모두 가능합니다.
- {{HTMLAttrDef("hreflang")}}
  - : 연결할 리소스가 사용하는 언어입니다. 오직 제안하는 용도로만 사용합니다. 가능한 값은 [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt)에 따릅니다. [`href`](/ko/docs/Web/HTML/Element/link#href) 특성이 존재할 때만 사용하세요.
- {{HTMLAttrDef("importance")}} {{Experimental_Inline}}

  - : 리소스의 상대적인 중요도입니다. 가능한 값은 다음과 같습니다.

    - **`auto`**: **설정 안함**. 브라우저가 자체 휴리스틱을 사용해 리소스의 우선순위를 결정합니다.

    - **`high`**: 브라우저에게 리소스가 **높은** 우선순위를 지님을 알려줍니다.

    - **`low`**: 브라우저에게 리소스가 **낮은** 우선순위를 지님을 알려줍니다.

  > **참고:** `importance` 특성은 `<link>` 요소가 `rel="preload"` 또는 `rel="prefetch"`를 가지고 있어야 사용할 수 있습니다.

- {{HTMLAttrDef("integrity")}} {{Experimental_Inline}}
  - : Contains inline metadata — a base64-encoded cryptographic hash of the resource (file) you're telling the browser to fetch. The browser can use this to verify that the fetched resource has been delivered free of unexpected manipulation. See [Subresource Integrity](/en-US/docs/Web/Security/Subresource_Integrity).
- {{htmlattrdef("media")}}

  - : 연결된 리소스를 적용할 미디어를 명시합니다. 값으로는 반드시 미디어 유형이나 미디어 쿼리를 사용해야 합니다. `media` 특성은 사용자 에이전트가 현재 장치에 맞춰 최적의 스타일시트를 선택하도록 할 수 있으므로 주로 외부 스타일시트를 연결할 때 유용합니다.

    > **참고:**
    >
    > - HTML 4에서는 이 특성의 값으로 사용할 수 있는 `print`, `screen`, `aural`, `braille` 등과 같은 값을 공백으로 구분한 미디어 설명 문자열 목록, 예를 들어, 미디어 유형 및 그룹([media types and groups](/en-US/docs/CSS/@media))일 수 있습니다.HTML5에서는 이를 확장하여 HTML 4에서 허용되는 값 외에 어떤 유형의[media queries](/en-US/docs/CSS/Media_queries)든 사용할 수 있습니다.
    > - [CSS3 Media Queries](/en-US/docs/CSS/Media_queries)를 지원하지 않는 브라우저는 이를 타당한 링크로 인식하지 않을 수 있으므로HTML 4에 정의되어 있는제한된 media query의 집합을 이용한 폴백(fallback) 링크를 설정하는 것을 잊지 말기바랍니다.

- {{HTMLAttrDef("referrerpolicy")}} {{Experimental_Inline}}

  - : A string indicating which referrer to use when fetching the resource:

    - `no-referrer` means that the {{HTTPHeader("Referer")}} header will not be sent.
    - `no-referrer-when-downgrade` means that no {{HTTPHeader("Referer")}} header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent's default behavior, if no policy is otherwise specified.
    - `origin` means that the referrer will be the origin of the page, which is roughly the scheme, the host, and the port.
    - `origin-when-cross-origin` means that navigating to other origins will be limited to the scheme, the host, and the port, while navigating on the same origin will include the referrer's path.
    - `unsafe-url` means that the referrer will include the origin and the path (but not the fragment, password, or username). This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins.

- {{htmlattrdef("rel")}}
  - : 연결할 리소스와 현재 문서의 관계. [링크 유형](/ko/docs/Web/HTML/Link_types)의 값을 공백으로 구분한 리스트를 지정해야 합니다.
- {{HTMLAttrDef("sizes")}}

  - : This attribute defines the sizes of the icons for visual media contained in the resource. It must be present only if the [`rel()`](/ko/docs/Web/HTML/Element/link#rel) contains a value of `icon` or a non-standard type such as Apple's `apple-touch-icon`. It may have the following values:

    - `any`, meaning that the icon can be scaled to any size as it is in a vector format, like `image/svg+xml`.
    - a white-space separated list of sizes, each in the format `<width in pixels>x<height in pixels>` or `<width in pixels>X<height in pixels>`. Each of these sizes must be contained in the resource.

    > **Note:** Most icon formats are only able to store one single icon; therefore most of the time the [`sizes()`](/ko/docs/Web/HTML/Global_attributes#sizes) attribute contains only one entry. MS's ICO format does, as well as Apple's ICNS. ICO is more ubiquitous, so you should use this format if cross-browser support is a concern (especially for old IE versions).

- {{htmlattrdef("title")}}
  - : The `title` attribute has special semantics on the `&#x3C;link>` element. When used on a `&#x3C;link rel="stylesheet">` it defines a [preferred or an alternate stylesheet](/ko/docs/Web/CSS/Alternative_style_sheets). Incorrectly using it may [cause the stylesheet to be ignored](/ko/docs/Correctly_Using_Titles_With_External_Stylesheets).
- {{htmlattrdef("type")}}
  - : 이 특성은 링크된 콘텐츠의 타입을 정의하는데 사용됩니다. 특성의 값은** text/html**, **text/css**와 같은 MIME 타입이여야합니다. 이 특성은 링크된 스타일시트의 타입을 지정하는데 쓰이는것이 보통이며, text/css 값이 가장 흔합니다.

### 비표준 특성

- {{HTMLAttrDef("methods")}} {{Non-standard_Inline}}
  - : The value of this attribute provides information about the functions that might be performed on an object. The values generally are given by the HTTP protocol when it is used, but it might (for similar reasons as for the **title** attribute) be useful to include advisory information in advance in the link. For example, the browser might choose a different rendering of a link as a function of the methods specified; something that is searchable might get a different icon, or an outside link might render with an indication of leaving the current site. This attribute is not well understood nor supported, even by the defining browser, Internet Explorer 4.
- {{HTMLAttrDef("prefetch")}} {{Non-standard_Inline}} {{secureContext_inline}}
  - : This attribute identifies a resource that might be required by the next navigation and that the user agent should retrieve it. This allows the user agent to respond faster when the resource is requested in the future.
- {{HTMLAttrDef("target")}} {{Non-standard_Inline}}
  - : Defines the frame or window name that has the defined linking relationship or that will show the rendering of any linked resource.

### 폐기된 특성

- {{HTMLAttrDef("charset")}} {{deprecated_inline}}

  - : This attribute defines the character encoding of the linked resource. The value is a space- and/or comma-delimited list of character sets as defined in {{rfc(2045)}}. The default value is `iso-8859-1`.

    > **Note:** To produce the same effect as this obsolete attribute, use the {{HTTPHeader("Content-Type")}} HTTP header on the linked resource.

- {{HTMLAttrDef("rev")}} {{deprecated_inline}}

  - : The value of this attribute shows the relationship of the current document to the linked document, as defined by the [`href`](/ko/docs/Web/HTML/Element/link#href) attribute. The attribute thus defines the reverse relationship compared to the value of the `rel` attribute. [Link type values](/ko/docs/Web/HTML/Link_types) for the attribute are similar to the possible values for [`rel`](/ko/docs/Web/HTML/Element/link#rel).
  - :

    > **Note:** This attribute is considered obsolete by the WHATWG HTML living standard (which is the specification MDN treats as canonical). However, it's worth noting that `rev` is <em>not</em> considered obsolete in the W3C specification. That said, given the uncertainty, relying on `rev` is unwise.
    >
    > Instead, you should use the [`rel`](/ko/docs/Web/HTML/Element/link#rel) attribute with the opposite [link type value](/ko/docs/Web/HTML/Link_types). For example, to establish the reverse link for `made`, specify `author`. Also this attribute doesn't stand for "revision" and must not be used with a version number, even though many sites misuse it in this way.

## 예제

### 스타일 시트 포함하기

페이지에 스타일 시트를 포함하려면 다음 구문을 사용하세요.

```html
<link href="style.css" rel="stylesheet" />
```

### 대체 스타일시트 제공하기

[대체 스타일시트](/ko/docs/Web/CSS/Alternative_style_sheets)를 제공할 수도 있습니다.

유저는 View>Page Style 메뉴에서 사용할 스타일시트를 고를수 있습니다. 이것은 유저가 페이지를 여러 버전으로 볼수 있는 방법을 제공합니다.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Providing icons for different usage contexts

You can include links to several different icons on the same page, and the browser will choose which one works best for its particular context using the `rel` and `sizes` values as hints.

```html
<!-- third-generation iPad with high-resolution Retina display: -->
<link
  rel="apple-touch-icon-precomposed"
  sizes="144x144"
  href="favicon144.png" />
<!-- iPhone with high-resolution Retina display: -->
<link
  rel="apple-touch-icon-precomposed"
  sizes="114x114"
  href="favicon114.png" />
<!-- first- and second-generation iPad: -->
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="favicon72.png" />
<!-- non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
<link rel="apple-touch-icon-precomposed" href="favicon57.png" />
<!-- basic favicon -->
<link rel="icon" href="favicon32.png" />
```

### 스타일 시트 load 이벤트

당신은 load 이벤트를 통해 스타일시트가 언제 로드되는지 확인할수 있습니다. 비슷한 방법으로, 당신은 error 이벤트를 통해 스타일시트를 처리하는 도중 에러가 발생했는지 확인할 수 있습니다:

```html
<script>
  function sheetLoaded() {
    // Do something interesting; the sheet has been loaded
  }

  function sheetError() {
    alert("An error occurred loading the stylesheet!");
  }
</script>

<link
  rel="stylesheet"
  href="mystylesheet.css"
  onload="sheetLoaded()"
  onerror="sheetError()" />
```

> **참고:** The `load` event fires once the stylesheet and all of its imported content has been loaded and parsed, and immediately before the styles start being applied to the content.

## 기술 요약

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        메타데이터 콘텐츠.
        <code
          ><a href="/ko/docs/Web/HTML/Global_attributes/itemprop"
            >itemprop</a
          ></code
        >이 존재하면
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >
        및
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th>가능한 콘텐츠</th>
      <td>
        없음. {{Glossary("empty element", "빈 요소")}}입니다.
      </td>
    </tr>
    <tr>
      <th>태그 생략</th>
      <td>여는 태그는 필수입니다. 닫는 태그는 존재해선 안됩니다.</td>
    </tr>
    <tr>
      <th>가능한 부모 요소</th>
      <td>
        메타데이터 콘텐츠를 허용하는 모든 요소.
        <code
          ><a href="/ko/docs/Web/HTML/Global_attributes/itemprop"
            >itemprop</a
          ></code
        >이 존재하면
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>없음</td>
    </tr>
    <tr>
      <th>DOM 인터페이스</th>
      <td>{{DOMxRef("HTMLLinkElement")}}</td>
    </tr>
  </tbody>
</table>

## 명세

{{Specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{HTTPHeader("Link")}} HTTP 헤더
