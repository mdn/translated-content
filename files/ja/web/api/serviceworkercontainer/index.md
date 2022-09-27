---
title: ServiceWorkerContainer
slug: Web/API/ServiceWorkerContainer
---

{{APIRef("Service Workers API")}}

[Service Worker API](/ja/docs/Web/API/Service_Worker_API) の `ServiceWorkerContainer` インターフェイスは、ネットワークエコシステムの全体的な単位として、サービスワーカーを表すオブジェクトを提供します。 サービスワーカーは、サービスワーカーの登録、登録解除、更新のための機能や、サービスワーカーの状態とそれらの登録状況にアクセスするための機能を備えています。

ここで最も重要なことは、サービスワーカーを登録するための {{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register()")}} メソッドと、現在のページがアクティブに制御されているかどうかを判断するための {{domxref("ServiceWorkerContainer.controller")}} プロパティを公開していることです。

## プロパティ

- {{domxref("ServiceWorkerContainer.controller")}} {{readonlyinline}}
  - : {{domxref("ServiceWorker")}} オブジェクトの状態が `activating` または `activated` の場合、それを返します（{{domxref("ServiceWorkerRegistration.active")}} によって返されるのと同じオブジェクト）。 このプロパティは、強制リフレッシュのリクエスト中（_Shift_ + リフレッシュ）、またはアクティブワーカーがない場合は `null` を返します。

<!---->

- {{domxref("ServiceWorkerContainer.ready")}} {{readonlyinline}}
  - : サービスワーカーがアクティブになるまでコードの実行を遅らせる方法を提供します。 決して拒否せず、現在のページに関連付けられている {{domxref("ServiceWorkerRegistration")}} に {{domxref("ServiceWorkerRegistration.active")}} ワーカーが存在するようになるまで無期限に待機する {{jsxref("Promise")}} を返します。 その条件が満たされると、{{domxref("ServiceWorkerRegistration")}} で解決されます。

## イベント

- `controllerchange`
  - : 文書に関連する {{domxref("ServiceWorkerRegistration")}} が新しいアクティブ（{{domxref("ServiceWorkerRegistration.active","active")}}）ワーカーを取得すると発生します。
    {{domxref("ServiceWorkerContainer.oncontrollerchange")}} プロパティからも利用できます。
- `error`
  - : 関連するサービスワーカーでエラーが発生するたびに発生します。
    {{domxref("ServiceWorkerContainer.onerror")}} プロパティからも利用できます。
- [`message`](/ja/docs/Web/API/ServiceWorkerContainer/message_event)
  - : 着信メッセージを {{domxref("ServiceWorkerContainer")}} オブジェクトが受信したときに発生します（例えば、{{domxref("MessagePort.postMessage()")}} 呼び出しを介して）。
    {{domxref("ServiceWorkerContainer.onmessage")}} プロパティからも利用できます。

## メソッド

- {{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register()")}}
  - : 指定された `scriptURL` の {{domxref("ServiceWorkerRegistration")}} を作成または更新します。
- {{domxref("ServiceWorkerContainer.getRegistration()")}}
  - : 指定された文書 URL とスコープが一致する {{domxref("ServiceWorkerRegistration")}} オブジェクトを取得します。 このメソッドは、{{domxref("ServiceWorkerRegistration")}} または `undefined` に解決される {{jsxref("Promise")}} を返します。
- {{domxref("ServiceWorkerContainer.getRegistrations()")}}
  - : `ServiceWorkerContainer` に関するすべての {{domxref("ServiceWorkerRegistration")}} オブジェクトを配列で返します。 このメソッドは、{{domxref("ServiceWorkerRegistration")}} の配列に解決される {{jsxref("Promise")}} を返します。
- {{domxref("ServiceWorkerContainer.startMessages()")}}
  - : サービスワーカーからその制御下のページにディスパッチされるメッセージの流れを明示的に開始します（例えば、{{domxref("Client.postMessage()")}} を介して送信されます）。 これは、ページのコンテンツの読み込みが完了する前であっても、送信されたメッセージに早く反応するために使用できます。

## 例

以下の例では、まずブラウザーがサービスワーカーをサポートしているかどうかを確認します。 サポートしている場合、コードはサービスワーカーを登録し、ページがサービスワーカーによってアクティブに制御されているかどうかを判断します。 そうでない場合は、サービスワーカーが制御できるように、ページを再読み込みするようユーザーに求めます。 コードは、登録失敗も報告します。

```js
if ('serviceWorker' in navigator) {
  // デフォルトのスコープを使用して、
  // サイトのルートでホストされるサービスワーカーを登録します。
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log('サービスワーカー登録成功:', registration);

    // この時点で、オプションで registration に何かを行うことができます。
    // https://developer.mozilla.org/ja/docs/Web/API/ServiceWorkerRegistration を参照してください
  }).catch(function(error) {
    console.log('サービスワーカー登録失敗:', error);
  });

  // 登録状況に関係なく、
  // 現在のページが既存のサービスワーカーによって制御されているかどうか、
  // およびそのコントローラーがいつ変更されたかについての情報も表示しましょう。

  // まず、現在サービスワーカーが制御されているかどうか、
  // 1回限りのチェックを行います。
  if (navigator.serviceWorker.controller) {
    console.log('このページは現在サービスワーカーによって制御されています:', navigator.serviceWorker.controller);
  }

  // 次に、ハンドラーを登録して、新しいまたは更新された
  // サービスワーカーが制御を取得するタイミングを検出します。
  navigator.serviceWorker.oncontrollerchange = function() {
    console.log('このページは今サービスワーカーによって制御されています:', navigator.serviceWorker.controller);
  };
} else {
  console.log('サービスワーカーをサポートしていません。');
}
```

## 仕様

| 仕様                                                                                                             | 状態                                 | コメント |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Service Workers', '#serviceworkercontainer', 'ServiceWorkerContainer')}} | {{Spec2('Service Workers')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.ServiceWorkerContainer")}}

## 関連情報

- [Service worker の使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/sw-test)（英語）
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
- [Web worker の使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
