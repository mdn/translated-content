---
title: Document.hasFocus()
slug: Web/API/Document/hasFocus
---

{{ ApiRef("DOM") }}

**`Document.hasFocus()`** 메소드는 문서 또는 문서 내의 요소(element) 중 어느 하나라도 포커스(focus)를 갖고 있으면 `true`, 그렇지 않으면 `false` 인 {{jsxref("Boolean")}} 값을 반환한다. 이 메소드를 사용하여 문서내 활성화된(active) 요소가 포커스를 갖고 있는지 판단할 수 있다.

> **참고:** 문서를 볼 때, 포커스를 가진 요소는 언제나 문서상의 활성화된 요소이다. 반면에 활성화된 요소는 꼭 포커스를 갖지 않을 수 도 있다. 예를 들면 전면에 나와있지 않은(not a foreground) 팝업창 내의 활성화된 요소는 포커스를 갖고 있지 않다.

## 구문

```js
focused = document.hasFocus();
```

### 반환 값

문서 내의 활성화된 요소가 포커스를 갖고 있지 않으면 `false`를 반환, 포커스를 갖고 있다면 `true`를 반환

## 예제

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>TEST</title>
    <style>
      #message {
        font-weight: bold;
      }
    </style>

    <script>
      setInterval(CheckPageFocus, 200);

      function CheckPageFocus() {
        var info = document.getElementById("message");

        if (document.hasFocus()) {
          info.innerHTML = "The document has the focus.";
        } else {
          info.innerHTML = "The document doesn't have the focus.";
        }
      }

      function OpenWindow() {
        window.open(
          "http://developer.mozilla.org/",
          "mozdev",
          (width = 640),
          (height = 300),
          (left = 150),
          (top = 260),
        );
      }
    </script>
  </head>

  <body>
    <h1>JavaScript hasFocus example</h1>
    <div id="message">Waiting for user action</div>
    <div><button onclick="OpenWindow()">Open a new window</button></div>
  </body>
</html>
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 관련 참고

- [페이지 가시성 API 사용하기](/ko/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API)
