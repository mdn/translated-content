---
title: contentScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/register
---

{{AddonSidebar()}}

このメソッドは一つ以上の content scripts を登録するときに使用します。

manifest.json 内の [`content_scripts`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) に似た一つのオブジェクトを引数に持ちます。`content_scripts` では配列ですが、この `register()` ではオブジェクトを引数に持ちます。

これは [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返す非同期関数です。

## 構文

```js
var registering = browser.contentScripts.register(
  contentScriptOptions, // object
);
```

### パラメーター

- `contentScriptOptions`

  - : `object` です。`RegisteredContentScriptOptions` オブジェクトは登録するコンテントスクリプトを表します。[`content_scripts`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) と似た構文のオブジェクトで、その違いは以下の通りです。

    - プロパティ名にはスネーク形式ではなくキャメル形式を使用します (例えば、`excludeMatches`を使用します。`exclude_matches` ではありません)
    - `js` プロパティと `css` プロパティには、相対パスのほかに文字列も指定できます。このため、登録したいものがどちらであるのかを明確にできる構文になっています。

    `RegisteredContentScriptOptions` は次のプロパティを持ちます:

    - `allFrames`{{optional_inline}}
      - : [`content_scripts`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) における `all_frames` と同様です。
    - `css`{{optional_inline}}
      - : オブジェクトの配列。 それぞれのオブジェクトは `file` という名前の manifest.json からの相対パスで登録したい CSS ファイルを指定した URL の文字列を持つプロパティか、`code` という名前の登録したい CSS の文字列を持つプロパティを含みます。
    - `excludeGlobs`{{optional_inline}}
      - : [`content_scripts`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) における `exclude_globs` と同様です。
    - `excludeMatches`{{optional_inline}}
      - : [`content_scripts`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) における `exclude_matches` と同様です。
    - `includeGlobs`{{optional_inline}}
      - : [`content_scripts`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) における `include_globs` と同様です。
    - `js`{{optional_inline}}
      - : オブジェクトの配列。各オブジェクトは `file` または `code` プロパティを含み、その要素は css プロパティと同様です。
    - `matchAboutBlank`{{optional_inline}}
      - : [`content_scripts`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) における `match_about_blank` と同様です。
    - `matches`
      - : [`content_scripts`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) における `matches` と同様です。
    - `runAt`{{optional_inline}}
      - : [`content_scripts`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) における `run_at` と同様です。

### 返り値

登録したコンテントスクリプトを削除することができる {{WebExtAPIRef("contentScripts.RegisteredContentScript")}} オブジェクトを引数に持つ [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返します。

現在、登録したコンテントスクリプトは、これを登録した拡張機能ページをアンロードしたときに削除されます。したがって、コンテントスクリプトを登録する際は、少なくとも登録されたままであってほしいだけ存在する拡張機能ページから登録すべきです。

## ブラウザーの互換性

{{Compat("webextensions.api.contentScripts.register", 10)}}

## 例

`defaultCode` コンテントスクリプトを、すべての `.org` URL に対して登録します。

```js
const defaultHosts = "*://*.org/*";
const defaultCode =
  "document.body.innerHTML = '<h1>このページは書き換えられました<h1>'";

async function register(hosts, code) {
  return await browser.contentScripts.register({
    matches: [hosts],
    js: [{ code }],
    runAt: "document_idle",
  });
}

var registered = register(defaultHosts, defaultCode);
```

次のコードは content_scripts/example.js にある JavaScript ファイルを登録します。

```js
const scriptObj = await browser.contentScripts.register({
  js: [{ file: "/content_scripts/example.js" }],
  matches: ["<all_urls>"],
  allFrames: true,
  runAt: "document_start",
});
```

{{WebExtExamples}}
