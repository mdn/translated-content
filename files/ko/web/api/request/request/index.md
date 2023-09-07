---
title: Request()
slug: Web/API/Request/Request
---

{{APIRef("Fetch")}}

**`Request()`** 생성자는 새로운 {{domxref("Request")}} 객체를 생성하도록 도와줍니다.

## 문법

```js
var myRequest = new Request(input, init);
```

### 파라미터

- _input_
  - : 취득한 리소스를 정의합니다. 이하의 값을 파라미터로 넣을 수 있습니다.\* 취득하고 싶은 리소스의 URL을 담은 {domxref("USVString")}}.
    - Request 객체의 클론 생성을 위해 입력할 {{domxref("Request")}} 객체. 기존의 request 객체로 새로운 동일한 객체를 생성할때, 다음과 같은 보안에 관련된 예외가 검출될 수 있습니다.
- _init_ {{optional_inline}}
  - : 리퀘스트를 적용할 커스텀 설정을 포함한 옵션오브젝트. 설정 가능한 옵션은 다음과 같습니다.\* `method`: `GET`, `POST`과 같은 리퀘스트 메소드.
    - `headers`: {{domxref("Headers")}}객체 또는 {{domxref("ByteString")}}를 포함하는 리퀘스트에 추가하는 헤더.
    - `body`: 리퀘스트에 추가할 바디. {{domxref("Blob")}}이나, {{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, {{domxref("USVString")}}, 또한 {{domxref("ReadableStream")}} 객체를 사용할 수 있습니다.Request객체가 GET이나 HEAD메서드를 사용하는 경우, 바디를 포함하지 않습니다.
    - `mode`: Request에서 사용할 모드. `cors`, `no-cors`, `same-origin`, 또한 `navigate`이 사용 가능하며, 기본값은 `cors`입니다. 47버전 이전의 크롬에서는 기본값이 `no-cors` 이며 크롬 47버전 이후로 `same-origin`가 사용 가능하게 되었습니다.
    - `credentials`: Request에서 사용할 자격 증명서(Request Credential)입니다.`omit`, `same-origin`, 또는 `include`를 사용할 수 있습니다.기본값은 `omit`.이며, 크롬 47 이전의 기본값은 `same-origin` 입니다. 크롬 47 이후로부터`include`가 사용 가능하게 되었습니다.
    - `cache`: Request에서 사용할 [cache mode](/ko/docs/Web/API/Request/cache) 입니다.
    - `redirect`: Request에서 사용할 리다이렉트 모드입니다. `follow`, `error`, `manual`.이 사용 가능합니다. 크롬 47 이전 버전에서의 기본값은 `manual` 이며, 47 이후로부터 `follow` 가 사용 가능하게 되었습니다.
    - `referrer`: `no-referrer`나 `client`, URL을 지정하는 {{domxref("USVString")}}입니다.. 기본값은 `client`입니다.
    - `integrity`: `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`같은 Request의 하위 리소스 무결성([subresource integrity](/ko/docs/Web/Security/Subresource_Integrity)) 값을 포함합니다.

## 에러

| **타입**    | **내용**                                                                                                                                                             |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TypeError` | [Firefox 43](/ko/docs/Mozilla/Firefox/Releases/43)부터, `http://user:password@example.com` 와 같인 credential을 포함하는 경우 `Request()` 는 타입 에러를 반환합니다. |

## 예시

[Fetch Request example](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-request)에서는, 생성자를 사용해 새로운 Requst 객체를 생성하고 나서 {{domxref("GlobalFetch.fetch")}}인터페이스를 이용해 Request로 읽어온 결과를 취득하고 있습니다. 특정 사진을 가져와서 사용할 수 있게 만들기 위해서 MIME타입을 설정하고, Response의 {{domxref("Body.blob")}}를 반환합니다. 그 후로 오브젝트 URL을 생성해 {{htmlelement("img")}}요소를 표시하도록 합니다. [Fetch Request live](http://mdn.github.io/fetch-examples/fetch-request/)를 참고해주시기 바랍니다.

```js
var myImage = document.querySelector("img");

var myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then(function (response) {
    return response.blob();
  })
  .then(function (response) {
    var objectURL = URL.createObjectURL(response);
    myImage.src = objectURL;
  });
```

[Fetch Request with init example](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-request-with-init)에서는 fetch()를 실행할 때 마다, init객체를 전달하는 것 이외에는 거의 동일한 기능을 수행합니다. [Fetch Request init live](http://mdn.github.io/fetch-examples/fetch-request-with-init/) 를 참조해주시기 바랍니다.

```js
var myImage = document.querySelector('img');

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

var myInit = { method: 'GET',
                headers: myHeaders,
                mode: 'cors',
                cache: 'default' };

var myRequest = new Request('flowers.jpg',myInit);

fetch(myRequest).then(function(response) {
  ...
});
```

동일한 효과를 얻기 위해 fetch 호출자에 init객체를 전달하는 것에 주목해주시기 바랍니다. 예를 들면...

```js
fetch(myRequest,myInit).then(function(response) {
  ...
});
```

Request 객체ㅡ이 클론을 생성하기 위해서 `Request()` 생성자에 {{domxref("Request")}} 를 전달하고 있습니다.（이것은 {{domxref("Request.clone","clone()")}} 메서드의 호출자와 같습니다.）

```js
var copy = new Request(myRequest);
```

> **참고**：마지막의 예시는 [ServiceWorkers](/ko/docs/Web/API/ServiceWorker_API)안에서만 사용 가능합니다。

## 명세서

{{Specifications}}

## 브라우저 지원현황

{{Compat}}

## 관련항목

- [ServiceWorker API](/ko/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ko/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ko/docs/Web/HTTP)
