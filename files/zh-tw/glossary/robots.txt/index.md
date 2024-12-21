---
title: Robots.txt
slug: Glossary/Robots.txt
l10n:
  sourceCommit: 24d8a34da576f86b10923e426f66df48ab6201b9
---

{{GlossarySidebar}}

**robots.txt** 是一個通常放置於網站根目錄的檔案（例如，`https://www.example.com/robots.txt`）。它用來指定{{Glossary("crawler", "爬蟲")}}是否被允許或禁止訪問整個網站或網站上的某些資源。一個限制性的 `robots.txt` 檔案可以防止爬蟲消耗過多的頻寬。

網站擁有者可以禁止爬蟲檢測某個路徑（以及該路徑中的所有檔案）或特定檔案。這通常用於防止這些資源被索引或被搜索引擎提供服務。

如果允許爬蟲訪問資源，可以透過 `<meta name="robots">` 標籤與 {{HTTPHeader("X-Robots-Tag")}} HTTP 標頭為這些資源定義[索引規則](/zh-TW/docs/Web/HTTP/Headers/X-Robots-Tag#指令)。與搜索相關的爬蟲會利用這些規則來決定如何在搜索結果中索引與提供資源，或隨時間調整對特定資源的爬取速率。

## 參見

- {{HTTPHeader("X-Robots-Tag")}}
- {{Glossary("Search engine", "搜尋引擎")}}
- {{RFC("9309", "爬蟲排除協議")}}
- [Google 如何解讀 robots.txt 規範](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt)（developers.google.com）
- https://www.robotstxt.org
- [Robots.txt](https://zh.wikipedia.org/wiki/Robots.txt)（維基百科）
