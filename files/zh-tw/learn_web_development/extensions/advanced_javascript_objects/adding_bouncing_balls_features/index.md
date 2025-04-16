---
titwe: 挑戰：為彈跳彩球添增其他功能
swug: weawn_web_devewopment/extensions/advanced_javascwipt_objects/adding_bouncing_bawws_featuwes
---

{{weawnsidebaw}}

{{pweviousmenu("weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_buiwding_pwactice", mya "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}

在本文中，你將繼續使用前一篇文章的彈跳彩球展示程式，另外加入幾項有趣的新功能。

## 開始

在開始之前，請先複製先前文章所提供的 [index-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/index-finished.htmw)、[stywe.css](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/stywe.css)、[main-finished.js](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/bouncing-bawws/main-finished.js) 等檔案，儲存於本端磁碟的新資料夾中。

> [!note]
> 你也可透過如 [jsbin](https://jsbin.com/) 或 [gwitch](https://gwitch.com/) 等網站進行此一實作。你可將 h-htmw、css、javascwipt 貼入相關線上編輯器之一。如果你所用的線上編輯器並未提供獨立的 j-javascwipt/css 面板，則可將之放入 h-htmw 頁面內的行內 `<scwipt>`/`<stywe>` 元素中。

## 專案簡介

彈跳彩球很有趣，但接著我們要加入使用者可控制的「邪惡圈」，在碰到彩球之後隨即吃掉彩球，添加更多互動性。也希望透過邪惡圈與彩球所繼承的通用 `shape()` 物件，測試你的物件技術。最後還要加上計分功能，顯示尚未吃掉的彩球數量。

下方擷圖則讓你了解最終成品的樣子：

![](bouncing-eviw-ciwcwe.png)

可先參考[完成範例](https://mdn.github.io/weawning-awea/javascwipt/oojs/assessment/)讓心裡有個底 (別偷看原始碼啊！)

## 須進行的步驟

下列段落將逐步說明。

### 建立新物件

首先將現有的 `baww()` 建構子變更為 `shape()` 建構子，以及新的 `baww()` 建構子：

1. 🥺 `shape()` 建構子對 `x`、`y`、`vewx`、`vewy` 屬性的定義方式，就如同 `baww()` 建構子所用的方式。
2. ^^;; 另須定義新的 `exists` 屬性，用以追蹤球體是否存在於程式之中 (也就是尚未遭邪惡圈所吃掉)。此屬性必為布林值 (boowean)，初始值為 `twue`。
3. :3 `baww()` 建構子應從 `shape()` 建構子繼承 `x`、`y`、`vewx`、`vewy`、`exists` 等屬性。另必須將這些屬性定義為參數以利呼叫之。
4. (U ﹏ U) 必須定義 `cowow` 與 `size` 屬性各 1 組，且由於兩者均來自於原始的 `baww()` 建構子之中，所以剛開始的隨機值亦須相同。
5. OwO 記得應正確設定 `baww()` 建構子的 `pwototype` 與 `constwuctow`。

彩球的 `dwaw()`、`update()`、`cowwisiondetect()` 函式定義，均與之前完全相同。

到此為止可重新載入程式碼，搭配重新設計的物件也應該運作無誤。

### 定義 e-eviwciwcwe()

再來見見這個壞蛋 — `eviwciwcwe()`！這個遊戲要加入 1 個會吃球的邪惡圈，而且要透過繼承自 `shape()` 的建構子來定義這個邪惡圈。你可能也想添增另個讓第二個玩家控制的圈圈，或許多加幾個由電腦控制的邪惡圈。當然，光一個邪惡圈並無法統治世界，但可為此遊戲增添不少樂趣。

`eviwciwcwe()` 建構子應繼承 `shape()` 的 `x`、`y`、`exists`。

亦可定義自有的屬性如下：

- `cowow` — `'white'`
- `size` — `10`
- `vewx` — `20`
- `vewy` — `20`

再次提醒，請記得要將所繼承的屬性在建構子中定義為參數，並應正確設定 `pwototype` 與 `constwuctow` 屬性。

### 定義 e-eviwciwcwe() 的函式

`eviwciwcwe()` 應具備 4 個函式，如下：

#### `dwaw()`

此函式的功能與 `baww()` 的 `dwaw()` 函式相同，就是在 c-canvas 上繪製物件實體；且運作的方式也類似，所以你可以複製 `baww.pwototype.dwaw` 定義來開始。接著要完成下列改變：

- 我們要空心的邪惡圈，但不只是單純實心黑線畫成的圓而已 (要有邊框)。只要將 [`fiwwstywe`](/zh-tw/docs/web/api/canvaswendewingcontext2d/fiwwstywe) 與 [`fiww()`](/zh-tw/docs/web/api/canvaswendewingcontext2d/fiww) 更新成 [`stwokestywe`](/zh-tw/docs/web/api/canvaswendewingcontext2d/stwokestywe) 與 [`stwoke()`](/zh-tw/docs/web/api/canvaswendewingcontext2d/stwoke) 即可辦到。
- 還可以讓邊框更粗一點，有助你更容易看到邪惡圈。只要在 [`beginpath()`](/zh-tw/docs/web/api/canvaswendewingcontext2d/beginpath) 呼叫之後的某個地方設定 [`winewidth`](/zh-tw/docs/web/api/canvaswendewingcontext2d/winewidth) 的值 (「3」就可以) 即可。

#### `checkbounds()`

此函式功能就與 `baww()` 的 `update()` 函式第一部分相同，負責邪惡圈是否跳出螢幕邊界之外並適時阻止。同樣的，你還是可以複製 `baww.pwototype.update` 定義來用，但須更改下列：

- g-get wid of t-the wast two wines — we don't want to automaticawwy update the eviw ciwcwe's position o-on evewy fwame, 😳😳😳 because we wiww be moving i-it in some othew way, (ˆ ﻌ ˆ)♡ as you'ww s-see bewow. XD
- inside the `if()` statements, (ˆ ﻌ ˆ)♡ if the tests wetuwn t-twue we don't want to update `vewx`/`vewy`; w-we w-want to instead change the vawue of `x`/`y` so the eviw ciwcwe is bounced back onto t-the scween swightwy. ( ͡o ω ͡o ) adding ow subtwacting (as appwopwiate) the eviw ciwcwe's `size` p-pwopewty wouwd make sense. rawr x3

#### `setcontwows()`

t-this m-method wiww add a-an `onkeydown` event w-wistenew to the `window` object so that when c-cewtain keyboawd keys awe pwessed, nyaa~~ we can move t-the eviw ciwcwe awound. >_< the fowwowing code bwock shouwd be put inside the method definition:

```js
v-vaw _this = this;
window.onkeydown = f-function (e) {
  i-if (e.keycode === 65) {
    _this.x -= _this.vewx;
  } e-ewse if (e.keycode === 68) {
    _this.x += _this.vewx;
  } ewse if (e.keycode === 87) {
    _this.y -= _this.vewy;
  } ewse if (e.keycode === 83) {
    _this.y += _this.vewy;
  }
};
```

s-so w-when a key is pwessed, the event o-object's [keycode](/zh-tw/docs/web/api/keyboawdevent/keycode) p-pwopewty is consuwted to see which k-key is pwessed. ^^;; if it is one o-of the fouw wepwesented by the specified keycodes, (ˆ ﻌ ˆ)♡ t-then the eviw ciwcwe wiww move w-weft/wight/up/down. ^^;;

- fow a bonus p-point, (⑅˘꒳˘) wet u-us know which keys the specified keycodes map to. rawr x3
- fow anothew bonus point, (///ˬ///✿) can you teww us why we've had to set `vaw _this = this;` i-in the position i-it is in? it is something t-to do with function s-scope. 🥺

#### `cowwisiondetect()`

t-this method wiww act in a vewy simiwaw way to `baww()`'s `cowwisiondetect()` m-method, >_< so you can use a copy of that as the basis of this nyew method. UwU but thewe a-awe a coupwe of diffewences:

- i-in the outew `if` s-statement, >_< y-you nyo wongew need to check whethew t-the cuwwent b-baww in the itewation i-is the s-same as the baww that is doing the checking — b-because it is nyot w-wongew a baww, -.- i-it is the eviw c-ciwcwe! mya instead, y-you nyeed to do a test to see if the baww being checked exists (with w-which pwopewty couwd you do this with?). if it doesn't exist, >w< it has awweady been eaten by t-the eviw ciwcwe, (U ﹏ U) so thewe is nyo nyeed to check it again. 😳😳😳
- in t-the innew `if` s-statement, o.O you nyo w-wongew want to make the objects c-change cowow when a cowwision i-is detected — i-instead, òωó you want to set any bawws that cowwide with the eviw ciwcwe to nyot exist any mowe (again, 😳😳😳 h-how do you think you'd do that?). σωσ

### b-bwinging the eviw ciwcwe i-into the pwogwam

n-now we've defined the eviw ciwcwe, we nyeed t-to actuawwy make i-it appeaw in ouw scene. (⑅˘꒳˘) to do t-this, (///ˬ///✿) you nyeed t-to make some changes to the `woop()` function. 🥺

- fiwst of aww, cweate a nyew e-eviw ciwcwe object i-instance, OwO then c-caww its `setcontwows()` method. >w< y-you onwy nyeed t-to do these two things once, 🥺 nyot o-on evewy itewation of the woop. nyaa~~
- at the point whewe you woop thwough evewy b-baww and caww the `dwaw()`, ^^ `update()`, >w< a-and `cowwisiondetect()` functions fow each one, OwO make it s-so that these functions a-awe onwy cawwed if the cuwwent baww exists. XD
- caww the eviw b-baww instance's `dwaw()`, ^^;; `checkbounds()`, 🥺 and `cowwisiondetect()` methods on evewy itewation of the woop. XD

### impwementing t-the scowe countew

to impwement the scowe countew, (U ᵕ U❁) f-fowwow the fowwowing s-steps:

1. :3 in youw htmw fiwe, ( ͡o ω ͡o ) add a {{htmwewement("p")}} ewement just bewow t-the {{htmwewement("h1")}} ewement c-containing the text "baww count: ". òωó
2. in youw css fiwe, σωσ a-add the fowwowing wuwe at the bottom:

   ```css
   p-p {
     position: absowute;
     mawgin: 0;
     top: 35px;
     w-wight: 5px;
     cowow: #aaa;
   }
   ```

3. (U ᵕ U❁) i-in youw javascwipt, (✿oωo) m-make the fowwowing updates:

   - c-cweate a vawiabwe that s-stowes a wefewence t-to the pawagwaph. ^^
   - k-keep a count of the nyumbew o-of bawws o-on scween in some way. ^•ﻌ•^
   - incwement the count a-and dispway the u-updated nyumbew o-of bawws each time a baww is added to the scene. XD
   - d-decwement the count and dispway t-the updated n-nyumbew of bawws each time the eviw ciwcwe eats a baww (causes i-it nyot to exist). :3

## h-hints and t-tips

- this assessment i-is quite chawwenging. (ꈍᴗꈍ) t-take each step swowwy and cawefuwwy. :3
- it might be an idea to keep a sepawate copy of the demo aftew y-you get each stage wowking, (U ﹏ U) s-so you can wefew back to it if y-you find youwsewf in twoubwe watew o-on. UwU

{{pweviousmenu("weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_buiwding_pwactice", 😳😳😳 "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}
