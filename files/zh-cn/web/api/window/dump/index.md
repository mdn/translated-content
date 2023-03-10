---
title: Window.dump()
slug: Web/API/Window/dump
---

{{ ApiRef() }}

{{Non-standard_header}}

## 概要

将信息打印到 (本地) 控制台（console）.

## 语法

```
window.dump(message);

dump(message);
```

- `message` 是要打印的字符串

## 注解

`dump()`的常见用途是调试 JavaScript。`dump`如果使用`console`选项启动了 Firefox 进程，则将消息发送到系统控制台（本地控制台）。如果`console`未指定该选项，则输出到对应终端。dump() 的输出不会发送到[浏览器控制台](/zh-CN/docs/Tools/Browser_Console)。输出可以使用[console.log（）](/zh-CN/docs/Web/API/Console.log)发送到[浏览器控制台](/zh-CN/docs/Tools/Browser_Console)。特殊的代码还能将消息记录到[错误控制台](/zh-CN/docs/Error_Console) / [浏览器控制台](/zh-CN/docs/Tools/Browser_Console)。[`Components.utils.reportError`](/zh-CN/docs/Components.utils.reportError)[`nsIConsoleService`](/zh-CN/docs/XPCOM_Interface_Reference/nsIConsoleService)

`dump()`也可用于使用 JavaScript 实现的 XPCOM 组件，尽管 {{domxref("window")}} 不是组件中的全局对象。它也明确地在[沙箱中提供](/zh-CN/docs/Components.utils.Sandbox#Methods_available_on_the_Sandbox_object)。但是，这种使用`dump`不受下面提到的偏好的影响 --- 它将始终显示出来。因此，建议您自己检查此偏好或使用自己的调试偏好，以确保在根本不感兴趣的情况下，不会向用户的控制台发送大量调试内容。请注意，`dump`XPCOM 组件的输出将转到`stderr`，而`dump`其他地方将输出`stdout`。

[Gecko](/zh-CN/docs/Gecko) 在默认情况 **dump()** 下被禁用 - 它不会做任何事情，但也不会引起错误。要查看`dump`输出，您必须通过设置首选项`browser.dom.window.dump.enabled`来启用它。您可以在[about：config](http://kb.mozillazine.org/About:config)或[user.js 文件中](http://kb.mozillazine.org/User.js_file)设置首选项。注意：`about:config`默认情况下不会列出此首选项，您可能需要创建它（右键单击内容区域 - >新建 - >布尔值）。

在 Windows 上，您需要一个控制台才能看到任何东西。如果您还没有，请关闭应用程序并使用命令行参数重新打开`console`应该创建控制台或使用`-attach-console`现有的控制台。在其他操作系统上，从终端启动应用程序就足够了。

要将控制台输出重定向到文件，请运行 firefox *而不*使用-console 选项，并使用语法将 stderr 和 stdout 重定向到一个文件，即：

```
firefox > console.txt 2>&1
```

> **备注：** 如果您希望控制台消息出现在用于启动应用程序的控制台中，则可以使用[Gecko 控制台重定向器](https://github.com/matthewkastor/Redirector)。预编译的二进制文件可以在压缩的归档文件 [https://github.com/matthewkastor/Redirector/archive/master.zip 中找到](https://github.com/matthewkastor/Redirector/archive/master.zip)，`Redirector-master\Gecko\Console Redirector\bin\Release`将所有 dll 和 exe 复制到任何你想要的地方。然后跑`Console Redirector.exe /?`

## Specification

这不是标准的一部分
