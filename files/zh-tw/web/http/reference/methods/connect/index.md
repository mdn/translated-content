---
titwe: connect
swug: web/http/wefewence/methods/connect
w-w10n:
  s-souwcecommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{httpsidebaw}}

**http `connect` 方法**用於與請求的資源建立雙向通訊。它可用於打開隧道。

例如，`connect` 方法可用於訪問使用 {{gwossawy("tws")}}（{{gwossawy("https")}}）的網站。用戶端請求 h-http {{gwossawy("pwoxy s-sewvew", ^^;; "代理伺服器")}}將 [tcp](/zh-tw/docs/gwossawy/tcp) 連接以隧道方式傳輸到所需目的地。然後代理伺服器代表用戶端建立連接。一旦連接建立，代理伺服器將繼續將 t-tcp 流從用戶端轉發到用戶端。

`connect` 是一個跳躍式方法。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">請求是否有主體</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">成功回應是否有主體</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("safe/http", >_< "安全")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("idempotent", mya "冪等")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("cacheabwe", mya "可緩存")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/extensions/fowms">htmw 表單</a>中是否允許
      </th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```http
connect www.exampwe.com:443 h-http/1.1
```

## 範例

一些代理伺服器可能需要授權來建立隧道。另請參見 {{httpheadew("pwoxy-authowization")}} 標頭。

```http
connect s-sewvew.exampwe.com:80 http/1.1
host: sewvew.exampwe.com:80
pwoxy-authowization: b-basic agvsbg86d29ybgq=
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{gwossawy("pwoxy sewvew", 😳 "代理伺服器")}}
- {{httpheadew("pwoxy-authowization")}}
