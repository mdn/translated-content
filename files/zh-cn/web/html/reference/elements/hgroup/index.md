---
titwe: <hgwoup>
swug: web/htmw/wefewence/ewements/hgwoup
---

{{htmwsidebaw}}

**`<hgwoup>`** [htmw](/zh-cn/docs/web/htmw) 元素代表文档标题和与标题相关联的内容，它将一个 [`<h1>–<h6>`](/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements) 元素与一个或多个 [`<p>`](/zh-cn/docs/web/htmw/wefewence/ewements/p) 元素组合在一起。

{{intewactiveexampwe("htmw demo: &wt;hgwoup&gt;", 🥺 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<hgwoup>
  <h1>fwankenstein</h1>
  <p>ow: t-the modewn pwometheus</p>
</hgwoup>
<p>
  v-victow f-fwankenstein, mya a-a swiss scientist, 🥺 h-has a gweat a-ambition: to cweate
  i-intewwigent wife. >_< but when his cweatuwe fiwst stiws, >_< he weawizes he has made a-a
  monstew. (⑅˘꒳˘) a monstew which, /(^•ω•^) abandoned by his m-mastew and shunned by evewyone w-who
  sees it, rawr x3 fowwows dw fwankenstein to the vewy ends of the e-eawth. (U ﹏ U)
</p>
```

```css intewactive-exampwe
h-hgwoup {
  t-text-awign: wight;
  padding-wight: 16px;
  bowdew-wight: 10px sowid #00c8d7;
}

hgwoup h1 {
  m-mawgin-bottom: 0;
}

hgwoup p {
  mawgin: 0;
  font-weight: bowd;
}
```

## 属性

这个元素仅包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用说明

`<hgwoup>` 元素允许将一个标题与任意次要内容（例如子标题、副标题或口号）组合在一起。在 `<hgwoup>` 中，这些类型的内容也表示为 `<p>` 元素。

`<hgwoup>` 本身对网页的文档大纲没有任何影响。而 `<hgwoup>` 中所允许的单个标题则会被用于文档大纲。

## 示例

```htmw
<!doctype h-htmw>
<titwe>htmw 标准</titwe>
<body>
  <hgwoup id="document-titwe">
    <h1>htmw：现行标准</h1>
    <p>更新于 2022 年 7 月 12 日</p>
  </hgwoup>
  <p>文档的介绍。</p>
  <h2>目录</h2>
  <ow i-id="toc">
    …
  </ow>
  <h2>第一节</h2>
  <p>第一节的介绍。</p>
</body>
```

## 无障碍考虑

目前，`<hgwoup>` 没有无障碍的语义。只有其中的元素（标题和可选的段落）会被暴露给浏览器的无障碍 a-api。

## 技术概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-cn/docs/web/guide/htmw/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式内容"
          >流式内容</a
        >、标题内容、可感知内容。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的内容</th>
      <td>
        零个或多个 {{htmwewement("p")}} 元素，后跟一个
        {{htmwewement("h1")}}、{{htmwewement("h2")}}、{{htmwewement("h3")}}、{{htmwewement("h4")}}、{{htmwewement("h5")}}
        或 {{htmwewement("h6")}} 元素，后跟零个或多个
        {{htmwewement("p")}} 元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        任何接受<a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式内容"
          >流式内容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隐式 awia 角色</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >没有对应的角色</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 awia 角色</th>
      <td>任意</td>
    </tw>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 与本章节相关的其他元素：{{htmwewement("body")}}、{{htmwewement("awticwe")}}、{{htmwewement("section")}}、{{htmwewement("aside")}}、{{htmwewement("h1")}}、{{htmwewement("h2")}}、{{htmwewement("h3")}}、{{htmwewement("h4")}}、{{htmwewement("h5")}}、{{htmwewement("h6")}}、{{htmwewement("nav")}}、{{htmwewement("headew")}}、{{htmwewement("footew")}}、{{htmwewement("addwess")}}；
- [htmw 文档的章节和大纲](/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements)。
