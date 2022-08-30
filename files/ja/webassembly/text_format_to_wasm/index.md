---
title: WebAssembly テキストフォーマットから wasm に変換する
slug: WebAssembly/Text_format_to_wasm
---
{{WebAssemblySidebar}}

WebAssembly には S 式ベースのテキスト表現があります。これはテキストエディタ、ブラウザの開発者ツールなどで見せるために設計された中間表現です。この記事では、これがどのように動作するか、テキスト形式のファイルを `.wasm` アセンブリ形式に変換するのに利用可能なツールの使用方法について少し説明します。

> **Note:** テキスト形式のファイルは通常 `.wat` という拡張子で保存されます。場合によっては `.wast` も使われます。これはアサーションなどの変換時に .wasm に含まれない特別なテストコマンドを含むファイルを指します。

## はじめてのテキストフォーマット

簡単な例を見てみましょう。次のプログラムは `imports` というモジュールから `imported_func` という名前の関数をインポートし、`exported_func` という名前の関数をエクスポートしています:

```wasm
(module
  (func $i (import "imports" "imported_func") (param i32))
  (func (export "exported_func")
    i32.const 42
    call $i
  )
)
```

WebAssembly 関数 `exported_func` は私達の環境 (WebAssembly モジュールを使用しているウェブアプリケーションなど) で使用するためにエクスポートされます。この関数が呼び出されたとき、インポートされた JavaScript 関数 `imported_func` パラメータとして値 (42) を渡して実行されます。

## テキストの .wat ファイルからバイナリの .wasm ファイルに変換する

上の `.wat` テキスト表現の例を `.wasm` アセンブリ形式に変換してみましょう。

1. はじめに、上のコードをテキストファイルにコピーして `simple.wat` という名前のファイルを作成します。
2. このテキスト表現をブラウザが実際に読み込んで利用可能なアセンブリ言語にアセンブルする必要があります。 このために wabt ツールを使用することができます。これは WebAssembly のテキスト表現から wasm 変換する、または逆に変換するコンパイラ(加えてもう少し別のツール)が含まれます。<https://github.com/webassembly/wabt> に行って、そのページの説明に従ってツールの設定をします。
3. ツールをビルドしたら、システム `PATH` に `/wabt/out` ディレクトリを追加します。
4. 次に、wast2wasm プログラムを実行します。入力ファイルパス、続いて `-o` パラメータ、出力ファイルパスを指定します:

    ```bash
    wat2wasm simple.wat -o simple.wasm
    ```

これで `simple.wasm` という名前のファイルに wasm が出力されます。これには `.wasm` アセンブリのコードが含まれます。

> **Note:** wasm2wat を使用して wasm から テキスト表現に戻すことができます。例: `wasm2wat simple.wasm -o text.wat`.

## アセンブリの出力を見る

出力されたファイルはアセンブリベースなので通常のテキストエディタで表示することができません。ただし、wat2wasm ツールの `-v` オプションを使用して見ることができます。以下を試してみてください:

```bash
wat2wasm simple.wat -v
```

ターミナルには次のように出力されるでしょう:

![several strings of binary with textual descriptions beside them. For example: 0000008: 01 ; section code ](/en-US/docs/WebAssembly/Text_format_to_wasm/assembly-output.png)

## 関連情報

- [WebAssembly テキストフォーマットを理解する](/ja/docs/WebAssembly/Understanding_the_text_format) — テキスト形式のシンタックスの詳細説明。
- [C/C++ から WebAssembly にコンパイルする](/ja/docs/WebAssembly/C_to_wasm) — Binaryen/Emscripten のようなツールはソースコードを wasm にコンパイルし、JavaScript のコンテキストでモジュールを実行するために必要な API コードを作成します。それらの使用方法の詳細はこちらから探してください。
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API) — WebAssembly API コードがどのように機能するかについて詳しく知りたい場合はこちらをお読みください。
- [Text format](https://webassembly.github.io/spec/core/text/index.html) — WebAssembly GitHub レポジトリのテキスト形式の詳細説明。
- [wast-loader](https://github.com/xtuc/webassemblyjs/tree/master/packages/wast-loader) — あなたのためにこれをすべて処理する WebPack のローダーです。
