---
title: "<link>: 외부 리소스 연결 요소"
slug: Web/HTML/Element/link
l10n:
  sourceCommit: 86dd5c98a18e70297b79b34a2da653f556827bc1
---

{{HTMLSidebar}}

**[HTML](/ko/docs/Web/HTML) `<link>`** 요소는 현재 문서와 외부 리소스의 관계를 명시합니다. `<link>`는 {{glossary("CSS", "스타일 시트")}}를 연결할 때 제일 많이 사용하지만, 사이트 아이콘("파비콘"과 홈 화면 아이콘, 모바일 앱 아이콘) 연결 등 여러가지로 쓰일 수 있습니다.

{{EmbedInteractiveExample("pages/tabbed/link.html")}}

외부 스타일 시트를 연결하려면 {{htmlelement("head")}} 안에 다음과 같은 `<link>` 요소를 배치하세요.

```html
<link href="main.css" rel="stylesheet" />
```

위의 간단한 예제는 `href` 특성에 스타일 시트의 경로를, [`rel`](/ko/docs/Web/HTML/Attributes/rel) 특성에 `stylesheet`을 사용합니다. `rel` 은 관계(**rel**ationship)를 뜻하며, 현재 문서와 연결한 아이템의 관계가 어떻게 되는지 설명합니다. 따라서 `<link>` 요소의 제일 중요한 기능 중 하나라고 볼 수 있습니다.

그중에서도 몇 가지 자주 쓰이는 유형이 있습니다. 사이트의 파비콘을 연결하려면 다음과 같이 사용합니다.

```html
<link rel="icon" href="favicon.ico" />
```

아이콘을 위한 `rel` 값도 여러개가 있으며, 주 용도는 다양한 휴대기기 플랫폼의 특별한 아이콘을 나타내기 위함입니다.

