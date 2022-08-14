---
title: '[[Prototype]] の変更の性能上の危険性'
slug: Web/JavaScript/The_performance_hazards_of_prototype_mutation
tags:
  - Guide
  - JavaScript
  - Performance
---
{{jsSidebar("Advanced")}}

すべての JavaScript オブジェクトは `[[Prototype]]` を持っています。 オブジェクトのプロパティを取得するには、まずそのオブジェクトを検索し、次にそのオブジェクトの `[[Prototype]]` を検索し、さらにそのオブジェクトの `[[Prototype]]` を検索し、プロパティが見つかるかチェーンが終了するまで検索します。 `[[Prototype]]` チェーンは特に[オブジェクトの継承](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)に有用です。

ECMAScript 6 では、 `[[Prototype]]` を変異させる方法が導入されています。 この柔軟性は、性能を大幅に低下させるという代償を伴います。**`[[Prototype]]` の変更は、現代の*すべての* JavaScript エンジンにおいて性能上の害になります。** この記事では、`[[Prototype]]`の変更がなぜ*すべての*ブラウザーで遅くなるのかを説明し、代わりに使用すべき代替手段を説明します。

## JavaScript エンジンがプロパティアクセスを最適化する方法

オブジェクトはハッシュなので、理論的には（そして現実には）プロパティアクセスの時間は定数です。しかし、「時間は定数」とは、何千もの機械語かもしれません。幸い、オブジェクトとプロパティはしばしば「予測可能」であり、そのような場合、その基礎となる構造も予測可能です。 JIT はこれを利用して、予測可能なアクセスをより高速に行うことができます。

エンジンは、オブジェクトに追加されるプロパティの順序によって最適化を行います。 ほとんどのプロパティは、非常に似た順序でオブジェクトに追加されます。（日常的に `obj[val]` スタイルのランダムアクセスを使用しているオブジェクトは顕著な例外です）。

```js
function Landmark(lat, lon, desc) {
  this.location = { lat: lat, long: lon };
  this.description = desc;
}
var lm1 = new Landmark(-90, 0, "South Pole");
var lm2 = new Landmark(-24.3756466, -128.311018, "Pitcairn Islands");
```

すべての `Landmark` は `location` と `description` というプロパティをこの順番で持ちます。 緯度/経度情報を格納する各オブジェクトのリテラルは、 `lat` と `long` のプロパティをこの順番で持っています。 後続のコードでプロパティを削除することは可能です。しかし、その可能性は低いので、エンジンはそのような場合に最適でないコードを生成することができます。 Firefox の JavaScript エンジンである SpiderMonkey では、プロパティの特定の順序（および値を含まないプロパティのいくつかの側面）を*形状*と呼んでいます。（V8 ではこの概念の名前は*構造 ID* です。） 2 つのオブジェクトの形状が同じである場合、それらのプロパティは同じように保存されます。

エンジン内部では、このような考え方の（簡略化した）バージョンは、次の C++ のようになります。

```cpp
struct Property {
  Property* prev; // 最初のプロパティであれば null
  String name; // プロパティ名
  unsigned int index; // ストレージ内の値の番号
};
using Shape = Property*;
struct Object {
  Shape shape;
  Value* properties;
  Object* prototype;
};
```

例では、様々な JS 表現がこの C++ に対応することになります。

```cpp
lm1->properties[0]; // loc1.location
lm1->properties[1]; // loc1.description
lm2->properties[0].toObject()->properties[1]; // loc2.location.long
```

エンジンは、オブジェクトが特定の形状であることを知っていれば、そのオブジェクトのすべてのプロパティの*すべての*プロパティの位置を仮定することができます。 特定のプロパティにアクセスするには、安価なポインターを 2 回ほどアクセスするだけでよいのです。 オブジェクトが特定の形状であることを確認するのは、機械語では簡単です。 もしそうであれば、高速なコードを仮定し、そうでなければ、低速な方法をとればよいのです。

## 継承されたプロパティのナイーブな最適化

多くのプロパティはオブジェクトに*直接は*存在しません。参照しようとするとしばしばプロトタイプチェーン上のプロパティが見つかります。 プロトタイプのプロパティへのアクセスは、そのプロパティを含むオブジェクトへの `prototype` フィールドを介した余分な「ホップ」に過ぎません。 正しく最適化するためには、どのオブジェクトもそのプロパティを持たないようにする必要があり、すべてのホップはそのオブジェクトの形状をチェックしなければなりません。

```js
var d = new Date();
d.toDateString(); // Date.prototype.toDateString

function Pair(x, y) { this.x = x; this.y = y; }
Pair.prototype.sum = function() { return this.x + this.y; };

var p = new Pair(3, 7);
p.sum(); // Pair.prototype.sum
```

