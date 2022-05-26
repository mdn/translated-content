---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
tags:
  - AJAX
  - API
  - Communication
  - HTTP
  - Interface
  - Reference
  - Web
  - XHR
  - XMLHttpRequest
browser-compat: api.XMLHttpRequest
translation_of: Web/API/XMLHttpRequest
---

{{DefaultAPISidebar("XMLHttpRequest")}}

`XMLHttpRequest` (XHR) 객체는 서버와 상호작용할 때 사용합니다. XHR을 사용하면 페이지의 새로고침 없이도 URL에서 데이터를 가져올 수 있습니다. 이를 활용하면 사용자의 작업을 방해하지 않고 페이지의 일부를 업데이트할 수 있습니다.

`XMLHttpRequest`는 [AJAX](/ko/docs/Web/Guide/AJAX) 프로그래밍에 많이 사용됩니다.

{{InheritanceDiagram}}

이름에 `XML`이 들어가긴 하지만, `XMLHttpRequest`은 XML 뿐만 아니라 모든 종류의 데이터를 가져올 수 있습니다.

이벤트 데이터나 메시지 데이터를 서버에서 가져와야 하는 통신의 경우, {{domxref("EventSource")}} 인터페이스를 통한 [서버발 이벤트](/ko/docs/Web/API/Server-sent_events)(Server-sent events)의 사용을 고려하세요. 완전한 양방향 통신의 경우에는 [WebSocket](/ko/docs/Web/API/WebSockets_API)이 더 좋은 선택일 수 있습니다.

{{AvailableInWorkers("notservice")}}

## 생성자

- {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}}
  - : `XMLHttpRequst`를 초기화합니다. 다른 메서드가 호출되기 전에 호출되어야 합니다.

## 속성

{{domxref("XMLHttpRequestEventTarget")}}과 {{domxref("EventTarget")}}의 속성을 상속합니다.

- {{domxref("XMLHttpRequest.readyState")}} {{readonlyinline}}
  - : 요청의 상태를 나타내는 숫자를 반환합니다.
- {{domxref("XMLHttpRequest.response")}} {{readonlyinline}}
  - : {{domxref("XMLHttpRequest.responseType")}}의 값에 따라, 응답 개체 본문을 포함하는 {{jsxref("ArrayBuffer")}}, {{domxref("Blob")}}, {{domxref("Document")}}, JavaScript 객체, 또는 {{domxref("DOMString")}}을 반환합니다.
- {{domxref("XMLHttpRequest.responseText")}} {{readonlyinline}}
  - : 요청에 대한 응답을 텍스트로 나타내는 `string`을 반환합니다. 요청이 실패했거나, 아직 전송하지않은 경우에는 `null`을 반환합니다.
- {{domxref("XMLHttpRequest.responseType")}}
  - : 응답의 유형을 지정합니다.
- {{domxref("XMLHttpRequest.responseURL")}} {{readonlyinline}}
  - : 응답의 URL을 직렬화한 값을 반환합니다. URL이 `null`이면 빈 문자열을 반환합니다.
- {{domxref("XMLHttpRequest.responseXML")}} {{readonlyinline}}
  - : 요청에 대한 응답을 포함한 {{domxref("Document")}}를 반환합니다. 요청이 실패했거나, 아직 전송하지 않았거나, 응답을 XML/HTML로 파싱할 수 없는 경우 `null`을 반환합니다. [Web Worker](/ko/docs/Web/API/Web_Workers_API)에서 사용할 수 없습니다.
- {{domxref("XMLHttpRequest.status")}} {{readonlyinline}}
  - : 응답의 [HTTP 상태 코드](/ko/docs/Web/HTTP/Status)를 반환합니다.
- {{domxref("XMLHttpRequest.statusText")}} {{readonlyinline}}
  - : HTTP 서버가 반환한 응답 문자열을 담은 `string`을 반환합니다. {{domxref("XMLHttpRequest.status")}}와 달리, `statusText`는 "`OK`"와 같은 응답 상태 메시지의 전문을 반환합니다

    > **참고:** HTTP/1.1의 상태 텍스트와 같이 프로토콜 버전과 응답의 이유를 알릴 방법이 HTTP/2 명세에는 없습니다. ({{RFC(7540, "Response Pseudo-Header Fields", "8.1.2.4")}})

- {{domxref("XMLHttpRequest.timeout")}}
  - : 요청을 자동으로 종료하기 전에 대기할 시간을 나타내는 밀리초 단위 값입니다.
- {{domxref("XMLHttpRequest.upload")}} {{readonlyinline}}
  - : 업로드 과정을 나타내는 {{domxref("XMLHttpRequestUpload")}}입니다.
- {{domxref("XMLHttpRequest.withCredentials")}}
  - : 쿠키 또는 권한 부여 헤더와 같은 자격 증명을 사용하여 사이트 간 `Access-Control` 요청을 만들어야 하는 경우 `true`를 반환합니다. 그렇지 않으면 `false`를 반환합니다.

## 비표준 속성들

