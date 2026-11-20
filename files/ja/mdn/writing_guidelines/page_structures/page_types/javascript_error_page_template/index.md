---
title: JavaScript エラーページのテンプレート
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_error_page_template
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
> ページ上部のフロントマターは「ページのメタデータ」を定義するために使用します。値は、個々のエラーに応じて適切に更新してください。
>
> ```md
> ---
> title: "TypeOfError: エラーメッセージ"
> slug: Web/JavaScript/Reference/Errors/Message_of_error
> l10n:
>   sourceCommit: 翻訳元コミットID
> ---
> ```
>
> - **title**
>   - : ページの最上部に表示される見出しです。`TypeOfError: エラーメッセージ` の形式にします。例えば、["SyntaxError: await is only valid in async functions, async generators and modules"](/ja/docs/Web/JavaScript/Reference/Errors/Bad_await) というエラーがあります。エラーメッセージには Firefox で表示されるものを使用してください。メッセージに識別子などのプレースホルダーが含まれる場合は、`x` のような任意の名前を使います。Firefox のソースコードにある `{0}` は使用しないでください。
> - **slug**
>   - : `https://developer.mozilla.org/ja/docs/` の後に続く URL の末尾です。`Web/JavaScript/Reference/Errors/Message_of_error` のような形式にします。通常はタイトルの空白をアンダースコアに置き換えて作成できますが、エラーメッセージが長すぎる場合は適宜短くしてください。`JSMSG_INCOMPATIBLE_PROTO` のような Firefox のエラーコードを `Incompatible_proto` のように変更して使うこともできますが、推奨度は低くなります。
> - **sourceCommit**
>   - : （翻訳記事のみ）翻訳元の英語版記事の GitHub コミット ID を記述します。GitHub 上で英語版記事のコミット ID を確認してください。
>
> ブラウザーの互換性や仕様書の情報は、エラーページには関係ありません。
>
> _この説明文全体を削除してから公開してください。_

> [!NOTE]
> 一貫した JavaScript リファレンスページを書くうえで最も重要な原則は、**周囲の記事をよく見ること**です。このテンプレートの要件以外にも、関連する多くのページで共通の構成が使われています。例えば、すべての Proxy ハンドラーや、多くの配列メソッドのページがそうです。まず、似た API の既存ドキュメントを探し、その構成を参考にしてください。

JavaScript の例外「エラーメッセージ」は、……の場合に発生します。

## エラーメッセージ

```plain
TypeOfError: V8 でのエラーメッセージ (V8-based)
TypeOfError: Firefox でのエラーメッセージ (Firefox)
TypeOfError: Safari でのエラーメッセージ (Safari)
```

複数のエンジンで同じエラーメッセージが使われている場合は、次の順序で記載してください。

- 1 行目には、必ず V8 で表示されるメッセージを記載します。他のエンジンでも同じ場合は、`(V8-based & Safari)` のように括弧内に併記できます。
- 2 行目には、必ず Firefox で表示されるメッセージを記載します。ただし、そのメッセージを 1 行目に含めた場合は、2 行目に Safari のメッセージを記載します。

Firefox の 1 つのエラーメッセージが、他のエンジンの複数のエラーメッセージに対応している場合は、他のエンジンの該当するメッセージを連続する行にすべて記載してください。

```plain
TypeOfError: V8 でのエラーメッセージ 1 (V8 ベース)
TypeOfError: V8 でのエラーメッセージ 2 (V8 ベース)
TypeOfError: Firefox でのエラーメッセージ (Firefox)
TypeOfError: Safari でのエラーメッセージ 1 (Safari)
TypeOfError: Safari でのエラーメッセージ 2 (Safari)
```

Firefox に非常によく似たエラーメッセージが 2 つある場合は、1 つのエラーページで両方を扱ってもかまいません。その場合は、Firefox の各エラーメッセージをそれぞれのグループに記載してください。

```plain
TypeOfError: V8 でのエラーメッセージ 1 (V8 ベース)
TypeOfError: Firefox でのエラーメッセージ 1 (Firefox)
TypeOfError: Safari でのエラーメッセージ 1 (Safari)

TypeOfError: V8 でのエラーメッセージ 2 (V8 ベース)
TypeOfError: Firefox でのエラーメッセージ 2 (Firefox)
TypeOfError: Safari でのエラーメッセージ 2 (Safari)
```

つまり、エラーリファレンスはすべて Firefox のエラーメッセージをキーとしており、他のエンジンのエラーメッセージは参考情報として掲載しています。

## エラー型

`\{{jsxref("TypeOfError")}}`。

## エラーの原因

何を誤っている可能性があるのか、JavaScript がそれを不適切と判断する理由、考えられる解決策を 1、2 段落で説明してください。

## 例

英語版では、例が 1 つだけのページでも、複数形の "Examples" を使用しています。

### 説明的な見出し

エラーページでは、他のページと異なり、H3 見出しは必須ではありません。エラーが発生する状況が 1 つだけの場合は、H3 見出しを省略し、文章で状況を説明してもかまいません。エラーの原因が複数考えられる場合は、見出しを使用してください。見出しには、その例で何が起きているのかを具体的に記述します。例えば、「単純な例」では何を示すのかが分からないため、適切な見出しとは言えません。見出しは簡潔にします。

詳しくは、[サンプルコード](/ja/docs/MDN/Writing_guidelines/Page_structures/Code_examples)を追加する方法のガイドを参照してください。

エラーの記事では、`example-bad` と `example-good` を使い分けるとよいでしょう。例えば、次のようにします。

次のようなコードを書いている可能性があります。

```js example-bad
// 誤ったコード
```

次のように変更してください。

```js example-good
// 修正したコード
```

## 関連情報

現在のエラーに関連するリファレンスページやガイドへのリンクを記載してください。その他のガイドラインについては、執筆スタイルガイドの[「関連情報」の節](/ja/docs/MDN/Writing_guidelines/Writing_style_guide#関連情報)を参照してください。

- リンク1
- リンク2
- 外部リンク (年)