エンジンは多くの場合、このクイックアンドダーティーアプローチを採用しています。 しかし、特にパフォーマンスに敏感な JavaScript では、これでは十分ではありません。

## 継承されたプロパティをインテリジェントに最適化

予測可能なプロパティへのアクセスでは、通常、 `[[Prototype]]` チェーンに沿って一定のホップ数でプロパティを見つけます。間にあるオブジェクトは通常、新しいプロパティを取得しません。最終的なオブジェクトは通常、いかなるプロパティも[削除](/ja/docs/Web/JavaScript/Reference/Operators/delete)されません。要するに **`[[Prototype]]` の変更はまれです**。 これらの共通の仮定はすべて、遅いプロトタイプホッピングを避けるために必要です。エンジンによって、継承されたプロパティをインテリジェントに最適化するために、異なるアプローチを選択します。

- 継承されたものを含む _ultimate_ オブジェクトの形状をチェックすることができます。

  - この場合、形状の一致は、間にあるオブジェクトの `[[Prototype]]` が変更されていないことを意味しなければなりません。 したがって、あるオブジェクトの `[[Prototype]]` が変更された場合、その `[[Prototype]]` の連鎖に沿ったすべてのオブジェクトの形状も変更されなければなりません。

    ```js
        var obj1 = {};
        var obj2 = Object.create(obj1);
        var obj3 = Object.create(obj2);

        // 形状が変化するオブジェクト: obj3, obj2, obj1, Object.prototype
        obj3.__proto__ = {};
        ```

- 最初にアクセスしたオブジェクトの形状を確認することができます。

  - : 変更された `[[Prototype]]` オブジェクトを継承する可能性のあるオブジェクトはすべて、 `[[Prototype]]` が変化したことを反映して、変更しなければなりません。

    ```js
        var obj1 = {};
        var obj2 = Object.create(obj1);
        var obj3 = Object.create(obj2);

        // 形状が変化するオブジェクト: obj1, obj2, obj3
        obj1.__proto__ = {};
        ```

## `[[Prototype]]` の変更の悪影響

`[[Prototype]]` を変更することによる性能への悪影響は、変更の発生時とその後の実行時の 2 つの段階で起こります。 まず、 **`[[Prototype]]` の変更は遅いです**。 第二に、 **`[[Prototype]]` が変化すると、変化した `[[Prototype]]` オブジェクトと相互作用するコードの速度を低下させます**。

### `[[Prototype]]` の変更は遅い

仕様では `[[Prototype]]` を変更することは一つの hidden プロパティを変更することだと考えていますが、現実の実装はかなり複雑です。上記の形状を変更する方法は両方とも、 1 つ以上のオブジェクトを調査（および変更）する必要があります。 どちらの方法が変更するオブジェクトの数がより少なくなるかは、作業量に依存します。

### 変更された `[[Prototype]]` は他のコードより速度が低下する

`[[Prototype]]` を変更することの悪い影響は、変更が完了しても終わりません。プロパティを得検査する多くの操作が、暗黙に `[[Prototype]]` チェーンが変化しないことを前提としているので、エンジンが変更を検出すると、*変更された `[[Prototype]]` を持つオブジェクトでは、そのオブジェクトのフローが通るすべてのコードを「汚染する」ことになります*。この汚染は、変異した `[[Prototype]]` オブジェクトを観察するすべてのコードに流れ込みます。 最悪のケースに近い例として、次のような動作パターンを考えてみましょう。

```js
var obj = {};
obj.__proto__ = { x: 3 }; // gratuitous mutation

var arr = [obj];
for (var i = 0; i < 5; i++)
  arr.push({ x: i });

function f(v, i) {
  var elt = v[i];
  var r =  elt.x > 2 // pessimized
           ? elt
           : { x: elt.x + 1 };
  return r;
}
var c = f(arr, 0);
c.x; // pessimized: return value has unknown properties
c = f(arr, 1);
c.x; // still pessimized!

var arr2 = [c];
arr2[0].x; // pessimized
```

（何度も実行されるコードだけが最適化されるため、これらの悪い動作の*すべて*を引き起こすわけではありません。しかし、「ホット」なコードに出現すれば、あらゆる故障が起こりえます。）

変更された `[[Prototype]]` オブジェクトがどこに流れているかを正確に認識することは、多くの場合、複数のスクリプトにまたがっており、非常に難しいことです。 これは、コードと特定の実行時動作の注意深いテキスト分析に依存します。 遠く離れた変更によって微妙に異なる制御フローが発生し、以前は最適だったコードパスが最適でない動作になることがあります。 JavaScript 言語の実装者であっても、遅くなる場所をすべて認識することは不可能です。
