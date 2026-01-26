---
title: set
slug: Web/JavaScript/Reference/Functions/set
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`set`** 構文は、あるオブジェクトプロパティを、プロパティに設定しようとしたときに呼び出される関数に結びつけます。これは[クラス](/ja/docs/Web/JavaScript/Reference/Classes)でも使用できます。

{{InteractiveExample("JavaScript デモ: セッター宣言")}}

```js interactive-example
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: [],
};

language.current = "EN";
language.current = "FA";

console.log(language.log);
// 予想される結果: Array ["EN", "FA"]
```

## 構文

```js-nolint
{ set prop(val) { /* … */ } }
{ set [expression](val) { /* … */ } }
```

追加の構文上の制限がいくつかあります。

- セッターの引数は正確に 1 個でなければなりません。

### 引数

- `prop`
  - : 与えられた関数に結び付けられるプロパティの名前です。他のプロパティの[オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)と同じ方法で、文字列リテラル、数値リテラル、識別子のいずれかにすることができます。
- `val`
  - : `prop` に設定しようとする値を保持する変数のエイリアスです。
- `expression`
  - : 算出プロパティ名の式を使用して関数に結び付けることもできます。

## 解説

JavaScript では、セッターは指定されたプロパティを変更しようとするたびに関数を実行するために使用されます。セッターは、多くの場合、ゲッターと組み合わせて使用されます。

オブジェクトのプロパティは、データプロパティかアクセサープロパティのいずれかであり、両方を同時に持つことはできません。詳細は {{jsxref("Object.defineProperty()")}} を参照してください。セッター構文を使用すると、オブジェクト初期化子内でセッター関数を指定することができます。

```js
const obj = {
  set prop() {
    // セッター、obj.prop を設定する際に実行される
  },
}
```

この構文を使用して定義されるプロパティは、作成されたオブジェクトの自身のプロパティであり、構成可能かつ列挙可能です。

## 例

### 新しいオブジェクトにオブジェクト初期化子でセッターを定義

以下の例では、擬似プロパティ `current` を `language` オブジェクトに定義します。 `current` に値が代入されると、 `log` をその値で更新します。

```js
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: [],
};

language.current = "EN";
console.log(language.log); // ['EN']

language.current = "FA";
console.log(language.log); // ['EN', 'FA']
```

`current` は定義されておらず、あらゆるアクセスを試みてもその結果は `undefined` になることに注意してください。

### クラス内でのセッターの使用

クラスインスタンスで利用できるパブリックインスタンスセッターを定義する際にも、まったく同じ構文を使用することができます。クラス内では、メソッド間をカンマで区切る必要はありません。

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

セッタープロパティはクラスの `prototype` プロパティ上に定義されるため、そのクラスのすべてのインスタンスで共有されます。オブジェクトリテラル内のセッタープロパティとは異なり、クラス内のセッタープロパティは列挙可能ではありません。

静的セッターとプライベートセッターはよく似た構文を使用することができます。これらは [`static`](/ja/docs/Web/JavaScript/Reference/Classes/static) および[プライベート要素](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)のページで説明しています。

### `delete` 演算子によるセッターの削除

セッターを削除したい場合は、 {{jsxref("Operators/delete", "delete")}} で削除するだけです。

```js
delete language.current;
```

### `defineProperty` を使用して既存のオブジェクトにセッターを定義

既存のオブジェクトにセッターを追加するには、 {{jsxref("Object.defineProperty()")}} を使用してください。

```js
const o = { a: 0 };

Object.defineProperty(o, "b", {
  set(x) {
    this.a = x / 2;
  },
});

o.b = 10;
// セッターを実行し、 10 / 2 (5) を 'a' プロパティに代入

console.log(o.a); // 5
```

### 算出プロパティ名の使用

```js
const expr = "foo";

const obj = {
  baz: "bar",
  set [expr](v) {
    this.baz = v;
  },
};

console.log(obj.baz); // "bar"

obj.foo = "baz";
// セッターを実行

console.log(obj.baz); // "baz"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [オブジェクトでの作業](/ja/docs/Web/JavaScript/Guide/Working_with_objects)ガイド
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- [`get`](/ja/docs/Web/JavaScript/Reference/Functions/get)
- {{jsxref("Object.defineProperty()")}}
- [オブジェクト初期化子](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- {{jsxref("Statements/class", "class")}}
- [プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)
- [Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) by Jeff Walden (2010)
- [More SpiderMonkey changes: ancient, esoteric, very rarely used syntax for creating getters and setters is being removed](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/) by Jeff Walden (2010)
