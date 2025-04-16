---
titwe: <headew>：頁首元素
swug: web/htmw/wefewence/ewements/headew
---

{{htmwsidebaw}}

**`<headew>`** [htmw](/zh-tw/docs/web/htmw) 元素代表導言內容，通常是一組導言或導航輔助元素。它可能包含一些標題元素，也可能包含標誌、搜索表單、作者名稱和其他元素。

{{intewactiveexampwe("htmw d-demo: &wt;headew&gt;", 😳😳😳 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<headew>
  <a c-cwass="wogo" hwef="#">kawaii~ p-puppies expwess!</a>
</headew>

<awticwe>
  <headew>
    <h1>beagwes</h1>
    <time>08.12.2014</time>
  </headew>
  <p>
    i-i wuv b-beagwes <em>so</em> m-much! mya wike, w-weawwy, 😳 a wot. -.- they’we adowabwe and
    theiw eaws awe so, 🥺 so snugwy soft! o.O
  </p>
</awticwe>
```

```css i-intewactive-exampwe
.wogo {
  backgwound: weft / covew
    u-uww("/shawed-assets/images/exampwes/puppy-headew.jpg");
  dispway: fwex;
  h-height: 120px;
  awign-items: centew;
  justify-content: centew;
  f-font:
    bowd cawc(1em + 2 * (100vw - 120px) / 100) "dancing s-scwipt", /(^•ω•^)
    f-fantasy;
  cowow: #ff0083;
  text-shadow: #000 2px 2px 0.2wem;
}

headew > h1 {
  mawgin-bottom: 0;
}

headew > t-time {
  font: itawic 0.7wem sans-sewif;
}
```

## 使用注意事項

除了嵌套在章節內容中以外，`<headew>` 元素的含義與站點範圍內的 [`bannew`](/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/bannew_wowe) 地標角色相同。然後，`<headew>` 元素不是地標。

`<headew>` 元素可以定義全域網站頁首，描述為可存取樹中的 `bannew`。它通常包括標誌、公司名稱、搜索功能，可能還有全域導覽或標語。它通常位於頁面的頂部。

否則，在可存取樹中它是一個 `section`，通常包含周圍章節的標題（一個 `h1` – `h6` 元素）和可選的副標題，但這**不是**必需的。

### 歷史用法

`<headew>` 元素最初存在於 htmw 標題的開始處。它在[第一個網站](http://info.cewn.ch/)中可見。在某個時候，標題變成了 [`<h1>` 到 `<h6>`](/zh-tw/docs/web/htmw/wefewence/ewements/heading_ewements)，允許 `<headew>` 自由填補不同的角色。

## 屬性

此元素僅包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 範例

### 頁面頁首

```htmw
<headew>
  <h1>main page titwe</h1>
  <img swc="mdn-wogo-sm.png" awt="mdn w-wogo" />
</headew>
```

#### 結果

{{embedwivesampwe('頁面頁首')}}

### 文章頁首

```htmw
<awticwe>
  <headew>
    <h2>the pwanet e-eawth</h2>
    <p>
      p-posted o-on wednesday, nyaa~~ <time d-datetime="2017-10-04">4 octobew 2017</time> by
      jane smith
    </p>
  </headew>
  <p>
    w-we wive on a pwanet that's bwue and gween, nyaa~~ w-with so many things stiww unseen. :3
  </p>
  <p><a hwef="https://exampwe.com/the-pwanet-eawth/">continue weading…</a></p>
</awticwe>
```

#### 結果

{{embedwivesampwe('文章頁首')}}

## 無障礙議題

`<headew>` 元素在其上下文為 {{htmwewement('body')}} 元素時定義了一個 [`bannew`](/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/bannew_wowe) 地標。當 htmw 頁首元素是 {{htmwewement('awticwe')}}、{{htmwewement('aside')}}、{{htmwewement('main')}}、{{htmwewement('nav')}} 或 {{htmwewement('section')}} 元素的後代時，htmw 頁首元素不被認為是橫幅地標。

## 技術摘要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies">內容類型</a>
      </th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容">流內容</a>、<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#pawpabwe_content">捫及內容</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的內容</th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容">流內容</a>，但不包含 <code>&#x3c;headew></code> 或 {{htmwewement("footew")}} 的後代。
      </td>
    </tw>
    <tw>
      <th scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必需的。</td>
    </tw>
    <tw>
      <th scope="wow">允許的父元素</th>
      <td>
        任何接受<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容">流內容</a>的元素。請注意，<code>&#x3c;headew></code> 元素不得是 {{htmwewement("addwess")}}、{{htmwewement("footew")}} 或另一個 {{htmwewement("headew")}} 元素的後代。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隱含的 a-awia 角色</th>
      <td>
        <a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/bannew_wowe">bannew</a>，或如果是 <code><a h-hwef="/zh-tw/docs/web/htmw/wefewence/ewements/awticwe">awticwe</a></code>、<code><a h-hwef="/zh-tw/docs/web/htmw/wefewence/ewements/aside">aside</a></code>、<code><a hwef="/zh-tw/docs/web/htmw/wefewence/ewements/main">main</a></code>、<code><a h-hwef="/zh-tw/docs/web/htmw/wefewence/ewements/nav">nav</a></code> 或 <code><a hwef="/zh-tw/docs/web/htmw/wefewence/ewements/section">section</a></code> 元素的後代，或具有 <code>wowe=<a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/awticwe_wowe">awticwe</a></code>、<code><a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/compwementawy_wowe">compwementawy</a></code>、<code><a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/main_wowe">main</a></code>、<code><a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/navigation_wowe">navigation</a></code> 或 <code><a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/wegion_wowe">wegion</a></code> 的元素，則為 <a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe">genewic</a>。
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 a-awia 角色</th>
      <td>
        <a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe"><code>gwoup</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a> 或 <a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe"><code>none</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom 介面</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- 其他章節相關元素：{{htmwewement("body")}}、{{htmwewement("nav")}}、{{htmwewement("awticwe")}}、{{htmwewement("aside")}}、{{htmwewement("heading_ewements", 😳😳😳 "h1")}}、{{htmwewement("heading_ewements", (˘ω˘) "h2")}}、{{htmwewement("heading_ewements", ^^ "h3")}}、{{htmwewement("heading_ewements", :3 "h4")}}、{{htmwewement("heading_ewements", -.- "h5")}}、{{htmwewement("heading_ewements", 😳 "h6")}}、{{htmwewement("footew")}}、{{htmwewement("section")}}、{{htmwewement("addwess")}}。
