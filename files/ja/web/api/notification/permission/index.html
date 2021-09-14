---
title: Notification.permission
slug: Web/API/Notification/permission
tags:
  - API
  - DOM
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - プロパティ
  - 通知
translation_of: Web/API/Notification/permission
---
<p>{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}</p>

<p><code>permission</code> は {{domxref("Notification")}} インターフェイスの読み取り専用プロパティで、ユーザーが現在のオリジンに対してウェブ通知を表示することを許可したかどうか、現在の許可状態を表します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <var>permission</var> = Notification.permission;</pre>

<h3 id="Return_Value" name="Return_Value">値</h3>

<p>現在の許可を表す {{domxref("DOMString")}} です。以下の値が可能です。</p>

<ul>
 <li><code>granted</code>: 現在のオリジンがシステム通知を表示することについて、ユーザーが明示的な許可を与えている。</li>
 <li><code>denied</code>: 現在のオリジンがシステム通知を表示することについて、ユーザーが明示的に拒否している。</li>
 <li><code>default</code>: ユーザーの決定は分からない。この場合、アプリケーションは許可が <code>denied</code> である可能用に動作する。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<p>以下のスニペットは、まず通知に対応しているかどうかをチェックし、現在のオリジンで通知を送信するための許可が付与されているかどうかをチェックし、必要であれば許可を要求してから通知を送信したい場合に使用することができます。</p>

<pre class="brush: js notranslate">function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have alredy been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied' || Notification.permission === "default") {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName("Web Notifications","#dom-notification-permission","permission")}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>Living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Notification.permission")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Notifications_API">通知 API</a></li>
 <li><a href="/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API">通知 API の使用</a></li>
 <li><a href="/ja/docs/Web/API/Permissions_API">許可 API</a></li>
 <li><a href="/ja/docs/Web/API/Permissions_API/Using_the_Permissions_API">許可 API の使用</a></li>
</ul>
