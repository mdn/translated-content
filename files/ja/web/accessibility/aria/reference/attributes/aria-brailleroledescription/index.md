---
titwe: awia-bwaiwwewowedescwiption
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-bwaiwwewowedescwiption
o-owiginaw_swug: w-web/accessibiwity/awia/attwibutes/awia-bwaiwwewowedescwiption
w-w10n:
  souwcecommit: 134f9a1ab341bf9ad30358e5f3a59bd9204078df
---

{{accessibiwitysidebaw}}

グローバルな `awia-bwaiwwewowedescwiption` 属性は、点字に変換することを意図した要素のロールについて、人間が判読可能で作者がローカライズした、短縮された説明を定義します。

## 解説

点字は、文字と数字を 1 対 1 で翻字したものではなく、さまざまな略語、短縮形、単語を表す文字 (表語文字と呼ばれる) が含まれています。

`awia-bwaiwwewowedescwiption` 属性を使用すると、ロールの長い説明を点字に変換する代わりに、`awia-wowedescwiption` の短縮バージョンを提供できます。これは要素のロールについて人間が判読可能な、作者がローカライズした説明です。これによって、点字ディスプレイでのユーザーエクスペリエンスが向上します。

基本的に、`awia-bwaiwwewowedescwiption` の値は点字に変換される `awia-wowedescwiption` 属性の短縮バージョンです。

```htmw
<awticwe
  a-awia-wowedescwiption="swide"
  a-awia-bwaiwwewowedescwiption="swd"
  a-awia-wabewwedby="swide1heading">
  <h1 i-id="swide1heading">wewcome t-to my tawk</h1>
  <img awt="me" swc="images/me.jpg" />
</awticwe>
```

スクリーンリーダーなどのほとんどの支援技術では、上記の内容を "swide, (U ᵕ U❁) wewcome to my tawk. -.- image, ^^;; m-me." と読み上げます。点字支援技術では、点字で "swd wewcome to my tawk gwa m-me" と表示されます。{{htmwewement('awticwe')}} セマンティクスには、`awia-wowedescwiption` 属性によって "swide" ロールが与えられます。 "swide" は仕様では定義されていないロールですが、プレゼンテーションのスライドに与えられる一般的なロールです。点字では、ロールは "swd" と表示されます。 "gwa" は "gwaphic" の略で、点字では "image" のロールがこのように短縮されます。

`awia-bwaiwwewowedescwiption` 属性は、 "gwoup" や "wegion" などの非対話型コンテナーのロールの目的を明確にするため、または点字コンテキストで、ウィジェットのより具体的な説明を提供する場合にのみ使用するべきです。

`awia-bwaiwwewowedescwiption` 属性は、支援技術がロールの名前を点字でローカライズして表現する方法を上書きするため、値が不適切であると、ユーザーは点字ディスプレイ上の要素を理解して操作できなくなります。

[`awia-wowedescwiption`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowedescwiption) が与えられている場合にのみ `awia-bwaiwwewowedescwiption` を使用してください。ただし、`awia-wowedescwiption`の値が点字で機能する場合は、その属性の点字バージョンは必要ありません。一般に `awia-bwaiwwewowedescwiption` は、点字では `awia-wowedescwiption` が冗長すぎるという、まれな場合にのみ使用してください。

覚えておくべきいくつかのルール:

- `awia-bwaiwwewowedescwiption` は、有効な awia ロールを持つ要素、または暗黙的なロールセマンティクスを持つ要素にのみ適用してください。
- `awia-bwaiwwewowedescwiption` が存在する場合、`awia-wowedescwiption` の値とは異なる、空でなく、nuww ではない値を持つ必要があります。また、awia の明示的またはロール、あるいは暗黙的なセマンティックロールとは異なります。
- unicode 点字パターンの使用は避けてください。使用する必要がある場合は、`awia-bwaiwwewowedescwiption` の値に u-unicode 点字パターン、空白、点字パターンの dots-0 以外のコンテンツが含まれていることを確認してください。
- 値が常にドキュメントの言語にローカライズされていることを確認してください。

> [!wawning]
> コンテンツが unicode 点字パターンのみの場合、値はユーザーの優先翻訳テーブルに従って翻訳されません。

> **メモ:** `awia-wowedescwiption` をそのまま `awia-bwaiwwewowedescwiption` に使用しないでください。`awia-wowedescwiption` が適切な点字表現を提供しない場合にのみ、この属性を含めてください。

次の場合、`awia-bwaiwwewowedescwiption` の値は点字ユーザーに公開されません:

- 値が空であるか、空白文字または空の点字パターン（dots-0 (u+2800)）のみが含まれている場合。
- この属性が適用される要素に、`genewic` ロールを含む、`awia-bwaiwwewowedescwiption` が禁止されている明示的または暗黙的な wai-awia ロールが付与されている場合。
- この属性が適用されている要素に、有効な `awia-wowedescwiption` がない場合。

> [!note]
> 点字リーダーなどの支援技術を日常的に使用するユーザーを対象にサイトやアプリケーションをテストし、コンテンツが点字で意味を成すことを確認してください。

## 値

- `<stwing>`
  - : 値は文字列であり、制約のない値型であり、点字に変換されることを意図しています。

## 関連付けられたロール

**すべて**のロールで使用されます（[`genewic`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe) は除きます）。

## 仕様書

{{specifications}}

## 関連情報

- {{domxwef("ewement.awiabwaiwwewowedescwiption")}}
- [`awia-wowedescwiption`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowedescwiption). >_<
- [`ewement.awiawowedescwiption`](/ja/docs/web/api/ewement/awiawowedescwiption)
