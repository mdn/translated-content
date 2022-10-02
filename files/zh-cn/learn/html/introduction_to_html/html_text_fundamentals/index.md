---
title: HTML 文字处理基础
slug: Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

HTML 的主要工作是编辑文本结构和文本内容（也称为语义{{glossary("semantics")}}），以便浏览器能正确的显示。本文介绍了 {{glossary("HTML")}}的使用方法：在一段文本中添加标题和段落，强调语句，创建列表等等。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">先决条件：</th>
      <td>
        阅读
        <a href="/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >开始学习 HTML</a
        >，了解基本的 HTML 知识。
      </td>
    </tr>
    <tr>
      <th scope="row">目的：</th>
      <td>
        学习如何用标记 (段落、标题、列表、强调、引用)
        来建立基础文本页面的文本结构和文本内容。
      </td>
    </tr>
  </tbody>
</table>

## 基础：标题和段落

大部分的文本结构由标题和段落组成。不管是小说、报刊、教科书还是杂志等。

![An example of a newspaper front cover, showing use of a top level heading, subheadings and paragraphs.](newspaper_small.jpg)

内容结构化会使读者的阅读体验更轻松，更愉快。

在 HTML 中，每个段落是通过 {{htmlelement("p")}} 元素标签进行定义的，比如下面这样：

```html
<p>我是一个段落，千真万确。</p>
```

每个标题（Heading）是通过“标题标签”进行定义的：

```html
<h1>我是文章的标题</h1>
```

这里有六个标题元素标签 —— `<h1>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`、`<h6>`。每个元素代表文档中不同级别的内容; `<h1>` 表示主标题（the main heading），`<h2>` 表示二级子标题（subheadings），`<h3>` 表示三级子标题（sub-subheadings），等等。

### 编辑结构层次

这里举一个例子。在一个故事中，\<h1>表示故事的名字，\<h2>表示每个章节的标题， \<h3>表示每个章节下的子标题，以此类推。

```html
<h1>三国演义</h1>

<p>罗贯中</p>

<h2>第一回 宴桃园豪杰三结义 斩黄巾英雄首立功</h2>

<p>话说天下大势，分久必合，合久必分。周末七国分争，并入于秦。及秦灭之后，楚、汉分争，又并入于汉……</p>

<h2>第二回 张翼德怒鞭督邮 何国舅谋诛宦竖</h2>

<p>且说董卓字仲颖，陇西临洮人也，官拜河东太守，自来骄傲。当日怠慢了玄德，张飞性发，便欲杀之……</p>

<h3>却说张飞</h3>

<p>却说张飞饮了数杯闷酒，乘马从馆驿前过，见五六十个老人，皆在门前痛哭。飞问其故，众老人答曰：“督邮逼勒县吏，欲害刘公；我等皆来苦告，不得放入，反遭把门人赶打！”……</p>
```

所涉及的元素具体代表什么，完全取决于作者编辑的内容，只要层次结构是合理的。在创建此类结构时，您只需要记住一些最佳实践：

- 您应该最好只对每个页面使用一次\<h1> — 这是顶级标题，所有其他标题位于层次结构中的下方。
- 请确保在层次结构中以正确的顺序使用标题。不要使用\<h3>来表示副标题，后面跟\<h2>来表示副副标题 - 这是没有意义的，会导致奇怪的结果。
- 在可用的六个标题级别中，您应该只在每页使用不超过三个，除非您认为有必要使用更多。具有许多级别的文档（即，较深的标题层次结构）变得难以操作并且难以导航。在这种情况下，如果可能，建议将内容分散在多个页面上。

### 为什么我们需要结构化？

回答这个问题前，让我们先来看一段文档示例“[text-start.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-start.html)” — 并从运行这段文档示例（美味的豆沙食谱）开始。首先，您可以复制一份并保存到本地机器上，在之后的练习中您将用到它。在这个文档的主体（body）中包含了多个内容 — 这些内容没有做任何标记，但是编辑时使用了换行 (输入回车/换行跳转到下一行) 处理。

然而，当您在浏览器中打开文档时，您会看到文本显示为一整块！

![A webpage that shows a wall of unformatted text, because there are no elements on the page to structure it.](screen_shot_2017-03-29_at_09.20.35.png)

这是因为没有元素给内容结构，所以浏览器不知道什么是标题，什么是段落。此外：

