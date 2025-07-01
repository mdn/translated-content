---
title: HTML 的标题和段落
slug: Learn_web_development/Core/Structuring_content/Headings_and_paragraphs
l10n:
  sourceCommit: 4b6716ede3cfde38122835a3af0c9b8c9c22f14f
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}

HTML 的主要工作之一是赋予文本结构，使浏览器能够按照开发者的意图显示 HTML 文档。本文介绍了如何使用 {{glossary("HTML")}} 通过定义标题和段落来提供基本的页面结构。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        基本熟悉了<a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >基本 HTML 语法</a
        >中所涵盖的内容。
      </td>
    </tr>
    <tr>
      <th scope="row">学习成果：</th>
      <td>
        <ul>
          <li>如何创建包含标题和标题下内容的良好文档结构。</li>
          <li>使用语义 HTML 而不是表现 HTML，以及为什么这很重要。</li>
          <li>需要合理地使用标题级别，即不能跳过级别，也不能因为要达到某种字体大小而随意使用级别（这是 CSS 的工作）。</li>
          <li>搜索引擎优化优势：例如，标题中的关键词会得到加强。</li>
          <li>无障碍优势：屏幕阅读器等辅助技术（AT）使用标题（和其他地标）作为导航内容的路标。如果没有标题，辅助技术用户很难使用 HTML 文档。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 标题和段落

无论是阅读故事、报纸、大学教科书还是杂志等，大多数结构化文本都由标题和段落组成。

![一个报纸封面的例子，显示了顶级标题、副标题和段落的使用。](newspaper_small.jpg)

结构化内容会使读者的阅读体验更轻松，更愉快。

在 HTML 中，每个段落是通过 {{htmlelement("p")}} 元素进行定义的，比如下面这样：

```html
<p>我是一个段落，千真万确。</p>
```

每个标题都必须被包裹在一个标题元素中：

```html
<h1>我是文章的标题</h1>
```

一共有六种标题元素标签——{{htmlelement("Heading_Elements", "h1")}}、{{htmlelement("Heading_Elements", "h2")}}、{{htmlelement("Heading_Elements", "h3")}}、{{htmlelement("Heading_Elements", "h4")}}、{{htmlelement("Heading_Elements", "h5")}} 和 {{htmlelement("Heading_Elements", "h6")}}。每个元素代表文档中不同级别的内容：`<h1>` 表示主标题，`<h2>` 表示二级子标题，`<h3>` 表示三级子标题，依此类推。

## 实现结构层级

举个例子，在一个故事中，`<h1>` 表示故事的标题，`<h2>` 表示每个章节的标题，`<h3>` 表示每个章节下的子标题，以此类推。

```html
<h1>三国演义</h1>

<p>罗贯中</p>

<h2>第一回 宴桃园豪杰三结义 斩黄巾英雄首立功</h2>

<p>
  话说天下大势，分久必合，合久必分。周末七国分争，并入于秦。及秦灭之后，楚、汉分争，又并入于汉……
</p>

<h2>第二回 张翼德怒鞭督邮 何国舅谋诛宦竖</h2>

<p>
  且说董卓字仲颖，陇西临洮人也，官拜河东太守，自来骄傲。当日怠慢了玄德，张飞性发，便欲杀之……
</p>

<h3>却说张飞</h3>

<p>
  却说张飞饮了数杯闷酒，乘马从馆驿前过，见五六十个老人，皆在门前痛哭。飞问其故，众老人答曰：“督邮逼勒县吏，欲害刘公；我等皆来苦告，不得放入，反遭把门人赶打！”……
</p>
```

所涉及的元素具体代表什么，完全取决于作者编辑的内容，只要层次结构是合理的。在创建此类结构时，只需要记住一些最佳实践：

- 最好只对每个页面使用一次 `<h1>`——这是顶级标题，所有其他标题位于层次结构中的下方。
- 请确保在层次结构中以正确的顺序使用标题。不要使用 `<h3>` 来表示副标题，后面再跟 `<h2>` 来表示二级副标题——这是没有意义的，会导致奇怪的结果。
- 在现有的六个标题层次中，除非觉得有必要，否则应该争取每页使用不超过三个。有很多层次的文件（例如，深层次的标题层次）会变得笨重，难以浏览。在这种情况下，如果可能的话，建议将内容分散到多个页面。

## 为什么我们需要结构化？

回答这个问题前，让我们先来看一段[文档示例](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html)——并从运行这段文档示例（美味的豆沙食谱）开始。你应该在本地机器上保存一份这个文件的副本，因为在以后的练习中会需要它。这个文件的主体目前包含了多条内容。它们没有任何标记，但都用换行符隔开（按回车键进入下一行）。

然而，当在浏览器中打开文档时，会看到文本显示为一整块！

