---
title: DedicatedWorkerGlobalScope
slug: Web/API/DedicatedWorkerGlobalScope
l10n:
  sourceCommit: e6457c34ac16790d4e62bc9ba21e899ac560089c
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

**`DedicatedWorkerGlobalScope`** オブジェクト（{{domxref("Worker")}} グローバルスコープ）は、 {{domxref("WorkerGlobalScope.self","self")}} キーワードでアクセスできます。一部の追加のグローバル関数、名前空間オブジェクト、コンストラクターは、通常はワーカーのグローバルスコープに関連付けられていませんが、利用することができ、 [JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference)に列挙されています。[ワーカーで利用できる機能](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)も参照してください。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスは {{domxref("WorkerGlobalScope")}}、またその親の {{domxref("EventTarget")}} インターフェイスからプロパティを継承しています。_

- {{domxref("DedicatedWorkerGlobalScope.name")}} {{ReadOnlyInline}}
  - : {{domxref("Worker")}} が {{domxref("Worker.Worker", "Worker()")}} コンストラクターを使用して作成されたときに、（オプションで）指定された名前です。これは主にデバッグのために使用されます。

## インスタンスメソッド

_このインターフェイスは {{domxref("WorkerGlobalScope")}}、またその親の {{domxref("EventTarget")}} インターフェイスからメソッドを継承しています。_

- {{domxref("DedicatedWorkerGlobalScope.close()")}}
  - : `WorkerGlobalScope` のイベントループでキューに入れられたタスクを破棄し、この特定のスコープを具体的に閉じます。
- {{domxref("DedicatedWorkerGlobalScope.postMessage()")}}
  - : メッセージ（あらゆる JavaScript オブジェクトで構成可能）を、ワーカーを最初に生成した親ドキュメントに送信します。
- {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()")}}
  - : 以前に {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()", "requestAnimationFrame()")}} を呼び出してスケジュールされたアニメーションフレームリクエストを取り消します。
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
  - : アニメーションフレームリクエストを実行し、次の再描画の前にユーザー提供のコールバック関数を呼び出します。

## イベント

このイベントを待ち受けするには、 {{domxref("EventTarget/addEventListener()", "addEventListener()")}} などのメソッドで使用するか、このインターフェイスの `onイベント名` プロパティにイベントリスナー設定するかしてください。

- {{domxref("DedicatedWorkerGlobalScope/message_event", "message")}}
  - : ワーカーが親からメッセージを受け取ったときに発行されます。
- {{domxref("DedicatedWorkerGlobalScope/messageerror_event", "messageerror")}}
  - : ワーカーがデシリアライズできないメッセージを受け取ったときに発行されます。
- {{domxref("DedicatedWorkerGlobalScope/rtctransform_event", "rtctransform")}}
  - : エンコードされた動画または音声フレームが {{domxref("WebRTC API/Using Encoded Transforms", "WebRTC エンコード変換", "", "nocode")}}で処理するためにキューに入れられたときに発行されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- {{domxref("Worker")}}
- {{domxref("WorkerGlobalScope")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
- [ワーカーで使用できる関数](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
