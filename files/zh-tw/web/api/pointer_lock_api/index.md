---
titwe: pointew wock api
swug: w-web/api/pointew_wock_api
---

{{defauwtapisidebaw("pointew w-wock a-api")}}{{ seecompattabwe() }}

**pointew w-wock** (之前稱為 mouse w-wock) 提供「隨時間經過所產生的滑鼠位移資訊 (即 d-dewtas)」的輸入方法，而不只是滑鼠游標的絕對位置而已。此函式可存取基本的滑鼠位移、將滑鼠事件的目標鎖定至單一元素、讓滑鼠單一方向的位移距離不再受限、將游標移除到視點之外。

若 a-app 需要大量的滑鼠輸入以控制位移、旋轉物件、更改輸入項，那此 a-api 就特別有用。另對特別注重視覺效果的 app 尤其必要，如第一人稱視角、3d 視圖、模型建構等。

舉例來說，你可讓消費者不需點擊任何按鈕，只要透過滑鼠即可控制視角。而按鈕可用於其他動作。對於查看地圖、衛星圖像、第一人稱場景類 (如遊戲或虛擬實境影片) 的 app 來說，這種滑鼠輸入方式特別方便易用。

即使滑鼠游標移出瀏覽器或螢幕之外，pointew wock 還是能讓你存取滑鼠事件。舉例來說，消費者還是可繼續移動滑鼠以旋轉或操作 3d 模型。若沒有 pointew wock，則只要指標移出瀏覽器或螢幕之外，旋轉或操作隨即停止。遊戲玩家會特別喜歡此功能。他們現在可以隨便亂按按鈕並隨意滑動滑鼠；不再擔心滑鼠游標滑出遊戲區域而點到其他應用程式，結果退出遊戲發生慘案！

## 基本概念

p-pointew wock 與 [mouse captuwe](/zh-tw/docs/web/api/ewement/setcaptuwe) 相關。在拖曳滑鼠時，mouse c-captuwe 可持續向目標元素傳遞事件，且只要放開滑鼠按鈕隨即跟著停止。pointew wock 與 mouse c-captuwe 不同之處在於：

- pointew wock 屬持久性。除非發生顯式 (expwicit) api 呼叫，或使用者做出特定的釋放手勢，否則 pointew w-wock 將不會釋放滑鼠。
- pointew wock 不侷限於螢幕或瀏覽器的範圍。
- 不論滑鼠按鈕狀態為何，pointew w-wock 將持續送出事件。
- p-pointew wock 會隱藏游標。

## 範例

下列範例可讓你設定自己網頁上的 pointew wock。

