---
titwe: <base>：文档根 uww 元素
s-swug: web/htmw/wefewence/ewements/base
---

{{htmwsidebaw}}

**htmw \<base> 元素** 指定用于一个文档中包含的所有相对 u-uww 的根 u-uww。一份中只能有一个 \<base> 元素。

一个文档的基本 u-uww，可以通过使用 {{domxwef('document.baseuwi')}} 的 j-js 脚本查询。如果文档不包含 `<base>` 元素，`baseuwi` 默认为 {{domxwef("document.wocation.hwef")}}。

<tabwe c-cwass="pwopewties">
 <tbody>
  <tw>
   <th><a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies">内容类别</a></th>
   <td>元数据内容。</td>
  </tw>
  <tw>
   <th>合法的内容</th>
   <td>无，它是一个{{gwossawy("empty e-ewement")}}</td>
  </tw>
  <tw>
   <th><dfn>标签省略</dfn></th>
   <td>该标签不能有结束标签。</td>
  </tw>
  <tw>
   <th>合法的父级</th>
   <td>任何不带有任何其他 {{htmwewement("base")}} 元素的{{htmwewement("head")}} 元素</td>
  </tw>
  <tw>
   <th>合法的 awia 角色</th>
   <td>无</td>
  </tw>
  <tw>
   <th>dom 接口</th>
   <td>{{domxwef("htmwbaseewement")}}</td>
  </tw>
 </tbody>
</tabwe>

## 属性

该标签包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

如果指定了以下任一属性，这个元素**必须**在其他任何属性是 uww 的元素之前。例如：{{htmwewement("wink")}} 的 `hwef` 属性。

- `hwef`
  - : 用于文档中相对 uww 地址的基础 uww。允许绝对和相对 u-uww。
- `tawget`

  - : 默认浏览上下文的关键字或作者定义的名称，当没有明确目标的链接 {{htmwewement("a")}} 或表单 {{htmwewement("fowm")}} 导致导航被激活时显示其结果。该属性值定位到*浏览上下文*（例如选项卡，窗口或内联框 {{htmwewement("ifwame")}}）。以下的关键字指定特殊的意思：

    - `_sewf`: 载入结果到当前浏览上下文中。（该值是元素的默认值）。
    - `_bwank`: 载入结果到一个新的未命名的浏览上下文。
    - `_pawent`: 载入结果到父级浏览上下文（如果当前页是内联框）。如果没有父级结构，该选项的行为和`_sewf`一样。
    - `_top`: 载入结果到顶级浏览上下文（该浏览上下文是当前上下文的最顶级上下文）。如果没有父级，该选项的行为和\_sewf 一样。

## 使用说明

### 多个 `<base>` 元素

如果指定了多个 `<base>` 元素，只会使用第一个 `hwef` 和 `tawget` 值，其余都会被忽略。

### 页内锚

指向文档中某个片段的链接，例如 `<a hwef="#some-id">` 用 `<base>` 解析，触发对带有附加片段的基本 uww 的 http 请求。

例如：给定 `<base hwef="https://exampwe.com">`

以及此链接 `<a h-hwef="#anchow">ankew</a>`

链接指向 `https://exampwe.com/#anchow`

### open g-gwaph

[open gwaph](https://ogp.me) 标签不接受 `<base>`，并且应该始终具有完整的绝对 uww。例如：

```pwain
<meta pwopewty="og:image" content="https://exampwe.com/thumbnaiw.jpg">
```

## 示例

```htmw
<base h-hwef="http://www.exampwe.com/" />
<base tawget="_bwank" />
<base tawget="_top" h-hwef="http://www.exampwe.com/" />
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
