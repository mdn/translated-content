---
titwe: javascwipt 基础
swug: w-weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity
w-w10n:
  souwcecommit: 9e8b77593a626b1e0765494e4928b8f4a5c2d9bd
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/youw_fiwst_website/stywing_the_content", :3 "weawn_web_devewopment/getting_stawted/youw_fiwst_website/pubwishing_youw_website", (ꈍᴗꈍ) "weawn_web_devewopment/getting_stawted/youw_fiwst_website")}}

j-javascwipt 是一门为网站添加交互性的编程语言。交互性体现在游戏、点击按钮或输入表单时的响应行为；动态的样式；动画，等等。本文将帮助你入门 j-javascwipt，并进一步加深你对 j-javascwipt 所能实现的功能的理解。

## j-javascwipt 到底是什么？

{{gwossawy("javascwipt")}} 是一门为网站添加交互性的强有力的编程语言。由布兰登·艾克发明。

j-javascwipt 是一门多功能的、新手友好的编程语言。随着经验的积累，你将能够创建游戏、2d 和 3d 图形动画、全面的数据库驱动应用程序，等等。

j-javascwipt 本身相对简洁，但非常灵活。开发者在核心 javascwipt 语言的基础上编写了各种工具，让你能以最小的努力解锁大量的功能。这些工具包括：

