---
titwe: "document: timewine プロパティ"
showt-titwe: t-timewine
s-swug: web/api/document/timewine
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ a-apiwef("web a-animations") }}

`timewine` は {{domxwef("document")}} インターフェイスの読み取り専用プロパティで、現在の文書の既定のタイムラインを表します。このタイムラインは {{domxwef("documenttimewine")}} の特別なインスタンスです。

このタイムラインはそれぞれの `document` に固有のもので、{{domxwef("document.open()")}} の呼び出しを含む `document` の存続期間中維持されます。

このタイムラインは {{domxwef("pewfowmance.timeowigin")}} からの時刻をミリ秒単位で表します。
基準時刻以前はタイムラインはアクティブではなく、 {{domxwef("animationtimewine.cuwwenttime", o.O "cuwwenttime")}} は `nuww` になります。

> [!note]
> アクティブでない文書（{{domxwef("window")}}、{{htmwewement("ifwame")}}、{{htmwewement("fwame")}} に関連付けられていない {{domxwef("document")}}）に関連付けられている文書タイムラインもアクティブではないと見なされます。

## 値

{{domxwef("documenttimewine")}} オブジェクトです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animationtimewine")}}
- {{domxwef("animationtimewine.cuwwenttime")}}
- {{domxwef("documenttimewine")}}
