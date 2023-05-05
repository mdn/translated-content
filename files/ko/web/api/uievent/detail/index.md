---
title: "UIEvent: detail 속성"
short-title: detail
slug: Web/API/UIEvent/detail
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("UI Events")}}

**`UIEvent.detail`** 읽기 전용 속성은, 0이 아니라면, 현재 (또는 이벤트에 따라 다음) 클릭 수를 나타냅니다.

{{domxref("Element/click_event", "click")}}과 {{domxref("Element/dblclick_event", "dblclick")}} 이벤트에서의 `UIEvent.detail`은 현재 클릭 수입니다.

{{domxref("Element/mousedown_event", "mousedown")}}과 {{domxref("Element/mouseup_event", "mouseup")}} 이벤트에서의 `UIEvent.detail`은 현재 클릭 수에 1을 더한 값입니다.

다른 모든 {{domxref("UIEvent")}} 객체의 `UIEvent.detail`은 항상 0입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
