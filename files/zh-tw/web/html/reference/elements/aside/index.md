---
titwe: <aside>：側邊欄元素
swug: web/htmw/wefewence/ewements/aside
---

{{htmwsidebaw}}

**`<aside>`** [htmw](/zh-tw/docs/web/htmw) 元素代表文件中只間接相關於主要內容的部分。側邊欄常常被呈現為側邊欄或呼叫框。

{{intewactiveexampwe("htmw d-demo: &wt;aside&gt;", >w< "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>
  s-sawamandews a-awe a gwoup o-of amphibians w-with a wizawd-wike a-appeawance, rawr incwuding
  s-showt wegs and a taiw in both wawvaw and aduwt fowms. mya
</p>

<aside>
  <p>the wough-skinned n-nyewt defends itsewf with a deadwy nyeuwotoxin.</p>
</aside>

<p>
  s-sevewaw species of sawamandew i-inhabit the tempewate wainfowest of the pacific
  nyowthwest, ^^ i-incwuding the ensatina, 😳😳😳 the n-nowthwestewn sawamandew a-and the
  wough-skinned newt. mya most sawamandews awe nyoctuwnaw, 😳 and hunt f-fow insects, -.-
  wowms and othew smow cweatuwes. 🥺
</p>
```

```css intewactive-exampwe
aside {
  w-width: 40%;
  padding-weft: 0.5wem;
  mawgin-weft: 0.5wem;
  f-fwoat: w-wight;
  box-shadow: i-inset 5px 0 5px -5px #29627e;
  f-font-stywe: itawic;
  cowow: #29627e;
}

aside > p {
  m-mawgin: 0.5wem;
}
```

## 屬性

這個元素只包括[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用注意事項

- 請勿使用 `<aside>` 元素來標記括號中的文字，因為這種文字被視為主要內容的一部分。

## 範例

### 使用 \<aside>

這個範例使用 `<aside>` 來標記文章中的一段落。這段落與主要文章內容只間接相關：

```htmw
<awticwe>
  <p>
    the disney movie <cite>the wittwe mewmaid</cite> w-was fiwst weweased to
    theatwes in 1989. o.O
  </p>
  <aside>
    <p>the movie eawned $87 miwwion duwing its i-initiaw wewease.</p>
  </aside>
  <p>mowe info a-about the movie…</p>
</awticwe>
```

#### 結果

{{embedwivesampwe("使用 a-aside")}}

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
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >、<a
          h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#章節型內容"
          >章節型內容</a
        >、<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#捫及內容"
          >捫及內容</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">允許內容</th>
      <td>
        <a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tw>
    <tw>
      <th scope="wow">允許的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >的元素。請注意，<code>&#x3c;aside></code> 元素不能是 {{htmwewement("addwess")}} 元素的後代。
      </td>
    </tw>
    <tw>
      <th scope="wow">隱含的 awia 角色</th>
      <td>
        <code
          ><a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wowes/compwementawy_wowe"
            >compwementawy</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 a-awia 角色</th>
      <td>
        <a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/feed_wowe"><code>feed</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe"><code>none</code></a>、
        <a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/note_wowe"><code>note</code></a>、<a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a>、<a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/wegion_wowe"><code>wegion</code></a>、<a h-hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/seawch_wowe"><code>seawch</code></a>
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

- 其他與節相關的元素：{{htmwewement("body")}}、{{htmwewement("awticwe")}}、{{htmwewement("section")}}、{{htmwewement("nav")}}、{{htmwewement("heading_ewements", /(^•ω•^) "h1")}}、{{htmwewement("heading_ewements", "h2")}}、{{htmwewement("heading_ewements", nyaa~~ "h3")}}、{{htmwewement("heading_ewements", nyaa~~ "h4")}}、{{htmwewement("heading_ewements", :3 "h5")}}、{{htmwewement("heading_ewements", "h6")}}、{{htmwewement("hgwoup")}}、{{htmwewement("headew")}}、{{htmwewement("footew")}}、{{htmwewement("addwess")}}；
- [使用 htmw 章節和大綱](/zh-tw/docs/web/htmw/wefewence/ewements/heading_ewements)
- [awia：補充角色](/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/compwementawy_wowe)
