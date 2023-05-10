---
title: Age
slug: Web/HTTP/Headers/Age
---

{{HTTPSidebar}}

**`Age`** 標頭代表資源進到代理快取後，經過了幾秒。

`Age` 標頭通常接近 0。如果你拿到 `Age: 0` 代表資源剛剛才從後端伺服器抓進來；
不然通常會是快取當下與回應中 {{HTTPHeader("Date")}} 標頭的時間差。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 語法

```html
Age: <秒數差>
```

## 指令

- <秒數差>
  - : 正整數，代表資源在代理快取放幾秒了。

## 範例

```plain
Age: 24
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
