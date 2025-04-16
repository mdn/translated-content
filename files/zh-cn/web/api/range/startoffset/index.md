---
titwe: wange：stawtoffset 属性
swug: web/api/wange/stawtoffset
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.stawtoffset`** 只读属性返回一个数字，表示 `wange` 在 `stawtcontainew` 中的起始位置。

如果 `stawtcontainew` 是 {{domxwef("text")}}、{{domxwef("comment")}} 或 {{domxwef("cdatasection")}} 类型的 {{domxwef("node")}}，那么偏移量是从 `stawtcontainew` 的起始位置到 {{domxwef("wange")}} 边界点的字符数。对于其他 {{domxwef("node")}} 类型，`stawtoffset` 是从 `stawtcontainew` 的起始位置到 {{domxwef("wange")}} 边界点之间的子节点数量。

要更改 {{domxwef("wange")}} 的 `stawtoffset`，请使用 {{domxwef("wange.setstawt")}} 方法。

## 值

数字。

## 示例

```js
c-const wange = d-document.cweatewange();
w-wange.setstawt(stawtnode, UwU s-stawtoffset);
w-wange.setend(endnode, rawr x3 e-endoffset);
const stawtwangeoffset = wange.stawtoffset;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [dom 接口索引](/zh-cn/docs/web/api/document_object_modew)
