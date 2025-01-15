---
title: Data URL
slug: Web/URI/Schemes/data
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{QuickLinksWithSubpages("/zh-TW/docs/Web/URI")}}

**Data URL**，即以 `data:` 為前綴的 URL，允許內容創作者將小型檔案內嵌於文件中。它們先前被稱為「資料 URI」，但該名稱已被 WHATWG 廢除。

> [!NOTE]
> 現代瀏覽器將 Data URI 視為獨立的不透明來源，而非繼承導致導航的設定物件的來源。

## 語法

Data URL 由四個部分組成：前綴（`data:`）、表示資料類型的 [MIME 類型](/zh-TW/docs/Web/HTTP/MIME_types)、可選的 `base64` 標記（若為非文字內容），以及資料本身：

```plain
data:[<media-type>][;base64],<data>
```

`media-type` 是 [MIME 類型](/zh-TW/docs/Web/HTTP/MIME_types)字串，例如 JPEG 圖檔的 `'image/jpeg'`。若省略，則預設為 `text/plain;charset=US-ASCII`。

如果資料包含 [RFC 3986 中定義為保留字元的字元](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2)，或者包含空白字元、換行字元或其他不可打印字元，這些字元必須進行{{Glossary("Percent-encoding", "百分比編碼")}}。

如果資料是文字，你可以直接內嵌該文字（根據包裹文件的類型，使用適當的實體或轉義字符）。否則，你可以指定 `base64` 來內嵌以 base64 編碼的二進位資料。你可以在[這裡](/zh-TW/docs/Web/HTTP/MIME_types)和[這裡](/zh-TW/docs/Web/HTTP/MIME_types/Common_types)找到更多有關 MIME 類型的資訊。

一些範例：

- `data:,Hello%2C%20World%21`
  - : 文本內容 `Hello, World!`。注意逗號被{{Glossary("Percent-encoding", "百分比編碼")}}為 `%2C`，空白字元為 `%20`。
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : 上述範例的 base64 編碼版本。
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : 包含 `<h1>Hello, World!</h1>` 的 HTML 文件。
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : 包含 `<script>alert('hi');</script>` 的 HTML 文件，執行 JavaScript 警告訊息。注意需要有結束的 script 標籤。

## 將資料編碼為 base64 格式

Base64 是一組二進位轉文字的編碼方式，通過轉換為基數為 64 的表示法，將二進位資料表示為 {{Glossary("ASCII")}} 字串格式。由於僅包含符合 URL 語法的字元（「URL 安全」），我們可以安全地在 Data URL 中編碼二進位資料。Base64 使用字元 `+` 和 `/`，這些字元在 URL 中可能具有特殊含義。然而，因為 Data URL 沒有 URL 路徑段或查詢參數，在此情境中這種編碼是安全的。

### 使用 JavaScript 編碼

Web API 提供了原生的方法來進行 base64 的編碼或解碼：[Base64](/zh-TW/docs/Glossary/Base64)。

### 在 Unix 系統上編碼

在 Linux 和 macOS 系統上，可以使用命令列工具 `base64`（或作為替代的 `uuencode` 工具加上 `-m` 參數）對檔案或字串進行 base64 編碼。

```bash
echo -n hello|base64
# 輸出到終端機：aGVsbG8=

echo -n hello>a.txt
base64 a.txt
# 輸出到終端機：aGVsbG8=

base64 a.txt>b.txt
# 輸出到檔案 b.txt：aGVsbG8=
```

### 在 Microsoft Windows 上編碼

在 Windows 上，可以使用 PowerShell 的 [Convert.ToBase64String](https://learn.microsoft.com/zh-tw/dotnet/api/system.convert.tobase64string?view=net-5.0) 方法進行 base64 編碼：

```plain
[convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("hello"))
# 輸出到終端機：aGVsbG8=
```

作為替代方案，也可以使用 GNU/Linux Shell（如 [WSL](https://zh.wikipedia.org/wiki/Windows_Subsystem_for_Linux)）中的 `base64` 工具：

```bash
bash$ echo -n hello | base64
# 輸出到終端機：aGVsbG8=
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
  - : `data` URL 的格式非常簡單，但很容易忘記在「資料」部分前加上逗號，或者錯誤地將資料編碼為 base64 格式。
- 在 HTML 中的格式化
  - : 一個 `data` URL 提供了一個嵌套於檔案內的檔案，可能相對於包裹文件的寬度非常寬。作為 URL，`data` 應該可以用空白（換行符號、Tab 或空格）格式化，但實際上在[使用 base64 編碼](https://bugzil.la/73026#c12)時可能會出現問題。
- 長度限制
  - : 不要求瀏覽器支援任何特定的最大資料長度。例如，Opera 11 瀏覽器將 URL 限制為 65535 字元，因此 Data URL 被限制為 65529 字元（65529 字元為編碼資料的長度，而非來源的長度，若使用純 `data:` 而不指定 MIME 類型）。Firefox 97 版及更新版本支援最大 32MB 的 Data URL（97 版之前的限制接近 256MB）。Chromium 拒絕超過 512MB 的 URL，而 WebKit（Safari）拒絕超過 2048MB 的 URL。
- 缺乏錯誤處理
  - : 媒體的無效參數，或在指定 `'base64'` 時的拼寫錯誤，會被忽略，但不會提供錯誤訊息。
- 不支援查詢字串等
  - : Data URL 的資料部分是不可見的，因此嘗試使用查詢字串（具有語法 `<url>?parameter-data` 的頁面特定參數）只會將查詢字串包含在 Data URL 所表示的資料中。
- 安全性問題
  - : Data URL 已經與多種安全性問題（例如，網路釣魚）相關，特別是在瀏覽器的頂層導航中使用時。為了緩解此類問題，現代瀏覽器中阻止對 `data:` URL 的頂層導航。詳情請參見 [Mozilla 安全團隊的這篇博客文章](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/)。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{Glossary("Base64")}}
- {{Glossary("Percent-encoding", "百分比編碼")}}
- {{domxref("WorkerGlobalScope.atob()", "atob()")}}
- {{domxref("WorkerGlobalScope.btoa()", "btoa()")}}
- CSS {{CSSXref("url_value", "&lt;url&gt;")}}
- {{Glossary("URI")}}
