---
title: contextualIdentities
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities
l10n:
  sourceCommit: ec8d5627e822d866f350d9d8c06f0df58948015e
---

{{AddonSidebar}}

与上下文身份一起使用：列出、创建、删除和更新上下文身份。

“上下文身份”，也称为“容器”，是浏览器的一项功能，允许用户在浏览网页时使用多个身份，并在这些身份之间保持一定的隔离。例如，用户可能认为他们的“工作身份”与他们的“个人身份”是分开的，并且不希望在这两个上下文之间共享 cookie。

通过上下文身份功能，每个上下文身份都有一个名称、一个颜色和一个图标。新标签可以分配给一个身份，名称、图标和颜色会显示在地址栏中。在内部，每个身份都有一个不与其他标签共享的 cookie 存储。这个 cookie 存储由此和其他 API 中的 `cookieStoreId` 标识。

![一个上下文菜单显示了“在新容器标签中打开”子菜单，其中显示了个人、工作、银行和购物等上下文身份。](containers.png)

上下文身份是 Firefox 中的一个实验性功能，默认情况下仅在 Firefox Nightly 中启用。要在 Firefox 的其他版本中启用它们，请将 `privacy.userContext.enabled` 首选项设置为 `true`。请注意，尽管上下文身份在 Firefox for Android 中可用，但在此浏览器版本中没有用于处理它们的用户界面。

在 Firefox 57 之前，仅当启用了上下文身份功能时，才可使用 `contextualIdentities` API。如果扩展尝试在未启用功能的情况下使用 `contextualIdentities` API，则方法会将其 promise 用 `false` 解析。

从 Firefox 57 开始，如果安装了使用 `contextualIdentities` API 的扩展程序，则将自动启用上下文身份功能。但请注意，用户仍然可以使用“privacy.userContext.enabled”首选项禁用该功能。如果发生这种情况，则 `contextualIdentities` 方法回复错误消息并拒绝其 promise。

有关更多信息，请参见[使用上下文身份](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)。

其他浏览器不支持上下文身份。

要使用此 API，你需要在你的 [manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 文件中写上“contextualIdentities”和“cookies”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

## 类型

- {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}}
  - : 包含有关上下文身份的信息。

## 函数

- {{WebExtAPIRef("contextualIdentities.create()")}}
  - : 创建一个新的上下文身份。
- {{WebExtAPIRef("contextualIdentities.get()")}}
  - : 根据其 cookie store ID 检索上下文身份。
- {{WebExtAPIRef("contextualIdentities.move()")}}
  - : 将一个或多个上下文身份移动到上下文身份列表中。
- {{WebExtAPIRef("contextualIdentities.query()")}}
  - : 检索所有上下文身份，或具有特定名称的所有上下文身份。
- {{WebExtAPIRef("contextualIdentities.update()")}}
  - : 更新现有上下文身份的属性。
- {{WebExtAPIRef("contextualIdentities.remove()")}}
  - : 删除一个上下文身份。

## 事件

- {{WebExtAPIRef("contextualIdentities.onCreated")}}
  - : 当创建上下文身份时触发。
- {{WebExtAPIRef("contextualIdentities.onRemoved")}}
  - : 当删除上下文身份时触发。
- {{WebExtAPIRef("contextualIdentities.onUpdated")}}
  - : 当一个或多个上下文身份的属性更新时触发。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}
