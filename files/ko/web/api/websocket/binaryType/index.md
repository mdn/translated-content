---
title: "WebSocket: binaryType 속성"
short-title: binaryType
slug: Web/API/WebSocket/binaryType
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

**`WebSocket.binaryType`** 속성은 WebSocket 연결을 통해 수신되는 이진 데이터의 유형을 제어합니다.

## 값

문자열 값입니다.

- `"blob"`
  - : 이진 데이터는 기본 값으로 {{domxref("Blob")}} 객체를 사용합니다.
- `"arraybuffer"`
  - : 이진 데이터는 {{jsxref("ArrayBuffer")}} 객체를 사용합니다.

## 예제

```js
// WebSocket 연결 생성
const socket = new WebSocket("ws://localhost:8080");

// 수신할 이진 데이터 값을 "blob"에서 "arraybuffer"으로 변경
socket.binaryType = "arraybuffer";

// 메세지 수신 대기
socket.addEventListener("message", (event) => {
  if (event.data instanceof ArrayBuffer) {
    // 이진 프레임 처리
    const view = new DataView(event.data);
    console.log(view.getInt32(0));
  } else {
    // 텍스트 프레임 처리
    console.log(event.data);
  }
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
