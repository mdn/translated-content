---
title: X-Frame-Options 回應標頭
slug: Web/HTTP/Reference/Headers/X-Frame-Options
---

`X-Frame-Options` [HTTP](/zh-TW/docs/Web/HTTP) 回應標頭 (header) 用來指示文件是否能夠透過 {{ HTMLElement("frame") }}、{{ HTMLElement("iframe") }} 以及 {{ HTMLElement("object") }} 載入。網站可以利用 `X-Frame-Options` 來確保本身內容不會遭惡意嵌入到其他網站、避免 [clickjacking](/zh-TW/docs/Web/Security/Types_of_attacks#click-jacking) 攻擊。

僅當訪問文件的用戶使用支持 `X-Frame-Options` 的瀏覽器時，才提供附加的安全性。

> [!NOTE]
> 在支援的瀏覽器中，{{HTTPHeader("Content-Security-Policy")}} 的 {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} 指令標準已經[取代](https://www.w3.org/TR/CSP2/#frame-ancestors-and-frame-options)了非標準的 `X-Frame-Options`。

## 使用 X-Frame-Options

共有三種值：

- `DENY`
  - : 表示網頁無論如何都無法被嵌入到 frame 中，即使於相同網域內嵌入也不允許。
- `SAMEORIGIN`
  - : 唯有當符合[同源政策](/zh-TW/docs/Web/Security/Defenses/Same-origin_policy)下，才能被嵌入到 frame 中。
- `ALLOW-FROM uri` {{deprecated_inline}}
  - : 唯有列表許可的 URI 才能嵌入到 frame 中。新版瀏覽器已不再支援此指令。

### 設定 Apache

請加入以下指令到網站組態設定檔：

```plain
Header always append X-Frame-Options SAMEORIGIN
```

### 設定 nginx

請加入以下指令到 http, server 或 location 組態設定檔:

```plain
add_header X-Frame-Options SAMEORIGIN;
```

### 設定 IIS

請加入以下指令到網站的 Web.config 檔:

```plain
<system.webServer>
  ...

  <httpProtocol>
    <customHeaders>
      <add name="X-Frame-Options" value="SAMEORIGIN" />
    </customHeaders>
  </httpProtocol>

  ...
</system.webServer>
```

### 設定 HAProxy

請加入以下指令到 frontend, listen, 或 backend 組態設定檔:

```plain
rspadd X-Frame-Options:\ SAMEORIGIN
```

> [!NOTE]
> 設定 Meta tag 是無效的，像是 \<meta http-equiv="X-Frame-Options" content="deny"> 便沒有任何效果，只有透過設定 HTTP header 才有效果，請勿採用。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 延伸閱讀

- {{HTTPHeader("Content-Security-Policy")}} 的 {{HTTPHeader("Content-Security-Policy/frame-ancestors", "frame-ancestors")}} 指令
- [HTTP Header Field X-Frame-Options - RFC 7034](https://datatracker.ietf.org/doc/html/rfc7034)
- [ClickJacking Defenses - IEBlog](https://learn.microsoft.com/zh-tw/archive/blogs/ie/ie8-security-part-vii-clickjacking-defenses)
- [Combating ClickJacking with X-Frame-Options - IEInternals](https://learn.microsoft.com/zh-tw/archive/blogs/ieinternals/combating-clickjacking-with-x-frame-options)
