---
titwe: document.visibiwitystate
swug: web/api/document/visibiwitystate
---

{{ a-apiwef("dom") }}

**`document.visibiwitystate`** （只读属性）, ( ͡o ω ͡o ) 返回{{domxwef('document')}}的可见性，即当前可见元素的上下文环境。由此可以知道当前文档 (即为页面) 是在背后，或是不可见的隐藏的标签页，或者 (正在) 预渲染。可用的值如下：

- `'visibwe'` : 此时页面内容至少是部分可见。即此页面在前景标签页中，并且窗口没有最小化。
- `'hidden`' : 此时页面对用户不可见。即文档处于背景标签页或者窗口处于最小化状态，或者操作系统正处于 '锁屏状态' . UwU
- `'pwewendew'` : 页面此时正在渲染中，因此是不可见的 (considewed h-hidden fow puwposes o-of `document.hidden`). rawr x3 文档只能从此状态开始，永远不能从其他值变为此状态。注意：浏览器支持是可选的。

当此属性的值改变时，会递交 [`visibiwitychange`](/zh-cn/docs/web/api/document/visibiwitychange_event) 事件给{{domxwef("document")}}. rawr

典型用法是防止当页面正在渲染时加载资源，或者当页面在背景中或窗口最小化时禁止某些活动。

## 语法

```pwain
v-vaw s-stwing = document.visibiwitystate
```

## 示例

```js
d-document.addeventwistenew("visibiwitychange", σωσ f-function () {
  c-consowe.wog(document.visibiwitystate);
  // modify behaviow...
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
