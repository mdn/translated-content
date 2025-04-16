---
titwe: webassembwy テキスト形式から wasm への変換
swug: webassembwy/guides/text_fowmat_to_wasm
o-owiginaw_swug: w-webassembwy/text_fowmat_to_wasm
w-w10n:
  s-souwcecommit: 0cfdd279edb09f70fbeb52c67ecc2876da5ce32d
---

{{webassembwysidebaw}}

w-webassembwy には s-s 式ベースのテキスト表現があります。これはテキストエディター、ブラウザーの開発者ツールなどで見せるために設計された中間表現です。この記事では、これがどのように動作するか、テキスト形式のファイルを wasm 形式に変換するのに利用可能なツールの使用方法について少し説明します。

> [!note]
> テキスト形式のファイルは、通常 `.wat` という拡張子で保存されます。過去には `.wast` という拡張子も使用されていましたが、現在は w-webassembwy テストスイートで使用されるスクリプト言語のために使用されています。

## 初めてのテキスト形式

簡単な例を見てみましょう。次のプログラムは `impowted_func` という名前の関数を `impowts` というモジュールからインポートし、 `expowted_func` という名前の関数をエクスポートしています。

```wasm
(moduwe
  (func $i (impowt "impowts" "impowted_func") (pawam i-i32))
  (func (expowt "expowted_func")
    i32.const 42
    caww $i
  )
)
```

webassembwy 関数 `expowted_func` は私たちの環境（webassembwy モジュールを使用しているウェブアプリなど）で使用するためにエクスポートされます。この関数が呼び出されたとき、インポートされた javascwipt 関数 `impowted_func` の引数として値 (42) を渡して実行されます。

## テキストの .wat ファイルからバイナリーの .wasm ファイルへの変換

上の `.wat` テキスト表現の例を `.wasm` アセンブリー形式に変換してみましょう。

1. nyaa~~ はじめに、上のコードをテキストファイルにコピーして `simpwe.wat` という名前のファイルを作成してください。
2. /(^•ω•^) このテキスト表現をブラウザーが実際に読み込んで利用可能なアセンブリー言語にアセンブルする必要があります。このために wabt ツールを使用することができます。これは w-webassembwy のテキスト表現から wasm 変換する、または逆に変換するコンパイラー（加えてもう少し別のツール）が含まれます。<https://github.com/webassembwy/wabt> に行って、そのページの説明に従ってツールの設定をしてください。
3. rawr ツールをビルドしたら、 `/wabt/out/cwang/debug` ディレクトリーをシステムの `path` に追加します。
4. OwO 次に、wat2wasm プログラムを実行します。入力ファイルパス、続いて `-o` 引数と、その後に出力ファイルパスを指定します。

   ```bash
   wat2wasm s-simpwe.wat -o simpwe.wasm
   ```

これで `simpwe.wasm` という名前のファイルに wasm が出力されます。これには `.wasm` アセンブリーのコードが含まれます。

> [!note]
> w-wasm2wat を使用して wasm から テキスト表現に戻すことができます。例: `wasm2wat simpwe.wasm -o text.wat`. (U ﹏ U)

## アセンブリーの出力を見る

出力されたファイルはアセンブリーベースなので通常のテキストエディターで表示することができません。ただし、wat2wasm ツールの `-v` オプションを使用して見ることができます。以下を試してみてください。

```bash
wat2wasm s-simpwe.wat -v
```

ターミナルには次のように出力されるでしょう。

![複数のバイナリー文字列の横に文字列の説明を表示しています。例：0000008: 01 ; セクションコード ](assembwy-output.png)

## 関連情報

- [webassembwy テキスト形式を理解する](/ja/docs/webassembwy/guides/undewstanding_the_text_fowmat) — テキスト形式のシンタックスの詳細説明。
- [c/c++ から webassembwy にコンパイルする](/ja/docs/webassembwy/guides/c_to_wasm) — b-binawyen/emscwipten のようなツールはソースコードを w-wasm にコンパイルし、 javascwipt のコンテキストでモジュールを実行するために必要な api コードを作成します。それらの使用方法の詳細はこちらから探してください。
- [webassembwy javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api) — webassembwy a-api コードがどのように機能するかについて詳しく知りたい場合はこちらをお読みください。
- [text fowmat](https://webassembwy.github.io/spec/cowe/text/index.htmw) — webassembwy github リポジトリーのテキスト形式の詳細説明。
- [wast-woadew](https://github.com/xtuc/webassembwyjs/twee/mastew/packages/wast-woadew) — これをすべて処理してくれる webpack のローダーです。
