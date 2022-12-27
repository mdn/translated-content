---
title: Fetch API
slug: Web/API/Fetch_API
---

{{DefaultAPISidebar("Fetch API")}}

**Fetch API**는 네트워크 통신을 포함한 리소스 취득을 위한 인터페이스가 정의되어 있습니다. {{domxref("XMLHttpRequest")}}와 같은 비슷한 API가 존재합니다만, 새로운 Fetch API는 좀더 강력하고 유연한 조작이 가능합니다.

## 기본 개념과 사용 방법

Fetch에는 일반적인 오브젝트로로 {{domxref("Request")}} 와 {{domxref("Response")}}가 포함되어 있습니다. 이것들은 service worker이나 Cache API같이 Response와 Request객체를 다루는 API나 독자적으로 리스폰스를 발생시키는 경우에도 사용 가능합니다.

또한 CORS나 HTTP 오리진 헤더의 행동에 관련한 개념에 대해서도 정의되어 있습니다. 이 정의는 여러곳에 분산되어있는 갖가지 행동에대한 정의들을 한곳에 고쳐 쓴 것입니다.

Fetch API로 리소스를 취득하기 위해서 {{domxref("GlobalFetch.fetch")}} 메소드를 불러들여야 합니다. 이 메소드는 {{domxref("Window")}}나 {{domxref("WorkerGlobalScope")}}와 같은 인터페이스로부터 구현되었습니다.

`fetch()`를 불러들이는 경우, 취득할 리소스를 반드시 인수로 지정하지 않으면 안됩니다. 읽어들인 뒤, `fetch()`는 `Promise`객체를 반환합니다. 리퀘스트가 성공하든 실패하든 해당 리퀘스트 통신에 대한 {{domxref("Response")}}객체가 취득됩니다. `fetch()`의 두번째 인수는 초기화에 사용되는 객체를 정의하고 있습니다. 이 인수는 기입하지 않아도 함수의 동작에 문제가 없습니다. 이 인수에 대한 상세한 정보는 {{domxref("Request")}})를 참고해주시기 바랍니다.

{{domxref("Response")}}를 가져온 후에, 콜백함수의 매개변수로 담긴 response 객체에는 리스폰스에 포함되어있는 컨텐츠와 그에대한 처리방법이 담긴 메소드들이 담겨있습니다. 자세한 사항은 {{domxref("Body")}}를 참고해주시기 바랍니다.

{{domxref("Request.Request","Request()")}}와 {{domxref("Response.Response","Response()")}}를 사용하는 것으로, Request와 Response를 직접 작성할 수 있습니다. 하지만 이러한 추가 옵션들은 {{domxref("FetchEvent.respondWith")}}와 같은 또다른 API를 불러 들이는 작업이 수행되어야 하므로 필요하지 않다면 굳이 작성하지 않는 편이 좋습니다.

> **참고:** Fetch API에 대한 자세한 이용방법은 [Using Fetch](/ko/docs/Web/API/Fetch_API/Using_Fetch)를 참고해주시기 바랍니다. 또한 [Fetch basic concepts](/ko/docs/Web/API/Fetch_API/Basic_concepts)에서는 Fetch API의 기본개념 또한 설명되어 있습니다.

### Aborting a fetch

몇몇 브라우저들은 {{domxref("AbortController")}}와 {{domxref("AbortSignal")}} 인터페이스에 대한 실험적인 기능을 추가로 지원하였습니다. 만약 Fetch API와 XHR API 호출이 완료되지 않았다면, 중단 될 수 있도록 하는 기능입니다. 자세한 사항은 인터페이스 문서를 참고해주시기 바랍니다.

## Fetch 인터페이스

- {{domxref("GlobalFetch")}}
  - : 리소스를 취득하기 위해 사용되는 `fetch()` 메서드가 정의되어 있습니다.
- {{domxref("Headers")}}
  - : 리퀘스트와 리스폰스 객체에 대한 헤더입니다. 헤더정보에 보내는 쿼리나 통신 결과의 행동에 대한 선택이 가능합니다.
- {{domxref("Request")}}
  - : 리소스에 대한 리퀘스트의 객체입니다.
- {{domxref("Response")}}
  - : 리퀘스트에 대한 리스폰스 객체입니다.

## Fetch 믹스인

- {{domxref("Body")}}
  - : Response와 Request 본체에 관련한 메소드들이 정의되어 있습니다. 이것들을 이용함으로써 response 결과물을 html, json과 같이 컨텐츠 타입별로 처리하는것이 가능합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 관련정보

- [Using Fetch](/ko/docs/Web/API/Fetch_API/Using_Fetch)
- [ServiceWorker API](/ko/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ko/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ko/docs/Web/HTTP)
- [Fetch polyfill](https://github.com/github/fetch)
- [Fetch basic concepts](/ko/docs/Web/API/Fetch_API/Basic_concepts)