- {{domxref("XMLHttpRequest.channel")}}{{ReadOnlyInline}}
 - : 요청을 수행할 때 객체에서 사용하는 채널입니다.
- {{domxref("XMLHttpRequest.mozAnon")}}{{ReadOnlyInline}}
 - : 'boolean'입니다. `true`인 경우 쿠키 및 인증 헤더 없이 요청이 전송됩니다.
- {{domxref("XMLHttpRequest.mozSystem")}}{{ReadOnlyInline}}
 - : 'boolean'입니다. `true`인 경우 `same origin policy`가 요청에 적용되지 않습니다.
- {{domxref("XMLHttpRequest.mozBackgroundRequest")}}
 - : 'boolean'입니다. 객체가 백그라운드에서 서비스 요청을 나타내는지 여부를 나타냅니다.      
## 메서드

- {{domxref("XMLHttpRequest.abort()")}}
  - : 이미 요청을 전송한 경우, 그 요청을 중단합니다.
- {{domxref("XMLHttpRequest.getAllResponseHeaders()")}}
  - : 모든 응답 헤더를 {{Glossary("CRLF")}}로 구분해서 하나의 문자열로 반환합니다. 응답을 받지 못한 경우 `null`을 반환합니다.
- {{domxref("XMLHttpRequest.getResponseHeader()")}}
  - : 지정한 헤더의 텍스트를 담은 문자열을 반환합니다. 응답을 받지 못했거나, 지정한 헤더가 응답에 존재하지 않으면 `null`을 반환합니다.
- {{domxref("XMLHttpRequest.open()")}}
  - : 요청을 초기화합니다.
- {{domxref("XMLHttpRequest.overrideMimeType()")}}
  - : 서버가 반환한 MIME 유형을 재정의합니다.
- {{domxref("XMLHttpRequest.send()")}}
  - : 요청을 전송합니다. 비동기 요청(기본 동작)인 경우, `send()`는 요청을 전송하는 즉시 반환합니다.
- {{domxref("XMLHttpRequest.setRequestHeader()")}}
  - : HTTP 요청 헤더의 값을 설정합니다. 반드시 {{domxref("XMLHttpRequest.send()", "send()")}}보다 먼저, 그러나 {{domxref("XMLHttpRequest.open()", "open()")}}보다 뒤에 호출해야 합니다.

## 이벤트

- {{domxref("XMLHttpRequest/abort_event", "abort")}}
  - : {{domxref("XMLHttpRequest.abort()")}}를 호출하는 등, 요청이 중단되면 발생합니다. `onabort` 속성으로도 수신할 수 있습니다.
- {{domxref("XMLHttpRequest/error_event", "error")}}
  - : 요청이 오류를 마주치면 발생합니다. `onerror` 속성으로도 수신할 수 있습니다.
- {{domxref("XMLHttpRequest/load_event", "load")}}
  - : `XMLHttpRequest` 트랜잭션이 성공적으로 끝나면 발생합니다. `onload` 속성으로도 수신할 수 있습니다.
- {{domxref("XMLHttpRequest/loadend_event", "loadend")}}
  - : 요청이 성공적({{domxref("XMLHttpRequest/load_event", "load")}} 이벤트)으로 끝나거나, 실패({{domxref("XMLHttpRequest/abort_event", "abort")}} 또는 {{domxref("XMLHttpRequest/error_event", "error")}} 이벤트)한 후 발생합니다. `onloadend` 속성으로도 수신할 수 있습니다.
- {{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}
  - : 응답 데이터 로딩을 시작했을 때 발생합니다. `onloadstart` 속성으로도 수신할 수 있습니다.
- {{domxref("XMLHttpRequest/progress_event", "progress")}}
  - : 요청이 데이터를 수신하는 동안 주기적으로 발생합니다. `onprogress` 속성으로도 수신할 수 있습니다.
- {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}}
  - : {{domxref("XMLHttpRequest.readyState", "readyState")}} 속성이 바뀔 때마다 발생합니다. `onreadystatechange` 속성으로도 수신할 수 있습니다.
- {{domxref("XMLHttpRequest/timeout_event", "timeout")}}
  - : 응답에 소요된 시간이 사전에 지정한 값을 초과해서 요청이 취소될 때 발생합니다. `ontimeout` 속성으로도 수신할 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("XMLSerializer")}}: DOM 트리를 XML로 직렬화
- `XMLHttpRequest`를 다루는 MDN 자습서:

  - [Ajax 시작하기](/ko/docs/Web/Guide/AJAX/Getting_Started)
  - [XMLHttpRequest 사용하기](/ko/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
  - [XMLHttpRequest에서의 HTML](/ko/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
  - [Fetch API](/ko/docs/Web/API/Fetch_API)

- [HTML5 Rocks — New Tricks in XMLHttpRequest2](https://www.html5rocks.com/en/tutorials/file/xhr2/)
- Feature-Policy 지시자 {{httpheader("Feature-Policy/sync-xhr", "sync-xhr")}}
