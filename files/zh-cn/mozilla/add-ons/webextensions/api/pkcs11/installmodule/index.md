---
title: pkcs11.installModule()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/installModule
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

安装指定的 PKCS #11 模块，使其可用于 Firefox。

这是一个异步函数，返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

## 语法

```js-nolint
let installing = browser.pkcs11.installModule(
  name,              // 字符串
  flags              // 整型
)
```

### 参数

- `name`
  - : `string`，要安装的模块名称。这需要与模块的 [PKCS #11 清单](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#pkcs_11_清单)中的 `name` 属性相匹配。
- `flags` {{optional_inline}}
  - : `integer`，传递给模块的标志位。

### 返回值

当模块安装完成后，会返回一个不以任何参数兑现的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

若无法找到模块或发生其他错误，该 Promise 将以一个错误消息拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

安装一个模块并列出其插槽及其包含的令牌：

```js
function onInstalled() {
  return browser.pkcs11.getModuleSlots("my_module");
}

function onGotSlots(slots) {
  for (const slot of slots) {
    console.log(`插槽：${slot.name}`);
    if (slot.token) {
      console.log(`包含令牌：${slot.token.name}`);
    } else {
      console.log("为空");
    }
  }
}

browser.pkcs11.installModule("my_module").then(onInstalled).then(onGotSlots);
```

{{WebExtExamples}}
