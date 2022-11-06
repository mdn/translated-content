---
title: TypedArray.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/some
---

{{JSRef}}

**`some()`** メソッドは、与えられた関数によって実行されるテストに合格する要素が型付き配列の中にあるかどうかをテストします。このメソッドは、{{jsxref("Array.prototype.some()")}}と同じアルゴリズムを持ちます。ここで _TypedArray_ は[型付き配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)のうちの一つです。

{{EmbedInteractiveExample("pages/js/typedarray-some.html")}}

## 構文

```
typedarray.some(callback[, thisArg])
```

### 引数

- `callback`

  - : 各要素に対してテストを実行する関数。三つの引数を取ります。

    - `currentValue`
      - : 型付き配列内で処理されている現在の要素。
    - `index`
      - : 型付き配列内で処理されている現在の要素のインデックス。
    - `array`
      - : `some` が呼び出されている型付き配列。

- `thisArg`
  - : オプション。 `callback` を実行するときに `this` として使用する値。

### 返値

配列内のいずれかの要素でコールバック関数が{{Glossary("truthy", "真と解釈される")}}値を返した場合は <`true` です。それ以外は `false` です。

## 解説

`some()`メソッドは、 `callback` 関数を、型付き配列に含まれる各要素に対して一度ずつ、 `callback` が真の値を返す要素が見つかるまで呼び出します。真の値を返す要素が見つかると、 `some()` メソッドはただちに `true` を返します。見つからなかった場合、 `false` を返します。

`callback` は、要素の値、要素の添字、走査中の配列オブジェクトの 3 つの引数で呼び出されます。

`thisArg` 引数が `some()` に与えられると、 `callback` が呼び出される際に `this` として使用されます。さもなければ、 `undefined` 値が `this` として使用されるために渡されます。最終的に `callback` によって観測される `this` の値は、[関数から見える `this` を特定するための通常のルール](/ja/docs/Web/JavaScript/Reference/Operators/this)に応じて決定されます。

`some` は呼び出された型付き配列を変更しません。

## 例

### 型付き配列のすべての要素の大きさをテストする

次の例では、型付き配列の中に 10 よりも大きい要素があるかどうかをテストします。

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

new Uint8Array([2, 5, 8, 1, 4]).some(isBiggerThan10); // false
new Uint8Array([12, 5, 8, 1, 4]).some(isBiggerThan10); // true
```

### アロー関数を使用して型付き配列をテストする

[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)は同じテストを短い構文で行うことができます。

```js
new Uint8Array([2, 5, 8, 1, 4]).some(elem => elem > 10); // false
new Uint8Array([12, 5, 8, 1, 4]).some(elem => elem > 10); // true
```

## ポリフィル

_TypedArray_ と言う名前のグローバルオブジェクトは存在しないため、ポリフィルは「必要に応じて」の原則で行う必要があります。

```js
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.some
if (!Uint8Array.prototype.some) {
  Object.defineProperty(Uint8Array.prototype, 'some', {
    value: Array.prototype.some
  });
}
```

もし {{jsxref("Object.defineProperty")}} にも対応していないような本当に古い JavaScript エンジンに対応する必要がある場合は、 `Array.prototype` メソッドは列挙可能にすることができないので、ポリフィルを行わないのが最良です。

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.some', 'TypedArray.prototype.some')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.some")}}

## 関連情報

- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
