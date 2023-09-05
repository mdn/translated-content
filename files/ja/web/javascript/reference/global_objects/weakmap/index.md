---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
---

{{JSRef}}

**`WeakMap`** オブジェクトは、キーが弱く参照されるキーと値の組のコレクションです。キーはオブジェクトでなければならず、値は任意の値を取ることができます。

`WeakMap` については、 [WeakMap オブジェクト](/ja/docs/Web/JavaScript/Guide/Keyed_collections)のガイド ([キー付きコレクション](/ja/docs/Web/JavaScript/Guide/Keyed_collections)内) でより詳しく解説しています。

## 解説

WeakMap のキーは `Object` に限ります。{{Glossary("Primitive", "プリミティブ型")}} はキーとして使えません（例えば {{jsxref("Symbol")}} は `WeakMap` のキーとして使えません）。

### なぜ *Weak*Map なのか?

map API は、4 つの API メソッドから共有される 2 つの配列 (1 つはキー用、もう 1 つは値用) を用いることで、JavaScript で実装*できます*。このマップに要素を設定すると、それぞれの配列の最後に同時にキーと値を追加することになります。その結果、両方の配列でキーと値のインデックスは対応がとれています。マップから値を取得するには、すべてのキーを操作して一致するものを見つけ、見つかったキーのインデックスを使用して値の配列から対応する値を取り出します。

そうした実装では、主に 2 つの不都合が生じることとなります。

1. 第一に、設定や探索の計算量が `O(n)` となること (_n_ はマップ中におけるキーの数) で、どちらの操作も一致する値を見つけるためにキーのリストを反復しなければならないからです。
2. 第二の不都合は、配列が各キーと各値への参照を無期限に維持することを保証しているため、メモリリークが発生することです。これらの参照は、オブジェクトへの他の参照がない場合でも、キーがガベージコレクションされるのを防ぎます。これにより、対応する値がガベージコレクションされるのを防ぐことにもなります。

これに対して、ネイティブの `WeakMap` では、キーとなるオブジェクトに対しては"弱い"参照が保持されます。これにより、キーとなったオブジェクトへの参照が他に存在しない場合に、そのオブジェクトはガベージコレクションの対象に含まれるようになります。ネイティブの WeakMap はキーとそのキーに関する情報をマッピングする場合に、キーがガベージコレクションされていないときにだけ意味があるため特に有用な構造です。

**弱い参照を用いるため、`WeakMap` のキーは列挙できません。** キーの一覧を取得するメソッドは存在しません。もし、可能であれば、キーの一覧はガベージコレクションに依存することになり、非決定性が生まれます。キーの一覧が必要な場合は、{{jsxref("Map")}}を使うことになります。

## コンストラクター

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : 新しい `WeakMap` オブジェクトを生成します。

## インスタンスメソッド

- {{jsxref("WeakMap.delete", "WeakMap.prototype.delete(<var>key</var>)")}}
  - : `key` に関連した値を削除します。その後 `WeakMap.prototype.has(key)` は `false` を返します。
- {{jsxref("WeakMap.get", "WeakMap.prototype.get(<var>key</var>)")}}
  - : `key` に関連した値を返します。見つからない場合、`undefined` を返します。
- {{jsxref("WeakMap.has", "WeakMap.prototype.has(<var>key</var>)")}}
  - : `WeakMap` オブジェクト内に `key` に関連した値があるかどうか示す Boolean を返します。
- {{jsxref("WeakMap.set", "WeakMap.prototype.set(<var>key</var>, <var>value</var>)")}}
  - : `WeakMap` オブジェクト内に `key` に対する値を設定し、`WeakMap` オブジェクトを返します。

## 例

### WeakMap の使用

```js
const wm1 = new WeakMap(),
  wm2 = new WeakMap(),
  wm3 = new WeakMap();
const o1 = {},
  o2 = function () {},
  o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // 値は（オブジェクトまたは関数を含む）何であってもかまいません
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // キーも値もどんなオブジェクトでもかまいません。 WeakMap であってもよいのです！

wm1.get(o2); // "azerty"
wm2.get(o2); // wm2 には o2 に関連付けられた値が無い為、undefined が返ってきます
wm2.get(o3); // 値が undefined と関連付けられている為、undefined が返ってきます

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (値が関連付けられているならば、たとえ値が 'undefined' であっても true となります)

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
```

### .clear() メソッドを持つ WeakMap 風のクラスの実装

```js
class ClearableWeakMap {
  constructor(init) {
    this._wm = new WeakMap(init);
  }
  clear() {
    this._wm = new WeakMap();
  }
  delete(k) {
    return this._wm.delete(k);
  }
  get(k) {
    return this._wm.get(k);
  }
  has(k) {
    return this._wm.has(k);
  }
  set(k, v) {
    this._wm.set(k, v);
    return this;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.WeakMap")}}

## 関連情報

- [JavaScript ガイド内の `WeakMap`](/ja/docs/Web/JavaScript/Guide/Keyed_collections#WeakMap_object)
- [Hiding Implementation Details with ECMAScript 6 WeakMaps](http://fitzgeraldnick.com/weblog/53/)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
