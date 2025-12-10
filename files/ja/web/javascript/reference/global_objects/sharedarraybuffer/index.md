---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{JSRef}}

**`SharedArrayBuffer`** オブジェクトは、一般的な、生のバイナリーデータバッファーを表すために使用されます。{{jsxref("ArrayBuffer")}} オブジェクトと似ていますが、こちらは共有メモリー上にビューを生成するために使用されます。`SharedArrayBuffer` は[移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)ではありません。この点では `ArrayBuffer` が移譲可能であるのとは異なります。

## 解説

`SharedArrayBuffer` オブジェクトを使用して、クラスター内のあるエージェントから別のエージェント (エージェントとは、ウェブページのメインプログラムまたはそのウェブワーカーのひとつ) へ、{{jsxref("SharedArrayBuffer")}} オブジェクトを使用してメモリーを共有するために、[`postMessage`](/ja/docs/Web/API/Worker/postMessage) と[構造化複製](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)を使用します。

構造化複製アルゴリズムは `SharedArrayBuffer` と、`SharedArrayBuffer` にマッピングされた型付き配列を受け入れます。どちらの場合も `SharedArrayBuffer` オブジェクトは受信者に転送されて、受信側のエージェントで新たなプライベートの `SharedArrayBuffer` オブジェクトになります（{{jsxref("ArrayBuffer")}} と同じように）。しかし、2 つの `SharedArrayBuffer` オブジェクトから参照される共有データブロックは同一のデータブロックであり、あるエージェントによるブロックへの副作用は、結果的に他方のエージェントからも見えます。

```js
const sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
```

共有メモリーは、ワーカー内でもメインスレッド内でも同時に生成や更新ができます。システム (CPU、OS、ブラウザー) によっては、変更がすべてのコンテキストに通知されるまでに少々時間がかかります。同期するためには、{{jsxref("Atomics", "不可分", "", 1)}}操作が必要です。

`SharedArrayBuffer` オブジェクトは、以下のように一部のウェブ API で使用されています。

- [`WebGLRenderingContext.bufferData()`](/ja/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.bufferSubData()`](/ja/docs/Web/API/WebGLRenderingContext/bufferSubData)
- [`WebGL2RenderingContext.getBufferSubData()`](/ja/docs/Web/API/WebGL2RenderingContext/getBufferSubData)

### セキュリティの要件

共有メモリーと高解像度タイマーは、[Spectre](https://ja.wikipedia.org/wiki/Spectre) の対策として 2018 年の初めに事実上[無効化されました](https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/)。
2020 年には、共有メモリーを再び有効にするために、新しい安全なアプローチが標準化されました。

共有メモリーを使用するには、文書が[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)内にあり、{{domxref("Window.crossOriginIsolated","オリジン同士が分離されている","","nocode")}}必要があります。
{{domxref("Window.crossOriginIsolated")}} と {{domxref("WorkerGlobalScope.crossOriginIsolated")}} のプロパティを使用して、文書のオリジン同士が分離されているかどうかを調べることができます。

```js
const myWorker = new Worker("worker.js");

if (crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  myWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  myWorker.postMessage(buffer);
}
```

オリジン同士が分離されている場合、 `postMessage()` は `SharedArrayBuffer` オブジェクトに例外を発生させなくなり、従ってスレッド間での共有メモリーが利用できるようになります。

### API の利用可能性

上記のセキュリティ対策の有無により、各種メモリー共有 API の利用可能性は異なります。

- `Atomics` オブジェクトは常に利用できます。
- `SharedArrayBuffer` オブジェクトは原則として常に利用できますが、残念ながら、ウェブコンテンツとの互換性のために、上記の 2 つのヘッダーが設定されていない限り、グローバルオブジェクトのコンストラクターは隠されます。この制限は将来的に取り除かれることが期待されています。[`WebAssembly.Memory`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory) はまだインスタンスを取得するために使用することができます。
- 上記の 2 つのヘッダーが設定されていない限り、さまざまな `postMessage()` API が `SharedArrayBuffer` オブジェクトに対して例外を発生することになります。これらが設定された場合は、`Window` オブジェクトと専用ワーカーの `postMessage()` が機能し、メモリーを共有できるようになります。

### WebAssembly の共有メモリー

[`WebAssembly.Memory`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory) オブジェクトは、コンストラクターの [`shared`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory#shared) フラグで作成することができます。このフラグを `true` に設定すると、構築されたメモリーオブジェクトは `SharedArrayBuffer` と同様に `postMessage()` を通じてワーカー間で共有でき、メモリーオブジェクトの背後となる [`buffer`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) は `SharedArrayBuffer` となります。したがって、ワーカー間で `SharedArrayBuffer` を共有するための上記の要件は、`WebAssembly.Memory.Buffer` を共有する場合にも当てはまります。

WebAssembly Threads の提案では、新しい[不可分](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#atomic-memory-accesses)命令の集合も定義されています。 `SharedArrayBuffer` とそのメソッドが無条件に有効であるように（そしてスレッド間の共有のみが新しいヘッダー上で制限されます）、 WebAssembly の不可分命令も無条件に許可されます。

### SharedArrayBuffer の成長

`SharedArrayBuffer` オブジェクトは {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}} コンストラクターを呼び出す際に `maxByteLength` オプションを含めることで成長可能にすることができます。また、`SharedArrayBuffer` の {{jsxref("SharedArrayBuffer/growable", "growable")}} および {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} プロパティを参照すれば、そのサイズが成長可能かどうかを調べることが可能であり、最大サイズは何であるかがわかります。成長可能な `SharedArrayBuffer` には {{jsxref("SharedArrayBuffer/grow", "grow()")}} を呼び出して新しいサイズを割り当てることができます。新しいバイトは 0 に初期化されます。

これらの機能により、`SharedArrayBuffer` をより効率的に成長させることができます。そうしないと、新しいサイズのバッファーコピーを作成しなければなりません。また、この点において、JavaScript は WebAssembly と同等になります（Wasm のリニアメモリーは [`WebAssembly.Memory.prototype.grow()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) でサイズを変更することができます）。

