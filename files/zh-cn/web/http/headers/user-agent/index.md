---
title: User-Agent
slug: Web/HTTP/Headers/User-Agent
---

{{HTTPSidebar}}

**User-Agent** 首部包含了一个特征字符串，用来让网络协议的对端来识别发起请求的用户代理软件的应用类型、操作系统、软件开发商以及版本号。

> **备注：** 请阅读[使用用户代理字段进行浏览器检测](/zh-CN/docs/Web/HTTP/Browser_detection_using_the_user_agent)来了解为什么为不同的浏览器提供不同的页面或者服务通常不是一个好主意。

| Header type                           | {{Glossary("Request header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | no                             |

## 语法

```plain
User-Agent: <product> / <product-version> <comment>
```

浏览器通常使用的格式为：

```plain
User-Agent: Mozilla/<version> (<system-information>) <platform> (<platform-details>) <extensions>
```

## 指令

- \<product>
  - : 产品识别码。
- \<product-version>
  - : 产品版本号。
- \<comment>
  - : 零个或多个关于组成产品信息的注释。

## Firefox UA 字符串

查阅 [Firefox 用户代理字符串参考](/zh-CN/docs/Web/HTTP/Headers/User-Agent/Firefox)来获取更多关于基于 Firefox 和 Gecko 渲染引擎的用户代理字符串的细节信息。Firefox 的用户代理字符串自身可以分为四部分：

**Mozilla/5.0 (_platform_; rv:_geckoversion_) Gecko/_geckotrail_ Firefox/_firefoxversion_**

- **_Mozilla/5.0_** 是一个通用标记符号，用来表示与 Mozilla 兼容，这几乎是现代浏览器的标配。
- **_platform_** 用来说明浏览器所运行的原生系统平台（例如 Windows、Mac、Linux 或 Android），以及是否运行在手机上。搭载 Firefox OS 的手机仅简单地使用了 "Mobile" 这个字符串；因为 web 本身就是平台。注意 **_platform_** 可能会包含多个使用 "; " 隔开的标记符号。参见下文获取更多的细节信息及示例。
- **rv:_geckoversion_** 表示 Gecko 的发布版本号（例如 "17.0"）。在近期发布的版本中，**_geckoversion_** 表示的值与 **_firefoxversion_ **相同。
- **_Gecko/geckotrail_** 表示该浏览器基于 Gecko 渲染引擎。
- 在桌面浏览器中，_**geckotrail**_ 是固定的字符串 "20100101" 。
- _**Firefox/firefoxversion**_ 表示该浏览器是 Firefox，并且提供了版本号信息（例如 "17.0"）。

### 示例

```plain
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Chrome UA 字符串

Chrome（或 Chromium/blink-based engines）用户代理字符串与 Firefox 的格式类似。为了兼容性，它添加了诸如 "KHTML, like Gecko" 和 "Safari" 这样的字符串。

### 示例

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

## Opera UA 字符串

现在，Opera 也是一款基于 blink 引擎的浏览器，这也是为什么它的 UA 看起来（和 Chrome 的）几乎一样的原因，不过，它添加了一个 "`OPR/<version>`"。

### 示例

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

使用 Presto 引擎的、更老的 Opera 浏览器使用：

```plain
Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00
Opera/9.60 (Windows NT 6.0; U; en) Presto/2.1.1
```

## Safari UA 字符串

在这个示例中，这是 Safari 的移动版本的用户代理字符串。因为其中包含了单词 "Mobile" 。

### 示例

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1
```

## Internet Explorer UA 字符串

### 示例

```plain
Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)
```

## 爬虫和机器人的 UA 字符串

### 示例

```plain
Googlebot/2.1 (+http://www.google.com/bot.html)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- [User-Agent 探测，历史及检查清单](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)
- [Firefox 用户代理字符串参考](/zh-CN/docs/Web/HTTP/Headers/User-Agent/Firefox)
- [使用用户代理字段进行浏览器检测](/zh-CN/docs/Web/HTTP/Browser_detection_using_the_user_agent)
