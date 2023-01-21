---
title: 约束验证
slug: Web/HTML/Constraint_validation
original_slug: Web/Guide/HTML/Constraint_validation
---

{{HTMLSidebar}}

创建 web 表单始终是一个复杂的任务。仅仅组装表单是容易的，但是检查每一个字段的值是否有效并且一致是一件更加困难的事情，而向用户指明错误可能会令人头痛。[HTML5](/zh-CN/docs/Glossary/HTML5) 引入了表单相关的一些新的机制：它为 {{ HTMLElement("input") }} 元素和*约束验证*增加了一些新的语义类型，使得在客户端检查表单内容的工作变得容易。基本上，在填写字段时，通常这些约束都会被检查，而不需要额外的 JavaScript 代码进行校验；对于更复杂的约束条件的校验可以尝试使用约束验证 API。

对于这些概念的基本介绍和示例，参阅[表单验证基础](/zh-CN/docs/Learn/Forms/Form_validation)一页的介绍。

> **备注：** HTML 约束验证并不能移除*服务端*验证的需要。尽管无效的表单请求要少得多，但无效的表单请求仍然可能被发送，例如被试图欺骗你的网络应用的坏人发送。因此，你需要始终在服务器端验证输入约束，其方式与在客户端所做的一致。

## 固有和基本的约束

在 HTML 中，声明基本的约束有两种方式：

- 给 {{ HTMLElement("input") }} 元素的 {{ htmlattrxref("type", "input") }} 属性选择最合适的语义化的值，比如，选择 `email` 类型将会自动创建一个约束用于检查输入的值是否是一个有效的电子邮件地址。
- 设置验证相关的属性值，允许用一种简单的方式来描述基本的约束，而不必要使用 JavaScript。

### 语义的 input 类型

{{ htmlattrxref("type", "input") }} 特性中固有约束有：

