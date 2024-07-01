---
title: "Element: id プロパティ"
short-title: id
slug: Web/API/Element/id
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ ApiRef("DOM") }}

**`id`** は {{domxref("Element")}} インターフェイスのプロパティで、グローバル属性の [**`id`**](/ja/docs/Web/HTML/Global_attributes/id) を反映した要素の識別子を表します。

`id` の値が空文字列でない場合は、文書内で固有でなければなりません。

`id` はよく {{domxref("Document.getElementById()", "getElementById()")}} で特定の要素を受け取るために使用します。他の一般的な用途としては、要素の [ID をセレクターとして](/ja/docs/Web/CSS/ID_selectors) [CSS](/ja/docs/Web/CSS) で文書をスタイル付けするために使用されます。

> **メモ:** 識別子は大文字小文字の区別がありますが、大文字小文字の区別だけで見分ける ID を作ることは避けてください。

## 値

文字列です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- DOM の [**id**](/ja/docs/Web/HTML/Global_attributes/id) グローバル属性
