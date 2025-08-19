---
title: XMLHttpRequest：withCredentials 屬性
slug: Web/API/XMLHttpRequest/withCredentials
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

**`XMLHttpRequest.withCredentials`** 屬性是一個表示跨站 `Access-Control` 請求是否應該使用 Cookie、驗證標頭或 TLS 用戶端憑證等憑證來發送的布林值。設定 `withCredentials` 對同源請求沒有影響。

此外，這個旗標也用來表示何時應在回應中忽略 Cookie。預設值為 `false`。來自不同網域的 `XMLHttpRequest` 回應，除非在發出請求前將 `withCredentials` 設定為 `true`，否則不能為其自己的網域設定 Cookie 值。透過將 `withCredentials` 設定為 `true` 所取得的[第三方 Cookie](/zh-TW/docs/Web/Privacy/Guides/Third-party_cookies) 仍然會遵守同源政策，因此請求的腳本無法透過 [document.cookie](/zh-TW/docs/Web/API/Document/cookie) 或從回應標頭存取。

> [!NOTE]
> 這絕不會影響同源請求。

> [!NOTE]
> 來自不同網域的 `XMLHttpRequest` 回應，無論 `Access-Control-` 標頭值為何，*不能*為其自己的網域設定 Cookie 值，除非在發出請求前將 `withCredentials` 設定為 `true`。

## 值

一個布林。

## 範例

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/", true);
xhr.withCredentials = true;
xhr.send(null);
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
