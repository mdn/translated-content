---
title: sessions.Session
slug: Mozilla/Add-ons/WebExtensions/API/sessions/Session
---

{{AddonSidebar}}

该`Session`对象表示用户在当前浏览会话中已关闭的选项卡或窗口。

如果关闭了选项卡但未关闭其窗口，则会话以{{WebExtAPIRef("tabs.Tab", "Tab")}}对象表示：例如，因为用户单击了“关闭选项卡”按钮，并且此选项卡不是其窗口中的唯一选项卡。

如果关闭窗口，则会话表示为{{WebExtAPIRef("windows.Window", "Window")}}对象：例如，由于用户单击“关闭窗口”按钮，或关闭了窗口中唯一打开的选项卡。

请注意，不同的浏览器可能对会话何时为 Tab 和何时为 Window 有不同的想法。例如：

- 在 Chrome 中，如果用户关闭包含多个标签的窗口，则会话将记录为“窗口”。如果用户关闭了仅包含一个选项卡的窗口，则该窗口将记录为一个选项卡。
- 在 Firefox 中，如果用户关闭窗口（或该窗口中最后一个选项卡的选项卡），则将会话记录为窗口，如果用户关闭窗口中最后一个选项卡中的选项卡，则将会话记录为一个 Tab。

打开的选项卡的 Tab 对象没有`sessionId`。关闭选项卡时，它将具有一个`sessionId`但没有选项卡`id`。如果恢复了该标签页，它将获得一个新的标签页，`id`并且会丢失`sessionId`。

## 类型

此类型的值是对象。它们包含以下属性：

- `lastModified`
  - : `number`。选项卡或窗口关闭的时间，[自 epoch 以来的毫秒数](https://en.wikipedia.org/wiki/Unix_time)。
- `tab`{{optional_inline}}
  - : `object`。如果对象表示已关闭的选项卡，则此属性存在，并且将是 {{WebExtAPIRef("tabs.Tab")}} 对象。仅当扩展具有“tabs” [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)时，它才会包含 `url`，`title` 和 `favIconUrl`。
- `window`{{optional_inline}}
  - : `object`。如果对象表示一个关闭的窗口，则此属性存在并且将是{{WebExtAPIRef("windows.Window")}}对象。

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.sessions`](https://developer.chrome.google.cn/docs/extensions/reference/api/sessions) API。

<!--
//版权所有 2015 The Chromium Authors。版权所有。
//
//以或不以源代码和二进制格式重新分发和使用
//修改，只要满足以下条件
//遇到：
//
// *重新分发源代码必须保留上述版权
//注意，此条件列表和以下免责声明。
// *二进制形式的重新分发必须重现上述内容
//版权声明，此条件列表和以下免责声明
//在随附的文档和/或其他材料中
//分配。
// *无论是 Google Inc.的名称还是 Google Inc.的名称
//贡献者可用于认可或宣传由
//此软件未经事先特别书面许可。
//
//此软件由版权所有者和贡献者提供
//“按原样”以及任何明示或暗示的保证，包括但不限于
//仅限于对产品的适销性和适用性的默示担保
//不提供特殊用途。在任何情况下，版权
//所有者或贡献者对任何直接，间接，偶然的，
//特殊，示范性或后果性损害（包括但不包括）
//仅限于，购买替代商品或服务；使用损失，
//数据或利润；或业务中断）
//责任理论，无论是合同形式，严格责任还是侵权行为
//（包括疏忽大意或其他原因）出于使用目的的任何方式
//即使已告知可能发生此类损坏，也可以使用本软件。
-->
