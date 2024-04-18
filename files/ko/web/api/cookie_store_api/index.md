---
title: Cookie Store API
slug: Web/API/Cookie_Store_API
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{securecontext_header}}{{DefaultAPISidebar("Cookie Store API")}} {{AvailableInWorkers}}

**Cookie Store API**는 쿠키를 관리하는 비동기 API로서, windows와 [서비스 워커](/ko/docs/Web/API/Service_Worker_API)에서 사용 가능합니다.

## 개념 및 사용법

쿠키를 가져오고 설정하는 기존 방법 중에는 키/값 쌍의 문자열로 {{domxref("document.cookie")}}를 사용하는 것이 있습니다. 이는 번거롭고 오류가 발생하기 쉬울 뿐만 아니라 최신 웹 개발의 맥락에서 여러 가지 문제가 있습니다.

`document.cookie` 인터페이스는 {{Glossary("synchronous")}}, 단일 스레드, 블로킹 방식입니다. 쿠키를 작성할 때 브라우저가 모든 쿠키의 문자열을 업데이트할 때까지 기다려야 합니다. 또한 {{domxref("document")}}에 의존한다는 것은 `document` 객체에 접근할 수 없는 서비스 워커가 쿠키에 접근할 수 없음을 의미합니다.

Cookie Store API는 향상된 쿠키 관리 방법을 제공합니다. {{Glossary("asynchronous")}}이며 프로미스 기반이므로 이벤트 루프를 차단하지 않습니다. {{domxref("document")}}에 의존하지 않으므로 서비스 워커가 사용할 수 있습니다. 또한 쿠키를 가져오고 설정하는 메서드는 오류 메시지를 통해 더 많은 피드백을 제공합니다. 즉, 웹 개발자는 설정이 성공했는지 확인하기 위해 쿠키를 설정한 다음 즉시 쿠키를 다시 읽을 필요가 없습니다.

## 인터페이스

- {{domxref("CookieStore")}} {{Experimental_Inline}}
  - : `CookieStore` 인터페이스를 통해 쿠키를 가져오고 설정할 수 있습니다.
- {{domxref("CookieStoreManager")}} {{Experimental_Inline}}
  - : `CookieStoreManager` 인터페이스는 서비스 워커가 쿠키 변경 이벤트를 구독할 수 있도록 서비스 워커 등록을 제공합니다.
- {{domxref("CookieChangeEvent")}} {{Experimental_Inline}}
  - : script-visible 쿠키가 변경될 때 {{domxref("Window")}} 컨텍스트의 `CookieStore` 객체에 대해 `change`이라는 이름의 `CookieChangeEvent`가 전송됩니다.
- {{domxref("ExtendableCookieChangeEvent")}}
  - : 서비스 워커의 쿠키 변경 구독 목록에 있는 script-visible 쿠키의 변경이 발생하면 `cookiechange`라는 이름의 `ExtendableCookieChangeEvent`가 {{domxref("ServiceWorkerGlobalScope")}} 컨텍스트에서 디스패치됩니다.

### 다른 인터페이스로의 확장

- {{domxref("ServiceWorkerGlobalScope.cookieStore")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 서비스 워커와 연관된 {{domxref("CookieStore")}} 객체에 대한 참조를 반환합니다.
- {{domxref("ServiceWorkerRegistration.cookies")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 웹 앱이 쿠키 변경 이벤트를 구독하고 구독을 취소할 수 있도록 해주는 {{domxref("CookieStoreManager")}} 인터페이스에 대한 참조를 반환합니다.
- {{domxref("Window.cookieStore")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 현재 문서 컨텍스트에 대한 {{domxref("CookieStore")}} 객체에 대한 참조를 반환합니다.
- {{domxref("ServiceWorkerGlobalScope/cookiechange_event", "cookiechange")}} 이벤트 {{Experimental_Inline}}
  - : 서비스 워커의 쿠키 변경사항 구독 목록에 있는 쿠키가 변경될 때 마다 발생합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Service Worker API](/ko/docs/Web/API/Service_Worker_API)
