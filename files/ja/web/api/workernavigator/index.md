---
title: WorkerNavigator
slug: Web/API/WorkerNavigator
l10n:
  sourceCommit: 579788ba8fe61b6c7dddaec09dee7b33d6548a4d
---

{{APIRef("Web Workers API")}}

**`WorkerNavigator`** インターフェイスは {{DOMxRef("Navigator")}} インターフェイスのサブセットで、ワーカー ({{DOMxRef("Worker")}}) からアクセスできるものです。このようなオブジェクトはワーカーごとに初期化され、 {{DOMxRef("WorkerGlobalScope.navigator", "self.navigator")}} プロパティを介して利用できます。

## インスタンスプロパティ

_`WorkerNavigator` インターフェイスは何もプロパティを継承していません。_

- {{DOMxRef("WorkerNavigator.appCodeName")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : どのブラウザーでも常に `'Mozilla'` を返します。このプロパティは互換性のためだけに残されています。
- {{DOMxRef("WorkerNavigator.appName")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : ブラウザーの正式名称を返します。このプロパティが正しい値を返すことに頼らないでください。
- {{DOMxRef("WorkerNavigator.appVersion")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : ブラウザー のバージョンを文字列で返します。このプロパティが正しい値を返すことに頼らないでください。
- {{DOMxRef("WorkerNavigator.connection")}} {{ReadOnlyInline}}
  - : 端末のネットワーク接続に関する情報を格納した {{DOMxRef("NetworkInformation")}} オブジェクトを提供します。
- {{domxref("WorkerNavigator.globalPrivacyControl")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : ユーザーの情報の共有や販売への同意状況を表す論理値を返します。
- {{domxref("WorkerNavigator.gpu")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 現在のワーカーコンテキスト用の {{domxref("GPU")}} オブジェクトを返します。{{domxref("WebGPU_API", "WebGPU API", "", "nocode")}} のエントリーポイントです。
- {{DOMxRef("WorkerNavigator.hardwareConcurrency")}} {{ReadOnlyInline}}
  - : 利用可能な論理プロセッサーコアの数を返します。
- {{DOMxRef("WorkerNavigator.language")}} {{ReadOnlyInline}}
  - : ユーザーの環境設定言語（通常はブラウザー UI の言語）を表す文字列を返します。不明な場合は `null` 値を返します。
- {{DOMxRef("WorkerNavigator.languages")}} {{ReadOnlyInline}}
  - : ユーザーが知っている言語を、環境設定の順に文字列の配列で返します。
- {{DOMxRef("WorkerNavigator.locks")}} {{ReadOnlyInline}}
  - : 新しい {{DOMxRef("LockManager")}} オブジェクトをリクエストしたり、既存の {{DOMxRef('Lock')}} オブジェクトを問い合わせるためのメソッドを提供する `Lock` オブジェクトを返します。
- {{DOMxRef("WorkerNavigator.mediaCapabilities")}} {{ReadOnlyInline}}
  - : 指定の形式のデコードおよびエンコードの能力と、出力の能力に関する情報を参照可能にする {{domxref("MediaCapabilities")}} オブジェクトを返します。
- {{DOMxRef("WorkerNavigator.onLine")}} {{ReadOnlyInline}}
  - : ブラウザーがオンラインであるかどうかを示す論理値を返します。
- {{DOMxRef("WorkerNavigator.permissions")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : {{DOMxRef("Permissions")}} オブジェクトを返します。これは、[権限 API](/ja/docs/Web/API/Permissions_API) が定める API の権限状態を問い合わせたり更新したりするために使用できます。
- {{DOMxRef("WorkerNavigator.platform")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : ブラウザーのプラットフォームを表す文字列を返します。このプロパティが正しい値を返すことに頼らないでください。
- {{DOMxRef("WorkerNavigator.product")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : どのブラウザーでも常に `'Gecko'` を返します。このプロパティは互換性のためにのみ残されています。
- {{domxref("WorkerNavigator.serial")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : シリアルポートを制御するための{{domxref("Web Serial API", "ウェブシリアル API", "", 1)}} へのエントリーポイントを表す {{domxref("Serial")}} オブジェクトを返します。
- {{DOMxRef("WorkerNavigator.storage")}} {{ReadOnlyInline}}
  - : 永続化の権限を管理し、利用できるストレージを推定するための {{DOMxRef('StorageManager')}} インターフェイスを返します。
- {{DOMxRef("WorkerNavigator.userAgent")}} {{ReadOnlyInline}}
  - : 現在のブラウザーのユーザーエージェント文字列を返します。
- {{domxref("WorkerNavigator.userAgentData")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : ユーザーのブラウザーとオペレーティングシステムに関する情報にアクセスするための {{domxref("NavigatorUAData")}} オブジェクトを返します。

## インスタンスメソッド

_`WorkerNavigator` インターフェイスは何もメソッドを継承または実装していません。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他のワーカーに関するインターフェイス: {{DOMxRef("Worker")}}, {{DOMxRef("WorkerLocation")}}, {{DOMxRef("WorkerGlobalScope")}}
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
