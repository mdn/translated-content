---
title: Notification
slug: Web/API/Notification
---

{{APIRef("Web Notifications")}}

[Notifications API](/ko/docs/Web/API/Notifications_API)의 `Notification` 인터페이스는 사용자에게 데스크톱 알림을 설정하고 보여주는데 사용됩니다.

{{AvailableInWorkers}}

## Constructor

- {{domxref("Notification.Notification", "Notification()")}}
  - : 새 `Notification` 객체 인스턴스를 생성합니다.

## Properties

### Static properties

이 속성은 `Notification` 객체 안에만 존재합니다.

- {{domxref("Notification.permission")}} {{readonlyinline}}
  - : 알림을 표시하기 위한 현재의 권한을 나타낸다. 가능한 값: `denied` (사용자가 알림 표시를 거절), `granted` (사용자가 알림 표시를 허용), `default` (사용자의 선택을 알 수 없기 때문에 브라우저가 거절한 상태의 값으로 작동하게됨).

### Instance properties

이 속성은 `Notification` 객체의 인스턴스 안에만 존재합니다.

- {{domxref("Notification.actions")}} {{readonlyinline}}
  - : 생성자의 옵션 파라메터 안에 명시된 알림의 액션 배열입니다.
- {{domxref("Notification.badge")}} {{readonlyinline}}
  - : 알림을 나타낼 충분한 여유 공간이 없을 때에 알림을 표시하는 이미지의 URL입니다.
- {{domxref("Notification.body")}} {{readonlyinline}}
  - : 생성자의 옵션 파라메터 안에 명시된 알림의 본문입니다.
- {{domxref("Notification.data")}} {{readonlyinline}}
  - : 알림 데이타의 구조화된 복사본을 반환합니다.
- {{domxref("Notification.dir")}} {{readonlyinline}}
  - : 생성자의 옵션 파라메터 안에 명시된 알림 글의 방향입니다.
- {{domxref("Notification.lang")}} {{readonlyinline}}
  - : 생성자의 옵션 파라메터 안에 명시된 알림의 언어 코드입니다.
- {{domxref("Notification.tag")}} {{readonlyinline}}
  - : 생성자의 옵션 파라메터 안에 명시된 경우 알림의 ID입니다.
- {{domxref("Notification.icon")}} {{readonlyinline}}
  - : 생성자의 옵션 파라메터 안에 명시된 알림의 아이콘으로 사용될 이미지의 URL입니다.
- {{domxref("Notification.image")}} {{readonlyinline}}
  - : 생성자의 옵션 파라메터 안에 명시된 알림의 일부분으로 표시될 이미지의 URL입니다.
- {{domxref("Notification.requireInteraction")}} {{readonlyinline}}
  - : 자동으로 닫히지 않고 사용자가 클릭할 때 까지 활성화 된 채로 남아 있어야 함을 나타내는 {{jsxref("Boolean")}} 값입니다.
- {{domxref("Notification.silent")}} {{readonlyinline}}
  - : 기기의 설정과 상관없이 소리가 없거나 진동이 울려야 한다는 등 알림이 조용해야 하는지를 나타냅니다.
- {{domxref("Notification.timestamp")}} {{readonlyinline}}
  - : 알림이 생성되었거나 적용 가능한(과거, 현재, 미래) 시간을 나타냅니다.
- {{domxref("Notification.title")}} {{readonlyinline}}
  - : 생성자의 첫번째 파라메터에 명시된 알림의 제목입니다.
- {{domxref("Notification.vibrate")}} {{readonlyinline}}
  - : 진동기가 있는 기기가 나타내야할 진동 패턴을 나타냅니다.

#### Unsupported properties

아래의 속성은 최신 명세에는 등록되어 있지만 아직 구현한 브라우저가 없는 속성입니다. 현재의 상태에서 변경된 사항은 없는지 계속 확인해보아야 하는 내용이고 오래된 내용이 있으면 알려주시기 바랍니다.

- {{domxref("Notification.noscreen")}} {{readonlyinline}}
  - : 알림이 기기의 화면을 활성화해야 하는지를 나타냅니다.
