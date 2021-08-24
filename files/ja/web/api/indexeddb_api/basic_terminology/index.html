---
title: IndexedDB の主な特徴と基本用語
slug: Web/API/IndexedDB_API/Basic_Terminology
tags:
  - Advanced
  - IndexedDB
  - terminology
translation_of: Web/API/IndexedDB_API/Basic_Terminology
---
<p>{{DefaultAPISidebar("IndexedDB")}}</p>

<div class="summary">
<p>この記事では IndexedDB の主な特徴を説明し、IndexedDB API の理解に関連する重要な用語を紹介しています。</p>
</div>

<p>また、以下の記事も参考になるでしょう。</p>

<ul>
 <li>APIの使用方法に関する詳細なチュートリアルについては、<a href="/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB">IndexedDB の使用</a>を参照してください。</li>
 <li>IndexedDB API のリファレンス文書については、<a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB API</a> のメイン記事と、IndexedDB で使用されるオブジェクトの型を記したそのサブページを参照してください。</li>
 <li>ブラウザーがバックグラウンドでデータを保存する方法の詳細については、<a href="/ja/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria">ブラウザーのストレージ制限と削除基準</a>を参照してください。</li>
</ul>

<h2 id="key_characteristics">主な特徴</h2>

<p>IndexedDB は、ユーザーのブラウザー内にデータを永続的に保存するための方法です。ネットワークの利用可否にかかわらず、豊富なクエリー機能を備えたウェブアプリケーションを作成できるため、オンラインでもオフラインでも動作します。IndexedDB は、大量のデータを保存するアプリケーション (貸し出し用図書館の DVD カタログなど) や、インターネットへの持続的な接続を必要としないアプリケーション (メールクライアント、ToDo リスト、メモ帳など) に有効です。</p>

<p>IndexedDB では、「キー」に基づいてインデックス化されたオブジェクトを保存・取得することができます。データベースへの変更は、すべてトランザクション内で行われます。多くのウェブストレージ技術と同様に、IndexedDB は<a href="https://www.w3.org/Security/wiki/Same_Origin_Policy">同一オリジンポリシー</a>に従っています。そのため、ドメイン内の保存データにはアクセスできますが、異なるドメイン間のデータにはアクセスできません。</p>

<p>他の種類のデータベースでの作業を前提としていると、IndexedDB での作業に戸惑うことがあるかもしれません。そのため、以下のような IndexedDB の主な特徴を覚えておくことが重要です。</p>

