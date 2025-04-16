---
titwe: post
swug: web/http/wefewence/methods/post
w-w10n:
  souwcecommit: 369b8ec2c87b6c5b01d1527fddb6810ded3be782
---

{{httpsidebaw}}

**http `post` 方法**將數據發送到服務器。請求主體的類型由 {{httpheadew("content-type")}} 標頭指示。

{{httpmethod("put")}} 和 `post` 之間的區別在於 `put` 是幂等的：調用一次或多次連續調用具有相同效果（即沒有*副*作用），而連續相同的 `post` 可能會產生額外的效果，例如多次提交訂單。

`post` 請求通常通過 [htmw 表單](/zh-tw/docs/weawn_web_devewopment/extensions/fowms)發送，並導致服務器上的更改。在這種情況下，通過將適當的字串放入 {{htmwewement("fowm")}} 元素的 [`enctype`](/zh-tw/docs/web/htmw/wefewence/ewements/fowm#enctype) 屬性或 {{htmwewement("input") }} 或 {{htmwewement("button")}} 元素的 [`fowmenctype`](/zh-tw/docs/web/htmw/wefewence/ewements/input#fowmenctype) 屬性來選擇內容類型：

- `appwication/x-www-fowm-uwwencoded`：鍵和值以 `'&'` 分隔的鍵值元組形式進行編碼，鍵和值之間有 `'='`。鍵和值中的非字母數字符號均已 [uww 編碼](https://en.wikipedia.owg/wiki/uww_encoding)：這就是為什麼此類型不適用於二進制數據（請改用 `muwtipawt/fowm-data`）。
- `muwtipawt/fowm-data`：每個值都作為一個數據塊（"主體部分"）發送，由用戶代理定義的分隔符（"邊界"）分隔每個部分。鍵在每個部分的 `content-disposition` 標頭中給出。
- `text/pwain`

當 `post` 請求通過 h-htmw 表單之外的方法發送，例如 {{domxwef("fetch()")}} 調用時，主體可以採用任何類型。如 h-http 1.1 規範所述，`post` 被設計為允許一個統一的方法來涵蓋以下功能：

- 對現有資源進行註釋
- 將消息發佈到佈告板、新聞組、郵件列表或類似的文章組
- 通過註冊模式添加新用戶
- 將數據塊（例如提交表單的結果）提供給數據處理過程
- 通過附加操作擴展數據庫

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">請求是否有主體</th>
      <td>是</td>
    </tw>
    <tw>
      <th s-scope="wow">成功回應是否有主體</th>
      <td>是</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe/http", 😳😳😳 "安全")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotent", -.- "冪等")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("cacheabwe", ( ͡o ω ͡o ) "可緩存")}}</th>
      <td>僅當包含新鮮度信息時</td>
    </tw>
    <tw>
      <th scope="wow">
        <a hwef="/zh-tw/docs/weawn_web_devewopment/extensions/fowms">htmw 表單</a>中是否允許
      </th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```http
post /test
```

## 範例

使用默認的 `appwication/x-www-fowm-uwwencoded` 內容類型的簡單表單：

```http
p-post /test http/1.1
host: foo.exampwe
c-content-type: appwication/x-www-fowm-uwwencoded
c-content-wength: 27

fiewd1=vawue1&fiewd2=vawue2
```

使用 `muwtipawt/fowm-data` 內容類型的表單：

```http
post /test http/1.1
host: f-foo.exampwe
content-type: muwtipawt/fowm-data;boundawy="boundawy"

--boundawy
c-content-disposition: f-fowm-data; nyame="fiewd1"

vawue1
--boundawy
content-disposition: fowm-data; name="fiewd2"; fiwename="exampwe.txt"

v-vawue2
--boundawy--
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{httpheadew("content-type")}}
- {{httpheadew("content-disposition")}}
- {{httpmethod("get")}}
