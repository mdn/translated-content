---
title: 使用 moment 做日期格式化
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment
---

我们模型的日期预设呈现很难看：_Tue Dec 06 2016 15:49:58 GMT+1100 (AUS Eastern Daylight Time)_。在本节中，我们将展示如何更新上一节中的 書本實例 BookInstance 列表页面，以更友好的格式显示`due_date`字段：December 6th, 2016。

我们将使用的方法，是在我们的`BookInstance`模型中，创建一个返回格式化日期的虚拟屬性。我们将使用[moment](https://www.npmjs.com/package/moment) 来做实际的格式化，这是一个轻量级 JavaScript 日期库，用于解析，验证，操作和格式化日期。

> **备注：** 我们可以直接在 Pug 模板中，使用 _moment_ 格式化字符串，或者可以在许多其他地方格式化字符串。使用虚拟属性，可以使我们获得格式化的日期，這与我们当前获取 `due_date` 的方式完全相同。

## 安装 moment

在项目的根目录，输入下列命令

```bash
npm install moment
```

## 创建虚拟属性

1. 打开 **./models/bookinstance.js**.
2. 在此页面最上方，引用 moment

   ```js
   var moment = require("moment");
   ```

在 url 属性后面，加入虚拟属性 `due_back_formatted` 。

```js
BookInstanceSchema.virtual("due_back_formatted").get(function () {
  return moment(this.due_back).format("MMMM Do, YYYY");
});
```

> **备注：** 格式化方法可以使用几乎任何模式显示日期。[moment 文档](http://momentjs.com/docs/#/displaying/)中，可以找到表示不同日期组件的语法。

## 更新视图

打开 **/views/bookinstance_list.pug** ，然后用 `due_back_formatted` 取代 `due_back` 。

```js
      if val.status!='Available'
        //span  (Due: #{val.due_back} )
        span  (Due: #{val.due_back_formatted} )
```

这就是本章节的全部了。如果你访问侧边栏的 All book-instances，你应该会看到所有的归还日期都更吸引人了！

## 下一步

- 回到 [Express 教程 5: 呈现图书馆数据](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
- 继续教程 5 下一個部分：[作者列表页面、种类列表页面、与自我挑战](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page)
