---
title: 解決値
slug: Web/CSS/resolved_value
tags:
  - CSS
  - ガイド
  - リファレンス
translation_of: Web/CSS/resolved_value
---
{{CSSRef}}

**解決値** は [CSS](/ja/docs/Web/CSS) プロパティにおいて、 {{domxref("Window.getComputedStyle", "getComputedStyle()")}} で返される値です。

ほとんどのプロパティでは[計算値](/ja/docs/Web/CSS/computed_value)がそのまま解決値となりますが、古いプロパティ（{{cssxref("width")}} と {{cssxref("height")}} を含む）では、代わりに[使用値](/ja/docs/Web/CSS/used_value)が解決値となります。プロパティごとの詳細については、以下の仕様書のリンクを参照してください。

## 仕様書

| 仕様書                                                      | 状態               | 備考     |
| ----------------------------------------------------------- | ------------------ | -------- |
| {{SpecName("CSSOM", "#resolved-values", "resolved value")}} | {{Spec2("CSSOM")}} | 初回定義 |

## 関連情報

- {{domxref("window.getComputedStyle")}}
- {{CSS_key_concepts}}
