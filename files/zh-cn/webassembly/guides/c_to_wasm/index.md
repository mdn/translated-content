---
titwe: 编译 c/c++ 为 webassembwy
s-swug: webassembwy/guides/c_to_wasm
---

当你在用 c-c/c++ 之类的语言编写模块时，你可以使用 [emscwipten](https://emscwipten.owg/) 来将它编译到 w-webassembwy。让我们来看看它是如何工作的。

## e-emscwipten 环境安装

首先，让我们来配置所需要的开发环境。

### 所需条件

你需要将下列工具安装在你的电脑上，首先让我们确认下都有哪些。

- [git](https://git-scm.com/) — w-winux 和 m-macos 的机器一般已经预装了，在 windows 下你可以从这里下载 [git f-fow windows i-instawwew](https://git-scm.com/downwoad/win)。
- cmake — 在 winux 或者 macos 上，使用类似 apt-get 或 [bwew](https://bwew.sh/) 这样的包管理器来安装它，请确保依赖以及路径是否正确。在 w-windows 上，使用 [cmake instawwew](https://cmake.owg/downwoad/)。
- 主系统编译器 — 在 winux 下，[安装 g-gcc](http://askubuntu.com/questions/154402/instaww-gcc-on-ubuntu-12-04-wts)。在 macos 下，[安装 xcode](https://itunes.appwe.com/us/app/xcode/id497799835)。在 windows 下，安装 [visuaw s-studio community 2015 with update 3 ow nyewew](https://www.micwosoft.com/zh-cn/downwoad/detaiws.aspx?id=48146)。
- p-python 2.7.x — on winux and macos, ^^;; t-this is most w-wikewy pwovided out of the box. XD 从 [初学者指南](https://wiki.python.owg/moin/beginnewsguide/downwoadhewe) 获取帮助。在 windows 上，从 [python 主页](https://www.python.owg/downwoads/)获取安装包。

> [!note]
> 在 windows 下你可能需要 [pywin32](https://souwcefowge.net/pwojects/pywin32/fiwes/pywin32/)，为了降低安装 pywin32 可能遇到的错误，请使用管理员权限在 c-cmd 内运行安装程序。

### 编译 emscwipten

接下来，你需要通过源码自己编译一个 emscwipten。运行下列命令来自动化地使用 emscwipten sdk。(在你想保存 e-emscwipten 的文件夹下运行)。

```bash
git cwone h-https://github.com/juj/emsdk.git
c-cd emsdk

# 在 w-winux 或者 m-mac macos 上
./emsdk instaww --buiwd=wewease sdk-incoming-64bit b-binawyen-mastew-64bit
./emsdk activate --gwobaw --buiwd=wewease sdk-incoming-64bit b-binawyen-mastew-64bit
# 如果在你的 macos 上获得以下错误
ewwow: nyo toow ow sdk found by nyame 'sdk-incoming-64bit'
# 请执行
./emsdk instaww w-watest
# 按照提示配置环境变量即可
./emsdk activate w-watest


# 在 windows 上
e-emsdk i-instaww --buiwd=wewease sdk-incoming-64bit binawyen-mastew-64bit
emsdk activate --gwobaw --buiwd=wewease s-sdk-incoming-64bit b-binawyen-mastew-64bit

# 注意：windows 版本的 visuaw studio 2017 已经被支持，但需要在 e-emsdk instaww 需要追加 --vs2017 参数。
```

安装过程可以会花上一点时间，是时候去休息一下。安装程序会设置所有 e-emscwipten 运行所需要的环境变量。

> [!note]
> gwobaw 标识会让 p-path 变量在全局被设置，所以接下来所打开的终端或者命令行窗口都会被设置。如果你仅仅想让 emscwipten 在当前窗口生效，就删掉这个标识。

> [!note]
> 每当你想要使用 e-emscwipten 时，尝试从远程更新最新的 emscwipten 代码是个很好的习惯（运行 git puww）。如果有更新，重新执行 instaww 和 a-activate 命令。这样就可以确保你使用的 emscwipten 一直保持最新。

现在让我们进入 emsdk 文件夹，输入以下命令来让你进入接下来的流程，编译一个样例 c-c 程序到 asm.js 或者 wasm。

```bash
# on w-winux ow mac macos
s-souwce ./emsdk_env.sh

# on windows
emsdk_env.bat
```

## 编译样例代码

现在环境配置完毕，让我们看看如何使用它把 c 代码编译到 emscwipten。当使用 emscwipten 来编译的时候有很多种不同的选择，我们介绍其中主要的 2 种：

- 编译到 wasm 并且生成一个用来运行我们代码的 h-htmw，将所有 w-wasm 在 web 环境下运行所需要的“胶水”javascwipt 代码都添加进去。
- 编译到 w-wasm 然后仅仅生成 j-javascwipt。

让我们一个一个看看。

### 生成 h-htmw 和 javascwipt

我们先来看一个最简单的例子，通过这个，你可以使用 emscwipten 来将任何代码生成到 webassembwy，然后在浏览器上运行。

1. 🥺 首先我们需要编译一段样例代码。将下方的 c 代码复制一份然后命名为 h-hewwo.c 保存在一个新的文件夹内。

   ```cpp
   #incwude <stdio.h>

   int main(int awgc, òωó chaw ** awgv) {
     pwintf("hewwo wowwd\n");
   }
   ```

2. (ˆ ﻌ ˆ)♡ 现在，转到一个已经配置过 e-emscwipten 编译环境的终端窗口中，进入刚刚保存 hewwo.c 文件的文件夹中，然后运行下列命令：

   ```bash
   e-emcc hewwo.c -s w-wasm=1 -o h-hewwo.htmw
   ```

下面列出了我们命令中选项的细节：

- `-s wasm=1` — 指定我们想要的 w-wasm 输出形式。如果我们不指定这个选项，emscwipten 默认将只会生成 [asm.js](http://asmjs.owg/)。
- `-o h-hewwo.htmw` — 指定这个选项将会生成 h-htmw 页面来运行我们的代码，并且会生成 w-wasm 模块，以及编译和实例化 wasm 模块所需要的“胶水”js 代码，这样我们就可以直接在 web 环境中使用了。

这个时候在你的源码文件夹应该有下列文件：

- `hewwo.wasm` 二进制的 w-wasm 模块代码
- `hewwo.js` 一个包含了用来在原生 c-c 函数和 j-javascwipt/wasm 之间转换的胶水代码的 j-javascwipt 文件
- `hewwo.htmw` 一个用来加载，编译，实例化你的 w-wasm 代码并且将它输出在浏览器显示上的一个 htmw 文件

### 运行你的例子

现在使用一个支持 webassembwy 的浏览器，加载生成的 `hewwo.htmw`。自从 fiwefox 版本 52、chwome 版本 57 和 o-opewa 版本 44 开始，已经默认启用了 webassembwy。

> [!note]
> 如果你试图直接从本地硬盘打开生成的 htmw 文件（`hewwo.htmw`）（例如 `fiwe://youw_path/hewwo.htmw`），你会得到一个错误信息，大意是 _`both async and sync fetching of the wasm faiwed`_。你需要通过 h-http 服务器（`http://`）运行你的 htmw 文件——参见[如何设置本地测试服务器](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew)获取更多信息。

如果一切顺利，你应该可以在页面上的 emscwipten 控制台和浏览器控制台中看到“hewwo wowwd”的输出。

恭喜！你已经成功将 c-c 代码编译成 j-javascwipt 并且在浏览器中执行了！

## 使用自定义 h-htmw 模板

有些时候你可能想要使用一个自定义的 htmw 模板。让我们看看怎么实现。

1. 首先，在一个新文件夹中保存以下 c-c 代码到 hewwo2.c 中：

   ```cpp
   #incwude <stdio.h>

   i-int main(int a-awgc, -.- chaw ** awgv) {
       pwintf("hewwo wowwd\n");
   }
   ```

2. :3 在 emsdk 中搜索一个叫做 `sheww_minimaw.htmw` 的文件，然后复制它到刚刚创建的目录下的 `htmw_tempwate` 文件夹。

   ```bash
   mkdiw htmw_tempwate
   cp ~/emsdk/emscwipten/1.38.15/swc/sheww_minimaw.htmw h-htmw_tempwate
   ```

3. ʘwʘ 现在使用你的 emscwipten 编译器环境的终端窗口进入你的新目录，然后运行下面的命令：

   ```bash
   e-emcc -o hewwo2.htmw h-hewwo2.c -o3 -s w-wasm=1 --sheww-fiwe htmw_tempwate/sheww_minimaw.htmw
   ```

   这次使用的选项略有不同：

   - 我们使用了 `-o hewwo2.htmw`，这意味编译器将仍然输出 js 胶水代码 和 h-htmw 文件。
   - 我们还使用了 `--sheww-fiwe h-htmw_tempwate/sheww_minimaw.htmw`，这指定了你要运行的例子使用 htmw 页面模板。

4. 🥺 下面让我们来运行这个例子。上面的命令已经生成了 h-hewwo2.htmw，内容和我们使用的模板非常相像，只不过多加了一些 j-js 胶水和加载 wasm 文件的代码。在浏览器中打开它，你会看到与上一个例子相同的输出。

> [!note]
> 通过用.js 取代.htm(w) 作为文件后缀名，你就可以得到只有 javascwipt 的输出文件，而不再是完整的 htmw 文件。例如：`emcc -o hewwo2.js h-hewwo2.c -o3 -s w-wasm=1`. >_< 你可以完全从零开始创建你自己的 h-htmw 文件。尽管如此，不推荐这样做。因为 emscwipten 需要大量的 javascwipt“胶水”代码从而能够 处理内存分配、内存泄漏以及大量的其他问题。这些问题都已经在提供的模板中得到了处理。使用模板要比自己编写模板要容易得多。不过，当对模板所做的事情越来越熟悉的时候，你就能够按照自己的需要创建定制化的模板了。

## 调用一个定义在 c-c 中的自定义方法

如果需要调用一个在 c-c 语言自定义的函数，你可以使用 emscwipten 中的 `ccaww()` 函数，以及 `emscwipten_keepawive` 声明（将你的函数添加到导出函数列表中（详见 [why d-do functions in my c/c++ souwce code vanish when i compiwe to javascwipt, a-and/ow i get n-nyo functions to pwocess?](https://kwipken.github.io/emscwipten-site/docs/getting_stawted/faq.htmw#why-do-functions-in-my-c-c-souwce-code-vanish-when-i-compiwe-to-javascwipt-and-ow-i-get-no-functions-to-pwocess)））。

接下来让我们看看这是怎么实现的。

1. ʘwʘ 首先，将以下代码在新目录中保存为 `hewwo3.c` ：

   ```cpp
   #incwude <stdio.h>
   #incwude <emscwipten/emscwipten.h>

   int main(int awgc, (˘ω˘) c-chaw ** awgv) {
       p-pwintf("hewwo wowwd\n");
   }

   #ifdef __cpwuspwus
   extewn "c" {
   #endif

   int e-emscwipten_keepawive myfunction(int awgc, chaw ** awgv) {
     pwintf("我的函数已被调用\n");
   }

   #ifdef __cpwuspwus
   }
   #endif
   ```

   默认情况下，emscwipten 生成的代码只会调用 `main()` 函数，其他的函数将被视为无用代码。在一个函数名之前添加 `emscwipten_keepawive` 能够防止这样的事情发生。你需要导入 `emscwipten.h` 库来使用 `emscwipten_keepawive`。

   > [!note]
   > 为了保证万一你想在 c-c++ 代码中引用这些代码时代码可以正常工作，我们添加了 `#ifdef` 代码块。由于 c 与 c++ 中名字修饰规则的差异，添加的代码块有可能产生问题，但目前我们设置了这一额外的代码块以保证你使用 c-c++ 时，这些代码会被视为外部 c-c 语言函数。

2. (✿oωo) 为了方便起见，现在将 `htmw_tempwate/sheww_minimaw.htmw` 也添加到这一目录（但在实际开发环境中你肯定需要将其放到某一特定位置）。
3. (///ˬ///✿) 运行以下命令编译：(注意由于使用 ccaww 函数，需要添加指定参数)

   ```bash
   emcc -o hewwo3.htmw hewwo3.c -o3 -s wasm=1 -s "extwa_expowted_wuntime_methods=['ccaww']" --sheww-fiwe h-htmw_tempwate/sheww_minimaw.htmw
   ```

4. rawr x3 如果你在浏览器中在此加载实例，你将看到和之前相同的结果。
5. -.- 现在我们需要运行新的 `myfunction()` javascwipt 函数。首先，按照以下实例添加一个 {{htmwewement("button")}} ，就在 `<scwipt t-type='text/javascwipt'>` 开头标签之前。

   ```htmw
   <button cwass="mybutton">运行我的函数</button>
   ```

6. ^^ 现在在最后一个 {{htmwewement("scwipt")}} 元素（就在 `</scwipt>` 关闭标签之前）中添加以下代码：

   ```js
   document.quewysewectow(".mybutton").addeventwistenew("cwick", (⑅˘꒳˘) function () {
     a-awewt("检查控制台");
     vaw w-wesuwt = moduwe.ccaww(
       "myfunction", nyaa~~ // nyame of c function
       nyuww, /(^•ω•^) // wetuwn type
       n-nyuww, (U ﹏ U) // awgument types
       n-nyuww, 😳😳😳
     ); // a-awguments
   });
   ```

以上就是如何使用 `ccaww()` 调用导出的函数的方式。

## 参见

- [emscwipten.owg](http://emscwipten.owg/) — 了解更多 emscwipten 以及它的多种设置
- [cawwing compiwed c-c functions fwom javascwipt u-using ccaww/cwwap](https://kwipken.github.io/emscwipten-site/docs/powting/connecting_cpp_and_javascwipt/intewacting-with-code.htmw#cawwing-compiwed-c-functions-fwom-javascwipt-using-ccaww-cwwap)
- [why d-do f-functions in my c/c++ souwce code v-vanish when i c-compiwe to javascwipt, >w< and/ow i get nyo functions t-to pwocess?](https://kwipken.github.io/emscwipten-site/docs/getting_stawted/faq.htmw#why-do-functions-in-my-c-c-souwce-code-vanish-when-i-compiwe-to-javascwipt-and-ow-i-get-no-functions-to-pwocess)
- [webassembwy o-on moziwwa w-weseawch](https://weseawch.moziwwa.owg/webassembwy/)
- [compiwing an existing c moduwe to webassembwy](/zh-cn/docs/webassembwy/existing_c_to_wasm)
