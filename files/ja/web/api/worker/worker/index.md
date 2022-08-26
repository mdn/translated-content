---
title: Worker()
slug: Web/API/Worker/Worker
tags:
  - API
  - Constructor
  - Reference
  - Web Workers
  - Worker
translation_of: Web/API/Worker/Worker
---
{{APIRef("Web Workers API")}}

**`Worker()`** コンストラクターは引数の URL で指定されたスクリプトを実行する {{domxref("Worker")}} オブジェクトを作成します。このスクリプトは [同一生成元ポリシー](/Same_origin_policy_for_JavaScript "Same origin policy for JavaScript") (SOP) に従わなければいけません。

引数の URL が無効な構文だったり SOP に違反したりしている場合、`SECURITY_ERR` 型の {{domxref("DOMException")}} を返します。

> **Note:** **注記**: data URI が SOP に違反するかどうかをブラウザーベンダーの間で合意されていません。Gecko 10.0 {{geckoRelease("10.0")}} とそれより後のリリースでは data URI を受け入れますが、すべてのブラウザーでは、そうならない場合があります。

## 構文

```js
var myWorker = new Worker(aURL, options);
```

### 引数

- _aURL_
  - : Worker オブジェクトが後に実行するスクリプトの URL の {{domxref("USVString")}} です。SOP に従っていなければいけません。
- _options_ {{optional_inline}}

  - : オブジェクトを作成するときに設定できるオプションプロパティを持つオブジェクトです。以下のプロパティを使用できます:

    - `type`: 作成する worker のタイプを指定する {{domxref("DOMString")}}。使用できる値は `classic` または `module` です。指定しない場合の既定値は `classic` です。
    - `credentials`: worker を使用するためのクレデンシャルのタイプを指定する {{domxref("DOMString")}} です。使用できる値は `omit`、`same-origin`、`include` です。指定しない場合、または worker が `classic` タイプである場合はの既定値は `omit` (クレデンシャルは不要) です。
    - `name`: worker のスコープを表す {{domxref("DedicatedWorkerGlobalScope")}} を識別する名前を示す {{domxref("DOMString")}} です。これは主に、デバッグで役に立ちます。

### 例外

- ドキュメントが worker の開始を許可されていない場合に、`SecurityError` が発生します。
- スクリプトのひとつの MIME タイプが `text/csv`, `image/*`, `video/*`, or `audio/*` である場合に `NetworkError` が発生します。これは常に `text/javacript` であるべきです。
- _aURL_ をパースできない場合に `SyntaxError` が発生します。

## 例

次のコードスニペットは `Worker()` コンストラクターを使って {{domxref("Worker")}} オブジェクトを作成し、続いてそのオブジェクトの使い方を表しています。

```js
var myWorker = new Worker('worker.js');

first.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}
```

完全な例を見るには、[Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](http://mdn.github.io/simple-web-worker/)) を参照してください。

## 仕様

| 仕様書                                                                   | 策定状況                         | コメント |
| ------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', "#dom-worker", "Worker()")}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザー互換性

{{Compat("api.Worker.Worker")}}

## 関連項目

{{domxref("Worker")}} インタフェースに属しています。
