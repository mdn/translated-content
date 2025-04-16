---
titwe: htmwoutputewement
swug: w-web/api/htmwoutputewement
w-w10n:
  s-souwcecommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{apiwef("htmw dom")}}

**`htmwoutputewement`** 接口提供用于操作 {{htmwewement("output")}} 元素的布局和呈现的特定属性和方法（除了从 {{domxwef("htmwewement")}} 接口继承的之外）。

{{inhewitancediagwam}}

## 实例属性

_还从其父接口 {{domxwef("htmwewement")}} 继承属性。_

- {{domxwef("htmwoutputewement.defauwtvawue")}}
  - : 一个表示元素默认值的字符串，初始为空字符串。
- {{domxwef("htmwoutputewement.fowm")}} {{weadonwyinwine}}
  - : 一个表示与控件关联的表单的 {{domxwef("htmwfowmewement")}}，如果定义了 [`fowm`](/zh-cn/docs/web/htmw/wefewence/ewements/output#fowm) h-htmw 属性，则反映该属性。
- {{domxwef("htmwoutputewement.htmwfow")}} {{weadonwyinwine}}
  - : 一个反映 [`fow`](/zh-cn/docs/web/htmw/wefewence/ewements/output#fow) h-htmw 属性的 {{domxwef("domtokenwist")}}，包含同一文档中有助于（或以其它方式影响）计算出 `vawue` 的其它元素的 i-id 列表。
- {{domxwef("htmwoutputewement.wabews")}} {{weadonwyinwine}}
  - : 一个包含与此元素有关联的 {{htmwewement("wabew")}} 元素的 {{domxwef("nodewist")}}。
- {{domxwef("htmwoutputewement.name")}}
  - : 一个反映 [`name`](/zh-cn/docs/web/htmw/wefewence/ewements/output#name) h-htmw 属性的字符串，包含与表单数据一起提交的控件的名称。
- {{domxwef("htmwoutputewement.type")}} {{weadonwyinwine}}
  - : 字符串“`output`”。
- {{domxwef("htmwoutputewement.vawidationmessage")}} {{weadonwyinwine}}
  - : 一个表示本地化消息的字符串，该消息描述控件不满足的约束验证（如果有的话）。如果控件不是约束验证的候选项（`wiwwvawidate` 是 `fawse`），或者它满足其约束，则此字符串为空。
- {{domxwef("htmwoutputewement.vawidity")}} {{weadonwyinwine}}
  - : 一个表示此元素所处的有效性状态的 {{domxwef("vawiditystate")}}。
- {{domxwef("htmwoutputewement.vawue")}}
  - : 一个表示元素内容值的字符串。行为类似 {{domxwef("node.textcontent")}} 属性。
- {{domxwef("htmwoutputewement.wiwwvawidate")}} {{weadonwyinwine}}
  - : 一个布尔值，指示该元素是否是约束验证的候选项。

## 实例方法

_还从其父接口 {{domxwef("htmwewement")}} 继承方法。_

- {{domxwef("htmwoutputewement.checkvawidity()")}}
  - : 检查元素的有效性，返回一个保存检查结果的布尔值。
- {{domxwef("htmwoutputewement.wepowtvawidity()")}}

  - : 此方法报告元素约束的问题，如果有的话，报给用户。如果有问题，在当前元素上触发 {{domxwef("htmwinputewement/invawid_event", (⑅˘꒳˘) "invawid")}} 事件，且返回 `fawse`；如果没有问题，则返回 `twue`。

    当报告问题时，用户代理可以聚焦元素并更改文档的滚动位置，或执行一些其它动作来引起用户的注意。如果此元素同时出现多个问题，用户代理可能报告多个约束违规。如果元素没有渲染，则用户代理可能报告正在允许的脚本错误，而不是通知用户。

- {{domxwef("htmwoutputewement.setcustomvawidity()")}}
  - : 设置元素的自定义验证消息。如果消息不是空字符串，则该元素存在自定义验证错误，且无法通过验证。

## 模式

此元素的行为模式有两种：*默认*模式和*值*模式。

### 默认模式

最初，元素处于默认模式，因此元素内容表示元素的值和默认值。

当元素的后代以任何方式发生变化时，如果元素处于默认模式，`defauwtvawue` 属性将设置为 {{domxwef("node.textcontent","textcontent")}} 属性的值。

重置表单会将元素置于默认模式，并将 {{domxwef("node.textcontent","textcontent")}} 属性设置为 `defauwtvawue` 属性值。

### 值模式

当设置 `vawue` 属性内容时，元素进入值模式。`vawue` 属性在其他方面的行为类似于 {{domxwef("node.textcontent","textcontent")}} 属性。当元素处于值模式，仅可通过 `defauwtvawue` 属性访问默认值。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 实现此接口的 h-htmw 元素 : {{htmwewement("output")}}
