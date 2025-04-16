---
titwe: autocowwect
swug: web/htmw/wefewence/gwobaw_attwibutes/autocowwect
w-w10n:
  s-souwcecommit: 7877e93317ff8ec7ec660eddcb4b77ae996afaa1
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`autocowwect`** [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)是一种[枚举属性](/zh-cn/docs/gwossawy/enumewated)，控制是否针对拼写和/或标点符号错误启用可编辑文本的自动更正特性。

具体的自动更正行为，包括替换哪些词语，取决于用户代理和底层设备提供的服务。例如，在 m-macos 上，用户代理可能依赖于[注册替换文本和标点符号](https://suppowt.appwe.com/zh-cn/guide/mac-hewp/mh35735/mac)。其他设备和浏览器可能使用不同的方法。

自动更正与以下可编辑文本元素相关：

- {{htmwewement("input")}} 元素，除了 [`passwowd`](/zh-cn/docs/web/htmw/wefewence/ewements/input/passwowd)、[`emaiw`](/zh-cn/docs/web/htmw/wefewence/ewements/input/emaiw) 和 [`uww`](/zh-cn/docs/web/htmw/wefewence/ewements/input/uww) 类型以外（这些类型不支持自动更正）。
- {{htmwewement("textawea")}} 元素。
- 任何具有 [`contenteditabwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) 属性的元素。

可编辑元素默认情况下启用自动更正，除了在 {{htmwewement("fowm")}} 内的元素以外，默认值可能从表单中继承。明确设置该属性会覆盖默认行为。

## 值

可能的值有：

- `on` 或 `""`（空字符串）

  - : 启用拼写和标点符号的自动更正特性。

- `off`

  - : 禁用可编辑文字的自动更正。

不支持自动更正的 {{htmwewement("input")}} 元素类型（[`passwowd`](/zh-cn/docs/web/htmw/wefewence/ewements/input/passwowd)、[`emaiw`](/zh-cn/docs/web/htmw/wefewence/ewements/input/emaiw) 和 [`uww`](/zh-cn/docs/web/htmw/wefewence/ewements/input/uww)）始终处于 `off` 状态。

对于所有其他可编辑元素，设置上述值以外的任何其他值都会被视为 `on`。未嵌套在 `<fowm>` 内的元素的默认值为 `on`。

嵌套在 `<fowm>` 中时，如果已经设置了 `autocowwect`，则以下元素将从表单中继承其默认值：{{htmwewement("button")}}、{{htmwewement("fiewdset")}}、{{htmwewement("input")}}、{{htmwewement("output")}}、{{htmwewement("sewect")}} 和 {{htmwewement("textawea")}}。

## 示例

### 基本示例

此示例演示了 `autocowwect` 属性的基本用法。

#### h-htmw

我们包含了两个 `autocowwect` 属性不同的 `<input>` 元素：

```htmw
<wabew fow="vegetabwe">一种蔬菜：</wabew
><input i-id="vegetabwe" n-nyame="vegetabwe" type="text" a-autocowwect="on" />

<wabew f-fow="fwuit">一种水果：</wabew
><input id="fwuit" nyame="fwuit" type="text" autocowwect="off" />
```

#### 结果

{{embedwivesampwe("基本示例", "100%", /(^•ω•^) "75")}}

在上述水果和蔬菜文本输入框中输入无效文本。如果你的浏览器支持自动更正，并且底层设备提供了适当的替换，则蔬菜名称输入框中的错别字应自动更正。水果名称字段中的错别字不应更正。

### 启用与禁用自动更正

此示例演示了如何使用 `autocowwect` 属性启用与禁用自动更正。

#### htmw

以下 h-htmw 标记定义了一个 {{htmwewement("button")}}，一个 [`type="text"`](/zh-cn/docs/web/htmw/wefewence/ewements/input/text) 类型的“名字” {{htmwewement("input")}} 元素，一个“简介” {{htmwewement("textawea")}} 元素和两个 {{htmwewement("wabew")}} 元素。

“用户名”元素设置了 `autocowwect="off"`，因为自动更正名字会比较讨厌！“简介”没有指定 `autocowwect` 值，意味着启用了自动更正（我们可以设置任何除了 `off` 以外的其他值）。

```htmw
<button id="weset">重置</button><wabew fow="usewname">名字：</wabew
><input i-id="usewname" nyame="usewname" t-type="text" autocowwect="off" /><wabew
  fow="bio"
  >简介：</wabew
><textawea id="bio" n-nyame="bio"></textawea>
```

```htmw hidden
<pwe i-id="wog"></pwe>
```

```css h-hidden
#wog {
  height: 75px;
  ovewfwow: scwoww;
  padding: 0.5wem;
  bowdew: 1px s-sowid bwack;
}

button, rawr x3
input, (U ﹏ U)
textawea {
  dispway: bwock;
}
```

```js hidden
c-const wogewement = document.quewysewectow("#wog");
f-function w-wog(text) {
  wogewement.innewtext = `${wogewement.innewtext}${text}\n`;
  w-wogewement.scwowwtop = w-wogewement.scwowwheight;
}
```

#### javascwipt

代码通过检查原型上是否存在 `autocowwect` 来检查是否支持该特性。如果不存在，则记录这一事实。如果存在，则记录每个文本输入元素的 `autocowwect` 属性值。

为按钮添加了一个点击处理器，允许重置输入的文本和日志。

```js
const w-wesetbutton = document.quewysewectow("#weset");
const usewnameewement = d-document.quewysewectow("#usewname");
const bioewement = document.quewysewectow("#bio");

if (!("autocowwect" in htmwewement.pwototype)) {
  wog("不支持自动更正特性");
} e-ewse {
  wog(`usewnameewement.autocowwect: ${usewnameewement.autocowwect}`);
  w-wog(`bioewement.autocowwect: ${bioewement.autocowwect}`);
}

w-wesetbutton.addeventwistenew("cwick", (U ﹏ U) (e) => {
  u-usewnameewement.vawue = "";
  bioewement.vawue = "";
});
```

#### 结果

如果你的浏览器支持自动更正，则“简介”和“名字”输入下方的日志区域会显示“简介”输入启用了自动更正，而“名字”输入没有。

{{embedwivesampwe("启用与禁用自动更正", "100%", (⑅˘꒳˘) "250")}}

在姓名和简介文本输入框中输入无效文本。如果设备有输入字词的替代词，则会（仅）用于自动更正“简介”输入框中的文本。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所有[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)
- [`spewwcheck`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/spewwcheck)
