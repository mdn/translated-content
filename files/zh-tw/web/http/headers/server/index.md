---
title: Server
slug: Web/HTTP/Headers/Server
---

{{HTTPSidebar}}

**`Server`** 標頭描述處理請求的伺服器軟體資訊：也就是產生回應的伺服器資訊。

> **警告：** 請避免 Server 值的資訊過度冗長與詳盡，因為它們可能會洩漏實做細節、讓攻擊者容易找到已知安全漏洞並利用之。

| 標頭類型                                         | {{Glossary("Response header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | 否                                       |

## 語法

```plain
Server: <product>
```

## 指令

- \<product>
  - : 處理請求的軟體（或組件）名。語法通常與 {{HTTPHeader('User-Agent')}} 相似。

How much detail to include is an interesting balance to strike; exposing the OS version is probably a bad idea, as mentioned in the earlier warning about overly-detailed values. However, exposed Apache versions helped browsers work around a bug those versions had with {{HTTPHeader('Content-Encoding')}} combined with {{HTTPHeader('Range')}}.

## 示例

```plain
Server: Apache/2.4.1 (Unix)
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTTPHeader("Allow")}}
