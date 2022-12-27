---
title: User-Agent
slug: Web/HTTP/Headers/User-Agent
---

{{HTTPSidebar}}

User-Agent 請求標頭（request header）含有能令網路協議同級層（peer）識別發出該[用戶代理](/zh-TW/docs/Glossary/User_agent)請求的軟體類型或版本號、該軟體使用的作業系統、還有軟體開發者的字詞串。

> **備註：** 請讀讀[透過用戶代理偵測瀏覽器](/zh-TW/docs/Web/HTTP/Browser_detection_using_the_user_agent)以理解為什麼給不同的瀏覽器不同的頁面或服務是餿主意。

| 標頭類型                                         | {{Glossary("Request header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | 否                                       |

## 語法

```plain
User-Agent: <product> / <product-version> <comment>
```

瀏覽器常見格式：

```plain
User-Agent: Mozilla/5.0 (<system-information>) <platform> (<platform-details>) <extensions>
```

網路瀏覽器常用的格式：

```plain
User-Agent: Mozilla/<version> (<system-information>) <platform> (<platform-details>) <extensions>
```

## 指令

- \<product>
  - : 產品識別符：通常是名字或開發代號。
- \<product-version>
  - : 產品版本號。
- \<comment>
  - : 關於產品資訊的註解（如副產品訊息）。可能有、或沒有。

## Firefox UA 字串

關於 Firefox 和基於 Gecko 的用戶代理字串，請參閱 [Firefox 用戶代理字串參考](/zh-TW/docs/Web/HTTP/Headers/User-Agent/Firefox)。Firefox 用戶代理字串大略上分成以下四個部份：

**Mozilla/5.0 (_platform_; rv:_geckoversion_) Gecko/_geckotrail_ Firefox/_firefoxversion_**

1. `Mozilla/5.0` is the general token that says the browser is Mozilla-compatible. For historical reasons, almost every browser today sends it.
2. **_platform_** describes the native platform the browser is running on (Windows, Mac, Linux, Android, etc.), and if it's a mobile phone. [Firefox OS](/zh-TW/docs/Glossary/Firefox_OS) phones simply say `Mobile` — the web is the platform. Note that **_platform_** can consist of multiple `"; "`-separated tokens. See below for further details and examples.
3. **rv:_geckoversion_** indicates the release version of Gecko (such as _"17.0"_). In recent browsers, **_geckoversion_** is the same as **_firefoxversion_**.
4. **_Gecko/geckotrail_** indicates that the browser is based on [Gecko](/zh-TW/docs/Mozilla/Gecko). (On Desktop, _**geckotrail**_ is always the fixed string `20100101`.)
5. _**Firefox/firefoxversion**_ indicates the browser is Firefox, and provides the version (such as "_17.0"_).

### 示例

```plain
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Chrome 用戶代理字串

Chrome（或基於 Chromium/blink 引擎的瀏覽器）的用戶代理字串看起來像 Firefox。出於相容性的理由，它還會加上「KHTML, like Gecko」與「Safari」的字串。

### 字串

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

## Opera 用戶代理字串

因為 Opera 瀏覽器的引擎也是基於 blink 的，所以語法也看起來也會很像。不過，還會加上「 OPR/\<version>」一詞。

### 示例

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

Opera 在使用 Presto 排版時的用戶代理字串

```plain
Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00
Opera/9.60 (Windows NT 6.0; U; en) Presto/2.1.1
```

## Safari 用戶代理字串

此例的 safari 用戶代理字串是攜帶版，所以會出現「Mobile」一詞。

### 示例

```plain
Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30
```

## Internet Explorer 用戶代理字串

### 示例

```plain
Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)
```

## 網路爬蟲與機器人的用戶代理字串

### 示例

```plain
Googlebot/2.1 (+http://www.google.com/bot.html)
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參閱

- [User-Agent detection, history and checklist](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)
- [Firefox 用戶代理字串參考](/zh-TW/docs/Web/HTTP/Headers/User-Agent/Firefox)
- [透過用戶代理偵測瀏覽器](/zh-TW/docs/Web/HTTP/Browser_detection_using_the_user_agent)
