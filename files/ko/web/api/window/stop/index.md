---
title: Window.stop()
slug: Web/API/Window/stop
---

{{APIRef}}

## 요약

Window\.stop()메서드는 window 객체의 로딩을 취소하는 메서드입니다.

## 문법

```js
window.stop();
```

## 예시

```js
window.stop();
```

## 본문

stop() 메서드는 브라우저의 정지 버튼을 누르는 행위와 동등한 효과를 지닙니다. Because of the order in which scripts are loaded, the stop() method cannot stop the document in which it is contained from loading, but it will stop the loading of large images, new windows, and other objects whose loading is deferred.

## 명세서

{{Specifications}}

## Compatibility

stop()메서드는 인터넷 익스플로러에서 지원하지 않습니다.
