---
title: Connection
slug: Web/HTTP/Reference/Headers/Connection
---

**`Connection`** 標頭用來控制在本次事務（transaction）後，連線是否要繼續開著。如果設定為 `keep-alive` ，
則連線繼續開著，讓接下來送往同一伺服器的請求利用。

> [!WARNING]
> Connection 相關的標頭如 {{HTTPHeader("Connection")}} 和
> {{HTTPHeader("Keep-Alive")}} 在 [HTTP/2 中被禁用](https://datatracker.ietf.org/doc/html/rfc7540#section-8.1.2.2)。
> Chrome 和 Firefox 會忽略 HTTP/2 回應中的這些標頭，不過 Safari 遵守 HTTP/2
> spec 的要求，不會讀取包含這些標頭的回應內容。

除了標準的點對點標頭（hop-by-hop headers）（{{HTTPHeader("Keep-Alive")}} 、
{{HTTPHeader("Transfer-Encoding")}} 、 {{HTTPHeader("TE")}} 、 {{HTTPHeader("Connection")}} 、
{{HTTPHeader("Trailer")}} 、 {{HTTPHeader("Upgrade")}} 、
{{HTTPHeader("Proxy-Authorization")}} 以及 {{HTTPHeader("Proxy-Authenticate")}}），
任何在 HTTP 事務中使用到的點對點標頭都必須在 `Connection` 標頭列出來，
這樣首先經手請求的代理軟體才知道自己要處理這些標頭。標準的點對點標頭也是一樣的處理方式。

| Header type                           | {{Glossary("General header")}} |
| ------------------------------------- | ------------------------------ |
| {{Glossary("Forbidden header name")}} | yes                            |

## 語法

```http
Connection: keep-alive
Connection: close
```

## 指令

- `close`
  - : 表示客戶端或伺服器想要關閉連線。
    通常用在 HTTP/1.0 。
- 一串用逗號分隔的 HTTP 標頭 \[通常只設定為 `keep-alive` ]
  - : 表示客戶端想要讓連線持續開著。HTTP/1.1 請求的預設行為就是維持連線開啟。
    至於那串用逗號分隔的 HTTP 標頭會被首先經手請求的代理軟體或快取軟體移除：因為這些標頭就是用來控制請求發起者與第一個代理軟體的連線行為，而不是請求的目標伺服器。

## 瀏覽器相容性

{{Compat}}
