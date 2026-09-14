---
title: Navigator：geolocation 屬性
short-title: geolocation
slug: Web/API/Navigator/geolocation
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`Navigator.geolocation`** 唯讀屬性會回傳一個 {{domxref("Geolocation")}} 物件，讓 Web 內容能存取裝置的位置。這允許網站或應用程式根據使用者的位置提供自訂的結果。

> [!NOTE]
> 基於安全考量，當網頁嘗試存取位置資訊時，會通知使用者並要求授權。請注意，每個瀏覽器都有其請求此權限的政策與方法。

## 值

一個 {{domxref("Geolocation")}} 物件。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 Geolocation API](/zh-TW/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
