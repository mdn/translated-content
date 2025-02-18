---
title: XPath スニペット
slug: Web/XML/XPath/Guides/Snippets
original_slug: Web/XPath/Guides/Snippets
l10n:
  sourceCommit: b6f343538eac4a803943b4e99b0c0545b372645a
---

{{XsltSidebar}}

この記事ではいくつか XPath コードスニペットを提供します。それは XPath 機能を JavaScript コードに公開する [DOM Level 3 XPath 仕様](https://www.w3.org/TR/DOM-Level-3-XPath/)の標準インタフェースに基づく簡単な**ユーティリティ関数**の簡単な例です。スニペットは実際に自身のコードの中で使用できる関数です。

### ノード指定の評価関数

次のカスタムユーティリティ関数を使用して、指定された XML ノードの XPath 式を評価できます。最初の引数は DOM ノードまたは Document オブジェクトで、2 番目の引数は XPath 式を定義する文字列です。

##### 例:ノード指定のカスタム `evaluateXPath()` ユーティリティ関数を定義する

```js
// 指定された DOM ノードまたは Document オブジェクト (aNode) に対して
// XPath 式 aExpression を評価し、結果を配列として返します。
// 最初の作業をしてくれた morethanwarm dot mail dot com の
// wanderingstan に感謝します。
function evaluateXPath(aNode, aExpr) {
  const xpe = new XPathEvaluator();
  const nsResolver = xpe.createNSResolver(
    aNode.ownerDocument === null
      ? aNode.documentElement
      : aNode.ownerDocument.documentElement,
  );
  const result = xpe.evaluate(aExpr, aNode, nsResolver, 0, null);
  const found = [];
  let res;
  while ((res = result.iterateNext())) found.push(res);
  return found;
}
```

ただし、`createNSResolver` は、XPath 式の名前空間接頭辞が問い合わせる文書の名前空間接頭辞と一致する（かつ既定の名前空間が使用されていない (回避策については [document.createNSResolver](/ja/docs/Web/API/Document/createNSResolver) を参照)）ことが確認されている場合にのみ使用する必要があります。それ以外の場合は、XPathNSResolver の独自の実装を提供する必要があります。

[XMLHttpRequest](/ja/docs/Web/API/XMLHttpRequest) を使用してローカルまたはリモートの XML ファイルを DOM ツリー（[XML の解釈とシリアライズ](/ja/docs/Web/XML/Parsing_and_serializing_XML)を参照）に読み込む場合、`evaluateXPath()`の最初の引数は`req.responseXML`である必要があります。

#### 使用例

次の XML ドキュメント（[DOM ツリーの作成方法](/ja/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model)と[XML の解釈とシリアライズ](/ja/docs/Web/XML/Parsing_and_serializing_XML)も参照してください）があるとします。

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

XPath 式を使用して文書を「照会」できるようになりました。 DOM ツリーを眺めることでも同様の結果が得られますが、 XPath 式を使用する方がはるかに高速で強力です。id 属性に頼ることができるのであれば、 `document.getElementById()` はまだ強力ですが、 XPath ほど強力ではありません。下記は用例です。

##### 例: カスタムの `evaluateXPath()` ユーティリティ関数がある JavaScript コード

```js
// display the last names of all people in the doc
let results = evaluateXPath(people, "//person/@last-name");
for (const i in results)
  console.log(`Person #${i} has the last name ${results[i].value}`);

// get the 2nd person node
results = evaluateXPath(people, "/people/person[2]");

// get all the person nodes that have addresses in denver
results = evaluateXPath(people, "//person[address/@city='denver']");

// get all the addresses that have "south" in the street name
results = evaluateXPath(people, "//address[contains(@street, 'south')]");
console.log(results.length);
```

### docEvaluateArray

以下の例は、名前空間リゾルバーなどの特別な必要があるかどうかに関係なく、XPath の結果を配列に（順序付きで）取得する単純なユーティリティ関数です。これは、 [`document.evaluate()`](/ja/docs/Web/API/Document/evaluate) の複雑な構文が要求されない場合や、 [`XPathResult`](/ja/docs/Web/API/XPathResult) において（代わりに配列を返すことで）特別なイテレーターを使わなければならない状況を避けることができます。

##### 例: シンプルな `docEvaluateArray()` ユーティリティ関数を定義する

```js
// Example usage:
// const els = docEvaluateArray('//a');
// console.log(els[0].nodeName); // gives 'A' in HTML document with at least one link

function docEvaluateArray(expr, doc, context, resolver) {
  let i;
  const a = [];
  doc = doc || (context ? context.ownerDocument : document);
  resolver = resolver || null;
  context = context || doc;

  const result = doc.evaluate(
    expr,
    context,
    resolver,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null,
  );
  for (let i = 0; i < result.snapshotLength; i++) {
    a.push(result.snapshotItem(i));
  }
  return a;
}
```

### getXPathForElement

次の関数により、要素と XML 文書を渡して、その要素につながる一意の文字列 XPath 式を検索することができます。

##### 例: `getXPathForElement()` ユーティリティ関数を定義する

```js
function getXPathForElement(el, xml) {
  let xpath = "";
  let pos, tempitem2;

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

    xpath = `*[name()='${el.nodeName}' and namespace-uri()='${
      el.namespaceURI ?? ""
    }'][${pos}]/${xpath}`;

    el = el.parentNode;
  }
  xpath = `/*[name()='${xml.documentElement.nodeName}' and namespace-uri()='${
    el.namespaceURI ?? ""
  }']/${xpath}`;
  xpath = xpath.replace(/\/$/, "");
  return xpath;
}
```

### 資料

- [XPath](/ja/docs/Web/XPath)
- [このトピックのフォーラムでの議論](https://forums.mozillazine.org/viewtopic.php?t=229106)

## 関連情報

- [JavaScript での XPath の使用](/ja/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript)
