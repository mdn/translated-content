---
title: WebSocket.readyState
slug: Web/API/WebSocket/readyState
tags:
  - API
  - Property
  - Reference
  - Web API
  - WebSocket
browser-compat: api.WebSocket.readyState
translation_of: Web/API/WebSocket/readyState
---

{{APIRef("Web Sockets API")}}

**`WebSocket.readyState`** 읽기 전용 속성은 {{domxref("WebSocket")}} 연결의 현재 상태를 반환합니다.

## 값

아래의 `unsigned short` 값 중 하나입니다.

| 값  | 상태         | 설명                                               |
| --- | ------------ | -------------------------------------------------- |
| `0` | `CONNECTING` | 소켓이 생성됐으나 연결은 아직 개방되지 않았습니다. |
| `1` | `OPEN`       | 연결이 개방되어 통신할 수 있습니다.                |
| `2` | `CLOSING`    | 연결을 닫는 중입니다.                              |
| `3` | `CLOSED`     | 연결이 닫혔거나, 개방할 수 없었습니다.             |

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
