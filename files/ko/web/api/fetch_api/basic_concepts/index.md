---
title: Fetch basic concepts
slug: Web/API/Fetch_API/Basic_concepts
---

{{DefaultAPISidebar("Fetch API")}}

[Fetch](/ko/docs/Web/API/Fetch_API) 는 네트워크 통신을 포함한 리소스를 가지고 오기 위한 인터페이스를 제공해주는 보다 새로운 API입니다. [XMLHttpRequest](/ko/docs/Web/API/XMLHttpRequest) 와 기능은 같지만 확장 가능하며 효과적으로 구성되어 있습니다. 이 문서에서는 Fetch API의 기본 컨셉들중 일부를 소개합니다.

> **참고:** 이 문서는 수시로 갱신됩니다 。보다 나은 설명이 필요한 Fetch 컨셉트를 발견한 경우에는、[MDN 디스커션 포럼](https://discourse.mozilla-community.org/c/mdn)이나 [Mozilla IRC](https://wiki.mozilla.org/IRC)(#mdn room)에 연락주시기 바랍니다.

## 개념

Fetch의 핵심은 인터페이스의 추상화입니다. HTTP {{domxref("Request")}}, {{domxref("Response")}}, {{domxref("Headers")}}, {{domxref("Body")}}의 Payload, 그리고 비동기 리소스 Request의 초기화를 위한{{domxref("GlobalFetch.fetch","global fetch")}}메서드가 이 대상입니다. HTTP의 주요 컴포넌트가 자바스크립트 오브젝트로써 추상화되어있기 때문에 다른 API에서 이러한 기능들을 사용하기 쉽게 해줍니다.

[Service Worker](/ko/docs/Web/API/ServiceWorker_API)는 Fetch를 사용하는 API의 일례입니다.

Fetch는 이러한 Request의 비동기적인 성질을 한걸음 진화시킨 {{jsxref("Promise")}} 베이스의 API입니다.

## 가드

가드는 {{domxref("Headers")}} 객체의 기능으로, 헤더가 사용하고 있는 장소에 알맞게 `immutable`, `request`, `request-no-cors`, `response`, `none`값을 얻습니다.

{{domxref("Headers.Headers","Headers()")}}의 {{glossary("constructor")}}를 사용하고 있는 새로운 {{domxref("Headers")}}객체가 생성될 때, 가드는 기본 설정일때 `none`에 위치됩니다. {{domxref("Request")}}객체나 {{domxref("Response")}}객체가 생성되었을 때, 관계지어진 {{domxref("Headers")}}객체의 가드는 아래의 명세와 같이 설정되어 있습니다.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">새로운 객체형</th>
      <th scope="col">생성자</th>
      <th scope="col">관계한{{domxref("Headers")}} 객체 가드의 설정</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">{{domxref("Request")}}</td>
      <td>{{domxref("Request.Request","Request()")}}</td>
      <td><code>request</code></td>
    </tr>
    <tr>
      <td>
        <code>no-cors의</code> {{domxref("Request.mode","mode")}}를
        설정한 {{domxref("Request.Request","Request()")}}
      </td>
      <td><code>request-no-cors</code></td>
    </tr>
    <tr>
      <td rowspan="2">{{domxref("Response")}}</td>
      <td>{{domxref("Response.Response","Response()")}}</td>
      <td><code>response</code></td>
    </tr>
    <tr>
      <td>
        {{domxref("Response.error","error()")}}메서드나
        {{domxref("Response.redirect","redirect()")}} 메서드
      </td>
      <td><code>immutable</code></td>
    </tr>
  </tbody>
</table>

헤더 가드는 헤더의 콘텐츠를 변경하는 {{domxref("Headers.set","set()")}}, {{domxref("Headers.delete","delete()")}}, {{domxref("Headers.append","append()")}} 메서드에 영향을 끼칩니다.가드는 `immutable`의 {{domxref("Headers")}}를 수정하려고 한 경우, `TypeError` 를 반환합니다. 예외의 경우도 있는데 다음과 같은 상황에서는 동작합니다.

- 가드가 `request` 에서 헤더의 이름이 {{Glossary("forbidden header name")}} 가 아닌 경우
- 가드가 `request-no-cors` 에서 헤더의 `name` 또는 `value` 값이 {{Glossary("simple header")}} 인 경우
- 가드가 `response` 며 헤더의 이름이 {{Glossary("forbidden response header name")}} 가 아닌 경우
