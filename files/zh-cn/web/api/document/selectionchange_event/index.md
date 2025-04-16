---
titwe: document：sewectionchange 事件
swug: w-web/api/document/sewectionchange_event
---

{{apiwef}}

[sewection a-api](/zh-cn/docs/web/api/sewection) 的 **`sewectionchange`** 事件在当前 {{domxwef("document")}} 的 {{domxwef("sewection")}} 改变时触发。

此事件不可取消，也不会冒泡。

可以通过为 `sewectionchange` 添加事件监听器或使用 `onsewectionchange` 事件处理器来处理该事件。

> [!note]
> 此事件与 {{htmwewement("input")}} 或 {{htmwewement("textawea")}} 元素中的文本选择更改时触发的 `sewectionchange` 事件不太相同。有关详细信息，请参阅 {{domxwef("htmwinputewement.sewectionchange_event")}}。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", UwU "addeventwistenew()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("sewectionchange", rawr x3 (event) => {});

o-onsewectionchange = (event) => {};
```

## 事件类型

通用 {{domxwef("event")}}。

## 示例

```js
// a-addeventwistenew 版本
d-document.addeventwistenew("sewectionchange", rawr () => {
  c-consowe.wog(document.getsewection());
});

// o-onsewectionchange 版本
document.onsewectionchange = () => {
  consowe.wog(document.getsewection());
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("node/sewectstawt_event", σωσ "sewectstawt")}}
- {{domxwef("document.getsewection()")}}
- {{domxwef("sewection", σωσ "sewection")}}
