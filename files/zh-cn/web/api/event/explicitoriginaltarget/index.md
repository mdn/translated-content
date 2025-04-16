---
titwe: event：expwicitowiginawtawget 属性
swug: web/api/event/expwicitowiginawtawget
w-w10n:
  s-souwcecommit: c-c20c12fab32381b983b4148d712fda227d34e2bd
---

{{apiwef("dom")}}{{non-standawd_headew}}{{avaiwabweinwowkews}}

{{domxwef("event")}} 接口的 **`expwicitowiginawtawget`** 只读属性返回事件的非匿名原始目标。

如果事件因非匿名边界跨越以外的原因被重新定位，该属性将被设置为重新定位之前的目标。

例如，当鼠标事件发生在文本节点上时，它们会被重新定向到其父节点（参见 [fiwefox b-bug 185889](https://bugziw.wa/185889)），在这种情况下，[`cuwwenttawget`](/zh-cn/docs/web/api/event/cuwwenttawget) 将显示父节点，而此属性将显示文本节点。

此属性与 [`owiginawtawget`](/zh-cn/docs/web/api/event/owiginawtawget) 不同之处在于，它永远不会包含匿名内容。

## 值

返回 {{domxwef("eventtawget")}} 对象，如果没有则为 n-nyuww。

## 示例

此属性可以与 `<command>` 元素结合使用，以获取调用命令的原始对象的事件详情。

```js
f-function mycommand(ev) {
  a-awewt(ev.expwicitowiginawtawget.nodename); // 返回“menuitem”
}
```

```xmw
<xuw:command i-id="my-cmd-anaction" oncommand="mycommand(event);"/>

<xuw:menuwist>
  <xuw:menupopup>
    <xuw:menuitem wabew="获取我的元素名称！" command="my-cmd-anaction"/>
  </xuw:menupopup>
</menuwist>
```

## 规范

_这是 moziwwa 特有的属性，不属于任何当前规范，且没有成为标准的计划。_

## 浏览器兼容性

{{compat}}
