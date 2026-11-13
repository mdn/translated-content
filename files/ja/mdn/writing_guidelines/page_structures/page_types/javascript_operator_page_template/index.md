---
title: JavaScript 演算子ページのテンプレート
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_operator_page_template
l10n:
  sourceCommit: 4c5b1bd7b5f9142c4c53ab6321e19bfdfaf1ddda
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
> ページ上部のフロントマターは「ページのメタデータ」を定義するために使用します。値は、個々の演算子に応じて適切に更新してください。
>
> ```md
> ---
> title: Operator (symbol)
> slug: Web/JavaScript/Reference/Operators/Operator
> l10n:
>   sourceCommit: 翻訳元コミットID
> ---
> ```
>
> - **title**
>   - : ページの最上部に表示される見出しです。`Operator (symbol)` の形式にします。例えば、[加算 (`+`)](/ja/docs/Web/JavaScript/Reference/Operators/Addition) 演算子の _title_ は `加算 (+)` です。
> - **slug**
>   - : `https://developer.mozilla.org/ja/docs/` の後に続く URL の末尾です。`Web/JavaScript/Reference/Operators/Operator` のような形式にします。
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

{{SeeCompatTable}}{{Non-standard_Header}}

**演算子 (`symbol`)** 演算子は何らかの処理を行います。できれば 1、2 文にまとめてください。通常、数文を超える段落を複数書くことは避けてください。重要な詳細は「解説」に記載します。

演算子の重要な側面を示す[インタラクティブサンプル](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples#インタラクティブサンプル)を記載してください。

{{InteractiveExample("JavaScript デモ: Operator (symbol) 演算子")}}

```js interactive-example
console.log(2 + 2);
// 予想される結果: 4
```

## 構文

[構文の節](/ja/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections)の記事のガイドラインに従って、構文ボックスを記入してください。

```js-nolint
x operator y
```

- `x`
  - : 左オペランドを式として説明し、評価結果がどのような型になりうるかを記載してください。
- `y`
  - : 右オペランドを式として説明し、評価結果がどのような型になりうるかを記載してください。

## 解説

演算子についての説明の大部分はこの節に記載します。式の評価結果、型変換、例外が発生する条件を説明し、できる限り網羅的に記述してください。読者が以下の例を読まなくても、この節だけで API の全体像を理解できるようにしてください。この節に例を含める必要がある場合は簡潔にします。実際の利用場面に即した例でなくてもかまいません。

## 例

英語版では、例が 1 つだけのページでも、複数形の "Examples" を使用しています。

### 説明的な見出し

それぞれの例には、その例の内容を説明する H3 見出し (`###`) が必要です。見出しには例で何を行うかを具体的に記述してください。「単純な例」のような、何を示すのか分からない見出しは避けてください。見出しは簡潔にし、詳しい説明は見出しの後の段落に記載してください。最初の例には「[演算子名] 演算子の使用」のような見出しを付けてもかまいません。

詳しくは、[サンプルコード](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples)を追加する方法のガイドを参照してください。

## 仕様書

`\{{Specifications}}`

_このマクロを使用するには、Markdown ファイルから逆引用符とバックスラッシュを削除してください。_

## ブラウザーの互換性

`\{{Compat}}`

_このマクロを使用するには、Markdown ファイルから逆引用符とバックスラッシュを削除してください。_

## 関連情報

現在の演算子に関連するリファレンスページやガイドへのリンクを記載してください。その他のガイドラインについては、執筆スタイルガイドの[「関連情報」の節](/ja/docs/MDN/Writing_guidelines/Writing_style_guide#関連情報)を参照してください。

- リンク1
- リンク2
- 外部リンク (年)
