---
title: 编译 C/C++ 为 WebAssembly
slug: WebAssembly/C_to_Wasm
---

{{WebAssemblySidebar}}

当你在用 C/C++ 之类的语言编写模块时，你可以使用 [Emscripten](https://emscripten.org/) 来将它编译到 WebAssembly。让我们来看看它是如何工作的。

## Emscripten 环境安装

首先，让我们来配置所需要的开发环境。

### 所需条件

你需要将下列工具安装在您的电脑上，首先让我们确认下都有哪些。

- [Git](https://git-scm.com/) — Linux 和 macOS 的机器一般已经预装了，在 Windows 下您可以从这里下载 [Git for Windows installer](https://git-scm.com/download/win)。
- CMake — 在 Linux 或者 macOS 上，使用类似 apt-get 或 [brew](http://brew.sh/) 这样的包管理器来安装它，请确保依赖以及路径是否正确。在 Windows 上，使用 [CMake installer](https://cmake.org/download/)。
- 主系统编译器 — 在 Linux 下，[安装 GCC](http://askubuntu.com/questions/154402/install-gcc-on-ubuntu-12-04-lts)。在 macOS 下，[安装 Xcode](https://itunes.apple.com/us/app/xcode/id497799835)。在 Windows 下，安装 [Visual Studio Community 2015 with Update 3 or newer](https://www.microsoft.com/zh-CN/download/details.aspx?id=48146)。
- Python 2.7.x — On Linux and macOS, this is most likely provided out of the box. 从 [初学者指南](https://wiki.python.org/moin/BeginnersGuide/Downloadhere) 获取帮助。在 Windows 上，从 [Python 主页](https://www.python.org/downloads/)获取安装包。

> **备注：** 在 Windows 下您可能需要[pywin32](https://sourceforge.net/projects/pywin32/files/pywin32/)，为了降低安装 pywin32 可能遇到的错误，请使用管理员权限在 cmd 内运行安装程序。

### 编译 Emscripten

接下来，您需要通过源码自己编译一个 Emscripten。运行下列命令来自动化地使用 Emscripten SDK。(在你想保存 Emscripten 的文件夹下运行)。

```bash
git clone https://github.com/juj/emsdk.git
cd emsdk

# 在 Linux 或者 Mac macOS 上
./emsdk install --build=Release sdk-incoming-64bit binaryen-master-64bit
./emsdk activate --global --build=Release sdk-incoming-64bit binaryen-master-64bit
# 如果在你的 macos 上获得以下错误
Error: No tool or SDK found by name 'sdk-incoming-64bit'
# 请执行
./emsdk install latest
# 按照提示配置环境变量即可
./emsdk activate latest


# 在 Windows 上
emsdk install --build=Release sdk-incoming-64bit binaryen-master-64bit
emsdk activate --global --build=Release sdk-incoming-64bit binaryen-master-64bit

# 注意：Windows 版本的 Visual Studio 2017 已经被支持，但需要在 emsdk install 需要追加 --vs2017 参数。
```

安装过程可以会花上一点时间，是时候去休息一下。安装程序会设置所有 Emscripten 运行所需要的环境变量。

> **备注：** global 标识会让 PATH 变量在全局被设置，所以接下来所打开的终端或者命令行窗口都会被设置。如果您仅仅想让 Emscripten 在当前窗口生效，就删掉这个标识。

> **备注：** 每当您想要使用 Emscripten 时，尝试从远程更新最新的 emscripten 代码是个很好的习惯（运行 git pull）。如果有更新，重新执行 install 和 activate 命令。这样就可以确保您使用的 Emscripten 一直保持最新。

现在让我们进入 emsdk 文件夹，输入以下命令来让你进入接下来的流程，编译一个样例 C 程序到 asm.js 或者 wasm。

```bash
# on Linux or Mac macOS
source ./emsdk_env.sh

# on Windows
emsdk_env.bat
```

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

- `-s WASM=1` — 指定我们想要的 wasm 输出形式。如果我们不指定这个选项，Emscripten 默认将只会生成[asm.js](http://asmjs.org/)。
- `-o hello.html` — 指定这个选项将会生成 HTML 页面来运行我们的代码，并且会生成 wasm 模块，以及编译和实例化 wasm 模块所需要的“胶水”js 代码，这样我们就可以直接在 web 环境中使用了。

这个时候在您的源码文件夹应该有下列文件：

- `hello.wasm` 二进制的 wasm 模块代码
- `hello.js` 一个包含了用来在原生 C 函数和 JavaScript/wasm 之间转换的胶水代码的 JavaScript 文件
- `hello.html` 一个用来加载，编译，实例化你的 wasm 代码并且将它输出在浏览器显示上的一个 HTML 文件

### 运行你的例子

现在使用一个支持 WebAssembly 的浏览器，加载生成的 `hello.html`。自从 Firefox 版本 52、Chrome 版本 57 和 Opera 版本 44 开始，已经默认启用了 WebAssembly。

> **备注：** 如果你试图直接从本地硬盘打开生成的 HTML 文件（`hello.html`）（例如 `file://your_path/hello.html`），你会得到一个错误信息，大意是 _`both async and sync fetching of the wasm failed`_。你需要通过 HTTP 服务器（`http://`）运行你的 HTML 文件——参见[如何设置本地测试服务器](/zh-CN/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server)获取更多信息。

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
   - 我们还使用了 `--shell-file html_template/shell_minimal.html`，这指定了您要运行的例子使用 HTML 页面模板。

4. 下面让我们来运行这个例子。上面的命令已经生成了 hello2.html，内容和我们使用的模板非常相像，只不过多加了一些 js 胶水和加载 wasm 文件的代码。在浏览器中打开它，你会看到与上一个例子相同的输出。

> **备注：** 通过用.js 取代.htm(l) 作为文件后缀名，你就可以得到只有 JavaScript 的输出文件，而不再是完整的 HTML 文件。例如：`emcc -o hello2.js hello2.c -O3 -s WASM=1`. 你可以完全从零开始创建你自己的 HTML 文件。尽管如此，不推荐这样做。因为 Emscripten 需要大量的 JavaScript“胶水”代码从而能够 处理内存分配、内存泄漏以及大量的其他问题。这些问题都已经在提供的模板中得到了处理。使用模板要比自己编写模板要容易得多。不过，当对模板所做的事情越来越熟悉的时候，你就能够按照自己的需要创建定制化的模板了。

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

   > **备注：** 为了保证万一你想在 C++ 代码中引用这些代码时代码可以正常工作，我们添加了 `#ifdef` 代码块。由于 C 与 C++ 中名字修饰规则的差异，添加的代码块有可能产生问题，但目前我们设置了这一额外的代码块以保证你使用 C++ 时，这些代码会被视为外部 C 语言函数。

2. 为了方便起见，现在将 `html_template/shell_minimal.html` 也添加到这一目录（但在实际开发环境中你肯定需要将其放到某一特定位置）。
3. 运行以下命令编译：(注意由于使用 ccall 函数，需要添加指定参数)

   ```bash
   emcc -o hello3.html hello3.c -O3 -s WASM=1 -s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall']" --shell-file html_template/shell_minimal.html
   ```

4. 如果你在浏览器中在此加载实例，你将看到和之前相同的结果。
5. 现在我们需要运行新的 `myFunction()` JavaScript 函数。首先，按照以下实例添加一个 {{htmlelement("button")}} ，就在 `<script type='text/javascript'>` 开头标签之前。

   ```html
   <button class="mybutton">运行我的函数</button>
   ```

6. 现在在最后一个 {{htmlelement("script")}} 元素（就在 `</script>` 关闭标签之前）中添加以下代码：

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

- [emscripten.org](http://emscripten.org/) — 了解更多 Emscripten 以及它的多种设置
- [Calling compiled C functions from JavaScript using ccall/cwrap](https://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-compiled-c-functions-from-javascript-using-ccall-cwrap)
- [Why do functions in my C/C++ source code vanish when I compile to JavaScript, and/or I get No functions to process?](https://kripken.github.io/emscripten-site/docs/getting_started/FAQ.html#why-do-functions-in-my-c-c-source-code-vanish-when-i-compile-to-javascript-and-or-i-get-no-functions-to-process)
- [WebAssembly on Mozilla Research](https://research.mozilla.org/webassembly/)
- [Compiling an Existing C Module to WebAssembly](/zh-CN/docs/WebAssembly/existing_C_to_wasm)
