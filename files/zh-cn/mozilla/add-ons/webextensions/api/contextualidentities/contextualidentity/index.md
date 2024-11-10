---
title: contextualIdentities.ContextualIdentity
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

**`contextualIdentities.ContextualIdentity`** 类型描述了单个场景身份。

## 类型

这种类型的值是对象，包含以下属性：

- `cookieStoreId`

  - : `string`。身份的 cookie 存储 ID。由于场景身份不共享 cookie 存储，因此这作为唯一标识符。

- `color`

  - : `string`。身份的颜色。这将在属于该身份的标签页中显示。以下值是有效的：

    - "blue"
    - "turquoise"
    - "green"
    - "yellow"
    - "orange"
    - "red"
    - "pink"
    - "purple"
    - "toolbar"

    值“toolbar”代表一个依赖主题的颜色。颜色为“toolbar”的身份将显示为与工具栏文本颜色（对应于[主题键](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme#colors) `"toolbar_field_text"`）相同的颜色。

- `colorCode`

  - : `string`。表示用于该身份的确切颜色的十六进制代码。例如：`"#37adff"`。在颜色为“toolbar”的特殊情况下，无论显示的颜色如何，`colorCode` 始终为 `"#7c7c7d"`。

- `icon`

  - : `string`。身份的图标名称。这将在属于该身份的标签页的 URL 栏中显示。以下值是有效的：
    - "fingerprint"
    - "briefcase"
    - "dollar"
    - "cart"
    - "circle"
    - "gift"
    - "vacation"
    - "food"
    - "fruit"
    - "pet"
    - "tree"
    - "chill"
    - "fence"

- `iconUrl`

  - : `string`。指向身份图标的完整 resource:// URL。例如：“resource://usercontext-content/fingerprint.svg”。

- `name`

  - : `string`。身份的名称。这将在属于该身份的标签页的 URL 栏中显示。注意，名称不必唯一。

## 浏览器兼容性

{{Compat}}
