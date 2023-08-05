---
title: Object.assign()
slug: Web/JavaScript/Reference/Global_Objects/Object/assign
---

{{JSRef}}

**`Object.assign()`** メソッドは、すべての{{jsxref("Object/propertyIsEnumerable", "列挙可能", "", 1)}}な{{jsxref("Object/hasOwnProperty", "自身のプロパティ", "", 1)}}の値を、 1 つ以上の*コピー元オブジェクト*から*コピー先オブジェクト*にコピーするために使用されます。変更されたコピー先オブジェクトを返します。

{{EmbedInteractiveExample("pages/js/object-assign.html")}}

## 構文

```js
Object.assign(target, ...sources);
```

### 引数

- `target`
  - : コピー先オブジェクト — コピー元のプロパティを適用するもので、変更後に返されます。
- `sources`
  - : コピー元オブジェクト (単数または複数) — 適用したいプロパティを含むオブジェクトです。

### 返値

コピー先オブジェクトです。

## 解説

コピー先オブジェクトのプロパティは、コピー元に同じ{{jsxref("Object/keys", "キー", "", 1)}}のプロパティがあると上書きされます。より後のコピー元のプロパティが、より前のものを同様に上書きします。

`Object.assign()` メソッドは、コピー元オブジェクトから*列挙可能 (enumerable)* かつ*直接所有 (own)* のプロパティだけをコピー先オブジェクトにコピーします。この際、コピー元オブジェクトには `{[[Get]]`、コピー先オブジェクトには `[[Set]]` を使いますので、[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)と[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)を呼び出すことになります。これはプロパティの*代入 (assign)* であり、プロパティをコピーしたり新しく定義したりするのとは異なります。そのため、コピー元にゲッターが存在する場合、新しいプロパティをプロトタイプにマージする用途には不適切でしょう。

プロパティ定義を (列挙可能属性も含めて) プロトタイプの中にコピーするには、このメソッドではなく {{jsxref("Object.getOwnPropertyDescriptor()")}} と {{jsxref("Object.defineProperty()")}} を使用してください。

{{jsxref("String")}} と {{jsxref("Symbol")}} の両方のプロパティがコピーされます。

エラーが発生した場合、例えばプロパティが書き込み不可の場合は、 {{jsxref("TypeError")}} が発生しますが、エラーが発生する前にプロパティが追加される場合、 `target` オブジェクトが変更されることがあります。

> **メモ:** `Object.assign()` はコピー元の値が {{jsxref("null")}} や {{jsxref("undefined")}} でも例外を発生させません。

## ポリフィル

この[ポリフィル](/ja/docs/Glossary/Polyfill)は、 ES5 にシンボルがないため、シンボルのプロパティに対応していません。

```js
if (typeof Object.assign !== "function") {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) {
      // .length of function is 2
      "use strict";
      if (target === null || target === undefined) {
        throw new TypeError("Cannot convert undefined or null to object");
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true,
  });
}
```

## 例

### オブジェクトの複製

```js
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

### 深い複製についての注意

`Object.assign()` はプロパティの値をコピーするため、深い複製を行うには別な方法を使用する必要があります。

元の値がオブジェクトへの参照である場合、参照の値のみをコピーするからです。

```js
function test() {
  "use strict";

  let obj1 = { a: 0, b: { c: 0 } };
  let obj2 = Object.assign({}, obj1);
  console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}

  obj1.a = 1;
  console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
  console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}

  obj2.a = 2;
  console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
  console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 0}}

  obj2.b.c = 3;
  console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 3}}
  console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 3}}

  // Deep Clone
  obj1 = { a: 0, b: { c: 0 } };
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj3)); // { "a": 0, "b": { "c": 0}}
}

test();
```

### オブジェクトのマージ

```js
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, コピー先オブジェクト自体が変化する。
```

### 同じプロパティを持つオブジェクトのマージ

```js
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```

プロパティは、引数の順でより後にあるオブジェクトが同じプロパティを持っていると上書きされます。

### シンボル型のプロパティのコピー

```js
const o1 = { a: 1 };
const o2 = { [Symbol("foo")]: 2 };

const obj = Object.assign({}, o1, o2);
console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
```

### プロトタイプチェーン上のプロパティと列挙可能ではないプロパティはコピー不可

```js
const obj = Object.create(
  { foo: 1 },
  {
    // foo is on obj's prototype chain.
    bar: {
      value: 2, // bar は列挙可能なプロパティではない。
    },
    baz: {
      value: 3,
      enumerable: true, // baz は直接所有で列挙可能なプロパティ。
    },
  },
);

const copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```

### プリミティブはオブジェクトでラップされる

```js
const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// プリミティブ値はラップされ、 null と undefined は無視される
// なお、文字列をラップした時だけ、直接所有で列挙可能なプロパティが存在する
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

### 例外が発生すると実行中のコピー作業が中断される

```js
const target = Object.defineProperty({}, "foo", {
  value: 1,
  writable: false,
}); // target.foo is a read-only property

Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
// TypeError: "foo" is read-only
// target.foo に代入しようとすると、この例外が発生する

console.log(target.bar); // 2, 一番目のコピー元オブジェクトはコピーされている
console.log(target.foo2); // 3, 二番目のコピー元の最初のプロパティもコピーされている
console.log(target.foo); // 1, ここで例外が発生
console.log(target.foo3); // undefined, assign メソッドが終了したので foo3 はコピーされない
console.log(target.baz); // undefined, 三番目のコピー元もコピーされない
```

### アクセサーのコピー

```js
const obj = {
  foo: 1,
  get bar() {
    return 2;
  },
};

let copy = Object.assign({}, obj);
console.log(copy);
// { foo: 1, bar: 2 }
// copy.bar の値は obj.bar のゲッターの返値。

// 記述子を完全にコピーする代入関数
function completeAssign(target, ...sources) {
  sources.forEach((source) => {
    let descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});

    // 既定では、 Object.assign は列挙可能なシンボルもコピーする
    Object.getOwnPropertySymbols(source).forEach((sym) => {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

copy = completeAssign({}, obj);
console.log(copy);
// { foo:1, get bar() { return 2 } }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Object.assign` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-object) で利用できます
- {{jsxref("Object.defineProperties()")}}
- [プロパティの列挙可能性と所有権](/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- [オブジェクトリテラルでのスプレッド構文の使用](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals)
