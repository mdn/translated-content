---
title: WebAssembly テキスト形式の理解
slug: WebAssembly/Guides/Understanding_the_text_format
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

WebAssembly を人間が読んだり編集したりできるようにするため、 Wasm バイナリー形式にはテキスト表現が存在します。これはテキストエディター、ブラウザーの開発者ツールなどで見せるために設計された中間表現です。この記事では、テキスト形式のしくみ、生の構文、および元のバイトコードの表現との関係 (と JavaScript で Wasm を表現したラッパーオブジェクト) について説明します。

> [!NOTE]
> この記事は、あなたがウェブ開発者で Wasm モジュールをページに読み込んでコード内で使用するだけなら過剰なものかもしれません ([WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Guides/Using_the_JavaScript_API)を参照)。しかし、例えば、パフォーマンスを最適化するために Wasm モジュールを書きたいときや、あなた自身で WebAssembly コンパイラーを作るときには役に立ちます。

## S 式

バイナリー、テキスト形式どちらでも、 WebAssembly の基本的なコードの単位はモジュールです。テキスト形式ではモジュールは 1 つの大きな S 式として表現されます。 S 式はツリー構造を表現するための非常に古くてシンプルなテキスト形式で、モジュールをその構造とそのコードを記述するノードツリーとして考えることができます。しかし、プログラミング言語の AST (抽象構文木) とは異なり、 WebAssembly のツリーはかなり平坦で、ほとんどは命令の列で構成されています。

はじめに、 S 式がどういうものか見てみましょう。ツリー内の各ノードは `( ... )` のように 1 組の括弧内に入れられます。 括弧内の最初のラベルは、それがどのノードタイプかを示し、スペースで区切られた属性、または子ノードのリストが続きます。次のコードは WebAssembly の S 式を意味します。

```wat
(module (memory 1) (func))
```

ルートノード "module" と 2 つの子ノード、 "1" を属性に持つ "memory" ノード、"func" ノードを表します。これらのノードが実際にどういう意味なのかを見ていきましょう。

### 最もシンプルなモジュール

最もシンプルで短い実行可能な Wasm モジュールから始めてみましょう。

```wat
(module)
```

このモジュールは完全に空ですが、モジュールとしては有効です。

いま、このモジュールをバイナリーに変換すると ([WebAssembly テキスト形式から Wasm に変換する](/ja/docs/WebAssembly/Guides/Text_format_to_Wasm) を参照) 、 [バイナリー形式](https://webassembly.github.io/spec/core/binary/modules.html#binary-module) で記述された 8 バイトのモジュールヘッダーだけになります。

```plain
0000000: 0061 736d              ; WASM_BINARY_MAGIC
0000004: 0100 0000              ; WASM_BINARY_VERSION
```

### モジュールに機能を追加する

はい、これは全然面白くないですね。モジュールに実行可能なコードを追加していきましょう。

すべての WebAssembly モジュール内のコードは次の擬似コード構造を持つ関数にグループ化されます:

```wat
( func <signature> <locals> <body> )
```

- **signature** は関数が何を受け取る（引数）かと何を返す (返値) かを宣言します。
- **locals** は JavaScript でいうと変数のようなものですが、明示的な型が宣言されます。
- **body** は線形の低レベルな命令のリストです。

S 式であるために違って見えますが、これは、他の言語の関数に似ています。

## シグネチャと引数

シグネチャは、返値の型宣言のリストが後に続く、引数の型宣言の並びです。ここで注目すべきは次の点です。

- `(result)` がない場合、その関数は何も返さないということです。
- 現在は、最大で 1 つの返値の型を指定することができますが、任意の数に[緩和される予定](https://github.com/WebAssembly/spec/blob/main/proposals/multi-value/Overview.md)です。

それぞれの引数には、明示的に型を宣言します。Wasm は[数値型](#数値型)、[参照型](#参照型)、[ベクトル型](#ベクトル型)があります。数値型には以下のものがあります。

- `i32`: 32 ビット整数
- `i64`: 64 ビット整数
- `f32`: 32 ビット浮動小数点数
- `f64`: 64 ビット浮動小数点数

単体の引数は `(param i32)` 、返値は `(result i32)` のように記述します。したがって、 2 つの 32 ビット整数を引数にとり、 64 ビット浮動小数点数を返すバイナリー関数は次のように記述します。

```wat
(func (param i32) (param i32) (result f64) ...)
```

シグネチャのあとに、型付けされたローカル変数のリストが続きます（例: `(local i32)`）。引数は基本的に、呼び出し元から渡された対応する引数の値で初期化される単なるローカル変数です。

## ローカル変数と引数を取得/設定する

ローカル変数と引数は関数本体から `local.get` と `local.set` 命令を使用して読み書きすることができます。

`local.get`/`local.set` コマンドは数値のインデックスから取得/設定される項目を参照します。最初に引数が宣言順に、その後に、ローカル変数が宣言順に参照されます。次の関数を見てください。

```wat
(func (param i32) (param f32) (local f64)
  local.get 0
  local.get 1
  local.get 2)
```

命令 `local.get 0` は i32 の引数, `local.get 1` は f32 の引数、そして `local.get 2` は f64 のローカル変数を取得します。

ここで別の問題があります。数値のインデックスを使用して項目を参照すると、混乱したり、困ってしまうことがあります。そこで、テキスト形式では、単純に型宣言の直前に (`$`) を接頭辞として付けた名前を、引数、ローカル変数や他の多くの項目につけることができます。

したがって、上記のシグネチャを次のように書き直すことができます。

```wat
(func (param $p1 i32) (param $p2 f32) (local $loc f64) …)
```

そして、`local.get 0` の代わりに `local.get $p1` と書くことができるようになります（このテキストがバイナリーに変換されたとき、バイナリーには整数値だけが残されることに注意してください）。

## スタックマシン

関数本体を書く前に、もう 1 つ、**スタックマシン**について話をする必要があります。ブラウザーはそれを更に効率的な形にコンパイルしますが、wasm の実行はスタックマシンとして定義されます。スタックマシンの基本的な考え方は、すべての命令がスタックから特定の数の `i32`/`i64`/`f32`/`f64` 値をプッシュ、ポップするようにすることです。

例えば、 `local.get` はローカル変数の値をスタックにプッシュするように定義されます。そして、`i32.add` は2つの `i32` 値 (スタックにプッシュされた前の2つの値を暗黙的に取得します) をポップし、合計を計算して (2^32 の剰余として) 結果の i32 値をプッシュします。

関数が呼び出されたとき、空のスタックから開始され、徐々に積まれてゆき、本体の命令が実行されると空になります。例として、次の関数の実行後について見てみましょう。

```wat
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

```wat
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))
```

この関数は 2 つの引数を受け取って、それらを足して、その結果を返します。

関数本体に置けるものはもっとたくさんありますが、いまはシンプルなもので始めます。進むにつれてもっと多くの例を見ていきます。すべての有効なオペコードのリストについては [webassembly.org Semantics reference](https://webassembly.github.io/spec/core/exec/index.html) を調べてみてください。

### 関数の呼び出し

定義した関数は自身では大したことをしません。いまはそれを呼び出す必要があります。どのようにすればよいでしょうか。 ES2015 モジュールのように、Wasm 関数はモジュール内の `export` ステートメントによって明示的にエクスポートしなければなりません。

ローカル変数と同じように、関数も既定ではインデックスで識別されますが、便宜上の関数名を付けることができます。 `func` キーワードの直後にドル記号で始まる名前を付けてみましょう。

```wat
(func $add …)
```

ここでエクスポート宣言を追加する必要があります。次のようになります。

```wat
(export "add" (func $add))
```

ここで `add` は JavaScript で認識される関数名であるのに対して、`$add` はモジュール内の、どの WebAssembly 関数をエクスポートするのかを選択します。

（今のところ）最終的なモジュールは次のようになります。

```wat
(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
)
```

例に従うなら、上のモジュールを `add.wat` という名前で保存して、wabt を使用して（詳細は [WebAssembly テキスト形式から Wasm に変換する](/ja/docs/WebAssembly/Guides/Text_format_to_Wasm) を参照してください）、`add.wasm` というファイルに変換します。

次に、バイナリーを非同期でインスタンス化し（[WebAssembly コードのロードと実行](/ja/docs/WebAssembly/Guides/Loading_and_running)を参照）、JavaScript で `add` 関数を実行しましょう（`add()` はインスタンスの [`exports`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) プロパティから見つけることができます）。

```js
WebAssembly.instantiateStreaming(fetch("add.wasm")).then((obj) => {
  console.log(obj.instance.exports.add(1, 2)); // "3"
});
```

> [!NOTE]
> この例は GitHub の [add.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/add.html)（[動作例](https://mdn.github.io/webassembly-examples/understanding-text-format/add.html)）にあります。関数のインスタンス化についての詳細は [`WebAssembly.instantiateStreaming()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) も参照してください。

