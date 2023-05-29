---
title: Window.personalbar
slug: Web/API/Window/personalbar
---

{{APIRef}}

## 概要

返回 `personalbar` 对象，其可见性可以在窗口中切换。

## 语法

```plain
objRef =window.personalbar
```

## 示例

{{todo('https://bugzilla.mozilla.org/show_bug.cgi?id=790023')}}

{{deprecated_inline}} The following complete HTML example shows the way that the visible property of the various "bar" objects is used, and also the change to the privileges necessary to write to the visible property of any of the bars on an existing window. Due to [deprecation of enablePrivilege](/zh-CN/docs/Bypassing_Security_Restrictions_and_Signing_Code) this functionality can not be used in web pages. EnablePrivilege is disabled in Firefox 15 and will be removed in Firefox 17.

```html
<!DOCTYPE html>
<html>
<head>
<title>Various DOM Tests</title>

<script>
// changing bar states on the existing window
netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserWrite");
window.personalbar.visible = !window.personalbar.visible;
</script>

</head>
<body>
  <p>Various DOM Tests</p>
</body>
</html>
```

## 笔记

When you load the example page above, the browser displays the following dialog: ![](modify_any_open_window_dialog.png)

To toggle the visibility of these bars, you must either sign your scripts or enable the appropriate privileges, as in the example above. Also be aware that dynamically updating the visibilty of the various toolbars can change the size of the window rather dramatically, and may affect the layout of your page.

## 规范

{{Specifications}}

## 相关链接

- {{domxref("window.locationbar")}}, {{domxref("window.menubar")}}, {{domxref("window.scrollbars")}}, {{domxref("window.statusbar")}}, {{domxref("window.toolbar")}}
