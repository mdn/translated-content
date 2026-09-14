---
title: userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts
l10n:
  sourceCommit: 3d283cb0a0c6f36ad09ca95f751a30bd3a1fcf4d
---

使用此 API 注册用户脚本，即那些设计用于操作网页或提供新特性的第三方脚本。注册用户脚本会指示浏览器将脚本附加到与注册期间指定的 URL 模式匹配的页面上。

> [!NOTE]
> 本文档针对新版 API 编写，适用于 Firefox Manifest V3 版本。参见 {{WebExtAPIRef("userScripts_legacy","userScripts（旧版）")}}以获取有关可用于 Firefox Manifest V2 的 API。

此 API 提供类似 {{WebExtAPIRef("scripting")}} 的功能，但包含一些专为处理第三方脚本而设计的特性。

## 权限

要使用此 API，你需要 `userScripts` 权限以及你想要运行脚本的站点的 [`host_permissions`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions)。但是，允许使用此 API 的方法因浏览器而异：

- 在 Firefox 中，`userScripts` 是在 `optional_permissions` 清单键中声明的[仅限可选权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions#仅限可选权限)。你的扩展必须通过检查 `userScripts` API 命名空间是否存在或使用 {{WebExtAPIRef("permissions.contains()")}} 来检查是否被授予该权限，如果没有授予，请使用 {{WebExtAPIRef("permissions.request()")}} 来请求它。
- 在 Chrome 中，`userScripts` 是声明在 [`permissions` 清单键](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)中的安装时请求的权限。但是，要启用此 API，用户必须[在 Chrome 中启用开发者环境](https://developer.chrome.google.cn/docs/extensions/reference/api/userScripts#developer_mode_for_extension_users)。

## 运行环境

当用户脚本被注册或更新（使用 {{WebExtAPIRef("userScripts.register()")}} 或 {{WebExtAPIRef("userScripts.update()")}}）时，你的扩展可以将其设置为在隔离的 `USER_SCRIPT` 环境（world）或 `MAIN` 环境中运行。

`USER_SCRIPT` 环境提供了隔离的运行环境，无法访问宿主页面和其他扩展。这种隔离与[内容脚本环境](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#内容脚本环境)类似，除了 `USER_SCRIPT` 环境不能访问扩展 API。

用户脚本可以共享 `USER_SCRIPT` 环境，也可以通过设置 {{WebExtAPIRef("userScripts.RegisteredUserScript", "RegisteredUserScript")}} 的 `worldId` 属性将自己隔离在 `USER_SCRIPT` 环境中。此 API 允许扩展使用 {{WebExtAPIRef("userScripts.configureWorld()")}} 配置 `USER_SCRIPT` 环境的内容安全策略（CSP）。

在 `MAIN` 环境中，宿主页面和其他扩展可以访问正在运行的用户脚本。`MAIN` 环境不支持 `worldId` 属性。

这些执行环境的值定义于 {{WebExtAPIRef("userScripts.ExecutionWorld","ExecutionWorld")}} 中。

## 消息

与内容脚本和其他扩展脚本类似，用户脚本通过 {{WebExtAPIRef("runtime.sendMessage()")}} 和 {{WebExtAPIRef("runtime.connect()")}} 使用消息来与扩展的其他部分通信。但是，扩展使用专用的 {{WebExtAPIRef("runtime.onUserScriptMessage")}} 和 {{WebExtAPIRef("runtime.onUserScriptConnect")}} 来接收消息。专用的处理器使得来自用户脚本（更不受信的上下文）的消息更易被识别。

要启用消息 API，在注册用户脚本之前，请调用 {{WebExtAPIRef("userScripts.configureWorld()")}} 并将 `messaging` 参数设置为 `true`。

```js
browser.userScripts.configureWorld({
  messaging: true,
});
```

## 扩展更新

当扩展更新时，用户脚本会被清除。要恢复脚本，请在扩展的 {{WebExtAPIRef("runtime.onInstalled")}} 事件处理器中添加响应 `"update"` 原因的代码。

## 类型

- {{WebExtAPIRef("userScripts.ExecutionWorld")}}
  - : 使用 {{WebExtAPIRef("userScripts.register()")}} 或 {{WebExtAPIRef("userScripts.update()")}} 注入的脚本的运行环境。
- {{WebExtAPIRef("userScripts.RegisteredUserScript")}}
  - : 一个由 {{WebExtAPIRef("userScripts.getScripts","getScripts()")}} 返回的对象（`object`），表示注册的用户脚本，用作 {{WebExtAPIRef("userScripts.register","register()")}} 和 {{WebExtAPIRef("userScripts.update","update()")}} 的输入。
- {{WebExtAPIRef("userScripts.ScriptSource")}}
  - : 用作用户脚本的代码或文件的源。
- {{WebExtAPIRef("userScripts.UserScriptFilter")}}
  - : 用户脚本列表，被 {{WebExtAPIRef("userScripts.getScripts()")}} 和 {{WebExtAPIRef("userScripts.unregister()")}} 所使用。
- {{WebExtAPIRef("userScripts.WorldProperties")}}
  - : 一个 `USER_SCRIPT` 运行环境的配置。

## 方法

- {{WebExtAPIRef("userScripts.configureWorld()")}}
  - : 配置一个扩展的 `USER_SCRIPT` 运行环境。
- {{WebExtAPIRef("userScripts.getScripts()")}}
  - : 返回由扩展注册的用户脚本。
- {{WebExtAPIRef("userScripts.getWorldConfigurations()")}}
  - : 返回扩展注册的所有环境配置。
- {{WebExtAPIRef("userScripts.register()")}}
  - : 为扩展注册用户脚本。
- {{WebExtAPIRef("userScripts.resetWorldConfiguration()")}}
  - : 重置由扩展注册的 `USER_SCRIPT` 环境的配置。
- {{WebExtAPIRef("userScripts.unregister()")}}
  - : 注销由扩展注册的用户脚本。
- {{WebExtAPIRef("userScripts.update()")}}
  - : 更新由扩展注册的用户脚本。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{WebExtAPIRef("scripting","browser.scripting")}}
