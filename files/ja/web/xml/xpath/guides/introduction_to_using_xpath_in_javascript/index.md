---
title: JavaScript での XPath の利用の手引き
slug: Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

このドキュメントでは、JavaScript で [XPath](/ja/docs/Web/XML/XPath) を使うためのインターフェイスについて解説します。
XPath を使用するための主となるインターフェイスは [document](/ja/docs/Web/API/Document) オブジェクトの [evaluate](/ja/docs/Web/API/Document/evaluate) 関数です。

## document.evaluate()

このメソッドは [XPath](/ja/docs/Web/XML/XPath) 式を [XML](/ja/docs/Glossary/XML) ベースの文書（HTML を含む）に対して評価し、[`XPathResult`](/ja/docs/Web/API/XPathResult) オブジェクトを返します。これは単一のノード、もしくはノードの集合になります。このメソッドのドキュメントはすでに [document.evaluate](/ja/docs/Web/API/Document/evaluate) の場所にありますが、このメソッドの解説のためには内容が薄いため、以下でさらに詳しく説明します。

```js
const xpathResult = document.evaluate(
  xpathExpression,
  contextNode,
  namespaceResolver,
  resultType,
  result,
);
```

### 引数

[`evaluate()`](/ja/docs/Web/API/Document/evaluate) 関数は 5 つの引数を取ります。

