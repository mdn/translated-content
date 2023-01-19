---
title: Navigator.permissions
slug: Web/API/Navigator/permissions
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`permissions`** 是 **`Navigator`** 读属性，返回一个可用于查询或更新某些 APIs（由 [Permissions API](/zh-CN/docs/Web/API/Permissions_API) 覆盖）的权限状态的对象。

## 语法

```plain
permissionsObj = globalObj.navigator.permissions
```

## 值

一个 {{domxref("Permissions")}} 对象。

## 例子

```js
navigator.permissions.query({name:'geolocation'}).then(function(result) {
  if (result.state === 'granted') {
    showMap();
  } else if (result.state === 'prompt') {
    showButtonToEnableMap();
  }
  // 如果被拒绝，请不要做任何操作。
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Permissions API](/zh-CN/docs/Web/API/Permissions_API)
- {{domxref("Navigator")}}
