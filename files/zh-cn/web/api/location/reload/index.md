---
title: location.reload()
slug: Web/API/Location/reload
---

{{ APIRef("HTML DOM") }}

**`location.reload()`** 方法用来刷新当前页面，就像刷新按钮一样。

该方法在跨域调用（执行该方法的脚本文件的域和 {{domxref("Location")}} 对象所在页面的域不同）时，将会抛出 `SECURITY_ERROR` {{domxref("DOMException")}} 异常。有关更多信息，请参阅[浏览器的同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)。

## 语法

```js
location.reload();
```

## location.reload() 没有参数

Firefox 对于该方法支持一个非标准的 [`forceGet` boolean 参数](https://searchfox.org/mozilla-central/source/dom/base/Location.cpp#551) ，当值为 `true` 时，将强制 Firefox 从服务器加载页面资源。但是在其他浏览器中任何参数都是无效的，`location.reload()` 执行时将会忽略它们并且不会有任何效果。

不过你可能会看到在现有的代码中写入 `location.reload(true)` 并假装硬性重新加载在所有浏览器中均生效的使用方式。在 GitHub 中搜索 "`location.reload(true)`" 将会得到 [成千上万个结果](https://github.com/search?q=%22location.reload%28true%29%22&type=code)。所以现在有大量的现有代码中包含它。

由于一些历史的原因，网景浏览器的一些版本添加了对它的支持，显然被继承到了 Firefox 中。并且一度被 W3C Web APIs 工作组作为一个[提案](https://www.w3.org/2005/06/tracker/webapi/issues/69)来考虑添加到 `location.reload()` 中。但是它从未实际实现过。

因此 boolean 参数当前不符合 `location.reload()` 的规范。— 实际上它*从未*成为 `location.reload()` 的规范。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("Location")}} 接口。
- 类似功能的方法：{{domxref("Location.assign()")}} 和 {{domxref("Location.replace()")}}。
