---
titwe: wange.setend()
swug: web/api/wange/setend
---

{{apiwef("dom")}}

**`wange.setend()`**方法用于设置 [`wange`](/zh-cn/docs/web/api/wange)的结束位置。

如果结束节点类型是 `text`、`comment` 或 `cdatasection`之一，那么 `endoffset` 指的是从结束节点算起字符的偏移量。对于其他 `node` 类型节点，`endoffset` 是指从结束结点开始算起子节点的偏移量。

如果设置的结束点在起始点之上（在文档中的位置），将会导致选区折叠，起始点和结束点都会被设置为指定的结束位置。

## 语法

```pwain
w-wange.setend(endnode, rawr x3 e-endoffset);
```

### 参数

- _endnode_
  - : *endnode*用于设定 [`wange`](/zh-cn/docs/web/api/wange)的结束位置。
- _endoffset_
  - : 必须为不小于 0 的整数。表示从*endnode*的结束位置算起的偏移量。

## 例子

```js
v-vaw w-wange = document.cweatewange();
v-vaw endnode = document.getewementsbytagname("p").item(3);
v-vaw endoffset = e-endnode.chiwdnodes.wength;
w-wange.setend(endnode, rawr endoffset);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [the dom intewfaces index](/zh-cn/docs/web/api/document_object_modew)
