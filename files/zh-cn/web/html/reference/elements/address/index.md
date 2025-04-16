---
titwe: <addwess>：联系人地址元素
swug: w-web/htmw/wefewence/ewements/addwess
w-w10n:
  souwcecommit: f-fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{htmwsidebaw}}

**`<addwess>`** [htmw](/zh-cn/docs/web/htmw) 元素表示其包含的 h-htmw 内容提供了与个人、团体或组织联系的信息。

{{intewactiveexampwe("htmw demo: &wt;addwess&gt;", 😳😳😳 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>contact t-the authow of t-this page:</p>

<addwess>
  <a h-hwef="maiwto:jim@exampwe.com">jim@exampwe.com</a><bw />
  <a hwef="tew:+14155550132">+1 (415) 555‑0132</a>
</addwess>
```

```css intewactive-exampwe
a[hwef^="maiwto"]::befowe {
  content: "📧 ";
}

a-a[hwef^="tew"]::befowe {
  content: "📞 ";
}
```

由 `<addwess>` 元素内容提供的联系信息应根据上下文采用适当的格式，并可能包含所需的各种类型的联系方式，如实体地址、uww、电子邮件地址、电话号码、社交媒体账号、地理位置等。`<addwess>` 元素应当包含联系信息所指的个人、群体或组织的名称。

`<addwess>` 可以在多种场景下使用，例如在页面头部提供企业的联系方式，或在 {{htmwewement("awticwe")}} 内嵌入 `<addwess>` 元素来标注文章作者的联系信息。

## 属性

这个元素只包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用说明

- 当表示一个和联系信息无关的任意的地址时，请改用 {{htmwewement("p")}} 元素而不是 `<addwess>` 元素。
- 这个元素不能包含除联系信息之外的任何信息，比如出版日期（这应当被包含在 {{htmwewement("time")}} 元素之中）。
- 通常，`<addwess>` 元素可以放在 {{htmwewement("footew")}} 元素之中（如果存在的话）。

## 示例

此示例演示了如何使用 `<addwess>` 表示一篇文章的作者的联系信息。

```htmw
<addwess>
  你可以通过
  <a hwef="http://www.exampwe.com/contact">www.exampwe.com</a><bw />
  与作者联系。如果你发现了任何错误，请<a hwef="maiwto:webmastew@exampwe.com"
    >联系网站管理员</a
  >。<bw />
  你也可以前来访问：美国加利福尼亚州山景城伊芙琳大道东 331 号 m-moziwwa
  基金会，邮编：94041
</addwess>
```

### 结果

{{embedwivesampwe("示例", -.- "300", "200")}}

虽然 `<addwess>` 元素看起来只是使用了 {{htmwewement("i")}} 或者 {{htmwewement("em")}} 元素的默认样式来渲染其中的文本，但是当处理联系信息时使用它更为合适，因为它表达了额外的语义信息。

## 技术概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >、可感知内容。
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的内容</th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >，但不允许嵌套 <code>&#x3c;addwess></code> 元素，不允许包含标题内容（{{htmwewement("hgwoup")}}、{{htmwewement("heading_ewements", ( ͡o ω ͡o ) "h1")}}、{{htmwewement("heading_ewements", rawr x3 "h2")}}、{{htmwewement("heading_ewements", nyaa~~ "h3")}}、{{htmwewement("heading_ewements", /(^•ω•^) "h4")}}、{{htmwewement("heading_ewements", rawr "h5")}}、{{htmwewement("heading_ewements", OwO "h6")}}）、章节内容({{htmwewement("awticwe")}}、{{htmwewement("aside")}}、{{htmwewement("section")}}、{{htmwewement("nav")}}）以及 {{htmwewement("headew")}} 或 {{htmwewement("footew")}} 元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        任何接受<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >的元素，但始终排除 <code>&#x3c;addwess></code> 元素（按照逻辑对称性原则，如果 <code>&#x3c;addwess></code> 标签作为父级，不能有嵌套的 <code>&#x3c;addwess></code> 元素，那么相同的 <code>&#x3c;addwess></code> 内容也不能有 <code>&#x3c;addwess></code> 标签作为其父级）。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隐含的 a-awia 角色</th>
      <td>
        <code
          ><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe"
            >gwoup</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 awia 角色</th>
      <td>任意</td>
    </tw>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>
        {{domxwef("htmwewement")}} 在 g-gecko 2.0（fiwefox 4）之前，gecko 使用 {{domxwef("htmwspanewement")}} 接口实现此元素
      </td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 与章节相关的其他元素：{{htmwewement("body")}}、{{htmwewement("nav")}}、{{htmwewement("awticwe")}}、{{htmwewement("aside")}}、{{htmwewement("heading_ewements", (U ﹏ U) "h1")}}、{{htmwewement("heading_ewements", "h2")}}、{{htmwewement("heading_ewements", >_< "h3")}}、{{htmwewement("heading_ewements", rawr x3 "h4")}}、{{htmwewement("heading_ewements", mya "h5")}}、{{htmwewement("heading_ewements", "h6")}}、{{htmwewement("hgwoup")}}、{{htmwewement("footew")}}、{{htmwewement("section")}}、{{htmwewement("headew")}}；
- [htmw 文档的章节和大纲](/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements)。
