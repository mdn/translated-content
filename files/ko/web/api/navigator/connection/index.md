---
title: window.navigator.connection
slug: Web/API/Navigator/connection
---

{{ Apiref() }}

{{ SeeCompatTable() }}

## 요약

[네트워크 정보 API](/ko/docs/WebAPI/Network_Information)는 사용자 기기의 현재 대역폭이나 연결이 과금되는 지와 같은 정보를 알려줍니다. 이를 이용해서 사용자의 연결에 기반해서 높은 품질의 콘텐츠를 제공할지 낮은 품질의 콘텐츠를 제공할지 선택할 수 있습니다.

## 속성

- {{domxref("window.navigator.connection.bandwidth", "connection.bandwidth")}} {{ReadOnlyInline}}
  - : 현재 연결에 대한 다운로드 대역폭을 MB/s 단위의 double 형태로 알려줍니다. 사용자가 오프라인일 경우는 `0`이고 알 수 없을 경우에는 `infinity`로 나옵니다.
- {{domxref("window.navigator.connection.metered", "connection.metered")}} {{ReadOnlyInline}}
  - : 연결이 과금이 되는 경우(예를 들어 pay-per-use) [`Boolean`](/ko/JavaScript/Reference/Global_Objects/Boolean) 형의 `true`가 반환됩니다.

### 이벤트 핸들러

- {{domxref("window.navigator.connection.onchange", "connection.onchange")}}
  - : {{event("change")}} 이벤트에 대한 이벤트 핸들러 속성입니다. 연결 정보가 변경될 때 이벤트가 발생합니다.

> **참고:** **주의:** `connection` 객체는 이벤트를 다루기 위한 {{domxref("EventTarget.addEventListener","addEventListener")}} 메서드를 사용할 수 있는 {{domxref("EventTarget")}}을 상속받습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 관련 내용

- [Network Information API](/ko/docs/WebAPI/Network_Information)
- [Online and offline events](/ko/Online_and_offline_events)
