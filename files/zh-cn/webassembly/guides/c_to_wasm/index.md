---
title: 将 C/C++ 编译为 WebAssembly
slug: WebAssembly/Guides/C_to_Wasm
---

当你在用 C/C++ 之类的语言编写模块时，你可以使用 [Emscripten](https://emscripten.org/) 来将它编译到 WebAssembly。让我们来看看它是如何工作的。

## Emscripten 环境安装

首先，让我们来配置所需要的开发环境。

### 所需条件

按此教程获取 Emscripten SDK：<https://emscripten.org/docs/getting_started/downloads.html>

## 编译样例代码

现在环境配置完毕，让我们看看如何使用它把 C 代码编译到 Emscripten。当使用 Emscripten 来编译的时候有很多种不同的选择，我们介绍其中主要的 2 种：

- 编译到 wasm 并且生成一个用来运行我们代码的 HTML，将所有 wasm 在 web 环境下运行所需要的“胶水”JavaScript 代码都添加进去。
- 编译到 wasm 然后仅仅生成 JavaScript。

让我们一个一个看看。

### 生成 HTML 和 JavaScript

我们先来看一个最简单的例子，通过这个，你可以使用 Emscripten 来将任何代码生成到 WebAssembly，然后在浏览器上运行。

1. 首先我们需要编译一段样例代码。将下方的 C 代码复制一份然后命名为 hello.c 保存在一个新的文件夹内。

   ```cpp
   #include <stdio.h>

   int main(int argc, char ** argv) {
     printf("Hello World\n");
   }
   ```

2. 现在，转到一个已经配置过 Emscripten 编译环境的终端窗口中，进入刚刚保存 hello.c 文件的文件夹中，然后运行下列命令：

   ```bash
   emcc hello.c -s WASM=1 -o hello.html
   ```

下面列出了我们命令中选项的细节：

- `-s WASM=1` — 指定我们想要的 wasm 输出形式。如果我们不指定这个选项，Emscripten 默认将只会生成 [asm.js](http://asmjs.org/)。
- `-o hello.html` — 指定这个选项将会生成 HTML 页面来运行我们的代码，并且会生成 wasm 模块，以及编译和实例化 wasm 模块所需要的“胶水”js 代码，这样我们就可以直接在 web 环境中使用了。

这个时候在你的源码文件夹应该有下列文件：

- `hello.wasm` 二进制的 wasm 模块代码
- `hello.js` 一个包含了用来在原生 C 函数和 JavaScript/wasm 之间转换的胶水代码的 JavaScript 文件
- `hello.html` 一个用来加载，编译，实例化你的 wasm 代码并且将它输出在浏览器显示上的一个 HTML 文件

### 运行你的例子

现在使用一个支持 WebAssembly 的浏览器，加载生成的 `hello.html`。自从 Firefox 版本 52、Chrome 版本 57 和 Opera 版本 44 开始，已经默认启用了 WebAssembly。

> [!NOTE]
> 如果你试图直接从本地硬盘打开生成的 HTML 文件（`hello.html`）（例如 `file://your_path/hello.html`），你会得到一个错误信息，大意是 _`both async and sync fetching of the wasm failed`_。你需要通过 HTTP 服务器（`http://`）运行你的 HTML 文件——参见[如何设置本地测试服务器](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)获取更多信息。

如果一切顺利，你应该可以在页面上的 Emscripten 控制台和浏览器控制台中看到“Hello World”的输出。

恭喜！你已经成功将 C 代码编译成 JavaScript 并且在浏览器中执行了！

## 使用自定义 HTML 模板

有些时候你可能想要使用一个自定义的 HTML 模板。让我们看看怎么实现。

1. 首先，在一个新文件夹中保存以下 C 代码到 hello2.c 中：

   ```cpp
   #include <stdio.h>

   int main(int argc, char ** argv) {
       printf("Hello World\n");
   }
   ```

2. 在 emsdk 中搜索一个叫做 `shell_minimal.html` 的文件，然后复制它到刚刚创建的目录下的 `html_template` 文件夹。

   ```bash
   mkdir html_template
   cp ~/emsdk/emscripten/1.38.15/src/shell_minimal.html html_template
   ```

3. 现在使用你的 Emscripten 编译器环境的终端窗口进入你的新目录，然后运行下面的命令：

   ```bash
   emcc -o hello2.html hello2.c -O3 -s WASM=1 --shell-file html_template/shell_minimal.html
   ```

   这次使用的选项略有不同：
   - 我们使用了 `-o hello2.html`，这意味编译器将仍然输出 js 胶水代码 和 html 文件。
   - 我们还使用了 `--shell-file html_template/shell_minimal.html`，这指定了你要运行的例子使用 HTML 页面模板。

4. 下面让我们来运行这个例子。上面的命令已经生成了 hello2.html，内容和我们使用的模板非常相像，只不过多加了一些 js 胶水和加载 wasm 文件的代码。在浏览器中打开它，你会看到与上一个例子相同的输出。

> [!NOTE]
> 通过用.js 取代.htm(l) 作为文件后缀名，你就可以得到只有 JavaScript 的输出文件，而不再是完整的 HTML 文件。例如：`emcc -o hello2.js hello2.c -O3 -s WASM=1`. 你可以完全从零开始创建你自己的 HTML 文件。尽管如此，不推荐这样做。因为 Emscripten 需要大量的 JavaScript“胶水”代码从而能够 处理内存分配、内存泄漏以及大量的其他问题。这些问题都已经在提供的模板中得到了处理。使用模板要比自己编写模板要容易得多。不过，当对模板所做的事情越来越熟悉的时候，你就能够按照自己的需要创建定制化的模板了。

## 调用一个定义在 C 中的自定义方法

如果需要调用一个在 C 语言自定义的函数，你可以使用 Emscripten 中的 `ccall()` 函数，以及 `EMSCRIPTEN_KEEPALIVE` 声明（将你的函数添加到导出函数列表中（详见 [Why do functions in my C/C++ source code vanish when I compile to JavaScript, and/or I get No functions to process?](https://kripken.github.io/emscripten-site/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)））。

接下来让我们看看这是怎么实现的。

1. 首先，将以下代码在新目录中保存为 `hello3.c` ：

   ```cpp
   #include <stdio.h>
   #include <emscripten/emscripten.h>

   int main(int argc, char ** argv) {
       printf("Hello World\n");
   }

   #ifdef __cplusplus
   extern "C" {
   #endif

   int EMSCRIPTEN_KEEPALIVE myFunction(int argc, char ** argv) {
     printf("我的函数已被调用\n");
   }

   #ifdef __cplusplus
   }
   #endif
   ```

   默认情况下，Emscripten 生成的代码只会调用 `main()` 函数，其他的函数将被视为无用代码。在一个函数名之前添加 `EMSCRIPTEN_KEEPALIVE` 能够防止这样的事情发生。你需要导入 `emscripten.h` 库来使用 `EMSCRIPTEN_KEEPALIVE`。

   > [!NOTE]
   > 为了保证万一你想在 C++ 代码中引用这些代码时代码可以正常工作，我们添加了 `#ifdef` 代码块。由于 C 与 C++ 中名字修饰规则的差异，添加的代码块有可能产生问题，但目前我们设置了这一额外的代码块以保证你使用 C++ 时，这些代码会被视为外部 C 语言函数。

2. 为了方便起见，现在将 `html_template/shell_minimal.html` 也添加到这一目录（但在实际开发环境中你肯定需要将其放到某一特定位置）。
3. 运行以下命令编译：(注意由于使用 ccall 函数，需要添加指定参数)

   ```bash
   emcc -o hello3.html hello3.c -O3 -s WASM=1 -s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall']" --shell-file html_template/shell_minimal.html
   ```

4. 如果你在浏览器中在此加载实例，你将看到和之前相同的结果。
5. 现在我们需要运行新的 `myFunction()` JavaScript 函数。首先，在文本编辑器中打开 hello3.html 文件。
6. 按照以下实例添加一个 {{htmlelement("button")}}，就在 `<script type='text/javascript'>` 开始标签之前。

   ```html
   <button class="mybutton">运行我的函数</button>
   ```

7. 现在在第一个 {{htmlelement("script")}} 元素末尾添加以下代码：

   ```js
   document.querySelector(".mybutton").addEventListener("click", function () {
     alert("检查控制台");
     var result = Module.ccall(
       "myFunction", // name of C function
       null, // return type
       null, // argument types
       null,
     ); // arguments
   });
   ```

以上就是如何使用 `ccall()` 调用导出的函数的方式。

## 参见

- [emscripten.org](http://emscripten.org/)——了解更多 Emscripten 以及它的多种设置
- [在 JavaScript 中使用 ccall/cwrap 调用已编译的 C 函数](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [为什么在将 C/C++ 源代码编译为 JavaScript 时，其中的函数会“消失”，或出现“No functions to process”的提示？](https://emscripten.org/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [将已有的 C 模块编译为 WebAssembly](/zh-CN/docs/WebAssembly/Guides/Existing_C_to_Wasm)
