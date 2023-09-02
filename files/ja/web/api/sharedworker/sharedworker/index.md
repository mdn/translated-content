---
title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
l10n:
  sourceCommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{APIRef("Web Workers API")}}

**`SharedWorker()`** コンストラクターは、指定された URL でスクリプトを実行する {{domxref("SharedWorker")}} オブジェクトを作成します。このスクリプトは[同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)に従わなければなりません。

> **メモ:** ブラウザーメーカー間で、 data URL が同じ元であるかどうかについての見解の相違があります。 Firefox 10.0 以降では data URL を受け入れることができますが、他のすべてのブラウザーではその限りではありません。

## 構文

```js-nolint
new SharedWorker(aURL)
new SharedWorker(aURL, name)
new SharedWorker(aURL, options)
```

### 引数

- `aURL`
  - : 文字列で、ワーカーが実行するスクリプトの URL を表します。これは同一オリジンポリシーに従わなければなりません。
- `name` {{optional_inline}}
  - : ワーカーのスコープを表す {{domxref("SharedWorkerGlobalScope")}} の識別名を指定する文字列で、主にデバッグのために使用されます。
- `options` {{optional_inline}}

  - : オブジェクトのインスタンスを作成する際に設定することができる、オプションプロパティを格納したオブジェクト。利用できるプロパティは以下のとおりです。

    - `type`
      - : 作成するワーカーの種類を指定する文字列です。この値には `classic` または `module` を指定することができます。指定しない場合、既定では `classic` が使用されます。
    - `credentials`
      - : ワーカーに使用する資格情報の種類を指定する文字列です。値は `omit`、`same-origin`、`include` のいずれかです。指定しなかった場合、または type が `classic` の場合、既定では `omit` （資格情報は必要なし） が使用されます。
    - `name`
      - : ワーカーのスコープを表す {{domxref("SharedWorkerGlobalScope")}} の識別名を指定する文字列で、主にデバッグのために使用されます。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : ドキュメントがワーカーの開始を許可されていない場合、例えば URL が無効な構文であったり、同一オリジンポリシーに違反していたりする場合に発生します。
- `NetworkError` {{domxref("DOMException")}}
  - : ワーカースクリプトの MIME 型が正しくない場合に発生します。常に `text/javascript` であるべきです（歴史的な理由から[他の JavaScript MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript)も受け入れられるかもしれません）。
- `SyntaxError` {{domxref("DOMException")}}
  - : `aURL` が解釈できない場合に発生します。

## 例

以下のコードでは、`SharedWorker()` コンストラクターを使用して {{domxref("SharedWorker")}} オブジェクトを作成し、その後にそのオブジェクトを使用している様子を示しています。

```js
const myWorker = new SharedWorker("worker.js");

myWorker.port.start();

first.onchange = () => {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

second.onchange = () => {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

myWorker.port.onmessage = (e) => {
  result1.textContent = e.data;
  console.log("Message received from worker");
};
```

完全な例は、[基本的な共有ワーカーの例](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker)（[共有ワーカーを実行](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)）を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("SharedWorker")}} インターフェイス。
