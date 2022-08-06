---
title: Storage API
slug: Web/API/Storage_API
tags:
  - API
  - Overview
  - Quotas
  - Reference
  - Secure context
  - Storage
  - Storage API
  - Usage
translation_of: Web/API/Storage_API
---
<p>{{securecontext_header}}{{DefaultAPISidebar("Storage")}}</p>

<p><span class="seoSummary">ストレージ標準（Storage Standard）は、個々のウェブサイトのコンテンツがアクセス可能なデータを格納するすべての API およびテクノロジーで使用する、共通の共有ストレージシステムを定義しています。Storage API は、どのくらいのスペースを使用できるかや、すでにどのくらいのスペースを使用しているかを調べたり、{{Glossary("user agent","ユーザーエージェント")}}が他のもののための場所を空けるためにサイトデータを処分する前に、警告する必要があるかどうかを制御したりといった機能を、サイトのコードに提供します。</span></p>

<p>{{AvailableInWorkers}}</p>

<p>サイトストレージ — ストレージ標準によって管理しているウェブサイト用に格納されたデータ — には、次のものが含まれます。</p>

<ul>
 <li><a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB データベース</a></li>
 <li><a href="/ja/docs/Web/API/Cache">Cache API のデータ</a></li>
 <li><a href="/ja/docs/Web/API/Service_Worker_API">サービスワーカーの登録</a></li>
 <li>{{domxref("window.localStorage")}} を使用して管理している <a href="/ja/docs/Web/API/Web_Storage_API">Web Storage API のデータ</a></li>
 <li>{{domxref("History.pushState()")}} を使用して保存した履歴状態情報</li>
 <li><a href="/ja/docs/Web/HTML/Using_the_application_cache">アプリケーションキャッシュ</a></li>
 <li><a href="/ja/docs/Web/API/Notifications_API">通知データ</a></li>
 <li>維持される可能性があるその他の種類のサイトでアクセス可能なサイト固有のデータ</li>
</ul>

<h2 id="Site_storage_units" name="Site_storage_units">サイトストレージユニット</h2>

<p>ストレージ標準によって記述され、Storage API を使用して相互作用するサイトストレージシステムは、各オリジン（{{Glossary("origin")}}）に対して 1 つの<strong>サイトストレージユニット</strong>（site storage unit、サイトの保管単位）で構成されています。基本的に、すべてのウェブサイトまたはウェブアプリには、データを格納するための独自のストレージユニットがあります。以下の図は、内部に 3 つのストレージユニットを持つサイトストレージプールを示しています。これはストレージユニットがどのように異なるデータタイプを格納でき、異なるクォータ（最大ストレージ制限）を持つことができるかを示しています。</p>

<p><img alt="サイトストレージプールが、さまざまな API からのデータとクォータに達する前に残っている可能性のある未使用スペースを含む複数のストレージユニットで構成されている様子を示す図。" src="https://mdn.mozillademos.org/files/14379/StorageUnits.png" style="height: 412px; width: 600px;"></p>

<ul>
 <li>Origin 1 には、Web Storage のデータと IndexedDB のデータがありますが、空き容量もあります。現在の使用量はまだクォータに達していません。</li>
 <li>Origin 2 にはまだデータが格納されていません。内容を待っているだけの空の箱です。ただし、このオリジンは他の 2 つよりもクォータが少なくなります。アクセス頻度の低いサイト、またはデータストレージ要件が低いことが知られているサイトである可能性があります。</li>
 <li>Origin 3 のストレージユニットは完全にいっぱいです。クォータに達し、既存のデータを削除しない限り、これ以上データを格納できません。</li>
</ul>

<p>{{Glossary("User agent","ユーザーエージェント")}}は様々なオリジンのクォータを決定するために様々なテクニックを使う可能性があります。最も可能性の高い方法の 1 つ — 実際に仕様が具体的に推奨するもの — は、個々のサイトの人気や使用レベルを考慮して、それらのクォータがどうあるべきかを判断することです。ブラウザーがこれらのクォータをカスタマイズするためのユーザーインターフェイスを提供することも考えられます。</p>

<h2 id="Box_modes" name="Box_modes">ボックスモード</h2>

<p>各サイトストレージユニット内の実際のデータストレージは、その<strong>ボックス</strong>と呼ばれます。各サイトストレージユニットには、そのすべてのデータを配置するボックスが 1 つだけあり、そのボックスのデータ保持ポリシーを説明する<strong>ボックスモード</strong>があります。次の 2 つのモードがあります。</p>

<dl>
 <dt><code>"best-effort"</code>（最大限の努力）</dt>
 <dd>ユーザーエージェントは可能な限りボックスに含まれているデータを保持しようと試みますが、ストレージスペースが少なくなり、ストレージの圧力を軽減するためにボックスを消去する必要がある場合は<em>ユーザーに警告しません</em>。</dd>
 <dt><code>"persistent"</code>（永続的）</dt>
 <dd>ユーザーエージェントはデータを可能な限り長く保持し、<code>"persistent"</code> とマークされたボックスの消去を検討する前にすべての <code>"best-effort"</code> ボックスを消去します。persistent ボックスの消去を検討する必要がある場合、ユーザーエージェントはユーザーに通知し、必要に応じて 1 つ以上の persistent ボックスを消去する方法を提供します。</dd>
