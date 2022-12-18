---
title: Background scripts
slug: Mozilla/Add-ons/WebExtensions/Background_scripts
---

{{AddonSidebar}}

백그라운드 스크립트 또는 백그라운드 페이지를 사용하면 새 페이지로 이동, 북마크 제거, 탭 닫기 등 브라우저에서 발생하는 이벤트를 모니터링하고 그에 응답할 수 있습니다.

백그라운드 스크립트 또는 페이지에는 다음의 종류가 있습니다.

- 지속적  
  확장 기능이 시작될 때 로드되고, 확장 기능이 비활성화되거나 삭제될 때 언로드됩니다.
- 비지속적 (이벤트 페이지로도 불림)  
  이벤트에 응답하는 데 필요한 경우에만 로드되고, 유휴 상태가 되면 언로드됩니다. 그러나 백그라운드 페이지는 보이는 모든 뷰와 메시지 포트가 닫히기 전에는 언로드되지 않습니다. 뷰를 열면 백그라운드 페이지가 로드되진 않지만 닫히는 것을 방지해 줍니다.

Manifest V2에서 백그라운드 스크립트 또는 페이지는 지속적이거나 비지속적일수 있습니다. 확장 기능의 자원 비용을 줄여준다는 점에서 비지속적 백그라운드 스크립트를 사용하는 것이 권장됩니다. Manifest V3에서는 비지속적 백그라운드 스크립트 또는 페이지만이 지원됩니다.

