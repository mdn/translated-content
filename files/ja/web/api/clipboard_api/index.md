---
title: クリップボード API
slug: Web/API/Clipboard_API
tags:
  - API
  - Async Clipboard API
  - Clipboard
  - Clipboard API
  - Clipboard Event API
  - ClipboardEvent
  - Landing
  - Reference
translation_of: Web/API/Clipboard_API
---
<div>{{DefaultAPISidebar("Clipboard API")}}</div>

<p><strong>クリップボード API</strong> は、クリップボードのコマンド (切り取り、コピー、貼り付け) に応答する機能や、システムクリップボードの非同期の読み取りや書き込みを行う機能を提供します。クリップボードの内容へのアクセスは、 <a href="/ja/docs/Web/API/Permissions_API">Permissions API</a> によって制限されています。ユーザーの許可がなければ、クリップボードの内容の読み取りや変更は許可されません。</p>

<p>この API は、 {{domxref("document.execCommand()")}} を使用したクリップボードへのアクセスに取って代わるように設計されています。</p>

<h2 id="Accessing_the_clipboard" name="Accessing_the_clipboard">クリップボードへのアクセス</h2>

<p><code>Clipboard</code> オブジェクトをインスタンス化して生成するのではなく、システムクリップボードにはグローバル変数の {{domxref("Navigator.clipboard")}} を通してアクセスすることができます。</p>

<pre class="brush: js">navigator.clipboard.readText().then(
  clipText =&gt; document.querySelector(".editor").innerText += clipText);</pre>

<p>このスニペットはクリップボードからテキストを読み取り、最初に見つかった <code>editor</code> クラスを持つ要素に追加します。 {{domxref("Clipboard.readText", "readText()")}} (および場合によっては {{domxref("Clipboard.read", "read()")}}) はクリップボードにテキストがないときには空文字列を返すので、このコードは安全です。</p>

<h2 id="Interfaces" name="Interfaces">インターフェイス</h2>

<dl>
 <dt>{{domxref("Clipboard")}} {{securecontext_inline}}</dt>
 <dd>システムクリップボードに対してテキストやデータを読み書きするインターフェイスを提供します。これは仕様書では 'Async Clipboard API' と呼ばれています。</dd>
 <dt>{{domxref("ClipboardEvent")}} {{securecontext_inline}}</dt>
 <dd>クリップボードの変更に関する情報を提供するイベント、すなわち {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/paste_event", "paste")}} イベントを表します。これは仕様書では 'Clipboard Event API' と呼ばれています。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('Clipboard API')}}</td>
   <td>{{Spec2('Clipboard API')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<h3 id="Clipboard" name="Clipboard"><code>Clipboard</code></h3>

<div>
<p>{{Compat("api.Clipboard")}}</p>

<h3 id="ClipboardEvent" name="ClipboardEvent"><code>ClipboardEvent</code></h3>

<p>{{Compat("api.ClipboardEvent")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Permissions_API">Permissions API</a></li>
 <li><a href="/ja/docs/Web/API/Permissions_API/Using_the_Permissions_API">Permissions API の利用</a></li>
</ul>
</div>
