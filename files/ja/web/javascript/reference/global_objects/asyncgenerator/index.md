---
title: AsyncGenerator
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

**`AsyncGenerator`** オブジェクトは{{jsxref("Statements/async_function*", "非同期ジェネレーター関数", "", 1)}}から返されるもので、[非同期反復可能プロトコルと非同期イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#非同期イテレーターと非同期反復可能プロトコル)の両方を満たすものです。

非同期ジェネレーターメソッドは、常に {{jsxref("Promise")}} オブジェクトを生成します。

`AsyncGenerator` は隠しクラスの {{jsxref("AsyncIterator")}} のサブクラスです。

{{EmbedInteractiveExample("pages/js/expressions-async-function-asterisk.html", "taller")}}

## コンストラクター

`AsyncGenerator` コンストラクターはグローバルには利用できません。`AsyncGenerator` のインスタンスは、[非同期ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function*)から返される必要があります。

```js
async function* createAsyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}
const asyncGen = createAsyncGenerator();
asyncGen.next().then((res) => console.log(res.value)); // 1
asyncGen.next().then((res) => console.log(res.value)); // 2
asyncGen.next().then((res) => console.log(res.value)); // 3
```

実際、`AsyncGenerator`コンストラクターに対応するJavaScriptのエンティティはありません。非同期ジェネレーター関数によって生成されるすべてのオブジェクトによって共有されるプロトタイプオブジェクトである隠しオブジェクトがあるだけです。このオブジェクトはクラスのように見せるために `AsyncGenerator.prototype` というスタイルで呼ばれることが多いのですが、[`AsyncGeneratorFunction.prototype.prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction) と呼ぶほうが適切でしょう。なぜなら `AsyncGeneratorFunction` は実際の JavaScript エンティティであるからです。

## インスタンスプロパティ

これらのプロパティは `AsyncGenerator.prototype` で定義されており、すべての `AsyncGenerator` インスタンスで共有されています。

- {{jsxref("Object/constructor", "AsyncGenerator.prototype.constructor")}}

  - : インスタンスオブジェクトを作成したコンストラクター関数。`AsyncGenerator` インスタンスの場合、初期値は [`AsyncGeneratorFunction.prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction) です。

    > **メモ:** `AsyncGenerator` は生成した非同期ジェネレーター関数を格納しているわけではありません。

- `AsyncGenerator.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は、文字列 `"AsyncGenerator"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

_親である {{jsxref("AsyncIterator")}} からインスタンスメソッドを継承しています_。

- {{jsxref("AsyncGenerator.prototype.next()")}}
  - : {{jsxref("Promise")}} を返します。これは、{{jsxref("Operators/yield", "yield")}} 式で返された指定された値で解決されます。
- {{jsxref("AsyncGenerator.prototype.return()")}}
  - : ジェネレータ本体に現在の停止位置に `return` 文を挿入したかのように動作します。[`try...finally`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch#finally_ブロック) ブロックと組み合わせるとジェネレーターを終了し、クリーンアップタスクを実行することができます。
- {{jsxref("AsyncGenerator.prototype.throw()")}}
  - : ジェネレーター本体の現在の停止位置に `throw` 文が挿入されたかのように動作します。これは、ジェネレーターにエラー状態を通知し、エラーを処理するか、クリーンアップを実行して自身を終了させることができます。

## 例

### 非同期ジェネレーターの反復処理

次の例では、非同期ジェネレーターを反復処理し、時間間隔が短くなるごとに 1～6 の値をコンソールに出力しています。時刻が変わるたびにプロミスが生成されますが、それは `for await...of` ループの中で自動的に解決されることに注意してください。

```js
// 非同期タスクです。実際にはもっと有益なことを使用していることを
// 想定してください。
function delayedValue(time, value) {
  return new Promise((resolve /*, reject*/) => {
    setTimeout(() => resolve(value), time);
  });
}

async function* generate() {
  yield delayedValue(2000, 1);
  yield delayedValue(100, 2);
  yield delayedValue(500, 3);
  yield delayedValue(250, 4);
  yield delayedValue(125, 5);
  yield delayedValue(50, 6);
  console.log("All done!");
}

async function main() {
  for await (const value of generate()) {
    console.log("value", value);
  }
}

main().catch((e) => console.error(e));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/function*", "function*", "", 1)}}
- {{jsxref("Statements/async_function*", "async function*", "", 1)}}
- [`function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("GeneratorFunction", "Generator Function", "", 1)}}
- {{jsxref("AsyncGeneratorFunction", "Async Generator Function", "", 1)}}
- [イテレーターとジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)
