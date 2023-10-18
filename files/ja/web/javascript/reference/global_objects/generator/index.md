---
title: Generator
slug: Web/JavaScript/Reference/Global_Objects/Generator
---

{{JSRef}}

**`Generator`** オブジェクトは{{JSxRef("Statements/function*", "ジェネレーター関数", "", 1)}}によって返され、[反復可能プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)と[イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル)の両方に準拠しています。

## コンストラクター

このオブジェクトを直接インスタンス化することはできません。代わりに、[ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/function*)から `Generator` のインスタンスを返すことができます。

```
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"
```

## インスタンスメソッド

- {{JSxRef("Generator.prototype.next()")}}
  - : {{JSxRef("Operators/yield", "yield")}} 式で得られた値を返します。
- {{JSxRef("Generator.prototype.return()")}}
  - : 与えられた値を返し、ジェネレーターを終了します。
- {{JSxRef("Generator.prototype.throw()")}}
  - : ジェネレーターにエラーを投げます。（そのジェネレーターの中からキャッチされない限り、ジェネレーターも終了します）

## 例

### 無限イテレーター

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
// ...
```

## 仕様

{{Specifications}}

## ブラウザー実装状況

{{Compat("javascript.builtins.Generator")}}

## 関連情報

- {{JSxRef("Statements/function*", "function*")}}
- {{JSxRef("Operators/function*", '<code>function*</code> 式', "", 1)}}
- {{JSxRef("GeneratorFunction")}}
- [反復処理プロトコル](/ja/docs/Web/JavaScript/Guide/The_Iterator_protocol)
