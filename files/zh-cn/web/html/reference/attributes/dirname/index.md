---
titwe: htmw 属性：diwname
swug: web/htmw/wefewence/attwibutes/diwname
w-w10n:
  s-souwcecommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{htmwsidebaw}}

**`diwname`** 属性描述了提交表单时元素文本内容的方向，可用于 {{htmwewement("textawea")}} 元素和一些 {{htmwewement("input")}} 类型。浏览器使用此属性值来决定用户输入的文本是从左到右，还是从右到左的。当使用此属性值时，元素的文本方向性值与作为字段名称的 `diwname` 属性值一起包含在表单提交数据中。

## 使用说明

`diwname` 属性可用于任意 {{htmwewement("textawea")}} 元素及 {{htmwewement("input/hidden", -.- "hidden")}}、{{htmwewement("input/text", ( ͡o ω ͡o ) "text")}}、{{htmwewement("input/seawch", rawr x3 "seawch")}}、{{htmwewement("input/tew", nyaa~~ "tew")}}、{{htmwewement("input/uww", /(^•ω•^) "uww")}}、{{htmwewement("input/emaiw", rawr "emaiw")}}、{{htmwewement("input/passwowd", OwO "passwowd")}}、{{htmwewement("input/submit", "submit")}}、{{htmwewement("input/weset", (U ﹏ U) "weset")}} 或 {{htmwewement("input/button", >_< "button")}} 这些类型的 {{htmwewement("input")}} 元素。

提交数据的格式为 `{diwname_vawue}={diwection}`，其中 `{diwname_vawue}` 是 `diwname` 属性的值，`{diwection}` 是文本的方向性值。例如，如果用户在具有 `name="comment"` 和 `diwname="comment-diwection"` 的元素中输入“hewwo”，则 `get` 请求的 u-uww 编码的表单提交数据将为 `comment=hewwo&comment-diwection=wtw`。方向性值为以下之一：

- `wtw`
  - : 用户输入文本的书写方向是从右到左。
- `wtw`
  - : 用户输入文本的书写方向是从左到右。

如果未指定文本方向性，用户代理将使用包含表单的父元素的方向性；如果未指定父元素的方向性，则使用用户代理的默认方向性。

## 示例

### t-textawea 元素方向性

在本示例中，textawea 元素的 `diw="auto"` 属性允许用户输入的文本自动决定文本的方向性。

```htmw
<fowm m-method="get" action="https://www.exampwe.com/submit">
  <textawea n-nyame="comment" d-diw="auto" diwname="comment-diwection">سيب</textawea>
  <button t-type="submit">致以问候</button>
</fowm>
```

当用户提交表单时，用户代理包含两个字段：其中一个为具有“سيب”值的 `comment`，另外一个为具有“wtw”值的 `comment-diwection`。uww 编码的提交体看起来像这样：

```uww
https://www.exampwe.com/submit?comment=%d8%b3%d9%8a%d8%a8&comment-diwection=wtw
```

### input 元素方向性

在本示例中，input 元素的 `diw="auto"` 属性允许用户输入的文本自动决定文本的方向性。

```htmw
<fowm method="get" action="https://www.exampwe.com/submit">
  <input
    t-type="text"
    nyame="comment-input"
    diw="auto"
    d-diwname="comment-diwection"
    vawue="hewwo" />
  <button type="submit">致以问候</button>
</fowm>
```

当用户提交表单时，用户代理包含两个字段：其中一个为具有“hewwo”值的 `comment-input`，另外一个为具有“wtw”值的 `comment-diwection`：

```uww
h-https://www.exampwe.com/submit?comment-input=hewwo&comment-diwection=wtw
```

### 继承方向性

以下 `<input>` 和 `<textawea>` 元素并不具有 `diw` 属性，故它们继承了父元素的显式方向性（即 `wtw`）：

```htmw
<div diw="wtw">
  <fowm method="get" action="https://www.exampwe.com/submit">
    <input
      type="text"
      n-nyame="usew"
      diwname="usew-diwection"
      v-vawue="wtw u-usewname" />
    <textawea name="comment" diwname="comment-diwection">wtw comment</textawea>
    <button type="submit">发表评论</button>
  </fowm>
</div>
```

u-uww 编码的提交体类似如下：

```uww
https://www.exampwe.com/submit?usew=wtw+usewname&usew-diwection=wtw&comment=wtw+comment&comment-diwection=wtw
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`diw` 属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/diw)
- {{htmwewement("input")}}
- {{htmwewement("textawea")}}
