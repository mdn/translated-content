---
title: Document.requestStorageAccess()
slug: Web/API/Document/requestStorageAccess
tags:
  - API
  - DOM
  - Document
  - Experimental
  - Reference
  - Storage Access API
  - requestStorageAccess
  - メソッド
translation_of: Web/API/Document/requestStorageAccess
---
<div>{{APIRef}}</div>

<p><strong><code>requestStorageAccess()</code></strong> は {{domxref("Document")}} インターフェイスのメソッドで、ファーストパーティのストレージへのアクセスが許可されたら解決し、アクセスが拒否されたら拒否される {{jsxref("Promise")}} を返します。</p>

<h2 id="Conditions_for_granting_storage_access" name="Conditions_for_granting_storage_access">ストレージへのアクセスが許可される条件</h2>

<p>ストレージへのアクセスは、以下の一連のチェックに基づいて許可されます。</p>

<ol>
 <li>文書がすでにアクセスを許可されていれば、解決。</li>
 <li>文書が null オリジンを持っていれば、拒否。</li>
 <li>文書のフレームが主フレームであれば、解決。</li>
 <li>副フレームのオリジンが主フレームのものと同じであれば、解決。</li>
 <li>副フレームがサンドボックス化されていなければ、7へ飛ぶ。</li>
 <li>副フレームにトークン <code>allow-storage-access-by-user-activation</code> がなければ、拒否。</li>
 <li>副フレームの親フレームが最上位フレームでなければ、拒否。</li>
 <li>ブラウザーがユーザージェスチャーを処理中でなければ、拒否。</li>
 <li>ブラウザーが持っている追加の規則をチェック。例えば、ホワイトリスト、ブラックリスト、端末上の分類、ユーザー設定、クリックジャック防止の推測、ユーザーへの明示的なパーミッションの確認など。いくつかの規則が満たされていなければ、拒否。</li>
 <li>文書にクッキーやその他のサイトストレージへのアクセスを許可し、将来の {{domxref("Document.hasStorageAccess()")}} および <code>requestStorageAccess()</code> の呼び出しのためにその事実を保存。</li>
</ol>

<p>上記のすべての要件が満たされていると仮定すると、Firefox は、ユーザーセッション存続期間の最大24時間で、現在のセッションのファーストパーティのオリジンのしきい値数まで、要求オリジンへのストレージアクセスを自動的に許可します。 要求オリジンがストレージアクセス許可の最大許容数を超えた後、同じ閲覧セッション中に <code>requestStorageAccess()</code> を呼び出すと、ユーザーにプロンプトします。</p>

<p>オリジンが取得できる同時ストレージアクセス許可の最大数は、現在のセッションでアクセスされた最上位オリジンの数の 1% または 5 のいずれか大きい方として現在定義されている正の整数です。 しきい値は eTLD+1 のレベルで適用されるため、例えば、<code>foo.example.com</code> と <code>bar.example.com</code> に対する2つのストレージアクセス許可は、制限に対する単一の例外としてのみカウントされます。</p>

<p><code>requestStorageAccess()</code> 呼び出しの時点で、要求オリジンがストレージアクセスを持っている場合...</p>

<p>...最大値より少ないオリジン:</p>

<ul>
 <li>ユーザーにプロンプトしません。</li>
 <li>オリジンには、現在の最上位オリジンに対する一時的なストレージアクセス許可が与えられます。</li>
 <li>要求オリジンのストレージにアクセスできるオリジンの数は、1ずつ増加します。
  <ul>
   <li>この数は、<a href="/ja/docs/Mozilla/Firefox/Privacy/Storage_access_policy#Automatic_storage_access_upon_interaction">互換性ヒューリスティック</a>によって自動アクセス許可が与えられたときにも増加することに注意してください。</li>
  </ul>
 </li>
 <li>一時ストレージアクセス許可は次のとおりです。
  <ul>
   <li>ブラウザーセッションの終了時に無効になります。</li>
   <li>ディスクに永続化されません（例えば、ブラウザーがクラッシュすると持続しません）。</li>
   <li>長時間のブラウザーセッションの場合は、24時間後にリセットします。</li>
  </ul>
 </li>
</ul>

<p>...最大値以上のオリジン:</p>

