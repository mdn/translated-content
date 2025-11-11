---
title: Cookie Store API
slug: Web/API/Cookie_Store_API
l10n:
  sourceCommit: e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{securecontext_header}}{{DefaultAPISidebar("Cookie Store API")}}{{SeeCompatTable}}

_**Cookie Store API**_ は Cookie を管理するための非同期 API を提供し、同時に Cookie を [Service Worker API](/ja/docs/Web/API/Service_Worker_API) から参照できるようにします。

## 概念と使用法

Cookie の取得や設定を行うこれまでの方法は、文字列であるキーと値のペアとして {{domxref("document.cookie")}} を扱うことでした。面倒で間違えやすい上に、モダンなウェブ開発の文脈では問題のもとになります。

`document.cookie` インターフェイスは{{Glossary("synchronous", "同期的")}}で、シングルスレッドで、イベントループをブロックします。Cookie に書き込みを行うとき、ブラウザーがすべての Cookie の文字列を更新するまで待たなければいけません。さらに、{{domxref("document")}} に依存しているので、`document` オブジェクトにアクセスできないサービスワーカーからは Cookie にアクセスできません。

_Cookie Store API_ は、Cookie を管理する新しい方法を提供します。これは{{Glossary("asynchronous", "非同期的")}}でプロミスベースなので、イベントループをブロックしません。{{domxref("document")}} に依存していないため、サービスワーカーから利用可能です。Cookie の取得や設定を行うメソッドは、エラーメッセージにより、より多くのフィードバックを提供します。これにより、ウェブ開発者は Cookie を設定した直後に読み込みを行って設定に成功したかを確認しなくてよくなります。

## インターフェイス

- {{domxref("CookieStore")}}
  - : `CookieStore` インターフェイスは、Cookie の取得や設定を可能にします。
- {{domxref("CookieStoreManager")}}
  - : `CookieStoreManager` インターフェイスは、サービスワーカーが Cookie 変更イベントを購読できるよう、サービスワーカーの登録を提供します。
- {{domxref("CookieChangeEvent")}}
  - : `change` という名前の `CookieChangeEvent` は、スクリプトから参照可能な Cookie の変更が何か起こると、{{domxref("Window")}} コンテキストの `CookieStore` オブジェクトで発行されます。
- {{domxref("ExtendableCookieChangeEvent")}}
  - : `change` という名前の `ExtendableCookieChangeEvent` は、スクリプトから参照可能かつサービスワーカーの Cookie 変更購読リストにマッチする Cookie の変更が何か起こると、{{domxref("ServiceWorkerGlobalScope")}} イベントで発行されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
