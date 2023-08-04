---
title: C/C++ から WebAssembly へのコンパイル
slug: WebAssembly/C_to_Wasm
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{WebAssemblySidebar}}

C / C ++のような言語でコードを書いたら、[Emscripten](https://emscripten.org/) のようなツールを使って WebAssembly にコンパイルすることができます。 どのように動作するかを見てみましょう。

## Emscripten の環境設定

まず、必要な開発環境をセットアップしましょう。

### 準備

Emscripten SDK を取得します。以下の指示に従ってください。<https://emscripten.org/docs/getting_started/downloads.html>

## サンプルコードをコンパイルする

環境を設定した後は、C のサンプルコードを Wasm にコンパイルする方法を見てみましょう。 Emscripten でコンパイルするときにはいくつかのオプションがありますが、この記事でカバーする主な 2 つのシナリオは次のとおりです。

- Wasm にコンパイルし、コードを実行するための HTML とウェブ環境上で Wasm を実行するための全ての JavaScript グルーコードを生成する。
- Wasm にコンパイルと JavaScript の生成だけ行う。

2 つについて見てみましょう。

### HTML と JavaScript を生成する

最も簡単なケースを見てみましょう。コードを WebAssembly としてブラウザーで実行するための全てを Emscripten で生成するようにします。

1. まずはコンパイルするためのサンプルコードを用意します。以下の C のサンプルコードをコピーして `hello.c` としてローカルドライブの新しいディレクトリーに保存してください。

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. Emscripten コンパイラー環境を導入したターミナルウィンドウを使用して、`hello.c` ファイルと同じディレクトリーに移動し、次のコマンドを実行します。

   ```bash
   emcc hello.c -o hello.html
   ```

このコマンドで渡されたオプションは次のとおりです。

- `-o hello.html` — コードを実行するための HTML ページを指定します。Wasm モジュールとそれをウェブ環境で使用できるようにコンパイル、インスタンス化するための JavaScript 「グルー」コードも出力に含まれます。

この時点でソースディレクトリーに以下のファイルが出力されているはずです。

- バイナリーの Wasm モジュールコード (`hello.wasm`)
- ネイティブの C の関数と JavaScript/Wasm の間で変換を行う JavaScript ファイル (`hello.js`)
- Wasm コードを読み込み、コンパイルし、インスタンス化し、ブラウザーに出力するための HTML ファイル (`hello.html`)

### サンプルコードの実行

WebAssembly に対応しているブラウザーで `hello.html` を読み込むだけです。既定で有効なのは Firefox 52, Chrome 57, Opera 44 以降です。

> **メモ:** 生成された HTML ファイル (`hello.html`) をローカルのハードドライブから直接開こうとすると（例: `file://your_path/hello.html`）、 \_`both async and sync fetching of the wasm failed` という複数行のエラーメッセージが表示されます。 HTML ファイルを HTTP サーバー (`http://`) で実行する必要があります。詳しくは [ローカルのテストサーバーを設定するには](/ja/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server) を参照してください。

全てが計画通りに機能していれば、ウェブページ上の Emscripten コンソールに "Hello world" の出力が表示されるはずです。おめでとうございます、ようやく C を WebAssembly にコンパイルしてブラウザーで実行することができました。
![image](helloworld.png)

### カスタム HTML テンプレートを使う

場合によっては、カスタム HTML テンプレートを使用することもできます。 どうやってできるかを見てみましょう。

1. まず、次の C のコードを `hello2.c` として新しいディレクトリーに保存します。

   ```cpp
   #include <stdio.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }
   ```

2. `shell_minimal.html` を emsdk リポジトリーから探します。先ほど作成した新しいディレクトリーに `html_template` というサブディレクトリーを作って、そこにコピーします。
3. 新しいディレクトリーに移動して（Emscripten コンパイラー環境があるターミナルウィンドウで）、次のコマンドを実行します。

   ```bash
   emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html
   ```

   今回渡したオプションは少しだけ異なります。

   - `-o hello2.html` と指定したことで、今回コンパイラーは JavaScript グルーコードと `.html` を出力します。
   - `-O3` はコードを最適化するために使用されます。 Emcc には他の C コンパイラと同様に、最適化レベルとして `-O0`（最適化しない）、`-O1`、`-O2`、`-Os`、`-Oz`、`-Og`、`-O3` があります。 `-O3` は、リリースビルドに適した設定です。
   - さらに `--shell-file html_template/shell_minimal.html` と指定しました — これは例を実行する HTML を生成するための、HTML テンプレートパスです。

4. この例を実行してみましょう。上記のコマンドで hello2.html が生成されます。これは生成された Wasm コードに対してロード、実行などを行うグルーコードを含むテンプレートと同じ内容を持ちます。ブラウザーを開いて最後の例と同じ出力であることを確認してください。

> **メモ:** HTML ファイルの代わりに .js ファイルを `-o` フラグで指定することで、完全な HTML ではなく、 JavaScript の「グルー」ファイル*だけ*を出力するように指定することができます。例えば `emcc -o hello2.js hello2.c -O3` とします。そうすると、完全にスクラッチでカスタム HTML を作成することができますが、これは高度なアプローチであり、通常は提供されている HTML テンプレートを使用する方が簡単です。
>
> Emscripten は、メモリー割り当て、メモリーリーク、その他多くの問題を処理するために、多種多様な JavaScript の「グルー」コードを必要とします。

### C で定義されたカスタム関数を呼び出す

C で定義された関数があって、それを JavaScript から呼び出したい場合、 Emscripten の `ccall()` 関数と `EMSCRIPTEN_KEEPALIVE` 宣言（対象の関数をエクスポートする関数リストに加えるものです（[Why do functions in my C/C++ source code vanish when I compile to JavaScript, and/or I get No functions to process?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process) を参照））を使用します。これがどのように動作するか見てみましょう。

1. はじめに、次のコードを `hello3.c` として新しいディレクトリーに保存します。

   ```cpp
   #include <stdio.h>
   #include <emscripten/emscripten.h>

   int main() {
       printf("Hello World\n");
       return 0;
   }

   #ifdef __cplusplus
   #define EXTERN extern "C"
   #else
   #define EXTERN
   #endif

   EXTERN EMSCRIPTEN_KEEPALIVE void myFunction(int argc, char ** argv) {
       printf("MyFunction Called\n");
   }
   ```

   既定では、 Emscripten が生成したコードは常に `main()` を呼び出し、他のデッドコードは削除されます。関数名の前に `EMSCRIPTEN_KEEPALIVE` を置くことによって、これが起こらなくなります。また、`EMSCRIPTEN_KEEPALIVE` を使用するために `emscripten.h` をインポートする必要があります。

   > **メモ:** `#ifdef` ブロックを加えたことによって、C++ のコードからこの例をインクルードしようとしても動作するでしょう。 C と C++ の間でのマングリング規則によって、他の場合では壊れることもありますが、ここでは C++ を使用している場合に、外部の C の関数として扱うように設定しています。

2. 便宜上、この新しいディレクトリーに `html_template/shell_minimal.html` （もちろん、このファイルはあなたの実際の開発環境に置きます）を加えます。
3. さて、再びコンパイル手順を実行しましょう。最新のディレクトリーの中（そして、Emscripten コンパイラー環境の入っているターミナルウィンドウの中）で、次のようにして C のコードをコンパイルします。`NO_EXIT_RUNTIME` オプションを付与してコンパイルする必要があることに注意してください。そうしないと、`main()` 関数が存在した場合、ランタイムがシャットダウンされ、コンパイルされたコードが正しく呼び出されません。これは適切に C をエミュレーションするのに、例えば [`atexit()`](https://en.cppreference.com/w/c/program/atexit) 関数を呼び出せるようにするために必要です。

   ```bash
   emcc -o hello3.html hello3.c --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXPORTED_RUNTIME_METHODS=['ccall']"
   ```

4. 例をブラウザーで読み込んだら、前と同じものが見られるでしょう。
5. JavaScript から新しい `myFunction()` 関数を呼び出す必要があります。まずは、 hello3.html ファイルをテキストエディターで開いてください。
6. 以下のような {{HTMLElement("button")}} を最初の `<script type='text/javascript'>` タグの上に加えましょう。

   ```html
   <button id="mybutton">Run myFunction</button>
   ```

7. そして、 {{HTMLElement("script")}} 要素内の最後に次のコードを追加します。

   ```js
   document.getElementById("mybutton").addEventListener("click", () => {
     alert("check console");
     const result = Module.ccall(
       "myFunction", // name of C function
       null, // return type
       null, // argument types
       null, // arguments
     );
   });
   ```

これはエクスポートされた関数をどのようにして `ccall()` を使用して呼び出すかを示しています。

## 関連情報

- [emscripten.org](https://emscripten.org/) — Emscripten とそれの多種多様なオプションについての詳細を確認してください。
- [Calling compiled C functions from JavaScript using ccall/cwrap](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Why do functions in my C/C++ source code vanish when I compile to JavaScript, and/or I get No functions to process?](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [WebAssembly on Mozilla Research](https://research.mozilla.org/)
- [既存の C モジュールから WebAssembly へのコンパイル](/ja/docs/WebAssembly/existing_C_to_Wasm)
