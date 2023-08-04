---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
---

{{JSRef}}

**`Object.entries()`** メソッドは、引数に与えたオブジェクトが所有する、文字列をキーとした列挙可能なプロパティの組 `[key, value]` からなる配列を返します。これは {{jsxref("Statements/for...in", "for...in")}} ループでの反復処理と同様ですが、違いは `for...in` ループではプロトタイプチェーン内のプロパティも列挙されることです。

**`Object.entries()`** で返される配列の順序は、{{jsxref("Statements/for...in", "for...in")}} ループによる順序と同じです。異なる順序にする必要があるのであれば、`Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));` のようにして、まず配列を整列する必要があります。

{{EmbedInteractiveExample("pages/js/object-entries.html")}}

## 構文

```js
Object.entries(obj);
```

### 引数

- `obj`
  - : 返されることになる文字列をキーとした列挙可能な所有プロパティの組 `[key, value]` を持つオブジェクト。

### 返値

引数に与えたオブジェクトが所有する、文字列をキーとした列挙可能なプロパティの組 `[key, value]` の配列。

## 解説

`Object.entries()` は、`object` に直接存在する文字列をキーとした列挙可能プロパティの組 `[key, value]` が配列要素に対応した配列を返します。プロパティの順序はオブジェクト内のプロパティに対してループさせた時の順序と同じになります。

## ポリフィル

ネイティブで `Object.entries` に対応していない古い環境に互換性を持たせる場合は、以下のいずれかを使用することができます。

- `Object.entries` の試験的実装である [tc39/proposal-object-values-entries](https://github.com/tc39/proposal-object-values-entries) (IE に対応する必要がない場合)
- [es-shims/Object.entries](https://github.com/es-shims/Object.entries) リポジトリーにあるポリフィル
- または、単純に、下記の配布可能なポリフィルを使うこともできます。

```js
if (!Object.entries) {
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array
    while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}
```

上記のポリフィルのコードスニペットで、IE 9 以前の対応が必要な場合、`Object.keys()` のポリフィル ({{jsxref("Object.keys")}} ページにあるようなもの) も必要となります。

## 例

```js
const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// 配列風オブジェクト
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// ランダムなキー順序を持つ配列風オブジェクト
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// 列挙可能でないプロパティ getFoo がある
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = "bar";
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// オブジェクトでない引数はオブジェクトへと型強制されます
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// プリミティブにはプロパティがないため、文字列を除くすべてのプリミティブ型に対して空の配列を返します (上記の例を参照)
console.log(Object.entries(100)); // [ ]

// 行儀のよいキーと値の反復処理
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// または配列の展開の使用
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```

### `Object` から `Map` への変換

{{jsxref("Map", "new Map()")}} コンストラクターは `entries` による反復処理に対応しています。`Object.entries` を使うと、{{jsxref("Object")}} から {{jsxref("Map")}} へと簡単に変換できます。

```js
const obj = { foo: "bar", baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}
```

### `Object` の反復処理

[配列の分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#配列の分割代入)を使って、オブジェクトを簡単に反復処理することができます。

```js
const obj = { foo: "bar", baz: 42 };
Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Object.entries` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-object) で利用できます
- [プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
