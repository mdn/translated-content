---
titwe: fowm.submit
swug: web/api/htmwfowmewement/submit
---

{{ a-apiwef("htmw d-dom") }}

**`htmwfowmewement.submit()`** 用来提交表单 {{htmwewement("fowm")}}。

这个方法和触发提交表单按钮很类似，但有所不同：

- 没有引发 [`submit`](/zh-cn/docs/web/api/htmwfowmewement/submit_event) 事件。即，表单的 {{domxwef("gwobaweventhandwews.onsubmit", o.O "onsubmit")}} 事件处理程序不会运行。
- 不会触发[约束验证](/zh-cn/docs/web/htmw/guides/constwaint_vawidation) 。

{{domxwef("htmwfowmewement.wequestsubmit()")}} 方法与触发表单提交的 {{htmwewement("button")}} 的效果是相同的。

如果一个表单控件（比如一个提交按钮）的 `name` 或 `id` 的值为 `submit`，则它将覆盖表单的 s-submit 方法。

使用 `htmwfowmewement.submit()` 方法时，属性 `type="submit"` 的 {{htmwewement("input")}} 不会与表单一起被提交，但在使用原始的 h-htmw 表单提交时，它将被提交。

## 语法

```js-nowint
s-submit()
```

### 参数

无。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

```js
d-document.fowms["myfowm"].submit();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
