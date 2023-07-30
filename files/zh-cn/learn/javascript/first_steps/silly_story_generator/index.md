---
title: 笑话生成器
slug: Learn/JavaScript/First_steps/Silly_story_generator
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

本节是一个小测验，要求你运用所学知识制作一个笑话生成器。祝玩的愉快！

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>请读完本章所有小节的内容后再开始这个测验。</td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        测试你对变量、数字、操作符、字符串和数组等 Javascript
        基本概念的理解程度。
      </td>
    </tr>
  </tbody>
</table>

## 起点

测验开始之前需要下载并保存 [index.html](https://github.com/roy-tian/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/index.html)、[style.css](https://github.com/roy-tian/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/style.css)、[raw-text.txt](https://github.com/roy-tian/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/raw-text.txt)。

> **备注：** 你还可以用类似 [JSBin](http://jsbin.com/) 或 [Glitch](https://glitch.com/) 这些在线编辑器来完成测验。你可以把 HTML、CSS 及 JavaScript 代码复制过去。如果你选的工具没有独立的 JavaScript 版面，可以随时在 HTML 页面中添加 `<script>` 元素。

## 项目简介

我们提供了一些原始的 HTML / CSS，以及若干字符串和 JavaScript 函数，还需要你来编写一些 JavaScript 代码让项目运行起来：

- 点击“随机生成笑话”按钮时生成一则笑话。
- 若“生成”按钮按下之前，你在“输入自定义的名字”文字框中输入了一个自定义名字，那么生成的笑话中原有的名字（李雷 / Bob）将被取代。
- 通过选择国家名称的单选按钮来确定界面语言以及笑话中温度和重量的制式。
- 点一次按钮，生成一个新故事。点一次生成一个……

可以尝试操作一下：（别偷看源代码哦！）

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      body {
        font-family: helvetica, sans-serif;
        width: 350px;
        border: 1px solid;
        padding: 1em;
      }
      label {
        font-weight: bold;
      }
      div {
        padding-bottom: 20px;
      }
      input[type="text"] {
        padding: 5px;
        width: 150px;
      }
      p {
        background: #ffc125;
        color: #5e2612;
        padding: 10px;
        visibility: hidden;
      }
    </style>
  </head>

  <body>
    <div>
      <label for="customname" id="lbl-customname">请输入自定义的名字：</label>
      <input id="customname" type="text" placeholder="李雷" />
    </div>
    <div>
      <label for="metric">公制</label
      ><input id="metric" type="radio" name="measure" value="metric" checked />
      <label for="american">美制</label
      ><input id="american" type="radio" name="measure" value="american" />
    </div>
    <div>
      <button class="randomize">随机生成笑话</button>
    </div>
    <!-- Thanks a lot to Willy Aguirre for his help with the code for this assessment -->
    <p class="story"></p>

    <script>
      const customName = document.getElementById("customname");
      const randomize = document.querySelector(".randomize");
      const story = document.querySelector(".story");

      function randomValueFromArray(array) {
        const random = Math.floor(Math.random() * array.length);
        return array[random];
      }

      let storyText =
        "今天气温 35 摄氏度，:insertx:出门散步。当走到:inserty:门前时，突然就:insertz:。人们都惊呆了，李雷全程目睹但并没有慌，因为:insertx:是一个 140 公斤的胖子，天气又辣么热。";
      let insertX = ["怪兽威利", "大老爹", "圣诞老人"];
      let insertY = ["肯德基", "迪士尼乐园", "白宫"];
      let insertZ = ["自燃了", "在人行道化成了一坨泥", "变成一只鼻涕虫爬走了"];

      randomize.addEventListener("click", result);

      function result() {
        let newStory = storyText;

        let xItem = randomValueFromArray(insertX);
        let yItem = randomValueFromArray(insertY);
        let zItem = randomValueFromArray(insertZ);

        newStory = newStory.replace(":insertx:", xItem);
        newStory = newStory.replace(":insertx:", xItem);
        newStory = newStory.replace(":inserty:", yItem);
        newStory = newStory.replace(":insertz:", zItem);

        if (customName.value !== "") {
          const name = customName.value;
          newStory = newStory.replace("李雷", name);
        }

        if (document.getElementById("american").checked) {
          const weight = Math.round(140 * 2.20462) + " 磅";
          const temperature = Math.round((35 * 9) / 5 + 32) + " 华氏度";
          newStory = newStory.replace("35 摄氏度", temperature);
          newStory = newStory.replace("140 公斤", weight);
        }

        story.textContent = newStory;
        story.style.visibility = "visible";
      }
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('项目简介', '100%', 350) }}

