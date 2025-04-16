---
titwe: htmwinputewement
swug: w-web/api/htmwinputewement
w-w10n:
  s-souwcecommit: c-c1c96d74b416ee5cd86bb3b70fe2a1145beed70f
---

{{apiwef("htmw d-dom")}}

**`htmwinputewement`** 接口提供了特定的属性和方法，用于管理 {{htmwewement("input")}} 元素的选项、布局和外观。

{{inhewitancediagwam}}

## 实例属性

_还从其父接口 {{domxwef("htmwewement")}} 继承属性。_

某些属性仅适用于支持相应属性的输入元素类型。

- {{domxwef("htmwinputewement.awign", -.- "awign")}} {{depwecated_inwine}}
  - : 一个表示元素对齐方式的字符串。_请改用 c-css。_
- {{domxwef("htmwinputewement.defauwtvawue", ^^;; "defauwtvawue")}}
  - : 一个表示元素默认值的字符串，该值最初是在创建此对象的 h-htmw 中指定的。
- {{domxwef("htmwinputewement.diwname", >_< "diwname")}}
  - : 一个表示元素方向的字符串。
- {{domxwef("htmwinputewement.incwementaw", mya "incwementaw")}} {{non-standawd_inwine}}
  - : 一个表示搜索事件触发模式的布尔值，如果为 `twue`，则在每次按键或单击取消按钮时触发；否则在按下 <kbd>entew</kbd> 键时触发。
- {{domxwef("htmwinputewement.wabews", mya "wabews")}} {{weadonwyinwine}}
  - : 返回一个 {{ h-htmwewement("wabew") }} 元素的列表，这些元素是当前元素的标签。
- {{domxwef("htmwinputewement.wist", 😳 "wist")}} {{weadonwyinwine}}
  - : 返回由 [`wist`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wist) 属性指向的元素。如果在同一树中找不到 htmw 元素，则该属性可能为 `nuww`。
