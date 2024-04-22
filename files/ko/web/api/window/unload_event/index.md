---
title: "Window: unload 이벤트"
slug: Web/API/Window/unload_event
---

{{APIRef}}

**`unload`** 이벤트는 문서나 하위 리소스가 언로딩 중일 때 발생합니다.

| 확산               | 아니오                                                  |
| ------------------ | ------------------------------------------------------- |
| 취소 가능          | 아니오                                                  |
| 인터페이스         | {{domxref("Event")}}                                    |
| 이벤트 처리기 속성 | {{domxref("WindowEventHandlers/onunload", "onunload")}} |

`unload`는 다음 이벤트 이후 발생합니다.

- {{domxref("Window/beforeunload_event", "beforeunload")}} (취소 가능한 이벤트)
- {{domxref("Window/pagehide_event", "pagehide")}}

`unload` 시점의 문서는 다음과 같은 상태입니다.

- 이미지, IFrame 등 모든 리소스는 여전히 존재합니다.
- 최종 사용자는 아무것도 볼 수 없습니다.
- UI 상호작용은 아무 효과도 없습니다. ({{domxref("window.open()")}}, {{domxref("window.alert()")}}, {{domxref("window.confirm()")}}, 등등)
- 오류가 발생해도 언로딩 절차는 중단되지 않습니다.

참고로 `unload` 이벤트 역시 문서 트리의 순서를 따라갑니다. 즉 부모 프레임의 `unload`가 자식 프레임의 `unload` **이전에** 발생합니다. 아래 예제를 확인하세요

## 예제

```html
<!doctype html>
<html>
  <head>
    <title>Parent Frame</title>
    <script>
      window.addEventListener("beforeunload", function (event) {
        console.log("I am the 1st one.");
      });
      window.addEventListener("unload", function (event) {
        console.log("I am the 3rd one.");
      });
    </script>
  </head>
  <body>
    <iframe src="child-frame.html"></iframe>
  </body>
</html>
```

아래는 `child-frame.html`의 내용입니다.

```html
<!doctype html>
<html>
  <head>
    <title>Child Frame</title>
    <script>
      window.addEventListener("beforeunload", function (event) {
        console.log("I am the 2nd one.");
      });
      window.addEventListener("unload", function (event) {
        console.log("I am the 4th and last one…");
      });
    </script>
  </head>
  <body>
    ☻
  </body>
</html>
```

부모 프레임이 언로딩 될 때, `console.log()` 메시지를 통해 순서를 확인할 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 관련 이벤트: {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/load_event", "load")}}
- [Unloading Documents — unload a document](https://html.spec.whatwg.org/multipage/browsers.html#unloading-documents)
