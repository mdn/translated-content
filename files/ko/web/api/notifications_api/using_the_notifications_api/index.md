---
title: 알림 API 사용하기
slug: Web/API/Notifications_API/Using_the_Notifications_API
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

웹 페이지나 앱에서 [알림(Notifications) API](/ko/docs/Web/API/Notifications_API)를 사용하면 페이지 외부에 표시되는 알림을 보낼 수 있습니다. 이것은 시스템 레벨에서 처리되는 것으로 애플리케이션이 유휴 상태거나 백그라운드에 있더라도 웹 앱이 사용자에게 정보를 보낼 수 있습니다. 이 글에서는 여러분의 앱에서 이 API를 사용하기 위한 기초를 알아봅니다.

일반적으로 시스템 알림은 운영 체계의 표준 알림 메커니즘을 말합니다. 예를 들어 일반적인 데스크톱 시스템이나 모바일 장치의 브로드캐스트 알림을 생각해봅시다.

![](android-notification.png)

물론 시스템 알림 시스템은 플랫폼 및 브라우저에 따라 다양하지만 괜찮습니다. 알림 API는 범용적으로 작성돼서 대부분의 시스템 알림 시스템과 호환됩니다.

## 예시

웹 알림의 대표적인 사용 사례는 웹 기반 메일이나 IRC 애플리케이션입니다. 새 메시지가 도착하면 사용자가 다른 애플리케이션으로 다른 일을 하더라도 사용자에게 알릴 필요가 있습니다. 요즘은 [Slack](https://slack.com/) 등 이러한 사례를 많이 찾아볼 수 있습니다.

우리는 웹 알림을 사용하는 방법을 좀더 잘 알 수 있도록 실제적인 예시 — 할 일 목록 앱 —를 작성했습니다. 데이터는 로컬에서 [IndexedDB](/ko/docs/Web/API/IndexedDB_API)로 저장하고 사용자 알림은 할 일 기한이 됐을 때 시스템 알림을 사용합니다. [할 일 목록 코드를 다운로드하거나](https://github.com/mdn/dom-examples/tree/main/to-do-notifications), [앱의 라이브 실행을 보세요](https://mdn.github.io/dom-examples/to-do-notifications/).

## 권한 요청하기

앱이 알림을 보내려면 먼저 사용자가 애플리케이션에 해당 권한을 허용해줘야 합니다. 이는 API가 웹페이지 외부와 상호작용할 때 통상적인 요구 사항입니다. 최소 한번은 사용자가 해당 애플리케이션이 알림을 표시할 수 있는 권한을 허용해줄 필요가 있으며 이로써 사용자는 어떤 앱/사이트가 알림을 보일 수 있는지 제어할 수 있습니다.

과거에 푸시 알림에 대한 악용 때문에 웹 브라우저와 개발자는 그런 문제를 완화할 수 있는 전략을 구현하게 되었습니다. 알림을 발생시키려면 사용자 제스처(예: 단추 클릭)에 대한 응답으로만 가능합니다. 이것은 모범적인 방식일 뿐 아니라 — 사용자에게 미동의 알림으로 스팸을 보내면 안됩니다 — 실제로도 전향적인 브라우저는 사용자 제스처에 대한 응답으로 촉발되지 않은 알림은 명시적으로 불허합니다. 파이어폭스는 이미 72 버전부터 이렇게 하고 있으며 사파리도 하고 있습니다.

또한 크롬과 파이어폭스에서는 사이트가 보안 콘텍스트(즉, HTTPS)가 아니면 알림을 아예 요청할 수 없으며 크로스 오리진 {{htmlelement("iframe")}}으로부터의 알림 권한은 요청할 수 없게 되었습니다.

### 현재 권한 상태 확인하기

권한을 이미 가지고 있는지 확인하려면 {{domxref("Notification.permission")}} 읽기 전용 속성의 값을 확인하면 됩니다. 다음 세 가지 값이 있을 수 있습니다.

- `default`
  - : 사용자에게 아직 권한을 요구하지 않았으며 따라서 알림을 표시하지 않습니다.
- `granted`
  - : 사용자에게 알림 표시 권한을 요구했으며 사용자는 권한을 허용했습니다.
- `denied`
  - : 사용자가 명시적으로 알림 표시 권한을 거부했습니다.

### 권한 획득하기

아직 알림 표시 권한이 허용되지 않았다면 애플리케이션은 {{domxref("Notification.requestPermission()")}} 메서드를 사용하여 사용자에게 권한을 요청할 필요가 있습니다. 간단하게는 아래와 같이 넣습니다.

```js
Notification.requestPermission().then(function (result) {
  console.log(result);
});
```

여기서는 프로미스 방식의 메서드 버전을 사용합니다. 과거 버전을 지원하려면 아래와 같이 과거의 콜백 버전을 사용해야 할 수 있습니다.

```js
Notification.requestPermission();
```

콜백 버전은 콜백 함수를 옵셔널하게 받을 수 있으며 사용자가 표시 권한 요청에 응답한 후에 호출됩니다.

### 예시

우리가 만드는 할 일 데모에서는 "알림 허용" 단추를 둬서 누르면 앱의 알림 권한을 요청합니다.

```html
<button id="enable">알림 허용</button>
```

누르면 다음 `askNotificationPermission()` 함수를 호출합니다.

```js
function askNotificationPermission() {
  // 권한을 실제로 요구하는 함수
  function handlePermission(permission) {
    // 사용자의 응답에 관계 없이 크롬이 정보를 저장할 수 있도록 함
    if (!("permission" in Notification)) {
      Notification.permission = permission;
    }

    // 사용자 응답에 따라 단추를 보이거나 숨기도록 설정
    if (
      Notification.permission === "denied" ||
      Notification.permission === "default"
    ) {
      notificationBtn.style.display = "block";
    } else {
      notificationBtn.style.display = "none";
    }
  }

  // 브라우저가 알림을 지원하는지 확인
  if (!("Notification" in window)) {
    console.log("이 브라우저는 알림을 지원하지 않습니다.");
  } else {
    if (checkNotificationPromise()) {
      Notification.requestPermission().then((permission) => {
        handlePermission(permission);
      });
    } else {
      Notification.requestPermission(function (permission) {
        handlePermission(permission);
      });
    }
  }
}
```

두 번째 메인 블록을 먼저 보면 알림이 지원되는지 확인하는 것을 알 수 있습니다. 지원하는 경우 그에 따라 `Notification.requestPermission()`의 프로미스 기반 버전이 지원되는지 보는 확인을 실행합니다. 맞다면 프로미스 기반 버전을 실행하고(사파리 외에는 전부 지원됨) 아니라면 과거의 콜백 기반 버전을 실행합니다(사파리에서 지원).

코드 중복을 피하기 위해 뒷 처리 수행 코드를 `handlePermission()` 함수에 넣었는데 이 함수가 코드에서 첫 번째 메인 블록입니다. 그 안에서는 `Notification.permission` 값을 명시적으로 설정하고(크롬의 일부 과거 버전에서는 이게 자동으로 안됩니다) 사용자가 권한 대화창에서 선택한 결과에 따라 단추를 보이거나 숨깁니다. 권한이 이미 허용됐는지 보여주려는 것은 아니고 사용자가 권한을 거부한 경우 나중에 다시 선택할 수 있도록 해주는 것입니다.

**참고:** 크롬 37 버전 전에는 `load` 이벤트 핸들러에서 {{domxref("Notification.requestPermission()")}}을 호출할 수 없었습니다([이슈 274284](https://code.google.com/p/chromium/issues/detail?id=274284) 참고).

### requestPermission() 프로미스 기능 알아내기

위에서 우리는 브라우저가 `Notification.requestPermission()`의 프로미스 버전을 지원하는지 확인해야 한다고 했습니다. 아래와 같이 했습니다.

```js
function checkNotificationPromise() {
  try {
    Notification.requestPermission().then();
  } catch (e) {
    return false;
  }

  return true;
}
```

기본적으로 `requestPermission()`에 `.then()` 메서드가 있는지 알아보는 것입니다. 맞다면 계속 진행하고 `true`를 반환합니다. 실패라면 `catch() {}` 블록에서 `false`를 반환합니다.

## 알림 만들기

알림 만들기는 쉬워서 {{domxref("Notification")}} 생성자만 사용하면 됩니다. 이 생성자는 알림에 표시할 제목과 {{domxref("Notification.icon","icon")}}이나 텍스트 {{domxref("Notification.body","body")}} 같은 알림 조작 옵션 몇 가지를 받도록 돼 있습니다.

예를 들어 할일 목록 예시에서 아래 코드로 필요시 알림을 만듭니다(`createNotification()` 함수에서 찾을 수 있음).

```js
var img = "/to-do-notifications/img/icon-128.png";
var text = '아! "' + title + '" 작업 기한이 만료됐습니다.';
var notification = new Notification("할 일 목록", { body: text, icon: img });
```

## 알림 닫기

파이어폭스와 사파리는 알림을 자동으로 금방(약 4초) 닫습니다. 이것은 운영 체계 수준에서도 발생합니다. 그런데 크롬 같은 다른 브라우저는 그렇지 않습니다. 모든 브라우저에서 알림이 닫히게 하려면 {{domxref("WindowTimers.setTimeout","setTimeout()")}} 함수에서 {{domxref("Notification.close")}} 함수를 호출하여 알림을 4초 후에 닫으면 됩니다. [`bind()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)를 사용하여 `close()` 호출이 알림에 연동되게 하는 것도 해줘야 합니다.

```js
setTimeout(notification.close.bind(notification), 4000);
```

> **참고:** "close" 이벤트를 받았을 때 알림을 닫은 것이 사용자인지는 보장할 수 없습니다. 이것은 규격과도 일치합니다. 규격에서는 "알림이 닫힐 때 그것이 기반 알림 플랫폼에 의한 것이든지 사용자에 의한 것이든지 닫기 절차가 실행돼야 한다."고 기술하고 있습니다.

## 알림 이벤트

{{domxref("Notification")}} 인스턴스에 촉발되는 이벤트는 다음 네 가지입니다.

- `click`
  - : 사용자가 알림을 클릭하면 촉발됩니다.
- `close`
  - : 알림이 닫힌 후 촉발됩니다.
- `error`
  - : 알림에 문제가 있을 경우 촉발되며 대개 어떤 이유에 의해 알림을 표시할 수 없는 경우입니다.
- `show`
  - : 알림이 사용자에게 표시되면 촉발됩니다.

이 이벤트들은 {{domxref("Notification.onclick","onclick")}}, {{domxref("Notification.onclose","onclose")}}, {{domxref("Notification.onerror","onerror")}}, {{domxref("Notification.onshow","onshow")}} 핸들러로 추적할 수 있습니다. {{domxref("Notification")}}이 {{domxref("EventTarget")}}을 상속하기 때문에 {{domxref("EventTarget.addEventListener","addEventListener()")}} 메서드를 사용할 수 있습니다.

## 기존 알림 대체하기

사용자가 잠깐 사이에 알림을 많이 받는 것은 바람직하지 않습니다. 예를 들어 메신저 애플리케이션이 모든 수신 메시지를 사용자에게 알리는데 그게 아주 많다면요? 사용자가 알림 때문에 대량 스팸을 받지 않도록 알림 대기열(큐)을 수정해서 걸려 있는 알림 하나나 여럿을 새로운 알림 하나로 대체할 수 있습니다.

이를 위해 새 알림에 태그를 붙일 수 있습니다. 알림에 이미 같은 태그가 있고 표시되지 않았다면 새 알림으로 이전 알림을 대체하는 것입니다. 같은 태그의 알림이 이미 표시됐다면 이전 알림을 닫고 새 알림을 표시합니다.

### 태그 예시

다음과 같은 간단한 HTML을 봅시다.

```html
<button>알림 실행!</button>
```

다수의 알림을 아래 방법으로 처리할 수 있습니다.

```js
window.addEventListener("load", function () {
  // 처음에는 알림 권한이 있는지 확인함
  // 없으면 권한 요구
  if (Notification && Notification.permission !== "granted") {
    Notification.requestPermission(function (status) {
      if (Notification.permission !== status) {
        Notification.permission = status;
      }
    });
  }

  var button = document.getElementsByTagName("button")[0];

  button.addEventListener("click", function () {
    // 사용자가 알림을 받는 데 동의한 경우
    // 알림 10개를 보내본다
    if (Notification && Notification.permission === "granted") {
      var i = 0;
      // 어떤 브라우저(파이어폭스 등)는 일정 시간 동안 알림이 너무 많은 경우 차단하기 때문에 인터벌 사용.
      var interval = window.setInterval(function () {
        // 태그 덕분에 "안녕! 9" 알림만 보여야 함
        var n = new Notification("안녕! " + i, { tag: "알림너무많음" });
        if (i++ == 9) {
          window.clearInterval(interval);
        }
      }, 200);
    }

    // 사용자가 알림을 받을지 말지 답하지 않은 경우
    // 참고: 크롬 때문에 권한 속성이 설정됐는지 알 수 없으므로
    // "기본" 값을 확인하는 것은 안전하지 않음
    else if (Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        // 사용자가 ok한 경우
        if (status === "granted") {
          var i = 0;
          // 어떤 브라우저(파이어폭스 등)는 일정 시간 동안 알림이 너무 많은 경우 차단하기 때문에 인터벌 사용.
          var interval = window.setInterval(function () {
            // 태그 덕분에 "안녕! 9" 알림만 보여야 함
            var n = new Notification("안녕! " + i, { tag: "알림너무많음" });
            if (i++ == 9) {
              window.clearInterval(interval);
            }
          }, 200);
        }

        // 그 외의 경우 일반적인 모달 alert로 폴백
        else {
          alert("안녕!");
        }
      });
    }

    // 사용자가 알림을 거부한 경우
    else {
      // 일반적인 모달 alert로 폴백
      alert("안녕!");
    }
  });
});
```

라이브 결과는 아래에서 보세요.

{{ EmbedLiveSample('Tag_example', '100%', 30) }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고

- [사용자 알림 편람](/ko/Apps/Build/User_notifications)
- {{ domxref("Notification") }}
