---
title: 作者清单面页、分类清单页面挑战
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page
---

作者列表页面，需要呈现数据库中所有作者的列表，有每位作者的名字，并连结到作者详细内容页面。出生与死亡日期应该在名字后面，并且在同一列。

## 控制器

作者列表控制器函数，需要获取所有作者实例的列表，然后将这些实例传递给模板进行渲染。

打开 **/controllers/authorController.js**。在文件顶部附近，找到导出的 `author_list()` 控制器方法，并将其替换为以下代码（更改后的代码以粗体显示）。

```js
// Display list of all Authors.
exports.author_list = function (req, res, next) {
  Author.find()
    .sort([["family_name", "ascending"]])
    .exec(function (err, list_authors) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.render("author_list", {
        title: "Author List",
        author_list: list_authors,
      });
    });
};
```

该方法使用模型的 `find()`, `sort()` 和 `exec()` 函数，以返回所有 `Author` 对象，并按 `family_name` 的字母顺排列。传递给 `exec()` 方法的回调被调用，并将传入任何错误（或 `null`）作为第一个参数，或者成功时，传入所有作者列表。如果出现错误，则调用带有错误值的下一个中间件函数，如果没有错误，则呈现 **author_list**（.pug）模板，传递页面标题 `title`，和作者列表（`author_list`）。

## 视图

打开 **/views/author_list.pug** ，用底下文字取代它的内容。

```js
extends layout

block content
  h1= title

  ul
  each author in author_list
    li
      a(href=author.url) #{author.name}
      | (#{author.date_of_birth} - #{author.date_of_death})

  else
    li There are no authors.
```

如同我们其他的模板，上面视图也依照着同样的模式。

## 它看起來像是？

运行本应用，并打开浏览器访问 <http://localhost:3000/> 。然后选择所有作者 All authors 连结。如果每个东西都设定正确了，页面看起来应该像底下的截图。

![Author List Page - Express Local Library site](locallibary_express_author_list.png)

> **备注：** 作者生命日期的外观是丑陋的！您可以使用我们用于`BookInstance` 列表的[相同方法](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data#date_formatting)（将生命周期的虚拟属性，添加到 `Author` 模型），来改进此方法。
>
> 但是，这次缺少日期，除非严格模式生效，否则将忽略对不存在的属性的引用。`moment()`返回当前时间，并且您不希望将缺少的日期格式化为就像今天一样。
>
> 解决此问题的一种方法，是定义返回格式化日期的函数内容，以便返回空字符串，除非日期实际存在。例如：
>
> `return this.date_of_birth ? moment(this.date_of_birth).format('YYYY-MM-DD') : '';`

## 种类列表页面—自我挑战！

在这个部分，你应该实作你自己的种类列表页面。该页面应显示数据库中所有种类的列表，每个种类都链接到其关联的详细信息页面。预期结果的屏幕截图如下所示。

![Genre List - Express Local Library site](locallibary_express_genre_list.png)

种类列表控制器功能，需要获取所有种类实例的列表，然后将这些实例传递给模板进行渲染。

1. 您需要在 **/controllers/genreController.js** 中编辑`genre_list()`。
2. 实现方式几乎与`author_list()`控制器完全相同。

   - 按名称以上升顺序，对结果进行排序。

3. 要呈现的模板，应命名为 **genre_list.pug**。
4. 要呈现的模板应该传递变量`title`（'Genre List'）和种类列表`genre_list`（从`Genre.find()`回调返回）。
5. 该视图应与上面的屏幕截图/要求相匹配（这应该与作者列表视图具有非常相似的结构/格式，除了种类没有日期）。

## 下一步

回到 [Express 教程 5: 呈现图书馆数据](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data)

继续教程 5 下一個部分：[种类细节页面](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page)
