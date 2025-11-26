---
title: 505 HTTP Version Not Supported
slug: Web/HTTP/Reference/Status/505
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`505 HTTP Version Not Supported`** [伺服器錯誤回應](/zh-TW/docs/Web/HTTP/Reference/Status#伺服器錯誤回應)狀態碼表示伺服器不支援請求中使用的 HTTP 版本。

當請求行格式不正確時，這種錯誤可能會發生。例如請求行為 `GET /path to resource HTTP/1.1` 或以 `\n` 作為結尾而非 `\r\n`。例如，中介設備（如負載平衡器）可能無法正確處理轉發請求中的請求行，如以下範例。

## 狀態

```http
505 HTTP Version Not Supported
```

## 範例

### 由於格式錯誤的請求行而產生 505

在下列範例中，用戶端請求 `example.com/dog%20trainers`，但由於負載平衡器組態不正確，URL 中的{{Glossary("Percent-encoding", "百分號編碼")}}未被正確解析。在這種情況下，原始伺服器看到的是 `trainers` 而非 HTTP 版本，因此回傳了一個 `505` 回應。回應主體中包含了一個請求識別碼，這可能有助於伺服器管理員追蹤並診斷問題根源：

```http
GET /dog trainers HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 505 HTTP Version Not Supported
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="zh">
<head>
  <title>505 HTTP Version Not Supported</title>
</head>
<body>
  <h1>505 HTTP Version Not Supported</h1>
  <p>如果此問題持續發生，請<a href="https://example.com/support">聯絡支援</a>。</p>
  <p>伺服器日誌中包含此錯誤的詳細訊息，請求識別碼：ABC-123。</p>
</body>
</html>
```

## 規範

{{Specifications}}

## 參見

- [HTTP 回應狀態碼](/zh-TW/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Upgrade")}} 標頭