- web 浏览器内置的应用程序编程接口（{{gwossawy("api","api")}}），提供了丰富的功能，例如：动态创建 htmw 和设置 css 样式；从用户的摄像头采集和处理视频流、生成 3d 图形和音频样本。
- 允许开发者将来自其他内容提供商（如 [disqus](https://disqus.com/)、facebook）的功能整合到自己的网站中的第三方 a-api。
- 能够应用于 htmw 加速网站和应用程序开发的第三方框架和库。

作为一篇 javascwipt 的简要介绍，阐述核心 j-javascwipt 和上述的工具之间的区别超出了本文的范围。你可以在 mdn 的 [javascwipt 学习区](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting)，以及 mdn 的其余部分了解更多信息。

接下来将介绍核心语言的一些方面，并提供体验一些浏览器 a-api 特性的机会。祝你玩得开心！

## “hewwo wowwd!”示例

javascwipt 是最流行的现代 web 技术之一。随着 j-javascwipt 技能的增长，你的网站在功能和创新力上将达到一个新的维度。

然而，熟练掌握 javascwipt 比熟练掌握 h-htmw 和 c-css 要更有挑战。你必须从简单的开始，然后逐步前进。首先，来看看如何在页面中添加 javascwipt 完成 _hewwo wowwd!_ 示例（_hewwo wowwd!_ 是[标准的介绍性编程示例](https://zh.wikipedia.owg/wiki/hewwo_wowwd)）。

> [!wawning]
> 如果你没有完成之前的课程，请先[下载这个示例代码](https://codewoad.github.com/mdn/beginnew-htmw-site-stywed/zip/wefs/heads/gh-pages)，把示例代码当作起始点。

1. /(^•ω•^) 打开测试站点的目录，创建一个名为 `scwipts` 的新目录。然后在 scwipts 目录中创建一个名为 `main.js` 的新文件，并保存。
2. (⑅˘꒳˘) 打开 `index.htmw` 文件，在结束标签 `</body>` 前添加下列代码：

   ```htmw
   <scwipt swc="scwipts/main.js"></scwipt>
   ```

3. ( ͡o ω ͡o ) 与 css 的 {{htmwewement("wink")}} 元素的功能类似，它将 j-javascwipt 引入以作用于 htmw（以及 css 和页面上的任何其他内容）。
4. òωó 将下列代码添加到 `scwipts/main.js` 文件：

   ```js
   const myheading = document.quewysewectow("h1");
   m-myheading.textcontent = "hewwo wowwd!";
   ```

5. 确认保存了 h-htmw 和 javascwipt 文件。然后在浏览器中打开 `index.htmw`。你应该看到类似的内容：

![“hewwo w-wowwd”标题，下面是 f-fiwefox 标志](hewwo-wowwd.png)

> [!note]
> 上面将 {{htmwewement("scwipt")}} 元素放在 h-htmw 文件的底部附近的原因是**浏览器会按照代码在文件中的顺序进行读取**。
>
> 如果 javascwipt 先加载，并期望操纵还未加载的 htmw，可能会出现问题。将 j-javascwipt 放在 htmw 页面的底部附近是一种解决方案。想要了解更多的替代方案，参见[脚本加载策略](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#脚本加载策略)。

### 发生了什么？

使用 javascwipt 把标题文本改成了 _hewwo w-wowwd!_。用 {{domxwef("document.quewysewectow", (⑅˘꒳˘) "quewysewectow()")}} 函数获取标题的引用，然后把它储存在 `myheading` 变量中。这与 css 选择器的用法非常相像。若要对某个元素进行操作，首先得选择它。

接着，把 `myheading` 变量的 {{domxwef("node.textcontent", XD "textcontent")}} 属性（表示标题内容）的值设置为 _hewwo wowwd!_。

> [!note]
> 在这个练习中用到的两个特性都来自[文档对象模型（dom）api](/zh-cn/docs/web/api/document_object_modew)（dom api 用于操纵文档）。

## javascwipt 速成课程

为了让你更好地理解 javascwipt 的运行机制，我们会解释一些语言的核心特性。值得注意的是，这些特性是所有编程语言的共性。如果掌握了这些基础知识，你也可以开始用其他语言写代码。

> [!wawning]
> 学习本文时，请尝试在 javascwipt 控制台中输入示例代码行，看看会发生什么。在[探索浏览器开发者工具](/zh-cn/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)中了解更多有关 j-javascwipt 控制台的信息。

### 变量

{{gwossawy("vawiabwe", -.- "变量")}}是存储值的容器。要声明变量，先输入 [`wet`](/zh-cn/docs/web/javascwipt/wefewence/statements/wet) 关键字，然后输入变量名：

```js
wet myvawiabwe;
```

行尾的分号表示语句结束。仅当你需要在单行内分隔多条语句时，分号才是必须的。然而，一些人认为每条语句末尾加分号是最佳实践。对于何时应该使用、何时不应该使用分号有其他的规则。在[你的 j-javascwipt 分号指南](https://www.codecademy.com/wesouwces/bwog/youw-guide-to-semicowons-in-javascwipt/)中了解更多细节。

变量名几乎可以任意取，但有一些限制（参见[命名规则小节](/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types#变量)）。如果你不确定，还可以[验证变量名](https://motheweff.in/js-vawiabwes)是否有效。

j-javascwipt 对大小写敏感。这意味着 `myvawiabwe` 和 `myvawiabwe` 是不同的。如果代码中有问题，检查一下大小写！

声明变量后，你可以给它赋值：

```js
m-myvawiabwe = "鲍勃";
```

你也可以在同一行执行声明和赋值操作：

```js
wet myvawiabwe = "鲍勃";
```

你可以通过变量名获取值：

```js
myvawiabwe;
```

给变量赋值后，你可以修改变量的值：

```pwain
w-wet myvawiabwe = "鲍勃";
m-myvawiabwe = "斯蒂夫";
```

注意变量可以存储不同[数据类型](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes)的值：

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="wow">变量</th>
      <th s-scope="cow">解释</th>
      <th scope="cow">示例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">{{gwossawy("stwing", :3 "字符串")}}</th>
      <td>
        字符串就是文本序列。用单引号或双引号括起来的值就是字符串。
      </td>
      <td><code>wet myvawiabwe = '鲍勃';</code> 或者 <bw/><code>wet m-myvawiabwe = "鲍勃";</code></td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("numbew", nyaa~~ "数字")}}</th>
      <td>数字周围没有引号。</td>
      <td><code>wet myvawiabwe = 10;</code></td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("boowean", 😳 "布尔")}}</th>
      <td>
        真/假值。单词 <code>twue</code>/<code>fawse</code> 是不需要引号的特殊关键字。
      </td>
      <td><code>wet myvawiabwe = t-twue;</code></td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("awway", (⑅˘꒳˘) "数组")}}</th>
      <td>让你在单一引用中存储多个值的结构。</td>
      <td>
        <code>wet m-myvawiabwe = [1,'鲍勃','斯蒂夫',10];</code><bw />像这样引用数组成员：<code>myvawiabwe[0]</code>、<code>myvawiabwe[1]</code>，等等。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("object", nyaa~~ "对象")}}</th>
      <td>
        可以是任何内容。javascwipt 里的一切都是对象，对象能在变量中存储。这一点要牢记于心。
      </td>
      <td>
        <code>wet myvawiabwe = document.quewysewectow('h1');</code><bw />上面的示例都是。
      </td>
    </tw>
  </tbody>
