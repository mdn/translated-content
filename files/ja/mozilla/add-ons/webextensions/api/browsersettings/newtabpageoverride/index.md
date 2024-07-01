---
title: browserSettings.newTabPageOverride
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPageOverride
---

{{AddonSidebar}}

{{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} オブジェクトを使用すると「新規タブ」ページ、つまりユーザーが新しい空のタブを開いたときのページを表す URL を取得することができます。

なお、これは読み取り専用の設定です。

## ブラウザーの互換性

{{Compat}}

## 例

現在の新規タブ URL を取得する：

```js
browser.browserSettings.newTabPageOverride.get({}).then((result) => {
  console.log(result.value);
});
```

{{WebExtExamples}}
