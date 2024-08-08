---
title: User-Agent
slug: Web/HTTP/Headers/User-Agent
l10n:
  sourceCommit: 165f04fc4a77b053850bf6c5243831e1b17a2433
---

{{HTTPSidebar}}

**User-Agent** {{Glossary("request header", "請求標頭")}}是一個讓伺服器和網路對等端識別發起請求的{{Glossary("user agent", "使用者代理")}}的應用程式、操作系統、供應商和/或版本的特徵字串。

> [!WARNING]
> 請閱讀[透過使用者代理進行瀏覽器檢測](/zh-TW/docs/Web/HTTP/Browser_detection_using_the_user_agent)，了解為何給不同的瀏覽器提供不同的網頁或服務通常是不好的主意。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">標頭類型</th>
      <td>{{Glossary("Request header", "請求標頭")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的標頭")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 語法

```http
User-Agent: <product> / <product-version> <comment>
```

網頁瀏覽器的常見格式：

```http
User-Agent: Mozilla/5.0 (<system-information>) <platform> (<platform-details>) <extensions>
```

### 指令

- \<product>
  - : 產品識別碼——它的名稱或開發代號。
- \<product-version>
  - : 產品的版本號。
- \<comment>
  - : 零個或多個包含更多詳細訊息的評論。例如，次產品訊息。

## Firefox UA 字串

關於基於 Firefox 和 Gecko 的 user agent 字串的更多訊息，請參見[Firefox user agent 字串參考](/zh-TW/docs/Web/HTTP/Headers/User-Agent/Firefox)。Firefox 的 UA 字串分為四個部分：

```plain
Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion
```

1. `Mozilla/5.0` 是一個通用標記，表示瀏覽器與 Mozilla 兼容。出於歷史原因，幾乎每個瀏覽器現今都會發送它。
2. **_platform_** 描述瀏覽器運行的本地平台（Windows、Mac、Linux、Android 等）以及是否是手機。{{Glossary("Firefox OS")}} 手機顯示 `Mobile`——網頁即平台。請注意，**_platform_** 可以包含多個以「`;`」分隔的標記。詳細訊息和範例見下文。
3. **rv:_geckoversion_** 表示 Gecko 的發布版本（例如 "_17.0_"）。在最近的瀏覽器中，**_geckoversion_** 與 **_firefoxversion_** 相同。
4. **_Gecko/geckotrail_** 表示瀏覽器基於 Gecko。（在桌面上，**_geckotrail_** 始終是固定字串 `20100101`。）
5. **_Firefox/firefoxversion_** 表示瀏覽器是 Firefox 並提供版本（例如 "_17.0_"）。

### 範例

```plain
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0
```

## Chrome UA 字串

Chrome（或基於 Chromium/Blink 引擎）user agent 字串類似於 Firefox 的。為了兼容性，它添加了 `KHTML, like Gecko` 和 `Safari` 字串。

### 範例

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

## Opera UA 字串

Opera 瀏覽器也是基於 Blink 引擎，這就是為什麼它幾乎與 Chrome UA 字串相同，但增加了 `"OPR/<version>"`。

### 範例

```plain
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41
```

較舊的基於 Presto 的 Opera 版本使用：

```plain
Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.2.15 Version/10.00
Opera/9.60 (Windows NT 6.0; U; en) Presto/2.1.1
```

## Microsoft Edge UA 字串

Edge 瀏覽器也是基於 Blink 引擎。它添加了 `"Edg/<version>"`。

### 範例

```plain
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59
```

## Safari UA 字串

在這個範例中，user agent 字串是行動版 Safari 的版本。它包含 `"Mobile"` 一詞。

### 範例

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1
```

## 爬蟲和機器人 UA 字串

### 範例

```plain
Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
```

```plain
Mozilla/5.0 (compatible; YandexAccessibilityBot/3.0; +http://yandex.com/bots)
```

## 庫和網路工具 UA 字串

### 範例

```plain
curl/7.64.1
```

```plain
PostmanRuntime/7.26.5
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [User-Agent 檢測、歷史和清單](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)
- [Firefox 使用者代理字串參考](/zh-TW/docs/Web/HTTP/Headers/User-Agent/Firefox)
- [透過使用者代理進行瀏覽器檢測](/zh-TW/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- [用戶端提示](/zh-TW/docs/Web/HTTP/Client_hints)
