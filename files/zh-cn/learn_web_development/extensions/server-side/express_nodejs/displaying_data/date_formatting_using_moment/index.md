---
title: 使用 luxon 做日期格式化
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment
original_slug: Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

我们模型的默认日期呈现很难看：_Fri Apr 10 2020 12:49:58 GMT+0800 (中国标准时间)_。在本节中，我们将展示如何更新上一节中的*书本实例列表*页面，以更友好的格式显示 `due_date` 字段：2023 年 4 月 10 日。

我们使用的方法是在 `BookInstance` 模型中创建一个返回格式化日期的虚拟屬性。我们将使用 [luxon](https://www.npmjs.com/package/luxon) 来做格式化，这是一个功能强大、现代化并且非常友好的 JavaScript 日期库，用于解析、验证、操作、格式化和本地化日期。

> [!NOTE]
> 我们可以直接在 Pug 模板中使用 _luxon_ 格式化字符串，也可以在其他地方格式化字符串。使用虚拟属性允许我们以与当前获取 `due_date` 完全相同的方式获取格式化日期。

## 安装 luxon

在项目的根目录，输入下列命令

```bash
npm install luxon
```

## 创建虚拟属性

1. 打开 **./models/bookinstance.js**。
2. 在此页面最上方，引用 _luxon_。

   ```js
   const { DateTime } = require("luxon");
   ```

在 URL 属性后面加入虚拟属性 `due_back_formatted`。

```js
BookInstanceSchema.virtual("due_back_formatted").get(function () {
  return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});
```

> [!NOTE]
> Luxon 可以导入多种格式的字符串，并导出为预定义格式和自由格式。在本例中，我们使用 `fromJSDate()` 导入 JavaScript 日期字符串，然后使用 `toLocaleString()` 以 `DATE_MED` 格式输出中文日期：2024 年 8 月 9 日。有关其他格式和日期字符串国际化的信息，请参考 Luxon 文档的 [formatting](https://github.com/moment/luxon/blob/master/docs/formatting.md#formatting) 部分。

## 更新视图

打开 **/views/bookinstance_list.pug**，然后用 `due_back_formatted` 取代 `due_back`。

```pug
if val.status != 'Available'
  //span  (Due: #{val.due_back} )
  span  (Due: #{val.due_back_formatted} )
```

这就是本章节的全部了。如果你访问侧边栏的 _All book-instances_，你应该会看到所有的归还日期变得更吸引人了！

## 下一步

- 回到 [Express 教程 5: 呈现图书馆数据](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data)
- 继续教程 5 下一个部分：[作者清单面页、分类清单页面挑战](/zh-CN/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page)