<ul>
 <li>
  <p><strong>IndexedDB データベースは、キーと値の組を格納します。</strong>値は複雑な構造のオブジェクトで、キーはそのオブジェクトのプロパティです。オブジェクトの任意のプロパティを使用するインデックスを作成して、迅速な検索や並べ替えされた列挙を行うことができます。キーにはバイナリーオブジェクトを使用することができます。</p>
 </li>
 <li>
  <p><strong>IndexedDBは、トランザクションデータベースモデルに基づいて構築されています</strong>。IndexedDB で行うことは、常に<a href="#gloss_transaction">トランザクション</a>のコンテキストで行われます。IndexedDB の API には、インデックス、テーブル、カーソルなどを表す多くのオブジェクトが用意されていますが、これらはそれぞれ特定のトランザクションに関連付けられています。そのため、トランザクションの外でコマンドを実行したり、カーソルを開いたりすることはできません。トランザクションには十分に定義された有効期間があるため、トランザクションが完了した後に使用しようとすると、例外が発生します。また、トランザクションは自動コミットされ、手動でコミットすることはできません。</p>

  <p>このトランザクションモデルは、ユーザーがウェブアプリケーションの 2 つのインスタンスを 2 つの異なるタブで同時に開いた場合のことを考えると、とても有用です。トランザクション操作がなければ、 2 つのインスタンスが互いの変更に干渉してしまう可能性があります。データベースのトランザクションに慣れていない方は、<a class="link-https" href="https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B6%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3">Wikipedia のトランザクションに関する記事</a>をご覧ください。また、「定義」の章の<a href="#gloss_transaction">トランザクション</a>もご覧ください。</p>
 </li>
 <li>
  <p><strong>IndexedDB API は、ほとんどが非同期です。</strong>API は値を返すことでデータを提供するわけではありません。コールバック関数を渡す必要があります。同期的な方法でデータベースに値を「格納」したり、データベースから値を「取り出す」ことはしません。代わりに、データベース操作を「リクエスト」します。操作が終了すると DOM イベントで通知され、そのイベントの種類によって操作が成功したか失敗したかが分かります。最初は少し複雑に聞こえるかもしれませんが、そこには健全性を保つための対策が組み込まれています。これは、<a href="/ja/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a> が動作する方法と大きな違いはありません。</p>
 </li>
 <li>
  <p><strong>IndexedDB は多くのリクエストを使用します。</strong>リクエストは、前述の成功または失敗の DOM イベントを受け取るオブジェクトです。このオブジェクトには <code>onsuccess</code> と <code>onerror</code> のプロパティがあり、<code>addEventListener()</code> と <code>removeEventListener()</code> を呼び出すことができます。また、<code>readyState</code>、<code>result</code>、<code>errorCode</code> の各プロパティがあり、リクエストの状態を知ることができます。<code>result</code> プロパティは、リクエストの生成方法 (例えば <code>IDBCursor</code> インスタンスや、データベースに挿入したばかりの値のキー) に応じて、さまざまなものになるため、特に魔法のようなものです。</p>
 </li>
 <li>
  <p><strong>IndexedDB は DOM イベントを使って、結果が利用可能になったことを通知します。</strong> DOM イベントには、必ず <code>type</code> プロパティがあります (IndexedDB では、最も一般的に <code>"success"</code> または <code>"error"</code> に設定されます)。また、DOM イベントには、イベントの目的地を示す <code>target</code> プロパティがあります。ほとんどの場合、イベントの <code>target</code> は、何らかのデータベース操作の結果として生成された <code>IDBRequest</code> オブジェクトです。成功イベントはバブルアップしませんし、キャンセルもできません。一方、エラーイベントはバブリングします、キャンセルも可能です。これは非常に重要なことで、エラーイベントはキャンセルされない限り、実行中のトランザクションを中断します。</p>
 </li>
 <li>
  <p><strong>IndexedDB はオブジェクト指向です。</strong> IndexedDB は、行と列の集合体であるテーブルを持つリレーショナルデータベースではありません。この重要かつ根本的な違いは、アプリケーションの設計・構築方法に影響します。</p>

  <p>従来のリレーショナルデータストアでは、データの行と名前の付いたデータの列の集合体を格納するテーブルがあります。一方、IndexedDB では、データの種類に応じてオブジェクトストアを作成し、そのストアに JavaScript オブジェクトを永続化する必要があります。各オブジェクトストアには、クエリや反復処理を効率的に行うためのインデックスのコレクションを持つことができます。オブジェクト指向データベース管理システムに慣れていない方は、<a href="https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9">Wikipedia のオブジェクトデータベースの記事</a>をお読みください。</p>
 </li>
 <li>
  <p><strong>IndexedDB は Structured Query Language (<abbr>SQL</abbr>) を使用しません。</strong>インデックスに対するクエリーを使用してカーソルを生成し、そのカーソルを使用して結果セットを反復処理します。NoSQL システムについてよく知らない方は、<a href="https://ja.wikipedia.org/wiki/NoSQL">Wikipedia の NoSQL に関する記事</a>をご覧ください。</p>
 </li>
 <li>
  <p><a name="origin"><strong>IndexedDB は、同一オリジンポリシーを採用しています</strong></a>。オリジンとは、スクリプトを実行している文書の URL のドメイン、アプリケーション層のプロトコル、およびポートのことです。各オリジンには、それぞれ関連するデータベースのセットがあります。すべてのデータベースには、オリジン内で識別するための名前があります。</p>

  <p>IndexedDB にはセキュリティ境界が課せられており、アプリケーションが異なるオリジンのデータにアクセスすることを防ぎます。例えば、<a href="https://www.example.com/app/">http://www.example.com/app/</a> のアプリやページは、<a href="https://www.example.com/dir/">http://www.example.com/dir/</a> からはオリジンが同じであるためデータを取得することができますが、<a href="https://www.example.com:8080/dir/">http://www.example.com:8080/dir/</a> (ポートが異なる) や <a class="link-https" href="https://www.example.com/dir/">https://www.example.com/dir/</a> (プロトコルが異なる) からは、オリジンが異なるためデータを取得することはできません。</p>

  <div class="note"><strong>メモ</strong>: サードパーティのウィンドウコンテンツ (例: {{htmlelement("iframe")}} コンテンツ) は、ブラウザーがサードパーティのクッキーを受け入れないように設定されていない限り、埋め込まれたオリジンの IndexedDB ストアにアクセスすることができます ({{bug("1147821")}} を参照)。</div>
 </li>
