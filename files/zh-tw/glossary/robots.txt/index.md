---
title: Robots.txt
slug: Glossary/Robots.txt
l10n:
  sourceCommit: a3693d282028046f4e0dadf0b1aa068b407d1158
---

**robots.txt** 是一個通常放置於網站根目錄的檔案（例如，`https://www.example.com/robots.txt`）。它用來指定是否允許{{Glossary("crawler", "爬蟲")}}存取整個網站或指定的資源。一個限制性的 `robots.txt` 檔案可以防止爬蟲消耗過多的頻寬。

網站擁有者可以禁止爬蟲檢測某個路徑（以及該路徑中的所有檔案）或特定檔案。這通常用於防止這些資源被索引或被搜索引擎提供服務。

如果允許爬蟲存取資源，你可以透過 [`<meta name="robots">`](/zh-TW/docs/Web/HTML/Reference/Elements/meta/name/robots) 元素（通常稱為「robots 標籤」）與 {{HTTPHeader("X-Robots-Tag")}} HTTP 標頭為這些資源定義[索引規則](/zh-TW/docs/Web/HTTP/Reference/Headers/X-Robots-Tag#指令)。與搜尋相關的爬蟲會利用這些規則來決定如何在搜尋結果中索引與提供資源，或隨時間調整對特定資源的爬取速率。

## 參見

- [robots.txt 組態](/zh-TW/docs/Web/Security/Practical_implementation_guides/Robots_txt)安全指南
- {{Glossary("Search engine", "搜尋引擎")}}
- {{RFC("9309", "爬蟲排除協議")}}
- [Google 如何解讀 robots.txt 規範](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt)（developers.google.com）
- https://www.robotstxt.org
- [Robots.txt](https://zh.wikipedia.org/wiki/Robots.txt)（維基百科）
