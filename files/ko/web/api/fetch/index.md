---
title: fetch() 전역 함수
short-title: fetch()
slug: Web/API/fetch
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("Fetch API")}}

전역 **`fetch()`** 메서드는 네트워크에서 리소스를 취득하는 절차를 시작하고, 응답이 사용 가능해지면 이행하는 프로미스를 반환합니다.

프로미스는 요청에 대한 응답을 나타내는 {{domxref("Response")}} 객체로 이행합니다.

`fetch()` 프로미스는 네트워크 오류(보통 권한 문제 등)가 있을 때만 거부되며, `404` 등의 HTTP 오류 시에는 **거부되지 않습니다**. 그러므로 `then()` 처리기는 반드시 {{domxref("Response.ok")}} 또는 {{domxref("Response.status")}} 속성을 확인해야 합니다.

`fetch()`는 {{domxref("Window")}}와 {{domxref("WorkerGlobalScope")}} 양쪽 모두에서 전역 함수이므로, 리소스를 취득할 상황이 생기는 거의 모든 컨텍스트에서 사용할 수 있습니다.

`fetch()` 메서드는 받아오려는 리소스의 지시어가 아니라, [Content Security Policy](/ko/docs/Web/HTTP/Headers/Content-Security-Policy)의 `connect-src` 지시어의 제어를 받습니다.

> **참고:** `fetch()` 메서드의 매개변수는 {{domxref("Request.Request","Request()")}} 생성자와 동일합니다.

## 구문

```js-nolint
fetch(resource)
fetch(resource, options)
```

### 매개변수

- `resource`

  - : 취득하려는 리소스를 정의합니다. 다음 중 하나입니다.

    - 취득하려는 리소스의 URL을 제공하는 문자열 또는 {{domxref("URL")}}처럼 {{Glossary("stringifier", "문자열 변환자")}}를 포함한 객체.
    - {{domxref("Request")}} 객체.