</ul>

<h3 id="limitations">制限事項</h3>

<p>IndexedDB は、クライアントサイドのストレージを必要とするほとんどのケースをカバーするように設計されています。しかし、以下のようないくつかのケースには対応していません。</p>

<ul>
 <li>国際化に対応した並べ替え。すべての言語で文字列が同じように並べ替えされるわけではないので、国際化に対応した並べ替えには対応していません。データベースは特定の国際化に対応した順序でデータを保存することはできませんが、データベースから読み取ったデータを自分で並べ替えすることはできます。ただし、Firefox 43 以降、実験的なフラグを有効にすることで、<a href="/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB#locale-aware_sorting">ロケールを考慮した並べ替え</a>が可能になっています (現在は Firefox のみ)。</li>
 <li>同期。この API は、サーバー側のデータベースとの同期を行うようには設計されていません。クライアント側の indexedDB データベースとサーバー側のデータベースを同期させるコードを書く必要があります。</li>
 <li>全文検索。この API には、 SQL の <code>LIKE</code> 演算子に相当するものがありません。</li>
</ul>

<p>また、以下のような条件でブラウザーがデータベースを消去することがあるので注意が必要です。</p>

<ul>
 <li>ユーザーが消去を要求した場合。多くのブラウザーには、Cookie、ブックマーク、保存されたパスワード、IndexedDB データなど、特定のウェブサイトに保存されたすべてのデータを消去できる設定があります。</li>
 <li>ブラウザーがプライベートブラウジングモードになっている場合。一部のブラウザーには、「プライベートブラウジング」 (Firefox) または「シークレット」 (Chrome) モードがあります。セッションの終了時に、ブラウザーはデータベースを消去します。</li>
 <li>ディスクまたはクォータの容量の上限に達した場合。</li>
 <li>データが破損した場合。</li>
 <li>この機能に対して互換性のない変更が行われた場合。</li>
</ul>

<p>正確な状況やブラウザーの機能は時間とともに変化しますが、ブラウザーベンダーの一般的な考え方は、可能な限りデータを残すために最善の努力をするというものです。</p>

<h2 id="core_terminology">主な用語</h2>

<p>この節では、IndexedDB API の理解に関連する主な用語を定義および説明します。</p>

<h3 id="database">データベース</h3>