![显示了一堵没有格式的“文字墙”的网页，因为页面上没有任何标记元素。](screen_shot_2017-03-29_at_09.20.35.png)

这是因为没有元素给内容结构，所以浏览器不知道什么是标题，什么是段落。此外：

- 用户在阅读网页时，往往会快速浏览以查找相关内容，经常只是阅读开头的标题（我们通常在一个网页上会[花费很少的时间](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/))。如果用户不能在几秒内看到一些有用的内容，他们很可能会感到沮丧并离开。
- 对网页建立索引的搜索引擎将标题的内容视为影响网页搜索排名的重要关键字。没有标题，你的网页在{{glossary("SEO","搜索引擎优化")}}方面效果不佳。
- 严重视力障碍者通常不会阅读网页；他们用听力来代替。完成这项工作的软件叫做[屏幕阅读器](https://zh.wikipedia.org/wiki/螢幕閱讀器)。该软件提供了快速访问给定文本内容的方法。在使用的各种技术中，它们通过朗读标题来提供文档的概述，让用户能快速找到他们需要的信息。如果标题不可用，用户将不得不听到整个文档被大声朗读。
- 使用 {{glossary("CSS")}} 样式化内容，或者使用 {{glossary("JavaScript")}} 做一些有趣的事情，你需要包含相关内容的元素，使得 CSS / JavaScript 可以有效地定位它。

因此，我们需要给我们的内容进行结构性标记。

## 主动学习：为我们的内容赋予结构

让我们直接进入一个运行实例。在下面的示例中，向*可编辑代码*字段中的原始文本添加元素，使其在*实时输出*字段中显示为标题和两个段落。

如果犯了错误，你可以使用*重置*按钮进行重置。如果你卡住了，请按*显示答案*按钮以查看答案。

```html hidden
<h2>实时输出</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>可编辑代码</h2>
<p class="a11y-label">
  按 ESC 退出编辑区域，按 Tab 可插入制表符 <code>'\t'</code>
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
静夜思 床前明月光，疑是地上霜。举头望明月，低头思故乡。
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="重置" />
  <input id="solution" type="button" value="显示答案" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
const code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

const htmlSolution = `<h1>静夜思</h1>
<p>床前明月光，疑是地上霜。</p>
<p>举头望明月，低头思故乡。</p>`;

let solutionEntry = htmlSolution;

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "显示答案";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "显示答案") {
    textarea.value = solutionEntry;
    solution.value = "隐藏答案";
  } else {
    textarea.value = userEntry;
    solution.value = "显示答案";
  }
  updateCode();
});

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// 阻止制表键跳出文本区域
// 而是在光标位置输出制表符
textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// 每次用户更新文本区域代码时，更新已保存的 userCode
textarea.onkeyup = function () {
  // 我们只想在显示用户代码时保存状态，
  // 而不是保存解答，因此解答不会保存在用户代码上
  if (solution.value === "显示答案") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('主动学习：为我们的内容赋予结构', 700, 400) }}

## 为什么我们需要语义？

在我们身边的任何地方都要依赖语义——我们依靠以前的经验来告诉我们一个日常物品的功能是什么；当我们看到某个东西时，我们知道它的功能是什么。举个例子，我们知道红色交通灯表示“停止”，绿色交通灯表示“通行”。如果运用了错误的语义，事情会迅速地变得非常棘手（难道有某个国家使用红色代表通行？我不希望如此）

同样的道理，我们需要确保使用了正确的元素来给予内容正确的含义、作用以及外形。在这里，{{htmlelement("Heading_Elements", "h1")}} 元素也是一个语义元素，它所包裹的文本具有“页面上的顶级标题”的作用（或意义）。

```html
<h1>这是一个顶级标题</h1>
```

一般来说，浏览器会给它一个更大的字形来让它看上去像个标题（虽然也可以使用 CSS 让它变成任何你想要的样式）。更重要的是，它的语义值将以多种方式被使用，比如通过上文提到过的搜索引擎和屏幕阅读器。

在另一方面，你可以让任一元素*看起来*像一个顶级标题，考虑如下：

```html
<span style="font-size: 32px; margin: 21px 0; display: block;"
  >这是顶级标题吗？</span
>
```

这是一个 {{htmlelement("span")}} 元素，它没有语义。当想要对它用 CSS（或者 JavaScript）时，可以用它包裹内容，且不附加任何额外的意义（在未来的课程中你会发现更多这类元素）。我们已经对它使用了 CSS 来让它看起来像一个顶级标题。然而，由于它没有语义值，所以它不会有任何上文提到的帮助。最好的方法是使用相关的 HTML 元素来标记这个项目。

## 总结

关于 HTML 标题和段落的学习到此结束。接下来，我们将探讨语义 HTML 的更多方面：给予词语强调。

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}
