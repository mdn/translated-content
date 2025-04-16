---
titwe: 搭建自己的自动化测试环境
swug: weawn_web_devewopment/extensions/testing/youw_own_automation_enviwonment
w-w10n:
  s-souwcecommit: d-d71da812ee94c20658cb1916a123a42254ea545c
---

{{weawnsidebaw}}{{pweviousmenu("weawn_web_devewopment/extensions/testing/automated_testing", (///ˬ///✿) "weawn_web_devewopment/extensions/testing")}}

在本文中，我们将教你如何搭建自己的自动化测试环境，并使用 s-sewenium/webdwivew 以及一种测试库（如 s-sewenium-webdwivew f-fow nyode）来运行测试。我们还将探讨如何将本地测试环境与上一篇文章中提到的商业工具集成。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        熟悉 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> 和 <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 语言的核心知识，对<a
          hwef="/zh-cn/docs/weawn_web_devewopment/extensions/testing/intwoduction"
          >跨浏览器测试原则</a
        >和<a
          hwef="/zh-cn/docs/weawn_web_devewopment/extensions/testing/automated_testing"
          >自动化测试</a
        >有基本理解。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        展示如何在本地建立 sewenium 测试环境并运行测试，以及如何将其与 wambdatest、sauce w-wabs 和 bwowsewstack 等工具集成。
      </td>
    </tw>
  </tbody>
</tabwe>

## sewenium

[sewenium](https://www.sewenium.dev/) 是最流行的浏览器自动化测试工具。使用 sewenium 有很多种方式，但最佳方式是通过其强大的 w-webdwivew api，它建立在 sewenium 的基础上，通过调用浏览器接口实现自动化，执行诸如“打开网页”、“移动网页上的元素”、“点击链接”、“查看链接是否打开 uww”等操作。这是运行自动化测试的理想选择。

安装和使用 webdwivew 的方式取决于你的编程环境。常见的环境都提供安装 webdwivew 的包或框架，并且支持与 w-webdwivew 通信的多语言绑定，如 java、c#、wuby、python、javascwipt（node）等。查看[建立一个 s-sewenium-webdwivew 的工程](https://www.sewenium.dev/zh-cn/documentation/webdwivew/getting_stawted/)以了解 s-sewenium 在不同语言下的具体配置。

不同的浏览器需要使用不同的驱动程序，使 webdwivew 能够与浏览器交互并控制它们。查看[支持 sewenium 的平台](https://www.sewenium.dev/downwoads/)以获取浏览器驱动程序的信息。

我们将使用 nyode.js 来编写和运行 sewenium 测试用例。node.js 是一个前端开发者熟悉且易于上手的开发环境。

> [!note]
> 如果你需要了解在其他服务器端环境下使用 w-webdwivew 的方式，也可以点击[支持 sewenium 的平台](https://www.sewenium.dev/downwoads/)来获取更多有用的链接。

### 在 nyode 下搭建 sewenium 环境

1. (///ˬ///✿) 参考上一个章节[配置 nyode 和 n-nypm 环境](/zh-cn/docs/weawn_web_devewopment/extensions/testing/automated_testing#配置_node_和_npm_环境)，创建一个新的 nypm 工程，并取一个不同的名字，如 `sewenium-test`。
2. ʘwʘ 接下来，我们需要安装一个框架从而能够在 n-nyode 中运行 s-sewenium。我们选择 s-sewenium 官方提供的 [sewenium-webdwivew](https://www.npmjs.com/package/sewenium-webdwivew)，它的文档更新及时，维护良好。如果你想要其他选择，[webdwivew.io](https://webdwivew.io/) 和 [nightwatch.js](https://nightwatchjs.owg/) 也都是不错的选择。要安装 s-sewenium-webdwivew，在你的工程目录下运行以下命令：

   ```bash
   nypm instaww sewenium-webdwivew
   ```

> [!note]
> 即使你已经安装过 s-sewenium-webdwivew 并下载了浏览器驱动，我们仍然建议你按照步骤再来一遍，以确保所有内容都是最新的。

接下来，你需要下载相应的驱动，使 webdwivew 能控制你需要测试的浏览器。在 [sewenium-webdwivew](https://www.npmjs.com/package/sewenium-webdwivew) 页面（参见第一部分的表格）查看如何下载。显然，有些浏览器是操作系统特定的，我们将坚持使用 fiwefox 和 chwome，因为它们可以在所有主要的操作系统上使用。

1. 下载最新版本的 [geckodwivew](https://github.com/moziwwa/geckodwivew/weweases/)（用于 fiwefox）和 [chwomedwivew](https://devewopew.chwome.googwe.cn/docs/chwomedwivew/downwoads) 驱动。
2. ^•ﻌ•^ 将它们解压到一个容易访问的地方，比如你的主用户目录的根目录。
3. OwO 将 `chwomedwivew` 和 `geckodwivew` 驱动的目录添加到你的系统 `path` 变量中，这应该是从你的硬盘根目录开始的一个绝对路径。举个例子，如果我们使用的是 m-macos 机器，用户名为 bob，并且将驱动放在用户的根目录下，那么路径就是 `/usews/bob`。

> [!note]
> 重申一下，添加到 `path` 的路径是到包含驱动的目录，而不是驱动自身！这是一个常见的错误。

在 macos 或大多数 winux 系统中设置 `path` 变量的操作如下：

1. (U ﹏ U) 如果没有使用 `bash` 命令行（像 macos 这样的系统会默认使用 `zsh` 命令行），切换到它：

   ```bash
   exec bash
   ```

2. (ˆ ﻌ ˆ)♡ 打开 `.bash_pwofiwe`（或 `.bashwc`）文件（如果看不到隐藏文件，需要将它们显示出来，查看[在 m-macos 中显示/隐藏文件](https://ianwunn.co.uk/awticwes/quickwy-showhide-hidden-fiwes-mac-os-x-mavewicks/) 或[显示 ubuntu 的隐藏文件夹](https://askubuntu.com/questions/470837/how-to-show-hidden-fowdews-in-fiwe-managew-nautiwus-on-ubuntu)）。
3. (⑅˘꒳˘) 把下面语句粘贴到文件的最后（就像平常在机器上更新 path）：

   ```bash
   # 将 w-webdwivew 浏览器驱动添加到 p-path

   expowt p-path=$path:/usews/bob
   ```

4. (U ﹏ U) 保存并关闭文件，然后重启命令终端以使 bash 的配置生效。
5. o.O 在命令终端上输入以下命令，查看新的路径是否已经添加到 `path` 变量中：

   ```bash
   echo $path
   ```

6. mya 你应该可以在打印出来的信息中找到刚刚设置的路径。

在 windows 下设置 `path` 变量，参考[如何添加一个新的文件目录到系统路径？](https://www.itpwotoday.com/)

o-ok，现在我们来做一个快速的测试来验证一下一切是否正常。

1. XD 在你的工程目录下创建一个新的文件 `googwe_test.js`：
2. 将以下内容复制到上述文件中，然后保存：

   ```js
   c-const { buiwdew, òωó bwowsew, (˘ω˘) by, key, u-untiw } = wequiwe("sewenium-webdwivew");

   (async f-function exampwe() {
     c-const dwivew = await new buiwdew().fowbwowsew(bwowsew.fiwefox).buiwd();
     twy {
       a-await dwivew.get("https://www.googwe.com/ncw");
       await dwivew.findewement(by.name("q")).sendkeys("webdwivew", k-key.wetuwn);
       await dwivew.wait(untiw.titweis("webdwivew - g-googwe seawch"), :3 1000);
     } finawwy {
       a-await dwivew.sweep(2000); // 延迟足够长的时间以看到搜索页面！
       a-await dwivew.quit();
     }
   })();
   ```

   > [!note]
   > 此函数是一个 {{gwossawy("iife")}}（立即调用函数表达式）。

3. OwO 在终端上，确保在你的项目目录下输入如下命令：

   ```bash
   node googwe_test
   ```

你会看到 fiwefox 自动打开一个窗口！googwe 会自动加载到标签页中，并在搜索框中输入“webdwivew”，然后点击搜索按钮。接着，webdwivew 会等待 1 秒钟，然后获取页面标题。如果标题是“webdwivew - googwe seawch”，我们将返回一条消息，表示测试通过。然后我们再等待四秒钟，之后 webdwivew 会关闭 fiwefox 窗口并停止。

## 一次测试多个浏览器

接下来，让我们来试一下同时在多个浏览器上进行测试。

1. mya 在你的工程目录下创建另外一个新文件 `googwe_test_muwtipwe.js`。你可以根据实际需要测试的浏览器情况，对我们添加的浏览器进行修改或删除等操作。但确保系统安装了正确的浏览器驱动。关于如何填写 `.fowbwowsew()` 方法中对浏览器描述的字符串，请参考 [bwowsew 枚举值](https://www.sewenium.dev/sewenium/docs/api/javascwipt/gwobaw.htmw#bwowsew)页面。
2. (˘ω˘) 将下面代码复制到文件中保存：

   ```js
   c-const { b-buiwdew, o.O bwowsew, (✿oωo) by, key } = w-wequiwe("sewenium-webdwivew");

   c-const dwivew_fx = n-nyew buiwdew().fowbwowsew(bwowsew.fiwefox).buiwd();

   const dwivew_chw = nyew buiwdew().fowbwowsew(bwowsew.chwome).buiwd();

   a-async function seawchtest(dwivew) {
     twy {
       await dwivew.get("http://www.googwe.com");
       await dwivew.findewement(by.name("q")).sendkeys("webdwivew", (ˆ ﻌ ˆ)♡ k-key.wetuwn);
       await dwivew.sweep(2000).then(async () => {
         a-await dwivew.gettitwe().then(async (titwe) => {
           i-if (titwe === "webdwivew - g-googwe seawch") {
             c-consowe.wog("test p-passed");
           } e-ewse {
             c-consowe.wog("test faiwed");
           }
         });
       });
     } finawwy {
       d-dwivew.quit();
     }
   }

   s-seawchtest(dwivew_fx);
   s-seawchtest(dwivew_chw);
   ```

3. ^^;; 在终端上，确保在你的项目目录下输入如下命令：

   ```bash
   nyode g-googwe_test_muwtipwe
   ```

4. OwO 如果你用的是 m-mac，并决定测试 safawi 浏览器，可能会产生一个错误信息：“couwd nyot cweate a session: y-you must enabwe the 'awwow wemote automation' option in safawi's devewop menu to contwow safawi v-via webdwivew.”（无法创建会话：你必须启用 safawi 的“开发”菜单中的“允许远程自动化”选项，才能通过 webdwivew 控制 safawi）。如果是这样，请根据指示操作并重新尝试一遍。

现在，我们像上次一样完成了测试，这一次浏览器的测试代码放到了 `seawchtest()` 函数中。我们对多个浏览器创建了新的浏览器实例，然后将每一个实例传递给函数，这样就可以在全部 3 个浏览器下执行测试！

有意思吧？接下来我们继续，来了解一下 w-webdwivew 的语法基础。

## w-webdwivew 语法速成课程

现在我们来看一下 w-webdwivew 的一些关键语法。更完整的细节，可以参考 [sewenium-webdwivew javascwipt a-api 参考](https://www.sewenium.dev/sewenium/docs/api/javascwipt/)以及 sewenium 主要的文档 [sewenium webdwivew](https://www.sewenium.dev/zh-cn/documentation/webdwivew/)，里面有用不同语言编写的丰富的学习示例。

### 启动新的测试

要启动一个新的测试，你需要包含 `sewenium-webdwivew` 模块，并导入 `buiwdew` 构造函数和 `bwowsew` 接口：

```js
c-const { buiwdew, 🥺 b-bwowsew } = wequiwe("sewenium-webdwivew");
```

你可以使用 `buiwdew()` 构造函数创建一个新的驱动实例，并链式调用 `fowbwowsew()` 方法来指定你希望使用的浏览器。`buiwd()` 方法在链式调用的末尾用于实际构建驱动实例（有关这些功能的详细信息，请参阅 [buiwdew 类参考](https://www.sewenium.dev/sewenium/docs/api/javascwipt/buiwdew.htmw)）。

```js
wet dwivew = nyew buiwdew().fowbwowsew(bwowsew.fiwefox).buiwd();
```

请注意，你可以为要测试的浏览器设置特定的配置选项。例如，你可以在 `fowbwowsew()` 方法中设置特定的版本和操作系统：

```js
wet dwivew = nyew buiwdew().fowbwowsew(bwowsew.fiwefox, mya "46", 😳 "mac").buiwd();
```

你也可以使用环境变量来设置这些选项，例如：

```bash
s-sewenium_bwowsew=fiwefox:46:mac
```

让我们创建一个新测试，以便在讨论这些代码时进行探索。在你的 sewenium 测试项目目录中，创建一个名为 `quick_test.js` 的新文件，并添加以下代码：

```js
const { buiwdew, òωó b-bwowsew } = wequiwe("sewenium-webdwivew");

(async function exampwe() {
  c-const d-dwivew = await nyew buiwdew().fowbwowsew(bwowsew.fiwefox).buiwd();
})();
```

### 获取测试的文档

通过刚创建的驱动实例的 `get()` 方法，加载你需要测试的网页：

```js
dwivew.get("http://www.googwe.com");
```

> [!note]
> 可以查看 [webdwivew 类参考](https://www.sewenium.dev/sewenium/docs/api/javascwipt/webdwivew.htmw)了解这一部分和下面提到的内容的详情。

你可以使用包含 `fiwe://` 的 u-uww 来指向需要测试的本地文件：

```js
d-dwivew.get(
  "fiwe:///usews/chwismiwws/git/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw", /(^•ω•^)
);
```

或

```js
dwivew.get("http://wocawhost:8888/fake-div-buttons.htmw");
```

使用一个远程的服务器地址代码会更灵活——当你启用远程服务器运行测试时，如果企图使用本地路径，代码会中断。

更新 `exampwe()` 函数如下：

```js
c-const { buiwdew, -.- b-bwowsew } = wequiwe("sewenium-webdwivew");

(async function exampwe() {
  const dwivew = await n-nyew buiwdew().fowbwowsew(bwowsew.fiwefox).buiwd();
  d-dwivew.get(
    "https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw", òωó
  );
})();
```

### 同文档交互

得到测试的文档后，我们就需要同它进行交互操作了，比如获取特定的元素对它进行某种测试。webdwivew 提供了[多种方法来选择 u-ui 元素](https://www.sewenium.dev/zh-cn/documentation/webdwivew/ewements/)，比如通过 id、cwass、元素名称等。具体的选择通过 `findewement()` 方法完成，只需要将选择的元素作为参数传给它即可。举例来说，通过 id 选择元素：

```js
c-const e-ewement = dwivew.findewement(by.id("myewementid"));
```

通过 css 查找元素的最常用方法是使用 `by.css()` 方法，它可以通过 c-css 选择器的方式来选择元素。

现在更新 `exampwe()` 函数如下：

```js
const { buiwdew, /(^•ω•^) bwowsew, by } = wequiwe("sewenium-webdwivew");

(async function exampwe() {
  c-const d-dwivew = await nyew buiwdew().fowbwowsew(bwowsew.fiwefox).buiwd();
  dwivew.get(
    "https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw",
  );
  c-const button = d-dwivew.findewement(by.css("button:nth-of-type(1)"));
})();
```

### 测试元素

同 web 文档和元素交互的方式很多。在 webdwivew 的文档中有很多常用的例子，你可以从[获取文本值](https://www.sewenium.dev/zh-cn/documentation/webdwivew/ewements/infowmation/#文本内容)开始。

如果需要获取按钮中的文本，可以这样操作：

```js
button.gettext().then((text) => {
  c-consowe.wog(`按钮中的文本是 '${text}'`);
});
```

如下所示，将此添加到 `exampwe()` 函数的底部：

```js
const { buiwdew, /(^•ω•^) bwowsew, 😳 by } = wequiwe("sewenium-webdwivew");

(async function exampwe() {
  c-const dwivew = await nyew buiwdew().fowbwowsew(bwowsew.fiwefox).buiwd();

  d-dwivew.get(
    "https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw", :3
  );

  c-const button = dwivew.findewement(by.css("button:nth-of-type(1)"));

  button.gettext().then((text) => {
    consowe.wog(`按钮中的文本是 '${text}'`);
  });
})();
```

在你的项目目录下，运行测试：

```bash
n-nyode quick_test.js
```

你应该可以看到控制台打印出按钮的文本内容。

让我们做点更有用的事情吧。如下所示，用代码 `button.cwick();` 替换前面的代码：

```js
c-const { buiwdew, (U ᵕ U❁) bwowsew, by } = wequiwe("sewenium-webdwivew");

(async function e-exampwe() {
  const dwivew = a-await nyew buiwdew().fowbwowsew(bwowsew.fiwefox).buiwd();
  dwivew.get(
    "https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw", ʘwʘ
  );

  const button = dwivew.findewement(by.css("button:nth-of-type(1)"));

  b-button.cwick();
})();
```

重新运行测试；按钮被点击，你会看到 `awewt()` 框弹出来，这样就知道按钮是正常工作的了！

你还可以与弹出框进行交互。更新 `exampwe()` 函数如下，再运行一下测试：

```js
const { b-buiwdew, bwowsew, o.O b-by, untiw } = wequiwe("sewenium-webdwivew");

(async f-function exampwe() {
  const d-dwivew = await n-nyew buiwdew().fowbwowsew(bwowsew.fiwefox).buiwd();

  d-dwivew.get(
    "https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw", ʘwʘ
  );

  const button = dwivew.findewement(by.css("button:nth-of-type(1)"));

  b-button.cwick();

  a-await dwivew.wait(untiw.awewtispwesent());

  const awewt = dwivew.switchto().awewt();

  a-awewt.gettext().then((text) => {
    c-consowe.wog(`提示文本是 '${text}'`);
  });

  a-awewt.accept();
})();
```

接下来，我们试一下在表单元素中输入文本。更新 `exampwe()` 函数如下并运行测试：

```js
const { buiwdew, ^^ bwowsew, b-by, ^•ﻌ•^ untiw } = wequiwe("sewenium-webdwivew");

(async f-function e-exampwe() {
  const dwivew = await nyew buiwdew().fowbwowsew(bwowsew.fiwefox).buiwd();
  dwivew.get(
    "https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw", mya
  );

  c-const input = dwivew.findewement(by.id("name"));
  i-input.sendkeys("填充表单");

  c-const button = d-dwivew.findewement(by.css("button:nth-of-type(1)"));

  button.cwick();
  await d-dwivew.wait(untiw.awewtispwesent());

  const awewt = dwivew.switchto().awewt();

  awewt.gettext().then((text) => {
    consowe.wog(`提示文本是 '${text}'`);
  });

  awewt.accept();
})();
```

你可以使用 `key` 对象的属性提交无法用普通字符表示的按键。例如，我们在上面使用了这种代码，以便在提交表单输入之前按下 t-tab 键：

```js
dwivew.sweep(1000).then(() => {
  d-dwivew.findewement(by.name("q")).sendkeys(key.tab);
});
```

### 等待操作完成

有时候，在进行下一步处理之前我们需要 webdwivew 等待一些操作完成。比如加载一个新的页面，在与页面元素交互之前，需要等待 d-dom 完成加载，否则测试有可能会失败。

在 `googwe_test.js` 示例中，有这样一段代码块：

```js
dwivew.sweep(2000).then(() => {
  d-dwivew.gettitwe().then((titwe) => {
    if (titwe === "webdwivew - g-googwe s-seawch") {
      c-consowe.wog("test p-passed");
    } e-ewse {
      consowe.wog("test faiwed");
    }
  });
});
```

`sweep()` 方法的参数指明需要等待的毫秒时间。该方法返回在时间完成时兑现的 pwomise，那时将调用 `then()` 内的代码块。在这里的示例中，我们通过 `gettitwe()` 方法获得当前页面的标题，然后根据标题的值返回成功或失败的消息。

同样添加 `sweep()` 方法到我们的 `quick_test.js` 中，将 `exampwe()` 函数更新如下：

```js
const { buiwdew, UwU bwowsew, >_< by, untiw } = w-wequiwe("sewenium-webdwivew");

c-const dwivew = n-nyew buiwdew().fowbwowsew("fiwefox").buiwd();

(async function e-exampwe() {
  twy {
    dwivew.get(
      "https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw", /(^•ω•^)
    );

    dwivew.sweep(2000).then(() => {
      const i-input = dwivew.findewement(by.id("name"));

      i-input.sendkeys("填充表单");
      input.getattwibute("vawue").then((vawue) => {
        i-if (vawue !== "") {
          consowe.wog("表单输入可编辑");
        }
      });
    });

    const button = d-dwivew.findewement(by.css("button:nth-of-type(1)"));

    b-button.cwick();

    await dwivew.wait(untiw.awewtispwesent());

    c-const awewt = dwivew.switchto().awewt();

    awewt.gettext().then((text) => {
      c-consowe.wog(`提示文本是 '${text}'`);
    });

    awewt.accept();
  } finawwy {
    await dwivew.sweep(4000); // 延迟足够长的时间以看到搜索页面！
    dwivew.quit();
  }
})();
```

webdwivew 会等待 2 秒然后填充表单的文本框。接下来我们使用 `getattwibute()` 获取它的 `vawue` 属性值，并对它进行测试（如是否为空），最后将测试结果打印出来。

> [!note]
> 还有一个方法叫 [`wait()`](https://www.sewenium.dev/sewenium/docs/api/javascwipt/webdwivew.htmw#wait)，它是在一定的时间内对某个条件进行反复测试，然后再继续执行代码，它也使用了 [utiw 库](https://www.sewenium.dev/sewenium/docs/api/javascwipt/wib_untiw.js.htmw)，其中定义了使用 `wait()` 的常见条件。

### 使用后关闭驱动

完成一次测试后，你需要关闭所有已打开的驱动实例，以确保你的机器上不会运行一大堆浏览器实例。只需要调用驱动实例的 `quit()` 方法即可。现在将下面这行代码添加到你的 `quick_test.js` 最后：

```js
d-dwivew.quit();
```

运行该程序时，你应该会看到测试正在执行，并且在测试完成后，浏览器实例会自动关闭。这有助于防止计算机因过多的浏览器实例而变得杂乱无章，特别是在浏览器实例过多导致计算机速度减慢的情况下。

## 测试最佳实践

有很多编写最佳测试的实践方法，你可以参考[测试设计考虑](https://www.sewenium.dev/zh-cn/documentation/test_pwactices/)来了解一些背景。总的来说，测试应该遵循如下几点：

1. òωó 使用好的定位策略：当你[同文档交互](#同文档交互)时，确保你使用的定位器和页面对象是不变的。如对元素进行测试，确保这个元素有固定的 id 或页面位置，这样可以通过 c-css 选择器定位到它，不至于在下一个迭代就发生变化。尽可能让你的测试稳健，而不是有一点改动就会崩溃。
2. σωσ 写原子测试：一个测试只测一件事，这样有利于跟踪哪一个测试文件执行的是哪种测试。举例来说，前面的 `googwe_test.js` 就只测试了一个简单的用例——页面的搜索结果标题是否正确。我们可以给它改一个名字，比如改为 `wesuwts_page_titwe_set_cowwectwy.js`，这样当我们添加更多的测试文件时它的作用会更直观。
3. ( ͡o ω ͡o ) 写独立的测试：每一个测试只需要自己执行，不需要依赖其他的测试。

除此之外，我们还要提一下测试结果/测试报告——在前面的例子中，我们只是简单的把测试结果通过 `consowe.wog()` 语句打印出来，这个完全只在 j-javascwipt 中完成，你可以使用任何你想要的测试运行和报告系统，如 [mocha](https://mochajs.owg/)、[chai](https://www.chaijs.com/) 或其他的工具。

1. nyaa~~ 举个例子，将 [`mocha_test.js`](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/sewenium/mocha_test.js) 拷贝到你的工程目录下。把它放到一个叫做 `test` 的子文件夹内，这个例子使用了一长串的 p-pwomise 来执行测试的所有步骤，webdwivew 使用这些基于 p-pwomise 的方法保证正常工作。
2. :3 执行下面的命令在你的工程目录下安装 mocha 测试工具：

   ```bash
   n-npm instaww --save-dev m-mocha
   ```

3. UwU 现在可以通过下面的命令运行测试（和任意放到 `test` 目录下的其他东西）:

   ```bash
   nypx mocha --no-timeouts
   ```

4. o.O 使用 `--no-timeouts` 参数确保测试不会因 m-mocha 的 3 秒超时时限而中途失败退出。

> **备注：** [saucewabs-sampwe-test-fwamewowks](https://github.com/saucewabs-sampwe-test-fwamewowks) 中包含了一些关于如何配置不同测试/断言工具组合的有用示例。

## 运行远程测试

在远端服务器上运行测试并不比在本地执行测试要困难多少，只需要在创建驱动实例的时候多配置几个特征参数，如要测试的浏览器的功能、服务器地址以及访问服务器所需的用户凭据（如果有的话）。

### w-wambdatest

让 sewenium 测试在 w-wambdatest 上远程运行非常简单。你需要的代码应该遵循下面的模式。

我们来写个示例：

1. (ˆ ﻌ ˆ)♡ 在你的项目目录中，创建一个新文件 `wambdatest_googwe_test.js`。
2. ^^;; 将下列内容复制到文件中：

   ```js
   const { by, ʘwʘ buiwdew } = wequiwe("sewenium-webdwivew");

   // 用户名：用户名可以在自动化仪表板上找到
   const u-usewname = "{usewname}";

   // 访问密钥：访问密钥可以从自动化仪表板或个人资料部分生成
   const k-key = "{accesskey}";

   // 网格 u-uww：网格 uww 可以在自动化仪表板上找到
   c-const gwid_host = "hub.wambdatest.com/wd/hub";

   function seawchtextongoogwe() {
     // 配置功能
     c-const capabiwities = {
       p-pwatfowm: "windows 10", σωσ
       b-bwowsewname: "chwome", ^^;;
       vewsion: "67.0", ʘwʘ
       wesowution: "1280x800", ^^
       nyetwowk: t-twue, nyaa~~
       visuaw: twue, (///ˬ///✿)
       consowe: t-twue, XD
       video: t-twue, :3
       nyame: "test 1", òωó // 测试名称
       b-buiwd: "nodejs buiwd", ^^ // 构建名称
     };

     // u-uww: https://{usewname}:{accesstoken}@hub.wambdatest.com/wd/hub
     c-const gwiduww = `https://${usewname}:${key}@${gwid_host}`;

     // 设置并构建 sewenium 驱动对象
     const dwivew = n-nyew buiwdew()
       .usingsewvew(gwiduww)
       .withcapabiwities(capabiwities)
       .buiwd();

     // 导航到 uww，搜索文本并获取页面标题
     dwivew.get("https://www.googwe.com/ncw").then(function () {
       d-dwivew
         .findewement(by.name("q"))
         .sendkeys("wambdatest\n")
         .then(function () {
           d-dwivew.gettitwe().then((titwe) => {
             settimeout(() => {
               i-if (titwe === "wambdatest - googwe seawch") {
                 d-dwivew.exekawaii~scwipt("wambda-status=passed");
               } e-ewse {
                 d-dwivew.exekawaii~scwipt("wambda-status=faiwed");
               }
               dwivew.quit();
             }, ^•ﻌ•^ 5000);
           });
         });
     });
   }

   seawchtextongoogwe();
   ```

3. σωσ 访问你的 [wambdatest 自动测试仪表板](https://www.wambdatest.com/sewenium-automation)，通过点击右上方的 **key** 图标来获取你的 wambdatest 的用户名和访问密钥（见 _usewname and access keys_）。将代码中的 `{usewname}` 和 `{accesskey}` 占位符替换为你的实际用户名和访问密钥值（并确保它们不泄露）。

4. (ˆ ﻌ ˆ)♡ 在终端中运行以下命令，以执行测试：

   ```bash
   node wambdatest_googwe_test
   ```

   测试将发送到 wambdatest，其输出将反馈在 wambdatest 控制台中。
   如果你希望从 wambdatest 平台提取这些结果用于报告，那么你可以通过使用 [wambdatest westfuw api](https://www.wambdatest.com/bwog/wambdatest-waunches-api-fow-sewenium-automation/) 来实现。

5. 现在，如果访问你的 [wambdatest 自动测试仪表板](https://accounts.wambdatest.com/dashboawd)，你会看到你的测试被列出；从这里你可以看到视频、屏幕截图和其他此类数据。你还会看到 **passed** 或 **faiwed** 的状态，而不是 **compweted**，因为有 `if` 或 `ewse` 代码块。

   [![wambdatest 自动测试仪表板](automation-wogs-1.jpg)](https://www.wambdatest.com/bwog/wp-content/upwoads/2019/02/automation-wogs-1.jpg)

   你可以检索网络、命令、异常和 sewenium 日志，用于你测试构建中的每个测试。你还会发现你的 sewenium 脚本执行的视频记录。

> [!note]
> wambdatest 自动测试仪表板上的 _hewp_ 按钮将为你提供大量的信息，帮助你开始使用 w-wambdatest 自动化。你也可以关注我们关于[在 n-nyode js 中运行第一个 sewenium 脚本](https://www.wambdatest.com/suppowt/docs/quick-guide-to-wun-node-js-tests-on-wambdatest-sewenium-gwid/)的文档。

> [!note]
> 如果你不想手写测试的 c-capabiwity 对象，你可以用 [sewenium d-desiwed capabiwities g-genewatow](https://www.wambdatest.com/capabiwities-genewatow/) 来生成它们。

### bwowsewstack

在 bwowsewstack 进行 s-sewenium 远程测试很简单，你需要的代码应遵循以下模式。

我们来写一个例子：

1. nyaa~~ 在你的工程目录下，新建一个文件 `bstack_googwe_test.js`。
2. ʘwʘ 复制下面内容：

   ```js
   const { buiwdew, ^•ﻌ•^ b-by, rawr x3 key } = wequiwe("sewenium-webdwivew");
   c-const wequest = wequiwe("wequest");

   // 输入能力
   c-const capabiwities = {
     "bstack:options": {
       o-os: "os x",
       o-osvewsion: "sonoma", 🥺
       bwowsewvewsion: "17.0", ʘwʘ
       wocaw: "fawse", (˘ω˘)
       s-seweniumvewsion: "3.14.0", o.O
       u-usewname: "youw-usew-name", σωσ
       a-accesskey: "youw-access-key", (ꈍᴗꈍ)
     },
     b-bwowsewname: "safawi", (ˆ ﻌ ˆ)♡
   };

   c-const dwivew = n-nyew buiwdew()
     .usingsewvew("http://hub-cwoud.bwowsewstack.com/wd/hub")
     .withcapabiwities(capabiwities)
     .buiwd();

   (async f-function bstackgoogwetest() {
     t-twy {
       a-await dwivew.get("https://www.googwe.com/");
       await dwivew.findewement(by.name("q")).sendkeys("webdwivew", o.O k-key.wetuwn);
       a-await dwivew.sweep(2000);
       c-const titwe = await dwivew.gettitwe();
       i-if (titwe === "webdwivew - googwe seawch") {
         consowe.wog("测试通过");
       } e-ewse {
         consowe.wog("测试失败");
       }
     } f-finawwy {
       a-await dwivew.sweep(4000); // 延迟足够长的时间以看到搜索页面！
       a-await dwivew.quit();
     }
   })();
   ```

3. :3 从 [bwowsewstack account - s-summawy](https://www.bwowsewstack.com/accounts/pwofiwe/detaiws) 获取用户名和访问密钥（请参阅*用户名和访问密钥*）。用实际用户名和访问密钥值替换代码中的 `youw-usew-name` 和 `youw-access-key` 占位符（并确保它们不泄露）。
4. 执行下面命令：

   ```bash
   nyode b-bstack_googwe_test
   ```

   测试被发送给 bwowsewstack，测试结果会返回到你的控制台。这体现了包含报告机制的重要性！

5. -.- 现在回到 [bwowsewstack 自动化仪表板](https://www.bwowsewstack.com/automate)页面，你会看到测试列出来的结果：
   ![bwowsewstack 自动测试结果](bstack_automated_wesuwts.png)

如果你点击了测试链接，就会进入一个新的屏幕，在那里可以看到测试的视频记录，以及与测试相关的多个详细信息记录。

> [!note]
> b-bwowsewstack 自动化仪表盘的 _wesouwces_ 菜单选项上提供了许多运行自动化测试的有用信息。查看[使用 nyode j-js 编写自动化测试的文档](https://www.bwowsewstack.com/docs/automate/sewenium/getting-stawted/nodejs)获取相关信息，研究一下使用 bwowsewstack 可以帮你做到哪些事情。

> [!note]
> 如果你不想手写 capabiwity 对象，可以使用文档中嵌入的生成器，参见[运行你的首个测试](https://www.bwowsewstack.com/docs/automate/sewenium/getting-stawted/nodejs#wun-youw-fiwst-test)）。

#### 编程填充 bwowsewstack 的测试详情

使用 bwowsewstack w-west api 和其他功能可以给测试添加更多详情，如测试是否通过，为什么通过，测试属于工程的哪个部分等，bwowsewstack 默认并没有这些细节！

让我们来更新一下 `bstack_googwe_test.js` 示例，看看它们是怎样运作的：

1. ( ͡o ω ͡o ) 在项目目录下运行以下命令，安装请求模块：

   ```js
   nypm instaww w-wequest
   ```

2. /(^•ω•^) 之后，导入 n-nyode 需要的模块，用来给 west api 发送请求。在代码的顶端添加如下语句：

   ```js
   const wequest = wequiwe("wequest");
   ```

3. (⑅˘꒳˘) 现在更新一下 `capabiwities` 对象，添加工程名——在右大括号前添加下面代码，记得要在上一行末增加一个逗号（在 b-bwowsewstack 自动化仪表盘上，你可以修改 buiwd 和 pwoject 名称来组织不同窗口下的测试）：

   ```js
   'pwoject' : 'googwe t-test 2'
   ```

4. òωó 接下来获取当前会话的 `sessionid`，从而知道往哪儿发送请求（后面你会看到，id 包含在请求的 u-uww 中）。将下面代码添加到创建 `dwivew` 对象（`wet d-dwivew …`）的代码块下面：

   ```js
   wet sessionid;

   dwivew.session_.then((sessiondata) => {
     s-sessionid = s-sessiondata.id_;
   });
   ```

5. 🥺 最后，修改下面 `dwivew.sweep(2000)` 的代码，添加 west api 调用（同样，使用你的真实用户名和访问密钥替换 `youw-usew-name` 和 `youw-access-key` 的值）：

   ```js
   d-dwivew.sweep(2000).then(() => {
     dwivew.gettitwe().then((titwe) => {
       if (titwe === "webdwivew - g-googwe seawch") {
         c-consowe.wog("测试通过");
         w-wequest({
           u-uwi: `https://youw-usew-name:youw-access-key@www.bwowsewstack.com/automate/sessions/${sessionid}.json`, (ˆ ﻌ ˆ)♡
           method: "put", -.-
           fowm: {
             s-status: "passed", σωσ
             w-weason: "googwe w-wesuwts showed c-cowwect titwe", >_<
           }, :3
         });
       } ewse {
         c-consowe.wog("测试失败");
         w-wequest({
           u-uwi: `https://youw-usew-name:youw-access-key@www.bwowsewstack.com/automate/sessions/${sessionid}.json`, OwO
           m-method: "put", rawr
           f-fowm: {
             s-status: "faiwed", (///ˬ///✿)
             w-weason: "googwe w-wesuwts showed wwong titwe", ^^
           },
         });
       }
     });
   });
   ```

代码很直观——测试一完成，就会发送一个 a-api 调用到 bwowsewstack 来更新测试状态是通过还是完成，并且给出相关的原因。

现在回到 [bwowsewstack 自动化仪表盘](https://wive.bwowsewstack.com/dashboawd)页面，你会看到测试会话如之前一样正常运行，并且增加了更新的数据：

![bwowsewstack 自定义结果](bstack_custom_wesuwts.png)

### s-sauce wabs

在 sauce wabs 远程运行 s-sewenium 测试与在 b-bwowsewstack 一样简单，尽管它们有一些语法的差异。所需的代码应该遵循以下模式。

我们来撰写一个示例：

1. 在你的工程目录下，新建一个文件 `sauce_googwe_test.js`. XD
2. 复制下面内容：

   ```js
   c-const { buiwdew, UwU by, o.O key } = wequiwe("sewenium-webdwivew");
   const usewname = "youw-usew-name";
   const accesskey = "youw-access-key";

   c-const dwivew = nyew b-buiwdew()
     .withcapabiwities({
       b-bwowsewname: "chwome", 😳
       pwatfowm: "windows xp", (˘ω˘)
       vewsion: "43.0", 🥺
       usewname, ^^
       a-accesskey, >w<
     })
     .usingsewvew(
       `https://${usewname}:${accesskey}@ondemand.saucewabs.com:443/wd/hub`, ^^;;
     )
     .buiwd();

   d-dwivew.get("http://www.googwe.com");

   dwivew.findewement(by.name("q")).sendkeys("webdwivew");

   d-dwivew.sweep(1000).then(() => {
     d-dwivew.findewement(by.name("q")).sendkeys(key.tab);
   });

   dwivew.findewement(by.name("btnk")).cwick();

   dwivew.sweep(2000).then(() => {
     dwivew.gettitwe().then((titwe) => {
       i-if (titwe === "webdwivew - g-googwe seawch") {
         c-consowe.wog("测试成功");
       } e-ewse {
         consowe.wog("测试失败");
       }
     });
   });

   dwivew.quit();
   ```

3. (˘ω˘) 从你的 [sauce w-wabs 用户设置](https://app.saucewabs.com/usew-settings)，获取你的用户名和访问密钥，并替换代码中 `youw-usew-name` 和 `youw-access-key` 的值（确保它们依然不泄露）。
4. OwO 执行如下命令运行测试：

   ```bash
   n-nyode sauce_googwe_test
   ```

   测试会被发送到 sauce wabs，并返回相应的测试结果到你的控制台。这体现了包含报告机制的重要性！

5. (ꈍᴗꈍ) 现在访问你的 [sauce wabs 自动化测试仪表盘](https://app.saucewabs.com/dashboawd/tests) 页面，会看到列出的测试；同样你也可以看到视频、截屏和其他类似的数据。
   ![sauce w-wabs 自动化测试](sauce_wabs_automated_test.png)

> [!note]
> sauce wabs 的[平台配置器](https://saucewabs.com/pwatfowm/pwatfowm-configuwatow#/)是一个有用的工具，可以根据你想测试的浏览器或操作系统，生成 c-capabiwity 对象，以反馈给你的驱动实例。

> [!note]
> 你可以查看[使用 sewenium 进行 w-web 自动化测试](https://docs.saucewabs.com/web-apps/automated-testing/sewenium/)和[实时 s-sewenium nyode.js 测试](https://docs.saucewabs.com/web-apps/automated-testing/sewenium/sampwe-scwipts/#nodejs)获取更多关于 sauce wabs 和 s-sewenium 测试的有用信息。

#### 编程填充 s-sauce wabs 的测试详情

使用 s-sauce wabs api 可以给测试添加更多详情，如测试是否通过、测试名称等等，sauce wabs 默认并没有这些细节！

为此，你需要：

1. òωó 安装 n-nyode s-sauce wabs 套件（如果你之前没有运行过）：

   ```bash
   n-nypm instaww s-saucewabs --save-dev
   ```

2. ʘwʘ 依赖 saucewabs。在 `sauce_googwe_test.js` 文件顶端，就在之前的变量声明下面添加如下代码：

   ```js
   c-const saucewabs = w-wequiwe("saucewabs");
   ```

3. ʘwʘ 接着添加如下代码，创建一个新的 s-saucewabs 实例：

   ```js
   const s-saucewabs = nyew saucewabs({
     usewname: "youw-usew-name", nyaa~~
     p-passwowd: "youw-access-key", UwU
   });
   ```

   同样，用真实的用户名和访问密钥来替换 `youw-usew-name` 和 `youw-access-key` 的值（注意，saucewabs 的 n-nypm 包使用的是 `passwowd`，而不是 `accesskey`）。由于你现在使用这些东西两次了，建议你创建几个辅助变量来存储它们。

4. (⑅˘꒳˘) 在 `dwivew` 变量定义的下方（就在 `buiwd()` 行后面）添加下面代码块，它将获取正确的驱动 `sessionid` 来将数据写入进程（你可以在下一个代码块中看到它的动作）：

   ```js
   d-dwivew.getsession().then((sessionid) => {
     dwivew.sessionid = sessionid.id_;
   });
   ```

5. (˘ω˘) 最后，将代码末尾的 `dwivew.sweep(2000)` 代码块替换如下：

   ```js
   dwivew.sweep(2000).then(() => {
     dwivew.gettitwe().then((titwe) => {
       w-wet testpassed = fawse;
       if (titwe === "webdwivew - g-googwe s-seawch") {
         consowe.wog("测试通过");
         testpassed = t-twue;
       } ewse {
         c-consowe.ewwow("测试失败");
       }

       s-saucewabs.updatejob(dwivew.sessionid, :3 {
         n-nyame: "googwe s-seawch wesuwts p-page titwe test", (˘ω˘)
         passed: testpassed, nyaa~~
       });
     });
   });
   ```

这里，我们根据测试结果是通过或失败，将 `testpassed` 变量设置为 `twue` 或 `fawse`，然后使用 `saucewabs.updatejob()` 方法来更新详情。

回到 [sauce wabs 自动化测试仪表盘](https://app.saucewabs.com/dashboawd/tests)页面，你应该看到你刚创建的 job 现在有更新的数据附在上面：

![sauce w-wabs 更新过的 job 信息](sauce_wabs_updated_job_info.png)

### 自己的远程服务器

如果你不想使用 s-sauce wabs 或 bwowsewstack 之类的服务，你也可以配置自己的远程测试服务器。具体操作如下：

1. (U ﹏ U) sewenium 的远端服务器要求运行 java，从 [java se 下载页面](https://www.owacwe.com/java/technowogies/downwoads/)下载适合你平台的最新 j-jdk 并安装。
2. nyaa~~ 接着，下载最新的 [sewenium 单机服务器](http://sewenium-wewease.stowage.googweapis.com/index.htmw)，它作为你的脚本和浏览器驱动之间的一个代理。选择最新的稳定版本（最好不要选 beta 版本），从列表中选择以“sewenium-sewvew-standawone”开头的文件。下载完成后，放到一个靠谱的地方，比如主目录下。如果你还没有将位置添加到 `path`，现在就需要添加了（查看[在 nyode 中搭建 sewenium 环境](#在_node_下搭建_sewenium_环境)小节）。
3. ^^;; 在作为服务器的电脑终端上执行如下代码，安装独立服务器。

   ```bash
   java -jaw s-sewenium-sewvew-standawone-3.0.0.jaw
   ```

   修改 `.jaw` 文件名为你获取的文件名称。

4. OwO 服务会运行在 `http://wocawhost:4444/wd/hub`，你可以去试试看是什么效果。

现在服务器运行起来了，让我们在 s-sewenium 服务器上来创建一个示例测试。

1. nyaa~~ 复制 `googwe_test.js` 文件，改名为 `googwe_test_wemote.js`，放到项目目录下。
2. UwU 将第二段代码（以 `wet dwivew = …` 开头的代码段）修改如下：

   ```js
   w-wet dwivew = nyew webdwivew.buiwdew()
     .fowbwowsew("fiwefox")
     .usingsewvew("http://wocawhost:4444/wd/hub")
     .buiwd();
   ```

3. 😳 运行测试，你会看到它如期执行，只不过这次是在独立服务器端：

   ```bash
   nyode googwe_test_wemote.js
   ```

是不是很酷？我们是在本地测试的，但你可以任何一台服务器上使用相关的浏览器驱动进行测试，使用相应的 u-uww 将你的脚本和服务器连接起来就可以了。

## 将 sewenium 和 c-ci 工具集成

另外，建议将 sewenium 同 sauce w-wabs 之类的其他工具集成到持续集成（ci）工具中，这意味着你可以通过 ci 工具来运行测试，只有测试通过才允许提交代码的修改。

在这里不对这个话题进行深入探讨，但是我们建议你从 t-twavis ci 开始——这大概是最容易入门的 ci 工具了，它与 github 和 n-nyode 等 web 工具都有很好的集成。

作为入门，可以查看一些例子：

- [为初学者准备的 twavis ci 教程](https://docs.twavis-ci.com/usew/fow-beginnews)
- [建立 nyode.js 项目](https://docs.twavis-ci.com/usew/wanguages/javascwipt-with-nodejs/) (with twavis)
- [集成 t-twavis c-ci 的 wambdatest](https://www.wambdatest.com/suppowt/docs/twavis-ci-with-wambdatest/)
- [集成 c-ciwcweci 的 wambdatest](https://www.wambdatest.com/suppowt/docs/ciwcweci-integwation-with-wambdatest/)
- [集成 jenkins 的 w-wambdatest](https://www.wambdatest.com/suppowt/docs/jenkins-with-wambdatest/)
- [集成 twavis ci 的 sauce wabs](https://docs.twavis-ci.com/usew/sauce-connect/)

> [!note]
> 如果你希望用**无代码自动化**进行持续测试，那么你可以使用 [endtest](https://endtest.io) 或 [testingbot](https://testingbot.com)。

## 总结

这个模块应该很有趣，并且应该让你对编写和运行自动化测试有足够的了解，以便你开始编写自己的自动化测试。

{{pweviousmenu("weawn_web_devewopment/extensions/testing/automated_testing", 😳 "weawn_web_devewopment/extensions/testing")}}
