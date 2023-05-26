---
title: "TextDecoder: fatal プロパティ"
slug: Web/API/TextDecoder/fatal
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Encoding API")}}

**`fatal`** は {{domxref("TextDecoder")}} インターフェイスの読み取り専用プロパティで、エラーモードが fatal であるかどうかを論理値で示します。

このプロパティが `true` であった場合、デコーダーがデコード中に正しくない形のデータに遭遇した場合、{{jsxref("TypeError")}} が発生します。
`false` であった場合、デコーダーは無効なデータを置換文字 `U+FFFD` (�) で置き換えます。
このプロパティの値は [`TextDecoder()` コンストラクター](/ja/docs/Web/API/TextDecoder/TextDecoder)で設定されます。

## 値

論理値で、エラーモードが `fatal` に設定されている場合は `true` となります。
そうでない場合は `false` となり、エラーモードが `replacement` であることを示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
