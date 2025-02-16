---
title: 如何撰寫 HTTP 訊息檔頭文件
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

[HTTP 訊息檔頭參考文件](/zh-TW/docs/Web/HTTP/Headers)紀錄了超文字傳輸協定（[HTTP](/zh-TW/docs/Web/HTTP)）中請求與回應訊息的標頭部分。

本文說明如何為 HTTP 訊息檔頭建立新的參考頁面。

## 第一步——決定要撰文的 HTTP 訊息檔頭

- 在各種 IETF 標準中定義了許多 HTTP 訊息檔頭（Header）。
- IANA 維護著一份 [HTTP 訊息檔頭欄位登錄表](https://www.iana.org/assignments/http-fields/http-fields.xhtml)，維基百科則整理了 [HTTP 頭欄位](https://zh.wikipedia.org/wiki/HTTP头字段)，但並非所有標頭都與網路開發者有關或屬於正式標準的一部分。
- 若目前的 [HTTP 訊息檔頭參考總覽頁面](/zh-TW/docs/Web/HTTP/Headers)上有**紅色連結**，這些標頭通常是值得撰寫文件的好選擇。
- 如有疑問，請[洽詢 MDN Web 文件團隊](/zh-TW/docs/MDN/Community/Communication_channels)，確認你選的標頭是否值得撰寫文件。

## 第二步——檢查現有 HTTP 訊息檔頭頁面

- 現有 HTTP 訊息檔頭文件可到[此處](/zh-TW/docs/Web/HTTP/Headers)查閱。
- HTTP 訊息檔頭分為不同範疇：{{Glossary("Request header", "請求標頭")}}、{{Glossary("Response header", "回應標頭")}}以及{{Glossary("Representation header", "表示標頭")}}。
- 確認你要撰寫的標頭所屬範疇（請注意，有些標頭根據情境不同，可能同時為請求標頭與回應標頭）。
- 前往與其相同範疇的現有標頭參考頁面。

## 第三步——建立 HTTP 訊息檔頭頁面

- 所有標頭頁面皆存放於此目錄下：[`files/zh-TW/web/http/headers`](https://github.com/mdn/content/tree/main/files/zh-TW/web/http/headers)。
- 若要建立新頁面，請參閱我們的[如何建立、編輯、移動或刪除頁面](/zh-TW/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting)。

## 第四步——撰寫內文

- 你可以選擇從我們的 [HTTP 訊息檔頭範本頁面](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Page_types#http_header_reference_page)開始，或是複製第二步中找到的現有 HTTP 訊息檔頭文件架構。
- 撰寫關於新 HTTP 訊息檔頭的內容。
- 確保包含以下各個部分：

  - **簡介**：第一句應提及標頭名稱（**加粗**），並簡要概述其用途。
  - **資訊框**：至少應包含標頭類型，以及該標頭是否屬於{{Glossary("Forbidden header name", "禁用標頭名稱")}}。
  - **語法區塊**：列出該 HTTP 訊息檔頭的所有可能指令、參數或可接受的值。
  - **指令/值說明**：詳細解釋該標頭的指令與可用值。
  - **範例**：提供該標頭的實際應用案例，或展示其通常出現的情境。
  - **規範**：列出相關的 RFC 標準文件。
  - **相關連結**：「參見」區段，列出相關資源與參考資料。

## 第五步——加入瀏覽器相容性資訊

- 若你看過其它 HTTP 訊息檔頭頁面，就會發現有個 `\{{Compat}}` 巨集能自動填入瀏覽器相容性表格。
- 瀏覽器相容性表格是根據結構化資料生成的。若你有意貢獻這些資料，請參閱[相關說明](https://github.com/mdn/browser-compat-data/blob/main/README.md)並提交 Pull Request。

## 第六步——更新 HTTP 訊息檔頭清單

請確保你的標頭已列在 [HTTP 訊息檔頭參考總覽頁面](/zh-TW/docs/Web/HTTP/Headers)的合適範疇裡。

## 第七步——交付審核

建立屬性頁面後，請提交為 Pull Request。一位審核團隊成員將自動被指派來審核你的頁面。
