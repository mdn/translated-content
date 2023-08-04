---
title: NodeList
slug: Web/API/NodeList
l10n:
  sourceCommit: f3976b4130f066a6114aeb9617924cdcb0f994ce
---

{{APIRef("DOM")}}

**`NodeList`** オブジェクトは[ノード](/ja/docs/Web/API/Node)の集合であり、 {{domxref("Node.childNodes")}} などのプロパティや {{domxref("document.querySelectorAll()")}} などのメソッドの返値として用いられます。

> **メモ:** `NodeList` は `Array` とは異なりますが、`forEach()` メソッドで処理を反復適用することは可能です。{{jsxref("Array.from()")}} を使うことで `Array` に変換することができます。

## 生きた NodeList と静的な NodeList

NodeList には _生きた_ ものと _静的な_ ものの 2 種類のものがありますが、どちらも `NodeList` と考えられています。

### 生きた NodeList

場合によっては `NodeList` は _生きた_ ものになります。DOM が変化すると、自動的に集合が更新されることを意味しています。

For example, {{domxref("Node.childNodes")}} is live:

```js
const parent = document.getElementById("parent");
let childNodes = parent.childNodes;
console.log(childNodes.length); // "2" と仮定すると
parent.appendChild(document.createElement("div"));
console.log(childNodes.length); // "3" が出力される
```

### 静的な NodeList

一方、 `NodeList` が _静的な_ ものである場合があります。この場合は、DOM 内の変更が集合の内容に影響を与えません。{{domxref("document.querySelectorAll()")}} メソッドは、静的な `NodeList` を返します。

`NodeList` の各要素に反復処理を行う方法を選択したり、リストの長さをキャッシュしたりする場合は、この違いを考えておくといいでしょう。

## インスタンスプロパティ

- {{domxref("NodeList.length")}}
  - : `NodeList` に含まれるノードの数です。

## インスタンスメソッド

- {{domxref("NodeList.item()")}}

  - : 指定されたインデックスに対応するリスト内の要素を返します。インデックスが範囲外の場合は `null` を返します。

    `nodeList[i]` のアクセスの代替手段です（この場合、`i` が範囲外の時には `undefined` が返ります）。これは JavaScript 以外の言語による DOM の実装で便利です。
- {{domxref("NodeList.entries()")}}
  - : {{jsxref("Iteration_protocols","イテレーター")}}を返し、これによってコードが集合に含まれているキーと値のペアを走査することができます。 (この場合、キーは 0 から始まる数値で値はノードです。)
- {{domxref("NodeList.forEach()")}}
  - : 指定された関数を `NodeList` の各要素に対して実行し、その要素を関数の引数として渡します。
- {{domxref("NodeList.keys()")}}
  - : {{jsxref("Iteration_protocols", "イテレーター")}}を返し、これによってコードが集合に含まれているキーと値のペアのキーを走査することができます。（この場合、キーは 0 から始まる数値です。）
- {{domxref("NodeList.values()")}}
  - : {{jsxref("Iteration_protocols", "イテレーター")}}を返し、これによってコードが集合に含まれているキーと値のペアの値（ノード）を走査することができます。

## 例

`NodeList` の中のアイテムは、[for](/ja/docs/Web/JavaScript/Reference/Statements/for) ループで走査することができます。

```js
for (let i = 0; i < myNodeList.length; i++) {
  let item = myNodeList[i];
}
```

**リストの要素について処理を回すために [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) を使用しないでください。`NodeList` のプロパティである要素に加えて、 `length` や `item` プロパティについても処理が適用されるため、 {{domxref("element")}} オブジェクトのみ処理すべきスクリプトではエラーが生じます。また、`for...in` で取得されるプロパティの順番は保証されていません。

[`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループであれば、`NodeList` オブジェクトを正しく扱うことができます。

```js
const list = document.querySelectorAll("input[type=checkbox]");
for (const checkbox of list) {
  checkbox.checked = true;
}
```

最近のブラウザーでは、イテレーターに基づくメソッドとして {{domxref("NodeList.forEach()", "forEach()")}}, {{domxref("NodeList.entries()", "entries()")}}, {{domxref("NodeList.values()", "values()")}}, {{domxref("NodeList.keys()", "keys()")}} に対応しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
