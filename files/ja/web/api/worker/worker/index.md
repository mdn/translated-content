---
title: "Worker: Worker() コンストラクター"
short-title: Worker()
slug: Web/API/Worker/Worker
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

**`Worker()`** コンストラクターは、指定された URL で指定されたスクリプトを実行する {{domxref("Worker")}} オブジェクトを作成します。このスクリプトは [同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)に従わなければいけません。

> [!NOTE]
> data URL が 同一オリジンであるかどうかについては、ブラウザーベンダーの間で意見が分かれています。 Firefox 10 以降のリリースでは data URL を受け入れますが、すべてのブラウザーでそうなるとは限りません。

## 構文

```js-nolint
new Worker(url)
new Worker(url, options)
```

### 引数

- `url`
  - : 文字列で、ワーカーが実行するスクリプトの URL を表します。同一オリジンポリシーに従っていなければいけません。URL は、現在の HTML ページの場所に対して相対的に解決されます。

    > [!NOTE]
    > [webpack](https://webpack.js.org/guides/web-workers/)、[Vite](https://vite.dev/guide/features.html#web-workers)、[Parcel](https://parceljs.org/languages/javascript/#web-workers) などのバンドラーでは、 [`import.meta.url`](/ja/docs/Web/JavaScript/Reference/Operators/import.meta#url) に対する相対 URL を `Worker()` コンストラクターに渡すことをお勧めします。例えば、次のようにします。
    >
    > ```js
    > const myWorker = new Worker(new URL("worker.js", import.meta.url));
    > ```
    >
    > この方法では、パスは現在の HTML ページではなく現在のスクリプトを基準とするため、バンドラーは、名前の変更などの最適化を安全に行うことができます（そうしないと、`worker.js` URL がバンドラーによって制御されていないファイルを指す可能性があり、何も仮定できなくなるためです）。

- `options` {{optional_inline}}
  - : オブジェクトを作成するときに設定できるオプションプロパティを持つオブジェクトです。以下のプロパティが使用できます。
    - `type`
      - : 文字列で、作成するワーカーの種類を指定します。使用できる値は `classic` または `module` です。指定しない場合の既定値は `classic` です。
    - `credentials`
      - : 文字列で、ワーカーで使用する資格情報の種類を指定します。使用できる値は `omit`、`same-origin`、`include` です。省略した場合、または型が `classic` の場合、既定では `same-origin` （同じオリジンからのリクエストの資格情報のみを含む）が使用されます。
    - `name`
      - : 文字列で、ワーカーのスコープを表す {{domxref("DedicatedWorkerGlobalScope")}} を識別する名前を指定します。これは主に、デバッグで役に立ちます。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : 文書がワーカーを起動することが許可されていない場合、例えば、 URL が不正な構文であったり、同一オリジンポリシーに違反していたりした場合に発生します。
- `NetworkError` {{domxref("DOMException")}}
  - : ワーカースクリプトの MIME タイプが不正な場合に発生します。これは常に `text/javascript` であるべきです（経緯上、[他の JavaScript の MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types#javascript_の歴史的な_mime_タイプ)も受け入れられる場合があります）。
- `SyntaxError` {{domxref("DOMException")}}
  - : _aURL_ が解釈できなかった場合に発生します。

## 例

次のコードスニペットは `Worker()` コンストラクターを使って {{domxref("Worker")}} オブジェクトを作成し、続いてそのオブジェクトの使い方を表しています。

```js
const myWorker = new Worker("worker.js");
const first = document.querySelector("input#number1");

first.onchange = () => {
  myWorker.postMessage(first.value);
  console.log("メッセージがワーカーに送られました");
};
```

完全な例を見るには、[基本的な専用ワーカーの例](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker)（[専用ワーカーを実行](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)）を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

所属する {{domxref("Worker")}} インターフェイス。
