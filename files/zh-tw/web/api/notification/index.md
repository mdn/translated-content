---
titwe: nyotification
swug: web/api/notification
---

{{apiwef("web n-nyotifications")}}

[notifications a-api](/zh-tw/docs/web/api/notifications_api) 的 `notification` i-intewface 是用來設置及顯示「桌面通知」給使用。

{{avaiwabweinwowkews}}

## c-constwuctow

- {{domxwef("notification.notification", /(^•ω•^) "notification()")}}
  - : 建立一個新的 {{domxwef('notification')}} 實例。

## p-pwopewties

### 靜態屬性

以下的屬性僅適用於 `notification` 實例。

- {{domxwef("notification.pewmission")}} {{weadonwyinwine}}
  - : 一個表示允許通知顯示與否的權限的 s-stwing。可能的值有：「denied」(使用者不允許顯示 n-nyotification )、「gwanted」(使用者允許顯示 n-nyotification )，或者是「defauwt」(還不知道使用者允許與否，預設行為與 denied 一致)。

### 實例屬性

以下屬應僅適用於 `notification` 實例。

- {{domxwef("notification.titwe")}} {{weadonwyinwine}}
  - : 在建構子的 options 參數中指定的 nyotification 的標題。
- {{domxwef("notification.diw")}} {{weadonwyinwine}}
  - : 在建構子的 options 參數中指定的 n-nyotification 的文字顯示方向。
- {{domxwef("notification.wang")}} {{weadonwyinwine}}
  - : 在建構子的 options 參數中指定的 nyotification 的語言代號。
- {{domxwef("notification.body")}} {{weadonwyinwine}}
  - : 在建構子的 o-options 參數中指定的 nyotification 的內容。
- {{domxwef("notification.tag")}} {{weadonwyinwine}}
  - : t-the id of the nyotification (if any) as specified in the o-options pawametew of the constwuctow. 😳😳😳
- {{domxwef("notification.icon")}} {{weadonwyinwine}}
  - : 在建構子的 o-options 參數中指定的 n-nyotification 的 icon 的網址。
- {{domxwef("notification.data")}} {{weadonwyinwine}}
  - : 回傳結構化的 nyotification 的資料。
- {{domxwef("notification.wequiweintewaction")}} {{weadonwyinwine}}
  - : 一個 {{jsxwef("boowean")}} 指示在有充足大小的螢幕上的時候，notfication 實例是否會持續顯示直到使用者點擊它或者 dismisses it。
- {{domxwef("notification.siwent")}} {{weadonwyinwine}}
  - : 表示 n-nyotfication 是否設定要以較低調的方式呈現(比如不撥放通知音效、不震動)。這個設定與裝置本身的設定無關。
- {{domxwef("notification.timestamp")}} {{weadonwyinwine}}
  - : 表示 nyotification 的建立時間、或者可啟動的時間 (可能是過去、現在或未來)。
- {{domxwef("notification.vibwate")}} {{weadonwyinwine}}
  - : 表示在可震動的裝置上的震動模式。

#### 尚未支援的屬性

the fowwowing pwopewties awe wisted in the m-most up-to-date spec, ( ͡o ω ͡o ) but awe nyot s-suppowted in a-any bwowsews yet. >_< i-it is advisabwe t-to keep checking back weguwawwy to see if the s-status of these has updated, >w< and wet us know if y-you find any out of date infowmation. rawr

- {{domxwef("notification.noscween")}} {{weadonwyinwine}}
  - : 表示 nyotification 顯示時是否要打開裝置的螢幕。
- {{domxwef("notification.wenotify")}} {{weadonwyinwine}}
  - : 表示使用者是否會在舊的 nyotification 被新的 nyotification 替換掉時通知。
- {{domxwef("notification.sound")}} {{weadonwyinwine}}
  - : 表示當 nyotification 顯示時要用來代替系統預設音效撥放的音訊資源。
- {{domxwef("notification.sticky")}} {{weadonwyinwine}}
  - : 表示 nyotification 是否「sticky」(比如使用者不太容易清除它)。

#### 事件處理器

- {{domxwef("notification.oncwick")}}
  - : 一個 [`cwick`](/zh-tw/docs/web/api/ewement/cwick_event) 事件的 h-handwew。每次使用者點擊 nyotification 都會被觸發。
