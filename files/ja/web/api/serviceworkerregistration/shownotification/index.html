---
title: ServiceWorkerRegistration.showNotification()
slug: Web/API/ServiceWorkerRegistration/showNotification
tags:
  - API
  - Method
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerRegistration
  - showNotification
translation_of: Web/API/ServiceWorkerRegistration/showNotification
---
<p>{{APIRef("Service Workers API")}}</p>

<p><span class="seoSummary">{{domxref("ServiceWorkerRegistration")}} インターフェイスの <strong><code>showNotification()</code></strong> メソッドは、アクティブなサービスワーカー上で通知を作成します。</span></p>

<div class="note">
<p><strong>注</strong>: この機能は <a href="/ja/docs/Web/API/Web_Workers_API">Web Worker</a> で使用できます。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>​serviceWorkerRegistration</em>.showNotification(<em>title</em>, [<em>options</em>]);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><code>title</code></dt>
 <dd>通知内に表示する必要があるタイトル</dd>
 <dt><code>options</code> {{optional_inline}}</dt>
 <dd>通知の設定を可能にするオブジェクト。 次のプロパティを持つことができます。
 <ul>
  <li><code>actions</code>: 通知に表示するアクションの配列。 配列のメンバーはオブジェクトリテラルである必要があります。 次の値が含まれる場合があります。
   <ul>
    <li>action: 通知に表示されるユーザーアクションを識別する {{domxref("DOMString")}}。</li>
    <li>title: ユーザーに表示されるアクションテキストを含む {{domxref("DOMString")}}。</li>
    <li>icon: アクションで表示するアイコンの URL を含む {{domxref("USVString")}}。</li>
   </ul>
   適切な応答は、{{event("notificationclick")}} イベント内の <code>event.action</code> を使用して作成されます。</li>
  <li><code>badge</code>: Android 通知バーなど、通知自体を表示するのに十分なスペースがない場合に通知を表す画像の URL を含む{{domxref("USVString")}}。 Android デバイスでは、バッジは最大 4x 解像度、約96 x 96 ピクセルのデバイスに対応する必要があり、画像は自動的にマスクされます。</li>
  <li><code>body</code>: 通知内に表示する追加のコンテンツを表す文字列。</li>
  <li><code>data</code>: 通知に関連付ける任意のデータ。 これは任意のデータ型にすることができます。</li>
  <li><code>dir</code> : 通知の方向。 <code>auto</code>、<code>ltr</code>、<code>rtl</code> のいずれかです。</li>
  <li><code>icon</code>: 通知でアイコンとして使用される画像の URL を含む {{domxref("USVString")}}。</li>
  <li><code>image</code>: 通知に表示される画像の URL を含む {{domxref("USVString")}}。</li>
  <li><code>lang</code>: 通知内で使用される言語を指定します。 この文字列は、有効な <a href="http://tools.ietf.org/html/bcp47">BCP 47 言語タグ</a>である必要があります。</li>
  <li><code>renotify</code>: <code>tag</code> 値を再利用するときにバイブレーションと可聴アラートを抑制するかどうかを示すブール値。 <em>オプション</em>の <code>renotify</code> が <code>true</code> で、<em>オプション</em>の <code>tag</code> が空の文字列の場合、TypeError がスローされます。 デフォルトは <code>false</code> です。</li>
  <li><code>requireInteraction</code>: 画面が十分に大きいデバイスでは、ユーザーがクリックするか閉じるまで通知をアクティブにしておく必要があることを示します。 この値がないか <code>false</code> の場合、デスクトップバージョンの Chrome は約20秒後に通知を自動的に最小化します。 デフォルト値は <code>false</code> です。</li>
  <li><code>silent</code>: 設定されている場合、音やバイブレーションは発生しないことを示します。 <em>オプション</em>の <code>silent</code> が <code>true</code> で、<em>オプション</em>の <code>vibrate</code> が存在する場合、TypeError 例外がスローされます。 デフォルト値は <code>false</code> です。</li>
  <li><code>tag</code>: 必要に応じてスクリプトを使用して通知を検索、置換、または削除できるようにする所与の通知の ID。</li>
  <li><code>timestamp</code>: 通知が作成された時刻を表す {{domxref("DOMTimeStamp")}}。 通知が実際に行われた時刻を示すために使用できます。 例えば、これは過去に、デバイスがオフラインだったためにすぐに配信できなかったメッセージに通知が使用された場合や、これから始まる会議に向けて通知が使用された場合などです。</li>
  <li><code>vibrate</code>: 通知の表示で実行するバイブレーションパターン。 バイブレーションパターンは、メンバーが1つしかない配列にすることができます。 値はミリ秒単位の時間で、偶数のインデックス（0、2、4 など）は振動する時間を示し、奇数のインデックスは一時停止する時間を示します。例えば、<code>[300、100、400]</code> は、300ミリ秒振動し、100ミリ秒休止してから、400ミリ秒振動します。</li>
 </ul>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p><code>undefined</code> に解決する {{jsxref('Promise')}}。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">navigator.serviceWorker.register('sw.js');

function showNotification() {
  Notification.requestPermission(function(result) {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification('バイブレーションの例', {
          body: 'ブンブン! ブンブン!',
          icon: '../images/touch/chrome-touch-icon-192x192.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample'
        });
      });
    }
  });
}</pre>

<p>上記の関数を適切なタイミングで呼び出すには、{{domxref("ServiceWorkerGlobalScope.onnotificationclick")}} イベントハンドラーを使用できます。</p>

<p>{{domxref("ServiceWorkerRegistration.getNotifications()")}} を使用して、現在のサービスワーカーから発生した {{domxref("Notification")}} の詳細を取得することもできます。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Notifications','#dom-serviceworkerregistration-shownotification','showNotification()')}}</td>
   <td>{{Spec2('Web Notifications')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.ServiceWorkerRegistration.showNotification")}}</p>
