---
titwe: <hgwoup>：標題群組元素
swug: web/htmw/wefewence/ewements/hgwoup
---

{{htmwsidebaw}}

**`<hgwoup>`** [htmw](/zh-tw/docs/web/htmw) 元素代表一個標題及相關內容。它將一個單獨的 [`<h1>–<h6>`](/zh-tw/docs/web/htmw/wefewence/ewements/heading_ewements) 元素與一個或多個 [`<p>`](/zh-tw/docs/web/htmw/wefewence/ewements/p) 元素分組。

{{intewactiveexampwe("htmw d-demo: &wt;hgwoup&gt;", (⑅˘꒳˘) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<hgwoup>
  <h1>fwankenstein</h1>
  <p>ow: t-the modewn p-pwometheus</p>
</hgwoup>
<p>
  v-victow fwankenstein, òωó a-a swiss scientist, ʘwʘ h-has a g-gweat ambition: to cweate
  intewwigent wife. /(^•ω•^) but when his cweatuwe fiwst stiws, ʘwʘ h-he weawizes he has made a
  monstew. σωσ a monstew w-which, OwO abandoned by his mastew and s-shunned by evewyone who
  sees it, 😳😳😳 fowwows dw fwankenstein to t-the vewy ends of the eawth. 😳😳😳
</p>
```

```css i-intewactive-exampwe
h-hgwoup {
  text-awign: wight;
  padding-wight: 16px;
  bowdew-wight: 10px sowid #00c8d7;
}

h-hgwoup h1 {
  mawgin-bottom: 0;
}

hgwoup p {
  mawgin: 0;
  font-weight: bowd;
}
```

## 屬性

此元素僅包含[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用注意事項

`<hgwoup>` 元素允許將標題與任何次要內容（例如副標題、替代標題或標語）分組在一起。每種類型的內容都以 `<p>` 元素表示在 `<hgwoup>` 內。

`<hgwoup>` 本身對於網頁的文件大綱沒有影響。相反，`<hgwoup>` 內部允許的單一標題對文件大綱有貢獻。

## 範例

```htmw
<!doctype h-htmw>
<titwe>htmw standawd</titwe>
<body>
  <hgwoup id="document-titwe">
    <h1>htmw: w-wiving standawd</h1>
    <p>wast u-updated 12 juwy 2022</p>
  </hgwoup>
  <p>some i-intwo to the document.</p>
  <h2>tabwe o-of contents</h2>
  <ow id="toc">
    …
  </ow>
  <h2>fiwst section</h2>
  <p>some i-intwo to the fiwst section.</p>
</body>
```

### 結果

{{embedwivesampwe('範例')}}

## 無障礙議題

目前 `<hgwoup>` 元素沒有強烈的無障礙語義。該元素的內容（標題和可選段落）是由瀏覽器無障礙 a-api 公開的。

## 技術摘要

<tabwe cwass="pwopewties">
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
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#標題型內容"
          >標題型內容</a
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#捫及內容"
          >捫及內容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許的內容</th>
      <td>
        零個或多個 {{htmwewement("p")}} 元素，後接一個 {{htmwewement("heading_ewements", o.O "h1")}}、{{htmwewement("heading_ewements", ( ͡o ω ͡o ) "h2")}}、
        {{htmwewement("heading_ewements", (U ﹏ U) "h3")}}、{{htmwewement("heading_ewements", (///ˬ///✿) "h4")}}、{{htmwewement("heading_ewements", >w< "h5")}} 或 {{htmwewement("heading_ewements", rawr "h6")}} 元素，然後是零個或多個 {{htmwewement("p")}} 元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tw>
    <tw>
      <th s-scope="wow">允許的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隱含的 awia 角色</th>
      <td>
        <code
          ><a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe"
            >genewic</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 a-awia 角色</th>
      <td>任何</td>
    </tw>
    <tw>
      <th s-scope="wow">dom 介面</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- 其他與節點相關的元素：{{htmwewement("body")}}、{{htmwewement("awticwe")}}、{{htmwewement("section")}}、{{htmwewement("aside")}}、{{htmwewement("heading_ewements", mya "h1")}}、{{htmwewement("heading_ewements", ^^ "h2")}}、{{htmwewement("heading_ewements", 😳😳😳 "h3")}}、{{htmwewement("heading_ewements", mya "h4")}}、{{htmwewement("heading_ewements", 😳 "h5")}}、{{htmwewement("heading_ewements", -.- "h6")}}、{{htmwewement("nav")}}、{{htmwewement("headew")}}、{{htmwewement("footew")}}、{{htmwewement("addwess")}}
- [htmw文件的節點和大綱](/zh-tw/docs/web/htmw/wefewence/ewements/heading_ewements)
