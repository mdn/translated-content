---
title: Notifications API
slug: Web/API/Notifications_API
---

{{DefaultAPISidebar("Web Notifications")}}

Notifications API 允許網頁控制向終端用戶顯示系統通知 — 它在網頁瀏覽器的視圖之外，因此使用者切換顯示卡或移至不同的應用程式也能顯示。此 API 設計為在相容於不同平台與現有的通知系統相容。

## 概念與使用方法

在受到支持的平台上，顯示系統通知通常涉及兩件事。 首先，用戶需要授予當前的來源權限才能顯示系統通知，通常在應用程式或網站初始化完成後使用{{domxref("Notification.requestPermission()")}} 方法。

```js
btn.addEventListener("click", function () {
  let promise = Notification.requestPermission();
  // wait for permission
});
```

這不僅是最佳實踐 — 你不應向用戶發送他們不同意的通知，並且在未來瀏覽器將明確禁止沒有響應用戶請求允許通知對話框的通知。Firefox 72 開始已遵循這項約定。使用此方法將產生一個請求對話框，如下所示：

![](screen_shot_2019-12-11_at_9.59.14_am.png)

用戶可以從此處選擇允許、屏蔽來自此來源的通知，也可以不做選擇。 一旦選定，該設置通常將在當前會話中保持不變。

> [!NOTE]
> 從 Firefox 44 開始，Notifications 和 [Push](/zh-TW/docs/Web/API/Push_API) 的權限已合併。如果授予通知權限則推送也將被啟用。

下一步，使用 {{domxref("Notification.Notification","Notification()")}} 構造函數創建一個新通知。 這必須要傳遞一個標題參數(title)，並且可以選擇性的傳遞選擇物件指定諸如文字方向、正文、圖標、撥放通知的聲音等等。

{{AvailableInWorkers}}

另外，Notifications API 規範指定了 [ServiceWorker API](/zh-TW/docs/Web/API/Service_Worker_API) 的許多附加功能，以允許服務人員觸發通知。

> [!NOTE]
> 要了解有關在自己的應用程序中使用通知的更多信息，請閱讀 [Using the Notifications API](/zh-TW/docs/Web/API/Notifications_API/Using_the_Notifications_API)。

## Notifications 介面

- {{domxref("Notification")}}
  - : 定義一個通知物件。

### Service worker 附加功能

- {{domxref("ServiceWorkerRegistration")}}
  - : 包含 {{domxref("ServiceWorkerRegistration.showNotification()")}} 和 {{domxref("ServiceWorkerRegistration.getNotifications()")}} 用於控制通知顯示的方法。
- {{domxref("ServiceWorkerGlobalScope")}}
  - : 包含 {{domxref("ServiceWorkerGlobalScope.onnotificationclick")}} 點擊通知時觸發自定義函數的處理程序。
- {{domxref("NotificationEvent")}}
  - : 基於 {{domxref("ExtendableEvent")}} 的特定類型的事件對象，它表示已觸發的通知。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## Firefox OS permissions

When using notifications in a Firefox OS app, be sure to add the `desktop-notification` permission in your manifest file. Notifications can be used at any permission level, hosted or above:

```json
"permissions": {
  "desktop-notification": {}
}
```

## 參見

- [Using the Notifications API](/zh-TW/docs/Web/API/Notifications_API/Using_the_Notifications_API)