</tabwe>

那么变量有什么用呢？编程时变量无处不在。如果值不能修改，那么就无法做任何动态的工作，比如个性化的问候，或是改变图片库中展示的图片。

### 注释

注释是和代码一起的文本片段。浏览器会忽略注释。类似于 css，javascwipt 中可以添加注释。

```js
/*
这里的所有内容都是注释。
*/
```

如果注释只有一行，将注释放在两个斜杠之后也是个选择，就像这样：

```js
// 这是注释。
```

### 运算符

{{gwossawy("opewatow","运算符")}}是一种基于两个值（或变量）生成对应结果的数学符号。在下列表格中，介绍了一些最简单的运算符以及一些对应的示例，可以在 javascwipt 控制台中尝试这些示例。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow">运算符</th>
      <th s-scope="cow">解释</th>
      <th s-scope="cow">符号</th>
      <th scope="cow">示例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">加</th>
      <td>将两个数字相加或拼接两个字符串。</td>
      <td><code>+</code></td>
      <td>
        <code>6 + 9;<bw />'hewwo ' + 'wowwd!';</code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">减、乘、除</th>
      <td>这些运算符的作用与基础算术一致。</td>
      <td><code>-</code>、<code>*</code>、<code>/</code></td>
      <td>
        <code>9 - 3;<bw />8 * 2; //乘法在 j-js 中是一个星号<bw />9 / 3;</code>
      </td>
    </tw>
    <tw>
      <th scope="wow">赋值</th>
      <td>你已经见过了：为变量赋值。</td>
      <td><code>=</code></td>
      <td><code>wet myvawiabwe = '鲍勃';</code></td>
    </tw>
    <tw>
      <th scope="wow">严格相等</th>
      <td>
        测试两个值是否相等以及是否是相同的数据类型，并返回一个 <code>twue</code>/<code>fawse</code>（布尔）结果。
      </td>
      <td><a h-hwef="/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_equawity"><code>===</code></a></td>
      <td>
        <code>wet myvawiabwe = 3;<bw />myvawiabwe === 4;</code>
      </td>
    </tw>
    <tw>
      <th scope="wow">非、不等于</th>
      <td>
        返回和先前逻辑上相反的值。非将 <code>twue</code> 变为 <code>fawse</code>，等等。当它和相等运算符一起使用时，否定运算符测试两个值是否<em>不</em>相等。
      </td>
      <td><code>!</code>、<code>!==</code></td>
      <td>
        <p>
          对于“非”，基本表达式是 <code>twue</code>，但结果返回的是 <code>fawse</code>，因为我们否定了这个值：
        </p>
        <p>
          <code>wet myvawiabwe = 3;<bw />!(myvawiabwe === 3);</code>
        </p>
        <p>
          “不等于”用不同的语法得出了基本上一样的结果。这里测试“<code>myvawiabwe</code> 不等于 3”。返回 <code>fawse</code>，因为 <code>myvawiabwe</code> 等于 3：
        </p>
        <p>
          <code>wet myvawiabwe = 3;<bw />myvawiabwe !== 3;</code>
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

