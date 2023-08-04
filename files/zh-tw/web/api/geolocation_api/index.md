---
title: 地理位置定位 (Geolocation)
slug: Web/API/Geolocation_API
---

Web Apps 若需要使用者的位置，可透過 **Geolocation API** 取得相關資訊。而基於隱私權的考量，這些 Web Apps 均必須取得使用者的許可之後，才能發佈位置資訊。

## 地理位置定位 (Geolocation) 物件

Geolocation API，是透過 [`navigator.geolocation`](/zh-TW/docs/Web/API/window.navigator.geolocation) `物件`所發佈。

若該物件可用，即可進行地理位置定位服務。因此可先測試地理位置定位是否存在：

```js
if ("geolocation" in navigator) {
  /* geolocation is available */
} else {
  /* geolocation IS NOT available */
}
```

> **備註：** 在 Firefox 24 之後的版本，即使停用此 API，`navigator` 中的「`geolocation`」也同樣回傳 `true`。此問題已根據規格而於` [Firefox 25](/zh-TW/docs/Mozilla/Firefox/Releases/25/Site_Compatibility) 中修正 ([bug 884921](https://bugzilla.mozilla.org/show_bug.cgi?id=884921))。

### 取得目前位置

若要取得使用者目前的位置，可呼叫 `getCurrentPosition()` 函式。如此將啟動非同步化的請求，以偵測使用者的位置，並將查詢定位硬體而取得最新資訊。一旦決定位置，隨即執行特定的回呼常式 (Callback routine)。若發生錯誤，則可選擇是否提供第二次回呼。第三項參數為選項介面 (亦可選擇是否使用之)，可設定位置回傳的的最長時間，與請求的等待時間。
若不論定位精確度而想儘快固定單一位置，則可使用 `getCurrentPosition()`。以具備 GPS 的裝置為例，往往需耗時 1 分鐘或更長的時間而固定 GPS 資訊。也因此，`getCurrentPosition()` 可能取得較低精確度的資料 (IP 位置或 WiFi) 而隨即開始作業。

> **備註：** 依預設值，[`getCurrentPosition()`](/zh-TW/docs/Web/API/window.navigator.geolocation.getCurrentPosition) 將儘快回傳較低精確度的結果。若不論精確度而只要儘快獲得答案，則可使用 [`getCurrentPosition()`](/zh-TW/docs/Web/API/window.navigator.geolocation.getCurrentPosition)。舉例來說，搭載 GPS 的裝置可能需要一段時間才能取得 GPS 定位資訊，所以可能將低精確度的資料 (IP 位置或 Wifi) 回傳至 [`getCurrentPosition()`](/zh-TW/docs/Web/API/window.navigator.geolocation.getCurrentPosition)。

```js
navigator.geolocation.getCurrentPosition(function (position) {
  do_something(position.coords.latitude, position.coords.longitude);
});
```

一旦取得定位位置之後，上列範例隨即將執行 `do_something()` 函式。

### 觀看目前位置

如果定位資料改變 (可能是裝置移動，或取得更精確的地理位置資訊)，則可設定 1 組回呼函式，使其隨著更新過的定位資訊而呼叫之。而這個動作可透過 `watchPosition() 函式`完成。[`watchPosition()`](/zh-TW/docs/Web/API/window.navigator.geolocation.watchPosition) 所具備的輸入參數與 `getCurrentPosition()`相同。回呼函式將呼叫數次，讓瀏覽器可於使用者移動期間更新位置，或可根據目前所使用的不同定位技術，提供更精確的定位資訊。若一直未回傳有效結果，則錯誤回呼 (Error Callback) 函式僅將呼叫 1 次。另請注意，錯誤回呼函式僅限於 `getCurrentPosition()，因此為選填`。

> **備註：** 不需啟動 [`getCurrentPosition()`](/zh-TW/docs/Web/API/window.navigator.geolocation.getCurrentPosition) 呼叫，亦可使用 [`watchPosition()`](/zh-TW/docs/Web/API/window.navigator.geolocation.watchPosition)。

```js
var watchID = navigator.geolocation.watchPosition(function (position) {
  do_something(position.coords.latitude, position.coords.longitude);
});
```

`watchPosition()` 函式將回傳 1 組 ID 編號，專用以識別必要的定位監看員 (Watcher)。而此數值若搭配 `clearWatch()` 函式，即可停止觀看使用者的位置。

```plain
navigator.geolocation.clearWatch(watchID);
```

### 微調回應

[`getCurrentPosition()`](/zh-TW/docs/Web/API/window.navigator.geolocation.getCurrentPosition) 與 [`watchPosition()`](/zh-TW/docs/Web/API/window.navigator.geolocation.watchPosition) 均可容納 1 組成功回呼、1 組錯誤回呼 (選填)、1 組 `PositionOptions` 物件 (選填)。

對 [`watchPosition`](/zh-TW/docs/Web/API/window.navigator.geolocation.watchPosition) 的呼叫應類似如下：

```js
function geo_success(position) {
  do_something(position.coords.latitude, position.coords.longitude);
}

