---
title: 'SharedWorkerGlobalScope: connect イベント'
slug: Web/API/SharedWorkerGlobalScope/connect_event
---

{{APIRef}}

**`connect`** イベントは、新しいクライアントが接続したときに共有ワーカーの {{domxref("SharedWorkerGlobalScope")}} に発生します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル可能</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{DOMxRef("MessageEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラープロパティ</th>
      <td>{{domxref("SharedWorkerGlobalScope.onconnect")}}</td>
    </tr>
  </tbody>
</table>

## 例

この例は共有ワーカーファイルを示しています。メインスレッドから {{domxref("MessagePort")}} を通して Worker へのコネクションが発生したとき、 `onconnect` イベントハンドラーが呼び出されます。イベントオブジェクトは {{domxref("MessageEvent")}} です。

接続しようとしているポート番号は、イベントオブジェクトの `ports` 引数で参照することができます。この参照にはポートを通じて来るメッセージを扱うために割り当てられた `onmessage` ハンドラーがあり、その `postMessage()` メソッドに Worker を使用してメインスレッドにメッセージを送り返すために使用することができます。

```js
self.onconnect = function(e) {
    var port = e.ports[0];

    port.onmessage = function(e) {
      var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
      port.postMessage(workerResult);
    }

    port.start();
}
```

実行している例を完成させるには、 [Basic shared worker example](https://github.com/mdn/simple-shared-worker) ([共有ワーカーを実行](http://mdn.github.io/simple-shared-worker/)) をご覧ください。

### addEventListener による同等の処理

{{domxref("EventTarget/addEventListener", "addEventListener()")}} メソッドを使用してイベントハンドラーを設定することもできます。

```js
self.addEventListener('connect', function(e) {
  var port = e.ports[0];

  port.onmessage = function(e) {
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    port.postMessage(workerResult);
  }

});
```

## 仕様書

| 仕様書                                                                                                                       | 状態                             |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('HTML WHATWG', "indices.html#event-workerglobalscope-connect", "connect event")}} | {{Spec2('HTML WHATWG')}} |

## ブラウザーの互換性

{{Compat("api.SharedWorkerGlobalScope.connect_event")}}

## 関連情報

- [Web Worker の使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{domxref("SharedWorkerGlobalScope")}}
