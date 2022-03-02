---
title: Element.getElementsByClassName()
slug: Web/API/Element/getElementsByClassName
tags:
  - API
  - クラス
  - Element
  - メソッド
  - リファレンス
  - getElementsByClassName
browser-compat: api.Element.getElementsByClassName
translation_of: Web/API/Element/getElementsByClassName
---
{{APIRef("DOM")}}

{{domxref("Element")}} の **`getElementsByClassName()`** メソッドは、引数で与えられたクラス名を含むすべての子要素を、生きた {{domxref("HTMLCollection")}} で返します。 

{{domxref("Document.getElementsByClassName", "getElementsByClassName()")}} メソッドはこのメソッドとほぼ同様に動作しますが、 {{domxref("Document")}} 全体に働きます。特定された文書ルート要素の子孫のうち、与えられたクラス名に合う複数の要素を返します。

## 構文

```js
var elements = element.getElementsByClassName(names);
```

### 引数

- `names`
  - : 一致させる一つ以上のクラス名を表す {{domxref("DOMString")}} で、クラス名は空白区切りで指定できます。

### 返値

{{domxref("HTMLCollection")}} で、 `names` で指定したすべてのクラスを持つすべての要素のライブで更新されるリストです。

## 使用上の注意

この関数が返すコレクションは常に*生きています*。つまり、この関数を呼び出された要素をルートとする DOM ツリーの現在の状態が常に反映されています。サブツリー上で `names` に一致する新しい要素が追加された場合は、直ちにこのコレクションに追加されます。同様に、サブツリー上にある `names` に一致しなかった要素が一致するよう変更された場合も、すぐにこのコレクションに現れます。

逆もしかりです。 `names` に一致しなくなったりツリーから外された要素は、すぐにコレクションから除外されます。

> **Note:** クラス名は[後方互換モード](/ja/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)では大文字・小文字が区別されず、それ以外では区別されます。

## 例

### 単一のクラスと一致させる

単一の指定されたクラスを含む要素を探すには、 `getElementsByClassName()` を呼び出す際にそのクラス名を指定するだけです。

```js
element.getElementsByClassName('test');
```

この例は `main` の `id` を持つ要素の子孫の中で、`test` クラスをもつ全要素を見つけます。

```js
document.getElementById('main').getElementsByClassName('test');
```

### 複数のクラスと一致させる

`red` と `test` 両方のクラスを含んだ要素を見つけます。

```js
element.getElementsByClassName('red test');
```

### 結果を調査する

標準の配列構文や、`HTMLCollection` の {{domxref("HTMLCollection.item", "item()")}} メソッドを使うことで、返されたコレクションの要素を調査することができます。しかし、次の例はうまく動作しないでしょう。`colorbox` クラスを外した際に、`matches` がすぐに変更されてしまうからです。

```js
var matches = element.getElementsByClassName('colorbox');

for (var i=0; i<matches.length; i++) {
  matches[i].classList.remove('colorbox');
  matches.item(i).classList.add('hueframe');
}
```

別の手段を使いましょう。例えば、

```js
var matches = element.getElementsByClassName('colorbox');

while (matches.length > 0) {
  matches.item(0).classList.add('hueframe');
  matches[0].classList.remove('colorbox');
}
```

このコードは、`"colorbox"` クラスを持つ子孫要素を見つけ、`item(0)`を呼び出して `"hueframe"` クラスを追加し、（配列記法で） `"colorbox"` を削除します。その後、（もし残っていれば）別の要素が `item(0)` になります。

### Array メソッドで結果を抽出する

このメソッドの戻り値を `this` 値として {{jsxref("Array.prototype")}} メソッドに与えることで、任意の {{ domxref("HTMLCollection") }} で `Array` メソッドを使うことができます。次の例では `test` クラスを持つすべての {{HTMLElement("div")}} 要素を見つけられます。

```js
var testElements = document.getElementsByClassName('test');
var testDivs = Array.prototype.filter.call(testElements, function(testElement) {
  return testElement.nodeName === 'DIV';
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
