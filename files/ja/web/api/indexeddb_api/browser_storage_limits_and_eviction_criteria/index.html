---
title: ブラウザーのストレージ制限と削除基準
slug: Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria
tags:
  - Database
  - IndexedDB
  - LRU
  - Storage
  - client-side
  - eviction
  - limit
translation_of: Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria
---
<div>{{DefaultAPISidebar("IndexedDB")}}</div>

<p class="summary">クライアント側 (すなわちローカルディスク) に何らかのデータを保存するウェブ技術は何種類かがあります。ブラウザーがどれだけの容量をウェブデータストレージに割り当てるかや、容量の上限に達したときにどのデータを削除するかのプロセスは単純ではなく、またブラウザーにより異なります。この記事では、必要なローカルストレージの容量を確保するために、いつどのローカルコンテンツを破棄するのかをどうやって特定するのかを説明します。</p>

<div class="note">
<p><strong>メモ</strong>: 以下の情報はほとんどの最新ブラウザーではおおむね正確ですが、ブラウザー固有の注意事項も知られています。 Opera と Chrome は、すべての場合において同じ動作になるでしょう。 <a href="http://www.opera.com/mobile/mini">Opera Mini</a> (Presto ベースで、サーバー側でレンダリングする) は、クライアントにデータを保存しません。</p>
</div>

<h2 id="What_technologies_use_browser_data_storage">ブラウザーのデータストレージを使用する技術は何か?</h2>

<p>Firefox では以下の技術が、必要なデータを保存するためにブラウザーのデータストレージを使用します。ここではこれらの技術を「クォータクライアント」と呼びます。</p>

<ul>
 <li><a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB</a></li>
 <li><a href="http://asmjs.org/">asm.js</a> のキャッシュ</li>
 <li><a href="/ja/docs/Web/API/Cache">Cache API</a></li>
 <li>Cookies</li>
</ul>

<div class="note">
<p><strong>メモ</strong>: Firefox では、<a href="/ja/docs/Web/API/Web_Storage_API">ウェブストレージ</a>もまもなく同じストレージ管理ツールを使い始めます。それはこの文書で記述します。</p>
</div>

<div class="note">
<p><strong>メモ</strong>: プライベートブラウジングモードは、大半のデータストレージに対応していません。ローカルストレージのデータと Cookie は保存されますが、短命です。 — 最後のプライベートブラウジングウィンドウを閉じた時にデータは消去されます。</p>
</div>

<p>オリジンの「最終アクセス日時」はこれらのうちの何れかがアクティブ化/非アクティブ化されたときに更新されます。オリジン立ち退き (origin eviction) によって、すべてのクォータクライアントでデータ削除が行われたときに更新されます。</p>

<p>Chrome/Opera では、 Quota Management API が <a href="/ja/docs/Web/HTML/Using_the_application_cache">AppCache</a>, <a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB</a>, WebSQL, <a href="/ja/docs/Web/API/File_and_Directory_Entries_API">File System API</a> のクォータ管理を制御しています。</p>

<h2 id="Different_types_of_data_storage">さまざまな種類のデータストレージ</h2>

<p>同じブラウザー内で同じ保存方法を使用していても、解釈されるデータストレージの種類はさまざまです。この章では、さまざまなブラウザーで見つけられる多様なストレージについて説明します。</p>

<p>ストレージは 2 種類に分けられます。</p>

<ul>
 <li>永続的なもの。長期間保存されることを意図したデータです。これは、ユーザーが選択した場合にのみ削除されます (たとえば、Firefox では、<em>設定</em>に進み、<em>プライバシーとセキュリティ &gt; Cookie とサイトデータ</em>のオプションを使用することで、すべての保存データを削除するか、または選択したオリジンからの保存データのみを削除するかを選択できます)。</li>
 <li>一時的なもの。長期間にわたって維持する必要がないデータです。<a href="#storage_limits">ストレージの容量制限</a>に達すると、 <a href="#lru_policy">LRU ポリシー</a>によりもっとも古く使用されたものから削除されます。</li>
</ul>

<p>Firefox では、永続的なストレージが使用されると、ユーザーにはデータが永続的になることを警告するポップアップが表示され、それが良いかどうかを尋ねます。一時的データストレージは明示的にユーザーにプロンプトを表示しません。</p>

<p>ストレージは既定では一時的です。開発者は <a href="/ja/docs/Web/API/Storage_API">Storage API</a> で利用できる {{domxref("StorageManager.persist()")}} メソッドを使用して永続的なストレージにすることができます。</p>

<h2 id="Where_is_the_data_stored">データの保存先は?</h2>

<p>それぞれのストレージ種別は、個別のリポジトリーーを表します。以下は、ユーザーの Firefox プロファイル下のディレクトリにおける実際のマッピングです (他のブラウザーでは若干異なる場合があります)。</p>

<ul>
 <li><code>&lt;profile&gt;/storage</code> — クォータマネージャーー (後述) に管理されている、ストレージの主要な最上位ディレクトリーです。</li>
 <li><code>&lt;profile&gt;/storage/permanent</code> — 永続的なデータストレージのリポジトリーです。</li>
 <li><code>&lt;profile&gt;/storage/temporary</code> — 一時的なデータストレージのリポジトリーです。</li>
 <li><code>&lt;profile&gt;/storage/default</code> — 既定のデータストレージのリポジトリーです。</li>
</ul>

<div class="note">
<p><strong>メモ</strong>: <a href="/ja/docs/Web/API/Storage_API">Storage API</a> の導入後は、"permanent" フォルダーは廃止されると考えられます。"permanent" フォルダーは IndexedDB の永続的な種類のデータベースのみ保存します。ボックスモードが "best-effort" や "persistent" であっても、データは &lt;profile&gt;/storage/default 以下に保存されます。</p>
</div>

