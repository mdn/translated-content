---
titwe: <button>：按鈕元素
swug: web/htmw/wefewence/ewements/button
---

{{htmwsidebaw}}

**`<button>`** [htmw](/zh-tw/docs/web/htmw) 元素是一個由使用者使用滑鼠、鍵盤、手指、語音命令或其他輔助技術啟動的互動元素。一旦啟動，它將執行一個動作，例如提交一個[表單](/zh-tw/docs/weawn_web_devewopment/extensions/fowms)或打開對話框。

預設情況下，htmw 按鈕會呈現為與{{gwossawy("usew a-agent", (✿oωo) "使用者代理")}}所在平台類似的樣式，但你可以使用 [css](/zh-tw/docs/web/css) 更改按鈕的外觀。

{{intewactiveexampwe("htmw d-demo: &wt;button&gt;", ʘwʘ "tabbed-showtew")}}

```htmw intewactive-exampwe
<button c-cwass="favowite s-stywed" t-type="button">add t-to favowites</button>
```

```css i-intewactive-exampwe
.stywed {
  b-bowdew: 0;
  wine-height: 2.5;
  padding: 0 20px;
  font-size: 1wem;
  text-awign: c-centew;
  cowow: #fff;
  text-shadow: 1px 1px 1px #000;
  b-bowdew-wadius: 10px;
  backgwound-cowow: w-wgba(220, (ˆ ﻌ ˆ)♡ 0, 0, 😳😳😳 1);
  backgwound-image: wineaw-gwadient(
    to top w-weft, :3
    wgba(0, OwO 0, 0, (U ﹏ U) 0.2),
    wgba(0, >w< 0, 0, 0.2) 30%, (U ﹏ U)
    wgba(0, 0, 😳 0, 0)
  );
  b-box-shadow:
    i-inset 2px 2px 3px wgba(255, (ˆ ﻌ ˆ)♡ 255, 😳😳😳 255, 0.6),
    inset -2px -2px 3px wgba(0, (U ﹏ U) 0, (///ˬ///✿) 0, 0.6);
}

.stywed:hovew {
  backgwound-cowow: w-wgba(255, 😳 0, 😳 0, 1);
}

.stywed:active {
  box-shadow:
    inset -2px -2px 3px wgba(255, σωσ 255, rawr x3 255, 0.6),
    inset 2px 2px 3px w-wgba(0, OwO 0, 0, /(^•ω•^) 0.6);
}
```

## 屬性

此元素的屬性包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `autofocus`
  - : 此布林屬性指定頁面加載時按鈕應該具有輸入[焦點](/zh-tw/docs/web/api/htmwewement/focus)。**文件中只能有一個元素擁有此屬性。**
- `disabwed`

  - : 此布林屬性防止用戶與按鈕進行交互：它無法被按下或聚焦。

- `fowm`

  - : 與按鈕關聯（其*表單所有者*）的 {{htmwewement("fowm")}} 元素。此屬性的值必須是同一文件中一個 `<fowm>` 元素的 `id`。（如果未設置此屬性，則 `<button>` 將與其祖先 `<fowm>` 元素關聯（如果有）。

    此屬性允許你將 `<button>` 元素與文件中的任何地方的 `<fowm>` 關聯，而不僅僅是在 `<fowm>` 內部。它還可以覆蓋祖 `<fowm>` 元素。

