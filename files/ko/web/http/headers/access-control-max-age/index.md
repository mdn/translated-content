---
title: Access-Control-Max-Age
slug: Web/HTTP/Headers/Access-Control-Max-Age
l10n:
  sourceCommit: 0bab33c90b3808a0c4f0d1aa1e9cd5cb350ce894
---

{{HTTPSidebar}}

**`Access-Control-Max-Age`** 응답 헤더는 {{glossary("preflight request")}} 결과, 즉 {{HTTPHeader("Access-Control-Allow-Methods")}} 과 {{HTTPHeader("Access-Control-Allow-Headers")}} 헤더에 포함된 정보가 캐시될 수 있는 시간을 나타냅니다.

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
  - : 최대로 결과를 캐싱할 수 있는 시간을 초 단위로 나타낸 것으로, 부호 없는 음이 아닌 정수입니다.
    Firefox 의 경우 [최대 24 시간](https://searchfox.org/mozilla-central/source/netwerk/protocol/http/nsCORSListenerProxy.cpp#1207)으로 제한합니다. (86400 초)
    Chromium (v76 이전) 의 경우 [최대 10 분](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=52002151773d8cd9ffc5f557cd7cc880fddcae3e;l=36)으로 제한합니다. (600 초)
    Chromium (v76 이후) 의 경우 [최대 2 시간](https://source.chromium.org/chromium/chromium/src/+/main:services/network/public/cpp/cors/preflight_result.cc;drc=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa;l=31)으로 제한합니다. (7200 초)
    고정값은 5 초 입니다.

## 예제

이 예시는 preflight 요청 결과를 10 분동안 캐싱하는 예제입니다.:

```http
Access-Control-Max-Age: 600
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Methods")}}
