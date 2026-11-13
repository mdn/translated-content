---
title: JavaScript 静的メソッドページのテンプレート
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_static_method_page_template
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
> ページ上部のフロントマターは「ページのメタデータ」を定義するために使用します。値は、個々のメソッドに応じて適切に更新してください。
>
> ```md
> ---
> title: Constructor.nameOfTheMethod()
> short-title: nameOfTheMethod()
> slug: Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheMethod
> l10n:
>   sourceCommit: 翻訳元コミットID
> ---
> ```
>
> - **title**
>   - : ページの最上部に表示される見出しです。`Constructor.nameOfTheMethod()` の形式にします。例えば、[`Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array) クラスの [`from()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from) メソッドの _title_ は `Array.from()` です。
> - **short-title**
>   - : パンくずリストやサイドバーで使用する短いタイトルです。`nameOfTheMethod()` の形式にします。例えば、[`from()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from) メソッドの _short-title_ は `from()` です。
> - **slug**
>   - : `https://developer.mozilla.org/ja/docs/` の後に続く URL の末尾です。`Web/JavaScript/Reference/Global_Objects/Constructor/nameOfTheMethod` のような形式にします。slug 内のメソッド名には括弧を含めず、末尾は `nameOfTheMethod` となり、`nameOfTheMethod()` にはなりません。
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

**`Constructor.nameOfTheMethod()`** 静的メソッドは何らかの処理を行います。できれば 1、2 文にまとめてください。この説明はコンストラクターのランディングページにも記載し、内容を一致させてください。例えば、ランディングページには次のような項目を記載します。

```md
- \{{jsxref("Constructor.nameOfTheMethod()")}}
  - : 何らかの処理を行います。
```

## 構文

[構文の節](/ja/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections)の記事のガイドラインに従って、構文ボックスを記入してください。

```js-nolint
Constructor.nameOfTheMethod(parameter1)
Constructor.nameOfTheMethod(parameter1, parameter2)
```

### 引数

- `parameter1`
  - : 引数の概要とその動作を簡潔に記述してください。引数ごとに用語と定義を 1 つずつ記載してください。省略可能でない引数の場合は、`\{{optional_inline}}` マクロの呼び出しを削除してください。
- `parameter2` {{optional_inline}}
  - : など。

> [!NOTE]
> この節は必須です。引数がない場合は、定義リストの代わりに "None." と記載してください。

### 返値

メソッドの返値について、データ型とそれが表すものを含めて説明してください。例えば、「何かを表す {{jsxref("Number")}} です。」のように記述します。

何も返さないメソッドの場合は、"None ({{jsxref('undefined')}})." と記載してください。

メソッドがプロミスを返す場合は、すでに履行されているか、非同期に履行されるか、および履行値を明記してください。拒否されるプロミスについては、「例外」の節に記載してください。

### 例外

- {{jsxref("TypeError")}}
  - : 次のいずれかの場合に発生します。
    - 条件 1。
    - 条件 2。
    - など。
- {{jsxref("RangeError")}}
  - : ～の場合に発生します。

できる限り網羅的に記述してください。一般に、ゲッターの実行や型変換など、ユーザーコードの呼び出しによって発生する可能性のある例外は列挙しないでください。文字列を期待する引数にシンボルを渡す、コールバックとして関数以外を渡すといった、型の不一致による例外も列挙しないでください。

## 解説

メソッドについての説明の大部分はこの節に記載し、できる限り網羅的に説明してください。同じ説明を複数のページで共有する場合は、クラスのランディングページに新しい節を追加し、このページからリンクすることを検討してください。例えば、[配列メソッドと空のスロット](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#配列メソッドと空のスロット)は、すべての配列メソッドのページからリンクされています。

読者が以下の例を読まなくても、この節だけで API の全体像を理解できるようにしてください。この節に例を含める必要がある場合は簡潔にします。実際の利用場面に即した例でなくてもかまいません。

## 例

英語版では、例が 1 つだけのページでも、複数形の "Examples" を使用しています。

### 説明的な見出し

それぞれの例には、その例の内容を説明する H3 見出し (`###`) が必要です。見出しには例で何を行うかを具体的に記述してください。「単純な例」のような、何を示すのか分からない見出しは避けてください。見出しは簡潔にし、詳しい説明は見出しの後の段落に記載してください。最初の例には「nameOfTheMethod() の使用」のような見出しを付けてもかまいません。

詳しくは、[サンプルコード](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples)を追加する方法のガイドを参照してください。

## 仕様書

`\{{Specifications}}`

_このマクロを使用するには、Markdown ファイルから逆引用符とバックスラッシュを削除してください。_

## ブラウザーの互換性

`\{{Compat}}`

_このマクロを使用するには、Markdown ファイルから逆引用符とバックスラッシュを削除してください。_

## 関連情報

現在のメソッドに関連するリファレンスページやガイドへのリンクを記載してください。その他のガイドラインについては、執筆スタイルガイドの[「関連情報」の節](/ja/docs/MDN/Writing_guidelines/Writing_style_guide#関連情報)を参照してください。

- [`Constructor.nameOfTheMethod` のポリフィル (core-js)](https://core-js.io/docs/)
- [`Constructor.nameOfTheMethod` のポリフィル (es-shims)](https://www.npmjs.com/package/es-aggregate-error)
- リンク1
- リンク2
- 外部リンク (年)
