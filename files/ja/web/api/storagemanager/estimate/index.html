---
title: StorageManager.estimate()
slug: Web/API/StorageManager/estimate
tags:
  - API
  - Method
  - Quota
  - Reference
  - Secure context
  - Storage
  - Storage API
  - StorageManager
  - Usage
  - estimate
  - メソッド
translation_of: Web/API/StorageManager/estimate
---
<p>{{securecontext_header}}{{APIRef("Storage")}}</p>

<p><span class="seoSummary"><strong><code>estimate()</code></strong> は {{domxref("StorageManager")}} インターフェイスのメソッドで、ストレージマネージャーに、現在の<a href="/ja/docs/Glossary/Same-origin_policy">オリジン</a>が使用しているストレージの大きさ (<code>usage</code>) と、利用可能な空間の量 (<code>quota</code>) を要求します。</span></p>

<p>このメソッドは非同期的に動作するので、情報が利用可能になると解決する {{jsxref("Promise")}} を返します。プロミスの成功ハンドラーは、使用量とクォータのデータを含む {{domxref("StorageEstimate")}} を入力として受け取ります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: js notranslate">const <var>estimatePromise</var> = <var>StorageManager</var>.estimate();</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>{{jsxref('Promise')}} で、これは {{domxref('StorageEstimate')}} 辞書に準拠したオブジェクトに解決します。この辞書には、このオリジンで利用可能なおよその大きさが {{domxref("StorageEstimate.quota")}} に、現在使用されているおよその量が {{domxref("StorageEstimate.usage")}} に入ります。</p>

<div class="blockIndicator note">
<p><strong>これらは正確な数値ではありません。</strong>圧縮、重複排除セキュリティ上の理由による難読化などが行われるため、正確な値にはなりません。</p>
</div>

<p><code>quota</code> はオリジンごとに異なることに気づくかもしれません。この違いは次のような要因に基づきます。</p>

<ul>
 <li>ユーザーが訪れる頻度</li>
 <li>公開されたサイトの有名度データ</li>
 <li>ブックマーク、ホーム画面へ追加、プッシュ通知の受付などのユーザーのエンゲージメントの印</li>
</ul>

<h2 id="Example" name="Example">例</h2>

<p>この例では、使用量の概算値を取得し、現在使用しているストレージ容量のパーセント値をユーザーに提示します。</p>

<h3 id="HTML_content" name="HTML_content">HTML の内容</h3>

<pre class="brush: html notranslate">&lt;label&gt;
  現在、使用可能なストレージの約 &lt;output id="percent"&gt;
  &lt;/output&gt;% を使用しています。
&lt;/label&gt;
</pre>

<h3 id="JavaScript_content" name="JavaScript_content">JavaScript の内容</h3>

<pre class="brush: js notranslate">navigator.storage.estimate().then(function(estimate) {
  document.getElementById("percent").value =
      (estimate.usage / estimate.quota * 100).toFixed(2);
});
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{ EmbedLiveSample('Example', 600, 40) }}</p>

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
   <td>{{SpecName('Storage','#dom-storagemanager-estimate','estimate()')}}</td>
   <td>{{Spec2('Storage')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.StorageManager.estimate")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>Storage API</li>
 <li>{{domxref("Storage")}}: {{domxref("Window.localStorage")}} から返されるオブジェクト</li>
 <li>{{domxref("StorageManager")}}</li>
 <li>{{domxref("navigator.storage")}}</li>
</ul>
