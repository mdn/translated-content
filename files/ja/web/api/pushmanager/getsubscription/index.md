---
title: PushManager.getSubscription()
slug: Web/API/PushManager/getSubscription
tags:
  - API
  - Experimental
  - Method
  - PushManager
  - Reference
  - Service Workers
translation_of: Web/API/PushManager/getSubscription
---
<p>{{SeeCompatTable}}{{ApiRef("Push API")}}</p>

<p>{{domxref("PushManager")}} インターフェースの <strong><code>PushManager.getSubscription()</code></strong> メソッドは、既存のプッシュサブスクリプションを取得します。</p>

<p>これは既存のプッシュサブスクリプションの詳細を含む {{domxref("PushSubscription")}} を解決する {{jsxref("Promise")}} を返します。既存のプッシュサブスクリプションが存在しない場合 <code>null</code> 値で解決されます。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js" style="font-size: 14px;">​PushManager.getSubscription().then(function(pushSubscription) { ... } );</pre>

<h3 id="パラメーター">パラメーター</h3>

<p>なし。</p>

<h3 id="戻り値">戻り値</h3>

<p>{{domxref("PushSubscription")}} オブジェクトで解決される {{jsxref("Promise")}}。</p>

<h2 id="例">例</h2>

<p>このコードスニペットは、<a href="https://github.com/GoogleChrome/samples/blob/gh-pages/push-messaging-and-notifications">push messaging and notification sample </a>から取ってきました（使用できるライブデモはありません）。</p>

<pre class="brush: js" style="font-size: 14px;">// サブスクリプションをチェックするために、service worker の登録が必要である。
  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    // 既にプッシュメッセージサブスクリプションがあるか？
    serviceWorkerRegistration.pushManager.getSubscription()
      .then(function(subscription) {
        // プッシュメッセージからサブスクライブ ／ アンサブスクライブ
        // する任意の UI を有効にする
        var pushButton = document.querySelector('.js-push-button');
        pushButton.disabled = false;

        if (!subscription) {
          // プッシュを購読していない場合、ユーザーがプッシュできるように
          // UI を設定する。
          return;
        }

        // 最新の subscriptionId でサーバ同期を維持する。
        sendSubscriptionToServer(subscription);

        showCurlCommand(subscription);

        // プッシュメッセージの購読を表示するために
        // UI を設定する。
        pushButton.textContent = 'Disable Push Messages';
        isPushEnabled = true;
      })
      .catch(function(err) {
        window.Demo.debug.log('Error during getSubscription()', err);
      });
  });
}</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Push API', '#widl-PushManager-getSubscription-Promise-PushSubscription', 'getSubscription()')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td>初期定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.PushManager.getSubscription")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Push_API/Using_the_Push_API">Using the Push API</a></li>
</ul>
