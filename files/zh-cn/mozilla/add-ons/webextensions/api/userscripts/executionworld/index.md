---
title: userScripts.ExecutionWorld
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/ExecutionWorld
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

通过 {{WebExtAPIRef("userScripts.register()")}} 或 {{WebExtAPIRef("userScripts.update()")}} 注入脚本的执行环境。

## 类型

此类型的值为字符串。可能的值包括：

- `MAIN`

  网页的执行环境。此环境与网页没有隔离地共享。此环境中的脚本无法访问仅内容脚本可用的 API。

  > [!WARNING]
  > 由于缺乏隔离，网页可以检测并干扰执行的代码。因此，除非可以接受网页读取、访问或修改代码逻辑或数据，否则不要使用 `MAIN` 环境。

- `USER_SCRIPT`

  用户脚本的默认执行环境。此环境与页面的上下文和其他 `USER_SCRIPT` 环境隔离。与[内容脚本的 `ISOLATED` 环境](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/scripting/ExecutionWorld)不同，在这一环境下扩展 API 并不可用。当脚本通过 `worldId` 注册时，可以存在多个 `USER_SCRIPT` 环境。可以通过 {{WebExtAPIRef("userScripts.configureWorld()")}} 更改 `USER_SCRIPT` 环境的配置。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}
