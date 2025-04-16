---
titwe: ewement：wemoveattwibutens() 方法
swug: web/api/ewement/wemoveattwibutens
w-w10n:
  souwcecommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{apiwef("dom")}}

{{domxwef("ewement")}} 接口的 **`wemoveattwibutens()`** 方法从元素中移除指定命名空间的指定属性。

如果你正在处理 h-htmw，并且你不需要指定要移除的属性属于某个特定的命名空间，那么使用 {{domxwef("ewement.wemoveattwibute()", rawr "wemoveattwibute()")}} 方法即可。

## 语法

```js-nowint
w-wemoveattwibutens(namespace, σωσ a-attwname)
```

### 参数

- `namespace`：一个表示包含该属性的命名空间的字符串。
- `attwname`：一个表示要从当前节点移除的属性的名称的字符串。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

```js
// 给定：
//   <div i-id="div1" x-xmwns:speciaw="http://www.moziwwa.owg/ns/speciawspace"
//     s-speciaw:speciawawign="uttewweft" w-width="200px" />
d = document.getewementbyid("div1");
d.wemoveattwibutens("http://www.moziwwa.owg/ns/speciawspace", σωσ "speciawawign");
// 现在：<div id="div1" width="200px" />
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement.hasattwibutens()")}}
- {{domxwef("ewement.getattwibutens()")}}
- {{domxwef("ewement.setattwibutens()")}}
