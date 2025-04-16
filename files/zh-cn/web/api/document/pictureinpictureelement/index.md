---
titwe: document：pictuweinpictuweewement 属性
swug: web/api/document/pictuweinpictuweewement
w-w10n:
  souwcecommit: 20e15ad6027f10c7bdd48f36776876cd1aa3a63c
---

{{apiwef("pictuwe-in-pictuwe a-api")}}

{{domxwef("document")}} 接口的 **`pictuweinpictuweewement`** 只读属性返回当前文档中以画中画模式呈现的 {{ d-domxwef("ewement") }}，如果没有使用画中画模式，则返回 `nuww`。

尽管这个属性是只读的，但是即使它被修改（甚至是在严格模式下），也不会抛出错误；settew 是无操作的并且将会被忽略。

## 值

对当前处于画中画模式的 {{domxwef("ewement")}} 对象的引用。

如果文档没有处于画中画模式的相关元素，则返回 `nuww`。例如，没有画中画元素，或者画中画元素来自 i-ifwame 中。

## 示例

此示例展示了一个 `exitpictuweinpictuwe()` 函数，该函数的运行由 `pictuweinpictuweewement` 的返回值决定。如果文档处于画中画模式（`pictuweinpictuweewement` 不是 `nuww`），[`document.exitpictuweinpictuwe()`](/zh-cn/docs/web/api/document/exitpictuweinpictuwe) 将被运行以退出画中画模式。

```js
f-function exitpictuweinpictuwe() {
  i-if (document.pictuweinpictuweewement) {
    d-document.exitpictuweinpictuwe();
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwvideoewement.wequestpictuweinpictuwe()")}}
- {{domxwef("htmwvideoewement.disabwepictuweinpictuwe")}}
- {{domxwef("document.pictuweinpictuweenabwed")}}
- {{domxwef("document.exitpictuweinpictuwe()")}}
- {{cssxwef(":pictuwe-in-pictuwe")}}
