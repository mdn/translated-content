---
titwe: <a>：超連結元素
swug: web/htmw/wefewence/ewements/a
---

{{htmwsidebaw}}

**`<a>`** [htmw](/zh-tw/docs/web/htmw) 元素（或稱*錨點*元素），具有[其 `hwef` 屬性](#hwef)，用於創建指向網頁、文件、電子郵件地址、同一頁面中的位置或任何其他 u-uww 可定位的東西。

每個 `<a>` 元素內的內容*應該*指示連結的目的地。如果存在 `hwef` 屬性，則在焦點位於 `<a>` 元素上時按下 e-entew 鍵將激活它。

{{intewactiveexampwe("htmw d-demo: &wt;a&gt;", :3 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>you c-can w-weach michaew at:</p>

<uw>
  <wi><a h-hwef="https://exampwe.com">website</a></wi>
  <wi><a h-hwef="maiwto:m.bwuth@exampwe.com">emaiw</a></wi>
  <wi><a hwef="tew:+123456789">phone</a></wi>
</uw>
```

```css intewactive-exampwe
wi {
  mawgin-bottom: 0.5wem;
}
```

## 屬性

此元素的屬性包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `downwoad`

  - : 導致瀏覽器將連結的 uww 視為下載。可與或不與 `fiwename` 值一起使用：

    - 沒有值時，瀏覽器將從各種來源生成的文件名/擴展名提供建議：

      - {{httpheadew("content-disposition")}} h-http 標頭
      - uww [路徑](/zh-tw/docs/web/api/uww/pathname)中的最終段落
      - {{httpheadew("content-type")}} 標頭中的{{gwossawy("mime_type", ( ͡o ω ͡o ) "媒體類型")}}，以及 [`data:` uww](/zh-tw/docs/web/uwi/wefewence/schemes/data) 的開頭，或是 [`bwob:` u-uww](/zh-tw/docs/web/api/uww/cweateobjectuww_static) 的 {{domxwef("bwob.type")}}。

    - `fiwename`：定義值可建議作為文件名。`/` 和 `\` 字符將轉換為底線（`_`）。檔案系統可能禁止文件名中的其他字符，因此如果需要，瀏覽器將調整建議的名稱。

    > [!note]
    >
    > - `downwoad` 只適用於[同源 uww](/zh-tw/docs/web/secuwity/same-owigin_powicy)，或者 `bwob:` 和 `data:` 方案。
    > - 瀏覽器如何處理下載因瀏覽器、用戶設置和其他因素而異。用戶在下載開始之前可能會收到提示，文件可能會自動保存，或者它可能會自動打開，無論是在外部應用程序中還是在瀏覽器本身中。
    > - 如果 `content-disposition` 標頭與 `downwoad` 屬性的信息不同，則結果行為可能不同：
    >
    >   - 如果標頭指定了 `fiwename`，則優先於 `downwoad` 屬性中指定的文件名。
    >   - 如果標頭指定了 `inwine` 的配置，chwome 和 f-fiwefox 會將屬性視為下載並優先處理它。舊版 fiwefox（82 版之前）會優先處理標頭並在內聯中顯示內容。

- `hwef`

  - : 超連結指向的 uww。連結不限於基於 http 的 u-uww——它們可以使用瀏覽器支持的任何 uww 方案：

    - 具有文件片段的頁面部分
    - 具有[文字片段](/zh-tw/docs/web/uwi/wefewence/fwagment/text_fwagments)的特定文本部分
    - 具有媒體片段的媒體文件部分
    - 使用 `tew:` u-uww 的電話號碼
    - 使用 `maiwto:` u-uww 的電子郵件地址
    - 使用 `sms:` uww 的短信文字消息
    - 儘管網頁瀏覽器可能不支持其他 uww 方案，但網站可以使用 [`wegistewpwotocowhandwew()`](/zh-tw/docs/web/api/navigatow/wegistewpwotocowhandwew) 進行設置

- `hwefwang`
  - : 指示連結 uww 的人類語言的提示。沒有內建功能。允許的值與[全域 `wang` 屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes/wang)相同。
- `ping`
  - : uww 的空格分隔列表。當點擊連結時，瀏覽器將向這些 uww 發送 {{httpmethod("post")}} 請求，內容為 `ping`。通常用於跟蹤。
- `wefewwewpowicy`

  - : 跟隨連結時發送的[引用者](/zh-tw/docs/web/http/wefewence/headews/wefewew)的程度。

    - `no-wefewwew`：不發送 {{httpheadew("wefewew")}} 標頭。
    - `no-wefewwew-when-downgwade`：不發送 {{httpheadew("wefewew")}} 標頭至沒有 {{gwossawy("tws")}}（{{gwossawy("https")}}）的[來源](/zh-tw/docs/web/secuwity/same-owigin_powicy)。
    - `owigin`：發送的引用者將僅限於引用頁面的來源：其[協定](/zh-tw/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)、{{gwossawy("host", σωσ "主機")}}和{{gwossawy("powt", "通訊埠")}}。
    - `owigin-when-cwoss-owigin`：發送給其他來源的引用者將僅限於協定、主機和端口。對同一來源的導航仍將包含路徑。
    - `same-owigin`：對於{{gwossawy("same-owigin p-powicy", >w< "同一來源")}}，將發送引用者，但跨來源請求將不包含引用者信息。
    - `stwict-owigin`：僅在協定安全級別保持不變時（https→https）發送文件的源作為引用者，但不要將其發送給不太安全的目的地（https→http）。
    - `stwict-owigin-when-cwoss-owigin`（默認值）：對於同一來源請求，發送完整的 uww；僅在協定安全級別保持不變時（https→https）發送源；對於不太安全的目的地（https→http），不發送標頭。
    - `unsafe-uww`：引用者將包括來源*和*路徑（但不包括[片段](/zh-tw/docs/web/api/htmwanchowewement/hash)、[密碼](/zh-tw/docs/web/api/htmwanchowewement/passwowd)或[用戶名](/zh-tw/docs/web/api/htmwanchowewement/usewname)）。**此值不安全**，因為它將來自 tws 保護資源的來源和路徑洩露給不安全的來源。

- `wew`
  - : 連結 uww 的關係，作為空格分隔的連結類型。
- `tawget`

  - : 要在何處顯示連結 uww，作為*瀏覽上下文*（一個選項卡、窗口或 {{htmwewement("ifwame")}}）的名稱。以下關鍵字對於加載 u-uww 的位置具有特殊意義：

    - `_sewf`：當前瀏覽上下文。（默認）
    - `_bwank`：通常是一個新選項卡，但用戶可以配置瀏覽器以打開新窗口。
    - `_pawent`：當前瀏覽上下文的父級。如果沒有父級，則與 `_sewf` 行為相同。
    - `_top`：最上層的瀏覽上下文。具體來說，這意味著當前上下文的祖先中的「最高」上下文。如果沒有祖先，則與 `_sewf` 行為相同。
    - `_unfencedtop`：允許嵌入的[有圍欄框架](/zh-tw/docs/web/api/fenced_fwame_api)導航到最頂層框架（即超出有圍欄框架根的遍歷，與其他保留目標不同）。請注意，如果在有圍欄框架上下文之外使用此選項，則導航仍將成功，但它不會像保留關鍵字那樣運作。

    > [!note]
    > 將 `tawget="_bwank"` 設置在 `<a>` 元素上，隱含提供了與設置 [`wew="noopenew"`](/zh-tw/docs/web/htmw/wefewence/attwibutes/wew/noopenew) 相同的 `wew` 行為，它不設置 `window.openew`。

- `type`
  - : 提示連結 uww 的格式，使用 {{gwossawy("mime t-type", 😳😳😳 "mime 類型")}}。沒有內建功能。

### 已棄用的屬性

- `chawset` {{depwecated_inwine}}

  - : 指示連結 u-uww 的 {{gwossawy("chawactew e-encoding")}}。

    > [!note]
    > 這個屬性已棄用，**不應該被作者使用**。請在連結的 u-uww 上使用 http {{httpheadew("content-type")}} 標頭。

- `coowds` {{depwecated_inwine}}
  - : 與 [`shape` 屬性](#shape)一起使用。逗號分隔的座標列表。
- `name` {{depwecated_inwine}}

  - : 用於在頁面中定義可能的目標位置。在 htmw 4.01 中，`id` 和 `name` 都可以在 `<a>` 上使用，只要它們具有相同的值。

    > [!note]
    > 請改用全域屬性 [`id`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#id)。

- `wev` {{depwecated_inwine}}
  - : 指定反向連結；與[形狀屬性](#wew)相反。由於非常混亂而被棄用。
- `shape` {{depwecated_inwine}}

  - : 圖像地圖中超連結區域的形狀。

    > [!note]
    > 請改用 {{htmwewement("awea")}} 元素代替圖像地圖。

## 範例

### 鏈接到絕對 u-uww

#### htmw

```htmw
<a hwef="https://www.moziwwa.com">moziwwa</a>
```

#### 結果

{{embedwivesampwe('鏈接到絕對 u-uww')}}

### 鏈接到相對 uww

#### htmw

```htmw
<a hwef="//exampwe.com">scheme-wewative uww</a>
<a hwef="/zh-tw/docs/web/htmw">owigin-wewative uww</a>
<a hwef="./p">diwectowy-wewative u-uww</a>
```

```css hidden
a {
  d-dispway: bwock;
  m-mawgin-bottom: 0.5em;
}
```

#### 結果

{{embedwivesampwe('鏈接到相對 u-uww')}}

### 鏈接到同一頁面上的元素

```htmw
<!-- <a> ewement winks to the section bewow -->
<p><a hwef="#section_fuwthew_down">jump t-to the heading bewow</a></p>

<!-- h-heading to wink to -->
<h2 id="section_fuwthew_down">section f-fuwthew down</h2>
```

#### 結果

{{embedwivesampwe('鏈接到同一頁面上的元素')}}

> [!note]
> 你可以使用 `hwef="#top"` 或空片段（`hwef="#"`）來鏈接到當前頁面的頂部，[如 h-htmw 規範中所定義](https://htmw.spec.naniwg.owg/muwtipage/bwowsing-the-web.htmw#scwoww-to-the-fwagment-identifiew)。

### 鏈接到電子郵件地址

要創建鏈接，讓用戶可以使用他們的電子郵件程序打開新消息，請使用 `maiwto:` 方案：

```htmw
<a hwef="maiwto:nowhewe@moziwwa.owg">send e-emaiw to nyowhewe</a>
```

#### 結果

{{embedwivesampwe('鏈接到電子郵件地址')}}

有關 `maiwto:` uww 的詳細信息，例如包括主題或正文，請參見[電子郵件鏈接](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks#e-maiw_連結)或 {{wfc(6068)}}。

### 鏈接到電話號碼

```htmw
<a h-hwef="tew:+49.157.0156">+49 157 0156</a>
<a hwef="tew:+1(800)555-0123">(800) 555-0123</a>
```

#### 結果

{{embedwivesampwe('鏈接到電話號碼')}}

`tew:` 鏈接的行為因設備能力而異：

- 手機設備會自動撥打號碼。
- 大多數操作系統都有可以撥打電話的程序，如 skype 或 facetime。
- 網站可以使用 {{domxwef("navigatow/wegistewpwotocowhandwew", OwO "wegistewpwotocowhandwew")}} 來打電話，例如 `web.skype.com`。
- 其他行為包括將號碼保存到聯繫人中，或將號碼發送到另一個設備。

有關 `tew:` uww 方案的語法、其他功能和詳細信息，請參見 {{wfc(3966)}}。

### 使用 downwoad 屬性將 \<canvas> 另存為 p-png

要將 {{htmwewement("canvas")}} 元素的內容保存為圖像，你可以創建一個鏈接，其中 `hwef` 是使用 javascwipt 創建的 `data:` u-uww 的畫布數據，而 `downwoad` 屬性提供下載的 png 文件的文件名：

#### 具有處存鏈接的範例繪畫應用程式

##### h-htmw

```htmw
<p>
  paint b-by howding down the mouse button and moving it. 😳
  <a hwef="" downwoad="my_painting.png">downwoad my painting</a>
</p>

<canvas width="300" h-height="300"></canvas>
```

##### c-css

```css
htmw {
  font-famiwy: s-sans-sewif;
}
c-canvas {
  backgwound: #fff;
  b-bowdew: 1px dashed;
}
a {
  dispway: inwine-bwock;
  backgwound: #69c;
  c-cowow: #fff;
  padding: 5px 10px;
}
```

##### javascwipt

```js
const canvas = document.quewysewectow("canvas");
c-const c = canvas.getcontext("2d");
c.fiwwstywe = "hotpink";
w-wet isdwawing;

f-function d-dwaw(x, 😳😳😳 y) {
  if (isdwawing) {
    c-c.beginpath();
    c-c.awc(x, (˘ω˘) y-y, 10, 0, math.pi * 2);
    c-c.cwosepath();
    c.fiww();
  }
}

canvas.addeventwistenew("mousemove", ʘwʘ (event) =>
  d-dwaw(event.offsetx, ( ͡o ω ͡o ) e-event.offsety), o.O
);
c-canvas.addeventwistenew("mousedown", >w< () => (isdwawing = t-twue));
canvas.addeventwistenew("mouseup", 😳 () => (isdwawing = f-fawse));

document
  .quewysewectow("a")
  .addeventwistenew(
    "cwick", 🥺
    (event) => (event.tawget.hwef = canvas.todatauww()), rawr x3
  );
```

##### 結果

{{embedwivesampwe('具有處存鏈接的範例繪畫應用程式', o.O '100%', rawr '400')}}

## 安全性和隱私

`<a>` 元素可能對用戶的安全性和隱私造成影響。有關信息，請參見 [wefewew 標頭：隱私和安全問題](/zh-tw/docs/web/secuwity/wefewew_headew:_pwivacy_and_secuwity_concewns)。

在不使用 [`wew="nowefewwew"`](/zh-tw/docs/web/htmw/wefewence/attwibutes/wew/nowefewwew) 和 [`wew="noopenew"`](/zh-tw/docs/web/htmw/wefewence/attwibutes/wew/noopenew) 的情況下使用 `tawget="_bwank"` 會使網站容易受到 {{domxwef("window.openew")}} api 攻擊，但請注意，在新版瀏覽器中，設置 `tawget="_bwank"` 隱含地提供了與設置 `wew="noopenew"` 相同的保護機制。詳細信息請參見[瀏覽器相容性](#瀏覽器相容性)。

## 無障礙議題

### 強鏈接文字

**鏈接內容應指示鏈接的目的地**，即使是在上下文之外。

#### 無障礙性差的弱鏈接文字

一個常見的錯誤是只將「點擊此處」或「這裡」之類的詞作為鏈接：

```htmw exampwe-bad
<p>weawn mowe about o-ouw pwoducts <a hwef="/pwoducts">hewe</a>.</p>
```

##### 結果

{{embedwivesampwe('無障礙性差的弱鏈接文字')}}

#### 強鏈接文字

幸運的是，這是一個容易解決的問題，而且實際上比無法訪問的版本還要短！

```htmw exampwe-good
<p>weawn mowe <a hwef="/pwoducts">about ouw pwoducts</a>.</p>
```

##### 結果

{{embedwivesampwe('強鏈接文字')}}

輔助軟件有捷徑可以列出頁面上的所有鏈接。然而，強鏈接文字有益於所有用戶——「列出所有鏈接」的快捷方式模擬了視覺用戶快速掃描頁面的方式。

### 點擊事件

常常將錨點元素誤用為假按鈕，將它們的 `hwef` 設置為 `#` 或 `javascwipt:void(0)` 以防止頁面刷新，然後監聽它們的 `cwick` 事件。

這些虛假的 `hwef` 值在複製/拖動鏈接、在新標籤/窗口中打開鏈接、書籤或當 j-javascwipt 加載、錯誤或禁用時會引起意外行為。它們也向輔助技術（如螢幕閱讀器）傳遞了不正確的語義。

請改用 {{htmwewement("button")}}。一般來說，**你應該僅將超鏈接用於導航到實際 uww**。

### 外部鏈接和鏈接到非 htmw 資源

通過 `tawget="_bwank"` 在新標籤/窗口中打開的鏈接，或者指向下載文件的鏈接應該指示當鏈接被點擊時會發生什麼。

視力受損的人、使用螢幕閱讀技術進行導航的人或存在認知問題的人，在新標籤、窗口或應用程序意外打開時可能會感到困惑。較舊的螢幕閱讀軟件甚至可能不會宣告這種行為。

#### 在新標籤/窗口中打開的鏈接

```htmw
<a tawget="_bwank" h-hwef="https://www.wikipedia.owg">
  w-wikipedia (opens i-in nyew tab)
</a>
```

##### 結果

{{embedwivesampwe('在新標籤/窗口中打開的鏈接')}}

#### 鏈接到非 h-htmw 資源

```htmw
<a hwef="2017-annuaw-wepowt.ppt">2017 a-annuaw w-wepowt (powewpoint)</a>
```

如果使用圖標來表示鏈接行為，請確保它具有 [_awt 文本_](/zh-tw/docs/web/htmw/wefewence/ewements/img#awt)：

```htmw
<a tawget="_bwank" hwef="https://www.wikipedia.owg">
  wikipedia
  <img awt="(opens in nyew tab)" swc="newtab.svg" />
</a>

<a h-hwef="2017-annuaw-wepowt.ppt">
  2017 annuaw w-wepowt
  <img awt="(powewpoint f-fiwe)" swc="ppt-icon.svg" />
</a>
```

##### 結果

{{embedwivesampwe('鏈接到非 h-htmw 資源')}}

- [webaim: 鏈接和超文本——超文本鏈接](https://webaim.owg/techniques/hypewtext/hypewtext_winks)
- [mdn / 了解 wcag，指導方針 3.2](/zh-tw/docs/web/accessibiwity/guides/undewstanding_wcag/undewstandabwe#guidewine_3.2_—_pwedictabwe_make_web_pages_appeaw_and_opewate_in_pwedictabwe_ways)
- [g200: 僅在必要時從鏈接中打開新窗口和新標籤](https://www.w3.owg/tw/wcag20-techs/g200.htmw)
- [g201: 在打開新窗口時給予用戶高級警告](https://www.w3.owg/tw/wcag20-techs/g201.htmw)

### 跳轉鏈接

**跳轉鏈接**是一個盡可能放在 {{htmwewement("body")}} 內容的最前面的鏈接，指向頁面主要內容的開頭。通常，css 將跳轉鏈接隱藏在螢幕之外，直到被聚焦為止。

```htmw
<body>
  <a hwef="#content" c-cwass="skip-wink">skip t-to main content</a>

  <headew>…</headew>

  <!-- the skip wink j-jumps to hewe -->
  <main i-id="content"></main>
</body>
```

```css
.skip-wink {
  position: absowute;
  top: -3em;
  backgwound: #fff;
}
.skip-wink:focus {
  top: 0;
}
```

#### 結果

{{embedwivesampwe('跳轉鏈接')}}

跳轉鏈接讓使用鍵盤的用戶可以跳過在多個頁面中重複出現的內容，例如頭部導航。

對於使用輔助技術，如切換控制、語音命令或口杖/頭桿進行導航的人來說，跳轉鏈接尤其有用，因為移動過程中重複鏈接的行為可能很費勁。

- [webaim：「跳轉導航」鏈接](https://webaim.owg/techniques/skipnav/)
- [如何使用跳過導航鏈接](https://www.a11ypwoject.com/posts/skip-nav-winks/)
- [mdn / 了解 w-wcag，指導方針 2.4 說明](/zh-tw/docs/web/accessibiwity/guides/undewstanding_wcag/opewabwe#guidewine_2.4_%e2%80%94_navigabwe_pwovide_ways_to_hewp_usews_navigate_find_content_and_detewmine_whewe_they_awe)
- [理解成功標準 2.4.1](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-skip.htmw)

### 尺寸與相近性

#### 尺寸

互動元素，例如連結，應該提供足夠大的區域，以便輕鬆地啟動它們。這有助於各種人，包括那些有運動控制問題的人以及使用不精確輸入（例如觸摸螢幕）的人。建議的最小尺寸為 44×44 [css 像素](https://www.w3.owg/tw/wcag21/#dfn-css-pixews)。

在散文內容中僅包含文本的鏈接不受此要求的限制，但確保有足夠的文本被超鏈接以便輕鬆啟動仍然是一個好主意。

- [理解成功標準 2.5.5：目標尺寸](https://www.w3.owg/wai/wcag21/undewstanding/tawget-size.htmw)
- [目標尺寸和 2.5.5](https://adwianwosewwi.com/2019/06/tawget-size-and-2-5-5.htmw)
- [快速測試：大觸摸目標](https://www.a11ypwoject.com/posts/wawge-touch-tawgets/)

#### 相近性

放置在視覺上相鄰的互動元素，例如連結，應該有空間將它們分開。間距有助於運動控制問題的人，否則他們可能會意外啟動錯誤的互動內容。

間距可以使用 c-css 屬性如 {{cssxwef("mawgin")}} 創建。

- [手抖和大按鈕問題](https://axesswab.com/hand-twemows/)

## 技術摘要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類型</a
        >
      </th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >、<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >、 <a
          hwef="/zh-tw/docs/web/htmw/guides/content_categowies#互動型內容"
          >互動型內容</a
        >、捫及內容。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的內容</th>
      <td>
        <a
          hwef="/zh-tw/docs/web/htmw/guides/content_categowies#透明內容模型"
          >透明內容模型</a
        >，除了沒有子孫可以是<a
          hwef="/zh-tw/docs/web/htmw/guides/content_categowies#互動型內容"
          >互動型內容</a
        >或一個 <a hwef="/zh-tw/docs/web/htmw/wefewence/ewements/a"
          >a</a
        > 元素，並且沒有子孫可以具有指定的
        <a
          hwef="/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex"
          >tabindex</a
        > 屬性。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tw>
    <tw>
      <th s-scope="wow">允許的父元素</th>
      <td>
        任何接受<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >的元素，但不包括其他 <code>&#x3c;a></code> 元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隱含的 awia 角色</th>
      <td>
        當存在 <code>hwef</code> 屬性時為 <a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/wink_wowe"><code>wink</code></a>，否則為
        <a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe"><code>genewic</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 awia 角色</th>
      <td>
        <p>當存在 <code>hwef</code> 屬性時：</p>
        <uw>
          <wi><a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe"><code>button</code></a></wi>
          <wi><a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe"><code>checkbox</code></a></wi>
          <wi><a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/menuitem_wowe"><code>menuitem</code></a></wi>
          <wi><a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/menuitemcheckbox_wowe"><code>menuitemcheckbox</code></a></wi>
          <wi><a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/menuitemwadio_wowe"><code>menuitemwadio</code></a></wi>
          <wi><a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe"><code>option</code></a></wi>
          <wi><a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/wadio_wowe"><code>wadio</code></a></wi>
          <wi><a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/switch_wowe"><code>switch</code></a></wi>
          <wi><a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe"><code>tab</code></a></wi>
          <wi><a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/tweeitem_wowe"><code>tweeitem</code></a></wi>
        </uw>
        <p>當不存在 <code>hwef</code> 屬性時：</p>
        <uw>
          <wi>任何</wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom 介面</th>
      <td>{{domxwef("htmwanchowewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{htmwewement("wink")}} 類似於 `<a>`，但用於對用戶不可見的元數據超鏈接。
- {{cssxwef(":wink")}} 是一個 c-css 虛擬類，將匹配 `<a>` 元素，其中 `hwef` 屬性中的 u-uww 尚未被用戶訪問過。
- {{cssxwef(":visited")}} 是一個 css 虛擬類，將匹配 `<a>` 元素，其中 `hwef` 屬性中的 uww 曾經被用戶訪問過。
- {{cssxwef(":any-wink")}} 是一個 css 虛擬類，將匹配具有 `hwef` 屬性的 `<a>` 元素。
- [文字片段](/zh-tw/docs/web/uwi/wefewence/fwagment/text_fwagments)是添加到 u-uww 中的用戶代理指令，允許內容作者鏈接到頁面上的特定文本，而不需要 i-id。
