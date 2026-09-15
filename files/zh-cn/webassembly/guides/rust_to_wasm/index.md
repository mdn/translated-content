---
title: 从 Rust 编译为 WebAssembly
slug: WebAssembly/Guides/Rust_to_Wasm
l10n:
  sourceCommit: 9e69ea9db9ec62df101e83cbc07d447e1984c57e
---

本教程将展示如何将一个 Rust 项目编译为 WebAssembly，并在现有的 Web 应用中使用它。

## Rust 和 WebAssembly 用例

Rust 和 WebAssembly 有两大主要用例：

- 构建完整应用——整个 Web 应用都基于 Rust 开发。
- 构建应用的组成部分——在现存的 JavaScript 前端中使用 Rust。

目前，Rust 团队主要关注后一种用例，因此本文将重点介绍后者。关于前一种情况，请参考 [`yew`](https://github.com/yewstack/yew) 和 [leptos](https://github.com/leptos-rs/leptos) 等项目。

在本教程中，我们将使用 `wasm-pack`（一款用于在 Rust 中构建 JavaScript 包的工具）来构建一个包。该包将仅包含 WebAssembly 和 JavaScript 代码，因此用户无需安装 Rust。他们甚至可能不会察觉到该包是用 Rust 编写的。

## Rust 环境配置

首先，我们将搭建必要的环境。

### 安装 Rust

前往[安装 Rust](https://rust-lang.org/zh-CN/tools/install/) 页面并跟随指示安装 Rust。这里会安装一个名为“rustup”的工具，这个工具能让你管理多个不同版本的 Rust。默认情况下，它会安装最新的稳定版 Rust，可以将其用于一般的 Rust 开发。Rustup 会安装 Rust 的编译器 `rustc`、Rust 的包管理工具 `cargo`、Rust 的标准库 `rust-std` 以及一些有用的文档 `rust-docs`。

> [!NOTE]
> 需要注意，在安装完成后，你需要把 cargo 的 `bin` 目录添加到你系统的 `PATH`。一般来说它会自动添加，但需要你重启终端后才会生效。

### wasm-pack

要构建我们的包，我们需要一个额外工具 `wasm-pack`。它会帮助我们把我们的代码编译成 WebAssembly，并生成适用于浏览器的正确打包文件。要下载并安装它，请在终端中输入以下命令：

```bash
cargo install wasm-pack
```

## 构建我们的 WebAssembly 包

万事俱备，来创建一个新的 Rust 包吧。打开你用来存放项目的目录，敲下这个命令：

```bash
cargo new --lib hello-wasm
```

这里会在名为 `hello-wasm` 的子目录里创建一个新的库，里面有下一步之前你所需要的一切：

```plain
├── Cargo.toml
└── src
    └── lib.rs
```

`Cargo.toml` 用于配置我们的构建过程。它的作用类似于 Bundler 中的 `Gemfile` 或 npm 中的 `package.json`。

Cargo 还在 `src/lib.rs` 中为我们生成了部分 Rust 代码：

```rust
pub fn add(left: u64, right: u64) -> u64 {
    left + right
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}
```

### 来写点 Rust 代码吧

我们不会使用上述所示生成的 `src/lib.rs` 代码，用这些代码替换掉原来的：

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("你好，{}！", name));
}
```

我们的 Rust 代码主要由三个部分组成。这里我们仅做高层次的说明，并略过了一些细节；若想进一步了解 Rust，请查阅免费的在线书籍[《Rust 编程语言》](https://doc.rust-lang.org/book/)。

#### 使用 `wasm-bindgen` 在 Rust 与 JavaScript 之间通信

第一部分看起来像这样：

```rust
use wasm_bindgen::prelude::*;
```

在 Rust 当中，库被称为“crates”。

明白了吗？*货船*（Cargo）运送*货箱*（crates）。

第一行包含一个 `use` 命令，用于将库中的代码导入到你的代码中。在此示例中，我们导入了 `wasm_bindgen::prelude` 模块中的所有内容。我们将在下一节中使用这些功能。

在进入下一节之前，我们应该先进一步探讨 `wasm-bindgen`。

`wasm-pack` 利用 `wasm-bindgen` 在 JavaScript 和 Rust 类型之间架起桥梁。它允许 JavaScript 通过字符串调用 Rust API，或者让 Rust 函数捕获 JavaScript 异常。

我们在本包中使用了 `wasm-bindgen` 的功能。事实上，这就是下一节的内容。

#### 在 Rust 中调用来自 JavaScript 的外部函数

接下来的部分看起来像这样：

```rust
#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}
```

在 `#[ ]` 中的内容叫做“属性”（attribute），并以某种方式改变下面的语句。在这种情况下，下面的语句是一个 `extern`，它将告诉 Rust 我们想调用一些外部定义的函数。这个属性告诉我们“wasm-bindgen 知道如何找到这些函数”。

