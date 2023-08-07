---
title: Object.getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
---

{{JSRef}}

**`Object.getOwnPropertyNames()`** メソッドは、与えられたオブジェクトで発見されたすべての直接のプロパティを含む配列を (シンボルを使用したものを除き、列挙不可能なプロパティを含んで) 返します。

{{EmbedInteractiveExample("pages/js/object-getownpropertynames.html")}}

## 構文

```
Object.getOwnPropertyNames(obj)
```

### 引数

- `obj`
  - : オブジェクトで、これ自身の列挙可能および列挙不可能なプロパティが返されます。

### 返値

指定されたオブジェクトで発見された、列挙可能および列挙不可能なプロパティに対応する文字列を要素とする配列。

## 解説

`Object.getOwnPropertyNames()` は、 `obj` で発見された列挙可能および列挙不可能なプロパティに対応する文字列を要素とする配列を返します。配列内における列挙可能なプロパティの順序は、オブジェクトで {{jsxref("Statements/for...in", "for...in")}} (または {{jsxref("Object.keys()")}}) を実行して見つかるものの順序と同じです。 ES6 によれば、オブジェクトの整数のキーは (列挙可能であっても列挙不可能であっても) 最初の配列に昇順で追加され、その後に挿入順を表す文字列キーが続きます。

ES5 では、このメソッドの引数がオブジェクトではない (プリミティブである) 場合、 {{jsxref("TypeError")}} が発生します。 ES2015 では、引数がオブジェクトではない場合はオブジェクトに型変換されます。

```js
Object.getOwnPropertyNames("foo");
// TypeError: "foo" is not an object (ES5 code)

Object.getOwnPropertyNames("foo");
// ["0", "1", "2", "length"]  (ES2015 code)
```

## 例

### Object.getOwnPropertyNames() の使用

```js
var arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort()); // .sort() は配列のメソッド
// ["0", "1", "2", "length"] と出力される

// 配列風オブジェクト
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.getOwnPropertyNames(obj).sort()); // .sort() は配列のメソッド
// ["0", "1", "2"] と出力される

// Array.forEach を使ったプロパティと値の出力
Object.getOwnPropertyNames(obj).forEach(function (val, idx, array) {
  console.log(val + " -> " + obj[val]);
});
// 出力結果
// 0 -> a
// 1 -> b
// 2 -> c

// 列挙不可能なプロパティ
var my_obj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
      enumerable: false,
    },
  },
);
my_obj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj).sort());
// ["foo", "getFoo"] と出力されます
```

列挙可能なプロパティのみ取得したい場合は {{jsxref("Object.keys()")}} を参照するか、 {{jsxref("Statements/for...in", "for...in")}} ループを用いるかしてください。 (なお、 for...in ループでは {{jsxref("Object.prototype.hasOwnProperty()", "hasOwnProperty()")}} でフィルタリングされない限りは、そのオブジェクト上で直接見つかるプロパティだけでなく、プロトタイプチェーン上の列挙可能なプロパティも返されることに注意してください。)

プロトタイプチェーン上のプロパティは配列に含まれません。

```js
function ParentClass() {}
ParentClass.prototype.inheritedMethod = function () {};

function ChildClass() {
  this.prop = 5;
  this.method = function () {};
}
ChildClass.prototype = new ParentClass();
ChildClass.prototype.prototypeMethod = function () {};

console.log(
  Object.getOwnPropertyNames(
    new ChildClass(), // ["prop", "method"]
  ),
);
```

### 列挙不可能なプロパティのみを取得する

ここでは {{jsxref("Array.prototype.filter()")}} 関数を使用して、 ({{jsxref("Object.keys()")}} で取得した) 列挙可能なキーを (`Object.getOwnPropertyNames()` で取得した) すべてのキーからフィルタリングし、出力として列挙不可能なキーのみを取得します。

```js
var target = myObject;
var enum_and_nonenum = Object.getOwnPropertyNames(target);
var enum_only = Object.keys(target);
var nonenum_only = enum_and_nonenum.filter(function (key) {
  var indexInEnum = enum_only.indexOf(key);
  if (indexInEnum == -1) {
    // このキーが enum_only の中になければ、
    // そのキーは列挙不可能であることを意味するので、
    // true を返してフィルターの中に残します。
    return true;
  } else {
    return false;
  }
});

console.log(nonenum_only);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Object.getOwnPropertyNames")}}

## 関連情報

- [プロパティの列挙可能性と所有権](/ja/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Array.forEach()")}}
