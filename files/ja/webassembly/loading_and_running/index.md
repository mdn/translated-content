---
title: WebAssembly コードの読み込みと実行
slug: WebAssembly/Loading_and_running
i10n:
  sourceCommit: 1ef12f2e0815d0d285d6027219c987a3e4e228a3
---

{{WebAssemblySidebar}}

JavaScript で WebAssembly を使用するには、まずコンパイル/インスタンス化の前にモジュールをメモリーにプルする必要があります。この記事では、WebAssembly バイトコードをフェッチするために使用できるさまざまなメカニズムのリファレンスと、それをコンパイル/インスタンス化して実行する方法について説明します。

## どんな方法があるの?

WebAssembly は `<script type='module'>` または ES2015 の `import` 文とまだ統合されていないため、インポートを使用してブラウザーでモジュールをフェッチする組み込みの方法はありません。

以前の {{jsxref("WebAssembly.compile")}}/{{jsxref("WebAssembly.instantiate")}} メソッドでは、生のバイトをフェッチした後 WebAssembly モジュールのバイナリーを含む {{jsxref("ArrayBuffer")}} を作成し、コンパイル/インスタンス化する必要があります。これは文字列(JavaScript ソースコード) をバイトの配列バッファー (WebAssembly ソースコード)で置き換えることを除いて、`new Function(string)` に似ています。

新しい {{jsxref("WebAssembly.compileStreaming")}}/{{jsxref("WebAssembly.instantiateStreaming")}} メソッドは、より効率的です。ネットワークからの生のバイトストリームに対して直接アクションを実行し、 {{jsxref("ArrayBuffer")}} ステップの必要性がなくなりました。

では、どのようにバイト列を配列バッファーに読み込んでコンパイルするのでしょうか? 次の節で説明します。

## Fetch を使用する

[Fetch](/ja/docs/Web/API/Fetch_API) はネットワークリソースを取得するための便利で新しい API です。

wasm モジュールをフェッチする最も簡単で効率的な方法は、新しい {{jsxref("WebAssembly.instantiateStreaming()")}} メソッドを使用することです。このメソッドは最初の引数として `fetch()` を呼び出すことができ、1 つのステップでフェッチ、モジュールをインスタンス化し、サーバからストリームされる生のバイトコードにアクセスします。

```js
WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then((results) => {
  // Do something with the results!
});
```

直接ストリームでは動作しない古い {{jsxref("WebAssembly.instantiate()")}} メソッドを使用した場合、フェッチされたバイトコードを {{jsxref("ArrayBuffer")}} に変換する必要があります。次のようにです。

```js
fetch('module.wasm').then((response) =>
  response.arrayBuffer()
).then((bytes) =>
  WebAssembly.instantiate(bytes, importObject)
).then((results) => {
  // コンパイルされた結果 (results) で何かする!
});
```

### 余談: instantiate() のオーバーロード

{{jsxref("WebAssembly.instantiate()")}} 関数は 2 つのオーバーロードを持ちます。 1 つ目（上の例を参照）はバイトコードを受け取ってプロミスを返します。解決されたプロミスでコンパイルされたモジュールと、それをインスタンス化したものを含むオブジェクトとして受け取ります。オブジェクトの構造は以下のようになります。

```
{
  module : Module // コンパイルされた WebAssembly.Module オブジェクト,
  instance : Instance // モジュールオブジェクトから生成された WebAssembly.Instance
}
```

> **メモ:** 通常はインスタンスのみを気にしますが、キャッシュする場合や、[`postMessage()`](/ja/docs/Web/API/MessagePort/postMessage) を使用して別のワーカーやウィンドウと共有する場合や、インスタンスをさらに作成したい場合に備えて、モジュールを用意すると便利です。

> **メモ:** 2 番目のオーバーロード形式は {{jsxref("WebAssembly.Module")}} オブジェクトを引数としてとり、結果としてインスタンスオブジェクトを直接含む Promise を返します。[2 番目のオーバーロードの例](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate#second_overload_example)を参照してください。

### WebAssembly コードを実行する

JavaScript 内で WebAssembly インスタンスが有効になったら {{jsxref("WebAssembly.Instance/exports", "WebAssembly.Instance.exports")}} プロパティを通してエクスポートされた機能を使い始めることができます。コードは以下のようになります。

```js
WebAssembly.instantiateStreaming(fetch('myModule.wasm'), importObject)
.then((obj) => {
  // Call an exported function:
  obj.instance.exports.exported_func();

  // or access the buffer contents of an exported memory:
  const i32 = new Uint32Array(obj.instance.exports.memory.buffer);

  // or access the elements of an exported table:
  const table = obj.instance.exports.table;
  console.log(table.get(0)());
})
```

> **メモ:** WebAssembly モジュールからのエクスポートの仕組みの詳細については [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API) と [WebAssembly テキストフォーマットを理解する](/ja/docs/WebAssembly/Understanding_the_text_format) を参照してください。

## XMLHttpRequest を使用する

[`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) は Fetch よりやや古いですが、引き続き型付き配列を取得するために適切に使用することができます。繰り返しますが、モジュール名は `simple.wasm` とします。

1. {{domxref("XMLHttpRequest()")}} インスタンスを生成して、{{domxref("XMLHttpRequest.open","open()")}} メソッドでリクエストをオープン、リクエストメソッドを `GET` に設定し、フェッチするためのパスを宣言します。
2. キーは {{domxref("XMLHttpRequest.responseType","responseType")}} を使用してレスポンスタイプを `'arraybuffer'` にすることです。
3. 次に {{domxref("XMLHttpRequest.send()")}} を使用してリクエストします。
4. そのあと、ダウンロードが終了したときに {{domxref("XMLHttpRequest.load_event", "load")}} のイベントハンドラーから関数を実行します。この関数内で {{domxref("XMLHttpRequest.response", "response")}} プロパティから array buffer を取得し、Fetch で行ったように {{jsxref("WebAssembly.instantiate()")}} メソッドに渡します。

最終的なコードは以下のようになります。

```js
const request = new XMLHttpRequest();
request.open('GET', 'simple.wasm');
request.responseType = 'arraybuffer';
request.send();

request.onload = () => {
  const bytes = request.response;
  WebAssembly.instantiate(bytes, importObject).then((results) => {
    results.instance.exports.exported_func();
  });
};
```

> **メモ:** 動作例は [xhr-wasm.html](https://mdn.github.io/webassembly-examples/js-api-examples/xhr-wasm.html) を参照してください。