| Input 类型                                                         | 约束描述                                                                                                                                           | 相关违约                                                                    |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`<input type="URL">`](/zh-CN/docs/Web/HTML/Element/input/url)     | 值必须为 [URL 现行标准](https://url.spec.whatwg.org/)定义的绝对 [URL](/zh-CN/docs/Learn/Common_questions/What_is_a_URL) 地址。    | **[TypeMismatch](/zh-CN/docs/Web/API/ValidityState/typeMismatch)** 约束违反 |
| [`<input type="email">`](/zh-CN/docs/Web/HTML/Element/input/email) | 该值必须是一个语法上有效的电子邮件地址，其格式一般为 `username@hostname.tld`，但也可以是本地的，如 `username@hostname`。 | **[TypeMismatch](/zh-CN/docs/Web/API/ValidityState/typeMismatch)** 约束违反 |

对于这两种输入类型，如果设置了 {{ htmlattrxref("multiple", "input") }} 属性，可以设置几个值，作为一个逗号分隔的列表。如果其中任何一个不满足这里描述的条件，就会触发 **TypeMismatch** 约束的违反。

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
        一个<a href="/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions"
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
        <code>text</code>、<code>search</code>、<code>url</code>、<code>tel</code>、<code>email</code>、<code>password</code>、<code>date</code>、<code>datetime-local</code>、       <code>month</code>、<code>week</code>、<code>time</code>、<code>number</code>、<code>checkbox</code>、<code>radio</code>、<code>file</code>；也在 {{ HTMLElement("select") }} 和 {{ HTMLElement("textarea") }} 元素上可用
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

约束验证是通过约束验证 API 在单个表单元素上或在表单层面上，通过 {{ HTMLElement("form") }} 元素本身上完成。约束验证是通过以下方式完成的：

- 通过调用表单相关的 DOM 接口（[`HTMLInputElement`](/zh-CN/docs/Web/API/HTMLInputElement)、[`HTMLSelectElement`](/zh-CN/docs/Web/API/HTMLSelectElement)、[`HTMLButtonElement`](/zh-CN/docs/Web/API/HTMLButtonElement) 、[`HTMLOutputElement`](/zh-CN/docs/Web/API/HTMLOutputElement) 或 [`HTMLTextAreaElement`](/zh-CN/docs/Web/API/HTMLTextAreaElement)）的 `checkValidity()` 或 `reportValidity()` 方法，只对这个元素进行约束评估，允许脚本获得这些信息。`checkValidity()` 方法返回一个布尔值，表示该元素的值是否通过其约束（这通常是由用户代理在确定哪个 CSS 伪类，{{ Cssxref(":valid") }} 或 {{ Cssxref(":invalid") }} 适用时完成的）。相反，`reportValidity()` 方法会向用户报告任何约束失败的情况。
- 通过调用 [`HTMLFormElement`](/zh-CN/docs/Web/API/HTMLFormElement) 接口上的 `checkValidity()` 或 `reportValidity()` 方法。
- 通过提交表单本身。

> **备注：**
>
> - 如果 {{ HTMLElement("form") }} 元素上设置了 {{ htmlattrxref("novalidate", "form") }} 属性，则不发生约束验证交互。
> - 在 [`HTMLFormElement`](/zh-CN/docs/Web/API/HTMLFormElement) 接口上调用 `submit()` 方法并不触发约束条件验证。换句话说，即使表单数据不满足约束条件，该方法也会将其发送到服务器。在提交按钮上调用 `click()` 方法来代替。

## 使用约束验证 API 进行复杂的约束

Using JavaScript and the Constraint API, it is possible to implement more complex constraints, for example, constraints combining several fields, or constraints involving complex calculations.

Basically, the idea is to trigger JavaScript on some form field event (like **onchange**) to calculate whether the constraint is violated, and then to use the method `field.setCustomValidity()` to set the result of the validation: an empty string means the constraint is satisfied, and any other string means there is an error and this string is the error message to display to the user.

### 包含多个字段的约束：邮政编码验证

The postal code format varies from one country to another. Not only do most countries allow an optional prefix with the country code (like `D-` in Germany, `F-` in France or Switzerland), but some countries have postal codes with only a fixed number of digits; others, like the UK, have more complex structures, allowing letters at some specific positions.

> **备注：** This is not a comprehensive postal code validation library, but rather a demonstration of the key concepts.

As an example, we will add a script checking the constraint validation for this simple form:

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
  // For each country, defines the pattern that the ZIP has to follow
  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
  };

  // Read the country id
  const country = document.getElementById("Country").value;

  // Get the NPA field
  const ZIPField = document.getElementById("ZIP");

  // Build the constraint checker
  const constraint = new RegExp(constraints[country][0], "");
  console.log(constraint);

  // Check it!
  if (constraint.test(ZIPField.value)) {
    // The ZIP follows the constraint, we use the ConstraintAPI to tell it
    ZIPField.setCustomValidity("");
  } else {
    // The ZIP doesn't follow the constraint, we use the ConstraintAPI to
    // give a message about the format required for this country
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

Another common constraint is to limit the size of a file to be uploaded. Checking this on the client side before the file is transmitted to the server requires combining the Constraint API, and especially the field.setCustomValidity() method, with another JavaScript API, here the HTML5 File API.

这里是 HTML 部分：

```html
<label for="FS"选择一个小于 75 kB 的文件：</label>
<input type="file" id="FS" />
```

会显示：

{{EmbedLiveSample("限制所上传文件的大小")}}

The JavaScript reads the file selected, uses the File.size() method to get its size, compares it to the (hard coded) limit, and calls the Constraint API to inform the browser if there is a violation:

```js
function checkFileSize() {
  const FS = document.getElementById("FS");
  const files = FS.files;

  // If there is (at least) one file selected
  if (files.length > 0) {
    if (files[0].size > 75 * 1024) {
      // Check the constraint
      FS.setCustomValidity("The selected file must not be larger than 75 kB");
      return;
    }
  }
  // No custom constraint violation
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

Apart from setting constraints, web developers want to control what messages are displayed to the users and how they are styled.

### 控制元素的外观

The look of elements can be controlled via CSS pseudo-classes.

#### :required、:optional CSS 伪类

The {{cssxref(':required')}} and {{cssxref(':optional')}} [pseudo-classes](/zh-CN/docs/Web/CSS/Pseudo-classes) allow writing selectors that match form elements that have the {{ htmlattrxref("required") }} attribute, or that don't have it.

#### :placeholder-shown CSS 伪类

参见 {{cssxref(':placeholder-shown')}}。

#### :valid、:invalid CSS 伪类

The {{cssxref(':valid')}} and {{cssxref(':invalid')}} [pseudo-classes](/zh-CN/docs/Web/CSS/Pseudo-classes) are used to represent \<input> elements whose content validates and fails to validate respectively according to the input's type setting. These classes allow the user to style valid or invalid form elements to make it easier to identify elements that are either formatted correctly or incorrectly.

### 控制约束验证的文字

The following items can help with controlling the text of a constraint violation:

- The `setCustomValidity(message)` method on the following elements:

  - {{HTMLElement("fieldset")}}. Note: Setting a custom validity message on fieldset elements will not prevent form submission in most browsers.
  - {{HTMLElement("input")}}
  - {{HTMLElement("output")}}
  - {{HTMLElement("select")}}
  - Submit buttons (created with either a {{HTMLElement("button")}} element with the `submit` type, or an `input` element with the {{HTMLElement("input/submit", "submit")}} type. Other types of buttons do not participate in constraint validation.
  - {{HTMLElement("textarea")}}

- The [`ValidityState`](/zh-CN/docs/Web/API/ValidityState) interface describes the object returned by the `validity` property of the element types listed above. It represents various ways that an entered value can be invalid. Together, they help explain why an element's value fails to validate, if it's not valid.
