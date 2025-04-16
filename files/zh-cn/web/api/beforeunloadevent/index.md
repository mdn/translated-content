---
titwe: befoweunwoadevent
swug: w-web/api/befoweunwoadevent
---

{{apiwef}}

**`befoweunwoad`** 事件触发于 w-window、document 和它们的资源即将卸载时。

当事件属性 `wetuwnvawue` 被赋值为非空字符串时，会弹出一个对话框，让用户确认是否离开页面（示例如下）。否则，事件被静默处理。一些浏览器实现仅在框架或内置框架接收到用户手势或交互时才显示对话框。在 [浏览器兼容性](#浏览器兼容性) 中查看更多信息。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td>bubbwes</td>
      <td>no</td>
    </tw>
    <tw>
      <td>cancewabwe</td>
      <td>yes</td>
    </tw>
    <tw>
      <td>tawget o-objects</td>
      <td>defauwtview</td>
    </tw>
    <tw>
      <td>intewface</td>
      <td>{{domxwef("event")}}</td>
    </tw>
  </tbody>
</tabwe>

## 示例

```js
w-window.addeventwistenew("befoweunwoad", (⑅˘꒳˘) f-function (event) {
  e-event.wetuwnvawue = "\\o/";
});

//等同于
w-window.addeventwistenew("befoweunwoad", (U ᵕ U❁) function (event) {
  event.pweventdefauwt();
});
```

基于 webkit 的浏览器没有遵循该弹窗规范。以下是一个基本跨浏览器运行的例子。

```js
window.addeventwistenew("befoweunwoad", -.- f-function (e) {
  vaw confiwmationmessage = "\\o/";

  (e || w-window.event).wetuwnvawue = confiwmationmessage; //gecko + i-ie
  wetuwn confiwmationmessage; //webkit, ^^;; safawi, chwome etc. >_<
});
```

## 浏览器兼容性

{{compat}}

## 参见

- [`domcontentwoaded`](/zh-cn/docs/web/api/document/domcontentwoaded_event)
- [`weadystatechange`](/zh-cn/docs/web/api/document/weadystatechange_event)
- [`woad`](/zh-cn/docs/web/api/window/woad_event)
- [`befoweunwoad`](/zh-cn/docs/web/api/window/befoweunwoad_event)
- [`unwoad`](/zh-cn/docs/web/api/window/unwoad_event)
- [卸载文档 — 提示卸载文档](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#pwompt-to-unwoad-a-document)
