---
title: ServiceWorkerContainer
slug: Web/API/ServiceWorkerContainer
l10n:
  sourceCommit: 981e2d17e897c6280fd27364746a34d8560d30d1
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

**`ServiceWorkerContainer`** は[サービスワーカー API](/ja/docs/Web/API/Service_Worker_API) のインターフェイスで、ネットワークエコシステムの全体的な単位として、サービスワーカーを表すオブジェクトを提供します。これは、サービスワーカーの登録、登録解除、更新のための機能や、サービスワーカーの状態とそれらの登録状況にアクセスするための機能を備えています。

ここで最も重要なことは、サービスワーカーを登録するための {{domxref("ServiceWorkerContainer.register()")}} メソッドと、現在のページがアクティブに制御されているかどうかを判断するための {{domxref("ServiceWorkerContainer.controller")}} プロパティを公開していることです。

`ServiceWorkerContainer` オブジェクトは、ウィンドウスコープでは {{domxref("Navigator.serviceWorker")}} で、ワーカーでは {{domxref("WorkerNavigator.serviceWorker")}} を使用して公開されています（対応している場合。[ブラウザーの互換性](#ブラウザーの互換性)を確認してください）。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("ServiceWorkerContainer.controller")}} {{ReadOnlyInline}}
  - : 現在のページを制御するアクティブなサービスワーカーを表す {{domxref("ServiceWorker")}} オブジェクトです。このページにアクティブまたは起動中のサービスワーカーがない場合は `null` を返します。
- {{domxref("ServiceWorkerContainer.ready")}} {{ReadOnlyInline}}
  - : プロミス（{{jsxref('Promise')}}）を返します。これは現在のページに関連付けられている {{domxref("ServiceWorkerRegistration")}} で解決します。ただし、アクティブなサービスワーカーがある場合のみです。
    これは、サービスワーカーがアクティブになるまでコードの実行を遅らせる方法を提供します。

## インスタンスメソッド

- {{domxref("ServiceWorkerContainer.getRegistration()")}}
  - : 指定された文書 URL とスコープが一致する {{domxref("ServiceWorkerRegistration")}} オブジェクトを取得します。 このメソッドは、{{domxref("ServiceWorkerRegistration")}} または `undefined` に解決される {{jsxref("Promise")}} を返します。
- {{domxref("ServiceWorkerContainer.getRegistrations()")}}
  - : この `ServiceWorkerContainer` に関するすべての {{domxref("ServiceWorkerRegistration")}} オブジェクトを配列で返します。 このメソッドは、{{domxref("ServiceWorkerRegistration")}} の配列に解決される {{jsxref("Promise")}} を返します。
- {{domxref("ServiceWorkerContainer.register()")}}
  - : 指定された `scriptURL` の {{domxref("ServiceWorkerRegistration")}} を作成または更新します。
- {{domxref("ServiceWorkerContainer.startMessages()")}}
  - : サービスワーカーからその制御下のページに配信されるメッセージの流れ（例えば、{{domxref("Client.postMessage()")}} を介して送信されます）を明示的に開始します。 これは、ページのコンテンツの読み込みが完了する前であっても、送信されたメッセージに早く反応するために使用できます。

## イベント

- {{domxref("ServiceWorkerContainer/controllerchange_event", "controllerchange")}}
  - : 文書に関連する {{domxref("ServiceWorkerRegistration")}} が新しいアクティブ（{{domxref("ServiceWorkerRegistration.active","active")}}）ワーカーを取得すると発生します。
- {{domxref("ServiceWorkerContainer/message_event", "message")}}
  - : 着信メッセージを `ServiceWorkerContainer` オブジェクトが受信したときに発生します（例えば、{{domxref("MessagePort.postMessage()")}} 呼び出しを介して）。
- {{domxref("ServiceWorkerContainer/messageerror_event", "messageerror")}}
  - : 受信したメッセージが `ServiceWorkerContainer` オブジェクトによって（例えば {{domxref("MessagePort.postMessage()")}} の呼び出しを通じて）解釈できない場合に発生します。

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
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
