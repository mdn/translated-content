---
title: Atomics
slug: Web/JavaScript/Reference/Global_Objects/Atomics
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Atomics`** 名前空間オブジェクトには、不可分操作を実行するための静的メソッドが含まれています。これらは {{jsxref("SharedArrayBuffer")}} および {{jsxref("ArrayBuffer")}} オブジェクトで使用されます。

## 解説

ほとんどのグローバルオブジェクトとは異なり、`Atomics` はコンストラクターではありません。 [`new` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/new)と一緒に使用したり、 `Atomics` オブジェクトを関数として呼び出したりすることはできません。 `Atomics` のすべてのプロパティとメソッドは静的です（{{jsxref("Math")}} オブジェクトの場合と同様です）。

### 不可分操作

メモリが共有されている場合、複数のスレッドがメモリー内の同じデータを読み書きできます。不可分操作では、予測される値の書き込みと読み込みを保証するため、次の演算が開始される前に現在の演算が完了し、その演算が割り込まれないようにします。

### wait と notify

`wait()` メソッドと `notify()` メソッドは、 Linux の futex ("fast user-space mutex") を原型としており、特定の条件が true になるまで待つ手段を提供します。一般的にはブロッキング構造として使用されます。

## 静的プロパティ

- `Atomics[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"Atomics"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## 静的メソッド

- {{jsxref("Atomics.add()")}}
  - : 配列の指定した位置にある既存の値に指定した値を追加します。その位置にあった古い値を返します。
- {{jsxref("Atomics.and()")}}
  - : 配列の指定した位置の値と指定した値でビット単位の論理積 (AND) を計算します。その位置にあった古い値を返します。
- {{jsxref("Atomics.compareExchange()")}}
  - : 値が等しい場合、配列の指定した位置に値を格納します。古い値を返します。
- {{jsxref("Atomics.exchange()")}}
  - : 配列の指定した位置に値を格納します。古い値を返します。
- {{jsxref("Atomics.isLockFree()")}}
  - : ロック機構と不可分操作のどちらを使用するかを決定するための最適化プリミティブです。指定した要素サイズの配列上の不可分操作が (ロックではなく) ハードウェアによる不可分操作を使用するよう実装されている場合、 `true` を返します。上級者だけが使用してください。
- {{jsxref("Atomics.load()")}}
  - : 配列の指定した位置の値を返します。
- {{jsxref("Atomics.notify()")}}
  - : 配列の指定した位置で待機中のエージェントに通知します。通知を受けたエージェントの数を返します。
- {{jsxref("Atomics.or()")}}
  - : 配列の指定した位置の値と指定した値でビット単位の論理和 (OR) を計算します。その位置にあった古い値を返します。
- {{jsxref("Atomics.pause()")}}
  - : 呼び出し側が共有リソースへのアクセスを待機している間、CPU にそのことを知らせるマイクロウェイトプリミティブを提供します。これにより、システムは、現在のスレッドを譲ることなく、コア（電力など）またはスレッドに割り当てられているリソースを縮小することができます。
- {{jsxref("Atomics.store()")}}
  - : 配列の指定した位置に指定した値を格納します。その値を返します。
- {{jsxref("Atomics.sub()")}}
  - : 配列の指定した位置の値から指定した値を減算します。その位置にあった古い値を返します。
- {{jsxref("Atomics.wait()")}}
  - : 配列の指定位置に指定した値が含まれているか検証し、休止して待機するかタイムアウトします。 `"ok"`、`"not-equal"`、`"timed-out"` のいずれかの文字列を返します。呼び出し元のエージェントで待機が許可されていない場合、例外が発生します。（ほとんどのブラウザーでは、ブラウザーのメインスレッドで `wait()` を許可していません。）
- {{jsxref("Atomics.waitAsync()")}}
  - : 共有メモリー上の場所を非同期的に（つまり、`Atomics.wait` とは異なり、ブロックせずに）待機し、操作の結果を表すオブジェクトを返します。
- {{jsxref("Atomics.xor()")}}
  - : 配列の指定した位置の値と指定した値でビット単位の排他的論理和 (XOR) を計算します。その位置にあった古い値を返します。

## 例

### Atomics の使用

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

ta[0]; // 0
ta[0] = 5; // 5

Atomics.add(ta, 0, 12); // 5
Atomics.load(ta, 0); // 17

Atomics.and(ta, 0, 1); // 17
Atomics.load(ta, 0); // 1

Atomics.compareExchange(ta, 0, 5, 12); // 1
Atomics.load(ta, 0); // 1

Atomics.exchange(ta, 0, 12); // 1
Atomics.load(ta, 0); // 12

Atomics.isLockFree(1); // true
Atomics.isLockFree(2); // true
Atomics.isLockFree(3); // false
Atomics.isLockFree(4); // true

Atomics.or(ta, 0, 1); // 12
Atomics.load(ta, 0); // 13

Atomics.store(ta, 0, 12); // 12

Atomics.sub(ta, 0, 2); // 12
Atomics.load(ta, 0); // 10

Atomics.xor(ta, 0, 1); // 10
Atomics.load(ta, 0); // 11
```

### 待機と通知

共有された `Int32Array` があるとします。

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

読み取りスレッドは、指定された値が指定されたインデックスに格納されている値と一致しているため、位置 0 で休眠状態で待機しています。
読み取りスレッドは、書き込みスレッドが指定された型付き配列の位置 0 で `Atomics.notify()` を呼び出すまで、動作しません。
ただし、復帰後に、書き込みスレッドによって位置 0 の値が変更されていない場合、読み取りスレッドは休眠状態に**戻らず**、処理を続けます。

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

書き込みスレッドが新しい値を格納し、待機しているスレッドに書き込みが発生したことを通知します。

```js
console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("ArrayBuffer")}}
- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)
- [ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)
- [Shared Memory – 短いチュートリアル](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md) (TC39 ecmascript-sharedmem proposal)
- [A Taste of JavaScript's New Parallel Primitives](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) (hacks.mozilla.org, 2016)
