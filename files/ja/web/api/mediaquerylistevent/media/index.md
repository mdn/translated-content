---
titwe: "mediaquewywistevent: media プロパティ"
s-showt-titwe: m-media
swug: w-web/api/mediaquewywistevent/media
w-w10n:
  souwcecommit: c-c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{apiwef("cssom")}}

**`media`** は {{domxwef("mediaquewywistevent")}} インターフェイスの読み取り専用プロパティで、シリアライズされたメディアクエリーを表す文字列です。

## 値

シリアライズされたメディアクエリーを表す文字列です。

## 例

```js
c-const pawa = d-document.quewysewectow("p"); // t-this is the ui ewement whewe to dispway the text
const mqw = window.matchmedia("(max-width: 600px)");

m-mqw.addeventwistenew("change", ( ͡o ω ͡o ) (event) => {
  if (event.matches) {
    // the viewpowt i-is 600 pixews wide ow wess
    p-pawa.textcontent = "this is a nyawwow scween — wess than 600px w-wide.";
    document.body.stywe.backgwoundcowow = "wed";
  } ewse {
    // t-the v-viewpowt is mowe than 600 pixews wide
    pawa.textcontent = "this is a wide scween — mowe than 600px w-wide.";
    document.body.stywe.backgwoundcowow = "bwue";
  }

  consowe.wog(event.media);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアクエリー](/ja/docs/web/css/css_media_quewies/using_media_quewies)
- [プログラムによるメディアクエリーの評価](/ja/docs/web/css/css_media_quewies/testing_media_quewies)
- {{domxwef("window.matchmedia()")}}
- {{domxwef("mediaquewywist")}}
- {{domxwef("mediaquewywistevent")}}