- `xpathExpression`: 評価する XPath 式を文字列で指定します。
- `contextNode`: `xpathExpression` を評価する対象となる文書内のノードを指定します。指定されたノードの全ての子ノードに対しても評価が行われます。もっともよく使用される値は [document](/ja/docs/Web/API/Document) ノードです。
- `namespaceResolver`: `xpathExpression` に含まれるあらゆる名前空間接頭辞を渡され、その接頭辞に対応する名前空間 URI を表す文字列を返す関数です。この関数により、XPath 式で使われている接頭辞と文書内で使われている接頭辞が異なっていたとしてもそれを変換することが可能になります。この関数は次のいずれかです。
  - {{domxref("Node")}} のうち、名前空間接頭辞を解決する {{domxref("Node.lookupNamespaceURI")}} メソッドを提供しているもの。
  - HTML 文書の場合や、名前空間接頭辞が使われていない場合は `null`。 `xpathExpression` に名前空間接頭辞が含まれている場合は、 `DOMException` が `NAMESPACE_ERR` のコードで発生するので注意してください。
  - ユーザー定義のカスタム関数。詳しくは付録の[ユーザー定義名前空間リゾルバーの使用](#ユーザー定義の名前空間リゾルバーの実装)の節を参照してください。

- `resultType`: 評価の結果返してほしい値の型を示す[定数](#xpathresult_の定義済み定数)です。もっともよく指定される定数は `XPathResult.ANY_TYPE` で、この場合、指定された XPath 式に対して一番適切な型で結果が返されます。指定できる定数の一覧は付録の[定数一覧](#xpathresult_の定義済み定数)の節を参照してください。それぞれの定数の使い方は「[返値の型の指定](#返値の型の指定)」の節を参考にしてください。
- `result`: 既存の `XPathResult` オブジェクトが指定された場合には、そのオブジェクトが再利用されます。 `null` が指定された場合は、新しい `XPathResult` オブジェクトが生成されます。

### 返値

引数 `resultType` で[指定された](#返値の型の指定)の {{domxref("XPathResult")}} 型のオブジェクトです。

### デフォルトの名前空間リゾルバーの実装

[`document`](/ja/docs/Web/API/Document) オブジェクトを名前空間リゾルバーとして使用します。

```js
const nsResolver =
  contextNode.ownerDocument === null
    ? contextNode.documentElement
    : contextNode.ownerDocument.documentElement;
```

それから 変数 `nsResolver` を引数 `namespaceResolver` として `document.evaluate` に渡します。

メモ: XPath では接頭辞のない QName は名前空間が null の要素にのみ一致すると定義しています。 XPath には、通常の要素参照に適用されるデフォルトの名前空間を取得する手段はありません（例: `xmlns='http://www.w3.org/1999/xhtml'` に対する `p[@id='_my-id']`）。名前空間が null ではないデフォルトの要素に一致させるには、 `['namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_my-id']` のような形を使用して特定の要素を参照するか（[このアプローチ](#xpath_関数を使用してデフォルトの名前空間の要素を参照する)は名前空間が不明である可能性のある動的な XPath で有効です）、接頭辞つきの名前テストを使用し、その接頭辞を名前空間にマッピングする名前空間リゾルバーを作成する必要があります。詳しくは下記の[ユーザー定義の名前空間リゾルバーを作成する](#ユーザー定義の名前空間リゾルバーの実装)方法を参照して下さい。

## 解説

任意の DOM ノードを名前空間の解決に適応させると、 [XPath](/ja/docs/Web/XML/XPath) 式が文書内に現れたノードのコンテキストに関連して簡単に評価できるようになります。このアダプターは、ノード上の DOM Level 3 メソッド `lookupNamespaceURI` と同様に動作し、 `lookupNamespaceURI` が呼び出された時点でノードの階層で利用可能な現在の情報を使用して、指定された接頭辞から `namespaceURI` を解決します。また、暗黙の `xml` 接頭辞も正しく解決します。

### 返値の型の指定

`document.evaluate` から返される変数 `xpathResult` は、単一のノード（[単純型](#単純型)）もしくはノードのコレクション（[ノード集合型](#ノード集合型)）から成ります。

#### 単純型

`resultType` で要求された結果型が次のうちのどれかであった場合、

- `NUMBER_TYPE` - 倍精度浮動小数点数 (double)
- `STRING_TYPE` - 文字列
- `BOOLEAN_TYPE` - 論理値

それぞれ以下の `XPathResult` オブジェクトのプロパティにアクセスすることで式の返値を得る事ができます。

- `numberValue`
- `stringValue`
- `booleanValue`

##### 例

下の例では XPath 式 [`count(//p)`](/ja/docs/Web/XML/XPath/Reference/Functions/count) によって HTML 文書内の `<p>` 要素の数を取得しています。

```js
const paragraphCount = document.evaluate(
  "count(//p)",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);

console.log(
  `この文書には ${paragraphCount.numberValue} 個の段落要素が含まれています`,
);
```

JavaScript では数値を表示しようとすると文字列に変換されますが、 XPath インターフェイスは `stringValue` プロパティを要求しても数値の結果を自動的に変換しないので、下のコードは**動作しません**。

```js
const paragraphCount = document.evaluate(
  "count(//p)",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);

console.log(
  `この文書には ${paragraphCount.stringValue} 個の段落要素が含まれています`,
);
```

これを実行すると `NS_DOM_TYPE_ERROR` コードの例外が返されます。

#### ノード集合型

`XPathResult` オブジェクトが返すノード集合には主として 3 種類の型があります。

- [イテレーター](#イテレーター)
- [スナップショット](#スナップショット)
- [ファーストノード](#ファーストノード)

##### イテレーター

引数 `resultType` で指定された結果型が次のどちらかの場合、

- `UNORDERED_NODE_ITERATOR_TYPE`
- `ORDERED_NODE_ITERATOR_TYPE`

一致したノードのノード集合が `XPathResult` オブジェクトとして返されます。これはイテレーターのようにふるまい、 `XPathResult` の `iterateNext()` メソッドを使ってその中に含まれる個々のノードにアクセスできます。

一致したノードに対する反復が全て終了すると、 `iterateNext()` は `null` を返します。

ただし、反復処理中に文書が変異した (文書ツリーが改変された) 場合、反復処理は無効化され、`XPathResult` の `invalidIteratorState` プロパティが `true` に設定され、`NS_ERROR_DOM_INVALID_STATE_ERR` 例外が投げられます。

```js
const iterator = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.UNORDERED_NODE_ITERATOR_TYPE,
  null,
);

try {
  let thisNode = iterator.iterateNext();

  while (thisNode) {
    console.log(thisNode.textContent);
    thisNode = iterator.iterateNext();
  }
} catch (e) {
  console.error(`Error: Document tree modified during iteration ${e}`);
}
```

##### スナップショット

引数 `resultType` で指定された結果型が次のどちらかの場合、

- `UNORDERED_NODE_SNAPSHOT_TYPE`
- `ORDERED_NODE_SNAPSHOT_TYPE`

返される `XPathResult` オブジェクトは一致したノードの静的な集合となり、 `XPathResult` オブジェクトの `snapshotItem(itemNumber)` メソッドによってそれぞれのノードにアクセスできます。`itemNumber` は取り出すノードのインデックスです。含まれるノードの総数は `snapshotLength` プロパティから得られます。

スナップショットは文書が変化しても変更されず、イテレーターと違って無効になることはありませんが、スナップショットは現在の文書に対応しないことがあります。ノードが移動されていたり、既に存在しないノードが含まれていたり、新しいノードが追加されている可能性もあります。

```js
const nodesSnapshot = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null,
);

for (let i = 0; i < nodesSnapshot.snapshotLength; i++) {
  console.log(nodesSnapshot.snapshotItem(i).textContent);
}
```

##### ファーストノード

引数 `resultType` で指定された結果型が次のどちらかの場合、

- `ANY_UNORDERED_NODE_TYPE`
- `FIRST_ORDERED_NODE_TYPE`

返される `XPathResult` オブジェクトは XPath 式に一致するノードのうち最初に見つかったもののみです。このノードには `XPathResult` オブジェクトの `singleNodeValue` プロパティによってアクセスできます。ノード集合が空ならばこのプロパティは `null` になります。

ただし、 unordered サブタイプの場合、返される単一のノードは文書順において最初のものではない可能性があるので注意が必要です。 ordered サブタイプの場合は文書順において最初に一致するノードであることが保証されます。

```js
const firstPhoneNumber = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null,
);

console.log(
  `The first phone number found is ${firstPhoneNumber.singleNodeValue.textContent}`,
);
```

#### ANY_TYPE 定数

引数 `resultType` に指定された結果型が `ANY_TYPE` である場合、返される `XPathResult` オブジェクトは、式を評価した結果から導き出される適切な型になります。

返される結果型は単純型 (`NUMBER_TYPE`, `STRING_TYPE`, `BOOLEAN_TYPE`) のうちのいずれにもなり得ます**が**、もしノード集合であった場合には、`UNORDERED_NODE_ITERATOR_TYPE` に**しか**なり得ません。

評価の後に型を判断するには、 `XPathResult` オブジェクトの `resultType` プロパティを使います。このプロパティの[定数](#xpathresult_の定義済み定数)値は付録に記載されています。

## 例

### HTML 文書内で

下のコードは、 XPath 式を評価する対象となる HTML 文書の内部や、それにリンクされた JavaScript 内に設置するためのものです。

XPath を使って HTML 文書内のすべての `<h2>` 見出し要素を抽出したければ、`xpathExpression` は単に '`//h2`' となります。 `//` は再帰下降演算子 (Recursive Descent Operator) なので、この式は文書ツリー内のあらゆる位置にある、nodeName が `h2` である要素に一致します。

```js
const headings = document.evaluate(
  "//h2",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
```

HTML には名前空間がないため、引数 `namespaceResolver` には `null` を渡している事に注目してください。

文書全体から見出し要素を探すため、ここでは [document](/ja/docs/Web/API/Document) オブジェクト自体を `contextNode` として使っています。

この式の結果は `XPathResult` オブジェクトです。返された結果の型を知りたい場合は、返されたオブジェクトの `resultType` プロパティを評価してください。この場合は `4` 、つまり `UNORDERED_NODE_ITERATOR_TYPE` と評価されるでしょう。これは XPath 式の結果がノード集合であった場合のデフォルトの結果型です。この型はノードに一つずつアクセスすることができ、返されるノードの順序は決まっていません。返されたノードにアクセスするには、返されたオブジェクトの `iterateNext()` メソッドを使います。

```js
let thisHeading = headings.iterateNext();

let alertText = "この文書内のレベル 2 の見出しは、\n";

while (thisHeading) {
  alertText += `${thisHeading.textContent}\n`;
  thisHeading = headings.iterateNext();
}
```

反復によってノードを得られたら、そのノードのすべての標準 DOM インターフェイスにアクセスできます。式によって返される `h2` 要素に対する反復処理が全て終了すると、それ以降は `iterateNext()` を何度呼び出しても `null` が返されます。

## 付録

### ユーザー定義の名前空間リゾルバーの実装

この例は説明のためだけのものです。 この関数は、`xpathExpression` から名前空間接頭辞を取り、その接頭辞に対応する URI を返さなければなりません。例えば、この式は、

```plain
'//xhtml:td/mathml:math'
```

(X)HTML のテーブルデータセル要素の子要素である全ての [MathML](/ja/docs/Web/MathML) 式を選択します。

接頭辞 '`mathml:`' と 名前空間 URI '`http://www.w3.org/1998/Math/MathML`' を、接頭辞 '`xhtml:`' と URI '`http://www.w3.org/1999/xhtml`' をそれぞれ関連付けるため、関数を用意します。

```js
function nsResolver(prefix) {
  const ns = {
    xhtml: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
  };
  return ns[prefix] || null;
}
```

そうすると `document.evaluate` をこのようにして呼び出せます。

```js
document.evaluate(
  "//xhtml:td/mathml:math",
  document,
  nsResolver,
  XPathResult.ANY_TYPE,
  null,
);
```

### XML 文書のデフォルトの名前空間を実装する

[デフォルトの名前空間リゾルバーの実装](#デフォルトの名前空間リゾルバーの実装)で述べたように、デフォルトのリゾルバーは XML 文書のデフォルトの名前空間を処理しません。たとえばこの文書では、

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <entry />
    <entry />
    <entry />
</feed>
```

`doc.evaluate('//entry', doc, nsResolver, XPathResult.ANY_TYPE, null)` は、`nsResolver` が `Node` である場合、空集合を返します。リゾルバーとして `null` を渡しても同じです。

正しいデフォルトの名前空間 (この場合は Atom 名前空間) を返すカスタムリゾルバーを作成すれば、この問題を解決できます。この時、 XPath 式の中ではなんらかの名前空間接頭辞を使わなければならないことに注意してください。これはリゾルバー関数がその接頭辞を指定した名前空間に変換できるようにするためです。例えばこのようにします。

```js
function resolver() {
  return "http://www.w3.org/2005/Atom";
}
doc.evaluate("//myns:entry", doc, resolver, XPathResult.ANY_TYPE, null);
```

なお、文書で複数の名前空間が使われている場合には、より複雑なリゾルバーが必要になります。

次の節では、より効果的に機能する (名前空間を事前に知らなくてもよい) アプローチについて説明します。

### XPath 関数を使用してデフォルトの名前空間の要素を参照する

null ではない名前空間のデフォルトの要素に一致させる (そして名前空間が分からない動的な XPath 式で上手く動作する) もう一つの方法として、 `[namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_my-id']` のような形式で特定の要素を参照する方法があります。これにより、XPath クエリーが正規にラベル付けされた要素のデフォルトの名前空間を検出できないという問題が回避されます。

### 接頭辞に関係ない、名前空間付きの要素や属性の取得

名前空間の要素や属性を見つける際に特定の接頭辞を必ずしも必要とせず、 (意図的に) 名前空間に柔軟性を持たせたい場合は、特別な手法を用いなければなりません。

上の節のアプローチを応用して、選択された接頭辞に関係なく名前空間の要素をテストすることは ([`local-name()`](/ja/docs/Web/XML/XPath/Reference/Functions/local-name) と [`namespace-uri()`](/ja/docs/Web/XML/XPath/Reference/Functions/namespace-uri) を組み合わせて [`name()`](/ja/docs/Web/XML/XPath/Reference/Functions/name) の代わりに使用すれば) 可能ですが、特定の名前空間属性を持つ要素を述語の中に取り込みたい場合には、より困難な状況が発生します (XPath 1.0 には実装に依存しない変数が存在しないため)。

たとえば、次のように namespaced 属性を持つ要素を取得しようとすると、 (間違って) `const xpathLink = someElements[local-name(@*)="href" and namespace-uri(@*)='http://www.w3.org/1999/xlink'];` となります。

この方法では、ローカル名が "`href`" である属性が存在しても、その属性が (`[@href](/ja/docs/Web/XPath/Axes/attribute)` ではなく) 対象となる (XLink) 名前空間を持つ別の属性であった場合、誤って一部の要素を取得してしまう可能性があります。

XLink の `@href` 属性を持つ要素を (名前空間リゾルバーで定義済みの接頭辞にとらわれずに) 正確に把握するためには、次のようにして取得することができます。

```js
const xpathEls =
  'someElements[@*[local-name() = "href" and namespace-uri() = "http://www.w3.org/1999/xlink"]]'; // ローカル名 'href' と XLink 名前空間の両方を備えた任意の単一の属性を持つ要素を取得
const thisLevel = xml.evaluate(xpathEls, xml, null, XPathResult.ANY_TYPE, null);
let thisItemEl = thisLevel.iterateNext();
```

### XPathResult の定義済み定数

| 定義済みの結果型定数         | 値  | 説明                                                                                                                                                 |
| ---------------------------- | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| ANY_TYPE                     | 0   | 式の評価によって導き出される適切な型を格納した結果の集合。結果がノード集合ならば、結果の型は常に UNORDERED_NODE_ITERATOR_TYPE となるので注意が必要。 |
| NUMBER_TYPE                  | 1   | 一つの数値を格納した結果。 `count()` 関数を使用した XPath 式などで有用。                                                                             |
| STRING_TYPE                  | 2   | 一つの文字列を格納した結果。                                                                                                                         |
| BOOLEAN_TYPE                 | 3   | 一つの論理値を格納した結果。 `not()` 関数を使用した XPath 式などで有用。                                                                             |
| UNORDERED_NODE_ITERATOR_TYPE | 4   | 一致した全てのノードを格納した結果ノード集合。ノードの順番は文書内に現れる順番と必ずしも一致しない。                                                 |
| ORDERED_NODE_ITERATOR_TYPE   | 5   | 一致した全てのノードを格納した結果ノード集合。ノードの順番は文書内に現れる順番に一致する。                                                           |
| UNORDERED_NODE_SNAPSHOT_TYPE | 6   | 一致した全てのノードのスナップショットを格納した結果ノード集合。ノードの順番は文書内に現れる順番と必ずしも一致しない。                               |
| ORDERED_NODE_SNAPSHOT_TYPE   | 7   | 一致した全てのノードのスナップショットを格納した結果ノード集合。ノードの順番は文書内に現れる順番に一致する。                                         |
| ANY_UNORDERED_NODE_TYPE      | 8   | 一致したノードのうちのどれか一つを格納した結果ノード集合。これは必ずしも文書内で式に一致した最初のノードというわけではない。                         |
| FIRST_ORDERED_NODE_TYPE      | 9   | 一致内で式に一致した最初のノードを格納した結果ノード集合。                                                                                           |

## 関連情報

- [XPath](/ja/docs/Web/XML/XPath)
- [XML Path Language](https://www.xml.com/pub/a/2000/08/holman/index.html?page=2#xpath-info) from _[What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/)_ by G. Ken Holman

## 原著情報

- 原文の著者: James Graham
- その他の貢献者: James Thompson
