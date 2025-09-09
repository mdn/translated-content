---
title: "Document: write() メソッド"
short-title: write()
slug: Web/API/Document/write
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ApiRef("DOM")}}

> [!WARNING]
> `document.write()` メソッドの使用は固く避けるべきです。
>
> [HTML 仕様書自体で次のように警告しています](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>)。
>
> > このメソッドの挙動はとても特異です。場合によっては、このメソッドは構文解析の実行中に [HTML パーサー](https://html.spec.whatwg.org/multipage/parsing.html#html-parser)の状態に影響を与え、結果として文書のソースに対応しない DOM を生成することがあります（例えば、書き込まれた文字列が "`<plaintext>`" や "`<!--`" であった場合など）。他にも、[`document.open()`](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-open) が呼び出されたかのように、最初に現在のページをクリアしてしまう場合もあります。さらに多くの場合、メソッドは単に無視されるか、例外が発生します。ユーザーエージェントは [このメソッドで挿入された `script` 要素の実行を回避することが明確に許可されています](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention)。さらに悪いことに、このメソッドの正確な動作はネットワークの遅延に依存する場合があり、デバッグがとても難しい失敗につながる可能性があります。これらすべての理由から、このメソッドを使用することは固く推奨されません。
> > したがって、`document.write()` を使用するのはやめましょう。そして可能であれば、使用している既存のコードを更新しましょう。

**`Document.write()`** メソッドは、テキストの文字列を {{domxref("document.open()")}} で開かれた文書ストリームに書き込みます。

> [!NOTE]
> `document.write()` は文書の**ストリーム**に書き込みを行うため、閉じられた (読み込み済みの) 文書で `document.write()` を呼び出すと、自動的に `document.open()` が呼び出され、[文書がクリアされます](/ja/docs/Web/API/Document/open#メモ)。

## 構文

```js-nolint
write(markup)
```

### 引数

- `markup`
  - : 文書に書き込まれるテキストを含む文字列です。

### 返値

なし ({{jsxref("undefined")}})。

### 例

```html
<html lang="ja">
  <head>
    <title>書き込み例</title>

    <script>
      function newContent() {
        document.open();
        document.write("<h1>新しい内容では、古い内容は削除されます！</h1>");
        document.close();
      }
    </script>
  </head>

  <body onload="newContent();">
    <p>元の文書コンテンツ。</p>
  </body>
</html>
```

{{EmbedLiveSample("Examples")}}

## メモ

出力したテキストは文書構造モデルにおいて構文解析されます。上記の例では、 `h1` 要素は文書中の一つのノードになります。

{{domxref("document.open()")}} を呼び出さずに読み込まれた文書へ書き込みを行うと、自動的に `document.open()` の呼び出しが実行されます。一度出力し終わったとき、ブラウザーにページの読み込みの終了を伝えるために、 {{domxref("document.close()")}} を呼び出すことが推奨されます。

`document.write()` の呼び出しがインラインの HTML の `<script>` タグ内で行われた場合、 `document.open()` は呼び出されません。次に例を示します。

```html
<script>
  document.write("<h1>メインタイトル</h1>");
</script>
```

> [!NOTE]
> `document.write()` および {{domxref("document.writeln")}} は、 XHTML 文書では動作しません（エラーコンソールに "Operation is not supported" \[`NS_ERROR_DOM_NOT_SUPPORTED_ERR`] エラーが表示されます）。これは、 .xhtml の拡張子を持つローカルファイルを開いたり、何らかの文書が `application/xhtml+xml` の {{Glossary("MIME type", "MIME タイプ")}}で提供されたときに発生します。詳細は [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite) で確認することができます。

> [!NOTE]
> `document.write` は [deferred](/ja/docs/Web/HTML/Reference/Elements/script#attr-defer) または [asynchronous](/ja/docs/Web/HTML/Reference/Elements/script#attr-async) のスクリプト内では無視され、エラーコンソールに "A call to `document.write()` from an asynchronously-loaded external script was ignored" などのメッセージが表示されます。

> [!NOTE]
> Edge のみ、`document.write()` を {{HTMLElement("iframe")}} 内で複数回呼び出すと、 SCRIPT70: Permission denied エラーが発生します。

> [!NOTE]
> Chrome 55 からは、キャッシュされていない HTTP の場合、`document.write()` を通じて挿入された `<script>` 要素は実行されなくなります。これが成立するのに必要な条件の一覧については、[document.write() に対する介入](https://developer.chrome.com/blog/removing-document-write/)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("element.innerHTML")}}
- {{domxref("document.createElement()")}}
