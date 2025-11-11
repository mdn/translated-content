---
title: MutationObserver
slug: Web/API/MutationObserver
l10n:
  sourceCommit: 76c7e0502bb6bfa765946c32562fdc93e8456e19
---

{{APIRef("DOM WHATWG")}}

`MutationObserver` 인터페이스는 [DOM](/ko/docs/Web/API/Document_Object_Model) 트리의 변경을 감지하는 기능을 제공합니다. DOM3 이벤트 명세의 일부였던 [Mutation Events](/ko/docs/Web/API/MutationEvent)를 대체합니다.

## 생성자

- {{domxref("MutationObserver.MutationObserver", "MutationObserver()")}}
  - : DOM 변경이 발생하면 콜백을 호출하는 새 `MutationObserver`를 생성하고 반환합니다.

## 인스턴스 메서드

- {{domxref("MutationObserver.disconnect()", "disconnect()")}}
  - : {{domxref("MutationObserver.observe", "observe()")}}를 호출하기 전까지 `MutationObserver` 인스턴스가 더이상의 알림을 수신하지 않도록 설정합니다.
- {{domxref("MutationObserver.observe()", "observe()")}}
  - : 주어진 설정과 일치하는 DOM 변경이 발생했을 때 `MutationObserver` 인스턴스가 자신의 콜백으로 알림을 수신하도록 설정합니다.
- {{domxref("MutationObserver.takeRecords()", "takeRecords()")}}
  - : `MutationObserver`의 알림 큐를 비우고, 큐에서 대기 중이던 알림들은 {{domxref("MutationRecord")}}들로 구성된 새로운 {{jsxref("Array")}}로 반환합니다.

## 예제

다음 예제는 [이 블로그 글](https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)에서 가져온 것입니다.

```js
// 변경을 감지할 노드 선택
const targetNode = document.getElementById("some-id");

// 감지 옵션 (감지할 변경)
const config = { attributes: true, childList: true, subtree: true };

// 변경 감지 시 실행할 콜백 함수
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      console.log("자식 노드가 추가되거나 제거됐습니다.");
    } else if (mutation.type === "attributes") {
      console.log(`${mutation.attributeName} 특성이 변경됐습니다.`);
    }
  }
};

// 콜백 함수에 연결된 감지기 인스턴스 생성
const observer = new MutationObserver(callback);

// 설정한 변경의 감지 시작
observer.observe(targetNode, config);

// 이후 감지 중단 가능
observer.disconnect();
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref('PerformanceObserver')}}
- {{domxref('ResizeObserver')}}
- {{domxref('IntersectionObserver')}}
- [짧은 개요](https://developer.chrome.com/blog/detect-dom-changes-with-mutation-observers/)
- [좀 더 깊게 알아보기](https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)
- [Chromium 개발자 Rafael Weinstein의 발표](https://www.youtube.com/watch?v=eRZ4pO0gVWw)
