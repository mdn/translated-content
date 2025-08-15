---
title: Atomics.pause()
short-title: pause()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/pause
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Atomics.pause()`** は静的メソッドで、呼び出し側が共有リソースへのアクセスを待機している間、CPU にそのことを知らせるマイクロ待機プリミティブを提供します。これにより、システムは、現在のスレッドを委譲することなく、コア（電力など）またはスレッドに割り当てられているリソースを縮小することができます。

`pause()` は、タイミング以外の監視可能な動作は一切ありません。正確な動作は、 CPU アーキテクチャおよびオペレーティングシステムによって異なります。例えば、 Intel x86 では、 [Intel の最適化マニュアル](https://www.intel.com/content/www/us/en/content-details/671488/intel-64-and-ia-32-architectures-optimization-reference-manual-volume-1.html) によると、 `pause` 命令である可能性があります。プラットフォームによっては、何もしない命令である場合もあります。

## 構文

```js-nolint
Atomics.pause()
Atomics.pause(durationHint)
```

### 引数

- `durationHint` {{optional_inline}}
  - : 実装が待機時間を決定するために使用できる整数です。値 `n + 1` の場合、実装は、指定された値 `n` と同じ時間以上待機します。この数値そのものは物理的な意味はありません。数十から数百ナノ秒のオーダーで、一時停止できる最長時間に内部的な上限がある場合があります。これは、渡す `durationHint` を大きくすることで、[回避戦略](#回避戦略)を実装するために使用することができます。実装がこのヒントを使用することを保証するものではありません。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : durationHint が整数または `undefined` でない場合に発生します。

## 例

### Atomics.pause() の使用

共有メモリーへのアクセスを待つために {{jsxref("Atomics.wait()")}} または {{jsxref("Atomics.waitAsync()")}} を呼び出すと、スレッドはコアからスケジューリングされ、待機後に再びコアに戻ります。これは、共有メモリーへのアクセスに時間がかかる、競合の激しい場合には効率的です。競合が少ない場合は、スレッドを譲渡せずにロックをポーリングする方が効率的な場合が多いです。この手法は、[ビジー待機](https://en.wikipedia.org/wiki/Busy_waiting)または[スピンロック](https://en.wikipedia.org/wiki/Spinlock)と呼ばれています。 `pause()` メソッドを使用すると、スレッドが何をしているか、つまりリソースの必要性が低いことを CPU に知らせることで、待機中のスピンロックの効率を高めることができます。

両方の条件に対応するには、競合が少ないことを期待して最初にスピンロックをかけ、その後、しばらく経ってもロックが取得できなかった場合に待機するという手法が一般的です。すでにスピンロックによってロックを取得している場合、 `wait()` の呼び出しはノーオペレーションになります。

以下の例は、この手法を `Atomics.pause()` および `Atomics.wait()` とともに使用する方法を示しています。

> [!WARNING]
> メインスレッドでスピンロックを使用することは、ページ全体がフリーズしてしまうため、お勧めできません。一般的に、非常に慎重に設計されていない限り、スピンロックは通常の待機よりもパフォーマンスが向上するとは限りません。

```js
// 別のスレッドもこの共有メモリーにアクセスできるとします。
const sab = new SharedArrayBuffer(1024);
const i32 = new Int32Array(sab);

// 高速パス: CPU を短時間回転させる
let spin = 0;
do {
  if (Atomics.compareExchange(i32, 0, 0, 1) === 0) {
    break;
  }
  Atomics.pause();
  spin++;
} while (spin < 10);

// 遅いパス：ロックを待つ
// メインスレッドはブロックできないため、これはワーカー
// スレッドでのみ呼び出すことができます。
Atomics.wait(i32, 0, 1);
```

### 回避戦略

`durationHint` 引数を使用すると、回避戦略を実装することができます。例えば、スレッドは小さなヒントで開始し、反復処理ごとにそれを指数関数的に増加させることができます。これは、 JIT 化されていないコードでは関数呼び出し自体に高いオーバーヘッドがかかるため、 `pause()` を何度も呼び出すよりも望ましい方法です。

> [!NOTE]
> 実装によっては、実際には `durationHint` をまったく使用せず、常に一定時間を待つ場合もあります。

```js
// 指数の回避戦略
for (let hint = 1; hint < 1000; hint *= 2) {
  Atomics.pause(hint);
}

// 線形の回避戦略
for (let hint = 1; hint < 100; hint++) {
  Atomics.pause(hint);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.waitAsync()")}}
