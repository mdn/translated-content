---
title: StorageManager
slug: Web/API/StorageManager
tags:
  - API
  - Interface
  - Persistence
  - Quotas
  - Reference
  - Secure context
  - Storage
  - Storage API
  - StorageManager
  - Usage
translation_of: Web/API/StorageManager
---
<p>{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Storage")}}</p>

<p><span class="seoSummary"><a href="/ja/docs/Web/API/Storage_API">Storage API</a> の <strong><code>StorageManager</code></strong> インターフェイスは、永続性のパーミッションの管理と、利用可能なストレージの見積もりのインターフェイスを提供します。{{domxref("navigator.storage")}} か {{domxref("WorkerNavigator.storage")}} のいずれかを使用して、このインターフェイスへの参照を取得できます。</span></p>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("StorageManager.estimate()")}} {{securecontext_inline}}</dt>
 <dd>オリジンの使用量とクォータを含む {{domxref("StorageEstimate")}} オブジェクトを返します。</dd>
 <dt>{{domxref("StorageManager.persist()")}} {{securecontext_inline}}</dt>
 <dd>ユーザーエージェントがサイトのストレージを永続化できる場合に <code>true</code> に解決される {{jsxref('Promise')}} を返します。</dd>
 <dt>{{domxref("StorageManager.persisted()")}} {{securecontext_inline}}</dt>
 <dd>サイトのストレージに永続性がすでに付与されている場合に <code>true</code> に解決される {{jsxref('Promise')}} を返します。</dd>
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
   <td>{{SpecName('Storage','#storagemanager','StorageManger')}}</td>
   <td>{{Spec2('Storage')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.StorageManager")}}</p>
