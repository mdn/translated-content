---
title: WebAssembly テキストフォーマットを理解する
slug: WebAssembly/Understanding_the_text_format
tags:
  - Functions
  - JavaScript
  - S-expressions
  - WebAssembly
  - calls
  - memory
  - shared address
  - table
  - text format
  - was
  - wasm
translation_of: WebAssembly/Understanding_the_text_format
---
<div>{{WebAssemblySidebar}}</div>

<p class="summary">人間が WebAssembly を読んだり編集するための wasm バイナリ形式のテキスト表現が存在します。これはテキストエディター、ブラウザーの開発者ツールなどで見せるために設計された中間表現です。この記事では、テキスト形式のしくみ、生の構文、および元のバイトコードの表現との関係 (と JavaScript で wasm を表現したラッパーオブジェクト) について説明します。</p>

<div class="blockIndicator note">
<p><strong>注</strong>: この記事は、あなたがウェブ開発者で wasm モジュールをページにロードしてコード内で使用するだけなら過剰なものかもしれません (<a href="/ja/docs/WebAssembly/Using_the_JavaScript_API">WebAssembly JavaScript API を使用する</a> を参照)。しかし、例えば、パフォーマンスを最適化するために wasm モジュールを書きたいときや、あなた自身で WebAssembly コンパイラを作るときに役に立ちます。</p>
</div>

<h2 id="S-expressions" name="S-expressions">S 式</h2>

<p>バイナリ、テキスト形式の両方で、 WebAssembly の基本的なコードの単位はモジュールです。テキスト形式ではモジュールは1つの大きなS式として表現されます。S式はツリー構造を表現するための非常に古くてシンプルなテキスト形式で、モジュールはモジュールの構造とそのコードを記述するノードツリーとして考えることができます。しかし、プログラミング言語の AST (抽象構文木) とは異なり、WebAssembly のツリーはかなり平坦で、ほとんどは命令の列で構成されています。</p>

<p>はじめに、 S 式がどういうものか見てみましょう。ツリー内の各ノードは1組の括弧内に入れられます — <code>( ... )</code>。 括弧内の最初のラベルは、それがどのノードタイプかを示し、スペースで区切られた属性、または子ノードのリストが続きます。次のコードは WebAssembly の S 式を意味します:</p>

<pre class="brush: wasm; no-line-numbers notranslate">(module (memory 1) (func))</pre>

<p>ルートノード "module" と2つの子ノード、"1" を属性に持つ "memory" ノード、"func" ノードを表します。これらのノードが実際にどういう意味なのかを見ていきましょう。</p>

<h3 id="The_simplest_module" name="The_simplest_module">最もシンプルなモジュール</h3>

<p>最もシンプルで短い実行可能な wasm モジュールから始めてみましょう。</p>

<pre class="brush: wasm; no-line-numbers notranslate">(module)</pre>

<p>このモジュールは完全に空ですが、モジュールとしては有効です。</p>

<p>いま、このモジュールをバイナリに変換すると (<a href="/ja/docs/WebAssembly/Text_format_to_wasm">WebAssembly テキストフォーマットから wasm に変換する</a> を参照) 、 <a href="http://webassembly.org/docs/binary-encoding/#high-level-structure">バイナリ形式</a> で記述された8バイトのモジュールヘッダーだけになります:</p>

<pre class="brush: wasm; no-line-numbers notranslate">0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION</pre>

<h3 id="Adding_functionality_to_your_module" name="Adding_functionality_to_your_module">モジュールに機能を追加する</h3>

<p>Ok、これは全然面白くないですね。モジュールに実行可能なコードを追加していきましょう。</p>

<p>全ての WebAssembly モジュール内のコードは次の擬似コード構造を持つ関数にグループ化されます:</p>

<pre class="brush: wasm; no-line-numbers notranslate">( func &lt;signature&gt; &lt;locals&gt; &lt;body&gt; )</pre>

<ul>
 <li><strong>signature</strong> は関数が何を受け取る (引数) かと何を返す (返値) かを宣言します。</li>
 <li><strong>locals</strong> は JavaScript でいうと変数のようなものですが、明示的な型が宣言されます。</li>
 <li><strong>body</strong> は線形の低レベルな命令列です。</li>
</ul>

<p>S式であるために違って見えますが、これは、他の言語の関数に似ています。</p>

<h2 id="Signatures_and_parameters" name="Signatures_and_parameters">シグネチャと引数</h2>

<p>シグネチャは返値の型宣言のリストが後に続く、引数の型宣言のシーケンスです。ここで注目すべきは:</p>

<ul>
 <li>
  <p class="syntaxbox">結果がない場合、関数は何も返しません。</p>
 </li>
 <li>現在は、最大で1つの返値を返すことができますが、<a href="https://webassembly.org/docs/future-features#multiple-return">任意の数に緩和される予定</a> です。</li>
</ul>

<p>各引数は明示的に宣言された型を持ちます。wasm では現在4つの型が有効です:</p>

