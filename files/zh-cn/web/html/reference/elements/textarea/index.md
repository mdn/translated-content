---
title: <textarea>：文本区域元素
slug: Web/HTML/Reference/Elements/textarea
l10n:
  sourceCommit: 0f4b28bdc51e89cd25d132b9db12e3e903a9c5aa
---

**`<textarea>`** [HTML](/zh-CN/docs/Web/HTML) 元素是一个多行纯文本编辑控件，适用于允许用户输入大量自由格式文本的场景，例如评论或反馈表单。

{{InteractiveExample("HTML Demo: &lt;textarea&gt;", "tabbed-standard")}}

```html interactive-example
<label for="story">Tell us your story:</label>

<textarea id="story" name="story" rows="5" cols="33">
It was a dark and stormy night...
</textarea>
```

```css interactive-example
label,
textarea {
  font-size: 0.8rem;
  letter-spacing: 1px;
}

textarea {
  padding: 10px;
  max-width: 100%;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #999;
}

label {
  display: block;
  margin-bottom: 10px;
}
```

上述示例展示了 `<textarea>` 的几个特点：

- `id` 属性允许 `<textarea>` 与 {{htmlelement("label")}} 元素关联，以实现无障碍访问。
- `name` 属性用于设置表单提交时发送至服务器的数据项名称。
- `rows` 和 `cols` 属性用于指定 `<textarea>` 的精确尺寸。由于不同浏览器的默认值可能有所不同，因此设置这两个属性有助于保持一致性。
- 在标签间默认输入的内容。`<textarea>` 不支持 `value` 属性。

`<textarea>` 元素还接受表单 `<input>` 一些常用属性，例如 `autocomplete`、`autofocus`、`disabled`、`placeholder`、`readonly` 和 `required`。

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

- `autocapitalize`
  - : 控制输入文本是否自动大写。有关更多信息，请参阅 [`autocapitalize`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/autocapitalize) 全局属性页面。

