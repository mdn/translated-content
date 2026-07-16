---
title: "Response: Response() constructor"
short-title: Response()
slug: Web/API/Response/Response
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

**`Response()`** 생성자는 새로운 {{domxref("Response")}} 객체를 생성합니다.

## 구문

```js-nolint
new Response()
new Response(body)
new Response(body, options)
```

### 매개변수

- `body` {{optional_inline}}
  - : 응답의 본문을 정의하는 객체입니다.
    기본값은 `null`이며, 다음 중 하나일 수 있습니다.
    - {{domxref("Blob")}}
    - {{jsxref("ArrayBuffer")}}
    - {{jsxref("TypedArray")}}
    - {{jsxref("DataView")}}
    - {{domxref("FormData")}}
    - {{domxref("ReadableStream")}}
    - {{domxref("URLSearchParams")}}
    - {{jsxref("String")}}
    - 문자열 리터럴

- `options` {{optional_inline}}
  - : 응답에 적용할 사용자 정의 설정을 포함하는 옵션 객체이거나, 빈 객체(기본값)입니다. 가능한 옵션은 다음과 같습니다.
    - `status`
      - : 응답의 상태 코드입니다.
        기본값은 `200`입니다.
    - `statusText`
      - : 상태 코드와 관련된 상태 메시지로, 예를 들어 `"OK"`와 같습니다.
        기본값은 `""`입니다.
    - `headers`
      - : 응답에 추가할 헤더를 정의합니다. {{domxref("Headers")}} 객체이거나, {{jsxref("String")}} 키/값 쌍의 객체 리터럴일 수 있습니다. [HTTP 헤더](/ko/docs/Web/HTTP/Reference/Headers) 문서를 참조하세요.
        기본값은 비어 있습니다.

## 예제

[Fetch Response 예제](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) ([Fetch Response 실시간 보기](https://mdn.github.io/dom-examples/fetch/fetch-response/))에서는 생성자를 사용해 새로운 `Response` 객체를 생성합니다. 이때 본문으로 새 {{domxref("Blob")}} 을 전달하고, 사용자 지정 `status`와 `statusText`를 포함한 초기화 객체를 함께 전달합니다.

```js
const myBlob = new Blob();
const myOptions = { status: 200, statusText: "SuperSmashingGreat!" };
const myResponse = new Response(myBlob, myOptions);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [ServiceWorker API](/ko/docs/Web/API/Service_Worker_API)
- [교차 출처 리소스 공유 (CORS)](/ko/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ko/docs/Web/HTTP)
