---
title: 书本实例列表页面
slug: Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page
---

接下来，我们将实作图书馆中所有书本实例 (`BookInstance`) 的列表页面。这个页面需要包含与每个 `BookInstance` (链接到其详细信息页面) 关联的书本 `Book` 标题，以及`BookInstance`模型中的其他信息，包含每个副本的状态，印记和唯一 ID。唯一 ID 的文字，应该链接到 `BookInstance` 详细信息页面。

## 控制器

`BookInstance`列表控制器函数，需要获取所有书本实例的列表，填充关联的书本信息，然后将列表传递给模板以进行呈现。

打开 **/controllers/bookinstanceController.js**。找到导出的 `bookinstance_list()` 控制器方法，并用以下代码替换它（更改后的代码以粗体显示）。

```js
// Display list of all BookInstances.
exports.bookinstance_list = function (req, res, next) {
  BookInstance.find()
    .populate("book")
    .exec(function (err, list_bookinstances) {
      if (err) {
        return next(err);
      }
      // Successful, so render
      res.render("bookinstance_list", {
        title: "Book Instance List",
        bookinstance_list: list_bookinstances,
      });
    });
};
```

此方法使用模型的`find()`函数，返回所有`BookInstance`对象。然后它将一个调用，以菊花链方式连接到`populate()`，附加书本`book`字段，这将使用完整的`Book`文档，替换每个`BookInstance`存储的书本 ID。

成功时，传递给查询的回调，会呈现 **bookinstance_list** (.pug) 模板，并将标题`title`和书籍实例列表`bookinstance_list`作为变量传递。

## 视图

创建 **/views/bookinstance_list.pug** ，並複制貼上底下的文字。

```js
extends layout

block content
  h1= title

  ul
  each val in bookinstance_list
    li
      a(href=val.url) #{val.book.title} : #{val.imprint} -
      if val.status=='Available'
        span.text-success #{val.status}
      else if val.status=='Maintenance'
        span.text-danger #{val.status}
      else
        span.text-warning #{val.status}
      if val.status!='Available'
        span  (Due: #{val.due_back} )

  else
    li There are no book copies in this library.
```

这个視图与其他視图非常相似。它扩展了布局，替换内容區块，显示从控制器传入的标题 `title`，并遍历 `bookinstance_list` 中的所有书籍副本。对于每个副本，我们都会显示它的状态（用颜色编码），如果书本不可用，则显示其预期返回日期。這裡引入了一个新功能 — 我们可以在标签之后使用点符号表示法，來指定一個类別。因此，`span.text-success` 将被编译为 `<span class="text-success">`（也可以用 Pug 编写为 `span(class="text-success")`）.

## 它看起來像是？

运行本应用，打开浏览器访问 <http://localhost:3000/>，然后选择 All book-instances 连结。假如每个东西都设定正确了，你的网站看起来应该像是底下的截图。

![BookInstance List Page - Express Local Library site](locallibary_express_bookinstance_list.png)

## 下一步

- 回到 [Express 教程 5: 呈现图书馆数据](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
- 继续教程 5 下个部分：[日期格式化与使用 moment](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment)
