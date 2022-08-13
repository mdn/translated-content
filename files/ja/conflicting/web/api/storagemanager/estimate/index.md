---
title: StorageEstimate
slug: conflicting/Web/API/StorageManager/estimate
tags:
  - API
  - Dictionary
  - Interface
  - Quotas
  - Reference
  - Secure context
  - Storage
  - Storage API
  - StorageEstimate
  - Usage
translation_of: Web/API/StorageEstimate
original_slug: Web/API/StorageEstimate
---
<div>{{securecontext_header}}{{APIRef("Storage")}}</div>

<p><span class="seoSummary"><strong><code>StorageEstimate</code></strong> ディクショナリは、サイトまたはアプリのデータストアのサイズとその使用量の概算値を提供するために {{domxref("StorageManager")}} によって使用されます。{{domxref("StorageManager.estimate", "estimate()")}} メソッドは、その {{jsxref("Promise")}} が解決されたときにこのディクショナリに適合するオブジェクトを返します。</span></p>

<p>これらの値は、パフォーマンスと、ストレージ容量データがフィンガープリント目的で使用されることの防止との両方を含む、いくつかの理由のため、単なる概算値にすぎません。詳細は各プロパティのページをご覧ください。</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("StorageEstimate.quota", "quota")}} {{securecontext_inline}}</dt>
 <dd>ユーザーのデバイスやコンピューターがサイトオリジンやウェブアプリで使用できる合計ストレージの控えめな概算値を提供する数値。それが事実であることに頼ることはできませんが、この利用可能なスペースの量より多くがある可能性があります。</dd>
 <dt>{{domxref("StorageEstimate.usage", "usage")}} {{securecontext_inline}}</dt>
 <dd><code>quota</code> で示される利用可能スペースのうち、サイトやウェブアプリが現在使用しているストレージスペースの量を概算する数値。</dd>
 <dt>{{domxref("StorageEstimate.usageDetails", "usageDetails")}} {{securecontext_inline}}</dt>
 <dd>ストレージシステムごとの <code>usage</code> の内訳を含むディクショナリ。含まれるメンバーはすべて 0 より大きい <code>usage</code> を持ち、<code>usage</code> が 0 のストレージシステムはすべてディクショナリから除外されます。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Storage', '#dictdef-storageestimate', 'StorageEstimate')}}</td>
   <td>{{Spec2('Storage')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.StorageEstimate")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Storage_API">Storage API</a></li>
 <li>{{domxref("StorageManager")}}</li>
 <li>{{domxref("StorageManager.estimate()")}}</li>
 <li>{{domxref("NavigatorStorage.storage", "navigator.storage")}}</li>
</ul>
