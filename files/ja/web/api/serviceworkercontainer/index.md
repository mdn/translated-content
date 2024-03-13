---
title: ServiceWorkerContainer
slug: Web/API/ServiceWorkerContainer
l10n:
  sourceCommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{APIRef("Service Workers API")}}

`ServiceWorkerContainer` は[サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)のインターフェイスで、ネットワークエコシステムの全体的な単位として、サービスワーカーを表すオブジェクトを提供します。 サービスワーカーは、サービスワーカーの登録、登録解除、更新のための機能や、サービスワーカーの状態とそれらの登録状況にアクセスするための機能を備えています。

ここで最も重要なことは、サービスワーカーを登録するための {{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register()")}} メソッドと、現在のページがアクティブに制御されているかどうかを判断するための {{domxref("ServiceWorkerContainer.controller")}} プロパティを公開していることです。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("ServiceWorkerContainer.controller")}} {{ReadOnlyInline}}
  - : {{domxref("ServiceWorker")}} オブジェクトの状態が `activating` または `activated` の場合、それを返します（{{domxref("ServiceWorkerRegistration.active")}} によって返されるのと同じオブジェクトです）。このプロパティは、強制再読み込みのリクエスト中（_Shift_ + 再読み込み）、またはアクティブワーカーがない場合は `null` を返します。
- {{domxref("ServiceWorkerContainer.ready")}} {{ReadOnlyInline}}
  - : サービスワーカーがアクティブになるまでコードの実行を遅らせる方法を提供します。 決して拒否せず、現在のページに関連付けられている {{domxref("ServiceWorkerRegistration")}} に {{domxref("ServiceWorkerRegistration.active")}} ワーカーが存在するようになるまで無期限に待機する {{jsxref("Promise")}} を返します。 その条件が満たされると、{{domxref("ServiceWorkerRegistration")}} で解決されます。

## イベント

- [`controllerchange`](/ja/docs/Web/API/ServiceWorkerContainer/controllerchange_event)
  - : 文書に関連する {{domxref("ServiceWorkerRegistration")}} が新しいアクティブ（{{domxref("ServiceWorkerRegistration.active","active")}}）ワーカーを取得すると発生します。
- [`error`](/ja/docs/Web/API/ServiceWorkerContainer/error_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 関連するサービスワーカーでエラーが発生するたびに発生します。
- [`message`](/ja/docs/Web/API/ServiceWorkerContainer/message_event)
  - : 着信メッセージを {{domxref("ServiceWorkerContainer")}} オブジェクトが受信したときに発生します（例えば、{{domxref("MessagePort.postMessage()")}} 呼び出しを介して）。

## インスタンスメソッド

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
if ("serviceWorker" in navigator) {
  // デフォルトのスコープを使用して、
  // サイトのルートでホストされるサービスワーカーを登録します。
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      console.log("サービスワーカー登録成功:", registration);

      // この時点で、オプションで registration に何かを行うことができます。
      // https://developer.mozilla.org/ja/docs/Web/API/ServiceWorkerRegistration を参照してください
    })
    .catch((error) => {
      console.error(`サービスワーカー登録失敗: ${error}`);
    });

  // 登録状況に関係なく、
  // 現在のページが既存のサービスワーカーによって制御されているかどうか、
  // およびそのコントローラーがいつ変更されたかについての情報も表示しましょう。

  // まず、現在サービスワーカーが制御されているかどうか、
  // 1 回限りのチェックを行います。
  if (navigator.serviceWorker.controller) {
    console.log(
      "このページは現在サービスワーカーによって制御されています:",
      navigator.serviceWorker.controller,
    );
  }

  // 次に、ハンドラーを登録して、新しいまたは更新された
  // サービスワーカーが制御を取得するタイミングを検出します。
  navigator.serviceWorker.oncontrollerchange = () => {
    console.log(
      "このページは次のものが制御しています。",
      navigator.serviceWorker.controller,
    );
  };
} else {
  console.log("サービスワーカーに対応していません。");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [サービスワーカーの基本的なコード例](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [ServiceWorker の準備はできていますか？](https://jakearchibald.github.io/isserviceworkerready/)（英語）
- {{jsxref("Promise")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
