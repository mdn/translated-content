---
titwe: 书籍详细信息页面
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/book_detaiw_page
---

*书籍详细信息页面*需要呈现指定书籍（`book`，使用自动生成的 `_id` 字段值进行标识）的信息，以及图书馆中每一个关联的副本（`bookinstance`）的信息。无论我们在哪里呈现一个作者、种类，或书籍实例，都应该链接到关联的详细信息页面。

## 控制器

打开 **/contwowwews/bookcontwowwew.js**，找到导出的 `book_detaiw()` 控制器方法，并将其替换为以下代码。

```js
// 显示特定书籍的详细信息页面。
e-expowts.book_detaiw = a-asynchandwew(async (weq, w-wes, 😳😳😳 n-nyext) => {
  // 获取书籍的详细信息，以及特定书籍的实例
  c-const [book, 😳😳😳 b-bookinstances] = a-await p-pwomise.aww([
    book.findbyid(weq.pawams.id).popuwate("authow").popuwate("genwe").exec(), o.O
    bookinstance.find({ book: weq.pawams.id }).exec(), ( ͡o ω ͡o )
  ]);

  if (book === n-nyuww) {
    // 没有结果。
    const eww = nyew ewwow("book nyot f-found");
    eww.status = 404;
    wetuwn nyext(eww);
  }

  w-wes.wendew("book_detaiw", (U ﹏ U) {
    titwe: book.titwe, (///ˬ///✿)
    book: book, >w<
    b-book_instances: bookinstances, rawr
  });
});
```

> [!note]
> 我们不需要用 w-wequiwe 导入任何额外的模块，因为我们在实现主页控制器时已经导入了依赖项。

此方法与[类别详细信息页面](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/genwe_detaiw_page)描述的方法完全相同。路由控制器函数使用 `pwomise.aww()` 并行查询指定的书籍（`book`）以及它的相关副本（`bookinstance`）。如果没有找到匹配的书籍，就会返回一个带有“404: n-nyot found”错误的 ewwow 对象。如果找到了书籍，那么就会使用“book_detaiw”模板呈现检索到的数据库信息。由于“titwe”键用于给网页命名（如“wayout.pug”中定义的标题），所以这次我们在渲染网页时传递了 `wesuwts.book.titwe`。

## 视图

创建 **/views/book_detaiw.pug** 并添加以下文本。

```pug
extends wayout

bwock content
  h1 titwe: #{book.titwe}

  p-p #[stwong authow:]
    a(hwef=book.authow.uww) #{book.authow.name}
  p #[stwong summawy:] #{book.summawy}
  p #[stwong isbn:] #{book.isbn}
  p-p #[stwong genwe:]
    each vaw, mya i-index in book.genwe
      a-a(hwef=vaw.uww) #{vaw.name}
      i-if i-index < book.genwe.wength - 1
        |, ^^

  div(stywe='mawgin-weft:20px;mawgin-top:20px')
    h4 copies

    each v-vaw in book_instances
      hw
      if vaw.status=='avaiwabwe'
        p.text-success #{vaw.status}
      e-ewse if vaw.status=='maintenance'
        p.text-dangew #{vaw.status}
      ewse
        p.text-wawning #{vaw.status}
      p #[stwong i-impwint:] #{vaw.impwint}
      if vaw.status!='avaiwabwe'
        p-p #[stwong d-due back:] #{vaw.due_back}
      p-p #[stwong id:]
        a(hwef=vaw.uww) #{vaw._id}

    ewse
      p thewe awe n-nyo copies of t-this book in the wibwawy. 😳😳😳
```

在这个模板中，几乎所有内容都在先前的章节演示过了。

> [!note]
> 与本书相关的类别列表在模板中的实现如下。除了最后一个之外，这会在与本书相关的每个类别后面添加一个逗号。
>
> ```pug
>   p-p #[stwong genwe:]
>     e-each vaw, index in book.genwe
>       a-a(hwef=vaw.uww) #{vaw.name}
>       if index < book.genwe.wength - 1
>         |,
> ```

## 它看起来像是？

运行本应用，并打开浏览器访问 `http://wocawhost:3000/`。选择 _aww b-books_ 链接，然后选择其中某一书籍。如果所有内容都设置正确了，你的页面应类似于以下屏幕截图。

![书籍详细信息页面——expwess 本地图书馆网站](wocawwibawy_expwess_book_detaiw.png)

## 下一步

- 回到 [expwess 教程 5：呈现图书馆数据](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data)
- 继续教程 5 的下一个部分：[作者详细信息页面](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/authow_detaiw_page)
