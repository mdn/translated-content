---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
l10n:
  sourceCommit: c1c96d74b416ee5cd86bb3b70fe2a1145beed70f
---

{{APIRef("HTML DOM")}}

**`HTMLInputElement`** 接口提供了特定的属性和方法，用于管理 {{HtmlElement("input")}} 元素的选项、布局和外观。

{{InheritanceDiagram}}

## 实例属性

_还从其父接口 {{domxref("HTMLElement")}} 继承属性。_

某些属性仅适用于支持相应属性的输入元素类型。

- {{domxref("HTMLInputElement.align", "align")}} {{Deprecated_Inline}}
  - : 一个表示元素对齐方式的字符串。_请改用 CSS。_
- {{domxref("HTMLInputElement.defaultValue", "defaultValue")}}
  - : 一个表示元素默认值的字符串，该值最初是在创建此对象的 HTML 中指定的。
- {{domxref("HTMLInputElement.dirName", "dirName")}}
  - : 一个表示元素方向的字符串。
- {{domxref("HTMLInputElement.incremental", "incremental")}} {{Non-standard_Inline}}
  - : 一个表示搜索事件触发模式的布尔值，如果为 `true`，则在每次按键或单击取消按钮时触发；否则在按下 <kbd>Enter</kbd> 键时触发。
- {{domxref("HTMLInputElement.labels", "labels")}} {{ReadOnlyInline}}
  - : 返回一个 {{ HTMLElement("label") }} 元素的列表，这些元素是当前元素的标签。
