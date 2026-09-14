---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

**`WeakSet`** は、オブジェクトや[未登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)など、ガベージコレクションの対象となる値の集合です。`WeakSet` 内の値は 1 回しか出現できません。つまり、`WeakSet` の集合内では固有の値である必要があります。

## 解説

WeakSet の値は、ガベージコレクションの対象となるものでなければなりません。ほとんどの {{Glossary("Primitive", "プリミティブデータ型")}} は任意に作成でき、持続期間がないため、格納することはできません。オブジェクトや[未登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)は、ガベージコレクションの対象となるため、格納することが可能です。

{{jsxref("Set")}} オブジェクトとの主な違いは下記の通りです。

- `WeakSet` は**オブジェクトとシンボルのみ**のコレクションです。 {{jsxref("Set")}} のように、任意の型の自由な値を入れることはできません。
- `WeakSet` は*弱い参照*です。コレクション内のオブジェクトへの*弱い参照*で保持されます。 `WeakSet` 内に格納されているオブジェクトへの参照が他にない場合、ガベージコレクションにより削除されます。

  > [!NOTE]
  > これは、このコレクションに格納されているオブジェクトの現在のリストが存在しないことを意味します。 `WeakSets` は列挙可能ではありません。

### キーの等価性

通常の `Set` と同様に、値の等価性は [SameValueZero](/ja/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality) アルゴリズムに基づきます。これは `===` 演算子と同じ動作をします。`WeakSet` がオブジェクトおよびシンボル値のみを保持できるためです。オブジェクト値の場合、等価性はオブジェクトの同一性に基づきます。これらは値ではなく、[参照](/ja/docs/Glossary/Object_reference)によって比較されます。

## コンストラクター

- {{jsxref("WeakSet/WeakSet", "WeakSet()")}}
  - : 新しい`WeakSet`オブジェクトを生成します。

## インスタンスプロパティ

これらのプロパティは `WeakSet.prototype` で定義されており、すべての `WeakSet` インスタンスで共有されています。

- {{jsxref("Object/constructor", "WeakSet.prototype.constructor")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数です。`WeakSet` インスタンスの場合、初期値は {{jsxref("WeakSet/WeakSet", "WeakSet")}} コンストラクターになります。
- `WeakSet.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は、文字列 `"WeakSet"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されています。

## インスタンスメソッド

- {{jsxref("WeakSet.prototype.add()")}}
  - : 指定された値がまだこの集合に存在しない場合、その値をこの集合に追加します。
- {{jsxref("WeakSet.prototype.delete()")}}
  - : 指定された値を、この集合に存在する場合は、この集合から削除します。
- {{jsxref("WeakSet.prototype.has()")}}
  - : 指定された値が `WeakSet` オブジェクト内の要素に含まれているかどうかを示す論理値を返します。

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

ws.delete(foo); // foo を集合から削除
ws.has(foo); // false, foo は削除済み
ws.has(bar); // true, bar は残っている
```

`foo !== bar` であることに注意してください。これらは似たオブジェクトですが、**まったく同じオブジェクト**ではありません。したがって、両方のオブジェクトが集合に追加されます。

### 循環参照の検出

自分自身を再帰的に呼び出す関数は、どのオブジェクトが処理済みであるかを追跡することで、循環したデータ構造を防ぐ必要があります。

`WeakSet` はこの目的に理想的です。

```js
// オブジェクト内に格納されるすべての項目に対してコールバックを実行
function execRecursively(fn, subject, _refs = new WeakSet()) {
  // 無限の再帰を避ける
  if (_refs.has(subject)) {
    return;
  }

  fn(subject);
  if (typeof subject === "object" && subject) {
    _refs.add(subject);
    for (const key in subject) {
      execRecursively(fn, subject[key], _refs);
    }
    _refs.delete(subject);
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

ここで、 `WeakSet` は最初の実行時に作成され、その後の関数呼び出しのたびに（内部の `_refs` 引数を使用して）渡されます。

オブジェクトの数や探索順序は重要ではないので、オブジェクトの参照を追跡するには `WeakSet` のほうが {{jsxref("Set")}} よりも、特に巨大な数のオブジェクトを処理する場合にはよりふさわしい（そして性能もよい）ものです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`WeakSet` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#weakset)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
