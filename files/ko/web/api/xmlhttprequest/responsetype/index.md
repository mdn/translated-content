---
title: "XMLHttpRequest: responseType 속성"
slug: Web/API/XMLHttpRequest/responseType
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

{{domxref("XMLHttpRequest")}}의
**`responseType`** 속성은 응답에 포함된 데이터의 유형을
지정하는 열거형 문자열 값입니다.

또한 작성자가
응답 유형을 변경할 수 있습니다. `responseType` 값이 빈 문자열로 지정되면
기본값인 `text`가 사용됩니다.

## 값

응답에 포함된 데이터의 유형을 지정하는 문자열로,
다음과 같은 값을 가질 수 있습니다.

- `""`
  - : `responseType`의 빈 문자열은 기본 유형인 `"text"`와 동일합니다.
- `"arraybuffer"`
  - : {{domxref("XMLHttpRequest.response", "response")}}는 바이너리 데이터를 포함하고 있는 JavaScript {{jsxref("ArrayBuffer")}}입니다.
- `"blob"`
  - `response`는 바이너리 데이터를 포함한 {{domxref("Blob")}} 객체입니다.
- `"document"`
  - `response는` 전달받은 데이터의 MIME 유형에 따라 {{Glossary("HTML")}} {{domxref("Document")}} 또는 {{Glossary("XML")}} {{domxref("XMLDocument")}}입니다. [HTML에서의 XMLHttpRequest](/ko/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)에서 HTML 콘텐츠를 가져오는 XHR 사용법을 확인해보세요.
- `"json"`
  - `response`는 전달받은 데이터의 내용을 {{Glossary("JSON")}} 형식으로 파싱해 생성된 JavaScript 객체입니다.
- `"text"`
  - : `response`는 문자열의 텍스트입니다.

> [!NOTE]
> 특정 값으로 responseType을 설정할 때, 작성자는
> 서버가 해당 형식과 호환되는 응답을 실제로 보내는지 확인해야 합니다.
> 서버가 설정된 `responseType`과 호환되지 않는 데이터를 반환하면
> {{domxref("XMLHttpRequest.response", "response")}}의 값은
> `null`이 됩니다.

### 예외

- `InvalidAccessError` {{domxref("DOMException")}}
  - : {{domxref("Worker")}}가 아닌
    동기적 모드의 `XMLHttpRequest`에서
    `responseType` 값을 변경하려는 시도가 있었습니다. 자세한 내용은 아래의
    [XHR 동기 제한](#synchronous_xhr_restrictions)를 참조하세요.

## 사용 일람

### XHR 동기 제한

{{domxref("Worker")}}에 속한 요청이 아닌 경우,
동기 `XMLHttpRequest`에서 `responseType` 값을 변경할 수 없습니다.
이러한 제한은 브라우저의 메인 스레드를 차단해
사용자 경험을 저하시키는 대규모 동기 작업에
사용되지 않도록 하기 위한 설계입니다.

XHR 요청은 기본적으로 비동기입니다.
{{domxref("XMLHttpRequest.open", "open()")}}을 호출할 때
선택적 `async` 매개변수에 `false`를 전달하면 동기 모드로 설정됩니다.

### Workers 제한

`responseType` 값을 `document`로 설정하려는 시도는
{{domxref("Worker")}} 내에서는 무시됩니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [XMLHttpRequest 사용하기](/ko/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTML에서의 XMLHttpRequest](/ko/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
- 응답 데이터: {{domxref("XMLHttpRequest.response", "response")}},
  {{domxref("XMLHttpRequest.responseText", "responseText")}},
  {{domxref("XMLHttpRequest.responseXML", "responseXML")}}