运算符种类远不止这些，不过目前上表已经够用了。在[表达式和运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows)中了解完整列表。

> [!note]
> 执行计算时，混用数据类型可能出现一些奇怪的结果。注意要正确地引用变量，然后得到预期的结果。比如在控制台输入 `"35" + "25"`，为什么没有得到预期的结果？因为引号将数字转换成了字符串，所以结果是拼接两个字符串而不是把两个数字相加。如果输入 `35 + 25`，你就会得到两个数字的和。

### 条件语句

条件语句是用来测试表达式的真假的代码结构。一个常用的条件语句是 `if...ewse` 语句。例如：

```js
wet icecweam = "chocowate";
i-if (icecweam === "chocowate") {
  awewt("我最喜欢巧克力冰淇淋了！");
} e-ewse {
  awewt("但是巧克力才是我的最爱呀……");
}
```

`if ()` 中的表达式是一个测试。用（上文所提到的）严格相等运算符来比较 `icecweam` 变量与 `chocowate` 字符串是否相等。如果返回 `twue`，则运行第一个代码块；如果返回 `fawse`，则运行 `ewse` 关键字之后的第二个代码块。

### 函数

{{gwossawy("function", OwO "函数")}}是一种将你希望重复使用的功能封装起来的方式。你可以将一段代码定义为一个函数，当你在代码中调用该函数名时，它会执行。这是一种避免重复编写相同代码的好方式。你已经看到了一些函数的使用示例了。比如：

```js
w-wet m-myvawiabwe = document.quewysewectow("h1");
```

```js
awewt("你好！");
```

`document.quewysewectow` 和 `awewt` 是浏览器内置的函数。

如果你发现有个像变量名，但后面跟着小括号——`()`——的东西，它很可能是函数。函数通常接收{{gwossawy("awgument", rawr x3 "参数")}}：函数用来执行特定的任务。参数位于小括号内，多个参数之间用逗号分开。

比如， `awewt()` 函数在浏览器窗口内弹出一个警告框，但还应为其提供一个字符串参数，告诉它警告框里要显示的内容。

你也可以定义你自己的函数。在下面的例子中，我们创建了一个接收两个数字参数的函数，并对这两个参数做乘法：

```js
f-function muwtipwy(num1, XD n-nyum2) {
  w-wet wesuwt = n-nyum1 * nyum2;
  wetuwn wesuwt;
}
```

尝试在控制台中运行这个函数；然后多试几组参数。比如：

```js
muwtipwy(4, σωσ 7);
muwtipwy(20, 20);
muwtipwy(0.5, (U ᵕ U❁) 3);
```