> **备注：** 点击在线试用汉化版本。有兴趣还可以在本节结束后回来 [看看代码](https://github.com/roy-tian/learning-area/tree/master/javascript/introduction-to-js-1/assessment-finished)。（没兴趣就跳过吧 :）

## 步骤

以下是你的工作。

初始化变量和函数：

1. 将刚下载的文本文件中的“1. 定义变量和函数”标题项下所有代码复制粘贴至 main.js 中。此时你就有了三个变量（`customName` 是对“输入自定义的名字”文本框的引用，`randomize` 是对“随机生成笑话”按钮的引用，`story` 是对 HTML 底部的、准备存放笑话的 {{htmlelement("p")}} 元素的引用）和一个函数（`randomValueFromArray()` 取一个数组作参数，随机返回数组中的一个元素）。
2. 然后是文本文件的第二节——“2. 纯文本字符串”。这里包含了一些字符串，这些字符串是项目的输入信息。你应该在 main.js 文件中用变量来保存它们。

   1. 用 `storyText` 变量保存第一个长字符串，“今天气温……”。
   2. 用 `insertX` 数组保存第一组三个字符串，“怪兽威利……”。
   3. 用 `insertY` 数组保存第二组三个字符串。“肯德基……”。
   4. 用 `insertZ` 数组保存第三组三个字符串。“自燃了……”。

放置事件处理器并补全：

1. 返回刚才的文本文件。
2. 将“3. 事件监听器和未完成的函数定义”标题项下的代码复制粘贴至 `main.js` 文件。这将：

   - 为 `randomize` 变量增加一个点击事件的监听器。于是当所引用的按钮被点击时，`result()` 函数就会运行。
   - 为代码添加一个未完成的 `result()` 函数定义。本测验剩下的工作就是完成这个函数，让程序正常运行起来。

补全 `result()` 函数：

1. 将 `newStory` 的值设置为 `storyText`。声明新变量有必要的，只有这样才能在每次按下按钮后、在函数运行时生成一个新的随机笑话。如果直接操作 `storyText` 则只能生成一次新故事
2. 将 `xItem`、`yItem` 和 `zItem` 分别设置为 `randomValueFromArray(insertX)`、`randomValueFromArray(insertY)` 和 `randomValueFromArray(insertZ)`。
3. 接下来将 `newStory` 中的占位符（`:inserta:`、`:insertb:` 和 `:insertc:` ）替换为 `xItem`、`yItem` 和 `zItem`。有专用的字符串方法可供使用，并用该方法的返回值为 `newStory` 赋值。每当按下按钮时，这些占位符都会替换为随机的笑话字符串。再给你一点提示，我们所说的这种方法每次只会将所找到的首个子字符串进行替换，因此该方法对某个占位符需要执行两次。
4. 在第一个 `if` 块中再次调用这个字符串替换方法，以使 `newStory` 字符串中的名字“李雷”替换为变量 `name` 的值。这里我们说：“如果 `customName` 中有值，就把故事里的“李雷”替换成它。”如果是汉化版将 newStory 中的“李雷”替换成 `name` 的值；
5. 在第二个 `if` 块中检查 `american` 单选按钮是否被选中。如果选中，就要将故事中的重量和温度值从公斤和摄氏度转换为磅和华氏度，具体事项如下：

   1. 确定英美单位的转换公式。
   2. 定义变量 `weight`、`temperature` 的行中，分别将美制单位按公式转化为英制，用 `Math.round()` 对计算结果取整。然后将英式单位连接到末尾。
   3. 就在上述两个变量的定义下方增加两个字符串置换操作，将“35 摄氏度”替换为 `temperature` 的值，将“140 公斤”替换为 `weight` 的值。

6. 最后，在函数倒数第二行，将 `story.textContent`（程序中显示笑话结果的段落）赋值为 `newStory`。

## 提示

- 除了在 HTML 文件中引入这个 JavaScript 文件之外，完全不需要编辑 HTML。
- 如果你不确定当前 JavaScript 是否正确添加到了你的 HTML 中，可以尝试暂时删除 JavaScript 文件的所有内容，然后加上一些简单但效果显著的 JavaScript 代码，保存文件并刷新浏览器。下面的示例会让 {{htmlelement("html")}} 背景变为红色，如果 JavaScript 成功加载，那么整个浏览器窗口将变红：

  ```js
  document.querySelector("html").style.backgroundColor = "red";
  ```

- [`Math.round()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round) 是 Javascript 的内建函数，可取得与传入小数最接近的整数。
- 本示例中有三类字符串需要替换。可以多次重复 `replace()` 方法，也可使用正则表达式。例如：`var text = 'I am the biggest lover, I love my love';` 或 `text.replace(/love/g,'like');` 会将所有的“love”替换为“like”。记住，字符串本身是不可修改的！

## 测验

如果你是在课堂上进行这个测验，你可以把作品交给导师或教授去打分了。如果你是在自学，也可以在 [本节测验的讨论页](https://discourse.mozilla.org/t/silly-story-generator-assessment/24686) 或者 [Mozilla 聊天室](https://wiki.mozilla.org/IRC) 的 [#mdn](irc://irc.mozilla.org/mdn) 频道取得帮助。要自己先尝试，作弊是不会有收获的！

{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}
