---
title: 约束验证
slug: Web/HTML/Constraint_validation
---

{{HTMLSidebar}}

创建 web 表单始终是一个复杂的任务。仅仅组装表单是容易的，但是检查每一个字段的值是否有效并且一致是一件更加困难的事情，而如何告知用户错误所在可能会令人头痛。[HTML5](/zh-CN/docs/Glossary/HTML5) 引入了表单相关的一些新机制：它为 {{ HTMLElement("input") }} 元素和*约束验证*增加了一些新的语义类型，使得客户端检查表单内容变得容易。基本上，通过设置一些新的属性，常用的约束条件可以无需 JavaScript 代码而检测到；对于更复杂的约束条件的校验可以尝试使用约束验证 API。

对于这些概念的基本介绍和示例，参阅[表单数据校验教程](/zh-CN/docs/Learn/Forms/Form_validation)一页的介绍。

> **备注：** HTML 约束验证并不能移除*服务端*验证的需要。尽管无效的表单请求要少得多，但无效的表单请求仍然可能被发送，例如被试图欺骗你的网络应用的坏人发送。因此，你需要始终在服务端验证输入约束，其方式与在客户端所做的一致。

## 固有和基本的约束

在 HTML 中，有两种方式声明基本的约束：

- 给 {{ HTMLElement("input") }} 元素的 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 属性选择最合适的语义化的值，比如，选择 `email` 类型将会自动创建一个约束，用于检查输入的值是否是一个有效的电子邮件地址。
- 设置验证相关的属性值，允许用一种简单的方式来描述基本的约束，而不必要使用 JavaScript。

### 语义的 input 类型