function geo_error() {
  alert("Sorry, no position available.");
}

var geo_options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};

var wpid = navigator.geolocation.watchPosition(
  geo_success,
  geo_error,
  geo_options,
);
```

現成的 watchPosition Demo：<http://www.thedotproduct.org/experiments/geo/>

## 敘述位置

以 `Position` 物件參照 `Coordinates` 物件，即可敘述使用者的位置。

## 處理錯誤

在呼叫 `getCurrentPosition()` 或 `watchPosition() 時，`若獲得錯誤回呼函式，則`錯誤回呼函式的第一組參數將為 PositionError 物件：`

```js
function errorCallback(error) {
  alert("ERROR(" + error.code + "): " + error.message);
}
```

## 地理位置定位實際範例

### HTML 內容

```html
<p><button onclick="geoFindMe()">Show my location</button></p>
<div id="out"></div>
```

### JavaScript 內容

```js
function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation) {
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML =
      "<p>Latitude is " +
      latitude +
      "° <br>Longitude is " +
      longitude +
      "°</p>";

    var img = new Image();
    img.src =
      "http://maps.googleapis.com/maps/api/staticmap?center=" +
      latitude +
      "," +
      longitude +
      "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}
```

### 現場測試結果

若無法顯示，可至本文右上角「Language」切換回英文原文觀看。

{{EmbedLiveSample('地理位置定位實際範例', 350, 150)}}

## 請求權限

addons.mozilla.org 上所提供的任何附加元件，只要使用地理位置定位資料，均必須明確取得許可才能繼續作業。下列函式詢問許可的方法，則類似網頁詢問許可的自動提示方法，但更為簡單。若為可套用的狀態，則使用者的回應將儲存於 `pref` 參數所指定的偏好中。於 `callback` 參數中所提供的函式，將透過 1 組代表使用者反應的布林值而呼叫之。若使用者的回應為 `true`，則附加元件才會存取地理位置定位資料。

```js
function prompt(window, pref, message, callback) {
  let branch = Components.classes[
    "@mozilla.org/preferences-service;1"
  ].getService(Components.interfaces.nsIPrefBranch);

  if (branch.getPrefType(pref) === branch.PREF_STRING) {
    switch (branch.getCharPref(pref)) {
      case "always":
        return callback(true);
      case "never":
        return callback(false);
    }
  }

  let done = false;

  function remember(value, result) {
    return function () {
      done = true;
      branch.setCharPref(pref, value);
      callback(result);
    };
  }

  let self = window.PopupNotifications.show(
    window.gBrowser.selectedBrowser,
    "geolocation",
    message,
    "geo-notification-icon",
    {
      label: "Share Location",
      accessKey: "S",
      callback: function (notification) {
        done = true;
        callback(true);
      },
    },
    [
      {
        label: "Always Share",
        accessKey: "A",
        callback: remember("always", true),
      },
      {
        label: "Never Share",
        accessKey: "N",
        callback: remember("never", false),
      },
    ],
    {
      eventCallback: function (event) {
        if (event === "dismissed") {
          if (!done) callback(false);
          done = true;
          window.PopupNotifications.remove(self);
        }
      },
      persistWhileVisible: true,
    },
  );
}

prompt(
  window,
  "extensions.foo-addon.allowGeolocation",
  "Foo Add-on wants to know your location.",
  function callback(allowed) {
    alert(allowed);
  },
);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## Gecko 註記

Firefox 可透過 Google 的定位服務 (Google Location Services，GLS)，根據使用者的 WiFi 資訊而找出使用者的位置。與 Google 之間所交換的資料，包含 WiFi 存取點 (Access Point) 資料、Access token (類似 2 個禮拜的 cookie)、使用者的 IP 位址。若需更多資訊，可參閱 [Mozilla 的隱私權政策](http://www.mozilla.com/en-US/legal/privacy/)與 [Google 的隱私權政策](http://www.google.com/privacy-lsf.html)。其內將詳述資料的使用方式。

Firefox 3.6 (Gecko 1.9.2) 新支援了 [GPSD](http://catb.org/gpsd/) (GPS daemon) 服務，適合 Linux 的地理位置定位。

## 另請參閱

- [`navigator.geolocation`](/zh-TW/docs/Web/API/window.navigator.geolocation)
- [w3.org 的 Geolocation API](http://www.w3.org/TR/geolocation-API/)
- [Geolocation API 相關 Demos](/zh-TW/demos/tag/tech:geolocation)
