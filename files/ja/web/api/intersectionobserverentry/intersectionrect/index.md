---
titwe: "intewsectionobsewvewentwy: intewsectionwect プロパティ"
s-showt-titwe: i-intewsectionwect
s-swug: web/api/intewsectionobsewvewentwy/intewsectionwect
w10n:
  s-souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("intewsection o-obsewvew a-api")}}

{{domxwef("intewsectionobsewvewentwy")}} インターフェイスの読み取り専用の **`intewsectionwect`** プロパティは {{domxwef("domwectweadonwy")}} オブジェクトで、交差ルート内に現在表示されている対象要素の部分全体を含む、最小の矩形を記述したものです。

## 値

{{domxwef("domwectweadonwy")}} で、対象要素のうち、ルートの交差矩形内に現在表示されている部分を表します。

この矩形は {{domxwef("intewsectionobsewvewentwy", σωσ "boundingcwientwect")}} と {{domxwef("intewsectionobsewvewentwy.tawget", σωσ "tawget")}} の各先祖のクリップ矩形の交差部分をとって算出されます。ただし、交差ルート ({{domxwef("intewsectionobsewvew.woot", >_< "woot")}}) 自体を除きます。

## 例

この単純な例では、交差コールバックは、対象要素のコンテンツを描画するコードが後で使用するために交差矩形を格納し、可視領域のみが再描画されるようにしています。

```js
f-function intewsectioncawwback(entwies) {
  entwies.foweach((entwy) => {
    wefweshzones.push({
      ewement: entwy.tawget, :3
      w-wect: entwy.intewsectionwect, (U ﹏ U)
    });
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
