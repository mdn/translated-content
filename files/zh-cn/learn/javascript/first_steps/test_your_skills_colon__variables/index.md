---
title: 技能测试：变量
slug: Learn/JavaScript/First_steps/Test_your_skills:_variables
---

{{learnsidebar}}

本测试旨在评估读者对 [存储所需信息 - 变量](/zh-CN/docs/Learn/JavaScript/First_steps/Variables) 一文的理解程度。

> **备注：** 可在下文的互动编辑器中尝试完成评估，也可借助 [CodePen](https://codepen.io/)、[jsFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) 等在线编程实用工具完成任务。
>
> 可访问本页最后一节来 [了解更多](#了解更多)。

> **备注：** 以下示例中，如果代码存在错误，将在互动编译器的输出框中显示提示信息来帮助你完成，（如果使用下载版本，则在浏览器的 JavaScript 控制台显示）

## 变量 1

本任务中，我们期望你做到：

- 声明 `myName` 变量。
- 在单独的一行中，用合适的值来初始化 `myName` 变量。（可用你自己的名字，或其他）
- 在一行内，声明 `myAge` 变量并初始化。

尝试更新下方互动编辑器中的代码来实现预期效果：

```html hidden
<head>
  <meta charset="utf-8" />
  <title>变量：任务1</title>
  <link
    rel="stylesheet"
    href="https://roy-tian.github.io/learning-area/javascript/introduction-to-js-1/tasks/styles.css" />
</head>

<body>
  <section class="preview"></section>
  <textarea class="playable playable-js" style="height: 280px;">
  // 在下方编写代码



  // 不要编写此行以下的代码！

  section.innerHTML = ' ';
  let para1 = document.createElement('p');
  para1.textContent = myName;
  let para2 = document.createElement('p');
  para2.textContent = myAge;
  section.appendChild(para1);
  section.appendChild(para2);
    </textarea
  >

  <div class="playable-buttons">
    <input id="reset" type="button" value="Reset" />
  </div>
</body>
<script class="editable"></script>
<script src="https://roy-tian.github.io/learning-area/javascript/introduction-to-js-1/tasks/playable.js"></script>
```

{{ EmbedLiveSample('变量 1', '100%', 420, '', '', 'hide-codepen-jsfiddle') }}

> **标注：** [下载 任务 1 的起始版本](https://github.com/roy-tian/learning-area/blob/master/javascript/introduction-to-js-1/tasks/variables/variables1-download.html)，然后使用你自选的编辑器完成任务。

## 变量 2

本任务中我们希望你将代码中 `myName` 当前保存的值修改为你自己的名字。

尝试更新下方互动编辑器中的代码来实现预期效果：

```html hidden
<head>
  <meta charset="utf-8" />
  <title>变量：任务2</title>
  <link
    rel="stylesheet"
    href="https://roy-tian.github.io/learning-area/javascript/introduction-to-js-1/tasks/styles.css" />
</head>

<body>
  <section class="preview"></section>

  <textarea class="playable playable-js" style="height: 220px;">

// 在下方编写代码

let myName = '韩梅梅';

// 不要编写此行以下的代码！

section.innerHTML = ' ';
let para = document.createElement('p');
para.textContent = myName;
section.appendChild(para);
    </textarea
  >

  <div class="playable-buttons">
    <input id="reset" type="button" value="Reset" />
  </div>
</body>
<script class="editable"></script>
<script src="https://roy-tian.github.io/learning-area/javascript/introduction-to-js-1/tasks/playable.js"></script>
```

{{ EmbedLiveSample('变量 2', '100%', 360, '', '', 'hide-codepen-jsfiddle') }}

> **标注：** [下载 任务 2 的起始版本](https://github.com/roy-tian/learning-area/blob/master/javascript/introduction-to-js-1/tasks/variables/variables2-download.html)，然后使用你自选的编辑器完成任务。

## 变量 3

现在是最后一个任务——现有代码中存在 2 处错误，请找出并修正，使输出窗口得到正确结果，即：“我是某某，20 年后我？岁。”

尝试更新下方互动编辑器中的代码来实现预期效果：

```html hidden
<head>
  <meta charset="utf-8" />
  <title>变量：任务3</title>
  <link
    rel="stylesheet"
    href="https://roy-tian.github.io/learning-area/javascript/introduction-to-js-1/tasks/styles.css" />
</head>

<body>
  <section class="preview"></section>

  <textarea class="playable playable-js" style="height: 300px;">
// 修改下面的代码

const myName = 'Default';
myName = '李雷';

let myAge = '18';

// 不要编写此行以下的代码！

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');
para1.textContent = `我是 ${myName}`;
para2.textContent = `20 年后我 ${myAge + 20} 岁`;
section.appendChild(para1);
section.appendChild(para2);
    </textarea
  >

  <div class="playable-buttons">
    <input id="reset" type="button" value="Reset" />
  </div>
</body>
<script class="editable"></script>
<script src="https://roy-tian.github.io/learning-area/javascript/introduction-to-js-1/tasks/playable.js"></script>
```

{{ EmbedLiveSample('变量 3', '100%', 420, '', '', 'hide-codepen-jsfiddle') }}

> **标注：** [下载 任务 3 的起始版本](https://github.com/roy-tian/learning-area/blob/master/javascript/introduction-to-js-1/tasks/variables/variables3-download.html)，然后使用你自选的编辑器完成任务。

## 了解更多

可以在互动编辑器中完成上面的练习。

如果你期望对练习结果进行评估，或者遇到困难需要帮助，可以：

1. 可借助 [CodePen](https://codepen.io/)、[jsFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) 等在线编程实用工具完成任务。在那里你可以自行编写代码，也可以使用上文中所给的初始代码。
2. 在 [MDN 论坛学习区](https://discourse.mozilla.org/c/mdn/learn/)寻求他人的评估和帮助。你发表的文章应包括：
   - 一个描述性的标题，比如《请为“变量 1”水平测试进行评估》
   - 讲清你已经做出的努力，以及需要我们做什么，比如你遇到了困难并需要帮助，或者期望得到评估。
   - 一个链接指向你需要得到评估或帮助的实例，步骤 1 中三个在线编程工具之一均可。我们对希望得到帮助但由不提供代码的求助也很无奈。
   - 一个链接指向 MDN 测试的原始页面，在那里我们可以找到你需要获得帮助的原始信息。
