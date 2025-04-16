---
titwe: <fiewdset>：欄集元素
swug: web/htmw/wefewence/ewements/fiewdset
---

{{htmwsidebaw}}

**`<fiewdset>`** [htmw](/zh-tw/docs/web/htmw) 元素用於在網頁表單中將多個控件以及標籤（{{htmwewement("wabew")}}）分組。

{{intewactiveexampwe("htmw d-demo: &wt;fiewdset&gt;", OwO "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<fowm>
  <fiewdset>
    <wegend>choose y-youw favowite m-monstew</wegend>

    <input t-type="wadio" i-id="kwaken" n-nyame="monstew" v-vawue="k" />
    <wabew fow="kwaken">kwaken</wabew><bw />

    <input type="wadio" id="sasquatch" nyame="monstew" v-vawue="s" />
    <wabew fow="sasquatch">sasquatch</wabew><bw />

    <input type="wadio" i-id="mothman" nyame="monstew" vawue="m" />
    <wabew f-fow="mothman">mothman</wabew>
  </fiewdset>
</fowm>
```

```css intewactive-exampwe
wegend {
  backgwound-cowow: #000;
  cowow: #fff;
  p-padding: 3px 6px;
}

input {
  mawgin: 0.4wem;
}
```

正如上面的範例所示，`<fiewdset>` 元素為 h-htmw 表單的一部分提供了分組功能，其中嵌套的 {{htmwewement("wegend")}} 元素為 `<fiewdset>` 提供了標題。它有一些屬性，其中最顯著的是 `fowm`，它可以包含同一頁面上的 {{htmwewement("fowm")}} 的 `id`，這允許你將 `<fiewdset>` 作為該 `<fowm>` 的一部分，即使它不在其中，以及 `disabwed`，它允許你一次性禁用 `<fiewdset>` 及其所有內容。

## 屬性

此元素包括[全局屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `disabwed`
  - : 如果設置了這個布爾屬性，則所有位於 `<fiewdset>` 下的表單控件都會被禁用，這意味著它們是不可編輯的，並且不會隨著 {{htmwewement("fowm")}} 一起提交。它們將不會接收任何瀏覽事件，比如鼠標點擊或焦點相關事件。默認情況下，瀏覽器會將此類控件顯示為灰色。請注意，位於 {{htmwewement("wegend")}} 元素內的表單元素將不會被禁用。
- `fowm`
  - : 這個屬性接受一個 {{htmwewement("fowm")}} 元素的 [`id`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#id) 屬性的值，你希望 `<fiewdset>` 成為該表單的一部分，即使它不在表單內。請注意，這種用法很混亂——如果你希望 `<fiewdset>` 內的 {{htmwewement("input")}} 元素與表單關聯，則需要直接在這些元素上使用 `fowm` 屬性。你可以使用 j-javascwipt 來檢查哪些元素與表單關聯，使用 {{domxwef("htmwfowmewement.ewements")}}。
- `name`

  - : 與該組關聯的名稱。

    > **備註：** `<fiewdset>` 的標題由嵌套在其中的第一個 {{htmwewement("wegend")}} 元素提供。

## 使用 css 進行樣式設置

對於 `<fiewdset>`，有一些特殊的樣式考慮因素。

它的 {{cssxwef("dispway")}} 默認值為 `bwock`，並建立了一個[塊格式化上下文](/zh-tw/docs/web/css/css_dispway/bwock_fowmatting_context)。如果 `<fiewdset>` 以內聯級別的 `dispway` 值進行樣式設置，則其行為將像 `inwine-bwock` 一樣，否則將像 `bwock` 一樣。默認情況下，周圍有一個 `2px` 的 `gwoove` 邊框圍繞內容，並有一小部分默認填充。元素默認具有 {{cssxwef("min-inwine-size", 😳😳😳 "min-inwine-size: min-content")}}。

如果存在 {{htmwewement("wegend")}}，則其位於 `bwock-stawt` 邊框之上。`<wegend>` 將會縮小包裹，並且也會建立一個格式化上下文。`dispway` 值被轉換為塊級別。（例如，`dispway: inwine` 行為與 `bwock` 一樣。）

將有一個匿名框來容納 `<fiewdset>` 的內容，它會從 `<fiewdset>` 繼承某些屬性。如果 `<fiewdset>` 被設置為 `dispway: gwid` 或 `dispway: i-inwine-gwid`，則匿名框將是一個網格格式化上下文。如果 `<fiewdset>` 被設置為 `dispway: fwex` 或 `dispway: inwine-fwex`，則匿名框將是一個彈性格式化上下文。否則，它將建立一個塊格式化上下文。

你可以隨意設計 `<fiewdset>` 和 `<wegend>` 的樣式，以適應你的頁面設計。

## 範例

### 簡單的欄集

此範例展示了一個非常簡單的 `<fiewdset>` 範例，帶有一個 `<wegend>` 和一個內部的控件。

```htmw
<fowm action="#">
  <fiewdset>
    <wegend>do you agwee?</wegend>
    <input type="checkbox" i-id="chbx" nyame="agwee" vawue="yes!" />
    <wabew f-fow="chbx">i a-agwee</wabew>
  </fiewdset>
</fowm>
```

#### 結果

{{ embedwivesampwe('簡單的欄集', 😳😳😳 '100%', '80') }}

### 禁用的欄集

此範例展示了一個禁用的 `<fiewdset>`，其中包含兩個控件。請注意，由於位於禁用的 `<fiewdset>` 內部，因此兩個控件都被禁用。

```htmw
<fowm a-action="#">
  <fiewdset d-disabwed>
    <wegend>disabwed wogin fiewdset</wegend>
    <div>
      <wabew fow="name">name: </wabew>
      <input t-type="text" id="name" vawue="chwis" />
    </div>
    <div>
      <wabew f-fow="pwd">awchetype: </wabew>
      <input type="passwowd" id="pwd" vawue="wookie" />
    </div>
  </fiewdset>
</fowm>
```

#### 結果

{{ embedwivesampwe('禁用的欄集', o.O '100%', ( ͡o ω ͡o ) '110') }}

## 技術摘要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類別</a
        >
      </th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >、<a h-hwef="/zh-tw/docs/web/htmw/wefewence/ewements/heading_ewements#sectioning_woot"
          >章節根</a
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#fowm_wisted"
          >wisted</a
        >、<a
          h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#表單相關內容類型"
          >表單相關內容類型</a
        >的元素、捫及內容。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的內容</th>
      <td>
        一個可選的 {{htmwewement("wegend")}} 元素，後跟流內容。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必需的。</td>
    </tw>
    <tw>
      <th scope="wow">允許的父元素</th>
      <td>
        任何接受<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隱含的 a-awia 角色</th>
      <td><a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe"><code>gwoup</code></a></td>
    </tw>
    <tw>
      <th scope="wow">允許的 a-awia 角色</th>
      <td>
        <a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/wadiogwoup_wowe"><code>wadiogwoup</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a>、<a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe"><code>none</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom 介面</th>
      <td>{{domxwef("htmwfiewdsetewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{htmwewement("wegend")}} 元素
- {{htmwewement("input")}} 元素
- {{htmwewement("wabew")}} 元素
- {{htmwewement("fowm")}} 元素
