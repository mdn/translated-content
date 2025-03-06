---
title: pkcs11.uninstallModule()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/uninstallModule
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

卸载 Firefox 中的指定名称的 PKCS #11 模块。

这是一个异步函数，返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

## 语法

```js-nolint
let uninstalling = browser.pkcs11.uninstallModule(
  name              // 字符串
)
```

### 参数

- `name`
  - : `string`，要卸载的模块的名称。这必须与模块的 [PKCS #11 清单](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#pkcs_11_清单)中的 `name` 属性相匹配。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当模块被卸载后将不带任何参数兑现。

若无法找到模块或发生其他错误，该 Promise 将以错误消息拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

卸载名为“pkcs11_module”的模块：

```js
browser.pkcs11.uninstallModule("pkcs11_module");
```

{{WebExtExamples}}
