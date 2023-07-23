---
title: manifest.json
slug: Mozilla/Add-ons/WebExtensions/manifest.json
---

{{AddonSidebar}}

> **备注：** 本文描述的是适用于 WebExtensions 的 manifest.json。若您正在寻找适用于 PWA 的 manifest.json 的有关信息，请参考这篇文章：[Web App Manifest](/zh-CN/docs/Web/Manifest)。

`manifest.json` 是每个 WebExtension 唯一必须包含的元数据文件。

通过使用 `manifest.json`，您可以指定扩展的基本元数据，例如名称和版本，还可以指定扩展各个方面的功能（例如后台脚本，内容脚本和某些浏览器行为）。

它是一个允许使用 "`//`" 撰写单行注释的、特殊的 [JSON](/zh-CN/docs/Glossary/JSON) 文件。

## manifest.json 键列表

支持的 `manifest.json` 键如下所示：

### 简体中文内容

{{ListSubpages("/zh-CN/Add-ons/WebExtensions/manifest.json")}}

### 英文内容

{{ListSubpages("/en-US/Add-ons/WebExtensions/manifest.json")}}

- `"manifest_version"`，`"version"`，和 `"name"` 是唯一的强制必填键。
- 如果 "\_locales" 目录存在的话，"`default_locale"` 也必须相应存在，否则不应存在。
- Google Chrome 不支持 `"browser_specific_settings"`

### 在运行时访问 manifest.json 键

你可以在拓展的 JavaScript 代码中通过 {{WebExtAPIRef("runtime.getManifest()")}} 函数访问拓展的 manifest 数据：

```js
browser.runtime.getManifest().version;
```

## 示例

The block below shows the basic syntax for some common manifest keys.

> **备注：** This is not intended to be used as a copy-paste-ready example. Selecting the keys you'll need depends on the extension you are developing.

For complete example extensions, see [Example extensions](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Examples).

```json
{
  "browser_specific_settings": {
    "gecko": {
      "id": "addon@example.com",
      "strict_min_version": "42.0"
    }
  },

  "background": {
    "scripts": ["jquery.js", "my-background.js"]
  },

  "browser_action": {
    "default_icon": {
      "19": "button/geo-19.png",
      "38": "button/geo-38.png"
    },
    "default_title": "Whereami?",
    "default_popup": "popup/geo.html"
  },

  "commands": {
    "toggle-feature": {
      "suggested_key": {
        "default": "Ctrl+Shift+Y",
        "linux": "Ctrl+Shift+U"
      },
      "description": "Send a 'toggle-feature' event"
    }
  },

  "content_security_policy": "script-src 'self' https://example.com; object-src 'self'",

  "content_scripts": [
    {
      "exclude_matches": ["*://developer.mozilla.org/*"],
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ],

  "default_locale": "en",

  "description": "...",

  "icons": {
    "48": "icon.png",
    "96": "icon@2x.png"
  },

  "manifest_version": 2,

  "name": "...",

  "page_action": {
    "default_icon": {
      "19": "button/geo-19.png",
      "38": "button/geo-38.png"
    },
    "default_title": "Whereami?",
    "default_popup": "popup/geo.html"
  },

  "permissions": ["webNavigation"],

  "version": "0.1",

  "user_scripts": {
    "api_script": "apiscript.js"
  },

  "web_accessible_resources": ["images/my-image.png"]
}
```

## 浏览器兼容性

For a full overview of all manifest keys and their sub-keys, see the [full `manifest.json` browser compatibility table](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json).

{{Compat}}

## 参见

{{WebExtAPIRef("permissions")}} JavaScript API