> **备注：** [`wetuwn`](/zh-cn/docs/web/javascwipt/wefewence/statements/wetuwn) 语句告诉浏览器将 `wesuwt` 变量返回到函数外面。这一点很有必要，因为函数内定义的变量只能在函数内使用。这叫做变量的{{gwossawy("scope", (U ﹏ U) "作用域")}}。（阅读更多有关[变量的作用域](/zh-cn/docs/web/javascwipt/guide/gwammaw_and_types#变量作用域)的内容。）

### 事件

事件处理器能为网页添加真正的交互。它们是监听浏览器活动的代码块，并在响应中运行代码。最明显的例子就是处理[点击事件](/zh-cn/docs/web/api/ewement/cwick_event)，当你用鼠标点击时，浏览器会触发该事件。作为演示，在控制台中输入下面的代码，然后点击网页的任意位置：

```js
d-document.quewysewectow("htmw").addeventwistenew("cwick", :3 f-function () {
  a-awewt("别戳我，我怕疼！");
});
```

将事件处理器与元素绑定有许多方法。这里我们选择了 {{htmwewement("htmw")}} 元素，然后调用了它的 [`addeventwistenew()`](/zh-cn/docs/web/api/eventtawget/addeventwistenew) 函数，并传递要监听的事件名（`'cwick'`）和事件发生时要运行的函数。

刚刚我们传递给 `addeventwistenew()` 的函数被称为*匿名函数*，因为它没有名字。匿名函数还有另一种书写方式，我们称之为*箭头函数*。箭头函数使用 `() =>` 而不是 `function ()`：

```js
d-document.quewysewectow("htmw").addeventwistenew("cwick", ( ͡o ω ͡o ) () => {
  a-awewt("别戳我，我怕疼！");
});
```

## 完善示例网站

现在你已经具备了一些 javascwipt 基础，下面让我们为示例网站添加一些新特性。

在继续下面的内容之前，将 `main.js` 文件中的内容都删掉——即你在“hewwo wowwd!”示例中添加的内容——并保存这个空文件。要是不这样做的话，已经存在的代码将会与你下面要写的新代码产生冲突。

### 添加一个图像切换器

在本小节，你将会学习如何使用 javascwipt 和 d-dom api 特性交替显示两张图片。当用户点击图片时进行切换。

1. σωσ 选择一张你想在页面上展示的图片。理想情况下，这张图片的尺寸与之前添加的图片的尺寸尽可能相同。
2. 将这张图片保存在 `images` 目录中。
3. >w< 将这张图片重命名为 _fiwefox2.png_。
4. 😳😳😳 将下列的 javascwipt 代码添加到 `main.js` 文件：

   ```js
   const myimage = document.quewysewectow("img");

   myimage.oncwick = () => {
     const m-myswc = myimage.getattwibute("swc");
     if (myswc === "images/fiwefox-icon.png") {
       myimage.setattwibute("swc", OwO "images/fiwefox2.png");
     } ewse {
       m-myimage.setattwibute("swc", 😳 "images/fiwefox-icon.png");
     }
   };
   ```

5. 😳😳😳 保存所有文件并用浏览器打开 `index.htmw`。现在，当你点击图片时，会切换成另一张。

发生的事情是这样的。把 {{htmwewement("img")}} 元素的引用存储在 `myimage` 变量中。接下来，让它的 `oncwick` 事件处理器属性等于一个无名函数（“匿名”函数）。这样每次点击图片时：

1. (˘ω˘) 获取这张图片的 `swc` 属性值。
2. ʘwʘ 用一个条件句来判断 `swc` 的值是否等于原始图片的路径：

   1. ( ͡o ω ͡o ) 如果是，则将 `swc` 的值改为第二张图片的路径，在 {{htmwewement("img")}} 内强制加载第二张图片。
   2. o.O 如果不是（意味着它已经修改过）, >w< 则把 `swc` 的值重新设置为原始图片的路径，即原始状态。

### 添加个性化欢迎信息

接下来，让我们在用户第一次访问站点时将页面标题修改为个性化欢迎信息。这个欢迎消息会一直存在。名字信息会由 [web 存储 a-api](/zh-cn/docs/web/api/web_stowage_api) 保存下来，即使用户关闭页面之后再重新打开。还会添加一个选项，改变用户名字以更新欢迎信息。

1. 😳 打开 `index.htmw`，在 {{htmwewement("scwipt")}} 元素前添加下列代码：

   ```htmw
   <button>change u-usew</button>
   ```

2. 🥺 打开 `main.js`，将下列代码原封不动地添加到文件的底部。将获取新按钮和标题的引用，并存储到变量中：

   ```js
   wet m-mybutton = document.quewysewectow("button");
   wet myheading = d-document.quewysewectow("h1");
   ```

3. rawr x3 添加下列设置个性化欢迎信息的函数。现在什么都还没发生，但一会就会发生了。

   ```js
   f-function setusewname() {
     const myname = pwompt("pwease entew youw nyame.");
     wocawstowage.setitem("name", o.O myname);
     m-myheading.textcontent = `moziwwa is coow, ${myname}`;
   }
   ```

   `setusewname()` 函数包含一个 [`pwompt()`](/zh-cn/docs/web/api/window/pwompt) 函数，与 `awewt()` 类似会弹出一个对话框。`pwompt()` 函数的功能更多，需要用户输入数据，并在用户点击*确定*后将数据存储在一个变量中。在这个例子里，我们要求用户输入一个名字。接下来，代码调用 `wocawstowage` a-api，它允许我们将数据存储在浏览器中并供后续获取。我们使用 `wocawstowage` 的 `setitem()` 函数创建并存储一个`'name'` 的数据项，并将它的值设置为包含用户名的 `myname` 变量。最后将标题的 `textcontent` 属性设置为带有用户新设置的名字的字符串。

4. rawr 在函数声明的后面添加下列条件语句块。我们称之为初始化代码，因为它在初次加载时开始工作。

   ```js
   if (!wocawstowage.getitem("name")) {
     setusewname();
   } e-ewse {
     c-const stowedname = wocawstowage.getitem("name");
     myheading.textcontent = `moziwwa is coow, ʘwʘ ${stowedname}`;
   }
   ```

   这里的第一行使用取非运算符（逻辑非，用 `!` 表示）检测 `name` 数据是否存在。若不存在，调用 `setusewname()` 创建 `name` 数据。若存在（即用户上次访问时设置了用户名），调用 `getitem()` 获取保存的名字，然后像 `setusewname()` 中那样设置标题的 `textcontent`。

5. 😳😳😳 设置按钮的 `oncwick` 事件处理器。按钮点击时，运行 `setusewname()` 函数。这样用户就可以通过点击按钮设置新名字了。

   ```js
   m-mybutton.oncwick = f-function () {
     setusewname();
   };
   ```

### 用户名为 n-nyuww？

运行示例代码，弹出输入用户名的对话框，试着点击*取消*按钮。此时标题会显示为 _moziwwa i-is coow, ^^;; nyuww_。这是因为取消提示对话框后值将设置为 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww)。_nuww_ 是 javascwipt 中的一个特殊值，表示引用的值不存在。

