---
title: コンパイルされた WebAssembly モジュールをキャッシュする
slug: WebAssembly/Caching_modules
tags:
  - Caching
  - IndexedDB
  - JavaScript
  - Module
  - WebAssembly
  - compile
  - wasm
translation_of: WebAssembly/Caching_modules
---
<div>{{WebAssemblySidebar}}</div>

<div class="warning">
<p><strong>警告</strong>: 実験的な {{jsxref("WebAssembly.Module")}} IndexedDB のシリアル化サポートがブラウザから削除されています。{{bug("1469395")}} と<a href="https://github.com/WebAssembly/spec/issues/821">この仕様の問題</a>を参照してください。</p>
</div>

<p class="summary">キャッシングはアプリケーションのパフォーマンスを向上させるのに役立ちます — コンパイルされた WebAssembly モジュールをクライアントに格納することによって、毎回ダウンロードしてコンパイルする必要がなくなります。この記事では、キャッシングまわりのベストプラクティスについて解説します。</p>

<h2 id="Caching_via_IndexedDB" name="Caching_via_IndexedDB">IndexedDB を用いたキャッシング</h2>

<p><a href="/ja/docs/Web/API/IndexedDB_API">IndexedDB</a> はクライアント側で構造化されたデータを格納、検索できるトランザクショナルデータベースシステムです。 これはテキスト、blob、他のクローン可能なオブジェクトをアプリケーションのステートの保存、アセットの永続化をするのに理想的な方法です。</p>

<p>これには wasm モジュール ({{jsxref("WebAssembly.Module")}} JavaScript オブジェクト) も含まれます。</p>

<h2 id="Setting_up_a_caching_library" name="Setting_up_a_caching_library">キャッシュライブラリをセットアップする</h2>

<p>IndexedDB はやや昔ながらの API です。まず、私たちは今日のよりモダンな API にあわせて、キャッシュするコードを素早く書け、よりよく機能させるためのライブラリ関数を提供します。</p>

<p>wasm-utils.js ライブラリスクリプト内で <code>instantiateCachedURL()</code> を見つけることができます— この関数は <code>url</code> と <code>dbVersion</code> から wasm モジュールをフェッチし、<code>importObject</code> を指定してインスタンス化を行います。そして、成功時に wasm インスタンスを渡すプロミスを返します。さらに、コンパイルされた wasm モジュールをキャッシュするデータベースの作成、新しいモジュールのデータベースへの格納、事前にキャッシュされたモジュールのデータベースからの取得 (再度ダウンロードする必要がなくなります) を行います。</p>

<div class="note">
<p><strong>注</strong>: サイト全体の wasm のキャッシュ (指定されたURLだけではありません) は関数に渡す <code>dbVersion</code> によってバージョニングされます。wasm モジュールコードが更新された場合や、URLが変更された場合は <code>dbVersion</code> を更新する必要があります。以降 <code>instantiateCachedURL()</code> を呼び出すと、キャッシュ全体がクリアされ、期限切れのモジュールの使用を避けることができます。</p>
</div>

<p>この関数はいくつかの必要な定数を定義することから始まります:</p>

