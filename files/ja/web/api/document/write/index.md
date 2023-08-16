---
title: Document.write()
slug: Web/API/Document/write
---

{{ApiRef("DOM")}}

**`Document.write()`** メソッドは、テキストの文字列を {{domxref("document.open()")}} で開かれた文書ストリームに書き込みます。

> **メモ:** `document.write()` は文書の**ストリーム**に書き込みを行うため、閉じられた (読み込み済みの) 文書で `document.write()` を呼び出すと、自動的に `document.open()` が呼び出され、[文書はクリアされます](/ja/docs/Web/API/document.open#Notes)。

## 構文

```js
document.write(markup);
```

### 引数

- _markup_
  - : 文書に書き込まれるテキストを含む文字列です。

### 例

```html
<html>
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

{{EmbedLiveSample("Syntax")}}

## 注

出力したテキストは文書構造モデルにおいて構文解析されます。上記の例では、 `h1` 要素は文書中の一つのノードになります。

{{domxref("document.open()")}} を呼び出さずに読み込まれた文書へ書き込みを行うと、自動的に `document.open()` の呼び出しが実行されます。一度出力し終わったとき、ブラウザーにページの読み込みの終了を伝えるために、 {{domxref("document.close()")}} を呼び出すことが推奨されます。

`document.write()` の呼び出しがインラインの HTML の `<script>` タグ内で行われた場合、 `document.open()` は呼び出されません。次に例を示します。

```html
<script>
  document.write("<h1>Main title</h1>");
</script>
```

> **メモ:** `document.write()` および {{domxref("document.writeln")}} は、 [XHTML 文書では動作しません](/ja/docs/Archive/Web/Writing_JavaScript_for_HTML) (エラーコンソールに "Operation is not supported" \[`NS_ERROR_DOM_NOT_SUPPORTED_ERR`] エラーが表示されます)。これは、 .xhtml の拡張子を持つローカルファイルを開いたり、何らかの文書が `application/xhtml+xml` の {{Glossary("MIME type", "MIME タイプ")}}で提供されたときに発生します。詳細は [W3C XHTML FAQ](http://www.w3.org/MarkUp/2004/xhtml-faq#docwrite) で確認することができます。

> **メモ:** `document.write` は [deferred](/ja/docs/Web/HTML/Element/script#attr-defer) または [asynchronous](/ja/docs/Web/HTML/Element/script#attr-async) のスクリプト内では無視され、エラーコンソールに "A call to `document.write()` from an asynchronously-loaded external script was ignored" などのメッセージが表示されます。

> **メモ:** Edge のみ、`document.write()` を {{HTMLElement("iframe")}} 内で複数回呼び出すと、 SCRIPT70: Permission denied エラーが発生します。

> **メモ:** Chrome 55 からは、キャッシュされていない HTTP の場合、`document.write()` を通じて挿入された `<script>` 要素は実行されなくなります。これが成立するのに必要な条件の一覧については、[document.write() に対する介入](https://developers.google.com/web/updates/2016/08/removing-document-write)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("element.innerHTML")}}
- {{domxref("document.createElement()")}}
