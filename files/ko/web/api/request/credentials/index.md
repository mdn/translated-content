---
title: Request.credentials
slug: Web/API/Request/credentials
---

{{APIRef("Fetch")}}

{{domxref("Request")}} 인터페이스의 **`credentials`** 읽기 전용 속성은 cross-origin 요청의 경우, user agent가 다른 도메인으로부터 cookie 들을 전달해야만 하는가 아닌가를 나타낸다. 이것은 XHR 의 withCredentials flag 과 비슷하지만, (2개가 아니라) 3가지 값이 사용 가능하다 :

- `omit`: 절대로 cookie 들을 전송하거나 받지 않는다.
- `same-origin`: URL이 호출 script 와 동일 출처(same origin)에 있다면, user credentials (cookies, basic http auth 등..)을 전송한다. **이것은 default 값이다.**
- `include`: cross-origin 호출이라 할지라도 언제나 user credentials (cookies, basic http auth 등..)을 전송한다.

## Syntax

```js
var myCred = request.credentials;
```

### Value

이 transaction에 사용할 credentials 를 나타내는 {{domxref("RequestCredentials")}} 값

## Example

다음의 snippet 에서, 우리는 {{domxref("Request.Request()")}} constructor 를 사용하여 (스크립트와 동일한 디렉토리의 이미지 파일을 위한) 새로운 요청(request)를 생성하고, 변수에 요청(request) credentials 을 저장한다.

```js
var myRequest = new Request("flowers.jpg");
var myCred = myRequest.credentials; // returns "same-origin" by default
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [ServiceWorker API](/ko/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ko/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ko/docs/Web/HTTP)