<ul>
 <li><code>i32</code>: 32ビット整数</li>
 <li><code>i64</code>: 64ビット整数</li>
 <li><code>f32</code>: 32ビット浮動小数点数</li>
 <li><code>f64</code>: 64ビット浮動小数点数</li>
</ul>

<p>単体の引数は <code>(param i32)</code> 、返値は <code>(result i32)</code> のように書きます。したがって、2つの32ビット整数を引数にとり、64ビット浮動小数点数を返すバイナリ関数は次のように記述します:</p>

<pre class="brush: wasm; no-line-numbers notranslate">(func (param i32) (param i32) (result f64) ... )</pre>

<p>シグネチャのあとに型付けされたローカル変数のリストが続きます (例: <code>(local i32)</code>) 。 引数は基本的には呼び出し元から渡された、対応する引数の値で初期化された、ただのローカル変数です。</p>

<h2 id="Getting_and_setting_locals_and_parameters" name="Getting_and_setting_locals_and_parameters">ローカル変数と引数を取得/設定する</h2>

<p>ローカル変数と引数は関数本体から <code>local.get</code> と <code>local.set</code> 命令を使用して読み書きすることができます。</p>

<p><code>local.get</code>/<code>local.get</code> コマンドは数値のインデックスから取得/設定される項目を参照します。最初に引数が宣言順に、その後に、ローカル変数が宣言順に参照されます。次の関数を見てください:</p>

<pre class="brush: wasm; no-line-numbers notranslate">(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)</pre>

<p>命令 <code>local.get 0</code> は i32 の引数, <code>local.get 1</code> は f32 の引数、そして <code>local.get 2</code> は f64 のローカル変数を取得します。</p>

<p>ここで別の問題があります。数値のインデックスを使用して項目を参照すると、混乱したり、困ってしまうことがあります。そこで、テキストフォーマットでは、単純に型宣言の直前に (<code>$</code>) をプレフィックスとして付けた名前を、引数、ローカル変数や他の多くの項目につけることができます。</p>

<p>したがって、上記のシグネチャを次のように書き直すことができます:</p>

<pre class="brush: wasm; no-line-numbers notranslate">(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)</pre>

<p>そして、<code>local.get 0</code> の代わりに <code>local.get $p1</code> と書くことができるようになります (このテキストがバイナリに変換されたとき、バイナリには整数値だけが残されることに注意してください) 。</p>

<h2 id="Stack_machines" name="Stack_machines">スタックマシン</h2>

<p>関数本体を書く前に、もう1つ、スタックマシンについて話をする必要があります。ブラウザはそれを更に効率的な形にコンパイルしますが、wasm の実行はスタックマシンとして定義されます。スタックマシンの基本的なアイデアは全ての命令がスタックから特定の数の <code>i32</code>/<code>i64</code>/<code>f32</code>/<code>f64</code> 値をプッシュ、ポップするようにすることです。</p>

<p>例えば、 <code>local.get</code> はローカル変数の値をスタックにプッシュするように定義されます。そして、<code>i32.add</code> は2つの <code>i32</code> 値 (スタックにプッシュされた前の2つの値を暗黙的に取得します) をポップし、合計を計算して (2^32 の剰余として) 結果の i32 値をプッシュします。</p>

<p>関数が呼び出されたとき、空のスタックから開始され、徐々に積まれてゆき、本体の命令が実行されると空になります。例として、次の関数の実行後について見てみましょう:</p>

<pre class="brush: wasm; notranslate">(func (param $p i32)
  (result i32)
  local.get $p
  local.get $p
  i32.add)</pre>

<p>スタックには <code>i32.add</code> よって処理された式 (<code>$p + $p</code>) の結果として、ただ1つの <code>i32</code> 値が積まれています。<font face="consolas, Liberation Mono, courier, monospace">関数の返値はスタックに残った最後の値になります。</font></p>

<p>WebAssembly のバリデーションルールはスタックが正確に一致することを保証します。もし、<code>(result f32)</code> と宣言した場合、最終的にスタックに1つだけ <code>f32</code> 値が積まれている状態である必要があります。結果の型がない場合は、スタックは空でなければなりません。</p>

<h2 id="Our_first_function_body" name="Our_first_function_body">はじめての関数本体</h2>

<p>前述の通り、関数本体は関数が呼び出された後に続く単純な命令列です。 これまでに学んだことと一緒にして、最終的にはシンプルな関数を含むモジュールを定義することができるようになります:</p>

<pre class="brush: wasm; notranslate">(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))</pre>

<p>この関数は2つの引数を受け取って、それらを足して、その結果を返します。</p>

<p>関数本体に置けるものはもっとたくさんありますが、いまはシンプルなもので始めます。進むにつれてもっと多くの例を見ていきます。全ての有効なオペコードのリストについては <a href="http://webassembly.org/docs/semantics/">webassembly.org Semantics reference</a> を調べてみてください。</p>

<h3 id="Calling_the_function" name="Calling_the_function">関数を呼び出す</h3>

<p>私達が定義した関数は自身では大したことはしません。いまはそれを呼び出す必要があります。どのようにすればよいでしょうか? ES2015 モジュールのように、wasm 関数はモジュール内の <code>export</code> ステートメントによって明示的にエクスポートしなくてはいけません。</p>

