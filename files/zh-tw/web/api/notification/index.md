---
title: Notification
slug: Web/API/Notification
---

{{APIRef("Web Notifications")}}

[Notifications API](/zh-TW/docs/Web/API/Notifications_API) 的 `Notification` interface 是用來設置及顯示「桌面通知」給使用。

{{AvailableInWorkers}}

## Constructor

- {{domxref("Notification.Notification", "Notification()")}}
  - : 建立一個新的 {{domxref('Notification')}} 實例。

## Properties

### 靜態屬性

以下的屬性僅適用於 `Notification` 實例。

- {{domxref("Notification.permission")}} {{readonlyinline}}
  - : 一個表示允許通知顯示與否的權限的 string。可能的值有：「denied」(使用者不允許顯示 Notification )、「granted」(使用者允許顯示 Notification )，或者是「default」(還不知道使用者允許與否，預設行為與 denied 一致)。

### 實例屬性

以下屬應僅適用於 `Notification` 實例。

- {{domxref("Notification.title")}} {{readonlyinline}}
  - : 在建構子的 options 參數中指定的 Notification 的標題。
- {{domxref("Notification.dir")}} {{readonlyinline}}
  - : 在建構子的 options 參數中指定的 Notification 的文字顯示方向。
- {{domxref("Notification.lang")}} {{readonlyinline}}
  - : 在建構子的 options 參數中指定的 Notification 的語言代號。
- {{domxref("Notification.body")}} {{readonlyinline}}
  - : 在建構子的 options 參數中指定的 Notification 的內容。
- {{domxref("Notification.tag")}} {{readonlyinline}}
  - : The ID of the notification (if any) as specified in the options parameter of the constructor.
- {{domxref("Notification.icon")}} {{readonlyinline}}
  - : 在建構子的 options 參數中指定的 Notification 的 icon 的網址。
- {{domxref("Notification.data")}} {{readonlyinline}}
  - : 回傳結構化的 Notification 的資料。
- {{domxref("Notification.requireInteraction")}} {{readonlyinline}}
  - : 一個 {{jsxref("Boolean")}} 指示在有充足大小的螢幕上的時候，Notfication 實例是否會持續顯示直到使用者點擊它或者 dismisses it。
- {{domxref("Notification.silent")}} {{readonlyinline}}
  - : 表示 Notfication 是否設定要以較低調的方式呈現(比如不撥放通知音效、不震動)。這個設定與裝置本身的設定無關。
- {{domxref("Notification.timestamp")}} {{readonlyinline}}
  - : 表示 Notification 的建立時間、或者可啟動的時間 (可能是過去、現在或未來)。
- {{domxref("Notification.vibrate")}} {{readonlyinline}}
  - : 表示在可震動的裝置上的震動模式。

#### 尚未支援的屬性

The following properties are listed in the most up-to-date spec, but are not supported in any browsers yet. It is advisable to keep checking back regularly to see if the status of these has updated, and let us know if you find any out of date information.

- {{domxref("Notification.noscreen")}} {{readonlyinline}}
  - : 表示 Notification 顯示時是否要打開裝置的螢幕。
- {{domxref("Notification.renotify")}} {{readonlyinline}}
  - : 表示使用者是否會在舊的 Notification 被新的 Notification 替換掉時通知。
- {{domxref("Notification.sound")}} {{readonlyinline}}
  - : 表示當 Notification 顯示時要用來代替系統預設音效撥放的音訊資源。
- {{domxref("Notification.sticky")}} {{readonlyinline}}
  - : 表示 Notification 是否「sticky」(比如使用者不太容易清除它)。

#### 事件處理器

- {{domxref("Notification.onclick")}}
  - : 一個 [`click`](/zh-TW/docs/Web/API/Element/click_event) 事件的 handler。每次使用者點擊 Notification 都會被觸發。
- {{domxref("Notification.onerror")}}
  - : 一個 [`error`](/zh-TW/docs/Web/API/Element/error_event) 事件的 handler. 每次 Notification 發生 Error 都會被觸發。

#### 停止支援的事件處理器

底下這些列在 [瀏覽器支援度](#瀏覽器支援度) 中的 event handlers 雖然還有支援，但已經從近期的 spec 中移除了。因為瀏覽器會在未來的版本逐漸停止支援，最好還是不要使用它們。

- {{domxref("Notification.onclose")}}
  - : A handler for the [`close`](/zh-TW/docs/Web/API/Notification/close) event. It is triggered when the user closes the notification.
- {{domxref("Notification.onshow")}}
  - : A handler for the [`show`](/zh-TW/docs/Web/API/Element/show_event) event. It is triggered when the notification is displayed.

## 方法

### 靜態方法

這些方法只能在 `Notification` 實例上使用。

- {{domxref("Notification.requestPermission()")}}
  - : 向使用者詢問是否開放顯示 Notification 的權限。

### 實例方法

These properties are available only on an instance of the `Notification` object or through its [`prototype`](/zh-TW/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain). The `Notification` object also inherits from the {{domxref("EventTarget")}} interface.

- {{domxref("Notification.close()")}}
  - : 透過這個方法關閉 Notification 。

## 範例

先看這段基本的 HTML：

```html
<button onclick="notifyMe()">Notify me!</button>
```

用下面的程式碼我們可以送出通知： 底下的程式碼雖然略嫌冗長，但完整的示範了如何在送出通知之前，事先檢查了瀏覽器是否支援 Notification、使用者是否授權這個網域的網頁送出通知，以及在需要的時候向使用者詢問是否開放權限。

```js
function notifyMe() {
  // 首先讓我們確定瀏覽器支援 Notification
  if (!("Notification" in window)) {
    alert("這個瀏覽器不支援 Notification");
  }

  // 再檢查使用者是否已經授權執行 Notification
  else if (Notification.permission === "granted") {
    // 如果已經授權就可以直接新增 Notification 了!
    var notification = new Notification("安安你好!");
  }

  // 否則，我們會需要詢問使用者是否開放權限
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // 如果使用者同意了就來新增一個 Notification 打聲招呼吧
      if (permission === "granted") {
        var notification = new Notification("安安~");
      }
    });
  }

  // 如果使用者還是不同意授權執行 Notification
  // 最好還是進行適當的處理以避免繼續打擾使用者
}
```

{{EmbedLiveSample('範例', '100%', 30)}}

在很多時候，你應該不會想要這麼冗長的程式碼。 比如說，在我們的 [Emogotchi demo](http://mdn.github.io/emogotchi/) ([see source code](https://github.com/mdn/emogotchi)) 之中，我們只寫了 {{domxref("Notification.requestPermission")}} 而不用進一步檢查是否已經獲得了權限：

```js
Notification.requestPermission();
```

然後我們只需要在要新增 Notfication 時執行這個 `spawnNotification()` — 透過傳入指定的 body、icon、title，然後它就會產生我們所需的 options 參數並透過 {{domxref("Notification.Notification","Notification()")}} 建構子發送 Notification.

```js
function spawnNotification(theBody,theIcon,theTitle) {
  var options = {
      body: theBody,
      icon: theIcon
  }
  var n = new Notification(theTitle,options);
}
```

## 規格

{{Specifications}}

## 瀏覽器支援度

{{Compat}}

## 延伸閱讀

- [Using the Notifications API](/zh-TW/docs/Web/API/Notifications_API/Using_the_Notifications_API)
