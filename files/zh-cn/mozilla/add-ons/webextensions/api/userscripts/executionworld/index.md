---
title: userScripts.ExecutionWorld
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/ExecutionWorld
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

通过 {{WebExtAPIRef("userScripts.register()")}} 或 {{WebExtAPIRef("userScripts.update()")}} 注入脚本的执行环境。

## 类型

此类型的值为字符串。可能的值包括：

- `MAIN`

  网页的执行环境。此环境与网页共享，没有隔离。此环境中的脚本无法访问仅内容脚本可用的 API。

  > [!WARNING]
  > 由于缺乏隔离，网页可以检测并干扰执行的代码。因此，除非可以接受网页读取、访问或修改代码逻辑或数据，否则不要使用 `MAIN` 世界。

- `USER_SCRIPT`

  用户脚本的默认执行环境。此环境与页面的上下文和其他 `USER_SCRIPT` 世界隔离。扩展 API 不可用，与内容脚本的 [`ISOLATED` 世界](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/scripting/ExecutionWorld) 不同。当脚本通过 `worldId` 注册时，可以存在多个 `USER_SCRIPT` 世界。可以通过 {{WebExtAPIRef("userScripts.configureWorld()")}} 更改 `USER_SCRIPT` 世界的配置。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
