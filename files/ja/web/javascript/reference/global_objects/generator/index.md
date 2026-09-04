---
title: Generator
slug: Web/JavaScript/Reference/Global_Objects/Generator
l10n:
  sourceCommit: 8ee475f0fd4e606f1cb94b44eb5380d769c2452c
---

**`Generator`** オブジェクトは{{jsxref("Statements/function*", "ジェネレーター関数", "", 1)}}によって返され、[反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)と[イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル)の両方に準拠しています。

`Generator` は {{jsxref("Iterator")}} クラスのサブクラスです。

## コンストラクター

`Generator` コンストラクターに関する JavaScript の実体はありません。`Generator` のインスタンスは[ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/function*)から返す必要があります。

```js
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```

ジェネレーター関数によって生成されるすべてのオブジェクトが共有する隠されたプロトタイプオブジェクトだけがあります。このオブジェクトはクラスに見せかけるため `Generator.prototype` と表記されることが多いですが、`GeneratorFunction` が実際の JavaScript エンティティであるため、より適切には {{jsxref("GeneratorFunction.prototype.prototype")}} と呼ぶべきです。`Generator`インスタンスのプロトタイプチェーンを理解するには、{{jsxref("GeneratorFunction.prototype.prototype")}} を参照してください。

## インスタンスプロパティ

これらのプロパティは `Generator.prototype` に定義され、すべての `Generator` インスタンスで共有されます。

- {{jsxref("Object/constructor", "Generator.prototype.constructor")}}
  - : 作成されたインスタンスオブジェクトのコンストラクター関数です。`Generator` インスタンスでは、初期値は [`GeneratorFunction.prototype`](/ja/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction) です。

    > [!NOTE]
    > `Generator` オブジェクトは、それ自体を作成したジェネレーター関数への参照を格納しません。

- `Generator.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値であり、文字列 `"Generator"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

_親である {{jsxref("Iterator")}} から継承したインスタンスメソッドもあります_。

- {{jsxref("Generator.prototype.next()")}}
  - : {{jsxref("Operators/yield", "yield")}} 式で得られた値を返します。
- {{jsxref("Generator.prototype.return()")}}
  - : ジェネレーターの本体内で、現在の停止位置に `return` 文が挿入されたかのように振る舞い、これによりジェネレーターが完了します。また、[`try...finally`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch#finally_ブロック) ブロックと組み合わせることで、ジェネレーターがクリーンアップ処理を実行することができるようにします。
- {{jsxref("Generator.prototype.throw()")}}
  - : ジェネレーターの本体において、現在の停止位置に `throw` 文が挿入されたかのように振る舞います。これによりジェネレーターはエラー状態を認識し、エラーを処理したり、クリーンアップを実行して自身を終了させたりすることができます。

## 例

### 無限イテレーター

ジェネレーター関数では、値は必要になるまで評価されません。したがってジェネレーターは、潜在的に無限のデータ構造を定義することができます。

```js
function* infinite() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const generator = infinite(); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
// …
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/function*", "function*")}}
- [`function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("GeneratorFunction")}}
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
