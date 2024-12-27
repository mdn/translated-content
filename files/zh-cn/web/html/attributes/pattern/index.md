---
title: HTML 属性：pattern
slug: Web/HTML/Attributes/pattern
---

{{HTMLSidebar}}

**`pattern`** 属性规定了一个表单控件的值应该匹配的[正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)。如果一个非 `null` 值不满足 `pattern` 值设置的约束，{{domxref('ValidityState')}} 对象的只读属性 {{domxref('ValidityState.patternMismatch','patternMismatch')}} 将为 true。

{{EmbedInteractiveExample("pages/tabbed/attribute-pattern.html", "tabbed-shorter")}}

## 概述

`pattern` 属性是 {{HTMLElement("input/text", "text")}}、{{HTMLElement("input/tel", "tel")}}、{{HTMLElement("input/email", "email")}}、{{HTMLElement("input/url", "url")}}、{{HTMLElement("input/password", "password")}} 和 {{HTMLElement("input/search", "search")}} 等输入类型的属性。

当指定 `pattern` 属性时，它是一个正则表达式，代表输入的 [`value`](/zh-CN/docs/Web/HTML/Global_attributes#value) 必须与之匹配，以便该值能够通过[约束验证](/zh-CN/docs/Web/HTML/Constraint_validation)。它必须是一个有效的 JavaScript 正则表达式，它会被 {{jsxref("RegExp")}} 类型所使用，正如我们的[正则表达式指南](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)中所述；在编译正则表达式时指定 `'u'` 标志，以便将该模式作为 Unicode 码点序列，而不是 ASCII。模式文本周围不应指定正斜杠。

如果没有指定模式或无效，则不应用正则表达式，此属性被忽略。

> [!NOTE]
> 请使用 [`title`](/zh-CN/docs/Web/HTML/Element/input#title) 属性来指定大多数浏览器将作为工具提示显示的文本，以解释匹配该模式的要求是什么。**不能**仅仅依靠工具提示来进行解释。关于可用性的更多信息见下文。

一些支持 `pattern` 属性的输入类型，特别是 {{HTMLElement("input/email", "email")}} 和 {{HTMLElement("input/url", "url")}}，有必须匹配的预期值语法。如果 `pattern` 属性不存在，并且值不符合该值类型的预期语法， {{domxref('ValidityState')}} 对象的只读 {{domxref('ValidityState.typeMismatch','typeMismatch')}} 属性将为 true。

### 可用性

当包括一个 `pattern` 时，在控件附近的可见文本中提供对模式的描述。此外，包括一个 [`title`](/zh-CN/docs/Web/HTML/Global_attributes/title) 属性对该模式进行描述。用户代理可以在约束验证期间使用标题内容来告诉用户该模式不匹配。一些浏览器会显示标题内容的工具提示，以提高视力障碍者的可用性。此外，当控件获得焦点时，辅助技术可能会大声朗读标题，但无障碍技术不应依赖它。

### 约束验证

如果输入的值不是空字符串，并且该值与整个正则表达式不匹配，那么 {{domxref('ValidityState')}} 对象的 {{domxref('ValidityState.patternMismatch','patternMismatch')}} 属性为 `true`，就会出现违反约束条件的现象。模式的正则表达式在与值匹配时，其开始部分必须确定在字符串的开始部分，其结束部分必须确定在字符串的结束部分，这与 JavaScript 正则表达式略有不同：在模式属性的情况下，我们是与整个字符串匹配，而不仅仅是任何子集，如同在模式的开始部分隐含 `^(?:`，而在结束部分隐含 `)$`。

> [!NOTE]
> 如果 `pattern` 属性被指定为空值，其值隐含为空字符串。因此，**任何非空的**输入 `value` 都会导致约束违反。

## 示例

### 匹配电话号码

考虑到以下情况：

```html
<p>
  <label>
    按 (123) - 456 - 7890 格式输入你的电话号码 (<input
      name="tel1"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3 位区号"
      size="2" />) -
    <input
      name="tel2"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3 位前缀"
      size="2" />
    -
    <input
      name="tel3"
      type="tel"
      pattern="[0-9]{4}"
      placeholder="####"
      aria-label="4 位号码"
      size="3" />
  </label>
</p>
```

在这里，我们有 3 个部分用于一个北美的电话号码，其隐含的标签包含了电话号码的所有三个组成部分，分别期望 3 位数、3 位数和 4 位数，这是由 [`pattern`](/zh-CN/docs/Web/HTML/Attributes/pattern) 属性设定的。

如果值太长或太短，或包含不是数字的字符，patternMismatch 将为 true。当为 `true` 时，该元素与 {{cssxref(":invalid")}} CSS 伪类匹配。

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("匹配电话号码", 300, 80)}}

如果我们用 [`minlength`](/zh-CN/docs/Web/HTML/Attributes/minlength) 和 [`maxlength`](/zh-CN/docs/Web/HTML/Attributes/maxlength) 属性代替，我们可能会看到 {{domxref('validityState.tooLong')}} 或 {{domxref('validityState.tooShort')}} 为 true。

### 指定一种模式

你可以使用 [`pattern`](/zh-CN/docs/Web/HTML/Element/input#pattern) 属性来指定一个正则表达式，输入的值必须与之匹配，才能被视为有效（参见[根据正则表达式进行验证](/zh-CN/docs/Learn_web_development/Extensions/Forms/Form_validation#使用正则表达式校验)了解关于使用正则表达式来验证输入的简单速成课程）。

下面的例子将值限制为 4-8 个字符，并要求它只包含小写字母。

```html
<form>
  <div>
    <label for="uname">选择一个用户名：</label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="45"
      pattern="[a-z]{4,8}"
      title="4 到 8 个小写字母" />
    <span class="validity"></span>
    <p>用户名必须为小写字母，且长度为 4-8 个字符</p>
  </div>
  <div>
    <button>提交</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

p {
  font-size: 80%;
  color: #999;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

这将渲染为如下形式：

{{ EmbedLiveSample('指定一种模式', 600, 110) }}

### 无障碍注意事项

当一个控件有一个 `pattern` 属性时，如果使用 `title` 属性，则必须用于描述该模式。依靠 `title` 属性来显示文本内容通常是不可取的，因为许多用户代理并不以无障碍的方式暴露该属性。一些浏览器在悬停带有标题的元素时显示工具提示，但这就排除了只用键盘和只用触摸屏的用户。这就是你必须包括告知用户如何填写控件以符合要求的几个原因之一。

虽然 `title` 被一些浏览器用来填充错误信息，但由于浏览器有时也会在悬停时将标题显示为文本，因此在非错误情况下也会显示，所以要注意不要将标题写成发生了错误的样子。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [约束验证](/zh-CN/docs/Web/HTML/Constraint_validation)
- [表单数据校验](/zh-CN/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)