<p>ローカル変数と同じように、関数もデフォルトではインデックスで識別されますが、便宜上の関数名を付けることができます。<code>func</code> キーワードの直後にドル記号で始まる名前を付けてみましょう。</p>

<pre class="brush: wasm; no-line-numbers notranslate">(func $add … )</pre>

<p>ここでエクスポート宣言を追加する必要があります。次のようになります:</p>

<pre class="brush: wasm; no-line-numbers notranslate">(export "add" (func $add))</pre>

<p>ここで <code>add</code> は JavaScript で認識される関数名であるのに対して、<code>$add</code> はモジュール内の、どの WebAssembly 関数をエクスポートするのかを選択します。</p>

<p>最終的なモジュール (いまのところ) は次のようになります:</p>

<pre class="brush: wasm; notranslate">(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
)</pre>

<p>例に従うなら、上のモジュールを <code>add.wat</code> という名前で保存して、wabt を使用して (詳細は <a href="/ja/docs/WebAssembly/Text_format_to_wasm">WebAssembly テキストフォーマットから wasm に変換する</a> を参照してください) 、<code>add.wasm</code> というファイルに変換します。</p>

<p>次に、 <code>addCode</code> という名前の型付き配列にバイナリをロードし (<a href="/ja/docs/WebAssembly/Loading_and_running">WebAssembly コードのロードと実行</a> で説明されています) 、コンパイル、インスタンス化して、JavaScript で <code>add</code> 関数を実行します (<code>add()</code> はインスタンスの <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/exports">exports</a></code> プロパティから見つけることができます):</p>

<pre class="brush: js; notranslate">WebAssembly.instantiateStreaming(fetch('add.wasm'))
  .then(obj =&gt; {
    console.log(obj.instance.exports.add(1, 2));  // "3"
  });</pre>

<div class="blockIndicator note">
<p><strong>注</strong>: この例は GitHub の<a href="https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/add.html">add.html</a> (<a href="https://mdn.github.io/webassembly-examples/understanding-text-format/add.html">動作例</a>) にあります。関数のインスタンス化についての詳細は {{JSxRef("WebAssembly.instantiateStreaming()")}} も合わせて参照してください。</p>
</div>

<h2 id="Exploring_fundamentals" name="Exploring_fundamentals">基礎を探る</h2>

<p>ここでは実際の基本的な例を取り上げてから、いくつかの高度な機能について見てみましょう。</p>

<h3 id="Calling_functions_from_other_functions_in_the_same_module" name="Calling_functions_from_other_functions_in_the_same_module">同じモジュールの他の関数から関数を呼び出す</h3>

<p><code>call</code> 命令はインデックスか名前を指定して単一の関数を呼び出します。例えば、次のモジュールには2つの関数が含まれています。1つ目はただ42を返すだけ、もう1つは1つ目のものに1を足した値を返します:</p>

<pre class="brush: wasm; notranslate">(module
  (func $getAnswer (result i32)
    i32.const 42)
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add))</pre>

<div class="blockIndicator note">
<p><strong>注</strong>: <code>i32.const</code> は32ビット整数を定義してスタックにプッシュするだけです。 <code>i32</code> 以外の有効な型に変えて、const の値を好きなものに変えることができます (ここでは <code>42</code> に設定しました)。</p>
</div>

<p>この例で、あなたは <code>func</code> の直後に宣言された <code>(export "getAnswerPlus1")</code> セクションに気づくでしょう。これはこの関数をエクスポートするための宣言をして、さらにそれに名前をつけるために使用するショートカットです。</p>

<p>これは、上で行ったように、モジュール内の関数外の別の場所で、関数ステートメントと分けて定義するのと同等の機能です。</p>

<pre class="brush: wasm; no-line-numbers notranslate">(export "getAnswerPlus1" (func $functionName))</pre>

<p>上のモジュールを呼び出す JavaScript コードは次のようになります:</p>

<pre class="brush: js; notranslate">WebAssembly.instantiateStreaming(fetch('call.wasm'))
 .then(obj =&gt; {
    console.log(obj.instance.exports.getAnswerPlus1());  // "43"
  });</pre>

<div class="blockIndicator note">
<p><strong>注</strong>: この例は GitHub の <a href="https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/call.html">call.html</a> (<a href="https://mdn.github.io/webassembly-examples/understanding-text-format/call.html">動作例</a>) から参照してください。また、 <code>fetchAndInstantiate()</code> のソースは <code>wasm-utils.js</code> を参照してください。</p>
</div>

<h3 id="Importing_functions_from_JavaScript" name="Importing_functions_from_JavaScript">JavaScript から関数をインポートする</h3>

<p>すでに、JavaScript から WebAssembly 関数を呼び出すことについては確認しましたが、WebAssembly から JavaScript 関数を呼び出すことについてはどうでしょうか? WebAssembly は実際に JavaScript のビルトインの情報を持っていませんが、JavaScript か wasm 関数をインポートするための一般的な方法があります。例を見てみましょう:</p>

<pre class="brush: wasm; notranslate">(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))</pre>

