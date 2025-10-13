---
title: "WebSocket: protocol 속성"
short-title: protocol
slug: Web/API/WebSocket/protocol
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

**`WebSocket.protocol`** 은 읽기 전용 속성으로 서버에서 선택한 [sub-protocol](/ko/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) 의 이름을 반환합니다. 이는 {{domxref("WebSocket")}} 객체 생성 시 [`protocols`](/ko/docs/Web/API/WebSocket/WebSocket#protocols) 매개변수에 지정된 문자열 중 하나이거나, 연결이 설정되지 않은 경우 빈 문자열입니다.

## 값

문자열 입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{httpheader("Sec-WebSocket-Protocol")}}
