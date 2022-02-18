---
title: ClipboardEvent.clipboardData
slug: Web/API/ClipboardEvent/clipboardData
tags:
  - API
  - Clipboard
  - Clipboard API
  - ClipboardEvent
  - Cut
  - Experimental
  - Property
  - Read-only
  - copy
  - paste
browser-compat: api.ClipboardEvent.clipboardData
translation_of: Web/API/ClipboardEvent/clipboardData
---
{{APIRef("Clipboard API")}} {{SeeCompatTable}}

**`ClipboardEvent.clipboardData`** 속성은 다음과 같은 용도로 사용할 수 있는 {{domxref("DataTransfer")}} 객체입니다.

- {{event("cut")}}과 {{event("copy")}} 이벤트 처리기 내에서, 어떤 데이터를 클립보드에 넣어야 하는지 지정하기. 보통 {{domxref("DataTransfer.setData", "setData(format, data)")}}를 호출해서 수행합니다.
- {{event("paste")}} 이벤트 처리기 내에서 데이터를 가져오기. 보통 {{domxref("DataTransfer.getData", "getData(format)")}}을 호출해서 수행합니다.

{{event("cut")}}, {{event("copy")}}, {{event("paste")}} 이벤트 문서에서 자세한 정보를 확인하세요.

## 구문

```js
data = ClipboardEvent.clipboardData
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 복사 관련 이벤트: {{event("copy")}}, {{event("cut")}}, {{event("paste")}}
- 이 속성이 속한 {{domxref("ClipboardEvent")}} 인터페이스.