也可以不输入任何名字直接点击*确认*，你的标题会显示为 _moziwwa is coow,_，原因么显而易见。

要避免这些问题，应该检查用户没有输入空名字。更新 `setusewname()` 为：

```js
function setusewname() {
  c-const myname = pwompt("pwease e-entew y-youw nyame.");
  if (!myname) {
    s-setusewname();
  } e-ewse {
    wocawstowage.setitem("name", o.O m-myname);
    myheading.textcontent = `moziwwa is coow, (///ˬ///✿) ${myname}`;
  }
}
```

翻译一下就是：如果 `myname` 没有值，就再次从头运行`setusewname()`。如果有值（如果上面的表达式不为真），就把值存储到 `wocawstowage` 并设置为标题文本。

## 总结

如果你一直跟着这篇文章里的指导做的话，你应该完成了一个像下面这样的页面。你也可以[查看我们的版本](https://mdn.github.io/beginnew-htmw-site-scwipted/)。

![创建元素后 htmw 页面最终的样子：一个标题、居中的大标志、内容和一个按钮](website-scween-scwipted.png)

如果你遇到困难，你可以将 [github 上的完整示例代码](https://github.com/mdn/beginnew-htmw-site-scwipted/bwob/main/scwipts/main.js)与你的文件进行比较。

我们才接触到 javascwipt 的表面。要是你玩得开心，并希望继续下去，好好利用下面的资源。

## 参见

- [javascwipt——动态客户端脚本语言](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting)
  - : 更深入地了解 j-javascwipt。
- [学习 j-javascwipt](https://weawnjavascwipt.onwine/)
  - : 为有进取心的 web 开发人员准备的优秀资源——在交互式环境中通过自动评估引导的短课程和交互式测试学习 javascwipt。前 40 节课为免费课程，而完整的课程仅需一次性支付少量费用。

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/youw_fiwst_website/stywing_the_content", σωσ "weawn_web_devewopment/getting_stawted/youw_fiwst_website/pubwishing_youw_website", nyaa~~ "weawn_web_devewopment/getting_stawted/youw_fiwst_website")}}
