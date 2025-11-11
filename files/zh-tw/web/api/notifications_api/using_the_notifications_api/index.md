---
title: 使用 Web Notifications
slug: Web/API/Notifications_API/Using_the_Notifications_API
---

{{DefaultAPISidebar("Web Notifications")}}{{SeeCompatTable}}

## 摘要

Web Notifications API 可將通知傳送至頁面以外的系統層級並顯示通知。因此即使 Web Apps 處於閒置狀態，亦可傳送資訊予使用者。絕佳範例之一，就是在使用其他 Apps 時，Web Mail App 同樣可通知使用者已接收到新郵件。

## 要求權限

### 網頁內容

在 Apps 傳送通知之前，使用者必須先許可 Apps 的動作。只要 APIs 嘗試予網頁之外的東西互動，均必須先獲得使用者的授權。如此可避免濫發通知而影響使用經驗。

透過 [`Notification.permission`](/zh-TW/docs/Web/API/Notification/permission_static) 唯讀屬性，要傳送通知的 Apps 將檢查目前的授權狀態。此屬性共有 3 組參數：

- `default`：使用者尚未給予任何權限 (因此不會顯示任何通知)
- `granted`：使用者允許接收到 Apps 的通知
- `denied`：使用者拒絕接收 Apps 的通知

> [!NOTE]
> Chrome 與 Safari 尚未建構 `permission` 屬性。

若使用者尚未給予權限，則 Apps 必須透過 [`Notification.requestPermission()`](/zh-TW/docs/Web/API/Notification/requestPermission_static) 函式讓使用者選擇，接著由此函式接收 1 組回呼 (Callback) 函式作為參數；而該回呼函式則提供使用者是否授權的資訊。

以下為啟動 Apps 時要求權限的常用範例：

```js
window.addEventListener("load", function () {
  Notification.requestPermission(function (status) {
    // This allows to use Notification.permission with Chrome/Safari
    if (Notification.permission !== status) {
      Notification.permission = status;
    }
  });
});
```

### 已安裝的 App

在安裝 App 之後，若於 [App 的 manifest 檔案](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json)中直接添加權限，即可省去再次向使用者要求權限的動作。

```json
permissions: {
  "desktop-notification": {
    "description: "Allows to display notifications on the user's desktop.
  }
}
```

## 建立通知

透過 [`Notification`](/zh-TW/docs/Web/API/Notification) 建構子 (Constructor) 即可建立通知。此建構子包含 1 組標題，可於通知內顯示；另有如 [`icon`](/zh-TW/docs/Web/API/Notification/icon) 或文字 [`body`](/zh-TW/docs/Web/API/Notification/body) 等數個選項，可強化通知的內容。

在建立實體 (Instantiated) 之後，就會儘快顯示通知。若要追蹤通知的目前狀態，必須在 [`Notification`](/zh-TW/docs/Web/API/Notification) 的實體階層觸發 4 個事件：

- [show](/zh-TW/docs/Web/Reference/Events/show)：對使用者顯示通知之後，隨即觸發
- [click](/zh-TW/docs/Web/API/Element/click_event)：使用者點擊通知之後，隨即觸發
- [close](/zh-TW/docs/Web/Reference/Events/close)：關閉通知之後，隨即觸發
- [error](/zh-TW/docs/Web/API/HTMLElement/error_event)：通知發生任何錯誤 (大多數是因為某種情況而未顯示通知)，隨即觸發

而透過 [`onshow`](/zh-TW/docs/Web/API/Notification/show_event)、[`onclick`](/zh-TW/docs/Web/API/Notification/click_event)、[`onclose`](/zh-TW/docs/Web/API/Notification/close_event)，或 [`onerror`](/zh-TW/docs/Web/API/Notification/error_event) 等事件處理器 (Event handler)，即可追蹤這些事件。由於 [`Notification`](/zh-TW/docs/Web/API/Notification) 是繼承 [`EventTarget`](/zh-TW/docs/Web/API/EventTarget) 而來，因此亦可使用 [`addEventListener()`](/zh-TW/docs/Web/API/EventTarget/addEventListener) 函式。

