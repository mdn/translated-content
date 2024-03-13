---
title: Document.evaluate()
slug: Web/API/Document/evaluate
---

{{ ApiRef("DOM") }}

[XPath](/ja/docs/XPath) 式やその他与えられたパラメータに基づいて [`XPathResult`](/ja/docs/XPathResult) を返します。

## 構文

```
var xpathResult = document.evaluate(
 xpathExpression,
 contextNode,
 namespaceResolver,
 resultType,
 result
);
```

- `xpathExpression` は評価される Xpath を示す文字列です。
- `contextNode` はクエリの*コンテキストノード*を指定します([XPath の仕様](http://www.w3.org/TR/xpath)を参照してください)　コンテキストノードとして `document` を渡すのが一般的です。
- `namespaceResolver` は、任意の名前空間接頭辞を受け取り、その接頭辞に関連付けられた名前空間 URI を文字列として返す関数です。接頭辞が文書の中でマッチされるように、XPath 自身の中で接頭辞を解決するために使われます。HTML 文書向け、または名前空間接頭辞を使わないときは `null` を指定するのが一般的です。
- `resultType` は返り値である `XPathResult` のタイプに対応する整数です。XPathResult コンストラクタの[名前付き定数プロパティ](#Result_types) (例えば `XPathResult.ANY_TYPE`) を使用してください。これらは 0 から 9 までの整数に対応しています。
- `result` は結果として使われる既存の `XPathResult` です。`null` を指定するのが最も一般的です。`null` は新しい `XPathResult を生成します。`

## 例

```js
var headings = document.evaluate(
  "/html/body//h2",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
/* Search the document for all h2 elements.
 * The result will likely be an unordered node iterator. */
var thisHeading = headings.iterateNext();
var alertText = "Level 2 headings in this document are:\n";
while (thisHeading) {
  alertText += thisHeading.textContent + "\n";
  thisHeading = headings.iterateNext();
}
alert(alertText); // Alerts the text of all h2 elements
```

Note, in the above example, a more verbose XPath is preferred over common shortcuts such as `//h2`. Generally, more specific XPath selectors as in the above example usually gives a significant performance improvement, especially on very large documents. This is because the evaluation of the query spends does not waste time visiting unnecessary nodes. Using // is generally slow as it visits _every_ node from the root and all subnodes looking for possible matches.

Further optimization can be achieved by careful use of the context parameter. For example, if you know the content you are looking for is somewhere inside the body tag, you can use this:

```js
document.evaluate(".//h2", document.body, null, XPathResult.ANY_TYPE, null);
```

Notice in the above `document.body` has been used as the context instead of `document` so the XPath starts from the body element. (In this example, the `"."` is important to indicate that the querying should start from the context node, document.body. If the "." was left out (leaving `//h2`) the query would start from the root node (`html`) which would be more wasteful.)

See [Introduction to using XPath in JavaScript](/ja/docs/Introduction_to_using_XPath_in_JavaScript) for more information.

## 注釈

- XPath expressions can be evaluated on HTML and XML documents.
- While using document.evaluate() works in FF2, in FF3 one must use someXMLDoc.evaluate() if evaluating against something other than the current document.

## 戻り値の分類

(Merge with [Template:XPathResultConstants](/Template:XPathResultConstants)?

These are supported values for the `resultType` parameter of the `evaluate` method:

| Result Type                    | Value | Description                                                                                                                                                                |
| ------------------------------ | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ANY_TYPE`                     | 0     | Whatever type naturally results from the given expression.                                                                                                                 |
| `NUMBER_TYPE`                  | 1     | A result set containing a single number. Useful, for example, in an XPath expression using the `count()` function.                                                         |
| `STRING_TYPE`                  | 2     | A result set containing a single string.                                                                                                                                   |
| `BOOLEAN_TYPE`                 | 3     | A result set containing a single boolean value. Useful, for example, an an XPath expression using the `not()` function.                                                    |
| `UNORDERED_NODE_ITERATOR_TYPE` | 4     | A result set containing all the nodes matching the expression. The nodes in the result set are not necessarily in the same order they appear in the document.              |
| `ORDERED_NODE_ITERATOR_TYPE`   | 5     | A result set containing all the nodes matching the expression. The nodes in the result set are in the same order they appear in the document.                              |
| `UNORDERED_NODE_SNAPSHOT_TYPE` | 6     | A result set containing snapshots of all the nodes matching the expression. The nodes in the result set are not necessarily in the same order they appear in the document. |
| `ORDERED_NODE_SNAPSHOT_TYPE`   | 7     | A result set containing snapshots of all the nodes matching the expression. The nodes in the result set are in the same order they appear in the document.                 |
| `ANY_UNORDERED_NODE_TYPE`      | 8     | A result set containing any single node that matches the expression. The node is not necessarily the first node in the document that matches the expression.               |
| `FIRST_ORDERED_NODE_TYPE`      | 9     | A result set containing the first node in the document that matches the expression.                                                                                        |

Results of `NODE_ITERATOR` types contain references to nodes in the document. Modifying a node will invalidate the iterator. After modifying a node, attempting to iterate through the results will result in an error.

Results of `NODE_SNAPSHOT` types are snapshots, which are essentially lists of matched nodes. You can make changes to the document by altering snapshot nodes. Modifying the document doesn't invalidate the snapshot; however, if the document is changed, the snapshot may not correspond to the current state of the document, since nodes may have moved, been changed, added, or removed.

## 仕様

{{Specifications}}

## ブラウザ互換性

{{Compat}}

## 関連項目

- [DOM:document.createExpression](/ja/docs/DOM/document.createExpression)
- [XPath Code Snippets](/ja/docs/Code_snippets/XPath)
- [Check for browser support](http://codepen.io/johan/full/ckFgn)
