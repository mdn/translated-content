---
title: "Express 教程 5: 呈现图书馆数据"
slug: Learn/Server-side/Express_Nodejs/Displaying_data
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}

我们现在准备好要新增网页，以显示[本地图书馆网站](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)的书本与其他资料。这些网页将包含一个主页，显示我们拥有的每个模型的记录数，以及所有模型的清单和详细信息页面。借此，我们将获得从数据库获取记录、以及使用模板的实战经验。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">前置条件：</th>
      <td>
        完成先前教程主题 (包含
        <a href="/zh-CN/docs/Learn/Server-side/Express_Nodejs/routes"
          >Express 教程 Part 4: 路由与控制器</a
        >）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        <p>
          了解如何使用异步模组与 Pug 样版语言，以及如何从我们的控制器函数中的
          URL 取得信息。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 概览

在我们先前的教程中，定义了可以用来跟资料库互动的 [Mongoose models](/zh-CN/docs/Learn/Server-side/Express_Nodejs/mongoose) ，并创建了一些初始的图书馆记录。我们接着[创建本地图书馆网站需要的所有路由](/zh-CN/docs/Learn/Server-side/Express_Nodejs/routes) ，但仅使用"空壳控制器" 函数（这些是骨架控制器函数，当一个网页被存取时，只回传一个"未实现" 信息）。

下一步，是为这些显示图书馆信息的网页，提供适当的实现（我们将在后面的文章，聚焦网页表单的实现，像是创建、更新、删除信息）。这包含了更新控制器函数，以利用我们的模型获取记录，并定义模板，为用户显示这些信息。

我们在一开始，提供概述/入门主题，解释在控制器函数中，如何管理异步操作，以及如何使用 Pug 编写模板。然后我们将为每一个主要的 "只读" 页面提供实现步骤，并且在使用到任何特别的、新的特性时附上简短的解释说明。

本教程的最后，你对路由、异步函数、视图、模型如何实际运作，应该有了更好的理解。

## 本教程的章节

本教程分为下列章节，讲解了为了显示图书馆网站需求的页面而新增各种特性的过程。在进入下一个教程之前，你需要阅读并逐一实现下列章节。

1. [模版入门](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer)
2. [本地图书馆基础样版](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template)
3. [主页](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Home_page)
4. [书本清单页面](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page)
5. [书本实例清单页面](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page)
6. [日期格式化 - 使用 moment](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment)
7. [作者清单页面、分类清单页面挑战](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page)
8. [分类详情页面](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page)
9. [书本详情页面](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_detail_page)
10. [作者详情页面](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_detail_page)
11. [书本实例详情页面挑战](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge)

## 总结

我们现在已经为我们的网站，创建了所有 "只读" 的页面：一个主页，可以显示每一个模组的实例数量，书本的列表与详细信息页面，书本的实例、作者、分类。沿着目前的学习路径，我们学到了许多基本知识，有控制器、在异步操作时管理流控制、使用 Pug 创建视图模板、使用模型查询数据库、如何从视图传送信息到模板、如何创建并扩展模板。而完成挑战的人，还会学到如何用 moment 处理日期。

在下一篇文章，我们将依据目前为止学到的知识，创建 HTML 表单以及表单管理代码，开始修改储存在网站中的资料。

## 参见

- [Async](http://caolan.github.io/async/docs.html) 模组 (Async 模组官方文件)
- [在 Express 中使用模板引擎](https://expressjs.com/en/guide/using-template-engines.html) (Express 官方文件)
- [Pug](https://pugjs.org/api/getting-started.html) (Pug 官方文件)
- [Moment](http://momentjs.com/docs/) (Moment 官方文件)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}
