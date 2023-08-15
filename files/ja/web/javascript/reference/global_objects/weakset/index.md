---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
---

{{JSRef}}

**`WeakSet`** オブジェクトは、コレクションに弱く参照された*オブジェクト*を格納することができます。

## 解説

`WeakSet` オブジェクトはコレクションオブジェクトです。 {{jsxref("Set")}} と同様に、 `WeakSet` 内の各オブジェクトは一度だけ存在します。すなわち、 `WeakSet` コレクション内で固有になります。

{{jsxref("Set")}} オブジェクトとの主な違いは下記の通りです。

- `WeakSet` は**オブジェクトのみ**のコレクションです。 {{jsxref("Set")}} のように、任意の型の自由な値を入れることはできません。
- `WeakSet` は*弱い参照*です。コレクション内のオブジェクトへの*弱い参照*で保持されます。 `WeakSet` 内に格納されているオブジェクトへの参照が他にない場合、ガベージコレクションにより削除されます。

  > **メモ:** これは、このコレクションに格納されているオブジェクトの現在のリストが存在しないことを意味します。 `WeakSets` は列挙可能ではありません。

### 使用例: 循環参照の検出

自分自身を再帰的に呼び出す関数は、どのオブジェクトが処理済みであるかを追跡することで、循環したデータ構造を防ぐ必要があります。

`WeakSet` はこの目的に理想的です。

```js
// Execute a callback on everything stored inside an object
function execRecursively(fn, subject, _refs = null) {
  if (!_refs) _refs = new WeakSet();

  // Avoid infinite recursion
  if (_refs.has(subject)) return;

  fn(subject);
  if ("object" === typeof subject) {
    _refs.add(subject);
    for (let key in subject) execRecursively(fn, subject[key], _refs);
  }
}

const foo = {
  foo: "Foo",
  bar: {
    bar: "Bar",
  },
};

foo.bar.baz = foo; // Circular reference!
execRecursively((obj) => console.log(obj), foo);
```

ここで、 `WeakSet` は最初の実行時に作成され、その後の関数呼び出しのたびに (内部の `_refs` 引数を使用して) 渡されます。

オブジェクトの数や探索順序は重要ではないので、オブジェクトの参照を追跡するには `WeakSet` のほうが {{jsxref("Set")}} よりも、特に巨大な数のオブジェクトを処理する場合にはよりふさわしい (そして性能もよい) ものです。

## コンストラクター

- {{jsxref("WeakSet/WeakSet", "WeakSet()")}}
  - : 新しい`WeakSet`オブジェクトを生成します。

## インスタンスメソッド

- {{jsxref("WeakSet.add", "WeakSet.prototype.add(<var>value</var>)")}}
  - : `value` を `WeakSet` オブジェクトに追加します。
- {{jsxref("WeakSet.delete", "WeakSet.prototype.delete(<var>value</var>)")}}
  - : `value` を `WeakSet` オブジェクトから削除します。削除後、 `WeakSet.prototype.has(value)` は `false` を返します。
- {{jsxref("WeakSet.has", "WeakSet.prototype.has(<var>value</var>)")}}
  - : `value` が `WeakSet` オブジェクト内の要素に含まれているかどうかを示す論理値を返します。

## 例

### WeakSet オブジェクトの使用

```js
const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo); // true
ws.has(bar); // true

ws.delete(foo); // foo を set から削除
ws.has(foo); // false, foo は削除済み
ws.has(bar); // true, bar は残っている
```

`foo !== bar` であることに注意してください。これらは似たオブジェクトですが、_**まったく同じオブジェクト**ではありません_。したがって、両方のオブジェクトが set に追加されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.WeakSet")}}

## 関連情報

- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
