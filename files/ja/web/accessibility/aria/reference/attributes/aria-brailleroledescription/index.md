---
title: aria-brailleroledescription
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription
original_slug: Web/Accessibility/ARIA/Attributes/aria-brailleroledescription
l10n:
  sourceCommit: 134f9a1ab341bf9ad30358e5f3a59bd9204078df
---

{{AccessibilitySidebar}}

グローバルな `aria-brailleroledescription` 属性は、点字に変換することを意図した要素のロールについて、人間が判読可能で作者がローカライズした、短縮された説明を定義します。

## 解説

点字は、文字と数字を 1 対 1 で翻字したものではなく、さまざまな略語、短縮形、単語を表す文字 (表語文字と呼ばれる) が含まれています。

`aria-brailleroledescription` 属性を使用すると、ロールの長い説明を点字に変換する代わりに、`aria-roledescription` の短縮バージョンを提供できます。これは要素のロールについて人間が判読可能な、作者がローカライズした説明です。これによって、点字ディスプレイでのユーザーエクスペリエンスが向上します。

基本的に、`aria-brailleroledescription` の値は点字に変換される `aria-roledescription` 属性の短縮バージョンです。

```html
<article
  aria-roledescription="slide"
  aria-brailleroledescription="sld"
  aria-labelledby="slide1heading">
  <h1 id="slide1heading">Welcome to my talk</h1>
  <img alt="Me" src="images/me.jpg" />
</article>
```

スクリーンリーダーなどのほとんどの支援技術では、上記の内容を "slide, welcome to my talk. Image, Me." と読み上げます。点字支援技術では、点字で "sld welcome to my talk gra me" と表示されます。{{HTMLElement('article')}} セマンティクスには、`aria-roledescription` 属性によって "slide" ロールが与えられます。 "slide" は仕様では定義されていないロールですが、プレゼンテーションのスライドに与えられる一般的なロールです。点字では、ロールは "sld" と表示されます。 "gra" は "graphic" の略で、点字では "image" のロールがこのように短縮されます。

`aria-brailleroledescription` 属性は、 "group" や "region" などの非対話型コンテナーのロールの目的を明確にするため、または点字コンテキストで、ウィジェットのより具体的な説明を提供する場合にのみ使用するべきです。

`aria-brailleroledescription` 属性は、支援技術がロールの名前を点字でローカライズして表現する方法を上書きするため、値が不適切であると、ユーザーは点字ディスプレイ上の要素を理解して操作できなくなります。

[`aria-roledescription`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) が与えられている場合にのみ `aria-brailleroledescription` を使用してください。ただし、`aria-roledescription`の値が点字で機能する場合は、その属性の点字バージョンは必要ありません。一般に `aria-brailleroledescription` は、点字では `aria-roledescription` が冗長すぎるという、まれな場合にのみ使用してください。

覚えておくべきいくつかのルール:

- `aria-brailleroledescription` は、有効な ARIA ロールを持つ要素、または暗黙的なロールセマンティクスを持つ要素にのみ適用してください。
- `aria-brailleroledescription` が存在する場合、`aria-roledescription` の値とは異なる、空でなく、null ではない値を持つ必要があります。また、ARIA の明示的またはロール、あるいは暗黙的なセマンティックロールとは異なります。
- Unicode 点字パターンの使用は避けてください。使用する必要がある場合は、`aria-brailleroledescription` の値に Unicode 点字パターン、空白、点字パターンの dots-0 以外のコンテンツが含まれていることを確認してください。
- 値が常にドキュメントの言語にローカライズされていることを確認してください。

> [!WARNING]
> コンテンツが Unicode 点字パターンのみの場合、値はユーザーの優先翻訳テーブルに従って翻訳されません。

> [!NOTE]
> `aria-roledescription` をそのまま `aria-brailleroledescription` に使用しないでください。`aria-roledescription` が適切な点字表現を提供しない場合にのみ、この属性を含めてください。

次の場合、`aria-brailleroledescription` の値は点字ユーザーに公開されません:

- 値が空であるか、空白文字または空の点字パターン（dots-0 (U+2800)）のみが含まれている場合。
- この属性が適用される要素に、`generic` ロールを含む、`aria-brailleroledescription` が禁止されている明示的または暗黙的な WAI-ARIA ロールが付与されている場合。
- この属性が適用されている要素に、有効な `aria-roledescription` がない場合。

> [!NOTE]
> 点字リーダーなどの支援技術を日常的に使用するユーザーを対象にサイトやアプリケーションをテストし、コンテンツが点字で意味を成すことを確認してください。

## 値

- `<string>`
  - : 値は文字列であり、制約のない値型であり、点字に変換されることを意図しています。

## 関連付けられたロール

**すべて**のロールで使用されます（[`generic`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role) は除きます）。

## 仕様書

{{Specifications}}

## 関連情報

- {{domxref("Element.ariaBrailleRoleDescription")}}
- [`aria-roledescription`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription).
- [`Element.ariaRoleDescription`](/ja/docs/Web/API/Element/ariaRoleDescription)
