---
title: "HTMLDetailsElement: open プロパティ"
short-title: open
slug: Web/API/HTMLDetailsElement/open
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
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
