---
title: JavaScript クラスページのテンプレート
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_class_page_template
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
> ページ上部のフロントマターは「ページのメタデータ」を定義するために使用します。値は、個々のクラスに応じて適切に更新してください。
>
> ```md
> ---
> title: Constructor
> slug: Web/JavaScript/Reference/Global_Objects/Constructor
> l10n:
>   sourceCommit: 翻訳元コミットID
> ---
> ```
>
> - **title**
>   - : ページの最上部に表示される見出しです。クラス名を指定します。例えば、[`Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array) クラスのタイトルは `Array` です。
> - **slug**
>   - : `https://developer.mozilla.org/ja/docs/` の後に続く URL の末尾です。`Web/JavaScript/Reference/Global_Objects/Constructor` のような形式にします。
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
> - `\{{SeeCompatTable}}` — これは **実験的な機能です。** のバナーを生成し、この技術が[実験的](/ja/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#実験的)であることを示します。その技術が Firefox の設定で隠されている場合は、[Firefox での実験的な機能](/ja/docs/Mozilla/Firefox/Experimental_features)ページにも項目を記入してください。
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

クラスの導入段落では、クラス名と、そのクラスのオブジェクトが何を表すかを説明してください。できれば 1、2 文にまとめます。通常、数文を超える段落は避け、詳しい情報は「解説」に記載してください。

例えば、[Array のリファレンスページ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)では、`Array` オブジェクトが複数のアイテムを 1 つの変数名の下にまとめ、一般的な配列操作を行うためのメンバーを提供することを説明しています。このように、クラスの役割が読者に伝わる概要にしてください。

（該当する場合）`Constructor` が `\{{jsxref("BaseConstructor")}}` のサブクラスであることを記述してください。

クラスの重要な特徴を示す[インタラクティブサンプル](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples#インタラクティブサンプル)を作成してください。ただし、インタラクティブサンプルを作成するのはまれです。通常は、コンストラクターや個々のメソッドごとに例を用意します。例えば、{{jsxref("Map")}} を使った CRUD ワークフロー全体のように、クラス全体の動作を示す例がある場合に限り、クラスページにインタラクティブサンプルを記載してください。

{{InteractiveExample("JavaScript Demo: Constructor")}}

```js interactive-example
const obj = new Constructor();
console.log(obj.something);
// 予想される結果: 42
```

## 解説

クラスの解説には、次の内容を含めてください。

- API が役立つ理由の背景情報
- サブページからリンクできる基本概念
- この API を操作する方法の概要
- 注意事項

必要に応じて H3 見出しを使用してください。

## コンストラクター

- `\{{jsxref("Constructor/Constructor", "Constructor()")}}`
  - : 新しい `Constructor` オブジェクトを生成します。

## 静的プロパティ

- `\{{jsxref("Constructor.nameOfTheProperty")}}`
  - : 何らかの値を保持します。

## 静的メソッド

- `\{{jsxref("Constructor.nameOfTheMethod()")}}`
  - : 何らかの処理を行います。

## インスタンスプロパティ

これらのプロパティは `Constructor.prototype` に定義され、すべての `Constructor` インスタンスで共有されます。

- `\{{jsxref("Object/constructor", "Constructor.prototype.constructor")}}`
  - : インスタンスオブジェクトを生成したコンストラクター関数です。`Constructor` インスタンスでは、初期値は `\{{jsxref("Constructor/Constructor", "Constructor")}}` コンストラクターです。
- `\{{jsxref("Constructor.prototype.nameOfTheProperty")}}`
  - : 何らかの値を返します。
- `Constructor.prototype[Symbol.toStringTag]`
  - : [`Symbol.toStringTag`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"Constructor"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

以下のプロパティは、`Constructor` の各インスタンス自身が持つプロパティです。

- `\{{jsxref("Constructor/nameOfTheProperty", "nameOfTheProperty")}}`
  - : 何らかの値を保持します。

## インスタンスメソッド

- `\{{jsxref("Constructor.prototype.nameOfTheMethod()")}}`
  - : 何らかの値を返します。

## 例

英語版では、例が 1 つだけのページでも、複数形の "Examples" を使用しています。

### 説明的な見出し

それぞれの例には、その例の内容を説明する H3 見出し (`###`) が必要です。見出しには例で何を行うかを具体的に記述してください。「単純な例」のような、何を示すのか分からない見出しは避けてください。見出しは簡潔にし、詳しい説明は見出しの後の段落に記載してください。最初の例には「Constructor の使用」のような見出しを付けてもかまいません。

詳しくは、[サンプルコード](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples)を追加する方法のガイドを参照してください。

## 仕様書

`\{{Specifications}}`

_このマクロを使用するには、Markdown ファイルから逆引用符とバックスラッシュを削除してください。_

## ブラウザーの互換性

`\{{Compat}}`

_このマクロを使用するには、Markdown ファイルから逆引用符とバックスラッシュを削除してください。_

## 関連情報

現在のクラスに関連するリファレンスページやガイドへのリンクを記載してください。その他のガイドラインについては、執筆スタイルガイドの[「関連情報」の節](/ja/docs/MDN/Writing_guidelines/Writing_style_guide#関連情報)を参照してください。

- [`Constructor` のポリフィル (core-js)](https://core-js.io/docs/)
- [`Constructor` のポリフィル (es-shims)](https://www.npmjs.com/package/es-aggregate-error)
- リンク1
- リンク2
- 外部リンク (年)
