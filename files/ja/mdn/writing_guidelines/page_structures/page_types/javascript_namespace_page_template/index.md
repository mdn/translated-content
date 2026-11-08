---
title: JavaScript 名前空間ページのテンプレート
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_namespace_page_template
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
> ページ上部のフロントマターは「ページのメタデータ」を定義するために使用します。値は、個々の名前空間に応じて適切に更新してください。
>
> ```md
> ---
> title: Namespace
> slug: Web/JavaScript/Reference/Global_Objects/Namespace
> l10n:
>   sourceCommit: 翻訳元コミットID
> ---
> ```
>
> - **title**
>   - : ページの最上部に表示される見出しです。`Namespace` の形式にします。例えば、[`Math`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math) 名前空間の _title_ は `Math` です。
> - **slug**
>   - : `https://developer.mozilla.org/ja/docs/` の後に続く URL の末尾です。`Web/JavaScript/Reference/Global_Objects/Namespace` のような形式にします。
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

**`Namespace`** 名前空間オブジェクトには、何らかの処理を行うための静的プロパティとメソッドがあります。できれば 1、2 文にまとめてください。通常、数文を超える段落を複数書くことは避けてください。重要な詳細は「解説」に記載します。

名前空間の重要な側面を示す[インタラクティブサンプル](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples#インタラクティブサンプル)を記載してください。これはまれなケースです。通常、インタラクティブサンプルは個々のメソッドやプロパティに対して用意します。名前空間全体を示す場合に限り、名前空間のインタラクティブサンプルを記載してください。例えば、{{jsxref("JSON")}} を使用した、構文解析からシリアライズまでの一連の処理などです。

{{InteractiveExample("JavaScript デモ: Namespace")}}

```js interactive-example
const data = Namespace.doSomething(1);
const result = Namespace.doSomethingElse(data);
console.log(result);
// 予想される結果: 42
```

## 解説

必ず、次の段落から始めてください。

ほとんどのグローバルオブジェクトとは異なり、`Namespace` はコンストラクターではありません。[`new` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/new)とともに使用したり、`Namespace` オブジェクトを関数として呼び出したりすることはできません。`Namespace` のすべてのプロパティとメソッドは静的です（{{jsxref("Math")}} オブジェクトと同様です）。

名前空間の解説には、次の内容を含めてください。

- API が役立つ理由についての背景情報
- サブページからリンクできる基本概念
- この API を利用する方法の概要
- 注意事項

必要に応じて H3 見出しを使用してください。

## 静的プロパティ

- \\{{jsxref("Namespace.nameOfTheProperty")}}
  - : 何らかの値を保持します。
- `Namespace[Symbol.toStringTag]`
  - : [`Symbol.toStringTag`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"Namespace"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## 静的メソッド

- \\{{jsxref("Namespace.nameOfTheMethod()")}}
  - : 何らかの処理を行います。

## 例

英語版では、例が 1 つだけのページでも、複数形の "Examples" を使用しています。

### 説明的な見出し

それぞれの例には、その例の内容を説明する H3 見出し (`###`) が必要です。見出しには例で何を行うかを具体的に記述してください。「単純な例」のような、何を示すのか分からない見出しは避けてください。見出しは簡潔にし、詳しい説明は見出しの後の段落に記載してください。最初の例には「Namespace の使用」のような見出しを付けてもかまいません。

詳しくは、[サンプルコード](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples)を追加する方法のガイドを参照してください。

## 仕様書

`\{{Specifications}}`

_このマクロを使用するには、Markdown ファイルから逆引用符とバックスラッシュを削除してください。_

## ブラウザーの互換性

`\{{Compat}}`

_このマクロを使用するには、Markdown ファイルから逆引用符とバックスラッシュを削除してください。_

## 関連情報

現在の名前空間に関連するリファレンスページやガイドへのリンクを記載してください。その他のガイドラインについては、執筆スタイルガイドの[「関連情報」の節](/ja/docs/MDN/Writing_guidelines/Writing_style_guide#関連情報)を参照してください。

- [`Namespace` のポリフィル (core-js)](https://core-js.io/docs/)
- [`Namespace` のポリフィル (es-shims)](https://www.npmjs.com/package/es-aggregate-error)
- リンク1
- リンク2
- 外部リンク (年)
