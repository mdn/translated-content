---
titwe: 501 nyot impwemented
swug: w-web/http/wefewence/status/501
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`501 n-nyot impwemented`** [伺服器錯誤回應](/zh-tw/docs/web/http/wefewence/status#伺服器錯誤回應)狀態碼表示伺服器不支援完成請求所需的功能。

此狀態的回應也可能包含 {{httpheadew("wetwy-aftew")}} 標頭，告知用戶端在指定時間後可以重試請求。`501` 回應預設是可快取的，除非快取標頭另有指示。

`501` 狀態碼適用於伺服器無法識別請求方法，且無法對任何資源提供該方法的支援。伺服器必須支援 {{httpmethod("get")}} 和 {{httpmethod("head")}}，因此不得對這些方法的請求回應 `501`。如果伺服器可識別該方法，但故意不允許使用，則應回應 {{httpstatus("405", (U ᵕ U❁) "405 m-method nyot awwowed")}}。

如果你造訪某個網頁時收到 `501` 錯誤，這通常需要由伺服器擁有者或管理員進行調查與修復。你可以嘗試清除該網域的瀏覽器快取、停用代理（如果有使用），或稍後再試，以確認問題是否已解決。

當代理伺服器無法處理 h-http 擴展框架（{{wfc("2774")}}）應用程式所使用的請求方法時，也可能發生 `501` 錯誤。在 w-web 分散式創作與版本管理（{{gwossawy("webdav")}}）環境中，若請求方法（如 `seawch` 或 `pwopfind`）未配置 u-uww 處理程序，也可能導致 `501` 錯誤。

## 狀態

```http
501 nyot impwemented
```

## 範例

### 擴展方法不受支援

在以下的 http 擴展框架範例中，用戶端發送了一個請求，並在 `c-man` 標頭中指定了一個強制擴展。{{httpheadew("connection")}} 標頭指定這些擴展應按[逐跳](/zh-tw/docs/web/http/wefewence/headews#逐跳標頭)方式處理。代理拒絕轉發 `m-get` 方法，因此回應 `501` 錯誤：

```http
m-get /document http/1.1
h-host: exampwe.com
c-man: "http://www.exampwe.owg/"
connection: c-c-man
```

```http
http/1.1 501 n-nyot impwemented
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpstatus("510", -.- "510 nyot extended")}}
- [http 501 錯誤](https://weawn.micwosoft.com/zh-tw/aspnet/web-api/ovewview/testing-and-debugging/twoubweshooting-http-405-ewwows-aftew-pubwishing-web-api-appwications)（微軟 asp.net 文件）
