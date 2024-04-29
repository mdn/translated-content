---
title: 511 Network Authentication Required
slug: Web/HTTP/Status/511
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`511 Network Authentication Required`** 回應狀態碼表示用戶端需要進行驗證以獲得網路訪問權限。

這個狀態碼不是由伺服器生成的，而是由控制對網路訪問的攔截代理生成。

網路運營商有時需要某些驗證、接受條款或其他用戶互動才能授予訪問權限（例如在網吧或機場）。他們通常使用媒體存取控制（MAC）位址來識別未執行此操作的用戶端。

## 狀態

```http
511 Network Authentication Required
```

## 規格

{{Specifications}}

## 參見

- {{Glossary("Proxy server", "代理伺服器")}}
