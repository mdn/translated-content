---
title: 编译 Rust 为 WebAssembly
slug: WebAssembly/Rust_to_Wasm
---

{{WebAssemblySidebar}}

如果你写了一些 Rust 代码，你可以把它编译成 WebAssembly！这份教程将带你编译 Rust 项目为 wasm 并在一个现存的 web 应用中使用它。

## Rust 和 WebAssembly 用例

Rust 和 WebAssembly 有两大主要用例：

- 构建完整应用 —— 整个 Web 应用都基于 Rust 开发！
- 构建应用的组成部分 —— 在现存的 JavaScript 前端中使用 Rust。

目前，Rust 团队正专注于第二种用例，因此我们也将着重介绍它。对于第一种用例，可以参阅 [`yew`](https://github.com/DenisKolodin/yew) 这类项目。

在本教程中，我们将使用 Rust 的 npm 包构建工具 `wasm-pack` 来构建一个 npm 包。这个包只包含 WebAssembly 和 JavaScript 代码，以便包的用户无需安装 Rust 就能使用。他们甚至不需要知道这里包含 WebAssembly！

## 安装 Rust 环境

让我们看看安装 Rust 环境的所有必要步骤。

### 安装 Rust

前往 [Install Rust](https://www.rust-lang.org/install.html) 页面并跟随指示安装 Rust。这里会安装一个名为“rustup”的工具，这个工具能让你管理多个不同版本的 Rust。默认情况下，它会安装用于惯常 Rust 开发的 stable 版本 Rust Release。Rustup 会安装 Rust 的编译器 `rustc`、Rust 的包管理工具 `cargo`、Rust 的标准库 `rust-std` 以及一些有用的文档 `rust-docs`。

> **备注：** 需要注意，在安装完成后，你需要把 cargo 的 `bin` 目录添加到你系统的 `PATH` 。一般来说它会自动添加，但需要你重启终端后才会生效。

### wasm-pack

要构建我们的包，我们需要一个额外工具 `wasm-pack`。它会帮助我们把我们的代码编译成 WebAssembly 并制造出正确的 `npm` 包。使用下面的命令可以下载并安装它：

```bash
cargo install wasm-pack
```

### 安装 Node.js 并获取 npm 账户

在这个例子中我们将会构建一个 npm 包，因此你需要确保安装 Node.js 和 npm 已经安装。另外，我们将会把包发布到 npm 上，因此你还需要一个 npm 账号。它们是免费的。发布这个包并不是必须的，但是发布它非常简单，因此在本例中我们默认你会发布这个包。

在 [Get npm!](https://www.npmjs.com/get-npm) 页面按照说明下载并安装 Node.js 和 npm。在选择版本时，选择一个你喜欢的版本；本例不限定特定版本。

在 [npm signup page](https://www.npmjs.com/signup) 注册 npm 账户，并填写表格。

接下来，在命令行中运行 `npm adduser`:

```bash
> npm adduser
Username: yournpmusername
Password:
Email: (this IS public) you@example.com
```

你需要完善你的用户名，密码和邮箱。如果成功了，你将会看到：

```bash
Logged in as yournpmusername on https://registry.npmjs.org/.
```

如果并未正常运行，请联系 npm 解决。

## 构建我们的 WebAssembly npm 包

万事俱备，来创建一个新的 Rust 包吧。打开你用来存放你私人项目的目录，做这些事：

```bash
$ cargo new --lib hello-wasm
     Created library `hello-wasm` project
```

这里会在名为 `hello-wasm` 的子目录里创建一个新的库，里面有下一步之前你所需要的一切：

```shell
+-- Cargo.toml
+-- src
    +-- lib.rs
```

首先，我们有一个 `Cargo.toml` 文件，这是我们配置构建的方式。如果你用过 Bundler 的 `Gemfile` 或者 npm 的 `package.json`，你应该会感到很熟悉。Cargo 的用法和它们类似。

接下来，Cargo 在 `src/lib.rs` 生成了一些 Rust 代码：

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
```

我们完全不需要使用这些测试代码，所以继续吧，我们删掉它。

### 来写点 Rust 代码吧！

让我们在 `src/lib.rs` 写一些代码替换掉原来的：

```rust
extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

这就是我们这个 Rust 项目的内容。它有三个主要部分，让我们按顺序来讲。这里将会给出一个缺少部分细节的高级说明；如果想要了解更多 Rust 知识，请查看在线书籍 [The Rust Programming Language](https://doc.rust-lang.org/book/)。

#### 使用 `wasm-bindgen` 在 Rust 与 JavaScript 之间通信

第一部分看起来像这样：

```rust
extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;
```

第一行就像在说“哇 Rust，我们在用一个叫做 wasm_bindgen 的库”。在 Rust 当中，库被称为“crates”，因为我们使用的是一个外部库，所以有 "extern"。

明白了吗？ **Cargo ships crates**.

第三行包括了一个将库中的代码引入到你的代码中的使用命令。在这个情况下，将会引入 `wasm_bindgen::prelude` 的全部模块。我们将在下一节中使用这些内容。

在我们开始下一节之前，我们将讲一讲 `wasm-bindgen`。

`wasm-pack` 使用另一个工具 `wasm-bindgen` 来提供 JavaScript 和 Rust 类型之间的桥梁。它允许 JavaScript 使用字符串调用 Rust API，或调用 Rust 函数来捕获 JavaScript 异常。

我们将在我们的包中使用 `wasm-bindgen` 的功能。事实上，这是下一节的内容！

#### 在 Rust 中调用来自 JavaScript 的外部函数

接下来的部分看起来像这样：

```rust
#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}
```

在 `#[]` 中的内容叫做 "属性"，并以某种方式改变下面的语句。在这种情况下，下面的语句是一个 `extern`，它将告诉 Rust that 我们想调用一些外部定义的函数。这个属性告诉我们 "wasm-bindgen 知道如何找到这些函数"。

第三行是用 Rust 写的函数签名。它告诉我们 "`alert` 函数接受一个叫做 s 的字符串作为参数。"

你可能会疑惑这个函数是什么，你的疑惑可能是正确的：这是 [the `alert` function provided by JavaScript](/zh-CN/docs/Web/API/Window/alert)！我们将在下一节中调用这个函数。

当你想调用新的 JavaScript 函数时，你可以在这里写他们，`wasm-bindgen` 将负责为您设置一切。并非一切都得到支持，但我们正在努力！如果缺少某些内容，请 [file bugs](https://github.com/rustwasm/wasm-bindgen/issues/new) 。

#### 编写能够在 JavaScript 中调用的 Rust 函数

最后一部分是这样的：

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

我们又看到了 `#[wasm_bindgen]` 属性。在这里，它并非定义一个 `extern` 块，而是 `fn，`这代表我们希望能够在 JavaScript 中使用这个 Rust 函数。这和 `extern` 正相反：我们并非引入函数，而是要把函数给外部世界使用。

这个函数的名字是 `greet`，它需要一个参数，一个字符串（写作 `&str`）。它调用了我们前面在 `extern` 块中引入的 `alert` 函数。它传递了一个让我们串联字符串的 `format!` 宏的调用。

`format!` 在这里有两个参数，一个格式化字符串和一个要填入的变量。格式化字符串是 `"Hello, {}!"` 部分。它可以包含一个或多个 `{}`，变量将会被填入其中。传递的变量是 `name`，也就是这个函数的参数。所以当我们调用 `greet("Steve")`时我们就能看到 `"Hello, Steve!"`。

这个传递到了 `alert()`，所以当我们调用这个函数时，我们应该能看到他谈弹出了一个带有 "Hello, Steve!" 的消息框。

我们的库写完了，是时候构建它了。

### 把我们的代码编译到 WebAssembly

为了能够正确的编译我们的代码，首先我们需要配置 `Cargo.toml`。打开这个文件，将内容改为如下所示：

```toml
[package]
name = "hello-wasm"
version = "0.1.0"
authors = ["Your Name <you@example.com>"]
description = "A sample project with wasm-pack"
license = "MIT/Apache-2.0"
repository = "https://github.com/yourgithubusername/hello-wasm"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

你需要改为自己的仓库，同时 Cargo 需要通过 `git` 来完善 `authors` 部分。

最重要的是添加底下的部分。第一个部分 — `[lib]` — 告诉 Rust 为我们的包建立一个 `cdylib` 版本；在本教程中我们不会讲解它的含义。有关更多信息，请参阅 [Cargo](https://doc.rust-lang.org/cargo/guide/) 和 [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html) 文档。

第二个部分是 `[dependencies]` 部分。在这里我们告诉 Cargo 我们需要依赖哪个版本的 `wasm-bindgen` ；在这个例子中，它是 `0.2.z` 版本的 (不是 `0.3.0` 或者其他版本)。

### 构建包

现在我们已经完成了所有配置项，开始构建吧！在命令行输入以下命令：

```bash
wasm-pack build --scope mynpmusername
```

这个命令将做一系列事情 (这会花一些时间，特别是当你第一次运行 `wasm-pack`)。想了解详细情况，查看[这篇在 Mozilla Hacks 上的文章](https://hacks.mozilla.org/2018/04/hello-wasm-pack/)。简单来说，`wasm-pack build` 将做以下几件事：

1. 将你的 Rust 代码编译成 WebAssembly。
2. 在编译好的 WebAssembly 代码基础上运行 `wasm-bindgen`，生成一个 JavaScript 文件将 WebAssembly 文件包装成一个模块以便 npm 能够识别它。
3. 创建一个 `pkg` 文件夹并将 JavaScript 文件和生成的 WebAssembly 代码移到其中。
4. 读取你的 `Cargo.toml` 并生成相应的 `package.json`。
5. 复制你的 `README.md` (如果有的话) 到文件夹中。

最后的结果？你在 `pkg` 文件夹下有了一个 npm 包。

#### 对代码体积的一些说明

如果你检查生成的 WebAssembly 文件体积，它可能有几百 kB。我们没有让 Rust 去压缩生成的代码，从而大大减少生成包的体积。这和本次教程主题无关，但如果你想了解更多，查看 Rust WebAssembly 工作组文档上关于 [减少 .wasm 体积](https://rustwasm.github.io/book/game-of-life/code-size.html#shrinking-wasm-size) 的说明。

### 把我们的包发布到 npm

把我们的新包发布到 npm registry:

```bash
cd pkg
npm publish --access=public
```

我们现在有了一个 npm 包，使用 Rust 编写，但已经被编译为 WebAssembly 了。现在这个包已经可以被 JavaScript 使用了，而且使用它完全不需要用户安装 Rust；包中的代码是 WebAssembly 代码，而不是 Rust 源码！

## 在网站上使用我们的包

让我们建立一个使用我们包的网站！人们通过各种打包工具使用 npm 包，在本教程中，我们将使用 `webpack`。它比其他某些打包工具稍微复杂一点，但展示了更实际的用法。

让我们离开`pkg`目录，并创建一个新目录`site`，尝试以下操作：

```bash
cd ../..
mkdir site
cd site
```

创建一个新文件 `package.json`，然后输入如下代码：

```json
{
  "scripts": {
    "serve": "webpack-dev-server"
  },
  "dependencies": {
    "@mynpmusername/hello-wasm": "^0.1.0"
  },
  "devDependencies": {
    "webpack": "^4.25.1",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.10"
  }
}
```

请注意，您需要在依赖项部分的 `@` 之后填写自己的用户名。

接下来，我们需要配置 Webpack。创建 `webpack.config.js` 并输入：

```js
const path = require("path");
module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development",
};
```

现在我们需要一个 HTML 文件。创建一个`index.html`并写入如下内容：

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>hello-wasm example</title>
  </head>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

最后，从 HTML 文件中引用`index.js`：

```js
const js = import("./node_modules/@yournpmusername/hello-wasm/hello_wasm.js");
js.then((js) => {
  js.greet("WebAssembly");
});
```

请注意，您需要再次填写您的 npm 用户名。

这将从`node_modules`文件夹导入我们的模块。这不是最佳做法，但这里只做一个演示，因此暂时就这样用。加载后，它将从该模块调用`greet`函数，并传入字符串“WebAssembly”参数。注意这里看上去没有什么特别的，但是我们正在调用 Rust 代码！就 JavaScript 代码所知，这只是一个普通模块。

我们已经完成了所有的文件！让我们试一下：

```bash
npm install
npm run serve
```

这将启动一个 Web 服务器。访问 `http://localhost:8080`，你应该会在屏幕上看到一个内容为 `Hello, WebAssembly!` 的警告框。我们已经成功地从 JavaScript 调用了 Rust，并从 Rust 调用了 JavaScript。

## 结论

本教程到此结束。希望你觉得它有用。

在这个领域，有很多工作正在推进当中。如果你希望它变得更好，可以参阅 [Rust Webassembly 工作组](http://fitzgeraldnick.com/2018/02/27/wasm-domain-working-group.html)。
