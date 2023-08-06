---
title: "<script>: 스크립트 요소"
slug: Web/HTML/Element/script
---

{{HTMLSidebar}}

**HTML `<script>` 요소**는 데이터와 실행 가능한 코드를 문서에 포함할 때 사용하며 보통 JavaScript 코드와 함께 씁니다. [WebGL](/ko/docs/Web/API/WebGL_API)의 GLSL 셰이더 프로그래밍 언어, [JSON](/ko/docs/Glossary/JSON) 등 다른 언어와도 사용할 수 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#메타데이터_콘텐츠"
          >메타데이터 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td><code>text/javascript</code>와 같은 동적 스크립트.</td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#메타데이터_콘텐츠"
          >메타데이터 콘텐츠</a
        >
        또는
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용한 아무 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >대응하는 역할 없음</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLScriptElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("async")}}

  - : 일반 스크립트에 `async` 속성이 존재하면 HTML 구문 분석 중에도 스크립트를 가져오며, 사용 가능해지는 즉시 평가를 수행합니다.

    [모듈 스크립트](/ko/docs/Web/JavaScript/Guide/Modules)에 `async` 속성이 존재하면 모듈 스크립트와 모든 의존 스크립트를 지연 큐에서 실행하므로 함께 병렬로 불러오며, 이와 동시에 구문 분석을 수행하고 사용 가능해지는 즉시 평가합니다.

    기존 방식은 브라우저가 HTML 분석을 계속하기 전에 스크립트를 불러오고 평가했어야 하므로, `async` 속성을 사용하면 **분석기를 멈추는 JavaScript**를 제거할 수 있습니다. `defer`도 비슷한 효력을 냅니다.

    `async`는 불리언 속성입니다. 속성이 존재하면 참을 나타내고, 속성이 존재하지 않으면 거짓을 나타냅니다.

    [브라우저 호환성](#브라우저_호환성)을 참고하세요.

- {{htmlattrdef("crossorigin")}}
  - : 일반 `script` 요소는 표준 {{glossary("CORS")}}를 통과하지 못했을 때 {{domxref('GlobalEventHandlers.onerror', 'window.onerror')}}에 최소한의 정보만 넘깁니다. `crossorigin` 속성은 정적 미디어에 대해 별도의 도메인을 사용하는 사이트의 오류 기록을 허용하기 위해 사용할 수 있습니다. 유효한 인수에 대한 보다 자세한 설명은 [CORS 설정 속](/ko/docs/Web/HTML/Attributes/crossorigin)성 문서를 참고하세요.
- {{htmlattrdef("defer")}}

  - : 브라우저가 스크립트를 문서 분석 이후에, 그러나 {{event("DOMContentLoaded")}} 발생 이전에 실행해야 함을 나타내는 불리언 속성입니다.

    `defer` 속성을 가진 스크립트는 자신의 평가가 끝나기 전까지 `DOMContentLoaded` 이벤트의 발생을 막습니다.

    > **경고:** `src` 속성이 존재하지 않을 때(인라인 스크립트인 경우 등)에는 아무런 효과도 없으므로 사용해서는 안됩니다.
    >
    > 또한 [모듈 스크립트](/ko/docs/Web/JavaScript/Guide/Modules)는 기본적으로 지연 평가하므로, `defer`를 지정해도 변화가 없습니다.

    `defer` 속성을 가진 스크립트는 문서상의 순서를 따라 실행됩니다.

    기존 방식은 브라우저가 HTML 분석을 계속하기 전에 스크립트를 불러오고 평가했어야 하므로, `defer` 속성을 사용하면 **분석기를 멈추는 JavaScript**를 제거할 수 있습니다. `async`도 비슷한 효과를 가집니다.

- {{htmlattrdef("integrity")}}
  - : {{glossary("user agent", "사용자 에이전트")}}가 가져온 리소스에 예기치 못한 변형이 존재하는지 검사할 때 사용할 인라인 메타데이터입니다. [하위 리소스 무결성](/ko/docs/Web/Security/Subresource_Integrity) 문서를 참고하세요.
- {{htmlattrdef("nomodule")}}

  - : [ES2015 모듈](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)을 지원하는 브라우저에서는 실행하지 않을 스크립트임을 나타내는 불리언 특성입니다. 모듈화 JavaScript를 지원하지 않는 오래된 브라우저가 사용할 대체 스크립트에 사용할 수 있습니다.

- {{htmlattrdef("nonce")}}
  - : [`script-src` `Content-Security-Policy`](/ko/docs/Web/HTTP/Headers/Content-Security-Policy/script-src)의 화이트리스트에 스크립트를 등록하기 위한, 암호화된 일회용 숫자(논스, nonce)입니다. 서버는 고유한 일회용 숫자값을 정책을 전송할 때마다 생성해야 합니다. 자원의 정책을 우회할 수 없도록, 추측할 수 없는 임시값을 제공하는 것이 중요합니다.
- {{htmlattrdef("referrerpolicy")}}

  - : 스크립트를 가져올 때, 또는 스크립트가 다른 리소스를 가져올 때 전송할 [리퍼러](/ko/docs/Web/API/Document/referrer)를 나타냅니다.

    - `no-referrer`: {{HTTPHeader("Referer")}} 헤더를 전송하지 않습니다.
    - `no-referrer-when-downgrade` (기본값): {{glossary("TLS")}}({{glossary("HTTPS")}}) 지원을 하지 않는 {{glossary("origin", "출처")}}에 대해서는 {{HTTPHeader("Referer")}} 헤더를 전송하지 않습니다.
    - `origin`: `Referer` 헤더가 요청 출처({{glossary("protocol", "스킴")}}, {{glossary("host", "호스트")}}, {{glossary("port", "포트")}})를 포함합니다.
    - `origin-when-cross-origin`: [동일 출처](/ko/docs/Web/Security/Same-origin_policy) 요청에는 매개변수를 제거한 전체 URL을 전송합니다. 교차 출처 요청에는 출처만 전송합니다.
    - `same-origin`: 동일 출처 요청에는 매개변수를 제거한 전체 URL을 전송합니다. 교차 출처 요청에는 아무 레퍼러 정보도 보내지 않습니다.
    - `strict-origin`: 목적지가 현재 문서와 동일하거나 더 높은(HTTP(S)→HTTPS) 보안 수준을 가진 경우 출처를 전송하고, 더 취약(HTTPS→HTTP)한 경우 전송하지 않습니다.
    - `strict-origin-when-cross-origin`: 동일 출처 요청에는 매개변수를 제거한 전체 URL을 전송합니다. 목적지가 현재 문서와 동일하거나 더 높은 보안 수준(HTTP(S)→HTTPS)을 가진 경우 자신의 출처를 전송합니다. 그 외의 경우 아무 레퍼러 정보도 보내지 않습니다.
    - `unsafe-url`: 동일 출처와 교차 출처 요청 모두에 대해서 전체 URL을 전송합니다. TLS로 보호하는 리소스에서 안전하지 않은 출처에 경로까지 노출하므로 **안전하지 않습니다**.

    > **참고:** 빈 문자열 값(`""`)은 기본값이자 `referrerpolicy` 특성을 지원하지 않는 경우 사용하는 대체값입니다. `referrerpolicy`를 `<script>` 요소에 명시하지 않은 경우 더 상위 단계의 정책, 즉 문서 자체나 도메인의 정책을 따라갑니다. 상위 단계 정책도 사용할 수 없을 땐 빈 문자열을 `no-referrer-when-downgrade`로 간주합니다.

- {{htmlattrdef("src")}}
  - : 외부 스크립트를 가리키는 {{glossary("URI")}}입니다. 문서 내에 스크립트를 직접 삽입하는 것 대신 사용할 수 있습니다.
- {{htmlattrdef("type")}}

  - : 스크립트의 유형을 나타냅니다. 다음 다섯개의 범주 중 하나에 속할 수 있습니다.

    - **생략 또는 JavaScript MIME 유형:** 스크립트가 JavaScript임을 나타냅니다. 이 경우, HTML5 명세는 웹 작성자가 불필요한 `type`을 포함하지 않고 완전히 제외할 것을 촉구합니다. 보다 오래된 브라우저에서는 `type` 특성의 값으로 삽입 혹은 (`src` 특성으로) 불러온 스크립트의 언어를 표시하곤 했습니다. JavaScript MIME 유형은 [명세에 나열](/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types#JavaScript_types)되어 있습니다.
    - **`module`:** 스크립트를 JavaScript 모듈로 간주합니다. 스크립트 콘텐츠 처리가 `charset`과 `defer` 특성의 영향을 받지 않습니다. `module`의 더 자세한 사용법은 MDN의 [JavaScript 모듈 안내서](/ko/docs/Web/JavaScript/Guide/Modules)를 참고하세요. 기존 스크립트와 달리, 모듈 스크립트는 교차 출처 가져오기 시 CORS 프로토콜을 사용해야 합니다.
    - **다른 모든 값:** 내장 콘텐츠를 브라우저가 처리하지 않을 데이터 블록으로 간주합니다. 개발자는 반드시 유효하면서 JavaScript가 아닌 MIME 유형을 지정해야 합니다. `src` 특성을 무시합니다.

### Deprecated attributes

- {{htmlattrdef("charset")}} {{Deprecated_inline}}
  - : If present, its value must be an ASCII case-insensitive match for "`utf-8`". It's unnecessary to specify the `charset` attribute, because documents must use UTF-8, and the `script` element inherits its character encoding from the document.
- {{htmlattrdef("language")}} {{Deprecated_inline}}
  - : Like the `type` attribute, this attribute identifies the scripting language in use. Unlike the `type` attribute, however, this attribute's possible values were never standardized. The `type` attribute should be used instead.

## 참고

브라우저가 구문 분석을 진행하다 인라인 스크립트 또는 [`async`](/ko/docs/Web/HTML/Element/script#async), [`defer`](/ko/docs/Web/HTML/Element/script#defer), `type="module"` 특성이 없는 스크립트에 도달하면 스크립트를 가져온 후 실행하기 전까지 분석을 중단합니다.

스크립트는 `text/javascript` MIME 유형을 설정해야 하나, 브라우저는 관대한 규칙을 적용하여 이미지 형태(`image/*`), 비디오 형태(`video/*`), 오디오 형태(`audio/*`), `text/csv` 형태로 스크립트를 불러오려는 경우만 차단하고 나머지는 허용합니다. 스크립트를 차단한 경우 {{event("load")}} 대신 {{event("error")}} 이벤트를 요소에 전송합니다.

## 예제

### 기본

다음 예제는 `<script>` 요소를 사용해 외부 스크립트를 가져오는 법을 보입니다.

```html
<script src="javascript.js"></script>
```

그리고 아래 코드는 `<script>` 요소 내부에 인라인 스크립트를 작성하는 예시입니다.

```html
<script>
  alert("Hello World!");
</script>
```

### 모듈 대체 스크립트

[`type`](/ko/docs/Web/HTML/Element/script#type) 특성이 `module`을 지원하는 브라우저는 `nomodule` 특성을 가진 모든 `<script>`를 무시합니다. 그러므로 모듈 스크립트를 사용하면서도, 미지원 브라우저를 위한 대체 스크립트를 `nomodule`로 표시해 제공할 수 있습니다.

```js
<script type="module" src="main.mjs"></script>
<script nomodule src="fallback.js"></script>
```

### HTML에 데이터 삽입하기

\<script> 요소와 JavaScript 외의 유효한 MIME 유형을 사용하면 서버사이드 렌더링을 통해 HTML에 데이터를 삽입할 수 있습니다.

```html
<!-- Generated by the server -->
<script id="data" type="application/json">
  {
    "userId": 1234,
    "userName": "John Doe",
    "memberSince": "2000-01-01T00:00:00.000Z"
  }
</script>

<!-- Static -->
<script>
  const userInfo = JSON.parse(document.getElementById("data").text);
  console.log("User information: %o", userInfo);
</script>
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("document.currentScript")}}
- [Ryan Grove의 `<script>`와 `<link>` 노드 이벤트 호환성 차트](https://pie.gd/test/script-link-events/)