<dl>
 <dt><a name="gloss_database">データベース (database)</a></dt>
 <dd>ふつう 1 つ以上の<a href="#gloss_object_store"><em>オブジェクトストア</em></a>で構成される、情報の格納庫です。それぞれのデータベースには以下のものがあります。
 <ul>
  <li>名前。これは、特定のオリジン内でデータベースを識別し、その生涯を通じて一定です。名前は任意の文字列値 (空文字列を含む) とすることができます。</li>
  <li>
   <p>現在の<a href="#gloss_version"><em>バージョン</em></a>。データベースが最初に作成されたとき、特に指定がなければそのバージョンは整数の 1 です。各データベースは、常に 1 つのバージョンしか持つことができません。</p>
  </li>
 </ul>
 </dd>
 <dt><a name="durable">永続性 (durable)</a></dt>
 <dd>
 <p>Firefox では、IndexedDB は以前は<strong>永続性</strong>がありました。つまり、読み書きトランザクションにおいて、すべてのデータがディスクにフラッシュされたことが保証されたときにのみ、{{domxref("IDBTransaction.oncomplete")}} が発行されていました。</p>

 <p>Firefox 40 では、IndexedDB トランザクションは、パフォーマンスを向上させるために、他の IndexedDB に対応するブラウザーと同様に永続性の保証を緩和しています ({{Bug("1112702")}} を参照)。この場合、 {{Event("complete")}} イベントは、OS がデータの書き込みを指示した後に発生しますが、そのデータが実際にディスクにフラッシュされる前に発生する可能性もあります。そのため、イベントは以前よりも早く配信されるかもしれませんが、データがディスクにフラッシュされる前に OS がクラッシュしたり、システムの電源が切れたりすると、トランザクション全体が失われてしまう可能性がわずかながらあります。このような致命的な事象は稀であるため、ほとんどの人はこれ以上気にする必要はありません。</p>

 <div class="note">
 <p><strong>メモ</strong>: Firefox では、何らかの理由で永続性を確保したい場合 (たとえば、後で再計算できない重要なデータを保存している場合)、実験的な (標準外の) <code>readwriteflush</code> モードを使用してトランザクションを作成することで、<code>complete</code> イベントを配信する前にトランザクションをディスクに強制的にフラッシュさせることができます({{domxref("IDBDatabase.transaction")}} を参照)。これは現在実験的なものであり、<code>about:config</code> で <code>dom.indexedDB.experimental</code> 設定項目が <code>true</code> に設定されている場合にのみ使用できます。</p>
 </div>
 </dd>
 <dt><a name="gloss_object_store">オブジェクトストア (object store)</a></dt>
 <dd>
 <p>データベースにデータを保存する仕組みです。オブジェクトストアはレコードを持続的に保持しており、これはキーと値の組です。オブジェクトストア内のレコードは、<em><a href="#gloss_key">キー</a></em>によって昇順に整列して保存されています。</p>

 <p>すべてのオブジェクトストアには、そのデータベース内で一意となる名前が必要です。オブジェクトストアは、オプションで<em><a href="#gloss_keygenerator">キージェネレーター</a></em>と<em><a href="#gloss_keypath">キーパス</a></em>を持つことができます。オブジェクトストアにキーパスがある場合は<em><a href="#gloss_inline_key">インラインキー</a></em>、ない場合は<em><a href="#gloss_outofline_key">アウトオブラインキー</a></em>が使用されます。</p>

 <p>オブジェクトストアのリファレンス文書は、 {{domxref("IDBObjectStore")}} を参照してください。</p>
 </dd>
 <dt><a name="gloss_version">バージョン (version)</a></dt>
 <dd>始めにデータベースを生成したとき、バージョンは整数の 1 になります。それぞれのデータベースは、一度に 1 つのバージョンを持ちます。一度に複数のバージョンを持つことはできません。バージョンを変更する唯一の方法は、現在のバージョンより大きなバージョンでデータベースを開くことです。</dd>
 <dt><a name="gloss_database_connection">データベース接続 (database connection)</a></dt>
 <dd><em><a href="#gloss_database">データベース</a></em>を開くことで生成される操作です。データベースは同時に複数の接続を持つことができます。</dd>
 <dt><a name="gloss_transaction">トランザクション (transaction)</a></dt>
 <dd>
 <p>特定のデータベースで行う、原子性を持つデータアクセスやデータ変更の操作のセットです。これは、データベース内のデータと対話する手段です。実際は、データベース内のデータの読み取りや変更はトランザクション内で実施しなければなりません。</p>

 <p>書き込みトランザクションの<a href="#scope"><em>スコープ</em></a>が重ならない限り、ひとつのデータベース接続で同時に複数のアクティブなトランザクションが存在できます。トランザクションのスコープは生成時に定義され、トランザクションがどのオブジェクトストアと対話できるかや、トランザクションの持続期間にわたって保持し続けるかを示します。よって例えば、データベース接続で <code>flyingMonkey</code> オブジェクトストアのみ対象とするスコープを持つ書き込みトランザクションがすでに存在するとき、<code>unicornCentaur</code> オブジェクトストアや <code>unicornPegasus</code> オブジェクトストアをスコープで持つ別のトランザクションを開始できます。読み取りトランザクションは、スコープが重なっていても複数実行できます。</p>

 <p>トランザクションは持続期間が短いものを除き、長時間のトランザクションがストレージ資源をロックする状況から解放するために、ブラウザーが終了させることができます。トランザクションは中止させることができ、トランザクションによるデータベースの変更箇所はロールバックされます。また、開始するトランザクションや中止するトランザクションを待つ必要はありません。</p>

 <p>トランザクションには <code>readwrite</code>、<code>readonly</code>、<code>versionchange</code> の 3 つのモードがあります。オブジェクトストアやインデックスの生成および削除は、<a href="/ja/docs/Web/API/IDBDatabase/versionchange_event"><code>versionchange</code></a> トランザクションを使用する場合に限り実行できます。トランザクションのタイプについて詳しくは、<a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB</a> のリファレンスをご覧ください。</p>

 <p>すべての操作はトランザクション内で発生しますので、トランザクションは IndexedDB の重要な概念です。トランザクションについて、特にバージョン付けとの関係については、{{domxref("IDBTransaction")}} および関連文書をご覧ください。ここにリファレンス文書もあります。</p>
 </dd>
 <dt><a name="gloss_request">リクエスト (request)</a></dt>
 <dd>データベースの読み書きを実施する操作です。すべてのリクエストは、ひとつの読み取りまたは書き込みの操作を表します。</dd>
 <dt><a name="gloss_index">インデックス (index)</a></dt>
 <dd>
 <p>インデックスは<em>参照先オブジェクトストア (referenced object store)</em> から呼び出されて、別のオブジェクトストアのレコードを検索するための特別なオブジェクトストアです。インデックスは持続的なキーと値のストレージであり、インデックスのレコードの値は、参照先オブジェクトストアのレコードのキーです。インデックス内のレコードは、参照先オブジェクトストアでレコードが挿入、更新、削除されるたびに、自動的に収集されます。インデックス内の各レコードは参照先オブジェクトストア内のレコードをひとつだけ示すことができますが、複数のインデックスが同一のオブジェクトストアを参照することもできます。オブジェクトストアが変更されると、そのオブジェクトストアを参照するすべてのインデックスが自動的に更新されます。</p>

 <p>代わりに、<a href="#gloss_key">キー</a>を使用してオブジェクトストア内のレコードを検索することもできます。</p>

 <p>インデックスの使用法について詳しくは、<a href="/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB#using_an_index" title="IndexedDB/Using_IndexedDB#Using_an_index">IndexedDB を使用する</a>をご覧ください。インデックスのリファレンス文書として、<a href="/ja/docs/Web/API/IDBKeyRange" rel="internal">IDBKeyRange</a> をご覧ください。</p>
 </dd>
