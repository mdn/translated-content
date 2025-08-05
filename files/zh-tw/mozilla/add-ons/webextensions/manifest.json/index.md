---
title: manifest.json
slug: Mozilla/Add-ons/WebExtensions/manifest.json
---

manifest.json 是所有採用 WebExtension API 的擴充功能中、唯一一個必須包含的檔案。

你可透過 manifest.json 為擴充功能指定名稱（name）、版本（version）這類的基本元資料（metadata），也可指定擴充功能的一些相關功能，例如像是背景腳本（background scripts）、內容腳本（content scripts）、瀏覽器動作（browser actions）等等。

這是個採用 [JSON](/zh-TW/docs/Glossary/JSON) 格式的檔案，但有個例外：它可接受含有 "`//`" 這種格式的註解文字。

manifest.json 可採用的鍵值如下所列：

{{ ListSubpages ("/en-US/Add-ons/WebExtensions/manifest.json") }}

`"manifest_version"`、`"version"` 和 `"name"` 是一定要設定的鍵值。另外，如果有設定 "\_locales" directory ，就一定要設定 `"default_locale"` ，否則就是這兩個鍵值都不做設定。 Google Chrome, 並不支援 `"applications"` ，但針對 Firefox 48 之前及 Android 的版本，則必須設置這個鍵值。

你可透過擴充功能中的 JavaScript，藉由 {{WebExtAPIRef("runtime.getManifest()")}} 這個函式來存取擴充功能裡的 manifest ：

```js
browser.runtime.getManifest().version;
```

## 範例

以下程式碼顯示的是一般 manifest 鍵值的基本語法。請注意，這個範例並不是讓你用來直接複製貼上的，你必須根據所開發的擴充功能，填入相應的鍵值、關於擴充功能的完整範例，請參見 [擴充功能範例](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Examples)。

```json
{
  "applications": {
    "gecko": {
      "id": "addon@example.com",
      "strict_min_version": "42.0"
    }
  },

  "background": {
    "scripts": ["jquery.js", "my-background.js"],
    "page": "my-background.html"
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

  "web_accessible_resources": ["images/my-image.png"]
}
```

## 瀏覽器相容性

若想對所有的 manifest 鍵值及其子健有個完整的概念，可參見 [完整 manifest.json 瀏覽器相容表](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)。

{{Compat}}
