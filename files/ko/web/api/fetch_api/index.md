---
title: Fetch API
slug: Web/API/Fetch_API
l10n:
  sourceCommit: 0bf8bfec4bc106a38ce9b63aa9ab46b050b3abc0
---

{{DefaultAPISidebar("Fetch API")}}

Fetch API는 네트워크 통신을 포함한 리소스 취득을 위한 인터페이스를 제공하며, {{domxref("XMLHttpRequest")}}보다 강력하고 유연한 대체제입니다.

{{AvailableInWorkers}}

## 개념과 사용법

Fetch API는 {{domxref("Request")}}와 {{domxref("Response")}} 객체, 그리고 기타 네트워크 요청에 관련된 것들을 사용하고, CORS와 HTTP Origin 헤더 행동 등 관련한 개념도 포함하고 있습니다.

요청을 생성하고 리소스를 취득하려면 {{domxref("fetch")}} 메서드를 사용하세요. `fetch()`는 {{domxref("Window")}}와 {{domxref("WorkerGlobalScope", "Worker")}} 컨텍스트 양쪽에서 모두 사용할 수 있는 전역 메서드입니다. 그러므로 리소스를 취득할 상황이 생기는 거의 모든 컨텍스트에서 사용할 수 있습니다.

`fetch()` 메서드는 하나의 필수 매개변수로 가져오려는 리소스 경로를 받습니다. 반환 값은 해당 요청에 대한 {{domxref("Response")}}로 이행하는 {{jsxref("Promise")}}인데, 서버가 헤더를 포함한 응답을 하는 순간 이행합니다. 이는 **서버가 HTTP 오류 응답 코드로 응답해도 이행한다는 뜻**입니다. 선택 사항으로, 두 번째 매개변수에 `init` 옵션 객체를 제공할 수 있습니다({{domxref("Request")}} 를 참고하세요).

{{DOMxRef("Response")}}를 가져온 후에는 본문 콘텐츠의 유형과 처리 방법을 정의할 수 있는 다양한 메서드를 사용할 수 있습니다.

{{domxref("Request.Request", "Request()")}}와 {{domxref("Response.Response", "Response()")}} 생성자를 직접 호출해서 요청과 응답을 생성할 수 있지만, 이런 사용법은 흔치 않습니다. 보통 이 두 객체는 다른 API(예를 들어, 서비스 워커의 {{domxref("FetchEvent.respondWith()")}})에 의해 생성됩니다.

Fetch API가 제공하는 기능의 자세한 정보는 [Fetch 사용하기](/ko/docs/Web/API/Fetch_API/Using_Fetch)에서, 개념 학습은 [Fetch 기본 개념](/ko/docs/conflicting/Web/API/Fetch_API/Using_Fetch_c0ca150deec7d78cb1d4462e8542019b)에서 확인하세요.

## Fetch 인터페이스

- {{domxref("fetch()")}}
  - : 리소스를 취득하기 위한 `fetch()` 메서드입니다.
- {{domxref("Headers")}}
  - : 요청/응답 헤더를 나타냅니다. 헤더를 질의하고 그 결과에 따라 다양한 동작을 취하기 위해 사용할 수 있습니다.
- {{domxref("Request")}}
  - : 리소스 요청을 나타냅니다.
- {{domxref("Response")}}
  - : 요청에 대한 응답을 나타냅니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 관련정보

- [Fetch 사용하기](/ko/docs/Web/API/Fetch_API/Using_Fetch)
- [Service Worker API](/ko/docs/Web/API/Service_Worker_API)
- [HTTP 접근 제어 (CORS)](/ko/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ko/docs/Web/HTTP)
- [Fetch 폴리필](https://github.com/github/fetch)
- [Fetch 기본 개념](/ko/docs/conflicting/Web/API/Fetch_API/Using_Fetch_c0ca150deec7d78cb1d4462e8542019b)
