---
title: 本地图书馆基础模板
slug: Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template
---

现在我们了解如何使用 Pug 拓展模板，让我们开始项目，创建一个基础模板。这个模板会有一个侧边栏，连结到本教程中将要创建的各个页面（例如，呈现并创建书本、种类、作者等等），以及一个主要内容区域，我们将在每个页面中进行覆写。

开启 **/views/layout.pug** ，并以下列代码置换其内容。

```pug
doctype html
html(lang='en')
  head
    title= title
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width, initial-scale=1')
    link(rel='stylesheet', href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css')
    script(src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js')
    script(src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js')
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    div(class='container-fluid')
      div(class='row')
        div(class='col-sm-2')
          block sidebar
            ul(class='sidebar-nav')
              li
                a(href='/catalog') Home
              li
                a(href='/catalog/books') All books
              li
                a(href='/catalog/authors') All authors
              li
                a(href='/catalog/genres') All genres
              li
                a(href='/catalog/bookinstances') All book-instances
              li
                hr
              li
                a(href='/catalog/author/create') Create new author
              li
                a(href='/catalog/genre/create') Create new genre
              li
                a(href='/catalog/book/create') Create new book
              li
                a(href='/catalog/bookinstance/create') Create new book instance (copy)

        div(class='col-sm-10')
          block content
```

此模板使用（并包含）来自 [Bootstrap](http://getbootstrap.com/) 的 JavaScript 和 CSS，以改进 HTML 页面的布局和呈现方式。使用 Bootstrap 或其他客户端网页框架，是一种快速的方式，可以创建吸引人的网页，能够良好地适应不同的浏览器尺寸，并且允许我们处理页面的呈现，而不需要纠缠于任何不同尺寸的细节—此处我们只想专注于伺服端代码！

布局的安排应该相当明白，假如你已经阅读了之前的 [模板入门](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data#Template_primer)。注意，使用 `block content` 当做定位符号，放到页面内容将要放置的地方。

基础模板也参考了一个本地 css 档 (**style.css**) ，此档提供了一些额外的样式。打开 **/public/stylesheets/style.css** ，并用底下的 CSS 代码，取代它的内容：

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

当我们开始运行网站时，我们应该看到侧边栏出现！在本教程的下个部分，我们将使用以上的布局，来定义各个页面。

## 下一步

- 回到 [Express 教程 5: 呈现图书馆数据](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
- 继续教程 5 的下個部分：[主页](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Home_page)
