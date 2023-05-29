---
title: DedicatedWorkerGlobalScope
slug: Web/API/DedicatedWorkerGlobalScope
l10n:
  sourceCommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{APIRef("Web Workers API")}}

**`DedicatedWorkerGlobalScope`** オブジェクト（{{domxref("Worker")}} グローバルスコープ）は、 {{domxref("window.self","self")}} キーワードでアクセスできます。一部の追加のグローバル関数、名前空間オブジェクト、コンストラクターは、通常はワーカーのグローバルスコープに関連付けられていませんが、利用することができ、 [JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference)に列挙されています。[ワーカーで利用できる機能](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)も参照してください。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスは {{domxref("WorkerGlobalScope")}}、またその親の {{domxref("EventTarget")}} インターフェイスからプロパティを継承しています。_

- {{domxref("DedicatedWorkerGlobalScope.name")}} {{ReadOnlyInline}}
  - : {{domxref("Worker")}} が {{domxref("Worker.Worker", "Worker()")}} コンストラクターを使用して作成されたときに、（オプションで）指定された名前です。これは主にデバッグのために使用されます。

### WorkerGlobalScope から継承したプロパティ

- {{domxref("WorkerGlobalScope.self")}}
  - : `DedicatedWorkerGlobalScope` オブジェクト自身のオブジェクト参照を返します。
- {{domxref("WorkerGlobalScope.console")}} {{ReadOnlyInline}}
  - : このワーカーに関連付けられた {{domxref("console")}} を返します。
- {{domxref("WorkerGlobalScope.location")}} {{ReadOnlyInline}}
  - : このワーカーに関連付けられた {{domxref("WorkerLocation")}} を返します。 `WorkerLocation` は特化された location オブジェクトであり、閲覧スコープの {{domxref("Location")}} のほぼサブセットですが、ワーカーに適合したものです。
- {{domxref("WorkerGlobalScope.navigator")}} {{ReadOnlyInline}}
  - : このワーカーに関連付けられた {{domxref("WorkerNavigator")}} を返します。 `WorkerNavigator` は特化された navigator オブジェクトであり、閲覧スコープの {{domxref("Navigator")}} のほぼサブセットですが、ワーカーに適合したものです。
- {{domxref("WorkerGlobalScope.performance")}} {{ReadOnlyInline}} {{Non-standard_inline}}
  - : このワーカーに関連付けられた {{domxref("Performance")}} オブジェクトを返します。これは通常の performance オブジェクトですが、利用できるプロパティやメソッドはサブセットです。

## インスタンスメソッド

_このインターフェイスは {{domxref("WorkerGlobalScope")}}、またその親の {{domxref("EventTarget")}} インターフェイスからメソッドを継承しています。_

- {{domxref("DedicatedWorkerGlobalScope.close()")}}
  - : `WorkerGlobalScope` のイベントループでキューに入れられたタスクを破棄し、この特定のスコープを具体的に閉じます。

### WorkerGlobalScope から継承したもの

- {{domxref("WorkerGlobalScope.dump()")}} {{non-standard_inline}}
  - : メッセージをコンソールに書き込みます。
- {{domxref("WorkerGlobalScope.importScripts()")}}
  - : 1 つ以上のスクリプトをワーカーのスコープにインポートします。カンマで区切っていくつでも指定することができます。例えば `importScripts('foo.js', 'bar.js');` のようにします。

### 他の場所から実装したもの

- {{domxref("atob", "atob()")}}
  - : base-64 エンコードを使用してエンコードされている文字列をデコードします。
- {{domxref("btoa", "btoa()")}}
  - : バイナリーデータの文字列から、 base-64 でエンコードされた ASCII 文字列を作成します。
- {{domxref("clearInterval()")}}
  - : {{domxref("setInterval()")}} を使用して設定された繰り返し実行を取り消します。
- {{domxref("clearTimeout()")}}
  - : {{domxref("setTimeout()")}} を使用して設定された繰り返し実行を取り消します。
- {{domxref("setInterval()")}}
  - : X ミリ秒ごとに関数を実行するようスケジューリングします。
- {{domxref("setTimeout()")}}
  - : 関数の実行の遅延を設定します。

## イベント

- [`message`](/ja/docs/Web/API/DedicatedWorkerGlobalScope/message_event)
  - : ワーカーが親からメッセージを受け取ったときに発行されます。
- [`messageerror`](/ja/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
  - : ワーカーがデシリアライズできないメッセージを受け取ったときに発行されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- {{domxref("Worker")}}
- {{domxref("WorkerGlobalScope")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
- [ワーカーで使用できる関数](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
