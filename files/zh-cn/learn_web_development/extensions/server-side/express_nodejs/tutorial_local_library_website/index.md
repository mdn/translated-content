---
title: Express 教程：本地图书馆网站
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website
original_slug: Learn/Server-side/Express_Nodejs/Tutorial_local_library_website
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

在实战教程第一节中，你将了解要学习哪些内容，对「本地图书馆」示例网站有一个初步的印象。本章接下来的内容就是逐步完成这个网站。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        阅读
        <a href="/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction"
          >Express 入门</a
        >。进行以后的小节还需要阅读
        <a
          href="/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment"
          >配置 Node 开发环境</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">学习目标：</th>
      <td>引入本教程的示例应用，了解所涉及的所有主题。</td>
    </tr>
  </tbody>
</table>

## 概览

欢迎来到 MDN "本地图书馆" Express (Node) 教程，我们将开发一个管理本地图书馆编目的网站。

本系列教程中，你将：

- 使用 _Express_ 应用生成器创建一个应用骨架。
- 启动和停止 Node web 服务器。
- 使用数据库存放应用数据。
- 创建路由来处理不同信息的请求，创建模板（"视图"）来渲染 HTML 数据以在浏览器中显示。
- 使用表单。
- 部署应用到生产环境。

你可能已经学过（或之前接触过）其中的部分主题。学完系列教程后，你就拥有足够技能独立开发简单的 Express 应用了。

## 本地图书馆网站（LocalLibrary）

我们给本地图书馆网站起一个名字——LocalLibrary，这个名字将始终伴随本教程。顾名思义，此网站是为一家小型本地图书馆提供线上图书编目而建，用户可以能够浏览馆藏书目，还能管理自己的帐号。

本示例是精心挑选的，它规模灵活，可以根据我们的需求进行自由调整。还能演示绝大多数 Express 特性。更重要的是，这里提供的指引对所有网站都适用：

- 教程前几节中我们将定义一个简单的、只能浏览的图书馆，会员可以在网站找书。通过这几节我们来学习大多数网站都会涉及的一项操作：从数据库读取并呈现内容。
- 随着教程的进展，图书馆的示例子会逐步扩充，以演示更高级的网站特征。比如我们会加入新增书目的功能，以此来演示表单和用户授权的用法。

尽管这个示例具备相当可观的扩展度，但依然有理由把它叫做**本地**图书馆（**Local**Library）。我们希望呈现给你最少的信息，从而帮助你尽快上手并运行 Express。因此，我们只保留书名、本数、作者以及其他关键信息。我们会省略掉其他可能用到的信息，也不会提供多图书馆架构或“大型图书馆"等特性的支持。

## 我被难住了，哪里有源代码？

本教程进行过程中，我们将在每个知识点为你提供适当的代码片段，其中一些内容我们希望你能（在一定指引下）自己填充。

别总是复制粘贴这些片段，试着独立完成，长期来看这样做是有好处的，你下次编写类似代码时将更熟练。

如果实在进行不下去，可以参考 [Github](https://github.com/mdn/express-locallibrary-tutorial) 上的完整版本。

> [!NOTE]
> 本教程中的代码，已在特定版本（项目的 [package.json](https://github.com/mdn/express-locallibrary-tutorial/blob/master/package.json) 所列版本）的 node、Express 及其他模组的环境下通过测试。

## 总结

现在，你对 LocalLibrary 网站和即将学习的东西又多了解了一点，下面，我们开始创建一个用于存放它的 [框架](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) 吧！

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
