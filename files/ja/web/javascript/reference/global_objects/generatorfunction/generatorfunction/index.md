---
title: GeneratorFunction() コンストラクター
short-title: GeneratorFunction()
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`GeneratorFunction()`** コンストラクターは、 {{jsxref("GeneratorFunction")}} オブジェクトを生成します。

`GeneratorFunction` はグローバルオブジェクトではないことに注意してください。次のコードを評価することによって得られます。

```js
const GeneratorFunction = function* () {}.constructor;
```

`GeneratorFunction()` コンストラクター関数は直接使用されることを意図しておらず、{{jsxref("Function/Function", "Function()")}} の説明に記載されているすべての注意事項が `GeneratorFunction()` にも適用されます。

## 構文

```js-nolint
new GeneratorFunction(functionBody)
new GeneratorFunction(arg1, functionBody)
new GeneratorFunction(arg1, arg2, functionBody)
new GeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)

GeneratorFunction(functionBody)
GeneratorFunction(arg1, functionBody)
GeneratorFunction(arg1, arg2, functionBody)
GeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)
```

> [!NOTE]
> `GeneratorFunction()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を使っても使わなくても呼び出せます。どちらの場合も新しい `GeneratorFunction` インスタンスが生成されます。

### 引数

{{jsxref("Function/Function", "Function()")}} を参照してください。

## 例

### GeneratorFunction() コンストラクターを用いて生成

```js
const GeneratorFunction = function* () {}.constructor;
const g = new GeneratorFunction("a", "yield a * 2");
const iterator = g(10);
console.log(iterator.next().value); // 20
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`function*`](/ja/docs/Web/JavaScript/Reference/Statements/function*)
- [`function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/function*)
- [`Function()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
- [イテレーターとジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)ガイド
- {{jsxref("Functions", "関数", "", 1)}}
