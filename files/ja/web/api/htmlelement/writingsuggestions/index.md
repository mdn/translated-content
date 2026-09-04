---
title: "HTMLElement: writingSuggestions プロパティ"
short-title: writingSuggestions
slug: Web/API/HTMLElement/writingSuggestions
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`writingSuggestions`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、要素の範囲内でブラウザーが提供する入力候補を有効にするかどうかを示す文字列です。

これは HTML グローバル属性の [`writingsuggestions`](/ja/docs/Web/HTML/Reference/Global_attributes/writingsuggestions) の値を反映します。

## 値

列挙型の値です。取りうる値は次の通りです。

- `"true"`
  - : ユーザーがこの要素をタップするかフォーカスを当てると、ブラウザーは自動的に仮想キーボードを表示します。
- `"false"`
  - : ブラウザーは仮想キーボードを自動的に表示しません。仮想キーボードの表示/非表示はスクリプトによって手動で処理されます。

## 例

以下の例は、スクリプトを介してユーザーエージェントが提供する記入事項の提案を無効化する方法を示しています。

```js
const element = document.querySelector("input");

// ユーザーエージェントが記入事項の提案をするのを無効化
element.writingSuggestions = "false";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`writingsuggestions`](/ja/docs/Web/HTML/Reference/Global_attributes/writingsuggestions) グローバル属性
