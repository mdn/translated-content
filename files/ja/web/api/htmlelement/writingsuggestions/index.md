---
title: "HTMLElement: writingSuggestions プロパティ"
short-title: writingSuggestions
slug: Web/API/HTMLElement/writingSuggestions
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`writingSuggestions`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、要素のスコープでブラウザーが提供する入力補完機能を有効にするかどうかを示す文字列です。

これは HTML グローバル属性の [`writingsuggestions`](/ja/docs/Web/HTML/Reference/Global_attributes/writingsuggestions) の値を反映します。

## 値

列挙型の値です。取りうる値は次の通りです。

- `"true"`
  - : 要素のスコープで、ブラウザーが提供する入力補完機能を有効にします。
- `"false"`
  - : 要素のスコープで、ブラウザーが提供する入力補完機能を無効にします。

## 例

以下の例は、スクリプトでユーザーエージェントが提供する入力補完機能を無効にする方法を示しています。

```js
const element = document.querySelector("input");

// ユーザーエージェントが提供する入力補完機能を無効化
element.writingSuggestions = "false";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`writingsuggestions`](/ja/docs/Web/HTML/Reference/Global_attributes/writingsuggestions) グローバル属性