```html
<link
  rel="apple-touch-icon"
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

`rel`의 `preload` 값은 브라우저가 이 리소스를 미리 불러와야 한다는 것을 나타내고(자세한 정보는 [`rel="preload"`](/ko/docs/Web/HTML/Attributes/rel/preload)를 참고하세요), `as` 특성은 가져오는 리소스가 어떤 리소스인지 나타냅니다. `crossorigin` 특성은 리소스를 {{glossary("CORS")}} 요청으로 불러와야 하는지에 대한 값입니다.

기타 사용 일람:

- `<link>` 요소의 [링크 유형](https://html.spec.whatwg.org/multipage/links.html#body-ok)이 **body-ok** 인 경우, {{HTMLElement("head")}} 또는 {{HTMLElement("body")}} 요소에 포함될 수 있습니다. 예를 들어 `stylesheet` 링크 유형은 body-ok 이므로, `<link rel="stylesheet">`는 body 안에 포함될 수 있습니다. 그러나 이는 좋은 방법은 아닙니다. `<link>` 요소는 body 콘텐츠에서 분리해, `<head>` 안에 포함하는 것이 더 좋습니다.
- `<link>`를 사용하여 사이트의 파비콘을 설정하고, 사이트가 보안을 강화하기 위해 콘텐츠 보안 정책(CSP)을 사용하는 경우 해당 정책은 파비콘에도 적용됩니다. 파비콘이 로드되지 않는 문제가 발생한다면 {{HTTPHeader("Content-Security-Policy")}} 헤더의 [`img-src` 지시어](/ko/docs/Web/HTTP/Headers/Content-Security-Policy/img-src)가 접근을 막고 있는지 확인하십시오.
- HTML 및 XHTML 명세서에는 `<link>` 요소에 대한 이벤트 처리기가 정의되어 있으나, 어떻게 사용되는지는 불분명합니다.
- XHTML 1.0 이하에서, `<link>` 와 같은 {{glossary("void element", "빈 요소")}}는 반드시 `<link />` 처럼 슬래시가 따라와야 합니다.
- WebTV는 `rel` 특성에서 `next` 값을 지원합니다. 이는 문서 시리즈의 다음 페이지를 미리 불러오기 위해 사용됩니다.

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다

- `as`

  - : `<link>` 요소에 [`rel="preload"`](/ko/docs/Web/HTML/Attributes/rel/preload) 또는 [`rel="modulepreload"`](/ko/docs/Web/HTML/Attributes/rel/modulepreload) 특성을 지정했을 때만 사용합니다. `as` 특성은 `<link>` 요소가 불러오는 콘텐츠의 유형을 지정합니다. 요청 매칭, 올바른 [콘텐츠 보안 정책](/ko/docs/Web/HTTP/CSP)의 적용, 올바른 {{HTTPHeader("Accept")}} 요청 헤더 적용에 필요합니다.
    이에 더해, `rel="preload"`는 `as` 특성을 사용해 요청 우선순위를 매깁니다. 다음 표는 특성의 유효한 값과, 해당 값이 적용되는 요소 또는 리소스를 나열합니다.

     <table class="standard-table">
        <thead>
          <tr>
            <th scope="col">값</th>
            <th scope="col">적용되는 요소 또는 리소스</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>audio</td>
            <td><code>&#x3C;audio></code> 요소</td>
          </tr>
          <tr>
            <td>document</td>
            <td><code>&#x3C;iframe></code> 과 <code>&#x3C;frame></code> 요소</td>
          </tr>
          <tr>
            <td>embed</td>
            <td><code>&#x3C;embed></code> 요소</td>
          </tr>
          <tr>
            <td>fetch</td>
            <td>
              <p>fetch, XHR</p>
              <div class="notecard note">
                <p>
                  <strong>참고:</strong> 이 값은 crossorigin 특성을 포함하기 위해 <code>&#x3C;link></code> 를 필요로 합니다. <a href="/ko/docs/Web/HTML/Attributes/rel/preload#CORS가_활성화된_fetch">CORS가 활성화된 fetch</a>를 확인하세요.
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
              srcset 또는 imageset 특성을 가지고 있는 <code>&#x3C;img></code> 와 <code>&#x3C;picture></code> 요소, SVG <code>&#x3C;image></code> 요소,
              CSS <code>*-image</code> 규칙
            </td>
          </tr>
          <tr>
            <td>object</td>
            <td><code>&#x3C;object></code> 요소</td>
          </tr>
          <tr>
            <td>script</td>
            <td>
              <code>&#x3C;script></code> 요소, Worker <code>importScripts</code>
            </td>
          </tr>
          <tr>
            <td>style</td>
            <td>
              <code>&#x3C;link rel=stylesheet></code> 요소, CSS
              <code>@import</code>
            </td>
          </tr>
          <tr>
            <td>track</td>
            <td><code>&#x3C;track></code> 요소</td>
          </tr>
          <tr>
            <td>video</td>
            <td><code>&#x3C;video></code> 요소</td>
          </tr>
          <tr>
            <td>worker</td>
            <td>Worker, SharedWorker</td>
          </tr>
        </tbody>
      </table>

- `blocking` {{Experimental_Inline}}

  - : 이 특성은 외부 리소스를 가져올 때 특정 작업이 차단되어야 함을 명시적으로 나타냅니다. 차단할 작업은 아래에 나열된 차단 특성을 공백으로 구분한 리스트 형태여야 합니다.
    - `render`: 화면의 콘텐츠 렌더링이 차단됩니다.

- `crossorigin`

  - : 리소스를 가져올 때 {{glossary("CORS")}}를 사용해야 하는지 나타내는 [열거형](/ko/docs/Glossary/Enumerated) 특성입니다. [CORS 활성화 이미지](/ko/docs/Web/HTML/CORS_enabled_image)는 {{HTMLElement("canvas")}} 요소를 "오염"(taint)시키지 않고 재사용할 수 있습니다. 가능한 값은 다음과 같습니다.
  - `anonymous`
    - : 교차 출처 요청({{HTTPHeader("Origin")}} HTTP 헤더를 가진 요청)을 수행하지만 인증 정보, 즉 쿠키, X.509 인증서, HTTP Basic 인증 중 어떠한 것도 전송하지 않습니다. 서버에서 {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP 헤더를 설정하지 않아서 출처 사이트에 인증 정보를 전달하지 않으면 리소스가 오염되어 사용처가 제한됩니다.
  - `use-credentials`
    - : 교차 출처 요청({{HTTPHeader("Origin")}} HTTP 헤더를 가진 요청)을 수행하면서 인증 정보, 즉 쿠키, X.509 인증서, HTTP Basic 인증 중 한 가지 이상을 수행합니다. 서버에서 {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP 헤더를 설정하지 않아서 출처 사이트에 인증 정보를 전달하지 않으면 리소스가 오염되어 사용처가 제한됩니다.

  `crossorigin` 특성이 존재하지 않으면 리소스를 {{Glossary("CORS")}} 요청 없이 가져오므로 리소스의 오염 없이는 사용이 불가능합니다. 유효하지 않은 값은 **anonymous**를 지정한 것으로 간주합니다. [CORS 설정 특성](/ko/docs/Web/HTML/Attributes/crossorigin) 문서에서 더 자세한 정보를 알아보세요.

- `disabled` {{Non-standard_Inline}}

  - : `rel="stylesheet"`에 한정하여, `disabled` 불리언 특성은 스타일시트를 불러와서 문서에 적용할지 나타냅니다. HTML을 불러오는 시점에 `disabled`를 지정한 경우 스타일시트는 페이지 로딩 시점에 불러오지 않습니다. 이후에 `disabled` 특성이 `false`로 바뀌거나 아예 제거될 때는 불러옵니다.

    DOM에서 `disabled` 속성을 지정하면 문서의 {{domxref("document.styleSheets")}} 리스트에서 스타일시트를 제거합니다.

- `fetchpriority` {{Experimental_Inline}}

  - : preload된 리소스를 가져올 때 사용할 상대적 우선순위의 힌트를 제공합니다. 허용되는 값은 다음과 같습니다.

    - `high`
      - : 같은 유형의 다른 리소스에 비해 우선순위가 높은 가져오기를 호출합니다.
    - `low`
      - : 같은 유형의 다른 리소스에 비해 우선순위가 낮은 가져오기를 호출합니다.
    - `auto`
      - : 기본값: 같은 유형의 다른 리소스와 비교하여 가져오기 우선순위를 자동으로 결정합니다.

- `href`
  - : 연결할 리소스의 {{glossary("URL")}}입니다. 절대와 상대 URL 모두 가능합니다.
- `hreflang`
  - : 연결할 리소스가 사용하는 언어입니다. 오직 제안하는 용도로만 사용합니다. 가능한 값은 [RFC 5646(BCP 47)](https://www.ietf.org/rfc/bcp/bcp47.txt)에 따릅니다. [`href`](#href) 특성이 존재할 때만 사용하세요.
- `imagesizes`
  - : `rel="preload"` 와 `as="image"` 에 한하여, `imagesizes` 특성은 `img` 요소에 사용되는 적절한 리소스를 해당 `srcset` 과 `sizes` 특성으로 preload 하도록 하는 [크기 특성](https://html.spec.whatwg.org/multipage/images.html#sizes-attribute)입니다.
- `imagesrcset`
  - : `rel="preload"` 와 `as="image"` 에 한하여, `imagesrcset` 특성은 `img` 요소에 사용되는 적절한 리소스를 해당 `srcset` 과 `sizes` 특성으로 preload 하도록 하는 [소스 세트 특성](https://html.spec.whatwg.org/multipage/images.html#srcset-attribute)입니다.
- `integrity`
  - : 인라인 메타데이터를 포함합니다. 브라우저에게 가져오도록 지시하려는 리소스(파일)의 Base64로 인코딩된 암호학적 해시입니다. 이를 이용해 브라우저는 가져온 리소스가 예기치 못한 조작 없이 전달되었는지 확인할 수 있습니다. [하위 리소스 무결성](/ko/docs/Web/Security/Subresource_Integrity)을 참고하십시오.
- `media`

  - : 연결된 리소스를 적용할 미디어를 명시합니다. 값으로는 반드시 미디어 유형이나 [미디어 쿼리](/ko/docs/Web/CSS/CSS_media_queries)를 사용해야 합니다. `media` 특성은 사용자 에이전트가 현재 장치에 맞춰 최적의 스타일시트를 선택하도록 할 수 있으므로 주로 외부 스타일시트를 연결할 때 유용합니다.

    > [!NOTE]
    >
    > - HTML 4에서는 이 특성의 값으로 사용할 수 있는 `print`, `screen`, `aural`, `braille` 등과 같은 값을 공백으로 구분한 미디어 설명 문자열 목록, 예를 들어, 미디어 유형 및 그룹([media types and groups](/ko/docs/Web/CSS/@media))일 수 있습니다.HTML5에서는 이를 확장하여 HTML 4에서 허용되는 값 외에 어떤 유형의 [미디어 쿼리](/ko/docs/Web/CSS/CSS_media_queries)든 사용할 수 있습니다.
    > - [CSS3 Media Queries](/ko/docs/Web/CSS/CSS_media_queries)를 지원하지 않는 브라우저는 이를 타당한 링크로 인식하지 않을 수 있으므로 HTML 4에 정의되어 있는 제한된 media query의 집합을 이용한 폴백(fallback) 링크를 설정하는 것을 잊지 말기 바랍니다.

- `referrerpolicy`

  - : 리소스를 가져올 때 사용할 레퍼러를 나타내는 문자열입니다.

    - `no-referrer` 는 {{HTTPHeader("Referer")}} 헤더가 전달되지 않을 것을 의미합니다.
    - `no-referrer-when-downgrade` 는 TLS (HTTPS) 없이 출처로 이동할 때 {{HTTPHeader("Referer")}} 헤더가 전달되지 않을 것을 의미합니다. 이것은 따로 지정한 정책이 없는 경우의 사용자 에이전트 기본 동작입니다.
    - `origin` 은 레퍼러가 페이지의 출처(대략적으로 scheme, host, port)가 됨을 의미합니다.
    - `origin-when-cross-origin` 은 다른 출처로의 이동이 scheme, host, port로 제한되며, 같은 출처로의 이동에는 레퍼러의 경로가 포함됨을 의미합니다.
    - `unsafe-url` 은 레퍼러에 출처와 경로 (fragment, password, username은 제외)가 포함됨을 의미합니다. 이 경우 TLS로 보호된 리소스의 출처와 경로가 안전하지 않은 출처로 유출될 수 있으므로 안전하지 않습니다.

- `rel`
  - : 연결할 리소스와 현재 문서의 관계. [링크 유형](/ko/docs/Web/HTML/Attributes/rel)의 값을 공백으로 구분한 리스트를 지정해야 합니다.
- `sizes` {{Experimental_Inline}}

  - : 리소스에 포함된 시각 매체의 아이콘 크기를 정의합니다.
    [`rel`](#rel) 이 `icon` 값을 가지고 있거나, Apple의 `apple-touch-icon`과 같은 비표준 유형인 경우에만 사용되어야 합니다.
    이 특성은 다음과 같은 값을 가질 수 있습니다.

    - `any`는 `image/svg+xml`와 같은 벡터 유형 그대로 어떤 크기로든 조정 가능함을 의미합니다.
    - 각각 `<width in pixels>x<height in pixels>` 혹은 `<width in pixels>X<height in pixels>` 형식으로 작성한, 공백으로 구분된 크기 목록. 목록에 명시된 크기들은 반드시 리소스에 포함되어 있어야 합니다.

    > [!NOTE]
    > 대부분의 아이콘 형식은 한 개의 단일 아이콘만을 저장할 수 있습니다. 따라서 대부분의 경우, [`sizes`](#sizes) 특성은 하나의 항목만 가지고 있습니다.
    > MS의 ICO 형식도 그러하며, Apple의 ICNS도 마찬가지입니다. ICO는 더 보편화되어 있으므로, 브라우저 간 지원(특히 오래된 IE 버전)을 고려하는 경우 이 형식을 사용해야 합니다.

- `title`
  - : `title` 특성은 `<link>` 요소에서 특수한 의미를 가집니다.
    `<link rel="stylesheet">`에 사용되었을 경우, `title`은 [기본 혹은 대체 스타일시트](/ko/docs/Web/CSS/Alternative_style_sheets)를 정의합니다.
- `type`
  - : 이 특성은 링크된 콘텐츠의 타입을 정의하는데 사용됩니다. 특성의 값은 **text/html**, **text/css**와 같은 MIME 타입이여야 합니다. 이 특성은 **text/css**와 같이 링크된 스타일시트의 타입을 지정하는데 쓰이는것이 보통입니다. 다만 웹에서 사용되는 스타일시트 언어는 CSS가 유일하기에 유형 속성을 생략할 수 있을 뿐 아니라, 권장되고 있습니다. `type` 특성은 브라우저가 지원하는 유형의 파일만 내려받게 하기 위해 `rel="preload"` 링크 유형에서도 사용됩니다.

### 비표준 특성

- `methods` {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : 이 특성의 값은 객체에서 수행될 수 있는 함수에 대한 정보를 제공합니다.
    값은 일반적으로 HTTP 프로토콜이 사용될 때 주어지지만, **title** 특성과 비슷한 이유로 미리 link에 지침 정보를 포함시키는 것이 유용할 수도 있습니다.
    예를 들어, 브라우저는 명시된 메서드의 함수에 따라 링크의 렌더링을 다르게 선택할 수 있습니다. 검색할 수 있는 링크에는 다른 아이콘을 사용한다거나, 외부 링크에는 현재 사이트를 떠난다는 것을 나타내는 아이콘을 사용할 수 있습니다.
    이 특성은 제대로 이해되거나 지원되지 않았습니다. 심지어 정의한 브라우저인 Internet Explorer 4에서도 이 특성을 제대로 지원하지 못합니다.
- `target` {{Deprecated_Inline}}
  - : 정의된 링크 관계가 있거나 링크된 리소스의 렌더링을 표시할 프레임 또는 창 이름을 정의합니다.

### 폐기된 특성

- `charset` {{deprecated_inline}}

  - : 이 특성은 링크된 리소스의 문자 인코딩을 정의합니다.
    이 값은 {{rfc(2045)}}에 정의되어 있는 공백이나 쉼표로 구분된 문자 집합의 목록입니다.
    기본값은 `iso-8859-1` 입니다.

    > [!NOTE]
    > 이 폐기된 특성과 동일한 효과를 구현하려면, 링크된 리소스에서 {{HTTPHeader("Content-Type")}} HTTP 헤더를 사용하십시오.

- `rev` {{deprecated_inline}}

  - : 이 특성의 값은 [`href`](#href) 특성에 정의된 대로 현재 문서와 링크된 문서의 관계를 나타냅니다.
    따라서 이 특성은 `rel` 특성의 값과 비교했을 때 반대되는 관계를 정의합니다.
    `rev` 특성의 [연결 유형 값](/ko/docs/Web/HTML/Attributes/rel)은 [`rel`](#rel)에서 사용 가능한 값들과 유사합니다.

    > **참고:** `rev`를 사용하는 대신, 반대되는 [연결 유형 값](/ko/docs/Web/HTML/Attributes/rel)을 가지는 [`rel`](#rel) 특성을 사용하십시오.
    > 예를 들어, `made`의 역방향 링크를 설정하려면 `author`를 명시해야 합니다. 또한 이 특성은 "리비전(revision)"의 축약어가 아니며, 버전 번호와 함께 사용되어서는 안됩니다. 많은 사이트에서 이런 식으로 오용하고 있습니다.

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

### 다양한 사용 환경에 맞는 아이콘 제공하기

같은 페이지에 여러 개의 서로 다른 아이콘 link들을 포함할 수 있으며, 브라우저는 `rel`과 `sizes` 특성을 통해 특정 환경에 가장 적합한 아이콘을 선택합니다.

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

### 미디어 쿼리를 이용하여 조건에 맞는 리소스 로드하기

미디어 유형이나 쿼리를 `media` 특성 안에 제공할 수 있습니다. 이 리소스는 미디어 조건이 참일 경우에만 로드됩니다.

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="all" />
<link
  href="desktop.css"
  rel="stylesheet"
  media="screen and (min-width: 600px)" />
<link
  href="highres.css"
  rel="stylesheet"
  media="screen and (min-resolution: 300dpi)" />
```

