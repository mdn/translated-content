---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

**`WeakMap`** はキーと値の組の集合ですが、キーはオブジェクトまたは[非登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)でなければならず、値は任意の [JavaScript 型](/ja/docs/Web/JavaScript/Guide/Data_structures)で、キーへの強い参照を生成しません。つまり、`WeakMap` 内のキーとしてのオブジェクトが存在しても、そのオブジェクトがガベージコレクションされる可能性があります。キーとして使用されたオブジェクトが回収されると、そのオブジェクトに対応する値は、他の場所で強く参照されていない限り、どの `WeakMap` においても同様にガベージコレクションの対象となります。`WeakMap` のキーとして使用することができる唯一のプリミティブ型はシンボル（正確に言えば、[非登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)）です。非登録シンボルは一意性が保証され、再生成されないためです。

`WeakMap`は、値がキーを参照している場合でも、キーとなるオブジェクトがガベージコレクションされるのを妨げない方法で、データとオブジェクトを関連付けることができます。ただし、`WeakMap`はキーの生存状態を監視できないため、列挙をすることができません。`WeakMap` がキーを列挙するメソッドを公開した場合、そのリストはガベージコレクションの状態に依存するため、不確定性が生じます。キーの列挙を行いたいのであれば、`WeakMap` ではなく {{jsxref("Map")}} を使用してください。

`WeakMap` について詳しく知るには、 [WeakMap オブジェクト](/ja/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_オブジェクト)のガイド（[キー付きコレクション](/ja/docs/Web/JavaScript/Guide/Keyed_collections)内）を参照してください。

## 解説

WeakMap のキーはガベージコレクション可能でなければなりません。ほとんどの{{Glossary("Primitive", "プリミティブデータ型")}}は任意に作成でき、寿命を持たないため、キーとして使用できません。オブジェクトと[非登録シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー内の共有シンボル)は、ガベージコレクション可能であるためキーとして使用できます。

### キーの等価性

通常の `Map` と同様に、値の等価性は [SameValueZero](/ja/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality) アルゴリズムに基づきます。これは `===` 演算子と同じです。`WeakMap` がオブジェクトとシンボルのキーしか保持できないためです。つまり、オブジェクトキーの場合、等価性はオブジェクトが同一のものであるかに基づきます。これらは値ではなく[参照](/ja/docs/Glossary/Object_reference)によって比較されます。

### なぜ WeakMap なのか

マップ API は、4 つの API メソッドで共有される 2 つの配列（1 つはキー用、もう 1 つは値用）を用いることで、JavaScript に実装することができました。このマップに要素を設定すると、それぞれの配列の最後に同時にキーと値を追加することになります。その結果、両方の配列でキーと値のインデックスは対応がとれています。マップから値を取得するには、すべてのキーを操作して一致するものを見つけ、見つかったキーのインデックスを使用して値の配列から対応する値を取り出します。

そうした実装では、主に 2 つの不都合が生じることとなります。

1. 第一に、設定や探索の計算量が `O(n)` となること (_n_ はマップ中におけるキーの数) で、どちらの操作も一致する値を見つけるためにキーのリストを走査しなければならないからです。
2. 第二の不都合は、配列が各キーと各値への参照を無期限に維持することを保証しているため、メモリーリークが発生することです。これらの参照は、オブジェクトへの他の参照がない場合でも、キーがガベージコレクションされるのを防ぎます。これにより、対応する値がガベージコレクションされるのを防ぐことにもなります。

これに対し、`WeakMap` では、キーオブジェクトは、そのキーがガベージコレクションされない限り、そのコンテンツに対して強く参照しますが、その後は弱く参照します。したがって、`WeakMap` は次のように動作します。

- キーオブジェクトへの参照が最終的に除去されるガベージコレクションを妨げません。
- `WeakMap` 以外の場所から参照されていないキーオブジェクトを持つ値は、ガベージコレクションの対象となることがあります。

`WeakMap` は、キーがガベージコレクションされていない場合にのみ有益な、キーに関する情報をキーに割り当てる際に特に有益なデータ構造です。

