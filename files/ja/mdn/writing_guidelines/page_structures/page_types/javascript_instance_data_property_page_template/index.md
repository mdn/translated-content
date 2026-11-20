---
title: JavaScript インスタンスのデータプロパティページのテンプレート
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_instance_data_property_page_template
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

> [!NOTE]
> _この説明文全体を削除してから公開してください。_
>
> **訳注:** このテンプレートは翻訳記事用です。新たな記事を執筆する場合は、英語版を参照してください。日本語の単独記事を立項することはできません。
>
> ---
>
> **ページのフロントマター:**
>
> ページ上部のフロントマターは「ページのメタデータ」を定義するために使用します。値は、個々のプロパティに応じて適切に更新してください。
>
> ```md
> ---
> title: "Constructor: nameOfTheProperty"
> short-title: nameOfTheProperty
> slug: Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheProperty
> l10n:
>   sourceCommit: 翻訳元コミットID
> ---
> ```
>
> - **title**
>   - : ページの最上部に表示される見出しです。インスタンスデータプロパティは、各インスタンスまたは `Constructor.prototype` に設定されます。前者は `Constructor: nameOfTheProperty`、後者は `Constructor.prototype.nameOfTheProperty` の形式にします。例えば、[`Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array) クラスの [`length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length) プロパティのタイトルは `Array: length` であり、[`Error`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error) クラスの [`name`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error/name) プロパティのタイトルは `Error.prototype.name` です。正確に記述するため、仕様書を確認してください。
> - **short-title**
>   - : パンくずリストやサイドバーで使用する短いタイトルです。`nameOfTheProperty` の形式にします。例えば、[`length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length) プロパティの _short-title_ は `length` です。
> - **slug**
>   - : `https://developer.mozilla.org/ja/docs/` の後に続く URL の末尾です。`Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheProperty` のような形式にします。
> - **sourceCommit**
>   - : （翻訳記事のみ）翻訳元の英語版記事の GitHub コミット ID を記述します。GitHub 上で英語版記事のコミット ID を確認してください。
>
> ---
>
> **ページ先頭のマクロ**
>
> コンテンツ部の上部（ページのフロントマターのすぐ下）には、いくつかのマクロ呼び出しが現れます。
>
> **訳注:** 英語版では以下のマクロは自動的に追加・更新されますが、翻訳記事には自動的に反映されません。翻訳時に英語版に合わせて手動で追加、更新、削除してください。
>
> - `\{{SeeCompatTable}}` — これは **実験的な機能です。** のバナーを生成し、この技術が[実験的](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#実験的)であることを示します。その技術が実験的で、Firefox の設定で隠されている場合は、[Firefox での実験的な機能](/ja/docs/Mozilla/Firefox/Experimental_features)ページにも項目を記入してください。
> - `\{{Non-standard_Header}}` — これは **標準外** バナーを生成し、この機能がどの仕様書にも含まれていないことを示します。
>
> **訳注:** 英語版では状態ヘッダーマクロは自動的に更新されますが、翻訳記事では更新されません。翻訳時に英語版に合わせて手動で更新してください。
>
> **実験的** と **標準外** のバナーの例を、このメモブロックの直後に示します。
>
> _この説明文全体を削除してから公開してください。_

> [!NOTE]
> 一貫した JavaScript リファレンスページを書くうえで最も重要な原則は、**周囲の記事をよく見ること**です。このテンプレートの要件以外にも、関連する多くのページで共通の構成が使われています。例えば、すべての Proxy ハンドラーや、多くの配列メソッドのページがそうです。まず、似た API の既存ドキュメントを探し、その構成を参考にしてください。

**`nameOfTheProperty`** は、`\{{jsxref("Constructor")}}` インスタンスのデータプロパティで、何らかの値を保持します。プロパティが `Constructor.prototype` に設定されている場合は、「`Constructor.prototype` の **`nameOfTheProperty`** データプロパティは、すべての `\{{jsxref("Constructor")}}` インスタンスで共有され、何らかの値を保持します。」と記載してください。できれば 1、2 文にまとめてください。この説明はコンストラクターのランディングページにも記載し、内容を一致させてください。例えば、ランディングページには次のような項目を記載します。

```md
- \{{jsxref("Constructor/nameOfTheProperty", "nameOfTheProperty")}}
  - : 何らかの値を保持します。
```

## 値

値のデータ型と、それが表すものを記述してください。

例えば、「配列の要素数を表す、……未満の非負整数です。」のように記述します。

`\\{{js_property_attributes(1, 0, 0)}}`

`js_property_attributes` に渡す 3 つの数値は、それぞれ `configurable`、`enumerable`、`writable` 属性を表します。仕様書を確認するか、実験して値を調べてください。オブジェクトの作成方法によって属性の組み合わせが複数ある場合や、プロパティが条件付きで存在する場合は、その旨を注記してください。

## 解説

プロパティについての説明の大部分はこの節に記載し、できる限り網羅的に説明してください。同じ説明を複数のページで共有する場合は、クラスのランディングページに新しい節を追加し、このページからリンクすることを検討してください。例えば、[配列メソッドと空のスロット](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#配列メソッドと空のスロット)は、すべての配列メソッドのページからリンクされています。

読者が以下の例を読まなくても、この節だけで API の全体像を理解できるようにしてください。この節に例を含める必要がある場合は簡潔にします。実際の利用場面に即した例でなくてもかまいません。

## 例

英語版では、例が 1 つだけのページでも、複数形の "Examples" を使用しています。

### 説明的な見出し

それぞれの例には、その例の内容を説明する H3 見出し (`###`) が必要です。見出しには例で何を行うかを具体的に記述してください。「単純な例」のような、何を示すのか分からない見出しは避けてください。見出しは簡潔にし、詳しい説明は見出しの後の段落に記載してください。最初の例には「nameOfTheProperty の使用」のような見出しを付けてもかまいません。

詳しくは、[サンプルコード](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples)を追加する方法のガイドを参照してください。

## 仕様書

`\{{Specifications}}`

_このマクロを使用するには、Markdown ファイルから逆引用符とバックスラッシュを削除してください。_

## ブラウザーの互換性

`\{{Compat}}`

_このマクロを使用するには、Markdown ファイルから逆引用符とバックスラッシュを削除してください。_

## 関連情報

現在のプロパティに関連するリファレンスページやガイドへのリンクを記載してください。その他のガイドラインについては、執筆スタイルガイドの[「関連情報」の節](/ja/docs/MDN/Writing_guidelines/Writing_style_guide#関連情報)を参照してください。

- [`nameOfTheProperty` のポリフィル (core-js)](https://core-js.io/docs/)
- [`nameOfTheProperty` のポリフィル (es-shims)](https://www.npmjs.com/package/es-aggregate-error)
- リンク1
- リンク2
- 外部リンク (年)
