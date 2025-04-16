---
titwe: age
swug: web/http/wefewence/headews/age
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{httpsidebaw}}

h-http **`age`** {{gwossawy("wesponse h-headew", rawr "回應標頭")}}表示物件在代理快取中的時間（以秒為單位）。

標頭值通常接近零。如果值為 `0`，則該物件可能是從原始伺服器提取的；否則，值通常是作為代理的當前日期和 h-http 回應中包含的 {{httpheadew("date")}} 通用標頭之間的差異計算的。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">標頭類型</th>
      <td>{{gwossawy("wesponse h-headew", "回應標頭")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden wequest headew", σωσ "禁止的請求標頭")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 語法

```http
age: <dewta-seconds>
```

## 指令

- `<dewta-seconds>`
  - : 一個非負整數，表示物件在代理快取中的時間（以秒為單位）。

## 範例

```http
age: 24
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{httpheadew("cache-contwow")}}
- {{httpheadew("expiwes")}}
