---
title: Replaced elements (置換要素)
slug: Glossary/Replaced_elements
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

ウェブ開発において**置換要素**とは、そのコンテンツが外部リソースまたは文書構造外で定義されたコンテンツによって置き換えられ、 CSS レンダリングモデルの対象外となる HTML 要素を指します。これらは、その表現が CSS の整形モデルから独立した外部オブジェクトです。

次の要素は置換要素になることができます。

- {{HTMLElement("img")}}
- {{HTMLElement("video")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("fencedframe")}}

次の要素は、特定の場合にのみ置換要素として扱われます。

- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("object")}}
- {{HTMLElement("input")}} （`image` 入力型のみ）

置換要素にはよく、{{glossary("intrinsic size", "内在的な寸法")}}と{{glossary("aspect ratio", "内在的な比率")}}が存在します。例えば、 `<img>` 要素のコンテンツは通常、その src 属性で定義される画像によって置換されます。その画像には絶対単位で指定された固有の幅と固有の高さがあり、これがアスペクト比を決定します。

フォームコントロールは、画像に置き換えられる `<input type="image">` を除き、一般的に置換されないウィジェットです。 CSS の {{cssxref("content")}} プロパティを使用して挿入されたオブジェクトは、無名置換要素です。これらは HTML マークアップに存在しないため「無名」と呼ばれます。

## 関連情報

- {{glossary("void element", "空要素")}}
- {{glossary("Inline-level content", "インラインレベルコンテンツ")}}
- [Replaced elements in CSS display specification](https://drafts.csswg.org/css-display/#replaced-element)
- [Replaced elements in HTML specification](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)s