<p>WebAssembly は2階層の名前空間のインポートステートメントを持ちます。ここでは、<code>console</code> モジュールから <code>log</code> 関数をインポートすることを要求しています。また、エクスポートされた <code>logIt</code> 関数から、上で紹介した <code>call</code> 命令を使用して、インポートされた関数を呼ぶ出すことができます。</p>

<p>インポートされた関数は通常の関数と同じようなものです。WebAssembly のバリデーションによって静的にチェックするシグネチャを持ち、インデックスか名前を付けて呼び出すことができます。</p>

<p>JavaScript 関数にはシグネチャの概念がないため、インポート宣言のシグネチャに関係なく、どの JavaScript 関数も渡すことができます。モジュールがインポート宣言をすると、 {{jsxref("WebAssembly.instantiate()")}} を呼び出す側は、対応したプロパティを持ったインポートオブジェクトを渡す必要があります。</p>

<p>上の場合、 <code>importObject.console.log</code> が JavaScript 関数であるようなオブジェクト(<code>importObject</code> と呼びましょう) が必要になります。</p>

<p>これは次のようになります。</p>

<pre class="brush: js; notranslate">var importObject = {
  console: {
    log: function(arg) {
      console.log(arg);
    }
  }
};

WebAssembly.instantiateStreaming(fetch('logger.wasm'), importObject)
  .then(obj =&gt; {
    obj.instance.exports.logIt();
  });</pre>

<div class="blockIndicator note">
<p><strong>注</strong>: この例は GitHub の <a href="https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/logger.html">logger.html</a> (<a href="https://mdn.github.io/webassembly-examples/understanding-text-format/logger.html">動作例</a>)を参照してください。</p>
</div>

<h3 id="WebAssembly_でのグローバルの宣言">WebAssembly でのグローバルの宣言</h3>

<p>WebAssembly には、 JavaScript からアクセス可能なグローバル変数インスタンスを作成する機能と、1つ以上の {{JSxRef("WebAssembly.Module")}} インスタンスにまたがってインポート/エクスポート可能なグローバル変数インスタンスを作成する機能があります。これは、複数のモジュールを動的にリンクすることができるので、非常に便利です。</p>