第三行是一个用 Rust 编写的函数签名。它表示“`alert` 函数接受一个参数，即名为 `s` 的字符串”。正如你可能猜到的，这就是 [JavaScript 提供的 `alert` 函数](/zh-CN/docs/Web/API/Window/alert)。我们将在下一节中调用这个函数。

每当你需要调用 JavaScript 函数时，都可以将它们添加到此文件中，`wasm-bindgen` 会为你完成所有配置工作。目前并非所有功能都已支持，但我们正在努力完善。如果发现功能缺失，请[提交错误报告](https://github.com/rustwasm/wasm-bindgen/issues/new)。

#### 编写能够在 JavaScript 中调用的 Rust 函数

最后一部分是这样的：

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("你好，{}！", name));
}
```

我们再次看到了 `#[wasm_bindgen]` 属性。在这种情况下，它修饰的不是 `extern` 代码块，而是一个 `fn`；这意味着我们希望这个 Rust 函数能够被 JavaScript 调用。这与 `extern` 恰恰相反：这些不是我们需要的函数，而是我们要提供给外部的函数。

该函数名为 `greet`，接受一个参数——一个字符串（用 `&str` 表示），即 `name`。随后，它会调用我们在上文 `extern` 代码块中定义的 `alert` 函数。它将调用传递给 `format!` 宏，该宏允许我们拼接字符串。

在此情况下，`format!` 宏接受两个参数：一个格式字符串和一个要填入其中的变量。格式字符串就是 `"你好，{}！"` 这部分。其中包含 `{}`，变量将在此处进行插值。我们传递的变量是 `name`，即该函数的参数，因此如果调用 `greet("小明")`，我们应该会看到 `"你好，小明！"`。

该结果会被传递给 `alert()`，因此当我们调用此函数时，会看到一个弹出框，其中显示“你好，小明！”。

现在我们的库已经编写完成，接下来让我们构建它。

### 把我们的代码编译到 WebAssembly

为了能够正确的编译我们的代码，首先我们需要配置 `Cargo.toml`。打开这个文件，将内容改为如下所示：