セキュリティ上の理由から、`SharedArrayBuffer` はサイズを縮小することはできませんが、大きくすることはできます。

## コンストラクター

- {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}}
  - : 新しい `SharedArrayBuffer` オブジェクトを生成します。

## 静的プロパティ

- [`SharedArrayBuffer[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Symbol.species)
  - : `SharedArrayBuffer` のメソッドから返値を構築する際に使用されるコンストラクターを返します。

## インスタンスプロパティ

これらのプロパティは `SharedArrayBuffer.prototype` で定義されており、すべての `SharedArrayBuffer` インスタンスで共有されます。

- {{jsxref("SharedArrayBuffer.prototype.byteLength")}}
  - : 配列のサイズ（バイト単位）。これは配列の構築時に設定され、`SharedArrayBuffer` が成長可能である場合にのみ {{jsxref("SharedArrayBuffer.prototype.grow()")}} メソッドを使用して変更することができます。
- {{jsxref("Object/constructor", "SharedArrayBuffer.prototype.constructor")}}
  - : インスタンスオブジェクトを作成したコンストラクター関数です。SharedArrayBuffer`インスタンスの場合、初期値は{{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer")}}コンストラクターです。
- {{jsxref("SharedArrayBuffer.prototype.growable")}}
  - : 読み取り専用です。`SharedArrayBuffer` が成長可能な場合は `true` を、そうでない場合は `false` を返します。
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
  - : 読み取り専用で、`SharedArrayBuffer` が成長できる最大長をバイト数で指定します。これは配列が構築される際に設定され、変更することはできません。
- `SharedArrayBuffer.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"SharedArrayBuffer"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("SharedArrayBuffer.prototype.grow()")}}
  - : `SharedArrayBuffer` を指定したサイズ（バイト単位）まで成長させます。
- {{jsxref("SharedArrayBuffer.prototype.slice()")}}
  - : 新しい `SharedArrayBuffer` を作成し、その中身をこの `SharedArrayBuffer` の `begin` の位置から `end` の位置の一つ手前までのバイトをコピーして返します。 `begin` または `end` が負の数の場合は、配列の先頭からではなく末尾からの位置で参照します。

## 例

### 新しい SharedArrayBuffer の生成

```js
const sab = new SharedArrayBuffer(1024);
```

### SharedArrayBuffer の分割

```js
sab.slice(); // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2); // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2); // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
```

### WebGL バッファー内での使用

```js
const canvas = document.querySelector("canvas");
const gl = canvas.getContext("webgl");
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
- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)
- [ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)
- [共有メモリー – 簡潔なチュートリアル](https://github.com/tc39/proposal-ecmascript-sharedmem/blob/main/TUTORIAL.md) (TC39 ecmascript-sharedmem の提案)
- [A Taste of JavaScript's New Parallel Primitives](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) (hacks.mozilla.org, 2016)
- [COOP and COEP explained](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit) (the Chrome team, 2020)
- {{HTTPHeader("Cross-Origin-Opener-Policy")}}
- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}
- {{domxref("Window.crossOriginIsolated")}} および {{domxref("WorkerGlobalScope.crossOriginIsolated")}}
- [SharedArrayBuffer updates in Android Chrome 88 and Desktop Chrome 92](https://developer.chrome.com/blog/enabling-shared-array-buffer/) (developer.chrome.com, 2021)
