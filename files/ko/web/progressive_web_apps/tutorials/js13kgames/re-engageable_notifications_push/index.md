---
title: 알림과 푸시를 사용해 PWA를 재참여(re-engageable)가능하게 만드는 방법
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push
---

{{PreviousMenu("Web/Apps/Progressive/Installable_PWAs", "Web/Apps/Progressive")}}

앱을 오프라인에서 동작하도록 컨텐츠를 캐싱하는 능력은 훌륭한 기능입니다. 사용자가 홈 화면에 웹 앱을 설치하도록 허용하는 것은 더 좋습니다. 하지만, 사용자의 동작에 의존하는 대신 푸시 메시지와 알림을 사용해 새로운 컨텐츠가 있을때 이를 전달하여 사용자를 자동으로 다시 참여하도록 할 수 있습니다.

## 두 개의 API, 하나의 목적

[Push API](/ko/docs/Web/API/Push_API)와 [Notifications API](/ko/docs/Web/API/Notifications_API)는 두 개의 독립된 API이지만, 여러분의 앱에 재참여 기능을 제공하려고 할 때 함께 잘 동작합니다. Push는 클라이언트 사이드의 관여 없이 서버로부터 앱으로 새로운 컨텐츠를 전달하는데 사용되며, 이 작업은 앱의 service worker에 의해 처리됩니다. Notification은 service worker에 의해 사용자에게 새로운 정보를 보여주거나 무언가 업데이트 되었음을 알리는데 사용됩니다.

두 API는 service worker와 마찬가지로 브라우저 창의 바깥에서 동작하기때문에 앱의 페이지를 보고 있지 않거나 심지어 종료되었을 때도 업데이트 푸시를 보내거나 알림을 보여줄 수 있습니다.

## Notifications

알림으로 시작해봅시다. 알림은 푸시 없이도 동작하지만, 푸시와 결합했을 때 매우 유용합니다. 먼저 독립적으로 보도록하겠습니다.

### 권한 요청

알림을 보여주려면 먼저 권한을 요청해야 합니다. 즉시 알림을 보여주는대신 사용자가 버튼을 클릭하여 팝업을 요청할 때 요청 팝업을 보여주는 것이 좋은 사용법입니다.

```js
var button = document.getElementById("notifications");
button.addEventListener("click", function (e) {
  Notification.requestPermission().then(function (result) {
    if (result === "granted") {
      randomNotification();
    }
  });
});
```

팝업은 운영체제가 가진 알림 서비스를 사용해 보여집니다.

![Notification of js13kPWA.](js13kpwa-notification.png)

사용자가 알림 수신을 확인하면 앱이 알림을 보여줄 수 있습니다. 사용자는 기본, 승인 또는 거절을 선택할 수 있습니다. 기본 옵션은 사용자가 선택할 수 없을 때 사용되며, 다른 두 옵션은 사용자가 예 또는 아니오를 선택했을 때 사용됩니다.

승인이 되면, 권한은 알림과 푸시 모두에 대해 동작합니다.

### 알림 생성

예시 앱은 사용가능한 데이터를 알림으로 생성합니다. 게임은 무작위로 선택되며, 선택된 것은 게임의 이름을 title로, 제작자를 body로, 이미지를 아이콘으로 보여주는 컨텐츠를 알림으로 제공합니다.

```js
function randomNotification() {
  var randomItem = Math.floor(Math.random() * games.length);
  var notifTitle = games[randomItem].name;
  var notifBody = "Created by " + games[randomItem].author + ".";
  var notifImg = "data/img/" + games[randomItem].slug + ".jpg";
  var options = {
    body: notifBody,
    icon: notifImg,
  };
  var notif = new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}
```

새로운 무작위 알림은 사용자가 너무 귀찮아 비활성화 하기 전까지는 매 30초마다 생성됩니다. (실제 앱에서는 알림이 너무 잦아선 안되며 더 유용해야합니다.) Notifications API의 이점은 운영체제의 알림 기능을 사용한다는 것입니다. 이는 사용자가 웹 앱을 보고있지않더라도 알림을 보여줄 수 있으며, 알림이 네이티브 앱에서 표시하는 것과 유사하다는 것을 의미합니다.

## Push

푸시는 알림보다 더 복잡합니다. 우리는 앱으로 데이터를 다시 전송해줄 서버를 구독해야합니다. 앱의 Service Worker는 푸시 서버로부터 데이터를 수신하며 알림 시스템 또는 원하는 경우 다른 메커니즘을 사용해 이를 보여줄 수 있습니다.