```toml
[package]
name = "hello-wasm"
version = "0.1.0"
authors = ["你的名字 <you@example.com>"]
description = "一个使用 wasm-pack 的示例项目"
license = "MIT/Apache-2.0"
repository = "https://github.com/yourgithubusername/hello-wasm"
edition = "2021"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

你需要改为自己的仓库，同时 Cargo 需要通过 `git` 来完善 `authors` 部分。

需要添加的主要部分是 `[package]`。`[lib]` 部分告诉 Rust 为我们的包构建一个 `cdylib` 版本；本教程中我们将不深入探讨它的具体含义。有关更多信息，请参阅 [Cargo](https://doc.rust-lang.org/cargo/guide/) 和 [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html) 文档。

最后一个部分是 `[dependencies]` 部分。在这里，我们需要告诉 Cargo 希望依赖哪个版本的 `wasm-bindgen`；在本例中，即任何 `0.2.z` 版本（但不包括 `0.3.0` 及以上版本）。

### 构建包

既然已经完成了配置，接下来我们就来构建该包。我们将把生成的代码用于原生 ES 模块和 Node.js 中。为此，我们将使用 `wasm-pack build` 中的 [`--target` 参数](https://rustwasm.github.io/docs/wasm-pack/commands/build.html#target) 来指定要生成的 WebAssembly 和 JavaScript 的类型。

首先，在 `hello-wasm` 目录中运行以下命令：

```bash
wasm-pack build --target web
```

这个命令将做一系列事情。想了解详细情况，查看[这篇在 Mozilla Hacks 上的文章](https://hacks.mozilla.org/2018/04/hello-wasm-pack/)。简单来说，`wasm-pack build` 将做以下几件事：

1. 将你的 Rust 代码编译成 WebAssembly。
2. 对该 WebAssembly 运行 `wasm-bindgen`，生成一个 JavaScript 文件，将该 WebAssembly 文件封装成浏览器可识别的模块。
3. 创建一个 `pkg` 文件夹并将 JavaScript 文件和生成的 WebAssembly 代码移到其中。
4. 读取你的 `Cargo.toml` 并生成相应的 `package.json`。
5. 复制你的 `README.md`（如果有）到文件夹中。

最终生成的包位于 `pkg` 目录中。

## 在 web 上使用我们的包

既然我们已经得到了一个编译好的 Wasm 模块，那就让我们在浏览器中运行它吧。首先，我们在项目根目录下创建一个名为 `index.html` 的文件，这样最终的项目结构如下：

```plain
├── Cargo.lock
├── Cargo.toml
├── index.html  <-- 新的 index.html 文件
├── pkg
│   ├── hello_wasm.d.ts
│   ├── hello_wasm.js
│   ├── hello_wasm_bg.wasm
│   ├── hello_wasm_bg.wasm.d.ts
│   └── package.json
├── src
│   └── lib.rs
└── target
    ├── CACHEDIR.TAG
    ├── release
    └── wasm32-unknown-unknown
```

将以下内容放到 `index.html` 文件：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>hello-wasm 示例</title>
  </head>
  <body>
    <script type="module">
      import init, { greet } from "./pkg/hello_wasm.js";

      init().then(() => {
        greet("WebAssembly");
      });
    </script>
  </body>
</html>
```

该文件中的脚本导入了 JavaScript 粘合代码，初始化了 Wasm 模块，并调用了我们用 Rust 编写的 `greet` 函数。