<pre class="brush: js notranslate">function instantiateCachedURL(dbVersion, url, importObject) {
  const dbName = 'wasm-cache';
  const storeName = 'wasm-cache';</pre>

<h3 id="Setting_up_the_database" name="Setting_up_the_database">データベースをセットアップする</h3>

<p class="brush: js"><code>instantiateCachedURL()</code> に含まれる最初のヘルパー関数 — <code>openDatabase()</code> — は wasm モジュールを格納するためのオブジェクトストアを作成し、 <code>dbVersion</code> が更新された場合はデータベースをクリアする処理をハンドリングも行います。これは解決時に新しいデータベースを渡すプロミスを返します。</p>

<pre class="brush: js notranslate">  function openDatabase() {
    return new Promise((resolve, reject) =&gt; {
      var request = indexedDB.open(dbName, dbVersion);
      request.onerror = reject.bind(null, 'Error opening wasm cache database');
      request.onsuccess = () =&gt; { resolve(request.result) };
      request.onupgradeneeded = event =&gt; {
        var db = request.result;
        if (db.objectStoreNames.contains(storeName)) {
            console.log(`Clearing out version ${event.oldVersion} wasm cache`);
            db.deleteObjectStore(storeName);
        }
        console.log(`Creating version ${event.newVersion} wasm cache`);
        db.createObjectStore(storeName)
      };
    });
  }</pre>

<h3 id="Looking_up_modules_in_the_database" name="Looking_up_modules_in_the_database">データベースからモジュールを検索する</h3>

<p>次の関数 — <code>lookupInDatabase()</code> — は上で作成したオブジェクトストアから指定した <code>url</code> で検索するプロミスベースの操作を提供します。解決時に格納されたコンパイル済モジュール、棄却時にエラーを渡すプロミスを返します。</p>

<pre class="brush: js notranslate">  function lookupInDatabase(db) {
    return new Promise((resolve, reject) =&gt; {
      var store = db.transaction([storeName]).objectStore(storeName);
      var request = store.get(url);
      request.onerror = reject.bind(null, `Error getting wasm module ${url}`);
      request.onsuccess = event =&gt; {
        if (request.result)
          resolve(request.result);
        else
          reject(`Module ${url} was not found in wasm cache`);
      }
    });
  }</pre>

<h3 id="Storing_and_instantiating_modules" name="Storing_and_instantiating_modules">モジュールの保存とインスタンス化</h3>

<p>次に <code>storeInDatabase()</code> 関数を定義します。この関数は非同期に指定された wasm モジュールを指定したデータベースに保存します。</p>

<pre class="brush: js notranslate">  function storeInDatabase(db, module) {
    var store = db.transaction([storeName], 'readwrite').objectStore(storeName);
    var request = store.put(module, url);
    request.onerror = err =&gt; { console.log(`Failed to store in wasm cache: ${err}`) };
    request.onsuccess = err =&gt; { console.log(`Successfully stored ${url} in wasm cache`) };
  }</pre>

<h3 id="Using_our_helper_functions" name="Using_our_helper_functions">ヘルパー関数を使用する</h3>

<p>プロミスベースのヘルパー関数が全て定義されました。これらを使用して IndexDB のキャッシュルックアップするコアロジックを表現できるようになりました。データベースをオープンし、<code>url</code> をキーとして <code>db</code> に格納されているコンパイル済モジュールの有無を確認してみましょう:</p>

<pre class="brush: js notranslate">  return openDatabase().then(db =&gt; {
    return lookupInDatabase(db).then(module =&gt; {</pre>

<p>成功したら、インポートオブジェクトを指定してモジュールをインスタンス化します:</p>

<pre class="brush: js notranslate">      console.log(`Found ${url} in wasm cache`);
      return WebAssembly.instantiate(module, importObject);
    },</pre>

<p>失敗した場合、スクラッチでコンパイルします。次回以降に使用するためにコンパイルしたモジュールを url をキーとしてデータベースに格納します:</p>

<pre class="brush: js notranslate">    errMsg =&gt; {
      console.log(errMsg);
      return WebAssembly.instantiateStreaming(fetch(url)).then(results =&gt; {
        storeInDatabase(db, results.module);
        return results.instance;
      });
    })
  },</pre>

<div class="note">
<p><strong>注</strong>: {{jsxref("WebAssembly.instantiate()")}} は {{jsxref("WebAssembly.Module()", "Module")}} と {{jsxref("WebAssembly.Instance()", "Instance")}} の両方を返します。Module はコンパイルされたコードを表し、IDB に格納したり、<code><a href="/ja/docs/Web/API/MessagePort/postMessage">postMessage()</a></code> を通じて ワーカーとの間で共有することができます。Instance はステートフルで、呼び出し可能な JavaScript の関数を含んでいるため、格納/共有することは出来ません。</p>
</div>

<p>データベースをオープンすることに失敗した場合(例えば、パーミッションやクォータ等の原因による)、モジュールをフェッチしてコンパイルするだけにし、結果を格納しないでください (格納するデータベースがないため) 。</p>

<pre class="brush: js notranslate">  errMsg =&gt; {
    console.log(errMsg);
    return WebAssembly.instantiateStreaming(fetch(url)).then(results =&gt; {
      return results.instance
    });
  });
}</pre>

<h2 id="Caching_a_wasm_module" name="Caching_a_wasm_module">wasm モジュールをキャッシュする</h2>

<p>上で定義されたライブラリ関数を使用して、wasm モジュールインスタンスの取得やエクスポートされた機能を使用することが (その間にバックグラウンドでキャッシュのハンドリングをしています) 、次のパラメータで呼び出すだけのシンプルなものになります:</p>

<ul>
 <li>キャッシュバージョン — 詳細は上で説明されています — wasm モジュールが更新されたときや別 URL に移動したときに更新する必要があります。</li>
 <li>インスタンス化したい wasm モジュールの URL。</li>
 <li>インポートオブジェクト (必要ならば)</li>
</ul>

<pre class="brush: js notranslate">const wasmCacheVersion = 1;

instantiateCachedURL(wasmCacheVersion, 'test.wasm').then(instance =&gt;
  console.log("Instance says the answer is: " + instance.exports.answer())
).catch(err =&gt;
  console.error("Failure to instantiate: " + err)
);</pre>

<p>ソースコードと例は GitHub の <a href="https://github.com/mdn/webassembly-examples/blob/master/other-examples/indexeddb-cache.html">indexeddb-cache.html</a> (<a href="https://mdn.github.io/webassembly-examples/other-examples/indexeddb-cache.html">動作例</a>) を参照してください。</p>

<h2 id="Browser_support" name="Browser_support">ブラウザのサポート</h2>

<p>現時点では、WebAssembly モジュールの構造化された複製をサポートしているため、この手法は Firefox と Edge で動作します。</p>

<p>Chrome は WebAssembly 構造化クローンサポートフラグの背後にサポートが実装されていますが、いくつかの懸念があるため、デフォルトではまだ有効にしていません (たとえば、<a href="https://github.com/WebAssembly/design/issues/972">この説明を参照</a>)。</p>

<p>Safari ではまだ実装されていません。</p>