- {{domxref("Notification.renotify")}} {{readonlyinline}}
  - : 새 알림이 오래된 알림을 교체할 때 사용자에게 알려야 하는지를 나타냅니다.
- {{domxref("Notification.sound")}} {{readonlyinline}}
  - : 기본 시스템 설정 알림 소리를 대신할 알림 소리로 사용될 소리 자원을 나타냅니다.
- {{domxref("Notification.sticky")}} {{readonlyinline}}
  - : 사용자가 쉽게 제거할 수 없게 '달라붙어'있어야 하는지를 나타냅니다.

#### Event handlers

- {{domxref("Notification.onclick")}}
  - : [`click`](/ko/docs/Web/API/Element/click_event) 이벤트에 대한 핸들러입니다. 사용자가 알림을 클릭할 때 마다 호출됩니다.
- {{domxref("Notification.onerror")}}
  - : {{event("error")}} 이벤트에 대한 핸들러입니다. 알림에 오류가 발생할 때 마다 호출됩니다.

#### Obsolete handlers

아래의 이벤트 핸들러는 [browser compatibility](#browser_compatibility) 섹션에 나타난 대로 아직 지원되지만 현재 명세에 없는 내용입니다. 폐지된 것으로 생각해야 하고 앞으로 나올 브라우저에서는 작동하지 않을 수 있습니다.

- {{domxref("Notification.onclose")}}
  - : {{event("close")}} 이벤트에 대한 핸들러입니다. 사용자가 알림을 닫을 때 호출됩니다.
- {{domxref("Notification.onshow")}}
  - : {{event("show")}} 이벤트에 대한 핸들러입니다. 알림이 표시될 때 호출됩니다.

## Methods

### Static methods

이 메서드는 `Notification` 객체에만 존재합니다.

- {{domxref("Notification.requestPermission()")}}
  - : 이 메서드는 페이지에서 알림을 표시할지 요청하는데 사용됩니다.

### Instance methods

이 메서드는 `Notification` 객체의 인스턴스나 그 [`prototype`](/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)에만 존재합니다. `Notification` 객체는 또한 {{domxref("EventTarget")}} 인터페이스를 상속 받습니다.

- {{domxref("Notification.close()")}}
  - : 프로그램으로 알림을 닫습니다.

## Example

다음과 같은 기본 HTML이 있을 때:

```html
<button onclick="notifyMe()">Notify me!</button>
```

다음과 같이 알림을 보낼 수 있습니다. 알림이 지원되는지 우선 확인해 볼 때 사용할 수 있는 풍부하게 완성된 예제코드입니다. 그 다음에 현재 페이지에서 알림을 보낼 수 있게 권한이 있는지를 확인하고 알림을 보내기 전에 권한이 필요하면 요청을 합니다.

```js
function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}
```

{{EmbedLiveSample('Example', '100%', 30)}}

많은 경우에 이렇게 장황할 필요는 없습니다. 예를 들어 [Emogotchi 데모](http://mdn.github.io/emogotchi/)([소스코드](https://github.com/mdn/emogotchi))에서는 단순히 알림을 보내기 위해서 권한을 얻을 수 있는지와 상관없이 {{domxref("Notification.requestPermission")}}를 실행합니다(이 경우는 새로운 프로미스 기반 메서드 문법을 사용):

```js
Notification.requestPermission().then(function (result) {
  console.log(result);
});
```

그 다음에 알림이 필요한 때에 단순히 `spawnNotification()` 함수를 실행합니다. 본문과 아이콘, 제목을 인자로 넘기면 필요한 `options` 객체를 만들고 {{domxref("Notification.Notification","Notification()")}} 생성자를 사용해서 알림을 발생시킵니다.

```js
function spawnNotification(theBody, theIcon, theTitle) {
  var options = {
    body: theBody,
    icon: theIcon,
  };
  var n = new Notification(theTitle, options);
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Using the Notifications API](/ko/docs/Web/API/Notifications_API/Using_the_Notifications_API)
