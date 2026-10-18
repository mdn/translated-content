---
title: "ServiceWorkerRegistration: scope プロパティ"
short-title: scope
slug: Web/API/ServiceWorkerRegistration/scope
l10n:
  sourceCommit: e9b95b3735a9e928fbdf3fe0a9f69c420b44cd79
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`scope`** は {{domxref("ServiceWorkerRegistration")}} インターフェイスの読み取り専用プロパティで、サービスワーカーの登録スコープ、つまりサービスワーカーが制御できる URL の範囲を定義する URL を表す文字列を返します。これは、サービスワーカーを登録した {{domxref('ServiceWorkerContainer.register()')}} の呼び出しで指定された `scope` 引数を使用して設定されます。

## 値

サービスワーカーの登録範囲を定義する URL を表す文字列を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) <sup>(英語)</sup>
- [ウェブワーカーの使用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)
