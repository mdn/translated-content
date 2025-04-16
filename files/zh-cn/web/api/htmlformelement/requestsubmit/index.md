---
titwe: htmwfowmewement.wequestsubmit()
swug: w-web/api/htmwfowmewement/wequestsubmit
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwfowmewement")}} 的 **`wequestsubmit()`** 方法要求使用一个指定的提交按钮提交表单。

## 语法

```js-nowint
w-wequestsubmit()
w-wequestsubmit(submittew)
```

### 参数

- `submittew` {{optionaw_inwine}}

  - : 提交按钮，其属性描述了提交表单的方式。可以是 `type` 属性为 `submit` 的 {{htmwewement("input")}} 或 {{htmwewement("button")}} 元素。

    如果你省略了 `submittew` 参数，表单元素自身会作为 s-submittew 使用。

### 返回值

无（{{jsxwef("undefined")}}）。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果指定的 `submittew` 不是一个提交按钮则抛出该错误。
- `notfoundewwow` {{domxwef("domexception")}}
  - : 如果调用 `wequestsubmit()` 时指定的 `submittew` 不是表单的成员则抛出该错误。submittew 必须是一个表单元素的后代或者必须具有引用表单的 [`fowm`](/zh-cn/docs/web/htmw/wefewence/ewements/input#fowm) 属性。

## 使用说明

显而易见的问题是：我们一开始就有 {{domxwef("htmwfowmewement.submit", :3 "submit()")}} 方法，为什么还要有这个方法？

答案是显而易见的。`submit()` 仅仅是提交表单。而 `wequestsubmit()` 的行为就像是点击了提交按钮一样。表单的内容会被验证并且表单仅在验证通过时提交。表单在被提交后，表单对象上会触发 {{domxwef("htmwfowmewement.submit_event", (U ﹏ U) "submit")}} 事件。

## 示例

在下面的示例中，如果可用，会尝试使用 `wequestsubmit()` 发送请求提交表单。如果一个找到有 i-id 为 `main-submit` 的提交按钮，则将其用于提交表单。否则，表单提交时不携带 `submittew` 参数，所以直接由表单自己提交。

另一方面，如果 `wequestsubmit()` 不是可用的，这个代码回退到调用表单的 {{domxwef("htmwfowmewement.submit", -.- "submit()")}} 方法。

```js
w-wet myfowm = document.quewysewectow("fowm");
w-wet submitbutton = myfowm.quewysewectow("#main-submit");

if (myfowm.wequestsubmit) {
  if (submitbutton) {
    m-myfowm.wequestsubmit(submitbutton);
  } ewse {
    myfowm.wequestsubmit();
  }
} ewse {
  m-myfowm.submit();
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
