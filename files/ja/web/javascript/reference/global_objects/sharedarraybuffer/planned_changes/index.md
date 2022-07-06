---
title: 共有メモリーに関する変更予定
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Planned_changes
tags:
  - Fetch
  - ガイド
  - HTML
  - JavaScript
  - セキュリティ
  - SharedArrayBuffer
  - Spectre
  - postMessage
---
{{JSRef}}

開発者が [`SharedArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) オブジェクトを再び作成できるように、標準化作業が進行中ですが、スレッドをまたがってこれらを使用するために変更が必要です (例えば、 `postMessage()` で `SharedArrayBuffer` オブジェクトを使用すると、既定で例外が発生します）。これらの変更により、サイト間の分離がさらに進み、共有メモリーで作成できる高解像度タイマーを使った攻撃の影響を軽減するのに役立ちます。

> **Note:** Firefox 79 以降では、この記事で説明している機能は既定で有効になります。
>
> Chrome はこれらの制約をデスクトップ版の Chrome 92 と Android 版の Chrome 88 から始めました。

## 新しい HTTP ヘッダーの鉱脈

基本要件として、文書は[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)にあることが必要です。

最上位の文書の場合、 2 つのヘッダーを設定する必要があります。

- [`Cross-Origin-Opener-Policy`](/ja/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) の値は `same-origin` です（攻撃からオリジンを守ります）。
- [`Cross-Origin-Embedder-Policy`](/ja/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) 値は `require-corp` （オリジンから犠牲者を保護する）です。

この 2 つのヘッダーを設定すると、 `postMessage()` は `SharedArrayBuffer` オブジェクトを使用しても例外が発生しなくなり、スレッド間での共有メモリーが利用できるようになります。

ネストされた文書と専用ワーカーは、 [`Cross-Origin-Embedder-Policy`](/ja/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy) ヘッダーも同じ値で設定する必要があります。ネストされた文書とサブリソースが同一オリジンであれば、これ以上の変更は必要ありません。ネストされた文書とサブリソースが同じサイト（ただし別オリジン）であった場合は、 [`Cross-Origin-Resource-Policy`](/ja/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy "HTTP Cross-Origin-Resource-Policy レスポンスヘッダーは、与えられたリソースに対する CORS なしののオリジン間/サイト間リクエストをブラウザーがブロックするという要望を伝えるものです。") ヘッダーに `same-site` を値として設定する必要があります。そして、それらのオリジン間（およびサイト青だ）の対応するものは、 `cross-origin` を値とした同ヘッダーを設定する必要があります。 [`Cross-Origin-Resource-Policy`](/ja/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy "HTTP Cross-Origin-Resource-Policy レスポンスヘッダーは、与えられたリソースに対する CORS なしののオリジン間/サイト間リクエストをブラウザーがブロックするという要望を伝えるものです。") ヘッダーに `same-origin` 以外の値を設定すると、潜在的にリソースが [Spectre](https://ja.wikipedia.org/wiki/Spectre) などの攻撃にさらされてしまうので注意してください。

[`Cross-Origin-Opener-Policy`](/ja/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) ヘッダーは、ポップアップへの参照を保持する能力を制限することに注意してください。2 つの最上位ウィンドウコンテキスト間の直接アクセスは、基本的に同一オリジンであり、同じ 2 つの値を持つ同じ 2 つのヘッダーを運ぶ場合にのみ機能します。

## API の変更

この新しく必要とされる環境の結果として、いくつかの API の影響があります。

- `Atomics` オブジェクトは常に利用可能です。
- `SharedArrayBuffer` オブジェクトは原則的に常に利用可能ですが、残念ながらウェブコンテンツとの互換性のために、上記の 2 つのヘッダーが設定されていない限り、グローバルオブジェクトのコンストラクターは非公開になります。将来的には、この制限が取り除かれる可能性があります。　[`WebAssembly.Memory`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) はまだインスタンスを取得するために使用することができます。
- 上記の 2 つのヘッダーが設定されていない限り、さまざまな `postMessage()` API は `SharedArrayBuffer` オブジェクトを使用すると例外が発生します。これら設定されていれば、`Window` オブジェクトと専用ワーカーの `postMessage()` が機能し、メモリ共有が可能になります。
- `postMessage()` が例外を発生させるかどうかをチェックする必要がないように、 [`self.crossOriginIsolated`](/ja/docs/Web/API/crossOriginIsolated) が標準化されつつあります（論理値を返すゲッターであり、 `true` はヘッダーが設定されていることを示します）。ウィンドウとワーカーのコンテキストで利用可能です。

## WebAssembly の共有メモリー

WebAssembly の[スレッド](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md)の提案により、 [`WebAssembly.Memory`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) オブジェクトは新しいコンストラクターのフラグである [`shared`](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#javascript-api-changes) を指定することがで作成することができるようになりました。このフラグを `true` に設定すると、構築された `Memory` オブジェクトは `SharedArrayBuffer` と同様に `postMessage()` によってワーカー間で共有できるようになり、`Memory` オブジェクトのバッキング [`buffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer) は `SharedArrayBuffer` となります。したがって、上記の `SharedArrayBuffer` をワーカー間で共有するための要件は、 `WebAssembly.Memory` を共有する場合にも当てはまります。

WebAssembly スレッドの提案では、新しい[不可分](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#atomic-memory-accesses)命令のセットも定義しています。ちょうど `SharedArrayBuffer` とそのメソッドが無条件に有効であるように（そしてスレッド間の共有のみが新しいヘッダーでゲートされます）、WebAssembly の不可分命令も無条件に許可されます。

## 参考文献

- [COOP and COEP explained](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit).
- `Cross-Origin-Opener-Policy`: [whatwg/html issue #3740](https://github.com/whatwg/html/issues/3740), [draft specification](https://gist.github.com/annevk/6f2dd8c79c77123f39797f6bdac43f3e).
- `Cross-Origin-Embedder-Policy`: [whatwg/html issue #4175](https://github.com/whatwg/html/issues/4175), [draft specification](https://mikewest.github.io/corpp/).
- `Cross-Origin-Resource-Policy`: [standardized in Fetch](https://fetch.spec.whatwg.org/#cross-origin-resource-policy-header), new `cross-origin` value is part of the `Cross-Origin-Embedder-Policy` effort.
- `postMessage()` changes and [`self.crossOriginIsolated`](/ja/docs/Web/API/crossOriginIsolated): [whatwg/html issue #4732](https://github.com/whatwg/html/issues/4732), [whatwg/html issue #4872](https://github.com/whatwg/html/issues/4872), [draft specification](https://github.com/whatwg/html/pull/4734).
- [SharedArrayBuffer updates in Android Chrome 88 and Desktop Chrome 92](https://developer.chrome.com/blog/enabling-shared-array-buffer/)