使用本地 Web 服务器（例如 `python3 -m http.server`）托管项目根目录。如果不确定如何操作，请参阅[运行一个简单的本地 HTTP 服务器](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#运行一个简单的本地_http_服务器)。

> [!NOTE]
> 请使用支持 `application/wasm` MIME 类型的最新 Web 服务器。较旧的 Web 服务器可能尚不支持该类型。

从 Web 服务器加载 `index.html`（如果你使用的是 Python3 示例，则为：`http://localhost:8000`）。屏幕上会弹出一个提示框，显示 `你好，WebAssembly！`。我们已经成功实现了从 JavaScript 调用 Rust 以及从 Rust 调用 JavaScript。

## 将我们的包发布到 npm

我们正在构建一个 npm 包，因此你需要安装 Node.js 和 npm。

要获取 Node.js 和 npm，请访问[获取 npm！](https://docs.npmjs.com/getting-started/) 页面并按照说明操作。本教程针对 Node.js 20 版本。若需在不同 Node 版本之间切换，可使用 [nvm](https://github.com/nvm-sh/nvm)。

要在 npm 中使用 WebAssembly 模块，我们需要进行一些修改。首先，让我们将 Rust 代码重新编译，并将目标设置为 `bundler` 选项：

```bash
wasm-pack build --target bundler
```

我们现在有了一个 npm 包，使用 Rust 编写，但已经被编译为 WebAssembly 了。现在这个包已经可以被 JavaScript 使用了，而且使用它完全不需要用户安装 Rust；包中的代码是 WebAssembly 代码，而不是 Rust 源码！

### 在 web 上使用 npm 包

让我们来构建一个使用我们新开发的 npm 包的网站。许多人通过各种打包工具来使用 npm 包，在本教程中，我们将使用其中一种——`webpack`。这个示例虽然稍显复杂，但展示了一个真实的应用场景。

让我们在 `hello-wasm` 目录下创建一个名为 `site` 的新目录来试一试。我们尚未将该包发布到 npm 注册表，因此可以使用 `npm i /path/to/package` 从本地版本进行安装。也可以使用 [`npm link`](https://docs.npmjs.com/cli/commands/npm-link/)，但在本演示中，从本地路径安装更为方便：

```bash
mkdir site && cd site
npm i ../pkg
```

安装 `webpack` 开发依赖：

```bash
npm i -D webpack@5 webpack-cli@5 webpack-dev-server@5 copy-webpack-plugin@12
```

接下来配置 webpack。创建 `webpack.config.js` 并将以下内容填入：

```js
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development",
  experiments: {
    asyncWebAssembly: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "index.html" }],
    }),
  ],
};
```

在 `package.json` 中，可以添加 `build` 和 `serve` 脚本，这些脚本将使用我们刚刚创建的配置文件运行 webpack：

```json
{
  "scripts": {
    "build": "webpack --config webpack.config.js",
    "serve": "webpack serve --config webpack.config.js --open"
  },
  "dependencies": {
    "hello-wasm": "file:../pkg"
  },
  "devDependencies": {
    "copy-webpack-plugin": "^12.0.2",
    "webpack": "^5.97.1",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.1.0"
  }
}
```

接下来，创建 `index.js` 文件，并填入这些内容：

```js
import * as wasm from "hello-wasm";

wasm.greet("npm 中的 WebAssembly");
```

这段代码从 `node_modules` 文件夹中导入了该模块，并调用了 `greet` 函数，将字符串 `"npm 中的 WebAssembly"` 作为参数传递进去。请注意，这里并没有什么特别之处，但我们却调用了 Rust 代码。从 JavaScript 代码的角度来看，这只是一个普通的模块。

最后，添加一个 HTML 文件来加载该 JavaScript 代码。创建一个 `index.html` 文件，并添加以下内容：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>hello-wasm 示例</title>
  </head>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

`hello-wasm/site` 目录应如下所示：

```plain
├── node_modules
├── index.html
├── index.js
├── package-lock.json
├── package.json
└── webpack.config.js
```

已经创建完所有文件了，让我们运行一下吧：

```bash
npm run serve
```

这将启动一个 Web 服务器并打开 `http://localhost:8080`。屏幕上应会显示一个包含文本 `你好，npm 中的 WebAssembly！` 的提示框。我们已成功使用 npm 调用了 Rust 模块！

如果你希望在本地开发环境之外使用你的 WebAssembly，可以在 `hello-wasm` 目录中使用 `pack` 和 `publish` 命令发布该包：

```bash
wasm-pack pack
npm notice
npm notice 📦  hello-wasm@0.1.0
npm notice Tarball Contents
npm notice 2.9kB hello_wasm_bg.js
npm notice 16.7kB hello_wasm_bg.wasm
npm notice 85B hello_wasm.d.ts
npm notice 182B hello_wasm.js
npm notice 549B package.json
...
hello-wasm-0.1.0.tgz
[INFO]: 🎒  packed up your package!
```

要发布到 npm，需要一个 [npm 账户](https://www.npmjs.com/)，并通过 [`npm login`](https://docs.npmjs.com/cli/commands/npm-login/) 授权设备。准备就绪后，可以使用 `wasm-pack` 进行发布，该工具会在后台调用 `npm publish`：

```bash
wasm-pack publish
```

## 参见

- [rust-lang.org](https://rust-lang.org/zh-CN)
- [wasm-bindgen](https://github.com/wasm-bindgen/wasm-bindgen)
- [wasm-pack](https://github.com/wasm-bindgen/wasm-pack)
