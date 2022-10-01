---
title: 测试你的技能：面向对象的 Javascript
slug: Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript
original_slug: Learn/JavaScript/Objects/测试你的技能:面向对象的Javascript
---

{{learnsidebar}}这个测试的目的是为了评估你是否已经理解了我们的[适合初学者的 JavaScript 面向对象](/zh-CN/docs/Learn/JavaScript/Objects/Object-oriented_JS)，[对象原型](/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes)，和 [JavaScript 中的继承](/zh-CN/docs/Learn/JavaScript/Objects/Inheritance)文章。

> **备注：** 你可以尝试在下方的交互编辑器，但是若你下载源码或是使用在线工具例如 [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), 或 [Glitch](https://glitch.com/) 来进行这些项目的话，会更有帮助。
>
> 如果你在过程中想不出解决方案，你可以向我们寻求帮助——查看在本页的底部章节 [Assessment or further help](#assessment_or_further_help)。

> **备注：** 在下方的例子中，如果在你的代码中有错误内容的话，错误内容将在页面的结果面板进行显示，以此来帮助你想出解决方案（若是下载的版本，请进入浏览器的 JavaScript 控制台）。

## OOJS 1

In this task we provide you with a constructor. We want you to:

- Add a new method to the `Shape` class's prototype, `calcPerimeter()`, which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
- Create a new instance of the `Shape` class called `square`. Give it a `name` of `square` and a `sideLength` of `5`.
- Call your `calcPerimeter()` method on the instance, to see whether it logs the calculation result to the browser DevTools' console as expected.
- Create a new instance of `Shape` called `triangle`, with a `name` of `triangle` and a `sideLength` of `3`.
- Call `triangle.calcPerimeter()` to check that it works OK.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs1.html", '100%', 400)}}

> **备注：** [Download the starting point for this task](https://github.com/mdn/learning-area/tree/master/javascript/oojs/tasks/oojs/oojs1-download.html) to work in your own editor or in an online editor.

## OOJS 2

Next up we want you to take the `Shape` class you saw in Task #1 (including the `calcPerimeter()` method) and recreate it using ES class syntax instead.

Test that it works by creating the `square` and `triangle` object instances as before (using `new Shape()` for both), and then calling their `calcPerimeter()` methods.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs2.html", '100%', 400)}}

> **备注：** [Download the starting point for this task](https://github.com/mdn/learning-area/tree/master/javascript/oojs/tasks/oojs/oojs2-download.html) to work in your own editor or in an online editor.

## OOJS 3

Finally, we'd like you to start with the ES `Shape` class you created in the last task.

We'd like you to create a `Square` class that inherits from `Shape`, and adds a `calcArea()` method that calculates the square's area. Also set up the constructor so that the `name` property of `Square` object instances is automatically set to `square`, and the `sides` property is automatically set to `4`. When invoking the constructor, you should therefore just need to provide the `sideLength` property.

Create an instance of the `Square` class called `square` with appropriate property values, and call its `calcPerimeter()` and `calcArea()` methods to show that it works ok.

Try updating the live code below to recreate the finished example:

{{EmbedGHLiveSample("learning-area/javascript/oojs/tasks/oojs/oojs3.html", '100%', 400)}}

> **备注：** [Download the starting point for this task](https://github.com/mdn/learning-area/tree/master/javascript/oojs/tasks/oojs/oojs3-download.html) to work in your own editor or in an online editor.

## Assessment or further help

You can practice these examples in the Interactive Editors above.

If you would like your work assessed, or are stuck and want to ask for help:

1. Put your work into an online shareable editor such as [CodePen](https://codepen.io/), [jsFiddle](https://jsfiddle.net/), or [Glitch](https://glitch.com/). You can write the code yourself, or use the starting point files linked to in the above sections.
2. Write a post asking for assessment and/or help at the [MDN Discourse forum Learning category](https://discourse.mozilla.org/c/mdn/learn). Your post should include:

    - A descriptive title such as "Assessment wanted for OOJS 1 skill test".
    - Details of what you have already tried, and what you would like us to do, e.g. if you are stuck and need help, or want an assessment.
    - A link to the example you want assessed or need help with, in an online shareable editor (as mentioned in step 1 above). This is a good practice to get into — it's very hard to help someone with a coding problem if you can't see their code.
    - A link to the actual task or assessment page, so we can find the question you want help with.
