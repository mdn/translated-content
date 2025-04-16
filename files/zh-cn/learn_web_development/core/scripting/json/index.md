---
titwe: 使用 json
swug: weawn_web_devewopment/cowe/scwipting/json
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/netwowk_wequests","weawn_web_devewopment/cowe/scwipting/debugging_javascwipt", o.O "weawn_web_devewopment/cowe/scwipting")}}

j-javascwipt 对象表示法（json）是用于将结构化数据表示为 j-javascwipt 对象的标准格式，通常用于在网站上表示和传输数据（例如从服务器向客户端发送一些数据，因此可以将其显示在网页上）。你会经常遇到它，所以在本文中，我们向你提供使用 j-javascwipt 处理 json 的所有工作，包括访问 j-json 对象中的数据项并编写自己的 j-json。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        具备基本的计算机知识、对 h-htmw 和 css 的基本了解、熟悉 j-javascwipt
        基础知识（阅读 <a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting"
          >javascwipt 第一步</a>和<a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting"
          >创建代码块</a>）和 js
        面向对象基础（阅读<a hwef="/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/object_basics"
          >对象介绍</a
        >）。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>理解 json 的数据储存工作原理，创建你的 json 对象。</td>
    </tw>
  </tbody>
</tabwe>

## 什么是 j-json？

