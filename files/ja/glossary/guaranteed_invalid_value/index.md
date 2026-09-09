---
title: Guaranteed-invalid value (保証された無効な値)
slug: Glossary/guaranteed_invalid_value
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

CSS における保証された無効な値は {{CSSXref("initial")}} です。

[カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*) の値が保証された無効な値である場合、{{CSSXref("var")}} 関数はその値を置換に使用できません。有効な代替値が指定されていない状態で置換しようとすると、その宣言は _計算値の時点で無効_ になります。

## 関連情報

- CSS の {{CSSXref("initial")}}
- CSS の {{CSSXref("var")}}
- [CSS カスタムプロパティとカスケード変数モジュールレベル 1](https://drafts.csswg.org/css-variables/#guaranteed-invalid) 仕様書
