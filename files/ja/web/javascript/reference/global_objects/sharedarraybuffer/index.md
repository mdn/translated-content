---
title: SharedArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
tags:
  - Class
  - JavaScript
  - Shared Memory
  - SharedArrayBuffer
  - TypedArrays
browser-compat: javascript.builtins.SharedArrayBuffer
translation_of: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
---
<div>{{JSRef}}</div>

<p><strong><code>SharedArrayBuffer</code></strong> オブジェクトは、固定長の生バイナリデータバッファーのジェネリックを表すために使用されます。{{jsxref("ArrayBuffer")}} オブジェクトと似ていますが、こちらは共有メモリー上にビューを生成するために使用されます。 <code>ArrayBuffer</code> と異なり、<code>SharedArrayBuffer</code> は分離できません。</p>

<h2 id="Description">解説</h2>

<h3 id="Allocating_and_sharing_memory">メモリーの割り当てと共有</h3>

<p>クラスター内のあるエージェントから別のエージェント (エージェントとは、ウェブページのメインプログラムまたはそのウェブワーカーのひとつ) へ、{{jsxref("SharedArrayBuffer")}} オブジェクトを使用してメモリーを共有するために、<code><a href="/ja/docs/Web/API/Worker/postMessage">postMessage</a></code> と<a href="/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">構造化クローン</a>を使用します。</p>

<p>構造化クローンアルゴリズムは <code>SharedArrayBuffers</code> と、<code>SharedArrayBuffers</code> にマッピングされた <code>TypedArrays</code> を受け入れます。どちらの場合も <code>SharedArrayBuffer</code> オブジェクトは受信者に転送されて、受信側のエージェントで新たなプライベートの SharedArrayBuffer オブジェクトになります ({{jsxref("ArrayBuffer")}} と同じように)。しかし、2 つの <code>SharedArrayBuffer</code> オブジェクトから参照される共有データブロックは同一のデータブロックであり、あるエージェントによるブロックへの副作用は、結果的に他方のエージェントからも見えます。</p>

<pre class="brush: js">var sab = new SharedArrayBuffer(1024);
worker.postMessage(sab);
</pre>

<h3 id="Updating_and_synchronizing_shared_memory_with_atomic_operations">Atomic 操作による共有メモリーを更新や同期</h3>

<p>共有メモリーは、ワーカー内でもメインスレッド内でも同時に生成や更新ができます。システム (CPU、 OS、ブラウザー) によっては、変更がすべてのコンテキストに通知されるまでに少々時間がかかります。同期するためには、{{jsxref("Atomics", "atomic", "", 1)}} 操作が必要です。</p>

<h3 id="APIs_which_use_SharedArrayBuffer_objects">SharedArrayBuffer オブジェクトを使用する API</h3>

<ul>
 <li><a href="/ja/docs/Web/API/WebGLRenderingContext/bufferData" title="WebGL API WebGLRenderingContext.bufferData() メソッドは、バッファーオブジェクトのデータストアを初期化、作成します。"><code>WebGLRenderingContext.bufferData()</code></a></li>
 <li><a href="/ja/docs/Web/API/WebGLRenderingContext/bufferSubData" title="The WebGLRenderingContext.bufferSubData() method of the WebGL API updates a subset of a buffer object's data store."><code>WebGLRenderingContext.bufferSubData()</code></a></li>
 <li><a href="/ja/docs/Web/API/WebGL2RenderingContext/getBufferSubData" title="The WebGL2RenderingContext.getBufferSubData() method of the WebGL 2 API reads data from a buffer binding point and writes them to an ArrayBuffer or SharedArrayBuffer."><code>WebGL2RenderingContext.getBufferSubData()</code></a></li>
</ul>

<h3 id="Security_requirements">セキュリティの要件</h3>

<p>共有メモリーと高解像度タイマーは、 <a href="https://ja.wikipedia.org/wiki/Spectre">Spectre</a> の対策として 2018 年の初めに事実上<a href="https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/">無効化されました</a>。 2020 年には、共有メモリを再び有効にするために、新しい安全なアプローチが標準化されました。いくつかのセキュリティ対策を施すことで、 <code><a href="/ja/docs/Web/API/Window/postMessage">postMessage()</a></code> が <code>SharedArrayBuffer</code> オブジェクトに対して例外を発生しなくなり、スレッド間の共有メモリが利用できるようになります。</p>

<p>基本的な要件として、文書が<a href="/ja/docs/Web/Security/Secure_Contexts">安全なコンテキスト</a>にある必要があります。</p>