<p>WebAssembly のテキスト形式では、次のようになります (GitHub のリポジトリにある <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.wat">global.wat</a> を参照してください。JavaScript の例は <a href="https://mdn.github.io/webassembly-examples/js-api-examples/global.html">global.html</a> も参照してください)。</p>

<pre class="brush: wasm; notranslate">(module
   (global $g (import "js" "global") (mut i32))
   (func (export "getGlobal") (result i32)
        (global.get $g))
   (func (export "incGlobal")
        (global.set $g
            (i32.add (global.get $g) (i32.const 1))))
)</pre>

<p>これは、キーワード <code>global</code> を使用してグローバルな値を指定していることと、値のデータ型と一緒にキーワード <code>mut</code> を指定して変更可能にしたい場合に指定していることを除いて、以前に見たものと似ています。</p>

<p>JavaScript を使用して同等の値を作成するには、 {{JSxRef("WebAssembly.Global()")}} コンストラクターを使用してください。</p>

<pre class="brush: js; no-line-numbers notranslate">const global = new WebAssembly.Global({value: "i32", mutable: true}, 0);</pre>

<h3 id="WebAssembly_Memory" name="WebAssembly_Memory">WebAssembly メモリ</h3>

<p>上の例はとてもひどいロギング関数です。たった1つの整数値を表示するだけです! 文字列を表示するためにはどうしたらよいでしょうか? 文字列やさらに複雑なデータ型を扱うために WebAssembly は <strong>メモリ</strong> を提供します。WebAssembly によると、メモリは徐々に拡張することのできるただの大きなバイト列です。WebAssembly には <a href="http://webassembly.org/docs/semantics/#linear-memory">線形メモリ</a> から読み書きするための <code>i32.load</code> や <code>i32.store</code> のような命令を持っています。</p>

<p>JavaScript から見ると、メモリは全て1つの大きな (リサイズ可能な) {{domxref("ArrayBuffer")}} の内部にあるように見えます。それはまさに、asm.js とともに動かさなければならないもの全てです (ただしリサイズは出来ません。asm.js の <a href="http://asmjs.org/spec/latest/#programming-model">プログラミングモデル</a> を参照してください) 。</p>

<p>したがって、文字列は線形メモリ内部のどこかに存在するただのバイト列です。適切なバイト列の文字列をメモリに書き込んだとしましょう。その文字列をどのように JavaScript に渡すのでしょうか?</p>

<p>鍵は {{jsxref("WebAssembly.Memory()")}} インターフェースを使用して JavaScript から WebAssembly の線形メモリを作成し、関連するインスタンスメソッドを使用して既存の Memory インスタンス (現在は1モジュールごとに1つだけ持つことができます) にアクセスできることです。Memory インスタンスは <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer">buffer</a></code> ゲッターを持ち、これは線形メモリ全体を指し示す ArrayBuffer を返します。</p>

<p>Memory インスタンスは、例えば JavaScript から <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/grow">Memory.grow()</a></code> メソッドを使用して拡張することもできます。拡張したとき、<code>ArrayBuffer</code> はサイズを変更することができないため、現在の <code>ArrayBuffer</code> は切り離され、新しく作成された、より大きな <code>ArrayBuffer</code> を指し示すようになります。これは、JavaScript に文字列を渡すために必要なことは、線形メモリ内での文字列のオフセットと長さを指定する方法を渡すことだけであることを意味します。</p>

<p>文字列自身に文字列の長さの情報をエンコードするさまざまな方法 (例えば、C言語の文字列) がありますが、簡単にするためにここではオフセットと長さの両方を引数として渡します:</p>

<pre class="brush: wasm; no-line-numbers notranslate">(import "console" "log" (func $log (param i32) (param i32)))</pre>

<p>JavaScript 側では、バイト列を簡単に JavaScript 文字列にデコードするために <a href="/ja/docs/Web/API/TextDecoder">TextDecoder API</a> を使用することができます (ここでは <code>utf8</code> を指定していますが、他の多くのエンコーディングをサポートしています) 。</p>

<pre class="brush: js; notranslate">function consoleLogString(offset, length) {
  var bytes = new Uint8Array(memory.buffer, offset, length);
  var string = new TextDecoder('utf8').decode(bytes);
  console.log(string);
}</pre>

<p>最後のに欠けているのは、 <code>consoleLogString</code> が WebAssembly の <code>memory</code> にアクセスできる場所です。このあたり WebAssembly は柔軟です。JavaScript から <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory">Memory</a></code> オブジェクトを作成して WebAssembly モジュールでメモリをインポートするか、WebAssembly モジュールでメモリを作成して JavaScript で使用するためにエクスポートすることができます。</p>

<p>簡単にするために、JavaScript で作成したメモリを WebAssembly にインポートしてみましょう。<code>import</code> ステートメントは次のようになります。</p>

<pre class="brush: wasm; no-line-numbers notranslate">(import "js" "mem" (memory 1))</pre>

<p><code>1</code> はインポートされたメモリに少なくとも1ページ分のメモリが必要であることを示します(WebAssembly では1ページを 64KB と定義しています)。</p>

<p>文字列 "Hi" を出力する完全なモジュールを見てみましょう。通常のコンパイルされたCのプログラムでは文字列にメモリを割り当てる関数を呼び出しますが、ここでは独自のアセンブリを書くだけで、全ての線形メモリを所有しているので、<code>data</code> セクションを使用してグローバルメモリに文字列の内容を書きこむことができます。データセクションではインスタンス化時にオフセットを指定してバイト列の文字列を書きこむことができます。これはネイティブの実行可能形式の <code>.data</code> セクションに似ています。</p>

<p>最終的な wasm モジュールは次のようになります。</p>

<pre class="brush: wasm; notranslate">(module
  (import "console" "log" (func $log (param i32 i32)))
  (import "js" "mem" (memory 1))
  (data (i32.const 0) "Hi")
  (func (export "writeHi")
    i32.const 0  ;; pass offset 0 to log
    i32.const 2  ;; pass length 2 to log
    call $log))</pre>

<div class="blockIndicator note">
<p><strong>注</strong>: 上記の2重のセミコロン構文 (<code>;;</code>) は WebAssembly ファイル内でコメントを書くためのものです。</p>
</div>

<p>ここで、JavaScript から 1ページ分のサイズを持つ Memory を作成してそれに渡すことができます。結果としてコンソールに "Hi" と出力されます:</p>

<pre class="brush: js; notranslate">var memory = new WebAssembly.Memory({initial:1});

var importObject = { console: { log: consoleLogString }, js: { mem: memory } };

WebAssembly.instantiateStreaming(fetch('logger2.wasm'), importObject)
  .then(obj =&gt; {
    obj.instance.exports.writeHi();
  });</pre>

<div class="blockIndicator note">
<p><strong>注</strong>: 完全なソースは GitHub の <a href="https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/logger2.html">logger2.html</a> (<a href="https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html">動作例</a>) を参照してください。</p>
</div>

<h3 id="WebAssembly_tables" name="WebAssembly_tables">WebAssembly テーブル</h3>

<p>WebAssembly テキストフォーマットのツアーを終了するために、WebAssemblyで最も複雑でしばしば混乱する部分 (<strong>テーブル</strong>) を見てみましょう。テーブルは基本的に WebAssembly コードからインデックスでアクセスできるリサイズ可能な参照の配列です。</p>

<p>なぜテーブルが必要なのかを見るために、最初に観察する必要があります。さきほど見た <code>call</code> 命令 ({{anch("同じモジュールの他の関数から関数を呼び出す")}} を参照) は静的な関数インデックスをとり、結果として1つの関数しか呼び出せません。しかし、呼び出し先がランタイム値の場合はどうなるでしょうか?</p>

<ul>
 <li>JavaScript ではこれは常に見えます。関数はファーストクラスの値です。</li>
 <li>C/C++ では関数ポインタで見ることができます。</li>
 <li>C++ では仮想関数で見ることができます。</li>
</ul>

<p>WebAssembly にはこれを実現するための一種の呼び出し命令が必要だったため、動的な関数をオペランドに受け取る <code>call_indirect</code> を与えました。問題は WebAssembly ではオペランドに指定できる型が (現在) <code>i32</code>/<code>i64</code>/<code>f32</code>/<code>f64</code> だけなことです。</p>

<p>WebAssembly は <code>anyfunc</code> 型 (任意のシグニチャの関数を保持できるため "any") を追加することができましたが、あいにくセキュリティ上の理由から <code>anyfunc</code> 型は線形メモリに格納できませんでした。線形メモリは格納された値の生の内容をバイト列として公開し、これによって wasm コンテンツが生の関数ポインタを自由に観察できて破損させることができてしまいます。これはウェブ上では許可できません。</p>

<p>解決方法は関数参照をテーブルに格納し、代わりにテーブルのインデックスを渡すことでした。これは単なる i32 値です。<code>call_indirect</code> のオペランドは単純に i32 のインデックス値にすることができます。</p>

<h4 id="wasm_でテーブルを定義する">wasm でテーブルを定義する</h4>

<p>どのようにしてテーブルに wasm 関数を配置するのでしょうか? <code>data</code> セクションを使用して線形メモリの領域をバイト列で初期化するのと同じように、<code>elem</code> セクションを使用してテーブルの領域を関数の列で初期化することが出来ます:</p>

<pre class="brush: wasm; notranslate">(module
  (table 2 funcref)
  (elem (i32.const 0) $f1 $f2)
  (func $f1 (result i32)
    i32.const 42)
  (func $f2 (result i32)
    i32.const 13)
  ...
)</pre>

<ul>
 <li><code>(table 2 anyfunc)</code> で、2 はテーブルの初期サイズ (2つの参照を格納できることを意味します) で、<code>anyfunc</code> はこれらの参照の要素型が「任意のシグニチャの関数」であることを宣言します。WebAssembly の現在のバージョンではこの型だけが要素型として許されますが、要素型は将来的にさらに追加される予定です。</li>
 <li>関数 (<code>func</code>) セクションは他の宣言された wasm 関数と同様です。これらはテーブルで参照する関数です (上の例ではそれぞれは定数を返すだけです) 。セクションが宣言された順序は重要ではないことに注意してください。関数はどこででも宣言できて <code>elem</code> セクションから参照することができます。</li>
 <li><code>elem</code> セクションはモジュール内の関数のサブセットをリスト化することができます (任意の順で並べることができ、重複を許容します) 。これは参照された順序でテーブルに参照される関数のリストです。</li>
 <li><code>elem</code> セクション内の <code>(i32.const 0)</code> 値はオフセットです。これはセクションの先頭で宣言する必要があります。これはテーブルに関数参照を追加するインデックスの開始位置を指定します。ここでは 0 と テーブルのサイズとして 2 (上記参照) を指定していますので、2つの参照はインデックスが 0 と 1 の部分に書き込まれます。もしオフセットを 1 にして書き込みたければ、 <code>(i32.const 1)</code> と記述してテーブルのサイズを 3 にする必要があります。</li>
</ul>

<div class="blockIndicator note">
<p><strong>注</strong>: 初期化されていない要素はデフォルトの throw-on-call 値が与えられます。</p>
</div>

<p>JavaScript で同じようなテーブルのインスタンスを作成する場合、次のようになります:</p>

<pre class="brush: js; notranslate">function() {
  // table section
  var tbl = new WebAssembly.Table({initial:2, element:"funcref"});

  // function sections:
  var f1 = ... /* some imported WebAssembly function */
  var f2 = ... /* some imported WebAssembly function */

  // elem section
  tbl.set(0, f1);
  tbl.set(1, f2);
};</pre>

<h4 id="Using_the_table" name="Using_the_table">テーブルを使用する</h4>

<p>先に進みましょう。いま、何らかの形で使用するために必要なテーブルを定義しました。このコードのセクションで使ってみましょう:</p>

<pre class="brush: wasm; notranslate">(type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32))</pre>

