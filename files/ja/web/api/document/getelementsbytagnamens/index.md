---
title: Document.getElementsByTagNameNS()
slug: Web/API/Document/getElementsByTagNameNS
---

{{APIRef("DOM")}}

指定された名前空間の指定されたタグ名を持つ要素のリストを返します。ルートノードを含め、文書全体が検索されます。

## 構文

```
elements = document.getElementsByTagNameNS(namespace, name)
```

- _elements_ は見つかった要素の生きた {{DOMxRef("NodeList")}} (但し下記のメモを参照) で、ツリーに現れる順です。
- _namespace_ は検索する要素の名前空間 URI です ({{domxref("Node.namespaceURI", "element.namespaceURI")}} を参照)。
- _name_ は検索する要素の局所名、またはすべての要素に一致する特殊な値 `*` です ({{domxref("Node.localName", "element.localName")}} を参照)。

> **メモ:** W3C の仕様書では `elements` は `NodeList` であるとされていますが、 Gecko および Internet Explorer ではこのメソッドは {{DOMxRef("HTMLCollection")}} を返します。 Opera は `NodeList` を返しますが、 `namedItem` メソッドを実装しているので、 `HTMLCollection` と同様になります。2012 年 1 月時点で、 WebKit ブラウザーのみが純粋な `NodeList` の値を返します。詳しくは [bug 14869](https://bugzilla.mozilla.org/show_bug.cgi?id=14869) を参照してください。

> **メモ:** 現在、このメソッドの引数は大文字と小文字を区別しますが、 Firefox 3.5 以前は大文字と小文字を区別していませんでした。詳しくは [Firefox 3.6 の開発者リリースノート](/ja/docs/Mozilla/Firefox/Releases/3.6#DOM)および {{domxref("Element.getElementsByTagNameNS")}} のブラウザーの互換性のメモをご覧ください。

## 例

以下の例では、 `getElementsByTagNameNS` は特定の親要素から始め、 DOM 内を親要素から再帰的に通して検索し、タグの `name` が引数に一致する子要素を検索します。

なお、 `getElementsByTagName` が呼び出されたノードが `document` ではない場合、実際には {{domxref("element.getElementsByTagNameNS")}} メソッドが使用されます。

以下の例を使用するには、新しいファイルにそのままコピー＆ペーストして、 .xhtml の拡張子で保存してください。

```html
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>getElementsByTagNameNS example</title>

    <script type="text/javascript">
      function getAllParaElems() {
        var allParas = document.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );

        var num = allParas.length;

        alert("There are " + num + " &lt;p&gt; elements in this document");
      }

      function div1ParaElems() {
        var div1 = document.getElementById("div1");
        var div1Paras = div1.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );

        var num = div1Paras.length;

        alert("There are " + num + " &lt;p&gt; elements in div1 element");
      }

      function div2ParaElems() {
        var div2 = document.getElementById("div2");
        var div2Paras = div2.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );

        var num = div2Paras.length;

        alert("There are " + num + " &lt;p&gt; elements in div2 element");
      }
    </script>
  </head>

  <body style="border: solid green 3px">
    <p>Some outer text</p>
    <p>Some outer text</p>

    <div id="div1" style="border: solid blue 3px">
      <p>Some div1 text</p>
      <p>Some div1 text</p>
      <p>Some div1 text</p>

      <div id="div2" style="border: solid red 3px">
        <p>Some div2 text</p>
        <p>Some div2 text</p>
      </div>
    </div>

    <p>Some outer text</p>
    <p>Some outer text</p>

    <button onclick="getAllParaElems();">show all p elements in document</button
    ><br />

    <button onclick="div1ParaElems();">
      show all p elements in div1 element</button
    ><br />

    <button onclick="div2ParaElems();">
      show all p elements in div2 element
    </button>
  </body>
</html>
```

## 対応していないブラウザーでの代替方法

要求されたブラウザーが XPath に対応していない場合、他のアプローチ (DOM のすべての子要素をたどって、すべての @xmlns インスタンスで識別する、など) で要求された局所名および名前空間を持つすべてのタグを検索する必要がありますが、 XPath の方がはるかに高速です。 (Explorer に対応するためには、[このラッパークラス](http://www.davidflanagan.com/javascript5/display.php?n=21-10&f=21/10.js)のように、以下の関数で XPath の代わりに XPath のラッパーを呼び出すことができます (Explorer は異なる API を持つ XPath に対応しています)。

```js
function getElementsByTagNameNSWrapper(ns, elName, doc, context) {
  if (!doc) {
    doc = document;
  }
  if (!context) {
    context = doc;
  }

  var result = doc.evaluate(
    '//*[local-name()="' + elName + '" and namespace-uri() = "' + ns + '"]',
    context,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null,
  );

  var a = [];
  for (var i = 0; i < result.snapshotLength; i++) {
    a[i] = result.snapshotItem(i);
  }
  return a;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Element.getElementsByTagNameNS()")}}
