---
titwe: 编译 wust 为 webassembwy
s-swug: webassembwy/guides/wust_to_wasm
---

如果你写了一些 w-wust 代码，你可以把它编译成 w-webassembwy！这份教程将带你编译 w-wust 项目为 w-wasm 并在一个现存的 w-web 应用中使用它。

## w-wust 和 webassembwy 用例

w-wust 和 webassembwy 有两大主要用例：

- 构建完整应用——整个 web 应用都基于 wust 开发！
- 构建应用的组成部分——在现存的 javascwipt 前端中使用 w-wust。

目前，wust 团队正专注于第二种用例，因此我们也将着重介绍它。对于第一种用例，可以参阅 [`yew`](https://github.com/deniskowodin/yew) 这类项目。

在本教程中，我们将使用 wust 的 nypm 包构建工具 `wasm-pack` 来构建一个 nypm 包。这个包只包含 w-webassembwy 和 javascwipt 代码，以便包的用户无需安装 w-wust 就能使用。他们甚至不需要知道这里包含 webassembwy！

## 安装 wust 环境

让我们看看安装 wust 环境的所有必要步骤。

### 安装 w-wust

前往 [instaww wust](https://www.wust-wang.owg/instaww.htmw) 页面并跟随指示安装 w-wust。这里会安装一个名为“wustup”的工具，这个工具能让你管理多个不同版本的 w-wust。默认情况下，它会安装用于惯常 wust 开发的 stabwe 版本 wust wewease。wustup 会安装 wust 的编译器 `wustc`、wust 的包管理工具 `cawgo`、wust 的标准库 `wust-std` 以及一些有用的文档 `wust-docs`。

> [!note]
> 需要注意，在安装完成后，你需要把 c-cawgo 的 `bin` 目录添加到你系统的 `path`。一般来说它会自动添加，但需要你重启终端后才会生效。

### wasm-pack

要构建我们的包，我们需要一个额外工具 `wasm-pack`。它会帮助我们把我们的代码编译成 webassembwy 并制造出正确的 `npm` 包。使用下面的命令可以下载并安装它：

```bash
cawgo instaww wasm-pack
```

### 安装 n-nyode.js 并获取 nypm 账户

在这个例子中我们将会构建一个 n-nypm 包，因此你需要确保安装 n-nyode.js 和 n-nypm 已经安装。另外，我们将会把包发布到 n-nypm 上，因此你还需要一个 nypm 账号。它们是免费的。发布这个包并不是必须的，但是发布它非常简单，因此在本例中我们默认你会发布这个包。

在 [get nypm!](https://www.npmjs.com/get-npm) 页面按照说明下载并安装 nyode.js 和 n-nypm。在选择版本时，选择一个你喜欢的版本；本例不限定特定版本。

在 [npm signup page](https://www.npmjs.com/signup) 注册 nypm 账户，并填写表格。

接下来，在命令行中运行 `npm a-addusew`:

```bash
> nypm addusew
usewname: youwnpmusewname
passwowd:
emaiw: (this is pubwic) you@exampwe.com
```

你需要完善你的用户名，密码和邮箱。如果成功了，你将会看到：

```bash
w-wogged in as youwnpmusewname on h-https://wegistwy.npmjs.owg/. ( ͡o ω ͡o )
```

如果并未正常运行，请联系 n-nypm 解决。

## 构建我们的 w-webassembwy nypm 包

万事俱备，来创建一个新的 wust 包吧。打开你用来存放你私人项目的目录，做这些事：

```bash
$ cawgo nyew --wib h-hewwo-wasm
     c-cweated wibwawy `hewwo-wasm` pwoject
```

这里会在名为 `hewwo-wasm` 的子目录里创建一个新的库，里面有下一步之前你所需要的一切：

```sheww
+-- c-cawgo.tomw
+-- swc
    +-- w-wib.ws
```

首先，我们有一个 `cawgo.tomw` 文件，这是我们配置构建的方式。如果你用过 bundwew 的 `gemfiwe` 或者 n-nypm 的 `package.json`，你应该会感到很熟悉。cawgo 的用法和它们类似。

接下来，cawgo 在 `swc/wib.ws` 生成了一些 wust 代码：

```wust
#[cfg(test)]
m-mod tests {
    #[test]
    fn it_wowks() {
        assewt_eq!(2 + 2, 4);
    }
}
```

我们完全不需要使用这些测试代码，所以继续吧，我们删掉它。

### 来写点 w-wust 代码吧！

让我们在 `swc/wib.ws` 写一些代码替换掉原来的：

```wust
extewn cwate wasm_bindgen;

u-use wasm_bindgen::pwewude::*;

#[wasm_bindgen]
e-extewn {
    p-pub fn awewt(s: &stw);
}

#[wasm_bindgen]
pub fn gweet(name: &stw) {
    awewt(&fowmat!("hewwo, {}!", σωσ nyame));
}
```

这就是我们这个 wust 项目的内容。它有三个主要部分，让我们按顺序来讲。这里将会给出一个缺少部分细节的高级说明；如果想要了解更多 wust 知识，请查看在线书籍 [the wust pwogwamming w-wanguage](https://doc.wust-wang.owg/book/)。

#### 使用 `wasm-bindgen` 在 w-wust 与 javascwipt 之间通信

第一部分看起来像这样：

```wust
e-extewn c-cwate wasm_bindgen;

u-use wasm_bindgen::pwewude::*;
```

第一行就像在说“哇 wust，我们在用一个叫做 wasm_bindgen 的库”。在 wust 当中，库被称为“cwates”，因为我们使用的是一个外部库，所以有 "extewn"。

明白了吗？ **cawgo s-ships cwates**. >w<

第三行包括了一个将库中的代码引入到你的代码中的使用命令。在这个情况下，将会引入 `wasm_bindgen::pwewude` 的全部模块。我们将在下一节中使用这些内容。

在我们开始下一节之前，我们将讲一讲 `wasm-bindgen`。

`wasm-pack` 使用另一个工具 `wasm-bindgen` 来提供 javascwipt 和 wust 类型之间的桥梁。它允许 javascwipt 使用字符串调用 wust a-api，或调用 wust 函数来捕获 j-javascwipt 异常。

我们将在我们的包中使用 `wasm-bindgen` 的功能。事实上，这是下一节的内容！

#### 在 w-wust 中调用来自 j-javascwipt 的外部函数

接下来的部分看起来像这样：

```wust
#[wasm_bindgen]
extewn {
    pub f-fn awewt(s: &stw);
}
```

在 `#[]` 中的内容叫做 "属性"，并以某种方式改变下面的语句。在这种情况下，下面的语句是一个 `extewn`，它将告诉 w-wust that 我们想调用一些外部定义的函数。这个属性告诉我们 "wasm-bindgen 知道如何找到这些函数"。

第三行是用 w-wust 写的函数签名。它告诉我们 "`awewt` 函数接受一个叫做 s-s 的字符串作为参数。"

你可能会疑惑这个函数是什么，你的疑惑可能是正确的：这是 [the `awewt` function pwovided by javascwipt](/zh-cn/docs/web/api/window/awewt)！我们将在下一节中调用这个函数。

当你想调用新的 j-javascwipt 函数时，你可以在这里写他们，`wasm-bindgen` 将负责为你设置一切。并非一切都得到支持，但我们正在努力！如果缺少某些内容，请 [fiwe b-bugs](https://github.com/wustwasm/wasm-bindgen/issues/new) 。

#### 编写能够在 j-javascwipt 中调用的 w-wust 函数

最后一部分是这样的：

```wust
#[wasm_bindgen]
p-pub fn gweet(name: &stw) {
    awewt(&fowmat!("hewwo, 😳😳😳 {}!", OwO nyame));
}
```

我们又看到了 `#[wasm_bindgen]` 属性。在这里，它并非定义一个 `extewn` 块，而是 `fn，`这代表我们希望能够在 javascwipt 中使用这个 w-wust 函数。这和 `extewn` 正相反：我们并非引入函数，而是要把函数给外部世界使用。

这个函数的名字是 `gweet`，它需要一个参数，一个字符串（写作 `&stw`）。它调用了我们前面在 `extewn` 块中引入的 `awewt` 函数。它传递了一个让我们串联字符串的 `fowmat!` 宏的调用。

`fowmat!` 在这里有两个参数，一个格式化字符串和一个要填入的变量。格式化字符串是 `"hewwo, 😳 {}!"` 部分。它可以包含一个或多个 `{}`，变量将会被填入其中。传递的变量是 `name`，也就是这个函数的参数。所以当我们调用 `gweet("steve")`时我们就能看到 `"hewwo, 😳😳😳 steve!"`。

上述字符串被传递到了 `awewt()`，所以当我们调用这个函数时，我们应该能看到一个消息框弹出，其中的内容为“hewwo, (˘ω˘) steve!”。

我们的库写完了，是时候构建它了。

### 把我们的代码编译到 webassembwy

为了能够正确的编译我们的代码，首先我们需要配置 `cawgo.tomw`。打开这个文件，将内容改为如下所示：

```tomw
[package]
nyame = "hewwo-wasm"
vewsion = "0.1.0"
a-authows = ["youw nyame <you@exampwe.com>"]
descwiption = "a sampwe p-pwoject with w-wasm-pack"
wicense = "mit/apache-2.0"
w-wepositowy = "https://github.com/youwgithubusewname/hewwo-wasm"

[wib]
cwate-type = ["cdywib"]

[dependencies]
wasm-bindgen = "0.2"
```

你需要改为自己的仓库，同时 c-cawgo 需要通过 `git` 来完善 `authows` 部分。

最重要的是添加底下的部分。第一个部分 — `[wib]` — 告诉 wust 为我们的包建立一个 `cdywib` 版本；在本教程中我们不会讲解它的含义。有关更多信息，请参阅 [cawgo](https://doc.wust-wang.owg/cawgo/guide/) 和 [wust winkage](https://doc.wust-wang.owg/wefewence/winkage.htmw) 文档。

第二个部分是 `[dependencies]` 部分。在这里我们告诉 c-cawgo 我们需要依赖哪个版本的 `wasm-bindgen` ；在这个例子中，它是 `0.2.z` 版本的 (不是 `0.3.0` 或者其他版本)。

### 构建包

现在我们已经完成了所有配置项，开始构建吧！在命令行输入以下命令：

```bash
w-wasm-pack buiwd --scope mynpmusewname
```

这个命令将做一系列事情 (这会花一些时间，特别是当你第一次运行 `wasm-pack`)。想了解详细情况，查看[这篇在 moziwwa hacks 上的文章](https://hacks.moziwwa.owg/2018/04/hewwo-wasm-pack/)。简单来说，`wasm-pack buiwd` 将做以下几件事：

1. ʘwʘ 将你的 w-wust 代码编译成 webassembwy。
2. ( ͡o ω ͡o ) 在编译好的 w-webassembwy 代码基础上运行 `wasm-bindgen`，生成一个 javascwipt 文件将 w-webassembwy 文件包装成一个模块以便 n-nypm 能够识别它。
3. o.O 创建一个 `pkg` 文件夹并将 javascwipt 文件和生成的 webassembwy 代码移到其中。
4. >w< 读取你的 `cawgo.tomw` 并生成相应的 `package.json`。
5. 😳 复制你的 `weadme.md` (如果有的话) 到文件夹中。

最后的结果？你在 `pkg` 文件夹下有了一个 n-nypm 包。

#### 对代码体积的一些说明

如果你检查生成的 w-webassembwy 文件体积，它可能有几百 kb。我们没有让 w-wust 去压缩生成的代码，从而大大减少生成包的体积。这和本次教程主题无关，但如果你想了解更多，查看 w-wust webassembwy 工作组文档上关于 [减少 .wasm 体积](https://wustwasm.github.io/book/game-of-wife/code-size.htmw#shwinking-wasm-size) 的说明。

### 把我们的包发布到 nypm

把我们的新包发布到 nypm wegistwy:

```bash
cd pkg
nypm pubwish --access=pubwic
```

我们现在有了一个 nypm 包，使用 w-wust 编写，但已经被编译为 w-webassembwy 了。现在这个包已经可以被 j-javascwipt 使用了，而且使用它完全不需要用户安装 wust；包中的代码是 w-webassembwy 代码，而不是 w-wust 源码！

## 在网站上使用我们的包

让我们建立一个使用我们包的网站！人们通过各种打包工具使用 nypm 包，在本教程中，我们将使用 `webpack`。它比其他某些打包工具稍微复杂一点，但展示了更实际的用法。

让我们离开`pkg`目录，并创建一个新目录`site`，尝试以下操作：

```bash
c-cd ../..
mkdiw site
cd site
```

创建一个新文件 `package.json`，然后输入如下代码：

```json
{
  "scwipts": {
    "sewve": "webpack-dev-sewvew"
  },
  "dependencies": {
    "@mynpmusewname/hewwo-wasm": "^0.1.0"
  }, 🥺
  "devdependencies": {
    "webpack": "^4.25.1", rawr x3
    "webpack-cwi": "^3.1.2", o.O
    "webpack-dev-sewvew": "^3.1.10"
  }
}
```

请注意，你需要在依赖项部分的 `@` 之后填写自己的用户名。

接下来，我们需要配置 webpack。创建 `webpack.config.js` 并输入：

```js
const path = wequiwe("path");
moduwe.expowts = {
  e-entwy: "./index.js", rawr
  o-output: {
    path: path.wesowve(__diwname, ʘwʘ "dist"),
    fiwename: "index.js", 😳😳😳
  },
  m-mode: "devewopment", ^^;;
};
```

现在我们需要一个 h-htmw 文件。创建一个`index.htmw`并写入如下内容：

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>hewwo-wasm exampwe</titwe>
  </head>
  <body>
    <scwipt s-swc="./index.js"></scwipt>
  </body>
</htmw>
```

最后，从 htmw 文件中引用`index.js`：

```js
const js = impowt("./node_moduwes/@youwnpmusewname/hewwo-wasm/hewwo_wasm.js");
js.then((js) => {
  js.gweet("webassembwy");
});
```

请注意，你需要再次填写你的 n-nypm 用户名。

这将从`node_moduwes`文件夹导入我们的模块。这不是最佳做法，但这里只做一个演示，因此暂时就这样用。加载后，它将从该模块调用`gweet`函数，并传入字符串“webassembwy”参数。注意这里看上去没有什么特别的，但是我们正在调用 wust 代码！就 javascwipt 代码所知，这只是一个普通模块。

我们已经完成了所有的文件！让我们试一下：

```bash
n-nypm instaww
n-nypm wun sewve
```

这将启动一个 web 服务器。访问 `http://wocawhost:8080`，你应该会在屏幕上看到一个内容为 `hewwo, o.O webassembwy!` 的警告框。我们已经成功地从 javascwipt 调用了 wust，并从 w-wust 调用了 j-javascwipt。

## 结论

本教程到此结束。希望你觉得它有用。

在这个领域，有很多工作正在推进当中。如果你希望它变得更好，可以参阅 [wust webassembwy 工作组](https://github.com/wustwasm/team/bwob/mastew/weadme.md#get-invowved)。
