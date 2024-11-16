---
title: NavigationPreloadManager
slug: Web/API/NavigationPreloadManager
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

**`NavigationPreloadManager`** は[サービスワーカー API](/ja/docs/Web/API/Service_Worker_API) のインターフェイスで、サービスワーカーによるリソースの事前読み込みを管理するためのメソッドを提供します。

対応していれば、この型のオブジェクトは {{domxref("ServiceWorkerRegistration.navigationPreload")}} によって返されます。
事前読み込みフェッチリクエストの結果は、{{domxref("FetchEvent.preloadResponse")}} によって返されたプロミスを使用して待ちます。

## メソッド

- {{domxref("NavigationPreloadManager.enable()")}}
  - : ナビゲーションの事前読み込みを有効にし、{{jsxref('undefined')}} で解決する {{jsxref("Promise")}} を返します。
- {{domxref("NavigationPreloadManager.disable()")}}
  - : ナビゲーションの事前読み込みを無効にし、{{jsxref('undefined')}} で解決する {{jsxref("Promise")}} を返します。
- {{domxref("NavigationPreloadManager.setHeaderValue()")}}
  - : `Service-Worker-Navigation-Preload` ヘッダーの値を設定し、空の {{jsxref("Promise")}} を返します。
- {{domxref("NavigationPreloadManager.getState()")}}
  - : 事前読み込みが有効かどうかと、HTTP の {{HTTPHeader("Service-Worker-Navigation-Preload")}} の内容を示すプロパティを持つオブジェクトに解決する {{jsxref("Promise")}} を返します。

## 解説

サービスワーカーは、指定されたスコープ内のページに対して、サイトの代理として {{domxref("Window/fetch", "fetch()")}} イベントを処理します。
ユーザーがサービスワーカーを使用するページに移動すると、ブラウザーは（まだ実行していなければ）ワーカーを起動し、フェッチイベントを送信して結果を待ちます。
イベントを受信すると、キャッシュにリソースが存在する場合はそれを返します。存在しない場合はリモートサーバーからリソースを取得します（将来のリクエストで返すためのコピーを保存します）。

サービスワーカーは、起動するまでブラウザーからのイベントを処理できません。
これは避けられませんが、通常は大きな影響はありません。
サービスワーカーは、多くの場合、すでに開始されています（他にもリクエストされた処理が完了する時点までアクティブな状態が続きます）。
サービスワーカーが起動しなければならない場合でも、多くの場合、キャッシュから値が返されるため、非常に高速です。
しかし、リモートリソースを取得し始める前にワーカーが起動しなければならない場合、遅延は著しくなる可能性があります。

`NavigationPreloadManager` には、サービスワーカーの起動時にリソースを並列して取得するメカニズムが用意されており、これにより、ワーカーがブラウザーからのフェッチリクエストを処理できるまでに、リソースがすでに完全に、または部分的にダウンロードされている状態にすることができます。
これにより、ワーカーがすでに開始されている場合と「同程度」に悪い状態で開始される場合、場合によってはそれよりも良い状態で開始される場合があります。

事前読み込みマネージャーは、事前読み込みリクエストに HTTP の {{HTTPHeader("Service-Worker-Navigation-Preload")}} ヘッダーを送信し、事前読み込みリクエストに対するレスポンスをカスタマイズできるようにします。
例えば、元のページの一部だけに送信されるデータを削減したり、ユーザーのログイン状態に基づいてレスポンスをカスタマイズしたりするために使用できます。

## 例

