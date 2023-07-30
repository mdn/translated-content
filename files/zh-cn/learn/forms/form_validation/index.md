---
title: 表单数据校验
slug: Learn/Forms/Form_validation
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms/How_to_build_custom_form_widgets", "Learn/HTML/Forms")}}

表单校验帮助我们确保用户以正确格式填写表单数据，确保提交的数据能使我们的应用程序正常工作。本文将告诉您需要了解的有关表单校验的内容。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        计算机基础能力，对 <a href="/zh-CN/docs/Learn/HTML">HTML</a>、<a
          href="/zh-CN/docs/Learn/CSS"
          >CSS</a
        >
        和 <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> 有一定的理解。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>理解表单校验是什么，为什么它很重要，以及如何实现它。</td>
    </tr>
  </tbody>
</table>

## 什么是表单数据校验？

访问任何一个带注册表单的网站，你都会发现，当你提交了没有输入符合预期格式的信息的表单时，注册页面都会给你一个反馈，这些信息可能看起来像下面这样的：

- “该字段是必填的”（该字段不能留空）
- “请输入你的电话号码，它的格式是：xxx-xxxx”（它要求你输入的数据格式为三个数字接一个横杠，然后再接着是四个数字）
- “请输入一个合法的邮箱地址”（如果你输入的数据不符合“somebody\@example.com“的邮箱格式）
- “你的密码长度应该是 8 至 30 位的，并且至少应该包含一个大写字母、一个符号以及一个数字”

这就是**表单校验** —— 当你向 Web 应用输入数据时，应用会验证你输入的数据是否是正确的。如果验证通过，应用允许提交这些数据到服务器并储存到数据库中（通常情况下），如果验证未通过，则 Web 应用会提示你有错误的数据，并且一般都会明确的告诉你错误发生在哪里。表单校验可以通过许多不同的方式实现。

> **备注：** 下面一段在英文原文中已经删除

