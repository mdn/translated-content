---
title: Iterator() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Iterator/Iterator
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{JSRef}}

**`Iterator()`** コンストラクターは、イテレーターを作成する他のクラスの[スーパークラス](/ja/docs/Web/JavaScript/Reference/Classes/extends)として意図通りに使用されることを目的としています。これ自体で構築された場合、エラーが発生します。

## 構文

```js-nolint
new Iterator()
```

> [!NOTE]
> `Iterator()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) でしか作成できません。 `new` を使用せずに名付けると {{jsxref("TypeError")}} が発生します。さらに、 `Iterator()` は実際にはそれ自体で作成することはできません。通常は、サブクラスのコンストラクター内で [`super()`](/ja/docs/Web/JavaScript/Reference/Operators/super) を呼び出すことで暗黙的に作成されます。

### 引数

なし。

### 返値

新しい {{jsxref("Iterator")}} オブジェクトです。

### 例外

- {{jsxref("TypeError")}}
  - : [`new.target`](/ja/docs/Web/JavaScript/Reference/Operators/new.target) が `Iterator` 関数事態に呼び出された場合、つまり、 `Iterator` コンストラクターそれ自身が構築された場合。

## 解説

`Iterator` は抽象クラスを表します。抽象クラスとは、サブクラスに対して指定された共通のユーティリティを提供するクラスですが、それ自体がインスタンス化されることを意図していません。これは、他にもイテレータークラスのスーパークラスであり、特定の反復処理アルゴリズムを実装するサブクラスを作成するために使用されます。つまり、 `Iterator` のすべてのサブクラスは、[イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル)で要求されるように、 `next()` メソッドを実装する必要があります。 `Iterator` は実際には `next()` メソッドを提供していないため、 `Iterator` を直接構築することは意味がありません。

また、 {{jsxref("Iterator.from()")}} を使用して、既存の反復可能オブジェクトまたはイテレーターオブジェクトから `Iterator` のインスタンスを作成することもできます。

## 例

### Iterator のサブクラス化

次の例では、反復処理が可能なカスタムデータ構造である `Range` を定義しています。オブジェクトを反復処理可能にするには、ジェネレーター関数という形で [`[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) メソッドを提供します。

```js
class Range {
  #start;
  #end;
  #step;

  constructor(start, end, step = 1) {
    this.#start = start;
    this.#end = end;
    this.#step = step;
  }

  *[Symbol.iterator]() {
    for (let value = this.#start; value <= this.#end; value += this.#step) {
      yield value;
    }
  }
}

const range = new Range(1, 5);
for (const num of range) {
  console.log(num);
}
```

これはうまく動作しますが、組み込みのイテレーターの作業方法ほど優れてはいません。 2 つの問題があります。

- 返されたイテレーターは {{jsxref("Generator")}} を継承しており、これは `Generator.prototype` への変更が返されたイテレーターに影響することを意味しており、抽象化の漏れです。
- 返されたイテレーターはカスタムプロトタイプを継承しないため、イテレーターに追加のメソッドを意図通りに追加するのが難しくなります。

`Iterator` をサブクラス化することで、組み込みのイテレーター（例えば、[マップのイテレーター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)）の実装を模倣することができます。これにより、 [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) などの追加のプロパティを定義することができ、返値のイテレーターにおいてイテレーターのヘルパーメソッドを利用できるようになります。

```js
class Range {
  #start;
  #end;
  #step;

  constructor(start, end, step = 1) {
    this.#start = start;
    this.#end = end;
    this.#step = step;
  }

  static #RangeIterator = class extends Iterator {
    #cur;
    #s;
    #e;
    constructor(range) {
      super();
      this.#cur = range.#start;
      this.#s = range.#step;
      this.#e = range.#end;
    }
    static {
      Object.defineProperty(this.prototype, Symbol.toStringTag, {
        value: "Range Iterator",
        configurable: true,
        enumerable: false,
        writable: false,
      });

      // Avoid #RangeIterator from being accessible outside
      delete this.prototype.constructor;
    }
    next() {
      if (this.#cur > this.#e) {
        return { value: undefined, done: true };
      }
      const res = { value: this.#cur, done: false };
      this.#cur += this.#s;
      return res;
    }
  };

  [Symbol.iterator]() {
    return new Range.#RangeIterator(this);
  }
}

const range = new Range(1, 5);
for (const num of range) {
  console.log(num);
}
```

サブクラス化パターンは、多数の独自のイテレーターを作成したい場合に便利です。 `Iterator` を継承していない反復可能オブジェクトやイテレーターオブジェクトがあり、そのオブジェクトにイテレーターのヘルパーメソッドを呼び出したいだけの場合、 {{jsxref("Iterator.from()")}} を使用して、一時的に `Iterator` インスタンスを作成することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Iterator` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.from()")}}
