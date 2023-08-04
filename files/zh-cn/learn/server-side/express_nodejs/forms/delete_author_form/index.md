---
title: 删除作者表单
slug: Learn/Server-side/Express_Nodejs/forms/Delete_author_form
---

此子文档显示，如何定义页面以删除`Author`对象。

正如[表单设计](/zh-CN/docs/Learn/Server-side/Express_Nodejs/forms#form_design)部分所讨论的那样，我们的策略是，只允许删除“未被其他对象引用”的对象（在这种情况下，这意味着如果作者`Author`被一本书`Book`引用，我们将不允许删除作者）。在实现方面，这意味着，表单需要在删除作者之前，先确认没有关联的书籍。如果存在关联的书籍，则应显示它们，并说明在删除`Author`对象之前，必须删除它们。

## 控制器—get 路由

打开 **/controllers/authorController.js**。找到导出的`author_delete_get()` 控制器方法，并将其替换为以下代码。

```js
// Display Author delete form on GET.
exports.author_delete_get = function (req, res, next) {
  async.parallel(
    {
      author: function (callback) {
        Author.findById(req.params.id).exec(callback);
      },
      authors_books: function (callback) {
        Book.find({ author: req.params.id }).exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      if (results.author == null) {
        // No results.
        res.redirect("/catalog/authors");
      }
      // Successful, so render.
      res.render("author_delete", {
        title: "Delete Author",
        author: results.author,
        author_books: results.authors_books,
      });
    },
  );
};
```

控制器从 URL 参数（`req.params.id`）中，获取要删除的`Author`实例的 id。它使用`async.parallel()` 方法，并行获取作者记录和所有相关书本。当两个操作都完成后，它将呈现 **author_delete.pug** 视图，为 `title`、`author` 和 `author_books` 传递变量。

> **备注：** 如果`findById()`返回“没有结果”，则作者不在数据库中。在这种情况下，没有什么可以删除，所以我们立即呈现所有作者的列表。
>
> ```js
> }, function(err, results) {
>     if (err) { return next(err); }
>     if (results.author==null) { // No results.
>         res.redirect('/catalog/authors')
>     }
> ```

## 控制器—post 路由

找到导出的 `author_delete_post()` 控制器方法，并将其替换为以下代码。

```js
// Handle Author delete on POST.
exports.author_delete_post = function (req, res, next) {
  async.parallel(
    {
      author: function (callback) {
        Author.findById(req.body.authorid).exec(callback);
      },
      authors_books: function (callback) {
        Book.find({ author: req.body.authorid }).exec(callback);
      },
    },
    function (err, results) {
      if (err) {
        return next(err);
      }
      // Success
      if (results.authors_books.length > 0) {
        // Author has books. Render in same way as for GET route.
        res.render("author_delete", {
          title: "Delete Author",
          author: results.author,
          author_books: results.authors_books,
        });
        return;
      } else {
        // Author has no books. Delete object and redirect to the list of authors.
        Author.findByIdAndRemove(req.body.authorid, function deleteAuthor(err) {
          if (err) {
            return next(err);
          }
          // Success - go to author list
          res.redirect("/catalog/authors");
        });
      }
    },
  );
};
```

首先，我们验证是否已提供 id（这是通过表单主体参数发送的，而不是使用 URL 中的版本）。然后我们以与`GET`路由相同的方式，获得作者及其相关书本。如果没有书本，那么我们删除作者对象，并重定向到所有作者的列表。如果还有书本，那么我们只需重新呈现表格，传递作者和要删除的书本列表。

> **备注：** 我们可以检查对 `findById()` 的调用，是否返回任何结果，如果没有，则立即呈现所有作者的列表。为简洁起见，我们将代码保留在上面（如果找不到 id，它仍会返回作者列表，但这将在`findByIdAndRemove()`之后发生）。

## 视图

创建 **/views/author_delete.pug** 并复制贴上底下文字。

```plain
extends layout

block content
  h1 #{title}: #{author.name}
  p= author.lifespan

  if author_books.length

    p #[strong Delete the following books before attempting to delete this author.]

    div(style='margin-left:20px;margin-top:20px')

      h4 Books

      dl
      each book in author_books
        dt
          a(href=book.url) #{book.title}
        dd #{book.summary}

  else
    p Do you really want to delete this Author?

    form(method='POST' action='')
      div.form-group
        input#authorid.form-control(type='hidden',name='authorid', required='true', value=author._id )

      button.btn.btn-primary(type='submit') Delete
```

视图扩展了布局模板，覆盖了名为 `content` 的区块。在顶部显示作者详细信息。然后它包含一个，基于**`author_books`**（`if`和`else`子句）数量的条件语句。

- 如果存在与作者相关联的书本，则该页面列出书本，并说明在删除该作者 `Author` 之前，必须删除这些书籍。
- 如果没有书本，则页面会显示确认提示。如果单击“删除”**Delete**按钮，则会在`POST`请求中，将作者 ID 发送到服务器，并且将删除该作者的记录。

## 加入一个删除控制器

接下来，我们将向 Author 详细视图添加 **Delete** 控件（详细信息页面是删除记录的好地方）。

> **备注：** 在完整实现中，控件将仅对授权用户可见。但是在这个时间点上，我们还没有一个授权系统！

打开 **author_detail.pug** 视图，并在底部添加以下行。

```pug
hr
p
  a(href=author.url+'/delete') Delete author
```

控件现在应显示为链接，如下面的作者详细信息页面所示。

![](locallibary_express_author_detail_delete.png)

## 它看起來像是？

运行应用程序，并将浏览器打开，到<http://localhost:3000/>。然后选择所有作者链接 _All authors_，然后选择一个特定作者。最后选择删除作者链接 _Delete_ author。

如果作者没有书本，您将看到这样的页面。按删除后，服务器将删除作者并重定向到作者列表。

![](locallibary_express_author_delete_nobooks.png)

如果作者确实有书本，那么您将看到如下视图。然后，您可以从其详细信息页面中，删除这些书本（一旦该代码被实现！）。

![](locallibary_express_author_delete_withbooks.png)

> **备注：** 其他删除对象的页面，可以用相同的方式实现。我们把它留下，作为挑战。

## 下一步

- 回到 [Express 教程 6: 使用表单](/zh-CN/docs/Learn/Server-side/Express_Nodejs/forms)
- 继续教程 6 子文档的下一步：[更新书本表单](/zh-CN/docs/Learn/Server-side/Express_Nodejs/forms/Update_Book_form)
