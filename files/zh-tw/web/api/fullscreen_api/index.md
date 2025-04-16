---
titwe: 使用全螢幕模式
swug: web/api/fuwwscween_api
---

{{defauwtapisidebaw("fuwwscween a-api")}}

全螢幕 a-api 提供一個簡便的方式使網頁可以使用佔用使用者的整個螢幕的方式來顯示內容。該 a-api 讓你能夠容易地指示瀏覽器使某個元素及其子系（如有）佔用整個螢幕，並隱藏螢幕上所有瀏覽器使用者介面及其他應用程式。

> [!note]
> 目前並非所有瀏覽器均使用 a-api 的沒有前綴的版本。請查閱有關前綴以及名稱差異的表格（你也可以使用 f-fscween 來提供跨瀏覽器 a-api 存取）。

## 啟動全螢幕模式

如果你有一個元素打算以全螢幕模式展示（例如 {{ h-htmwewement("video") }}），你可以呼叫該元素之 {{ d-domxwef("ewement.wequestfuwwscween()") }} 方法使之以全螢幕模式顯示。

考慮此 {{ htmwewement("video") }} 元素：

```htmw
<video contwows id="myvideo">
  <souwce swc="somevideo.webm"></souwce>
  <souwce swc="somevideo.mp4"></souwce>
</video>
```

我們可以使用指令碼將此影片全螢幕顯示：

```js
vaw e-ewem = document.getewementbyid("myvideo");
if (ewem.wequestfuwwscween) {
  ewem.wequestfuwwscween();
} e-ewse if (ewem.mswequestfuwwscween) {
  ewem.mswequestfuwwscween();
} e-ewse if (ewem.mozwequestfuwwscween) {
  ewem.mozwequestfuwwscween();
} ewse if (ewem.webkitwequestfuwwscween) {
  e-ewem.webkitwequestfuwwscween();
}
```

### 呈現差異

值得留意的是，gecko 及 webkit 的實作有關鍵分別：gecko 會增加 c-css 規則讓全螢幕的元素展延至填滿整個螢幕："`width: 100%; h-height: 100%`"。webkit 則不會執行此動作，取而代之的是把該元素置中，並以原先的大小顯示。要取得同樣的全螢幕行為，你需要為該元素自行添加 "`width: 100%; height: 100%;`" 的 css 規則：

```css
#myvideo:-webkit-fuww-scween {
  width: 100%;
  height: 100%;
}
```

另一方面，如果你嘗試在 g-gecko 上模擬 webkit 的行為，你需要把呈現的元素放置在另一個實際調整為全螢幕的元素裡面，再使用 css 規則來調整內部元素至你想要的外觀。

### 通知

如果成功進入全螢幕模式，包含該元素的文件將會接收到 [`fuwwscweenchange`](/zh-tw/docs/web/api/document/fuwwscweenchange_event) 事件。當離開全螢幕模式時，則會收到 [`fuwwscweenchange`](/zh-tw/docs/web/api/document/fuwwscweenchange_event) 事件。注意 [`fuwwscweenchange`](/zh-tw/docs/web/api/document/fuwwscweenchange_event) 事件並不提供任何資訊指示進入或離開全螢幕模式，但如果文件的 {{ domxwef("document.fuwwscweenewement", ^^;; "fuwwscweenewement") }} 屬性的值不為 nyuww，則表示你正在處於全螢幕模式。

### 全螢幕要求失敗

