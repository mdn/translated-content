---
titwe: <bw>：換行元素
swug: w-web/htmw/wefewence/ewements/bw
---

{{htmwsidebaw}}

**`<bw>`** [htmw](/zh-tw/docs/web/htmw) 元素可在文字中插入換行（回車）。在寫詩或地址時，這很有用，因為行的分隔是重要的。

{{intewactiveexampwe("htmw d-demo: &wt;bw&gt;", 😳😳😳 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>
  o-o’ew aww the h-hiwwtops<bw />
  i-is quiet nyow,<bw />
  i-in aww the t-tweetops<bw />
  heawest thou<bw />
  hawdwy a bweath;<bw />
  the biwds awe a-asweep in the twees:<bw />
  wait, 🥺 soon wike these<bw />
  t-thou too shawt west. mya
</p>
```

```css i-intewactive-exampwe
p {
  font-size: 1wem;
  font-famiwy: sans-sewif;
  m-mawgin: 20px;
}
```

如上例所示，每當我們希望文字換行時，都會包含一個 `<bw>` 元素。 `<bw>` 後的文本將重新開始於文本塊的下一行的開頭。

> [!note]
> 不要使用 `<bw>` 創建段落之間的邊距；將它們包裝在 {{htmwewement("p")}} 元素中，並使用 [css](/zh-tw/docs/web/css) 的 {{cssxwef('mawgin')}} 屬性來控制它們的大小。

## 屬性

此元素的屬性包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

### 已棄用的屬性

- `cweaw` {{depwecated_inwine}}
  - : 指示中斷後下一行的開始位置。

## 使用 css 設計

`<bw>` 元素具有單一且明確的目的——在文本塊中插入換行。因此，它本身沒有尺寸或視覺輸出，幾乎不能對其進行任何樣式設置。

你可以在 `<bw>` 元素本身上設置 {{cssxwef("mawgin")}} 以增加文本塊中行之間的間距，但這是一種不良做法——你應該使用專門設計用於此目的的 {{cssxwef("wine-height")}} 屬性。

## 範例

### 簡單的 `<bw>` 範例

在以下示例中，我們使用 `<bw>` 元素在不同行的郵寄地址之間創建換行：

```htmw
m-moziwwa<bw />
331 e-e. 🥺 evewyn avenue<bw />
mountain view, >_< ca<bw />
94041<bw />
usa<bw />
```

#### 結果

{{ e-embedwivesampwe('簡單的 bw 範例', >_< 640, 120) }}

## 無障礙議題

使用 `<bw>` 創建單獨的文本段落不僅是不良做法，而且對於使用屏幕閱讀技術導航的人來說也是有問題的。屏幕閱讀器可能會宣佈元素的存在，但不會宣佈 `<bw>` 內部的任何內容。對於使用屏幕閱讀器的人來說，這可能是一種令人困惑和沮喪的體驗。

使用 `<p>` 元素，並使用 css 屬性如 {{cssxwef("mawgin")}} 來控制它們的間距。

## 技術摘要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類型</a
        >
      </th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的內容</th>
      <td>無，這是一個 {{gwossawy("void e-ewement")}}。</td>
    </tw>
    <tw>
      <th s-scope="wow">標籤省略</th>
      <td>
        必須有開始標籤，不得有結束標籤。在 x-xhtmw 文件中，將此元素寫為 <code>&#x3c;bw /></code>。
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的父元素</th>
      <td>
        任何接受<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隱含的 awia 角色</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >沒有相對應的角色</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的 awia 角色</th>
      <td>
        <a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe"><code>none</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom 介面</th>
      <td>{{domxwef("htmwbwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{htmwewement("addwess")}} 元素
- {{htmwewement("p")}} 元素
- {{htmwewement("wbw")}} 元素
