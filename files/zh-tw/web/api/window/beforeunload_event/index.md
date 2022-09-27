---
title: 'Window: beforeunload event'
slug: Web/API/Window/beforeunload_event
original_slug: Web/API/WindowEventHandlers/onbeforeunload
---

{{APIRef("HTML DOM")}}

**`onbeforeunload`** 事件处理函数包含的代码将在 {{event("beforeunload")}} 发出时被执行。当 window 准备释放它的资源时，该事件被触发。此时 document 仍然可见，且事件是仍然可被取消的。

> **備註：** 为了避免不必要的弹出窗口，除非页面已经有过互动，否则可能不会显示 beforeunload 创建的询问窗口。对于特定的浏览器列表，请参阅浏览器兼容性部分。

## 语法

```plain
window.onbeforeunload = funcRef
```

- `funcRef` 是函数或函数表达式的引用。
- 这个函数应该设置一个字符串到事件对象的 returnValue 属性上，且返回该字符串。

## 示例

```js
window.onbeforeunload = function(e) {
  var dialogText = 'Dialog text here';
  e.returnValue = dialogText;
  return dialogText;
};
```

## 注意

当事件返回了一个非空值时，将需要用户确认是否 unload 页面。在大部分浏览器中，事件的返回值将在对话框中显示。在 Firefox 4 及以后，返回值将不会显示给用户。作为替代，Firefox 将会显示"This page is asking you to confirm that you want to leave - data you have entered may not be saved." 请查看{{bug("588292")}}.

Since 25 May 2011, the HTML5 specification states that calls to {{domxref("window.alert()")}}, {{domxref("window.confirm()")}}, and {{domxref("window.prompt()")}} methods may be ignored during this event. See the [HTML5 specification](http://www.w3.org/TR/html5/webappapis.html#user-prompts) for more details.

Note also that various mobile browsers ignore the result of the event (that is, they do not ask the user for confirmation). Firefox has a hidden preference in about:config to do the same. In essence this means the user always confirms that the document may be unloaded.

You _can_ and _should_ handle this event through {{domxref("EventTarget.addEventListener","window.addEventListener()")}} and the {{event("beforeunload")}} event. More documentation is available there.

## Specifications

The event was originally introduced by Microsoft in Internet Explorer 4 and standardized in the HTML5 specification.

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [MSDN: onbeforeunload event](<http://msdn.microsoft.com/en-us/library/ms536907(VS.85).aspx>)
