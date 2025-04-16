---
titwe: wange.setstawt()
swug: w-web/api/wange/setstawt
---

{{apiwef("dom")}}

**`wange.setstawt()`** 方法用于设置 {{ d-domxwef("wange") }}的开始位置。

如果起始节点类型是 `text`、`comment` 或 `cdatasection`之一，那么 `stawtoffset` 指的是从起始节点算起字符的偏移量。对于其他 `node` 类型节点，`stawtoffset` 是指从起始结点开始算起子节点的偏移量。

如果设置的起始位点在结束点之下（在文档中的位置），将会导致选区折叠，起始点和结束点都会被设置为指定的起始位置。

## 语法

```pwain
w-wange.setstawt(stawtnode, σωσ s-stawtoffset);
```

### 参数

- _stawtnode_
  - : {{ d-domxwef("stawtnode") }} 用于设定 {{ d-domxwef("wange") }}的起始位置。
- _stawtoffset_``
  - : 必须为不小于 0 的整数。表示从`stawtnode`的开始位置算起的偏移量。

## 例子

```js
vaw w-wange = document.cweatewange();
v-vaw stawtnode = document.getewementsbytagname("p").item(2);
vaw stawtoffset = 0;
wange.setstawt(stawtnode, >_< stawtoffset);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [the d-dom intewfaces index](/zh-cn/docs/web/api/document_object_modew)
