---
title: WebAssembly JavaScript API を使用する
slug: WebAssembly/Using_the_JavaScript_API
translation_of: WebAssembly/Using_the_JavaScript_API
---
<div>{{WebAssemblySidebar}}</div>

<p class="summary">これまでに <a href="/ja/docs/WebAssembly/C_to_wasm">Emscriptenのようなツールを使用して他の言語からモジュールをコンパイルしたり</a>、<a href="/ja/docs/WebAssembly/Loading_and_running">あなた自身のコードをロードして実行しました</a>。次のステップは他のWebAssembly JavaScript APIの使い方について学ぶことです。この記事ではあなたが知る必要があることを説明します。</p>

<div class="note">
<p><strong>注</strong>: もし、この記事で説明している基本的なコンセプトがよくわからない場合、<a href="/ja/docs/WebAssembly/Concepts">WebAssemblyのコンセプト</a> をはじめに読んでからこの記事に戻ってきてください。</p>
</div>

<h2 id="シンプルな例">シンプルな例</h2>

<p>WebAssembly JavaScript API の使用方法と、wasm モジュールをロードしてウェブページ内で使用する方法をステップ・バイ・ステップの例を通して実行してみましょう。</p>

<div class="note">
<p><strong>注</strong>: サンプルコードは <a href="https://github.com/mdn/webassembly-examples">webassembly-examples</a> GitHub レポジトリから参照してください。</p>
</div>

<h3 id="例を準備する">例を準備する</h3>

<ol>
 <li>まずは、wasm モジュールが必要です! <a href="https://github.com/mdn/webassembly-examples/raw/master/js-api-examples/simple.wasm">simple.wasm</a> をコピーしてローカルマシンの新しいディレクトリの中に保存します。</li>
 <li>次に、使用しているブラウザが WebAssembly に対応しているか確認します。Firefox 52+ と Chrome 57+ では WebAssembly がデフォルトで有効になっています。</li>
 <li>次に、wasm ファイルと同じディレクトリに <code>index.html</code> という名前でシンプルな HTML ファイルを作成しましょう (もしも簡単に利用できるテンプレートを持っていない場合、<a href="https://github.com/mdn/webassembly-examples/blob/master/template/template.html">simple template</a> を使用できます) 。</li>
 <li>ここで、何が起こっているのか理解を助けるために、wasm モジュールのテキスト表現を見てみましょう (<a href="/ja/docs/WebAssembly/Text_format_to_wasm">テキストフォーマットから wasm に変換する</a> も参照してください):
  <pre>(module
  (func $i (import "imports" "imported_func") (param i32))
  (func (export "exported_func")
    i32.const 42
    call $i))</pre>
 </li>
 <li>2行目に2階層の名前空間を持つインポートの宣言があります — 内部関数 <code>$i</code> は <code>imports.imported_func</code> からインポートされています。wasm モジュールにインポートするオブジェクトを記述するときに、この2階層の名前空間を JavaScript に反映させる必要があります。<code>&lt;script&gt;&lt;/script&gt;</code> 要素を HTML 内に作成して、次のコードを追加します:
  <pre class="brush: js">var importObject = {
  imports: {
      imported_func: function(arg) {
        console.log(arg);
      }
    }
  };</pre>
 </li>
</ol>

<p>上で説明したように、 <code>imports.imported_func</code> でインポート機能を利用できます。</p>

<div class="note">
<p><strong>注</strong>: <a href="/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions">ES6のアローファンクション</a> を使用するとより簡潔に書くことができます:</p>

<pre class="brush: js">var importObject = { imports: { imported_func: arg =&gt; console.log(arg) } };</pre>
</div>

<p>スタイルはあなたが好きなものを選んでください。</p>

<h3 id="wasm_モジュールをロードして使用する">wasm モジュールをロードして使用する</h3>