<ul>
 <li><code>(type $return_i32 (func (result i32)))</code> ブロックで参照名を持つ型を指定します。この型は後でテーブルの関数参照呼び出しの型チェックを行うときに使用されます。ここでは、参照が1つの <code>i32</code> を返す関数である必要があると言っています。</li>
 <li>次に、<code>callByIndex</code> としてエクスポートされる関数を定義します。引数として1つの <code>i32</code> をとり、引数名として <code>$i</code> が指定されています。</li>
 <li>関数内部でスタックに値を1つ追加します。値は引数 <code>$i</code> のものが渡されます。</li>
 <li>最後に、テーブルから関数を呼び出すために <code>call_indirect</code> を使用します。これは暗黙的に <code>$i</code> の値をスタックからポップします。この結果、<code>callByIndex</code> 関数はテーブルの <code>$i</code> 番目の関数を呼び出します。</li>
</ul>

<p><code>call_indirect</code> の引数はコマンド呼び出しの前に置く代わりに、次のように明示的に宣言することもできます:</p>

<pre class="brush: wasm; no-line-numbers notranslate">(call_indirect (type $return_i32) (local.get $i))</pre>

<p>より高級な、JavaScript のような表現力の高い言語では、関数を含む配列 (あるいはオブジェクトかもしれません) で同じことができることが想像できますよね。擬似コードだとこれは <code>tbl[i]()</code> のようになります。</p>

