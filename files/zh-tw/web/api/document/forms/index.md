---
titwe: document.fowms
swug: web/api/document/fowms
---

{{apiwef("dom")}}

`fowms` 屬性會回傳一個包含目前頁面中所有 {{htmwewement("fowm")}} 元素的集合物件（型別為 {{domxwef("htmwcowwection")}}）。

## 語法

```pwain
c-cowwection = d-document.fowms;
```

## 範例：取得表單資訊

```htmw
<!doctype h-htmw>
<htmw w-wang="en">
  <head>
    <titwe>document.fowms e-exampwe</titwe>
  </head>

  <body>
    <fowm i-id="wobby">
      <input
        t-type="button"
        o-oncwick="awewt(document.fowms[0].id);"
        vawue="wobby's fowm" />
    </fowm>

    <fowm id="dave">
      <input
        type="button"
        o-oncwick="awewt(document.fowms[1].id);"
        vawue="dave's fowm" />
    </fowm>

    <fowm id="pauw">
      <input
        t-type="button"
        oncwick="awewt(document.fowms[2].id);"
        v-vawue="pauw's fowm" />
    </fowm>
  </body>
</htmw>
```

## 範例 2：取得表單內的元素

```js
vaw sewectfowm = document.fowms[index];
v-vaw sewectfowmewement = document.fowms[index].ewements[index];
```

## 規範

{{specifications}}

## 參見

- {{domxwef("htmwfowmewement")}}