이 기술은 여전히 아주 초기 단계에 있습니다. 몇몇 동작하는 예제들은 Google Cloude Messaging 플랫폼을 사용하지만, [VAPID](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/)(자발적 어플리케이션 식별, Voluntary Application Identification)를 지원하도록 재작성되어 앱을 위한 부가적인 보안 계층을 제공합니다. [Service Workers Cookbook examples](https://github.com/mdn/serviceworker-cookbook/push-payload.html)를 확인하고, [Firebase](https://firebase.google.com/)를 사용하는 푸시 메시징 서버를 설정하거나, 여러분만의 서버(예제에서는 Node.js를 사용)를 구축해보시기 바랍니다.

앞서 언급듯이, 푸시 알림을 수신하려면 service worker가 있어야 합니다. 이를 위한 기본적인 내용은 [Service worker를 사용해 PWA를 오프라인에서 동작하게 만들기](/ko/docs/Web/Apps/Progressive/Offline_Service_workers) 문서에서 이미 설명했습니다. Service worker 안에서 푸시 서비스 구독 메커니즘이 생성됩니다.

```js
registration.pushManager.getSubscription().then(/* ... */);
```

사용자가 구독을 하기 시작하면, 서버로부터 푸시 알림을 받을 수 있습니다.

서버사이드에서는 보안적인 이유로 전체 프로세스를 공개키와 비공개키를 사용하여 암호화해야 합니다. 모든 사람들이 앱을 사용하여 안전하지 않은 푸시 메시지를 보내도록 허용하는 것은 끔찍할 것입니다. 서버는 사용자가 구독했을 때 받은 모든 정보를 저장하므로 이 후 필요할 때 메시지를 보낼 수 있습니다.

푸시 메시지를 수신하려면, Service Worker 파일에서 {{event("push")}}이벤트를 사용하면됩니다.

```js
self.addEventListener("push", function (e) {
  /* ... */
});
```

데이터는 반환되어 알림으로 사용자에게 즉시 보여집니다. 예를 들어, 이는 사용자에게 무언가를 다시 알려주거나, 앱에서 사용 가능한 새로운 컨텐츠에 대해 알려주는데 사용할 수 있습니다.

### 푸시 예제

푸시는 동작을 위해 서버 파트가 필요하므로, 정적인 파일의 호스팅만 제공하는 GitHub Pages에 호스팅된 js13kPWA 예제를 포함 할 수 없습니다. 이는 [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook/)에 모두 설명되어 있습니다. [Push Payload 데모](https://github.com/mdn/serviceworker-cookbook/push-payload.html)를 확인하시기 바랍니다.

이 데모는 세 파일을 포함하고 있습니다.

- [index.js](https://github.com/mozilla/serviceworker-cookbook/blob/master/push-payload/index.js), 앱의 소스 코드를 포함합니다
- [server.js](https://github.com/mozilla/serviceworker-cookbook/blob/master/push-payload/server.js), 서버 파트(Node.js로 작성됨)를 포함합니다
- [service-worker.js](https://github.com/mozilla/serviceworker-cookbook/blob/master/push-payload/service-worker.js), Service Worker 관련 코드를 포함합니다.

이 모든 것들에 대해 확인해봅시다

#### index.js

`index.js` 파일은 service worker를 등록하는 것으로 시작합니다.

```js
navigator.serviceWorker
  .register("service-worker.js")
  .then(function (registration) {
    return registration.pushManager
      .getSubscription()
      .then(async function (subscription) {
        // registration part
      });
  })
  .then(function (subscription) {
    // subscription part
  });
```

[js13kPWA 데모](https://mdn.github.io/pwa-examples/js13kpwa/)에서 봤던 service worker보다 조금 더 복잡합니다. 이 특정 케이스에서는, 등록한 후에 등록 객체를 사용해 구독하며, 그 후 구독 객체를 사용해 전체 프로세스를 완료합니다.

등록 파트의 코드는 다음과 같습니다.

```js
if (subscription) {
  return subscription;
}
```

사용자가 이미 구독했을경우, 구독 객체를 반환하며 구독 파트로 이동합니다. 그렇지 않을 경우 새로운 구독을 초기화합니다.

```js
const response = await fetch("./vapidPublicKey");
const vapidPublicKey = await response.text();
const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
```

앱은 서버의 공개 키를 패치하고 응답을 텍스트로 변환합니다. 그 후 Uint8Array(Chrome 지원을 위해)로 변환이 필요합니다. VAPID 키에 대한 자세한 내용은 [Sending VAPID identified WebPush Notifications via Mozilla's Push Service](https://blog.mozilla.org/services/2016/08/23/sending-vapid-identified-webpush-notifications-via-mozillas-push-service/) 블로그 포스트를 읽어보시기 바랍니다.

앱은 이제 새로운 사용자를 구독하기 위해 {{domxref("PushManager")}}를 사용합니다. 두 옵션이 {{domxref("PushManager.subscribe()")}} 메소드로 전달됩니다. 첫 번째는 `userVisibleOnly: true`이며 사용자에게 전송되는 모든 알림이 보여진다는 것을 의미하며, 두 번째 것은 `applicationServerKey`이며 성공적으로 획득하고 변환된 VAPID 키를 포함합니다.

```js
return registration.pushManager.subscribe({
  userVisibleOnly: true,
  applicationServerKey: convertedVapidKey,
});
```

이제 구독 파트로 이동해봅시다. 앱은 Fetch를 사용해 먼저 서버로 JSON으로 된 구독 상세 정보를 전송합니다.

```js
fetch("./register", {
  method: "post",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    subscription: subscription,
  }),
});
```

그 다음 _구독_ 버튼의 {{domxref("onclick","GlobalEventHandlers.onclick")}}이 정의됩니다.

```js
document.getElementById("doIt").onclick = function () {
  const payload = document.getElementById("notification-payload").value;
  const delay = document.getElementById("notification-delay").value;
  const ttl = document.getElementById("notification-ttl").value;

  fetch("./sendNotification", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      subscription: subscription,
      payload: payload,
      delay: delay,
      ttl: ttl,
    }),
  });
};
```

버튼이 클릭되면, `fetch`는 제공된 파라미터를 사용해 서버로 알림을 전송합니다. `payload`는 알림에 표시될 텍스트이고, `delay`는 알림이 보여질 때 까지의 지연 시간을 정의하며, `ttl`은 지정된 시간(초 단위로도 정의됨)동안 서버에서 알림을 사용할 수 있게하는 time-to-live 설정입니다.

이제, 다음 JavaScript 파일로 넘어갑니다.

#### server.js

서버 파트는 Node.js로 작성되었으며 어딘가 적합한 곳에 호스팅되어야 합니다. 이는 완전히 다른 문서의 주제입니다. 여기에서는 높은 수준의 개요만 제공합니다.

[web-push 모듈](https://www.npmjs.com/package/web-push)은 VAPID 키를 설정하기 위해 사용되며, 존재하지 않을 경우 선택적으로 생성합니다.

```js
const webPush = require("web-push");

if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
  console.log(
    "You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY " +
      "environment variables. You can use the following ones:",
  );
  console.log(webPush.generateVAPIDKeys());
  return;
}

webPush.setVapidDetails(
  "https://github.com/mdn/serviceworker-cookbook/",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY,
);
```

그 다음, 모듈은 앱이 처리해야할 모든 라우트(VAPID 공개 키 얻기, 등록 후 알림 보내기)를 정의하고 내보냅니다. `index.js` 파일에서 사용중인 `payload`, `delay`, `ttl` 변수를 볼 수 있습니다.

```js
module.exports = function (app, route) {
  app.get(route + "vapidPublicKey", function (req, res) {
    res.send(process.env.VAPID_PUBLIC_KEY);
  });

  app.post(route + "register", function (req, res) {
    res.sendStatus(201);
  });

  app.post(route + "sendNotification", function (req, res) {
    const subscription = req.body.subscription;
    const payload = req.body.payload;
    const options = {
      TTL: req.body.ttl,
    };

    setTimeout(function () {
      webPush
        .sendNotification(subscription, payload, options)
        .then(function () {
          res.sendStatus(201);
        })
        .catch(function (error) {
          console.log(error);
          res.sendStatus(500);
        });
    }, req.body.delay * 1000);
  });
};
```

#### service-worker.js

마지막으로 살펴볼 파일은 service worker입니다.

```js
self.addEventListener("push", function (event) {
  const payload = event.data ? event.data.text() : "no payload";
  event.waitUntil(
    self.registration.showNotification("ServiceWorker Cookbook", {
      body: payload,
    }),
  );
});
```

이 모든 것은 {{event("push")}} 이벤트에 리스너를 추가하고, 데이터로부터 받은 텍스트로 구성된 payload 변수를 생성한 후(또는 데이터가 비어있을 경우 사용할 문자열을 생성), 사용자에게 보여줄 알림을 보여줄 때까지 기다립니다.

[Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook/) 예제의 나머지 부분의 동작 방법도 자유롭게 살펴보시기 바랍니다. [전체 소스 코드는 GitHub에서 사용 가능합니다](https://github.com/mozilla/serviceworker-cookbook/). 일반적인 사용과 웹 푸시, 캐싱 전략, 성능, 오프라인 동작 등을 보여주는 동작 예제가 많이 있습니다.

## 결론

이것이 튜토리얼 시리즈의 전부입니다. [js13kPWA 예제 앱의 소스 코드](https://github.com/mdn/pwa-examples/tree/master/js13kpwa)를 살펴봤으며 [소개](/ko/docs/Web/Apps/Progressive/Introduction), [PWA 구조](/ko/docs/Web/Apps/Progressive/App_structure), [Service Worker를 사용한 오프라인 기능](/ko/docs/Web/Apps/Progressive/Offline_Service_workers), [설치 가능한 PWA](/ko/docs/Web/Apps/Progressive/Installable_PWAs) 그리고 마지막으로 알림을 포함해 프로그레시브 웹 앱의 기능의 사용에 대해 배웠습니다. 또한 [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook/)의 도움으로 푸시에 대해서도 설명했습니다.

코드를 실험해보시고, 여러분의 앱을 PWA 기능으로 개선하거나, 완전히 새로운 무언가를 구축해 보세요. PWA는 일반 웹 앱에 비해 큰 이점을 제공합니다.

{{PreviousMenu("Web/Apps/Progressive/Installable_PWAs", "Web/Apps/Progressive")}}
