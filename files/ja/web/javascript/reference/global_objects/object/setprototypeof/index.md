---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

**`Object.setPrototypeOf()`** 静的メソッドは、指定されたオブジェクトのプロトタイプ（つまり、内部の `[[Prototype]]` プロパティ）を、別のオブジェクトまたは [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) に設定します。

> [!WARNING]
> オブジェクトの `[[Prototype]]` を変更すると、 [最近の JavaScript エンジンがプロパティへのアクセスを最適化する方法](https://mathiasbynens.be/notes/prototypes)の特質上、すべてのブラウザーや JavaScript エンジンで、操作がとても低速になります。さらに、プロトタイプを変更することの性能への影響は細かく広範囲にわたり、 `Object.setPrototypeOf(...)` 文に費やされる時間だけではなく、 `[[Prototype]]` が変更されたすべてのオブジェクトへのアクセスを持つ**_すべて_**のコードに影響する可能性があります。詳しくは [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes) をお読みください。
>
> この機能は言語の一部であるため、その機能の実装による負荷は (理念上は) エンジンの開発者によります。エンジンの開発者がこの問題に対処するまでの間、性能が気になる場合は、オブジェクトの `[[Prototype]]` を変更することは避けるべきです。代わりに、 {{jsxref("Object.create()")}} を使用して必要な `[[Prototype]]` をもつオブジェクトを生成してください。

{{EmbedInteractiveExample("pages/js/object-setprototypeof.html")}}

## 構文

```js-nolint
Object.setPrototypeOf(obj, prototype)
```

### 引数

- `obj`
  - : プロトタイプを設定するオブジェクト。
- `prototype`
  - : オブジェクトの新しいプロトタイプ（オブジェクトまたは [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null)）。

### 返値

指定されたオブジェクト。

### 例外

- {{jsxref("TypeError")}}
  - : 以下のいずれかの場合に発生します。
    - 引数 `obj` が `undefined` または `null` である場合。
    - 引数 `obj` が[拡張不可能](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)であるか、または[プロトタイプが不変のエキゾチックオブジェクト](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects)、例えば `Object.prototype` や `window` 等の場合。ただし、新しいプロトタイプが `obj` の元のプロトタイプと同じ値である場合は、エラーは発生しません。
    - 引数 `prototype` がオブジェクトまたは [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) ではない場合。

## 解説

`Object.setPrototypeOf()` は、一般的にオブジェクトのプロトタイプを設定するための適切な方法と考えられています。非推奨の [`Object.prototype.__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) アクセサーの代わりに、常にこれを使用するべきでしょう。

もし引数 `obj` がオブジェクト（例えば、数値、文字列など）でない場合、このメソッドは何もせず、オブジェクトに変換したり、プロトタイプを設定することなく、直接 `obj` をプリミティブ値として返します。もし `prototype` が `obj` のプロトタイプと同じ値であれば、 `obj` のプロトタイプが不変であっても `TypeError` は発生せずに `obj` が直接返されます。

セキュリティの観点から、プロトタイプが不変であるように設計された組み込みオブジェクトがあります。これにより、プロトタイプ汚染攻撃、特に[ブロキシー関連の攻撃](https://github.com/tc39/ecma262/issues/272)を防ぐことができます。コア言語では、不変のプロトタイプを持つエキゾチックオブジェクトとして `Object.prototype` のみを指定しており、そのプロトタイプは常に `null` です。ブラウザーでは、 [`window`](/ja/docs/Web/API/Window) や [`location`](/ja/docs/Web/API/Window/location) の 2 つがとても一般的な例です。

```js
Object.isExtensible(Object.prototype); // true。プロパティを追加できる
Object.setPrototypeOf(Object.prototype, {}); // TypeError: 不変のプロトタイプオブジェクト '#<Object>' にプロトタイプを設定することはできない
Object.setPrototypeOf(Object.prototype, null); // エラーなし。 `Object.prototype` のプロパティがすでに `null` であるため
```

## 例

### Object.setPrototypeOf() を使った擬似クラス継承

クラスを使用した JS の継承です。

```js
class Human {}
class SuperHero extends Human {}

const superMan = new SuperHero();
```

しかし、 `class` を使わずにサブクラスを実装したい場合は、次のようにします。

```js
function Human(name, level) {
  this.name = name;
  this.level = level;
}

function SuperHero(name, level) {
  Human.call(this, name, level);
}

Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// `SuperHero.prototype` の `[[Prototype]]` を `Human.prototype` に設定
// プロトタイプのインスタンスチェーンを設定するため

Human.prototype.speak = function () {
  return `${this.name} says hello.`;
};

SuperHero.prototype.fly = function () {
  return `${this.name} is flying.`;
};

const superMan = new SuperHero("Clark Kent", 1);

console.log(superMan.fly());
console.log(superMan.speak());
```

上記のような古典的継承（クラスによる継承）と擬似古典的継承（コンストラクターの `prototype` プロパティによる継承）の類似性については、[継承チェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#より長い継承のチェーンの構築)で述べられています。

関数コンストラクターの [`prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function) プロパティは書き込み可能なので、 [`Object.create()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/create#classical_inheritance_with_object.create) で作成した新しいオブジェクトに再割り当てすることで、同じ継承連鎖を実現できます。 `create()` を使用する際には、 [`constructor`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) プロパティを再度追加することを忘れないようにするなどの注意点があります。

以下の例でもクラスを使用していますが、 `SuperHero` は `extends` を使用せずに、代わりに `setPrototypeOf()` を使用して `Human` を継承しています。

> **警告:** `extends` の代わりに `setPrototypeOf()` を使うことは、パフォーマンスや可読性の点からお勧めできません。

```js
class Human {}
class SuperHero {}

// 継承プロパティを設定
Object.setPrototypeOf(SuperHero.prototype, Human.prototype);

// 静的プロパティをフック
Object.setPrototypeOf(SuperHero, Human);

const superMan = new SuperHero();
```

`extends` を使わないサブクラス化は、 [ES-6 subclassing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) で触れられています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Object.setPrototypeOf` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Reflect.setPrototypeOf()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- [`Object.prototype.__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- [継承チェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains)
- [ES6 In Depth: Subclassing](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) on hacks.mozilla.org (2015)
