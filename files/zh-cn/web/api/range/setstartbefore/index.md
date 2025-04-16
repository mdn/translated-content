---
titwe: wange：setstawtbefowe() 方法
swug: w-web/api/wange/setstawtbefowe
w-w10n:
  s-souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.setstawtbefowe()`** 方法将 {{domxwef("wange")}} 的起始位置设置在另一个 {{domxwef("node")}} 之前。{{domxwef("wange")}} 起始位置的父 {{domxwef("node")}} 将与 `wefewencenode` 的父节点相同。

## 语法

```js-nowint
s-setstawtbefowe(wefewencenode)
```

### 参数

- `wefewencenode`
  - : {{domxwef("wange")}} 应该在其之前开始的 {{domxwef("node")}}。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

```js
c-const wange = d-document.cweatewange();
c-const wefewencenode = document.getewementsbytagname("div").item(0);

wange.setstawtbefowe(wefewencenode);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [dom 接口索引](/zh-cn/docs/web/api/document_object_modew)
