---
title: Access-Control-Allow-Credentials
slug: Web/HTTP/Headers/Access-Control-Allow-Credentials
---

{{HTTPSidebar}}

응답헤더 **`Access-Control-Allow-Credentials`** 는 요청의 자격증명 모드({{domxref("Request.credentials")}})가 "`include`" 일때, 브라우저들이 응답을 프로트엔드 자바스트립트 코드에 노출할지에 대해 알려줍니다.

요청의 자격증명 모드가 ({{domxref("Request.credentials")}})가 "`include`" 일 때, `Access-Control-Allow-Credentials` 값이 `true` 일 경우에만 브라우저들은 프로트엔드 자바스트립트에 응답을 노출 할 것입니다.

자격증명들은 쿠키, authorization 헤더들 또는 TLS 클라이언트 인증서입니다.

사전 요청의 응답으로 사용할 때, 실제 요청에서 자격증명을 이용할 수 있는지에 대해서 알려줍니다. 심플한 {{HTTPMethod("GET")}} 요청은 사전 요청하지 않으므로, 자격증명과 함께 리소스에 대한 요청이 만들어 지고, 응답에서 리소스와 함께 이 헤더가 없다면 브라우저는 응답을 무시하고 웹 콘텐츠가 전달 되지 않습니다.

`Access-Control-Allow-Credentials` 헤더는 {{domxref("XMLHttpRequest.withCredentials")}} 속성이나 Fetch API 생성자의{{domxref("Request.Request()", "Request()")}}의 `credentials` 옵션과 함께 작동합니다. 자격 증명이 있는 CORS 요청의 경우, 브라우저가 프런트엔드 JavaScript 코드에 대한 응답을 노출하기 위해서는 서버(Access-Control-Allow-Credentials 헤더 사용)와 클라이언트(XHR, Fetch 또는 Ajax 요청에 대한 자격 증명 모드를 설정하여)가 자격 증명 포함을 선택하고 있음을 표시해야 합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## 구문

```
Access-Control-Allow-Credentials: true
```

## 디렉티브

- true
  - : 이 해더에 유일하게 유효한 값은 `true`(대소문자 구분)입니다. 자격증명이 필요하지 않으면 값을 `false`로 설정하지 말고 이 해더 전체를 생략하세요.

## 예제

Allow credentials:

```
Access-Control-Allow-Credentials: true
```

Using [XHR](/ko/docs/Web/API/XMLHttpRequest) with credentials:

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/", true);
xhr.withCredentials = true;
xhr.send(null);
```

Using [Fetch](/ko/docs/Web/API/Fetch_API) with credentials:

```js
fetch(url, {
  credentials: "include",
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("XMLHttpRequest.withCredentials")}}
- {{domxref("Request.Request()", "Request()")}}
