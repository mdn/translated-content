---
title: Data URL
slug: Web/URI/Schemes/data
l10n:
  sourceCommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{QuickLinksWithSubpages("/zh-TW/docs/Web/URI")}}

**Data URL** 是以 `data:` 開頭的 URL，允許內容創作者將小型檔案嵌入文件中。以前它們被稱為「data URI」，直到 WHATWG 將這個名稱廢除。

> [!NOTE]
> 現代瀏覽器將 Data URL 視為唯一的不透明來源，而不是繼承導航設置對象的來源。

## 語法

Data URL 由四個部分組成：前綴（`data:`）、指示數據類型的 [MIME 類型](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/MIME_types)、如果非文本則可選的 `base64` 標記，以及數據本身：

```plain
data:[<mediatype>][;base64],<data>
```

`mediatype` 是一個 [MIME 類型](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/MIME_types)字串，例如 `'image/jpeg'` 表示 JPEG 圖像文件。如果省略，默認為 `text/plain;charset=US-ASCII`。

如果數據包含 [RFC 3986 定義的保留字元](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2)或包含空格字元、換行字元或其他不可打印字元，這些字元必須 [URL 編碼](https://zh.wikipedia.org/wiki/百分号编码)。

如果數據是文本，可以嵌入文本（使用適當的實體或根據包含文件的類型進行轉義）。否則，可以指定 `base64` 來嵌入 base64 編碼的二進制數據。你可以在[這裡](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/MIME_types)和[這裡](/zh-TW/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)找到有關 MIME 類型的更多訊息。

幾個範例：

- `data:,Hello%2C%20World%21`
  - : 文本／純文本數據 `Hello, World!`。注意逗號被 [URL 編碼](https://zh.wikipedia.org/wiki/百分号编码)為 `%2C`，空格字元為 `%20`。
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : 上述文本的 base64 編碼版本
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : 包含 `<h1>Hello, World!</h1>` 的 HTML 文件
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : 包含 `<script>alert('hi');</script>` 的 HTML 文件，執行 JavaScript 警告。注意閉合 script 標籤是必需的。

## 將數據編碼為 base64 格式

Base64 是一組二進制到文本編碼方案，通過轉換為 radix-64 表示法將二進制數據表示為 {{Glossary("ASCII")}} 字串格式。由於僅由 ASCII 字元組成，base64 字串通常是 URL 安全的，因此可以用來在 Data URL 中編碼數據。

### 在 JavaScript 中編碼

Web API 原生方法提供了編碼或解碼為 base64 的方法：[Base64](/zh-TW/docs/Glossary/Base64)。

### 在 Unix 系統上編碼

在 Linux 和 macOS 系統上可以使用命令行 `base64` 來對文件或字串進行 base64 編碼（或者可以使用帶有 `-m` 參數的 `uuencode` 工具作為替代）。

```bash
echo -n hello|base64
# 輸出到控制台: aGVsbG8=

echo -n hello>a.txt
base64 a.txt
# 輸出到控制台: aGVsbG8=

base64 a.txt>b.txt
# 輸出到文件 b.txt: aGVsbG8=
```

### 在 Microsoft Windows 上編碼

在 Windows 上，可以使用 PowerShell 的 [Convert.ToBase64String](https://learn.microsoft.com/en-us/dotnet/api/system.convert.tobase64string?view=net-5.0) 進行 base64 編碼：

```plain
[convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("hello"))
# 輸出到控制台: aGVsbG8=
```

或者，可以使用 GNU／Linux shell（例如 [WSL](https://zh.wikipedia.org/wiki/适用于Linux的Windows子系统)）提供的 `base64` 工具：

```bash
bash$ echo -n hello | base64
# 輸出到控制台: aGVsbG8=
```

## 常見問題

此部分描述創建和使用 `data` URL 時常見的問題。

```html
data:text/html,lots of text…<p><a name%3D"bottom">bottom</a>?arg=val</p>
```

這表示一個 HTML 資源，其內容為：

```html
lots of text…
<p><a name="bottom">bottom</a>?arg=val</p>
```

- 語法
  - : `data` URL 的格式非常簡單，但很容易忘記在「data」段之前加上逗號，或者錯誤地將數據編碼為 base64 格式。
- HTML 中的格式化
  - : 一個 `data` URL 在文件中提供了一個文件，這可能相對於包含文件的寬度非常寬。作為 URL，`data` 應該可以用空白（換行、制表符或空格）來格式化，但在使用 base64 編碼時會出現一些實際問題。[更多訊息](https://bugzil.la/73026#c12)。
- 長度限制
  - : 瀏覽器不需要支持任何特定的最大數據長度。例如，Opera 11 瀏覽器將 URL 限制為 65535 個字元，這限制了 `data` URLs 的最大長度為 65529 個字元（如果使用簡單的 `data:`，不指定 MIME 類型，65529 個字元是編碼數據的長度，而不是源長度）。Firefox 97 版本及更高版本支持的 `data` URLs 最多可達 32MB（97 之前的版本限制接近 256MB）。Chromium 對超過 512MB 的 URL 提出異議，Webkit (Safari) 對超過 2048MB 的 URL 提出異議。
- 缺乏錯誤處理
  - : 媒體中的無效參數或在指定 `'base64'` 時的錯字會被忽略，但不會提供錯誤。
- 不支持查詢字串等
  - : Data URL 的數據部分是不透明的，因此嘗試在 Data URL 中使用查詢字串（頁面特定參數，語法為 `<url>?parameter-data`）將只是將查詢字串包含在 URL 表示的數據中。
- 安全問題
  - : 一些與 Data URL 相關的安全問題（例如釣魚），以及在瀏覽器的頂層導航到 Data URL 的問題。為了減輕這些問題，現代瀏覽器在頂層導航中禁止 Data URL。詳情請參見[Mozilla 安全團隊的這篇部落格文章](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/)。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [Base64](/zh-TW/docs/Glossary/Base64)
- [URL 編碼](https://zh.wikipedia.org/wiki/百分号编码)
- {{domxref("atob","atob()")}}
- {{domxref("btoa","btoa()")}}
- [CSS `url()`](/zh-TW/docs/Web/CSS/url)
- [URI](/zh-TW/docs/Glossary/URI)
