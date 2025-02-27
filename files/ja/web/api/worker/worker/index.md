---
title: Worker()
slug: Web/API/Worker/Worker
l10n:
  sourceCommit: c7aeb96dac3e0ac2864cffe45c02d214ae1a5219
---

{{APIRef("Web Workers API")}}

**`Worker()`** コンストラクターは、指定された URL で指定されたスクリプトを実行する {{domxref("Worker")}} オブジェクトを作成します。このスクリプトは [同一オリジンポリシー](/ja/docs/Web/Security/Same-origin_policy)に従わなければいけません。

> [!NOTE]
> data URL が 同一オリジンであるかどうかについては、ブラウザーベンダーの間で合意されていません。 Firefox 10 以降のリリースでは data URL を受け入れますが、すべてのブラウザーでそうなるとは限りません。

## 構文

```js
new Worker(aURL);
new Worker(aURL, options);
```

### 引数

- `aURL`
  - : 文字列で、ワーカーが実行するスクリプトの URL を表します。同一オリジンポリシーに従っていなければいけません。
- `options` {{optional_inline}}

  - : オブジェクトを作成するときに設定できるオプションプロパティを持つオブジェクトです。以下のプロパティが使用できます。

    - `type`
      - : 文字列で、作成するワーカーの種類を指定します。使用できる値は `classic` または `module` です。指定しない場合の既定値は `classic` です。
    - `credentials`
      - : 文字列で、ワーカーで使用する資格情報の種類を指定します。使用できる値は `omit`、`same-origin`、`include` です。指定しない場合、または type が `classic` である場合、既定値は `omit` （資格情報は不要）です。
    - `name`
      - : 文字列で、ワーカーのスコープを表す {{domxref("DedicatedWorkerGlobalScope")}} を識別する名前を指定します。これは主に、デバッグで役に立ちます。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : 文書がワーカーを起動することが許可されていない場合、例えば、 URL が不正な構文であったり、同一オリジンポリシーに違反していたりした場合に発生します。
- `NetworkError` {{domxref("DOMException")}}
  - : ワーカースクリプトの MIME タイプが不正な場合に発生します。これは常に `text/javascript` であるべきです（経緯上、[他の JavaScript の MIME タイプ](/ja/docs/Web/HTTP/MIME_types#javascript_の歴史的な_mime_タイプ)も受け入れられる場合があります）。
- `SyntaxError` {{domxref("DOMException")}}
  - : _aURL_ が解釈できなかった場合に発生します。

## 例

次のコードスニペットは `Worker()` コンストラクターを使って {{domxref("Worker")}} オブジェクトを作成し、続いてそのオブジェクトの使い方を表しています。

```js
const myWorker = new Worker("worker.js");

first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};
```

完全な例を見るには、[基本的な専用ワーカーの例](https://github.com/mdn/simple-web-worker)（[専用ワーカーを実行](https://mdn.github.io/simple-web-worker/)）を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

所属する {{domxref("Worker")}} インターフェイス。