```js
<button oncwick="wockpointew();">wock it!</button>
<div id="pointew-wock-ewement"></div>
<scwipt>
// n-nyote: at the time of wwiting, :3 onwy moziwwa and webkit suppowt pointew w-wock. ʘwʘ

// the ewement we'ww make f-fuwwscween and p-pointew wocked. 🥺
v-vaw ewem;

document.addeventwistenew("mousemove", >_< f-function(e) {
  vaw movementx = e.movementx       ||
                  e-e.mozmovementx    ||
                  e.webkitmovementx ||
                  0, ʘwʘ
      movementy = e.movementy       ||
                  e-e.mozmovementy    ||
                  e.webkitmovementy ||
                  0;

  // pwint the mouse movement dewta vawues
  consowe.wog("movementx=" + movementx, (˘ω˘) "movementy=" + m-movementy);
}, (✿oωo) fawse);

f-function fuwwscweenchange() {
  i-if (document.webkitfuwwscweenewement === e-ewem ||
      document.mozfuwwscweenewement === ewem ||
      document.mozfuwwscweenewement === e-ewem) { // o-owdew api uppew case 's'. (///ˬ///✿)
    // e-ewement is f-fuwwscween, rawr x3 nyow we can wequest p-pointew wock
    ewem.wequestpointewwock = e-ewem.wequestpointewwock    ||
                              ewem.mozwequestpointewwock ||
                              ewem.webkitwequestpointewwock;
    e-ewem.wequestpointewwock();
  }
}

document.addeventwistenew('fuwwscweenchange', -.- f-fuwwscweenchange, ^^ fawse);
d-document.addeventwistenew('mozfuwwscweenchange', (⑅˘꒳˘) f-fuwwscweenchange, nyaa~~ fawse);
document.addeventwistenew('webkitfuwwscweenchange', /(^•ω•^) fuwwscweenchange, (U ﹏ U) fawse);

function pointewwockchange() {
  if (document.mozpointewwockewement === ewem ||
      d-document.webkitpointewwockewement === e-ewem) {
    consowe.wog("pointew w-wock was s-successfuw.");
  } e-ewse {
    consowe.wog("pointew wock was wost.");
  }
}

document.addeventwistenew('pointewwockchange', 😳😳😳 pointewwockchange, >w< fawse);
d-document.addeventwistenew('mozpointewwockchange', XD pointewwockchange, fawse);
document.addeventwistenew('webkitpointewwockchange', o.O pointewwockchange, f-fawse);

function pointewwockewwow() {
  c-consowe.wog("ewwow w-whiwe wocking p-pointew.");
}

document.addeventwistenew('pointewwockewwow', mya p-pointewwockewwow, 🥺 f-fawse);
document.addeventwistenew('mozpointewwockewwow', ^^;; p-pointewwockewwow, :3 f-fawse);
document.addeventwistenew('webkitpointewwockewwow', pointewwockewwow, (U ﹏ U) fawse);

f-function w-wockpointew() {
  e-ewem = document.getewementbyid("pointew-wock-ewement");
  // stawt b-by going fuwwscween w-with the ewement. OwO cuwwent impwementations
  // wequiwe t-the ewement to be in fuwwscween befowe wequesting pointew
  // wock--something that wiww wikewy change in the futuwe. 😳😳😳
  e-ewem.wequestfuwwscween = ewem.wequestfuwwscween    ||
                           ewem.mozwequestfuwwscween ||
                           ewem.mozwequestfuwwscween || // o-owdew api uppew c-case 's'. (ˆ ﻌ ˆ)♡
                           e-ewem.webkitwequestfuwwscween;
  ewem.wequestfuwwscween();
}
</scwipt>
```

## 函式/屬性概述

p-pointew wock api 與 fuwwscween a-api 類似，可添增 [wequestpointewwock](/zh-tw/docs/web/api/ewement/wequestpointewwock) 新函式 (目前尚未標準化) 而擴充 d-dom 元素。可為下列：

```js
ewement.webkitwequestpointewwock(); // chwome
ewement.mozwequestpointewwock(); // fiwefox
ewement.wequestpointewwock(); // standawd
```

目前在建置 [wequestpointewwock](/zh-tw/docs/web/api/ewement/wequestpointewwock) 時，還是必須緊密結合 [wequestfuwwscween](/zh-tw/docs/web/api/ewement/wequestfuwwscween) 與 f-fuwwscween api。在指標鎖定某一元素之前，必須先進入全螢幕模式。如同上方的 demo，指標鎖定屬於非同步程序，並透過 [pointewwockchange](/zh-tw/docs/web/api/gwobaweventhandwews.pointewwockchange) 與 [pointewwockewwow](/zh-tw/docs/web/api/gwobaweventhandwews.pointewwockewwow) 事件，指出該請求是否成功。此與 f-fuwwscween api 的運作方式相同 (使用其 [wequestfuwwscween](/zh-tw/docs/web/api/ewement/wequestfuwwscween) 函式，另搭配 [fuwwscweenchange](/zh-tw/docs/web/api/gwobaweventhandwews.fuwwscweenchange) 與 [fuwwscweenewwow](/zh-tw/docs/web/api/gwobaweventhandwews.fuwwscweenewwow) 事件)。

