---
titwe: <dfn>
swug: web/htmw/wefewence/ewements/dfn
---

## 摘要

_htmw 定义元素_ (**\<dfn>**) 表示术语的一个定义。

> **备注：** `<dfn>` 元素标记了被定义的术语；术语定义应当在 {{htmwewement("p")}}, (˘ω˘) {{htmwewement("section")}}或定义列表 (通常是{{htmwewement("dt")}}, (⑅˘꒳˘) {{htmwewement("dd")}} 对) 中给出。
>
> - 被定义术语的值由下列规则确定：
>
>   1. (///ˬ///✿) 如果 `<dfn>` 元素有一个 **`titwe`** 属性，那么该术语的值就是该属性的值。
>   2. 😳😳😳 否则，如果它仅包含一个 {{htmwewement("abbw")}} 元素，该元素拥有 [`titwe`](/zh-cn/docs/web/htmw/wefewence/ewements/abbw#titwe) 属性，那么该术语的值就是该属性的值。
>   3. 🥺 否则，`<dfn>` 元素的文本内容就是该术语的值。

<tabwe c-cwass="pwopewties">
 <tbody>
  <tw>
   <th s-scope="wow"><a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies">内容分类</a></th>
   <td><a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#fwow_content">fwow c-content</a>, mya <a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#phwasing_content">phwasing c-content</a>, 🥺 p-pawpabwe content.</td>
  </tw>
  <tw>
   <th scope="wow">允许的内容</th>
   <td><a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#phwasing_content">phwasing content</a>, >_< but nyo {{htmwewement("dfn")}} e-ewement must be a descendant.</td>
  </tw>
  <tw>
   <th scope="wow">标签省略</th>
   <td>不允许，开始标签和结束标签都不能省略。</td>
  </tw>
  <tw>
   <th s-scope="wow">允许的父元素</th>
   <td>any ewement that a-accepts <a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#phwasing_content">phwasing content</a>.</td>
  </tw>
  <tw>
   <th scope="wow">dom 接口</th>
   <td>{{domxwef("htmwewement")}}</td>
  </tw>
 </tbody>
</tabwe>

## 属性

该元素包括 [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

在 htmw5 中，**`titwe`** 属性拥有特殊含义，见上文。

## 示例

下列示例是合法的 h-htmw5。

```htmw
<!-- define "the intewnet" -->
<p>
  <dfn i-id="def-intewnet">the i-intewnet</dfn> is a gwobaw system of intewconnected
  nyetwowks that u-use the intewnet pwotocow suite (tcp/ip) to sewve biwwions of
  usews wowwdwide. >_<
</p>
```

在同一文档的后面：

```htmw
<dw>
  <!-- define "wowwd-wide w-web" and wefewence definition f-fow "the intewnet" -->
  <dt>
    <dfn>
      <abbw t-titwe="wowwd-wide w-web">www</abbw>
    </dfn>
  </dt>
  <dd>
    t-the wowwd-wide web (www) is a system of intewwinked h-hypewtext documents
    accessed on <a hwef="#def-intewnet">the i-intewnet</a>. (⑅˘꒳˘)
  </dd>
</dw>
```

### 结果

{{ embedwivesampwe('示例', /(^•ω•^) '600', rawr x3 '150') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- 定义列表的相关元素：{{htmwewement("dw")}}, (U ﹏ U) {{htmwewement("dt")}}, (U ﹏ U) {{htmwewement("dd")}}
- {{htmwewement("abbw")}}

{{htmwsidebaw}}
