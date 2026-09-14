---
title: "HTMLLIElement: value プロパティ"
short-title: value
slug: Web/API/HTMLLIElement/value
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`value`** は {{domxref("HTMLLIElement")}} インターフェイスのプロパティで、指定された {{HTMLElement("ol")}} 内のリスト要素の順序位置を示します。0 未満の場合もあります。 {{HTMLElement("li")}} 要素が {{HTMLElement("ol")}} 要素の子要素でない場合、このプロパティは意味を持ちません。

対応する {{htmlelement("li")}} 要素の [`value`](/ja/docs/Web/HTML/Reference/Elements/li#value) 属性を反映します。 `<li>` 要素に `value` コンテンツ属性が指定されていない場合、要素がレンダリング時に既定の連番の値を持つことができる場合でも、このプロパティは既定で `0` を返します。

## 値

整数です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
