---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
tags:
  - クラス
  - JavaScript
  - 共有メモリー
  - SharedArrayBuffer
  - 型付き配列
browser-compat: javascript.builtins.SharedArrayBuffer
translation_of: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
---
{{JSRef}}

**`SharedArrayBuffer`** オブジェクトは、固定長の生バイナリデータバッファーのジェネリックを表すために使用されます。{{jsxref("ArrayBuffer")}} オブジェクトと似ていますが、こちらは共有メモリー上にビューを生成するために使用されます。 `ArrayBuffer` と異なり、`SharedArrayBuffer` は分離できません。

## 解説

### メモリーの割り当てと共有

クラスター内のあるエージェントから別のエージェント (エージェントとは、ウェブページのメインプログラムまたはそのウェブワーカーのひとつ) へ、{{jsxref("SharedArrayBuffer")}} オブジェクトを使用してメモリーを共有するために、[`postMessage`](/ja/docs/Web/API/Worker/postMessage) と[構造化クローン](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)を使用します。

構造化クローンアルゴリズムは `SharedArrayBuffer` と、`SharedArrayBuffer` にマッピングされた型付き配列を受け入れます。どちらの場合も `SharedArrayBuffer` オブジェクトは受信者に転送されて、受信側のエージェントで新たなプライベートの SharedArrayBuffer オブジェクトになります ({{jsxref("ArrayBuffer")}} と同じように)。しかし、2 つの `SharedArrayBuffer` オブジェクトから参照される共有データブロックは同一のデータブロックであり、あるエージェントによるブロックへの副作用は、結果的に他方のエージェントからも見えます。

```js
var sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
```

### Atomic 操作による共有メモリーを更新や同期

共有メモリーは、ワーカー内でもメインスレッド内でも同時に生成や更新ができます。システム (CPU、 OS、ブラウザー) によっては、変更がすべてのコンテキストに通知されるまでに少々時間がかかります。同期するためには、{{jsxref("Atomics", "不可分", "", 1)}}操作が必要です。

<h3 id="APIs_which_use_SharedArrayBuffer_objects">SharedArrayBuffer オブジェクトを使用する API</h3>

- [`WebGLRenderingContext.bufferData()`](/ja/docs/Web/API/WebGLRenderingContext/bufferData "WebGL API WebGLRenderingContext.bufferData() メソッドは、バッファーオブジェクトのデータストアを初期化、作成します。")
- [`WebGLRenderingContext.bufferSubData()`](/ja/docs/Web/API/WebGLRenderingContext/bufferSubData "The WebGLRenderingContext.bufferSubData() method of the WebGL API updates a subset of a buffer object's data store.")
- [`WebGL2RenderingContext.getBufferSubData()`](/ja/docs/Web/API/WebGL2RenderingContext/getBufferSubData "The WebGL2RenderingContext.getBufferSubData() method of the WebGL 2 API reads data from a buffer binding point and writes them to an ArrayBuffer or SharedArrayBuffer.")

### セキュリティの要件

共有メモリーと高解像度タイマーは、 [Spectre](https://ja.wikipedia.org/wiki/Spectre) の対策として 2018 年の初めに事実上[無効化されました](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/)。 2020 年には、共有メモリーを再び有効にするために、新しい安全なアプローチが標準化されました。いくつかのセキュリティ対策を施すことで、 [`postMessage()`](/ja/docs/Web/API/Window/postMessage) が `SharedArrayBuffer` オブジェクトを渡すことができなくなり、スレッド間の共有メモリーが利用できるようになります。

基本的な要件として、文書が[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)にある必要があります。

最上位の文書では、サイトにオリジン間の分離性を持たせるため、次の 2 つのヘッダーを設定する必要があります。

- [`Cross-Origin-Opener-Policy`](/ja/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) で `same-origin` の値を指定すること (オリジンを攻撃者から守るため)
- [`Cross-Origin-Embedder-Policy`](/ja/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) で `require-corp` の値を指定すること (被害者を自分のオリジンから守るため)

```plain
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

オリジン間の分離が成功したかどうかは、ウィンドウとワーカーのコンテキストで利用できる [`crossOriginIsolated`](/ja/docs/Web/API/WindowOrWorkerGlobalScope/crossOriginIsolated) プロパティを使って確認することができます。

```js
if (crossOriginIsolated) {
  // Post SharedArrayBuffer
} else {
  // Do something else
}
```

また、ブラウザー (Firefox 79など) で展開され始めている[共有メモリーの計画的な変更](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Planned_changes)も参照してください。

### SharedArrayBuffer の生成には new 演算子が必要

`SharedArrayBuffer` コンストラクターは、{{jsxref("Operators/new", "new")}} 演算子で呼び出す必要があります。`new` 演算子なしで関数として `SharedArrayBuffer` コンストラクターを呼び出すと、{{jsxref("TypeError")}} が発生します。

```js example-bad
var sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// new がない形は禁止されています
```

```js example-good
var sab = new SharedArrayBuffer(1024);
```

## コンストラクター

- [`SharedArrayBuffer()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer)
  - : 新しい `SharedArrayBuffer` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxref("SharedArrayBuffer.prototype.byteLength")}}
  - : 配列の大きさをバイト数で表します。これは配列が構築されたときに確立され、変更することはできません。**読み取り専用です。**

## インスタンスメソッド

- {{jsxref("SharedArrayBuffer.slice", "SharedArrayBuffer.prototype.slice(begin, end)")}}
  - : 新しい `SharedArrayBuffer` を作成し、その中身をこの `SharedArrayBuffer` の `begin` の位置から `end` の位置の一つ手前までのバイトをコピーして返します。 `begin` または `end` が負の数の場合は、配列の先頭からではなく末尾からの位置で参照します。

## 例

### 新しい SharedArrayBuffer の生成

```js
var sab = new SharedArrayBuffer(1024);
```

### SharedArrayBuffer の分割

```js
sab.slice();    // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2);   // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2);  // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
```

### WebGL バッファー内での使用

```js
const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, sab, gl.STATIC_DRAW);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Atomics")}}
- {{jsxref("ArrayBuffer")}}
- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- [Web Worker](/ja/docs/Web/API/Web_Workers_API)
- [parlib-simple ](https://github.com/lars-t-hansen/parlib-simple)– 同期と作業分配抽象化を提供するシンプルなライブラリー
- [共有メモリー – 簡潔なチュートリアル](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md)
- [JavaScript の並列処理機能を味見してみる](https://dev.mozilla.jp/2016/05/a-taste-of-javascripts-new-parallel-primitives/)
