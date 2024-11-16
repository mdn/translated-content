---
title: contextualIdentities
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities
l10n:
  sourceCommit: ec8d5627e822d866f350d9d8c06f0df58948015e
---

{{AddonSidebar}}

与场景身份一起使用：列出、创建、删除和更新场景身份。

“场景身份”，也称为“容器”，是浏览器的一项特性，其允许用户在浏览网页时使用多个身份，并保持身份的隔离。例如，用户可能认为他们的“工作身份”与他们的“个人身份”是分开的，并且不希望在这两个上下文之间共享 cookie。

通过场景身份特性，每个场景身份都有一个名称、颜色和图标。可以为新标签分配一个身份，然后其名称、图标和颜色会显示在地址栏中。在内部，每个身份都有一个不与其他标签共享的 cookie 存储。这个 cookie 存储由此 API 和其他 API 中的 `cookieStoreId` 标识。

![一个上下文菜单显示了“在新容器标签中打开”子菜单，其中显示了个人、工作、银行和购物等场景身份。](containers.png)

场景身份是 Firefox 中的一项实验性特性，默认情况下仅在 Firefox Nightly 中启用。要在 Firefox 的其他版本中启用它，请将 `privacy.userContext.enabled` 首选项设置为 `true`。请注意，尽管场景身份在 Android 版 Firefox 中可用，但在此浏览器版本中没有配套的用户界面。

在 Firefox 57 之前，仅当启用了场景身份特性时，才可使用 `contextualIdentities` API。如果扩展尝试在未启用特性的情况下使用 `contextualIdentities` API，则调用方法返回的 promise 会兑现为 `false`。

从 Firefox 57 开始，如果安装了使用 `contextualIdentities` API 的扩展程序，则将自动启用场景身份特性。但请注意，用户仍然可以使用“privacy.userContext.enabled”首选项禁用该特性。如果发生这种情况，则调用 `contextualIdentities` 的方法返回的 promise 将以错误消息拒绝。

有关更多信息，请参见[使用场景身份](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)。

其他浏览器不支持场景身份。

要使用此 API，你需要在你的 [manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 文件中包含“contextualIdentities”和“cookies”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

## 类型

- {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}}
  - : 包含有关场景身份的信息。

## 函数

- {{WebExtAPIRef("contextualIdentities.create()")}}
  - : 创建一个新的场景身份。
- {{WebExtAPIRef("contextualIdentities.get()")}}
  - : 根据给定的 cookie 存储 ID 检索场景身份。
- {{WebExtAPIRef("contextualIdentities.move()")}}
  - : 将一个或多个场景身份移动到场景身份列表中。
- {{WebExtAPIRef("contextualIdentities.query()")}}
  - : 检索所有场景身份，或具有特定名称的所有场景身份。
- {{WebExtAPIRef("contextualIdentities.update()")}}
  - : 更新现有场景身份的属性。
- {{WebExtAPIRef("contextualIdentities.remove()")}}
  - : 删除一个场景身份。

## 事件

- {{WebExtAPIRef("contextualIdentities.onCreated")}}
  - : 当创建场景身份时触发。
- {{WebExtAPIRef("contextualIdentities.onRemoved")}}
  - : 当删除场景身份时触发。
- {{WebExtAPIRef("contextualIdentities.onUpdated")}}
  - : 当一个或多个场景身份的属性更新时触发。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}
