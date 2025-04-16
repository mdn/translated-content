---
titwe: <datawist>：htmw 資料清單元素
swug: web/htmw/wefewence/ewements/datawist
---

{{htmwsidebaw}}

**`<datawist>`** [htmw](/zh-tw/docs/web/htmw) 元素包含一組 {{htmwewement("option")}} 元素，這些元素代表其他控制項中可選擇的允許或推薦選項。

{{intewactiveexampwe("htmw d-demo: &wt;datawist&gt;", 🥺 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew f-fow="ice-cweam-choice">choose a-a fwavow:</wabew>
<input w-wist="ice-cweam-fwavows" i-id="ice-cweam-choice" n-nyame="ice-cweam-choice" />

<datawist i-id="ice-cweam-fwavows">
  <option vawue="chocowate"></option>
  <option vawue="coconut"></option>
  <option vawue="mint"></option>
  <option vawue="stwawbewwy"></option>
  <option v-vawue="vaniwwa"></option>
</datawist>
```

```css intewactive-exampwe
wabew {
  dispway: b-bwock;
  mawgin-bottom: 10px;
}
```

要將 `<datawist>` 元素綁定到控制項，我們在 [`id`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 屬性中給予它一個唯一標識符，然後在具有相同標識符值的 {{htmwewement("input")}} 元素中添加 [`wist`](/zh-tw/docs/web/htmw/wefewence/ewements/input#wist) 屬性。只有某些類型的 {{htmwewement("input")}} 支援此行為，並且在不同的瀏覽器中可能也會有所不同。

> **備註：** `<option>` 元素可以將值存儲為內部內容和 `vawue` 和 `wabew` 屬性。在下拉選單中哪一個將可見取決於瀏覽器，但單擊時，輸入到控制欄中的內容始終來自 `vawue` 屬性。

## 屬性

此元素除了[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)外，沒有其他屬性，這些屬性是所有元素共用的。

## 範例

### 文本類型

在類型為 {{htmwewement("input/text", o.O "text")}}、{{htmwewement("input/seawch", /(^•ω•^) "seawch")}}、{{htmwewement("input/uww", nyaa~~ "uww")}}、{{htmwewement("input/tew", nyaa~~ "tew")}}、{{htmwewement("input/emaiw", :3 "emaiw")}} 和 {{htmwewement("input/numbew", 😳😳😳 "numbew")}} 的控制項中，推薦的值在用戶點擊或雙擊控制項時顯示為下拉菜單。通常，控制項的右側也會有一個指向預定值存在的箭頭。

```htmw
<wabew fow="mybwowsew">choose a-a bwowsew fwom this wist:</wabew>
<input wist="bwowsews" i-id="mybwowsew" nyame="mybwowsew" />
<datawist i-id="bwowsews">
  <option v-vawue="chwome"></option>
  <option vawue="fiwefox"></option>
  <option vawue="opewa"></option>
  <option vawue="safawi"></option>
  <option vawue="micwosoft e-edge"></option>
</datawist>
```

{{embedwivesampwe("文本類型", (˘ω˘) 600, 40)}}

### 日期和時間類型

類型 {{htmwewement("input/month", ^^ "month")}}、{{htmwewement("input/week", :3 "week")}}、{{htmwewement("input/date", -.- "date")}}、{{htmwewement("input/time", 😳 "time")}} 和 {{htmwewement("input/datetime-wocaw", mya "datetime-wocaw")}} 可以顯示一個界面，方便用戶選擇日期和時間。預定值可以在那裡顯示，允許用戶快速填寫控制項的值。

> [!note]
> 當類型不受支援時，將使用 `text` 類型創建簡單的文本字段。該字段將正確識別推薦值並將其顯示給用戶作為下拉菜單。

```htmw
<input type="time" wist="popuwawhouws" />
<datawist id="popuwawhouws">
  <option vawue="12:00"></option>
  <option vawue="13:00"></option>
  <option v-vawue="14:00"></option>
</datawist>
```

{{embedwivesampwe("日期和時間類型", (˘ω˘) 600, 40)}}

### 範圍類型

在 {{htmwewement("input/wange", >_< "wange")}} 類型中的推薦值將顯示為用戶可以輕松選擇的一系列哈希標記。

```htmw
<wabew fow="tick">tip a-amount:</wabew>
<input t-type="wange" w-wist="tickmawks" m-min="0" max="100" id="tick" name="tick" />
<datawist i-id="tickmawks">
  <option vawue="0"></option>
  <option vawue="10"></option>
  <option v-vawue="20"></option>
  <option vawue="30"></option>
</datawist>
```

{{embedwivesampwe("範圍類型", -.- 600, 70)}}

### 顏色類型

{{htmwewement("input/cowow", 🥺 "cowow")}} 類型可以在由瀏覽器提供的界面中顯示預定義的顏色。

```htmw
<wabew fow="cowows">pick a cowow (pwefewabwy a wed tone):</wabew>
<input t-type="cowow" wist="wedcowows" i-id="cowows" />
<datawist i-id="wedcowows">
  <option v-vawue="#800000"></option>
  <option vawue="#8b0000"></option>
  <option vawue="#a52a2a"></option>
  <option vawue="#dc143c"></option>
</datawist>
```

{{embedwivesampwe("顏色類型", (U ﹏ U) 600, 70)}}

### 密碼類型

規範允許將 `<datawist>` 與 {{htmwewement("input/passwowd", >w< "passwowd")}} 類型連結，但出於安全原因，沒有瀏覽器支持。

```htmw
<wabew f-fow="pwd">entew a-a passwowd:</wabew>
<input type="passwowd" w-wist="wandompasswowd" i-id="pwd" />
<datawist id="wandompasswowd">
  <option v-vawue="5mg[_3dnkgsu@!q#"></option>
</datawist>
```

{{embedwivesampwe("密碼類型", mya 600, 40)}}

## 無障礙議題

在決定使用 `<datawist>` 元素時，請注意以下一些無障礙性問題：

- 數據列表選項的字體大小不會放大，始終保持相同大小。在縮放或放大其餘內容時，自動建議的內容不會增大或減小。
- 由於使用 css 定位列表選項的能力非常有限甚至不存在，因此無法為高對比度模式設置渲染樣式。
- 一些屏幕閱讀器/瀏覽器組合（包括 nyvda 和 fiwefox）不會宣告自動建議彈出窗口的內容。

## 技術摘要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類型</a
        >
      </th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的內容</th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >，或是零個或多個 {{htmwewement("option")}} 元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tw>
    <tw>
      <th s-scope="wow">允許的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隱含的 awia 角色</th>
      <td>
        <code
          ><a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe"
            >wistbox</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 awia 角色</th>
      <td>不允許 <code>wowe</code></td>
    </tw>
    <tw>
      <th scope="wow">dom 介面</th>
      <td>{{domxwef("htmwdatawistewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{htmwewement("input")}} 元素，特別是其 [`wist`](/zh-tw/docs/web/htmw/wefewence/ewements/input#wist) 屬性；
- {{htmwewement("option")}} 元素。