Manifest V2에 지속적 백그라운드 스크립트 또는 페이지가 있고, Manifest V3로 확장 기능을 마이그레이션 하고자 한다면, [비지속적으로 변환](#convert_to_non-persistent)에 스크립트 또는 페이지를 비지속적 모델로 전환하는 것에 대한 조언이 있습니다.

## 백그라운드 스크립트 환경

### DOM API

백그라운드 스크립트는 백그라운드 페이지라는 특별한 페이지의 맥락에서 실행됩니다. 여기서 전역 [`window`](/en-US/docs/Web/API/Window)와, 해당 객체에 포함된 모든 표준 DOM API들이 같이 스크립트에게 제공됩니다.

> **경고:** Firefox에서, 백그라운드 페이지는 [`alert()`](/en-US/docs/Web/API/Window/alert), [`confirm()`](/en-US/docs/Web/API/Window/confirm), [`prompt()`](/en-US/docs/Web/API/Window/prompt) 사용을 지원하지 않습니다.

### WebExtension API

백그라운드 스크립트는 확장 기능이 필요한 [권한](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)을 가지고 있다면 모든 [WebExtension API](/en-US/docs/Mozilla/Add-ons/WebExtensions/API)를 실행할 수 있습니다.

### 교차 출처 접근

백그라운드 스크립트는 [호스트 권한](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)이 있는 호스트에게 XHR 요청을 할 수 있습니다.

### 웹 콘텐츠

백그라운드 스크립트는 웹페이지에 직접 접근하지 않습니다. 그러나 [콘텐츠 스크립트](/ko/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)를 웹페이지에 로드하고 [메시지 전달 API를 사용해 콘텐츠 스크립트와 통신](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts)할 수 있습니다.

### 콘텐츠 보안 정책

콘텐츠 보안 정책을 통해, 백그라운드 스크립트는 [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) 사용과 같은 잠재적으로 위험한 특정 동작으로부터 제한됩니다.

더 자세한 내용은 [콘텐츠 보안 정책](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)에서 확인해 보세요.

## 백그라운드 스크립트 구현하기

이 섹션에서는 비지속적 백그라운드 스크립트를 어떻게 작성하는지 설명합니다.

### 백그라운드 스크립트 지정하기

`manifest.json`의 [`"background"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)키로 확장 기능에 백그라운드 스크립트를 포함합니다. Manifest V2 확장 기능에서 비지속적 스크립트를 만드려면 `persistent` 속성을 `false`로 세팅해야 합니다. Manifest V3 확장 기능에서는 이를 생략하거나 `false`로 세팅해야 합니다.

```json
"background": {
  "scripts": ["background-script.js"],
  "persistent": false
}
```

여러 개의 백그라운드 스크립트를 지정할 수 있습니다. 그렇게 한다면 이들은 스크립트들이 웹페이지에 로드되는 것처럼, 같은 맥락에서 실행됩니다.

백그라운드 스크립트를 지정하는 대신, 백그라운드 페이지를 지정할 수 있습니다. 여기에는 ES 모듈 지원이라는 추가 이점이 있습니다.

- manifest.json

  ```json
  "background": {
    "page": "background-page.html",
    "persistent": false
  }
  ```

- background-page.html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <script type="module" src="background-script.js"></script>
    </head>
  </html>
  ```

백그라운드 스크립트와 페이지를 같이 지정할 수는 없습니다.

### 확장 기능 초기화

설치 시 확장 기능을 초기화하려면 {{WebExtAPIRef("runtime.onInstalled")}}을 수신합니다. 이 이벤트를 상태를 설정하거나 일회성 초기화를 위해 사용할 수 있습니다. 이벤트 페이지가 있는 확장 기능의 경우, `browser.menus.create`을 사용해서 생성된 바로 가기 메뉴와 같은 스테이트풀한 API가 사용되어야 합니다.

```js
browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["selection"]
  });
});
```

### 수신기 추가하기

확장 기능과 연결된 이벤트에 대해 백그라운드 스크립트를 구성합니다. 관련된 이벤트를 정의해두면 해당 이벤트가 실행되기 전까지 백그라운드 스크립트를 비활성화 상태로 둘 수 있고, 확장 기능이 필수적인 트리거를 놓치는 것을 방지합니다.

수신기는 페이지의 시작부터 동기적으로 등록되어야 합니다.

```js
browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["selection"]
  });
});

// This will run when a bookmark is created.
browser.bookmarks.onCreated.addListener(() => {
  // do something
});
```

수신기가 적절하게 트리거되지 않으므로, 비동기적으로 수신기를 등록하면 안 됩니다. 따라서 다음과 같이 코드를 작성하지 마세요.

```js
window.onload = () => {
  // WARNING! This event is not persisted, and will not restart the event page.
  browser.bookmarks.onCreated.addListener(() => {
    // do something
  });
}
```

대신에 이렇게 작성하세요.

```js
browser.tabs.onUpdated.addListener(() => {
  // This event is run in the top level scope of the event page, and will persist, allowing
  // it to restart the event page if necessary.
});
```

확장 기능은 {{WebExtAPIRef("runtime.onMessage")}} `removeListener`와 같이, `removeListener`를 호출해서 백그라운드 스크립트에서 수신기를 제거할 수 있습니다. 어떤 이벤트에 대해 모든 수신기가 제거되었다면, 브라우저는 해당 이벤트에 대해 더 이상 확장 기능의 백그라운드 스크립트를 로드하지 않습니다.

```js
browser.runtime.onMessage.addListener(function messageListener(message, sender, reply) {
  browser.runtime.onMessage.removeListener(messageListener);
});
```

### 이벤트 필터링

확장 기능이 다룰 수신기를 제한하려면 이벤트 필터를 지원하는 API를 사용하면 됩니다. 확장 기능이 {{WebExtAPIRef("tabs.onUpdated")}}을 수신중이라면, 필터를 지원하지 않는 tabs API 대신 {{WebExtAPIRef("webNavigation.onCompleted")}}를 필터와 함께 사용할 수 있습니다.

```js
browser.webNavigation.onCompleted.addListener(() => {
  console.log("This is my favorite website!");
}, { url: [{ urlMatches : 'https://www.mozilla.org/' }] });
```

### 수신기에 반응

수신기는 이벤트가 발생하면 기능을 트리거하기 위해 존재합니다. 이벤트에 반응하려면, 수신기 이벤트 내부에 원하는 동작을 구성합니다.

```js
browser.runtime.onMessage.addListener((message, callback) => {
  if (message.data === "setAlarm") {
    browser.alarms.create({delayInMinutes: 5})
  } else if (message.data === "runLogic") {
    browser.tabs.executeScript({file: 'logic.js'});
  } else if (message.data === "changeColor") {
    browser.tabs.executeScript(
      {code: 'document.body.style.backgroundColor="orange"'});
  };
});
```

### 백그라운드 스크립트 언로드하기

확장 기능이 {{WebExtAPIRef("runtime.onSuspend")}}를 받지 않고 충돌했을 때, 중요한 정보의 손실을 막으려면 데이터는 주기적으로 유지되어야 합니다. 스토리지 API를 사용해 이 과정을 지원할 수 있습니다.

```js
browser.storage.local.set({variable: variableInformation});
```

메시지 포트는 이벤트 페이지가 종료되는 것을 막을 수 없습니다. 확장 기능이 메시지 전달을 사용할 경우, 이벤트 페이지가 유휴 상태일 때 포트는 닫힙니다. {{WebExtAPIRef("runtime.Port")}} `onDisconnect`를 수신하면 열린 포트가 언제 닫히는지 알 수 있으나, 수신기는 {{WebExtAPIRef("runtime.onSuspend")}} 와 동일한 시간 제약 아래에 놓이게 됩니다.

```js
browser.runtime.onMessage.addListener((message, callback) => {
  if (message === 'hello') {
    sendResponse({greeting: 'welcome!'})
  } else if (message === 'goodbye') {
    browser.runtime.Port.disconnect();
  }
});
```

백그라운드 스크립트는 몇 초간 비활성화된 후 언로드됩니다. 그러나, 백그라운드 스크립트가 중단되었을 때 다른 이벤트가 백그라운드 스크립트를 깨우면, {{WebExtAPIRef("runtime.onSuspendCanceled")}}가 호출되어 백그라운드 스크립트는 계속 실행되게 됩니다. 정리가 필요하다면 {{WebExtAPIRef("runtime.onSuspend")}}를 수신하면 됩니다.

```js
browser.runtime.onSuspend.addListener(() => {
  console.log("Unloading.");
  chrome.browserAction.setBadgeText({text: ""});
});
```

그러나, {{WebExtAPIRef("runtime.onSuspend")}}에 의존하는 것 보다는 데이터를 유지하는 것이 선호되어야 합니다. {{WebExtAPIRef("runtime.onSuspend")}}는 필요할 수 있는 만큼의 정리를 허용하지 않고, 충돌이 발생했을 때에도 도움이 되지 않습니다.

## 비지속적으로 전환

이 섹션에서는 지속적 백그라운드 스크립트를 비지속적 백그라운드 모델로 전환하는 절차를 제공합니다.

### manifest.json 파일 업데이트

확장 기능의 `manifest.json` 파일에서 스크립트 또는 페이지에 대한 [`"background"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) 키의 지속성 속성을 `false`로 변경하세요.

```json
"background": {
  …,
  "persistent": false
}
```

### 이벤트 수신기 이동시키기

이벤트가 트리거되었을 시 백그라운드 스크립트를 활성화시키기 위해서 수신기들은 최상위 레벨에 있어야 합니다. 등록된 수신기들은 동기적 패턴으로 재구성되고, 최상단 레벨로 이동시켜 중첩되지 말아야 합니다.

```js
browser.runtime.onStartup.addListener(() => {
  // run startup function
})
```

### 상태 변화 기록

이제 스크립트가 필요에 따라 열리고 닫히므로, 상태와 값을 세팅하고 리턴하려면 스토리지 API를 사용하면 됩니다. {{WebExtAPIRef("storage.local")}} `set`을 사용해서 로컬 머신에서 업데이트를 수행합니다.

```js
browser.storage.local.set({ variable: variableInformation });
```

{{WebExtAPIRef("storage.local")}} `get`을 사용해서 해당 변수의 값을 받아옵니다.

```js
browser.storage.local.get(['variable'], (result) => {
  let someVariable = result.variable;
  // Do something with someVariable
});
```

### 타이머를 알람으로 변경

DOM 기반 타이머는 이벤트 페이지가 유휴 상태가 된 후 비활성화됩니다. 그 대신, 이벤트 페이지를 깨우기 위해서 {{WebExtAPIRef("alarms")}} API를 사용하면 됩니다.

```js
browser.alarms.create({delayInMinutes: 3.0})
```

그리고 수신기를 추가합니다.

```js
browser.alarms.onAlarm.addListener(() => {
  alert("Hello, world!")
});
```

### 백그라운드 스크립트 함수에 대해 호출 업데이트

콘텐츠 스크립트 또는 액션이 함수를 호출해야 할 경우, 이벤트 페이지가 실행중임을 보장하기 위해 {{WebExtAPIRef("runtime.getBackgroundPage")}}를 사용합니다. 만약 호출이 선택 사항이라면(즉 이벤트 페이지가 살아 있을 때만 필요하다면), {{WebExtAPIRef("extension.getBackgroundPage")}}을 사용하면 됩니다. 이 함수는 페이지가 실행 중이 아닐 시 `null`을 반환합니다.

```js
document.getElementById('target').addEventListener('click', async () => {
  let backgroundPage = await window.runtime.getBackgroundPage();
  backgroundPage.backgroundFunction();
});
```
