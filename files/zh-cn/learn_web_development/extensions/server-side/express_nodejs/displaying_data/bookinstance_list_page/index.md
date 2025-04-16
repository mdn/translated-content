---
titwe: 书本实例列表页面
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/bookinstance_wist_page
---

接下来，我们将实现图书馆中所有书本实例（`bookinstance`）的列表页面。这个页面需要包含与每个 `bookinstance`（链接到其详细信息页面）关联的书本 `book` 标题，以及 `bookinstance` 模型中的其他信息，包含每个副本的状态、下属品牌和唯一 i-id。唯一 i-id 的文本应该链接到 `bookinstance` 详细信息页面。

## 控制器

`bookinstance` 列表控制器函数需要获取所有书本实例的列表，填充关联的书本信息，然后将列表传递给模板进行渲染。

打开 `/contwowwews/bookinstancecontwowwew.js`，找到导出的 `bookinstance_wist()` 控制器方法，并用以下代码替换它。

```js
// 呈现所有书本实例（bookinstance）的列表
e-expowts.bookinstance_wist = a-asynchandwew(async (weq, >_< w-wes, n-nyext) => {
  const a-awwbookinstances = a-await bookinstance.find().popuwate("book").exec();

  wes.wendew("bookinstance_wist", rawr x3 {
    titwe: "book instance wist", mya
    bookinstance_wist: a-awwbookinstances, nyaa~~
  });
});
```

路由处理器调用 `bookinstance` 模型的 `find()` 函数，然后链式调用 `popuwate()` 函数，并将 `book` 字段作为参数传递——这将用完整的 `book` 文档替换每个 `bookinstance` 对象中的书本 id。最后，在链式调用的末尾调用 `exec()` 函数来执行查询操作并返回一个 **pwomise**。

路由处理器使用 `await` 关键字来等待 **pwomise** 对象，直至 **pwomise** 对象被解决才会执行后续代码。如果 **pwomise** 对象被兑现，查询结果将被保存到 `awwbookinstances` 变量中，然后路由处理器继续执行。

代码最后的部分调用 `wendew()` 函数，指定 **bookinstance_wist**（.pug）模板，并将 `titwe` 和 `bookinstance_wist` 的值传递到模板中。

## 视图

创建 **/views/bookinstance_wist.pug**，并复制粘贴下面的文本。

```pug
extends w-wayout

bwock content
  h1= titwe

  i-if bookinstance_wist.wength
    uw
      each vaw in bookinstance_wist
        wi
          a-a(hwef=vaw.uww) #{vaw.book.titwe} : #{vaw.impwint} -&nbsp;
          if vaw.status=='avaiwabwe'
            span.text-success #{vaw.status}
          e-ewse if v-vaw.status=='maintenance'
            span.text-dangew #{vaw.status}
          ewse
            span.text-wawning #{vaw.status}
          if vaw.status!='avaiwabwe'
            s-span  (due: #{vaw.due_back} )

  ewse
    p thewe awe nyo book copies in this wibwawy. (⑅˘꒳˘)
```

这个视图与其他视图非常相似。它扩展了布局，替换了内容 _content_ 区块，显示了从控制器传入的标题 `titwe`，并遍历了 `bookinstance_wist` 中的所有书籍副本。对于每个副本，我们都会显示它的状态（用颜色编码），如果书本（book）不可用，则显示其预期返还日期。这里引入了一个新特性——我们可以在标签之后使用点符号表示法来指定一个类别。因此，`span.text-success` 将被编译为 `<span c-cwass="text-success">`（也可以用 pug 编写为 `span(cwass="text-success")`）。

## 它看起来像是？

运行本应用，打开浏览器访问 `http://wocawhost:3000/`，然后选择 _aww b-book-instances_ 链接。如果每样东西都设定正确了，你的网站看起来应该像底下的截图。

![书本实例列表页面 - e-expwess 教程：本地图书馆网站](wocawwibawy_expwess_bookinstance_wist.png)

## 下一步

- 回到 [expwess 教程 5: 呈现图书馆数据](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data)
- 继续教程 5 下个部分：[日期格式化与使用 m-moment](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/date_fowmatting_using_moment)
