---
title: XPath スニペット
slug: Web/XML/XPath/Guides/Snippets
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

この記事では、複数の**ユーティリティ関数**を実装する方法の例として、いくつかの XPath コードスニペットを紹介します。これらの関数は、XPath の機能を JavaScript コードから利用できるようにする標準インターフェイスに基づいています。これらのスニペットは、実際の現場で自身のコード内で使用できる関数です。

## ノード指定の評価関数

次のカスタムユーティリティ関数を使用して、指定された XML ノードの XPath 式を評価できます。最初の引数は DOM ノードまたは Document オブジェクトで、2 番目の引数は XPath 式を定義する文字列です。

### 例: ノード指定のカスタムユーティリティ関数 `evaluateXPath()` の定義

```js
// 指定された DOM ノードまたは Document オブジェクト (aNode) に対して
// XPath 式を評価し、結果を配列として返します。
// 最初の作業をしてくれた morethanwarm dot mail dot com の
// wanderingstan に感謝します。
function evaluateXPath(node, expr) {
  const xpe = new XPathEvaluator();
  const nsResolver =
    node.ownerDocument === null
      ? node.documentElement
      : node.ownerDocument.documentElement;
  const result = xpe.evaluate(expr, node, nsResolver, 0, null);
  const found = [];
  let res;
  while ((res = result.iterateNext())) found.push(res);
  return found;
}
```

なお、`documentElement` は、XPath 式内の名前空間接頭辞が、クエリーの対象となる文書内のものであり（かつ、デフォルトの名前空間が使用されていない）、そのことを確実に確認できた場合にのみ使用してください。そうでない場合は、XPathNSResolver の独自の実装を指定する必要があります。

### 使用例

次の XML ドキュメントがあるとします（[XML の解釈とシリアライズ](/ja/docs/Web/XML/Guides/Parsing_and_serializing_XML)も参照してください）。

#### 例: カスタム `evaluateXPath()` ユーティリティ関数と一緒に使用する XML 文書

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
// 文書内の人物のすべての姓を表示させる
let results = evaluateXPath(people, "//person/@last-name");
for (const i in results)
  console.log(`Person #${i} has the last name ${results[i].value}`);

// 2 人目のノードを取得する
results = evaluateXPath(people, "/people/person[2]");

// denver に住所を持つすべての person ノードを取得する
results = evaluateXPath(people, "//person[address/@city='denver']");

// 通り名に "south" を持つ住所をすべて取得する
results = evaluateXPath(people, "//address[contains(@street, 'south')]");
console.log(results.length);
```

## docEvaluateArray

以下の例は、名前空間リゾルバーなどの特別な必要があるかどうかに関係なく、XPath の結果を配列に（順序付きで）取得するユーティリティ関数です。これは、 [`document.evaluate()`](/ja/docs/Web/API/Document/evaluate) の複雑な構文が要求されない場合や、 [`XPathResult`](/ja/docs/Web/API/XPathResult) において（代わりに配列を返すことで）特別なイテレーターを使わなければならない状況を避けることができます。

### 例: `docEvaluateArray()` ユーティリティ関数の定義

```js
// Example usage:
// const els = docEvaluateArray('//a');
// console.log(els[0].nodeName); // gives 'A' in HTML document with at least one link

function docEvaluateArray(
  expr,
  context,
  doc = context ? context.ownerDocument : document,
  resolver = null,
) {
  let i;
  const a = [];
  context ||= doc;

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

## getXPathForElement

次の関数により、要素と XML 文書を渡して、その要素につながる一意の文字列 XPath 式を検索することができます。

### 例: `getXPathForElement()` ユーティリティ関数の定義

```js
function getXPathForElement(el, xml) {
  let xpath = "";
  let pos, tempItem2;

  while (el !== xml.documentElement) {
    pos = 0;
    tempItem2 = el;
    while (tempItem2) {
      if (tempItem2.nodeType === 1 && tempItem2.nodeName === el.nodeName) {
        // If it is ELEMENT_NODE of the same name
        pos += 1;
      }
      tempItem2 = tempItem2.previousSibling;
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

## 関連情報

- [XPath](/ja/docs/Web/XML/XPath)
- [このトピックのフォーラムでの議論](https://forums.mozillazine.org/viewtopic.php?t=229106)
- [JavaScript での XPath の使用](/ja/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