</dl>

<p>オリジンのボックスモードを変更するには、<code>"persistent-storage"</code>（永続的ストレージ）機能を使うパーミッションが必要です。</p>

<h2 id="Data_persistence_and_clearing" name="Data_persistence_and_clearing">データの永続化と消去</h2>

<p>サイトやアプリに <strong><code>"persistent-storage"</code></strong> 機能のパーミッションがある場合は、{{domxref("StorageManager.persist()")}} メソッドを使用して、そのボックスを永続的にすることを要求できます。また利用特性や他の測定基準により、ユーザーエージェントがサイトのストレージユニットを永続的にすることを決定することも可能です。<code>"persistent-storage"</code> 機能のパーミッション関連のフラグ、アルゴリズム、およびタイプはすべてパーミッションの標準デフォルトに設定されています。ただし、<strong>パーミッションの状態</strong>（permission state）はオリジン全体で同じでなければならず、パーミッションの状態が <code>"granted"</code> （付与）されていない場合（何らかの理由で永続的ストレージ機能へのアクセスが拒否された場合）、そのオリジンのサイトストレージユニットのボックスモードは常に <code>"best-effort"</code> になります。</p>

<div class="note">
<p><strong>注</strong>: パーミッションの取得と管理の詳細については、<a href="/ja/docs/Web/API/Permissions_API/Using_the_Permissions_API">Permissions API の使用</a>を参照してください。</p>
</div>

<p>サイトストレージユニットを消去するとき、オリジンのボックスは単一の実体として扱われます。ユーザーエージェントがそれを消去する必要があり、ユーザーが承認した場合、個々の API からデータのみを消去する手段を提供するのではなく、データストア全体を消去します。</p>

<p>ボックスが <code>"persistent"</code> とマークされている場合、その内容は、データのオリジン自身やユーザーが特別に消すことなしには、ユーザーエージェントによって消去されません。これには、ユーザーが「キャッシュを消去」や「最近の履歴を消去」のオプションを選択した場合などのシナリオが含まれます。ユーザーは、persistent サイトストレージユニットを削除するための許可を特に求められます。</p>

<h2 id="Quotas_and_usage_estimates" name="Quotas_and_usage_estimates">クォータと使用量の推定</h2>

<p>ユーザーエージェントは、選択した任意のメカニズムを使用して、特定のサイトが使用できるストレージの最大量を決定します。この最大値がオリジンの<strong>クォータ</strong>（quota）です。サイトが使用しているスペースの量は、その<strong>使用量</strong>（usage）と呼ばれます。これらの値は両方とも推定値です。正確でない理由は次のようにいくつかあります。</p>

<ul>
 <li> ユーザーエージェントは、これらの値がフィンガープリント（個人の推定）の目的で使用されるのを防ぐために、特定のオリジンが使用するデータの正確なサイズを不明瞭にしておくことが奨励されています。</li>
 <li>格納されたデータの物理的サイズを縮小するために重複排除、圧縮、およびその他の方法が使用されることがあります。</li>
 <li>クォータは、オリジンが使えるスペースの控えめな概算値であり、オーバーランを防ぐためにデバイスで利用可能なスペースより小さくなければなりません。</li>
</ul>

<p>ユーザーエージェントは、オリジンのクォータのサイズを決定するために選択した任意の方法を使用することができ、そして仕様では人気があるか頻繁に使用されるサイトに追加スペースを提供することを奨励しています。</p>

<p>特定のオリジンのクォータと使用量の推定値を決定するには、{{domxref("StorageManager.estimate", "navigator.storage.estimate()")}} メソッドを使用します。このメソッドは、解決すると、これらの数値を含む {{domxref("StorageEstimate")}} を受け取るという Promise を返します。例えば次のようにです。</p>

<pre class="brush: js">navigator.storage.estimate().then(estimate =&gt; {
  // estimate.quota は見積もりクォータです
  // estimate.usage は見積もり使用バイト数です
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
   <td>{{SpecName('Storage')}}</td>
   <td>{{Spec2('Storage')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<h3 id="StorageManager" name="StorageManager"><code>StorageManager</code></h3>

<div>


<p>{{Compat("api.StorageManager")}}</p>
</div>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("NavigatorStorage.storage", "navigator.storage")}}</li>
 <li>{{domxref("StorageManager")}}（<code>navigator.storage</code> から返されたオブジェクト）</li>
 <li><a href="/ja/docs/Web/API/Permissions_API/Using_the_Permissions_API">Permissions API の使用</a></li>
</ul>