- {{domxref("HTMLInputElement.list", "list")}} {{ReadOnlyInline}}
  - : 返回由 [`list`](/zh-CN/docs/Web/HTML/Element/input#list) 属性指向的元素。如果在同一树中找不到 HTML 元素，则该属性可能为 `null`。
- {{domxref("HTMLInputElement.multiple", "multiple")}}
  - : 一个表示元素的 [`multiple`](/zh-CN/docs/Web/HTML/Element/input#multiple) 属性的布尔值，表示是否可能有多个值（例如，多个文件）。
- {{domxref("HTMLInputElement.name", "name")}}
  - : 一个表示元素的 [`name`](/zh-CN/docs/Web/HTML/Element/input#name) 属性的字符串，包含在提交表单时标识元素的名称。
- {{domxref("HTMLInputElement.popoverTargetAction", "popoverTargetAction")}}
  - : 获取或设置要在由 `type="button"` 的 {{htmlelement("input")}} 元素控制的弹出窗口元素上执行的操作（`"hide"`、`"show"` 或 `"toggle"`）。它反映了 [`popovertargetaction`](/zh-CN/docs/Web/HTML/Element/input#popovertargetaction) HTML 属性的值。
- {{domxref("HTMLInputElement.popoverTargetElement", "popoverTargetElement")}}
  - : 获取或设置要通过 `type="button"` 的 {{htmlelement("input")}} 元素控制的弹出窗口元素。它反映了 [`popovertarget`](/zh-CN/docs/Web/HTML/Element/input#popovertarget) HTML 属性的值。
- {{domxref("HTMLInputElement.step", "step")}}
  - : 一个表示元素的 [`step`](/zh-CN/docs/Web/HTML/Element/input#step) 属性的字符串，它与 [`min`](/zh-CN/docs/Web/HTML/Element/input#min) 和 [`max`](/zh-CN/docs/Web/HTML/Element/input#max) 一起使用，以限制可以设置数字或日期时间值的增量。它可以是字符串 `any` 或正浮点数。如果不设置为 `any`，则控件仅接受大于最小值的步长值的倍数。
- {{domxref("HTMLInputElement.type", "type")}}
  - : 一个表示元素的 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 属性的字符串，表示要显示的控件类型。请参阅 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 属性的文档，以了解其可能的值。
- {{domxref("HTMLInputElement.useMap", "useMap")}} {{Deprecated_Inline}}
  - : 一个表示客户端图像映射的字符串。
- {{domxref("HTMLInputElement.value", "value")}}
  - : 一个表示控件当前值的字符串。如果用户输入与预期不同的值，则可能返回空字符串。
- {{domxref("HTMLInputElement.valueAsDate", "valueAsDate")}}
  - : 一个表示元素的值的 {{jsxref("Date")}}，以日期形式解释，如果无法转换，则为 `null`。
- {{domxref("HTMLInputElement.valueAsNumber", "valueAsNumber")}}
  - : 一个表示元素的值的数字，以以下顺序解释：时间值、数字或 `NaN`（如果无法转换）。

### 与父表单相关的实例属性

- {{domxref("HTMLInputElement.form", "form")}} {{ReadOnlyInline}}
  - : 返回一个父表单（{{HtmlElement("form")}}）元素的引用。
- {{domxref("HTMLInputElement.formAction", "formAction")}}
  - : 一个表示元素的 [`formaction`](/zh-CN/docs/Web/HTML/Element/input#formaction) 属性的字符串，包含处理元素提交信息程序的 URI。这会覆盖父表单的 [`action`](/zh-CN/docs/Web/HTML/Element/form#action) 属性。
- {{domxref("HTMLInputElement.formEnctype", "formEnctype")}}
  - : 一个表示元素的 [`formenctype`](/zh-CN/docs/Web/HTML/Element/input#formenctype) 属性的字符串，包含将表单提交到服务器的内容类型。这会覆盖父表单的 [`enctype`](/zh-CN/docs/Web/HTML/Element/form#enctype) 属性。
- {{domxref("HTMLInputElement.formMethod", "formMethod")}}
  - : 一个表示元素的 [`formmethod`](/zh-CN/docs/Web/HTML/Element/input#formmethod) 属性的字符串，包含浏览器用于提交表单的 HTTP 方法。这会覆盖父表单的 [`method`](/zh-CN/docs/Web/HTML/Element/form#method) 属性。
- {{domxref("HTMLInputElement.formNoValidate", "formNoValidate")}}
  - : 一个表示元素的 [`formnovalidate`](/zh-CN/docs/Web/HTML/Element/input#formnovalidate) 属性的布尔值，表示在提交表单时不对其进行验证。这会覆盖父表单的 [`novalidate`](/zh-CN/docs/Web/HTML/Element/form#novalidate) 属性。
- {{domxref("HTMLInputElement.formTarget", "formTarget")}}
  - : 一个表示元素的 [`formtarget`](/zh-CN/docs/Web/HTML/Element/input#formtarget) 属性的字符串，包含一个名称或关键字，表示在提交表单后接收响应的显示位置。这会覆盖父表单的 [`target`](/zh-CN/docs/Web/HTML/Element/form#target) 属性。

### 适用于任何类型的非隐藏输入元素的实例属性

- {{domxref("HTMLInputElement.disabled", "disabled")}}
  - : 一个表示元素的 [`disabled`](/zh-CN/docs/Web/HTML/Element/input#disabled) 属性的布尔值，表示该控件不可用于交互。输入值将不会与表单一起提交。参见 [`readonly`](/zh-CN/docs/Web/HTML/Element/input#readonly)。
- {{domxref("HTMLInputElement.required", "required")}}
  - : 一个表示元素的 [`required`](/zh-CN/docs/Web/HTML/Element/input#required) 属性的布尔值，表示用户必须在提交表单之前填写值。
- {{domxref("HTMLInputElement.validationMessage", "validationMessage")}} {{ReadOnlyInline}}
  - : 返回一条描述控件不满足时的验证约束的本地化消息。如果控件不是约束验证的候选项（[`willValidate`](/zh-CN/docs/Web/API/HTMLObjectElement/willValidate) 为 `false`），或者它满足其约束，则为空字符串。此值可以通过 {{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}} 方法设置。
- {{domxref("HTMLInputElement.validity", "validity")}} {{ReadOnlyInline}}
  - : 返回元素当前的有效状态。
- {{domxref("HTMLInputElement.willValidate", "willValidate")}} {{ReadOnlyInline}}
  - : 返回元素是否是约束验证的候选项。如果任何条件阻止它进行约束验证，则为 `false`，包括：它的 `type` 是 `hidden`、`reset` 或 `button` 之一，它的祖先中有 {{HTMLElement("datalist")}} 或者它的 `disabled` 属性为 `true`。

### 仅适用于复选框和单选按钮元素的实例属性

- {{domxref("HTMLInputElement.checked", "checked")}}
  - : 一个表示元素当前状态的布尔值。
- {{domxref("HTMLInputElement.defaultChecked", "defaultChecked")}}
  - : 一个表示单选按钮或复选框的默认状态的布尔值，该值最初是在创建此对象的 HTML 中指定的。
- {{domxref("HTMLInputElement.indeterminate", "indeterminate")}}
  - : 一个表示复选框或单选按钮是否处于不确定状态的布尔值。对于复选框，效果是复选框的外观被某种方式遮挡/变灰，以表示其状态是不确定的（既不选中也不未选中）。不会影响 `checked` 属性的值，单击复选框将其值设置为假。

### 仅适用于图像类型的元素的实例属性

- {{domxref("HTMLInputElement.alt", "alt")}}
  - : 一个表示元素的 [`alt`](/zh-CN/docs/Web/HTML/Element/input#alt) 属性的字符串，包含要使用的替代文本。
- {{domxref("HTMLInputElement.height", "height")}}
  - : 一个表示元素的 [`height`](/zh-CN/docs/Web/HTML/Element/input#height) 属性的字符串，包含要显示为按钮的图像的高度。
- {{domxref("HTMLInputElement.src", "src")}}
  - : 一个表示元素的 [`src`](/zh-CN/docs/Web/HTML/Element/input#src) 属性的字符串，包含要显示为图形提交按钮上的图像的位置的 URI。
- {{domxref("HTMLInputElement.width", "width")}}
  - : 一个表示元素的 [`width`](/zh-CN/docs/Web/HTML/Element/input#width) 属性的字符串，包含要显示为按钮的图像的宽度。

### 仅适用于文件类型的元素的实例属性

- {{domxref("HTMLInputElement.accept", "accept")}}
  - : 一个表示元素的 [`accept`](/zh-CN/docs/Web/HTML/Element/input#accept) 属性的字符串，包含可以选择的文件类型的以逗号分隔的列表。
- {{domxref("HTMLInputElement.files", "files")}}
  - : 一个 {{domxref("FileList")}}，表示选择的要上传的文件。
- {{domxref("HTMLInputElement.webkitdirectory", "webkitdirectory")}}
  - : 一个表示 [`webkitdirectory`](/zh-CN/docs/Web/HTML/Element/input#webkitdirectory) 属性的布尔值。如果为 `true`，则文件系统选择器接口仅接受目录而不是文件。
- {{domxref("HTMLInputElement.webkitEntries", "webkitEntries")}} {{ReadOnlyInline}}
  - : 描述当前选择的文件或目录。

### 仅适用于包含文本或数字的可见元素的实例属性

- {{domxref("HTMLInputElement.autocomplete", "autocomplete")}}
  - : 一个表示元素的 [`autocomplete`](/zh-CN/docs/Web/HTML/Element/input#autocomplete) 属性的字符串，表示控件的值是否可以由浏览器自动填充。
- {{domxref("HTMLInputElement.capture", "capture")}}
  - : 一个表示元素的 [`capture`](/zh-CN/docs/Web/HTML/Element/input#capture) 属性的字符串，指示文件上传控件中的媒体捕获输入方法。
- {{domxref("HTMLInputElement.max", "max")}}
  - : 一个表示元素的 [`max`](/zh-CN/docs/Web/HTML/Element/input#max) 属性的字符串，包含此项的最大（数字或日期时间）值，该值不能小于其最小（[`min`](/zh-CN/docs/Web/HTML/Element/input#min) 属性）值。
- {{domxref("HTMLInputElement.maxLength", "maxLength")}}
  - : 一个表示元素的 [`maxlength`](/zh-CN/docs/Web/HTML/Element/input#maxlength) 属性的数字，包含值可以具有的最大字符数（以 Unicode 码点表示）。
- {{domxref("HTMLInputElement.min", "min")}}
  - : 一个表示元素的 [`min`](/zh-CN/docs/Web/HTML/Element/input#min) 属性的字符串，包含此项的最小（数字或日期时间）值，该值不能大于其最大（[`max`](/zh-CN/docs/Web/HTML/Element/input#max) 属性）值。
- {{domxref("HTMLInputElement.minLength", "minLength")}}
  - : 一个表示元素的 [`minlength`](/zh-CN/docs/Web/HTML/Element/input#minlength) 属性的数字，包含值可以具有的最小字符数（以 Unicode 码点表示）。
- {{domxref("HTMLInputElement.pattern", "pattern")}}
  - : 一个表示元素的 [`pattern`](/zh-CN/docs/Web/HTML/Element/input#pattern) 属性的字符串，包含要检查控件值的正则表达式。使用 [`title`](/zh-CN/docs/Web/HTML/Element/input#title) 属性来描述模式以帮助用户。此属性仅适用于 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 属性的值为 `text`、`search`、`tel`、`url` 或 `email` 的情况。
- {{domxref("HTMLInputElement.placeholder", "placeholder")}}
  - : 一个表示元素的 [`placeholder`](/zh-CN/docs/Web/HTML/Element/input#placeholder) 属性的字符串，包含一个提示，告诉用户可以在控件中输入什么。占位符文本不能包含回车或换行符。此属性仅适用于 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 属性的值为 `text`、`search`、`tel`、`url` 或 `email` 的情况。
- {{domxref("HTMLInputElement.readOnly", "readOnly")}}
  - : 一个表示元素的 [`readonly`](/zh-CN/docs/Web/HTML/Element/input#readonly) 属性的布尔值，指示用户无法修改控件的值。如果 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 为 `hidden`、`range`、`color`、`checkbox`、`radio`、`file` 或按钮类型，则忽略此属性。
- {{domxref("HTMLInputElement.selectionDirection", "selectionDirection")}}
  - : 一个表示选择发生的方向的字符串。可能的值为：`forward`（选择是从当前区域设置的起始到结束方向上执行的）、`backward`（相反的方向）或 `none`（方向未知）。
- {{domxref("HTMLInputElement.selectionEnd", "selectionEnd")}}
  - : 一个表示选择文本的结束索引的数字。当没有选择时，它返回当前文本输入光标位置后面的字符的偏移量。
- {{domxref("HTMLInputElement.selectionStart", "selectionStart")}}
  - : 一个表示选择文本的开始索引的数字。当没有选择时，它返回当前文本输入光标位置的偏移量。
- {{domxref("HTMLInputElement.size", "size")}}
  - : 一个表示元素的 [`size`](/zh-CN/docs/Web/HTML/Element/input#size) 属性的数字，包含控件的可视大小。此值以像素为单位，除非 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 的值为 `text` 或 `password`，在这种情况下，它是一个整数字符数。仅当 [`type`](/zh-CN/docs/Web/HTML/Element/input#type) 设置为 `text`、`search`、`tel`、`url`、`email` 或 `password` 时才适用。

## 实例方法

_也从其父接口 {{domxref("HTMLElement")}} 继承方法。_

- {{domxref("HTMLInputElement.checkValidity()", "checkValidity()")}}
  - : 返回一个布尔值，如果元素是约束验证的候选项，并且它不满足其约束，则为 `false`。在这种情况下，它还会在元素上触发 {{domxref("HTMLInputElement/invalid_event", "invalid")}} 事件。如果元素不是约束验证的候选项，或者它满足其约束，则返回 `true`。
- {{domxref("HTMLInputElement.reportValidity()", "reportValidity()")}}
  - : 运行 `checkValidity()` 方法，如果它返回 false（对于无效输入或未提供模式属性），则以与提交表单相同的方式向用户报告输入无效。
- {{domxref("HTMLInputElement.select()", "select()")}}
  - : 选择输入元素中的所有文本，并将其聚焦，以便用户随后可以替换其所有内容。
- {{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}}
  - : 设置元素的自定义有效性消息。如果此消息不是空字符串，则元素存在自定义有效性错误，且其值无效。
- {{domxref("HTMLInputElement.setRangeText()", "setRangeText()")}}
  - : 替换输入元素中的一段文本为新文本。
- {{domxref("HTMLInputElement.setSelectionRange()", "setSelectionRange()")}}
  - : 选择输入元素中的一段文本（但不聚焦）。
- {{domxref("HTMLInputElement.showPicker()", "showPicker()")}}
  - : 显示浏览器的日期、时间、颜色和文件选择器。
- {{domxref("HTMLInputElement.stepDown()", "stepDown()")}}
  - : 按 [`step`](/zh-CN/docs/Web/HTML/Element/input#step) \* n 递减 [`value`](/zh-CN/docs/Web/HTML/Element/input#value)，其中 n 默认为 1（如果未指定）。
- {{domxref("HTMLInputElement.stepUp()", "stepUp()")}}
  - : 按 [`step`](/zh-CN/docs/Web/HTML/Element/input#step) \* n 递增 [`value`](/zh-CN/docs/Web/HTML/Element/input#value)，其中 n 默认为 1（如果未指定）。

## 事件

_也从其父接口 {{domxref("HTMLElement")}} 继承事件。_

使用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 或通过将事件监听器赋值给此接口的 `oneventname` 属性来监听这些事件：

- {{domxref("HTMLInputElement/invalid_event", "invalid")}} 事件
  - : 当元素在约束验证期间不满足其约束时触发。
- {{domxref("HTMLInputElement/search_event", "search")}} 事件 {{Non-standard_Inline}}
  - : 当在 `type="search"` 的 {{HTMLElement("input")}} 上开始搜索时触发。
- {{domxref("HTMLInputElement/select_event", "select")}} 事件
  - : 当选中了一些文本时触发。
- {{domxref("HTMLInputElement/selectionchange_event", "selectionchange")}} 事件 {{Experimental_Inline}}
  - : 在 {{HTMLElement("input")}} 元素中的文本选择发生更改后触发。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现了该接口的 HTML 元素：{{HTMLElement("input")}}
