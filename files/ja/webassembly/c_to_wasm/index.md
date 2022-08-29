---
title: C/C++からWebAssemblyにコンパイルする
slug: WebAssembly/C_to_wasm
---
{{WebAssemblySidebar}}

C / C ++のような言語でコードを書いたら、[Emscripten](/ja/docs/Mozilla/Projects/Emscripten) のようなツールを使って WebAssembly にコンパイルすることができます。 どのように動作するかを見てみましょう。

## Emscripten の環境設定

まず、必要な開発環境をセットアップしましょう。

### 準備

Emscripten SDK を取得します。以下の指示にしたがってください。<https://emscripten.org/docs/getting_started/downloads.html>

## サンプルコードをコンパイルする

環境を設定した後は、C のサンプルコードを Emscripten にコンパイルする方法を見てみましょう。 Emscripten でコンパイルするときにはいくつかのオプションがありますが、この記事でカバーする主な 2 つのシナリオは次のとおりです:

- wasm にコンパイルし、コードを実行するための HTML とウェブ環境上で wasm を実行するための全ての JavaScript グルーコードを生成する。
- wasm にコンパイルと JavaScript の生成だけ行う。

2 つについて見てみましょう。

### HTML と JavaScript を生成する

最も簡単なケースを見てみましょう。コードを WebAssembly としてブラウザで実行するための全てを Emscripten で生成するようにします。

1. まずはコンパイルするためのサンプルコードを用意します。以下の C のサンプルコードをコピーして `hello.c` としてローカルドライブの新しいディレクトリに保存してください:

    ```cpp
    #include <stdio.h>

    int main(int argc, char ** argv) {
      printf("Hello World\n");
    }
    ```

2. Emscripten コンパイラ環境を導入したターミナルウィンドウを使用して、`hello.c` ファイルと同じディレクトリに移動して、次のコマンドを実行します:

    ```bash
    emcc hello.c -s WASM=1 -o hello.html
    ```

このコマンドで渡されたオプションは次のとおりです:

