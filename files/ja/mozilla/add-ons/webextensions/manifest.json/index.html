---
title: manifest.json
slug: Mozilla/Add-ons/WebExtensions/manifest.json
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json
---
<div>{{AddonSidebar}}</div>

<p>manifest.json ファイルは、WebExtension API を使う拡張機能に必ず含めなければならない唯一のファイルです。</p>

<p>manifest.json を使うことで、拡張機能の名前やバージョンといった基本的なメタデータを指定したり、拡張機能の機能的な側面として、例えばバックグラウンドスクリプトやコンテンツスクリプト、ブラウザーアクションを指定することもできます。</p>

<p>これは <a href="/ja/docs/Glossary/JSON">JSON</a>形式のファイルですが、１つ例外があります: "<code>//</code>"-形式のコメントが許可されています。</p>

<p>manifest.json のキー一覧は次の通り:</p>

<p>{{ListSubpages("/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json")}}</p>

<h3 class="index" id="manifest.json_のキーの注意点">manifest.json のキーの注意点</h3>

<ul>
 <li>必須のキーは、<code>"manifest_version"</code>, <code>"version"</code>, <code>"name"</code> だけです。</li>
 <li><code>"default_locale"</code> は <code>"_locales"</code> ディレクトリーが存在する場合は必要ですが、そうでない場合は不要です。</li>
 <li><code>"applications"</code> は Google Chrome でサポートされていません。</li>
</ul>

<h3 id="manifest.json_の情報を実行時に参照する">manifest.json の情報を実行時に参照する</h3>

<p>拡張機能の manifest には、拡張機能の JavaScript から {{WebExtAPIRef("runtime.getManifest()")}} 関数を使ってアクセスできます:</p>

<pre class="brush: js">browser.runtime.getManifest().version;</pre>

<h2 id="Example" name="Example">例</h2>

<p>下記のブロックには一般的な manifest keys の基本文法を示します。</p>

<div class="blockIndicator note">
<p><strong>注:</strong> これはコピー・ペーストできるような使われ方のつもりではないのに注意してください: どのキーが必要かは開発している拡張機能に依存します。</p>
</div>

<p>完全な例は <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Examples">Example extensions</a> を見てください。</p>

<pre class="brush: json">{
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
}</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>

<p>マニフェストキーとサブキーのすべてを見るには、<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json">完全な manifest.json ブラウザー互換テーブルを見てください。</a></p>



<p>{{Compat("webextensions.manifest")}}</p>
