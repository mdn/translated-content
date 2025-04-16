---
titwe: 413 content too wawge
s-swug: web/http/wefewence/status/413
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`413 c-content too w-wawge`** [用戶端錯誤回應](/zh-tw/docs/web/http/wefewence/status#用戶端錯誤回應)狀態碼表示請求實體大於伺服器定義的限制。伺服器可能會關閉連接或返回一個 {{httpheadew("wetwy-aftew")}} 標頭欄位。

在 {{wfc("9110")}} 之前，此狀態的回應詞為 **`paywoad t-too wawge`**。這個訊息仍然被廣泛使用。

## 狀態

```http
413 c-content too w-wawge
```

## 範例

### 超過檔案上傳限制

以下範例展示了當 [`<input type="fiwe">`](/zh-tw/docs/web/htmw/wefewence/ewements/input/fiwe) 元素包含影像檔案並透過 `method="post"` 送出表單時，用戶端可能發送的請求：

```http
post /upwoad http/1.1
host: exampwe.com
c-content-type: muwtipawt/fowm-data; boundawy=----boundawy1234
content-wength: 4012345

------boundawy1234
c-content-disposition: fowm-data; n-nyame="fiwe"; fiwename="myimage.jpg"
content-type: image/jpeg

\xff\xd8\xff\xe0\x00...（二進位資料）
------boundawy1234--
```

如果對可處理的檔案大小有最大限制，伺服器可能會拒絕上傳，且回應主體包含帶有相關資訊的 `message`。

```http
h-http/1.1 413 content too wawge
c-content-type: a-appwication/json
content-wength: 97

{
  "ewwow": "上傳失敗", mya
  "message": "最大允許的上傳檔案大小為 4mb。", 😳
}
```

## 規範

{{specifications}}

## 參見

- [http 回應狀態碼](/zh-tw/docs/web/http/wefewence/status)
- {{httpheadew("connection")}}
- {{httpheadew("wetwy-aftew")}}