## 基礎を探る

ここでは実際の基本的な例を取り上げてから、いくつかの高度な機能について見てみましょう。

### 同じモジュールの他の関数から関数を呼び出す

`call` 命令はインデックスか名前を指定して単一の関数を呼び出します。例えば、次のモジュールには 2 つの関数が含まれています。 1 つ目はただ 42 を返すだけ、もう 1 つは 1 つ目のものに 1 を足した値を返します。

```wat
(module
  (func $getAnswer (result i32)
    i32.const 42)
  (func (export "getAnswerPlus1") (result i32)
    call $getAnswer
    i32.const 1
    i32.add))
```

> [!NOTE]
> `i32.const` は 32 ビット整数を定義してスタックにプッシュするだけです。 `i32` 以外の有効な型に変えて、 const の値を好きなものに変えることができます（ここでは `42` に設定しました）。

この例で、 `func` の直後に宣言された `(export "getAnswerPlus1")` セクションに気づくでしょう。これはこの関数をエクスポートするための宣言をして、さらにそれに名前をつけるために使用するショートカットです。

これは、上で行ったように、モジュール内の関数外の別の場所で、関数ステートメントと分けて定義するのと同等の機能です。

```wat
(export "getAnswerPlus1" (func $functionName))
```

上のモジュールを呼び出す JavaScript コードは次のようになります。

```js
WebAssembly.instantiateStreaming(fetch("call.wasm")).then((obj) => {
  console.log(obj.instance.exports.getAnswerPlus1()); // "43"
});
```

### JavaScript から関数をインポートする

すでに、JavaScript から WebAssembly 関数を呼び出すことについては確認しましたが、WebAssembly から JavaScript 関数を呼び出すことについてはどうでしょうか? WebAssembly は実際に JavaScript のビルトインの情報を持っていませんが、JavaScript か Wasm 関数をインポートするための一般的な方法があります。例を見てみましょう。

```wat
(module
  (import "console" "log" (func $log (param i32)))
  (func (export "logIt")
    i32.const 13
    call $log))
```

WebAssembly は 2 階層の名前空間のインポート文を持っています。ここでは、`console` モジュールから `log` 関数をインポートすることを要求しています。また、エクスポートされた `logIt` 関数から、上で紹介した `call` 命令を使用して、インポートされた関数を呼ぶ出すことができます。

