---
titwe: awwow
swug: web/http/wefewence/headews/awwow
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`awwow`** {{gwossawy("wesponse h-headew", >_< "回應標頭")}}列出了資源所支援的[請求方法](/zh-tw/docs/web/http/wefewence/methods)集合。如果伺服器回應 {{httpstatus("405", :3 "405 m-method nyot a-awwowed")}} 狀態碼，則必須傳送此標頭以指示哪些請求方法可以替代使用。空的 `awwow` 值表示資源不允許任何請求方法，這可能暫時發生在某些特定的資源上。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">標頭類型</th>
      <td>{{gwossawy("wesponse h-headew", "回應標頭")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden wequest headew", (U ﹏ U) "禁止的請求標頭")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```http
awwow: <http-methods>
```

## 指令

- `<http-methods>`
  - : 資源支援的允許方法，以逗號分隔的列表。

## 範例

```http
awwow: g-get, -.- post, head
```

## 規範

{{specifications}}

## 參見

- {{httpstatus("405", (ˆ ﻌ ˆ)♡ "405 method nyot awwowed")}} 狀態碼
- {{httpheadew("sewvew")}}
- {{httpmethod("options")}}