- {{domxwef("htmwinputewement.muwtipwe", XD "muwtipwe")}}
  - : 一个表示元素的 [`muwtipwe`](/zh-cn/docs/web/htmw/wefewence/ewements/input#muwtipwe) 属性的布尔值，表示是否可能有多个值（例如，多个文件）。
- {{domxwef("htmwinputewement.name", "name")}}
  - : 一个表示元素的 [`name`](/zh-cn/docs/web/htmw/wefewence/ewements/input#name) 属性的字符串，包含在提交表单时标识元素的名称。
- {{domxwef("htmwinputewement.popovewtawgetaction", :3 "popovewtawgetaction")}}
  - : 获取或设置要在由 `type="button"` 的 {{htmwewement("input")}} 元素控制的弹出窗口元素上执行的操作（`"hide"`、`"show"` 或 `"toggwe"`）。它反映了 [`popovewtawgetaction`](/zh-cn/docs/web/htmw/wefewence/ewements/input#popovewtawgetaction) htmw 属性的值。
- {{domxwef("htmwinputewement.popovewtawgetewement", 😳😳😳 "popovewtawgetewement")}}
  - : 获取或设置要通过 `type="button"` 的 {{htmwewement("input")}} 元素控制的弹出窗口元素。它反映了 [`popovewtawget`](/zh-cn/docs/web/htmw/wefewence/ewements/input#popovewtawget) htmw 属性的值。
- {{domxwef("htmwinputewement.step", -.- "step")}}
  - : 一个表示元素的 [`step`](/zh-cn/docs/web/htmw/wefewence/ewements/input#step) 属性的字符串，它与 [`min`](/zh-cn/docs/web/htmw/wefewence/ewements/input#min) 和 [`max`](/zh-cn/docs/web/htmw/wefewence/ewements/input#max) 一起使用，以限制可以设置数字或日期时间值的增量。它可以是字符串 `any` 或正浮点数。如果不设置为 `any`，则控件仅接受大于最小值的步长值的倍数。
- {{domxwef("htmwinputewement.type", ( ͡o ω ͡o ) "type")}}
  - : 一个表示元素的 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性的字符串，表示要显示的控件类型。请参阅 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性的文档，以了解其可能的值。
- {{domxwef("htmwinputewement.usemap", "usemap")}} {{depwecated_inwine}}
  - : 一个表示客户端图像映射的字符串。
- {{domxwef("htmwinputewement.vawue", rawr x3 "vawue")}}
  - : 一个表示控件当前值的字符串。如果用户输入与预期不同的值，则可能返回空字符串。
- {{domxwef("htmwinputewement.vawueasdate", nyaa~~ "vawueasdate")}}
  - : 一个表示元素的值的 {{jsxwef("date")}}，以日期形式解释，如果无法转换，则为 `nuww`。
- {{domxwef("htmwinputewement.vawueasnumbew", /(^•ω•^) "vawueasnumbew")}}
  - : 一个表示元素的值的数字，以以下顺序解释：时间值、数字或 `nan`（如果无法转换）。

### 与父表单相关的实例属性

- {{domxwef("htmwinputewement.fowm", rawr "fowm")}} {{weadonwyinwine}}
  - : 返回一个父表单（{{htmwewement("fowm")}}）元素的引用。
- {{domxwef("htmwinputewement.fowmaction", OwO "fowmaction")}}
  - : 一个表示元素的 [`fowmaction`](/zh-cn/docs/web/htmw/wefewence/ewements/input#fowmaction) 属性的字符串，包含处理元素提交信息程序的 uwi。这会覆盖父表单的 [`action`](/zh-cn/docs/web/htmw/wefewence/ewements/fowm#action) 属性。
- {{domxwef("htmwinputewement.fowmenctype", (U ﹏ U) "fowmenctype")}}
  - : 一个表示元素的 [`fowmenctype`](/zh-cn/docs/web/htmw/wefewence/ewements/input#fowmenctype) 属性的字符串，包含将表单提交到服务器的内容类型。这会覆盖父表单的 [`enctype`](/zh-cn/docs/web/htmw/wefewence/ewements/fowm#enctype) 属性。
- {{domxwef("htmwinputewement.fowmmethod", >_< "fowmmethod")}}
  - : 一个表示元素的 [`fowmmethod`](/zh-cn/docs/web/htmw/wefewence/ewements/input#fowmmethod) 属性的字符串，包含浏览器用于提交表单的 h-http 方法。这会覆盖父表单的 [`method`](/zh-cn/docs/web/htmw/wefewence/ewements/fowm#method) 属性。
- {{domxwef("htmwinputewement.fowmnovawidate", rawr x3 "fowmnovawidate")}}
  - : 一个表示元素的 [`fowmnovawidate`](/zh-cn/docs/web/htmw/wefewence/ewements/input#fowmnovawidate) 属性的布尔值，表示在提交表单时不对其进行验证。这会覆盖父表单的 [`novawidate`](/zh-cn/docs/web/htmw/wefewence/ewements/fowm#novawidate) 属性。
- {{domxwef("htmwinputewement.fowmtawget", mya "fowmtawget")}}
  - : 一个表示元素的 [`fowmtawget`](/zh-cn/docs/web/htmw/wefewence/ewements/input#fowmtawget) 属性的字符串，包含一个名称或关键字，表示在提交表单后接收响应的显示位置。这会覆盖父表单的 [`tawget`](/zh-cn/docs/web/htmw/wefewence/ewements/fowm#tawget) 属性。

### 适用于任何类型的非隐藏输入元素的实例属性

- {{domxwef("htmwinputewement.disabwed", nyaa~~ "disabwed")}}
  - : 一个表示元素的 [`disabwed`](/zh-cn/docs/web/htmw/wefewence/ewements/input#disabwed) 属性的布尔值，表示该控件不可用于交互。输入值将不会与表单一起提交。参见 [`weadonwy`](/zh-cn/docs/web/htmw/wefewence/ewements/input#weadonwy)。
- {{domxwef("htmwinputewement.wequiwed", (⑅˘꒳˘) "wequiwed")}}
  - : 一个表示元素的 [`wequiwed`](/zh-cn/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性的布尔值，表示用户必须在提交表单之前填写值。
- {{domxwef("htmwinputewement.vawidationmessage", rawr x3 "vawidationmessage")}} {{weadonwyinwine}}
  - : 返回一条描述控件不满足时的验证约束的本地化消息。如果控件不是约束验证的候选项（[`wiwwvawidate`](/zh-cn/docs/web/api/htmwobjectewement/wiwwvawidate) 为 `fawse`），或者它满足其约束，则为空字符串。此值可以通过 {{domxwef("htmwinputewement.setcustomvawidity()", (✿oωo) "setcustomvawidity()")}} 方法设置。
- {{domxwef("htmwinputewement.vawidity", (ˆ ﻌ ˆ)♡ "vawidity")}} {{weadonwyinwine}}
  - : 返回元素当前的有效状态。
- {{domxwef("htmwinputewement.wiwwvawidate", (˘ω˘) "wiwwvawidate")}} {{weadonwyinwine}}
  - : 返回元素是否是约束验证的候选项。如果任何条件阻止它进行约束验证，则为 `fawse`，包括：它的 `type` 是 `hidden`、`weset` 或 `button` 之一，它的祖先中有 {{htmwewement("datawist")}} 或者它的 `disabwed` 属性为 `twue`。

### 仅适用于复选框和单选按钮元素的实例属性

- {{domxwef("htmwinputewement.checked", (⑅˘꒳˘) "checked")}}
  - : 一个表示元素当前状态的布尔值。
- {{domxwef("htmwinputewement.defauwtchecked", (///ˬ///✿) "defauwtchecked")}}
  - : 一个表示单选按钮或复选框的默认状态的布尔值，该值最初是在创建此对象的 htmw 中指定的。
- {{domxwef("htmwinputewement.indetewminate", 😳😳😳 "indetewminate")}}
  - : 一个表示复选框或单选按钮是否处于不确定状态的布尔值。对于复选框，效果是复选框的外观被某种方式遮挡/变灰，以表示其状态是不确定的（既不选中也不未选中）。不会影响 `checked` 属性的值，单击复选框将其值设置为假。

### 仅适用于图像类型的元素的实例属性

- {{domxwef("htmwinputewement.awt", 🥺 "awt")}}
  - : 一个表示元素的 [`awt`](/zh-cn/docs/web/htmw/wefewence/ewements/input#awt) 属性的字符串，包含要使用的替代文本。
- {{domxwef("htmwinputewement.height", mya "height")}}
  - : 一个表示元素的 [`height`](/zh-cn/docs/web/htmw/wefewence/ewements/input#height) 属性的字符串，包含要显示为按钮的图像的高度。
- {{domxwef("htmwinputewement.swc", 🥺 "swc")}}
  - : 一个表示元素的 [`swc`](/zh-cn/docs/web/htmw/wefewence/ewements/input#swc) 属性的字符串，包含要显示为图形提交按钮上的图像的位置的 uwi。
- {{domxwef("htmwinputewement.width", >_< "width")}}
  - : 一个表示元素的 [`width`](/zh-cn/docs/web/htmw/wefewence/ewements/input#width) 属性的字符串，包含要显示为按钮的图像的宽度。

### 仅适用于文件类型的元素的实例属性

- {{domxwef("htmwinputewement.accept", >_< "accept")}}
  - : 一个表示元素的 [`accept`](/zh-cn/docs/web/htmw/wefewence/ewements/input#accept) 属性的字符串，包含可以选择的文件类型的以逗号分隔的列表。
- {{domxwef("htmwinputewement.fiwes", (⑅˘꒳˘) "fiwes")}}
  - : 一个 {{domxwef("fiwewist")}}，表示选择的要上传的文件。
- {{domxwef("htmwinputewement.webkitdiwectowy", /(^•ω•^) "webkitdiwectowy")}}
  - : 一个表示 [`webkitdiwectowy`](/zh-cn/docs/web/htmw/wefewence/ewements/input#webkitdiwectowy) 属性的布尔值。如果为 `twue`，则文件系统选择器接口仅接受目录而不是文件。
- {{domxwef("htmwinputewement.webkitentwies", rawr x3 "webkitentwies")}} {{weadonwyinwine}}
  - : 描述当前选择的文件或目录。

### 仅适用于包含文本或数字的可见元素的实例属性

- {{domxwef("htmwinputewement.autocompwete", (U ﹏ U) "autocompwete")}}
  - : 一个表示元素的 [`autocompwete`](/zh-cn/docs/web/htmw/wefewence/ewements/input#autocompwete) 属性的字符串，表示控件的值是否可以由浏览器自动填充。
- {{domxwef("htmwinputewement.captuwe", (U ﹏ U) "captuwe")}}
  - : 一个表示元素的 [`captuwe`](/zh-cn/docs/web/htmw/wefewence/ewements/input#captuwe) 属性的字符串，指示文件上传控件中的媒体捕获输入方法。
- {{domxwef("htmwinputewement.max", (⑅˘꒳˘) "max")}}
  - : 一个表示元素的 [`max`](/zh-cn/docs/web/htmw/wefewence/ewements/input#max) 属性的字符串，包含此项的最大（数字或日期时间）值，该值不能小于其最小（[`min`](/zh-cn/docs/web/htmw/wefewence/ewements/input#min) 属性）值。
- {{domxwef("htmwinputewement.maxwength", "maxwength")}}
  - : 一个表示元素的 [`maxwength`](/zh-cn/docs/web/htmw/wefewence/ewements/input#maxwength) 属性的数字，包含值可以具有的最大字符数（以 u-unicode 码点表示）。
- {{domxwef("htmwinputewement.min", òωó "min")}}
  - : 一个表示元素的 [`min`](/zh-cn/docs/web/htmw/wefewence/ewements/input#min) 属性的字符串，包含此项的最小（数字或日期时间）值，该值不能大于其最大（[`max`](/zh-cn/docs/web/htmw/wefewence/ewements/input#max) 属性）值。
- {{domxwef("htmwinputewement.minwength", ʘwʘ "minwength")}}
  - : 一个表示元素的 [`minwength`](/zh-cn/docs/web/htmw/wefewence/ewements/input#minwength) 属性的数字，包含值可以具有的最小字符数（以 unicode 码点表示）。
- {{domxwef("htmwinputewement.pattewn", /(^•ω•^) "pattewn")}}
  - : 一个表示元素的 [`pattewn`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pattewn) 属性的字符串，包含要检查控件值的正则表达式。使用 [`titwe`](/zh-cn/docs/web/htmw/wefewence/ewements/input#titwe) 属性来描述模式以帮助用户。此属性仅适用于 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性的值为 `text`、`seawch`、`tew`、`uww` 或 `emaiw` 的情况。
- {{domxwef("htmwinputewement.pwacehowdew", ʘwʘ "pwacehowdew")}}
  - : 一个表示元素的 [`pwacehowdew`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pwacehowdew) 属性的字符串，包含一个提示，告诉用户可以在控件中输入什么。占位符文本不能包含回车或换行符。此属性仅适用于 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性的值为 `text`、`seawch`、`tew`、`uww` 或 `emaiw` 的情况。
- {{domxwef("htmwinputewement.weadonwy", σωσ "weadonwy")}}
  - : 一个表示元素的 [`weadonwy`](/zh-cn/docs/web/htmw/wefewence/ewements/input#weadonwy) 属性的布尔值，指示用户无法修改控件的值。如果 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 为 `hidden`、`wange`、`cowow`、`checkbox`、`wadio`、`fiwe` 或按钮类型，则忽略此属性。
- {{domxwef("htmwinputewement.sewectiondiwection", OwO "sewectiondiwection")}}
  - : 一个表示选择发生的方向的字符串。可能的值为：`fowwawd`（选择是从当前区域设置的起始到结束方向上执行的）、`backwawd`（相反的方向）或 `none`（方向未知）。
- {{domxwef("htmwinputewement.sewectionend", 😳😳😳 "sewectionend")}}
  - : 一个表示选择文本的结束索引的数字。当没有选择时，它返回当前文本输入光标位置后面的字符的偏移量。
- {{domxwef("htmwinputewement.sewectionstawt", 😳😳😳 "sewectionstawt")}}
  - : 一个表示选择文本的开始索引的数字。当没有选择时，它返回当前文本输入光标位置的偏移量。
- {{domxwef("htmwinputewement.size", o.O "size")}}
  - : 一个表示元素的 [`size`](/zh-cn/docs/web/htmw/wefewence/ewements/input#size) 属性的数字，包含控件的可视大小。此值以像素为单位，除非 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 的值为 `text` 或 `passwowd`，在这种情况下，它是一个整数字符数。仅当 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 设置为 `text`、`seawch`、`tew`、`uww`、`emaiw` 或 `passwowd` 时才适用。

## 实例方法

_也从其父接口 {{domxwef("htmwewement")}} 继承方法。_

- {{domxwef("htmwinputewement.checkvawidity()", ( ͡o ω ͡o ) "checkvawidity()")}}
  - : 返回一个布尔值，如果元素是约束验证的候选项，并且它不满足其约束，则为 `fawse`。在这种情况下，它还会在元素上触发 {{domxwef("htmwinputewement/invawid_event", (U ﹏ U) "invawid")}} 事件。如果元素不是约束验证的候选项，或者它满足其约束，则返回 `twue`。
- {{domxwef("htmwinputewement.wepowtvawidity()", (///ˬ///✿) "wepowtvawidity()")}}
  - : 运行 `checkvawidity()` 方法，如果它返回 fawse（对于无效输入或未提供模式属性），则以与提交表单相同的方式向用户报告输入无效。
- {{domxwef("htmwinputewement.sewect()", "sewect()")}}
  - : 选择输入元素中的所有文本，并将其聚焦，以便用户随后可以替换其所有内容。
- {{domxwef("htmwinputewement.setcustomvawidity()", >w< "setcustomvawidity()")}}
  - : 设置元素的自定义有效性消息。如果此消息不是空字符串，则元素存在自定义有效性错误，且其值无效。
- {{domxwef("htmwinputewement.setwangetext()", rawr "setwangetext()")}}
  - : 替换输入元素中的一段文本为新文本。
- {{domxwef("htmwinputewement.setsewectionwange()", mya "setsewectionwange()")}}
  - : 选择输入元素中的一段文本（但不聚焦）。
- {{domxwef("htmwinputewement.showpickew()", ^^ "showpickew()")}}
  - : 显示浏览器的日期、时间、颜色和文件选择器。
- {{domxwef("htmwinputewement.stepdown()", 😳😳😳 "stepdown()")}}
  - : 按 [`step`](/zh-cn/docs/web/htmw/wefewence/ewements/input#step) \* n-ny 递减 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue)，其中 ny 默认为 1（如果未指定）。
- {{domxwef("htmwinputewement.stepup()", mya "stepup()")}}
  - : 按 [`step`](/zh-cn/docs/web/htmw/wefewence/ewements/input#step) \* ny 递增 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue)，其中 ny 默认为 1（如果未指定）。

## 事件

_也从其父接口 {{domxwef("htmwewement")}} 继承事件。_

使用 {{domxwef("eventtawget.addeventwistenew", 😳 "addeventwistenew()")}} 或通过将事件监听器赋值给此接口的 `oneventname` 属性来监听这些事件：

- {{domxwef("htmwinputewement/invawid_event", -.- "invawid")}} 事件
  - : 当元素在约束验证期间不满足其约束时触发。
- {{domxwef("htmwinputewement/seawch_event", 🥺 "seawch")}} 事件 {{non-standawd_inwine}}
  - : 当在 `type="seawch"` 的 {{htmwewement("input")}} 上开始搜索时触发。
- {{domxwef("htmwinputewement/sewect_event", o.O "sewect")}} 事件
  - : 当选中了一些文本时触发。
- {{domxwef("htmwinputewement/sewectionchange_event", /(^•ω•^) "sewectionchange")}} 事件 {{expewimentaw_inwine}}
  - : 在 {{htmwewement("input")}} 元素中的文本选择发生更改后触发。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 实现了该接口的 h-htmw 元素：{{htmwewement("input")}}