インポートされた関数は通常の関数と同じようなものです。WebAssembly のバリデーションによって静的にチェックするシグネチャを持ち、インデックスか名前を付けて呼び出すことができます。

JavaScript 関数にはシグネチャの概念がないため、インポート宣言のシグネチャに関係なく、どの JavaScript 関数も渡すことができます。モジュールがインポート宣言をすると、 [`WebAssembly.instantiate()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) を呼び出す側は、対応したプロパティを持ったインポートオブジェクトを渡す必要があります。

上の場合、 `importObject.console.log` が JavaScript 関数であるようなオブジェクト(`importObject` と呼びましょう) が必要になります。

これは次のようになります。

```js
const importObject = {
  console: {
    log(arg) {
      console.log(arg);
    },
  },
};

WebAssembly.instantiateStreaming(fetch("logger.wasm"), importObject).then(
  (obj) => {
    obj.instance.exports.logIt();
  },
);
```

> [!NOTE]
> この例は GitHub の [logger.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger.html)（[動作例](https://mdn.github.io/webassembly-examples/understanding-text-format/logger.html)）を参照してください。

### WebAssembly でのグローバルの宣言

WebAssembly には、 JavaScript からアクセス可能なグローバル変数インスタンスを作成する機能と、 1 つ以上の [`WebAssembly.Module`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Module) インスタンスにまたがってインポート/エクスポート可能なグローバル変数インスタンスを作成する機能があります。これは、複数のモジュールを動的にリンクすることができるので、とても便利です。

WebAssembly のテキスト形式では、次のようになります （GitHub のリポジトリーにある [global.wat](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.wat) を参照してください。JavaScript の例は [global.html](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) も参照してください）。

```wat
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

JavaScript を使用して同等の値を作成するには、 [`WebAssembly.Global()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Global) コンストラクターを使用してください。

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

### WebAssembly メモリー

上記の例は、アセンブリコードで数値を操作し、それらを[スタック](#スタックマシン)に追加し、演算を実行し、JavaScript のメソッドを呼んで結果をログに記録する方法を示しています。

文字列やその他のより複雑なデータ型を扱うには、WebAssembly または JavaScript で作成でき、環境間で共有できるメモリーを使用します（新しいバージョンの WebAssembly では、[参照型](#参照型)も使用できます）。

WebAssembly では、**メモリー**は、時間経過に伴う伸長が可能な、連続した変更可能な生のバイトの配列にすぎません（仕様の「[線形メモリー](https://webassembly.github.io/spec/core/intro/overview.html?highlight=linear+memory)」を参照してください）。WebAssembly には、スタックとメモリー内の任意の場所間でバイトを読み書きするための[メモリー命令](/ja/docs/WebAssembly/Reference/Memory)、例えば [`i32.load`](/ja/docs/WebAssembly/Reference/Memory/Load) や [`i32.store`](/ja/docs/WebAssembly/Reference/Memory/Store) などが含まれています。

JavaScript の観点からは、メモリーは 1 つの大きな拡張可能な {{jsxref("ArrayBuffer")}} の中にすべて含まれているようなものです。
JavaScript は、 [`WebAssembly.Memory()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory) インターフェイスを介して WebAssembly 線形メモリーインスタンスを作成し、それらをメモリーインスタンスにエクスポートしたり、WebAssembly コード内で作成されエクスポートされたメモリーインスタンスにアクセスしたりすることができます。JavaScript の `Memory` インスタンスには [`buffer`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) ゲッターがあり、線形メモリー全体を指す `ArrayBuffer` を返します。

Memory インスタンスは、例えば JavaScript から [`Memory.grow()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) メソッドを使用したり、 WebAssembly から [`memory.grow`](/ja/docs/WebAssembly/Reference/Memory/Grow) を使用したりして拡張することもできます。
`ArrayBuffer` はサイズを変更することができないため、現在の `ArrayBuffer` は切り離され、新しく作成された、より大きな `ArrayBuffer` を指し示すようになります。

なお、メモリーを作成するときは、初期サイズを定義する必要があり、オプションでメモリーが伸長できる最大サイズを指定できます。
WebAssembly は、最大サイズ (指定されている場合) を予約しようとします。予約できた場合、将来、バッファーをより効率的に伸長することができます。現在、最大サイズを割り当てることができない場合でも、後で伸長できる可能性があります。
このメソッドは、初期サイズを割り当てることができない場合にのみ失敗します。

> [!NOTE]
> 元々は、WebAssembly ではモジュールインスタンスごとに 1 つのメモリーしか使用できませんでした。
> ブラウザーが対応していれば、[複数のメモリー](#複数のメモリー)を持つことができるようになりました。
> 複数のメモリーを使用していないコードは変更する必要はありません。

この動作の一部を説明するために、WebAssembly コードで文字列を処理する場合を考えてみましょう。
文字列は、この線形メモリー内のどこかに存在する一連のバイト列です。
WebAssembly メモリーに適切なバイトの文字列を記述したと想定すると、その文字列を、メモリー、メモリー内の文字列のオフセット、および長さを示す何らかの方法を共有することで、JavaScript に渡すことができます。

まず、メモリーを作成し、WebAssembly と JavaScript で共有しましょう。
WebAssembly は、この点で非常に柔軟性があります。JavaScript で [`Memory`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory) オブジェクトを作成し、WebAssembly モジュールにそのメモリーをインポートさせるか、 WebAssembly モジュールにメモリーを作成させ、それを JavaScript にエクスポートさせるか、どちらでもかまいません。

この例では、JavaScript でメモリーを作成し、それを WebAssembly にインポートします。
まず、1 ページからなる `Memory` オブジェクトを作成し、それをキー `js.mem` の `importObject` に追加します。
次に、インポートオブジェクトを渡して、WebAssembly モジュール（この場合は "the_wasm_to_import.wasm"）を、 [`WebAssembly.instantiateStreaming()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) メソッドを使用して、インスタンス化します。

```js
const memory = new WebAssembly.Memory({ initial: 1 });

const importObject = {
  js: { mem: memory },
};

WebAssembly.instantiateStreaming(
  fetch("the_wasm_to_import.wasm"),
  importObject,
).then((obj) => {
  // Call exported functions ...
});
```

WebAssembly ファイル内で、このメモリーをインポートします。 WebAssembly テキスト書式を使用して、`import` 文は次のように記述します。

```wat
(import "js" "mem" (memory 1))
```

メモリーは、`importObject` (`js.mem`) で指定されたのと同じ 2 レベルのキーを使用してインポートする必要があります。
`1` は、インポートされるメモリーに少なくとも 1 ページ分のメモリーが存在する必要があることを示します（WebAssembly では現在、1 ページは 64KB と定義されています）。

> [!NOTE]
> これは WebAssembly モジュールにインポートされた最初のメモリーであるため、メモリーインデックスは "0" です。
> [メモリー命令](/ja/docs/WebAssembly/Reference/Memory)のインデックスを使用してこの特定のメモリーを参照することができますが、0 は既定のインデックスであるため、単一のメモリーアプリケーションではその必要はありません。

これで共有メモリーインスタンスができました。次の段階では、そのメモリーにデータ文字列を書き込みます。
次に、その文字列の場所と長さに関する情報を JavaScript に渡します（文字列の長さを文字列自体にエンコードすることもできますが、長さを渡す方が実装が簡単です）。

まず、メモリーにデータ文字列を追加しましょう。この例では "Hi" とします。
線形メモリー全体を自分自身で所有しているので、 `data` 節を使用して、文字列のコンテンツをグローバルメモリーに書き込むだけです。
データセクションを使用すると、インスタンス化時に指定されたオフセットにバイトの文字列を書き込むことができ、ネイティブ実行形式の `.data` 節と似ています。
ここでは、オフセット 0 に、既定のメモリー（指定する必要はありません）にデータを書き込んでいます。

```wat
(module
  (import "js" "mem" (memory 1))
  ;; ...
  (data (i32.const 0) "Hi")
  ;;
)
```

> [!NOTE]
> 上記の 2 重のセミコロン構文 (`;;`) は WebAssembly ファイル内でコメントを書くためのものです。
> この場合、他のコードのプレースホルダーを示すために使用されています。

このデータを JavaScript と共有するために、2 つの関数を定義します。
まず、JavaScript から、文字列をコンソールに記録するために使用する関数をインポートします。
これは、WebAssembly モジュールをインスタンス化するために使用される `importObject` 内の `console.log` に割り当てる必要があります。
この関数は、WebAssembly では `$log` という名前で、メモリー内の文字列のオフセットと長さを表す `i32` 型の引数を取ります。

2 つ目の WebAssembly 関数 `writeHi()` は、メモリー内の文字列のオフセットと長さ (`0` と `2`) を指定して、インポートした `$log` 関数を呼び出します。
これは、JavaScript から呼び出せるように、モジュールからエクスポートされています。

最終的な WebAssembly モジュール（テキスト形式）は、このように見えます。

```wat
(module
  (import "console" "log" (func $log (param i32 i32)))
  (import "js" "mem" (memory 1))
  (data (i32.const 0) "Hi")
  (func (export "writeHi")
    i32.const 0  ;; pass offset 0 to log
    i32.const 2  ;; pass length 2 to log
    call $log
  )
)
```

JavaScript 側では、ロギング関数を定義し、それを WebAssembly に渡し、エクスポートされた `writeHi()` メソッドを呼び出す必要があります。
完全なコードを下記に示します。

```js
const memory = new WebAssembly.Memory({ initial: 1 });

// Logging function ($log) called from WebAssembly
function consoleLogString(offset, length) {
  const bytes = new Uint8Array(memory.buffer, offset, length);
  const string = new TextDecoder("utf8").decode(bytes);
  console.log(string);
}

const importObject = {
  console: { log: consoleLogString },
  js: { mem: memory },
};

WebAssembly.instantiateStreaming(fetch("logger2.wasm"), importObject).then(
  (obj) => {
    // Call the function exported from logger2.wasm
    obj.instance.exports.writeHi();
  },
);
```

ログ出力関数 `consoleLogString()` は、プロパティ `console.log` で `importObject` に渡され、WebAssembly モジュールによってインポートされることに注意してください。
この関数は、渡されたオフセットと指定された長さで、`Uint8Array` を使用して共有メモリー内の文字列に対するビューを作成します。
次に、[TextDecoder API](/ja/docs/Web/API/TextDecoder) を使用して、バイト列を UTF-8 から文字列にデコードします（ここでは `utf8` を指定していますが、他にも多くのエンコード方式に対応しています）。
次に、文字列は `console.log()` を使用してコンソールにログ出力されます。

最後の段階では、エクスポートされた `writeHi()` 関数を呼び出します。これは、オブジェクトがインスタンス化された後に実行されます。
コードを実行すると、コンソールに「Hi」というテキストが表示されます。

> [!NOTE]
> 完全なソースは GitHub の [logger2.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/logger2.html)（[動作例](https://mdn.github.io/webassembly-examples/understanding-text-format/logger2.html)）を参照してください。

#### 複数のメモリー

最近の実装では、単一のメモリーのみに対応している実装用に記述されたコードと互換性のある方法で、WebAssembly および JavaScript で複数のメモリーオブジェクトを使用することができます。
複数のメモリーは、パブリックデータとプライベートデータ、維持する必要があるデータ、スレッド間で共有する必要があるデータなど、他のアプリケーションデータとは別々に扱う必要があるデータを分離するのに役立ちます。
また、Wasm 32 ビットアドレス空間を超える規模が必要な非常に大規模なアプリケーションや、その他の目的にも役立ちます。

WebAssembly コードで直接宣言またはインポートされて利用可能になったメモリーには、0 から順番に割り当てられたメモリーインデックス番号が割り当てられます。読み込みや保存などのすべての[メモリー命令]、例えば [`load`](/ja/docs/WebAssembly/Reference/Memory/Load) や [`store`](/ja/docs/WebAssembly/Reference/Memory/Store) は、そのインデックスを介して具体的なメモリーを参照できるため、使用するメモリーを制御できます。

メモリー命令のインデックスは、WebAssembly インスタンスに最初に追加されたメモリーのインデックスである 0 が既定で設定されています。
そのため、メモリーを 1 つだけ追加する場合は、コードでインデックスを指定する必要はありません。

これがどのように動作するのかを詳しく示すために、前回の例を拡張して、3 つの異なるメモリーに文字列を書き込んで、その結果をログに記録します。
以下のコードは、前回の例と同じ手法を使用して、最初に 2 つのメモリインスタンスをインポートする方法を示しています。
WebAssembly モジュール内でメモリを作成する方法を示すために、モジュール内に `$mem2` という名前付き 3 つ目のメモリインスタンスを作成し、それをエクスポートしました。

```wat
(module
  ;; ...

  (import "js" "mem0" (memory 1))
  (import "js" "mem1" (memory 1))

  ;; Create and export a third memory
  (memory $mem2 1)
  (export "memory2" (memory $mem2))

  ;; ...
)
```

3 つのメモリーインスタンスには、作成順に基づいてインスタンスが自動的に割り当てられます。
以下のコードは、文字列を書き込むメモリーを選択するために、`data` 命令でこのインデックス (`(memory 1)` など) を指定する方法を示しています (`load` や `grow` など、それ以外のすべてのメモリー命令でも同じ手法を使用することができます)。
ここでは、それぞれのメモリーの種類を示す文字列を書き込んでいます。

```wat
  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Add text to default (0-index) memory
  (data (i32.const 13) " (Default)")
```

`(memory 0)` は既定であり、したがってオプションであることに注意してください。
これを実証するために、メモリインデックスを指定せずにテキスト `" (Default)"` を書き込みます。これは、メモリの内容がログ出力されるときに `"Memory 0 data"` の後に追加されるはずです。

WebAssembly のロギングコードは、文字列のオフセットと長さに加えて、文字列を含むメモリーのインデックスを渡す必要がある点を除いて、前回の例とほぼ同じです。
また、3 つのメモリーインスタンスすべてをログに記録します。

完全なモジュールを以下に示します。

```wat
(module
  (import "console" "log" (func $log (param i32 i32 i32)))

  (import "js" "mem0" (memory 1))
  (import "js" "mem1" (memory 1))

  ;; Create and export a third memory
  (memory $mem2 1)
  (export "memory2" (memory $mem2))

  (data (memory 0) (i32.const 0) "Memory 0 data")
  (data (memory 1) (i32.const 0) "Memory 1 data")
  (data (memory 2) (i32.const 0) "Memory 2 data")

  ;; Add text to default (0-index) memory
  (data (i32.const 13) " (Default)")

  (func $logMemory (param $memIndex i32) (param $memOffSet i32) (param $stringLength i32)
    local.get $memIndex
    local.get $memOffSet
    local.get $stringLength
    call $log
  )

  (func (export "logAllMemory")
    ;; Log memory index 0, offset 0
    (i32.const 0)  ;; memory index 0
    (i32.const 0)  ;; memory offset 0
    (i32.const 23)  ;; string length 23
    (call $logMemory)

    ;; Log memory index 1, offset 0
    i32.const 1  ;; memory index 1
    i32.const 0  ;; memory offset 0
    i32.const 20  ;; string length 20
    call $logMemory

    ;; Log memory index 2, offset 0
    i32.const 2  ;; memory index 2
    i32.const 0  ;; memory offset 0
    i32.const 12  ;; string length 13
    call $logMemory
  )

)
```

JavaScript コードも前の例とよく似ていますが、2 つのメモリーインスタンスを作成して `importObject()` に渡し、モジュールインスタンスによってエクスポートされたメモリーは、解決されたプロミス (`obj.instance.exports`) を使用してインスタンス化された後にアクセスされる点が異なります。
各文字列をログに記録するコードも、WebAssembly のメモリーインスタンスの番号を具体的な `Memory` オブジェクトと照合する必要があるため、少し複雑になっています。

```js
const memory0 = new WebAssembly.Memory({ initial: 1 });
const memory1 = new WebAssembly.Memory({ initial: 1 });
let memory2; // Created by module

function consoleLogString(memoryInstance, offset, length) {
  let memory;
  switch (memoryInstance) {
    case 0:
      memory = memory0;
      break;
    case 1:
      memory = memory1;
      break;
    case 2:
      memory = memory2;
      break;
    // code block
  }
  const bytes = new Uint8Array(memory.buffer, offset, length);
  const string = new TextDecoder("utf8").decode(bytes);
  log(string); // implementation not shown - could call console.log()
}

const importObject = {
  console: { log: consoleLogString },
  js: { mem0: memory0, mem1: memory1 },
};

WebAssembly.instantiateStreaming(fetch("multi-memory.wasm"), importObject).then(
  (obj) => {
    // Get exported memory
    memory2 = obj.instance.exports.memory2;
    // Log memory
    obj.instance.exports.logAllMemory();
  },
);
```

この例の出力は、テキストデコーダーに渡されるバイト数が文字列のエンコードに使用されるバイト数よりも多いため、 "Memory 1 data" の後に "rubbish characters" が残る点を除いて、下記と類似しているはずです。

```plain
Memory 0 data (Default)
Memory 1 data
Memory 2 data
```

完全なソースは GitHub で [multi-memory.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/multi-memory.html) としてあります（[ライブ実行も](https://mdn.github.io/webassembly-examples/understanding-text-format/multi-memory.html)）。

> [!NOTE]
> この機能のブラウザーの互換性情報については、ホームページの [`webassembly.multiMemory` in the home page](/ja/docs/WebAssembly#webassembly.multimemory) をご覧ください。

### WebAssembly テーブル

WebAssembly テキスト形式のツアーを終了するために、 WebAssembly で最も複雑でしばしば混乱する部分 (**テーブル**) を見てみましょう。テーブルは基本的に WebAssembly コードからインデックスでアクセスできるリサイズ可能な参照の配列です。

なぜテーブルが必要なのかを見るために、最初に観察する必要があります。さきほど見た `call` 命令 ([同じモジュールの他の関数から関数を呼び出す](#同じモジュールの他の関数から関数を呼び出す) を参照) は静的な関数インデックスをとり、結果として 1 つの関数しか呼び出せません。しかし、呼び出し先がランタイム値の場合はどうなるでしょうか。

- JavaScript ではこれは常に見えます。関数は第一級の値です。
- C/C++ では関数ポインターで見ることができます。
- C++ では仮想関数で見ることができます。

WebAssembly にはこれを実現するための一種の呼び出し命令が必要だったため、動的な関数をオペランドに受け取る `call_indirect` を与えました。問題は WebAssembly ではオペランドに指定できる型が (現在) `i32`/`i64`/`f32`/`f64` だけであることです。

WebAssembly は `anyfunc` 型 (任意のシグニチャの関数を保持できるため "any") を追加することができましたが、あいにくセキュリティ上の理由から `anyfunc` 型は線形メモリーに格納できませんでした。線形メモリーは格納された値の生の内容をバイト列として公開し、これによって Wasm コンテンツが生の関数ポインターを自由に観察できて破損させることができてしまいます。これはウェブ上では許可できません。

解決方法は関数参照をテーブルに格納し、代わりにテーブルのインデックスを渡すことでした。これは単なる i32 値です。`call_indirect` のオペランドは単純に i32 のインデックス値にすることができます。

#### Wasm でテーブルを定義する

どのようにしてテーブルに Wasm 関数を配置するのでしょうか。 `data` セクションを使用して線形メモリーの領域をバイト列で初期化するのと同じように、`elem` セクションを使用してテーブルの領域を関数の列で初期化することが出来ます:

```wat
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

- 関数 (`func`) セクションは他の宣言された Wasm 関数と同様です。これらはテーブルで参照する関数です (上の例ではそれぞれは定数を返すだけです) 。セクションが宣言された順序は重要ではないことに注意してください。関数はどこででも宣言できて `elem` セクションから参照することができます。
- `elem` セクションはモジュール内の関数のサブセットをリスト化することができます (任意の順で並べることができ、重複を許容します) 。これは参照された順序でテーブルに参照される関数のリストです。
- `elem` セクション内の `(i32.const 0)` 値はオフセットです。これはセクションの先頭で宣言する必要があります。これはテーブルに関数参照を追加するインデックスの開始位置を指定します。ここでは 0 と テーブルのサイズとして 2 (上記参照) を指定していますので、2つの参照はインデックスが 0 と 1 の部分に書き込まれます。もしオフセットを 1 にして書き込みたければ、 `(i32.const 1)` と記述してテーブルのサイズを 3 にする必要があります。

> [!NOTE]
> 初期化されていない要素はデフォルトの throw-on-call 値が与えられます。

JavaScript で同じようなテーブルのインスタンスを作成する場合、次のようになります。

```js
function module() {
  // table section
  const tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });

  // function sections:
  const f1 = () => 42; /* some imported WebAssembly function */
  const f2 = () => 13; /* some imported WebAssembly function */

  // elem section
  tbl.set(0, f1);
  tbl.set(1, f2);
}
```

#### テーブルを使用する

先に進みましょう。いま、何らかの形で使用するために必要なテーブルを定義しました。このコードのセクションで使ってみましょう。

```wat
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

```wat
(call_indirect (type $return_i32) (local.get $i))
```

より高級な、JavaScript のような表現力の高い言語では、関数を含む配列 (あるいはオブジェクトかもしれません) で同じことができることが想像できますよね。擬似コードだとこれは `tbl[i]()` のようになります。

型チェックの話に戻ります。WebAssembly は型チェックされていて、 `funcref` は「任意の関数シグネチャ」を意味するので、呼び出し先の (推定される) シグネチャを指定する必要があります。そのため、 `$return_i32` 型を指定することで、プログラムに関数が `i32` を返すはずだと知らせます。もし呼び出し先のシグネチャが一致しない (代わりに `f32` が返されるような) 場合は [`WebAssembly.RuntimeError`](/ja/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) 例外が発生します。

さて、呼び出しを行うときにどのようにテーブルに `call_indirect` をリンクさせているのでしょうか? 答えは、現在モジュールインスタンスごとに1つのテーブルしか許容されないため、`call_indirect` はそれを暗黙的に呼び出します。将来的に複数のテーブルを持てるようになったとき、以下の行のように、何らかのテーブル識別子を指定する必要があるでしょう。

```wat
call_indirect $my_spicy_table (type $i32_to_void)
```

完全なモジュールは次のようになります。例は [wasm-table.wat](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.wat) を参照してください:

```wat
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
WebAssembly.instantiateStreaming(fetch("wasm-table.wasm")).then((obj) => {
  console.log(obj.instance.exports.callByIndex(0)); // returns 42
  console.log(obj.instance.exports.callByIndex(1)); // returns 13
  console.log(obj.instance.exports.callByIndex(2)); // returns an error, because there is no index position 2 in the table
});
```

> [!NOTE]
> 例は GitHub の [wasm-table.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/wasm-table.html) ([動作例](https://mdn.github.io/webassembly-examples/understanding-text-format/wasm-table.html)) を参照してください。

> [!NOTE]
> Memory と同じように Table も JavaScript から作成すること（[`WebAssembly.Table()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Table) を参照）、別の Wasm モジュール間でインポートすることができます。

### テーブルの変更と動的リンク

JavaScript は関数参照にフルアクセスできるため、 Table オブジェクトは JavaScript から [`grow()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Table/grow), [`get()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Table/get), [`set()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Table/set) メソッドを使用して変更することができます。また、 WebAssembly のコード自体も、[参照型](#参照型)の一部として追加された `table.get` や `table.set` などの命令を使ってテーブルを操作することが可能です。

テーブルは変更可能であるため、高度な読み込み時および実行時の[動的リンクスキーム](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md)の実装に使用することができます。プログラムが動的にリンクされたとき、複数のインスタンスで同じメモリーとテーブルを共有することができます。これは複数のコンパイル済み `.dll` が単一のプロセスのアドレス空間を共有するネイティブアプリケーションと対称的です。

この動作を確認するために、Memory オブジェクトと Table オブジェクトを含む単一のインポートオブジェクトを作成し、同じインポートオブジェクトを複数の [`instantiate()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) の呼び出しで渡してみましょう。

`.wat` ファイルの例は次のようになります。

`shared0.wat`:

```wat
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

```wat
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

1. 関数 `shared0func` は `shared0.wat` で定義され、インポートされたテーブルに格納されます。
2. この関数は定数値 `0` を作成して、次に `i32.load` コマンドを使用して指定したメモリーのインデックスから値をロードします。そのインデックスは `0` になります 。先と同様に、前の値をスタックから暗黙的にポップします。つまり、`shared0func` はメモリーのインデックス `0` の位置に格納された値をロードして返します。
3. `shared1.wat` では、 `doIt` という関数をエクスポートします。この関数は2つの定数値 `0` と `42` を作成して `i32.store` を呼び出して、インポートされたメモリーの指定したインデックスに指定した値を格納します。ここでも、これらの値はスタックから暗黙的にポップされます。したがって、結果的にメモリーのインデックスが `0` の位置に、値として `42` が格納されます。
4. 関数の最後では、定数値 `0` を作成し、テーブルのインデックスが 0 の位置にある関数を呼び出します。これは `shared0func` で、先に `shared0.wat` の `elem` ブロックで格納されたものです。
5. 呼び出されたとき、`shared0func` は `shared1.wat` 内で `i32.store` コマンドを使用してメモリーに格納された 42 をロードします。

> [!NOTE]
> 上の式はスタックから値を暗黙的にポップしますが、代わりにコマンド呼び出しの中で明示的に宣言することができます。
>
> ```wat
> (i32.store (i32.const 0) (i32.const 42))
> (call_indirect (type $void_to_i32) (i32.const 0))
> ```

アセンブリーに変換した後、次のコードで JavaScript 内で `shared0.wasm` と `shared1.wasm` を使用します:

```js
const importObj = {
  js: {
    memory: new WebAssembly.Memory({ initial: 1 }),
    table: new WebAssembly.Table({ initial: 1, element: "anyfunc" }),
  },
};

Promise.all([
  WebAssembly.instantiateStreaming(fetch("shared0.wasm"), importObj),
  WebAssembly.instantiateStreaming(fetch("shared1.wasm"), importObj),
]).then((results) => {
  console.log(results[1].instance.exports.doIt()); // prints 42
});
```

コンパイルされた各モジュールは同じメモリーとテーブルオブジェクトをインポートし、その結果同じ線形メモリーとテーブルの「アドレス空間」を共有することができます。

> [!NOTE]
> 例は GitHub の [shared-address-space.html](https://github.com/mdn/webassembly-examples/blob/main/understanding-text-format/shared-address-space.html) ([動作例](https://mdn.github.io/webassembly-examples/understanding-text-format/shared-address-space.html)) を参照してください。

## 大規模メモリー操作

大規模メモリー操作は、言語へ新しく追加されたものです（例えば [Firefox 79](/ja/docs/Mozilla/Firefox/Releases/79)）。コピーや初期化などのバルクメモリー操作のために 7 つの新しい組み込み操作が提供されており、 WebAssembly が `memcpy` や `memmove` などのネイティブ関数を、より効率的でパフォーマンスの高い方法でモデル化できるようにします。

> [!NOTE]
> ブラウザーの互換性情報は、[ホームページの `webassembly.bulk-memory-operations`](/ja/docs/WebAssembly#webassembly.bulk-memory-operations) を参照してください。

新しい操作は次の通りです。

- `data.drop`: データセグメント内のデータを無効にします。
- `elem.drop`: 要素セグメント内のデータを無効にします。
- `memory.copy`: 線形メモリーの一範囲を他へコピーします。
- `memory.fill`: 線形メモリーの一範囲を指定した値で埋めます。
- `memory.init`: データセグメントから範囲をコピーします。
- `table.copy`: テーブルの一範囲から他へコピーします。
- `table.init`: 要素セグメントから範囲をコピーします。

> [!NOTE]
> 詳しい情報は [Bulk Memory Operations and Conditional Segment Initialization](https://github.com/WebAssembly/bulk-memory-operations/blob/main/proposals/bulk-memory-operations/Overview.md) の提案にあります。

## 型

### 数値型

WebAssembly では、現在 4 種類の数値型があります。

- `i32`: 32 ビット整数
- `i64`: 64 ビット整数
- `f32`: 32 ビット浮動小数点数
- `f64`: 64 ビット浮動小数点数

### ベクトル型

- `v128`: 128 ビットのパックされた整数、浮動小数点数データ、または単一の 128 ビット型です。

### 参照型

[参照型の提案](https://github.com/WebAssembly/reference-types/blob/main/proposals/reference-types/Overview.md)では、主に 2 つのことを提供しています。

- 新しい型である `externref` は、文字列、DOM 参照、オブジェクトなど、あらゆる JavaScript の値を保持することができます。 WebAssembly の観点からは `externref` は不透明です。Wasm モジュールはこれらの値にアクセスして操作することができず、代わりに値を受け取って送り返すことだけができます。しかし、これは Wasm モジュールが JavaScript の関数や DOM API などを呼び出したり、ホスト環境との相互運用を容易にするために非常に有用です。`externref` は値型とテーブル要素に使用することができます。
- JavaScript API 経由ではなく、Wasm モジュールが直接 [WebAssembly テーブル](#webassembly_テーブル)を操作できるようにするための新しい命令がいくつか追加されました。

> [!NOTE]
> [wasm-bindgen](https://rustwasm.github.io/docs/wasm-bindgen/) のドキュメントには、 `externref` を Rust で利用する方法について、いくつかの有用な情報が含まれています。

> [!NOTE]
> ブラウザーの互換性情報については、[ホームページの `webassembly.reference-types`](/ja/docs/WebAssembly#webassembly.reference-types) を参照してください。

## WebAssembly の複数値

もっと最近になって言語に追加されたものが WebAssembly 複数値です。これは、WebAssembly 関数が複数の値を返すことができるようになり、一連の命令が複数のスタック値を消費して生成することができるようになったことを意味します。

> [!NOTE]
> ブラウザーの互換性情報については、[ホームページの `webassembly.multi-value`](/ja/docs/WebAssembly#webassembly.multi-value) を参照してください。

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

WebAssembly スレッドは、 WebAssembly Memory オブジェクトを別なウェブワーカー内で動作している複数の WebAssembly インスタンスで共有できるものであり、 JavaScript の [`SharedArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) と似たような形のものです。これにより、ワーカー間の非常に高速な通信が可能になり、ウェブアプリケーションのパフォーマンスが大幅に向上します。

スレッドの提案は、共有メモリーと不可分メモリーアクセスの 2 つの部分からなります。

> [!NOTE]
> ブラウザーの互換性情報については、[ホームページの `webassembly.threads-and-atomics`](/ja/docs/WebAssembly#webassembly.threads-and-atomics) を参照してください。

### 共有メモリー

上記のように、共有の WebAssembly [`Memory`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory) オブジェクトを作成することが可能です。これは、 [`postMessage()`](/ja/docs/Web/API/Window/postMessage) を使用してウィンドウとワーカーのコンテキスト間で、 [`SharedArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) と同じ方法で転送されるものです。

JavaScript API 側では、[`WebAssembly.Memory()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory) コンストラクタの初期化オブジェクトに `shared` プロパティを追加し、 `true` に設定すると共有メモリーを作成するようになりました。

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

メモリーの [`buffer`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) プロパティは `SharedArrayBuffer` を返すようになり、普通の `ArrayBuffer` ではなくなりました。

```js
memory.buffer; // returns SharedArrayBuffer
```

テキスト形式の上では、 `shared` キーワードを使って、次のように共有メモリーを作成することができます。

```wat
(memory 1 2 shared)
```

共有されていないメモリーと異なり、共有メモリーは JavaScript API のコンストラクターと Wasm のテキスト形式の両方で「最大」サイズを指定する必要があります。

> [!NOTE]
> 詳しくは、 [WebAssembly のスレッド提案](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md)にたくさん載っています。

### 不可分メモリーアクセス

ミューテックスや条件変数など、より高度な機能を実装するために使用できる新しい Wasm 命令が多数追加されました。[ここにリストアップされています](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#atomic-memory-accesses)。これらの命令は、 Firefox 80 の時点で共有でないメモリー上で許可されています。

> [!NOTE]
> [Emscripten Pthreads support page](https://emscripten.org/docs/porting/pthreads.html) で、 Emscripten の新機能を利用する方法を紹介しています。

## まとめ

これで、WebAssembly テキスト形式の主要コンポーネントとそれらが WebAssembly JS API にどのように反映されるのかの高レベルなツアーが完了しました。

## 関連情報

- この記事に含まれなかった主なものは、関数本体で現れるすべての命令の包括的なリストです。各命令の処理は [WebAssembly のセマンティックス](http://webassembly.org/docs/semantics) を参照してください。
- スペックインタプリターによって実装された[テキスト形式の文法](https://github.com/WebAssembly/spec/blob/main/interpreter/README.md#s-expression-syntax)も参照してください。
