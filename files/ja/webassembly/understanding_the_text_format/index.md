---
title: WebAssembly テキスト形式の理解
slug: WebAssembly/Understanding_the_text_format
tags:
  - 関数
  - JavaScript
  - S 式
  - WebAssembly
  - 呼び出し
  - メモリー
  - 共有アドレス
  - テーブル
  - テキスト形式
  - was
  - wasm
translation_of: WebAssembly/Understanding_the_text_format
---
{{WebAssemblySidebar}}

WebAssembly を人間が読んだり編集したりできるようにするため、 wasm バイナリー形式にはテキスト表現が存在します。これはテキストエディター、ブラウザーの開発者ツールなどで見せるために設計された中間表現です。この記事では、テキスト形式のしくみ、生の構文、および元のバイトコードの表現との関係 (と JavaScript で wasm を表現したラッパーオブジェクト) について説明します。

> **Note:** この記事は、あなたがウェブ開発者で wasm モジュールをページに読み込んでコード内で使用するだけなら過剰なものかもしれません ([WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)を参照)。しかし、例えば、パフォーマンスを最適化するために wasm モジュールを書きたいときや、あなた自身で WebAssembly コンパイラを作るときには役に立ちます。

## S 式

バイナリー、テキスト形式どちらでも、 WebAssembly の基本的なコードの単位はモジュールです。テキスト形式ではモジュールは 1 つの大きな S 式として表現されます。 S 式はツリー構造を表現するための非常に古くてシンプルなテキスト形式で、モジュールをその構造とそのコードを記述するノードツリーとして考えることができます。しかし、プログラミング言語の AST (抽象構文木) とは異なり、　WebAssembly のツリーはかなり平坦で、ほとんどは命令の列で構成されています。

はじめに、 S 式がどういうものか見てみましょう。ツリー内の各ノードは `( ... )` のように 1 組の括弧内に入れられます。 括弧内の最初のラベルは、それがどのノードタイプかを示し、スペースで区切られた属性、または子ノードのリストが続きます。次のコードは WebAssembly の S 式を意味します。

```wasm
(module (memory 1) (func))
```

ルートノード "module" と 2 つの子ノード、 "1" を属性に持つ "memory" ノード、"func" ノードを表します。これらのノードが実際にどういう意味なのかを見ていきましょう。

### 最もシンプルなモジュール

最もシンプルで短い実行可能な wasm モジュールから始めてみましょう。

```wasm
(module)
```

このモジュールは完全に空ですが、モジュールとしては有効です。

