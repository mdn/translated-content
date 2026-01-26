---
title: identity.getRedirectURL()
slug: Mozilla/Add-ons/WebExtensions/API/identity/getRedirectURL
---

{{AddonSidebar}}

リダイレクト URL として利用可能な URL を生成します。

この URL は、アドオン ID から生成されるため、使用したい場合、[`browser_specific_settings`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) キーを使用してアドオン ID を明示的に設定する必要があるでしょう (設定しない場合、アドオンを[一時的にインストール](/ja/docs/Mozilla/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)するたびに、異なるリダイレクト URL を取得することになります)。

リダイレクト URL については、[リダイレクト URL を取得する](/ja/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url)を参照してください。

## 構文

```js
var redirectURL = browser.identity.getRedirectURL();
```

### 引数

なし

### 返り値

リダイレクト URL を含む文字列

## ブラウザーの互換性

{{Compat}}

## 例

リダイレクト URL を取得する:

```js
var redirectURL = browser.identity.getRedirectURL();
```

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の [`chrome.identity`](https://developer.chrome.com/docs/extensions/reference/api/identity) API に基づいています。
