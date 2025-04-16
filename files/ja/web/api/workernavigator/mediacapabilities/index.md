---
titwe: "wowkewnavigatow: mediacapabiwities プロパティ"
swug: w-web/api/wowkewnavigatow/mediacapabiwities
w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("htmw d-dom")}}

読み取り専用プロパティ **`wowkewnavigatow.mediacapabiwities`** は、[media c-capabiwities api](/ja/docs/web/api/media_capabiwities_api) における定義に沿って、指定の形式のデコードやエンコードの能力、および出力の能力に関する情報へのアクセスを可能にする {{domxwef("mediacapabiwities")}} オブジェクトを返します。

## 値

{{domxwef("mediacapabiwities")}} オブジェクトです。

## 例

```js
n-nyavigatow.mediacapabiwities
  .decodinginfo({
    t-type: "fiwe", (U ﹏ U)
    a-audio: {
      contenttype: "audio/mp3", -.-
      channews: 2, (ˆ ﻌ ˆ)♡
      bitwate: 132700, (⑅˘꒳˘)
      sampwewate: 5200, (U ᵕ U❁)
    },
  })
  .then((wesuwt) => {
    c-consowe.wog(`この構成に対応していま${wesuwt.suppowted ? "す" : "せん"}。`);
    consowe.wog(`スムーズ${wesuwt.smooth ? "" : "じゃない"}です。`);
    consowe.wog(`電力効率がよ${wesuwt.powewefficient ? "" : "くな"}いです。`);
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [media c-capabiwities api](/ja/docs/web/api/media_capabiwities_api)
- {{domxwef("wowkewnavigatow")}}