</dl>

<h3 id="key">キーと値</h3>

<dl>
 <dt><a name="gloss_key">キー (key)</a></dt>
 <dd>
 <p>オブジェクトストアに保存された値は、このデータ値によって編成および取り出しされます。オブジェクトストアは<em><a href="#gloss_keygenerator">キージェネレーター</a></em>、<em><a href="#gloss_keypath">キーパス</a></em>、明示的に指定した値の、3 種類の生成源のいずれかからキーを得られます。キーは、自身の前にあるものより大きな数値を持つデータ型であることが必要です。オブジェクトストア内の各レコードはオブジェクトストア内で一意のキーを持たなければならず、オブジェクトストア内で複数のレコードが同じキーを持つことはできません。</p>

 <p>キーは <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/String">文字列</a>、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Date">date</a>、浮動小数点数値、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array">配列</a>のいずれかの型を使用できます。配列では、キーは空の値から無限大までの範囲を使用できます。また、配列の中に配列を含めることができます。文字列または整数値のキーしか使用できないという条件はありません。</p>

 <p>代わりに、<em><a href="#gloss_index">インデックス</a>を使用してオブジェクトストア内のレコードを検索することもできます。</em></p>
 </dd>
 <dt><a name="gloss_keygenerator">キージェネレーター (key generator)</a></dt>
 <dd>指定した順序で新たなキーを生成する仕組みです。オブジェクトストアがキージェネレーターを持たない場合は、保存するレコードのキーをアプリケーションが提供しなければなりません。ジェネレーターはストア間で共有しません。これはむしろブラウザーの実装の細部であり、Web 開発において実際にはキージェネレーターの生成やアクセスは行いません。</dd>
 <dt><a name="gloss_inline_key">インラインキー (in-line key)</a></dt>
 <dd>保存される値の一部として保存されるキーです。これは<em>キーパス</em>を使用して見つけます。インラインキーは、ジェネレーターを使用して生成できます。キーが生成されると、キーパスを使用してキーを値の中に保存したり、キーとして使用したりすることができます。</dd>
 <dt><a name="gloss_outofline_key">アウトオブラインキー (out-of-line key)</a></dt>
 <dd>保存する値とは別に保存されるキーです。</dd>
 <dt><a name="gloss_keypath">キーパス (key path)</a></dt>
 <dd>オブジェクトストアやインデックスのどこからブラウザーがキーを取り出すべきかを定義します。有効なキーパスは空文字列、JavaScript の識別子、ピリオドで区切られた複数の JavaScript の識別子、あるいはそれらを収めた配列のいずれかを含むことができます。空白を含むことはできません。</dd>
 <dt><a name="gloss_value">値 (value)</a></dt>
 <dd>
 <p>それぞれのレコードは値を持っており、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean" rel="internal">論理値</a>、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Number" rel="internal">数値</a>、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/String">文字列</a>、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Date">date</a>、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object">オブジェクト</a>、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array" rel="internal">配列</a>、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp" rel="internal">正規表現</a>、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined">undefined</a>、null を含む、JavaScript で表現可能なものをどれでも含むことができます。</p>

 <p>オブジェクトまたは配列を保存する場合は、それらのプロパティや値もまた、有効な値をどれでも持つことができます。</p>

 <p>また、<a href="/ja/docs/Web/API/Blob">Blob</a> やファイルも保存可能です。<a href="https://dvcs.w3.org/hg/IndexedDB/raw-file/tip/Overview.html">仕様書</a> をご覧ください。</p>
 </dd>
