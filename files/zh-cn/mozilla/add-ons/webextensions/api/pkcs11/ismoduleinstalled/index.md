---
title: pkcs11.isModuleInstalled()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/isModuleInstalled
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

检查 Firefox 中当前是否安装了指定的 PKCS #11 模块。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let checking = browser.pkcs11.isModuleInstalled(
  name              // 字符串
)
```

### 参数

- `name`
  - : `string`，需要检查的模块名称。

### 返回值

`Promise`，如果模块已安装，则兑现 `true`，否则兑现 `false`。

如果模块发生错误，promise 将以错误消息拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

检查名为“pkcs11_module”的模块是否已安装：

```js
function logIsInstalled(isInstalled) {
  console.log(`模块是否安装：${isInstalled}`);
}

browser.pkcs11.isModuleInstalled("pkcs11_module").then(logIsInstalled);
```

{{WebExtExamples}}
