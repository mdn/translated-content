---
title: 强调与重要性
slug: Learn_web_development/Core/Structuring_content/Emphasis_and_importance
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content")}}

上一篇文章探讨了语义在 HTML 中的重要性，重点是标题和段落。本文将继续以语义为主题，探讨对文本进行强调和重要性处理的 HTML 元素（与印刷媒体中的斜体和粗体文字类似）。

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
          <li>强调和着重强调的含义，以及在 HTML 中应用它们的基本元素，如 <code>&lt;em&gt;</code> 和 <code>&lt;strong&gt;</code>。</li>
          <li>识别根本不应再使用的呈现性标记（例如 <code>&lt;big&gt;</code> 和 <code>&lt;font&gt;</code>），它们已经被弃用。</li>
          <li>识别被重新利用以获得新语义的呈现性标记（例如 <code>&lt;i&gt;</code> 和 <code>&lt;b&gt;</code>）。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 什么是强调和着重强调？

在日常用语中，我们常常会加重某个字的读音，或者用加粗等方式突出某句话的重点。与此类似，HTML 也提供了相应的标签，用于标记某些文本，使其具有加粗、倾斜、下划线等效果。下面，我们将学习一些最常见的标签。

### 强调

在口语表达中，我们有时会强调某些字，用来改变这句话的意思。同样地，在书面用语中，我们可以使用斜体字来达到同样的效果。例如，下面两个句子便有不同的意思：

> 我很庆幸你没有迟到。
>
> 我很*庆幸*你没有*迟到*。

第一句话听起来真的像松了一口气——因为没有迟到。相反，第二句话因为以斜体强调了“庆幸”和“迟到”两词，听起来具有讽刺性而且有隐含的攻击性，表达对一个人迟到的恼怒。

在 HTML 中我们用 {{htmlelement("em")}}（emphasis）元素来标记这样的情况。这样做既可以让文档读起来更有趣，也可以被屏幕阅读器识别，并以不同的语调发出。浏览器默认样式为斜体，但你不应该纯粹为了获得斜体风格而使用这个标签。如果仅仅为了获得斜体样式而不增加语义辅助，你应该使用 {{htmlelement("span")}} 元素和一些 CSS，或者是 {{htmlelement("i")}} 元素（见下文）。

```html
<p>我很<em>庆幸</em>你没有<em>迟到</em>。</p>
```

### 着重强调

为了强调重要的词，在口语方面我们往往用重音强调，在书面用语中则是用粗体字来达到强调的效果。例如下面这段：

> 这杯液体**毒性很大**。
>
> 就指望你了，千万**不要**迟到！

在 HTML 中我们用 {{htmlelement("strong")}}（strong importance）元素来标记这样的情况。除了使文档更有用之外，屏幕阅读器也能识别这些内容，并可将其配置为以不同的语音语调进行朗读。浏览器默认样式为粗体，但你不应该纯粹为了获得粗体风格而使用这个标签。如果仅仅为了获得粗体样式而不增加语义辅助，你应该使用 {{htmlelement("span")}} 元素和一些 CSS，或者是 {{htmlelement("b")}} 元素（见下文）。

```html
<p>这杯液体<strong>毒性很大</strong>。</p>

<p>就指望你了，千万<strong>不要</strong>迟到！</p>
```

如有需要，你可以将 strong 元素和 em 元素相互嵌套：

```html-nolint
<p>
  这杯液体<strong>毒性很大</strong>——如果饮用了它，你<strong>可能<em>会死</em></strong>。
</p>
```

{{EmbedLiveSample('着重强调')}}

## 主动学习：我们是重要的！

在这个主动学习部分，我们提供了一个可编辑的示例。在这个示例中，我们希望你能尝试在你认为需要斜体强调和着重强调的词上添加斜体强调和着重强调的内容，只是为了进行一些练习。

