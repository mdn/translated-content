---
title: "Document: getElementsByTagNameNS() メソッド"
short-title: getElementsByTagNameNS()
slug: Web/API/Document/getElementsByTagNameNS
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("DOM")}}

指定された名前空間の指定されたタグ名を持つ要素のリストを返します。ルートノードを含め、文書全体が検索されます。

## 構文

```js-nolint
getElementsByTagNameNS(namespace, name)
```

### 引数

- `namespace`
  - : 検索する要素の名前空間 URI です（{{domxref("Element.namespaceURI", "element.namespaceURI")}} を参照）。
- `name`
  - : 検索する要素のローカル名、またはすべての要素に一致する特殊な値 `*` です（{{domxref("Element.localName", "element.localName")}} を参照）。

### 返値

見つかった要素の生きた {{DOMxRef("NodeList")}}（但し下記のメモを参照）で、ツリーに現れる順です。

> [!NOTE]
> W3C の仕様書では返値は `NodeList` であるとされていますが、Firefox ではこのメソッドは {{DOMxRef("HTMLCollection")}} を返します。
> Opera は `NodeList` を返しますが、 `namedItem` メソッドを実装しているので、 `HTMLCollection` と同様になります。2012 年 1 月時点で、 WebKit ブラウザーのみが純粋な `NodeList` の値を返します。
> 詳しくは [bug 14869](https://bugzil.la/14869) を参照してください。

> [!NOTE]
> 現在、このメソッドの引数は大文字と小文字を区別しますが、 Firefox 3.5 以前は大文字と小文字を区別していませんでした。
> 詳しくは [Firefox 3.6 の開発者リリースノート](/ja/docs/Mozilla/Firefox/Releases/3.6#dom)および {{domxref("Element.getElementsByTagNameNS")}} のブラウザーの互換性のメモをご覧ください。

## 例

以下の例では、 `getElementsByTagNameNS` は特定の親要素から始め、 DOM 内を親要素から再帰的に通して検索し、タグの `name` が引数に一致する子要素を検索します。

なお、 `getElementsByTagName` が呼び出されたノードが `document` ではない場合、実際には {{domxref("element.getElementsByTagNameNS")}} メソッドが使用されます。

以下の例を使用するには、新しいファイルにそのままコピー＆ペーストして、 .xhtml の拡張子で保存してください。

```html-nolint
<html lang="ja" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>getElementsByTagNameNS の例</title>

    <script>
      function getAllParaElems() {
        const allParas = document.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );
        const num = allParas.length;
        alert(`この文書には ${num} 個の &lt;p&gt; 要素があります`);
      }

      function div1ParaElems() {
        const div1 = document.getElementById("div1");
        const div1Paras = div1.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );
        const num = div1Paras.length;
        alert(`この div1 要素には ${num} 個の &lt;p&gt; 要素があります`);
      }

      function div2ParaElems() {
        const div2 = document.getElementById("div2");
        const div2Paras = div2.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );
        const num = div2Paras.length;
        alert(`この div2 要素には ${num} 個の &lt;p&gt; 要素があります。`);
      }
    </script>
  </head>

  <body style="border: solid green 3px">
    <p>外側のテキスト</p>
    <p>外側のテキスト</p>

    <div id="div1" style="border: solid blue 3px">
      <p>div1 のテキスト</p>
      <p>div1 のテキスト</p>
      <p>div1 のテキスト</p>

      <div id="div2" style="border: solid red 3px">
        <p>div2 のテキスト</p>
        <p>div2 のテキスト</p>
      </div>
    </div>

    <p>外側のテキスト</p>
    <p>外側のテキスト</p>

    <button onclick="getAllParaElems();">
      文書内のすべての p 要素
    </button>
    <br />

    <button onclick="div1ParaElems();">
      div1 要素内のすべての p 要素
    </button>
    <br />

    <button onclick="div2ParaElems();">
      div2 要素内のすべての p 要素
    </button>
  </body>
</html>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Element.getElementsByTagNameNS()")}}
