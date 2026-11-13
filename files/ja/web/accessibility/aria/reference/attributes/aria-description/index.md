---
title: aria-description
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-description
l10n:
  sourceCommit: 96157fa574bc2cd9f55ff1205198f24addc00104
---

グローバルな `aria-description` 属性は、現在の要素を説明または注釈する文字列値を定義します。

> [!NOTE]
> `aria-description` は、まだ ARIA 1.3 の W3C エディターズドラフトにあります。当面は、ARIA 1.1 からサポートされている `aria-describedby` を引き続き使用してください。

## 解説

グローバルな `aria-description` 属性は、開発者が現在の要素を説明または注釈付けして、支援技術ユーザーに優れた文脈を提供するためのメカニズムを提供します。

```html
<div
  role="application"
  aria-label="calendar"
  aria-description="Game schedule for the Boston Red Sox 2021 Season">
  <h1>Red Sox 2021</h1>
  <div role="grid">…</div>
</div>
```

`aria-description` 属性は、どちらも要素に関連付けるテキスト文字列を提供するという点で [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) と似ていますが、ラベルは短く簡潔である必要がある一方、説明はより多くの文脈と情報を提供することを目的としているため、長くても構いません。

`aria-description` と `aria-describedby` 属性の目的は同じです。どちらも設定されているオブジェクトの追加の説明テキストをユーザーに提供します。DOM で説明テキストを使用できる場合は、代わりに [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) を使用します。

`aria-description` 属性は、目に見える説明を提供することが、望ましくないユーザー体験である場合にのみ使用してください。`aria-describedby` 属性は、オブジェクトについての説明テキストを含む要素の `id` のリストを値として受け取ります。 `aria-description` は、`id` の参照によってオブジェクトに関連付けることができる適切な説明テキストがない場合に使用されます。両方の属性が存在する場合、{{glossary("accessible description", "アクセシブル説明")}} プロパティの定義では `aria-describedby` が優先されます。

説明の内容は、`aria-description` または `aria-describedby` のどちらで設定してもフラットな文字列にする必要があります。内容が非常に長い場合、セマンティックな意味要件がある場合、またはナビゲーション構造がある場合は、代わりに [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) を使用してください。

## 値

- `<string>`
  - : 値は、支援技術のユーザーに伝えることを目的とした、制約のない文字列値です。

## 関連インターフェイス

- {{domxref("Element.ariaDescription")}}
  - : {{domxref("Element")}} インターフェイスの一部である [`ariaDescription`](/ja/docs/Web/API/Element/ariaDescription) プロパティは、現在の要素を説明または注釈する文字列値を定義する `aria-description` 属性の値を反映します。

## 関連付けられたロール

**すべての**ロールで使用されます。

## 仕様書

{{Specifications}}

## 関連情報

- [HTML `title` 属性](/ja/docs/Web/HTML/Reference/Global_attributes/title)
- [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
