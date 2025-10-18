---
title: Firefox 3.5 中的安全性更改
slug: Mozilla/Firefox/Releases/3.5/Security_changes
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

本文介绍了 Firefox 3.5 中与安全性相关的更改。

## 对界面注册的更改

为防止远程内容被用作界面，一个安全漏洞已被修复。这可能会影响任何在其 `chrome.manifest` 文件中包含引用网络文件资源的附加组件。

修复此漏洞的方法是向 `nsIProtocolHandler` 接口添加了一个新的 `URI_IS_LOCAL_RESOURCE` 标志，以表明该协议可以安全地注册为界面。任何创建自己的协议处理器并尝试在 `chrome.manifest` 文件中注册的附加组件，都必须使用此标志才能正常工作。

## 隐私浏览模式

Firefox 3.5 实现了隐私浏览模式。在该模式下，cookie、历史记录和其他可能涉及隐私的信息都不会永久保存在用户的计算机上。扩展和其他附加组件可以支持隐私浏览功能，在隐私浏览模式启用时检测到并避免保存隐私信息。有关详细信息，参见[支持隐私浏览模式](https://web.archive.org/web/20210620014429/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/Supporting_private_browsing_mode)。

插件可以通过使用 [`NPN_GetValue()`](https://web.archive.org/web/20210308202622/https://developer.mozilla.org/en-US/docs/Archive/Plugins/Reference/NPN_GetValue) 函数检查当前 `NPNVprivateModeBool` 变量的值，来检测隐私浏览模式是否正在生效。

## 新的证书错误处理

在 Firefox 3 的早期版本中，SSL 证书错误会导致浏览器窗口显示标准的网络错误页面 `about:neterror`。从 Firefox 3.5 开始，将显示一个新的错误页面 `about:certerror`。错误 URL 的格式如下：

`about:certerror?e=error&u=url&d=desc`

开发者需要提供自定义证书错误页面的嵌入者现在可以通过提供他们自己的 `about:` 页面实现，并将 `security.alternate_certificate_error_page` 预设设置为适当的页面名称（例如 `"certerror"`）来实现这一功能。

## 参见

- [Firefox 3.5 的开发者说明](/zh-CN/docs/Mozilla/Firefox/Releases/3.5)
