---
title: ゲッター
slug: Web/JavaScript/Reference/Functions/get
tags:
  - ECMAScript 2015
  - ECMAScript 5
  - 関数
  - JavaScript
  - 言語機能
  - リファレンス
browser-compat: javascript.functions.get
translation_of: Web/JavaScript/Reference/Functions/get
---
{{jsSidebar("Functions")}}

**`get`** 構文は、オブジェクトのプロパティを関数に結びつけ、プロパティが参照された時に関数が呼び出されるようにします。

{{EmbedInteractiveExample("pages/js/functions-getter.html")}}

## 構文

```js
{get prop() { ... } }
{get [expression]() { ... } }
```

### 引数

- `prop`
  - : 与えられた関数に結び付けられるプロパティの名前
- `expression`
  - : ECMAScript 2015 より、算出されたプロパティ名 (computed property name) の式を使用して関数に結び付けることもできます。

## 解説

時として、動的に計算した値を返すプロパティにアクセスを許可したほうが望ましい場合や、明示的なメソッドを呼び出すことなく内部変数に状態を反映させたい場合があります。 JavaScript では、*ゲッター*を使ってこれを行うことが可能です。

プロパティに結び付けられたゲッターと、実際に値を持つプロパティを同時に持つことはできませんが、ゲッターとセッターを組み合わせて使用し、一種の擬似プロパティを作成することはできます。

`get` 構文を使用する場合は、以下のことに注意してください。

- 数値または文字列による識別子を持つことができます。
- 引数の数は 0 でなければなりません (詳しくは [Incompatible ES5
  change: literal getter and setter functions must now have exactly zero or one
  arguments](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) をご覧ください)。
- 1 つのオブジェクトリテラル中に、別の `get` が現れてはいけません。例えば次のようなことはできません。
  ```js example-bad
  { 
    get x() { }, get x() { } 
  }
  ```
- データ項目と同じ名前のプロパティが出現してはいけません。例えば次のようなことはできません。
  ```js example-bad
  { 
    x: ..., get x() { } 
  }
  ```

## 例

### オブジェクト初期化子における新しいオブジェクトのゲッターの定義

以下の例では `latest` 擬似プロパティをオブジェクト `obj` 作成し、 `log` 内の最後の配列アイテムを返します。

```js
const obj = {
  log: ['example','test'],
  get latest() {
    if (this.log.length === 0) return undefined;
    return this.log[this.log.length - 1];
  }
}
console.log(obj.latest); // "test"
```

`latest` に値を代入しようとしても、変更はされないことに注意して下さい。

### `delete` 演算子によるゲッターの削除

ゲッターを削除したい場合は、 {{jsxref("Operators/delete", "delete")}} を使用してください。

```js
delete obj.latest;
```

### 既存のオブジェクトへの `defineProperty` を使用したゲッターの定義

既存のオブジェクトに任意のタイミングでゲッターを追加するには、 {{jsxref("Object.defineProperty()")}} を使用します。

```js
const o = {a: 0};

Object.defineProperty(o, 'b', { get: function() { return this.a + 1; } });

console.log(o.b) // getter を実行。a + 1 を算出する (結果は 1)
```

### 算出されたプロパティ名の使用

```js
const expr = 'foo';

const obj = {
  get [expr]() { return 'bar'; }
};

console.log(obj.foo); // "bar"
```

### 静的ゲッターの定義

```js
class MyConstants {
  static get foo() {
    return 'foo';
  }
}

console.log(MyConstants.foo); // 'foo'
MyConstants.foo = 'bar';
console.log(MyConstants.foo); // 'foo' です。静的ゲッターの値は変更できません
```

### スマート / 自己書き換え / 遅延ゲッター

ゲッターはオブジェクトのプロパティを*定義*する手段を提供しますが、アクセスされるまでプロパティの値を*計算*しません。ゲッターは値を計算するコストを、値が必要になるまで先送りします。値が必要でなければ、そのコストを負担しません。

プロパティの値の計算を先送りしたり後のアクセスのためにキャッシュするための付加的な最適化技術が、**スマート (または「[メモ化](https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%A2%E5%8C%96)」)ゲッター**です。初めてゲッターにアクセスされたときに、値を計算してキャッシュします。以降のアクセスでは再計算せずに、キャッシュした値を返します。これは次のような状況で役に立ちます。

- プロパティの値の計算コストが高い場合 (大量の RAM や CPU 時間を使用する、ワーカースレッドを生成する、リモートのファイルを読み込むなど)。
- 値がすぐに必要ではない場合。値を後で使用する、あるいはまったく使用しない場合がある状況。
- 何度もアクセスされる値で、値が変更されないため再計算の必要がない、あるいは再計算すべきではない場合。

> **Note:** 値が変わると見込まれるプロパティで、遅延ゲッターを使用してはいけません。ゲッターが遅延である場合、値を再計算しないためです。
>
> なお、ゲッターの本質は「遅延」や「メモ化」ではありません。この動作を望む場合、この技術を実装する必要があります。

以下の例では、オブジェクトが自身のプロパティとしてゲッターを持っています。プロパティを取得すると、プロパティはオブジェクトから削除された後に再追加されますが、このとき暗黙的にデータプロパティとして追加されます。最終的に、値が返されます。

```js
get notifier() {
  delete this.notifier;
  return this.notifier = document.getElementById('bookmarked-notification-anchor');
},
```

### `get` と `defineProperty`

`get` キーワードと {{jsxref("Object.defineProperty()")}} の使用は似た結果になりますが、 {{jsxref("classes")}} 上で使用する場合は微妙な違いがあります。

`get` を使用した場合は、プロパティはインスタンスのプロトタイプに定義されるのに対し、 {{jsxref("Object.defineProperty()")}} を使用した場合は、プロパティは適用されたインスタンスに定義されます。

```js
class Example {
  get hello() {
    return 'world';
  }
}

const obj = new Example();
console.log(obj.hello);
// "world"

console.log(Object.getOwnPropertyDescriptor(obj, 'hello'));
// undefined

console.log(
  Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(obj), 'hello'
  )
);
// { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object/__defineGetter__", "__defineGetter__")}}
- {{jsxref("Object/__defineSetter__", "__defineSetter__")}}
- [ゲッターとセッターの定義](/ja/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters) (JavaScript ガイド)
