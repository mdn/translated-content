---
title: Notification.requestPermission()
slug: Web/API/Notification/requestPermission
tags:
  - API
  - DOM
  - Method
  - Notification
  - Notifications
  - Notifications API
  - Reference
  - メソッド
  - 通知
translation_of: Web/API/Notification/requestPermission
---
<p>{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}</p>

<div class="note">
<p><strong>注:</strong> この機能は {{domxref("SharedWorker")}} 内では使用できません。</p>
</div>

<div class="blockIndicator note">
<p><strong>注</strong>: Safari はまだ、許可を得るのにコールバック構文を使用します。適切に機能を検出してコードを実行する方法の良い例として、<a href="/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API">通知 API の使用</a>をご覧ください。</p>
</div>

<p><strong><code>requestPermission()</code></strong> は {{domxref("Notification")}} インターフェイスのメソッドで、ユーザーに現在のオリジンが通知を表示することを許可するよう要求します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p>最新の仕様では、このメソッドは次のようにプロミスベースの構文に更新されています。</p>

<pre class="notranslate">Notification.requestPermission().then(function(permission) { ... });</pre>

<p>以前は、この構文は単純なコールバックに基づくものでした。このバージョンは非推奨になりました。</p>

<pre class="notranslate">Notification.requestPermission(<var>callback</var>);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>callback</var></code> {{optional_inline}} {{deprecated_inline("gecko46")}}</dt>
 <dd>省略可能なコールバック関数で、許可の値で呼び出されます。プロミスを返値にしたために非推奨になりました。</dd>
</dl>

<h3 id="Returns" name="Returns">返値</h3>

<p>{{jsxref("Promise")}} で、ユーザーが許可を選択したら {{domxref("DOMString")}} に解決します。この文字列の取りうる値は次の通りです。</p>

<ul>
 <li><code>granted</code></li>
 <li><code>denied</code></li>
 <li><code>default</code></li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<p>この基本的な HTML を想定してください。</p>

<pre class="brush: html notranslate">&lt;button onclick="notifyMe()"&gt;Notify me!&lt;/button&gt;</pre>

<p>以下のように通知を送信することが可能です。 — ここでは、かなり冗長で完全なコードのセットを紹介しています。最初に通知に対応しているかどうかをチェックし、通知を送信するために現在のオリジンに許可が与えられているかどうかをチェックし、必要であれば許可を要求してから通知を送信したい場合に使用できます。</p>

<pre class="brush: js notranslate">function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}</pre>

<p>このページでライブ例を公開するのはやめました。 Chrome や Firefox が別オリジンの {{htmlelement("iframe")}} から要求された通知の許可をしないようになり、その他のブラウザーも従っているからです。動作する例を見る場合は、 <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do リストの例</a> (また、<a href="https://mdn.github.io/to-do-notifications/">ライブで動作するアプリ</a>) を参照してください。</p>

<div class="blockIndicator note">
<p><strong>注</strong>: 上記の例では、通知をユーザーの操作 (ボタンのクリック) から起動しました。ユーザーが同意していない通知でユーザーに迷惑をかけるべきではないので、これはベストプラクティスであるだけでなく、今後ブラウザーはユーザーの操作によって起動されたものではない通知の許可の要求を明示的に拒否するようになるでしょう。例えば、 Firefox はバージョン72からすでにこれを行っており、 Safari もしばらく前からこれを行っています。</p>
</div>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Notifications')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>Living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Notification.requestPermission")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API">通知 API の使用</a></li>
</ul>