いま、このモジュールをバイナリーに変換すると ([WebAssembly テキスト形式から wasm に変換する](/ja/docs/WebAssembly/Text_format_to_wasm) を参照) 、 [バイナリー形式](http://webassembly.org/docs/binary-encoding/#high-level-structure) で記述された 8 バイトのモジュールヘッダーだけになります。

```wasm
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### モジュールに機能を追加する

はい、これは全然面白くないですね。モジュールに実行可能なコードを追加していきましょう。

すべての WebAssembly モジュール内のコードは次の疑似コード構造を持つ関数にグループ化されます:

```wasm
( func <signature> <locals> <body> )
```

- **signature** は関数が何を受け取る (引数) かと何を返す (返値) かを宣言します。
- **locals** は JavaScript でいうと変数のようなものですが、明示的な型が宣言されます。
- **body** は線形の低レベルな命令のリストです。

S 式であるために違って見えますが、これは、他の言語の関数に似ています。

## シグネチャと引数

シグネチャは、返値の型宣言のリストが後に続く、引数の型宣言の並びです。ここで注目すべきは次の点です。

- `(result)` がない場合、その関数は何も返さないということです。
- 現在は、最大で 1 つの返値の型を指定することができますが、任意の数に[緩和される予定](https://github.com/WebAssembly/spec/blob/master/proposals/multi-value/Overview.md)です。

それぞれの引数には、明示的に型を宣言します。 wasm は現在 4 つの数値型を利用できます（さらに参照型もあります。以下の[参照型](#参照型)の項を参照してください）。

- `i32`: 32 ビット整数
- `i64`: 64 ビット整数
- `f32`: 32 ビット浮動小数点数
- `f64`: 64 ビット浮動小数点数

単体の引数は `(param i32)` 、返値は `(result i32)` のように記述します。したがって、 2 つの 32 ビット整数を引数にとり、 64 ビット浮動小数点数を返すバイナリー関数は次のように記述します。

```wasm
(func (param i32) (param i32) (result f64) ... )
```

シグネチャのあとに、型付けされたローカル変数のリストが続きます (例: `(local i32)`) 。引数は基本的に、呼び出し元から渡された対応する引数の値で初期化される単なるローカル変数です。

## ローカル変数と引数を取得/設定する

ローカル変数と引数は関数本体から `local.get` と `local.set` 命令を使用して読み書きすることができます。

`local.get`/`local.get` コマンドは数値のインデックスから取得/設定される項目を参照します。最初に引数が宣言順に、その後に、ローカル変数が宣言順に参照されます。次の関数を見てください。

```wasm
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

命令 `local.get 0` は i32 の引数, `local.get 1` は f32 の引数、そして `local.get 2` は f64 のローカル変数を取得します。

ここで別の問題があります。数値のインデックスを使用して項目を参照すると、混乱したり、困ってしまうことがあります。そこで、テキスト形式では、単純に型宣言の直前に (`$`) を接頭辞として付けた名前を、引数、ローカル変数や他の多くの項目につけることができます。

したがって、上記のシグネチャを次のように書き直すことができます。

```wasm
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

そして、`local.get 0` の代わりに `local.get $p1` と書くことができるようになります（このテキストがバイナリーに変換されたとき、バイナリーには整数値だけが残されることに注意してください）。

## スタックマシン

関数本体を書く前に、もう 1 つ、**スタックマシン**について話をする必要があります。ブラウザーはそれを更に効率的な形にコンパイルしますが、wasm の実行はスタックマシンとして定義されます。スタックマシンの基本的な考え方は、すべての命令がスタックから特定の数の `i32`/`i64`/`f32`/`f64` 値をプッシュ、ポップするようにすることです。

例えば、 `local.get` はローカル変数の値をスタックにプッシュするように定義されます。そして、`i32.add` は2つの `i32` 値 (スタックにプッシュされた前の2つの値を暗黙的に取得します) をポップし、合計を計算して (2^32 の剰余として) 結果の i32 値をプッシュします。

関数が呼び出されたとき、空のスタックから開始され、徐々に積まれてゆき、本体の命令が実行されると空になります。例として、次の関数の実行後について見てみましょう。

```wasm
(func (param $p i32)
  (result i32)
  local.get $p
  local.get $p
  i32.add)
```

スタックには `i32` という値 1 つだけが入っています。これは式 (`$p + $p`) が `i32.add` よって処理された結果です。関数の返値はスタックに残った最後の値になります。

WebAssembly のバリデーションルールはスタックが正確に一致することを保証します。もし、`(result f32)` と宣言した場合、最終的にスタックに1つだけ `f32` 値が積まれている状態である必要があります。結果の型がない場合は、スタックは空でなければなりません。

## はじめての関数本体

前述の通り、関数本体は関数が呼び出された後に続く単純な命令列です。 これまでに学んだことと共に、最終的にはシンプルな関数を含むモジュールを定義することができるようになります。

```wasm
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))
```

この関数は 2 つの引数を受け取って、それらを足して、その結果を返します。

関数本体に置けるものはもっとたくさんありますが、いまはシンプルなもので始めます。進むにつれてもっと多くの例を見ていきます。すべての有効なオペコードのリストについては [webassembly.org Semantics reference](https://webassembly.github.io/spec/core/exec/index.html) を調べてみてください。

### 関数を呼び出す

定義した関数は自身では大したことをしません。いまはそれを呼び出す必要があります。どのようにすればよいでしょうか。 ES2015 モジュールのように、wasm 関数はモジュール内の `export` ステートメントによって明示的にエクスポートしなければなりません。

ローカル変数と同じように、関数も既定ではインデックスで識別されますが、便宜上の関数名を付けることができます。 `func` キーワードの直後にドル記号で始まる名前を付けてみましょう。

```wasm
(func $add … )
```

ここでエクスポート宣言を追加する必要があります。次のようになります。

```wasm
(export "add" (func $add))
```

ここで `add` は JavaScript で認識される関数名であるのに対して、`$add` はモジュール内の、どの WebAssembly 関数をエクスポートするのかを選択します。

（今のところ）最終的なモジュールは次のようになります。

```wasm
(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
)
```

例に従うなら、上のモジュールを `add.wat` という名前で保存して、wabt を使用して（詳細は [WebAssembly テキスト形式から wasm に変換する](/ja/docs/WebAssembly/Text_format_to_wasm) を参照してください）、`add.wasm` というファイルに変換します。

次に、 `addCode` という名前の型付き配列にバイナリー読み込み（[WebAssembly コードのロードと実行](/ja/docs/WebAssembly/Loading_and_running) で説明されています）、コンパイル、インスタンス化して、JavaScript で `add` 関数を実行します（`add()` はインスタンスの [`exports`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/exports) プロパティから見つけることができます）。

```js
WebAssembly.instantiateStreaming(fetch('add.wasm'))
  .then(obj => {
    console.log(obj.instance.exports.add(1, 2));  // "3"
  });
