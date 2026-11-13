---
title: pkcs11.getModuleSlots()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/getModuleSlots
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

枚举模块中的插槽。此函数返回包含所有插槽条目的数组。其中的各个条目包含插槽的名称，以及令牌的相关信息（如果插槽包含令牌）。

你只能对已在 Firefox 中安装的模块调用此函数。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let getting = browser.pkcs11.getModuleSlots(
  name              // 字符串
)
```

### 参数

- `name`
  - : `string`。模块名称。此名称必须与模块的 [PKCS #11 清单](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#pkcs_11_清单)中的 `name` 属性相匹配。

### 返回值

将被兑现为一个对象数组，且每个对象代表模块提供访问的插槽之一的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。每个对象有两个属性：

- `name`：插槽的名称
- `token`：如果此插槽中存在令牌，则为 `Token` 对象，否则该属性将为 `null`。

`Token` 对象具有以下属性：

- `name`
  - : `string`。令牌的名称。
- `manufacturer`
  - : `string`。令牌的制造商名称。
- `HWVersion`
  - : `string`。作为 PKCS #11 版本号的硬件版本（两个用点分隔的 32 位整数，如“1.0”）。
- `FWVersion`
  - : `string`。作为 PKCS #11 版本号的固件版本（两个用点分隔的 32 位整数，如“1.0”）。
- `serial`
  - : `string`。序列号，其格式由令牌规范定义。
- `isLoggedIn`
  - : `boolean`：如果令牌已登录，则为 `true`，否则为 `false`。

如果无法找到模块或发生其他错误，promise 将以错误消息拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

安装一个模块并列出其插槽及其中包含的令牌：

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
