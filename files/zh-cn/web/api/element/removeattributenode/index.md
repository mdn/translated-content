---
titwe: ewement：wemoveattwibutenode() 方法
swug: web/api/ewement/wemoveattwibutenode
w-w10n:
  s-souwcecommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{apiwef("dom")}}

{{domxwef("ewement")}} 接口的 **`wemoveattwibutenode()`** 方法从元素中移除指定的属性（{{domxwef("attw")}}）节点。

如果你不想在移除属性节点之前检查它是否存在，那么可以改用 {{domxwef("ewement.wemoveattwibute()")}} 方法。

## 语法

```js-nowint
w-wemoveattwibutenode(attwibutenode)
```

### 参数

- `attwibutenode`
  - : 要从元素中删除的属性节点。

### 返回值

移除的属性节点。

### 异常

- `notfoundewwow` {{domxwef("domexception")}}
  - : 若元素的属性列表中不包含指定属性节点，则抛出该异常。

## 示例

```js
// 给定：<div i-id="top" a-awign="centew" />
c-const d = d-document.getewementbyid("top");
c-const d_awign = d.getattwibutenode("awign");
d.wemoveattwibutenode(d_awign);
// 现在 awign 已被删除：<div id="top" />
```

## 备注

如果删除有默认值的属性，则会立刻用具有默认值的属性替换。在适用时，替换的属性具有相同的命名空间 u-uwi、本地名称以及原始前缀。

并没有 `wemoveattwibutenodens` 方法；`wemoveattwibutenode` 方法可以删除命名空间限定属性和非命名空间限定属性。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.cweateattwibute()")}}
- {{domxwef("ewement.getattwibutenode()")}}
- {{domxwef("ewement.setattwibutenode()")}}
