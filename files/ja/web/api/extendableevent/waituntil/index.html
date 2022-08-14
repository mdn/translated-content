---
title: ExtendableEvent.waitUntil()
slug: Web/API/ExtendableEvent/waitUntil
tags:
  - API
  - ExtendableEvent
  - Method
  - Reference
  - waitUntil
translation_of: Web/API/ExtendableEvent/waitUntil
---
<p>{{APIRef("Service Workers API")}}</p>

<p><strong><code>ExtendableEvent.waitUntil()</code></strong> メソッドは、作業が進行中であることをイベントディスパッチャーに通知します。 また、その作業が成功したかどうかを検出するためにも使用できます。 サービスワーカーの場合、<code>waitUntil()</code> は、Promise が確定するまで作業が進行中であることをブラウザーに通知し、サービスワーカーがその作業を完了させたい場合にサービスワーカーを終了させません。</p>

<p>{{domxref("ServiceWorkerGlobalScope", "サービスワーカー")}}の <code>install</code> イベントは、<code>waitUntil()</code> を使用して、タスクが完了するまでサービスワーカーをインストール中（{{domxref("ServiceWorkerRegistration.installing", "installing")}}）の段階に保持します。 <code>waitUntil()</code> に渡された Promise が拒否された場合、インストールは失敗と見なされ、インストール中のサービスワーカーは破棄されます。 これは主に、依存するすべてのコアキャッシュが正常に読み込まれるまで、サービスワーカーがインストール済み（installed）と見なされないようにするために使用します。</p>

<p>{{domxref("ServiceWorkerGlobalScope", "サービスワーカー")}}の <code>activate</code> イベントは、<code>waitUntil()</code> を使用して、<code>waitUntil()</code> に渡された Promise が解決するまで、<code>fetch</code> や <code>push</code> などの機能イベントをバッファーします。 これにより、サービスワーカーはデータベーススキーマを更新し、古い{{domxref("Cache", "キャッシュ")}}を削除する時間を確保できるため、他のイベントは完全にアップグレードされた状態に依存できます。</p>

<p><code>waitUntil()</code> メソッドは、最初はイベントコールバック内で呼び出す必要がありますが、その後、すべての Promise が解決するまで、複数回呼び出すことができます。</p>

<div class="note">
<p><strong>注</strong>: 上記の段落で説明した動作は、Firefox 43 で修正されました（{{bug(1180274)}} を参照）。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>extendableEvent</em>.waitUntil(<em>promise</em>);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>{{jsxref("Promise")}}。</p>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p><code>undefined</code>。</p>

<h2 id="Example" name="Example">例</h2>

<p>サービスワーカーの <code>install</code> イベント内で <code>waitUntil()</code> を使用する。</p>

<pre class="brush: js;highlight:[10]">addEventListener('install', event =&gt; {
  const preCache = async () =&gt; {
    const cache = await caches.open('static-v1');
    return cache.addAll([
      '/',
      '/about/',
      '/static/styles.css'
    ]);
  };
  event.waitUntil(preCache());
});</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Service Workers', '#dom-extendableevent-waituntil', 'waitUntil()')}}</td>
   <td>{{Spec2('Service Workers')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.ExtendableEvent.waitUntil")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers">Service worker の使用</a></li>
 <li><a class="external external-icon" href="https://jakearchibald.github.io/isserviceworkerready/">ServiceWorker の準備はできていますか？</a>（英語）</li>
 <li>{{jsxref("Promise")}}</li>
</ul>
