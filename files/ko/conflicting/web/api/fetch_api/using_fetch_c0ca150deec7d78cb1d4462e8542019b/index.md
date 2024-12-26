---
title: Fetch 기본 개념
slug: conflicting/Web/API/Fetch_API/Using_Fetch_c0ca150deec7d78cb1d4462e8542019b
original_slug: Web/API/Fetch_API/Basic_concepts
l10n:
  sourceCommit: c88a329069328522a5c20c054f9dbced9967dbd4
---

{{DefaultAPISidebar("Fetch API")}}

[Fetch API](/ko/docs/Web/API/Fetch_API)는 네트워크 통신을 포함한 리소스 취득을 위한 인터페이스가 정의되어 있습니다. {{domxref("XMLHttpRequest")}}와 같은 비슷한 API가 존재합니다만, 새로운 Fetch API는 좀더 강력하고 유연한 조작이 가능합니다. 이 글에서는 Fetch API의 기본 개념을 설명합니다.

> [!NOTE]
> 이 문서는 수시로 갱신됩니다. 더 자세한 설명이 필요하다고 생각하시는 Fetch 개념이 있으시면 [MDN Web Docs 채팅](/ko/docs/MDN/Community/Communication_channels#채팅)에서 문의해 주세요.

## 훑어보기

Fetch의 핵심은 HTTP {{domxref("Request")}}, {{domxref("Response")}}, {{domxref("Headers")}}를 추상화하는 인터페이스와, 비동기적 리소스 요청을 시작하기 위한 {{domxref("fetch()")}} 메서드입니다. HTTP의 주요 구성요소들이 JavaScript 객체로 추상화됐기 때문에, 다른 API들에서도 이 기능들을 활용하기 용이합니다.

[서비스 워커](/ko/docs/Web/API/Service_Worker_API)가 Fetch를 적극 활용하는 API의 일례입니다.

Fetch는 이러한 HTTP 요청의 비동기적인 특성을 한 단계 더 발전시켜, 모든 API가 {{jsxref("Promise")}}에 기반합니다.

## 가드

가드는 {{domxref("Headers")}} 객체의 기능으로, 헤더가 사용하고 있는 장소에 따라 `immutable`, `request`, `request-no-cors`, `response`, `none`의 값을 사용할 수 있습니다.

새로운 {{domxref("Headers")}} 객체는 {{domxref("Headers.Headers","Headers()")}} {{glossary("constructor", "생성자")}}로 생성되면 그 가드는 `none`(기본 값)으로 설정됩니다. {{domxref("Request")}} 또는 {{domxref("Response")}} 객체가 생성되면 관계된 {{domxref("Headers")}} 객체를 가지는데, 그 가드는 다음과 같습니다.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">새로운 객체의 타입</th>
      <th scope="col">생성자</th>
      <th scope="col">관계된 {{domxref("Headers")}} 객체의 가드 설정</th>
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

헤더 가드는 헤더의 콘텐츠를 변경하는 {{domxref("Headers.set","set()")}}, {{domxref("Headers.delete","delete()")}}, {{domxref("Headers.append","append()")}} 메서드에 영향을 끼칩니다. 가드는 `immutable`의 {{domxref("Headers")}}를 수정하려고 한 경우, `TypeError` 를 반환합니다. 예외의 경우도 있는데 다음과 같은 상황에서는 동작합니다.

- 가드가 `request` 에서 헤더의 이름이 {{Glossary("forbidden header name")}} 가 아닌 경우
- 가드가 `request-no-cors` 에서 헤더의 `name` 또는 `value` 값이 {{Glossary("simple header")}} 인 경우
- 가드가 `response` 며 헤더의 이름이 {{Glossary("forbidden response header name")}} 가 아닌 경우