この例は [Speed up Service Worker with Navigation Preloads](https://web.dev/blog/navigation-preload) (developer.chrome.com) から取ったものです。

#### ナビゲーションの事前読み込みの機能を検出して有効化

下記では、最初の {{domxref("ServiceWorkerRegistration.navigationPreload")}} を使用して、この機能に対応してしているかどうかを判断した後、サービスワーカーの activate イベントハンドラーでナビゲーションの事前読み込みを有効にしています（この関数は、サービスワーカー用の `NavigationPreloadManager` を返すか、機能に対応していない場合は `undefined` を返します）。

```js
addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      if (self.registration.navigationPreload) {
        // ナビゲーションの事前読み込みを有効にします！
        await self.registration.navigationPreload.enable();
      }
    })(),
  );
});
```

#### 事前読み込みされたレスポンスの使用

次のコードは、事前読み込みされたレスポンス ({{domxref("FetchEvent.preloadResponse")}}) を使用するサービスワーカーのフェッチイベントハンドラーを示しています。

`fetch` イベントハンドラーは、{{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}} を呼び出して、コントロールするページにプロミスを渡すと、このプロミスはリクエストされたリソースで解決されます。リソースは、キャッシュ、事前読み込みされたフェッチリクエスト、または新しいネットワークリクエストから取得されます。

この {{domxref("Cache")}} オブジェクトに一致する URL リクエストがある場合、コードはキャッシュからレスポンスを取得するための解決済みのプロミスを返します。
キャッシュに一致するものがなかった場合、コードは解決済みの事前読み込みレスポンス ({{domxref("FetchEvent.preloadResponse")}}) を返します。
一致するキャッシュ項目または事前読み込みレスポンスがなかった場合、コードはネットワークから新しい読み取り操作を開始し、その読み取り操作のための（未解決の）プロミスを返します。

```js
addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      // 可能なら、キャッシュから応答します
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) return cachedResponse;

      // それがなく、事前読み込みされたレスポンスがあれば、それを使用します
      const response = await event.preloadResponse;
      if (response) return response;

      // それもなければ、ネットワークを試します。
      return fetch(event.request);
    })(),
  );
});
```

### 独自のレスポンス

ブラウザーは、事前読み込みリクエストに HTTP の {{HTTPHeader("Service-Worker-Navigation-Preload")}} ヘッダーを、既定で `true` のディレクティブ値で送信します。
これにより、サーバーは通常のフェッチリクエストと事前読み込みフェッチリクエストを区別し、必要に応じてそれぞれ異なるレスポンスを送信することができます。

> [!NOTE]
> 事前読み込みと通常のフェッチ操作で異なるレスポンスを返すことができる場合、サーバーは確実に異なるレスポンスがキャッシュされるように `Vary: Service-Worker-Navigation-Preload` を設定する必要があります。

{{domxref("NavigationPreloadManager.setHeaderValue()")}} を使用してヘッダー値を変更し、先読み操作に追加のコンテキストを提供することができます。
例えば、最近キャッシュされたリソースの ID を値として設定すると、サーバーは実際に必要とされるまでリソースを返さなくなります。
同様に、Cookie を使用する代わりに、認証ステータスに基づいて返値を構成することもできます。

下記のコードは、ヘッダーディレクティブの値を、変数 `newValue` に設定する方法を示しています。

```js
navigator.serviceWorker.ready
  .then((registration) =>
    registration.navigationPreload.setHeaderValue(newValue),
  )
  .then(() => {
    console.log("Done!");
  });
```

[Speed up Service Worker with Navigation Preloads > Custom responses for preloads](https://web.dev/blog/navigation-preload) は、記事のウェブページのレスポンスがキャッシュされたヘッダーとフッターから構築されるサイトの、より完全な例を提供します。これにより、記事コンテンツのみが先読みされるように返されます。

### 状態の取得

{{domxref("NavigationPreloadManager.getState()")}} を使用すると、ナビゲーションの事前読み込みが有効になっているかどうかを調べ、事前読み込みリクエストに対して HTTP の {{HTTPHeader("Service-Worker-Navigation-Preload")}} ヘッダーにどのようなディレクティブ値が送信されているかを判断することができます。

下記コードは、状態オブジェクトに解決するプロミスを取得し、結果をログ出力する方法を示しています。

```js
navigator.serviceWorker.ready
  .then((registration) => registration.navigationPreload.getState())
  .then((state) => {
    console.log(state.enabled); // boolean
    console.log(state.headerValue); // string
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Speed up Service Worker with Navigation Preloads](https://web.dev/blog/navigation-preload) (developer.chrome.com)