</dl>

<h3 id="range">レンジとスコープ</h3>

<dl>
 <dt id="scope"><a id="gloss_scope" name="gloss_scope">スコープ (scope)</a></dt>
 <dd>トランザクションの適用先であるオブジェクトストアやインデックスのセットです。読み取りのみのトランザクションのスコープは、同時に重ね合ったり実行することができます。一方、書き込みトランザクションのスコープは重ね合うことができません。同時に同一のスコープで複数のトランザクションを開始することはできますが、それらはキューに収められ、順番に実行されます。</dd>
 <dt id="cursor"><a id="gloss_cursor">カーソル (cursor)</a></dt>
 <dd><em>キーレンジ</em>に属する複数のレコードにわたって反復処理を行うための仕組みです。カーソルは、反復処理を行うインデックスやオブジェクトストアがどれかを示す source を持ちます。またレンジ内の位置や、レコードキーの順序について増加方向に移動しているか減少方向に移動しているかの情報も持ちます。カーソルのリファレンス文書として、{{domxref("IDBCursor")}} をご覧ください。</dd>
 <dt id="key_range"><a id="gloss_keyrange">キーレンジ (key range)</a></dt>
 <dd>
 <p>キーとして使用する、何らかのデータ型の連続的な区間です。キーまたはキーレンジを使用して、オブジェクトストアやインデックスからレコードを取り出すことができます。下限または上限を使用して、レンジを制限またはフィルターリングできます。例えばキーが x から y の間であるすべての値に対して、反復処理を行うことができます。</p>

 <p>キーレンジのリファレンス文書として、{{domxref("IDBKeyRange")}} をご覧ください。</p>
 </dd>
</dl>

<h2 id="next">次のステップ</h2>

<p>IndexedDB の主な特徴と主要な用語を理解できたら、より具体的な作業に入ることができます。API の使い方のチュートリアルについては、<a href="/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB">IndexedDB の使用</a>をご覧ください。</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.w3.org/TR/IndexedDB/">Indexed Database API 仕様書</a></li>
 <li><a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB API リファレンス</a></li>
 <li><a href="/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB">IndexedDB の使用</a></li>
 <li><a href="https://msdn.microsoft.com/en-us/scriptjunkie/gg679063.aspx">IndexedDB — The Store in Your Browser</a></li>
</ul>
