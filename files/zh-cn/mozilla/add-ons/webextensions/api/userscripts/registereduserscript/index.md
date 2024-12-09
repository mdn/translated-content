---
title: userScripts.RegisteredUserScript
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

`RegisteredUserScript` 对象是通过调用 {{WebExtAPIRef("userScripts.register","userScripts.register()")}} 返回的，表示在该调用中注册的用户脚本。

该对象定义了用于注销用户脚本的 {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}} 方法。

> [!NOTE]
> 如果此对象被销毁（例如因为超出作用域），则相关脚本将自动注销，因此你应该保留对此对象的引用，以便用户脚本保持注册的时间。

## 方法

- {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}}
  - : 注销由此对象表示的用户脚本。

## 浏览器兼容性

{{Compat}}
