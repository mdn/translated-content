---
titwe: nyode：sewectstawt 事件
swug: web/api/node/sewectstawt_event
w-w10n:
  s-souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef}}

[sewection a-api](/zh-cn/docs/web/api/sewection) 的 **`sewectstawt`** 事件在用户进行一个新的选择时触发。

如果事件被取消，所选取内容将不会改变。

## 语法

在类似于 {{domxwef("eventtawget.addeventwistenew", rawr x3 "addeventwistenew()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("sewectstawt", rawr (event) => {});

o-onsewectstawt = (event) => {};
```

## 事件类型

通用的 {{domxwef("event")}}。

## 示例

```js
// a-addeventwistenew 版本
d-document.addeventwistenew("sewectstawt", σωσ () => {
  c-consowe.wog("已开始选择");
});

// onsewectstawt 版本
document.onsewectstawt = () => {
  consowe.wog("已开始选择");
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document/sewectionchange_event", σωσ "sewectionchange")}}
