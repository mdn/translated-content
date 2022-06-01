---
title: WebAssembly JavaScript API の使用
slug: WebAssembly/Using_the_JavaScript_API
tags:
  - API
  - 開発ツール
  - JavaScript
  - WebAssembly
  - コンパイル
  - インスタンス化
  - メモリー
  - テーブル
translation_of: WebAssembly/Using_the_JavaScript_API
---
{{WebAssemblySidebar}}

これまでに [Emscripten などのツールを使用して他の言語からモジュールをコンパイルしたり](/ja/docs/WebAssembly/C_to_wasm)、[自分自身のコードを読み込んでして実行したりしました](/ja/docs/WebAssembly/Loading_and_running)。次のステップは他の WebAssembly JavaScript API の使い方について学ぶことです。この記事では知る必要があることを説明します。

> **Note:** もし、この記事で説明している基本的な概念がよくわからない場合、 [WebAssembly の概要](/ja/docs/WebAssembly/Concepts)を先に読んでからこの記事に戻ってきてください。

## シンプルな例

WebAssembly JavaScript API の使用方法と、wasm モジュールを読み込んでウェブページ内で使用する方法を、ステップバイステップの例を通して実行してみましょう。

> **Note:** サンプルコードは [webassembly-examples](https://github.com/mdn/webassembly-examples) GitHub リポジトリーから参照してください。
</div>

### 例の準備

1.  まずは、 wasm モジュールが必要です! [simple.wasm](https://github.com/mdn/webassembly-examples/raw/master/js-api-examples/simple.wasm) をコピーしてローカルマシンの新しいディレクトリーの中に保存してください。
2.  次に、 wasm ファイルと同じディレクトリーに `index.html` という名前でシンプルな HTML ファイルを作成しましょう（簡単に利用できるテンプレートを持っていないのであれば、[単純なテンプレート](https://github.com/mdn/webassembly-examples/blob/master/template/template.html)が利用できます）。
3.  ここで、何が起こっているのか理解を助けるために、 wasm モジュールのテキスト表現を見てみましょう（[WebAssembly フォーマットから wasm への変換](/ja/docs/WebAssembly/Text_format_to_wasm)も参照してください）。

    ```js
    (module
      (func $i (import "imports" "imported_func") (param i32))
      (func (export "exported_func")
        i32.const 42
        call $i))
    ```

4.  2 行目に 2 階層の名前空間を持つインポートの宣言があります。 — 内部関数 `$i` は `imports.imported_func` からインポートされています。wasm モジュールにインポートするオブジェクトを記述するときに、この 2 階層の名前空間を JavaScript に反映させる必要があります。 `<script></script>` 要素を HTML 内に作成して、次のコードを追加してください。

    ```js
    var importObject = {
      imports: { imported_func: arg => console.log(arg) }
    };
    ```

### WebAssembly モジュールをストリーミングする

Firefox 58 の新機能として、 WebAssembly モジュールを基礎となるソースから直接コンパイルおよびインスタンス化する機能があります。これは {{jsxref("WebAssembly.compileStreaming()")}} と {{jsxref("WebAssembly.instantiateStreaming()")}} メソッドを使用して実現します。これらのメソッドは、バイトコードを直接 `Module`/`Instance` インスタンスに変換することができるので、{{domxref("Response")}} を {{jsxref("ArrayBuffer")}} に別途格納する必要がないため、ストリーミングではない対応するメソッドよりも簡単になっています。

この例（GitHub の [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html) デモや、[ライブ版](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)も参照してください）では、 `instantiateStreaming()` を使って wasm モジュールを取得し、そこに JavaScript 関数をインポートしてコンパイルしてインスタンス化し、そのエクスポート関数にアクセスするまで、すべて一度に行っています。

スクリプトに以下の 1 ブロックを加えてください。

```js
WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(obj => obj.instance.exports.exported_func());
```

この結果、エクスポートした WebAssembly の `exported_func` 関数を呼び出し、インポートした JavaScript の `imported_func` 関数を呼び出し、WebAssembly インスタンスの中で提供した値 (42) をコンソールに記録することになりました。サンプルのコードを保存して、WebAssembly に対応しているブラウザーで読み込むと、これが実際に動作しているのがわかります。

> **Note:** これは複雑で長い例のほんの一部ですが、ウェブアプリケーション内で WebAssembly をどのように JavaScript と組み合わせて動作させることができるかを説明しています。別の場所でも言及していますが、 WebAssembly は JavaScript の置き換えを目指しているわけではありません。両方が協力して、お互いの強みを活かすことができます。

### ストリーミングせずに wasm モジュールを読み込む

上記のようなストリーミングメソッドを使用できない、または使用したくない場合は、代わりにストリーミングメソッドではない {{jsxref("WebAssembly.compile")}} / {{jsxref("WebAssembly.instantiate")}} を使用することができます。

これらのメソッドはバイトコードに直接アクセスしないので、 wasm モジュールをコンパイル/インスタンス化する前にレスポンスを {{jsxref("ArrayBuffer")}} に変換する余分な手順が必要になります。

同等のコードは次のようになります。

```js
fetch('simple.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes, importObject)
).then(results => {
  results.instance.exports.exported_func();
});
```

### 開発者ツールで wasm を見る

Firefox 54 以降では、開発者ツールのデバッガーパネルでウェブページに含まれる wasm コードのテキスト表現を表示する機能があります。これを表示するためには、デバッガーパネルに移動して、“wasm://” 項目をクリックしてください。

![](wasm-debug.png)

WebAssembly をテキストとして表示するだけでなく、 WebAssembly のテキスト表現を使用してすぐにデバッグを開始することができます (ブレークポイント、コールスタックの検査、ステップ実行など) 。 [Firefox 開発者ツールでの WebAssembly のデバッグ](https://www.youtube.com/watch?v=R1WtBkMeGds)の動画を参照してください。

## メモリー

WebAssembly の低レベルのメモリーモデルでは、メモリーは[線形メモリー](https://webassembly.org/docs/semantics/#linear-memory) と呼ばれる型のない連続したバイト列として表現され、モジュール内の[ロード、ストア命令](https://webassembly.org/docs/semantics/#linear-memory-accesses)を使用して読み書きされます。このメモリーモデルでは、任意のロード、ストア命令は線形メモリー全体の任意のバイトにアクセスすることができます。これはポインターなどの C/C++ の概念を忠実に表現するために必要なものです。

しかし、利用可能なメモリ範囲がプロセス全体に及ぶネイティブの C/C++ プログラムとは異なり、特定の WebAssembly インスタンスがアクセスできるメモリーは、 WebAssembly Memory オブジェクトが含む特定の（潜在的に非常に小さな）範囲に制限されています。これにより、単一のウェブアプリで複数の独立したライブラリー（それぞれが内部で WebAssembly を使用している）を使用し、互いに完全に分離された個別のメモリーを持つことができます。さらに、新しい実装では[共有メモリー](/ja/docs/WebAssembly/Understanding_the_text_format#共有メモリー)を作成することもでき、これは [`postMessage()`](/ja/docs/Web/API/Window/postMessage) によってウィンドウとワーカーコンテキスト間で転送して複数の場所で使用することが可能です。

JavaScript では、Memory インスタンスはリサイズ可能な  [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) (または共有メモリーの場合は [`SharedArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)) とみなすことができます。`ArrayBuffer` と同様に、単一のウェブアプリケーションで多くの独立した Memory オブジェクトを作成することができます。Memory オブジェクトは初期サイズと最大サイズ (省略可) を指定して、{{jsxref("WebAssembly.Memory()")}} コンストラクターから作成することができます。

簡単な例を見ながら、探索を始めましょう。

1.  もう 1 つのシンプルな HTML ページを（[単純なテンプレート](https://github.com/mdn/webassembly-examples/blob/master/template/template.html)をコピーして）作成し、 `memory.html` という名前を付けてください。このページに `<script></script>` 要素を追加してください。
2.  Memory インスタンスを作成するために、次の行をスクリプトに追加します。

    ```js
    var memory = new WebAssembly.Memory({initial:10, maximum:100});
    ```

    `initial` と `maximum` の単位は WebAssembly ページです。これらは 64KB に固定されています。上の例では、Memory インスタンスは初期サイズが 640KB、最大サイズが 6.4MB であることを意味しています。

    WebAssembly Memory が持つバイト列は ArrayBuffer として buffer ゲッター/セッターから公開されています。例えば、線形メモリーの先頭ワードに直接、 42 を書き込むには次のようにします。

    ```js
    new Uint32Array(memory.buffer)[0] = 42;
    ```

    その後で同じ値を返すことができます。

    ```js
    new Uint32Array(memory.buffer)[0]
    ```

3.  デモで試してみましょう。これまでに追加した内容を保存してブラウザーで読み込んだ後、JavaScript コンソールで上の 2 行を入力してみてください。
 
### メモリーの拡張

Memory インスタンスは {{jsxref("Memory.prototype.grow()")}} を呼び出すことで拡張することができます。引数は WebAssembly ページ単位で指定します。

```js
memory.grow(1);
```

Memory インスタンスの作成時に最大値が指定していて、この最大値を超えて拡張しようとすると {{jsxref("WebAssembly.RangeError")}} 例外が発生します。エンジンは提供された上限を利用してメモリーを事前に確保しておくことで、より効率的なリサイズが可能になります。

注: {{jsxref("ArrayBuffer")}} の byteLength は変更不可であるため、 {{jsxref("Memory.prototype.grow()")}} 操作が成功した後、buffer ゲッターは新しい (新しい byteLength で) ArrayBufferを返します。そして、前の ArrayBuffer は「切り離された状態」になるか、メモリーから切り離されます。

関数と同様に、線形メモリーはモジュール内で定義することもインポートすることもできます。同じようにモジュールは任意でメモリーをエクスポートすることも可能です。これは JavaScript が WebAssembly インスタンスに対して新しく作成した `WebAssembly.Memory` をインポートで渡したり、Memory のエクスポートから ([`Instance.prototype.exports`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/exports) を介して) 受け取れることを意味しています。

### より複雑なメモリーの例

より複雑なメモリの例を見て、上記のことを明確にしましょう。先に定義したメモリーインスタンスをインポートし、それを整数の配列で埋め込んで、それらを合計する WebAssembly モジュールです。これは [memory.wasm](https://github.com/mdn/webassembly-examples/raw/master/js-api-examples/memory.wasm) で見ることができます。

1.  `memory.wasm` のローカルコピーを以前と同じディレクトリーに作成します。

    > **Note:** モジュールのテキスト表現は [memory.wat](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.wat) を参照してください。

2.  `memory.html` サンプルファイルに戻って、以前と同じように wasm モジュールを読み取り、コンパイル、インスタンス化します。以下のものをスクリプトの最後に追加してください。

    ```js
    WebAssembly.instantiateStreaming(fetch('memory.wasm'), { js: { mem: memory } })
    .then(results => {
      // ここにコードを追加
    });
    ```

3.  このモジュールはモジュール内部のメモリーをエクスポートします。 instance という名前でモジュールの Instance が取得され、エクスポートされた関数 `accumulate()` を使用してモジュールの線形メモリー (`mem`) に直接入力された配列を合計する事ができます。指定された場所に、次のコードを追加してみましょう。

    ```js
    var i32 = new Uint32Array(memory.buffer);

    for (var i = 0; i < 10; i++) {
      i32[i] = i;
    }

    var sum = results.instance.exports.accumulate(0, 10);
    console.log(sum);
    ```

Memory オブジェクト自体でなく、Memory オブジェクトの buffer ([`Memory.prototype.buffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer)) から {{domxref("Uint32Array")}} ビューを作成していることに注意してください。

メモリーのインポートは関数のインポートと同じように機能します。JavaScript 関数の代わりに Memory オブジェクトを渡すだけです。メモリーのインポートは 2 つの理由で役に立ちます。

- モジュールをコンパイルする前、もしくは並行して、メモリーの初期コンテンツを JavaScript で読み取り、または作成することができます。
- 単一の Memory オブジェクトを複数のモジュールインスタンスにインポートすることができます。これは WebAssembly で動的リンクを実装するための重要な構成要素です。

> **Note:** 完全なデモは [memory.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html) ([動作例](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) を参照してください。

## テーブル

WebAssembly Table は JavaScript と WebAssembly コードの両方でアクセスできるリサイズ可能な [参照](https://en.wikipedia.org/wiki/Reference_(computer_science)) の型付き配列です。Memory はリサイズ可能な生のバイト列を提供しますが、参照はエンジンに保証された値（このバイト列は安全性、移植性、安定性の理由からコンテンツによって直接読み書きしてはいけない）であるため、参照を格納するために使用することは安全ではありません。

テーブルは要素の型を持ち、テーブルに格納できる参照の型が制限されます。WebAssembly の現バージョンでは WebAssembly コード内で必要な参照の型は関数型の1つだけです。そして、これが唯一の正しい要素の型となります。将来のバージョンでは、さらに多くの要素の型が追加される予定です。

関数参照は関数ポインターを持つ C/C++ のような言語をコンパイルするために必要です。C/C++ のネイティブ実装では、関数ポインターはプロセスの仮想アドレス空間内の関数のコードの生のアドレスで表現されるため、安全性の理由から線形メモリーに直接格納することはできません。代わりに、関数参照はテーブルに格納されます。整数値のインデックスは線形メモリーに格納することができます。

関数ポインターを呼び出すときは、WebAssembly を呼び出す側でインデックスを指定します。インデックスを付けたり、インデックス付けされた関数参照を呼び出す前に安全な境界のチェックをすることができます。したがって、テーブルは現在、安全かつ移植可能に低レベルのプログラミング言語の機能をコンパイルするために使用される、低レベルのプリミティブです。

テーブルは [Table.prototype.set()](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/set)` を通してテーブル内の値を1つ更新することができます。さらに、[`Table.prototype.grow()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/grow) でテーブルに格納できる値の数を増やすことができます。時間の経過とともに間接呼び出しされる関数を変更することを許容し、これは [動的リンク技術](http://webassembly.org/docs/dynamic-linking/) のために必要なものです。変化した値に対してJavaScriptでは [Table.prototype.get()](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get)` を通してすぐにアクセスできます。wasm モジュールからも同様です。

### テーブルの例

テーブルのシンプルな例を見てみましょう。紹介する WebAssembly モジュールは2つの要素 (要素0は13、要素1は42を返します) を持つテーブルをエクスポートするものです。モジュールは [table.wasm](https://github.com/mdn/webassembly-examples/raw/master/js-api-examples/table.wasm) から見つけられます。

1.  `table.wasm` をローカルの新しいディレクトリーにコピーします。

    > **Note:** このモジュールのテキスト表現は [table.wat](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table.wat) を参照してください。

2.  [HTML template](https://github.com/mdn/webassembly-examples/blob/master/template/template.html) を `table.html` という名前で同じディレクトリーにコピーします。
3.  前と同じように、wasm モジュールを読み取り、コンパイル、インスタンス化します。次のコードを HTML の body の末尾の {{htmlelement("script")}} 要素に追加してください。

    ```js
    WebAssembly.instantiateStreaming(fetch('table.wasm'))
    .then(function(results) {
      // add code here
    });
    ```

4.  今度はテーブル内のデータにアクセスしてみましょう。コードの指定された場所に次の行を追加してください。

    ```js
    var tbl = results.instance.exports.tbl;
    console.log(tbl.get(0)());  // 13
    console.log(tbl.get(1)());  // 42
    ```

このコードはテーブルに格納されている各関数参照に順番にアクセスし、内包した値をコンソールに書き出すためにインスタンス化します。 [`Table.prototype.get()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get) で各関数参照を取得した後、関数を実行するためには括弧を追加することに注意してください。

> **Note:** 完全なデモは [table.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table.html) ([動作例](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)) を参照してください。

## グローバル値

WebAssembly はグローバル変数のインスタンスを作成する機能を持っており、 JavaScript の両方からアクセスでき、1 つ以上の {{jsxref("WebAssembly.Module")}} インスタンスにわたってインポート/エクスポートが可能です。これにより、複数のモジュールを動的にリンクすることができるので、非常に便利です。

JavaScript の内部から WebAssembly のグローバルインスタンスを作成するには、次のような {{jsxref("WebAssembly.Global()")}} コンストラクタを使用します。

```js
const global = new WebAssembly.Global({value:'i32', mutable:true}, 0);
```

これは 2 つの引数を取ることがわかります。

- グローバル変数について記述した 2 つのプロパティを含むオブジェクトです。

  - `value`: データ型は、 WebAssembly モジュールで受け入れられるもの (`i32`, `i64`, `f32`, `f64`) ならばどれでも構いません。
  - `mutable`: 論理値で、値が変更可能かどうかを定義します。

- 変数の実際の値を含む値。これは、指定されたデータ型と一致している限り、どのような値でもよい。

では、これをどう使うのでしょうか。次の例では、値を 0 とする mutable 型の `i32` としてグローバルを定義しています。

次に、グローバル変数の値を変更してみます。最初は `Global.value` を使用して `42` に設定し、それから `global.wasm` モジュールからエクスポートされた `incGlobal()` 関数を使用して 43 にします（この関数は、指定された値に何でも 1 を加算し、新しい値を返します）。

```js
const output = document.getElementById('output');

function assertEq(msg, got, expected) {
    output.innerHTML += `Testing ${msg}: `;
    if (got !== expected)
        output.innerHTML += `FAIL!<br>Got: ${got}<br>Expected: ${expected}<br>`;
    else
        output.innerHTML += `SUCCESS! Got: ${got}<br>`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({value:'i32', mutable:true}, 0);

WebAssembly.instantiateStreaming(fetch('global.wasm'), { js: { global } })
.then(({instance}) => {
    assertEq("getting initial value from wasm", instance.exports.getGlobal(), 0);
    global.value = 42;
    assertEq("getting JS-updated value from wasm", instance.exports.getGlobal(), 42);
    instance.exports.incGlobal();
    assertEq("getting wasm-updated value from JS", global.value, 43);
});
```

> **Note:** [GitHub の動作例](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) を見ることができます。[ソースコード](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.html)も見てください。

## 多重性

ここまで、主な WebAssembly の構成要素のデモを見てきましたが、これは多重性の概念に触れるのによい機会です。これはアーキテクチャ効率の点で多くの進歩がもたらされます:

- 1 つの関数が N 個のクロージャを生成するのと同様に、 1 つのモジュールは N 個のインスタンスを持つことができます。
- 1 つのモジュールインスタンスは 0 から 1 つのメモリーインスタンスを持つことができ、それが「アドレス空間」を提供します。 WebAssembly の将来のバージョンでは、 1 つのモジュールが 0 から N 個のメモリーインスタンスを許容する可能性があります ([Multiple Tables and Memories](https://webassembly.org/docs/future-features/#multiple-tables-and-memories) を参照) 。
- 1 つのモジュールインスタンスは 0 から 1 つのテーブルインスタンスを持つことができます。これはインスタンスの「関数アドレス空間」で、 C 言語の関数ポインターを実装するために使用されます。 WebAssembly の将来のバージョンでは 1 つのモジュールにつき 0 から N 個のメモリーインスタンスを許容する可能性があります。
- 1 つのメモリーやテーブルを 0 から N 個のモジュールから使用することができます。複数のインスタンス全てが同じアドレス空間を共有でき、[動的リンク](http://webassembly.org/docs/dynamic-linking) が可能です。

多重性については、「WebAssembly テキスト形式を理解」の記事で多重性の働きについてみることができます。その中の[テーブルの変更と動的リンク](/ja/docs/WebAssembly/Understanding_the_text_format#テーブルの変更と動的リンク)を参照してください。

## まとめ

この記事では WebAssembly JavaScript API の基本的な使い方について説明しました。WebAssembly モジュールを JavaScript のコンテキストに組み込む方法、その関数を使えるようすること、JavaScript でのメモリーとテーブルの使い方について。さらに、多重性の概念についても触れました。

## 関連情報

- [webassembly.org](https://webassembly.org/)
- [WebAssembly の概要](/ja/docs/WebAssembly/Concepts)
- [WebAssembly on Mozilla Research](https://research.mozilla.org/webassembly/)
