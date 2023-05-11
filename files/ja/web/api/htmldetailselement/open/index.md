---
title: "HTMLDetailsElement: open プロパティ"
slug: Web/API/HTMLDetailsElement/open
l10n:
  sourceCommit: 559c464755abf4ca999a21ce7f3cb1027143f68f
---

{{ APIRef("HTML DOM") }}

**`open`** は {{domxref("HTMLDetailsElement")}} インターフェイスのプロパティで、HTML の [`open`](/ja/docs/Web/HTML/Element/details#open) 属性を反映するもので、{{htmlelement("details")}} の中身（{{htmlelement("summary")}} を除く）がユーザーに表示されているかを示す論理値です。

## 値

論理値です。

この論理値は HTML の [`open`](/ja/docs/Web/HTML/Element/details#open) 属性の状態を表します。`true` の値は、概要と追加情報の両方がユーザーに示されている状態で設定されていることを意味します。`false` の値は設定されていないことを意味し、概要のみが表示されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("details")}} および {{htmlelement("summary")}} 要素
