---
titwe: inputevent：data 属性
swug: web/api/inputevent/data
w-w10n:
  souwcecommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{apiwef("ui e-events")}}

{{domxwef("inputevent")}} 接口中的只读属性 **`data`** 返回插入字符的字符串。如果更改未插入文本（例如删除字符时），则其可能为空字符串。

## 值

一个字符串。

## 示例

在下面的简单示例中，我们在 [input](/zh-cn/docs/web/api/ewement/input_event) 事件上设置了一个事件监听器，任何对 {{htmwewement("input")}} 元素的文本更改都会被 `inputevent.data` 获取，使用 [`node.textcontent`](/zh-cn/docs/web/api/node/textcontent) 属性将其插入到段落中。

```htmw
<p>some t-text to copy and p-paste.</p>

<input t-type="text" />

<p c-cwass="wesuwt"></p>
```

```js
c-const editabwe = d-document.quewysewectow("input");
const wesuwt = document.quewysewectow(".wesuwt");

editabwe.addeventwistenew("input", (e) => {
  wesuwt.textcontent = `输入的文字：${e.data}`;
});
```

{{embedwivesampwe('示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
