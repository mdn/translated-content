---
title: menus
slug: Mozilla/Add-ons/WebExtensions/API/menus
---

{{AddonSidebar}}

ブラウザーのメニューシステムに項目を追加します。

この API は、Chrome のエクステンションでコンテキストメニューに項目を追加できる機能である["contextMenus"](https://developer.chrome.com/extensions/contextMenus) API をモデルにしています。この `browser.menus` API は Chrome の API にいくつかの機能を追加しています。

Firefox 55 より前ではこの API は `contextMenus` という名前でした。その名称は一応エイリアスにしています。そのため `contextMenus` という名称を使って Firefox や他のブラウザでも動くコードを書くことできます。

この API を使用するためには `menus` [permission](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) 必要です。 `menus` の代わりにエイリアスの `contextMenus` を使用することができますが、もし使用するのであれば`browser.contextMenus` で API にアクセスしなければなりません。.

この API は[`menus.getTargetElement()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement)以外はコンテンツスクリプトからは使用できません。バックグラウンドページからは使えます。

## メニューアイテムをつくる

To create a menu item call the {{WebExtAPIRef("menus.create()")}} method. You pass this method an object containing options for the item, including the item ID, item type, and the contexts in which it should be shown.

Listen for clicks on your menu item by adding a listener to the {{WebExtAPIRef("menus.onClicked")}} event. This listener will be passed a {{WebExtAPIRef("menus.OnClickData")}} object containing the event's details.

You can create four different types of menu item, based on the value of the `type` property you supply in the options to `create()`:

- "normal": a menu item that just displays a label
- "checkbox": a menu item that represents a binary state. It displays a checkmark next to the label. Clicking the item toggles the checkmark. The click listener will be passed two extra properties: "checked", indicating whether the item is checked now, and "wasChecked", indicating whether the item was checked before the click event.
- "radio": a menu item that represents one of a group of choices. Just like a checkbox, this also displays a checkmark next to the label, and its click listener is passed "checked" and "wasChecked". However, if you create more than one radio item, then the items function as a group of radio items: only one item in the group can be checked, and clicking an item makes it the checked item.
- "separator": a line separating a group of items.

If you have created more than one context menu item or more than one tools menu item, then the items will be placed in a submenu. The submenu's parent will be labeled with the name of the extension. For example, here's an extension called "Menu demo" that's added two context menu items:

![](menus-1.png)

## アイコン

If you've specified icons for your extension using the ["icons" manifest key](/ja/Add-ons/WebExtensions/manifest.json/icons), your menu item will display the specified icon next to its label. The browser will try to choose a 16x16 pixel icon for a normal display or a 32x32 pixel icon for a high-density display:

![](menus-2.png)

Only for items in a submenu, you can specify custom icons by passing the `icons` option to {{WebExtAPIRef("menus.create()")}}:

![](menus-3.png)

## 例

Here's a context menu containing 4 items: a normal item, two radio items with separators on each side, and a checkbox. The radio items are given custom icons.

![](menus-4.png)You could create a submenu like this using code like:

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

## 型

- {{WebExtAPIRef("menus.ContextType")}}
  - : The different contexts a menu can appear in.
- {{WebExtAPIRef("menus.ItemType")}}
  - : The type of menu item: "normal", "checkbox", "radio", "separator".
- {{WebExtAPIRef("menus.OnClickData")}}
  - : Information sent when a menu item is clicked.

## プロパティ

- {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}
  - : The maximum number of top level extension items that can be added to a menu item whose ContextType is "browser_action" or "page_action".

## 関数

- {{WebExtAPIRef("menus.create()")}}
  - : 新しいメニューアイテムをつくります。
- {{WebExtAPIRef("menus.update()")}}
  - : 以前に作られたメニューアイテムを更新します。
- {{WebExtAPIRef("menus.remove()")}}
  - : メニューアイテムを削除します。
- {{WebExtAPIRef("menus.removeAll()")}}
  - : この拡張機能によって追加されたすべてのメニューアイテムを削除します。

## イベント

- {{WebExtAPIRef("menus.onClicked")}}
  - : メニューアイテムがクリックされたときに発火。
- {{WebExtAPIRef("menus.onHidden")}}
  - : ブラウザがメニューを隠したときに発火。
- {{WebExtAPIRef("menus.onShown")}}
  - : ブラウザがメニューを見せたときに発火。

## ブラウザーの互換性

{{ Compat("webextensions.api.menus", 1, "true") }}

{{WebExtExamples("h2")}}

> **メモ:** This API is based on Chromium's [`chrome.contextMenus`](https://developer.chrome.com/extensions/contextMenus) API. This documentation is derived from [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) in the Chromium code.

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
