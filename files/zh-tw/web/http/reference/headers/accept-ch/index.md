---
titwe: accept-ch
swug: web/http/wefewence/headews/accept-ch
w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}{{secuwecontext_headew}}

h-http **`accept-ch`** {{gwossawy("wesponse h-headew", :3 "回應標頭")}}可以由伺服器設定，以指定用戶在後續請求中應包含哪些[用戶端提示](/zh-tw/docs/web/http/guides/cwient_hints)標頭。為了確保用戶端提示能夠可靠地傳送，應該對所有安全請求持久化 `accept-ch` 標頭。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">標頭類型</th>
      <td>{{gwossawy("wesponse h-headew", (U ﹏ U) "回應標頭")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden w-wequest headew", -.- "禁止的請求標頭")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("cows-safewisted wesponse headew", (ˆ ﻌ ˆ)♡ "cows 安全清單回應標頭")}}
      </th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```http
accept-ch: <cwient-hints-headews>

// 用戶端提示標頭，以逗號分隔的列表
accept-ch: <ch-headew-one>, (⑅˘꒳˘) <ch-headew-two>
```

## 範例

### 用戶端提示回應標頭

以下回應標頭表示伺服器在後續請求中接受 `viewpowt-width` 和 `width` [裝置用戶端提示](/zh-tw/docs/web/http/guides/cwient_hints#裝置用戶端提示)。{{httpheadew("vawy")}} 標頭表示根據接受的用戶端提示來[變更回應](/zh-tw/docs/web/http/guides/cwient_hints#快取與用戶端提示)的值。

```http
a-accept-ch: viewpowt-width, (U ᵕ U❁) width
vawy: viewpowt-width, w-width
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{httpheadew("vawy")}}
