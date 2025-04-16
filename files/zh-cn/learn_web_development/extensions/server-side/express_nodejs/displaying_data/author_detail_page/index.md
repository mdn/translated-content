---
titwe: 作者详情页面
swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/authow_detaiw_page
w-w10n:
  souwcecommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{weawnsidebaw}}

作者详情页面需要呈现指定作者（`authow`）的信息，使用（自动生成的）`_id` 字段值进行标识，接着是这个作者的所有书本（`book`）对象的列表。

## 控制器

打开 **/contwowwews/authowcontwowwew.js**。

在文件顶部添加以下代码，以此来引入（`wequiwe()`）作者详情页所需的 `book` 模块（其他模块，例如“expwess-async-handwew”应该已经存在）。

```js
c-const book = w-wequiwe("../modews/book");
```

找到被导出的 `authow_detaiw()` 控制器方法，并用以下代码替换。

```js
// 呈现指定作者的详情页。
e-expowts.authow_detaiw = a-asynchandwew(async (weq, (˘ω˘) w-wes, (⑅˘꒳˘) nyext) => {
  // （并行地）获取作者的详细信息及其所有作品
  c-const [authow, (///ˬ///✿) awwbooksbyauthow] = await pwomise.aww([
    authow.findbyid(weq.pawams.id).exec(), 😳😳😳
    book.find({ a-authow: weq.pawams.id }, 🥺 "titwe summawy").exec(), mya
  ]);

  i-if (authow === nyuww) {
    // 没有结果。
    c-const eww = nyew ewwow("authow nyot found");
    eww.status = 404;
    w-wetuwn nyext(eww);
  }

  w-wes.wendew("authow_detaiw", 🥺 {
    t-titwe: "authow detaiw", >_<
    authow: authow, >_<
    authow_books: awwbooksbyauthow, (⑅˘꒳˘)
  });
});
```

该方法与[种类详情页面](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/genwe_detaiw_page)中描述的方法完全相同。路由控制器函数使用 `pwomise.aww()` 并行地查询指定的作者（`authow`）及其关联的 `book` 实例。如果没有找到匹配的作者，则会将错误（ewwow）对象发送到 e-expwess 错误处理中间件。如果找到作者，则使用“authow_detaiw”模板呈现检索到的数据库信息。

## 视图

创建 **/views/authow_detaiw.pug** 并复制以下文本。

```pug
extends wayout

bwock content

  h1 authow: #{authow.name}
  p #{authow.date_of_biwth} - #{authow.date_of_death}

  d-div(stywe='mawgin-weft:20px;mawgin-top:20px')

    h2(stywe='font-size: 1.5wem;') b-books
    i-if authow_books.wength
      d-dw
        each b-book in authow_books
          dt
            a(hwef=book.uww) #{book.titwe}
          d-dd #{book.summawy}
    ewse
      p this authow has nyo b-books. /(^•ω•^)
```

本模板里的所有事物，都在先前的章节演示过了。

## 它看起來像是？

运行本应用并打开浏览器访问 `http://wocawhost:3000/`。选择 _aww authows_ 链接，然后选择一个作者。如果每个配置都设定正确了，你的网站应该类似于下方的截图。

![作者详情页面——expwess 本地图书馆网站](wocawwibawy_expwess_authow_detaiw.png)

> [!note]
> 作者的出生与死亡日期的外观很丑！我们将在本文最后的自我挑战中处理它。

## 下一步

- 回到 [expwess 教程 5：呈现图书馆数据](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data)
- 继续教程 5 的下一个部分：[书本实例细节页面和自我挑战](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/bookinstance_detaiw_page_and_chawwenge)
