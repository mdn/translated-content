---
title: 通知 API
slug: Web/API/Notifications_API
tags:
  - Landing
  - Notifications
  - Notifications API
  - permission
  - system
  - 通知
translation_of: Web/API/Notifications_API
---
<p>{{DefaultAPISidebar("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}</p>

<p class="summary">通知 API を使えば、ウェブページがエンドユーザーに表示するシステム通知を制御できるようになります。これらのシステムは、最上位の閲覧コンテキストのビューポートの外にあるため、ユーザーがタブを切り替えたり、別のアプリに移動していても表示されます。また、この API は既存の通知システムと互換性を持つように設計されているので、異なるプラットフォームでも動作します。</p>

<h2 id="Concepts_and_usage" name="Concepts_and_usage">概念と使い方</h2>

<p>対応済みのプラットフォームでは、システム通知を表示するには、一般的に2つのことが必要です。まず、ユーザーが現在のオリジンに対して一ステム通知を表示する許可を与える必要があります。これは一般的にアプリやサイトが初期化されたとき、 {{domxref("Notification.requestPermission()")}} を使用して行われます。これは、例えばボタンをクリックするなど、ユーザーの操作に反応して行う必要があります。</p>

<pre class="brush: js notranslate">btn.addEventListener('click', function() {
  let promise = Notification.requestPermission();
  // wait for permission
})</pre>

<p>これはベストプラクティスで、ユーザーが同意していない通知でユーザーに迷惑をかけるべきではありません。しかし、今後ブラウザーはユーザーの操作から起動されていない通知を明示的に拒否するようになるでしょう。例えば、 Firefox はバージョン72からすでにこれを行っています。</p>

<p>これは以下のようにリクエストダイアログを起動します。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/17008/Screen_Shot_2019-12-11_at_9.59.14_AM.png" style="border-style: solid; border-width: 1px; display: block; height: 183px; margin: 0px auto; width: 643px;"></p>

<p>ここでは、ユーザーはこのオリジンからの通知を許可するかどうかを選択できます。一度決定がなされると、現在のセッションの間はその設定が保存されます。</p>

<div class="note">
<p><strong>注</strong>: Firefox 44 からは、通知と<a href="/ja/docs/Web/API/Push_API">プッシュ</a>の許可が統合されました。通知に許可が与えられれば、プッシュも同時に有効になります。</p>
</div>

<p>つぎに、新しい通知は {{domxref("Notification.Notification","Notification()")}} コンストラクターを使って作られます。このコンストラクターには、必須の title 引数と、オプションを指定する引数として options オブジェクトを与えることができます。オプションには、テキストの方向、本文テキスト、表示アイコン、通知サウンドなどが指定可能です。</p>

<p>さらに、通知 API の仕様には、いくつかの<a href="/ja/docs/Web/API/ServiceWorker_API">サービスワーカー API</a> が定義されており、サービスワーカーが通知を発行できるようになっています。</p>

<div class="note">
<p><strong>注</strong>: 自分のアプリでの通知の詳しい使い方については、<a href="/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API">通知 API の使用</a>を参照してください。</p>
</div>

<h2 id="Notifications_interfaces" name="Notifications_interfaces">通知インターフェイス</h2>

<dl>
 <dt>{{domxref("Notification")}}</dt>
 <dd>通知オブジェクトを定義する</dd>
</dl>

<h3 id="サービスワーカーの追加要素">サービスワーカーの追加要素</h3>

<dl>
 <dt>{{domxref("ServiceWorkerRegistration")}}</dt>
 <dd>{{domxref("ServiceWorkerRegistration.showNotification()")}} および {{domxref("ServiceWorkerRegistration.getNotifications()")}} メソッドが含まれており、通知の表示の制御に使用できます。</dd>
 <dt>{{domxref("ServiceWorkerGlobalScope")}}</dt>
 <dd>{{domxref("ServiceWorkerGlobalScope.onnotificationclick")}} ハンドラが含まれており、通知がクリックされた時にカスタム関数を実行させることができるようになります。</dd>
 <dt>{{domxref("NotificationEvent")}}</dt>
 <dd>{{domxref("ExtendableEvent")}} に基づく、特定のタイプのイベントオブジェクトです。すでに実行された通知を表現します。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Web Notifications')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>Living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Notification")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API">通知 API の使用</a></li>
</ul>
