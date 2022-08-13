---
title: PushSubscription.getKey()
slug: Web/API/PushSubscription/getKey
tags:
  - API
  - Experimental
  - Method
  - Non-standard
  - Push
  - Push API
  - PushSubscription
  - Reference
  - Service Workers
  - getKey
translation_of: Web/API/PushSubscription/getKey
---
<p>{{SeeCompatTable}}{{APIRef("Push API")}}</p>

<p>{{domxref("PushSubscription")}} インターフェースの <code>getKey()</code> メソッドは、サーバに送信されてプッシュメッセージデータを暗号化するために使用される、クライアントパブリックキーを表す {{domxref("ArrayBuffer")}} を返します。</p>

<div class="note">
<p><strong>ノート</strong>： 現在、Firefox のみの実装であり、まだ　Push API 仕様には含まれていません。</p>
</div>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">​<span class="pl-k">var</span> key <span class="pl-k">=</span> subscription.getKey(<span class="pl-s"><span class="pl-pds">method</span></span>);</pre>

<h3 id="パラメーター">パラメーター</h3>

<dl>
 <dt>method</dt>
 <dd>クライアントパブリックキーの生成に使用される暗号化メソッドです。現在、<code>p256dh</code>のみがオプションです。メソッドには次の値がが選べます：
 <ul>
  <li><code>p256dh</code>： P-256 曲線の <a href="https://ja.wikipedia.org/wiki/%E6%A5%95%E5%86%86%E6%9B%B2%E7%B7%9A%E3%83%87%E3%82%A3%E3%83%95%E3%82%A3%E3%83%BC%E3%83%BB%E3%83%98%E3%83%AB%E3%83%9E%E3%83%B3%E9%8D%B5%E5%85%B1%E6%9C%89">楕円曲線ディフィー・ヘルマン鍵共有</a>（つまり、NIST secp256r1 楕円曲線）。結果としてられるキーは、ANSI X9.62 フォーマットで非圧縮ポイントとなります。</li>
 </ul>
 </dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<p>{{domxref("ArrayBuffer")}}。</p>

<h2 id="例">例</h2>

<p><a href="https://github.com/chrisdavidmills/push-api-demo/blob/gh-pages/main.js#L51-L116">Push API デモ</a>では、プッシュメッセージデータの暗号化と<a href="https://github.com/chrisdavidmills/push-api-demo/blob/gh-pages/server.js">サーバ</a>から特定のサブスクライバにプッシュメッセージを送信するために必要な認証を得るために、getKey('p256dh') と {{domxref("PushSubscription.endpoint")}} を呼び出しています。</p>

<pre>reg.pushManager.getSubscription()
  .then(function(subscription) {
  // プッシュメッセージからサブスクライブ ／ アンサブスクライブ
  // する任意の UI を有効にする

  subBtn.disabled = false;

  if (!subscription) {
    console.log('Not yet subscribed to Push')
    // プッシュを購読していない場合、ユーザーがプッシュできるように
    // UI を設定する。
    return;
  }

  // プッシュメッセージを購読していることを表示するように
  // UI を設定する。
  subBtn.textContent = 'Unsubscribe from Push Messaging';
  isPushEnabled = true;

  // 購読ステータスのための UI 要素の設定を含んで状態を初期化し、
  // プッシュ経由でサブスクライバーを更新する。
  var endpoint = subscription.endpoint;
  var key = subscription.getKey('p256dh');

    ...</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Push API')}}</td>
   <td>{{Spec2('Push API')}}</td>
   <td>これは Push API 仕様ですが、<code>getKey()</code> はここに含まれていないことに注意してください。現在は、Firefox だけの実験実装です。</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.PushSubscription.getKey")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Push_API/Using_the_Push_API">Using the Push API</a></li>
</ul>
