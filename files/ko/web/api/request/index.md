---
title: Request
slug: Web/API/Request
---
{{APIRef("Fetch")}}

[Fetch API](/ko/docs/Web/API/Fetch_API)의 **`Request`** 는 리퀘스트 리소스를 표현해주는 인터페이스입니다.

{{domxref("Request.Request()")}} 생성자 메서드를 사용하는 것으로, 새로운 `Request`오브젝트를 생성할 수 있습니다. 이 인터페이스는 그리 자주 사용되지 않는 것으로 service worker의 {{domxref("FetchEvent.request")}}와 같은 별개의 API와 만나는 경우가 더 잦을 것입니다.

## 생성자

- {{domxref("Request.Request()")}}
  - : 새로운 `Request` 객체를 생성합니다.

## 프로퍼티

- {{domxref("Request.method")}} {{readonlyInline}}
  - : Request 메서드 (`GET`, `POST` 같은것들)을 포함합니다.
- {{domxref("Request.url")}} {{readonlyInline}}
  - : Request의 URL을 포함합니다.
- {{domxref("Request.headers")}} {{readonlyInline}}
  - : Request의 {{domxref("Headers")}}와 관련된 정보를 포함하고 있습니다.
- {{domxref("Request.context")}} {{readonlyInline}} {{deprecated_inline()}}
  - : 리퀘스트의 컨텍스트 (예: `audio`, `image`, `iframe`)을 포함하고 잇습니다.
- {{domxref("Request.referrer")}} {{readonlyInline}}
  - : 리퀘스트의 referrer 정보 (예:`client`)을 포함하고 있습니다.
- {{domxref("Request.referrerPolicy")}} {{readonlyInline}}
  - : Request의 referrer policy 정보 (예: `no-referrer`)를 포함하고 있습니다.
- {{domxref("Request.mode")}} {{readonlyInline}}
  - : Request의 모드를 (예: `cors`, `no-cors`, `same-origin`, `navigate`) 포함하고 있습니다.
- {{domxref("Request.credentials")}} {{readonlyInline}}
  - : Request의 자격 증명서(credentials) (예: `omit`, `same-origin`)를 포함하고 있습니다.
- {{domxref("Request.redirect")}} {{readonlyinline}}
  - : Request의 처리 방법을 위한 모드 (예: `follow`, `error`, or `manual`)를 포함합니다.
- {{domxref("Request.integrity")}} {{readonlyInline}}
  - : 리퀘스트의 [subresource integrity](/ko/docs/Web/Security/Subresource_Integrity) 해쉬값(예:`sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`)을 포함합니다.
- {{domxref("Request.cache")}} {{readonlyInline}}
  - : Request의 캐시모드를 (예: `default`, `reload`, `no-cache`) 포함합니다.

`Request`는 {{domxref("Body")}}를 구현하고 있으므로 다음 프로퍼티 또한 사용 가능합니다.

- {{domxref("Body.body")}} {{readonlyInline}}
  - : {{domxref("ReadableStream")}}을 바디 컨텐츠로 가져올 수 있는 간단한 게터 프로퍼티입니다.
- {{domxref("Body.bodyUsed")}} {{readonlyInline}}
  - : Response에서 바디가 사용되었는가의 여부를 {{domxref("Boolean")}} 형태로 표시합니다.

## 메서드

- {{domxref("Request.clone()")}}
  - : `Request`의 복사본을 생성합니다.

`Request`는 {{domxref("Body")}}를 구현하고 있으므로 다음 프로퍼티 또한 사용 가능합니다.

- {{domxref("Body.arrayBuffer()")}}
  - : {{domxref("ArrayBuffer")}}에 대한 결정(resolve 상태인 Promise객체가 반환됩니다.
- {{domxref("Body.blob()")}}
  - : {{domxref("Blob")}}에 대한 결정(resolve 상태인 Promise객체가 반환됩니다.
- {{domxref("Body.formData()")}}
  - : {{domxref("FormData")}}에 대한 결정(resolve 상태인 Promise객체가 반환됩니다.
- {{domxref("Body.json()")}}
  - : {{domxref("JSON")}}에 대한 결정(resolve 상태인 Promise객체가 반환됩니다.
- {{domxref("Body.text()")}}
  - : {{domxref("USVString")}}에 대한 결정(resolve 상태인 Promise객체가 반환됩니다.

> **참고:** {{domxref("Body")}} 함수는 한번밖에 실행할 수 없습니다.
>
> 두번째부터는 빈 문자열, 혹은 ArrayBuffer이 반환됩니다.

## 예시

다음의 예시들은 Request를 이용해 스크립트와 같은 디렉터리에 존재하는 사진의 여러가지 정보를 불러오는 방법입니다. `Request()` 생성자를 사용하여 새로운 Request를 생성하여 몇몇 몇 프로퍼티를 반환합니다.

```js
const myRequest = new Request('http://localhost/flowers.jpg');

const myURL = myRequest.url; // http://localhost/flowers.jpg
const myMethod = myRequest.method; // GET
const myCred = myRequest.credentials; // omit
```

{{domxref("GlobalFetch.fetch()")}}의 매개변수에 Request 객체를 전달하는것으로 then 파라미터를 이끌어낼 수 있습니다. 아래는 그에대한 예시입니다.

```js
fetch(myRequest)
  .then(response => response.blob())
  .then(blob => {
    myImage.src = URL.createObjectURL(blob);
  });
```

아래는 Body Payload가 필요한 API 요청을 다루는 예시입니다. Request() 생성자를 사용하여 초기 데이터 및 본문 내용이 포함 된새 요청을 만듭니다.

아래는 Body Payload가 필요한 API 요청을 다루는 예시입니다. Request() 생성자를 사용하여 초기 데이터와 Body의 컨텐츠를 읽어올 수 있습니다.

```js
const myRequest = new Request('http://localhost/api', {method: 'POST', body: '{"foo":"bar"}'});

const myURL = myRequest.url; // http://localhost/api
const myMethod = myRequest.method; // POST
const myCred = myRequest.credentials; // omit
const bodyUsed = myRequest.bodyUsed; // true
```

> **참고:** Body의 타입은 {{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, {{domxref("USVString")}} 혹은 {{domxref("ReadableStream")}}로만 올 수 있습니다. 따라서 payload에 JSON객체를 추가하려면 해당 객체를 문자열로 지정할 수 있습니다.

그런 다음 Request 객체를 매개 변수로 {{domxref("GlobalFetch.fetch()")}} 호출에 전달하여 api 요청을 가져와 응답을 얻을 수 있습니다. 아래는 예시입니다.

```js
fetch(myRequest)
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response => {
    console.debug(response);
    // ...
  }).catch(error => {
    console.error(error);
  });
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 관련항목

- [ServiceWorker API](/ko/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ko/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ko/docs/Web/HTTP)
