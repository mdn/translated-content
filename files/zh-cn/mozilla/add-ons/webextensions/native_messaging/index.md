---
title: 与本地应用通信
slug: Mozilla/Add-ons/WebExtensions/Native_messaging
---

{{AddonSidebar}}

Native messaging 可以让 extension 与安装在用户计算机上的原生应用交换信息。原生应用仅需给 extension 提供服务，而无需在网页中可访问。一个常见的例子是密码管理器：原生应用负责存储和加密你的密码，并且和 extension 通信来填充网页中的表单字段。Native messaging 可以让 extension 拥有那些 WebExtensions APIs 所没有的功能，比如访问某些特定的硬件。

原生应用的安装与管理并不是在浏览器当中的：它应该是使用操作系统进行安装，和其他的原生应用一样。然后你需要将你的原生应用安装在指定位置，并提供一个清单。清单中描述了浏览器如何连接到你的原生应用。

extension 必须在 manifest.json 中获得"nativeMessaging" [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。同时，原生应用也需要在其清单中的 "allowed_extensions" 字段中包含 extension 的 ID 来表示允许该 extension 与自己进行通信。

经过上述操作，extension 就可以通过 {{WebExtAPIRef("runtime")}} API 与原生应用进行 JSON 数据通信了。原生应用可以通过标准输入/输出来接受/返回数据与 extension 通信。

![](native-messaging.png)

和 Chrome 相比，WebExtensions 所支持的 native messaging 有 2 个主要区别：

- 在 WebExtensions 中，原生应用的清单中的 "allowed_extensions" 字段是一个由 extension ID 组成的数组，而在 Chrome 中，清单中的 "allowed_origins" 字段是一个由 "chrome-extension" URLs 组成的数组
- 原生应用清单的存储位置不一样

Github 中的 [webextensions-examples 仓库](https://github.com/mdn/webextensions-examples)有一个[完整的关于 native messaging 的例子](https://github.com/mdn/webextensions-examples/tree/main/native-messaging)，文章中的大部分代码片段均出于此。

## 安装

### Extension 的 manifest.json

如果你想让你的 extension 与原生应用进行通信，你需要：

- 你必须在 [manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 中申请 "nativeMessaging" 的 [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) 。
- 你可能需要明确自己 extension 的 ID（因为在原生应用的清单中，extension ID 将会在被用来识别此 extension 是否被允许与原生应用通信）

这有一个 manifest.json 的例子：

```json
{
  "description": "Native messaging example extension",
  "manifest_version": 2,
  "name": "Native messaging example",
  "version": "1.0",
  "icons": {
    "48": "icons/message.svg"
  },

  "applications": {
    "gecko": {
      "id": "ping_pong@example.org",
      "strict_min_version": "50.0"
    }
  },

  "background": {
    "scripts": ["background.js"]
  },

  "browser_action": {
    "default_icon": "icons/message.svg"
  },

  "permissions": ["nativeMessaging"]
}
```

### 原生应用清单

原生应用清单描述了浏览器如何与原生应用进行连接。

原生应用清单需要与原生应用一起安装，浏览器仅会查阅清单而不会安装或管理原生应用。因此，何时采用何种方式来安装或更新这些文件的安全模型比起使用 WebExtensions APIs 更像原生应用。（我也搞不懂这句啥意思，原文：Thus the security model for when and how these files are installed and updated is much more like that for native applications than that for extensions using WebExtension APIs.）

关于原生应用清单的详细语法和路径规则，可参考 [原生应用清单](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Native_manifests)。

> **警告：** 除清单外，原生应用还**必需**配置路径规则，你可以参考 [原生应用清单](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Native_manifests) 来配置路径。

这有一个例子，是关于 "ping_pong" 原生应用的清单：

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

上面的清单代表：

- 这个原生应用允许 ID 为 "ping_pong\@example.org" 的 extension 连接，并通过{{WebExtAPIRef("runtime")}} API 来传入信息
- 这个原生应用本身存放在本机的 "/path/to/native-messaging/app/ping_pong.py" 中

> **备注：** 对于 Windows：在上面的例子中，原生应用是一个 Python 脚本，它在 Windows 下可能是无法运行的。一个代替方案是提供一个 .bat 文件，并且在清单中指向这个 .bat 文件：
>
> ```json
> {
>   "name": "ping_pong",
>   "description": "Example host for native messaging",
>   "path": "c:\\path\\to\\native-messaging\\app\\ping_pong_win.bat",
>   "type": "stdio",
>   "allowed_extensions": ["ping_pong@example.org"]
> }
> ```
>
> 在 .bat 文件中调用 Python 脚本：
>
> ```bash
> @echo off
>
> python -u "c:\\path\\to\\native-messaging\\app\\ping_pong.py"
> ```

## 交换信息

根据上面的配置，extension 已经可以和原生应用交换 JSON 信息了。

### Extension 端

你使用过 [messaging APIs](/zh-CN/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts) 与 content script 通信，与原生应用通信你应该非常熟悉，有 2 种方式：

- 基于连接的通信
- 无连接的通信（请求/响应 模式）

#### 基于连接的通信

在这种方式下，你需要调用 {{WebExtAPIRef("runtime.connectNative()")}} 并传入原生应用的名称（名称在原生应用清单中的 "name" 字段定义）。这个操作将会运行原生应用（如果它之前没在运行的话）并返回一个 {{WebExtAPIRef("runtime.Port")}} 。

当原生应用启动后，它被会传入 2 个参数：

- 到原生应用清单的完整路径
- （Firefox 55+）启动它的 [extension ID](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications)

原生应用会一直保持运行，直到 extension 调用 `Port.disconnect()` 或连接它的记录被结束。

使用 `Port` ，调用 `postMessage()` 传入一个 JSON 来发送消息，使用 `onMessage.addListener()` 来接收消息。

下面是一个例子：background script 建立与 ping_pong 原生应用的链接，并监听原生应用发来的消息。每当 browser action 点击时，发送一个 ping 的消息给原生应用。

```js
/*
启动，连接 ping_pong 原生应用
*/
var port = browser.runtime.connectNative("ping_pong");

/*
监听从原生应用发来的消息
*/
port.onMessage.addListener((response) => {
  console.log("Received: " + response);
});

/*
每当 browser action 被点击时，发送一条消息给原生应用
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Sending:  ping");
  port.postMessage("ping");
});
```

#### 无连接的通信

在这种模式下你需要调用 {{WebExtAPIRef("runtime.sendNativeMessage()")}} 传入如下参数：

- 原生应用的名字
- 要发送是 JSON 数据
- （可选）一个回调函数

每个消息都会创建一个新的原生应用实例。当原生应用启动时会被传入 2 个参数：

- 到原生应用清单的完整路径
- （Firefox 55+）启动它的 [extension ID](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications)

原生应用发送的第一条消息将会被作为对 `sendNativeMessage()` 响应，将会被传入回调函数中。

这有一个例子，对在上方的代码片段进行重写，改成使用 `runtime.sendNativeMessage()` 的方式：

```js
function onResponse(response) {
  console.log("Received " + response);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

/*
每当 browser action 被点击时，发送一条消息给原生应用
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Sending:  ping");
  var sending = browser.runtime.sendNativeMessage("ping_pong", "ping");
  sending.then(onResponse, onError);
});
```

### 原生应用端

在原生应用端，使用标准输入来接受消息，使用标准输出来发送消息。

每条消息将会被序列化成 UTF-8 格式的 JSON 数据，并且在消息前面有一个 32 位的值来表示该条消息使用本地字节序的长度。

发送给原生应用的单条消息最大是 1MB，总消息不得超越 4GB。

下面是一个用 Python 写的原生应用例子。监听 extensions 发送的消息，如果消息是 ping，则回复 pong：

```python
#!/usr/bin/python -u
# Note that running python with the `-u` flag is required on Windows,
# in order to ensure that stdin and stdout are opened in binary, rather
# than text, mode.

import sys, json, struct

# 从 stdin 读取解码消息
def getMessage():
  rawLength = sys.stdin.read(4)
  if len(rawLength) == 0:
      sys.exit(0)
  messageLength = struct.unpack('@I', rawLength)[0]
  message = sys.stdin.read(messageLength)
  return json.loads(message)

# 为了能被传输，对给定的内容进行编码
def encodeMessage(messageContent):
  encodedContent = json.dumps(messageContent)
  encodedLength = struct.pack('@I', len(encodedContent))
  return {'length': encodedLength, 'content': encodedContent}

# 向 stdout 发送一个已编码的消息
def sendMessage(encodedMessage):
  sys.stdout.write(encodedMessage['length'])
  sys.stdout.write(encodedMessage['content'])
  sys.stdout.flush()

while True:
  receivedMessage = getMessage()
  if (receivedMessage == "ping"):
    sendMessage(encodeMessage("pong"))
```

## 关闭原生应用

如果你通过 `runtime.connectNative()` 连接原生应用，则原生应用会一直保持运行，直到 extension 调用 `Port.disconnect()` 或连接它的记录被结束。如果你通过 `runtime.sendNativeMessage()` 向原生应用发消息，原生应用会在回复消息后被关闭。

关闭原生应用的过程：

- 在 \*nix 系统比如 OS X 和 Linux 中，浏览器会向原生应用发送 SIGTERM 信号让其可以优雅的退出，然后再发送 SIGKILL 信号。这些信号将会传递给每一个子进程，除非它们分裂成一个新的进程组。
- 在 Windows 中，浏览器会向原生应用的进程发送一个 [Job object](<https://msdn.microsoft.com/en-us/library/windows/desktop/ms684161(v=vs.85).aspx>) 并杀死任务，如果原生应用启动任何的额外进程并希望它们能在原生应用被杀死后继续保持运行，原生应用需要在启动进程时使用 [`CREATE_BREAKAWAY_FROM_JOB`](<https://msdn.microsoft.com/en-us/library/windows/desktop/ms684863(v=vs.85).aspx>) 标记。

## 常见问题 Troubleshooting

如果有什么地方出错，可以检查[浏览器控制台](/zh-CN/Add-ons/WebExtensions/Debugging#Viewing_log_output)。原生应用发送的任何 stderr 都会被反应在浏览器控制台中。所以如果你已经运行了原生应用，你可以看到原生应用发出的所有错误信息。

如果你没有配置好原生应用，你应该会看到一些错误信息。

```plain
"No such native application <name>"
```

- 检查 `runtime.connectNative()` 传入的名称与应用程序清单中的名称一致
- OS X/Linux：检查原生应用清单文件的名称是 \<name>.json
- Windows：检查注册表是否在正确的位置，并且它的名称是否与应用程序清单中的名称一致
- Windows：检查注册中给出的路径是否指向的是原生应用清单

```plain
"Error: Invalid application <name>"
```

- 检查原生应用的名称是否有非法字符

```plain
"'python' is not recognized as an internal or external command, ..."
```

- Windows：如果你的应用是一个 Python script，检查你是否已经安装过 Python，并为其配置好路径

```plain
"File at path <path> does not exist, or is not executable"
```

- 如果你看见它，意味着应用程序清单已经被找到了
- 检查应用程序清单的 path 字段是正确的
- Windows：检查你是否已经转义过了路径分隔符 ("c:\\\path\\\to\\\file")
- 检查原生应用是否在原生应用清单中的 path 字段中指向的本地路径
- 检查原生应用是否可执行

```plain
"This extension does not have permission to use native application <name>"
```

- 检查原生应用清单中的 "allowed_extensions" 字段中是否包含了 extension 的 ID。

```plain
"TypeError: browser.runtime.connectNative is not a function"
```

- 检查 extension 是否已经拥有了 nativeMessaging 权限

```plain
"[object Object]       NativeMessaging.jsm:218"
```

- 这是一个启动原生应用时的问题。

## 与 Chrome 的兼容问题

浏览器之间存在许多影响 Web 扩展与本地应用通信的差异，包括到本地应用的参数传递、清单文件的位置，等等。这些差异在 [Chrome 不兼容情况 > Native messaging](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#native_messaging) 进行了讨论。
