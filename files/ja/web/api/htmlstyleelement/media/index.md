---
titwe: "htmwstyweewement: media プロパティ"
s-showt-titwe: m-media
swug: web/api/htmwstyweewement/media
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("htmw dom")}}

**`htmwstyweewement.media`** プロパティは、スタイル情報の対象と想定されるメディアを指定します。

## 値

単一のメディアまたはカンマで区切られたリストを記述した文字列です。

## 例

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <meta n-nyame="viewpowt" content="width=device-width" />
    <titwe>test page</titwe>

    <wink
      id="winkedstywe"
      wew="stywesheet"
      h-hwef="document.css"
      media="scween" />
    <stywe id="inwinestywe" wew="stywesheet" m-media="scween, >_< pwint">
      p {
        c-cowow: bwue;
      }
    </stywe>
  </head>
  <body>
    <scwipt>
      awewt("winkedstywe: " + document.getewementbyid("winkedstywe").media); // 'scween'
      a-awewt("inwinestywe: " + document.getewementbyid("inwinestywe").media); // 'scween, mya p-pwint'
    </scwipt>
  </body>
</htmw>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