[`type`](/zh-CN/docs/Web/HTML/Element/input#type) 属性中的固有约束有：

| Input 类型                                                         | 约束描述                                                                                                                       | 相关违约                                                                    |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| [`<input type="URL">`](/zh-CN/docs/Web/HTML/Element/input/url)     | 值必须为 [URL 现行标准](https://url.spec.whatwg.org/)定义的绝对 [URL](/zh-CN/docs/Learn/Common_questions/What_is_a_URL) 地址。 | **[TypeMismatch](/zh-CN/docs/Web/API/ValidityState/typeMismatch)** 约束违反 |
| [`<input type="email">`](/zh-CN/docs/Web/HTML/Element/input/email) | 该值必须是一个语法上有效的电子邮件地址，其格式一般为 `username@hostname.tld`，但也可以是本地的，如 `username@hostname`。       | **[TypeMismatch](/zh-CN/docs/Web/API/ValidityState/typeMismatch)** 约束违反 |

对于这两种输入类型，如果设置了 [`multiple`](/zh-CN/docs/Web/HTML/Element/input#multiple) 属性，可以设置几个值，作为一个逗号分隔的列表。如果其中任何一个不满足这里描述的条件，就会触发 **TypeMismatch** 约束的违反。

请注意，大多数 input 类型没有内在的约束，因为有些类型被禁止在约束验证中使用，或者有一个净化算法将不正确的值转化为正确的默认值。

### 验证相关的属性

除了上面描述的 `type` 属性外，以下属性用于描述基本约束。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col">支持该特性的 Input 类型</th>
      <th scope="col">可接受的值</th>
      <th scope="col">约束描述</th>
      <th scope="col">相关违约</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/HTML/Attributes/pattern">pattern</a></code
        >
      </td>
      <td>
        <code>text</code>、<code>search</code>、<code>url</code>、<code>tel</code>、<code>email</code>、<code>password</code>
      </td>
      <td>
        一个<a href="/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions"
          >JavaScript 正则表达式</a
        >（以 {{jsxref("RegExp.global", "global")}}、{{jsxref("RegExp.ignoreCase", "ignoreCase")}} 标志编译，且<em>禁用</em>了 {{jsxref("RegExp.multiline", "multiline")}} 标志）
      </td>
      <td>输入的值必须符合模式。</td>
      <td>
        <a href="/zh-CN/docs/Web/API/ValidityState/patternMismatch"
          ><strong><code>patternMismatch</code></strong></a
        >
        约束违反
      </td>
    </tr>
    <tr>
      <td rowspan="3">
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/min">min</a></code>
      </td>
      <td><code>range</code>、<code>number</code></td>
      <td>一个有效的数字</td>
      <td rowspan="3">输入的值必须大于等于该属性值。</td>
      <td rowspan="3">
        <strong
          ><code
            ><a href="/zh-CN/docs/Web/API/ValidityState/rangeUnderflow"
              >rangeUnderflow</a
            ></code
          ></strong
        >
        约束违反
      </td>
    </tr>
    <tr>
      <td><code>date</code>、<code>month</code>、<code>week</code></td>
      <td>一个有效的日期值</td>
    </tr>
    <tr>
      <td>
        <code>datetime-local</code>、<code>time</code>
      </td>
      <td>一个有效的日期时间值</td>
    </tr>
    <tr>
      <td rowspan="3">
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/max">max</a></code>
      </td>
      <td><code>range</code>、<code>number</code></td>
      <td>一个有效的数字</td>
      <td rowspan="3">输入的值必须小于等于该属性值。</td>
      <td rowspan="3">
        <strong
          ><code
            ><a href="/zh-CN/docs/Web/API/ValidityState/rangeOverflow"
              >rangeOverflow</a
            ></code
          ></strong
        >
        约束违反
      </td>
    </tr>
    <tr>
      <td><code>date</code>、<code>month</code>、<code>week</code></td>
      <td>一个有效的日期值</td>
    </tr>
    <tr>
      <td>
        <code>datetime-local</code>、<code>time</code>
      </td>
      <td>一个有效的日期时间值</td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/HTML/Attributes/required">required</a></code
        >
      </td>
      <td>
        <code>text</code>、<code>search</code>、<code>url</code>、<code>tel</code>、<code>email</code>、<code>password</code>、<code>date</code>、<code>datetime-local</code>、<code>month</code>、<code>week</code>、<code>time</code>、<code>number</code>、<code>checkbox</code>、<code>radio</code>、<code>file</code>；也在 {{ HTMLElement("select") }} 和 {{ HTMLElement("textarea") }} 元素上可用
      </td>
      <td>
        由于是一个布尔属性，所以为 <em>none</em>：如果存在这个属性，则为 <em>true</em>；否则为 <em>false</em>
      </td>
      <td>如果指定了这个属性，则必须输入一个值。</td>
      <td>
        <strong
          ><code
            ><a href="/zh-CN/docs/Web/API/ValidityState/valueMissing"
              >valueMissing</a
            ></code
          ></strong
        >
        约束违反
      </td>
    </tr>
    <tr>
      <td rowspan="5">
        <code><a href="/zh-CN/docs/Web/HTML/Attributes/step">step</a></code>
      </td>
      <td><code>date</code></td>
      <td>一个代表天数的整数</td>
      <td rowspan="5">
        如果 step 没有设置为字面量 <code>any</code>，则输入值必须为 <strong>min</strong> + step 值的整数倍。
      </td>
      <td rowspan="5">
        <strong
          ><code
            ><a href="/zh-CN/docs/Web/API/ValidityState/stepMismatch"
              >stepMismatch</a
            ></code
          ></strong
        >
        约束违反
      </td>
    </tr>
    <tr>
      <td><code>month</code></td>
      <td>一个代表月数的整数</td>
    </tr>
    <tr>
      <td><code>week</code></td>
      <td>一个代表周数的整数</td>
    </tr>
    <tr>
      <td>
        <code>datetime-local</code>、<code>time</code>
      </td>
      <td>一个代表秒数的整数</td>
    </tr>
    <tr>
      <td><code>range</code>、<code>number</code></td>
      <td>一个整数</td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/HTML/Attributes/minlength"
            >minlength</a
          ></code
        >
      </td>
      <td>
        <code>text</code>、<code>search</code>、<code>url</code>、<code>tel</code>、<code>email</code>、<code>password</code>；也在 {{ HTMLElement("textarea") }} 元素上可用
      </td>
      <td>一个整数长度</td>
      <td>
        如果输入值非空，则其字符数（码点）不得少于该属性的值。对于 {{ HTMLElement("textarea") }}，所有换行符都被规范化为一个字符（相对于 CRLF 对）。
      </td>
      <td>
        <strong
          ><code
            ><a href="/zh-CN/docs/Web/API/ValidityState/tooShort"
              >tooShort</a
            ></code
          ></strong
        >
        约束违反
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/HTML/Attributes/maxlength"
            >maxlength</a
          ></code
        >
      </td>
      <td>
        <code>text</code>、<code>search</code>、<code>url</code>、<code>tel</code>、<code>email</code>、<code>password</code>；也在 {{ HTMLElement("textarea") }} 元素上可用
      </td>
      <td>一个整数长度</td>
      <td>
        字符数（码点）不得超过该属性的值。
      </td>
      <td>
        <strong
          ><code
            ><a href="/zh-CN/docs/Web/API/ValidityState/tooLong"
              >tooLong</a
            ></code
          ></strong
        >
        约束违反
      </td>
    </tr>
  </tbody>
</table>

## 约束验证过程

约束验证是通过约束验证 API 在单个表单元素上或在表单层面上，通过 {{ HTMLElement("form") }} 元素本身完成。约束验证是通过以下方式完成的：

- 通过调用表单相关的 DOM 接口（[`HTMLInputElement`](/zh-CN/docs/Web/API/HTMLInputElement)、[`HTMLSelectElement`](/zh-CN/docs/Web/API/HTMLSelectElement)、[`HTMLButtonElement`](/zh-CN/docs/Web/API/HTMLButtonElement) 、[`HTMLOutputElement`](/zh-CN/docs/Web/API/HTMLOutputElement) 或 [`HTMLTextAreaElement`](/zh-CN/docs/Web/API/HTMLTextAreaElement)）的 `checkValidity()` 或 `reportValidity()` 方法，只对这个元素进行约束评估，允许脚本获得这些信息。`checkValidity()` 方法返回一个布尔值，表示该元素的值是否通过其约束（这通常是由用户代理在确定哪个 CSS 伪类，{{ Cssxref(":valid") }} 或 {{ Cssxref(":invalid") }} 适用时完成的）。相反，`reportValidity()` 方法会向用户报告任何约束失败的情况。
- 通过调用 [`HTMLFormElement`](/zh-CN/docs/Web/API/HTMLFormElement) 接口上的 `checkValidity()` 或 `reportValidity()` 方法。
- 通过提交表单本身。

调用 `checkValidity()` 也被称为约束的*静态*验证，调用 `reportValidity()` 也被称为约束的*交互*认证。

> **备注：**
>
> - 如果 {{ HTMLElement("form") }} 元素上设置了 [`novalidate`](/zh-CN/docs/Web/HTML/Element/form#novalidate) 属性，则不发生约束验证交互。
> - 在 [`HTMLFormElement`](/zh-CN/docs/Web/API/HTMLFormElement) 接口上调用 `submit()` 方法并不触发约束条件验证。换句话说，即使表单数据不满足约束条件，该方法也会将其发送到服务器。在提交按钮上调用 `click()` 方法来代替。

## 使用约束验证 API 进行复杂的约束

使用 JavaScript 和约束验证 API，可以实现更复杂的约束，例如，结合几个字段的约束，或涉及复杂计算的约束。

基本上，这个想法是在某个表单字段事件（比如 **onchange**）上触发 JavaScript，以计算是否违反约束，然后使用 `field.setCustomValidity()` 方法来设置验证的结果：一个空字符串意味着满足约束条件，任何其他字符串意味着有一个错误，这个字符串是显示给用户的错误信息。

### 包含多个字段的约束：邮政编码验证

每个国家的邮政编码都不相同。大多数国家允许有一个可选的国家代码前缀（如德国的 `D-`，法国或瑞士的 `F-`），还有其他一些国家的邮政编码只有固定的数字；其他国家，如英国，有更复杂的结构，允许在一些特定的位置有字母。

> **备注：** 这不是一个全面的邮政编码验证库，而是关键概念的演示。

作为示例，我们会向以下这个简单的表单中添加一段代码来进行约束验证：

```html
<form>
  <label for="ZIP">ZIP 码：</label>
  <input type="text" id="ZIP" />
  <label for="Country">国家：</label>
  <select id="Country">
    <option value="ch">瑞士</option>
    <option value="fr">法国</option>
    <option value="de">德国</option>
    <option value="nl">荷兰</option>
  </select>
  <input type="submit" value="验证" />
</form>
```

以上代码显示了像这样的表单：

{{EmbedLiveSample("包含多个字段的约束：邮政编码验证")}}

首先，我们来写一个函数来检查本身包含的约束：

```js
function checkZIP() {
  // 为每个国家定义 ZIP 码需要满足的模式
  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "瑞士的 ZIP 码必须恰好有 4 位数字，如 CH-1950 或 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "法国的 ZIP 码必须恰好有 5 位数字，如 F-75012 或 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "德国的 ZIP 码必须恰好有 5 位数字，如 D-12345 或 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "荷兰的 ZIP 码必须恰好有 4 位数字，后跟除 SA、SD 和 SS 的 2 位字母",
    ],
  };

  // 读取国家 ID
  const country = document.getElementById("Country").value;

  // 获取 NPA 字段内容
  const ZIPField = document.getElementById("ZIP");

  // 构建约束检查器
  const constraint = new RegExp(constraints[country][0], "");
  console.log(constraint);

  // 检查它！
  if (constraint.test(ZIPField.value)) {
    // ZIP 码满足约束条件，我们使用 Constraint API 告知用户
    ZIPField.setCustomValidity("");
  } else {
    // ZIP 不满足约束条件，我们使用 Constraint API 告知该国家所需的 ZIP 码格式
    ZIPField.setCustomValidity(constraints[country][1]);
  }
}
```

然后我们把它链接到 {{ HTMLElement("select") }} 的 **onchange** 事件和 {{ HTMLElement("input") }} 的 **oninput** 事件。

```js
window.onload = () => {
  document.getElementById("Country").onchange = checkZIP;
  document.getElementById("ZIP").oninput = checkZIP;
};
```

### 限制所上传文件的大小

另一个常见的约束是限制要上传的文件的大小。在文件传输到服务器之前，在客户端检查这个问题需要将约束条件验证 API，特别是 `field.setCustomValidity()` 方法，与另一个 JavaScript API 结合起来，这里是文件 API。

这里是 HTML 部分：

```html
<label for="FS">选择一个小于 75 kB 的文件：</label>
<input type="file" id="FS" />
```

会显示：

{{EmbedLiveSample("限制所上传文件的大小")}}

JavaScript 代码会读取所选的文件，使用 `File.size()` 方法来获取其大小，将其与（硬编码的）限制进行比较，如果有违反，则调用约束 API 来通知浏览器。

```js
function checkFileSize() {
  const FS = document.getElementById("FS");
  const files = FS.files;

  // 如果选择了（至少）一个文件
  if (files.length > 0) {
    if (files[0].size > 75 * 1024) {
      // 检查约束条件
      FS.setCustomValidity("选择的文件不能超过 75 kB");
      return;
    }
  }
  // 没有违反自定义约束条件
  FS.setCustomValidity("");
}
```

最终，我们将这个方法链接到一个正确的事件上：

```js
window.onload = () => {
  document.getElementById("FS").onchange = checkFileSize;
};
```

## 约束验证的可视化样式

除了设置约束条件外，web 开发者还想控制向用户显示什么信息以及它们的样式。

### 控制元素的外观

元素的外观可以通过 CSS 伪类进行控制。

#### :required、:optional CSS 伪类

{{cssxref(':required')}} 和 {{cssxref(':optional')}} [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)允许开发者编写选择器，以匹配有 [`required`](/zh-CN/docs/Web/HTML/Global_attributes#required) 属性或没有该属性的表单元素。

#### :placeholder-shown CSS 伪类

参见 {{cssxref(':placeholder-shown')}}。

#### :valid、:invalid CSS 伪类

{{cssxref(':valid')}} 和 {{cssxref(':invalid')}} [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)用于表示 \<input> 元素，根据输入的类型设置，这些元素的内容分别可以验证和无法验证。这些类允许用户对有效或无效的表单元素进行样式设计，以使其更容易识别格式正确或不正确的元素。

### 控制约束验证的文字

以下一些方法可以控制违反约束条件的文本：

- 以下元素上的 `setCustomValidity(message)` 方法：

  - {{HTMLElement("fieldset")}}。备注：大多数浏览器中，在 fieldset 元素上设定自定义验证信息不会阻止表单提交。
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("select")}}
  - 提交按钮（使用类型为 `submit` 的 {{HTMLElement("button")}} 元素，或类型为 {{HTMLElement("input/submit", "submit")}} 的 `input` 元素创建。其他类型的按钮不参与约束验证。
  - {{HTMLElement("textarea")}}

- [`ValidityState`](/zh-CN/docs/Web/API/ValidityState) 接口描述了由上述元素类型的 `validity` 属性返回的对象。它表示一个输入值可能无效的各种方式。它们共同解释了为什么一个元素的值是无效的，则不能被验证。
