---
title: Request
slug: Web/API/Request
l10n:
  sourceCommit: 3b22c657f659c249cbe6e4fc6794370a5cb67a72
---

{{APIRef("Fetch API")}}

[Fetch API](/ko/docs/Web/API/Fetch_API)의 **`Request`** 인터페이스는 리소스 요청을 나타냅니다.

새로운 `Request` 객체는 {{domxref("Request.Request", "Request()")}} 생성자로도 생성할 수 있지만, 보통은 서비스 워커의 {{domxref("FetchEvent.request")}}처럼 다른 API 작업의 결과로서 만나게 됩니다.

## 생성자

- {{domxref("Request.Request", "Request()")}}
  - : 새로운 `Request` 객체를 생성합니다.

## 인스턴스 속성

- {{domxref("Request.body")}} {{ReadOnlyInline}}
  - : 본문 내용의 {{domxref("ReadableStream")}}입니다.
- {{domxref("Request.bodyUsed")}} {{ReadOnlyInline}}
  - : 요청의 본문이 사용됐는지 아닌지 나타내는 `true` 또는 `false`입니다.
- {{domxref("Request.cache")}} {{ReadOnlyInline}}
  - : 요청의 캐시 모드(`default`, `reload`, `no-cache` 등)입니다.
- {{domxref("Request.credentials")}} {{ReadOnlyInline}}
  - : 요청의 자격 증명(`omit`, `same-origin`, `include` 등)입니다. 기본 값은 `same-origin`입니다.
- {{domxref("Request.destination")}} {{ReadOnlyInline}}
  - : 요청의 목적지를 묘사하는 문자열을 반환합니다. 요청한 콘텐츠의 유형을 나타내는 문자열입니다.
- {{domxref("Request.headers")}} {{ReadOnlyInline}}
  - : 요청에 연관된 {{domxref("Headers")}} 객체입니다.
- {{domxref("Request.integrity")}} {{ReadOnlyInline}}
  - : 요청의 [하위 리소스 무결성](/ko/docs/Web/Security/Subresource_Integrity) 값(예시: `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`)입니다.
- {{domxref("Request.method")}} {{ReadOnlyInline}}
  - : 요청의 메서드(`GET`, `POST` 등)입니다.
- {{domxref("Request.mode")}} {{ReadOnlyInline}}
  - : 요청의 모드(`cors`, `no-cors`, `same-origin`, `navigate` 등)입니다.
- {{domxref("Request.redirect")}} {{ReadOnlyInline}}
  - : 리다이렉트 처리 방법입니다. `follow`, `error`, `manual` 중 하나입니다.
- {{domxref("Request.referrer")}} {{ReadOnlyInline}}
  - : 요청의 리퍼러(예시: `client`)입니다.
- {{domxref("Request.referrerPolicy")}} {{ReadOnlyInline}}
  - : 요청의 리퍼러 정책(`no-referrer` 등)입니다.
- {{domxref("Request.signal")}} {{ReadOnlyInline}}
  - : 요청에 연관된 {{domxref("AbortSignal")}}을 반환합니다.
- {{domxref("Request.url")}} {{ReadOnlyInline}}
  - : 요청 URL입니다.

## 인스턴스 메서드

- {{domxref("Request.arrayBuffer()")}}
  - : 요청 본문의 {{jsxref("ArrayBuffer")}} 표현으로 이행하는 프로미스를 반환합니다.
- {{domxref("Request.blob()")}}
  - : 요청 본문의 {{domxref("Blob")}} 표현으로 이행하는 프로미스를 반환합니다.
- {{domxref("Request.clone()")}}
  - : `Request` 객체의 복사본을 생성합니다.
- {{domxref("Request.formData()")}}
  - : 요청 본문의 {{domxref("FormData")}} 표현으로 이행하는 프로미스를 반환합니다.
- {{domxref("Request.json()")}}
  - : 요청 본문을 {{jsxref("JSON")}}으로 파싱한 결과로 이행하는 프로미스를 반환합니다.
- {{domxref("Request.text()")}}
  - : 요청 본문의 text 표현으로 이행하는 프로미스를 반환합니다.

> [!NOTE]
> 요청 본문 함수는 오직 한 번만 실행할 수 있습니다. 이후의 호출은 빈 문자열 혹은 빈 `ArrayBuffer`로 이행할 것입니다.

## 예제

다음 코드 조각에서는 `Request()` 생성자로 스크립트와 같은 디렉토리에 위치하는 이미지 파일에 대한 새로운 요청을 생성하고, 해당 요청의 몇몇 속성을 반환합니다.

```js
const request = new Request("https://www.mozilla.org/favicon.ico");

const url = request.url;
const method = request.method;
const credentials = request.credentials;
```

그 다음엔 {{domxref("fetch()")}} 호출의 매개변수에 이 `Request` 객체를 제공하여 이미지를 취득할 수 있습니다.

```js
fetch(request)
  .then((response) => response.blob())
  .then((blob) => {
    image.src = URL.createObjectURL(blob);
  });
```

다음 코드 조각에서는 `Request()` 생성자를 호출할 때, 본문을 바라는 API에 대한 요청을 위해 일부 설정과 본문 데이터를 제공합니다.

```js
const request = new Request("https://example.com", {
  method: "POST",
  body: '{"foo": "bar"}',
});

const url = request.url;
const method = request.method;
const credentials = request.credentials;
const bodyUsed = request.bodyUsed;
```

> [!NOTE]
> 본문은 하나의 {{domxref("Blob")}}, {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, {{jsxref("DataView")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, {{domxref("ReadableStream")}}, {{jsxref("String")}} 객체, 문자열 리터럴 등만 가능하므로 JSON 객체를 본문으로 보내려면 먼저 문자열화해야 합니다.

그 다음엔 {{domxref("fetch()")}} 호출의 매개변수에 이 `Request` 객체를 제공하여 응답을 받을 수 있습니다.

```js
fetch(request)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("API 서버에서 뭔가 잘못됐습니다!");
    }
  })
  .then((response) => {
    console.debug(response);
    // …
  })
  .catch((error) => {
    console.error(error);
  });
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Service Worker API](/ko/docs/Web/API/Service_Worker_API)
- [HTTP 접근 제어 (CORS)](/ko/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ko/docs/Web/HTTP)
