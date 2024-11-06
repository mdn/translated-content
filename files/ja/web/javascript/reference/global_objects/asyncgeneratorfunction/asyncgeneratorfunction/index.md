---
title: AsyncGeneratorFunction() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction
l10n:
  sourceCommit: 542ef6cfd82288925e0a9238b47933f03e2dddca
---

{{JSRef}}

**`AsyncGeneratorFunction()`** コンストラクターは {{jsxref("AsyncGeneratorFunction")}} オブジェクトを生成します。

なお、 `AsyncGeneratorFunction` はグローバルオブジェクトではありません。 以下のコードを評価することで得られます。

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
```

`AsyncGeneratorFunction()` コンストラクターは直接使用することを意図しておらず、{{jsxref("Function/Function", "Function()")}} の説明で述べた注意事項はすべて `AsyncGeneratorFunction()` にも当てはまります。

## 構文

```js-nolint
new AsyncGeneratorFunction(functionBody)
new AsyncGeneratorFunction(arg0, functionBody)
new AsyncGeneratorFunction(arg0, arg1, functionBody)
new AsyncGeneratorFunction(arg0, arg1, /* …, */ argN, functionBody)

AsyncGeneratorFunction(functionBody)
AsyncGeneratorFunction(arg0, functionBody)
AsyncGeneratorFunction(arg0, arg1, functionBody)
AsyncGeneratorFunction(arg0, arg1, /* …, */ argN, functionBody)
```

> **メモ:** `AsyncGeneratorFunction()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) があってもなくても呼び出すことができます。どちらも新しい `AsyncGeneratorFunction` インスタンスを生成します。

### 引数

{{jsxref("Function/Function", "Function()")}} を参照してください。

## 例

### コンストラクターの使用

次の例では、`AsyncGeneratorFunction` コンストラクターを使用して非同期ジェネレータ関数を作成します。

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
const createAsyncGenerator = new AsyncGeneratorFunction("a", "yield a * 2");
const asyncGen = createAsyncGenerator(10);
asyncGen.next().then((res) => console.log(res.value)); // 20
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`async function*` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/async_function*)
- [`async function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/async_function*)
- [`Function()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
- [イテレーターとジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)
- {{jsxref("Functions", "関数", "", 1)}}