- 用户在阅读网页时，往往会快速浏览以查找相关内容，经常只是阅读开头的标题（我们通常在一个网页上会花费很少的时间 [spend a very short time on a web page](http://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/))。如果用户不能在几秒内看到一些有用的内容，他们很可能会感到沮丧并离开。
- 对您的网页建立索引的搜索引擎将标题的内容视为影响网页搜索排名的重要关键字。没有标题，您的网页在{{glossary("SEO")}}（搜索引擎优化）方面效果不佳。
- 严重视力障碍者通常不会阅读网页；他们用听力来代替。完成这项工作的软件叫做屏幕阅读器（[screen reader](http://en.wikipedia.org/wiki/Screen_reader)）。该软件提供了快速访问给定文本内容的方法。在使用的各种技术中，它们通过朗读标题来提供文档的概述，让用户能快速找到他们需要的信息。如果标题不可用，用户将被迫听到整个文档的大声朗读。
- 使用{{glossary("CSS")}}样式化内容，或者使用{{glossary("JavaScript")}}做一些有趣的事情，你需要包含相关内容的元素，所以 CSS / JavaScript 可以有效地定位它。

因此，我们需要给我们的内容结构标记。

### 实践操作：编辑我们的内容结构

让我们直接跳进一个实例。在下面的示例中，向“Input”字段中的原始文本添加元素，使其在“Output”字段中显示为标题和两个段落。

如果您犯了错误，您可以使用*重置*按钮进行重置。如果卡住，请按*显示解决方案*按钮以查看答案。

```html hidden
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: '微软雅黑', Helvetica, Arial, sans-serif; margin: 10px; background: #f5f9fa; }
      h2 { font-size: 16px; }
      code, textarea { font-family: Consolas, Menlo, monospace; }
      .output { min-height: 200px; }
      .input { min-height: 100px; width: 95%; }
      .a11y-label { margin: 0; text-align: right; font-size: 0.7rem; width: 98%; }
      .controls { width: 96%; text-align: right; }
    </style>

  </head>
  <body>
    <h2>实时输出</h2>
    <div class="output"></div>

    <h2>可编辑代码</h2>
    <p class="a11y-label">按 ESC 退出编辑区域，按 Tab 可插入制表符 <code>'\t'</code> </p>
    <textarea id="code" class="input"></textarea>

    <div class="controls">
      <button id="btn-reset">重置</button>
      <button id="btn-solution">显示答案</button>
    </div>
    <script>
        const btnReset = document.getElementById('btn-reset');
        const btnSolution = document.getElementById('btn-solution');
        const blockOutput = document.querySelector('.output');
        const blockInput = document.querySelector('.input');
        const original = '静夜思 床前明月光 疑是地上霜 举头望明月 低头思故乡';
        const answer =
`<h1>静夜思</h1>
<p>床前明月光 疑是地上霜</p>
<p>举头望明月 低头思故乡</p>`;
        let userEntry = "";

        init();
        btnReset.addEventListener('click', init);

        btnSolution.addEventListener('click', () => {
          if (btnSolution.textContent === '显示答案') {
            blockInput.value =
            blockOutput.innerHTML = answer;
            btnSolution.textContent = '隐藏答案';
          } else {
            blockInput.value =
            blockOutput.innerHTML = userEntry;
            btnSolution.textContent = '显示答案';
          }
        });

        blockInput.addEventListener('keydown', (e) => {
          switch (e.key) {
          case 'Tab':
            e.preventDefault();
            insertAtCursor('\t');
            break;
          case "Escape":
            blockInput.blur();
            break;
          }
        });

        blockInput.addEventListener('keyup', () => {
          userEntry = blockInput.value;
          blockOutput.innerHTML = blockInput.value;
          if (btnSolution.textContent === '隐藏答案') {
            btnSolution.textContent = '显示答案';
          }
        });

        function init() {
          userEntry =
          blockOutput.innerHTML =
          blockInput.value = original;
          btnSolution.textContent = '显示答案';
        }

        function insertAtCursor(text) {
          const scrollPos = blockInput.scrollTop;
          const cursorPos = blockInput.selectionStart;

          const front = blockInput.value.substring(0, cursorPos);
          const back = blockInput.value.substring(
            blockInput.selectionEnd, blockInput.value.length);

          blockInput.value = front + text + back;
          blockInput.selectionStart =
          blockInput.selectionEnd = cursorPos + text.length;
          blockInput.focus();
          blockInput.scrollTop = scrollPos;
        }
      </script>
  </body>
</html>
```

{{ EmbedLiveSample('实践操作：编辑我们的内容结构', 700, 500) }}

### 为什么我们需要语义？

在我们身边的任何地方都要依赖语义学 — 我们依靠以前的经验就知道日常事物都代表什么；当我们看到什么，我们就会知道它代表什么。举个例子，我们知道红色交通灯表示“停止”，绿色交通灯表示”通行“。如果运用了错误的语义，事情会迅速地变得非常棘手 (难道有某个国家使用红色代表通行？我不希望如此)

同样的道理，我们需要确保使用了正确的元素来给予内容正确的意思、作用以及外形。在这里，{{htmlelement("h1")}} 元素也是一个语义元素，它给出了包裹在您的页面上用来表示顶级标题的角色（或意义）的文本。

```html
<h1>这是一个顶级标题</h1>
```

一般来说，浏览器会给它一个更大的字形来让它看上去像个标题（虽然你可以使用 CSS 让它变成任何你想要的样式。更重要的是，它的语义值将以多种方式被使用，比如通过搜索引擎和屏幕阅读器（上文提到过的）。

在另一方面，你可以让任一元素看起来像一个顶级标题，如下：

```html
<span style="font-size: 32px; margin: 21px 0;">这是顶级标题吗？</span>
```

这是一个 {{htmlelement("span")}} 元素，它没有语义。当您想要对它用 CSS（或者 JS）时，您可以用它包裹内容，且不需要附加任何额外的意义（在未来的课程中你会发现更多这类元素）。我们已经对它使用了 CSS 来让它看起来像一个顶级标题。然而，由于它没有语义值，所以它不会有任何上文提到的帮助。最好的方法是使用相关的 HTML 元素来标记这个项目。

## 列表

现在，让我们学习一下列表。列表在生活中随处可见——从购物清单到回家的路线方案，再到本教程的说明列表。在网络上，列表也随处可见，大致包含了三种不同类型的列表。

### 无序 Unordered

无序列表用于标记列表项目顺序无关紧要的列表 — 让我们以早点清单为例。

```
豆浆
油条
豆汁
焦圈
```

每份无序的清单从 {{htmlelement("ul")}} 元素开始——需要包裹清单上所有被列出的项目：

```html
<ul>
豆浆
油条
豆汁
焦圈
</ul>
```

然后就是用 {{htmlelement("li")}} 元素把每个列出的项目单独包裹起来：

```html
<ul>
  <li>豆浆</li>
  <li>油条</li>
  <li>豆汁</li>
  <li>焦圈</li>
</ul>
```

#### 实践操作：标记无序列表

尝试编辑下面的示例来创建一个 HTML 无序列表。

```html hidden
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: '微软雅黑', Helvetica, Arial, sans-serif; margin: 10px; background: #f5f9fa; }
      h2 { font-size: 16px; }
      code, textarea { font-family: Consolas, Menlo, monospace; }
      .output { min-height: 100px; }
      .input { min-height: 100px; width: 95%; }
      .a11y-label { margin: 0; text-align: right; font-size: 0.7rem; width: 98%; }
      .controls { width: 96%; text-align: right; }
    </style>

  </head>
  <body>
    <h2>实时输出</h2>
    <div class="output"></div>

    <h2>可编辑代码</h2>
    <p class="a11y-label">按 ESC 退出编辑区域，按 Tab 可插入制表符 <code>'\t'</code> </p>
    <textarea id="code" class="input"></textarea>

    <div class="controls">
      <button id="btn-reset">重置</button>
      <button id="btn-solution">显示答案</button>
    </div>
    <script>
        const btnReset = document.getElementById('btn-reset');
        const btnSolution = document.getElementById('btn-solution');
        const blockOutput = document.querySelector('.output');
        const blockInput = document.querySelector('.input');
        const original = '豆浆 油条 豆汁 焦圈';
        const answer =
`<ul>
<li>豆浆</li>
<li>油条</li>
<li>豆汁</li>
<li>焦圈</li>
</ul>`;
        let userEntry = "";

        init();
        btnReset.addEventListener('click', init);

        btnSolution.addEventListener('click', () => {
          if (btnSolution.textContent === '显示答案') {
            blockInput.value =
            blockOutput.innerHTML = answer;
            btnSolution.textContent = '隐藏答案';
          } else {
            blockInput.value =
            blockOutput.innerHTML = userEntry;
            btnSolution.textContent = '显示答案';
          }
        });

        blockInput.addEventListener('keydown', (e) => {
          switch (e.key) {
          case 'Tab':
            e.preventDefault();
            insertAtCursor('\t');
            break;
          case "Escape":
            blockInput.blur();
            break;
          }
        });

        blockInput.addEventListener('keyup', () => {
          userEntry = blockInput.value;
          blockOutput.innerHTML = blockInput.value;
          if (btnSolution.textContent === '隐藏答案') {
            btnSolution.textContent = '显示答案';
          }
        });

        function init() {
          userEntry =
          blockOutput.innerHTML =
          blockInput.value = original;
          btnSolution.textContent = '显示答案';
        }

        function insertAtCursor(text) {
          const scrollPos = blockInput.scrollTop;
          const cursorPos = blockInput.selectionStart;

          const front = blockInput.value.substring(0, cursorPos);
          const back = blockInput.value.substring(
            blockInput.selectionEnd, blockInput.value.length);

          blockInput.value = front + text + back;
          blockInput.selectionStart =
          blockInput.selectionEnd = cursorPos + text.length;
          blockInput.focus();
          blockInput.scrollTop = scrollPos;
        }
      </script>
  </body>
</html>
```

{{ EmbedLiveSample('实践操作：标记无序列表', 700, 400) }}

### 有序 Ordered

有序列表需要按照项目的顺序列出来——让我们以一组方向为例：

```
沿着条路走到头
右转
直行穿过第一个十字路口
在第三个十字路口处左转
继续走 300 米，学校就在你的右手边
```

这个标记的结构和无序列表一样，除了需要用{{htmlelement("ol")}} 元素将所有项目包裹，而不是`<ul>：`

```html
<ol>
  <li>沿着条路走到头</li>
  <li>右转</li>
  <li>直行穿过第一个十字路口</li>
  <li>在第三个十字路口处左转</li>
  <li>继续走 300 米，学校就在你的右手边</li>
</ol>
```

#### 实践操作：标记有序列表

尝试编辑下面的示例来创建一个 HTML 有序列表：

```html hidden
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: '微软雅黑', Helvetica, Arial, sans-serif; margin: 10px; background: #f5f9fa; }
      h2 { font-size: 16px; }
      code, textarea { font-family: Consolas, Menlo, monospace; }
      .output { min-height: 120px; }
      .input { min-height: 120px; width: 95%; }
      .a11y-label { margin: 0; text-align: right; font-size: 0.7rem; width: 98%; }
      .controls { width: 96%; text-align: right; }
    </style>

  </head>
  <body>
    <h2>实时输出</h2>
    <div class="output"></div>

    <h2>可编辑代码</h2>
    <p class="a11y-label">按 ESC 退出编辑区域，按 Tab 可插入制表符 <code>'\t'</code> </p>
    <textarea id="code" class="input"></textarea>

    <div class="controls">
      <button id="btn-reset">重置</button>
      <button id="btn-solution">显示答案</button>
    </div>
    <script>
        const btnReset = document.getElementById('btn-reset');
        const btnSolution = document.getElementById('btn-solution');
        const blockOutput = document.querySelector('.output');
        const blockInput = document.querySelector('.input');
        const original =
`沿着条路走到头
右转
直行穿过第一个十字路口
在第三个十字路口处左转
继续走 300 米，学校就在你的右手边`;
        const answer =
`<ol>
  <li>沿着条路走到头</li>
  <li>右转</li>
  <li>直行穿过第一个十字路口</li>
  <li>在第三个十字路口处左转</li>
  <li>继续走 300 米，学校就在你的右手边</li>
</ol>`;
        let userEntry = "";

        init();
        btnReset.addEventListener('click', init);

        btnSolution.addEventListener('click', () => {
          if (btnSolution.textContent === '显示答案') {
            blockInput.value =
            blockOutput.innerHTML = answer;
            btnSolution.textContent = '隐藏答案';
          } else {
            blockInput.value =
            blockOutput.innerHTML = userEntry;
            btnSolution.textContent = '显示答案';
          }
        });

        blockInput.addEventListener('keydown', (e) => {
          switch (e.key) {
          case 'Tab':
            e.preventDefault();
            insertAtCursor('\t');
            break;
          case "Escape":
            blockInput.blur();
            break;
          }
        });

        blockInput.addEventListener('keyup', () => {
          userEntry = blockInput.value;
          blockOutput.innerHTML = blockInput.value;
          if (btnSolution.textContent === '隐藏答案') {
            btnSolution.textContent = '显示答案';
          }
        });

        function init() {
          userEntry =
          blockOutput.innerHTML =
          blockInput.value = original;
          btnSolution.textContent = '显示答案';
        }

        function insertAtCursor(text) {
          const scrollPos = blockInput.scrollTop;
          const cursorPos = blockInput.selectionStart;
          const front = blockInput.value.substring(0, cursorPos);
          const back = blockInput.value.substring(
            blockInput.selectionEnd, blockInput.value.length);
          blockInput.value = front + text + back;
          blockInput.selectionStart =
          blockInput.selectionEnd = cursorPos + text.length;
          blockInput.focus();
          blockInput.scrollTop = scrollPos;
        }
      </script>
  </body>
</html>
```

{{ EmbedLiveSample('实践操作：标记有序列表', 700, 500) }}

### 实践操作：标记我们的食谱

到了这里，你拥有了所有你需要的信息来标记我们的食谱样例。你可以选择从[text-start.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-start.html)复制一份文件并保存在本地，打开它进行编辑，或者在下面的例子中进行编辑。因为在本地你可以保存你的项目，所以在本地做这个工作可能更好。而如果你在下面可编辑的样本中作业，下一次你打开这个网站时你可能会丢失你的数据。各有利弊吧。

```html hidden
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: '微软雅黑', Helvetica, Arial, sans-serif; margin: 10px; background: #f5f9fa; }
      h2 { font-size: 16px; }
      code, textarea { font-family: Consolas, Menlo, monospace; }
      .output { min-height: 200px; }
      .input { min-height: 200px; width: 95%; }
      .a11y-label { margin: 0; text-align: right; font-size: 0.7rem; width: 98%; }
      .controls { width: 96%; text-align: right; }
    </style>

  </head>
  <body>
    <h2>实时输出</h2>
    <div class="output"></div>

    <h2>可编辑代码</h2>
    <p class="a11y-label">按 ESC 退出编辑区域，按 Tab 可插入制表符 <code>'\t'</code> </p>
    <textarea id="code" class="input"></textarea>

    <div class="controls">
      <button id="btn-reset">重置</button>
      <button id="btn-solution">显示答案</button>
    </div>
    <script>
        const btnReset = document.getElementById('btn-reset');
        const btnSolution = document.getElementById('btn-solution');
        const blockOutput = document.querySelector('.output');
        const blockInput = document.querySelector('.input');
        const original =
`宫保鸡丁的做法
宫保鸡丁，川菜系中的传统名菜，由鸡丁、干辣椒、花生米等炒制而成。由于其入口鲜辣，鸡肉的鲜嫩配合花生的香脆，广受大众欢迎。
相传宫保鸡丁是清朝光绪年间的署理四川总督丁宝桢所发明，是他招待客人时叫家厨煮的菜肴。由于丁宝桢后来被封为东宫少保（太子少保），所以被称为“丁宫保”，而这道菜亦被称为“宫保鸡丁”

原料
去骨鸡胸肉：一斤八两
干红辣椒：八钱
炸花生米：一两五钱
花椒粒：两大匙
葱：两根（切段）
蛋白：一个
淀粉：三大匙
酱油：两大匙
蒜末：半茶匙
糖：半茶匙
白醋：一茶匙
色拉油：适量
盐：两茶匙

做法
先用蛋白一个、盐半茶匙及淀粉两大匙搅拌均匀，调成“腌料”，鸡胸肉切成约一厘米见方的碎丁并用“腌料”搅拌均匀，腌渍半小时。
用酱油一大匙、淀粉水一大匙、糖半茶匙、盐四分之一茶匙、白醋一茶匙、蒜末半茶匙调拌均匀，调成“综合调味料”。
鸡丁腌好以后，色拉油下锅烧热，先将鸡丁倒入锅内，用大火快炸半分钟，炸到变色之后，捞出来沥干油汁备用。
在锅里留下约两大匙油，烧热后将切好的干辣椒下锅，用小火炒香后，再放入花椒粒和葱段一起爆香。随后鸡丁重新下锅，用大火快炒片刻后，再倒入“综合调味料”继续快炒。
如果你采用正宗川菜做法，最后只需加入花生米，炒拌几下就可以起锅了。
如果你在北方，可加入黄瓜丁、胡萝卜丁和花生米，翻炒后起锅。

大千鸡
张大千居加拿大期间，曾按自己喜好改变宫保鸡丁的做法，并传授当地厨师，厨师将之命名为“大千鸡”，以兹纪念。大千鸡与宫保鸡丁不同之处，是使用经细工去皮、出骨、剔膜的鸡腿肉，以干辣椒、豆瓣酱为味，而且不用花生。
`;
        const answer =
`<h1>宫保鸡丁的做法</h1>
<p>宫保鸡丁，川菜系中的传统名菜，由鸡丁、干辣椒、花生米等炒制而成。由于其入口鲜辣，鸡肉的鲜嫩配合花生的香脆，广受大众欢迎。</p>
<p>相传宫保鸡丁是清朝光绪年间的署理四川总督丁宝桢所发明，是他招待客人时叫家厨煮的菜肴。由于丁宝桢后来被封为东宫少保（太子少保），所以被称为“丁宫保”，而这道菜亦被称为“宫保鸡丁”</p>

<h2>原料</h2>
<ul>
  <li>去骨鸡胸肉：一斤八两</li>
  <li>干红辣椒：八钱</li>
  <li>炸花生米：一两五钱</li>
  <li>花椒粒：两大匙</li>
  <li>葱：两根（切段）</li>
  <li>蛋白：一个</li>
  <li>淀粉：三大匙</li>
  <li>酱油：两大匙</li>
  <li>蒜末：半茶匙</li>
  <li>糖：半茶匙</li>
  <li>白醋：一茶匙</li>
  <li>色拉油：适量</li>
  <li>盐：两茶匙</li>
</ul>

<h2>做法</h2>
<ol>
  <li>先用蛋白一个、盐半茶匙及淀粉两大匙搅拌均匀，调成“腌料”，鸡胸肉切成约一厘米见方的碎丁并用“腌料”搅拌均匀，腌渍半小时。</li>
  <li>用酱油一大匙、淀粉水一大匙、糖半茶匙、盐四分之一茶匙、白醋一茶匙、蒜末半茶匙调拌均匀，调成“综合调味料”。</li>
  <li>鸡丁腌好以后，色拉油下锅烧热，先将鸡丁倒入锅内，用大火快炸半分钟，炸到变色之后，捞出来沥干油汁备用。</li>
  <li>在锅里留下约两大匙油，烧热后将切好的干辣椒下锅，用小火炒香后，再放入花椒粒和葱段一起爆香。随后鸡丁重新下锅，用大火快炒片刻后，再倒入“综合调味料”继续快炒。</li>
  <li>如果你采用正宗川菜做法，最后只需加入花生米，炒拌几下就可以起锅了。</li>
  <li>如果你在北方，可加入黄瓜丁、胡萝卜丁和花生米，翻炒后起锅。</li>
</ol>

<h2>大千鸡</h2>
<p>张大千居加拿大期间，曾按自己喜好改变宫保鸡丁的做法，并传授当地厨师，厨师将之命名为“大千鸡”，以兹纪念。大千鸡与宫保鸡丁不同之处，是使用经细工去皮、出骨、剔膜的鸡腿肉，以干辣椒、豆瓣酱为味，而且不用花生。</p>`;
        let userEntry = "";

        init();
        btnReset.addEventListener('click', init);

        btnSolution.addEventListener('click', () => {
          if (btnSolution.textContent === '显示答案') {
            blockInput.value =
            blockOutput.innerHTML = answer;
            btnSolution.textContent = '隐藏答案';
          } else {
            blockInput.value =
            blockOutput.innerHTML = userEntry;
            btnSolution.textContent = '显示答案';
          }
        });

        blockInput.addEventListener('keydown', (e) => {
          switch (e.key) {
          case 'Tab':
            e.preventDefault();
            insertAtCursor('\t');
            break;
          case "Escape":
            blockInput.blur();
            break;
          }
        });

        blockInput.addEventListener('keyup', () => {
          userEntry = blockInput.value;
          blockOutput.innerHTML = blockInput.value;
          if (btnSolution.textContent === '隐藏答案') {
            btnSolution.textContent = '显示答案';
          }
        });

        function init() {
          userEntry =
          blockOutput.innerHTML =
          blockInput.value = original;
          btnSolution.textContent = '显示答案';
        }

        function insertAtCursor(text) {
          const scrollPos = blockInput.scrollTop;
          const cursorPos = blockInput.selectionStart;

          const front = blockInput.value.substring(0, cursorPos);
          const back = blockInput.value.substring(
            blockInput.selectionEnd, blockInput.value.length);

          blockInput.value = front + text + back;
          blockInput.selectionStart =
          blockInput.selectionEnd = cursorPos + text.length;
          blockInput.focus();
          blockInput.scrollTop = scrollPos;
        }
      </script>
  </body>
</html>
```

{{ EmbedLiveSample('实践操作：标记我们的食谱', 700, 800) }}

如果你感到棘手，你可以随时按下*Show solution*按钮，或者在我们的 github repo 上检查我们的 [text-complete.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-complete.html) 样例。

### 嵌套列表 Nesting lists

将一个列表嵌入到另一个列表是完全可以的。你可能想让一些子项目列在首项目之下。让我们从食谱示例中获取第二个列表：

```html
<ol>
  <li>先用蛋白一个、盐半茶匙及淀粉两大匙搅拌均匀，调成“腌料”，鸡胸肉切成约一厘米见方的碎丁并用“腌料”搅拌均匀，腌渍半小时。</li>
  <li>用酱油一大匙、淀粉水一大匙、糖半茶匙、盐四分之一茶匙、白醋一茶匙、蒜末半茶匙调拌均匀，调成“综合调味料”。</li>
  <li>鸡丁腌好以后，色拉油下锅烧热，先将鸡丁倒入锅内，用大火快炸半分钟，炸到变色之后，捞出来沥干油汁备用。</li>
  <li>在锅里留下约两大匙油，烧热后将切好的干辣椒下锅，用小火炒香后，再放入花椒粒和葱段一起爆香。随后鸡丁重新下锅，用大火快炒片刻后，再倒入“综合调味料”继续快炒。</li>
  <li>如果你采用正宗川菜做法，最后只需加入花生米，炒拌几下就可以起锅了。</li>
  <li>如果你在北方，可加入黄瓜丁、胡萝卜丁和花生米，翻炒后起锅。</li>
 </ol>
```

由于最后两项与它们的前一项非常密切相关（它们看起来更像该项的子项或选项），将它们编辑成无序列表，并嵌套在该项的子项中可能更合理。就像下面这样：

```html
<ol>
  <li>先用蛋白一个、盐半茶匙及淀粉两大匙搅拌均匀，调成“腌料”，鸡胸肉切成约一厘米见方的碎丁并用“腌料”搅拌均匀，腌渍半小时。</li>
  <li>用酱油一大匙、淀粉水一大匙、糖半茶匙、盐四分之一茶匙、白醋一茶匙、蒜末半茶匙调拌均匀，调成“综合调味料”。</li>
  <li>鸡丁腌好以后，色拉油下锅烧热，先将鸡丁倒入锅内，用大火快炸半分钟，炸到变色之后，捞出来沥干油汁备用。</li>
  <li>在锅里留下约两大匙油，烧热后将切好的干辣椒下锅，用小火炒香后，再放入花椒粒和葱段一起爆香。随后鸡丁重新下锅，用大火快炒片刻后，再倒入“综合调味料”继续快炒。
    <ul>
      <li>如果你采用正宗川菜做法，最后只需加入花生米，炒拌几下就可以起锅了。</li>
      <li>如果你在北方，可加入黄瓜丁、胡萝卜丁和花生米，翻炒后起锅。</li>
    </ul>
  </li>
</ol>
```

尝试回到上一个实践操作的例子中，并更新第二个列表。

## 重点强调

在日常用语中，我们常常会加重某个字的读音，或者用加粗等方式突出某句话的重点。与此类似，HTML 也提供了相应的标签，用于标记某些文本，使其具有加粗、倾斜、下划线等效果。下面，我们将学习一些最常见的标签。

### 强调

在口语表达中，我们有时会强调某些字，用来改变这句话的意思。同样地，在书面用语中，我们可以使用斜体字来达到同样的效果。例如，下面两个句子便有不同的意思：

I am glad you weren't late.

I am _glad_ you weren't _late_. (ps: 此句中"*glad"*和"late"为斜体字体)

第一句话听起来真的像松了一口气因为没有迟到。相反，第二句话听起来具有讽刺性而且有隐含的攻击性，表达对一个人迟到的恼怒。

在 HTML 中我们用{{htmlelement("em")}}（emphasis）元素来标记这样的情况。这样做既可以让文档读起来更有趣，也可以被屏幕阅读器识别出来，并以不同的语调发出。浏览器默认风格为斜体，但你不应该纯粹使用这个标签来获得斜体风格，为了获得斜体风格，你应该使用{{htmlelement("span")}}元素和一些 CSS，或者是{{htmlelement("i")}}元素（见下文）。

```html
<p>I am <em>glad</em> you weren't <em>late</em>.</p>
```

### 非常重要

为了强调重要的词，在口语方面我们往往用重音强调，在文字方面则是用粗体字来达到强调的效果。例如下面这段：

This liquid is **highly toxic**.

I am counting on you. **Do not** be late!

在 HTML 中我们用{{htmlelement("strong")}} (strong importance) 元素来标记这样的情况。这样做既可以让文档更加地有用，也可以被屏幕阅读器识别出来，并以不同的语调发出。浏览器默认风格为粗体，但你不应该纯粹使用这个标签来获得粗体风格，为了获得粗体风格，你应该使用{{htmlelement("span")}}元素和一些 CSS，或者是 {{htmlelement("b")}} 元素 (见下文)。

```html
<p>This liquid is <strong>highly toxic</strong>.</p>

<p>I am counting on you. <strong>Do not</strong> be late!</p>
```

如有需要你可以将 strong 元素和 em 元素嵌套在其他的标签中：

```html
<p>This liquid is <strong>highly toxic</strong> —
if you drink it, <strong>you may <em>die</em></strong>.</p>
```

### 实践操作：我们是重要的！

在这个实践操作中，我们提供了可编辑的例子。在这个例子中，我们想让你把斜体 (em) 和加粗 (strong) 放在你认为重要的词汇上，仅仅为了练习。

```html hidden
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: '微软雅黑', Helvetica, Arial, sans-serif; margin: 10px; background: #f5f9fa; }
      h2 { font-size: 16px; }
      code, textarea { font-family: Consolas, Menlo, monospace; }
      .output { min-height: 150px; }
      .input { min-height: 150px; width: 95%; }
      .a11y-label { margin: 0; text-align: right; font-size: 0.7rem; width: 98%; }
      .controls { width: 96%; text-align: right; }
    </style>

  </head>
  <body>
    <h2>实时输出</h2>
    <div class="output"></div>

    <h2>可编辑代码</h2>
    <p class="a11y-label">按 ESC 退出编辑区域，按 Tab 可插入制表符 <code>'\t'</code> </p>
    <textarea id="code" class="input"></textarea>

    <div class="controls">
      <button id="btn-reset">重置</button>
      <button id="btn-solution">显示答案</button>
    </div>
    <script>
        const btnReset = document.getElementById('btn-reset');
        const btnSolution = document.getElementById('btn-solution');
        const blockOutput = document.querySelector('.output');
        const blockInput = document.querySelector('.input');
        const original =
`AlphaGo 李世乭五番棋

<p>2016 年 3 月 8 日到 3 月 15 日，韩国职业棋士李世乭（이세돌）九段与由 Google DeepMind 开发的计算机围棋软件 AlphaGo 对弈的五局三胜制围棋比赛在韩国首尔举行。结果为 AlphaGo 以四胜一负的战绩击败李世乭。赛后韩国棋院授予 AlphaGo 荣誉九段的称号。</p>`;
        const answer =
`<h1>AlphaGo 李世乭五番棋</h1>

<p><strong>2016 年 3 月 8 日</strong>到<strong>3 月 15 日</strong>，韩国职业棋士<strong>李世乭（이세돌）<em>九段</em></strong>与由 Google DeepMind 开发的计算机围棋软件 <strong>AlphaGo</strong> 对弈的五局三胜制围棋比赛在韩国<strong>首尔</strong>举行。结果为 AlphaGo 以<strong>四胜一负</strong>的战绩击败李世乭。赛后韩国棋院授予 AlphaGo <strong>荣誉九段</strong>的称号。</p>`;
        let userEntry = "";

        init();
        btnReset.addEventListener('click', init);

        btnSolution.addEventListener('click', () => {
          if (btnSolution.textContent === '显示答案') {
            blockInput.value =
            blockOutput.innerHTML = answer;
            btnSolution.textContent = '隐藏答案';
          } else {
            blockInput.value =
            blockOutput.innerHTML = userEntry;
            btnSolution.textContent = '显示答案';
          }
        });

        blockInput.addEventListener('keydown', (e) => {
          switch (e.key) {
          case 'Tab':
            e.preventDefault();
            insertAtCursor('\t');
            break;
          case "Escape":
            blockInput.blur();
            break;
          }
        });

        blockInput.addEventListener('keyup', () => {
          userEntry = blockInput.value;
          blockOutput.innerHTML = blockInput.value;
          if (btnSolution.textContent === '隐藏答案') {
            btnSolution.textContent = '显示答案';
          }
        });

        function init() {
          userEntry =
          blockOutput.innerHTML =
          blockInput.value = original;
          btnSolution.textContent = '显示答案';
        }

        function insertAtCursor(text) {
          const scrollPos = blockInput.scrollTop;
          const cursorPos = blockInput.selectionStart;

          const front = blockInput.value.substring(0, cursorPos);
          const back = blockInput.value.substring(
            blockInput.selectionEnd, blockInput.value.length);

          blockInput.value = front + text + back;
          blockInput.selectionStart =
          blockInput.selectionEnd = cursorPos + text.length;
          blockInput.focus();
          blockInput.scrollTop = scrollPos;
        }
      </script>
  </body>
</html>
```

{{ EmbedLiveSample('实践操作：我们是重要的！', 700, 500) }}

### 斜体字、粗体字、下划线...

迄今为止我们已经讨论的元素都是意义清楚的语义元素。{{htmlelement("b")}}, {{htmlelement("i")}}, 和 {{htmlelement("u")}} 的情况却有点复杂。它们出现于人们要在文本中使用粗体、斜体、下划线但 CSS 仍然不被完全支持的时期。像这样的元素，仅仅影响表象而且没有语义，被称为**表象元素（presentational elements）**并且不应该再被使用。因为正如我们在之前看到的，语义对无障碍，SEO（搜索引擎优化）等非常重要。

HTML5 用新的语义规则重新定义了 `<b>`、`<i>` 和 `<u>`,使得它们的语言显得稍微有点混乱。

这里是最好的经验法则：如果没有更合适的元素，那么使用 `<b>`、`<i>` 或 `<u>` 来表达传统上的粗体、斜体或下划线表达的意思是合适的。然而，始终拥有[无障碍](/zh-CN/docs/learn/Accessibility)的思维模式是至关重要的。斜体的概念对人们使用屏幕阅读器是没有帮助的，对使用其他书写系统而不是拉丁文书写系统的人们也是没有帮助的。

- {{HTMLElement('i')}} 被用来传达传统上用斜体表达的意义：外国文字，分类名称，技术术语，一种思想……
- {{HTMLElement('b')}} 被用来传达传统上用粗体表达的意义：关键字，产品名称，引导句……
- {{HTMLElement('u')}} 被用来传达传统上用下划线表达的意义：专有名词，拼写错误……

> **备注：** 使用下划线的忠告：因为我们常常会认为网页中的下划线代表着一个超链接**，**所以最好只用下划线来代表超链接。而在语义适合的情况下不得不使用\<u>元素时，可以使用 CSS 来改变\<u>元素对应的下划线的默认样式，从而和超链接的下划线区分开来。下面是一个具体的例子：

```html
<!-- 学名 -->
<p>
  红喉北蜂鸟（学名：<i>Archilocus colubris</i>）
  是北美东部最常见的蜂鸟品种。
</p>

<!-- 舶来词 -->
<p>
  菜单上有好多舶来词汇，比如 <i lang="uk-latn">vatrushka</i>（东欧乳酪面包）,
  <i lang="id">nasi goreng</i>（印尼炒饭）以及<i lang="fr">soupe à l'oignon</i>（法式洋葱汤）。
</p>

<!-- 已知的错误书写 -->
<p>
  总有一天我会改掉写<u style="text-decoration-line: underline; text-decoration-style: wavy;">措字</u>的毛病。
</p>

<!-- 在一组指令中突出显示关键字 -->
<ol>
  <li>
    <b>切</b>下两片面包，
  </li>
  <li>
    在两片面包中间<b>夹入</b>一片西红柿和一片生菜叶。
  </li>
</ol>
```

## 总结

至此，本文应该给您做了一个很好的了解，如何开始在 HTML 中标记文本，并介绍了一些最重要的元素。在这一领域还有许多语义元素，我们将在后面的“更多语义元素”文章中看到更多的语义元素。在下一篇文章中，我们将详细介绍如何创建超链接（[create hyperlinks](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)），它可能是 Web 上最重要的元素。

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

## 本章目录

- [开始学习 HTML](/zh-CN/docs/learn/HTML/Introduction_to_HTML/Getting_started)
- [“头”里有什么？HTML 元信息](/zh-CN/docs/learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- [HTML 文字处理初步](/zh-CN/docs/learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
- [创建超链接](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- [高级文字格式](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
- [文档和站点结构](/zh-CN/docs/learn/HTML/Introduction_to_HTML/文件和网站结构)
- [HTML 调试](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [课程测验：为信件排版](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
- [课程测验：构建内容丰富的网页](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
