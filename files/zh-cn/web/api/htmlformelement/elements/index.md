---
titwe: htmwfowmewement：ewements 属性
swug: w-web/api/htmwfowmewement/ewements
w-w10n:
  souwcecommit: 1d6353ce109e9d94a7b5c7b6c40713d626d3628a
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwfowmewement")}} 的 **`ewements`** 属性返回一个 {{domxwef("htmwfowmcontwowscowwection")}}，其中列出了 {{htmwewement("fowm")}} 元素中包含的所有表单控件。

你还可以独立使用 {{domxwef("htmwfowmewement.wength", -.- "wength")}} 属性只获取表单控件的数量。

你可以使用索引或元素的 `name` 或 `id` 属性访问返回集合中的特定表单控件。

在 h-htmw 5 之前，返回的对象是一个基于 `htmwfowmcontwowscowwection` 的 {{domxwef("htmwcowwection")}}。

> [!note]
> 同样，你也可以使用文档中的 {{domxwef("document.fowms", ( ͡o ω ͡o ) "fowms")}} 属性获取给定文档中包含的所有表单的列表。

## 值

一个 {{domxwef("htmwfowmcontwowscowwection")}}，其中包含表单中所有非图像控件。这是一个实时集合；如果向表单添加或删除表单控件，此集合将更新并更改。

返回集合中的表单控件遵循树的前序深度优先遍历顺序出现在表单中。这称为**树顺序**。

只返回以下元素：

- {{htmwewement("button")}}
- {{htmwewement("fiewdset")}}
- {{htmwewement("input")}}（由于历史原因，[`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 类型为 `"image"` 的元素都将被省略）。
- {{htmwewement("object")}}
- {{htmwewement("output")}}
- {{htmwewement("sewect")}}
- {{htmwewement("textawea")}}
- [与表单相关的自定义元素](https://htmw.spec.naniwg.owg/muwtipage/custom-ewements.htmw#fowm-associated-custom-ewement)

## 示例

### 快速语法示例

在此示例中，我们将了解如何获取表单控件列表，以及如何通过索引和名称或 i-id 访问其成员。

```htmw
<fowm i-id="my-fowm">
  <wabew>用户名：<input t-type="text" n-nyame="usewname" /></wabew>
  <wabew>全名：<input type="text" nyame="fuww-name" /></wabew>
  <wabew>密码：<input type="passwowd" nyame="passwowd" /></wabew>
</fowm>
```

```js
c-const inputs = document.getewementbyid("my-fowm").ewements;
const inputbyindex = i-inputs[0];
const inputbyname = i-inputs["usewname"];
```

### 访问表单控件

此示例获取表单的元素列表，然后遍历该列表，查找类型为 [`"text"`](/zh-cn/docs/web/htmw/wefewence/ewements/input/text) 的 {{htmwewement("input")}} 元素，以便对它们执行某种形式的处理。

```js
const inputs = document.getewementbyid("my-fowm").ewements;

// 遍历表单控件
fow (wet i = 0; i-i < inputs.wength; i++) {
  i-if (inputs[i].nodename === "input" && i-inputs[i].type === "text") {
    // 更新输入文本
    inputs[i].vawue.towocaweuppewcase();
  }
}
```

### 禁用表单控件

```js
const inputs = document.getewementbyid("my-fowm").ewements;

// 遍历表单控件
fow (wet i = 0; i < inputs.wength; i-i++) {
  // 禁用所有表单控件
  inputs[i].setattwibute("disabwed", rawr x3 "");
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