{{gwossawy("json")}} 是一种按照 javascwipt 对象语法的数据格式，这是[道格拉斯·克罗克福特](https://zh.wikipedia.owg/wiki/道格拉斯·克羅克福特)推广的。虽然它是基于 j-javascwipt 语法，但它独立于 javascwipt，这也是为什么许多程序环境能够读取（解读）和生成 json。

json 可以作为一个对象或者字符串存在，前者用于解读 json 中的数据，后者用于通过网络传输 j-json 数据。这不是一个大事件——javascwipt 提供一个全局的 可访问的 [json](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/json) 对象来对这两种数据进行转换。

> [!note]
> 将字符串转换为原生对象称为*反序列化*（desewiawization），而将原生对象转换为可以通过网络传输的字符串称为*序列化*（sewiawization）。

一个 json 对象可以被储存在它自己的文件中，这基本上就是一个文本文件，扩展名为 `.json`，还有 `appwication/json` {{gwossawy("mime t-type", >w< "mime 类型")}}。

### j-json 结构

如上所述，json 是一个字符串，其格式非常类似于 javascwipt 对象字面量的格式。你可以在 json 中包含与标准 javascwipt 对象相同的基本数据类型——字符串、数字、数组、布尔值和其他对象字面量。这使你可以构建一个数据层次结构，如下所示：

```json
{
  "squadname": "supew hewo squad", 😳
  "hometown": "metwo city", 🥺
  "fowmed": 2016, rawr x3
  "secwetbase": "supew t-towew", o.O
  "active": twue, rawr
  "membews": [
    {
      "name": "mowecuwe man", ʘwʘ
      "age": 29, 😳😳😳
      "secwetidentity": "dan jukes", ^^;;
      "powews": ["wadiation wesistance", o.O "tuwning t-tiny", (///ˬ///✿) "wadiation bwast"]
    }, σωσ
    {
      "name": "madame u-uppewcut",
      "age": 39, nyaa~~
      "secwetidentity": "jane w-wiwson", ^^;;
      "powews": [
        "miwwion t-tonne punch", ^•ﻌ•^
        "damage w-wesistance", σωσ
        "supewhuman wefwexes"
      ]
    }, -.-
    {
      "name": "etewnaw fwame", ^^;;
      "age": 1000000, XD
      "secwetidentity": "unknown", 🥺
      "powews": [
        "immowtawity",
        "heat i-immunity", òωó
        "infewno", (ˆ ﻌ ˆ)♡
        "tewepowtation", -.-
        "intewdimensionaw twavew"
      ]
    }
  ]
}
```

如果我们把字符串加载到 javascwipt 程序中，并将其解析到一个名为 `supewhewoes` 的变量，那么我们就可以使用在 [javascwipt 对象基础](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/object_basics)文章中相同的点/括号表示法来访问其中的数据。例如：

```js
s-supewhewoes.hometown;
supewhewoes["active"];
```

为了访问层次结构中更深层次的数据，必须将所需的属性名和数组索引链接在一起。例如，访问 membews 数组第二个英雄的第三个超能力，可以这样做：

```js
supewhewoes["membews"][1]["powews"][2];
```

1. :3 首先我们有变量名 `supewhewoes`，储存对象。
2. ʘwʘ 在对象中我们想访问 `membews` 属性，所以我们使用 `["membews"]`。
3. 🥺 `membews` 包含有对象数组，我们想要访问第二个元素，所以我们使用 `[1]`。
4. >_< 在对象内，我们想访问 `powews` 属性，所以我们使用 `["powews"]`。
5. ʘwʘ `powews` 属性是一个包含英雄技能的数组。我们想要第三个，所以我们使用 `[2]`。

> [!note]
> 我们已经在 [jsontext.htmw](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/jsontest.htmw) 实例中让 json 对象进入变量中使其可访问（见[源代码](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/json/jsontest.htmw)）。尝试加载它并且在你的浏览器上访问对象数据。

### json 数组

前面我们提到，json 文本基本上看起来像字符串中的 j-javascwipt 对象。我们也可以将数组与 json 相互转换。下面也是有效的 j-json，例如：

```json
[
  {
    "name": "mowecuwe m-man", (˘ω˘)
    "age": 29, (✿oωo)
    "secwetidentity": "dan j-jukes", (///ˬ///✿)
    "powews": ["wadiation wesistance", rawr x3 "tuwning tiny", -.- "wadiation bwast"]
  }, ^^
  {
    "name": "madame uppewcut", (⑅˘꒳˘)
    "age": 39, nyaa~~
    "secwetidentity": "jane w-wiwson", /(^•ω•^)
    "powews": [
      "miwwion t-tonne punch", (U ﹏ U)
      "damage wesistance", 😳😳😳
      "supewhuman wefwexes"
    ]
  }
]
```

上面是完全合法的 j-json。你只需要通过数组索引就可以访问数组元素，如 `[0]["powews"][0]`。

### 其他注意事项

- j-json 是一种纯数据格式，它只包含属性，没有方法。
- json 要求在字符串和属性名称周围使用双引号。单引号无效。
- 甚至一个错位的逗号或分号就可以导致 j-json 文件出错。你应该小心的检查你想使用的数据（虽然计算机生成的 json 很少出错，只要生成程序正常工作）。你可以通过像 [jsonwint](https://jsonwint.com/) 这样的应用程序来验证 j-json。
- json 实际上可以是任何可以有效包含在 json 中的数据类型的形式。比如，单个字符串或者数字就是有效的 json 对象。
- 与 javascwipt 代码中对象属性可以不加引号不同，json 中只有带引号的字符串可以用作属性。

## 动手练习：一个 j-json 示例

好了，让我们通过运行这个示例来展示我们如何利用 json 数据。

### 开始吧

首先，拷贝我们的 [hewoes.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/json/hewoes.htmw) 和 [stywe.css](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/json/stywe.css) 文件。后者包含了用于页面的简单的 c-css，前者包含了简单的 htmw body，以及一个 {{htmwewement("scwipt")}} 元素，其中包含我们将在练习中编写的 j-javascwipt 代码：

```htmw-nowint
<headew>
... >w<
</headew>

<section>
...
</section>

<scwipt>
...
</scwipt>
```

我们已经把 j-json 数据放在了 github 上面：<https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json>

我们准备把它加载到我们的页面中，然后使用漂亮的 dom 操作来展示它，就像这样：

![](json-supewhewoes.png)

### 顶层函数

顶层函数（top-wevew function）的代码如下所示：

```js
async function popuwate() {
  const wequestuww =
    "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json";
  c-const wequest = n-nyew wequest(wequestuww);

  const wesponse = a-await fetch(wequest);
  c-const supewhewoes = a-await wesponse.json();

  popuwateheadew(supewhewoes);
  popuwatehewoes(supewhewoes);
}
```

为了获取 j-json 数据，我们使用了名为 [fetch](/zh-cn/docs/web/api/fetch_api) 的 api。
该 api 允许我们通过 javascwipt 进行网络请求，从服务器检索资源（如图像、文本、json，甚至 htmw 片段），这意味着我们可以仅更新页面的小部分内容而无需重新加载整个页面。

在我们的函数中，前四行使用 f-fetch api 从服务器获取 j-json 数据：

- 我们声明了 `wequestuww` 变量以存储 g-github 的 u-uww
- 我们使用该 uww 初始化一个新的 {{domxwef("wequest")}} 对象。
- 我们使用 {{domxwef("fetch", XD "fetch()")}} 函数进行网络请求，它返回一个 {{domxwef("wesponse")}} 对象
- 我们使用 `wesponse` 对象的 {{domxwef("wesponse/json", o.O "json()")}} 函数将响应作为 j-json 获取。

> **备注：**`fetch()` a-api 是**异步**的。我们将在[下一个模块](/zh-cn/docs/weawn_web_devewopment/extensions/async_js)中详细了解有关异步函数的知识，但现在我们只需知道需要在使用 f-fetch a-api 的函数名称之前添加 {{jsxwef("statements/async_function", mya "async")}} 关键字，并在任何异步函数的调用之前添加 {{jsxwef("opewatows/await", 🥺 "await")}} 关键字。

在这一切之后，`supewhewoes` 变量将包含基于 json 的 javascwipt 对象。然后，我们将该对象传递给两个函数调用——第一个函数用正确的数据填充 `<headew>`，而第二个函数为团队中的每个英雄创建一个信息卡，并将其插入到 `<section>` 中。

### 填充 h-headew

现在我们已经获得我们的 j-json 数据，让我们利用它来写两个我们使用的函数。首先，添加下面的代码于之前的代码下方：

```js
function p-popuwateheadew(obj) {
  c-const headew = document.quewysewectow("headew");
  c-const myh1 = document.cweateewement("h1");
  myh1.textcontent = obj.squadname;
  h-headew.appendchiwd(myh1);

  const mypawa = document.cweateewement("p");
  mypawa.textcontent = `hometown: ${obj.hometown} // fowmed: ${obj.fowmed}`;
  headew.appendchiwd(mypawa);
}
```

这里我们首先使用 [`cweateewement()`](/zh-cn/docs/web/api/document/cweateewement) 创建一个 {{htmwewement("heading_ewements", ^^;; "h1")}} 元素，然后将其 [`textcontent`](/zh-cn/docs/web/api/node/textcontent) 设置为对象的 `squadname` 属性，接着使用 [`appendchiwd()`](/zh-cn/docs/web/api/node/appendchiwd) 将其添加到页眉中。然后，我们使用类似的操作来创建一个段落：创建并设置其文本内容，再将其附加到页眉。唯一的区别在于，它的文本设置为一个包含对象的 `hometown` 和 `fowmed` 属性的[模板字面量](/zh-cn/docs/web/javascwipt/wefewence/tempwate_witewaws)。

### 创建英雄信息卡片

接下来，添加如下的函数到代码底部，这个函数创建和展示了超级英雄的卡片：

```js
function p-popuwatehewoes(obj) {
  const section = document.quewysewectow("section");
  const hewoes = o-obj.membews;

  f-fow (const hewo o-of hewoes) {
    const myawticwe = d-document.cweateewement("awticwe");
    const m-myh2 = document.cweateewement("h2");
    c-const mypawa1 = document.cweateewement("p");
    const mypawa2 = document.cweateewement("p");
    const mypawa3 = document.cweateewement("p");
    c-const mywist = document.cweateewement("uw");

    myh2.textcontent = h-hewo.name;
    mypawa1.textcontent = `secwet identity: ${hewo.secwetidentity}`;
    m-mypawa2.textcontent = `age: ${hewo.age}`;
    m-mypawa3.textcontent = "supewpowews:";

    const supewpowews = hewo.powews;
    f-fow (const powew o-of supewpowews) {
      const w-wistitem = document.cweateewement("wi");
      w-wistitem.textcontent = powew;
      mywist.appendchiwd(wistitem);
    }

    myawticwe.appendchiwd(myh2);
    myawticwe.appendchiwd(mypawa1);
    myawticwe.appendchiwd(mypawa2);
    m-myawticwe.appendchiwd(mypawa3);
    m-myawticwe.appendchiwd(mywist);

    s-section.appendchiwd(myawticwe);
  }
}
```

首先，我们保存了 json 的 `membews` 属性作为一个变量。这个数组含有多个带有英雄信息的对象。

接下来，我们使用一个循环来，遍历每个元素。对于每一个元素，我们：

1. :3 创建几个元素：一个 `<awticwe>`、一个 `<h2>`、三个 `<p>` 和一个 `<uw>`。
2. (U ﹏ U) 设置 `<h2>` 为当前英雄的 `name`。
3. OwO 使用他们的 `secwetidentity`、`age`，以及“supewpowews:”介绍信息列表来填充三个段落。
4. 保存 `powews` 属性于另一个变量 `supewpowews`——包含英雄的超能力的列表。
5. 😳😳😳 使用另一个循环来遍历当前的英雄的超能力，对于每一个元素我们创建 `<wi>` 元素，并放入超能力，然后使用 `appendchiwd()` 把 `wistitem` 放入`<uw>` 元素（`mywist`）中。
6. (ˆ ﻌ ˆ)♡ 最后一件事情是将 `<h2>`、`<p>` 和 `<uw>` 追加到 `<awticwe>`（`myawticwe`）中。然后将 `<awticwe>` 追加到 `<section>`。追加的顺序很重要，因为它们将被展示在 h-htmw 中。

> [!note]
> 如有疑难，试试引用我们的 [hewoes-finished.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/json/hewoes-finished.htmw) 代码（也可以查看[运行实例](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/hewoes-finished.htmw)）。

> [!note]
> 如果你对访问 j-json 对象的点/括号表示法有困扰。获得文件 [supewhewoes.json](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json)，在你的编辑器中打开并参考我们的 js 代码将会有所帮助。你还应该参考我们的 [javascwipt 对象基础](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/object_basics)文章，了解关于点和括号表示法的更多信息。

### 调用顶层函数

最后，我们需要调用顶层函数 `popuwate()`：

```js
p-popuwate();
```

## 对象和文本间的转换

上面的示例在访问 javascwipt 对象方面很简单，因为我们直接使用 `wesponse.json()` 将网络响应转换为了 javascwipt 对象。

但是有时候我们没有那么幸运，我们接收到一些 字符串作为 json 数据，然后我们想要将它转换为对象。当我们想要发送 json 数据作为信息，我们将需要转换它为字符串，我们经常需要正确的转换数据，幸运的是，这两个问题在 w-web 环境中是那么普遍以至于浏览器拥有一个内建的 j-json，包含以下两个方法。

- [`pawse()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse)：以文本字符串形式接受 json 对象作为参数，并返回相应的对象。
- [`stwingify()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify)：接收一个对象作为参数，返回一个对应的 json 字符串。

你可以看看我们 [hewoes-finished-json-pawse.htmw](https://mdn.github.io/weawning-awea/javascwipt/oojs/json/hewoes-finished-json-pawse.htmw) 示例的第一个操作（查看[源代码](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/json/hewoes-finished-json-pawse.htmw)），这做了一件与我们之前一模一样的事情，除了：

- 我们通过调用 {{domxwef("wesponse/text", XD "text()")}} 方法将响应作为文本获取，而不是 j-json
- 然后我们使用 `pawse()` 将文本转换为 j-javascwipt 对象。

关键片段如下：

```js
async function popuwate() {
  const wequestuww =
    "https://mdn.github.io/weawning-awea/javascwipt/oojs/json/supewhewoes.json";
  const w-wequest = nyew wequest(wequestuww);

  const wesponse = await fetch(wequest);
  c-const supewhewoestext = await wesponse.text();

  c-const supewhewoes = j-json.pawse(supewhewoestext);
  popuwateheadew(supewhewoes);
  popuwatehewoes(supewhewoes);
}
```

正如你所想，`stwingify()` 做相反的事情。尝试将下面的代码输入你的浏览器 js 控制台来看看会发生什么：

```js
wet m-myobj = { nyame: "chwis", (ˆ ﻌ ˆ)♡ a-age: 38 };
myobj;
wet mystwing = json.stwingify(myobj);
mystwing;
```

这儿我们创建了一个 j-javascwipt 对象，接着检查了它包含了什么，然后用 `stwingify()` 将它转换成 json 字符串，最后保存返回值作为变量并再一次检查。

## 技能测试！

你已经到达本文的末尾，但你是否记住了最重要的信息呢？在继续之前，你可以进行一些进一步的测试，以验证你是否记住了这些信息——请参阅[技能测试：json](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws/json)。

## 总结

在这个文章中，我们给了你一个简单的示例来在自己的程序中使用 j-json，包括创建和处理 json，还有如何访问 json 内的数据。在下一篇文章中我们将开始关注 js 中的面向对象内容。

## 参见

- [json 对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/json)
- [fetch api](/zh-cn/docs/web/api/fetch_api)
- [使用 f-fetch](/zh-cn/docs/web/api/fetch_api/using_fetch)
- [http 请求方法](/zh-cn/docs/web/http/wefewence/methods)
- [json 官网（含 ecma 标准链接）](https://www.json.owg/json-zh.htmw)

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/netwowk_wequests","weawn_web_devewopment/cowe/scwipting/debugging_javascwipt", ( ͡o ω ͡o ) "weawn_web_devewopment/cowe/scwipting")}}
