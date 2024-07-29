---
title: Strict-Transport-Security
slug: Web/HTTP/Headers/Strict-Transport-Security
l10n:
  sourceCommit: f0f30c318c2a318552a753759fa0a09f6690f2a5
---

{{HTTPSidebar}}

HTTP **`Strict-Transport-Security`** 回應標頭（通常縮寫為 {{Glossary("HSTS")}}）告知瀏覽器該站點應僅使用 HTTPS 訪問，並且所有將來的 HTTP 訪問應自動轉換為 HTTPS。

> [!NOTE]
> 這比簡單地在伺服器上配置 HTTP 到 HTTPS 的重定向（301）更安全，因為初始的 HTTP 連接仍然易受中間人攻擊。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">標頭類型</th>
      <td>{{Glossary("Response header", "回應標頭")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止修改的標頭")}}</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

## 語法

```http
Strict-Transport-Security: max-age=<expire-time>
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains; preload
```

## 指令

- `max-age=<expire-time>`
  - : 瀏覽器應記住該站點僅能使用 HTTPS 訪問的時間，以秒為單位。
- `includeSubDomains` {{optional_inline}}
  - : 如果指定了這個可選參數，該規則也適用於所有子域。
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : 請參見[預加載嚴格傳輸安全性](#預加載嚴格傳輸安全性)的詳細訊息。當使用 `preload` 時，`max-age` 指令必須至少為 `31536000`（1 年），並且必須包含 `includeSubDomains` 指令。這不是規範的一部分。

## 描述

如果網站接受通過 HTTP 的連接並重定向到 HTTPS，訪問者可能會在被重定向之前先與未加密版本的網站進行通信，例如，如果訪問者輸入 `http://www.foo.com/` 或僅輸入 foo.com。這給中間人攻擊創造了機會。重定向可能會被利用，將訪問者引導到惡意網站，而不是原站點的安全版本。

HTTP Strict Transport Security 標頭告知瀏覽器不應使用 HTTP 加載站點，應自動將所有嘗試使用 HTTP 訪問站點的請求轉換為 HTTPS。

> [!NOTE]
> 當你的站點僅通過 HTTP 訪問時，瀏覽器會*忽略* `Strict-Transport-Security` 標頭。一旦你的站點通過 HTTPS 訪問且沒有憑證錯誤，瀏覽器會知道你的站點支持 HTTPS，並會尊重 `Strict-Transport-Security` 標頭。瀏覽器這樣做是因為攻擊者可能會攔截到站點的 HTTP 連接並注入或刪除標頭。

### 範例場景

你在機場登錄到免費 Wi-Fi 接入點並開始上網，訪問你的在線銀行服務以查看餘額和支付一些帳單。不幸的是，你使用的接入點實際上是駭客的筆記本電腦，他們攔截了你的原始 HTTP 請求並將你重定向到一個仿冒的銀行網站，而不是實際的網站。現在，你的私人數據暴露在駭客面前。

嚴格傳輸安全性解決了這個問題；只要你曾經使用 HTTPS 訪問過你的銀行網站，並且銀行網站使用嚴格傳輸安全性，你的瀏覽器就會知道自動僅使用 HTTPS，這可以防止駭客執行此類中間人攻擊。

### 瀏覽器處理方式

第一次使用 HTTPS 訪問你的站點並返回 `Strict-Transport-Security` 標頭時，瀏覽器會記錄此訊息，以便將來嘗試加載該站點時自動使用 HTTPS。

當 `Strict-Transport-Security` 標頭指定的到期時間過期後，再次嘗試通過 HTTP 加載站點將按正常方式進行，而不是自動使用 HTTPS。

每當瀏覽器接收到 Strict-Transport-Security 標頭時，它會更新該站點的到期時間，以便站點可以刷新此訊息並防止超時過期。如果需要禁用嚴格傳輸安全性，將 `max-age` 設置為 0（通過 https 連接）會立即使 `Strict-Transport-Security` 標頭過期，允許通過 http 訪問。

## 預加載嚴格傳輸安全性

Google 維護[一個 HSTS 預加載服務](https://hstspreload.org/)。通過遵循指南並成功提交你的域，你可以確保瀏覽器僅通過安全連接訪問你的域。儘管服務由 Google 託管，但所有瀏覽器都在使用這個預加載列表。然而，它不是 HSTS 規範的一部分，不應被視為官方的。

- 有關 Chrome 中 HSTS 預加載列表的訊息：<https://www.chromium.org/hsts>
- 查閱 Firefox 的 HSTS 預加載列表：[nsSTSPreloadList.inc](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc)

## 範例

所有當前和未來的子域在 `max-age` 為 1 年的時間內都將使用 HTTPS。
這會阻止僅能通過 HTTP 提供的頁面或子域的訪問。

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

儘管對於域來說，1 年的 `max-age` 是可以接受的，但建議值是 2 年，如 <https://hstspreload.org> 所解釋。

在下面的範例中，`max-age` 設置為 2 年，並加上 `preload`，這是包含在所有主要網頁瀏覽器的 HSTS 預加載列表（如 Chromium、Edge 和 Firefox）中的必要條件。

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 部落格文章：[HTTP Strict Transport Security 已經上線！](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html)
- 部落格文章：[HTTP Strict Transport Security（強制使用 HTTPS）](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/)
- OWASP 文章：[HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
- 維基百科：[HTTP Strict Transport Security](https://zh.wikipedia.org/wiki/HTTP严格传输安全)
- [HSTS 預加載服務](https://hstspreload.org/)
- [僅限安全上下文的功能](/zh-TW/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
