---
title: "Document: evaluate() メソッド"
short-title: evaluate()
slug: Web/API/Document/evaluate
l10n:
  sourceCommit: 8d89e9669f59f208a80c0bdbee48ba75d37a726e
---

{{ ApiRef("DOM") }}

**`evaluate()`** は {{domxref("Document")}} インターフェイスのメソッドで、引数で与えられた [XPath](/ja/docs/Web/XML/XPath) 式に基づいて要素を選択します。

XPath 式は HTML および XML 文書の両方を評価することができます。

## 構文

```js-nolint
evaluate(xpathExpression, contextNode, namespaceResolver, resultType, result)
```

### 引数

- `xpathExpression`
  - : 文字列で、評価される xpath を表します。
- `contextNode`
  - : このクエリーのコンテキストノードです（[XPath 仕様書](https://www.w3.org/TR/1999/REC-xpath-19991116/)を参照してください）。
    コンテキストノードとして `document` を渡すのが一般的です。
- `namespaceResolver`
  - : 名前空間接頭辞を渡すと、その接頭辞に関連付けられた名前空間 URI を表す文字列を返す関数です。
    これは、_xpath_ 自身の中で接頭辞を解決し、文書と照合できるようにするために使用することができます。
    値が `null` の場合は、HTML 文書や 名前空間接頭辞を使用していない場合によく用いられます。
- `resultType`
  - : 整数で、返す結果の `XPathResult` の型に対応する整数。
    取りうる値は以下の通りです。
    - `ANY_TYPE` (`0`)
      - : 指定された式から自然に得られるあらゆる型。
    - `NUMBER_TYPE` (`1`)
      - : 単一の数値を含む結果セット。例えば `count()` 関数を使用する _xpath_ 式で有益なものです。
    - `STRING_TYPE` (`2`)
      - : 単一の文字列を含む結果セット。
    - `BOOLEAN_TYPE` (`3`)
      - : 単一の論理値を含む結果セット。例えば、 `not()` 関数を使用した _xpath_ 式に有用です。
    - `UNORDERED_NODE_ITERATOR_TYPE` (`4`)
      - : 式に一致するすべてのノードを含む結果セット。結果セット内のノードは、必ずしも文書内に現れる順番とは限りません。
        > [!NOTE]
        > この型の結果は、文書内のノードへの参照を格納します。
        > ノードを変更すると、イテレーターは無効になります。
        > ノードを変更した後、結果を反復処理しようとするとエラーになります。
    - `ORDERED_NODE_ITERATOR_TYPE` (`5`)
      - : 式に一致するすべてのノードを含む結果セット。結果セット内のノードは、文書内に現れる順序と同じです。
        > [!NOTE]
        > この型の結果は、文書内のノードへの参照を格納します。
        > ノードを変更すると、イテレーターは無効になります。
        > ノードを変更した後、結果を反復処理しようとするとエラーになります。
    - `UNORDERED_NODE_SNAPSHOT_TYPE` (`6`)
      - : 式に一致するすべてのノードのスナップショットを格納した結果セット。結果セット内のノードは、必ずしも文書内のノードと同じ順序ではありません。
        > [!NOTE]
        > この型の結果はスナップショットで、基本的に一致するノードのリストです。
        > スナップショットノードを変更することで、文書に変更を加えることができます。
        > 文書を変更してもスナップショットは無効にはなりません。
        > しかし、文書が変更された場合、スナップショットは文書の現在の状態と一致しないことがあります。
        > ノードが移動されたり、変更されたり、追加されたり、除去されたりすることがあるからです。
    - `ORDERED_NODE_SNAPSHOT_TYPE` (`7`)
      - : 式に一致するすべてのノードのスナップショットを含む結果セット。結果セット内のノードは、文書内に現れる順序と同じです。
        > [!NOTE]
        > この型の結果はスナップショットで、基本的に一致するノードのリストです。
        > スナップショットノードを変更することで、文書に変更を加えることができます。
        > 文書を変更してもスナップショットは無効にはなりません。
        > しかし、文書が変更された場合、スナップショットは文書の現在の状態と一致しないことがあります。
        > ノードが移動されたり、変更されたり、追加されたり、除去されたりすることがあるからです。
    - `ANY_UNORDERED_NODE_TYPE` (`8`)
      - : 式に一致する単一のノードを含む結果セット。このノードは、必ずしも文書内の式に一致する最初のノードであるとは限りません。
    - `FIRST_ORDERED_NODE_TYPE` (`9`)
      - : 式に一致する文書内の最初のノードを含む結果設定します。

- `result`
  - : 結果に使用する既存の `XPathResult`。`null` を設定すると、メソッドは新しい `XPathResult` を作成して返します。

### 返値

選択されたノードにリンクする {{domxref("XPathResult")}} です。もし `result` が `null` であった場合は新しいオブジェクトとなり、そうでなかった場合は `result` 引数に渡したオブジェクトと同じオブジェクトとなります。

## 例

### XPath によりすべての H2 見出しを検索

```js
const headings = document.evaluate(
  "/html/body//h2",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
/* この文書ですべての h2 要素を検索する。
 * 結果は、おそらく順序なしのノードイテレーターになる。 */
let thisHeading = headings.iterateNext();
let alertText = "この文書のレベル 2 見出し:\n";
while (thisHeading) {
  alertText += `${thisHeading.textContent}\n`;
  thisHeading = headings.iterateNext();
}
alert(alertText); // すべての h2 要素のテキストをアラート表示
```

上の例では、`//h2` のような一般的なショートカットよりも、より冗長な _xpath_ が推奨されていることに注意してください。一般的に、上記の例のように、より詳細な _xpath_ セレクターを使用すると、特に非常に大きな文書において、パフォーマンスが大幅に向上します。これは、クエリーの評価で不必要なノードを訪問して時間を浪費しないためです。 // を使用すると、ルートとすべてのサブノードからすべてのノードを訪問して一致する可能性があるものを探すため、一般的に遅くなります。

コンテキスト引数を注意深く使用することで、さらなる最適化を図ることができます。例えば、探しているコンテンツが body タグの内側のどこかにあることがわかっている場合は、このように使用することができます。

```js
document.evaluate(".//h2", document.body, null, XPathResult.ANY_TYPE, null);
```

上記の例では、コンテキストとして `document` の代わりに `document.body` が使用されているので、_xpath_ は body 要素から始まることに注意してください。（この例内の `"."` は、コンテキストノードである document.body からクエリーを始めることを示すために重要です。"." が省略された場合（`//h2`のまま）、クエリーはルートノード (`html`) から開始することになり、より無駄が多くなります）。
詳しくは[JavaScript での XPath の利用の手引き](/ja/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)を参照してください。

### xml:id で要素を取得

この関数は {{domxref("Document.getElementById()")}} の置き換えで、`xml:id` で検索したい場合に使います。

```js
function getElementByIdWrapper(xmldoc, id) {
  return xmldoc.evaluate(
    `//*[@xml:id="${id}"]`,
    xmldoc,
    () => "http://www.w3.org/XML/1998/namespace",
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null,
  ).singleNodeValue;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.createExpression()")}}
- {{domxref("XPathResult")}}
- [ブラウザーの対応のチェック](https://codepen.io/johan/full/DJoqaX)（英語）
