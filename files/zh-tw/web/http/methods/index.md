---
title: HTTP 請求方法
slug: Web/HTTP/Methods
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP 定義了一組**請求方法**，用於指示對給定資源進行的期望操作。儘管它們也可以是名詞，這些請求方法有時被稱為 _HTTP 動詞_。它們中的每一個實現了不同的語義，但它們的一組常見特徵是共享的：例如，一個請求方法可以是{{glossary("Safe/HTTP", "安全")}}、{{glossary("idempotent", "冪等")}}或{{glossary("cacheable", "可緩存")}}的。

- [`GET`](/zh-TW/docs/Web/HTTP/Methods/GET)
  - : `GET` 方法請求指定資源的表示。使用 `GET` 的請求只應檢索數據。
- [`HEAD`](/zh-TW/docs/Web/HTTP/Methods/HEAD)
  - : `HEAD` 方法要求與 `GET` 請求完全相同的回應，但不包括回應主體。
- [`POST`](/zh-TW/docs/Web/HTTP/Methods/POST)
  - : `POST` 方法將實體提交給指定的資源，通常導致狀態的變化或伺服器上的副作用。
- [`PUT`](/zh-TW/docs/Web/HTTP/Methods/PUT)
  - : `PUT` 方法用請求載荷替換目標資源的所有當前表示。
- [`DELETE`](/zh-TW/docs/Web/HTTP/Methods/DELETE)
  - : `DELETE` 方法刪除指定的資源。
- [`CONNECT`](/zh-TW/docs/Web/HTTP/Methods/CONNECT)
  - : `CONNECT` 方法與目標資源識別的伺服器建立隧道。
- [`OPTIONS`](/zh-TW/docs/Web/HTTP/Methods/OPTIONS)
  - : `OPTIONS` 方法描述目標資源的通信選項。
- [`TRACE`](/zh-TW/docs/Web/HTTP/Methods/TRACE)
  - : `TRACE` 方法在到目標資源的路徑上執行消息回送測試。
- [`PATCH`](/zh-TW/docs/Web/HTTP/Methods/PATCH)
  - : `PATCH` 方法對資源應用部分修改。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [HTTP 標頭](/zh-TW/docs/Web/HTTP/Headers)