- `options` {{optional_inline}}

  - : 요청에 적용하고자 하는 사용자 지정 설정을 포함하는 객체입니다. 사용 가능한 설정은 다음과 같습니다.

    - `method`

      - : `GET`, `POST` 등 요청 메서드입니다. 참고로 {{httpheader("Origin")}} 헤더는 {{HTTPMethod("HEAD")}}나 {{HTTPMethod("GET")}} 메서드의 Fetch 요청에는 설정되지 않습니다. (이 동작은 Firefox 65에서 수정되었습니다. [Firefox bug 1508661](https://bugzil.la/1508661)을 참조하세요.) [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110#name-overview)에 정의된 메서드 중 하나와 대소문자 구분 없이 일치하는 문자열은 자동으로 대문자화됩니다. `PATCH`처럼 별도로 정의한 메서드를 사용하려면 직접 대문자로 입력해야 합니다.

    - `headers`

      - : 요청에 추가하고자 하는 헤더들입니다. {{domxref("Headers")}} 객체에 넣어 제공할 수도 있고, {{jsxref("String")}} 값들을 가진 객체 리터럴로 제공해도 됩니다. [어떤 이름들은 금지](/ko/docs/Glossary/Forbidden_header_name)된다는 점을 주의하세요.

        > **참고:** [`Authorization`](/ko/docs/Web/HTTP/Headers/Authorization) HTTP 헤더는 요청에 추가할 수 있지만, 요청이 다른 출처로 리다이렉트되면 제거됩니다.

    - `body`
      - : 요청에 추가하고자 하는 본문입니다. {{domxref("Blob")}}, {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, {{jsxref("DataView")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, 문자열 객체 또는 리터럴, {{domxref("ReadableStream")}} 객체를 사용할 수 있습니다. 제일 마지막은 아직 실험적 기능이므로 [호환성 정보](/ko/docs/Web/API/Request#browser_compatibility)를 먼저 확인해서 사용할 수 있을지 검증하세요. `GET`과 `HEAD` 메서드는 본문을 가질 수 없습니다.
    - `mode`
      - : 이 요청에 사용할 모드, 즉 `cors`, `no-cors`, 또는 `same-origin`입니다.
    - `credentials`

      - : 브라우저가 자격증명([쿠키](/ko/docs/Web/HTTP/Cookies), [HTTP 인증](/ko/docs/Web/HTTP/Authentication) 항목, TLS 클라이언트 인증서)을 어떻게 취급할지 제어합니다. 다음 중 한 문자열이어야 합니다.

        - `omit`
          - : 브라우저가 요청에서 자격증명을 제외하도록 하고, {{HTTPHeader("Set-Cookie")}} 헤더처럼 응답에 포함된 자격증명도 무시하도록 지시합니다.
        - `same-origin`
          - : 브라우저가 동일 출처 URL 요청에 대해서는 자격증명을 보내고, 동일 출처 URL 응답에 포함된 자격증명도 사용하도록 지시합니다. **기본 값입니다.**
        - `include`

          - : 브라우저 동일과 교차 출처 요청 모두에 자격증명을 보내고, 응답 자격증명도 모두 사용하도록 지시합니다.

            > **참고:** 자격증명은 교차 출처에 대한 단순 요청과 "최종" 요청에는 포함될 수 있지만, [CORS 사전 요청](/ko/docs/Web/HTTP/CORS#preflight_requests_and_credentials)에는 포함되어선 안됩니다.

    - `cache`
      - : 요청이 브라우저 [HTTP 캐시](/ko/docs/Web/HTTP/Caching)와 어떻게 상호작용할지 제어합니다. 가능한 값은 `default`, `no-store`, `reload`, `no-cache`, `force-cache`, `only-if-cached` 중 하나고, 각각에 대한 설명은 {{domxref("Request")}} 객체 문서의 {{domxref("Request/cache", "cache")}} 속성에서 확인할 수 있습니다.
    - `redirect`

      - : 리다이렉트 응답 처리법입니다.

        - `follow`: 자동으로 리다이렉트를 따라갑니다. 기본 값입니다.
        - `error`: 리다이렉트 발생 시 오류와 함께 요청을 중단합니다.
        - `manual`: 호출자가 응답을 다른 컨텍스트에서 처리해야 합니다. 자세한 정보는 [WHATWG fetch 표준](https://fetch.spec.whatwg.org/#concept-request-redirect-mode)에서 확인하세요.

    - `referrer`
      - : 요청 리퍼러를 지정하는 문자열입니다. 동일 출처 URL, `about:client`, 빈 문자열 중 하나를 사용할 수 있습니다.
    - `referrerPolicy`
      - : 요청에 사용할 [리퍼러 정책](https://w3c.github.io/webappsec-referrer-policy/#referrer-policies)을 지정합니다. `no-referrer`, `no-referrer-when-downgrade`, `same-origin`, `origin`, `strict-origin`, `origin-when-cross-origin`, `strict-origin-when-cross-origin`, `unsafe-url` 중 하나를 사용할 수 있습니다.
    - `integrity`
      - : 요청의 [하위 리소스 무결성](/ko/docs/Web/Security/Subresource_Integrity)을 지정합니다. (예시: `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`)
    - `keepalive`
      - : 요청이 페이지 수명보다 오래 지속되는 걸 허용합니다. `keepalive` 플래그는 {{domxref("Navigator.sendBeacon()")}} API의 대체제입니다.
    - `signal`
      - : {{domxref("AbortSignal")}} 객체 인스턴스입니다. 취득 요청과 통신하다가 필요한 경우 {{domxref("AbortController")}}를 통해 요청을 중단할 수 있습니다.
    - `priority`
      - : 같은 종류의 취득 요청 중에서 이 요청의 상대적 중요도를 지정합니다. 다음 문자열 중 하나여야 합니다.
        - `high`: 같은 종류의 취득 요청 중 높은 우선순위입니다.
        - `low`: 같은 종류의 취득 요청 중 낮은 우선순위입니다.
        - `auto`: 자동으로 취득 요청의 우선순위를 결정합니다. 기본 값입니다.

### 반환 값

{{domxref("Response")}} 객체로 이행하는 {{jsxref("Promise")}}입니다.

### 예외

- `AbortError` {{domxref("DOMException")}}
  - : 요청이 {{domxref("AbortController")}}에 대한 {{domxref("AbortController.abort", "abort()")}} 메서드에 의해 취소되면 발생합니다.
- {{jsxref("TypeError")}}
  - : 다음 항목들에 의해 발생합니다.

<table>
  <thead>
    <tr>
      <th scope="col">사유</th>
      <th scope="col">실패 예시</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>유효하지 않은 헤더 이름.</td>
      <td>
        <pre>
// 공백 포함: "C ontent-Type"
const headers = {
  'C ontent-Type': 'text/xml',
  'Breaking-Bad': '<3',
};
fetch('https://example.com/', { headers });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        유효하지 않은 헤더 값. 헤더 객체는 정확히 두 요소만 포함해야 합니다.
      </td>
      <td>
        <pre>
const headers = [
  ['Content-Type', 'text/html', 'extra'],
  ['Accept'],
];
fetch('https://example.com/', { headers });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        유효하지 않은 URL이나 스킴, fetch가 지원하지 않는 스킴, 특정 요청 모드에 대해 지원하지 않는 스킴.
      </td>
      <td>
        <pre>
fetch('blob://example.com/', { mode: 'cors' });
        </pre>
      </td>
    </tr>
      <td>URL에 자격증명이 포함됨.</td>
      <td>
        <pre>
fetch('https://user:password@example.com/');
        </pre>
      </td>
    <tr>
      <td>유효하지 않은 리퍼러 URL.</td>
      <td>
        <pre>
fetch('https://example.com/', { referrer: './abc\u0000df' });
        </pre>
      </td>
    </tr>
    <tr>
      <td>유효하지 않은 모드(<code>navigate</code>와 <code>websocket</code>).</td>
      <td>
        <pre>
fetch('https://example.com/', { mode: 'navigate' });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        요청 캐시 모드가 "only-if-cached"인데 요청 모드가 "same-origin"이 아님.
      </td>
      <td>
        <pre>
fetch('https://example.com/', {
  cache: 'only-if-cached',
  mode: 'no-cors',
});
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        요청 메서드가 유효하지 않은 이름 토큰이거나, 금지된 헤더 이름 중 하나
        (<code>'CONNECT'</code>, <code>'TRACE'</code> or <code>'TRACK'</code>).
      </td>
      <td>
        <pre>
fetch('https://example.com/', { method: 'CONNECT' });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        요청 모드가 "no-cors"인데 요청 메서드가 CORS에 적합한 메서드가 아님
        (<code>'GET'</code>, <code>'HEAD'</code>, or <code>'POST'</code>).
      </td>
      <td>
        <pre>
fetch('https://example.com/', {
  method: 'CONNECT',
  mode: 'no-cors',
});
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        요청 메서드가 <code>'GET'</code> 또는 <code>'HEAD'</code>인데 본문이
        <code>null</code>도 <code>undefined</code>도 아님.
      </td>
      <td>
        <pre>
fetch('https://example.com/', {
  method: 'GET',
  body: new FormData(),
});
        </pre>
      </td>
    </tr>
    <tr>
      <td>네트워크 오류.</td>
      <td></td>
    </tr>
  </tbody>
</table>

## 예제

저희의 [취득 요청 예제](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request)([미리보기](https://mdn.github.io/dom-examples/fetch/fetch-request/))에서는 새로운 {{domxref("Request")}} 객체를 생성자로 생성하고, `fetch()` 호출로 취득합니다. 이미지를 취득하고 있으므로, 요청을 올바르게 처리할 수 있도록 {{domxref("Response.blob()")}} 메서드를 호출해 적합한 MIME 유형을 부여하고, 객체 URL을 생성해 {{htmlelement("img")}} 요소로 화면에 그립니다.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태: ${response.status}`);
    }

    return response.blob();
  })
  .then((response) => {
    myImage.src = URL.createObjectURL(response);
  });
```

[설정 제공 취득 예제](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-with-init-then-request/index.html)([미리보기](https://mdn.github.io/dom-examples/fetch/fetch-with-init-then-request/))에서는 똑같이 이미지를 취득하지만, `fetch()` 호출에 설정 객체를 제공하는 점이 다릅니다.

```js
const myImage = document.querySelector("img");

const myHeaders = new Headers();
myHeaders.append("Accept", "image/jpeg");

const myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

const myRequest = new Request("flowers.jpg");

fetch(myRequest, myInit).then((response) => {
  // …
});
```

설정 객체를 `Request` 생성자에 제공해도 같은 결과를 얻을 수 있습니다.

```js
const myRequest = new Request("flowers.jpg", myInit);
```

`headers`에는 객체 리터럴을 사용할 수도 있습니다.

```js
const myInit = {
  method: "GET",
  headers: {
    Accept: "image/jpeg",
  },
  mode: "cors",
  cache: "default",
};

const myRequest = new Request("flowers.jpg", myInit);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Fetch API](/ko/docs/Web/API/Fetch_API)
- [ServiceWorker API](/ko/docs/Web/API/Service_Worker_API)
- [HTTP 접근 제어 (CORS)](/ko/docs/Web/HTTP/CORS)
- [HTTP](/ko/docs/Web/HTTP)
