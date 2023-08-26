---
title: WebAssembly テキスト形式から Wasm への変換
slug: WebAssembly/Text_format_to_Wasm
l10n:
  sourceCommit: 0cfdd279edb09f70fbeb52c67ecc2876da5ce32d
---

{{WebAssemblySidebar}}

WebAssembly には S 式ベースのテキスト表現があります。これはテキストエディター、ブラウザーの開発者ツールなどで見せるために設計された中間表現です。この記事では、これがどのように動作するか、テキスト形式のファイルを Wasm 形式に変換するのに利用可能なツールの使用方法について少し説明します。

> **メモ:** テキスト形式のファイルは、通常 `.wat` という拡張子で保存されます。過去には `.wast` という拡張子も使用されていましたが、現在は WebAssembly テストスイートで使用されるスクリプト言語のために使用されています。

## 初めてのテキスト形式

簡単な例を見てみましょう。次のプログラムは `imported_func` という名前の関数を `imports` というモジュールからインポートし、 `exported_func` という名前の関数をエクスポートしています。

```wasm
(module
  (func $i (import "imports" "imported_func") (param i32))
  (func (export "exported_func")
    i32.const 42
    call $i
  )
)
```

WebAssembly 関数 `exported_func` は私たちの環境（WebAssembly モジュールを使用しているウェブアプリなど）で使用するためにエクスポートされます。この関数が呼び出されたとき、インポートされた JavaScript 関数 `imported_func` の引数として値 (42) を渡して実行されます。

## テキストの .wat ファイルからバイナリーの .wasm ファイルへの変換

上の `.wat` テキスト表現の例を `.wasm` アセンブリー形式に変換してみましょう。

1. はじめに、上のコードをテキストファイルにコピーして `simple.wat` という名前のファイルを作成してください。
2. このテキスト表現をブラウザーが実際に読み込んで利用可能なアセンブリー言語にアセンブルする必要があります。このために wabt ツールを使用することができます。これは WebAssembly のテキスト表現から Wasm 変換する、または逆に変換するコンパイラー（加えてもう少し別のツール）が含まれます。<https://github.com/webassembly/wabt> に行って、そのページの説明に従ってツールの設定をしてください。
3. ツールをビルドしたら、 `/wabt/out/clang/Debug` ディレクトリーをシステムの `PATH` に追加します。
4. 次に、wat2wasm プログラムを実行します。入力ファイルパス、続いて `-o` 引数と、その後に出力ファイルパスを指定します。

   ```bash
   wat2wasm simple.wat -o simple.wasm
   ```

これで `simple.wasm` という名前のファイルに Wasm が出力されます。これには `.wasm` アセンブリーのコードが含まれます。

> **メモ:** wasm2wat を使用して wasm から テキスト表現に戻すことができます。例: `wasm2wat simple.wasm -o text.wat`.

## アセンブリーの出力を見る

出力されたファイルはアセンブリーベースなので通常のテキストエディターで表示することができません。ただし、wat2wasm ツールの `-v` オプションを使用して見ることができます。以下を試してみてください。

```bash
wat2wasm simple.wat -v
```

ターミナルには次のように出力されるでしょう。

![複数のバイナリー文字列の横に文字列の説明を表示しています。例：0000008: 01 ; セクションコード ](assembly-output.png)

## 関連情報

- [WebAssembly テキスト形式を理解する](/ja/docs/WebAssembly/Understanding_the_text_format) — テキスト形式のシンタックスの詳細説明。
- [C/C++ から WebAssembly にコンパイルする](/ja/docs/WebAssembly/C_to_Wasm) — Binaryen/Emscripten のようなツールはソースコードを Wasm にコンパイルし、 JavaScript のコンテキストでモジュールを実行するために必要な API コードを作成します。それらの使用方法の詳細はこちらから探してください。
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API) — WebAssembly API コードがどのように機能するかについて詳しく知りたい場合はこちらをお読みください。
- [Text format](https://webassembly.github.io/spec/core/text/index.html) — WebAssembly GitHub リポジトリーのテキスト形式の詳細説明。
- [wast-loader](https://github.com/xtuc/webassemblyjs/tree/master/packages/wast-loader) — これをすべて処理してくれる webpack のローダーです。
