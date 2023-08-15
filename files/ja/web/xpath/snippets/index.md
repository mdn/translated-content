---
title: XPath スニペット
slug: Web/XPath/Snippets
---

この記事ではいくつか XPath コードスニペットを提供します。それは XPath 機能を JavaScript コードに公開する[DOM Level 3 XPath 仕様](http://www.w3.org/TR/DOM-Level-3-XPath/)の標準インタフェースに基づく簡単なユーティリティ関数の簡単な例です。スニペットは実際にあなた自身のコードの中で使用できる関数です。

### ノード指定の評価関数

次のカスタムユーティリティ関数を使用して、指定された XML ノードの XPath 式を評価できます。最初の引数は DOM ノードまたは Document オブジェクトで、2 番目の引数は XPath 式を定義する文字列です。

##### 例:ノード指定のカスタム `evaluateXPath()` ユーティリティ関数を定義する

```js
// Evaluate an XPath expression aExpression against a given DOM node
// or Document object (aNode), returning the results as an array
// thanks wanderingstan at morethanwarm dot mail dot com for the
// initial work.
function evaluateXPath(aNode, aExpr) {
  var xpe = new XPathEvaluator();
  var nsResolver = xpe.createNSResolver(
    aNode.ownerDocument == null
      ? aNode.documentElement
      : aNode.ownerDocument.documentElement,
  );
  var result = xpe.evaluate(aExpr, aNode, nsResolver, 0, null);
  var found = [];
  var res;
  while ((res = result.iterateNext())) found.push(res);
  return found;
}
```

この関数は **`new XPathEvaluator()`** コンストラクタを使用していますが、Firefox、Chrome、Opera、Safari ではサポートされているものの、Edge または Internet Explorer ではサポートされていません。Edge または Internet Explorer のユーザーがアクセスできる Web ドキュメント内のスクリプトは、 **`new XPathEvaluator()`** の呼び出しを次のフラグメントに置き換える必要があります。

```js
// XPathEvaluator is implemented on objects that implement Document
var xpe = aNode.ownerDocument || aNode;
```

その場合、[XPathNSResolver](/ja/docs/Web/API/document/createNSResolver)の作成は次のように単純化できます。

```js
var nsResolver = xpe.createNSResolver(xpe.documentElement);
```

ただし、`createNSResolver`は、XPath 式の名前空間プレフィックスが問い合わせる文書の名前空間プレフィックスと一致する（かつデフォルトの名前空間が使用されていない(回避策については[document.createNSResolver](/ja/docs/Web/API/document/createNSResolver)を参照)）ことが確認されている場合にのみ使用する必要があります。それ以外の場合は、XPathNSResolver の独自の実装を提供する必要があります。

[XMLHttpRequest](/ja/docs/Web/API/XMLHttpRequest)を使用してローカルまたはリモートの XML ファイルを DOM ツリー（[XML のパースとシリアライズ](/ja/docs/Parsing_and_serializing_XML)を参照）に読み込む場合、`evaluateXPath()`の最初の引数は`req.responseXML`である必要があります。

#### 使用例

次の XML ドキュメント（[DOM ツリーの作成方法](/ja/docs/How_to_create_a_DOM_tree)と[XML のパースとシリアライズ](/ja/docs/Parsing_and_serializing_XML)も参照してください）があるとします。

##### 例: カスタム `evaluateXPath()` ユーティリティ関数と一緒に使用する XML 文書

```xml
<?xml version="1.0"?>
<people>
  <person first-name="eric" middle-initial="H" last-name="jung">
    <address street="321 south st" city="denver" state="co" country="usa"/>
    <address street="123 main st" city="arlington" state="ma" country="usa"/>
  </person>

  <person first-name="jed" last-name="brown">
    <address street="321 north st" city="atlanta" state="ga" country="usa"/>
    <address street="123 west st" city="seattle" state="wa" country="usa"/>
    <address street="321 south avenue" city="denver" state="co" country="usa"/>
  </person>
</people>
```

XPath 式を使用してドキュメントを「照会」できるようになりました。 DOM ツリーを眺めることでも同様の結果が得られますが、XPath 式を使用する方がはるかに高速で強力です。id 属性に頼ることができるのであれば、`document.getElementById()`はまだ強力ですが、XPath ほど強力ではありません。下記は用例です。

##### 例: カスタムの `evaluateXPath()` ユーティリティ関数がある JavaScript コード

```js
// display the last names of all people in the doc
var results = evaluateXPath(people, "//person/@last-name");
for (var i in results)
  alert("Person #" + i + " has the last name " + results[i].value);

// get the 2nd person node
results = evaluateXPath(people, "/people/person[2]");

// get all the person nodes that have addresses in denver
results = evaluateXPath(people, "//person[address/@city='denver']");

// get all the addresses that have "south" in the street name
results = evaluateXPath(people, "//address[contains(@street, 'south')]");
alert(results.length);
```

### docEvaluateArray

以下は、ネームスペースリゾルバなどの特別な必要性に関わらず、XPath の結果を配列に取得（順序づけ）する簡単なユーティリティ関数です。そうでない場合は、[`document.evaluate()`](/ja/docs/Web/API/document/evaluate)のより複雑な構文は避けてください [`XPathResult`](/ja/docs/Web/API/XPathResult)の特別なイテレータ（代わりに配列を返す）を使用する必要があります。

##### 例: シンプルな `docEvaluateArray()` ユーティリティ関数を定義する

```js
// Example usage:
// var els = docEvaluateArray('//a');
// alert(els[0].nodeName); // gives 'A' in HTML document with at least one link

function docEvaluateArray(expr, doc, context, resolver) {
  var i,
    result,
    a = [];
  doc = doc || (context ? context.ownerDocument : document);
  resolver = resolver || null;
  context = context || doc;

  result = doc.evaluate(
    expr,
    context,
    resolver,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null,
  );
  for (i = 0; i < result.snapshotLength; i++) {
    a[i] = result.snapshotItem(i);
  }
  return a;
}
```

### getXPathForElement

次の関数は、要素と XML 文書を渡して、その要素につながる一意の文字列 XPath 式を検索することを可能にします。

##### 例: `getXPathForElement()` ユーティリティ関数を定義する

```js
function getXPathForElement(el, xml) {
  var xpath = "";
  var pos, tempitem2;

  while (el !== xml.documentElement) {
    pos = 0;
    tempitem2 = el;
    while (tempitem2) {
      if (tempitem2.nodeType === 1 && tempitem2.nodeName === el.nodeName) {
        // If it is ELEMENT_NODE of the same name
        pos += 1;
      }
      tempitem2 = tempitem2.previousSibling;
    }

    xpath =
      "*[name()='" +
      el.nodeName +
      "' and namespace-uri()='" +
      (el.namespaceURI === null ? "" : el.namespaceURI) +
      "'][" +
      pos +
      "]" +
      "/" +
      xpath;

    el = el.parentNode;
  }
  xpath =
    "/*" +
    "[name()='" +
    xml.documentElement.nodeName +
    "' and namespace-uri()='" +
    (el.namespaceURI === null ? "" : el.namespaceURI) +
    "']" +
    "/" +
    xpath;
  xpath = xpath.replace(/\/$/, "");
  return xpath;
}
```

### 関連資料

- [XPath](/ja/docs/Web/XPath)
- [Forum discussion on this topic](http://forums.mozillazine.org/viewtopic.php?t=229106)

## 合わせてお読みください

- [JavaScript で XPath を使用する](/ja/docs/Web/JavaScript/Introduction_to_using_XPath_in_JavaScript)

{{QuickLinksWithSubpages("/ja/docs/Web/XPath")}}
