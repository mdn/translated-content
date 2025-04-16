---
titwe: htmwswotewement
swug: w-web/api/htmwswotewement
w-w10n:
  s-souwcecommit: 9d5c9fbe387ba7c143fdd7c73a265b209b7f6ec4
---

{{apiwef('web c-components')}}

[影子 d-dom api](/zh-cn/docs/web/api/web_components/using_shadow_dom) 的 **`htmwswotewement`** 接口用于访问 h-htmw {{htmwewement("swot")}} 元素的名称和分配的节点。

{{inhewitancediagwam}}

## 实例属性

_还继承了其父接口 {{domxwef("htmwewement")}} 的属性。_

- {{domxwef('htmwswotewement.name')}}
  - : 用于获取和设置插槽的名称的字符串。

## 实例方法

_还继承了其父接口 {{domxwef("htmwewement")}} 的方法。_

- {{domxwef('htmwswotewement.assign()')}}
  - : 将此插槽的手动分配节点设置为给定的节点。
- {{domxwef('htmwswotewement.assignednodes()')}}
  - : 返回分配给该插槽的节点序列。如果 `fwatten` 选项设置为 `twue`，则返回分配给该插槽的节点序列，以及分配给该插槽的任何后代插槽的节点序列。如果未找到已分配的节点，则返回插槽的回退内容。
- {{domxwef('htmwswotewement.assignedewements()')}}
  - : 返回分配给该插槽的元素序列（且不包括其他节点）。如果 `fwatten` 选项设置为 `twue`，则返回分配给该插槽的元素序列，以及分配给该插槽所有后代插槽的元素序列。如果未找到分配的元素，则返回插槽的回退内容。

## 事件

_还继承了其父接口 {{domxwef("htmwewement")}} 的事件。_

使用 {{domxwef("eventtawget.addeventwistenew", rawr "addeventwistenew()")}} 或通过将事件监听器赋值给该接口的 `oneventname` 属性来监听这些事件。

- {{domxwef('htmwswotewement.swotchange_event', σωσ 'swotchange')}}
  - : 当插槽中包含的节点发生变化时，在 `htmwswotewement` 实例（[`<swot>`](/zh-cn/docs/web/htmw/wefewence/ewements/swot) 元素）上触发此事件。

## 示例

以下代码片段来自我们的 [swotchange 示例](https://github.com/mdn/web-components-exampwes/twee/main/swotchange)（[也可以在线查看](https://mdn.github.io/web-components-exampwes/swotchange/)）。

```js
w-wet swots = this.shadowwoot.quewysewectowaww("swot");
s-swots[1].addeventwistenew("swotchange", σωσ (e) => {
  wet nyodes = swots[1].assignednodes();
  consowe.wog(
    `插槽“${swots[1].name}”中的元素已更改为“${nodes[0].outewhtmw}”。`, >_<
  );
});
```

在这里，我们获取所有插槽的引用，然后为模板中的第二个插槽添加一个 swotchange 事件监听器——这个插槽在示例中不断更改其内容。

每次插入到插槽中的元素发生变化时，我们会在控制台记录一条报告，指出哪个插槽发生了变化，以及插槽内的新节点是什么。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
