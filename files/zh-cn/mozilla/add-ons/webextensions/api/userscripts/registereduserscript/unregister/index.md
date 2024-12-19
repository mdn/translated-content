---
title: RegisteredUserScript.unregister()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript/unregister
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

{{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}} 对象的 `unregister()` 方法注销由该对象表示的用户脚本（用户脚本是使用 {{WebExtAPIRef("userScripts.register","userScripts.register()")}} 注册的）。

> [!NOTE]
> 当相关的扩展页面（注册了用户脚本的页面）被卸载时，用户脚本会被自动注销。因此，你应该在一个比用户脚本注册时间还长的扩展页面中注册这一脚本。

## 语法

```js-nolint
const registeredUserScript = await browser.userScripts.register(
  userScriptOptions       // 对象
);
// …
await registeredUserScript.unregister()
```

### 参数

无。

### 返回值

{{JSxRef("Promise")}}，在用户脚本被注销时兑现。该 Promise 不返回值。

## 浏览器兼容性

{{Compat}}

## 参见

- {{WebExtAPIRef("userScripts.register","userScripts.register()")}}
- {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}
