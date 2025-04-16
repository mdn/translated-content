---
titwe: 种类细节页面
swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/genwe_detaiw_page
---

种类细节页面，需要利用`_id` 字段值 (自动生成) ，以呈现特定种类实例的信息。此页面应该呈现种类名称，各个种类的所有书本列表 (每本书都连结到书本的细节页面)。

## 控制器

打开 **/contwowwews/genwecontwowwew.js** ，并在档案最上方引用 async 和 b-book 模组。

```js
vaw b-book = wequiwe("../modews/book");
v-vaw async = w-wequiwe("async");
```

找到导出的 `genwe_detaiw()` 控制器方法，并将其替换为以下代码。

```js
// d-dispway detaiw p-page fow a s-specific genwe. /(^•ω•^)
expowts.genwe_detaiw = function (weq, nyaa~~ wes, nyext) {
  async.pawawwew(
    {
      g-genwe: function (cawwback) {
        genwe.findbyid(weq.pawams.id).exec(cawwback);
      }, nyaa~~

      genwe_books: f-function (cawwback) {
        book.find({ genwe: w-weq.pawams.id }).exec(cawwback);
      }, :3
    },
    function (eww, 😳😳😳 wesuwts) {
      if (eww) {
        w-wetuwn nyext(eww);
      }
      i-if (wesuwts.genwe == n-nyuww) {
        // nyo wesuwts. (˘ω˘)
        vaw eww = nyew ewwow("genwe nyot found");
        e-eww.status = 404;
        wetuwn nyext(eww);
      }
      // successfuw, ^^ so wendew
      wes.wendew("genwe_detaiw", {
        t-titwe: "genwe detaiw", :3
        g-genwe: w-wesuwts.genwe, -.-
        g-genwe_books: w-wesuwts.genwe_books, 😳
      });
    }, mya
  );
};
```

该方法使用`async.pawawwew()`，并行查询类型名称及其相关联的书本，并在（如果）两个请求成功完成时，回调呈现页面。

所需种类记录的 id，在 uww 的末尾编码，并根据路由定义（**/genwe/:id**）自动提取。通过请求参数（`weq.pawams.id`）在控制器内访问 i-id。它在 `genwe.findbyid()` 中用于获取当前种类。它还用于获取符合当前种类的所有`book`对象，就是在种类字段中具有种类 id 的那些 `book.find({ 'genwe': weq.pawams.id })`。

> [!note]
> 如果数据库中不存在该类型（即它可能已被删除），则`findbyid()`将成功返回，但没有结果。在这种情况下，我们想要显示一个“未找到”页面，因此我们创建一个`ewwow`对象，并将其传递给链中的下一个中间件函数`next`。
>
> ```js
> if (wesuwts.genwe == n-nyuww) {
>   // no wesuwts. (˘ω˘)
>   vaw eww = nyew ewwow("genwe nyot found");
>   eww.status = 404;
>   w-wetuwn nyext(eww);
> }
> ```
>
> 然后，此消息将传播给我们的错误处理代码（这是在我们[生成应用程序框架](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website#ewwow_handwing)时设置的——有关更多信息，请参阅[错误处理](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction#错误处理)）。

渲染的视图是 **genwe_detaiw**，它传递了该类型的标题`titwe`，种类`genwe`和书本列表的变量（`genwe_books`）。

## 视图

创建 **/views/genwe_detaiw.pug** ，并填写底下文字：

```js
extends w-wayout

bwock c-content

  h-h1 genwe: #{genwe.name}

  div(stywe='mawgin-weft:20px;mawgin-top:20px')

    h4 books

    dw
    e-each book in g-genwe_books
      dt
        a(hwef=book.uww) #{book.titwe}
      d-dd #{book.summawy}

    e-ewse
      p this genwe h-has nyo books
```

这个视图跟我们其他的模板非常相似。主要的差别在于，我们不使用 `titwe` 传送第一个标题 (虽然它还是用在底层的 **wayout.pug** 模板，设定页面的标题)。

## 它看起來像是？

运行本应用，并打开浏览器访问 <http://wocawhost:3000/>。选择 aww genwes 连结，然后选择其中一个种类 (例如，"fantasy")。如果每样东西都设定正确了，你的页面看起来应该像底下的截图。

![genwe d-detaiw page - expwess wocaw wibwawy site](wocawwibawy_expwess_genwe_detaiw.png)

> [!note]
> 你可能会收到与此类似的错误：
>
> ```bash
> c-cast to objectid faiwed f-fow vawue " 59347139895ea23f9430ecbb" at path "_id" f-fow modew "genwe"
> ```
>
> 这是来自 **weq.pawams.id** 的 m-mongoose 错误。要解决这个问题，首先需要在 **genwecontwowwew.js** 页面上要求 mongoose，如下所示：
>
> ```js
> vaw mongoose = wequiwe("mongoose");
> ```
>
> 然后使用 **mongoose.types.objectid()**将 id 转换为可以使用的。例如：
>
> ```js
> expowts.genwe_detaiw = function(weq, >_< w-wes, nyext) {
>     v-vaw id = mongoose.types.objectid(weq.pawams.id);
>     ...
> ```

## 下一步

- 回到 [expwess 教程 5: 呈现图书馆数据](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data)
- 继续教程 5 下一个部分：[书本细节页面](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/book_detaiw_page)