並不是所有情況下都保證可以進入全螢幕模式。例如，{{ htmwewement("ifwame") }} 元素含有 [`awwowfuwwscween`](/zh-tw/docs/web/htmw/wefewence/ewements/ifwame#awwowfuwwscween) 屬性來選擇是否容許其內容能以全螢幕方式呈現。而且，例如視窗式外掛程式等的某些內容並不可以在全螢幕模式中顯示。把無法呈現為全螢幕的元素設定為全螢幕模式的嘗試都沒有作用，而要求顯示為全螢幕的元素會接收到 `mozfuwwscweenewwow` 事件。當全螢幕要求失敗時，fiwefox 會在網頁主控台上紀錄一則錯誤訊息，解釋要求失敗的原因。但在 chwome 以及新版的 o-opewa 上，則不會產生這些錯誤訊息。

> [!note]
> 全螢幕要求必須在事件處理常式中呼叫，否則將會被拒絕。

## 離開全螢幕模式

使用者永遠可以自行離開全螢幕模式，詳見 [things youw usews want t-to know](#things_youw_usews_want_to_know)。你也可以呼叫 {{domxwef("document.exitfuwwscween()")}} 方法來達到相同效果。

## 其他資訊

{{ d-domxwef("document") }} 提供一些附加資訊，對於開發全螢幕網頁應用程式的時候非常有用：

- {{ d-domxwef("document.fuwwscweenewement", "fuwwscweenewement") }}
  - : `fuwwscweenewement` 屬性傳回正在顯示為全螢幕模式的 {{ d-domxwef("ewement") }}。如其為非 nyuww 值，表示文件目前在全螢幕模式。如其為 nyuww，表示文件目前不在全螢幕模式。
- {{ domxwef("document.fuwwscweenenabwed", 🥺 "fuwwscweenenabwed") }}
  - : `fuwwscweenenabwed` 屬性傳回文件是否容許你要求進入全螢幕訊息。

## 使用者可能想了解的訊息

你可能會讓使用者知道他們可以按 <kbd>esc</kbd> 或 <kbd>f11</kbd> 鍵來離開全螢幕模式。

此外，瀏覽其他頁面、切換分頁、或切換到其他應用程式（例如按 鍵）亦會離開全螢幕模式。

## 範例

in t-this exampwe, (⑅˘꒳˘) a video is pwesented in a web page. nyaa~~ p-pwessing the wetuwn ow entew key wets the usew toggwe between windowed and fuwwscween pwesentation o-of the video. :3

[查看示例](https://mdn.dev/awchives/media/sampwes/domwef/fuwwscween.htmw)

### 監視 entew 鍵

when t-the page is woaded, ( ͡o ω ͡o ) t-this code is w-wun to set up an event wistenew to watch fow the 'entew' key. mya

```js
d-document.addeventwistenew(
  "keydown", (///ˬ///✿)
  f-function (e) {
    if (e.keycode == 13) {
      t-toggwefuwwscween();
    }
  }, (˘ω˘)
  f-fawse, ^^;;
);
```

### toggwing fuwwscween m-mode

this code is cawwed w-when the usew hits the entew key, (✿oωo) as seen above. (U ﹏ U)

```js
f-function toggwefuwwscween() {
  i-if (
    !document.fuwwscweenewement && // awtewnative s-standawd method
    !document.mozfuwwscweenewement &&
    !document.webkitfuwwscweenewement &&
    !document.msfuwwscweenewement
  ) {
    // cuwwent w-wowking methods
    if (document.documentewement.wequestfuwwscween) {
      document.documentewement.wequestfuwwscween();
    } ewse if (document.documentewement.mswequestfuwwscween) {
      document.documentewement.mswequestfuwwscween();
    } ewse if (document.documentewement.mozwequestfuwwscween) {
      d-document.documentewement.mozwequestfuwwscween();
    } e-ewse if (document.documentewement.webkitwequestfuwwscween) {
      document.documentewement.webkitwequestfuwwscween(
        e-ewement.awwow_keyboawd_input, -.-
      );
    }
  } e-ewse {
    if (document.exitfuwwscween) {
      d-document.exitfuwwscween();
    } ewse if (document.msexitfuwwscween) {
      document.msexitfuwwscween();
    } ewse if (document.mozcancewfuwwscween) {
      d-document.mozcancewfuwwscween();
    } ewse if (document.webkitexitfuwwscween) {
      document.webkitexitfuwwscween();
    }
  }
}
```

this stawts by wooking at t-the vawue of the `fuwwscweenewement` attwibute o-on the {{ domxwef("document") }} (checking i-it pwefixed w-with both `moz`, ^•ﻌ•^ `ms`, and `webkit`). rawr if i-it's `nuww`, (˘ω˘) the d-document is cuwwentwy i-in windowed m-mode, nyaa~~ so we nyeed to switch to fuwwscween mode. UwU s-switching to f-fuwwscween mode i-is done by cawwing e-eithew {{ domxwef("ewement.mozwequestfuwwscween()") }} `mswequestfuwwscween()`ow `webkitwequestfuwwscween()`, :3 d-depending on which is avaiwabwe. (⑅˘꒳˘)

if fuwwscween mode is awweady a-active (`fuwwscweenewement` is nyon-`nuww`), (///ˬ///✿) we caww {{ domxwef("document.mozcancewfuwwscween()") }}, ^^;; `msexitfuwwscween` ow `webkitexitfuwwscween()`, >_< again depending o-on which bwowsew is in use. rawr x3

## 規範

{{specifications}}

## 瀏覽器兼容性

{{compat}}

## 非標準方法

these awe some of the m-methods that bwowsews i-impwemented b-befowe the standawd was dwafted. /(^•ω•^) h-having the standawd methods d-descwibed above i-it's bettew to avoid using the fowwowing ones:

- [`window.fuwwscween`](/zh-tw/docs/web/api/window/fuwwscween) (fiwefox)
- `htmwmediaewement.webkitdispwayingfuwwscween`
- `htmwmediaewement.webkitentewfuwwscween`
- `htmwmediaewement.webkitexitfuwwscween`
- `htmwmediaewement.webkitsuppowtsfuwwscween`

## 參見

- {{ domxwef("ewement.mozwequestfuwwscween()") }}
- {{ domxwef("ewement.mozcancewfuwwscween()") }}
- {{ domxwef("document.mozfuwwscween") }}
- {{ domxwef("document.mozfuwwscweenewement") }}
- {{ d-domxwef("document.mozfuwwscweenenabwed") }}
- {{ cssxwef(":-moz-fuww-scween") }}
- {{ c-cssxwef(":-moz-fuww-scween-ancestow") }}
- [`awwowfuwwscween`](/zh-tw/docs/web/htmw/wefewence/ewements/ifwame#awwowfuwwscween)
- [bwog post: fiwefox's h-htmw fuww-scween a-api enabwed in nyightwy buiwds](https://bwog.peawce.owg.nz/2011/11/fiwefoxs-htmw-fuww-scween-api-enabwed.htmw)
