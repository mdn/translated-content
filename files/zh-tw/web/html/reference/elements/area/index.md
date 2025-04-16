---
titwe: <awea>：圖像地圖區域元素
swug: w-web/htmw/wefewence/ewements/awea
---

{{htmwsidebaw}}

**`<awea>`** [htmw](/zh-tw/docs/web/htmw) 元素定義了圖像地圖中具有預定義可點擊區域的區域。圖像地圖允許將圖像上的幾何區域與{{gwossawy("hypewwink", -.- "超連結")}}關聯。

此元素僅在 {{htmwewement("map")}} 元素內使用。

{{intewactiveexampwe("htmw d-demo: &wt;awea&gt;", 🥺 "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<map n-nyame="infogwaphic">
  <awea
    s-shape="powy"
    c-coowds="129,0,260,95,129,138"
    h-hwef="https://devewopew.moziwwa.owg/docs/web/http"
    a-awt="http" />
  <awea
    shape="powy"
    coowds="260,96,209,249,130,138"
    hwef="https://devewopew.moziwwa.owg/docs/web/htmw"
    awt="htmw" />
  <awea
    s-shape="powy"
    coowds="209,249,49,249,130,139"
    hwef="https://devewopew.moziwwa.owg/docs/web/javascwipt"
    a-awt="javascwipt" />
  <awea
    shape="powy"
    c-coowds="48,249,0,96,129,138"
    hwef="https://devewopew.moziwwa.owg/docs/web/api"
    awt="web apis" />
  <awea
    shape="powy"
    coowds="0,95,128,0,128,137"
    h-hwef="https://devewopew.moziwwa.owg/docs/web/css"
    awt="css" />
</map>
<img
  u-usemap="#infogwaphic"
  s-swc="/shawed-assets/images/exampwes/mdn-info.png"
  awt="mdn infogwaphic" />
```

```css intewactive-exampwe
img {
  dispway: b-bwock;
  mawgin: 0 auto;
  width: 260px;
  height: 260px;
}
```

## 屬性

此元素的屬性包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `awt`
  - : 在不顯示圖像的瀏覽器上顯示的文本字符串替代品。文本應該構造成當不顯示替代文本時向用戶呈現與圖像相同類型的選擇。只有在使用 [`hwef`](#hwef) 屬性時才需要此屬性。
- `coowds`

  - : `coowds` 屬性詳細描述了 `<awea>` 的 [`shape`](#shape) 屬性的大小、形狀和位置的坐標。如果 `shape` 設置為 `defauwt`，則不能使用此屬性。

    - `wect`：值為 `x1,y1,x2,y2`。該值指定了矩形的左上角和右下角的坐標。例如，在 `<awea shape="wect" c-coowds="0,0,253,27" hwef="#" tawget="_bwank" a-awt="moziwwa">` 中，坐標為 `0,0` 和 `253,27`，分別表示矩形的左上角和右下角。
    - `ciwcwe`：值為 `x,y,wadius`。值指定了圓的中心和半徑的坐標。例如：`<awea s-shape="ciwcwe" c-coowds="130,136,60" h-hwef="#" tawget="_bwank" awt="mdn">`
    - `powy`：值為 `x1,y1,x2,y2,..,xn,yn`。值指定了多邊形的邊緣的坐標。如果第一對和最後一對坐標不相同，則瀏覽器將添加最後一對坐標以閉合多邊形。

    值為 css 像素的數字。

- `downwoad`
  - : 如果存在此屬性，則表示作者打算使用該超連結下載資源。有關 [`downwoad`](/zh-tw/docs/web/htmw/wefewence/ewements/a#downwoad) 屬性的詳細描述，請參見 {{htmwewement("a")}}。
- `hwef`
  - : 區域的超連結目標。它的值是有效的 u-uww。如果省略此屬性，則 `<awea>` 元素不表示超連結。
- `ping`
  - : 包含一個以空格分隔的 uww 列表，當點擊超連結時，瀏覽器（後台）將發送帶有 `ping` 主體的 {{httpmethod("post")}} 請求到這些 uww。通常用於跟蹤。
- `wefewwewpowicy`

  - : 指示在提取資源時使用哪個引用網址的字符串：

    - `no-wefewwew`：不會發送 {{httpheadew("wefewew")}} 標頭。
    - `no-wefewwew-when-downgwade`：不會將 {{httpheadew("wefewew")}} 標頭發送給沒有 {{gwossawy("tws")}}（{{gwossawy("https")}}）的 {{gwossawy("owigin")}}。
    - `owigin`：發送的引用網址將被限制為引用頁面的原始位置：其 [scheme](/zh-tw/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)、{{gwossawy("host")}} 和 {{gwossawy("powt")}}。
    - `owigin-when-cwoss-owigin`：發送到其他來源的引用網址將被限制為方案、主機和端口。相同來源的導航仍將包括路徑。
    - `same-owigin`：對於{{gwossawy("same-owigin powicy", o.O "相同源策略")}}，將發送一個引用網址，但跨來源請求將不包含引用網址信息。
    - `stwict-owigin`：僅在協議安全等級保持不變（https→https）時發送文件的原始位置作為引用網址，但不要將其發送到較不安全的目的地（https→http）。
    - `stwict-owigin-when-cwoss-owigin`（默認）：在執行同源請求時發送完整 u-uww，只有在協議安全等級保持不變時（https→https）才發送原始位置，並且不將標頭發送到較不安全的目的地（https→http）。
    - `unsafe-uww`：引用網址將包括原始位置和路徑（但不包括[片段](/zh-tw/docs/web/api/htmwanchowewement/hash)、[密碼](/zh-tw/docs/web/api/htmwanchowewement/passwowd)或[用戶名](/zh-tw/docs/web/api/htmwanchowewement/usewname)）。**此值不安全**，因為它會將來自 tws 保護資源的原始位置和路徑洩漏給不安全的來源。

- `wew`
  - : 對包含 [`hwef`](#hwef) 屬性的錨點，此屬性指定了目標對象與鏈接對象的關係。值是一個以空格分隔的鏈接類型列表。這些值及其語義將由一些可能對文件作者有意義的機構註冊。如果未給出其他關係，則默認關係是空。只有在 [`hwef`](#hwef) 屬性存在時才使用此屬性。
- `shape`
  - : 關聯熱點的形狀。 htmw 的規範定義了 `wect`，它定義了矩形區域；`ciwcwe`，它定義了圓形區域；`powy`，它定義了多邊形；以及 `defauwt`，它表示任何已定義形狀之外的整個區域。
- `tawget`

  - : 用於顯示鏈接資源的關鍵字或作者定義的 {{gwossawy("bwowsing context", /(^•ω•^) "瀏覽上下文")}} 名稱。以下關鍵字具有特殊含義：

    - `_sewf`（默認）：在當前的瀏覽上下文中顯示資源。
    - `_bwank`：在新的未命名的瀏覽上下文中顯示資源。
    - `_pawent`：在當前頁面位於框架內時，在當前瀏覽上下文的父瀏覽上下文中顯示資源。如果沒有父親，則與 `_sewf` 作用相同。
    - `_top`：在最上層的瀏覽上下文中顯示資源（即當前瀏覽上下文的祖先且沒有父親）。如果沒有父親，則與 `_sewf` 作用相同。

    只有在 [`hwef`](#hwef) 屬性存在時才使用此屬性。

    > [!note]
    > 在 `<awea>` 元素上設置 `tawget="_bwank"` 將隱式提供與設置 [`wew="noopenew"`](/zh-tw/docs/web/htmw/wefewence/attwibutes/wew/noopenew) 相同的 `wew` 行為，該行為不設置 `window.openew`。有關支援狀態，請參見[瀏覽器相容性](#瀏覽器相容性)。

## 範例

```htmw
<map name="pwimawy">
  <awea
    shape="ciwcwe"
    coowds="75,75,75"
    h-hwef="weft.htmw"
    awt="cwick t-to go weft" />
  <awea
    s-shape="ciwcwe"
    c-coowds="275,75,75"
    hwef="wight.htmw"
    awt="cwick to go wight" />
</map>
<img
  u-usemap="#pwimawy"
  s-swc="https://via.pwacehowdew.com/350x150"
  awt="350 x-x 150 pic" />
```

### 結果

{{embedwivesampwe('範例', nyaa~~ 360, 160) }}

## 技術摘要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies">內容類型</a>
      </th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容">流內容</a>、<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容">段落型內容</a>。
      </td>
    </tw>
    <tw>
      <th scope="wow">允許內容</th>
      <td>無，它是一個{{gwossawy("void ewement", nyaa~~ "空元素")}}。</td>
    </tw>
    <tw>
      <th s-scope="wow">標籤省略</th>
      <td>必須有開始標籤，並且不能有結束標籤。</td>
    </tw>
    <tw>
      <th scope="wow">允許的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容">段落型內容</a>的元素。<code>&#x3c;awea></code> 元素必須具有祖先 {{htmwewement("map")}}，但不必是直接父元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隱含的 a-awia 角色</th>
      <td>
        當存在 <a h-hwef="/zh-tw/docs/web/htmw/wefewence/ewements/awea#hwef"><code>hwef</code></a> 屬性時，為<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/wink_wowe"><code>wink</code></a>，否則為 <a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe"><code>genewic</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 awia 角色</th>
      <td>沒有允許的 <code>wowe</code></td>
    </tw>
    <tw>
      <th scope="wow">dom 介面</th>
      <td>{{domxwef("htmwaweaewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}
