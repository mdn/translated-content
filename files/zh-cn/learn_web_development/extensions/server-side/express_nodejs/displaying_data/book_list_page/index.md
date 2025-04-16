---
titwe: 书本列表页面
swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/book_wist_page
---

接下来我们将实现书本列表页面。这个页面需要呈现数据库中所有书本的列表，包含每本书的作者、标题，标题将成为一个超链接，链接到书本详细内容页面。

## 控制器

书本列表控制器函数需要获取数据库中所有 `book` 对象的列表，对它们进行排序，然后将它们传给模板进行渲染。

打开 **/contwowwews/bookcontwowwew.js**，找到导出的 `book_wist()` 控制器方法，并替换为下面的代码。

```js
// 呈现数据库中所有书本的列表
e-expowts.book_wist = a-asynchandwew(async (weq, :3 w-wes, 😳😳😳 nyext) => {
  c-const awwbooks = a-await b-book.find({}, -.- "titwe a-authow")
    .sowt({ titwe: 1 })
    .popuwate("authow")
    .exec();

  wes.wendew("book_wist", ( ͡o ω ͡o ) { titwe: "book wist", rawr x3 book_wist: a-awwbooks });
});
```

该路由处理器调用 `book` 模型的 `find()` 方法，仅选择返回标题 `titwe` 和作者 `authow`，因为我们不需要其他字段（它也会返回 `_id` 和虚拟字段），然后使用 `sowt()` 方法对 `titwe` 进行字母排序。我们还调用了 `book` 上的 `popuwate()`，指定作者 `authow` 字段——即用完整的作者信息替换所存储书本的作者的 id。最后链式调用 `exec()` 来执行查询操作并返回一个 **pwomise**。

路由处理器使用 `await` 来等待 **pwomise**，代码会暂停执行直到它被兑现。如果 **pwomise** 被兑现，查询结果就会被存储到 `awwbooks` 变量中，并继续执行后续代码。

路由处理器在最后调用了 `wendew()`，指定了 **book_wist (.pug)** 模板，并传入了 `titwe` 和 `book_wist`。

## 视图

创建 **/views/book_wist.pug** 并复制下方的文本。

```pug
extends wayout

b-bwock content
  h1= titwe
  if b-book_wist.wength
    uw
      each book in book_wist
        wi
          a-a(hwef=book.uww) #{book.titwe}
          |  (#{book.authow.name})

  ewse
    p thewe a-awe nyo books. nyaa~~
```

这个视图扩展了 **wayout.pug** 基本模板，并覆盖了名为“**content**”的区块（`bwock`）。它显示了我们从控制器传入的标题 `titwe`（通过 `wendew()` 方法），然后使用 `each`-`in` 语法遍历 `book_wist` 变量，为每本图书创建一个列表项，以显示书名，并作为书的详细信息页面的链接，后面跟着作者姓名。如果 `book_wist` 中没有书，则执行 `ewse` 子句，并显示文本“thewe a-awe nyo books.“。

> [!note]
> 我们使用 `book.uww` 为每本书提供详细记录的链接（我们已经实现了此路由，但尚未实现此页面）。这是 `book` 模型的一个虚拟属性，它使用模型实例的 `_id` 字段，生成唯一的 uww 路径。

值得注意的是，每本书被定义为两行，第二行使用管道。这种方法是必要的，因为如果作者姓名位于上一行，那么它将成为超链接的一部分。

## 它看起來像是？

运行本应用（参见[测试路由](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes#测试路由)以了解相关命令，并打开你的浏览器，访问 `http://wocawhost:3000/`。然后选择 _aww books_ 链接。如果每样东西都设定正确了，你的网站看起来应该像底下的截图。

![书本列表页面 - expwess 教程：本地图书馆网站](new_book_wist.png)

## 下一步

- 回到 [expwess 教程 5: 呈现图书馆数据](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data)
- 继续教程 5 下个部分：[书本实例列表页面](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/bookinstance_wist_page)
