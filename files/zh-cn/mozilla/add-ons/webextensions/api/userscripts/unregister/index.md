---
title: userScripts.unregister()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/unregister
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

注销由扩展注册的用户脚本。

## 语法

```js-nolint
let unregisteringUserScripts = browser.userScripts.unregister(
  filter       // 可选对象
);
```

### 参数

- `filter` {{optional_inline}}
  - : {{WebExtAPIRef("userScripts.UserScriptFilter")}}。要注销的用户脚本 ID 列表。如果未指定，则注销所有用户脚本。

### 返回值

一个 {{JSxRef("Promise")}}，如果用户脚本被注销，则该 promise 将不带参数地兑现。如果请求失败，则该 promise 将以错误消息拒绝。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
