---
title: contextMenus
slug: Mozilla/Add-ons/WebExtensions/API/menus
---

{{AddonSidebar}}在浏览器菜单中添加条目。此 API 基于 Chrome 的“contextMenus”API 构建，该 API 可让 Chrome 扩展程序将项目添加到浏览器的上下文菜单中。 `browser.menus` API 为 Chrome 的 API 添加了一些功能，特别是可以将项目添加到浏览器的“工具”菜单以及上下文菜单中。在 Firefox 55 之前，这个 API 最初也被命名为`contextMenus`，并且这个名字被保留为别名，所以你可以使用`contextMenus`编写在 Firefox 和其他浏览器中工作的代码。你需要拥有“menus”（或别名" contextMenus "）权限来使用此 API。

## 创建菜单项

使用 {{WebExtAPIRef("menus.create()")}}方法创建一个菜单项。你需要传递一个包含条目选项的对象，它包括条目的 id，类型，和需要显示出来的文本值。

绑定一个监听器到{{WebExtAPIRef("contextMenus.onClicked")}}事件来监听你菜单项目的点击事件。此监听器会传递一个{{WebExtAPIRef("contextMenus.OnClickData")}}，它包含该事件的详细信息。

你可以根据在调用`create()`时所传递的参数中使用不同的`type`值来创建四种不同类型的菜单：

- "normal"：只显示为一个标签的菜单项
- "checkbox"：一个表示二进制状态的菜单项。它在菜单项旁边显示一个复选标记。点击该菜单项切换复选标记。监听器会被传递两个额外的属性：“checked”，指示当前是否被选中，以及“wasChecked”，指示在此点击事件发生前是否被选中。
- "radio"：表示一组选项之一的上下文菜单项。类似于复选框，它也在菜单项旁边显示一个复选标记，监听它的监听器也会被传递“checked”和“wasChecked”。但是，如果您创建多个单选项，则这些项目将作为一组单选：组内只能选择一项，点击菜单项来选中它。
- "separator"：用于分割菜单的分割线。

如果您创建了多个上下文菜单项目或多个工具菜单项目，则这些项目将被放置在子菜单中。子菜单的父项将标有扩展名。例如，下面是一个名为“Menu Demo”的扩展，添加了两个上下文菜单项：

![](menus-1.png)

## 图标

如果你使用 ["icons" manifest key](/zh-CN/Add-ons/WebExtensions/manifest.json/icons) 为你的扩展指定一个图标，你的菜单项的旁边就会显示一个指定的图标。浏览器会尝试在普通分辨率下使用 16 x 16 像素的图标，在高分辨率下使用 32 x 32 像素的图标：

![](menus-2.png) 你可以通过调用 {{WebExtAPIRef("menus.create()")}} 时指定 icons 选项来给子菜单项设置图标。

![](menus-3.png)

## 示例

下面是一个包含四个项目的菜单，他们分别是：一个普通选项，两个周围有分割线的单选，和一个复选框。单选框使用了自定义图标。

![](menus-4.png)

你可以使用以下代码创建一个这样的子菜单：

```js
browser.menus.create(
  {
    id: "remove-me",
    title: browser.i18n.getMessage("menuItemRemoveMe"),
    contexts: ["all"],
  },
  onCreated,
);

browser.menus.create(
  {
    id: "separator-1",
    type: "separator",
    contexts: ["all"],
  },
  onCreated,
);

browser.menus.create(
  {
    id: "greenify",
    type: "radio",
    title: browser.i18n.getMessage("menuItemGreenify"),
    contexts: ["all"],
    checked: true,
    icons: {
      16: "icons/paint-green-16.png",
      32: "icons/paint-green-32.png",
    },
  },
  onCreated,
);

browser.menus.create(
  {
    id: "bluify",
    type: "radio",
    title: browser.i18n.getMessage("menuItemBluify"),
    contexts: ["all"],
    checked: false,
    icons: {
      16: "icons/paint-blue-16.png",
      32: "icons/paint-blue-32.png",
    },
  },
  onCreated,
);

browser.menus.create(
  {
    id: "separator-2",
    type: "separator",
    contexts: ["all"],
  },
  onCreated,
);

var checkedState = true;

browser.menus.create(
  {
    id: "check-uncheck",
    type: "checkbox",
    title: browser.i18n.getMessage("menuItemUncheckMe"),
    contexts: ["all"],
    checked: checkedState,
  },
  onCreated,
);
```

## 类型

- {{WebExtAPIRef("contextMenus.ContextType")}}
  - : 菜单里可以出现的不同内容。可能的值有："all", "audio", "browser_action", "editable", "frame", "image", "link", "page", "page_action", "password", "selection", "tab", "video".
- {{WebExtAPIRef("contextMenus.ItemType")}}
  - : 菜单项的类别有："normal", "checkbox", "radio", "separator".
- {{WebExtAPIRef("contextMenus.OnClickData")}}
  - : 当菜单项被点击时发送的信息。

## 属性

- {{WebExtAPIRef("contextMenus.ACTION_MENU_TOP_LEVEL_LIMIT")}}
  - : 可以被添加进上下文菜单项的顶级扩展项的最大值，其 ContextType 可以是"browser_action" 或者 "page_action".

## 函数

- {{WebExtAPIRef("contextMenus.create()")}}
  - : 创建一个新的上下文菜单项目。
- {{WebExtAPIRef("contextMenus.update()")}}
  - : 更新一个已经创建了的上下文菜单项目。
- {{WebExtAPIRef("contextMenus.remove()")}}
  - : 删除一个上下文菜单项目。
- {{WebExtAPIRef("contextMenus.removeAll()")}}
  - : 移除该插件创建的所有上下文菜单项目。

## 事件

- {{WebExtAPIRef("contextMenus.onClicked")}}
  - : 当一个上下文菜单项被点击时触发。

## 浏览器兼容性

{{ Compat }}

{{WebExtExamples("h2")}}

> **备注：** 此 API 基于 Chromium 的 [`chrome.contextMenus`](https://developer.chrome.com/extensions/contextMenus) API. 此文档来自于 Chromium 代码中的[`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json)。

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
