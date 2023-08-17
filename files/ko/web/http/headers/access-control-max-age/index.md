---
title: Access-Control-Max-Age
slug: Web/HTTP/Headers/Access-Control-Max-Age
page-type: http-header
browser-compat: http.headers.Access-Control-Max-Age
---

{{HTTPSidebar}}

**`Access-Control-Max-Age`** 응답 헤더는 {{glossary("preflight request")}} 요청결과, 즉 {{HTTPHeader("Access-Control-Allow-Methods")}} 과 {{HTTPHeader("Access-Control-Allow-Headers")}} 헤더에 포함된 정보가 캐싱 될 수 있는 시간을 나타냅니다.

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

```http
Access-Control-Max-Age: <delta-seconds>
```

## 지시자

- \<delta-seconds>
  - : 결과를 캐싱할 수 있는 최대 시간은 초(절댓값) 단위로 나타냅니다.
    Firefox 의 경우 [최대 24 시간](https://searchfox.org/mozilla-central/source/netwerk/protocol/http/nsCORSListenerProxy.cpp#1207) (86400 초) 입니다.
    Chromium (v76 이전) 의 경우 [최대 10 분](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=52002151773d8cd9ffc5f557cd7cc880fddcae3e;l=36) (600 초) 입니다.
    Chromium (v76 이후) 의 경우 [최대 2 시간](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa;l=31) (7200 초) 입니다.
    고정값은 5 초 입니다.

## 예제

이 예시는 preflight 요청 결과를 10 분동안 캐싱하는 예제입니다.:

```http
Access-Control-Max-Age: 600
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
