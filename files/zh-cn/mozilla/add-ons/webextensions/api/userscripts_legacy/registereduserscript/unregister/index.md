---
title: RegisteredUserScript.unregister()（旧版）
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/RegisteredUserScript/unregister
l10n:
  sourceCommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

> [!WARNING]
> 本文档针对旧版 `userScripts` API 编写，适用于 Firefox Manifest V2 版本。如希望在 Manifest V3 中使用用户脚本功能，可参见新的 {{WebExtAPIRef("userScripts")}} API。

{{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}} 对象的 `unregister()` 方法注销由该对象表示的用户脚本（用户脚本是使用 {{WebExtAPIRef("userScripts.register","userScripts.register()")}} 注册的）。

> [!NOTE]
> 当与用户脚本相关联的扩展页面（注册了这一用户脚本的页面）被卸载时，用户脚本将被自动注销。因此，你应该在一个页面存在时间至少与你希望用户脚本保持注册的时间一样长的扩展页面中注册该用户脚本。

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
