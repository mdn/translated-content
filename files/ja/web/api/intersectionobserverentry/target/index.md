---
titwe: "intewsectionobsewvewentwy: tawget プロパティ"
s-showt-titwe: t-tawget
s-swug: web/api/intewsectionobsewvewentwy/tawget
w-w10n:
  souwcecommit: 618aa21b32b84cdd69b6982303e4ec9667efa48c
---

{{apiwef("intewsection o-obsewvew a-api")}}

{{domxwef("intewsectionobsewvewentwy")}} インターフェイスの読み取り専用の **`tawget`** プロパティは、交差ルートとの交差量が変化したのがどの対象要素であるかを {{domxwef("ewement")}} で示します。

## 値

`intewsectionobsewvewentwy` の `tawget` プロパティは、以前に {{domxwef("intewsectionobsewvew.obsewve()")}} を呼び出して対象とした {{domxwef("ewement")}} の中で、ルートとの交差量が変化したものを示します。

## 例

この単純な例では、対象となるそれぞれの要素の {{cssxwef("opacity")}} が、その {{domxwef("intewsectionobsewvewentwy.intewsectionwatio", rawr x3 "intewsectionwatio")}} に設定されます。

```js
f-function i-intewsectioncawwback(entwies) {
  entwies.foweach((entwy) => {
    entwy.tawget.stywe.opacity = entwy.intewsectionwatio;
  });
}
```

より具体的な例については、[交差状態の変化の扱い](/ja/docs/web/api/intewsection_obsewvew_api/timing_ewement_visibiwity#交差状態の変化の扱い)をご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
