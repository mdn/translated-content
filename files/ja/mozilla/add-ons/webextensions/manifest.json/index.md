---
title: manifest.json
slug: Mozilla/Add-ons/WebExtensions/manifest.json
---

{{AddonSidebar}}

manifest.json ファイルは、WebExtension API を使う拡張機能に必ず含めなければならない唯一のファイルです。

manifest.json を使うことで、拡張機能の名前やバージョンといった基本的なメタデータを指定したり、拡張機能の機能的な側面として、例えばバックグラウンドスクリプトやコンテンツスクリプト、ブラウザーアクションを指定することもできます。

これは [JSON](/ja/docs/Glossary/JSON)形式のファイルですが、１つ例外があります: "`//`"-形式のコメントが許可されています。

manifest.json のキー一覧は次の通り:

{{ListSubpages("/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json")}}

### manifest.json のキーの注意点

- 必須のキーは、`"manifest_version"`, `"version"`, `"name"` だけです。
- `"default_locale"` は `"_locales"` ディレクトリーが存在する場合は必要ですが、そうでない場合は不要です。
- `"applications"` は Google Chrome でサポートされていません。

### manifest.json の情報を実行時に参照する

拡張機能の manifest には、拡張機能の JavaScript から {{WebExtAPIRef("runtime.getManifest()")}} 関数を使ってアクセスできます:

```js
browser.runtime.getManifest().version;
```

## 例

下記のブロックには一般的な manifest keys の基本文法を示します。

> [!NOTE]
> これはコピー・ペーストできるような使われ方のつもりではないのに注意してください: どのキーが必要かは開発している拡張機能に依存します。

完全な例は [Example extensions](/ja/docs/Mozilla/Add-ons/WebExtensions/Examples) を見てください。

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

## ブラウザーの互換性

マニフェストキーとサブキーのすべてを見るには、[完全な manifest.json ブラウザー互換テーブルを見てください。](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json)

{{Compat}}
