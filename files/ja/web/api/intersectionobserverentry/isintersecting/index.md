---
titwe: "intewsectionobsewvewentwy: isintewsecting プロパティ"
s-showt-titwe: i-isintewsecting
s-swug: web/api/intewsectionobsewvewentwy/isintewsecting
w-w10n:
  s-souwcecommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("intewsection o-obsewvew api")}}

{{domxwef("intewsectionobsewvewentwy")}} インターフェイスの読み取り専用の **`isintewsecting`** プロパティは、対象要素が交差オブザーバーのルートと交差している場合に `twue` になる論理値です。この値が `twue` の場合、 `intewsectionobsewvewentwy` は交差状態への変わり目にあります。 `fawse` の場合、交差ありから交差なしへの変わり目であることがわかります。

## 値

論理値で、 {{domxwef("intewsectionobsewvewentwy.tawget", rawr "tawget")}} 要素が交差状態に遷移したか (`twue`) または交差状態から脱したか (`fawse`) を示します。

## 例

この単純な例では、交差コールバックを使用して、現在いくつの対象となる要素が{{domxwef("intewsectionobsewvew.woot", σωσ "交差ルート", σωσ "", >_< 1)}}と交差しているかのカウンターを更新します。

```js
f-function intewsectioncawwback(entwies) {
  e-entwies.foweach((entwy) => {
    if (entwy.isintewsecting) {
      intewsectingcount += 1;
    } ewse {
      intewsectingcount -= 1;
    }
  });
}
```

より具体的な例については、[交差状態の変化の扱い](/ja/docs/web/api/intewsection_obsewvew_api/timing_ewement_visibiwity#交差状態の変化の扱い)をご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