- `autocomplete`
  - : 此属性指示浏览器是否可以自动完成控件的值。可能的值包括：
    - `off`：每次使用时，用户都必须明确为此字段输入值，或者文档提供自己的自动完成方法；浏览器不会自动完成条目。
    - `on`：浏览器可以根据用户在以前使用过程中输入的值自动完成该值。

    如果 `<textarea>` 元素上未指定 `autocomplete` 属性，那么浏览器将使用 `<textarea>` 元素表单所有者的 `autocomplete` 属性值。表单所有者要么是此 `<textarea>` 元素所属的 {{HTMLElement("form")}} 元素，要么是通过 `form` 属性指定其 `id` 的表单元素。有关更多信息，请参阅 {{HTMLElement("form")}} 中的 [`autocomplete`](/zh-CN/docs/Web/HTML/Reference/Elements/form#autocomplete) 属性。

- `autocorrect` {{non-standard_inline}}
  - : 一个字符串，指示在用户编辑此 `textarea` 时是否激活自动拼写纠正和文本替换（如果有配置）。允许的值包括：
    - `on`
      - : 启用自动拼写纠正和文本替换。
    - `off`
      - : 禁用自动拼写纠正和文本替换。

- `autofocus`
  - : 此布尔属性可让你指定当页面加载时，表单控件应获取输入焦点。文档中只有一个与表单相关的元素可以指定此属性。
- `cols`
  - : 文本控件的可见宽度，以平均字符宽度为单位。若已指定，其值必须为正整数。若未指定，默认值为 `20`。
- `dirname`
  - : 此属性用于指示元素内容的文本方向性，类似于 `<input>` 元素的 [`dirname`](/zh-CN/docs/Web/HTML/Reference/Elements/input#dirname) 属性。有关更多信息，请参见 [`dirname` 属性](/zh-CN/docs/Web/HTML/Reference/Attributes/dirname)。

- `disabled`
  - : 此布尔属性表示用户无法与控件交互。如果未指定此属性，控件将从其包含元素（如 {{ HTMLElement("fieldset") }}）继承设置；如果在设置 `disabled` 属性时没有包含元素，则控件处于启用状态。
- `form`
  - : 与 `<textarea>` 元素相关联的表单元素（其“表单所有者”）。此属性的值必须是同一文档中某个表单元素的 `id`。如果未指定此属性，`<textarea>` 元素必须是表单元素的后代。此属性允许你将 `<textarea>` 元素放置在文档内的任何位置，而不仅仅是作为表单元素的后代。
- `maxlength`
  - : 要求用户输入的最大字符串长度（以 UTF-16 码元衡量）。如果未指定此值，用户可以输入无限数量的字符。
- `minlength`
  - : 要求用户输入的最小字符串长度（以 UTF-16 码元衡量）。
- `name`
  - : 控件的名称。
- `placeholder`
  - : 对用户关于可在该控件中输入内容的提示。在占位符文本内部的回车或换行符在渲染提示时必须被视为换行处理。

    > [!NOTE]
    > 占位符仅应用于显示应输入到表单中的数据类型示例；它们*不能*替代与输入字段关联的正确 {{HTMLElement("label")}} 元素。有关详细说明，请参阅 [`<input>` 标签](/zh-CN/docs/Web/HTML/Reference/Elements/input#labels)。

- `readonly`
  - : 此布尔属性表示用户无法修改该控件的值。与 `disabled` 属性不同，`readonly` 属性不会阻止用户点击或选择该控件。只读控件的值仍随表单一起提交。
- `required`
  - : 此属性规定用户在提交表单前必须填写一个值。
- `rows`
  - : 显示控件的指定的可见文本行数，其值必须为正整数。若未指定，默认值为 2。
- `spellcheck`
  - : 指定是否应由底层浏览器/操作系统对 `<textarea>` 进行拼写检查。可能的值包括：
    - `true`：指示应对此元素进行拼写和语法检查。
    - `default`：指示元素应遵循默认行为，该行为可能基于其父元素自身的 `spellcheck` 值。
    - `false`：指示不应对此元素进行拼写检查。

- `wrap`
  - : 指示控件应如何对表单提交时的值进行换行。可能的值包括：
    - `hard`：浏览器会自动插入换行符（CR+LF），以确保每一行不超过控件宽度；要使此效果生效，必须指定 [`cols`](#cols) 属性。
    - `soft`：浏览器确保输入值中的所有换行均为 `CR+LF` 一对，但不会为此值添加额外的换行。
    - `off` {{non-standard_inline}}：类似于 `soft`，但外观表现为 `white-space: pre`，即超出 `cols` 宽度的不会换行，此时 `<textarea>` 将变为水平可滚动。

    若未指定此属性，则其默认值为 `soft`。

## 使用 CSS 样式

`<textarea>` 是一个{{glossary("Replaced elements", "可替换元素")}}——它具有与光栅图像类似的固有尺寸。默认情况下，其 {{cssxref("display")}} 值为 `inline-block`。与其他表单元素相比，它的样式设计相对容易，其盒模型、字体、配色方案等属性均可通过常规 CSS 方式轻松调整。

[样式化 HTML 表单](/zh-CN/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)提供了一些有关样式化 `<textarea>` 元素的实用技巧。

### 基线不一致

HTML 规范中并未明确规定 `<textarea>` 元素的基线位置，不同浏览器可能会导致将其设置在不同的位置。在 Gecko 中，`<textarea>` 的基线被设定为文本域第一行的基线，而在其他浏览器中，该基线可能被设定为 `<textarea>` 容器底部。请不要在元素中使用 {{cssxref("vertical-align")}}`: baseline` 样式；其行为是不可预测的。

### 控制 textarea 是否可调整大小

在大多数浏览器中，`<textarea>` 是可调整大小的——你会注意到右下角的拖动柄，可用于更改页面上元素的大小。这是由 {{ cssxref("resize") }} CSS 属性——控制的，默认情况下启用调整大小功能，但你可以使用 `resize` 值设为 `none` 显式禁用：

```css
textarea {
  resize: none;
}
```

### 有效值和无效值的样式

可以通过 {{cssxref(":valid")}} 和 {{cssxref(":invalid")}} 的伪类来高亮显示 `<textarea>` 元素的有效和无效值（例如，在 `minlength`、`maxlength` 或 `required` 设置的范围内和范围外）。例如，根据文本区域有效还是无效来设置不同的边框：

```css
textarea:invalid {
  border: 2px dashed red;
}

textarea:valid {
  border: 2px solid lime;
}
```

## 示例

### 基本示例

以下示例展示了一个具有设定行数和列数、一些默认内容及 CSS 样式的文本区域，这些样式限制了用户将元素调整尺寸到超过 500px 宽和 130px 高的尺寸：

```html
<textarea name="textarea" rows="5" cols="15">在这里写点什么</textarea>
```

```css
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### 结果

{{EmbedLiveSample('基本示例')}}

### 使用“minlength”和“maxlength”示例

此示例分别设置了最小和最大字符数——分别为 10 和 20。试一试看看。

```html
<textarea name="textarea" rows="5" cols="30" minlength="10" maxlength="20">
在这里写点什么
</textarea>
```

```css
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### 结果

{{EmbedLiveSample('使用“minlength”和“maxlength”示例')}}

请注意，`minlength` 并不能阻止用户删除字符，使其长度小于最小值，但它确实会使 `<textarea>` 中输入的值无效。另外请注意，即使设置了 `minlength` 值（例如为 3），空的 `<textarea>` 仍然被认为是有效的，除非同时设置了 `required` 属性。

### 使用“占位符”示例

此示例设置了占位符。请注意，当你开始在框中输入时，它会消失。

```html
<textarea
  name="textarea"
  rows="5"
  cols="30"
  placeholder="评论文本。"></textarea>
```

```css
textarea {
  max-height: 130px;
  max-width: 500px;
}
```

#### 结果

{{EmbedLiveSample('使用“占位符”示例')}}

> [!NOTE]
> 占位符仅用于显示应输入表单的数据类型；它们不能替代与输入相关的正确 {{HTMLElement("label")}} 元素。请参阅 [`<input>` 标签](/zh-CN/docs/Web/HTML/Reference/Elements/input#labels)了解完整说明。

### 禁用和只读文本区

此示例展示了两个 `<textarea>`——一个是 [`readonly`](/zh-CN/docs/Web/HTML/Reference/Attributes/readonly)，另一个是 [`disabled`](/zh-CN/docs/Web/HTML/Reference/Attributes/disabled)。你不能编辑任一元素的内容，但 `readonly` 元素可获得焦点且其值会被提交到表单。`disabled` 元素的值不会被提交且无法获得焦点。

```html
<textarea name="textarea" rows="5" cols="30" readonly>
我是一个只读的文本区。
</textarea>
<textarea name="textarea" rows="5" cols="30" disabled>
我是一个禁用的文本区。
</textarea>
```

```css
textarea {
  display: block;
  resize: horizontal;
  max-width: 500px;
}
```

#### 结果

{{EmbedLiveSample('禁用和只读文本区', '', '230')}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#交互内容"
          >交互内容</a
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#可列举的元素（listed）"
          >可列举</a
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#可标记的元素（labelable）"
          >可标记</a
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#可重置的元素（resettable）"
          >可重置</a
        >和<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#可提交的元素（submittable）"
          >可提交</a
        >的<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#表单相关内容"
          >表单相关内容</a
        >元素。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>文本</td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role"
            >textbox</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>没有允许的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLTextAreaElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他与表单相关的元素：
  - {{ HTMLElement("form") }}
  - {{ HTMLElement("button") }}
  - {{ HTMLElement("datalist") }}
  - {{ HTMLElement("legend") }}
  - {{ HTMLElement("label") }}
  - {{ HTMLElement("select") }}
  - {{ HTMLElement("optgroup") }}
  - {{ HTMLElement("option") }}
  - {{ HTMLElement("input") }}
  - {{ HTMLElement("fieldset") }}
  - {{ HTMLElement("output") }}
  - {{ HTMLElement("progress") }}
  - {{ HTMLElement("meter") }}