<p>型チェックの話に戻ります。WebAssembly は型チェックされていて、<code>anyfunc</code> は「任意の関数シグネチャ」を意味するので、呼び出し先の (推定される) シグネチャを指定する必要があります。そのため、プログラムに関数が <code>i32</code> を返すはずだ、と知らせるために <code>$return_i32</code> 型を指定しています。もし呼び出し先のシグネチャがマッチしない (代わりに <code>f32</code> が返されるような) 場合は {{jsxref("WebAssembly.RuntimeError")}} 例外がスローされます。</p>

<p>さて、呼び出しを行うときにどのようにテーブルに <code>call_indirect</code> をリンクさせているのでしょうか? 答えは、現在モジュールインスタンスごとに1つのテーブルしか許容されないため、<code>call_indirect</code> はそれを暗黙的に呼び出します。将来的に複数のテーブルを持てるようになったとき、以下の行のように、何らかのテーブル識別子を指定する必要があるでしょう。</p>

<pre class="brush: wasm; no-line-numbers notranslate">call_indirect $my_spicy_table (type $i32_to_void)</pre>

<p>完全なモジュールは次のようになります。例は <a href="https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/wasm-table.wat">wasm-table.wat</a> を参照してください:</p>

<pre class="brush: wasm; notranslate">(module
  (table 2 funcref)
  (func $f1 (result i32)
    i32.const 42)
  (func $f2 (result i32)
    i32.const 13)
  (elem (i32.const 0) $f1 $f2)
  (type $return_i32 (func (result i32)))
  (func (export "callByIndex") (param $i i32) (result i32)
    local.get $i
    call_indirect (type $return_i32))
)</pre>

<p>次の JavaScript を使用してウェブページに読み込んでみましょう:</p>

<pre class="brush: js; notranslate">WebAssembly.instantiateStreaming(fetch('wasm-table.wasm'))
  .then(obj =&gt; {
    console.log(obj.instance.exports.callByIndex(0)); // returns 42
    console.log(obj.instance.exports.callByIndex(1)); // returns 13
    console.log(obj.instance.exports.callByIndex(2)); // returns an error, because there is no index position 2 in the table
  });</pre>

<div class="blockIndicator note">
<p><strong>注:</strong> 例は GitHub の <a href="https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/wasm-table.html">wasm-table.html</a> (<a href="https://mdn.github.io/webassembly-examples/understanding-text-format/wasm-table.html">動作例</a>) を参照してください。</p>
</div>

