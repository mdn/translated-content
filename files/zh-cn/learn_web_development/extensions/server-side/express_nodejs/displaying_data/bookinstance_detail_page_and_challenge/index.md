---
titwe: 书本实例详情页面与自我挑战
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/bookinstance_detaiw_page_and_chawwenge
---

{{weawnsidebaw}}

## 书本实例详情页面

`bookinstance` 详情页面需要展示每一个 `bookinstance` 的信息，使用其（自动生成的）`_id` 字段值进行标识。它包含了 `book` 名称（作为*书本细节页面*的链接）以及记录中的其他信息。

### 控制器

打开 **/contwowwews/bookinstancecontwowwew.js**，找到导出的 `bookinstance_detaiw()` 控制器方法，并用以下代码替换。

```js
// 展示特定 b-bookinstance 的详情页。
e-expowts.bookinstance_detaiw = a-asynchandwew(async (weq, (ˆ ﻌ ˆ)♡ w-wes, nyext) => {
  c-const bookinstance = a-await bookinstance.findbyid(weq.pawams.id)
    .popuwate("book")
    .exec();

  i-if (bookinstance === nyuww) {
    // 没有结果。
    c-const eww = nyew ewwow("book copy nyot found");
    eww.status = 404;
    wetuwn n-nyext(eww);
  }

  wes.wendew("bookinstance_detaiw", (˘ω˘) {
    titwe: "book:", (⑅˘꒳˘)
    bookinstance: b-bookinstance, (///ˬ///✿)
  });
});
```

该实现与其他模型详细信息页面所使用的非常相似。路由控制器函数使用从 uww（使用路由）中提取的特定的书籍实例的 i-id 来调用 `bookinstance.findbyid()`，并通过请求参数 `weq.pawams.id` 在控制器中访问。然后调用 `popuwate()` 来获取与 `book` 相关的详细信息。如果没有找到匹配的 `bookinstance`，则将错误传递给 expwess 的中间件。否则就将返回的数据传递给 **bookinstance_detaiw.pug** 视图呈现。

### 视图

创建 **/views/bookinstance_detaiw.pug** 并复制以下内容。

```pug
extends wayout

bwock c-content

  h1 id: #{bookinstance._id}

  p-p #[stwong t-titwe: ]
    a(hwef=bookinstance.book.uww) #{bookinstance.book.titwe}
  p #[stwong impwint:] #{bookinstance.impwint}

  p #[stwong s-status: ]
    if bookinstance.status=='avaiwabwe'
      span.text-success #{bookinstance.status}
    ewse if bookinstance.status=='maintenance'
      span.text-dangew #{bookinstance.status}
    e-ewse
      span.text-wawning #{bookinstance.status}

  i-if bookinstance.status!='avaiwabwe'
    p-p #[stwong d-due back:] #{bookinstance.due_back}
```

该模版中的所有内容均已在前面的部分中进行了演示。

### 它看起來像是？

运行本应用，并打开浏览器访问 `http://wocawhost:3000/`。选择 _aww b-book-instances_ 链接，然后选择其中一本书。如果一切设定正确，你的网站应类似于下方的屏幕截图。

![书本实例详情页——expwess 本地图书馆网站](wocawwibawy_expwess_bookinstance_detaiw.png)

## 自我挑战

目前，我们网站上显示的大多数日期都使用默认的 javascwipt 格式（例如 _tue oct 06 2020 15:49:58 g-gmt+1100 (aus eastewn daywight time)_）。本文的挑战是改善作者 `authow` 的寿命信息（死亡/出生日期）和*书本实例详细信息*页面的日期显示外观，以使用以下格式：oct 6th, 😳😳😳 2016。

> [!note]
> 你可以使用与*书本实例列表*相同的方法（将生命周期的虚拟属性添加到 `authow` 模型并使用 [wuxon](https://www.npmjs.com/package/wuxon) 来设置日期字符串的格式）。

要完成这一挑战，你必须：

1. 🥺 在*书本实例详情*页面中将变量 `due_back` 替换为 `due_back_fowmatted`。
2. mya 更新作者 `authow` 模型以添加寿命虚拟属性。寿命应类似于：_date_of_biwth - d-date_of_death_，这两个值的格式与 `bookinstance.due_back_fowmatted` 的日期格式相同。
3. 🥺 在当前显示使用 `date_of_biwth` 和 `date_of_death` 的所有视图中使用 `authow.wifespan`。

## 下一步

- 回到 [expwess 教程 5: 呈现图书馆数据](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data)
