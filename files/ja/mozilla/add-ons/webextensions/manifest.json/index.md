---
title: manifest.json
slug: Mozilla/Add-ons/WebExtensions/manifest.json
l10n:
  sourceCommit: 673a473ab4b40c5f6787b2d3438370269fff31c7
---

> [!NOTE]
> この記事では、ウェブ拡張機能の manifest.json について説明します。PWA の manifest.json に関する情報をお探しの場合は、[ウェブアプリマニフェスト](/ja/docs/Web/Progressive_web_apps/Manifest)の記事を調べてみてください。

`manifest.json` ファイルは、WebExtension API を使う拡張機能に必ず含めなければならない唯一のファイルです。

`manifest.json` を使うことで、拡張機能の名前やバージョンといった基本的なメタデータを指定したり、拡張機能の機能的な側面として、例えばバックグラウンドスクリプトやコンテンツスクリプト、ブラウザーアクションを指定することもできます。

これは [JSON](/ja/docs/Glossary/JSON)形式のファイルですが、１つ例外があります: "`//`"-形式のコメントが許可されています。

## manifest.json キーの一覧

以下は `manifest.json` のキーです。特に断りがない限り、これらのキーは Manifest V2 以上で利用できます。

- [action](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) (Manifest V3 以上)
- [author](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author)
- [background](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)
- [browser_action](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) (Manifest V2 のみ)
- [browser_specific_settings](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)
- [chrome_settings_overrides](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- [chrome_url_overrides](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides)
- [commands](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)
- [content_scripts](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)
- [content_security_policy](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)
- [declarative_net_request](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request)
- [default_locale](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale)
- [description](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description)
- [developer](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer)
- [devtools_page](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)
- [dictionaries](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/dictionaries)
- [externally_connectable](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable) (Firefox では未対応)
- [homepage_url](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url)
- [host_permissions](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) (Manifest V3 以上)
- [icons](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)
- [incognito](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito)
- [manifest_version](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version)
- [name](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name)
- [offline_enabled](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/offline_enabled) (Firefox では未対応)
- [omnibox](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox)
- [optional_host_permissions](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) (Manifest V3 以上)
- [optional_permissions](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)
- [options_page](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page)
- [options_ui](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)
- [page_action](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) (Chrome では Manifest V2 のみ)
- [permissions](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)
- [protocol_handlers](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) (Firefox のみ)
- [short_name](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/short_name)
- [sidebar_action](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [storage](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/storage) (Firefox では未対応)
- [theme](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)
- [theme_experiment](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment) (Firefox のみ) (実験的)
- [user_scripts](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) (Manifest V2 のみ)
- [version](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)
- [version_name](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version_name)
- [web_accessible_resources](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)

### manifest.json のキーの注意点

- 必須のキーは、`"manifest_version"`, `"version"`, `"name"` だけです。
- `"default_locale"` は `_locales` ディレクトリーが存在する場合は必要ですが、そうでない場合は不要です。
- `"browser_specific_settings"` は Google Chrome で対応していません。

### manifest.json の情報を実行時に参照する

拡張機能の manifest には、拡張機能の JavaScript から {{WebExtAPIRef("runtime.getManifest()")}} 関数を使ってアクセスできます:

```js
browser.runtime.getManifest().version;
```

## 例

下記のブロックには一般的なマニフェストキーの基本文法を示します。

> [!NOTE]
> これは、そのままコピー＆ペーストして使用できる例として用意されたものではありません。必要なキーの選択は、開発している拡張機能によって異なります。

完全な例は[拡張機能の例](/ja/docs/Mozilla/Add-ons/WebExtensions/Examples)を見てください。

```json
{
  "browser_specific_settings": {
    "gecko": {
      "id": "@addon-example",
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

## ブラウザーの互換性

{{Compat}}

## 関連情報

{{WebExtAPIRef("permissions")}} JavaScript API
