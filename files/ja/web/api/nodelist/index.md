---
title: NodeList
slug: Web/API/NodeList
---

{{APIRef("DOM")}}

**`NodeList`** オブジェクトは{{Glossary("Node/DOM", "ノード")}}の集合であり、 {{domxref("Node.childNodes")}} などのプロパティや {{domxref("document.querySelectorAll()")}} などのメソッドの返値として用いられます。

> **メモ:** `NodeList` は `Array` とは異なりますが、 `forEach()` メソッドで処理を反復適用することは可能です。 {{jsxref("Array.from()")}} を使うことで `Array` に変換することができます。
>
> ただし、古いブラウザーでは `NodeList.forEach()` も `Array.from()` も実装されていない場合があります。これらの制限は {{jsxref("Array.forEach()", "Array.prototype.forEach()")}} を使うことで回避することが可能です (この文書に詳しく書かれています)。

場合によっては、 `NodeList` が*ライブ*であること、すなわち DOM 内が更新されると自動的にコレクションが更新されることがあります。例えば、 {{domxref("Node.childNodes")}} はライブです。

```js
var parent = document.getElementById('parent');
var child_nodes = parent.childNodes;
console.log(child_nodes.length); // "2" と仮定すると
parent.appendChild(document.createElement('div'));
console.log(child_nodes.length); // "3" が出力される
```

一方、 `NodeList` が*静的*である場合、すなわち DOM 内の変更がコレクションの内容に影響を与えない場合もあります。 {{domxref("document.querySelectorAll()")}} メソッドは、静的な `NodeList` を返します。

`NodeList` の各要素に反復処理を行う方法を選択したり、リストの長さをキャッシュしたりする場合は、この違いを考えておくといいでしょう。

## プロパティ

- {{domxref("NodeList.length")}}
  - : `NodeList` に含まれるノードの数です。

## メソッド

- {{domxref("NodeList.item()")}}
  - : 指定されたインデックスに対応するリスト内の要素を返します。ただし、インデックスが範囲外の場合は `null` を返します。
    `nodeList[i]` のアクセスの代替手段です (この場合、`i` が範囲外の時には `undefined` が返ります)。これは JavaScript 以外の言語による DOM の実装で便利です。
- {{domxref("NodeList.entries()")}}
  - : {{jsxref("Iteration_protocols","iterator")}} を返し、これによってコードがコレクションに含まれているキー・値の組を順次処理することができます。 (この場合、キーは 0 から始まる数値で値はノードです。)
- {{domxref("NodeList.forEach()")}}
  - : 指定された関数を `NodeList` の各要素に対して実行し、その要素を関数の引数として渡します。
- {{domxref("NodeList.keys()")}}
  - : {{jsxref("Iteration_protocols", "iterator")}} を返し、これによってコードがコレクションに含まれているキー・値の組のキーを順次処理することができます。 (この場合、キーは 0 から始まる数値です。)
- {{domxref("NodeList.values()")}}
  - : {{jsxref("Iteration_protocols", "iterator")}} を返し、これによってコードがコレクションに含まれているキー・値の組の値 (ノード) を順次処理することができます。

## 例

`NodeList` の各要素について処理を順次適用するには、以下のような方法があります。

```js
for (var i = 0; i < myNodeList.length; i++) {
  var item = myNodeList[i];
}
```

リストの要素について処理を回すために {{jsxref("Statements/for...in", "for...in")}} や {{jsxref("Statements/for_each...in", "for each...in")}} を用いてはいけません。なぜなら、 `NodeList` のプロパティである要素に加えて、 length プロパティについても処理が適用されるため、 {{domxref("element")}} オブジェクトのみ処理すべきスクリプトではエラーが生じます。また、`for..in` で取得されるプロパティの順番は保証されていません。

{{jsxref("Statements/for...of", "for...of")}} ループであれば、 `NodeList` オブジェクトを正しく扱うことができます。

```js
var list = document.querySelectorAll('input[type=checkbox]');
for (var checkbox of list) {
  checkbox.checked = true;
}
```

最近のブラウザでは、イテレーターに基づくメソッドとして {{domxref("NodeList.forEach()", "forEach()")}}, {{domxref("NodeList.entries()", "entries()")}}, {{domxref("NodeList.values()", "values()")}}, {{domxref("NodeList.keys()", "keys()")}} に対応しています。

また、 Internet Explorer と互換性がある手法として、反復に {{jsxref("Array.forEach()", "Array.prototype.forEach")}} を使用することができます。

```js
var list = document.querySelectorAll('input[type=checkbox]');
Array.prototype.forEach.call(list, function (checkbox) {
  checkbox.checked = true;
});
```

## 仕様書

| 仕様書                                                                                       | 状態                             | 備考     |
| -------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('DOM WHATWG', '#interface-nodelist', 'NodeList')}}             | {{ Spec2('DOM WHATWG') }} |          |
| {{SpecName('DOM3 Core', 'core.html#ID-536297177', 'NodeList')}}         | {{ Spec2('DOM3 Core') }} |          |
| {{SpecName('DOM2 Core', 'core.html#ID-536297177', 'NodeList')}}         | {{ Spec2('DOM2 Core') }} |          |
| {{SpecName('DOM1', 'level-one-core.html#ID-536297177', 'NodeList')}} | {{ Spec2('DOM1') }}         | 初回定義 |

## ブラウザーの対応

{{Compat("api.NodeList")}}