しかし、`WeakMap`はキーの生存状態を監視できないため、キーは列挙可能ではありません。キーのリストを取得するメソッドは存在しません。仮に存在した場合、そのリストはガベージコレクションの状態に依存し、不確定性が生じることになります。キーのリストが必要な場合は、 {{jsxref("Map")}} を使用してください。

## コンストラクター

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : 新しい `WeakMap` オブジェクトを生成します。

## インスタンスプロパティ

これらのプロパティは `WeakMap.prototype` に定義され、すべての `WeakMap` インスタンスで共有されます。

- {{jsxref("Object/constructor", "WeakMap.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数。`WeakMap` インスタンスの場合、初期値は {{jsxref("WeakMap/WeakMap", "WeakMap")}} コンストラクターです。
- `WeakMap.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"WeakMap"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("WeakMap.prototype.delete()")}}
  - : `key` に関連した値を削除します。その後 `WeakMap.prototype.has(key)` は `false` を返します。
- {{jsxref("WeakMap.prototype.get()")}}
  - : `key` に関連した値を返します。見つからない場合、`undefined` を返します。
- {{jsxref("WeakMap.prototype.getOrInsert()")}}
  - : この `WeakMap` 内で指定されたキーに対応する値を返します。キーが存在しない場合、指定されたデフォルト値を持つ新しい項目を挿入し、挿入された値を返します。
- {{jsxref("WeakMap.prototype.getOrInsertComputed()")}}
  - : この `WeakMap` で指定されたキーに対応する値を返します。キーが存在しない場合、指定されたキーと、与えられたコールバックから計算されたデフォルト値を持つ新しい項目を挿入し、挿入された値を返します。
- {{jsxref("WeakMap.prototype.has()")}}
  - : この `WeakMap` オブジェクト内に、指定されたキーに関連付けられた値があるかどうか示す論理値を返します。
- {{jsxref("WeakMap.prototype.set()")}}
  - : この `WeakMap` オブジェクト内に、指定されたキーと値を持つ新しい項目を追加します。すでにそのキーが存在する場合は、既存の項目を更新します。

## 例

### WeakMap の使用

```js
const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();
const o1 = {};
const o2 = () => {};
const o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // 値は（オブジェクトまたは関数を含む）何であってもかまいません
wm2.set(o2, undefined);
wm2.set(wm1, wm2); // キーも値もどんなオブジェクトでもかまいません。 WeakMap であってもよいのです！

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined が設定されているので undefined
wm2.get(o3); // o3 のキーが wm2 に存在しないので undefined

wm1.has(o2); // true
wm2.has(o2); // true（値自体が 'undefied' あっても）
wm2.has(o3); // false

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
```

### .clear() メソッドを持つ WeakMap 風のクラスの実装

```js
class ClearableWeakMap {
  #wm;
  constructor(init) {
    this.#wm = new WeakMap(init);
  }
  clear() {
    this.#wm = new WeakMap();
  }
  delete(k) {
    return this.#wm.delete(k);
  }
  get(k) {
    return this.#wm.get(k);
  }
  has(k) {
    return this.#wm.has(k);
  }
  set(k, v) {
    this.#wm.set(k, v);
    return this;
  }
}
```

### プライベートメンバーのエミュレーション

開発者は`WeakMap`を使用してオブジェクトにプライベートデータを関連付けることができ、これには次のような利点があります。

- {{jsxref("Map")}} と比べると、WeakMap はキーとして使用されるオブジェクトへの強い参照を保持しないため、メタデータの存続期間がオブジェクト自体と同じになり、メモリーリークを避けることができます。
- 列挙不可能プロパティや {{jsxref("Symbol")}} プロパティを使用する場合と比べ、WeakMap はオブジェクトの外部に存在するため、ユーザーコードが {{jsxref("Object.getOwnPropertySymbols")}} のような反射メソッドを通じてメタデータを取得する方法がありません。
- [クロージャ](/ja/docs/Web/JavaScript/Guide/Closures)と比べると、同じ WeakMap をコンストラクターから生成されたすべてのインスタンスで再利用できるため、メモリー効率が向上します。また、同じクラスの異なるインスタンスが互いのプライベートメンバーを読み取ることができます。

```js
let Thing;

{
  const privateScope = new WeakMap();
  let counter = 0;

  Thing = function () {
    this.someProperty = "foo";

    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function () {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function () {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope);
// "undefined"

const thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```

これは、[プライベートフィールド](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)を使用した次のコードとほぼ同等です。

```js
class Thing {
  static #counter = 0;
  #hidden;
  constructor() {
    this.someProperty = "foo";
    this.#hidden = ++Thing.#counter;
  }
  showPublic() {
    return this.someProperty;
  }
  showPrivate() {
    return this.#hidden;
  }
}

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1
```

### メタデータの関連付け

`WeakMap`は、オブジェクト自体の存続期間に影響を与えずに、オブジェクトにメタデータを関連付けるために使用できます。これはプライベートメンバーの例と非常に似ています。プライベートメンバーもまた、[プロトタイプ継承](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)に参加しない外部メタデータとしてモデル化されるためです。

この使い方は、既に生成されたオブジェクトにも拡張できます。例えば、ウェブ上では、DOM 要素に追加データを関連付け、後でその DOM 要素がアクセスできるようにしたい場合があります。一般的な手法は、データをプロパティとして添付することです。

```js
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.clicked = false;
  button.addEventListener("click", () => {
    button.clicked = true;
    const currentButtons = [...document.querySelectorAll(".button")];
    if (currentButtons.every((button) => button.clicked)) {
      console.log("すべてのボタンがクリックされました！");
    }
  });
});
```

このアプローチは有効ですが、いくつか落とし穴があります。

- `clicked` プロパティは列挙可能であるため、[`Object.keys(button)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)、[`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループなどで対象として扱われます。この問題は {{jsxref("Object.defineProperty()")}} を使用することで軽減できますが、コードが冗長になります。
- `clicked` プロパティは通常の文字列プロパティであるため、他のコードからアクセスおよび上書きが可能です。この問題は {{jsxref("Symbol")}} キーを使用することで軽減できますが、そのキーも {{jsxref("Object.getOwnPropertySymbols()")}} 経由でアクセス可能となります。

`WeakMap` を使用してこれらを修正してみます。

```js
const buttons = document.querySelectorAll(".button");
const clicked = new WeakMap();
buttons.forEach((button) => {
  clicked.set(button, false);
  button.addEventListener("click", () => {
    clicked.set(button, true);
    const currentButtons = [...document.querySelectorAll(".button")];
    if (currentButtons.every((button) => clicked.get(button))) {
      console.log("すべてのボタンがクリックされました！");
    }
  });
});
```

ここでは、`clicked` にアクセスできるコードのみがそれぞれのボタンのクリック状態を把握しており、外部コードは状態を変更できません。さらに、いずれかのボタンが DOM から除去されると、関連付けられたメタデータは自動的にガベージコレクションの対象となります。

### キャッシュ

関数に渡されたオブジェクトを関数の結果に関連付けることができます。これにより、同じオブジェクトが再度渡された場合、関数を再実行せずにキャッシュされた結果を返すことが可能です。この機能は、関数が純粋（つまり、外部オブジェクトを変更したり他の観測可能な副作用を引き起こしたりしない）である場合に有用です。

```js
const cache = new WeakMap();
function handleObjectValues(obj) {
  if (cache.has(obj)) {
    return cache.get(obj);
  }
  const result = Object.values(obj).map(heavyComputation);
  cache.set(obj, result);
  return result;
}
```

この方法は、関数の入力がオブジェクトである場合にのみ有効です。さらに、入力が二度と渡されなくても、キー（入力）が存続している限り、結果はキャッシュに永久に残ります。より効果的な方法は、{{jsxref("Map")}} と {{jsxref("WeakRef")}} オブジェクトを組み合わせて使用することです。これにより、あらゆる型の入力値を、それに対応する（潜在的に大規模な）計算結果に関連付けることができるようになります。詳細は [WeakRef と FinalizationRegistry](/ja/docs/Web/JavaScript/Guide/Memory_management#weakrefs_と_finalizationregistry) の例を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`WeakMap` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#weakmap)
- [JavaScript ガイド内の `WeakMap`](/ja/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