<ul>
 <li>ユーザーにプロンプトします。</li>
 <li>ユーザーが「許可」または「任意のサイトで許可」をクリックすると、要求は解決されます。</li>
 <li>ユーザーが「許可しない」をクリックすると、ストレージアクセス要求は拒否され、要求オリジンは別のユーザーインタラクションを受け取ると再要求できます。</li>
 <li>ユーザーがストレージを許可する場合、要求オリジンは現在の最上位オリジンの永続ストレージアクセス許可を与えられます。</li>
 <li>要求オリジンのストレージにアクセスできるオリジンの数は、1ずつ増加します。</li>
 <li>永続ストレージアクセスのパーミッションは次のとおりです。
  <ul>
   <li>ディスクに永続化され、将来のブラウザーセッションで有効のままになります。</li>
   <li>30日後にリセットします。</li>
  </ul>
 </li>
</ul>

<p>一時的または永続的なストレージアクセス許可が期限切れになると、要求オリジンのストレージアクセスを持つオリジンの数が1ずつ減ります。</p>

<div class="blockIndicator note">
<p><strong>注</strong>: 要求オリジンが<a href="/ja/docs/Mozilla/Firefox/Privacy/Storage_access_policy#Tracking_protection_explained">追跡オリジン（tracking origin）として分類</a>されていない場合、アクセス要求には、ページがリロードされると消滅する一時的なストレージアクセス許可が自動的に付与されます。 この場合、ユーザーにはプロンプトが表示されないため、<code>requestStorageAccess()</code> を呼び出しても、{{domxref("Document.hasStorageAccess()")}} によって返される値を変更する以外に副作用はありません。</p>
</div>

<h2 id="Debugging" name="Debugging">デバッグ</h2>

<p>ストレージアクセス許可のしきい値により、Firefox がユーザーにアクセスをプロンプトする条件の下でウェブサイトをテストすることがより難しくなる場合があります。 テストを簡単にするために、<code>requestStorageAccess()</code> 呼び出し時のプロンプトを制御する <code>about:config</code> に次の2つの設定を追加しました。</p>

<ul>
 <li><code>dom.storage_access.auto_grants</code> を <code>false</code> に設定して、一時ストレージアクセス許可の自動許可を無効にすることができます。 追跡者（trackers）として分類されたオリジンによる <code>requestStorageAccess()</code> の呼び出しはすべて、プロンプトをトリガーします。</li>
 <li><code>dom.storage_access.max_concurrent_auto_grants</code> は、ユーザーがプロンプトを受け取り始めるストレージアクセス許可のしきい値数を制御します。 例えば、<code>requestStorageAccess()</code> が呼び出される最初のサイトでアクセスを自動的に許可し、その後プロンプトするように Firefox を構成する場合、<code>dom.storage_access.max_concurrent_auto_grants</code> 設定の値を 1 に調整する必要があります。</li>
</ul>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>promise</em> = document.requestStorageAccess();</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>ファーストパーティのストレージへのアクセスが許可されたら <code>undefined</code> で満たされ、アクセスが拒否されたら拒否される {{jsxref("Promise")}} です。</p>

<p>Promise が解決されると、 Promise が満たされたか拒否されたかに関わらず、ユーザージェスチャーが処理されているかのように解決ハンドラーが実行されます。</p>

<ul>
 <li>前者の場合、コードはユーザーのアクティベーションを必要とする API の呼び出しを開始でき、物事を前に進めることができます。</li>
 <li>後者の場合、コードはユーザーになぜ要求に失敗したのか、何を続けることができるかを知らせるために実行することができます (例えば、必要な場合はログインを促すなど)。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">document.requestStorageAccess().then(
  () =&gt; { console.log('access granted') },
  () =&gt; { console.log('access denied') }
);</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<p>この API はまだ提案段階にあります。 — 標準化プロセスはまだ始まっていません。現在のところ、この API の詳細の仕様書は、アップルのブログ投稿の <a href="https://webkit.org/blog/8124/introducing-storage-access-api/">Introducing Storage Access API</a>、および <a href="https://github.com/whatwg/html/issues/3338">WHATWG HTML issue 3338 — Proposal: Storage Access API</a> で見ることができます。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.requestStorageAccess")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<p><a href="/ja/docs/Web/API/Storage_Access_API">Storage Access API</a></p>