<p>最上位の文書では、サイトにオリジン間の分離性を持たせるため、次の2つのヘッダーを設定する必要があります。</p>

<ul>
 <li><a href="/ja/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy"><code>Cross-Origin-Opener-Policy</code></a> で <code>same-origin</code> の値を指定すること (オリジンを攻撃者から守るため)</li>
 <li><a href="/ja/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy"><code>Cross-Origin-Embedder-Policy</code></a> で <code>require-corp</code> の値を指定すること (被害者を自分のオリジンから守るため)</li>
</ul>

<pre class="brush: plain">Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
</pre>

<p>オリジン間の分離が成功したかどうかは、ウィンドウとワーカーのコンテキストで利用できる <code><a href="/ja/docs/Web/API/WindowOrWorkerGlobalScope/crossOriginIsolated">crossOriginIsolated</a></code> プロパティを使って確認することができます。</p>

<pre class="brush: js">if (crossOriginIsolated) {
  // Post SharedArrayBuffer
} else {
  // Do something else
}</pre>

<p>また、ブラウザー (Firefox 79など) で展開され始めている<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Planned_changes">共有メモリーの計画的な変更</a>も参照してください。</p>

<h3 id="Always_use_the_new_operator_to_create_a_SharedArrayBuffer">SharedArrayBuffer の生成には new 演算子が必要</h3>

<p><code>SharedArrayBuffer</code> コンストラクターは、{{jsxref("Operators/new", "new")}} 演算子で呼び出す必要があります。<code>new</code> 演算子なしで関数として <code>SharedArrayBuffer</code> コンストラクターを呼び出すと、{{jsxref("TypeError")}} が発生します。</p>

<pre class="brush: js example-bad">var sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// without new is forbidden</pre>

<pre class="brush: js example-good">var sab = new SharedArrayBuffer(1024);</pre>

<h2 id="Constructor">コンストラクター</h2>

<dl>
 <dt><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer"><code>SharedArrayBuffer()</code></a></dt>
 <dd>新しい <code>SharedArrayBuffer</code> オブジェクトを生成します。</dd>
</dl>

<h2 id="Instance_properties">インスタンスプロパティ</h2>

<dl>
 <dt>{{jsxref("SharedArrayBuffer.prototype.byteLength")}}</dt>
 <dd>配列の大きさをバイト数で表します。これは配列が構築されたときに確立され、変更することはできません。<strong>読み取り専用です。</strong></dd>
</dl>

<h2 id="Instance_methods">インスタンスメソッド</h2>

<dl>
 <dt>{{jsxref("SharedArrayBuffer.slice", "SharedArrayBuffer.prototype.slice(begin, end)")}}</dt>
 <dd>新しい <code>SharedArrayBuffer</code> を作成し、その中身をこの <code>SharedArrayBuffer</code> の <code>begin</code> の位置から <code>end</code> の位置の一つ手前までのバイトをコピーして返します。 <code>begin</code> または <code>end</code> が負の数の場合は、配列の先頭からではなく末尾からの位置で参照します。</dd>
</dl>

<h2 id="Examples">例</h2>

<h3 id="Creating_a_new_SharedArrayBuffer">新しい SharedArrayBuffer の生成</h3>

<pre class="brush: js">var sab = new SharedArrayBuffer(1024);</pre>

<h3 id="Slicing_the_SharedArrayBuffer">SharedArrayBuffer の分割</h3>

<pre class="brush: js">sab.slice();    // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2);   // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2);  // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }</pre>

<h3 id="Using_it_in_a_WebGL_buffer">WebGL バッファー内での使用</h3>

<pre class="brush: js">const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, sab, gl.STATIC_DRAW);</pre>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Atomics")}}</li>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li><a href="/ja/docs/Web/JavaScript/Typed_arrays">JavaScript 型付き配列</a></li>
 <li><a href="/ja/docs/Web/API/Web_Workers_API">Web Worker</a></li>
 <li><a href="https://github.com/lars-t-hansen/parlib-simple">parlib-simple </a>– 同期と作業分配抽象化を提供するシンプルなライブラリー</li>
 <li><a href="https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md">共有メモリー – 簡潔なチュートリアル</a></li>
 <li>
  <p><a href="https://dev.mozilla.jp/2016/05/a-taste-of-javascripts-new-parallel-primitives/">JavaScript の並列処理機能を味見してみる</a></p>
 </li>
</ul>
