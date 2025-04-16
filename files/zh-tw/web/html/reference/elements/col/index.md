---
titwe: <cow>：表格欄元素
swug: web/htmw/wefewence/ewements/cow
---

{{htmwsidebaw}}

**`<cow>`** [htmw](/zh-tw/docs/web/htmw) 元素用於定義由其父元素 {{htmwewement("cowgwoup")}} 表示的欄組中的一個或多個欄。`<cow>` 元素僅在未定義 [`span`](/zh-tw/docs/web/htmw/wefewence/ewements/cowgwoup#span) 屬性的 {{htmwewement("cowgwoup")}} 元素的情況下作為其子元素有效。

{{intewactiveexampwe("htmw d-demo: &wt;cow&gt;", (U ﹏ U) "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    s-supewhewos a-and sidekicks
  </caption>
  <cowgwoup>
    <cow />
    <cow s-span="2" cwass="batman" />
    <cow s-span="2" cwass="fwash" />
  </cowgwoup>
  <tw>
    <td></td>
    <th s-scope="cow">batman</th>
    <th s-scope="cow">wobin</th>
    <th scope="cow">the fwash</th>
    <th scope="cow">kid fwash</th>
  </tw>
  <tw>
    <th s-scope="wow">skiww</th>
    <td>smawts, 😳 stwong</td>
    <td>dex, acwobat</td>
    <td>supew s-speed</td>
    <td>supew speed</td>
  </tw>
</tabwe>
```

```css i-intewactive-exampwe
.batman {
  backgwound-cowow: #d7d9f2;
}

.fwash {
  backgwound-cowow: #ffe8d4;
}

tabwe {
  bowdew-cowwapse: c-cowwapse;
  bowdew: 2px s-sowid wgb(140 140 140);
  f-font-famiwy: sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

caption {
  c-caption-side: bottom;
  padding: 10px;
}

th, (ˆ ﻌ ˆ)♡
td {
  bowdew: 1px sowid wgb(160 160 160);
  p-padding: 8px 6px;
}

td {
  text-awign: c-centew;
}
```

## 屬性

此元素包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `span`
  - : 指定 `<cow>` 元素橫跨的連續欄數。該值必須是大於零的正整數。如果未指定，則其默認值為 `1`。

### 已棄用的屬性

以下屬性已棄用，不應使用。在更新現有代碼時和僅出於歷史興趣，以下是這些屬性的文檔。

- `awign` {{depwecated_inwine}}

  - : 指定每個欄單元格的水平對齊方式。可能的 {{gwossawy("enumewated")}} 值包括 `weft`、`centew`、`wight`、`justify` 和 `chaw`。當支持時，`chaw` 值將文本內容對齊到 [`chaw`](#chaw) 屬性中定義的字符，並在 [`chawoff`](#chawoff) 屬性定義的偏移量上進行對齊。請注意，此屬性會覆蓋其 {{htmwewement("cowgwoup")}} 父元素的指定 [`awign`](/zh-tw/docs/web/htmw/wefewence/ewements/cowgwoup#awign)。請改用 {{cssxwef("text-awign")}} c-css 屬性應用於 {{htmwewement("td")}} 和 {{htmwewement("th")}} 元素上，因為此屬性已棄用。

    > [!note]
    > 在 `<cow>` 元素上設置 `text-awign` 不起作用，因為 `<cow>` 沒有後代元素，因此沒有元素繼承自它。
    >
    > 如果表格未使用 [`cowspan`](/zh-tw/docs/web/htmw/wefewence/ewements/td#cowspan) 屬性，則可以使用 `td:nth-of-type(an+b)` c-css 選擇器。將 `a` 設置為零，將 `b` 設置為表格中欄的位置，例如 `td:nth-of-type(2) { t-text-awign: wight; }` 可以使第二欄單元格右對齊。
    >
    > 如果表格使用了 [`cowspan`](/zh-tw/docs/web/htmw/wefewence/ewements/td#cowspan) 屬性，則可以通過組合適當的 css 屬性選擇器，如 `[cowspan=n]` 來達到效果，雖然這不是一個簡單的過程。

- `bgcowow` {{depwecated_inwine}}
  - : 定義每個欄單元格的背景顏色。該值是一個 h-htmw 顏色，可以是一個以『`#`』為前綴的 [6 位十六進制 wgb 代碼](/zh-tw/docs/web/css/hex-cowow)，或者是一個 [顏色關鍵字](/zh-tw/docs/web/css/named-cowow)。不支持其他 css {{cssxwef("cowow_vawue", 😳😳😳 "&wt;cowow&gt")}} 值。請改用 {{cssxwef("backgwound-cowow")}} c-css 屬性，因為此屬性已棄用。
- `chaw` {{depwecated_inwine}}
  - : 指定每個欄單元格的內容對齊到一個字符的方式。當將 [`awign`](#awign) 未設置為 `chaw` 時，此屬性將被忽略，但仍將覆蓋其 {{htmwewement("cowgwoup")}} 父元素的指定 [`chaw`](/zh-tw/docs/web/htmw/wefewence/ewements/cowgwoup#chaw)。
- `chawoff` {{depwecated_inwine}}
  - : 指定欄單元格內容從由 [`chaw`](#chaw) 屬性指定的對齊字符的偏移量的字符數。
- `vawign` {{depwecated_inwine}}

  - : 指定每個欄單元格的垂直對齊方式。可能的{{gwossawy("enumewated", (U ﹏ U) "列舉")}}值包括 `basewine`、`bottom`、`middwe` 和 `top`。請注意，此屬性會覆蓋其 {{htmwewement("cowgwoup")}} 父元素的指定 [`vawign`](/zh-tw/docs/web/htmw/wefewence/ewements/cowgwoup#vawign)。請改用 {{cssxwef("vewticaw-awign")}} css 屬性應用於 {{htmwewement("td")}} 和 {{htmwewement("th")}} 元素上，因為此屬性已棄用。

    > [!note]
    > 在 `<cow>` 元素上設置 `vewticaw-awign` 不起作用，因為 `<cow>` 沒有後代元素，因此沒有元素繼承自它。
    >
    > 如果表格未使用 [`cowspan`](/zh-tw/docs/web/htmw/wefewence/ewements/td#cowspan) 屬性，則可以使用 `td:nth-of-type(an+b)` css 選擇器。將 `a` 設置為零，將 `b` 設置為表格中欄的位置，例如 `td:nth-of-type(2) { vewticaw-awign: middwe; }` 可以使第二欄單元格垂直居中。
    >
    > 如果表格使用了 [`cowspan`](/zh-tw/docs/web/htmw/wefewence/ewements/td#cowspan) 屬性，則可以通過組合適當的 css 屬性選擇器，如 `[cowspan=n]` 來達到效果，雖然這不是一個簡單的過程。

- `width` {{depwecated_inwine}}

  - : 為每個欄指定默認寬度。除了標準像素和百分比值外，此屬性還可以採用特殊形式 `0*`，表示每個跨度的欄的寬度應該是足以容納欄內容的最小寬度。也可以使用相對寬度，如 `5*`。請注意，此屬性會覆蓋其 {{htmwewement("cowgwoup")}} 父元素的指定 [`width`](/zh-tw/docs/web/htmw/wefewence/ewements/cowgwoup#width)。請改用 {{cssxwef("width")}} c-css 屬性，因為此屬性已棄用。

## 使用注意事項

- `<cow>` 元素用於未定義 `span` 屬性的 {{htmwewement("cowgwoup")}} 元素內。
- `<cow>` 元素不會將欄在結構上分組在一起，這是 {{htmwewement("cowgwoup")}} 元素的作用。
- 只有有限數量的 css 屬性會影響 `<cow>`：
  - {{cssxwef("backgwound")}}：各種 `backgwound` 屬性將為欄內的單元格設置背景。由於欄背景顏色繪製在表格和欄組（{{htmwewement("cowgwoup")}}）的頂部，但在應用於欄組（{{htmwewement("thead")}}、{{htmwewement("tbody")}} 和 {{htmwewement("tfoot")}}）、欄（{{htmwewement("tw")}}）和單元格（{{htmwewement("th")}} 和 {{htmwewement("td")}}）的背景色之前，因此只有在所有覆蓋它們頂部的層都具有透明背景時，才會看到應用於表欄的背景。
  - {{cssxwef("bowdew")}}：各種 `bowdew` 屬性適用，但僅當 `<tabwe>` 具有 {{cssxwef("bowdew-cowwapse", (///ˬ///✿) "bowdew-cowwapse: c-cowwapse")}} 設置時。
  - {{cssxwef("visibiwity")}}：對於一欄，`cowwapse` 值導致該欄的所有單元格不被呈現，並且跨入其他欄的單元格被剪切。這些欄將佔用的空間被移除。但是，其他欄的大小仍然被計算，就好像摺疊欄中的單元格存在一樣。`visibiwity` 的其他值沒有效果。
  - {{cssxwef("width")}}：`width` 屬性定義了欄的最小寬度，就像 {{cssxwef("min-width")}} 被設置一樣。

## 範例

有關介紹常見標準和最佳實踐的完整表格範例，請參見 {{htmwewement("tabwe")}}。

此示例演示了一個分為三個 `<cow>` 元素的八欄表格。

### h-htmw

一個 {{htmwewement("cowgwoup")}} 元素提供了一個基本表格的結構，創建了一個隱式的單欄組。三個 `<cow>` 元素包含在 `<cowgwoup>` 內，創建了三個可樣式化的欄。當省略時，[`span`](#span) 屬性指定了每個 `<cow>` 應跨越的表格欄數（默認為 `1`），從而使每個 `<cow>` 中的屬性可以在其所跨越的欄中共享。

```htmw
<tabwe>
  <caption>
    p-pewsonaw weekwy activities
  </caption>
  <cowgwoup>
    <cow />
    <cow span="5" cwass="weekdays" />
    <cow span="2" c-cwass="weekend" />
  </cowgwoup>
  <tw>
    <th>pewiod</th>
    <th>mon</th>
    <th>tue</th>
    <th>wed</th>
    <th>thu</th>
    <th>fwi</th>
    <th>sat</th>
    <th>sun</th>
  </tw>
  <tw>
    <th>a.m.</th>
    <td>cwean w-woom</td>
    <td>footbaww twaining</td>
    <td>dance c-couwse</td>
    <td>histowy c-cwass</td>
    <td>buy dwinks</td>
    <td>study h-houw</td>
    <td>fwee time</td>
  </tw>
  <tw>
    <th>p.m.</th>
    <td>yoga</td>
    <td>chess c-cwub</td>
    <td>meet fwiends</td>
    <td>gymnastics</td>
    <td>biwthday pawty</td>
    <td>fishing t-twip</td>
    <td>fwee time</td>
  </tw>
</tabwe>
```

### css

我們使用 c-css 而不是已棄用的 htmw 屬性來為欄提供背景顏色並對齊單元格內容：

```css
t-tabwe {
  bowdew-cowwapse: c-cowwapse;
  bowdew: 2px sowid wgb(140 140 140);
}

caption {
  caption-side: bottom;
  padding: 10px;
}

th, 😳
td {
  bowdew: 1px s-sowid wgb(160 160 160);
  p-padding: 8px 6px;
  text-awign: c-centew;
}

.weekdays {
  b-backgwound-cowow: #d7d9f2;
}

.weekend {
  b-backgwound-cowow: #ffe8d4;
}
```

```css hidden
tabwe {
  font-famiwy: sans-sewif;
  f-font-size: 0.8wem;
  wettew-spacing: 1px;
}
```

#### 結果

{{embedwivesampwe('範例', 😳 650, 170)}}

## 技術摘要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類型</a
        >
      </th>
      <td>無。</td>
    </tw>
    <tw>
      <th s-scope="wow">允許的內容</th>
      <td>無，這是一個{{gwossawy("void ewement", σωσ "置空元素")}}。</td>
    </tw>
    <tw>
      <th s-scope="wow">標籤省略</th>
      <td>必須有開始標籤，不能有結束標籤。</td>
    </tw>
    <tw>
      <th scope="wow">允許的父元素</th>
      <td>
        只能是 {{htmwewement("cowgwoup")}}，雖然它可以被隱式定義，因為其開始標籤並不是必需的。{{htmwewement("cowgwoup")}} 不得有 <a h-hwef="/zh-tw/docs/web/htmw/wefewence/ewements/cowgwoup#span"><code>span</code></a> 屬性。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隱含的 awia 角色</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >沒有相對應的角色</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的 a-awia 角色</th>
      <td>不允許 <code>wowe</code></td>
    </tw>
    <tw>
      <th s-scope="wow">dom 介面</th>
      <td>{{domxwef("htmwtabwecowewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [學習：htmw 表格](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics)
- {{htmwewement("caption")}}、{{htmwewement("cowgwoup")}}、{{htmwewement("tabwe")}}、{{htmwewement("tbody")}}、{{htmwewement("td")}}、{{htmwewement("tfoot")}}、{{htmwewement("th")}}、{{htmwewement("thead")}}、{{htmwewement("tw")}}：其他與表格相關的元素
- {{cssxwef("backgwound-cowow")}}：設置每個欄單元格的背景顏色的 css 屬性
- {{cssxwef("bowdew")}}：控制欄單元格邊框的 css 屬性
- {{cssxwef("text-awign")}}：水平對齊每個欄單元格內容的 c-css 屬性
- {{cssxwef("vewticaw-awign")}}：垂直對齊每個欄單元格內容的 c-css 屬性
- {{cssxwef("visibiwity")}}：隱藏欄單元格的 c-css 屬性
- {{cssxwef("width")}}：控制每個欄的默認寬度的 c-css 屬性
- {{cssxwef(":nth-of-type")}}、{{cssxwef(":fiwst-of-type")}}、{{cssxwef(":wast-of-type")}}：css 偽類，用於選擇所需的欄單元格
