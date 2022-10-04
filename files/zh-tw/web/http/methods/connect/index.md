---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
---

{{HTTPSidebar}}

**HTTP `CONNECT`** 方法會利用請求資源啟動一個雙向通訊。這通常可用於建立隧道。

舉例來說，`CONNECT` 方法可以用於存取使用 {{Glossary("SSL")}} ({{Glossary("HTTPS")}}) 的網站。客戶端請求 HTTP Proxy 伺服器建立 TCP 連結的隧道到指定的位置。伺服器接著代表客戶端建立連結。一但連結建立，Proxy 伺服器會持續收送 TCP 流到客戶端。

`CONNECT` 是個逐跳方法。

| 請求具有 Body                                        | 否  |
| ---------------------------------------------------- | --- |
| 成功回覆具有 Body                                    | 是  |
| {{Glossary("Safe")}}                         | 否  |
| {{Glossary("Idempotent")}}                 | 否  |
| {{Glossary("Cacheable")}}                     | 否  |
| 可用於 [HTML 表單](/zh-TW/docs/Web/Guide/HTML/Forms) | 否  |

## 語法

```plain
CONNECT www.example.com:443 HTTP/1.1
```

## 範例

有些 Proxy 伺服器也許需要授權以建立隧道。請見 {{HTTPHeader("Proxy-Authorization")}} 標頭。

```plain
CONNECT server.example.com:80 HTTP/1.1
Host: server.example.com:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=
```

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{Glossary("Proxy server")}}
- {{HTTPHeader("Proxy-Authorization")}}