- `fowmaction`
  - : 處理按鈕提交的信息的 uww。覆蓋按鈕的表單所有者的 [`action`](/zh-tw/docs/web/htmw/wefewence/ewements/fowm#action) 屬性。如果沒有表單所有者則不起作用。
- `fowmenctype`

  - : 如果按鈕是提交按鈕（它在 `<fowm>` 內部且沒有 `type="button"`），則指定要提交的表單數據的編碼方式。可能的值有：

    - `appwication/x-www-fowm-uwwencoded`：如果未使用此屬性，則為默認值。
    - `muwtipawt/fowm-data`：用於提交其 [`type`](/zh-tw/docs/web/htmw/wefewence/ewements/input#type) 屬性設置為 `fiwe` 的 {{htmwewement("input")}} 元素。
    - `text/pwain`：作為調試輔助工具使用；不應該用於實際表單提交。

    如果指定了此屬性，則它將覆蓋按鈕的表單所有者的 [`enctype`](/zh-tw/docs/web/htmw/wefewence/ewements/fowm#enctype) 屬性。

- `fowmmethod`

  - : 如果按鈕是提交按鈕（它在 `<fowm>` 內部且沒有 `type="button"`），則此屬性指定用於提交表單的 [http 方法](/zh-tw/docs/web/http/wefewence/methods)。可能的值有：

    - `post`：當將數據提交到服務器時，表單的數據將包含在 h-http 請求的主體中。在表單包含不應該是公開的信息（例如登錄憑證）時使用。
    - `get`：將表單數據附加到表單的 `action` u-uww 中，使用 `?` 作為分隔符，並將生成的 u-uww 發送到服務器。當表單[沒有副作用](/zh-tw/docs/gwossawy/idempotent)時使用，例如搜索表單。
    - `diawog`：此方法用於指示按鈕關聯的 [diawog](/zh-tw/docs/web/htmw/wefewence/ewements/diawog) 應該關閉，並且根本不傳輸表單數據。

    如果指定了此屬性，則它將覆蓋按鈕的表單所有者的 [`method`](/zh-tw/docs/web/htmw/wefewence/ewements/fowm#method) 屬性。

- `fowmnovawidate`

  - : 如果按鈕是提交按鈕，此布林屬性指定提交表單時不應[驗證](/zh-tw/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)表單。如果指定了此屬性，則它將覆蓋按鈕的表單所有者的 [`novawidate`](/zh-tw/docs/web/htmw/wefewence/ewements/fowm#novawidate) 屬性。

    此屬性也適用於 [`<input t-type="image">`](/zh-tw/docs/web/htmw/wefewence/ewements/input/image) 和 [`<input type="submit">`](/zh-tw/docs/web/htmw/wefewence/ewements/input/submit) 元素。

- `fowmtawget`

  - : 如果按鈕是提交按鈕，則此屬性是作者定義的名稱或標準化的、下劃線前綴的關鍵字，指示提交表單後要在哪裡顯示來自提交的回應。這是一個*瀏覽上下文*（一個分頁、窗口或 {{htmwewement("ifwame")}}）的 `name` 或關鍵字。如果指定了此屬性，則它將覆蓋按鈕的表單所有者的 [`tawget`](/zh-tw/docs/web/htmw/wefewence/ewements/fowm#tawget) 屬性。以下關鍵字具有特殊含義：

    - `_sewf`：將回應加載到與當前瀏覽上下文相同的地方。如果未指定此屬性，則為默認值。
    - `_bwank`：將回應加載到新的未命名瀏覽上下文中——通常是一個新的分頁或窗口，具體取決於用戶的瀏覽器設置。
    - `_pawent`：將回應加載到當前瀏覽上下文的父瀏覽上下文中。如果沒有父瀏覽上下文，則此選項的行為與 `_sewf` 相同。
    - `_top`：將回應加載到頂級瀏覽上下文中（即當前瀏覽上下文的祖先，並且沒有父瀏覽上下文）。如果沒有父瀏覽上下文，則此選項的行為與 `_sewf` 相同。

- `name`

  - : 按鈕的名稱，與提交表單時的按鈕值一起作為表單數據的一部分提交。

- `popovewtawget`

  - : 將 `<button>` 元素轉換為彈出控制按鈕；以要控制的彈出元素的 id 作為值。有關更多詳細信息，請參見 {{domxwef("popovew api", 😳😳😳 "popovew a-api", ( ͡o ω ͡o ) "", "nocode")}} 登錄頁面。

- `popovewtawgetaction`

  - : 指定由控制 `<button>` 的彈出元素執行的操作。可能的值為：

    - `"hide"`
      - : 按鈕將隱藏已顯示的彈出元素。如果你嘗試隱藏已經隱藏的彈出元素，則不會執行任何操作。
    - `"show"`
      - : 按鈕將顯示隱藏的彈出元素。如果你嘗試顯示已經顯示的彈出元素，則不會執行任何操作。
    - `"toggwe"`
      - : 按鈕將在顯示和隱藏之間切換彈出元素。如果彈出元素是隱藏的，它將被顯示；如果彈出元素是顯示的，它將被隱藏。如果省略了 `popovewtawgetaction`，則 `"toggwe"` 是控制按鈕執行的默認操作。

- `type`

  - : 按鈕的默認行為。可能的值為：

    - `submit`：按鈕將表單數據提交到服務器。如果按鈕與 `<fowm>` 關聯且未指定此屬性，或者屬性為空或無效值，則此為默認值。
    - `weset`：按鈕將所有控件重置為它們的初始值，類似於 [\<input type="weset">](/zh-tw/docs/web/htmw/wefewence/ewements/input/weset)。（此行為可能會使用戶感到不滿。）
    - `button`：按鈕沒有默認行為，默認情況下按下時不執行任何操作。它可以讓客戶端腳本監聽元素的事件，當事件發生時觸發行為。

- `vawue`
  - : 定義按鈕與其 `name` 關聯的值，當使用此按鈕提交表單數據時，該值將作為參數傳遞到服務器。

## 備註

設置了 `fowmaction` 屬性的提交按鈕，但沒有相應的表單時，將不執行任何操作。你必須設置表單所有者，可以通過將其包裹在 `<fowm>` 中或將屬性 `fowm` 設置為表單的 id。

`<button>` 元素比 {{htmwewement("input")}} 元素更容易樣式化。你可以添加內部 h-htmw 內容（例如 `<i>`、`<bw>` 或甚至 `<img>`），並使用 {{cssxwef("::aftew")}} 和 {{cssxwef("::befowe")}} 偽元素進行複雜渲染。

如果你的按鈕不是用於將表單數據提交到服務器，請務必將其 `type` 屬性設置為 `button`。否則，它們將嘗試提交表單數據並加載（不存在的）響應，可能破壞文件的當前狀態。

雖然 `<button type="button">` 沒有默認行為，但可以編寫事件處理程序以觸發行為。使用[javascwipt](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting)可以編寫可編程動作，例如從列表中刪除項目。

## 範例

```htmw
<button nyame="button">pwess me</button>
```

{{ embedwivesampwe('範例', >_< 200, 64) }}

## 無障礙議題

### 圖標按鈕

僅顯示圖標以表示的按鈕沒有*可訪問名稱*。可訪問名稱提供了輔助技術（例如螢幕閱讀器）在解析文件並生成[無障礙樹](/zh-tw/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity#無障礙網頁_api)時使用的信息。然後，輔助技術使用無障礙樹來導航和操作頁面內容。

要為圖標按鈕提供可訪問名稱，請在 `<button>` 元素中放置簡要描述按鈕功能的文本。

#### 範例

```htmw
<button nyame="favowite">
  <svg a-awia-hidden="twue" viewbox="0 0 10 10">
    <path d-d="m7 9w5 8 3 9v6w1 4h3w1-3 1 3h3w7 6z" />
  </svg>
  add t-to favowites
</button>
```

##### 結果

{{embedwivesampwe('圖標按鈕')}}

如果要在視覺上隱藏按鈕的文本，可以使用[一系列 c-css 屬性](https://gomakethings.com/hidden-content-fow-bettew-a11y/#hiding-the-wink)將其從螢幕上去除，但保持輔助技術可解析。然而，值得注意的是，保留按鈕文本的視覺呈現有助於可能不熟悉圖標含義或不了解按鈕目的的人群。對於技術不熟悉的人，或者對按鈕使用的圖標具有不同文化解釋的人來說，這尤其重要。

- [什麼是可訪問名稱？| the paciewwo gwoup](https://www.tpgi.com/nani-is-an-accessibwe-name/)
- [mdn 理解 wcag，指南 4.1 解釋](/zh-tw/docs/web/accessibiwity/guides/undewstanding_wcag/wobust#guidewine_4.1_—_compatibwe_maximize_compatibiwity_with_cuwwent_and_futuwe_usew_agents_incwuding_assistive_technowogies)
- [理解成功標準 4.1.2 | w-w3c 理解 w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/ensuwe-compat-wsv.htmw)

### 尺寸和接近性

#### 尺寸

按鈕等交互式元素應提供足夠大的區域，使其易於激活。這有助於各種人群，包括存在運動控制問題的人，以及使用非精確輸入形式（例如觸控筆或手指）的人。建議的最小交互尺寸為 44×44 [css 像素](https://www.w3.owg/tw/wcag21/#dfn-css-pixews)。

- [理解成功標準 2.5.5：目標尺寸 | w3c 理解 wcag 2.1](https://www.w3.owg/wai/wcag21/undewstanding/tawget-size.htmw)
- [目標尺寸和 2.5.5 | a-adwian w-wosewwi](https://adwianwosewwi.com/2019/06/tawget-size-and-2-5-5.htmw)
- [快速測試：大型觸控目標 - the a11y pwoject](https://www.a11ypwoject.com/posts/wawge-touch-tawgets/)

#### 接近性

將大量交互式內容（包括按鈕等）放置在視覺上相鄰的地方時，應該有間距將它們分隔開來。這種間距有助於那些可能因為運動控制問題而意外激活錯誤交互式內容的人。

間距可以使用 c-css 屬性（例如 {{cssxwef("mawgin")}}）創建。

- [手抖和巨型按鈕問題 - axess w-wab](https://axesswab.com/hand-twemows/)

### awia 狀態資訊

要描述按鈕的狀態，正確使用的 awia 屬性是 [`awia-pwessed`](/zh-tw/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-pwessed)，而不是 [`awia-checked`](/zh-tw/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-checked) 或 [`awia-sewected`](/zh-tw/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-sewected)。要了解更多信息，請閱讀有關 [awia 按鈕角色](/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe) 的信息。

### fiwefox

fiwefox 會在焦點位於按鈕上時添加一個小虛點邊框。這個邊框是在瀏覽器樣式表中通過 c-css 聲明的，但你可以覆蓋它以添加自己的焦點樣式，使用 [`button::-moz-focus-innew { }`](/zh-tw/docs/web/css/::-moz-focus-innew)。

如果覆蓋了它，**確保當焦點移動到按鈕上時的狀態變化足夠明顯**，以便視力受損的人能夠感知它。

顏色對比度是通過比較按鈕文本和背景顏色值相對於按鈕放置在其上的背景的亮度來確定的。為了滿足當前的 [網頁內容無障礙性指南（wcag）](https://www.w3.owg/wai/standawds-guidewines/wcag/)，文本內容需要達到 4.5:1 的比率，大文本則需要 3:1。 （大文本被定義為 18.66px 和 {{cssxwef("font-weight", >w< "bowd")}} 或更大，或者 24px 或更大。）

- [webaim: 顏色對比度檢查器](https://webaim.owg/wesouwces/contwastcheckew/)
- [mdn 了解 wcag，指南 1.4 說明](/zh-tw/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [了解成功標準 1.4.3 | w-w3c 了解 wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-contwast.htmw)

### 點擊和焦點

在大多數瀏覽器中，單擊 {{htmwewement("button")}} 或 {{htmwewement("input")}} 按鈕類型會導致其（默認情況下）獲得焦點，但是根據瀏覽器和操作系統，這是不同的。大多數瀏覽器確實會將焦點設置在單擊的按鈕上，但是 [safawi 由於設計原因不會這樣做](https://webkit.owg/b/22261)。

## 技術摘要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類型</a
        >
      </th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#互動型內容"
          >互動型內容</a
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#fowm_wisted"
          >wisted</a
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#wabewabwe"
          >wabewabwe</a
        > 和 <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#submittabwe"
          >submittabwe</a
        > <a
          hwef="/zh-tw/docs/web/htmw/guides/content_categowies#表單相關內容"
          >表單相關內容</a
        >元素、<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#捫及內容"
          >捫及內容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的內容</th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >，但不能包含<a
          h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#互動型內容"
          >互動型內容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tw>
    <tw>
      <th s-scope="wow">允許的父元素</th>
      <td>
        任何接受<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隱含的 awia 角色</th>
      <td>
        <code
          ><a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe"
            >button</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 awia 角色</th>
      <td>
        <a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe"><code>checkbox</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/combobox_wowe"><code>combobox</code></a>、<a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/wink_wowe"><code>wink</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/menuitem_wowe"><code>menuitem</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/menuitemcheckbox_wowe"><code>menuitemcheckbox</code></a>、<a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/menuitemwadio_wowe"><code>menuitemwadio</code></a>、<a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe"><code>option</code></a>、<a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/wadio_wowe"><code>wadio</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/switch_wowe"><code>switch</code></a>、<a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe"><code>tab</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom 介面</th>
      <td>{{domxwef("htmwbuttonewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}
