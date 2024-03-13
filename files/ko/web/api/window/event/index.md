---
title: Window.event
slug: Web/API/Window/event
---

{{APIRef("DOM")}}

{{domxref("Window")}} 객체의 **`event`** 속성은 웹 사이트의 코드가 현재 처리 중인 {{domxref("Event")}}를 반환합니다. 이벤트 처리기 바깥에서는 항상 {{jsxref("undefined")}}입니다.

신규 코드에서는 사용을 피하세요. 대신, 처리기가 매개변수로 받는 {{domxref("Event")}}를 사용해야 합니다. `event` 속성은 많이 지원되지도 않고, 지원하는 환경에서도 나중에 문제가 발생할 여지를 키웁니다.

> **참고:** `event` 속성이 반환하는 `Event`가 예상하는 값과 다른 경우가 많습니다. 게다가 {{Glossary("shadow tree", "섀도우 트리")}} 안에서 발생한 이벤트의 경우 정확하지 않습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Event.srcElement")}}
