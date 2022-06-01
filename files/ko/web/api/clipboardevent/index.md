---
title: ClipboardEvent
slug: Web/API/ClipboardEvent
tags:
  - API
  - Clipboard
  - Clipboard API
  - Cut
  - Event
  - Experimental
  - Interface
  - copy
  - paste
browser-compat: api.ClipboardEvent
---
{{APIRef("Clipboard API")}} {{SeeCompatTable}}

**`ClipboardEvent`** 인터페이스는 {{event("cut")}}, {{event("copy")}}, {{event("paste")}} 이벤트처럼 클립보드 조작에 대한 정보를 제공하는 이벤트를 나타냅니다.

## 생성자

- {{domxref("ClipboardEvent.ClipboardEvent", "ClipboardEvent()")}}
  - : 주어진 매개변수로 `ClipboardEvent`를 생성합니다.

## 속성

{{domxref("Event")}} 인터페이스의 속성을 상속합니다.

- {{domxref("ClipboardEvent.clipboardData")}} {{readonlyInline}}
  - : 사용자가 실행한 {{event("cut")}}, {{event("copy")}}, {{event("paste")}} 작업에서 영향을 받은 데이터를 담은 {{domxref("DataTransfer")}} 객체입니다. 데이터의 MIME 유형도 포함합니다.

## 메서드

{{domxref("Event")}} 인터페이스의 메서드를 상속합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 복사 관련 이벤트: {{event("copy")}}, {{event("cut")}}, {{event("paste")}}
- [Clipboard API](/ko/docs/Web/API/Clipboard_API)
- [Async Clipboard API 데모 (Glitch)](https://async-clipboard-api.glitch.me/)
- [web.dev의 Async Clipboard API](https://web.dev/image-support-for-async-clipboard/)
