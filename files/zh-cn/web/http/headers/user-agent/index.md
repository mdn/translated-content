---
title: User-Agent
slug: Web/HTTP/Headers/User-Agent
l10n:
  sourceCommit: 165f04fc4a77b053850bf6c5243831e1b17a2433
---

{{HTTPSidebar}}

**User-Agent** {{Glossary("request header", "请求标头")}}是一个特征字符串，使得服务器和对等网络能够识别发出请求的{{Glossary("user agent", "用户代理")}}的应用程序、操作系统、供应商或版本信息。

> [!WARNING]
> 请阅读[使用用户代理字段进行浏览器检测](/zh-CN/docs/Web/HTTP/Browser_detection_using_the_user_agent)来了解为什么为不同的浏览器提供不同的页面或者服务通常不是一个好主意。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">标头类型</th>
      <td>{{Glossary("request header", "请求标头")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的标头")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 语法

```http
User-Agent: <product> / <product-version> <comment>
```

web 浏览器的通用格式为：

```http
User-Agent: Mozilla/5.0 (<system-information>) <platform> (<platform-details>) <extensions>
```

### 指令

- \<product>
  - : 产品标识符——其名称或开发代号。
- \<product-version>
  - : 产品版本号。
- \<comment>
  - : 零个或多个包含更多细节的注释。例如，子产品的信息。

## Firefox 用户代理字符串

关于更多 Firefox 和基于 Gecko 的用户代理字符串的信息，请参阅 [Firefox 用户代理字符串参考](/zh-CN/docs/Web/HTTP/Headers/User-Agent/Firefox)。Firefox 的用户代理字符串分为 4 个组成部分：

```plain
Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion
```

1. `Mozilla/5.0` 是一个通用标记，表示浏览器与 Mozilla 兼容。出于历史原因，现在每种浏览器几乎都会发送这一标记。
2. **_platform_** 描述浏览器运行的原生平台（Windows、Mac、Linux、Android 等）以及是否运行在手机上。{{Glossary("Firefox OS", "Firefox 操作系统")}}手机会标注为 `Mobile`——意指 web 即是平台。注意，**_platform_** 可能包含多个由“`;`”分隔的标记。详情和示例请见下文。
3. **rv:_geckoversion_** 表示 Gecko 引擎的发布版本（例如“_17.0_”）。在近期的浏览器中，**_geckoversion_** 与 **_firefoxversion_** 相同。
4. **_Gecko/geckotrail_** 表示浏览器基于 Gecko 引擎。（在桌面平台上，**_geckotrail_** 始终是固定的字符串 `20100101`。）
5. **_Firefox/firefoxversion_** 表示浏览器为 Firefox，并提供其版本号（例如“_17.0_”）。

### 示例

```plain
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Chrome 用户代理字符串

基于 Chrome（Chromium 或 Blink 引擎）的浏览器用户代理字符串与 Firefox 相似。为了保持兼容性，它会添加诸如 `KHTML, like Gecko` 和 `Safari` 的字符串。

### 示例

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

## Opera 用户代理字符串

Opera 浏览器同样是基于 Blink 引擎，这就是为什么它看起来与 Chrome 用户代理字符串几乎一样，只是添加了 `"OPR/<version>"`。

### 示例

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

较早版本中基于 Presto 的 Opera 版本中使用了：

```plain
Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00
Opera/9.60 (Windows NT 6.0; U; en) Presto/2.1.1
```

## 微软 Edge 用户代理字符串

Edge 浏览器同样基于 Blink 引擎，它添加了 `"Edg/<version>"`。

### 示例

```plain
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59
```

## Safari 用户代理字符串

在此示例中，用户代理字符串是移动版 Safari 的版本信息，其中包含了单词 `"Mobile"`。

### 示例

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1
```

## 爬虫和机器人用户代理字符串

### 示例

```plain
Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
```

```plain
Mozilla/5.0 (compatible; YandexAccessibilityBot/3.0; +http://yandex.com/bots)
```

## 库与网络工具的用户代理字符串

### 示例

```plain
curl/7.64.1
```

```plain
PostmanRuntime/7.26.5
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [用户代理检测、历史记录和清单](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)
- [Firefox 用户代理字符串参考](/zh-CN/docs/Web/HTTP/Headers/User-Agent/Firefox)
- [使用用户代理字段进行浏览器检测](/zh-CN/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- [客户端提示](/zh-CN/docs/Web/HTTP/Client_hints)