(事实上，没有人愿意填写表单 —— 很多证据表明，用户对填写表单这件事情都感到很烦恼，如果他们在填写表单的过程中遇到一些自己无法理解的问题，通常都会导致他们直接离开你的 Web 应用，简而言之，[表单是一个很烦人的东西](https://www.slideshare.net/jwegesin/forms-suck/)。)

我们希望把填写表单变的越简单越好。那么，为什么我们还坚持进行表单的数据校验呢？这有三个最主要的原因：

- **我们希望以正确的格式获取到正确的数据** —— 如果我们的用户数据以不正确的格式存储，或者他们没有输入正确的信息/完全省略信息，我们的应用程序将无法正常运行。
- **我们希望保护我们的用户** ——强制用户输入安全的密码，有利于保护他们的账户信息。
- **我们希望保护我们自己** —— 恶意用户有很多通过滥用应用中缺乏保护的表单破坏应用的方法（具体请参见[网站安全](/zh-CN/docs/learn/Server-side/First_steps/Website_security)）。

> **警告：** 永远不要相信从客户端传递到服务器的数据。即使您的表单正确验证并防止输入格式错误，恶意用户仍然可以更改网络请求。

### 不同类型的表单数据校验

在 Web 中，你可能会遇见各种不同的表单校验：

- **客户端校验**发生在浏览器端，表单数据被提交到服务器之前，这种方式相较于服务器端校验来说，用户体验更好，它能实时的反馈用户的输入校验结果，这种类型的校验可以进一步细分成下面这些方式：

  - **JavaScript** 校验，这是可以完全自定义的实现方式；
  - HTML5 **内置校验**，这不需要 JavaScript，而且性能更好，但是不能像 JavaScript 那样可自定义。

- **服务器端校验**则是发生在浏览器提交数据并被服务器端程序接收之后 —— 通常服务器端校验都是发生在将数据写入数据库之前，如果数据没通过校验，则会直接从服务器端返回错误消息，并且告诉浏览器端发生错误的具体位置和原因，服务器端校验不像客户端校验那样有好的用户体验，因为它直到整个表单都提交后才能返回错误信息。但是服务器端校验是你的应用对抗错误/恶意数据的最后防线，在这之后，数据将被持久化至数据库。当今[所有的服务端框架](/zh-CN/docs/learn/Server-side/First_steps/Web_frameworks)都提供了数据**校验**与**清洁**功能（让数据更安全）。

在真实的项目开发过程中，开发者一般都倾向于使用客户端校验与服务器端校验的组合校验方式以更好的保证数据的正确性与安全性。

## 使用内置表单数据校验

[HTML5](/zh-CN/docs/HTML/HTML5) 一个特别有用的新功能就是，可以在不写一行脚本代码的情况下，即对用户的输入进行数据校验，这都是通过表单元素的[校验属性](/zh-CN/docs/Web/Guide/HTML/HTML5/Constraint_validation)实现的，这些属性可以让你定义一些规则，用于限定用户的输入，比如某个输入框是否必须输入，或者某个输入框的字符串的最小最大长度限制，或者某个输入框必须输入一个数字、邮箱地址等；还有数据必须匹配的模式。如果表单中输入的数据都符合这些限定规则，那么表示这个表单校验通过，否则则认为校验未通过。

当一个元素校验通过时：

- 该元素将可以通过 CSS 伪类 {{cssxref(":valid")}} 进行特殊的样式化；
- 如果用户尝试提交表单，如果没有其他的控制来阻止该操作（比如 JavaScript 即可阻止提交），那么该表单的数据会被提交。

如果一个元素未校验通过：

- 该元素将可以通过 CSS 伪类 {{cssxref(":invalid")}} 进行特殊的样式化；
- 如果用户尝试提交表单，浏览器会展示出错误消息，并停止表单的提交。

### input 元素的校验约束 — starting simple

在这一节，我们将会看到一些用于{{HTMLElement("input")}}元素校验的 HTML5 的特性。

让我们用一个简单的例子开始 — 一个可以让你从香蕉或樱桃中选择你最喜欢的水果的 input。这个包含了一个简单的文本{{HTMLElement("input")}} 和一个与之匹配的 label，还有一个 submit {{htmlelement("button")}}。你可以在 GitHub [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html)找到源码，在线例子如下：

```html hidden
<form>
  <label for="choose">Would you prefer a banana or cherry?</label>
  <input id="choose" name="i_like" />
  <button>Submit</button>
</form>
```

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

{{EmbedLiveSample("input 元素的校验约束 — starting simple", "100%", 50)}}

开始之前，先拷贝一份 `fruit-start.html` 放在你硬盘上的新目录里。

### required 属性

最简单的 HTML5 校验功能是 [`required`](/zh-CN/docs/Web/HTML/Element/input#required)属性 — 如果要使输入成为必需的，则可以使用此属性标记元素。当设置此属性时，如果输入为空，该表单将不会提交（并将显示错误消息），输入也将被视为无效。

添加一个 `required` 属性到你的 input 元素，如下所示：

```html
<form>
  <label for="choose">Would you prefer a banana or cherry?</label>
  <input id="choose" name="i_like" required />
  <button>Submit</button>
</form>
```

同时注意在示例文件中包含的 CSS :

```css
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

以上样式效果为：在校验失败时 输入框会有一个亮红色的虚线边框，在校验通过时会有一个更微妙的黑色边框。在以下示例中尝试新的行为：

{{EmbedLiveSample("required_属性", "100%", 50)}}

### 使用正则表达式校验

另一个常用的校验功能是 [`pattern`](/zh-CN/docs/Web/HTML/Element/input#pattern) 属性，以 [Regular Expression](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions) 作为 value 值。正则表达式 (regex) 是一个可以用来匹配文本字符串中字符的组合的模式，所以它们是理想的表单校验器，也可以支持 JavaScript 中许多其他的用途。

正则表达式相当复杂，我们不打算在本文中详尽地教你。

下面是一些例子，让你对它们的工作原理有个基本的了解：

- `a` — 匹配一个字符`a`(不能匹配 `b`, `aa`等等.)
- `abc` — 匹配 `a`、其次 `b`、最后 `c`.
- `a*` — 匹配 0 个或者多个字符 `a` (`+` 代表至少匹配一个或者多个).
- `[^a]` — 匹配一个字符，但它**不能**是`a`.
- `a|b` — 匹配一个字符 `a` 或者 `b`.
- `[abc]` — 匹配一个字符，它可以是`a`、`b`或`c`.
- `[^abc]` — 匹配一个字符，但它**不可以**是 `a`、`b` 或 `c`.
- `[a-z]` — 匹配字符范围 `a-z`且全部小写 (你可以使用 `[A-Za-z]` 涵盖大小写，或 `[A-Z]` 来限制必须大写).
- `a.c`——匹配字符 `a`，中间匹配任意一个字符，最后匹配字符 `c`。
- `a{5}` — 匹配字符 `a` 五次。
- `a{5,7}` — 匹配字符 `a` 五到七次，不能多或者少。

你也可以在这些表达式中使用数字和其他字符，例如：

- `[ -]` — 匹配一个空格或者虚线。
- `[0-9]` — 匹配数字范围 0\~9.

你可以任意地组合这些，你可以任意指定不同的部分：

- `[Ll].*k` — 匹配一个大写`L`或者小写的`l`, 之后匹配 0 个或多个任意类型的字符，最后匹配一个小写字母 k.
- `[A-Z][A-Za-z' -]+` — 一个大写字母后面跟着匹配一个及以上的大小写字母或者中划线或者撇号或者空格。这个可以用于校验英语会话中城市或城镇名，但这需要首字母以大写开头，不包括其他字符，例如来自英国的 Manchester, Ashton-under-lyne, 以及 Bishop's Stortford 等。
- `[0-9]{3}[ -][0-9]{3}[ -][0-9]{4}` — 简单的匹配一个美国内的电话号码 — 三个数字 0`-`9, 后面跟着一个空格或者中划线，之后匹配三个数字 0`-`9, 再跟着一个空格或者中划线，最后跟着四个数字 0`-`9. 但实际情况可能更加复杂，因为有些人会给号码加上括号什么的，这里的表达式只是用来做一个简单的演示。

不管怎么说，让我们来实现这些例子 — 更新你的 html 文档表单增加一个 `pattern` 属性，如下：

```html
<form>
  <label for="choose">Would you prefer a banana or a cherry?</label>
  <input id="choose" name="i_like" required pattern="banana|cherry" />
  <button>Submit</button>
</form>
```

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

{{EmbedLiveSample("使用正则表达式校验", "100%", 50)}}

这个例子中，该 {{HTMLElement("input")}} 元素接受两个值中的一个：字符串 "banana" 或者字符串"cherry".

在这个基础上，尝试把`pattern` 属性内部的表达式改变成上面的几个例子，然后看看这些表达式如何影响您可以输入的值以使输入值有效。尝试写一些你自己设计的，看看它如何工作。尽量让他们与水果有关这样你的例子才会有意义。

> **备注：** 一些 {{HTMLElement("input")}} 元素类型不需要[`pattern`](/zh-CN/docs/Web/HTML/Element/input#pattern) 属性进行校验。指定特定 `email` 类型 就会使用匹配电子邮件格式的正则表达式来校验 (如果有 [`multiple`](/zh-CN/docs/Web/HTML/Element/input#multiple) 属性请用逗号来分割多个邮箱). 进一步来说，字段 `url` 类型则会自动校验输入的是否为一个合法的链接。

> **备注：** 该 {{HTMLElement("textarea")}} 元素不支持[`pattern`](/zh-CN/docs/Web/HTML/Element/input#pattern) 属性。

### 限制输入的长度

所有文本框 ({{HTMLElement("input")}} 或 {{HTMLElement("textarea")}}) 都可以使用[`minlength`](/zh-CN/docs/Web/HTML/Element/input#minlength) 和 [`maxlength`](/zh-CN/docs/Web/HTML/Element/input#maxlength) 属性来限制长度。如果输入的字段长度小于 [`minlength`](/zh-CN/docs/Web/HTML/Element/input#minlength) 的值或大于 [`maxlength`](/zh-CN/docs/Web/HTML/Element/input#maxlength) 值则无效。浏览器通常不会让用户在文本字段中键入比预期更长的值，不过更精细的设置总归是更好的。

在数字条目中 (i.e. `<input type="number">`), 该 [`min`](/zh-CN/docs/Web/HTML/Element/input#min) 和 [`max`](/zh-CN/docs/Web/HTML/Element/input#max) 属性同样提供校验约束。如果字段的值小于[`min`](/zh-CN/docs/Web/HTML/Element/input#min) 属性的值或大于 [`max`](/zh-CN/docs/Web/HTML/Element/input#max) 属性的值，该字段则无效。

让我来看看另外一个例子。创建一个 [fruit-start.html](https://github.com/mdn/learning-area/blob/main/html/forms/form-validation/fruit-start.html) 文件副本。

现在删除 `<body>` 元素中的内容，替换成下面的代码：

```html
<form>
  <div>
    <label for="choose">Would you prefer a banana or a cherry?</label>
    <input id="choose" name="i_like" required minlength="6" maxlength="6" />
  </div>
  <div>
    <label for="number">How many would you like?</label>
    <input type="number" id="number" name="amount" value="1" min="1" max="10" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

- 这里我们看到 `text` 条目的属性`minlength` 和 `maxlength` 都为 6 — 这 banana 和 cherry 的长度都为 6. 输入少于这个长度的字符显示无效，大多浏览器不能输入超过该限制的长度的字符。
- 我们同时也能让 `number` 条目数值限制在 `min` 为 1 和 一个 `max` 为 10 中 — 输入超出范围则显示无效，并且您将无法使用递增/递减箭头将该值改变到此范围之外。

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}

div {
  margin-bottom: 10px;
}
```

这里是运行的例子：

{{EmbedLiveSample("限制输入的长度", "100%", 70)}}

> **备注：** `<input type="number">` (或者其他类型，像 `range`) 也可以获取到一个[`step`](/zh-CN/docs/Web/HTML/Element/input#step) 属性，指定了值在增减过程固定改变的值 (如向上增加和向下减少的按钮).

### 完整的例子

这里就是一个完整的展示 HTML 中使用校验属性的例子：

```html
<form>
  <p>
    <fieldset>
      <legend>Title<abbr title="This field is mandatory">*</abbr></legend>
      <input type="radio" required name="title" id="r1" value="Mr"><label for="r1">Mr.</label>
      <input type="radio" required name="title" id="r2" value="Ms"><label for="r2">Ms.</label>
    </fieldset>
  </p>
  <p>
    <label for="n1">How old are you?</label>
    <!-- 这里的 pattern 属性可以用作不支持 number 类 input 浏览器的备用方法
         请注意当与数字输入框一起使用时，支持 pattern 属性的浏览器会使它沉默失效。
         它仅仅是在这里用作备用 -->
    <input type="number" min="12" max="120" step="1" id="n1" name="age"
           pattern="\d+">
  </p>
  <p>
    <label for="t1">What's your favorite fruit?<abbr title="This field is mandatory">*</abbr></label>
    <input type="text" id="t1" name="fruit" list="l1" required
           pattern="[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range">
    <datalist id="l1">
      <option>Banana</option>
      <option>Cherry</option>
      <option>Apple</option>
      <option>Strawberry</option>
      <option>Lemon</option>
      <option>Orange</option>
    </datalist>
  </p>
  <p>
    <label for="t2">What's your e-mail?</label>
    <input type="email" id="t2" name="email">
  </p>
  <p>
    <label for="t3">Leave a short message</label>
    <textarea id="t3" name="msg" maxlength="140" rows="5"></textarea>
  </p>
  <p>
    <button>Submit</button>
  </p>
</form>
```

```css
body {
  font: 1em sans-serif;
  padding: 0;
  margin: 0;
}

form {
  max-width: 200px;
  margin: 0;
  padding: 0 5px;
}

p > label {
  display: block;
}

input[type="text"],
input[type="email"],
input[type="number"],
textarea,
fieldset {
  /* 需要在基于 WebKit 的浏览器上对表单元素进行恰当的样式设置 */
  -webkit-appearance: none;

  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

input:invalid {
  box-shadow: 0 0 5px 1px red;
}

input:focus:invalid {
  outline: none;
}
```

{{EmbedLiveSample("完整的例子", "100%", 420)}}

### 自定义错误信息

正如我们上面所看到的例子，每次我们提交无效的表单数据时，浏览器总会显示错误信息。但是显示的信息取决于你所使用的浏览器。

这些自动生成的错误有两个缺点：

- 没有标准可以让 CSS 来改变他们的界面外观。
- 这依赖于他们使用的浏览器环境，意味着你可能在这种语言的页面里得到另一种语言的错误提示。

![Example of an error message with Firefox in French on an English page](error-firefox-win7.png)

要自定义这些消息的外观和文本，你必须使用 JavaScript; 不能使用 HTML 和 CSS 来改变。

HTML5 提供 [constraint validation API](http://www.w3.org/TR/html5/forms.html#the-constraint-validation-api) 来检测和自定义表单元素的状态。除此之外，他可以改变错误信息的文本。让我们快速的看一个例子：

```html
<form>
  <label for="mail">I would like you to provide me an e-mail</label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

在 JavaScript 中，你调用 [`setCustomValidity()`](/zh-CN/docs/Web/API/HTMLObjectElement/setCustomValidity) 方法：

```js
var email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});
```

{{EmbedLiveSample("自定义错误信息", "100%", 50)}}

## 使用 JavaScript 校验表单

如果你想控制原生错误信息的界面外观，或者你想处理不支持 HTML 内置表单校验的浏览器，则必须使用 Javascript。

### 约束校验的 API

越来越多的浏览器支持限制校验 API，并且这逐渐变得可靠。这些 API 由成组的方法和属性构成，可在特定的表单元素接口上调用：

- [HTMLButtonElement](/zh-CN/docs/Web/API/HTMLButtonElement)
- [HTMLFieldSetElement](/zh-CN/docs/Web/API/HTMLFieldSetElement)
- [HTMLInputElement](/zh-CN/docs/Web/API/HTMLInputElement)
- [HTMLOutputElement](/zh-CN/docs/Web/API/HTMLOutputElement)
- [HTMLSelectElement](/zh-CN/docs/Web/API/HTMLSelectElement)
- [HTMLTextAreaElement](/zh-CN/docs/Web/API/HTMLTextAreaElement)

#### 约束校验的 API 及属性

| 属性                       | 描述                                                                                                                                                                    |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `validationMessage`        | 一个本地化消息，描述元素不满足校验条件时（如果有的话）的文本信息。如果元素无需校验（`willValidate` 为 `false`），或元素的值满足校验条件时，为空字符串。                 |
| `validity`                 | 一个 {{domxref("ValidityState")}} 对象，描述元素的验证状态。详见有关可能的验证状态的文章。                                                                              |
| `validity.customError`     | 如果元素设置了自定义错误，返回 `true` ；否则返回`false`。                                                                                                               |
| `validity.patternMismatch` | 如果元素的值不匹配所设置的正则表达式，返回 `true`，否则返回 `false`。当此属性为 `true` 时，元素将命中 {{cssxref(":invalid")}} CSS 伪类。                                |
| `validity.rangeOverflow`   | 如果元素的值高于所设置的最大值，返回 `true`，否则返回 `false`。当此属性为 `true` 时，元素将命中 {{cssxref(":invalid")}} CSS 伪类。                                      |
| `validity.rangeUnderflow`  | 如果元素的值低于所设置的最小值，返回 `true`，否则返回 `false`。当此属性为 `true` 时，元素将命中 {{cssxref(":invalid")}} CSS 伪类。                                      |
| `validity.stepMismatch`    | 如果元素的值不符合 step 属性的规则，返回 `true`，否则返回 `false`。当此属性为 `true` 时，元素将命中 {{cssxref(":invalid")}} CSS 伪类。                                  |
| `validity.tooLong`         | 如果元素的值超过所设置的最大长度，返回 `true`，否则返回 `false`。当此属性为 `true` 时，元素将命中 {{cssxref(":invalid")}} CSS 伪类。                                    |
| `validity.typeMismatch`    | 如果元素的值出现语法错误，返回 `true`，否则返回 `false`。当此属性为 `true` 时，元素将命中 {{cssxref(":invalid")}} CSS 伪类。                                            |
| `validity.valid`           | 如果元素的值不存在校验问题，返回 `true`，否则返回 `false`。当此属性为 `true` 时，元素将命中 {{cssxref(":valid")}} CSS 伪类，否则命中 {{cssxref(":invalid")}} CSS 伪类。 |
| `validity.valueMissing`    | 如果元素设置了 required 属性且值为空，返回 `true`，否则返回 `false`。当此属性为 true 时，元素将命中 {{cssxref(":invalid")}} CSS 伪类。                                  |
| `willValidate`             | 如果元素在表单提交时将被校验，返回 `true`，否则返回 `false`。                                                                                                           |

#### 约束校验 API 的方法

<table>
  <thead>
    <tr>
      <th scope="col">方法</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>checkValidity()</code></td>
      <td>
        如果元素的值不存在校验问题，返回 <code>true</code>，否则返回
        <code>false</code
        >。如果元素校验失败，此方法会触发 <a href="/zh-CN/docs/Web/API/HTMLInputElement/invalid_event"><code>invalid</code></a> 事件。
      </td>
    </tr>
    <tr>
      <td>{{domxref("HTMLFormElement.reportValidity()")}}</td>
      <td>
        如果元素或它的子元素控件符合校验的限制，返回 <code>true</code> .
        当返回为 <code>false</code> 时，对每个无效元素可撤销
        <a href="/zh-CN/docs/Web/API/HTMLInputElement/invalid_event"><code>invalid</code></a> 事件会被唤起并且校验错误会报告给用户。
      </td>
    </tr>
    <tr>
      <td>
        <p><code>setCustomValidity(<em>message</em>)</code></p>
      </td>
      <td>
        为元素添加一个自定义的错误消息；如果设置了自定义错误消息，该元素被认为是无效的，则显示指定的错误。这允许你使用
        JavaScript 代码来建立校验失败，而不是用标准约束校验 API
        所提供的。这些自定义信息将在向用户报告错误时显示。<br /><br />如果参数为空，则清空自定义错误。
      </td>
    </tr>
  </tbody>
</table>

对于旧版浏览器，可以使用 [polyfill（例如 Hyperform](https://hyperform.js.org/)），来弥补其对约束校验 API 支持的不足。既然你已经使用 JavaScript，在您的网站或 Web 应用程序的设计和实现中使用 polyfill 并不是累赘。

#### 使用约束校验 API 的例子

让我们看看如何使用这个 API 来构建自定义错误消息。首先，HTML：

```html
<form novalidate>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
      <input type="email" id="mail" name="mail" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
```

这个简单的表单使用 [`novalidate`](/zh-CN/docs/Web/HTML/Element/form#novalidate) 属性关闭浏览器的自动校验；这允许我们使用脚本控制表单校验。但是，这并不禁止对约束校验 API 的支持或是以下 CSS 伪类：{{cssxref(":valid")}}、{{cssxref(":invalid")}}、{{cssxref(":in-range")}} 、{{cssxref(":out-of-range")}} 的应用。这意味着，即使浏览器在发送数据之前没有自动检查表单的有效性，您仍然可以自己做，并相应地设置表单的样式。

[`aria-live`](/zh-CN/docs/Accessibility/ARIA/ARIA_Live_Regions) 属性确保我们的自定义错误信息将呈现给所有人，包括使用屏幕阅读器等辅助技术的人。

##### CSS

以下 CSS 样式使我们的表单和其错误输出看起来更有吸引力。

```css
/* 仅为了使示例更好看 */
body {
  font: 1em sans-serif;
  padding: 0;
  margin: 0;
}

form {
  max-width: 200px;
}

p * {
  display: block;
}

input[type="email"] {
  -webkit-appearance: none;

  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

/* 校验失败的元素样式 */
input:invalid {
  border-color: #900;
  background-color: #fdd;
}

input:focus:invalid {
  outline: none;
}

/* 错误消息的样式 */
.error {
  width: 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

##### JavaScript

以下 JavaScript 代码演示如何设置自定义错误校验。

```js
// 有许多方式可以获取 DOM 节点；在此我们获取表单本身和
// email 输入框，以及我们将放置错误信息的 span 元素。

var form = document.getElementsByTagName("form")[0];
var email = document.getElementById("mail");
var error = document.querySelector(".error");

email.addEventListener(
  "input",
  function (event) {
    // 当用户输入信息时，校验 email 字段
    if (email.validity.valid) {
      // 如果校验通过，清除已显示的错误消息
      error.innerHTML = ""; // 重置消息的内容
      error.className = "error"; // 重置消息的显示状态
    }
  },
  false,
);
form.addEventListener(
  "submit",
  function (event) {
    // 当用户提交表单时，校验 email 字段
    if (!email.validity.valid) {
      // 如果校验失败，显示一个自定义错误
      error.innerHTML = "I expect an e-mail, darling!";
      error.className = "error active";
      // 还需要阻止表单提交事件，以取消数据传送
      event.preventDefault();
    }
  },
  false,
);
```

这是运行结果：

{{EmbedLiveSample("使用约束校验_API_的例子", "100%", 130)}}

约束校验 API 为您提供了一个强大的工具来处理表单校验，让您可以对用户界面进行远超过仅仅使用 HTML 和 CSS 所能得到的控制。

### 不使用内建 API 时的表单校验

有时，例如使用旧版浏览器或[自定义小部件](/zh-CN/docs/HTML/Forms/How_to_build_custom_form_widgets)，您将无法（或不希望）使用约束校验 API。在这种情况下，您仍然可以使用 JavaScript 来校验您的表单。校验表单比起真实数据校验更像是一个用户界面问题。

要校验表单，您必须问自己几个问题：

- 我应该进行什么样的校验？
  - : 你需要确定如何校验你的数据：字符串操作，类型转换，正则表达式等。这取决于你。只要记住，表单数据一般都是文本，并总是以字符串形式提供给脚本。
- 如果表单校验失败，我该怎么办？
  - : 这显然是一个 UI 问题。您必须决定表单的行为方式：表单是否发送数据？是否突出显示错误的字段？是否显示错误消息？
- 如何帮助用户纠正无效数据？

  - : 为了减少用户的挫折感，提供尽可能多的有用的信息是非常重要的，以便引导他们纠正他们的输入。您应该提供前期建议，以便他们知道预期的输入是什么以及明确的错误消息。如果您想深入了解表单校验用户界面要求，那么您应该阅读一些有用的文章：

    - SmashingMagazine: [Form-Field Validation: The Errors-Only Approach](http://uxdesign.smashingmagazine.com/2012/06/27/form-field-validation-errors-only-approach/)
    - SmashingMagazine: [Web Form Validation: Best Practices and Tutorials](http://www.smashingmagazine.com/2009/07/07/web-form-validation-best-practices-and-tutorials/)
    - Six Revision: [Best Practices for Hints and Validation in Web Forms](http://sixrevisions.com/user-interface/best-practices-for-hints-and-validation-in-web-forms/)
    - A List Apart: [Inline Validation in Web Forms](http://www.alistapart.com/articles/inline-validation-in-web-forms/)

#### 不使用约束校验 API 的例子

为了说明这一点，让我们重构一下前面的例子，以便它可以在旧版浏览器中使用：

```html
<form>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
      <input type="text" class="mail" id="mail" name="mail" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>

  <p>
    <!-- Some legacy browsers need to have the `type` attribute
       explicitly set to `submit` on the `button`element -->
    <button type="submit">Submit</button>
  </p>
</form>
```

正如你所看到的，HTML 几乎是一样的；我们只是关闭了 HTML 校验功能。请注意，[ARIA](/zh-CN/docs/Accessibility/ARIA) 是与 HTML5 无关的独立规范。

##### CSS

同样的，CSS 也不需要太多的改动，我们只需将 {{cssxref(":invalid")}} 伪类变成真实的类，并避免使用不适用于 Internet Explorer 6 的属性选择器。

```css
/* 仅为了使示例更好看 */
body {
  font: 1em sans-serif;
  padding: 0;
  margin: 0;
}

form {
  max-width: 200px;
}

p * {
  display: block;
}

input.mail {
  -webkit-appearance: none;

  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

/* 校验失败的元素样式 */
input.invalid {
  border-color: #900;
  background-color: #fdd;
}

input:focus.invalid {
  outline: none;
}

/* 错误消息的样式 */
.error {
  width: 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

##### JavaScript

JavaScript 代码有很大的变化，需要做更多的工作。

```js
// 使用旧版浏览器选择 DOM 节点的方法较少
var form = document.getElementsByTagName("form")[0];
var email = document.getElementById("mail");

// 以下是在 DOM 中访问下一个兄弟元素的技巧
// 这比较危险，很容易引起无限循环
// 在现代浏览器中，应该使用 element.nextElementSibling
var error = email;
while ((error = error.nextSibling).nodeType != 1);

// 按照 HTML5 规范
var emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// 许多旧版浏览器不支持 addEventListener 方法
// 这只是其中一种简单的处理方法
function addEvent(element, event, callback) {
  var previousEventCallBack = element["on" + event];
  element["on" + event] = function (e) {
    var output = callback(e);

    // 返回 `false` 来停止回调链，并中断事件的执行
    if (output === false) return false;

    if (typeof previousEventCallBack === "function") {
      output = previousEventCallBack(e);
      if (output === false) return false;
    }
  };
}

// 现在我们可以重构字段的约束校验了
// 由于不使用 CSS 伪类，我们必须明确地设置 valid 或 invalid 类到 email 字段上
addEvent(window, "load", function () {
  // 在这里验证字段是否为空（请记住，该字段不是必需的）
  // 如果非空，检查它的内容格式是不是合格的 e-mail 地址
  var test = email.value.length === 0 || emailRegExp.test(email.value);

  email.className = test ? "valid" : "invalid";
});

// 处理用户输入事件
addEvent(email, "input", function () {
  var test = email.value.length === 0 || emailRegExp.test(email.value);
  if (test) {
    email.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  } else {
    email.className = "invalid";
  }
});

// 处理表单提交事件
addEvent(form, "submit", function () {
  var test = email.value.length === 0 || emailRegExp.test(email.value);

  if (!test) {
    email.className = "invalid";
    error.innerHTML = "I expect an e-mail, darling!";
    error.className = "error active";

    // 某些旧版浏览器不支持 event.preventDefault() 方法
    return false;
  } else {
    email.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  }
});
```

该结果如下：

{{EmbedLiveSample("不使用内建_API_时的表单校验", "100%", 130)}}

正如你所看到的，建立自己的校验系统并不难。困难的部分是使其足够通用，以跨平台和任何形式使用它可以创建。有许多库可用于执行表单校验; 你应该毫不犹豫地使用它们。这里有一些例子：

- 独立的库（原生 Javascript 实现）：

  - [Validate.js](http://rickharrison.github.com/validate.js/)

- jQuery 插件：

  - [Validation](http://bassistance.de/jquery-plugins/jquery-plugin-validation/)
  - [Valid8](http://unwrongest.com/projects/valid8/)

#### 远程校验

在某些情况下，执行一些远程校验可能很有用。当用户输入的数据与存储在应用程序服务器端的附加数据绑定时，这种校验是必要的。一个应用实例就是注册表单，在这里你需要一个用户名。为了避免重复，执行一个 AJAX 请求来检查用户名的可用性，要比让先用户发送数据，然后因为表单重复了返回错误信息要好得多。

执行这样的校验需要采取一些预防措施：

- 它要求公开 API 和一些数据；您需要确保它不是敏感数据。
- 网络滞后需要执行异步校验。这需要一些用户界面的工作，以确保如果校验没有适当的执行，用户不会被阻止。

## 结论

表单校验并不需要复杂的 JavaScript，但它需要对用户的仔细考虑。一定要记住帮助您的用户更正他提供的数据。为此，请务必：

- 显示明确的错误消息。
- 放宽输入格式限制。
- 指出错误发生的位置（特别是在大型表单中）。

{{PreviousMenuNext("Learn/HTML/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms/How_to_build_custom_form_widgets", "Learn/HTML/Forms")}}
