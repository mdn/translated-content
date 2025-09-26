---
title: manifest.json
slug: Mozilla/Add-ons/WebExtensions/manifest.json
---

> [!NOTE]
> 本文描述的是适用于 web 扩展技术的 manifest.json。若你正在寻找适用于 PWA 的 manifest.json 的有关信息，请参考这篇文章：[Web App 清单](/zh-CN/docs/Web/Progressive_web_apps/Manifest)。

`manifest.json` 是每个使用 WebExtension API 的扩展必须包含的唯一文件。

通过使用 `manifest.json`，你可以指定扩展的基本元数据，例如名称和版本，还可以指定扩展各个方面的功能（例如后台脚本、内容脚本和某些浏览器行为）。

它是一个允许使用“`//`”撰写单行注释的、特殊的 [JSON](/zh-CN/docs/Glossary/JSON) 文件。

## manifest.json 键列表

这些是 `manifest.json` 键；除非另有说明，否则这些键在 Manifest V2 及以上版本中可用：

- [action](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action)（Manifest V3 及以上）
- [author](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author)
- [background](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)
- [browser_action](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)（仅 Manifest V2）
- [browser_specific_settings](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)
- [chrome_settings_overrides](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- [chrome_url_overrides](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides)
- [commands](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)
- [content_scripts](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)
- [content_security_policy](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)
- [declarative_net_request](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request)
- [default_locale](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale)
- [description](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description)
- [developer](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer)
- [devtools_page](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)
- [dictionaries](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/dictionaries)
- [externally_connectable](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable)
- [homepage_url](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url)
- [host_permissions](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions)（Manifest V3 及以上）
- [icons](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)
- [incognito](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito)
- [manifest_version](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version)
- [name](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name)
- [offline_enabled](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/offline_enabled)
- [omnibox](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox)
- [optional_permissions](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)
- [options_page](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page)
- [options_ui](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)
- [page_action](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)（仅 Chrome 中的 Manifest V2）
- [permissions](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)
- [protocol_handlers](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers)
- [short_name](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/short_name)
- [sidebar_action](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [storage](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/storage)
- [theme](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)
- [theme_experiment](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment)
- [user_scripts](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts)（仅 Manifest V2）
- [version](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)
- [version_name](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version_name)
- [web_accessible_resources](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)

### 关于 manifest.json 键的注意事项

- `"manifest_version"`、`"version"` 和 `"name"` 是唯一的强制必填键。
- 如果“`\_locales`”目录存在，`"default_locale"` 也必须相应存在，否则不应存在。
- Google Chrome 不支持 `"browser_specific_settings"`。

### 在运行时访问 manifest.json 键

你可以在拓展的 JavaScript 代码中通过 {{WebExtAPIRef("runtime.getManifest()")}} 函数访问拓展的清单数据：

```js
browser.runtime.getManifest().version;
```

## 示例

下面的代码块显示了一些常用清单键的基本语法。

> [!NOTE]
> 本示例并非用于直接复制粘贴。根据你要开发的扩展选择相应的键。

有关完整的扩展示例，请参阅[扩展示例](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Examples)。

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

  "description": "…",

  "icons": {
    "48": "icon.png",
    "96": "icon@2x.png"
  },

  "manifest_version": 2,

  "name": "…",

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

{{Compat}}

## 参见

{{WebExtAPIRef("permissions")}} JavaScript API
