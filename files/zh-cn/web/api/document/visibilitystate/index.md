---
title: Document.visibilityState
slug: Web/API/Document/visibilityState
---

{{ ApiRef("DOM") }}

**`Document.visibilityState`** （只读属性）, 返回{{domxref('document')}}的可见性，即当前可见元素的上下文环境。由此可以知道当前文档 (即为页面) 是在背后，或是不可见的隐藏的标签页，或者 (正在) 预渲染。可用的值如下：

- `'visible'` : 此时页面内容至少是部分可见。即此页面在前景标签页中，并且窗口没有最小化。
- `'hidden`' : 此时页面对用户不可见。即文档处于背景标签页或者窗口处于最小化状态，或者操作系统正处于 '锁屏状态' .
- `'prerender'` : 页面此时正在渲染中，因此是不可见的 (considered hidden for purposes of `document.hidden`). 文档只能从此状态开始，永远不能从其他值变为此状态。注意：浏览器支持是可选的。

当此属性的值改变时，会递交 [`visibilitychange`](/zh-CN/docs/Web/API/Document/visibilitychange_event) 事件给{{domxref("Document")}}.

典型用法是防止当页面正在渲染时加载资源，或者当页面在背景中或窗口最小化时禁止某些活动。

## 语法

```plain
var string = document.visibilityState
```

## 示例

```js
document.addEventListener("visibilitychange", function () {
  console.log(document.visibilityState);
  // Modify behavior...
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
