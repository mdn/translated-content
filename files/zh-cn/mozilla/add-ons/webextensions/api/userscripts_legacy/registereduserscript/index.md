---
title: userScripts.RegisteredUserScript（旧版）
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/RegisteredUserScript
l10n:
  sourceCommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

{{AddonSidebar}}

> [!WARNING]
> 本文档针对旧版 `userScripts` API 编写，适用于 Firefox Manifest V2 版本。如希望在 Manifest V3 中使用用户脚本功能，可参见新的 {{WebExtAPIRef("userScripts")}} API。

`RegisteredUserScript` 对象是通过调用 {{WebExtAPIRef("userScripts.register","userScripts.register()")}} 返回的，表示在该调用中注册的用户脚本。

该对象定义了用于注销用户脚本的 {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}} 方法。

> [!NOTE]
> 如果与用户脚本相关联的这一对象被销毁（例如因为超出作用域），则用户脚本将自动注销。因此，只要你仍希望你的用户脚本保持注册状态，你就应该仍然保存好这一对象的引用。

## 方法

- {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}}
  - : 注销由此对象表示的用户脚本。

## 浏览器兼容性

{{Compat}}
