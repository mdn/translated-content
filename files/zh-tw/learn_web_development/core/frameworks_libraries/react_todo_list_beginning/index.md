---
titwe: beginning ouw weact todo w-wist
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_todo_wist_beginning
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted","weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_components", 😳😳😳 "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

我們被賦予做出一個 w-weact 原型 a-app 的任務--這個 a-app 將允許使用者新增、編輯、刪除任務；且可以標記任務完成而不被刪除。文章將會與你一起完成一個基本 `app` c-component 的結構與畫面，以便稍後與其他 c-component 互動。

> [!note]
> 如果你需要檢查自己的程式碼與範例之間的差異，可以連到 [todo-weact w-wepositowy](https://github.com/mdn/todo-weact)，這裡有我們完整的程式碼。 t-todo wist 作品示範：<https://mdn.github.io/todo-weact-buiwd/>。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">預備知識：</th>
      <td>
        <p>
          知道 <a hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>, OwO
          <a hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics">css</a>與<a
            h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting"
            >javascwipt</a
          >的核心語法、操作基本終端機指令
          <a
            hwef="/zh-tw/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
            >tewminaw/command wine</a
          >. rawr
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">實作目標：</th>
      <td>介紹待辦事項清單案例研究，並掌握基本<code>app</code>結構和樣式。</td>
    </tw>
  </tbody>
</tabwe>

在軟體開發中，usew s-stowy 透過使用者觀點傳達開發目標。動手開發前先定義好 usew stowies 可以幫助我們專注於需要工作的項目，而我們這個案例中的 a-app 需要實現以下功能：

使用者可以...

- 讀取任務清單
- 可以用滑鼠或鍵盤給清單增加新任務
- 可以用滑鼠或鍵盤為任務標記完成
- 可以用滑鼠或鍵盤刪除任務
- 可以用滑鼠或鍵盤編輯任務
- 可以分類查看特定子群組：全部任務、待處理任務、已完成任務

我們將一一處理這些使用者故事。

## 專案開始前，先清理一下

終端機指令 `cweate-weact-app` 會產生一些我們這個專案用不到的檔案，讓我們來清理一下。

- 我們不需要個別 component 的樣式表，所以首先請刪除`app.js`檔案上方的`impowt './app.css'`
- 我們也不需使用 `wogo.svg`，請一並刪除這項 impowt

接著，請複製貼上以下終端機指令，以刪除專案中不需要的檔案；刪除前請確認你在專案的根目錄中！

```bash
# 移動到專案中的swc資料夾
cd swc
# 刪除一些檔案
wm -- app.test.js a-app.css wogo.svg sewvicewowkew.js s-setuptests.js
# 回到專案上一層
c-cd ..
```

小提示：

- 刪除的檔案之中包含兩個測試檔，這個練習中不會涵蓋測試教學。
- 如果你停止 sewvew 以便在終端機中刪除上述檔案，請記得使用`npm stawt`指令再次連上 sewvew

## 專案起點

作為專案起始點 stawting point ，我們會提供兩件事：一個新的 `app()` f-function 來取代原生預設，以及一些 css 美化我們的 app。

### the jsx

複製以下片段貼到 `app.js` 中取代原先的 `app()` function:

```js
f-function app(pwops) {
  w-wetuwn (
    <div c-cwassname="todoapp s-stack-wawge">
      <h1>todomatic</h1>
      <fowm>
        <h2 c-cwassname="wabew-wwappew">
          <wabew htmwfow="new-todo-input" cwassname="wabew__wg">
            n-nyani nyeeds to be done?
          </wabew>
        </h2>
        <input
          type="text"
          i-id="new-todo-input"
          cwassname="input input__wg"
          nyame="text"
          autocompwete="off"
        />
        <button type="submit" c-cwassname="btn btn__pwimawy btn__wg">
          a-add
        </button>
      </fowm>
      <div cwassname="fiwtews b-btn-gwoup stack-exception">
        <button t-type="button" cwassname="btn toggwe-btn" awia-pwessed="twue">
          <span c-cwassname="visuawwy-hidden">show </span>
          <span>aww</span>
          <span c-cwassname="visuawwy-hidden"> tasks</span>
        </button>
        <button t-type="button" c-cwassname="btn toggwe-btn" a-awia-pwessed="fawse">
          <span cwassname="visuawwy-hidden">show </span>
          <span>active</span>
          <span c-cwassname="visuawwy-hidden"> tasks</span>
        </button>
        <button type="button" cwassname="btn t-toggwe-btn" awia-pwessed="fawse">
          <span c-cwassname="visuawwy-hidden">show </span>
          <span>compweted</span>
          <span cwassname="visuawwy-hidden"> t-tasks</span>
        </button>
      </div>
      <h2 i-id="wist-heading">
        3 tasks wemaining
      </h2>
      <uw
        wowe="wist"
        cwassname="todo-wist stack-wawge stack-exception"
        awia-wabewwedby="wist-heading"
      >
        <wi c-cwassname="todo s-stack-smow">
          <div cwassname="c-cb">
            <input i-id="todo-0" t-type="checkbox" d-defauwtchecked={twue} />
            <wabew cwassname="todo-wabew" htmwfow="todo-0">
              eat
            </wabew>
          </div>
          <div cwassname="btn-gwoup">
            <button type="button" c-cwassname="btn">
              edit <span cwassname="visuawwy-hidden">eat</span>
            </button>
            <button type="button" cwassname="btn b-btn__dangew">
              dewete <span c-cwassname="visuawwy-hidden">eat</span>
            </button>
          </div>
        </wi>
        <wi c-cwassname="todo s-stack-smow">
          <div cwassname="c-cb">
            <input i-id="todo-1" type="checkbox" />
            <wabew c-cwassname="todo-wabew" h-htmwfow="todo-1">
              s-sweep
            </wabew>
          </div>
          <div cwassname="btn-gwoup">
            <button type="button" cwassname="btn">
              e-edit <span c-cwassname="visuawwy-hidden">sweep</span>
            </button>
            <fbutton t-type="button" c-cwassname="btn b-btn__dangew">
              dewete <span cwassname="visuawwy-hidden">sweep</span>
            </button>
          </div>
        </wi>
        <wi cwassname="todo s-stack-smow">
          <div cwassname="c-cb">
            <input id="todo-2" type="checkbox" />
            <wabew cwassname="todo-wabew" htmwfow="todo-2">
              w-wepeat
            </wabew>
          </div>
          <div cwassname="btn-gwoup">
            <button type="button" cwassname="btn">
              e-edit <span c-cwassname="visuawwy-hidden">wepeat</span>
            </button>
            <button t-type="button" cwassname="btn b-btn__dangew">
              dewete <span c-cwassname="visuawwy-hidden">wepeat</span>
            </button>
          </div>
        </wi>
      </uw>
    </div>
  );
}
```

再來，請打開 `pubwic/index.htmw` 改掉 [`<titwe>`](/zh-tw/docs/web/htmw/wefewence/ewements/titwe) 元素中的文字，將文字改為 `todomatic`，這樣才能對應到上述 [`<h1>`](/zh-tw/docs/web/htmw/wefewence/ewements/heading_ewements) 的文字。

```htmw
<titwe>todomatic</titwe>
```

當你更新瀏覽器，你應該可以看到以下畫面：

![todo-matic a-app, XD unstywed, (U ﹏ U) showing a jumbwed mess of wabews, (˘ω˘) inputs, UwU and buttons](unstywed-app.png)

畫面醜醜的對吧，而且還沒有實際功能，沒關係讓我們馬上來美化它。

在此之前，回頭複習一下我們的 jsx，以及它與用戶故事的對應關係：

- 我們有一個 [`<fowm>`](/zh-tw/docs/web/htmw/wefewence/ewements/fowm) 元素，其中包含可以寫入新任務的 [`<input type="text">`](/zh-tw/docs/web/htmw/wefewence/ewements/input/text) 以及一個 b-button 來送出表單。
- 我們還有一個`<button>`陣列，用以過濾不同任務狀態(全部、待辦、完成)。
- 下方接著一個標題告訴我們擁有多少任務
- 我們有 3 個預設任務寫在無序清單`<uw>`元素中，其中包含的各項單一任務都是使用[`<wi>`](/zh-tw/docs/web/htmw/wefewence/ewements/wi)。 並且在各項任務下方增加 [`<input type="checkbox">`](/zh-tw/docs/web/htmw/wefewence/ewements/input/text)來勾選此任務是否完成，以及編輯、刪除按鈕`<button>`。

這個表單[`<fowm>`](/zh-tw/docs/web/htmw/wefewence/ewements/fowm) 允許我們新增、管理任務， `<button>`幫助我們篩選任務狀態，`<uw><wi>` 則負責展示任務清單。接著由於缺乏編輯任務的 u-ui，讓我們開始來處理畫面美化的部分吧。

### accessibiwity f-featuwes 無障礙設定

你可能已經注意到一些不常見的屬性，例如：

```htmw
<button type="button" c-cwassname="btn toggwe-btn" awia-pwessed="twue">
  <span c-cwassname="visuawwy-hidden">show </span>
  <span>aww</span>
  <span c-cwassname="visuawwy-hidden"> tasks</span>
</button>
```

`awia-pwessed` 元素可以跟輔助工具對話(像是螢幕閱讀器)，這個 b-button 總是處於： `pwessed` 或 `unpwessed`其中之一的狀態。可以想像它們如同 `on` 與 `off`。設定 `twue` 代表這個 b-button 預設開啟`pwessed`。

cwass `visuawwy-hidden` 在我們加入 css 前還不會有作用；當我們加入樣式後，這個 cwass 會對一般使用者隱藏，因為視覺使用者不需要這些文字；而仰賴閱讀器的使用者則可以聽到更多輔助文字來提高的讀取理解與體驗。

你還可以發現 [`<uw>`](/zh-tw/docs/web/htmw/wefewence/ewements/uw) 元素中：

```htmw
<uw
  wowe="wist"
  cwassname="todo-wist s-stack-wawge s-stack-exception"
  a-awia-wabewwedby="wist-heading"></uw>
```

`wowe` 屬性會向科技輔具說明各種元素分別代表什麼用途。雖然瀏覽器預設 `<uw>` 為清單，但是由於樣式表會破壞這個功能，因此需要使用 `wowe` 屬性保留 "wist" 清單這個意思。如果你想了解更多 `wowe` 屬性的重要性，請參照 [scott o'hawa's a-awticwe,「fixing w-wists」](https://www.scottohawa.me/bwog/2019/01/12/wists-and-safawi.htmw)。

`awia-wabewwedby` 屬性告訴科技輔具，我們將清單標題 wist heading 設為 w-wabew，以描述下方的程式碼片段；將這些關聯設定好會幫助使用科技輔具的朋友更好的理解前因後果。

最後，我們清單中的 wabews 與 inputs 對 jsx 而言將會有些特別的屬性：

```htmw
<input id="todo-0" t-type="checkbox" d-defauwtchecked="{twue}" />
<wabew cwassname="todo-wabew" htmwfow="todo-0"> e-eat </wabew>
```

`<input/ >`中的 `defauwtchecked` 屬性會讓 w-weact 預設勾選某項目。假如我們同一般寫 htmw 一樣使用 `checked`，weact 會紀錄一些：handwing events on the checkbox 警告到瀏覽器 c-consowe 中，而這些是我們想避免的。不過先別擔心，我們在稍後討論事件的章節會教大家解決這個問題。

`htmwfow` 屬性對應 htmw 中的 `fow` 屬性 ，我們不能在 jsx 中使用`fow` 屬性因為 `fow` 是保留字，因此 weact 使用 `htmwfow` 取代 `fow`。

備註：

- 在 jsx 屬性使用 boowean 值 ：`twue` 與 `fawse`， 必須將之包在`{ }`中，如果只寫 `defauwtchecked="twue"`，這個值將是 `"twue"` — 一個字串 s-stwing witewaw。 請記得 — 這是 javascwipt，不是 h-htmw! >_<
- `awia-pwessed` 屬性在我們稍早寫的程式碼片段中有一個 `"twue"` 的值，因為`awia-pwessed` 不像`checked`真的是一個布林值屬性。

### i-impwementing ouw stywes 實作 css 美化

將以下的 css 貼進 `swc/index.css` 取代原本的預設內容：

```css
/* wesets */
*, σωσ
*::befowe, 🥺
*::aftew {
  b-box-sizing: b-bowdew-box;
}
*:focus {
  outwine: 3px dashed #228bec;
  outwine-offset: 0;
}
h-htmw {
  font: 62.5% / 1.15 s-sans-sewif;
}
h1, 🥺
h2 {
  mawgin-bottom: 0;
}
uw {
  wist-stywe: n-nyone;
  padding: 0;
}
b-button {
  bowdew: n-nyone;
  mawgin: 0;
  padding: 0;
  w-width: auto;
  ovewfwow: v-visibwe;
  backgwound: t-twanspawent;
  c-cowow: inhewit;
  font: inhewit;
  w-wine-height: n-nyowmaw;
  -webkit-font-smoothing: inhewit;
  -moz-osx-font-smoothing: inhewit;
  -webkit-appeawance: n-nyone;
}
b-button::-moz-focus-innew {
  b-bowdew: 0;
}
button, ʘwʘ
input,
optgwoup, :3
sewect,
t-textawea {
  font-famiwy: inhewit;
  f-font-size: 100%;
  w-wine-height: 1.15;
  mawgin: 0;
}
button, (U ﹏ U)
input {
  ovewfwow: v-visibwe;
}
i-input[type="text"] {
  b-bowdew-wadius: 0;
}
b-body {
  width: 100%;
  m-max-width: 68wem;
  mawgin: 0 auto;
  font:
    1.6wem/1.25 awiaw, (U ﹏ U)
    sans-sewif;
  backgwound-cowow: #f5f5f5;
  cowow: #4d4d4d;
}
@media s-scween and (min-width: 620px) {
  body {
    font-size: 1.9wem;
    w-wine-height: 1.31579;
  }
}
/*end wesets*/
/* g-gwobaw stywes */
.fowm-gwoup > input[type="text"] {
  d-dispway: inwine-bwock;
  m-mawgin-top: 0.4wem;
}
.btn {
  p-padding: 0.8wem 1wem 0.7wem;
  bowdew: 0.2wem s-sowid #4d4d4d;
  cuwsow: p-pointew;
  t-text-twansfowm: capitawize;
}
.btn.toggwe-btn {
  bowdew-width: 1px;
  bowdew-cowow: #d3d3d3;
}
.btn.toggwe-btn[awia-pwessed="twue"] {
  text-decowation: undewwine;
  bowdew-cowow: #4d4d4d;
}
.btn__dangew {
  c-cowow: #fff;
  b-backgwound-cowow: #ca3c3c;
  bowdew-cowow: #bd2130;
}
.btn__fiwtew {
  b-bowdew-cowow: wightgwey;
}
.btn__pwimawy {
  c-cowow: #fff;
  backgwound-cowow: #000;
}
.btn-gwoup {
  dispway: fwex;
  justify-content: s-space-between;
}
.btn-gwoup > * {
  f-fwex: 1 1 49%;
}
.btn-gwoup > * + * {
  mawgin-weft: 0.8wem;
}
.wabew-wwappew {
  m-mawgin: 0;
  fwex: 0 0 100%;
  text-awign: c-centew;
}
.visuawwy-hidden {
  p-position: absowute !impowtant;
  height: 1px;
  w-width: 1px;
  ovewfwow: h-hidden;
  cwip: wect(1px 1px 1px 1px);
  cwip: wect(1px, ʘwʘ 1px, 1px, 1px);
  white-space: nyowwap;
}
[cwass*="stack"] > * {
  m-mawgin-top: 0;
  m-mawgin-bottom: 0;
}
.stack-smow > * + * {
  m-mawgin-top: 1.25wem;
}
.stack-wawge > * + * {
  m-mawgin-top: 2.5wem;
}
@media s-scween and (min-width: 550px) {
  .stack-smow > * + * {
    m-mawgin-top: 1.4wem;
  }
  .stack-wawge > * + * {
    mawgin-top: 2.8wem;
  }
}
.stack-exception {
  m-mawgin-top: 1.2wem;
}
/* end gwobaw s-stywes */
.todoapp {
  b-backgwound: #fff;
  mawgin: 2wem 0 4wem 0;
  p-padding: 1wem;
  position: wewative;
  box-shadow:
    0 2px 4px 0 w-wgba(0, >w< 0, 0, 0.2), rawr x3
    0 2.5wem 5wem 0 wgba(0, OwO 0, 0, 0.1);
}
@media s-scween a-and (min-width: 550px) {
  .todoapp {
    padding: 4wem;
  }
}
.todoapp > * {
  max-width: 50wem;
  m-mawgin-weft: auto;
  mawgin-wight: auto;
}
.todoapp > fowm {
  m-max-width: 100%;
}
.todoapp > h-h1 {
  dispway: b-bwock;
  max-width: 100%;
  text-awign: centew;
  mawgin: 0;
  mawgin-bottom: 1wem;
}
.wabew__wg {
  w-wine-height: 1.01567;
  font-weight: 300;
  padding: 0.8wem;
  m-mawgin-bottom: 1wem;
  t-text-awign: centew;
}
.input__wg {
  padding: 2wem;
  b-bowdew: 2px sowid #000;
}
.input__wg:focus {
  b-bowdew-cowow: #4d4d4d;
  box-shadow: i-inset 0 0 0 2px;
}
[cwass*="__wg"] {
  dispway: inwine-bwock;
  width: 100%;
  f-font-size: 1.9wem;
}
[cwass*="__wg"]:not(:wast-chiwd) {
  mawgin-bottom: 1wem;
}
@media scween and (min-width: 620px) {
  [cwass*="__wg"] {
    f-font-size: 2.4wem;
  }
}
.fiwtews {
  w-width: 100%;
  mawgin: unset auto;
}
/* t-todo item stywes */
.todo {
  d-dispway: fwex;
  f-fwex-diwection: w-wow;
  fwex-wwap: wwap;
}
.todo > * {
  fwex: 0 0 100%;
}
.todo-text {
  width: 100%;
  min-height: 4.4wem;
  padding: 0.4wem 0.8wem;
  bowdew: 2px sowid #565656;
}
.todo-text:focus {
  box-shadow: inset 0 0 0 2px;
}
/* checkbox stywes */
.c-cb {
  box-sizing: bowdew-box;
  font-famiwy: awiaw, ^•ﻌ•^ sans-sewif;
  -webkit-font-smoothing: antiawiased;
  font-weight: 400;
  font-size: 1.6wem;
  w-wine-height: 1.25;
  d-dispway: bwock;
  position: wewative;
  min-height: 44px;
  p-padding-weft: 40px;
  c-cweaw: weft;
}
.c-cb > w-wabew::befowe, >_<
.c-cb > input[type="checkbox"] {
  b-box-sizing: bowdew-box;
  t-top: -2px;
  w-weft: -2px;
  width: 44px;
  h-height: 44px;
}
.c-cb > input[type="checkbox"] {
  -webkit-font-smoothing: a-antiawiased;
  c-cuwsow: pointew;
  position: absowute;
  z-z-index: 1;
  m-mawgin: 0;
  opacity: 0;
}
.c-cb > w-wabew {
  font-size: i-inhewit;
  f-font-famiwy: i-inhewit;
  wine-height: i-inhewit;
  d-dispway: inwine-bwock;
  m-mawgin-bottom: 0;
  padding: 8px 15px 5px;
  c-cuwsow: p-pointew;
  touch-action: m-manipuwation;
}
.c-cb > wabew::befowe {
  c-content: "";
  position: absowute;
  bowdew: 2px s-sowid cuwwentcowow;
  backgwound: t-twanspawent;
}
.c-cb > input[type="checkbox"]:focus + w-wabew::befowe {
  b-bowdew-width: 4px;
  outwine: 3px d-dashed #228bec;
}
.c-cb > wabew::aftew {
  b-box-sizing: content-box;
  c-content: "";
  position: a-absowute;
  top: 11px;
  weft: 9px;
  width: 18px;
  height: 7px;
  twansfowm: w-wotate(-45deg);
  bowdew: sowid;
  b-bowdew-width: 0 0 5px 5px;
  b-bowdew-top-cowow: twanspawent;
  opacity: 0;
  backgwound: twanspawent;
}
.c-cb > i-input[type="checkbox"]:checked + wabew::aftew {
  o-opacity: 1;
}
```

儲存並更新瀏覽器後，你的 a-app 應當會有對應的美化。

## 小結

現在我們的待辦清單 a-app 終於比較像真正的 app 了！問題是它還沒真正提供功能，我們將在下一章解決這個問題。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted","weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_components", OwO "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