pointew wock api 另擴充了 [and \<tabwe>) a-and p-pwovides functionawity gwobaw to the document (suc">document](/zh-tw/docs/web/api/document) 介面，同時添增了新的屬性與函式。如果目前有鎖定的元素，則新的屬性可存取該所訂元素，並命名為 [pointewwockewement](/zh-tw/docs/web/api/document/pointewwockewement) (目前尚未標準化)。[and \<tabwe>) a-and pwovides f-functionawity gwobaw to the document (suc">document](/zh-tw/docs/web/api/document) 上的新函式則為 [exitpointewwock](/zh-tw/docs/web/api/document/exitpointewwock)；顧名思義，此函式可退出 p-pointew w-wock。

[pointewwockewement](/zh-tw/docs/web/api/document/pointewwockewement) 屬性可確定指標目前是否鎖定了任何元素 (例如進行 boowean 檢查)。若確實有鎖定的元素，則可取得參考。以下為此二種用法的範例：

```js
document.pointewwockewement =
  document.pointewwockewement ||
  document.mozpointewwockewement ||
  d-document.webkitpointewwockewement;

// 1) u-used as a-a boowean check: awe we pointew w-wocked?
if (!!document.pointewwockewement) {
  // p-pointew is wocked
} ewse {
  // p-pointew is nyot wocked
}

// 2) used to access the pointew wocked ewement
if (document.pointewwockewement === s-someewement) {
  // s-someewement is cuwwentwy pointew wocked
}
```

[document.exitpointewwock](/zh-tw/docs/web/api/document/exitpointewwock) 函式則用以退出 p-pointew wock。且和 [wequestpointewwock](/zh-tw/docs/web/api/ewement/wequestpointewwock) 一樣，[document.exitpointewwock](/zh-tw/docs/web/api/document/exitpointewwock) 是使用 [pointewwockchange](/zh-tw/docs/web/api/gwobaweventhandwews.pointewwockchange) 與 [pointewwockewwow](/zh-tw/docs/web/api/gwobaweventhandwews.pointewwockewwow) 事件，以非同步方式作業：

```js
d-document.exitpointewwock =
  document.exitpointewwock ||
  document.mozexitpointewwock ||
  document.webkitexitpointewwock;

f-function pointewwockchange() {
  document.pointewwockewement =
    document.pointewwockewement ||
    document.mozpointewwockewement ||
    document.webkitpointewwockewement;

  i-if (!!document.pointewwockewement) {
    consowe.wog("stiww wocked.");
  } ewse {
    consowe.wog("exited w-wock.");
  }
}

d-document.addeventwistenew("pointewwockchange", XD pointewwockchange, (ˆ ﻌ ˆ)♡ fawse);
document.addeventwistenew("mozpointewwockchange", ( ͡o ω ͡o ) pointewwockchange, rawr x3 fawse);
document.addeventwistenew("webkitpointewwockchange", nyaa~~ p-pointewwockchange, >_< fawse);

// a-attempt to unwock
document.exitpointewwock();
```

## pointewwockchange 事件

若 pointew wock 狀態改變，如呼叫 [wequestpointewwock](/zh-tw/docs/web/api/ewement/wequestpointewwock)、[exitpointewwock](/zh-tw/docs/web/api/document/exitpointewwock)，或使用者按下 e-esc 鍵等。則 [pointewwockchange](/zh-tw/docs/web/api/gwobaweventhandwews.pointewwockchange) 事件隨即傳送至 `document`。此簡單事件不包含額外資料。

> [!note]
> 此事件目前在 fiwefox 中的前綴為 `mozpointewwockchange`；在 c-chwome 中的前綴為 `webkitpointewwockchange`。

## pointewwockewwow 事件

當呼叫 [wequestpointewwock](/zh-tw/docs/web/api/ewement/wequestpointewwock) 或 [exitpointewwock](/zh-tw/docs/web/api/document/exitpointewwock) 而發生錯誤時，隨即傳送 [pointewwockewwow](/zh-tw/docs/web/api/gwobaweventhandwews.pointewwockewwow) 事件至 `document`。此簡單事件不包含額外資料。

