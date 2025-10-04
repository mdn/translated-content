---
title: "WebSocket: bufferedAmount 속성"
short-title: bufferedAmount
slug: Web/API/WebSocket/bufferedAmount
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

**`WebSocket.bufferedAmount`** 읽기 전용 속성은 [`send()`](/ko/docs/Web/API/WebSocket/send) 메서드 호출에 의해 대기열(큐)에 추가되었지만 아직 네트워크로 전송되지 않은 데이터의 바이트 수를 반환합니다. 대기열에 넣어진 모든 데이터가 전송되면 이 값은 0으로 재설정됩니다. 연결이 종료되어도 속성 값은 0으로 재설정되지 않습니다. [`send()`](/ko/docs/Web/API/WebSocket/send)를 계속 호출하면 해당 속성의 값은 계속적으로 증가합니다.

## 값

`unsigned long` 값입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