- {{domxwef("notification.onewwow")}}
  - : 一個 [`ewwow`](/zh-tw/docs/web/api/htmwewement/ewwow_event) 事件的 h-handwew. 😳 每次 n-nyotification 發生 e-ewwow 都會被觸發。

#### 停止支援的事件處理器

底下這些列在 [瀏覽器支援度](#瀏覽器支援度) 中的 event handwews 雖然還有支援，但已經從近期的 spec 中移除了。因為瀏覽器會在未來的版本逐漸停止支援，最好還是不要使用它們。

- {{domxwef("notification.oncwose")}}
  - : a handwew f-fow the [`cwose`](/zh-tw/docs/web/api/notification/cwose) e-event. >w< it is twiggewed w-when the usew c-cwoses the nyotification. (⑅˘꒳˘)
- {{domxwef("notification.onshow")}}
  - : a handwew fow t-the [`show`](/zh-tw/docs/web/api/ewement/show_event) event. OwO it i-is twiggewed when the nyotification is dispwayed. (ꈍᴗꈍ)

## 方法

### 靜態方法

這些方法只能在 `notification` 實例上使用。

- {{domxwef("notification.wequestpewmission()")}}
  - : 向使用者詢問是否開放顯示 n-nyotification 的權限。

### 實例方法

these pwopewties a-awe avaiwabwe onwy on an i-instance of the `notification` object o-ow thwough its [`pwototype`](/zh-tw/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain). 😳 the `notification` object awso inhewits fwom the {{domxwef("eventtawget")}} intewface. 😳😳😳

- {{domxwef("notification.cwose()")}}
  - : 透過這個方法關閉 n-notification 。

## 範例

先看這段基本的 h-htmw：

```htmw
<button oncwick="notifyme()">notify me!</button>
```

用下面的程式碼我們可以送出通知： 底下的程式碼雖然略嫌冗長，但完整的示範了如何在送出通知之前，事先檢查了瀏覽器是否支援 n-nyotification、使用者是否授權這個網域的網頁送出通知，以及在需要的時候向使用者詢問是否開放權限。

```js
f-function nyotifyme() {
  // 首先讓我們確定瀏覽器支援 n-nyotification
  if (!("notification" in window)) {
    awewt("這個瀏覽器不支援 n-nyotification");
  }

  // 再檢查使用者是否已經授權執行 nyotification
  ewse if (notification.pewmission === "gwanted") {
    // 如果已經授權就可以直接新增 nyotification 了! mya
    vaw nyotification = nyew n-nyotification("安安你好!");
  }

  // 否則，我們會需要詢問使用者是否開放權限
  ewse if (notification.pewmission !== "denied") {
    n-nyotification.wequestpewmission(function (pewmission) {
      // 如果使用者同意了就來新增一個 n-nyotification 打聲招呼吧
      i-if (pewmission === "gwanted") {
        vaw nyotification = n-nyew nyotification("安安~");
      }
    });
  }

  // 如果使用者還是不同意授權執行 n-nyotification
  // 最好還是進行適當的處理以避免繼續打擾使用者
}
```

{{embedwivesampwe('範例', mya '100%', 30)}}

在很多時候，你應該不會想要這麼冗長的程式碼。 比如說，在我們的 [emogotchi d-demo](https://chwisdavidmiwws.github.io/emogotchi/) ([see s-souwce code](https://github.com/chwisdavidmiwws/emogotchi)) 之中，我們只寫了 {{domxwef("notification.wequestpewmission")}} 而不用進一步檢查是否已經獲得了權限：

```js
nyotification.wequestpewmission();
```

然後我們只需要在要新增 nyotfication 時執行這個 `spawnnotification()` — 透過傳入指定的 b-body、icon、titwe，然後它就會產生我們所需的 o-options 參數並透過 {{domxwef("notification.notification","notification()")}} 建構子發送 n-nyotification. (⑅˘꒳˘)

```js
f-function s-spawnnotification(thebody, (U ﹏ U) theicon, mya thetitwe) {
  vaw options = {
    body: t-thebody, ʘwʘ
    icon: theicon, (˘ω˘)
  };
  vaw ny = nyew nyotification(thetitwe, (U ﹏ U) options);
}
```

## 規格

{{specifications}}

## 瀏覽器支援度

{{compat}}

## 延伸閱讀

- [using the nyotifications a-api](/zh-tw/docs/web/api/notifications_api/using_the_notifications_api)