```

> **Note:** この例は GitHub の[add.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/add.html) ([動作例](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)) にあります。関数のインスタンス化についての詳細は {{JSxRef("WebAssembly.instantiateStreaming()")}} も合わせて参照してください。

## 基礎を探る

ここでは実際の基本的な例を取り上げてから、いくつかの高度な機能について見てみましょう。

### 同じモジュールの他の関数から関数を呼び出す

`call` 命令はインデックスか名前を指定して単一の関数を呼び出します。例えば、次のモジュールには 2 つの関数が含まれています。 1 つ目はただ 42 を返すだけ、もう 1 つは 1 つ目のものに 1 を足した値を返します。

```wasm
(module
  (func $getAnswer (result i32)
    i32.const 42)
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add))
```

> **Note:** `i32.const` は 32 ビット整数を定義してスタックにプッシュするだけです。 `i32` 以外の有効な型に変えて、 const の値を好きなものに変えることができます（ここでは `42` に設定しました）。

この例で、 `func` の直後に宣言された `(export "getAnswerPlus1")` セクションに気づくでしょう。これはこの関数をエクスポートするための宣言をして、さらにそれに名前をつけるために使用するショートカットです。

これは、上で行ったように、モジュール内の関数外の別の場所で、関数ステートメントと分けて定義するのと同等の機能です。

```wasm
(export "getAnswerPlus1" (func $functionName))
```

上のモジュールを呼び出す JavaScript コードは次のようになります。

```js
WebAssembly.instantiateStreaming(fetch('call.wasm'))
 .then(obj => {
    console.log(obj.instance.exports.getAnswerPlus1());  // "43"
  });
```

### JavaScript から関数をインポートする

すでに、JavaScript から WebAssembly 関数を呼び出すことについては確認しましたが、WebAssembly から JavaScript 関数を呼び出すことについてはどうでしょうか? WebAssembly は実際に JavaScript のビルトインの情報を持っていませんが、JavaScript か wasm 関数をインポートするための一般的な方法があります。例を見てみましょう。

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))
```

WebAssembly は 2 階層の名前空間のインポート文を持っています。ここでは、`console` モジュールから `log` 関数をインポートすることを要求しています。また、エクスポートされた `logIt` 関数から、上で紹介した `call` 命令を使用して、インポートされた関数を呼ぶ出すことができます。

インポートされた関数は通常の関数と同じようなものです。WebAssembly のバリデーションによって静的にチェックするシグネチャを持ち、インデックスか名前を付けて呼び出すことができます。

JavaScript 関数にはシグネチャの概念がないため、インポート宣言のシグネチャに関係なく、どの JavaScript 関数も渡すことができます。モジュールがインポート宣言をすると、 {{jsxref("WebAssembly.instantiate()")}} を呼び出す側は、対応したプロパティを持ったインポートオブジェクトを渡す必要があります。

上の場合、 `importObject.console.log` が JavaScript 関数であるようなオブジェクト(`importObject` と呼びましょう) が必要になります。

これは次のようになります。

```js
var importObject = {
  console: {
    log: function(arg) {
      console.log(arg);
    }
  }
};

WebAssembly.instantiateStreaming(fetch('logger.wasm'), importObject)
  .then(obj => {
    obj.instance.exports.logIt();
  });
```

