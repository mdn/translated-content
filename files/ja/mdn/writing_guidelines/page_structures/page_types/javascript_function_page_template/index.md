---
title: JavaScript 関数ページのテンプレート
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_function_page_template
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
> ページ上部のフロントマターは「ページのメタデータ」を定義するために使用します。値は、個々の関数に応じて適切に更新してください。
>
> ```md
> ---
> title: nameOfFunction()
> slug: Web/JavaScript/Reference/Global_Objects/nameOfFunction
> l10n:
>   sourceCommit: 翻訳元コミットID
> ---
> ```
>
> - **title**
>   - : ページの最上部に表示される見出しです。`nameOfFunction()` の形式にします。例えば、[`parseFloat()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) 関数のタイトルは `parseFloat()` です。
> - **slug**
>   - : `https://developer.mozilla.org/ja/docs/` の後に続く URL の末尾です。`Web/JavaScript/Reference/Global_Objects/nameOfFunction` のような形式にします。
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

**`nameOfFunction()`** 関数は何らかの処理を行います。できれば 1、2 文にまとめてください。通常、数文を超える段落は避け、詳しい情報は「解説」に記載してください。

関数の重要な特徴を示す[インタラクティブサンプル](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples#インタラクティブサンプル)を作成してください。

{{InteractiveExample("JavaScript Demo: nameOfFunction()")}}

```js interactive-example
const result = nameOfFunction(1);
console.log(result);
// 予想される結果: 42
```

## 構文

[構文の節](/ja/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections)の案内に従って、構文ボックスを記入してください。

```js-nolint
nameOfFunction(parameter1)
nameOfFunction(parameter1, parameter2)
```

### 引数

- `parameter1`
  - : 引数の簡単な説明と、その役割を記載してください。引数ごとに用語と定義を 1 つずつ記載してください。引数が省略可能でない場合は、\\{{optional_inline}} マクロ呼び出しを削除してください。
- `parameter2` {{optional_inline}}
  - : 同様です。

> [!NOTE]
> この節は必須です。引数がない場合は、定義リストの代わりに「なし」と記載してください。

### 返値

関数の返値について、データ型とそれが表すものを含めて説明してください。例えば、「何らかの値を表す {{jsxref("Number")}} です。」のように記述します。

何も返さない関数の場合は、「なし（{{jsxref("undefined")}}）」と記載してください。

関数がプロミスを返す場合は、「何らかの値を表す {{jsxref("Number")}} で履行される {{jsxref("Promise")}} です。」の形式にします。拒否されたプロミスについては、「例外」の節に記載してください。

### 例外

- {{jsxref("TypeError")}}
  - : 次のいずれかの場合に発生します。
    - 条件 1。
    - 条件 2。
    - など。
- {{jsxref("RangeError")}}
  - : ……の場合に発生します。

できる限り網羅的に記載してください。通常、ゲッターの実行や型変換など、ユーザーコードの呼び出しによって発生する可能性のある例外は列挙しません。文字列を期待する引数にシンボルを渡す場合や、コールバックに関数以外を渡す場合など、型の不一致による例外も列挙しません。

## 解説

関数の説明の大部分はこの節に記載し、できる限り網羅的に説明してください。読者が以下の例を読まなくても、この節だけで API の全体像を理解できるようにしてください。この節に例を含める必要がある場合は、簡潔にします。実際の利用場面に即した例でなくてもかまいません。

例えば、{{jsxref("Array.prototype.map()")}} のリファレンスでは、コールバック関数を配列の各要素に適用し、その結果から新しい配列を生成することを説明しています。このように、関数の用途、動作、重要な注意点を記述してください。

## 例

英語版では、例が 1 つだけのページでも、複数形の "Examples" を使用しています。

### 説明的な見出し

それぞれの例には、その例の内容を説明する H3 見出し (`###`) が必要です。見出しには例で何を行うかを具体的に記述してください。「単純な例」のような、何を示すのか分からない見出しは避けてください。見出しは簡潔にし、詳しい説明は見出しの後の段落に記載してください。最初の例には「nameOfFunction() の使用」のような見出しを付けてもかまいません。

詳しくは、[サンプルコード](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples)を追加する方法のガイドを参照してください。

## 仕様書

`\{{Specifications}}`

_このマクロを使用するには、Markdown ファイルから逆引用符とバックスラッシュを削除してください。_

## ブラウザーの互換性

`\{{Compat}}`

_このマクロを使用するには、Markdown ファイルから逆引用符とバックスラッシュを削除してください。_

## 関連情報

現在の関数に関連するリファレンスページやガイドへのリンクを記載してください。その他のガイドラインについては、執筆スタイルガイドの[「関連情報」の節](/ja/docs/MDN/Writing_guidelines/Writing_style_guide#関連情報)を参照してください。

- [`nameOfFunction` のポリフィル (core-js)](https://core-js.io/docs/)
- [`nameOfFunction` のポリフィル (es-shims)](https://www.npmjs.com/package/es-aggregate-error)
- リンク1
- リンク2
- 外部リンク (年)
