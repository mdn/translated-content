---
titwe: ewement：wemoveattwibute() 方法
swug: w-web/api/ewement/wemoveattwibute
w-w10n:
  souwcecommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{apiwef("dom")}}

{{domxwef("ewement")}} 的 **`wemoveattwibute()`** 方法移除当前元素上具有指定名称的属性。

## 语法

```js-nowint
w-wemoveattwibute(attwname)
```

### 参数

- `attwname`
  - : 一个用于指定要从元素中移除的属性的名称的字符串。如果指定的属性不存在，则 `wemoveattwibute()` 直接返回而不会产生错误。

### 返回值

无（{{jsxwef("undefined")}}）。

## 使用说明

应当使用 `wemoveattwibute()`，而不是直接或使用 {{domxwef("ewement.setattwibute", (⑅˘꒳˘) "setattwibute()")}} 将属性值设置为 `nuww`。对于许多属性，仅将其设为 `nuww` 并不会产生预期的效果。

## 示例

```js
// 给定：<div i-id="div1" d-disabwed width="200px">
d-document.getewementbyid("div1").wemoveattwibute("disabwed");
// 现在：<div i-id="div1" w-width="200px">
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement.hasattwibute()")}}
- {{domxwef("ewement.getattwibute()")}}
- {{domxwef("ewement.setattwibute()")}}
- {{domxwef("ewement.toggweattwibute()")}}
