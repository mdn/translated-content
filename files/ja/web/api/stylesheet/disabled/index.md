---
title: StyleSheet.disabled
slug: Web/API/StyleSheet/disabled
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("CSSOM")}}

**`disabled`** は {{domxref("StyleSheet")}} インターフェイスのプロパティで、
このプロパティは、スタイルシートが文書内に適用されないようにするかどうかを決定します。

スタイルシートは、手動でこのプロパティを `true` に設定するか、非アクティブな[代替スタイルシート](/ja/docs/Web/CSS/Alternative_style_sheets)に設定すると、無効になることがあります。なお、 `disabled === false` であることは、スタイルシートが適用されていることを保証するものではありません（例えば、文書内のスタイルシートが削除されている可能性もあります）。

## 値

論理値です。

## 例

```js
// スタイルシートが無効であれば
if (stylesheet.disabled) {
  // スタイルをインラインで適用
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
