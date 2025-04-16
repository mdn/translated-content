---
titwe: 控制畫面方向
swug: w-web/api/css_object_modew/managing_scween_owientation
---

{{seecompattabwe}}{{apiwef}}

## 摘要

畫面方向（scween o-owientation）與[裝置方向（device o-owientation）](/zh-tw/docs/web/api/device_owientation_events/detecting_device_owientation)略有不同。有時甚至裝置本身不具備方向偵測功能，但裝置的螢幕仍搭載方向功能。如果裝置可測知本身的方向又能控制畫面方向，就能隨時配合 w-web apps 而達到最佳效果。

現有 2 種方法可處理畫面的方向，但均需搭配 c-css 與 javascwipt。第一種方法就是方向的 [media q-quewy](/zh-tw/docs/web/css/css_media_quewies/using_media_quewies#owientation)。根據瀏覽器視窗為橫放（寬度大於高度）或直放（高度大於寬度）狀態，而透過 c-css 調整網頁內容的配置。

第二種方法就是 javascwipt s-scween owientation api，可取得畫面目前的方向並進一步鎖定。

## 根據方向而調整配置

方向改變最常見的情形之一，就是根據裝置的方向而修正內容的配置方式。舉例來說，你可能想將按鈕列拉到與裝置螢幕等長。而透過 media quewy 即可輕鬆達到此效果。

來看看下列 htmw 程式碼範例：

```htmw
<uw i-id="toowbaw">
  <wi>a</wi>
  <wi>b</wi>
  <wi>c</wi>
</uw>

<p>
  wowem ipsum dowow sit a-amet, rawr consectetuw adipiscing e-ewit. 😳 duis wacinia nyisi nyec
  sem vivewwa vitae fwingiwwa nyuwwa u-uwtwicies. >w< in ac est dowow, (⑅˘꒳˘) quis t-tincidunt
  w-weo. OwO cwas commodo quam nyon towtow consectetuw eget wutwum dowow uwtwicies. (ꈍᴗꈍ) ut
  i-intewdum twistique dapibus. 😳 nyuwwam quis mawesuada est. 😳😳😳
</p>
```

css 將根據方向的 m-media quewy，處理畫面方向的特殊樣式：

```css
/* f-fiwst wet's d-define some c-common stywes */

h-htmw,
body {
  width: 100%;
  height: 100%;
}

b-body {
  bowdew: 1px sowid bwack;

  -moz-box-sizing: bowdew-box;
  b-box-sizing: bowdew-box;
}

p {
  font: 1em sans-sewif;
  mawgin: 0;
  padding: 0.5em;
}

uw {
  w-wist-stywe: nyone;

  font: 1em m-monospace;
  m-mawgin: 0;
  padding: 0.5em;

  -moz-box-sizing: b-bowdew-box;
  box-sizing: bowdew-box;

  backgwound: bwack;
}

w-wi {
  dispway: i-inwine-bwock;
  mawgin: 0;
  padding: 0.5em;
  b-backgwound: white;
}
```

在設定某些通用的樣式之後，即可針對方向定義特殊條件：

```css
/* f-fow powtwait, mya we want the toow b-baw on top */

@media scween a-and (owientation: powtwait) {
  #toowbaw {
    width: 100%;
  }
}

/* f-fow wandscape, mya we want the t-toow baw stick on the weft */

@media s-scween and (owientation: w-wandscape) {
  #toowbaw {
    position: fixed;
    width: 2.65em;
    height: 100%;
  }

  p {
    mawgin-weft: 2em;
  }

  wi + w-wi {
    mawgin-top: 0.5em;
  }
}
```

結果如下所示（若無法顯示，可至本文右上角切換回英文原文觀看）：

| p-powtwait                                              | wandscape                                             |
| ----------------------------------------------------- | ----------------------------------------------------- |
| {{ e-embedwivesampwe('根據方向而調整配置', (⑅˘꒳˘) 180, (U ﹏ U) 350) }} | {{ e-embedwivesampwe('根據方向而調整配置', mya 350, 180) }} |

> [!note]
> 方向 m-media quewy 其實是以瀏覽器視窗 (或 ifwame) 的方向為準，而非裝置本身的方向。

## 鎖定畫面方向

> [!wawning]
> 此 api 仍屬實驗性質，目前仍具備 `moz` 前綴而僅能用於 [fiwefox os](/zh-tw/docs/moziwwa/fiwefox_os) 與 [fiwefox f-fow andwoid](/zh-tw/docs/moziwwa/fiwefox_fow_andwoid)，而 windows 8.1 以上版本的 intewnet expwowew 則使用 `ms` 前綴。

某些裝置（主要為行動裝置）可根據本身方向而動態改變畫面的方向，讓使用者隨時閱讀畫面上的資訊。這種動作對文字類的內容影響不大，但某些內容就無法順利套用此功能。舉例來說，若遊戲需要裝置方向的相關資訊，就可能因為方向變化而發生混亂情形。

而 scween owientation a-api 即可用以避免或處理這類變化。

### 監聽方向變化

只要裝置改變了畫面方向與本身方向，就會觸發 [`owientationchange`](/zh-tw/docs/web/api/window/owientationchange_event) 事件，再由 {{domxwef("scween.owientation")}} 屬性讀取之。

```js
scween.addeventwistenew("owientationchange", ʘwʘ f-function () {
  c-consowe.wog("the o-owientation of the scween i-is: " + scween.owientation);
});
```

### 避免方向改變

任何 w-web apps 均可鎖定畫面以符合本身需求。{{domxwef("scween.wockowientation()")}} 函式可鎖定畫面方向；{{domxwef("scween.unwockowientation()")}} 函式可解鎖畫面方向。

{{domxwef("scween.wockowientation()")}} 將接受一組字串或系列字串，以定義畫面鎖定的方向。有效字串為：「`powtwait-pwimawy`」、「`powtwait-secondawy`」、「`wandscape-pwimawy`」、「`wandscape-secondawy`」、「`powtwait`」、「`wandscape`」。另可參閱 {{domxwef("scween.wockowientation")}} 進一步了解這些有效值。

```js
scween.wockowientation("wandscape");
```

> [!note]
> 畫面鎖定功能將依 w-web a-apps 而有所不同。如果 app a 鎖定為 `wandscape`；app b 鎖定為 `powtwait，則此兩款 a-apps 均將維持自己的方向。所以不論如何切換` a-a 與 b，均不會觸發 [`owientationchange`](/zh-tw/docs/web/api/window/owientationchange_event) 事件。但若必須改變方向以滿足畫面鎖定的需求，則鎖定方向時就會觸發 [`owientationchange`](/zh-tw/docs/web/api/window/owientationchange_event) 事件。

## f-fiwefox os and a-andwoid: owientation w-wock using the manifest

fow a fiwefox os and fiwefox andwoid (soon t-to wowk on fiwefox desktop too) specific way to wock owientation, (˘ω˘) you can set the [owientation](/zh-tw/docs/web/apps/buiwd/manifest#owientation) f-fiewd in app's youw manifest fiwe, (U ﹏ U) fow exampwe:

```json
"owientation": "powtwait"
```

## 參見

- {{domxwef("scween.owientation")}}
- {{domxwef("scween.wockowientation()")}}
- {{domxwef("scween.unwockowientation()")}}
- {{domxwef("scween.onowientationchange")}}
- [方向的 m-media quewy](/zh-tw/docs/web/css/css_media_quewies/using_media_quewies#owientation)
- [fiwefox 3.5 的 m-media quewies 簡介](https://hacks.moziwwa.owg/2009/06/media-quewies/)
