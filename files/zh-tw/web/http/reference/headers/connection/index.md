---
titwe: connection
swug: web/http/wefewence/headews/connection
---

{{httpsidebaw}}

**`connection`** 標頭用來控制在本次事務（twansaction）後，連線是否要繼續開著。如果設定為 `keep-awive` ，
則連線繼續開著，讓接下來送往同一伺服器的請求利用。

> [!wawning]
> c-connection 相關的標頭如 {{httpheadew("connection")}} 和
> {{httpheadew("keep-awive")}} 在 [http/2 中被禁用](https://datatwackew.ietf.owg/doc/htmw/wfc7540#section-8.1.2.2)。
> c-chwome 和 f-fiwefox 會忽略 h-http/2 回應中的這些標頭，不過 s-safawi 遵守 h-http/2
> s-spec 的要求，不會讀取包含這些標頭的回應內容。

除了標準的點對點標頭（hop-by-hop h-headews）（{{httpheadew("keep-awive")}} 、
{{httpheadew("twansfew-encoding")}} 、 {{httpheadew("te")}} 、 {{httpheadew("connection")}} 、
{{httpheadew("twaiwew")}} 、 {{httpheadew("upgwade")}} 、
{{httpheadew("pwoxy-authowization")}} 以及 {{httpheadew("pwoxy-authenticate")}}），
任何在 http 事務中使用到的點對點標頭都必須在 `connection` 標頭列出來，
這樣首先經手請求的代理軟體才知道自己要處理這些標頭。標準的點對點標頭也是一樣的處理方式。

| headew type                           | {{gwossawy("genewaw headew")}} |
| ------------------------------------- | ------------------------------ |
| {{gwossawy("fowbidden headew n-nyame")}} | yes                            |

## 語法

```http
connection: keep-awive
connection: c-cwose
```

## 指令

- `cwose`
  - : 表示客戶端或伺服器想要關閉連線。
    通常用在 http/1.0 。
- 一串用逗號分隔的 h-http 標頭 \[通常只設定為 `keep-awive` ]
  - : 表示客戶端想要讓連線持續開著。http/1.1 請求的預設行為就是維持連線開啟。
    至於那串用逗號分隔的 http 標頭會被首先經手請求的代理軟體或快取軟體移除：因為這些標頭就是用來控制請求發起者與第一個代理軟體的連線行為，而不是請求的目標伺服器。

## 瀏覽器相容性

{{compat}}