- `-s WASM=1` — 出力を wasm に指定します。指定しない場合、Emscripten はデフォルトでは [asm.js](http://asmjs.org/) として出力します。
- `-o hello.html` — コードを実行するための HTML ページを指定します。wasm モジュールとそれをウェブ環境で使用できるようにコンパイル、インスタンス化するための JavaScript グルーコードも出力に含まれます。

この時点でソースディレクトリに以下のファイルが出力されているはずです:

- バイナリの wasm モジュールコード (`hello.wasm`)
- ネイティブの C の関数と JavaScript/wasm の間で変換を行う JavaScript ファイル (`hello.js`)
- wasm コードをロード、コンパイル、インスタンス化し、ブラウザに出力するための HTML ファイル (`hello.html`)

### サンプルコードを実行する

WebAssembly をサポートしているブラウザで `hello.html` をロードするだけです。WebAssembly は Firefox 52+ と Chrome 57+/最新の Opera でデフォルトで有効になっています (Firefox 47+では _about:config_ で `javascript.options.wasm` flag を有効にすることで、Chrome (51+) と Opera (38+) では _chrome://flags_ に飛んで _Experimental WebAssembly_ フラグを有効にすることで wasm コードを実行することができます) 。

全てが計画通りに機能していれば、ウェブページ上の Emscripten コンソールに "Hello world" の出力が表示されるはずです。おめでとうございます、ようやく C を WebAssembly にコンパイルしてブラウザで実行することができました!

### カスタム HTML テンプレートを使う

場合によっては、カスタム HTML テンプレートを使用することもできます。 どうやってできるかを見てみましょう。

1. まず、次の C のコードを `hello2.c` として新しいディレクトリに保存します:

    ```cpp
    #include <stdio.h>

    int main(int argc, char ** argv) {
        printf("Hello World\n");

    }
    ```

2. `shell_minimal.html` をあなたの emsdk レポジトリから探します。先程作成した新しいディレクトリに `html_template` というサブディレクトリを作って、そこにコピーします。
3. 新しいディレクトリに移動して (Emscripten コンパイラ環境があるターミナルウィンドウで) 、次のコマンドを実行します:

    ```bash
    emcc -o hello2.html hello2.c -O3 -s WASM=1 --shell-file html_template/shell_minimal.html
    ```

    今回渡したオプションは少しだけ異なります:

    - `-o hello2.html` と指定したことで、今回コンパイラは JavaScript グルーコードと `.html` を出力します。
    - さらに `--shell-file html_template/shell_minimal.html` と指定しました — これは例を実行する HTML を生成するための、HTML テンプレートパスです。

4. この例を実行してみましょう。上記のコマンドで hello2.html が生成されます。これは生成された wasm コードに対してロード、実行などを行うグルーコードを含むテンプレートと同じ内容を持ちます。ブラウザを開いて最後の例と同じ出力であることを確認してください。

> **Note:** **注**: 例えば、 `emcc -o hello2.js hello2.c -O3 -s WASM=1` のように `-o` フラグに HTML ファイルの代わりに .js ファイルを渡すことで JavaScript で出力することを指定できます。そのあとに、スクラッチで独自のカスタム HTML を作ることができます。しかし、これはおすすめできません — Emscripten はメモリ割り当て、メモリリークやその他の問題を扱うための JavaScript グルーコードが多数必要になります。これは提供されたテンプレートにすでに含まれています。全てをあなた自身で書くよりも簡単に使用できます。していること全てに習熟してきたら、必要に応じて独自のカスタマイズバージョンを作りましょう。

### C で定義されたカスタム関数を呼び出す

C で定義された関数があって、それを JavaScript から呼び出したい場合、Emscripten の `ccall()` 関数と `EMSCRIPTEN_KEEPALIVE` 宣言 (対象の関数をエクスポートする関数リストに加えるものです ([Why do functions in my C/C++ source code vanish when I compile to JavaScript, and/or I get No functions to process?](https://kripken.github.io/emscripten-site/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process) を参照してください)) を使用します。これがどのように働くか見てみましょう。

1. はじめに、次のコードを `hello3.c` として新しいディレクトリに保存します:

    ```cpp
    #include <stdio.h>
    #include <emscripten/emscripten.h>

    int main(int argc, char ** argv) {
        printf("Hello World\n");
    }

    #ifdef __cplusplus
    extern "C" {
    #endif

    void EMSCRIPTEN_KEEPALIVE myFunction(int argc, char ** argv) {
      printf("MyFunction Called\n");
    }

    #ifdef __cplusplus
    }
    #endif
    ```

    デフォルトでは、Emscripten が生成したコードは常に `main()` を呼び出し、他のデッドコードは削除されます。関数名の前に `EMSCRIPTEN_KEEPALIVE` を置くことによって、これが起こらなくなります。また、`EMSCRIPTEN_KEEPALIVE` を使用するために `emscripten.h` をインポートする必要があります。

    > **Note:** **注**: `#ifdef` ブロックを加えたことによって、C++ のコードからこの例をインクルードしようとしても動作するでしょう。 C と C++ の間でのマングリング規則によって、他の場合では壊れることもありますが、ここでは C++ を使用している場合に、外部の C の関数として扱うように設定しています。

2. 便宜上、この新しいディレクトリに `html_template/shell_minimal.html` (もちろん、このファイルはあなたの実際の開発環境に置きます)を加えます。
3. さて、再びコンパイル手順を実行しましょう。あなたの最新のディレクトリの中 (そして、Emscripten コンパイラ環境の入っているターミナルウィンドウ) で、このように C のコードをコンパイルします (NO_EXIT_RUNTIME オプションを付与してコンパイルする必要があることに注意してください。そうしない場合、 main() 関数が終了したときにランタイムもシャットダウンされてしまい、コンパイルされたコードが正しく呼ばれなくなる可能性があります - 例えば、atexit の呼び出しなどの適切な C のエミュレーションに必要です):

    ```bash
    emcc -o hello3.html hello3.c -O3 -s WASM=1 --shell-file html_template/shell_minimal.html -s NO_EXIT_RUNTIME=1 -s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall']"
    ```

4. 例をブラウザでロードしたら、前と同じものが見られるでしょう。
5. JavaScript から新しい `myFunction()` 関数を呼び出す必要があります。まずは、 以下のような{{htmlelement("button")}} を最初の `<script type='text/javascript'>` タグの上に加えましょう。

    ```html
    <button class="mybutton">Run myFunction</button>
    ```

6. そして、{{htmlelement("script")}} 要素内の最後に次のコードを追加します ( `</script>` タグの直前):

    ```js
    document.querySelector('.mybutton').addEventListener('click', function(){
      alert('check console');
      var result = Module.ccall('myFunction', // name of C function
                                 null, // return type
                                 null, // argument types
                                 null); // arguments
    });
    ```

これはエクスポートされた関数をどのようにして `ccall()` を使用して呼び出すかを示しています。

## 関連情報

- [emscripten.org](http://emscripten.org/) — Emscripten とそれの多種多様なオプションについての詳細を確認してください。
- [Calling compiled C functions from JavaScript using ccall/cwrap](https://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Why do functions in my C/C++ source code vanish when I compile to JavaScript, and/or I get No functions to process?](https://kripken.github.io/emscripten-site/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