<div class="blockIndicator note">
<p><strong>注:</strong> Memory と同じように Table も JavaScript から作成すること (<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table">WebAssembly.Table()</a></code> を参照) 、別の wasm モジュール間でインポートすることができます。</p>
</div>

<h3 id="Mutating_tables_and_dynamic_linking" name="Mutating_tables_and_dynamic_linking">テーブルの変更と動的リンク</h3>

<p>JavaScript は関数参照にフルアクセスできるため、Table オブジェクトは JavaScript から <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/grow">grow()</a></code>, <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get">get()</a></code> や <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/set">set()</a></code> メソッドを使用して変更することができます。WebAssembly が <a href="http://webassembly.org/docs/gc/">参照型</a> を得たとき、WebAssembly コードは <code>get_elem</code>/<code>set_elem</code> 命令を使用してテーブル自身を変更することができるようになるでしょう。</p>

<p>テーブルは変更可能であるため、それらは複雑なロード時、実行時の <a href="http://webassembly.org/docs/dynamic-linking">動的リンクスキーム</a> の実装で使用することができます。プログラムが動的にリンクされたとき、複数のインスタンスで同じメモリとテーブルを共有することができます。これは複数のコンパイル済み <code>.dll</code> が単一のプロセスのアドレス空間を共有するネイティブアプリケーションと対称的です。</p>

<p>この動作を確認するために、Memory オブジェクトと Table オブジェクトを含む単一のインポートオブジェクトを作成し、同じインポートオブジェクトを複数の <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate">instantiate()</a></code> の呼び出しで渡してみましょう。</p>

<p><code>.wat</code> ファイルの例は次のようになります。</p>

<p><code>shared0.wat</code>:</p>

<pre class="brush: wasm; notranslate">(module
  (import "js" "memory" (memory 1))
  (import "js" "table" (table 1 funcref))
  (elem (i32.const 0) $shared0func)
  (func $shared0func (result i32)
   i32.const 0
   i32.load)
)</pre>

<p><code>shared1.wat</code>:</p>

<pre class="brush: wasm; notranslate">(module
  (import "js" "memory" (memory 1))
  (import "js" "table" (table 1 funcref))
  (type $void_to_i32 (func (result i32)))
  (func (export "doIt") (result i32)
   i32.const 0
   i32.const 42
   i32.store  ;; store 42 at address 0
   i32.const 0
   call_indirect (type $void_to_i32))
)</pre>

<p>These work as follows:</p>

<ol>
 <li>関数 <code>shared0func</code> は <code>shared0.wat</code> で定義され、インポートされたテーブルに格納されます。</li>
 <li>この関数は定数値 <code>0</code> を作成して、次に <code>i32.load</code> コマンドを使用して指定したメモリのインデックスから値をロードします。そのインデックスは <code>0</code> になります 。先と同様に、前の値をスタックから暗黙的にポップします。つまり、<code>shared0func</code> はメモリのインデックス <code>0</code> の位置に格納された値をロードして返します。</li>
 <li><code>shared1.wat</code> では、 <code>doIt</code> という関数をエクスポートします。この関数は2つの定数値 <code>0</code> と <code>42</code> を作成して <code>i32.store</code> を呼び出して、インポートされたメモリの指定したインデックスに指定した値を格納します。ここでも、これらの値はスタックから暗黙的にポップされます。したがって、結果的にメモリのインデックスが <code>0</code> の位置に、値として <code>42</code> が格納されます。</li>
 <li>関数の最後では、定数値 <code>0</code> を作成し、テーブルのインデックスが 0 の位置にある関数を呼び出します。これは <code>shared0func</code> で、先に <code>shared0.wat</code> の <code>elem</code> ブロックで格納されたものです。</li>
 <li>呼び出されたとき、<code>shared0func</code> は <code>shared1.wat</code> 内で <code>i32.store</code> コマンドを使用してメモリに格納された 42 をロードします。</li>
</ol>

<div class="blockIndicator note">
<p><strong>注</strong>: 上の式はスタックから値を暗黙的にポップしますが、代わりにコマンド呼び出しの中で明示的に宣言することができます:</p>

<pre class="brush: wasm; no-line-numbers notranslate" style="margin-bottom: 0;">(i32.store (i32.const 0) (i32.const 42))
(call_indirect (type $void_to_i32) (i32.const 0))</pre>

<div class="hidden"></div>
</div>

<p>アセンブリに変換した後、次のコードで JavaScript 内で <code>shared0.wasm</code> と <code>shared1.wasm</code> を使用します:</p>

<pre class="brush: js; notranslate">var importObj = {
  js: {
    memory : new WebAssembly.Memory({ initial: 1 }),
    table : new WebAssembly.Table({ initial: 1, element: "funcref" })
  }
};

Promise.all([
  WebAssembly.instantiateStreaming(fetch('shared0.wasm'), importObj),
  WebAssembly.instantiateStreaming(fetch('shared1.wasm'), importObj)
]).then(function(results) {
  console.log(results[1].instance.exports.doIt());  // prints 42
});</pre>

<p>コンパイルされた各モジュールは同じメモリとテーブルオブジェクトをインポートし、その結果同じ線形メモリとテーブルの「アドレス空間」を共有することができます。</p>

<div class="blockIndicator note">
<p><strong>注</strong>: 例は GitHub の <a href="https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/shared-address-space.html">shared-address-space.html</a> (<a href="https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html">動作例</a>) を参照してください。</p>
</div>

<h2 id="Multi-value_WebAssembly" name="Multi-value_WebAssembly">WebAssembly の複数値</h2>

<p>もっと最近になって (例えば <a href="/ja/docs/Mozilla/Firefox/Releases/78">Firefox 78</a>) 言語に追加されたものが WebAssembly 複数値であり、これは、WebAssembly 関数が複数の値を返すことができるようになり、一連の命令が複数のスタック値を消費して生成することができるようになったことを意味します。</p>

<p>執筆時点 (2020年6月) において、これは初期段階であり、利用可能な多値命令は、それ自体が複数の値を返す関数の呼び出しのみです。例を示します。</p>

<pre class="brush: wasm; notranslate">(module
  (func $get_two_numbers (result i32 i32)
    i32.const 1
    i32.const 2
  )
  (func (export "add_to_numbers") (result i32)
    call $get_two_numbers
    i32.add
  )
)</pre>

<p>しかし、これはより有用な命令タイプやその他のものへの道を開くことになるでしょう。これまでの進捗状況や、これがどのように動作するかについては、 Nick Fitzgerald の <a href="https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/">Multi-Value All The Wasm!</a> を参照してください。</p>

<h2 id="Summary" name="Summary">まとめ</h2>

<p>これで、WebAssembly テキストフォーマットの主要コンポーネントとそれらが WebAssembly JS API にどのように反映されるのかの高レベルなツアーが完了しました。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>この記事に含まれなかった主なものは、関数本体で現れる全ての命令の包括的なリストです。各命令の処理は <a href="http://webassembly.org/docs/semantics">WebAssembly のセマンティックス</a> を参照してください。</li>
 <li>スペックインタプリタによって実装された <a href="https://github.com/WebAssembly/spec/blob/master/interpreter/README.md#s-expression-syntax">テキストフォーマットの文法</a> も参照してください。</li>
</ul>