<div class="note">
<p><strong>メモ</strong>: Firefox では URL バーに <code>about:support</code> と入力して移動して、<em>プロファイルフォルダー</em> の隣にある <em>フォルダーを開く</em> ボタン (Mac OS X では <em>Finder で開く</em>) を押下すると、プロファイルのフォルダーを見つけることができます。</p>
</div>

<div class="note">
<p><strong>メモ</strong>: プロファイルフォルダーでデータを保存する場所を見ていると、第 4 のフォルダー <code>persistent</code> が見つかるかもしれません。本来は更新や移行を単純化するため、少し前に <code>persistent</code> フォルダーを <code>permanent</code> フォルダーに改名しました。</p>
</div>

<div class="note">
<p><strong>メモ</strong>: ユーザーが <code>&lt;profile&gt;/storage</code> の配下に、独自のディレクトリーやファイルを作成すべきではありません。このようなことを行うと、ストレージの初期化に失敗します。例えば、{{domxref("IDBFactory.open()", "open()")}} でエラーイベントが発生します。</p>
</div>

<h2 id="Storage_limits">ストレージの制限</h2>

<p>ブラウザーのストレージの最大容量は動的であり、ハードディスクドライブのサイズに応じて変わります。<strong>グローバルリミット</strong>はディスクの空き量量の 50% に決められます。Firefox では、クォータマネージャーと飛ばれる内部のブラウザーツールがオリジンごとにどれだけディスク容量を使用しているかを絶えず注視しており、必要に応じてデータを削除します。</p>

<p>従ってハードディスクドライブの空き容量が 500GB であれば、ブラウザーの合計ストレージサイズは 250GB になります。上限に達すると<strong>オリジン立ち退き (origin eviction)</strong> と呼ばれる処理を実行して、ストレージの総量が再び上限を下回るまで、オリジン全体に相当するデータを削除します。オリジン内の一部分を削除するような縮小法はありません。オリジン内のデータベースをひとつだけ削除すると、矛盾が発生するおそれがあります。</p>

<p>また、<strong>グループリミット</strong>というもうひとつの制限もあります。これは、グローバルリミットの 20% として定義されます。それぞれのオリジンは、グループ (オリジンのグループ) の一部です。グループは、eTLD+1 ドメインごとに 1 つ作られます。例えば次の通りです。</p>

<ul>
 <li><code>mozilla.org</code> — グループ 1、オリジン 1</li>
 <li><code>www.mozilla.org</code> — グループ 1、オリジン 2</li>
 <li><code>joe.blogs.mozilla.org</code> — グループ 1、オリジン 3</li>
 <li><code>firefox.com</code> — グループ 2、オリジン 4</li>
</ul>

<p>このグループでは <code>mozilla.org</code>、<code>www.mozilla.org</code>、<code>joe.blogs.mozilla.org</code> が、合わせてグローバルリミットの 20% を上限としてストレージを使用できます。<code>firefox.com</code> は、別に 20% の上限を持ちます。</p>

<p>これら 2 種類の制限は、制限に達したときの動作が異なります。</p>

<ul>
 <li>グループリミットは「ハードリミット」とも呼ばれます。オリジン立ち退きを発生させません。</li>
 <li>グローバルリミットは、いくらかの領域が解放されて処理を継続できる可能性がありますので「ソフトリミット」です。</li>
</ul>

<div class="note">
<p><strong>メモ</strong>: グループリミットは、上記で触れた最小のグループリミットにかかわらず、グローバルリミットより大きくすることはできません。グローバルリミットが 8MB といった本当にメモリーが少ない状況では、グループリミットも 8MB となります。</p>
</div>

<div class="note">
<p><strong>メモ</strong>: グループリミットに達したとき、あるいはオリジン立ち退きで十分な空き容量を確保できないときは、ブラウザーで <code>QuotaExceededError</code> が発生します。</p>
</div>

<div class="note">
<p><strong>メモ</strong>: Chrome では、ソフトおよびハードのストレージのクォータの限界が <strong>M66</strong> から変更されました。詳しい情報は<a href="https://chromium.googlesource.com/chromium/src/+/refs/heads/master/storage/browser/quota/quota_settings.cc#68">こちら</a>にあります。</p>
</div>

<h2 id="LRU_policy">LRU ポリシー</h2>

<p>使用可能なディスク領域がすべて埋まったときは、クォータマネージャーーが LRU ポリシーに基づいてデータの削除処理を始めます。もっとも過去に使用されたオリジンのデータが始めに削除され、上限に達しなくなるなるまで削除を繰り返します。</p>

<p>一時的なストレージを使用して、オリジンごとに「最終アクセス日時」を記録しています。一時的なストレージがグローバルリミットに達する (後に上限をさらに超える) と、現在使用していない (すなわち、データストアを開き続けているタブやアプリがない) オリジンをすべて発見しようとします。これらは、「最終アクセス日時」によって整列されます。オリジン立ち退きを発生させたリクエストを満たすのに十分な領域を確保するまで、もっとも過去に使用されたオリジンを削除し続けます。</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="http://www.html5rocks.com/en/tutorials/offline/quota-research/">Working with quota on mobile browsers</a>, by<a href="http://blog.agektmr.com" title="Eiji Kitamura"> Eiji Kitamura.</a> モバイルブラウザーのクライアント側ストレージについて詳しく分析した記事。</li>
 <li><a href="https://developers.google.com/web/updates/2011/11/Quota-Management-API-Fast-Facts">Quota Management API: Fast Facts</a>, by<a href="http://blog.agektmr.com" title="Eiji Kitamura"> Eiji Kitamura.</a> Chrome/Blink (Opera も含まれるでしょう) の Quota Management API について見ていく記事。</li>
</ul>
