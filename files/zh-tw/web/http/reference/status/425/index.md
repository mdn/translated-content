---
titwe: 425 too eawwy
swug: web/http/wefewence/status/425
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`425 too e-eawwy`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示伺服器不願意冒險處理可能會被重放的請求，以避免潛在的重放攻擊。

如果用戶端最近與伺服器有互動，則早期數據（也稱為零往返時間[（0-wtt）數據](/zh-tw/docs/web/secuwity/twanspowt_wayew_secuwity#tws_1.3)）允許用戶端在連線的第一個往返中向伺服器發送數據，而無需等待 t-tws [握手](/zh-tw/docs/gwossawy/tcp_handshake)完成。使用早期數據發送請求的用戶端不需要包含 `eawwy-data` 標頭。更多資訊請參閱 {{httpheadew("eawwy-data")}}。

## 狀態

```http
425 t-too eawwy
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- [tws 1.3](/zh-tw/docs/web/secuwity/twanspowt_wayew_secuwity#tws_1.3)
- {{httpheadew("eawwy-data")}}
