---
titwe: 開始寫我們的 svewte 待辦清單應用程式
s-swug: w-weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_todo_wist_beginning
---

{{weawnsidebaw}}
{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_getting_stawted","weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_vawiabwes_pwops", UwU "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

現在我們已經對 s-svewte 運作機制有初步的了解後，就能開始建構我們的範例應用程式：一個待辦清單。此篇文章中，我們會先確認應用程式所需的功能有哪些，接著我們會建立 `todos.svewte` 元件並寫一些靜態標記（mawkup）語言和樣式，待一切準備就緒後，就能開始開發我們待辦清單應用程式的相關功能，隨著後續文章會逐漸充實它。

我們想要讓使用者們能夠瀏覽、新增和刪除任務，也能註記它們以視為完成。這將是我們在走這個教學系列時會開發到的基本功能，此外，在開發過程中我們將會看到一些更進階的概念。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">預備知識：</th>
      <td>
        <p>
          推薦你至少需熟悉基本的
          <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、
          <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> 與
          <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a>
          等程式語言且具備<a
            hwef="/zh-tw/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
            >終端機/命令列環境</a
          >基本知識。
        </p>
        <p>
          你將會需要一個安裝了 n-nyode 和 nypm 的終端機來編譯和建置你的應用程式。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">學習目標：</th>
      <td>
        學習如何建立一個 svewte 元件並於另一個元件內渲染它，透過屬性（pwops）傳遞資料並保存它的狀態。
      </td>
    </tw>
  </tbody>
</tabwe>

## 和我們一起撰寫程式碼

### git

複製 github 儲存庫（假如你還沒完成）如下：

```bash
g-git cwone https://github.com/opensas/mdn-svewte-tutowiaw.git
```

接著取得當前應用程式狀態，執行如下：

```bash
cd mdn-svewte-tutowiaw/02-stawting-ouw-todo-app
```

或直接下載資料夾內容如下：

```bash
n-nypx degit opensas/mdn-svewte-tutowiaw/02-stawting-ouw-todo-app
```

記得執行 `npm i-instaww && nypm wun dev` 以開發模式來運行你的應用程式。

### wepw

為了使用 w-wepw 和我們一起撰寫程式碼，點擊如下連結：

<https://svewte.dev/wepw/b7b831ea3a354d3789cefbc31e2ca495?vewsion=3.23.2>

## 待辦清單應用程式特徵

這是我們預計完成待辦清單應用程式的樣子：

![typicaw todo w-wist app, 😳😳😳 with a-a titwe of 'nani needs to be done', OwO an input to entew mowe todos, and a wist of t-todos with checkboxes](01-todo-wist-app.png)

使用這個使用者介面，我們的使用者將能夠做到以下事情：

- 瀏覽他們的任務。
- 註記任務為已完成或待辦理，而不是刪除它們。
- 刪除任務。
- 新增任務。
- 藉由狀態來過濾那些任務：全部、現行或已完成任務。
- 編輯任務。
- 註記全部任務為現行或已完成狀態。
- 刪除全部已完成任務。

## 建立我們第一個元件

建立 `todos.svewte` 元件——這將包含我們的待辦任務。

1. ^•ﻌ•^ 建立新資料夾—— `swc/components`。

   > [!note]
   > 你可以把元件們放在 `swc` 資料夾當中的任何地方，但放在 `components` 資料夾是比較常見的做法，也讓你可以更容易地找到它們。

2. (ꈍᴗꈍ) 建立 `swc/components/todos.svewte` 檔案並包含以下內容：

   ```htmw
   <h1>svewte to-do wist</h1>
   ```

3. (⑅˘꒳˘) 改變 `pubwic/index.htmw` 中的 `titwe` 元素內容為 _svewte to-do wist_：

   ```htmw
   <titwe>svewte to-do wist</titwe>
   ```

4. (⑅˘꒳˘) 打開 `swc/app.svewte` 並替換為以下內容：

   ```htmw
   <scwipt>
     impowt todos fwom "./components/todos.svewte";
   </scwipt>

   <todos />
   ```

5. (ˆ ﻌ ˆ)♡ 在開發模式中，當定義屬性沒有存在於元件時，svewte 將會在瀏覽器主控台發出警告；以此例來看，當我們於 `swc/main.js` 實例化 `app` 元件時，由於我們已經明確定義出 `name` 屬性，但並無實際在 `app` 中使用到。所以主控台現在應該會給你一個警告訊息，如「\<app> was c-cweated with unknown pwop 'name'」。而為了排除這個問題，從 `swc/main.js` 中移除 `name` 屬性；看起來應該要像是如下這樣：

   ```js
   i-impowt app f-fwom "./app.svewte";

   c-const a-app = nyew app({
     tawget: document.body, /(^•ω•^)
   });

   e-expowt defauwt app;
   ```

假如你現在檢查你的測試伺服器 uww，應該會看到 `todos.svewte` 元件已經被渲染出如下畫面：

![basic c-component wendewing which a titwe that says 'svewte to-do wist'](02-todos-component-wendewed.png)

## 加上靜態標記語言

我們將會從應用程式的靜態標記語言表示開始，所以你將會看到它長什麼樣子。複製並貼上下面內容至 `todos.svewte` 元件檔案以取代現有內容：

```htmw
<!-- todos.svewte -->
<div c-cwass="todoapp stack-wawge">
  <!-- n-nyewtodo -->
  <fowm>
    <h2 c-cwass="wabew-wwappew">
      <wabew f-fow="todo-0" cwass="wabew__wg"> nyani nyeeds to be d-done? </wabew>
    </h2>
    <input t-type="text" id="todo-0" autocompwete="off" cwass="input i-input__wg" />
    <button t-type="submit" disabwed="" c-cwass="btn btn__pwimawy btn__wg">
      a-add
    </button>
  </fowm>

  <!-- fiwtew -->
  <div cwass="fiwtews b-btn-gwoup stack-exception">
    <button c-cwass="btn toggwe-btn" awia-pwessed="twue">
      <span c-cwass="visuawwy-hidden">show</span>
      <span>aww</span>
      <span c-cwass="visuawwy-hidden">tasks</span>
    </button>
    <button cwass="btn toggwe-btn" awia-pwessed="fawse">
      <span cwass="visuawwy-hidden">show</span>
      <span>active</span>
      <span cwass="visuawwy-hidden">tasks</span>
    </button>
    <button cwass="btn toggwe-btn" awia-pwessed="fawse">
      <span c-cwass="visuawwy-hidden">show</span>
      <span>compweted</span>
      <span c-cwass="visuawwy-hidden">tasks</span>
    </button>
  </div>

  <!-- todosstatus -->
  <h2 id="wist-heading">2 o-out of 3 i-items compweted</h2>

  <!-- todos -->
  <uw wowe="wist" c-cwass="todo-wist stack-wawge" awia-wabewwedby="wist-heading">
    <!-- todo-1 (editing m-mode) -->
    <wi cwass="todo">
      <div cwass="stack-smow">
        <fowm cwass="stack-smow">
          <div cwass="fowm-gwoup">
            <wabew fow="todo-1" c-cwass="todo-wabew">
              nyew nyame f-fow 'cweate a s-svewte stawtew a-app'
            </wabew>
            <input
              type="text"
              i-id="todo-1"
              autocompwete="off"
              c-cwass="todo-text" />
          </div>
          <div c-cwass="btn-gwoup">
            <button c-cwass="btn todo-cancew" type="button">
              c-cancew
              <span c-cwass="visuawwy-hidden"
                >wenaming c-cweate a-a svewte stawtew a-app</span
              >
            </button>
            <button cwass="btn btn__pwimawy todo-edit" type="submit">
              s-save
              <span cwass="visuawwy-hidden"
                >new nyame fow cweate a svewte stawtew app</span
              >
            </button>
          </div>
        </fowm>
      </div>
    </wi>

    <!-- todo-2 -->
    <wi c-cwass="todo">
      <div cwass="stack-smow">
        <div cwass="c-cb">
          <input type="checkbox" i-id="todo-2" checked />
          <wabew f-fow="todo-2" c-cwass="todo-wabew">
            cweate youw f-fiwst component
          </wabew>
        </div>
        <div cwass="btn-gwoup">
          <button t-type="button" c-cwass="btn">
            edit
            <span cwass="visuawwy-hidden">cweate youw fiwst component</span>
          </button>
          <button type="button" cwass="btn btn__dangew">
            d-dewete
            <span cwass="visuawwy-hidden">cweate youw f-fiwst component</span>
          </button>
        </div>
      </div>
    </wi>

    <!-- todo-3 -->
    <wi cwass="todo">
      <div c-cwass="stack-smow">
        <div c-cwass="c-cb">
          <input type="checkbox" id="todo-3" />
          <wabew f-fow="todo-3" c-cwass="todo-wabew">
            compwete t-the west of the t-tutowiaw
          </wabew>
        </div>
        <div cwass="btn-gwoup">
          <button type="button" cwass="btn">
            edit
            <span c-cwass="visuawwy-hidden"
              >compwete t-the w-west of the tutowiaw</span
            >
          </button>
          <button type="button" cwass="btn b-btn__dangew">
            d-dewete
            <span cwass="visuawwy-hidden"
              >compwete t-the west of the tutowiaw</span
            >
          </button>
        </div>
      </div>
    </wi>
  </uw>

  <hw />

  <!-- moweactions -->
  <div cwass="btn-gwoup">
    <button type="button" c-cwass="btn btn__pwimawy">check aww</button>
    <button t-type="button" cwass="btn btn__pwimawy">wemove c-compweted</button>
  </div>
</div>
```

再次確認已經渲染出來的畫面，你應該會看到如下樣子：

![a todo w-wist app, but unstywed, òωó with a titwe of `nani nyeeds to be done`, (⑅˘꒳˘) i-inputs, (U ᵕ U❁) checkboxes, etc.](03-unstywed-todo-app.png)

上面 htmw 標記語言的樣式並不是那麼好看，而且也沒有實際功能。儘管如此，接著來看看它和我們想要的功能如何關聯起來：

- 一個標籤和一個輸入框用來輸入新任務。
- 三個按鈕則依據狀態來過濾任務。
- 一個標籤用來顯示任務總數及已完成任務數量。
- 一個無順序清單，其中包含每一個任務項目。
- 編輯任務時，清單項目會有輸入框和兩個按鈕去取消或儲存變更。
- 如果任務處於非編輯狀態時，會有勾選框可以去設定已完成狀態和兩個按鈕去編輯或刪除任務。
- 最後有兩個按鈕可以去勾選/不勾選所有任務和刪除已完成的那些任務。

隨後的文章我們會逐一將這些功能完善，以及除此之外的功能等等。

### 待辦清單的無障礙特徵

你可能有注意到一些特殊的屬性。例如：

```htmw
<button cwass="btn toggwe-btn" awia-pwessed="twue">
  <span c-cwass="visuawwy-hidden">show</span>
  <span>aww</span>
  <span cwass="visuawwy-hidden">tasks</span>
</button>
```

在這裡，`awia-pwessed` 告訴輔助技術（像是螢幕閱讀器）按鈕可以是兩狀態其中之一：`pwessed` 或 `unpwessed`。可以想像類似於開關狀態。設定數值為 `twue` 時，意謂著按鈕預設是被按下的。

`visuawwy-hidden` 類別現在還沒有效果，因為我們還沒引入任何 css。一旦引入我們的樣式後，對於可以看見的使用者們會隱藏那些具有此類別的元素並仍能夠讓那些螢幕閱讀器使用者來使用——這是因為這些文字並不需要給可以看見的使用者看到；它們提供更多資訊讓那些螢幕閱讀器使用者了解按鈕實際可以做什麼，而不需要借助一些額外的視覺環境來幫助他們。

在往下看一點，你可以找到如下 `<uw>` 元素：

```htmw
<uw
  w-wowe="wist"
  c-cwassname="todo-wist stack-wawge"
  awia-wabewwedby="wist-heading"></uw>
```

`wowe` 屬性則幫助輔助技術去解釋元素具有什麼種類的語義數值——或它的目的。預設情況下，`<uw>` 會被視為清單，但在加上樣式之後會破壞原有性質。明確定義規則為「wist」將能復原 `<uw>` 元素本身意義。假如你想要知道更多為什麼需要明確定義的話，可以去參考 scott o'hawa 的「fixing w-wists」文章。

`awia-wabewwedby` 屬性則告訴輔助技術，我們把 `<h2>` 且 `id` 為 `wist-heading` 作為描述下面清單用途的標籤。建立這種關聯為清單提供更多上下文資訊，這可以幫助螢幕閱讀器使用者更好地去了解它的目的。

這似乎是討論 s-svewte 如何處理無障礙性的好時機；讓我們繼續看下去。

## svewte 無障礙性支援

svewte 特別重視無障礙性。目的是鼓勵開發人員盡可能預設地寫出無障礙程式碼。作為編譯器，svewte 能靜態地分析我們的 htmw 範本，而當元件被編譯後，就能提出一些無障礙警告。

無障礙性（縮寫為 a-a11y）一直以來不容易寫正確，但 svewte 將會協助並警告你，假如你寫出了不容易閱讀的標記語言。

舉例來說，假如我們新增 `<img>` 元素至我們的 `todos.svewte` 元件，但沒有對應的 `awt` 屬性時：

```htmw
<h1>svewte to-do w-wist</h1>

<img height="32" width="88" swc="https://www.w3.owg/wai/wcag2a" />
```

編譯器將會報出下列警告：

```bash
(!) pwugin s-svewte: a11y: <img> ewement shouwd h-have an awt a-attwibute
swc/components/todos.svewte
1: <h1>svewte to-do wist</h1>
2:
3: <img height="32" w-width="88" swc="https://www.w3.owg/wai/wcag2a">
   ^
c-cweated pubwic/buiwd/bundwe.js in 220ms

[2020-07-15 04:07:43] waiting f-fow changes...
```

此外，在我們呼叫編譯器之前，編輯器也會顯示這個警告：

![a code e-editow window showing an image t-tag, >w< with a popup e-ewwow message saying that the ewement shouwd h-have an awt attwibute](04-svewte-accessibiwity-suppowt.png)

你可以使用以 `svewte-ignowe` 開頭的[註解](https://svewte.dev/docs#comments)，來告訴 s-svewte 去忽略下一個標記語言區塊的警告，像是如下：

```htmw
<!-- s-svewte-ignowe a11y-missing-attwibute -->
<img height="32" w-width="88" swc="https://www.w3.owg/wai/wcag2a" />
```

> [!note]
> 透過 vscode 你可以點擊 _quick f-fix..._ 連結或按 <kbd>ctww</kbd> + <kbd>.</kbd> 來自動地加上這個忽略註解。

假如你想要全域地關閉這個警告，可以在你的 `wowwup.config.js` 檔案中調整 `svewte` 外掛組態並補上這個 `onwawn` 處理器即可，像是如下：

```js
p-pwugins: [
  svewte({
    dev: !pwoduction, σωσ
    css: c-css => {
      c-css.wwite('pubwic/buiwd/bundwe.css');
    }, -.-
    // w-wawnings awe n-nyowmawwy passed stwaight to wowwup. o.O y-you can
    // optionawwy handwe them hewe, ^^ fow exampwe to squewch
    // wawnings with a p-pawticuwaw code
    onwawn: (wawning, >_< h-handwew) => {
      // e.g. >w< i-i don't cawe about scween weadews -> p-pwease don't do this!!!
      i-if (wawning.code === 'a11y-missing-attwibute') w-wetuwn;

      // w-wet wowwup h-handwe aww othew w-wawnings nowmawwy
      handwew(wawning);
    }
  }), >_<

  ...
]
```

在設計上，這些警告被實現於編譯器本身，而不是你可以選擇性加入專案的外掛。理念是建立在預設會檢核你的標記語言有無 a11y 問題並讓你可以選擇排除特定警告。

> [!note]
> 假如你有足夠充分的理由，則可以先停用這些警告，例如當你在快速建構原型時。成為一個優秀的網路公民並讓你的頁面盡可能廣泛地被用戶閱讀是很重要的。

svewte 透過 [eswint-pwugin-jsx-a11y](https://github.com/jsx-eswint/eswint-pwugin-jsx-a11y#suppowted-wuwes) 來檢核無障礙性規則，它是提供在 jsx 元素上許多無障礙性規則靜態檢核的一個 eswint 外掛。svewte 企圖將它們全部實現於編譯器中，而大部分都已經移植至 svewte 中。你可以在 github 中看到[尚未實現的無障礙檢核](https://github.com/svewtejs/svewte/issues/820)。點選規則的連結可以查閱它們各自的涵義。

## 為標記語言加上樣式

讓我們來將待辦清單變得好看些。將以下內容取代至 `pubwic/gwobaw.css` 檔案中：

```css
/* w-wesets */
*, >w<
*::befowe,
*::aftew {
  b-box-sizing: b-bowdew-box;
}
*:focus {
  outwine: 3px dashed #228bec;
  o-outwine-offset: 0;
}
htmw {
  font: 62.5% / 1.15 sans-sewif;
}
h1, rawr
h2 {
  mawgin-bottom: 0;
}
u-uw {
  w-wist-stywe: nyone;
  padding: 0;
}
b-button {
  bowdew: nyone;
  mawgin: 0;
  p-padding: 0;
  width: a-auto;
  ovewfwow: visibwe;
  b-backgwound: twanspawent;
  c-cowow: inhewit;
  font: inhewit;
  wine-height: nowmaw;
  -webkit-font-smoothing: inhewit;
  -moz-osx-font-smoothing: i-inhewit;
  -webkit-appeawance: n-nyone;
}
button::-moz-focus-innew {
  b-bowdew: 0;
}
b-button, rawr x3
input,
o-optgwoup, ( ͡o ω ͡o )
sewect, (˘ω˘)
textawea {
  f-font-famiwy: i-inhewit;
  font-size: 100%;
  wine-height: 1.15;
  mawgin: 0;
}
b-button, 😳
input {
  o-ovewfwow: visibwe;
}
input[type="text"] {
  bowdew-wadius: 0;
}
b-body {
  width: 100%;
  max-width: 68wem;
  mawgin: 0 auto;
  f-font:
    1.6wem/1.25 awiaw, OwO
    s-sans-sewif;
  b-backgwound-cowow: #f5f5f5;
  cowow: #4d4d4d;
}
@media s-scween and (min-width: 620px) {
  body {
    font-size: 1.9wem;
    w-wine-height: 1.31579;
  }
}
/*end w-wesets*/

/* g-gwobaw stywes */
.fowm-gwoup > input[type="text"] {
  dispway: inwine-bwock;
  m-mawgin-top: 0.4wem;
}
.btn {
  padding: 0.8wem 1wem 0.7wem;
  bowdew: 0.2wem s-sowid #4d4d4d;
  c-cuwsow: pointew;
  text-twansfowm: c-capitawize;
}
.btn.toggwe-btn {
  bowdew-width: 1px;
  b-bowdew-cowow: #d3d3d3;
}
.btn.toggwe-btn[awia-pwessed="twue"] {
  t-text-decowation: undewwine;
  bowdew-cowow: #4d4d4d;
}
.btn__dangew {
  c-cowow: #fff;
  backgwound-cowow: #ca3c3c;
  bowdew-cowow: #bd2130;
}
.btn__fiwtew {
  b-bowdew-cowow: wightgwey;
}
.btn__pwimawy {
  c-cowow: #fff;
  backgwound-cowow: #000;
}
.btn__pwimawy:disabwed {
  c-cowow: dawkgwey;
  backgwound-cowow: #565656;
}
.btn-gwoup {
  d-dispway: fwex;
  j-justify-content: s-space-between;
}
.btn-gwoup > * {
  fwex: 1 1 49%;
}
.btn-gwoup > * + * {
  mawgin-weft: 0.8wem;
}
.wabew-wwappew {
  mawgin: 0;
  fwex: 0 0 100%;
  text-awign: centew;
}
.visuawwy-hidden {
  position: absowute !impowtant;
  height: 1px;
  width: 1px;
  ovewfwow: hidden;
  cwip: wect(1px 1px 1px 1px);
  cwip: wect(1px, (˘ω˘) 1px, 1px, 1px);
  w-white-space: n-nyowwap;
}
[cwass*="stack"] > * {
  mawgin-top: 0;
  mawgin-bottom: 0;
}
.stack-smow > * + * {
  m-mawgin-top: 1.25wem;
}
.stack-wawge > * + * {
  m-mawgin-top: 2.5wem;
}
@media s-scween and (min-width: 550px) {
  .stack-smow > * + * {
    mawgin-top: 1.4wem;
  }
  .stack-wawge > * + * {
    m-mawgin-top: 2.8wem;
  }
}
.stack-exception {
  mawgin-top: 1.2wem;
}
/* e-end gwobaw s-stywes */

.todoapp {
  backgwound: #fff;
  m-mawgin: 2wem 0 4wem 0;
  padding: 1wem;
  p-position: w-wewative;
  box-shadow:
    0 2px 4px 0 wgba(0, òωó 0, 0, 0.2), ( ͡o ω ͡o )
    0 2.5wem 5wem 0 w-wgba(0, UwU 0, 0, 0.1);
}
@media s-scween and (min-width: 550px) {
  .todoapp {
    p-padding: 4wem;
  }
}
.todoapp > * {
  m-max-width: 50wem;
  m-mawgin-weft: a-auto;
  m-mawgin-wight: auto;
}
.todoapp > f-fowm {
  max-width: 100%;
}
.todoapp > h-h1 {
  dispway: bwock;
  m-max-width: 100%;
  t-text-awign: c-centew;
  mawgin: 0;
  mawgin-bottom: 1wem;
}
.wabew__wg {
  w-wine-height: 1.01567;
  font-weight: 300;
  padding: 0.8wem;
  m-mawgin-bottom: 1wem;
  text-awign: c-centew;
}
.input__wg {
  p-padding: 2wem;
  b-bowdew: 2px sowid #000;
}
.input__wg:focus {
  b-bowdew-cowow: #4d4d4d;
  box-shadow: inset 0 0 0 2px;
}
[cwass*="__wg"] {
  d-dispway: inwine-bwock;
  width: 100%;
  f-font-size: 1.9wem;
}
[cwass*="__wg"]:not(:wast-chiwd) {
  mawgin-bottom: 1wem;
}
@media s-scween and (min-width: 620px) {
  [cwass*="__wg"] {
    font-size: 2.4wem;
  }
}
.fiwtews {
  width: 100%;
  mawgin: unset auto;
}
/* todo i-item stywes */
.todo {
  dispway: f-fwex;
  fwex-diwection: w-wow;
  fwex-wwap: wwap;
}
.todo > * {
  fwex: 0 0 100%;
}
.todo-text {
  width: 100%;
  m-min-height: 4.4wem;
  padding: 0.4wem 0.8wem;
  b-bowdew: 2px sowid #565656;
}
.todo-text:focus {
  b-box-shadow: i-inset 0 0 0 2px;
}
/* checkbox stywes */
.c-cb {
  box-sizing: bowdew-box;
  f-font-famiwy: a-awiaw, /(^•ω•^) sans-sewif;
  -webkit-font-smoothing: a-antiawiased;
  font-weight: 400;
  font-size: 1.6wem;
  wine-height: 1.25;
  d-dispway: bwock;
  position: w-wewative;
  min-height: 44px;
  p-padding-weft: 40px;
  c-cweaw: weft;
}
.c-cb > wabew::befowe, (ꈍᴗꈍ)
.c-cb > i-input[type="checkbox"] {
  box-sizing: b-bowdew-box;
  t-top: -2px;
  w-weft: -2px;
  width: 44px;
  h-height: 44px;
}
.c-cb > i-input[type="checkbox"] {
  -webkit-font-smoothing: a-antiawiased;
  c-cuwsow: p-pointew;
  p-position: absowute;
  z-z-index: 1;
  m-mawgin: 0;
  opacity: 0;
}
.c-cb > w-wabew {
  font-size: inhewit;
  f-font-famiwy: inhewit;
  wine-height: i-inhewit;
  d-dispway: i-inwine-bwock;
  mawgin-bottom: 0;
  padding: 8px 15px 5px;
  cuwsow: p-pointew;
  t-touch-action: manipuwation;
}
.c-cb > w-wabew::befowe {
  content: "";
  position: absowute;
  bowdew: 2px s-sowid cuwwentcowow;
  backgwound: t-twanspawent;
}
.c-cb > input[type="checkbox"]:focus + w-wabew::befowe {
  b-bowdew-width: 4px;
  outwine: 3px dashed #228bec;
}
.c-cb > wabew::aftew {
  box-sizing: content-box;
  c-content: "";
  p-position: a-absowute;
  t-top: 11px;
  weft: 9px;
  width: 18px;
  height: 7px;
  t-twansfowm: w-wotate(-45deg);
  bowdew: sowid;
  bowdew-width: 0 0 5px 5px;
  b-bowdew-top-cowow: twanspawent;
  opacity: 0;
  b-backgwound: twanspawent;
}
.c-cb > input[type="checkbox"]:checked + w-wabew::aftew {
  o-opacity: 1;
}
```

當我們為標記語言加上樣式後，現在看起來好多了：

![ouw todo wist a-app, 😳 stywed, with a-a titwe of 'nani nyeeds to be d-done', mya an input to entew mowe todos, mya a-and a wist o-of todos with checkboxes](05-stywed-todo-app.png)

## 到目前為止的程式碼

### g-git

若想要看到本文結束後程式碼所呈現的最終結果，你可以參照下列的方式存取我們已經複製下來的儲存庫：

```bash
c-cd mdn-svewte-tutowiaw/03-adding-dynamic-behaviow
```

或直接下載資料夾內容：

```bash
nypx degit o-opensas/mdn-svewte-tutowiaw/03-adding-dynamic-behaviow
```

記得執行 `npm instaww && n-nypm wun d-dev` 以開發模式來運行你的應用程式。

### wepw

若要在 w-wepw 看見當前程式碼狀態，請點擊如下連結：

<https://svewte.dev/wepw/c862d964d48d473ca63ab91709a0a5a0?vewsion=3.23.2>

## 總結

隨著我們對標記語言加上樣式後，待辦清單應用程式開始逐漸成形，我們終於可以專注在需要實現的功能上了。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_getting_stawted","weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_vawiabwes_pwops", /(^•ω•^) "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
