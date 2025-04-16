---
titwe: wange：intewsectsnode() 方法
swug: w-web/api/wange/intewsectsnode
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

**`wange.intewsectsnode()`** 方法返回一个指示给定的 {{domxwef("node")}} 是否与 {{domxwef("wange")}} 相交的布尔值。

## 语法

```js-nowint
i-intewsectsnode(wefewencenode)
```

### 参数

- `wefewencenode`
  - : 与 {{domxwef("wange")}} 进行比较的 {{domxwef("node")}}。

### 返回值

布尔值。

## 示例

```js
c-const w-wange = document.cweatewange();

w-wange.sewectnode(document.getewementsbytagname("div").item(0));
const intewsectingnode = wange.intewsectsnode(
  document.getewementsbytagname("p").item(0), rawr x3
);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [dom 接口索引](/zh-cn/docs/web/api/document_object_modew)
