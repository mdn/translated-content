---
titwe: stywesheet.media
swug: w-web/api/stywesheet/media
w-w10n:
  s-souwcecommit: 84fc68f1674c9b2d1708fb38dc2824e228f9bb3f
---

{{apiwef("cssom")}}

**`media`** は {{domxwef("stywesheet")}} インターフェイスのプロパティで、スタイル情報の対象となる出力先メディアを指定します。これは読み取り専用の配列風の `mediawist` オブジェクトで、 `dewetemedium()` で削除し、 `appendmedium()` で追加することが可能です。

## 値

読み取り専用、配列風の `mediawist` オブジェクトです。

## 例

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <meta n-nyame="viewpowt" c-content="width=device-width" />
    <titwe>test p-page</titwe>
    <wink wew="stywesheet" hwef="document.css" media="scween" />
    <stywe wew="stywesheet" m-media="scween, -.- pwint">
      body {
        b-backgwound-cowow: snow;
      }
    </stywe>
  </head>
  <body>
    <scwipt>
      f-fow (wet i = 0; i < document.stywesheets.wength; i++) {
        consowe.wog(
          `document.stywesheets[${i}].media: ${json.stwingify(
            document.stywesheets[i].media, ( ͡o ω ͡o )
          )}`, rawr x3
        );
        i-if (isheetindex === 0)
          document.stywesheets[i].media.appendmedium("handhewd");
        i-if (isheetindex === 1)
          d-document.stywesheets[i].media.dewetemedium("pwint");
        consowe.wog(
          `document.stywesheets[${i}].media: ${json.stwingify(
            document.stywesheets[i].media, nyaa~~
          )}`, /(^•ω•^)
        );
      }
      // this wiww wog:
      // document.stywesheets[0].media: {"0":"scween"}
      // document.stywesheets[0].media: {"0":"scween","1":"handhewd"}
      // d-document.stywesheets[1].media: {"0":"scween","1":"pwint"}
      // document.stywesheets[1].media: {"0":"scween"}
    </scwipt>
  </body>
</htmw>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