> [!NOTE]
> Firefox 與 Safari 並未遵守 close 事件的規格。此規格雖然規定「僅限使用者能關閉通知」，但 Firefox 與 Safari 卻可於數分鐘後自動關閉通知。因此不一定是由使用者關閉通知。此規格並明確規定「應透過 [`Notification.close()`](/zh-TW/docs/Web/API/Notification/close) 函式，於應用程式層級完成自動關閉通知」。範例程式碼如下：
>
> ```js
> var n = new Notification("Hi!");
> n.onshow = function () {
>   setTimeout(n.close, 5000);
> };
> ```

### 簡易範例

先假設下列基本 HTML：

```html
<button>Notify me!</button>
```

則能以這種方法處理通知：

```js
window.addEventListener("load", function () {
  // At first, let's check if we have permission for notification
  // If not, let's ask for it
  if (Notification && Notification.permission !== "granted") {
    Notification.requestPermission(function (status) {
      if (Notification.permission !== status) {
        Notification.permission = status;
      }
    });
  }
  var button = document.getElementsByTagName("button")[0];
  button.addEventListener("click", function () {
    // If the user agreed to get notified
    if (Notification && Notification.permission === "granted") {
      var n = new Notification("Hi!");
    }
    // If the user hasn't told if he wants to be notified or not
    // Note: because of Chrome, we are not sure the permission property
    // is set, therefore it's unsafe to check for the "default" value.
    else if (Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        if (Notification.permission !== status) {
          Notification.permission = status;
        }
        // If the user said okay
        if (status === "granted") {
          var n = new Notification("Hi!");
        }
        // Otherwise, we can fallback to a regular modal alert
        else {
          alert("Hi!");
        }
      });
    }
    // If the user refuses to get notified
    else {
      // We can fallback to a regular modal alert
      alert("Hi!");
    }
  });
});
```

### 現場測試結果

若無法顯示，可至本文右上角「Language」切換回英文原文觀看。

{{ EmbedLiveSample('簡易範例', '100%', 30) }}

## 處理多筆通知

某些情況下 (如某個即時訊息 App 持續通知每一筆進來的訊息)，使用者可能會接收大量的通知。為了避免太多非必要訊息擠爆使用者的桌面，則應該讓等待中的通知進入佇列。

將標籤添加至任何新的通知，即可達到佇列效果。若通知擁有相同的標籤且尚未顯示，則新通知就會取代先前的通知；反之，若已顯示了相同標籤的通知，就會關閉先前的通知而顯示新通知。

### 標籤範例

先假設下列基本 HTML：

```html
<button>Notify me!</button>
```

則能以下列方式處理多筆通知：

```js
window.addEventListener('load', function () {
  // At first, let's check if we have permission for notification
  // If not, let's ask for it
  if (Notification && Notification.permission !== "granted") {
    Notification.requestPermission(function (status) {
      if (Notification.permission !== status) {
        Notification.permission = status;
      }
    });
  }
  var button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', function () {
    // If the user agreed to get notified
    // Let's try to send ten notifications
    if (Notification && Notification.permission === "granted") {
      for (var i = 0; i < 10; i++) {
        // Thanks to the tag, we should only see the "Hi! 10" notification
        var n = new Notification("Hi! " + i, {tag: 'soManyNotification'});
      }
    }
    // If the user hasn't told if he wants to be notified or not
    // Note: because of Chrome, we are not sure the permission property
    // is set, therefore it's unsafe to check for the "default" value.
    else if (Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function (status) {
        if (Notification.permission !== status) {
          Notification.permission = status;
        }
        // If the user said okay
        if (status === "granted") {
          for (var i = 0; i < 10; i++) {
            // Thanks to the tag, we should only see the "Hi! 10" notification
            var n = new Notification("Hi! " + i, {tag: 'soManyNotification'});
          }
        }
        // Otherwise, we can fallback to a regular modal alert
        else {
          alert(Hi!");
        }
      });
    }
    // If the user refuses to get notified
    else {
      // We can fallback to a regular modal alert
      alert(Hi!");
    }
  });
});
```

#### 現場測試結果

若無法顯示，可至本文右上角「Language」切換回英文原文觀看。

{{ EmbedLiveSample('標籤範例', '100%', 30) }}

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 另可參閱

- {{ domxref("Notification") }}
