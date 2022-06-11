---
title: セッター
slug: Web/JavaScript/Reference/Functions/set
tags:
  - ECMAScript 5
  - 関数
  - JavaScript
  - 言語機能
  - リファレンス
browser-compat: javascript.functions.set
translation_of: Web/JavaScript/Reference/Functions/set
---
{{jsSidebar("Functions")}}

**`set`** 構文は、あるオブジェクトプロパティを、プロパティに設定しようとしたときに呼び出される関数に結びつけます。

{{EmbedInteractiveExample("pages/js/functions-setter.html")}}

## 構文

```js
{set prop(val) { . . . }}
{set [expression](val) { . . . }}
```

### 引数

- `prop`
  - : 与えられた関数を割り当てるプロパティの名称です。
- `val`
  - : `prop` に設定しようとする値を保持する変数のエイリアスです。
- `expression`
  - : ECMAScript 2015 より、算出されたプロパティ名 (computed property name) の式を使用して関数に結び付けることもできます。

## 解説

JavaScript では、セッターは指定されたプロパティを変更しようとするたびに関数を実行するために使用されます。セッターはゲッターと組み合わせて、一種の擬似的なプロパティを作成するために、とてもよく使われます。実際の値を保持するプロパティに、同時にセッターを設定することはできません。

なお、 `set` 構文を使用する際の注意事項は次の通りです。

- 識別子は数値でも文字列でも持つことができます。
- 厳密に 1 つの引数を持たなければなりません（詳しくは [Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) をご覧ください）。
- あるオブジェクトリテラルが、同じプロパティのための別の `set` を持ったり、データ項目を持ったりしてはいけません。
  （ `{ set x(v) { }, set x(v) { } }` や `{ x: ..., set x(v) { } }` は不可）

## 例

### 新しいオブジェクトでオブジェクトの初期化時にセッターを定義

以下の例では、擬似プロパティ `current` を `language` オブジェクトに定義します。 `current` に値が代入されると、 `log` をその値で更新します。

```js
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
}

language.current = 'EN';
console.log(language.log); // ['EN']

language.current = 'FA';
console.log(language.log); // ['EN', 'FA']
```

`current` は定義されておらず、あらゆるアクセスを試みてもその結果は `undefined` になることに注意してください。

### `delete` 演算子によるセッターの削除

セッターを削除したい場合は、 {{jsxref("Operators/delete", "delete")}} だけで削除できます。

```js
delete language.current;
```

### `defineProperty` を使用して既存のオブジェクトにセッターを定義

*既存の*オブジェクトにセッターを追加するには、 {{jsxref("Object.defineProperty()")}} を使用します。

```js
const o = {a: 0};

Object.defineProperty(o, 'b', {
  set: function(x) { this.a = x / 2; }
});

o.b = 10;
// セッターを実行し、 10 / 2 (5) を 'a' プロパティに代入

console.log(o.a)
//  5
```

### 算出されたプロパティ名の使用

```js
const expr = 'foo';

const obj = {
  baz: 'bar',
  set [expr](v) { this.baz = v; }
};

console.log(obj.baz);
//  "bar"

obj.foo = 'baz';
// セッターを実行

console.log(obj.baz);
//  "baz"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineGetter", "__defineGetter__")}}
- {{jsxref("Object.defineSetter", "__defineSetter__")}}
- [ゲッターとセッターの定義](/ja/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters) (JavaScript ガイド)