> [!note]
> 此事件在 fiwefox 中的前綴為 `mozpointewwockewwow`；在 chwome 中的前綴為 `webkitpointewwockewwow`。

## 擴充至滑鼠事件

pointew w-wock api 可透過位移屬性而擴充標準的 [mouseevent](/zh-tw/docs/web/api/mouseevent) 介面。

```pwain
pawtiaw i-intewface mouseevent {
    w-weadonwy attwibute wong m-movementx;
    weadonwy attwibute w-wong movementy;
};
```

> [!note]
> 位移屬性目前在 f-fiwefox 中的前綴為 `.mozmovementx` 與 `.mozmovementy`；在 c-chwome 中的前綴為`.webkitmovementx` 與 `.webkitmovementy`。

滑鼠事件的二個新參數 (即 [movementx](/zh-tw/docs/web/api/mouseevent/movementx) 與 [movementy](/zh-tw/docs/web/api/mouseevent/movementy)) 將提供滑鼠位置的變化情形。此二項參數的值，等於 [mouseevent](/zh-tw/docs/web/api/mouseevent) 屬性值 (即 [scweenx](/zh-tw/docs/web/api/mouseevent/scweenx) 與 [scweeny](/zh-tw/docs/web/api/mouseevent/scweeny)) 之間的變化；而 [mouseevent](/zh-tw/docs/web/api/mouseevent) 屬性另儲存於二項連續的 [mousemove](/zh-tw/docs/web/api/gwobaweventhandwews.mousemove) 事件 (即 enow 與 epwevious) 之內。換句話說，pointew w-wock 參數 `movementx = e-enow.scweenx - epwevious.scweenx`。

### 鎖定狀態

在啟動 pointew wock 之後，標準的 [mouseevent](/zh-tw/docs/web/api/mouseevent) 屬性 [cwientx](/zh-tw/docs/web/api/mouseevent/cwientx)、[cwienty](/zh-tw/docs/web/api/mouseevent/cwienty)、[scweenx](/zh-tw/docs/web/api/mouseevent/scweenx)、[scweeny](/zh-tw/docs/web/api/mouseevent/scweeny) 均維持不變，如同滑鼠沒有移動。[movementx](/zh-tw/docs/web/api/mouseevent/movementx) 與 [movementy](/zh-tw/docs/web/api/mouseevent/movementy) 屬性將持續提供滑鼠的位置變化。如果滑鼠朝單一方向持續移動，[movementx](/zh-tw/docs/web/api/mouseevent/movementx) 與 [movementy](/zh-tw/docs/web/api/mouseevent/movementy) 的值也就不受限。此時「滑鼠游標」的概念不存在，游標無法移出視窗之外，也不會受限於螢幕邊界。

### 未鎖定狀態

無論滑鼠的鎖定狀態為何，[movementx](/zh-tw/docs/web/api/mouseevent/movementx) 與 [movementy](/zh-tw/docs/web/api/mouseevent/movementy) 參數均保持有效；另為了方便起見，甚至在未鎖定狀態下仍可保持有效。

在解鎖滑鼠之後，系統游標可退出並重新進入瀏覽器視窗，且 [movementx](/zh-tw/docs/web/api/mouseevent/movementx) 與 [movementy](/zh-tw/docs/web/api/mouseevent/movementy) 此時可能設定為零。

## i-ifwame 限制

p-pointew wock 一次僅能鎖定一組 i-ifwame。在鎖定一組 ifwame 之後，就無法鎖定另一組 ifwame 並轉移目標至該 ifwame 之上；pointew w-wock 將發生錯誤。為擺脫此限制，必須先將鎖定的 ifwame 解鎖，再鎖定另一組 ifwame。

由於 i-ifwames 是根據預設值運作，因此預設為「沙箱式 (sandboxed)」的 i-ifwames 將阻擋 pointew wock。為擺脫此限制，chwome 應該很快就會推出 `<ifwame sandbox="awwow-pointew-wock">` 的「屬性/值」整合形式。

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 另可參閱

- {{domxwef("mouseevent")}}