<p>インポートオブジェクトを用意して、wasm ファイルをフェッチして、ArrayBuffer に変換して、その後にエクスポートされた関数を使用します。</p>

<p>スクリプトに次のコードを追加します。以下は最初のブロックです:</p>

<pre class="brush: js">fetch('simple.wasm').then(response =&gt;
  response.arrayBuffer()
).then(bytes =&gt;
  WebAssembly.instantiate(bytes, importObject)
).then(results =&gt; {
  results.instance.exports.exported_func();
});</pre>

<div class="note">
<p><strong>注</strong>: <a href="/ja/docs/WebAssembly/Loading_and_running">WebAssemblyコードのロードと実行</a> でどのように機能するか詳しく説明しました。自信が無い場合、思い出すために参照してください。</p>
</div>

<p>この結果、エクスポートされた WebAssembly 関数 <code>exported_func</code> を呼び出すとインポートされた JavaScript 関数 <code>imported_func</code> が呼び出され、WebAssembly インスタンス内の提供される値 (42) がコンソールに表示されます。コード例を保存して WebAssembly をサポートするブラウザで読み込むと 実際に動作が確認できるでしょう!</p>

<div class="note">
<p><strong>注</strong>: WebAssembly は Firefox 52+ と Chrome 57+/最新のOpera でデフォルトで有効になっています (Firefox 47+ で <em>about:config</em> で <code>javascript.options.wasm</code> フラグを有効化するか、Chrome (51+) と Opera (38+) で <em>chrome://flags</em> の <em>Experimental WebAssembly</em> フラグを有効化することによって動作させることができます)</p>
</div>

<p>これは複雑で長い例のほんの一部ですが、ウェブアプリケーション内でどのように JavaScript と WebAssembly を並行して動作させることができるかを説明しています。別の場所でも言及していますが、WebAssembly は JavaScript の置き換えを目指しているわけではありません。両方が協力して、お互いの強みを活かすことができます。</p>

<h3 id="デベロッパーツールで_wasm_を見る">デベロッパーツールで wasm を見る</h3>

<p>Firefox 54+ では、デベロッパーツールのデバッガパネルでウェブページに含まれる wasm コードのテキスト表現を表示する機能があります。これを表示するためには、デバッガパネルに移動して、“xxx &gt; wasm” エントリをクリックしてください。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/14655/wasm-debugger-output.png" style="display: block; height: 354px; margin: 0px auto; width: 1026px;"></p>

<p>Firefox で、WebAssembly をテキストとして表示することに加えて、開発者は WebAssembly のテキスト表現を使用してすぐにデバッグを開始することができます (ブレークポイント、コールスタックの検査、ステップ実行など) 。<span class="watch-title" dir="ltr" id="eow-title" title="WebAssembly debugging with Firefox DevTools"><a href="https://www.youtube.com/watch?v=R1WtBkMeGds">WebAssembly debugging with Firefox DevTools</a> </span>の動画を参照してください。</p>

<h3 id="WebAssembly_モジュールのストリーミング">WebAssembly モジュールのストリーミング</h3>

<p>Firefox 58からソース (wasm) から WebAssembly モジュールをコンパイル、インスタンス化する機能が新しく追加されました。これは、 {{jsxref("WebAssembly.compileStreaming()")}} 、 {{jsxref("WebAssembly.instantiateStreaming()")}} メソッドを使用して実現されます。これらのメソッドは、バイトコードを直接 <code>Module</code>/<code>Instance</code> インスタンスに変換することができます。 {{domxref("Response")}} を一旦 {{domxref("ArrayBuffer")}} にするステップを省略できるので、非ストリーミングなメソッドよりもシンプルになるでしょう。</p>

<p>次の例 (Github上のデモ <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/compile-streaming.html">compile-streaming.html</a> と、<a href="https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html">動作例</a> を参照してください) では、ソースから直接 .wasm モジュールをストリームして、 {{jsxref("WebAssembly.Module")}} オブジェクトにコンパイルしています。<code>compileStreaming()</code>  関数は {{domxref("Response")}} オブジェクトを渡すプロミスを受け取るので、直接 {{domxref("WindowOrWorkerGlobalScope.fetch()")}} の呼び出し結果を渡すことができます。</p>

<pre class="brush: js">var importObject = { imports: { imported_func: arg =&gt; console.log(arg) } };

WebAssembly.compileStreaming(fetch('simple.wasm'))
.then(module =&gt; WebAssembly.instantiate(module, importObject))
.then(instance =&gt; instance.exports.exported_func());
</pre>

<p>結果として受け取ったモジュールインスタンスはその後 {{jsxref("WebAssembly.instantiate()")}} を使用してインスタンス化され、エクスポートされた関数が実行されます。</p>

<p>次の例 (Github上のデモ <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html">instantiate-streaming.html</a> と、 <a href="https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html">動作例</a> を参照してください) は結果的には同じになりますが、 <code>instantiateStreaming()</code> を使用してインスタンス化のステップを別々にする必要をなくしています。</p>

<pre class="brush: js">var importObject = { imports: { imported_func: arg =&gt; console.log(arg) } };

WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(obj =&gt; obj.instance.exports.exported_func());</pre>

<h2 id="メモリ">メモリ</h2>

<p>WebAssembly の低レベルのメモリモデルでは、メモリはモジュール内で <a href="http://webassembly.org/docs/semantics/#linear-memory-accesses">ロード、ストア命令</a> を使用して読み書きされ る<a href="http://webassembly.org/docs/semantics/#linear-memory">線形メモリ</a> と呼ばれる型のない連続したバイト列として表現されます。このメモリモデルでは、任意のロード、ストア命令は線形メモリ全体の任意のバイトにアクセスすることができます。これはポインタなどの C/C++ の概念を忠実に表現するために必要なものです。</p>

<p>ただし、ネイティブの C/C++ プログラムでは使用可能なメモリ範囲がプロセス全体に及ぶ一方、個別の WebAssembly Instance がアクセス可能なメモリは、特定の WebAssembly Memory オブジェクトの (潜在的にとても小さい) 範囲だけになります。これにより単一のウェブアプリケーションで複数の独立した (WebAssembly を内部的に使用している) ライブラリが完全に分離された別々のメモリを持つことができます。</p>

<p>JavaScript では、Memory インスタンスはリサイズ可能な ArrayBuffer とみなすことができます。ArrayBuffer と同様に、単一のウェブアプリケーションで多くの独立した Memory オブジェクトを作成することができます。Memory オブジェクトは初期サイズと最大サイズ (オプショナル) を指定して、{{jsxref("WebAssembly.Memory()")}} コンストラクタから作成することができます。</p>

<p>簡単な例を見て探索を始めましょう。</p>

<ol>
 <li>
  <p><code>memory.html</code> という名前の新しいシンプルな HTMLページ を作成します (<a href="https://github.com/mdn/webassembly-examples/blob/master/template/template.html">simple template</a> をコピーしてください) 。<code>&lt;script&gt;&lt;/script&gt;</code> をページに追加します。</p>
 </li>
 <li>
  <p>Memory インスタンスを作成するために次の1行をスクリプトに追加します:</p>

  <pre class="brush: js">var memory = new WebAssembly.Memory({initial:10, maximum:100});</pre>

  <p><code>initial</code> と <code>maximum</code> は WebAssembly ページを1単位 (64KBに固定されています) とします。上の例では、Memory インスタンスは初期サイズが640KB、最大サイズが6.4MBを意味しています。</p>

  <p>WebAssembly Memory が持つバイト列は ArrayBuffer として buffer ゲッター/セッターから公開されています。例えば、線形メモリの先頭ワードに直接、42を書きこむにはこのようにします:</p>

  <pre class="brush: js">new Uint32Array(memory.buffer)[0] = 42;</pre>

  <p>その後に同じ値を返すことができます:</p>

  <pre class="brush: js">new Uint32Array(memory.buffer)[0]</pre>
 </li>
 <li>
  <p>デモで試してみましょう。これまでに追加した内容を保存してブラウザで読み込んだ後、JavaScript コンソールで上の2行を入力してみてください。</p>
 </li>
</ol>

<h3 id="メモリを拡張する">メモリを拡張する</h3>

<p>Memory インスタンスは {{jsxref("Memory.prototype.grow()")}} を呼び出すことで拡張することができます。引数は WebAssembly ページ単位で指定します:</p>

<pre class="brush: js">memory.grow(1);</pre>

<p>Memory インスタンスの作成時に最大値が指定していて、この最大値を超えて拡張しようとすると {{jsxref("WebAssembly.RangeError")}} 例外がスローされます。エンジンは提供された上限を利用してメモリを事前に確保しておくことで、より効率的なリサイズが可能になります。</p>

<p>注: {{domxref("ArrayBuffer")}} の byteLength はイミュータブルであるため、 {{jsxref("Memory.prototype.grow()")}} 操作が成功した後、buffer ゲッターは新しい (新しい byteLength で) ArrayBufferを返します。そして、前の ArrayBuffer は「切り離された状態」になるか、メモリから切り離されます。</p>

<p>関数と同様に、線形メモリはモジュール内で定義することもインポートすることもできます。同じようにモジュールは任意でメモリをエクスポートすることも可能です。これは JavaScript が WebAssembly インスタンスに対して新しく作成した <code>WebAssembly.Memory</code> をインポートで渡したり、Memory のエクスポートから (<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/exports">Instance.prototype.exports</a></code> <code>を介して</code>) 受け取れることを意味しています。</p>

<h3 id="より複雑なメモリの例">より複雑なメモリの例</h3>

<p>より複雑な例 (整数の配列を合計するWebAssemblyモジュール) で、上で言っていることを明確にしましょう。例は <a href="https://github.com/mdn/webassembly-examples/raw/master/js-api-examples/memory.wasm">memory.wasm</a> を参照してください。</p>

<ol>
 <li>
  <p><code>memory.wasm</code> のコピーを以前と同じディレクトリにコピーします。</p>

  <div class="note">
  <p><span style="font-size: 14px;"><strong>注</strong></span>: モジュールのテキスト表現は <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.wat">memory.wat</a> を参照してください。</p>
  </div>
 </li>
 <li>
  <p><code>memory.html</code> サンプルファイルに戻って、以前と同じように wasm モジュールをフェッチ、コンパイル、インスタンス化します (以下をスクリプトに追加してください):</p>

  <pre class="brush: js">fetch('memory.wasm').then(response =&gt;
  response.arrayBuffer()
).then(bytes =&gt;
  WebAssembly.instantiate(bytes)
).then(results =&gt; {
  // add your code here
});</pre>
 </li>
 <li>
  <p>このモジュールはモジュール内部のメモリをエクスポートします。instance という名前でモジュールのInstanceが取得され、エクスポートされた関数 <code>accumulate()</code> を使用してモジュールの線形メモリ (<code>mem</code>) に直接入力された配列を合計する事ができます。指定された場所に、次のコードを追加してみましょう:</p>

  <pre class="brush: js">var i32 = new Uint32Array(results.instance.exports.mem.buffer);
for (var i = 0; i &lt; 10; i++) {
  i32[i] = i;
}

var sum = results.instance.exports.accumulate(0, 10);
console.log(sum);</pre>
 </li>
</ol>

<p>Memoryオブジェクト自体でなく、Memory オブジェクトの buffer (<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer">Memory.prototype.buffer</a></code>) から {{domxref("Uint32Array")}} ビューを作成していることに注意してください。</p>

<p>メモリのインポートは関数のインポートと同じように機能します。JavaScript 関数の代わりに Memory オブジェクトを渡すだけです。メモリのインポートは2つの理由で役に立ちます:</p>

<ul>
 <li>モジュールをコンパイルする前、もしくは並行して、メモリの初期コンテンツをJavaScriptでフェッチ、または作成することができます。</li>
 <li>単一の Memory オブジェクトを複数のモジュールインスタンスにインポートすることができます。これは WebAssembly で動的リンクを実装するための重要な構成要素です。</li>
</ul>

<div class="note">
<p><strong>注</strong>: 完全なデモは <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html">memory.html</a> (<a href="https://mdn.github.io/webassembly-examples/js-api-examples/memory.html">動作例</a>) を参照してください。このバージョンでは <code><a href="https://github.com/mdn/webassembly-examples/blob/master/wasm-utils.js">fetchAndInstantiate()</a></code> 関数を使用しています。</p>
</div>

<h2 id="テーブル">テーブル</h2>

<p>WebAssembly Table は JavaScript と WebAssembly コードの両方でアクセスできるリサイズ可能な <a href="https://en.wikipedia.org/wiki/Reference_(computer_science)">参照</a> の型付き配列です。Memory はリサイズ可能な生のバイト列を提供しますが、参照はエンジンに保証された値(このバイト列は安全性、移植性、安定性の理由からコンテンツによって直接読み書きしてはいけない)であるため、参照を格納するために使用することは安全ではありません。</p>

<p>テーブルは要素の型を持ち、テーブルに格納できる参照の型が制限されます。WebAssembly の現バージョンでは WebAssembly コード内で必要な参照の型は関数型の1つだけです。そして、これが唯一の正しい要素の型となります。将来のバージョンでは、さらに多くの要素の型が追加される予定です。</p>

<p>関数参照は関数ポインタを持つ C/C++ のような言語をコンパイルするために必要です。C/C++ のネイティブ実装では、関数ポインタはプロセスの仮想アドレス空間内の関数のコードの生のアドレスで表現されるため、安全性の理由から線形メモリに直接格納することはできません。代わりに、関数参照はテーブルに格納されます。整数値のインデックスは線形メモリに格納することができます。</p>

<p>関数ポインタを呼び出すときは、WebAssembly を呼び出す側でインデックスを指定します。インデックスを付けたり、インデックス付けされた関数参照を呼び出す前に安全な境界のチェックをすることができます。したがって、テーブルは現在、安全かつ移植可能に低レベルのプログラミング言語の機能をコンパイルするために使用される、低レベルのプリミティブです。</p>

<p>テーブルは <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/set">Table.prototype.set()</a></code> <code>を通してテーブル内の値を1つ更新することができます。さらに、</code><code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/grow">Table.prototype.grow()</a></code> でテーブルに格納できる値の数を増やすことができます。時間の経過とともに間接呼び出しされる関数を変更することを許容し、これは <a href="http://webassembly.org/docs/dynamic-linking/">動的リンク技術</a> のために必要なものです。変化した値に対してJavaScriptでは <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get">Table.prototype.get()</a></code> を通してすぐにアクセスできます。wasm モジュールからも同様です。</p>

<h3 id="テーブルの例">テーブルの例</h3>

<p>テーブルのシンプルな例を見てみましょう。紹介する WebAssembly モジュールは2つの要素 (要素0は13、要素1は42を返します) を持つテーブルをエクスポートするものです。モジュールは <a href="https://github.com/mdn/webassembly-examples/raw/master/js-api-examples/table.wasm">table.wasm</a> から見つけられます。</p>

<ol>
 <li>
  <p><code>table.wasm</code> をローカルの新しいディレクトリにコピーします。</p>

  <div class="note">
  <p><strong>注</strong>: このモジュールのテキスト表現は <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table.wat">table.wat</a> を参照してください。</p>
  </div>
 </li>
 <li>
  <p><a href="https://github.com/mdn/webassembly-examples/blob/master/template/template.html">HTML template</a> を <code>table.html</code> という名前で同じディレクトリにコピーします。</p>
 </li>
 <li>
  <p>前と同じように、wasm モジュールをフェッチ、コンパイル、インスタンス化します。次のコードを HTML の body の末尾の {{htmlelement("script")}} 要素に追加します:</p>

  <pre class="brush: js">fetch('table.wasm').then(response =&gt;
  response.arrayBuffer()
).then(bytes =&gt;
  WebAssembly.instantiate(bytes)
).then(results =&gt; {
  // add your code here
});</pre>
 </li>
 <li>
  <p>今度はテーブル内のデータにアクセスしてみましょう。コードの指定された場所に次の行を追加します:</p>

  <pre class="brush: js">var tbl = results.instance.exports.tbl;
console.log(tbl.get(0)());  // 13
console.log(tbl.get(1)());  // 42</pre>
 </li>
</ol>

<p>このコードはテーブルに格納されている各関数参照に順番にアクセスし、内包した値をコンソールに書き出すためにインスタンス化します。<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get">Table.prototype.get()</a></code> で各関数参照を取得した後、関数を実行するためには括弧を追加することに注意してください。</p>

<div class="note">
<p><strong>注</strong>: 完全なデモは <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table.html">table.html</a> (<a href="https://mdn.github.io/webassembly-examples/js-api-examples/table.html">動作例</a>) を参照してください。このバージョンでは <code><a href="https://github.com/mdn/webassembly-examples/blob/master/wasm-utils.js">fetchAndInstantiate()</a></code> 関数を使用しています。</p>
</div>

<h2 id="重複度">重複度</h2>

<p>ここでは、主な WebAssembly の構成要素のデモを見てきました。これは重複度の概念に言及するのに適しています。これはアーキテクチャ効率の点で多くの進歩がもたらされます:</p>

<ul>
 <li>1つの関数がN個のクロージャを生成するのと同じく、1つのモジュールはN個のインスタンスを持つことができます。</li>
 <li>1つのモジュールインスタンスは0から1つのメモリインスタンスを持つことができます。これは"アドレス空間"を提供します。WebAssembly の将来のバージョンでは1モジュールにつき0からN個のメモリインスタンスを許容する可能性があります (<a href="http://webassembly.org/docs/future-features/#multiple-tables-and-memories">Multiple Tables and Memories</a> を参照してください) 。</li>
 <li>1つのモジュールインスタンスは0から1つのテーブルインスタンスを持つことができます。これはインスタンスの"関数アドレス空間"で、C言語の関数ポインタを実装するために使用されます。WebAssembly の将来のバージョンでは1モジュールにつき0からN個のメモリインスタンスを許容する可能性があります。</li>
 <li>1つのメモリ、テーブルは0からN個のモジュールから使用することができます。複数のインスタンス全てが同じアドレス空間を共有でき、これは <a href="http://webassembly.org/docs/dynamic-linking">動的リンク</a> を可能にします。</li>
</ul>

<p>Understanding text format article の記事で重複度の働きについてみることができます。その中の Mutating tables and dynamic linking の章を見てください (TBD)。</p>

<h2 id="まとめ">まとめ</h2>

<p>この記事では WebAssembly JavaScript API の基本的な使い方について説明しました。WebAssembly モジュールを JavaScript のコンテキストに組み込む方法、その関数を使えるようすること、JavaScript でのメモリとテーブルの使い方について。さらに、多重度の概念についても触れました。</p>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li><a href="http://webassembly.org/">webassembly.org</a></li>
 <li><a href="/ja/docs/WebAssembly/Concepts">WebAssembly のコンセプト</a></li>
 <li><a href="https://research.mozilla.org/webassembly/">WebAssembly on Mozilla Research</a></li>
</ul>
