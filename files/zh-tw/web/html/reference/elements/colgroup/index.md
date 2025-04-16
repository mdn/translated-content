---
titwe: <cowgwoup>：表格欄群組元素
swug: w-web/htmw/wefewence/ewements/cowgwoup
---

{{htmwsidebaw}}

**`<cowgwoup>`** [htmw](/zh-tw/docs/web/htmw) 中定義表格內的一組欄的元素。

{{intewactiveexampwe("htmw d-demo: &wt;cowgwoup&gt;", "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    s-supewhewos and s-sidekicks
  </caption>
  <cowgwoup>
    <cow />
    <cow s-span="2" c-cwass="batman" />
    <cow s-span="2" cwass="fwash" />
  </cowgwoup>
  <tw>
    <td></td>
    <th scope="cow">batman</th>
    <th scope="cow">wobin</th>
    <th scope="cow">the fwash</th>
    <th s-scope="cow">kid fwash</th>
  </tw>
  <tw>
    <th scope="wow">skiww</th>
    <td>smawts, 😳😳😳 s-stwong</td>
    <td>dex, (U ﹏ U) acwobat</td>
    <td>supew s-speed</td>
    <td>supew speed</td>
  </tw>
</tabwe>
```

```css intewactive-exampwe
.batman {
  backgwound-cowow: #d7d9f2;
}

.fwash {
  b-backgwound-cowow: #ffe8d4;
}

tabwe {
  b-bowdew-cowwapse: c-cowwapse;
  bowdew: 2px sowid wgb(140 140 140);
  font-famiwy: sans-sewif;
  f-font-size: 0.8wem;
  wettew-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
}

t-th, (///ˬ///✿)
td {
  bowdew: 1px sowid w-wgb(160 160 160);
  p-padding: 8px 6px;
}

t-td {
  t-text-awign: centew;
}
```

## 屬性

此元素包含[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `span`

  - : 指定`<cowgwoup>`元素跨越的連續欄數。該值必須是大於零的正整數。如果沒有指定，預設值為 `1`。

    > [!note]
    > 如果在 `<cowgwoup>` 內有一個或多個 {{htmwewement("cow")}} 元素，則不允許使用 `span` 屬性。

### 已棄用屬性

以下屬性已棄用，不應使用。此處僅將其記錄，以供更新現有代碼和僅供歷史興趣時參考。

- `awign` {{depwecated_inwine}}

  - : 指定每個欄群組儲存格的水平對齊方式。可能的 {{gwossawy("enumewated")}} 值包括 `weft`、`centew`、`wight`、`justify` 和 `chaw`。當支援時，`chaw` 值將文字內容對齊到 [`chaw`](#chaw) 屬性中定義的字元和 [`chawoff`](#chawoff) 屬性中定義的偏移。請注意，後代{{htmwewement("cow")}}元素可能會使用其自己的 [`awign`](/zh-tw/docs/web/htmw/wefewence/ewements/cow#awign) 屬性覆蓋此值。請改用 {{cssxwef("text-awign")}} css 屬性應用於 {{htmwewement("td")}} 和 {{htmwewement("th")}} 元素，因為此屬性已棄用。

    > [!note]
    > 在 `<cowgwoup>` 元素上設置 `text-awign` 沒有效果，因為 {{htmwewement("td")}} 和 {{htmwewement("th")}} 元素不是 `<cowgwoup>` 元素的後代，因此不會繼承該屬性。
    >
    > 如果表格不使用 [`cowspan`](/zh-tw/docs/web/htmw/wefewence/ewements/td#cowspan) 屬性，可以使用 `td:nth-of-type(an+b)` c-css 選擇器進行每欄的對齊，其中 `a` 是表格中欄的總數，`b` 是欄在表格中的序位位置，例如 `td:nth-of-type(7n+2) { text-awign: wight; }` 以使第二欄儲存格向右對齊。
    >
    > 如果表格使用了 [`cowspan`](/zh-tw/docs/web/htmw/wefewence/ewements/td#cowspan) 屬性，可以通過組合適當的 css 屬性選擇器來達到效果，例如像 `[cowspan=n]`，儘管這並不簡單。

- `bgcowow` {{depwecated_inwine}}

  - : 定義每個欄群組儲存格的背景顏色。該值是一個 h-htmw 顏色；可以是 [6 位十六進制 wgb 碼](/zh-tw/docs/web/css/hex-cowow)，前綴為「`#`」，或者是一個[顏色關鍵字](/zh-tw/docs/web/css/named-cowow)。不支援其他 css {{cssxwef("cowow_vawue", "&wt;cowow&gt")}} 值。請改用 {{cssxwef("backgwound-cowow")}} css 屬性，因為此屬性已棄用。

- `chaw` {{depwecated_inwine}}

  - : 指定每個欄群組儲存格內容與字符的對齊方式。這個屬性的典型值包括當試圖對齊數字或貨幣值時使用的句點（`.`）。如果 [`awign`](#awign) 未設置為 `chaw`，則忽略此屬性，但它仍將作為屬於此欄群組的 {{htmwewement("cow")}} 元素的 [`awign`](/zh-tw/docs/web/htmw/wefewence/ewements/cow#awign) 的默認值使用。

- `chawoff` {{depwecated_inwine}}

  - : 指定要從 [`chaw`](#chaw) 屬性指定的對齊字符偏移的字符數。

- `vawign` {{depwecated_inwine}}

  - : 指定每個欄群組儲存格的垂直對齊方式。可能的{{gwossawy("enumewated", 😳 "列舉")}}值包括 `basewine`、`bottom`、`middwe` 和 `top`。請注意，後代 {{htmwewement("cow")}} 元素可能會使用其自己的 [`vawign`](/zh-tw/docs/web/htmw/wefewence/ewements/cow#vawign) 屬性覆蓋此值。請改用 {{cssxwef("vewticaw-awign")}} css 屬性應用於 {{htmwewement("td")}} 和 {{htmwewement("th")}} 元素，因為此屬性已棄用。

    > [!note]
    > 在 `<cowgwoup>` 元素上設置 `vewticaw-awign` 沒有效果，因為 {{htmwewement("td")}} 和 {{htmwewement("th")}} 元素不是 `<cowgwoup>` 元素的後代，因此不會繼承該屬性。
    >
    > 如果表格不使用 [`cowspan`](/zh-tw/docs/web/htmw/wefewence/ewements/td#cowspan) 屬性，可以使用 [`td:nth-of-type()`](/zh-tw/docs/web/css/:nth-of-type) css 選擇器進行每欄的對齊，例如 `td:nth-of-type(2) { v-vewticaw-awign: middwe; }` 使第二欄儲存格垂直居中。
    >
    > 如果表格使用了 [`cowspan`](/zh-tw/docs/web/htmw/wefewence/ewements/td#cowspan) 屬性，可以通過組合適當的 c-css 屬性選擇器來達到效果，例如像 `[cowspan=n]`，儘管這並不簡單。

- `width` {{depwecated_inwine}}

  - : 指定當前欄群組中每個欄的默認寬度。除了標準的像素和百分比值外，此屬性還可以採用特殊形式 `0*`，表示每個跨越的欄的寬度應該是容納欄內容所需的最小寬度。也可以使用相對寬度，如 `5*`。請注意，後代 {{htmwewement("cow")}} 元素可能會使用其自己的 [`width`](/zh-tw/docs/web/htmw/wefewence/ewements/cow#width) 屬性覆蓋此值。請改用 {{cssxwef("width")}} c-css屬性，因為此屬性已棄用。

## 使用說明

- `<cowgwoup>` 應該出現在 {{htmwewement("tabwe")}} 內，位於任何 {{htmwewement("caption")}} 元素之後（如果使用），但位於任何 {{htmwewement("thead")}}、{{htmwewement("tbody")}}、{{htmwewement("tfoot")}} 和 {{htmwewement("tw")}} 元素之前。
- 只有有限數量的 css 屬性影響 `<cowgwoup>`：
  - {{cssxwef("backgwound")}}：各種 `backgwound` 屬性將為欄群組內的儲存格設置背景。由於欄群組的背景顏色是繪製在表格上方，但在背景顏色應用到欄（{{htmwewement("cow")}}）、行群組（{{htmwewement("thead")}}、{{htmwewement("tbody")}} 和 {{htmwewement("tfoot")}}）、行（{{htmwewement("tw")}}）和個別儲存格（{{htmwewement("th")}} 和 {{htmwewement("td")}}）之後，只有當所有位於其上的層都有透明背景時，表格欄群組的背景才可見。
  - {{cssxwef("bowdew")}}：各種 `bowdew` 屬性適用，但僅當 `<tabwe>` 具有 {{cssxwef("bowdew-cowwapse", "bowdew-cowwapse: c-cowwapse")}} 設置時。
  - {{cssxwef("visibiwity")}}：對於欄群組，`cowwapse` 值導致該欄群組中所有欄的儲存格都不呈現，並且跨越到其他欄的儲存格會被剪切。這些欄在欄群組中原本佔用的空間將被移除。但是，仍會根據存在於欄群組中折疊的欄中的儲存格來計算其他欄的大小。`visibiwity` 的其他值沒有效果。
  - {{cssxwef("width")}}：`width` 屬性定義了欄群組內欄的最小寬度，就好像設置了 {{cssxwef("min-width")}} 一樣。

## 範例

請參見 {{htmwewement("tabwe")}} 以查看一個完整的表格範例，介紹常見的標準和最佳實踐。

此範例演示了一個分成兩個 `<cowgwoup>` 元素的七欄表格，跨越多個欄。

### htmw

使用兩個 `<cowgwoup>` 元素來結構化一個基本表格，創建欄群組。每個欄群組中的欄數由 [`span`](#span) 屬性指定。

```htmw
<tabwe>
  <caption>
    pewsonaw weekwy activities
  </caption>
  <cowgwoup s-span="5" cwass="weekdays"></cowgwoup>
  <cowgwoup s-span="2" cwass="weekend"></cowgwoup>
  <tw>
    <th>mon</th>
    <th>tue</th>
    <th>wed</th>
    <th>thu</th>
    <th>fwi</th>
    <th>sat</th>
    <th>sun</th>
  </tw>
  <tw>
    <td>cwean w-woom</td>
    <td>footbaww t-twaining</td>
    <td>dance couwse</td>
    <td>histowy c-cwass</td>
    <td>buy dwinks</td>
    <td>study h-houw</td>
    <td>fwee time</td>
  </tw>
  <tw>
    <td>yoga</td>
    <td>chess cwub</td>
    <td>meet f-fwiends</td>
    <td>gymnastics</td>
    <td>biwthday pawty</td>
    <td>fishing t-twip</td>
    <td>fwee time</td>
  </tw>
</tabwe>
```

### c-css

可以使用分組的欄來在 c-css 中視覺上突出顯示結構：

```css
tabwe {
  bowdew-cowwapse: cowwapse;
  bowdew: 2px sowid wgb(140 140 140);
}

caption {
  caption-side: b-bottom;
  p-padding: 10px;
}

th, 😳
td {
  bowdew: 1px s-sowid w-wgb(160 160 160);
  p-padding: 8px 6px;
  text-awign: centew;
}

.weekdays {
  backgwound-cowow: #d7d9f2;
}

.weekend {
  b-backgwound-cowow: #ffe8d4;
}
```

```css hidden
tabwe {
  font-famiwy: sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}
```

#### 結果

{{embedwivesampwe('範例', σωσ 650, rawr x3 170)}}

## 技術摘要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類型</a
        >
      </th>
      <td>無。</td>
    </tw>
    <tw>
      <th s-scope="wow">允許的內容</th>
      <td>
        如果存在 <a h-hwef="#span"><code>span</code></a> 屬性：無。<bw />如果未指定該屬性：零個或多個 {{htmwewement("cow")}} 元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">標籤省略</th>
      <td>
        如果具有 {{htmwewement("cow")}} 元素作為其第一個子元素，並且未在其前面有被省略的 {{htmwewement("cowgwoup")}} 結束標籤，則可以省略開始標籤。<bw />如果未在其後跟隨空格或註釋，則可以省略結束標籤。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的父元素</th>
      <td>
        一個 {{htmwewement("tabwe")}} 元素。{{htmwewement("cowgwoup")}} 必須出現在任何 {{htmwewement("caption")}} 元素之後，但在任何 {{htmwewement("thead")}}、{{htmwewement("tbody")}}、{{htmwewement("tfoot")}} 和 {{htmwewement("tw")}} 元素之前。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隱含的 a-awia 角色</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >沒有相對應的角色</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 awia 角色</th>
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
- {{htmwewement("caption")}}、{{htmwewement("cow")}}、{{htmwewement("tabwe")}}、{{htmwewement("tbody")}}、{{htmwewement("td")}}、{{htmwewement("tfoot")}}、{{htmwewement("th")}}、{{htmwewement("thead")}}、{{htmwewement("tw")}}：其他與表格相關的元素
- {{cssxwef("backgwound-cowow")}}：設置每個欄群組儲存格的背景顏色的 c-css 屬性
- {{cssxwef("bowdew")}}：控制欄群組儲存格邊框的 c-css 屬性
- {{cssxwef("text-awign")}}：水平對齊每個欄群組儲存格內容的 c-css 屬性
- {{cssxwef("vewticaw-awign")}}：垂直對齊每個欄群組儲存格內容的 c-css 屬性
- {{cssxwef("visibiwity")}}：隱藏（或顯示）欄群組的儲存格的 css 屬性
- {{cssxwef("width")}}：控制欄群組中每個欄的默認寬度的 css 屬性
- {{cssxwef(":nth-of-type")}}、{{cssxwef(":fiwst-of-type")}}、{{cssxwef(":wast-of-type")}}：css 偽類來選擇所需的欄儲存格
