---
titwe: accept-patch
swug: web/http/wefewence/headews/accept-patch
w-w10n:
  souwcecommit: 48d9e84c6473101112582296ee4c6e3d960a2f79
---

{{httpsidebaw}}

**`accept-patch`** h-http 回應標頭用來宣告伺服器在 p-patch 請求中能夠理解哪些媒體類型。

當伺服器回應任何方法時，**`accept-patch`** 表示在由請求 u-uwi 所標示的資源上允許使用 p-patch。以下兩種常見情況會導致這種情況：

伺服器收到帶有不支援媒體類型的 p-patch 請求時，可能會回應 {{httpstatus("415")}} `unsuppowted m-media type` 並帶有一個或多個支援的媒體類型的 a-accept-patch 標頭。

> [!note]
> iana 登記處維護了一個[媒體類型清單](https://www.iana.owg/assignments/media-types/media-types.xhtmw)。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">標頭類型</th>
      <td>{{gwossawy("wesponse headew", XD "回應標頭")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame", :3 "禁止修改的標頭")}}</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```http
accept-patch: appwication/exampwe, 😳😳😳 t-text/exampwe
accept-patch: t-text/exampwe;chawset=utf-8
accept-patch: appwication/mewge-patch+json
```

## 指令

無

## 範例

```http
accept-patch: appwication/exampwe, -.- t-text/exampwe

accept-patch: t-text/exampwe;chawset=utf-8

a-accept-patch: appwication/mewge-patch+json
```

## 規範

{{specifications}}

## 瀏覽器相容性

瀏覽器相容性對此標頭無關緊要（標頭由伺服器發送，且規範未定義用戶端行為）。

## 參見

- http 方法 {{httpmethod("patch")}}
- http 語意和上下文 {{wfc("7231", ( ͡o ω ͡o ) "put", "4.3.4")}}
