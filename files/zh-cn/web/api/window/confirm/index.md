---
title: Window.confirm()
slug: Web/API/Window/confirm
---

{{ApiRef("Window")}}

**`Window.confirm()`** 方法显示一个具有一个可选消息和两个按钮 (确定和取消) 的模态对话框。

## 语法

```plain
result = window.confirm(message);
```

- message 是要在对话框中显示的可选字符串。
- result 是一个布尔值，表示是选择确定还是取消 (true 表示 OK)。

## 示例

```plain
if (window.confirm("Do you really want to leave?")) {
  window.open("exit.html", "Thanks for Visiting!");
}
```

运行结果：

![firefox confirm](firefoxcomfirmdialog_zpsf00ec381.png)

## 注意事项：

The following text is shared between this article, DOM:window\.prompt and DOM:window\.alert 对话框是弹出式 (modal) 的 (也即 alert 样式，译者注). 直到这个对话框被点击后，后面的脚本才会运行。请勿滥用此功能，这里列出了很多个理由：[请放弃使用对话框来确认信息](http://alistapart.com/article/neveruseawarning).

[Mozilla Chrome](/zh-CN/Chrome) 的用户 (比如 Firefox 插件开发者) 应该使用`nsIPromptService`这个方法。

Chrome 浏览器版本 V46.0 开始屏蔽内部 {{htmlelement("iframe")}} 元素，除非用户在沙箱内开启了 `allow-modal` 选项。

在 gecko (23) 内核中，参数是可选的。

## 规范

{{Specifications}}

## 更多

- {{domxref("window.alert","alert")}}
- {{domxref("window.prompt","prompt")}}