### 스타일 시트 load 이벤트

당신은 load 이벤트를 통해 스타일시트가 언제 로드되는지 확인할수 있습니다. 비슷한 방법으로, 당신은 error 이벤트를 통해 스타일시트를 처리하는 도중 에러가 발생했는지 확인할 수 있습니다.

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

> **참고:** `load` 이벤트는 스타일시트를 포함한 불러온 모든 콘텐츠가 로드되고 분석된 뒤, style이 콘텐츠에 적용 시작되기 직전에 발생합니다.

### Preload 예제

[`rel="preload"`를 이용해 콘텐츠 프리로딩하기](/ko/docs/Web/HTML/Attributes/rel/preload)에서 더 많은 `<link rel="preload">` 예제들을 찾아볼 수 있습니다.

### 리소스를 가져올 때까지 렌더링 차단하기

`blocking` 특성 안에 `render` 토큰을 넣을 수 있습니다. 이렇게 하면 리소스를 가져올 때까지 페이지 렌더링이 차단됩니다.

```html
<link blocking="render" href="critical-font.woff2" as="font" />
```

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
      <th scope="row">포함되는 ARIA 역할</th>
      <td>
        <code>href</code> 특성이 있는 <a href="/ko/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a></td>
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
- [The `integrity` attribute](https://150daysofhtml.com/book/day010/) on 150daysofhtml.com (2021)
