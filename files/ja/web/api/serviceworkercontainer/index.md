---
title: ServiceWorkerContainer
slug: Web/API/ServiceWorkerContainer
tags:
  - API
  - Interface
  - Offline
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorkerContainer
  - Workers
translation_of: Web/API/ServiceWorkerContainer
---
<p>{{APIRef("Service Workers API")}}</p>

<p><span class="seoSummary"><a href="/ja/docs/Web/API/Service_Worker_API">Service Worker API</a> の <code>ServiceWorkerContainer</code> インターフェイスは、ネットワークエコシステムの全体的な単位として、サービスワーカーを表すオブジェクトを提供します。 サービスワーカーは、サービスワーカーの登録、登録解除、更新のための機能や、サービスワーカーの状態とそれらの登録状況にアクセスするための機能を備えています。</span></p>

<p>ここで最も重要なことは、サービスワーカーを登録するための {{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register()")}} メソッドと、現在のページがアクティブに制御されているかどうかを判断するための {{domxref("ServiceWorkerContainer.controller")}} プロパティを公開していることです。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("ServiceWorkerContainer.controller")}} {{readonlyinline}}</dt>
 <dd>{{domxref("ServiceWorker")}} オブジェクトの状態が <code>activating</code> または <code>activated</code> の場合、それを返します（{{domxref("ServiceWorkerRegistration.active")}} によって返されるのと同じオブジェクト）。 このプロパティは、強制リフレッシュのリクエスト中（<em>Shift</em> + リフレッシュ）、またはアクティブワーカーがない場合は <code>null</code> を返します。</dd>
</dl>

<dl>
 <dt>{{domxref("ServiceWorkerContainer.ready")}} {{readonlyinline}}</dt>
 <dd>サービスワーカーがアクティブになるまでコードの実行を遅らせる方法を提供します。 決して拒否せず、現在のページに関連付けられている {{domxref("ServiceWorkerRegistration")}} に {{domxref("ServiceWorkerRegistration.active")}} ワーカーが存在するようになるまで無期限に待機する {{jsxref("Promise")}} を返します。 その条件が満たされると、{{domxref("ServiceWorkerRegistration")}} で解決されます。</dd>
</dl>

<h2 id="Events" name="Events">イベント</h2>

<dl>
 <dt><code>controllerchange</code></dt>
 <dd>文書に関連する {{domxref("ServiceWorkerRegistration")}} が新しいアクティブ（{{domxref("ServiceWorkerRegistration.active","active")}}）ワーカーを取得すると発生します。<br>
 {{domxref("ServiceWorkerContainer.oncontrollerchange")}} プロパティからも利用できます。</dd>
 <dt><code>error</code></dt>
 <dd> 関連するサービスワーカーでエラーが発生するたびに発生します。<br>
 {{domxref("ServiceWorkerContainer.onerror")}} プロパティからも利用できます。</dd>
 <dt><code><a href="/ja/docs/Web/API/ServiceWorkerContainer/message_event">message</a></code></dt>
 <dd>着信メッセージを {{domxref("ServiceWorkerContainer")}} オブジェクトが受信したときに発生します（例えば、{{domxref("MessagePort.postMessage()")}} 呼び出しを介して）。<br>
 {{domxref("ServiceWorkerContainer.onmessage")}} プロパティからも利用できます。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register()")}}</dt>
 <dd>指定された <code>scriptURL</code> の {{domxref("ServiceWorkerRegistration")}} を作成または更新します。</dd>
 <dt>{{domxref("ServiceWorkerContainer.getRegistration()")}}</dt>
 <dd>指定された文書 URL とスコープが一致する {{domxref("ServiceWorkerRegistration")}} オブジェクトを取得します。 このメソッドは、{{domxref("ServiceWorkerRegistration")}} または <code>undefined</code> に解決される {{jsxref("Promise")}} を返します。</dd>
 <dt>{{domxref("ServiceWorkerContainer.getRegistrations()")}}</dt>
 <dd><code>ServiceWorkerContainer</code> に関するすべての {{domxref("ServiceWorkerRegistration")}} オブジェクトを配列で返します。 このメソッドは、{{domxref("ServiceWorkerRegistration")}} の配列に解決される {{jsxref("Promise")}} を返します。</dd>
 <dt>{{domxref("ServiceWorkerContainer.startMessages()")}}</dt>
 <dd>サービスワーカーからその制御下のページにディスパッチされるメッセージの流れを明示的に開始します（例えば、{{domxref("Client.postMessage()")}} を介して送信されます）。 これは、ページのコンテンツの読み込みが完了する前であっても、送信されたメッセージに早く反応するために使用できます。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>以下の例では、まずブラウザーがサービスワーカーをサポートしているかどうかを確認します。 サポートしている場合、コードはサービスワーカーを登録し、ページがサービスワーカーによってアクティブに制御されているかどうかを判断します。 そうでない場合は、サービスワーカーが制御できるように、ページを再読み込みするようユーザーに求めます。 コードは、登録失敗も報告します。</p>

<pre class="brush: js notranslate">if ('serviceWorker' in navigator) {
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
}</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#serviceworkercontainer', 'ServiceWorkerContainer')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.ServiceWorkerContainer")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a class="external external-icon" href="https://github.com/mdn/sw-test">サービスワーカーの基本的なコード例</a>（英語）</li>
 <li><a class="external external-icon" href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li>{{jsxref("Promise")}}</li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API/Using_web_workers">Web worker の使用</a></li>
</ul>
