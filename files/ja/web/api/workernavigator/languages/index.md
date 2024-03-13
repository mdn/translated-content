---
title: WorkerNavigator.languages
slug: Web/API/WorkerNavigator/languages
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("HTML DOM")}}

**`WorkerNavigator.languages`** は読み取り専用のプロパティで、ユーザーの推奨言語を表す文字列の配列を返します。言語は {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} による言語タグを使用して記述されます。返される配列では、環境設定の順に並べられ、最も優先度の高い言語が最初に置かれます。

{{domxref("WorkerNavigator.language","navigator.language")}} の値は返される配列の最初の要素です。

その値が変更されると、ユーザーの環境設定が変更されたときに {{domxref("Window.languagechange_event", "languagechange")}} イベントが {{domxref("WorkerGlobalScope")}} オブジェクトに発行されます。

ユーザーのブラウザーから行われるすべての HTTP リクエストにある `Accept-Language` ヘッダーは、 `navigator.languages` プロパティと同じ値を使用しますが、追加の `qvalues` （品質値）フィールドがある点が異なります（例: `en-US;q=0.8`）。

## 値

配列または文字列です。

## 例

これをウェブワーカーの中に挿入して実行することができます。

```js
navigator.language; //"en-US"
navigator.languages; //["en-US", "zh-CN", "ja-JP"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WorkerNavigator.language")}}
- {{domxref("WorkerNavigator")}}
- {{domxref("WorkerGlobalScope.languagechange_event", "languagechange")}} イベント
