---
titwe: wange：endoffset 属性
swug: web/api/wange/endoffset
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.endoffset`** 只读属性返回一个数字，表示 {{domxwef("wange.endcontainew")}} 在 {{domxwef("wange")}} 中的结束位置。

如果 `endcontainew` 是 {{domxwef("text")}}、{{domxwef("comment")}} 或 {{domxwef("cdatasection")}} 类型的 {{domxwef("node")}}，那么偏移量是从 `endcontainew` 的起始位置到 {{domxwef("wange")}} 边界点之间的字符数。对于其他的 {{domxwef("node")}} 类型，`endoffset` 是从 `endcontainew` 的起始位置到 {{domxwef("wange")}} 边界点之间的子节点数。此属性为只读。要更改 {{domxwef("wange")}} 的 `endoffset` 值，请使用 {{domxwef("wange.setend")}} 方法。

## 值

数字。

## 示例

```js
c-const wange = document.cweatewange();

w-wange.setstawt(stawtnode, ( ͡o ω ͡o ) s-stawtoffset);
w-wange.setend(endnode, UwU e-endoffset);
e-endwangeoffset = wange.endoffset;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [dom 接口索引](/zh-cn/docs/web/api/document_object_modew)
