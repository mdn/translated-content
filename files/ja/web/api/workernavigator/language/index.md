---
title: WorkerNavigator.language
slug: Web/API/WorkerNavigator/language
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("HTML DOM")}}

**`WorkerNavigator.language`** は読み取り専用のプロパティで、ユーザーの環境設定言語（通常はブラウザー UI の言語）を表す文字列を返します。

## 値

文字列で、 {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} で定義された通りの言語バージョンを表します。有効な言語コードの例としては、 "en", "en-US", "fr", "fr-FR", "ja-JP" 等があります。

iOS 版の Safari の 10.2 以前では、返される国コードは小文字になることに注意してください。 "en-us", "fr-fr" など。

## 例

これをウェブワーカーの中に挿入して実行することができます。

```js
if (/^en\b/.test(navigator.language)) {
  doLangSelect(window.navigator.language);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WorkerNavigator.languages")}}
- {{domxref("WorkerNavigator")}}
