---
title: instanceof
slug: Web/JavaScript/Reference/Operators/instanceof
tags:
  - JavaScript
  - 言語機能
  - オブジェクト
  - 演算子
  - プロトタイプ
  - 関連演算子
  - instanceof
browser-compat: javascript.operators.instanceof
translation_of: Web/JavaScript/Reference/Operators/instanceof
---
{{jsSidebar("Operators")}}

**`instanceof` 演算子**は、あるコンストラクターの `prototype` プロパティが、あるオブジェクトのプロトタイプチェーンの中のどこかに現れるかどうかを検査します。返値は論理値です。

{{EmbedInteractiveExample("pages/js/expressions-instanceof.html")}}

## 構文

```js
object instanceof constructor
```

### 引数

- `object`
  - : 検査するオブジェクトです。
- `constructor`
  - : 検査対象の関数です。

## 解説

`instanceof` 演算子は、`object` のプロトタイプチェーンに `constructor.prototype` が存在することを検査します。

```js
// コンストラクターを定義
function C() {}
function D() {}

let o = new C()

// true : Object.getPrototypeOf(o) === C.prototype であるため
o instanceof C

// false : D.prototype は o のプロトタイプチェーンのどこにも存在しないため
o instanceof D

o instanceof Object           // true : なぜなら...
C.prototype instanceof Object // true であるため

C.prototype = {}
let o2 = new C()

o2 instanceof C  // true

// false : C.prototype は o のプロトタイプチェーンの
// どこにも存在しないため
o instanceof C

D.prototype = new C()  // 継承を使用
let o3 = new D()
o3 instanceof D  // true
o3 instanceof C  // true : o3 のプロトタイプチェーンに C.prototype があるため
```

なお、 `instanceof` の値の検査結果はコンストラクターの `prototype` プロパティが変化すると変わることがあります。また、オブジェクトのプロトタイプを `Object.setPrototypeOf` を用いて変更した場合や、標準外の `__proto__` プロパティを用いた場合も変わることがあります。

### `instanceof` と複数のコンテキスト (例: frame や window)

スコープが異なると、実行環境が変わります。つまり、組み込まれているものも変わります（別々なグローバルオブジェクト、別々なコンストラクター、など）。これにより予期せぬ結果になる場合があります。例えば、`[] instanceof window.frames[0].Array` は `false` を返します。 `Array.prototype !== window.frames[0].Array.prototype` であり、配列は前者を継承しているからです。

これは、始めはわかりにくいかもしれませんが、スクリプトで複数のフレームやウィンドウを扱い、オブジェクトをあるコンテキストから別のコンテキストへ関数を経由して渡すようになると、正当かつ重要な事項になります。例えば、`Array.isArray(myObj)` を使用すると、与えられたオブジェクトが実際に配列であるかどうかを安全にチェックできます。

例えば、別のコンテキストで [Node](/ja/docs/Web/API/Node) が [SVGElement](/ja/docs/Web/API/SVGElement) であるかどうかをチェックするには、`myNode instanceof myNode.ownerDocument.defaultView.SVGElement` を使用してください。

## 例

### instanceof を String に対して使用

以下の例では、 `instanceof` を `String` オブジェクトに使用した場合の動作を示しています。

```js
let literalString = 'これは文字列リテラルです';
let stringObject  = new String('コンストラクターで作成された String です');

literalString instanceof String;  // false : 文字列リテラルは String ではない
stringObject  instanceof String;  // true

literalString instanceof Object;  // false : 文字列リテラルは Object ではない
stringObject  instanceof Object;  // true

stringObject  instanceof Date;    // false
```

### instanceof を Date に対して使用

以下の例では、 `instanceof` を `Date` オブジェクトに使用した場合の動作を示しています。

```js
let myDate = new Date();

myDate instanceof Date;      // true
myDate instanceof Object;    // true
myDate instanceof String;    // false
```

### Object.create() で生成された Object

以下の例では、 `instanceof` を `Object.create()` で生成したオブジェクトに使用した場合の動作を示しています。

```js
function Shape() {
}

function Rectangle() {
  Shape.call(this); // スーパークラスのコンストラクターを呼び出す。
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.constructor = Rectangle;

let rect = new Rectangle();

rect instanceof Object;    // true
rect instanceof Shape;     // true
rect instanceof Rectangle; // true
rect instanceof String;    // false

let literalObject     = {};
let nullObject  = Object.create(null);
nullObject.name = "My object";

literalObject    instanceof Object;   // true : すべてのオブジェクトリテラルは Object.prototype をプロトタイプとして持つ
({})             instanceof Object;   // true : 上記と同じ
nullObject       instanceof Object;   // false : プロトタイプはプロトタイプチェーンの末尾 (null)
```

### `mycar` が `Car` 型および `Object` 型であることを示す

以下のコードは、`Car` オブジェクト型とそのインスタンスである `mycar` を生成しています。`instanceof` 演算子で、`mycar` は `Car` 型および `Object` 型であることを示します。

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
let mycar = new Car('Honda', 'Accord', 1998)
let a = mycar instanceof Car     // true を返す
let b = mycar instanceof Object  // true を返す
```

### instanceof の否定

あるオブジェクトが特定のコンストラクターの `instanceof` でないことを検査するには、次のようにします。

```js
if (!(mycar instanceof Car)) {
  // 次のようなことをします。
  // mycar = new Car(mycar)
}
```

これは実際には次のものとは異なります。

```js
if (!mycar instanceof Car)
```

これは常に `false` になります。（`!mycar` は `instanceof` の前に評価されるため、常に論理値が `Car` のインスタンスであるかどうかを検査しようとします。）

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`typeof`](/ja/docs/Web/JavaScript/Reference/Operators/typeof)
- {{jsxref("Symbol.hasInstance")}}
- {{jsxref("Object.prototype.isPrototypeOf")}}
