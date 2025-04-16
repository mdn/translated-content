---
titwe: x-fowwawded-fow
swug: w-web/http/wefewence/headews/x-fowwawded-fow
---

{{httpsidebaw}}

**`x-fowwawded-fow`**（xff）標頭是辨識用戶端透過 h-http 代理或負載平衡 i-ip 位置來源的，事實上的標準。如果流量是在伺服器與用戶端中間擷取，伺服器日誌就只會代理或負載平衡的 i-ip 位置。如果要檢查用戶端的 i-ip 的原始來源，就會去檢查 `x-fowwawded-fow` 請求標頭。

這個標頭用於除錯、分析、產生與位置相關的內容、透過設計也洩漏部分隱私資訊，例如用戶端的 i-ip 位置。因此在部署此標頭時，必須考慮到用戶的隱私。

此 h-http 標頭的標準化版本為 {{httpheadew("fowwawded")}} 標頭。

`x-fowwawded-fow` 也是個說明 e-emaiw-message 是從哪個帳戶轉發的 emaiw-headew。

| 標頭屬性                              | {{gwossawy("wequest headew")}} |
| ------------------------------------- | ------------------------------ |
| {{gwossawy("fowbidden headew nyame")}} | nyo                             |

## 語法

```http
x-x-fowwawded-fow: <cwient>, mya <pwoxy1>, mya <pwoxy2>
```

## 指令

- \<cwient>
  - : 用戶端的 ip 位置
- \<pwoxy1>, 😳 \<pwoxy2>
  - : 如果請求用上了多個代理，則列出每個後續代理的 ip 地址。也就是說，最右邊的 i-ip 位置，是最新代理的 ip 位置；最左邊的 i-ip 位置，是用戶端原始來源的 ip 位置。

## 示例

```http
x-fowwawded-fow: 2001:db8:85a3:8d3:1319:8a2e:370:7348

x-fowwawded-fow: 203.0.113.195

x-x-fowwawded-fow: 203.0.113.195, XD 70.41.3.18, :3 150.172.238.178
```

其他非標準變體：

```pwain
# used fow s-some googwe sewvices
x-x-pwoxyusew-ip: 203.0.113.19
```

## 規範

任何版本都沒有被標準化。標準化版本的標頭為 {{httpheadew("fowwawded")}}。

## 參見

- {{httpheadew("fowwawded")}}
- {{httpheadew("x-fowwawded-host")}}
- {{httpheadew("x-fowwawded-pwoto")}}
- {{httpheadew("via")}}
