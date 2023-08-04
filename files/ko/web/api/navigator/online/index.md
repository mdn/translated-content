---
title: Online and offline events
slug: Web/API/Navigator/onLine
---

In progress [Firefox 3](/ko/Firefox_3_for_developers)는 [WHATWG 웹 애플리케이션 1.0 명세](http://www.whatwg.org/specs/web-apps/current-work/)에 기술된 [온라인/오프라인 이벤트](http://www.whatwg.org/specs/web-apps/current-work/#offline)를 구현합니다.

### 개요

좋은 오프라인 가능(offline-capable) 웹 애플리케이션을 작성하려면 여러분의 애플리케이션이 실제로 오프라인이 되는 때를 알아야 합니다. 덧붙여, 여러분의 애플리케이션이 '온라인' 상태로 돌아오는 때도 알아야 합니다. 사실, 이 요구사항은 다음과 같이 정리할 수 있습니다.

1. 여러분이 서버와 재동기화할 수 있도록 사용자가 온라인으로 돌아오는 때를 알아야 합니다.
2. 여러분의 서버 요청을 나중에 처리하기 위해 대기시킬 수 있도록 사용자가 오프라인이 되는 때를 알아야 합니다.

온라인/오프라인 이벤트는 이 과정을 단순하게 만드는 것을 도와줍니다.

여러분의 웹 애플리케이션은 특정 문서가 오프라인 자원 캐시에 보관되는 것을 확실하게 할 필요도 있습니다. 이를 위해서는 다음과 같이 `HEAD` 섹션에 `LINK` 요소를 포함합니다.

```html
<link rel="offline-resource" href="myresource" />
```

이는 Firefox 3 및 이후 버전에서 HTML을 처리할 때, 참조하는 자원을 오프라인에서 사용할 수 있도록 특별한 오프라인 자원 캐시에 저장하도록 합니다.

### API

#### `navigator.onLine`

[`navigator.onLine`](/ko/DOM/window.navigator.onLine)는 `true`/`false`(온라인은 `true`, 오프라인은 `false`)를 보관하는 속성입니다. 이 속성은 사용자가 해당 메뉴 항목(파일 -> 오프라인 작업)을 선택하여 "오프라인 모드"로 전환할 때마다 갱신됩니다.

또한 이 속성은 브라우저가 네트워크에 더 이상 연결할 수 없을 때마다 갱신됩니다. 명세에 따르면:

> 사용자가 링크를 따라가거나 스크립트가 원격 페이지를 요청할 때 사용자 에이전트가 네트워크에 접속할 수 없으면 (혹은 그러한 시도가 실패할 것이라는 것을 안다면) `navigator.onLine` 속성은 false를 반환해야 합니다...

Firefox 2는 윈도우와 리눅스에서 브라우저의 온라인/오프라인 모드가 바뀔 때와 네트워크가 끊어지거나 다시 접속될 때 이 속성을 갱신합니다.

이 속성은 Firefox와 Internet Explorer의 이전 버전에도 있으므로 (명세는 이러한 기존 구현을 바탕으로 합니다) 이를 즉시 사용할 수 있습니다. 네트워크 상태의 자동 감지는 Firefox 2에서 구현되었습니다.

#### "`online`"과 "`offline`" 이벤트

[Firefox 3](/ko/Firefox_3)는 두 가지 새로운 이벤트를 도입하고 있습니다: 바로 "`online`"과 "`offline`"입니다. 이 두 가지 이벤트는 브라우저가 온라인과 오프라인 모드를 전환할 때 각 페이지의 `<body>`에서 발생합니다. 덧붙여, 이 이벤트는 `document.body`에서 `document`로 전달되고 `window`에서 끝납니다. 두 가지 이벤트 모두 취소 불가능한(non-cancellable) 이벤트입니다(여러분은 사용자가 온라인이 되거나 오프라인이 되는 것을 막을 수 없습니다).

널리 알려진 몇 가지 방법으로 해당 이벤트에 대한 리스너(listener)를 등록할 수 있습니다.

- `window`, `document`, `document.body`에서 [`addEventListener`](/ko/DOM/element.addEventListener)를 이용
- 자바스크립트의 `Function` 개체에서 `document`나 `document.body`에 `.ononline` 혹은 `.onoffline` 속성을 설정 (**참고:** 호환성 때문에`window.ononline`이나 `window.onoffline`은 올바로 동작하지 않습니다.)
- HTML 마크업의 `<body>` 태그에 `ononline="..."` 혹은 `onoffline="..."` 속성을 지정

### 예제

이벤트가 동작하는지 확인할 수 있는 [간단한 테스트 케이스](https://bugzilla.mozilla.org/attachment.cgi?id=220609)가 있습니다. XXX When mochitests for this are created, point to those instead and update this example -nickolay

```html
<!doctype html>
<html>
  <head>
    <script>
      function updateOnlineStatus(msg) {
        var status = document.getElementById("status");
        var condition = navigator.onLine ? "ONLINE" : "OFFLINE";
        status.setAttribute("class", condition);
        var state = document.getElementById("state");
        state.innerHTML = condition;
        var log = document.getElementById("log");
        log.appendChild(
          document.createTextNode(
            "Event: " + msg + "; status=" + condition + "\n",
          ),
        );
      }
      function loaded() {
        updateOnlineStatus("load");
        document.body.addEventListener(
          "offline",
          function () {
            updateOnlineStatus("offline");
          },
          false,
        );
        document.body.addEventListener(
          "online",
          function () {
            updateOnlineStatus("online");
          },
          false,
        );
      }
    </script>
    <style>
      ...
    </style>
  </head>
  <body onload="loaded()">
    <div id="status"><p id="state"></p></div>
    <div id="log"></div>
  </body>
</html>
```

### 참고

- ['Online/Offline events' section from the WHATWG Web Applications 1.0 Specification](http://www.whatwg.org/specs/web-apps/current-work/#offline)
- [The bug tracking online/offline events implementation in Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=336359) and a [follow-up](https://bugzilla.mozilla.org/show_bug.cgi?id=336682)
- [A simple test case](https://bugzilla.mozilla.org/attachment.cgi?id=220609)
- [An explanation of Online/Offline events](http://ejohn.org/blog/offline-events/)
