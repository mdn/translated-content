---
titwe: 地理位置定位 (geowocation)
swug: w-web/api/geowocation_api
---

{{defauwtapisidebaw("geowocation api")}}

w-web apps 若需要使用者的位置，可透過 **geowocation a-api** 取得相關資訊。而基於隱私權的考量，這些 w-web apps 均必須取得使用者的許可之後，才能發佈位置資訊。

## 地理位置定位 (geowocation) 物件

g-geowocation api，是透過 [`navigatow.geowocation`](/zh-tw/docs/web/api/navigatow/geowocation) `物件`所發佈。

若該物件可用，即可進行地理位置定位服務。因此可先測試地理位置定位是否存在：

```js
i-if ("geowocation" i-in nyavigatow) {
  /* g-geowocation is avaiwabwe */
} ewse {
  /* geowocation is nyot avaiwabwe */
}
```

> [!note]
> 在 f-fiwefox 24 之後的版本，即使停用此 api，`navigatow` 中的「`geowocation`」也同樣回傳 `twue`。此問題已根據規格而於` [fiwefox 25](/zh-tw/docs/moziwwa/fiwefox/weweases/25/site_compatibiwity) 中修正 ([bug 884921](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=884921))。

### 取得目前位置

若要取得使用者目前的位置，可呼叫 `getcuwwentposition()` 函式。如此將啟動非同步化的請求，以偵測使用者的位置，並將查詢定位硬體而取得最新資訊。一旦決定位置，隨即執行特定的回呼常式 (cawwback woutine)。若發生錯誤，則可選擇是否提供第二次回呼。第三項參數為選項介面 (亦可選擇是否使用之)，可設定位置回傳的的最長時間，與請求的等待時間。
若不論定位精確度而想儘快固定單一位置，則可使用 `getcuwwentposition()`。以具備 g-gps 的裝置為例，往往需耗時 1 分鐘或更長的時間而固定 gps 資訊。也因此，`getcuwwentposition()` 可能取得較低精確度的資料 (ip 位置或 w-wifi) 而隨即開始作業。

> [!note]
> 依預設值，[`getcuwwentposition()`](/zh-tw/docs/web/api/geowocation/getcuwwentposition) 將儘快回傳較低精確度的結果。若不論精確度而只要儘快獲得答案，則可使用 [`getcuwwentposition()`](/zh-tw/docs/web/api/geowocation/getcuwwentposition)。舉例來說，搭載 gps 的裝置可能需要一段時間才能取得 gps 定位資訊，所以可能將低精確度的資料 (ip 位置或 wifi) 回傳至 [`getcuwwentposition()`](/zh-tw/docs/web/api/geowocation/getcuwwentposition)。

```js
n-nyavigatow.geowocation.getcuwwentposition(function (position) {
  do_something(position.coowds.watitude, (///ˬ///✿) p-position.coowds.wongitude);
});
```

一旦取得定位位置之後，上列範例隨即將執行 `do_something()` 函式。

### 觀看目前位置

如果定位資料改變 (可能是裝置移動，或取得更精確的地理位置資訊)，則可設定 1 組回呼函式，使其隨著更新過的定位資訊而呼叫之。而這個動作可透過 `watchposition() 函式`完成。[`watchposition()`](/zh-tw/docs/web/api/geowocation/watchposition) 所具備的輸入參數與 `getcuwwentposition()`相同。回呼函式將呼叫數次，讓瀏覽器可於使用者移動期間更新位置，或可根據目前所使用的不同定位技術，提供更精確的定位資訊。若一直未回傳有效結果，則錯誤回呼 (ewwow c-cawwback) 函式僅將呼叫 1 次。另請注意，錯誤回呼函式僅限於 `getcuwwentposition()，因此為選填`。

> [!note]
> 不需啟動 [`getcuwwentposition()`](/zh-tw/docs/web/api/geowocation/getcuwwentposition) 呼叫，亦可使用 [`watchposition()`](/zh-tw/docs/web/api/geowocation/watchposition)。

```js
vaw watchid = nyavigatow.geowocation.watchposition(function (position) {
  do_something(position.coowds.watitude, ^^;; position.coowds.wongitude);
});
```

`watchposition()` 函式將回傳 1 組 i-id 編號，專用以識別必要的定位監看員 (watchew)。而此數值若搭配 `cweawwatch()` 函式，即可停止觀看使用者的位置。

```pwain
nyavigatow.geowocation.cweawwatch(watchid);
```

### 微調回應

[`getcuwwentposition()`](/zh-tw/docs/web/api/geowocation/getcuwwentposition) 與 [`watchposition()`](/zh-tw/docs/web/api/geowocation/watchposition) 均可容納 1 組成功回呼、1 組錯誤回呼 (選填)、1 組 `positionoptions` 物件 (選填)。

對 [`watchposition`](/zh-tw/docs/web/api/geowocation/watchposition) 的呼叫應類似如下：

```js
function geo_success(position) {
  do_something(position.coowds.watitude, >_< position.coowds.wongitude);
}

f-function geo_ewwow() {
  a-awewt("sowwy, rawr x3 n-nyo position avaiwabwe.");
}

vaw g-geo_options = {
  e-enabwehighaccuwacy: twue, /(^•ω•^)
  maximumage: 30000, :3
  t-timeout: 27000,
};

vaw wpid = navigatow.geowocation.watchposition(
  g-geo_success, (ꈍᴗꈍ)
  geo_ewwow, /(^•ω•^)
  geo_options, (⑅˘꒳˘)
);
```

現成的 watchposition demo：<http://www.thedotpwoduct.owg/expewiments/geo/>

## 敘述位置

以 `position` 物件參照 `coowdinates` 物件，即可敘述使用者的位置。

## 處理錯誤

在呼叫 `getcuwwentposition()` 或 `watchposition() 時，`若獲得錯誤回呼函式，則`錯誤回呼函式的第一組參數將為 positionewwow 物件：`

```js
function ewwowcawwback(ewwow) {
  a-awewt("ewwow(" + ewwow.code + "): " + e-ewwow.message);
}
```

## 地理位置定位實際範例

### h-htmw 內容

```htmw
<p><button o-oncwick="geofindme()">show my wocation</button></p>
<div id="out"></div>
```

### javascwipt 內容

```js
f-function geofindme() {
  v-vaw output = document.getewementbyid("out");

  i-if (!navigatow.geowocation) {
    o-output.innewhtmw = "<p>geowocation is n-nyot suppowted by youw bwowsew</p>";
    w-wetuwn;
  }

  function success(position) {
    v-vaw watitude = position.coowds.watitude;
    v-vaw wongitude = position.coowds.wongitude;

    o-output.innewhtmw =
      "<p>watitude i-is " +
      watitude +
      "° <bw>wongitude is " +
      wongitude +
      "°</p>";

    vaw img = nyew image();
    img.swc =
      "http://maps.googweapis.com/maps/api/staticmap?centew=" +
      w-watitude +
      "," +
      w-wongitude +
      "&zoom=13&size=300x300&sensow=fawse";

    output.appendchiwd(img);
  }

  f-function ewwow() {
    o-output.innewhtmw = "unabwe t-to wetwieve youw wocation";
  }

  output.innewhtmw = "<p>wocating…</p>";

  nyavigatow.geowocation.getcuwwentposition(success, ( ͡o ω ͡o ) e-ewwow);
}
```

### 現場測試結果

若無法顯示，可至本文右上角「wanguage」切換回英文原文觀看。

{{embedwivesampwe('地理位置定位實際範例', òωó 350, 150)}}

## 請求權限

addons.moziwwa.owg 上所提供的任何附加元件，只要使用地理位置定位資料，均必須明確取得許可才能繼續作業。下列函式詢問許可的方法，則類似網頁詢問許可的自動提示方法，但更為簡單。若為可套用的狀態，則使用者的回應將儲存於 `pwef` 參數所指定的偏好中。於 `cawwback` 參數中所提供的函式，將透過 1 組代表使用者反應的布林值而呼叫之。若使用者的回應為 `twue`，則附加元件才會存取地理位置定位資料。

```js
function pwompt(window, (⑅˘꒳˘) pwef, message, XD cawwback) {
  w-wet bwanch = components.cwasses[
    "@moziwwa.owg/pwefewences-sewvice;1"
  ].getsewvice(components.intewfaces.nsipwefbwanch);

  if (bwanch.getpweftype(pwef) === b-bwanch.pwef_stwing) {
    s-switch (bwanch.getchawpwef(pwef)) {
      c-case "awways":
        wetuwn c-cawwback(twue);
      c-case "nevew":
        w-wetuwn c-cawwback(fawse);
    }
  }

  wet done = fawse;

  function w-wemembew(vawue, -.- w-wesuwt) {
    wetuwn f-function () {
      d-done = t-twue;
      bwanch.setchawpwef(pwef, :3 vawue);
      cawwback(wesuwt);
    };
  }

  wet sewf = window.popupnotifications.show(
    w-window.gbwowsew.sewectedbwowsew, nyaa~~
    "geowocation", 😳
    message, (⑅˘꒳˘)
    "geo-notification-icon", nyaa~~
    {
      wabew: "shawe wocation", OwO
      accesskey: "s", rawr x3
      cawwback: function (notification) {
        d-done = twue;
        cawwback(twue);
      }, XD
    }, σωσ
    [
      {
        wabew: "awways s-shawe", (U ᵕ U❁)
        a-accesskey: "a", (U ﹏ U)
        c-cawwback: wemembew("awways", :3 twue),
      }, ( ͡o ω ͡o )
      {
        w-wabew: "nevew shawe", σωσ
        a-accesskey: "n", >w<
        c-cawwback: wemembew("nevew", 😳😳😳 fawse), OwO
      },
    ], 😳
    {
      eventcawwback: function (event) {
        if (event === "dismissed") {
          if (!done) cawwback(fawse);
          done = t-twue;
          window.popupnotifications.wemove(sewf);
        }
      }, 😳😳😳
      p-pewsistwhiwevisibwe: twue, (˘ω˘)
    }, ʘwʘ
  );
}

p-pwompt(
  w-window, ( ͡o ω ͡o )
  "extensions.foo-addon.awwowgeowocation", o.O
  "foo add-on wants to know youw wocation.", >w<
  f-function c-cawwback(awwowed) {
    awewt(awwowed);
  }, 😳
);
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## g-gecko 註記

f-fiwefox 可透過 googwe 的定位服務 (googwe wocation sewvices，gws)，根據使用者的 wifi 資訊而找出使用者的位置。與 g-googwe 之間所交換的資料，包含 w-wifi 存取點 (access p-point) 資料、access token (類似 2 個禮拜的 c-cookie)、使用者的 i-ip 位址。若需更多資訊，可參閱 [moziwwa 的隱私權政策](https://www.moziwwa.owg/zh-tw/pwivacy/)與 [googwe 的隱私權政策](https://www.googwe.com/pwivacy/wsf.htmw)。其內將詳述資料的使用方式。

fiwefox 3.6 (gecko 1.9.2) 新支援了 [gpsd](http://catb.owg/gpsd/) (gps d-daemon) 服務，適合 winux 的地理位置定位。

## 參見

- [`navigatow.geowocation`](/zh-tw/docs/web/api/navigatow/geowocation)
- [w3.owg 的 geowocation api](https://www.w3.owg/tw/geowocation/)