> **Note:** この例は GitHub の [logger.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/logger.html) ([動作例](https://mdn.github.io/webassembly-examples/understanding-text-format/logger.html))を参照してください。

### WebAssembly でのグローバルの宣言

WebAssembly には、 JavaScript からアクセス可能なグローバル変数インスタンスを作成する機能と、 1 つ以上の {{JSxRef("WebAssembly.Module")}} インスタンスにまたがってインポート/エクスポート可能なグローバル変数インスタンスを作成する機能があります。これは、複数のモジュールを動的にリンクすることができるので、とても便利です。

WebAssembly のテキスト形式では、次のようになります (GitHub のリポジトリにある [global.wat](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.wat) を参照してください。JavaScript の例は [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) も参照してください)。

```wasm
(module
   (global $g (import "js" "global") (mut i32))
   (func (export "getGlobal") (result i32)
        (global.get $g))
   (func (export "incGlobal")
        (global.set $g
            (i32.add (global.get $g) (i32.const 1))))
)
```

これは、キーワード `global` を使用してグローバルな値を指定していることと、値のデータ型と一緒にキーワード `mut` を指定して変更可能にしたい場合に指定していることを除いて、以前に見たものと似ています。

JavaScript を使用して同等の値を作成するには、 {{JSxRef("WebAssembly.Global()")}} コンストラクターを使用してください。

```js
const global = new WebAssembly.Global({value: "i32", mutable: true}, 0);
```

### WebAssembly メモリー

上の例はとてもひどいロギング関数です。たった 1 つの整数値を表示するだけです。文字列を表示するためにはどうしたらよいでしょうか? 文字列やさらに複雑なデータ型を扱うために WebAssembly は **メモリー** を提供します（WebAssembly のより新しい実装では、[参照型](#参照型)もあります）。 WebAssembly では、メモリーは徐々に拡張することのできるただの大きなバイト列です。 WebAssembly は `i32.load` や `i32.store` のような命令を持っており、それで[線形メモリー](http://webassembly.org/docs/semantics/#linear-memory)を読み書きします。

JavaScript から見ると、メモリーはすべて 1 つの大きな (リサイズ可能な) {{jsxref("ArrayBuffer")}} の内部にあるように見えます。それはまさに、asm.js とともに動かさなければならないものすべてです (ただしリサイズは出来ません。asm.js の [プログラミングモデル](http://asmjs.org/spec/latest/#programming-model) を参照してください) 。

したがって、文字列は線形メモリー内部のどこかに存在するただのバイト列です。適切なバイト列の文字列をメモリーに書き込んだとしましょう。その文字列をどのように JavaScript に渡すのでしょうか?

鍵は {{JSxRef("WebAssembly.Memory()")}} インターフェースを使用して JavaScript から WebAssembly の線形メモリーを作成し、関連するインスタンスメソッドを使用して既存の Memory インスタンス (現在は 1 モジュールごとに 1 つだけ持つことができます) にアクセスできることです。Memory インスタンスは [`buffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer) ゲッターを持ち、これは線形メモリー全体を指し示す ArrayBuffer を返します。

Memory インスタンスは、例えば JavaScript から [`Memory.grow()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/grow) メソッドを使用して拡張することもできます。拡張したとき、`ArrayBuffer` はサイズを変更することができないため、現在の `ArrayBuffer` は切り離され、新しく作成された、より大きな `ArrayBuffer` を指し示すようになります。これは、JavaScript に文字列を渡すために必要なことは、線形メモリー内での文字列のオフセットと長さを指定する方法を渡すことだけであることを意味します。

文字列自身に文字列の長さの情報をエンコードするさまざまな方法 (例えば、 C 言語の文字列) がありますが、簡単にするためにここではオフセットと長さの両方を引数として渡します。

```wasm
(import "console" "log" (func $log (param i32) (param i32)))
```

JavaScript 側では、バイト列を簡単に JavaScript 文字列にデコードするために [TextDecoder API](/ja/docs/Web/API/TextDecoder) を使用することができます (ここでは `utf8` を指定していますが、他の多くのエンコーディングに対応しています) 。

```js
function consoleLogString(offset, length) {
  var bytes = new Uint8Array(memory.buffer, offset, length);
  var string = new TextDecoder('utf8').decode(bytes);
  console.log(string);
}
```

最後のに欠けているのは、 `consoleLogString` が WebAssembly の `memory` にアクセスする場所です。このあたり WebAssembly は柔軟です。JavaScript から [`Memory`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) オブジェクトを作成して WebAssembly モジュールでメモリーをインポートするか、WebAssembly モジュールでメモリーを作成して JavaScript で使用するためにエクスポートすることができます。

簡単にするために、JavaScript で作成したメモリーを WebAssembly にインポートしてみましょう。`import` ステートメントは次のようになります。

```wasm
(import "js" "mem" (memory 1))
```

`1` はインポートされたメモリーに少なくとも 1 ページ分のメモリーが必要であることを示します(WebAssembly では 1 ページを 64KB と定義しています)。

文字列 "Hi" を出力する完全なモジュールを見てみましょう。通常のコンパイルされた C のプログラムでは文字列にメモリーを割り当てる関数を呼び出しますが、ここでは独自のアセンブリーを書くだけで、すべての線形メモリーを所有しているので、 `data` セクションを使用してグローバルメモリーに文字列の内容を書きこむことができます。データセクションではインスタンス化時にオフセットを指定してバイト列の文字列を書きこむことができます。これはネイティブの実行可能形式の `.data` セクションに似ています。

最終的な wasm モジュールは次のようになります。

```wasm
(module
  (import "console" "log" (func $log (param i32 i32)))
  (import "js" "mem" (memory 1))
  (data (i32.const 0) "Hi")
  (func (export "writeHi")
    i32.const 0  ;; pass offset 0 to log
    i32.const 2  ;; pass length 2 to log
    call $log))
```

> **Note:** 上記の 2 重のセミコロン構文 (`;;`) は WebAssembly ファイル内でコメントを書くためのものです。

ここで、JavaScript から  1 ページ分のサイズを持つ Memory を作成してそれに渡すことができます。結果としてコンソールに "Hi" と出力されます。

```js
var memory = new WebAssembly.Memory({initial:1});

var importObject = { console: { log: consoleLogString }, js: { mem: memory } };

WebAssembly.instantiateStreaming(fetch('logger2.wasm'), importObject)
  .then(obj => {
    obj.instance.exports.writeHi();
  });
```

> **Note:** 完全なソースは GitHub の [logger2.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/logger2.html) ([動作例](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)) を参照してください。

### WebAssembly テーブル

WebAssembly テキスト形式のツアーを終了するために、 WebAssembly で最も複雑でしばしば混乱する部分 (**テーブル**) を見てみましょう。テーブルは基本的に WebAssembly コードからインデックスでアクセスできるリサイズ可能な参照の配列です。

なぜテーブルが必要なのかを見るために、最初に観察する必要があります。さきほど見た `call` 命令 ([同じモジュールの他の関数から関数を呼び出す](#同じモジュールの他の関数から関数を呼び出す) を参照) は静的な関数インデックスをとり、結果として 1 つの関数しか呼び出せません。しかし、呼び出し先がランタイム値の場合はどうなるでしょうか。

- JavaScript ではこれは常に見えます。関数は第一級の値です。
- C/C++ では関数ポインターで見ることができます。
- C++ では仮想関数で見ることができます。

WebAssembly にはこれを実現するための一種の呼び出し命令が必要だったため、動的な関数をオペランドに受け取る `call_indirect` を与えました。問題は WebAssembly ではオペランドに指定できる型が (現在) `i32`/`i64`/`f32`/`f64` だけであることです。

WebAssembly は `anyfunc` 型 (任意のシグニチャの関数を保持できるため "any") を追加することができましたが、あいにくセキュリティ上の理由から `anyfunc` 型は線形メモリーに格納できませんでした。線形メモリーは格納された値の生の内容をバイト列として公開し、これによって wasm コンテンツが生の関数ポインターを自由に観察できて破損させることができてしまいます。これはウェブ上では許可できません。

解決方法は関数参照をテーブルに格納し、代わりにテーブルのインデックスを渡すことでした。これは単なる i32 値です。`call_indirect` のオペランドは単純に i32 のインデックス値にすることができます。

#### wasm でテーブルを定義する

どのようにしてテーブルに wasm 関数を配置するのでしょうか。 `data` セクションを使用して線形メモリーの領域をバイト列で初期化するのと同じように、`elem` セクションを使用してテーブルの領域を関数の列で初期化することが出来ます:

```wasm
(module
  (table 2 funcref)
  (elem (i32.const 0) $f1 $f2)
  (func $f1 (result i32)
    i32.const 42)
  (func $f2 (result i32)
    i32.const 13)
  ...
)
```

- `(table 2 funcref)` で、2 はテーブルの初期サイズ (2つの参照を格納できることを意味します) で、`funcref` はこれらの参照の要素型がの関数参照であることを宣言します。

- 関数 (`func`) セクションは他の宣言された wasm 関数と同様です。これらはテーブルで参照する関数です (上の例ではそれぞれは定数を返すだけです) 。セクションが宣言された順序は重要ではないことに注意してください。関数はどこででも宣言できて `elem` セクションから参照することができます。
- `elem` セクションはモジュール内の関数のサブセットをリスト化することができます (任意の順で並べることができ、重複を許容します) 。これは参照された順序でテーブルに参照される関数のリストです。
- `elem` セクション内の `(i32.const 0)` 値はオフセットです。これはセクションの先頭で宣言する必要があります。これはテーブルに関数参照を追加するインデックスの開始位置を指定します。ここでは 0 と テーブルのサイズとして 2 (上記参照) を指定していますので、2つの参照はインデックスが 0 と 1 の部分に書き込まれます。もしオフセットを 1 にして書き込みたければ、 `(i32.const 1)` と記述してテーブルのサイズを 3 にする必要があります。

> **Note:** 初期化されていない要素はデフォルトの throw-on-call 値が与えられます。

JavaScript で同じようなテーブルのインスタンスを作成する場合、次のようになります。

```js
function() {
  // table section
  var tbl = new WebAssembly.Table({initial:2, element:"anyfunc"});

  // function sections:
  var f1 = ... /* some imported WebAssembly function */
  var f2 = ... /* some imported WebAssembly function */

  // elem section
  tbl.set(0, f1);
  tbl.set(1, f2);
};
```

#### テーブルを使用する

先に進みましょう。いま、何らかの形で使用するために必要なテーブルを定義しました。このコードのセクションで使ってみましょう。

```wasm
(type $return_i32 (func (result i32))) ;; if this was f32, type checking would fail
(func (export "callByIndex") (param $i i32) (result i32)
  local.get $i
  call_indirect (type $return_i32))
```

- `(type $return_i32 (func (result i32)))` ブロックで参照名を持つ型を指定します。この型は後でテーブルの関数参照呼び出しの型チェックを行うときに使用されます。ここでは、参照が1つの `i32` を返す関数である必要があると言っています。
- 次に、`callByIndex` としてエクスポートされる関数を定義します。引数として1つの `i32` をとり、引数名として `$i` が指定されています。
- 関数内部でスタックに値を1つ追加します。値は引数 `$i` のものが渡されます。
- 最後に、テーブルから関数を呼び出すために `call_indirect` を使用します。これは暗黙的に `$i` の値をスタックからポップします。この結果、`callByIndex` 関数はテーブルの `$i` 番目の関数を呼び出します。

`call_indirect` の引数はコマンド呼び出しの前に置く代わりに、次のように明示的に宣言することもできます:

```wasm
(call_indirect (type $return_i32) (local.get $i))
```

より高級な、JavaScript のような表現力の高い言語では、関数を含む配列 (あるいはオブジェクトかもしれません) で同じことができることが想像できますよね。擬似コードだとこれは `tbl[i]()` のようになります。

型チェックの話に戻ります。WebAssembly は型チェックされていて、 `funcref`  は「任意の関数シグネチャ」を意味するので、呼び出し先の (推定される) シグネチャを指定する必要があります。そのため、 `$return_i32` 型を指定することで、プログラムに関数が `i32` を返すはずだと知らせます。もし呼び出し先のシグネチャが一致しない (代わりに `f32` が返されるような) 場合は {{JSxRef("WebAssembly.RuntimeError")}} 例外が発生します。

さて、呼び出しを行うときにどのようにテーブルに `call_indirect` をリンクさせているのでしょうか? 答えは、現在モジュールインスタンスごとに1つのテーブルしか許容されないため、`call_indirect` はそれを暗黙的に呼び出します。将来的に複数のテーブルを持てるようになったとき、以下の行のように、何らかのテーブル識別子を指定する必要があるでしょう。

```wasm
call_indirect $my_spicy_table (type $i32_to_void)
```

完全なモジュールは次のようになります。例は [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/wasm-table.wat) を参照してください:

```wasm
(module
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
)
```

次の JavaScript を使用してウェブページに読み込んでみましょう。

```js
WebAssembly.instantiateStreaming(fetch('wasm-table.wasm'))
  .then(obj => {
    console.log(obj.instance.exports.callByIndex(0)); // returns 42
    console.log(obj.instance.exports.callByIndex(1)); // returns 13
    console.log(obj.instance.exports.callByIndex(2)); // returns an error, because there is no index position 2 in the table
  });
```

> **Note:** 例は GitHub の [wasm-table.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/wasm-table.html) ([動作例](https://mdn.github.io/webassembly-examples/understanding-text-format/wasm-table.html)) を参照してください。

> **Note:** Memory と同じように Table も JavaScript から作成すること ([`WebAssembly.Table()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table) を参照) 、別の wasm モジュール間でインポートすることができます。

### テーブルの変更と動的リンク

JavaScript は関数参照にフルアクセスできるため、 Table オブジェクトは JavaScript から [`grow()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/grow), [`get()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get), [`set()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/set) メソッドを使用して変更することができます。また、 WebAssembly のコード自体も、[参照型](#参照型)の一部として追加された `table.get` や `table.set` などの命令を使ってテーブルを操作することが可能です。

テーブルは変更可能であるため、高度な読み込み時および実行時の[動的リンクスキーム](https://webassembly.org/docs/dynamic-linking)の実装に使用することができます。プログラムが動的にリンクされたとき、複数のインスタンスで同じメモリーとテーブルを共有することができます。これは複数のコンパイル済み `.dll` が単一のプロセスのアドレス空間を共有するネイティブアプリケーションと対称的です。

この動作を確認するために、Memory オブジェクトと Table オブジェクトを含む単一のインポートオブジェクトを作成し、同じインポートオブジェクトを複数の [`instantiate()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate) の呼び出しで渡してみましょう。

`.wat` ファイルの例は次のようになります。

`shared0.wat`:

```wasm
(module
  (import "js" "memory" (memory 1))
  (import "js" "table" (table 1 funcref))
  (elem (i32.const 0) $shared0func)
  (func $shared0func (result i32)
   i32.const 0
   i32.load)
)
```

`shared1.wat`:

```wasm
(module
  (import "js" "memory" (memory 1))
  (import "js" "table" (table 1 funcref))
  (type $void_to_i32 (func (result i32)))
  (func (export "doIt") (result i32)
   i32.const 0
   i32.const 42
   i32.store  ;; store 42 at address 0
   i32.const 0
   call_indirect (type $void_to_i32))
)
```

これらは次のように動作します。

1.  関数 `shared0func` は `shared0.wat` で定義され、インポートされたテーブルに格納されます。
2.  この関数は定数値 `0` を作成して、次に `i32.load` コマンドを使用して指定したメモリーのインデックスから値をロードします。そのインデックスは `0` になります 。先と同様に、前の値をスタックから暗黙的にポップします。つまり、`shared0func` はメモリーのインデックス `0` の位置に格納された値をロードして返します。
3.  `shared1.wat` では、 `doIt` という関数をエクスポートします。この関数は2つの定数値 `0` と `42` を作成して `i32.store` を呼び出して、インポートされたメモリーの指定したインデックスに指定した値を格納します。ここでも、これらの値はスタックから暗黙的にポップされます。したがって、結果的にメモリーのインデックスが `0` の位置に、値として `42` が格納されます。
4.  関数の最後では、定数値 `0` を作成し、テーブルのインデックスが 0 の位置にある関数を呼び出します。これは `shared0func` で、先に `shared0.wat` の `elem` ブロックで格納されたものです。
5.  呼び出されたとき、`shared0func` は `shared1.wat` 内で `i32.store` コマンドを使用してメモリーに格納された 42 をロードします。

> **Note:** 上の式はスタックから値を暗黙的にポップしますが、代わりにコマンド呼び出しの中で明示的に宣言することができます。
>
> ```wasm
> (i32.store (i32.const 0) (i32.const 42))
> (call_indirect (type $void_to_i32) (i32.const 0))
> ```

アセンブリーに変換した後、次のコードで JavaScript 内で `shared0.wasm` と `shared1.wasm` を使用します:

```js
var importObj = {
  js: {
    memory : new WebAssembly.Memory({ initial: 1 }),
    table : new WebAssembly.Table({ initial: 1, element: "anyfunc" })
  }
};

Promise.all([
  WebAssembly.instantiateStreaming(fetch('shared0.wasm'), importObj),
  WebAssembly.instantiateStreaming(fetch('shared1.wasm'), importObj)
]).then(function(results) {
  console.log(results[1].instance.exports.doIt());  // prints 42
});
```

コンパイルされた各モジュールは同じメモリーとテーブルオブジェクトをインポートし、その結果同じ線形メモリーとテーブルの「アドレス空間」を共有することができます。

> **Note:** 例は GitHub の [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/master/understanding-text-format/shared-address-space.html) ([動作例](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)) を参照してください。

## 大規模メモリー操作

大規模メモリー操作は、言語へ新しく追加されたものです（例えば [Firefox 79](/ja/docs/Mozilla/Firefox/Releases/79)）。コピーや初期化などのバルクメモリ操作のために 7 つの新しい組み込み操作が提供されており、 WebAssembly が `memcpy` や `memmove` などのネイティブ関数を、より効率的でパフォーマンスの高い方法でモデル化できるようにします。

新しい操作は次の通りです。

- `data.drop`: データセグメント内のデータを無効にします。
- `elem.drop`: 要素セグメント内のデータを無効にします。
- `memory.copy`: 線形メモリーの一範囲を他へコピーします。
- `memory.fill`: 線形メモリーの一範囲を指定した値で埋めます。
- `memory.init`: データセグメントから範囲をコピーします。
- `table.copy`: テーブルの一範囲から他へコピーします。
- `table.init`: 要素セグメントから範囲をコピーします。

> **Note:** 詳しい情報は [Bulk Memory Operations and Conditional Segment Initialization](https://github.com/WebAssembly/bulk-memory-operations/blob/master/proposals/bulk-memory-operations/Overview.md) の提案にあります。

## 参照型

[参照型の提案](https://github.com/WebAssembly/reference-types/blob/master/proposals/reference-types/Overview.md) ([Firefox 79](/ja/docs/Mozilla/Firefox/Releases/79) で対応) では、主に 2 つのことを提供しています。

- 新しい型である `externref` は、文字列、DOM 参照、オブジェクトなど、あらゆる JavaScript の値を保持することができます。 WebAssembly の観点からは `externref` は不透明です。wasm モジュールはこれらの値にアクセスして操作することができず、代わりに値を受け取って送り返すことだけができます。しかし、これは wasm モジュールが JavaScript の関数や DOM API などを呼び出したり、ホスト環境との相互運用を容易にするために非常に有用です。`externref` は値型とテーブル要素に使用することができます。
- JavaScript API 経由ではなく、wasm モジュールが直接 [WebAssembly テーブル](#webassembly_テーブル)を操作できるようにするための新しい命令がいくつか追加されました。

> **Note:** [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/) のドキュメントには、 `externref` を Rust で利用する方法について、いくつかの有用な情報が含まれています。

## WebAssembly の複数値

もっと最近になって (例えば [Firefox 78](/ja/docs/Mozilla/Firefox/Releases/78)) 言語に追加されたものが WebAssembly 複数値です。これは、WebAssembly 関数が複数の値を返すことができるようになり、一連の命令が複数のスタック値を消費して生成することができるようになったことを意味します。

執筆時点 (2020 年 6 月) において、これは初期段階であり、利用可能な多値命令は、それ自体が複数の値を返す関数の呼び出しのみです。例を示します。

```wasm
(module
  (func $get_two_numbers (result i32 i32)
    i32.const 1
    i32.const 2
  )
  (func (export "add_two_numbers") (result i32)
    call $get_two_numbers
    i32.add
  )
)
```

しかし、これはより有用な命令タイプやその他のものへの道を開くことになるでしょう。これまでの進捗状況や、これがどのように動作するかについては、 Nick Fitzgerald の [Multi-Value All The Wasm!](https://hacks.mozilla.org/2019/11/multi-value-all-the-wasm/) を参照してください。

## WebAssembly スレッド

WebAssembly スレッド ([Firefox 79](/ja/docs/Mozilla/Firefox/Releases/79) 以降で対応) は、 WebAssembly Memory オブジェクトを別なウェブワーカー内で動作している複数の WebAssembly インスタンスで共有できるものであり、 JavaScript の [`SharedArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) と似たような形のものです。これにより、ワーカー間の非常に高速な通信が可能になり、ウェブアプリケーションのパフォーマンスが大幅に向上します。

スレッドの提案は、共有メモリーと不可分メモリーアクセスの 2 つの部分からなります。

### 共有メモリー

上記のように、共有の WebAssembly [`Memory`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) オブジェクトを作成することが可能です。これは、 [`postMessage()`](/ja/docs/Web/API/Window/postMessage) を使用してウィンドウとワーカーのコンテキスト間で、 [`SharedArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) と同じ方法で転送されるものです。

JavaScript API 側では、[`WebAssembly.Memory()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) コンストラクタの初期化オブジェクトに `shared` プロパティを追加し、 `true` に設定すると共有メモリを作成するようになりました。

```js
let memory = new WebAssembly.Memory({initial:10, maximum:100, shared:true});
```

メモリーの [`buffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer) プロパティは `SharedArrayBuffer` を返すようになり、普通の `ArrayBuffer` ではなくなりました。

```js
memory.buffer // returns SharedArrayBuffer
```

テキスト形式の上では、 `shared` キーワードを使って、次のように共有メモリーを作成することができます。

```wasm
(memory 1 2 shared)
```

共有されていないメモリーと異なり、共有メモリーは JavaScript API のコンストラクターと wasm のテキスト形式の両方で「最大」サイズを指定する必要があります。

> **Note:** 詳しくは、 [WebAssembly のスレッド提案](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md)にたくさん載っています。

### 不可分メモリーアクセス

ミューテックスや条件変数など、より高度な機能を実装するために使用できる新しい wasm 命令が多数追加されました。[ここにリストアップされています](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#atomic-memory-accesses)。これらの命令は、 Firefox 80 の時点で共有でないメモリー上で許可されています。

> **Note:** [Emscripten Pthreads support page](https://emscripten.org/docs/porting/pthreads.html) で、 Emscripten の新機能を利用する方法を紹介しています。

## まとめ

これで、WebAssembly テキスト形式の主要コンポーネントとそれらが WebAssembly JS API にどのように反映されるのかの高レベルなツアーが完了しました。

## 関連情報

- この記事に含まれなかった主なものは、関数本体で現れるすべての命令の包括的なリストです。各命令の処理は [WebAssembly のセマンティックス](http://webassembly.org/docs/semantics) を参照してください。
- スペックインタプリターによって実装された[テキスト形式の文法](https://github.com/WebAssembly/spec/blob/master/interpreter/README.md#s-expression-syntax)も参照してください。
