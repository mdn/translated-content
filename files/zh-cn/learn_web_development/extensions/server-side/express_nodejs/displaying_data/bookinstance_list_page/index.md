---
title: 书本实例列表页面
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page
original_slug: Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page
---

接下来，我们将实现图书馆中所有书本实例（`BookInstance`）的列表页面。这个页面需要包含与每个 `BookInstance`（链接到其详细信息页面）关联的书本 `Book` 标题，以及 `BookInstance` 模型中的其他信息，包含每个副本的状态、下属品牌和唯一 ID。唯一 ID 的文本应该链接到 `BookInstance` 详细信息页面。

## 控制器

`BookInstance` 列表控制器函数需要获取所有书本实例的列表，填充关联的书本信息，然后将列表传递给模板进行渲染。

打开 `/controllers/bookinstanceController.js`，找到导出的 `bookinstance_list()` 控制器方法，并用以下代码替换它。

```js
// 呈现所有书本实例（BookInstance）的列表
exports.bookinstance_list = asyncHandler(async (req, res, next) => {
  const allBookInstances = await BookInstance.find().populate("book").exec();

  res.render("bookinstance_list", {
    title: "Book Instance List",
    bookinstance_list: allBookInstances,
  });
});
```

路由处理器调用 `BookInstance` 模型的 `find()` 函数，然后链式调用 `populate()` 函数，并将 `book` 字段作为参数传递——这将用完整的 `Book` 文档替换每个 `BookInstance` 对象中的书本 id。最后，在链式调用的末尾调用 `exec()` 函数来执行查询操作并返回一个 **Promise**。

路由处理器使用 `await` 关键字来等待 **Promise** 对象，直至 **Promise** 对象被解决才会执行后续代码。如果 **Promise** 对象被兑现，查询结果将被保存到 `allBookInstances` 变量中，然后路由处理器继续执行。

代码最后的部分调用 `render()` 函数，指定 **bookinstance_list**（.pug）模板，并将 `title` 和 `bookinstance_list` 的值传递到模板中。

## 视图

创建 **/views/bookinstance_list.pug**，并复制粘贴下面的文本。

```pug
extends layout

block content
  h1= title

  if bookinstance_list.length
    ul
      each val in bookinstance_list
        li
          a(href=val.url) #{val.book.title} : #{val.imprint} -&nbsp;
          if val.status=='Available'
            span.text-success #{val.status}
          else if val.status=='Maintenance'
            span.text-danger #{val.status}
          else
            span.text-warning #{val.status}
          if val.status!='Available'
            span  (Due: #{val.due_back} )

  else
    p There are no book copies in this library.
```

这个视图与其他视图非常相似。它扩展了布局，替换了内容 _content_ 区块，显示了从控制器传入的标题 `title`，并遍历了 `bookinstance_list` 中的所有书籍副本。对于每个副本，我们都会显示它的状态（用颜色编码），如果书本（book）不可用，则显示其预期返还日期。这里引入了一个新特性——我们可以在标签之后使用点符号表示法来指定一个类别。因此，`span.text-success` 将被编译为 `<span class="text-success">`（也可以用 Pug 编写为 `span(class="text-success")`）。

## 它看起来像是？

运行本应用，打开浏览器访问 `http://localhost:3000/`，然后选择 _All book-instances_ 链接。如果每样东西都设定正确了，你的网站看起来应该像底下的截图。

![书本实例列表页面 - Express 教程：本地图书馆网站](locallibary_express_bookinstance_list.png)

## 下一步

- 回到 [Express 教程 5: 呈现图书馆数据](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data)
- 继续教程 5 下个部分：[日期格式化与使用 moment](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment)
