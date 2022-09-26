---
title: SharedWorker.port
slug: Web/API/SharedWorker/port
---

{{APIRef("Web Workers API")}}

{{domxref("SharedWorker")}} インターフェースの **`port`** プロパティは、shared worker を制御したり通信したりするために使用する {{domxref("MessagePort")}} オブジェクトを返します。

## 構文

```
myWorker.port;
```

### 値

{{domxref("MessagePort")}} オブジェクト

## 例

次のコードスニペットでは、{{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} コンストラクターを使用して `SharedWorker` オブジェクトを生成しています。`SharedWorker.port` プロパティ経由で {{domxref("MessagePort")}} オブジェクトを使用して、複数のスクリプトから worker にアクセスできます — port は `start()` メソッドを使用して開始します:

```js
var myWorker = new SharedWorker('worker.js');
myWorker.port.start();
```

完全なサンプルについては、[Basic shared worker example](https://github.com/mdn/simple-shared-worker) ([run shared worker](http://mdn.github.io/simple-shared-worker/)) を参照してください。

## 仕様

| 仕様                                                                                                     | ステータス                       | コメント |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', "#dom-sharedworker-port", "AbstractWorker.onerror")}} | {{Spec2('HTML WHATWG')}} |          |

## ブラウザー実装状況

{{Compat("api.SharedWorker.port")}}

## 関連項目

- {{domxref("SharedWorker")}} インターフェース
