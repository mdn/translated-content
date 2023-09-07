---
title: Window.status
slug: Web/API/Window/status
---

{{APIRef}}

## 요약

브라우저 하단의 상태 표시줄에 텍스트를 바꾸거나, 기존 텍스트를 얻을 수 있다.

이 프로퍼티는 파이어폭스나 기타 브라우저의 기본 설정값에서는 동작하지 않는다. window\.status를 변경한다고 하더라도 상태 표시줄의 메시지에 출력되지 않을 것이다. 상태바 텍스트를 변경할 수 있게 하려면 유저가 about:config 창에서 dom.disable_window_status_change 를 허용해 주어야 한다.(인터넷 익스플로러의 경우 \[인터넷 옵션 - 보안 - 사용자 지정 수준 - 스크립트를 통해 상태 표시줄 업데이트 허용]을 '사용'으로 바꾸어야 한다.)

> **참고:** Starting in Gecko 1.9.1, users can let websites change the status text by enabling the "Change status bar" preference in the Advanced options panel.

## 문법

```js
window.status = string;
var value = window.status;
```

## Specification

HTML5
