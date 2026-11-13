---
title: aria-braillelabel
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel
original_slug: Web/Accessibility/ARIA/Attributes/aria-braillelabel
l10n:
  sourceCommit: 134f9a1ab341bf9ad30358e5f3a59bd9204078df
---

{{AccessibilitySidebar}}

グローバルな `aria-braillelabel` 属性は、点字に変換することを目的とした、現在の要素にラベル付けする文字列の値を定義します。

## 解説

グローバルな `aria-braillelabel` 属性は、現在の要素にラベル付けする文字列の値を定義するという点で、 [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) に似ています。`aria-label` はスクリーンリーダーによって読み取られる一方で、`aria-braillelabel` 属性の内容は点字に変換され、ユーザーには点字で認識可能なオブジェクトの名前が提供されます。

`aria-braillelabel` 属性の目的は、支援技術が要素のアクセシブル名を点字でローカライズして表現する方法を上書きすることです。この属性がなければアクセシブル名が点字に変換されたときに望ましいユーザーエクスペリエンスにならない場合にのみ、使用してください。

`aria-braillelabel` を使用する場合は、次の点を確認してください:

- `aria-braillelabel` が適用される要素には有効なアクセシブル名があります。
- `aria-braillelabel` の値には実際のコンテンツが含まれており、空ではなく、Unicode または Unicode 点字の空白のみではありません。
- 値はアクセシブル名と同じではありません。
- `aria-braillelabel` の値はドキュメントの言語に合わせてローカライズされます。
- 特にコンテンツに Unicode 点字パターンが含まれている場合は、この属性が利用可能であることをユーザーに伝え、ユーザー固有の点字翻訳を適用するための設定をユーザーが設定できるようにしてください。

> [!NOTE]
> 点字をサポートする支援技術は、アクセシブル名を点字に変換できます。
> したがって、アクセシブル名が望ましいユーザーエクスペリエンスではない場合にのみ `aria-braillelabel` を使用してください。

アクセシブル名（例：コンテンツから付与されたり、`aria-label` を用いて付与するもの）のみを使用することで、ほとんどの場合ユーザーエクスペリエンスが向上します。そのため、aria-label をそのまま `aria-braillelabel` に付与しないでください。アクセシブル名で適切な点字表現を提供できない場合にのみ `aria-braillelabel` を使用してください。

```html
<button aria-braillelabel="***">
  <img alt="3 out of 5 stars" src="three_stars.png" />
</button>
```

点字ディスプレイでは、冗長な「btn gra 3 out of 5 stars」ではなく、「btn \*\*\*」と点字で表示される場合があります。

## 値

- `<string>`
  - : 値は、点字に変換することを目的とした、制約のない文字列です。

## 関連付けられたロール

**すべて**のロールで使用されます。

## 仕様書

{{Specifications}}

## 関連情報

- {{domxref("Element.ariaBrailleLabel")}}
- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-brailleroledescription`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription)
