---
title: get
slug: Web/JavaScript/Reference/Functions/get
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`get`** 構文は、オブジェクトのプロパティを関数に結びつけ、プロパティが参照された時に関数が呼び出されるようにします。これは[クラス](/ja/docs/Web/JavaScript/Reference/Classes)でも使用できます。

{{InteractiveExample("JavaScript デモ: ゲッター宣言")}}

```js interactive-example
const obj = {
  log: ["a", "b", "c"],
  get latest() {
    return this.log[this.log.length - 1];
  },
};

console.log(obj.latest);
// 予想される結果: "c"
```

## 構文

```js-nolint
{ get prop() { /* … */ } }
{ get [expression]() { /* … */ } }
```

追加の構文上の制限がいくつかあります。

- ゲッターの引数は正確にゼロ個でなければなりません。

### 引数

- `prop`
  - : 与えられた関数に結び付けられるプロパティの名前です。他のプロパティの[オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)と同じ方法で、文字列リテラル、数値リテラル、識別子のいずれかにすることができます。
- `expression`
  - : 算出プロパティ名 (computed property name) の式を使用して関数に結び付けることもできます。

## 解説

時として、動的に計算した値を返すプロパティにアクセスを許可したほうが望ましい場合や、明示的なメソッドを呼び出すことなく内部変数に状態を反映させたい場合があります。 JavaScript では、「ゲッター」を使ってこれを行うことが可能です。

オブジェクトのプロパティは、データプロパティかアクセサープロパティのいずれかであり、両方を同時に持つことはできません。詳細は {{jsxref("Object.defineProperty()")}} を参照してください。ゲッター構文を使用すると、オブジェクト初期化子内でゲッター関数を指定することができます。

```js
const obj = {
  get prop() {
    // ゲッター、obj. prop を参照する際に実行されるコード
    return someValue;
  },
};
```

この構文を使用して定義されたプロパティは、作成されたオブジェクトの自身のプロパティであり、設定可能かつ列挙可能です。

## 例

### オブジェクト初期化子における新しいオブジェクトのゲッターの定義

以下の例では `latest` 擬似プロパティをオブジェクト `obj` 作成し、 `log` 内の最後の配列アイテムを返します。

```js
const obj = {
  log: ["example", "test"],
  get latest() {
    return this.log.at(-1);
  },
};
console.log(obj.latest); // "test"
```

`latest` に値を代入しようとしても、変更はされないことに注意してください。

### クラス内でのゲッターの使用

クラスインスタンスで利用できるパブリックインスタンスゲッターを定義する際にも、まったく同じ構文を使用することができます。クラス内では、メソッド間をカンマで区切る必要はありません。

```js
class ClassWithGetSet {
  #msg = "hello world";
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `hello ${x}`;
  }
}

const instance = new ClassWithGetSet();
console.log(instance.msg); // "hello world"

instance.msg = "cake";
console.log(instance.msg); // "hello cake"
```

ゲッタープロパティはクラスの `prototype` プロパティ上に定義されるため、そのクラスのすべてのインスタンスで共有されます。オブジェクトリテラル内のゲッタープロパティとは異なり、クラス内のゲッタープロパティは列挙可能ではありません。

静的ゲッターとプライベートゲッターはよく似た構文を使用することができます。これらは [`static`](/ja/docs/Web/JavaScript/Reference/Classes/static) および[プライベート要素](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)のページで説明しています。

### `delete` 演算子によるゲッターの削除

ゲッターを削除したい場合は、 {{jsxref("Operators/delete", "delete")}} を使用してください。

```js
delete obj.latest;
```

### 既存のオブジェクトへの `defineProperty` を使用したゲッターの定義

既存のオブジェクトに任意のタイミングでゲッターを追加するには、 {{jsxref("Object.defineProperty()")}} を使用してください。

```js
const o = { a: 0 };

Object.defineProperty(o, "b", {
  get() {
    return this.a + 1;
  },
});

console.log(o.b); // getter を実行。a + 1 を算出する (結果は 1)
```

### 算出プロパティ名の使用

```js
const expr = "foo";

const obj = {
  get [expr]() {
    return "bar";
  },
};

console.log(obj.foo); // "bar"
```

### 静的ゲッターの定義

```js
class MyConstants {
  static get foo() {
    return "foo";
  }
}

console.log(MyConstants.foo); // 'foo'
MyConstants.foo = "bar";
console.log(MyConstants.foo); // 'foo' です。静的ゲッターの値は変更できません
```

### スマート / 自己書き換え / 遅延ゲッター

ゲッターはオブジェクトのプロパティを定義する手段を提供しますが、アクセスされるまでプロパティの値を計算しません。ゲッターは値を計算するコストを、値が必要になるまで先送りします。値が必要でなければ、そのコストを負担しません。

プロパティの値の計算を先送りしたり後のアクセスのためにキャッシュするための付加的な最適化技術が、_スマート_（または _[メモ化](https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%A2%E5%8C%96)_）ゲッターです。初めてゲッターにアクセスされたときに、値を計算してキャッシュします。以降のアクセスでは再計算せずに、キャッシュした値を返します。これは次のような状況で役に立ちます。

- プロパティの値の計算コストが高い場合 (大量の RAM や CPU 時間を使用する、ワーカースレッドを生成する、リモートのファイルを読み込むなど)。
- 値がすぐに必要ではない場合。値を後で使用する、あるいはまったく使用しない場合がある状況。
- 何度もアクセスされる値で、値が変更されないため再計算の必要がない、あるいは再計算すべきではない場合。

> [!NOTE]
> 値が変わると見込まれるプロパティで、遅延ゲッターを使用してはいけません。ゲッターが遅延である場合、値を再計算しないためです。
>
> なお、ゲッターの本質は「遅延」や「メモ化」ではありません。この動作を望む場合、この技術を実装する必要があります。

以下の例では、オブジェクトが自身のプロパティとしてゲッターを持っています。プロパティを取得すると、プロパティはオブジェクトから削除された後に再追加されますが、このとき暗黙的にデータプロパティとして追加されます。最終的に、値が返されます。

```js
const obj = {
  get notifier() {
    delete this.notifier;
    this.notifier = document.getElementById("bookmarked-notification-anchor");
    return this.notifier;
  },
};
```

### get と defineProperty

`get` キーワードと {{jsxref("Object.defineProperty()")}} の使用は似た結果になりますが、 {{jsxref("classes")}} 上で使用する場合は微妙な違いがあります。

`get` を使用した場合は、プロパティはインスタンスのプロトタイプに定義されるのに対し、 {{jsxref("Object.defineProperty()")}} を使用した場合は、プロパティは適用されたインスタンスに定義されます。

```js
class Example {
  get hello() {
    return "world";
  }
}

const obj = new Example();
console.log(obj.hello);
// "world"

console.log(Object.getOwnPropertyDescriptor(obj, "hello"));
// undefined

console.log(
  Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), "hello"),
);
// { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ゲッターとセッターの定義](/ja/docs/Web/JavaScript/Guide/Working_with_objects#ゲッターとセッターの定義) (JavaScript ガイド)
- [オブジェクトでの作業](/ja/docs/Web/JavaScript/Guide/Working_with_objects)ガイド
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- [`set`](/ja/docs/Web/JavaScript/Reference/Functions/set)
- {{jsxref("Object.defineProperty()")}}
- [オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
- [プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) by Jeff Walden (2010)
- [More SpiderMonkey changes: ancient, esoteric, very rarely used syntax for creating getters and setters is being removed](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) by Jeff Walden (2010)
