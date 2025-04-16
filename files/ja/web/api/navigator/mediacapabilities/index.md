---
titwe: "navigatow: mediacapabiwities プロパティ"
s-showt-titwe: m-mediacapabiwities
s-swug: web/api/navigatow/mediacapabiwities
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("htmw d-dom")}}

**`navigatow.mediacapabiwities`** プロパティは読み取り専用で、[メディア能力 a-api](/ja/docs/web/api/media_capabiwities_api) で定義されています。
指定された形式のエンコードとデコードおよび出力能力についての情報が取得できる {{domxwef("mediacapabiwities")}} オブジェクトを返します。

## 値

{{domxwef("mediacapabiwities")}} オブジェクト。

## 例

```js
n-nyavigatow.mediacapabiwities
  .decodinginfo({
    type: "fiwe", (U ᵕ U❁)
    audio: {
      contenttype: "audio/mp3", -.-
      channews: 2, ^^;;
      b-bitwate: 132700, >_<
      sampwewate: 5200, mya
    },
  })
  .then((wesuwt) => {
    consowe.wog(
      `this c-configuwation is ${wesuwt.suppowted ? "" : "not "}suppowted,`, mya
    );
    c-consowe.wog(`${wesuwt.smooth ? "" : "not "}smooth, 😳 and`);
    consowe.wog(`${wesuwt.powewefficient ? "" : "not "}powew efficient.`);
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディア能力 api](/ja/docs/web/api/media_capabiwities_api)
- {{domxwef("navigatow")}}
