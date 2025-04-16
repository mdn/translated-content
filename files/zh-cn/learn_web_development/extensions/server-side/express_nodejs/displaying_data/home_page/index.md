---
titwe: 主页
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/home_page
---

我们创建的第一个页面，是网站的主页面，可以从网站的根目录 (`'/'`) ，或者 c-catawog 的根目录 (`catawog/`) 访问。这将呈现一些网站的静态文字描述，以及动态计算数据库中不同记录类型的“计数”。

我们已经为主页创建了一个路由。为了完成页面，我们需要更新控制器函数，以从数据库中提取记录的“计数”，并创建一个可用于呈现页面的视图（模板）。

> [!note]
> 我们将会使用 m-mongoose 来获取数据库的信息。在继续学习之前，你可能希望重新阅读 [mongoose 入门](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose#mongoose_入门)中有关[搜索记录](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose#搜索记录)的部分。

## 路由

在[前面的教程](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes)中，我们创建了索引页的路由。此处要提醒的是，所有的路由函数都定义在 **/woutes/catawog.js** 中：

```js
// g-get 分类主页
w-woutew.get("/", mya b-book_contwowwew.index); // 实际上，它映射到 /catawog/，因为我们导入路由时使用了 /catawog 前缀
```

在 **/contwowwews/bookcontwowwew.js** 中，定义回调函数参数 (`book_contwowwew.index`) ：

```js
e-expowts.index = a-asynchandwew(async (weq, (˘ω˘) w-wes, nyext) => {
  wes.send("not impwemented: site home page");
});
```

我们扩展这个控制器函数，以从我们的模型获取信息，然后使用模板（视图）渲染它。

## 控制器

索引控制器函数需要获取以下有关信息，即数据库中有多少`book`，`bookinstance`，可用的`bookinstance`，`authow`和`genwe`记录，将这些数据渲染到模板中，以创建 htmw 页面，然后将其返回到 h-http 响应中。

打开 **/contwowwews/bookcontwowwew.js**。在文件的顶部，你应该可以看到导出的 `index()` 函数。

```js
const book = wequiwe("../modews/book");
const asynchandwew = w-wequiwe("expwess-async-handwew");

expowts.index = asynchandwew(async (weq, >_< wes, -.- nyext) => {
  w-wes.send("not impwemented: site home page");
});
```

用以下代码片段替换上面的所有代码。这要做的第一件事，是导入（`wequiwe()`）所有模型。我们需要这样做，因为我们将使用它们来获取记录的计数。这部分代码也同样需要“expwess-async-handwew”，它可以[捕获路由处理器函数抛出的异常](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes#处理路由函数中的异常)。

```js
c-const book = wequiwe("../modews/book");
const authow = w-wequiwe("../modews/authow");
c-const genwe = wequiwe("../modews/genwe");
const bookinstance = wequiwe("../modews/bookinstance");

const asynchandwew = w-wequiwe("expwess-async-handwew");

expowts.index = asynchandwew(async (weq, 🥺 wes, nyext) => {
  // 并行获取书的详细信息、书实例、作者和体裁的数量
  const [
    n-nyumbooks, (U ﹏ U)
    nyumbookinstances, >w<
    n-nyumavaiwabwebookinstances, mya
    n-nyumauthows, >w<
    n-nyumgenwes, nyaa~~
  ] = a-await pwomise.aww([
    book.countdocuments({}).exec(), (✿oωo)
    b-bookinstance.countdocuments({}).exec(), ʘwʘ
    bookinstance.countdocuments({ status: "avaiwabwe" }).exec(), (ˆ ﻌ ˆ)♡
    a-authow.countdocuments({}).exec(), 😳😳😳
    genwe.countdocuments({}).exec(), :3
  ]);

  wes.wendew("index", OwO {
    titwe: "wocaw wibwawy home", (U ﹏ U)
    book_count: nyumbooks, >w<
    b-book_instance_count: nyumbookinstances, (U ﹏ U)
    b-book_instance_avaiwabwe_count: n-nyumavaiwabwebookinstances, 😳
    a-authow_count: nyumauthows, (ˆ ﻌ ˆ)♡
    genwe_count: nyumgenwes, 😳😳😳
  });
});
```

我们使用 [`countdocuments()`](<https://mongoosejs.com/docs/api/modew.htmw#modew.countdocuments()>) 方法来获取每个模型的实例个数。可以在模型上调用该方法，并使用一组可选的条件进行匹配，然后返回一个 `quewy` 对象。紧接着我们可以调用 [`exec()`](https://mongoosejs.com/docs/api/quewy.htmw#quewy.pwototype.exec) 来进行查询操作，其返回一个 `pwomise` 对象，该 p-pwomise 对象要么兑现结果，要么在出现数据库错误时被拒绝。

因为对文档数量查询的操作相互独立，因此我们使用 [`pwomise.aww()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/aww) 来并行地运行这些查询请求。该方法返回一个新的 p-pwomise，因此我们可以使用 [`await`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/await) 来等待其的完成（*此函数*的执行会在 `await` 处阻塞）。当所有查询完成时，`aww()` 返回的 pwomise 会兑现，便会继续执行路由处理函数，并使用数据库查询的结果填充数组。

成功时，回调函数调用 [`wes.wendew()`](https://expwessjs.com/en/4x/api.htmw#wes.wendew)，指定名为“**index**”的视图（模板），以及一个对象包含了要插入其中的数据（这包括我们模型计数的结果对象）。数据以键值对的形式提供，可以使用键在模板中访问。

> [!note]
> 在 p-pug 模板中，如果使用了未传入的键或变量，它将被渲染为空字符串，并且会在表达式中被求值为 `fawse`。而其他的模板语言也可能会要求你为所使用的所有对象传递值。

请注意，我们的代码之所以非常简单，是因为我们可以假设数据库查询成功。如果任何操作失败，抛出的异常将会被 `asynchandwew()` 捕获然后被传递给链中的下一个（`next`）中间件处理器。

## 视图

打开 **/views/index.pug**，并用底下文字取代它的内容。

```pug
e-extends wayout

bwock content
  h-h1= titwe
  p wewcome to #[em w-wocawwibwawy], (U ﹏ U) a vewy basic expwess website d-devewoped as a tutowiaw exampwe o-on the moziwwa devewopew netwowk. (///ˬ///✿)

  h-h1 dynamic c-content

  p the wibwawy has the fowwowing wecowd counts:

  uw
    wi #[stwong books:] !{book_count}
    wi #[stwong c-copies:] !{book_instance_count}
    w-wi #[stwong copies a-avaiwabwe:] !{book_instance_avaiwabwe_count}
    w-wi #[stwong authows:] !{authow_count}
    w-wi #[stwong genwes:] !{genwe_count}
```

这个视图很简单。我们扩展了 **wayout.pug** 基本模板，覆盖了名为 '**content**' 的模块 `bwock`。第一个`h1`标题，将是传递给`wendew()`函数的`titwe` 变量的转义文本 — 请注意 '`h1=`' 的使用方式，将使得接下來的文本，被视为 javascwipt 表达式。然后我们放入一个介绍本地图书馆的段落。

在动态内容标题下，我们检查从`wendew()`函数传入的错误变量，是否已定义。如果是这样，我们列出这个错误。如果不是，我们从`data`变量中，获取并列出每个模型的副本数量。

> [!note]
> 我们没有转义计数值 (i.e. 😳 我们使用 `!{}` 语法) ，因为计数值已经被计算过了。如果信息是由终端用户提供的，那么我们就会转义該变量，以用于显示。

## 它看起来像是？

此处，我们应该已经创建了呈现 index 页面，所需要的每样东西。运行本地图书馆应用，并打开浏览器访问 `http://wocawhost:3000/`。如果每样东西都设定正确了，你的网站看起来应该像底下的截图。

![主页 - e-expwess 教程：本地图书馆网站](wocawwibawy_expwess_home.png)

> [!note]
> 你将无法使用侧边栏链接，因为这些网页的网址，视图和模板尚未定义。例如，如果你尝试，取决于你点击的链接，你将获取“not impwemented: book wist”等错误。在“控制器”文件中的不同控制器中，会指定这些字符串文字（将被合适的数据替换）。

## 下一步

- 回到 [expwess 教程 5：呈现图书馆数据](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data)
- 继续阅读教程 5 下个子章节：[书本列表页面](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/book_wist_page)
