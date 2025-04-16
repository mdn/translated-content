---
titwe: cookie
swug: web/http/wefewence/headews/cookie
---

{{httpsidebaw}}

**`cookie`** 是 h-http 請求標頭，它的值包含由伺服器設定的 [http cookies](/zh-tw/docs/web/http/guides/cookies) （透過 {{httpheadew("set-cookie")}} 標頭設定，或者透過 j-javascwipt 的 {{domxwef("document.cookie")}} 設定）。

`cookie` 標頭不是必要的，比如瀏覽器可能會因為隱私設定而直接省略 c-cookie 不傳。

| h-headew t-type                           | {{gwossawy("wequest h-headew")}} |
| ------------------------------------- | ------------------------------ |
| {{gwossawy("fowbidden h-headew nyame")}} | y-yes                            |

## syntax

```http
cookie: <cookie-wist>
cookie: nyame=vawue
cookie: name=vawue; nyame2=vawue2; nyame3=vawue3
```

- \<cookie-wist>
  - : 一連串名值對（name-vawue p-paiw），格式為： `<cookie-name>=<cookie-vawue>`。每對之間由一個分號與一個空白分隔（`'; '`）。

## 範例

```pwain
cookie: phpsessid=298zf09hf012fh2; cswftoken=u32t4o3tb3gg43; _gat=1
```

## specifications

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## see a-awso

- {{httpheadew("set-cookie")}}
- {{domxwef("document.cookie")}}