```html hidden
<h2>实时输出</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>可编辑代码</h2>
<p class="a11y-label">按 Esc 键将焦点从代码区移开（按 Tab 可插入制表符）。</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
<h1>AlphaGo 李世乭五番棋</h1>

<p>2016 年 3 月 8 日到 3 月 15 日，韩国职业棋士李世乭（이세돌）九段与由 Google DeepMind 开发的计算机围棋软件 AlphaGo 对弈的五局三胜制围棋比赛在韩国首尔举行。结果为 AlphaGo 以四胜一负的战绩击败李世乭。赛后韩国棋院授予 AlphaGo 荣誉九段的称号。</p></textarea
>

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

const htmlSolution = `<h1>AlphaGo 李世乭五番棋</h1>

<p><strong>2016 年 3 月 8 日</strong>到<strong>3 月 15 日</strong>，韩国职业棋士<strong>李世乭（이세돌）<em>九段</em></strong>与由 Google DeepMind 开发的计算机围棋软件 <strong>AlphaGo</strong> 对弈的五局三胜制围棋比赛在韩国<strong>首尔</strong>举行。结果为 AlphaGo 以<strong>四胜一负</strong>的战绩击败李世乭。赛后韩国棋院授予 AlphaGo <strong>荣誉九段</strong>的称号。</p>`;
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
textarea.onkeyup = () => {
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

{{ EmbedLiveSample('主动学习：我们是重要的！', 700, 520, "", "") }}

## 斜体、粗体、下划线……

到目前为止，我们所讨论的元素都有明确的相关语义。{{htmlelement("b")}}、{{htmlelement("i")}} 和 {{htmlelement("u")}} 的情况却有点复杂。它们出现于人们要在文本中使用粗体、斜体、下划线但 CSS 仍然不被完全支持的时期。像这样仅仅影响表象而且没有语义的元素，被称为**表现元素**（presentational element）并且不应该再被使用。因为正如我们在之前看到的，语义对无障碍、搜索引擎优化（SEO）等非常重要。

HTML5 重新定义了 `<b>`、`<i>` 和 `<u>`，赋予了它们新的但有点令人困惑的语义角色。

最好的经验法则是：只有在没有更合适的元素时，才适合使用 `<b>`、`<i>` 或 `<u>` 来表达传统上用粗体、斜体或下划线表达的意思；而通常情况下是有更合适的元素可供使用的。`<strong>`、`<em>`、`<mark>` 或 `<span>` 可能是更加合适的选择。

始终保持无障碍的开发理念。斜体的概念对使用屏幕阅读器的人或使用拉丁字母以外的书写系统的人没有什么帮助。

- {{HTMLElement('i')}} 被用来传达传统上用斜体表达的意义：外国文字、分类名称、技术术语、思想……
- {{HTMLElement('b')}} 被用来传达传统上用粗体表达的意义：关键字、产品名称、引导句……
- {{HTMLElement('u')}} 被用来传达传统上用下划线表达的意义：专有名词、拼写错误……

> [!NOTE]
> 人们强烈地将下划线与超链接联系起来。因此，在网页中，最好只给链接加下划线。在语义上合适的时候使用 `<u>` 元素，但要考虑使用 CSS 将默认的下划线改为在网页中更合适的东西。下面的例子说明了如何做到这一点：

<!-- cSpell:ignore spel -->

```html
<!-- 学名 -->
<p>
  红喉北蜂鸟（学名：<i>Archilocus colubris</i>）是北美东部最常见的蜂鸟品种。
</p>

<!-- 舶来词 -->
<p>
  菜单上有好多舶来词汇，比如 <i lang="uk-latn">vatrushka</i>（东欧乳酪面包）、<i
    lang="id"
    >nasi goreng</i
  >（印尼炒饭）以及 <i lang="fr">soupe à l'oignon</i>（法式洋葱汤）。
</p>

<!-- 已知的错误书写 -->
<p>总有一天我会改掉写<u class="spelling-error">措字</u>的毛病。</p>

<!-- 在定义中，被定义的术语 -->
<dl>
  <dt>语义化 HTML</dt>
  <dd>根据元素的<b>语义</b>意义而不是外观来使用它们。</dd>
</dl>
```

{{EmbedLiveSample('斜体、粗体、下划线…','100%','270')}}

## 总结

强调和重要性的讨论暂时告一段落。下面我们来看看如何在 HTML 中表示列表。

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content")}}
