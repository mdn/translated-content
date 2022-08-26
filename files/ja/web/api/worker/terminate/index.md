---
title: Worker.terminate()
slug: Web/API/Worker/terminate
translation_of: Web/API/Worker/terminate
---
{{APIRef("Web Workers API")}}

{{domxref("Worker")}}インターフェイスの **`terminate()`** メソッドは {{domxref("Worker")}} を即座に停止します。これは worker に対してその動作を終了する機会を提供するものではありません。単純に即時停止をします。

## 構文

```js
myWorker.terminate();
```

### 引数

無し。

### 返り値

Void.

## 例

次のコードでは{{domxref("Worker")}}オブジェクトを{{domxref("Worker.Worker", "Worker()")}} コンストラクタで作成したあと、すぐに停止しています。

```js
var myWorker = new Worker("worker.js");

myWorker.terminate();
```

## 仕様

| Specification                                                                                        | Status                           | Comment                                              |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------- |
| {{SpecName('HTML WHATWG', "#dom-worker-terminate", "Worker.postMessage()")}} | {{Spec2('HTML WHATWG')}} | No change from {{SpecName("Web Workers")}}. |
| {{SpecName('Web Workers', "#dom-worker-terminate", "Worker.postMessage()")}} | {{Spec2('Web Workers')}} | Initial definition.                                  |

## ブラウザ互換性

{{Compat("api.Worker.terminate")}}

## 関連項目

The {{domxref("Worker")}} interface it belongs to.
