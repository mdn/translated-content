---
title: "CSSStyleSheet: rules プロパティ"
slug: Web/API/CSSStyleSheet/rules
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSSOM")}}{{deprecated_header}}

**`rules`** は {{domxref("CSSStyleSheet")}} インターフェイスの非推奨の古いプロパティです。機能的には推奨される {{domxref("CSSStyleSheet.cssRules", "cssRules")}} プロパティと同じで、
スタイルシートを構成する CSS ルールのライブ更新されるリストにアクセスすることができます。

> [!NOTE]
> 古いプロパティなので、`rules`は使用せず、代わりに推奨される {{domxref("CSSStyleSheet.cssRules", "cssRules")}} を使用しましょう。
> `rules` がすぐに削除される可能性は低いですが、利用できる範囲はそれほど広くなく、これを使用するとサイトやアプリの互換性に問題が発生します。

## 値

スタイルシートを構成する各 CSS ルールを格納するライブ更新される {{domxref("CSSRuleList")}} です。ルールリストの各項目は {{domxref("CSSRule")}} オブジェクトであり、スタイルシートを構成する 1 つのルールを記述しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)
- [動的スタイル情報の利用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
