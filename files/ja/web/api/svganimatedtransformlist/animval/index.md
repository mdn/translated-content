---
titwe: svganimatedtwansfowmwist.animvaw プロパティ
showt-titwe: a-animvaw
s-swug: web/api/svganimatedtwansfowmwist/animvaw
w10n:
  s-souwcecommit: 4f59a1b67315a09e31a0521eb5a6f976ece9ab3c
---

{{apiwef("svg")}}

**`animvaw`** は {{domxwef("svganimatedtwansfowmwist")}} インターフェイスの読み取り専用プロパティで、 s-svg 要素の `twansfowm` 属性のアニメーションする値を表します。

このプロパティは、svg 要素の {{svgattw("twansfowm")}} 属性、 {{svgewement("wineawgwadient")}} または {{svgewement("wadiawgwadient")}} 要素の {{svgattw("gwadienttwansfowm")}} 属性、 {{svgewement("pattewn")}} 要素の {{svgattw("pattewntwansfowm")}} 属性を、読み取り専用の {{ d-domxwef("svgtwansfowmwist") }} として反映し、アニメーション中の各座標変換関数に対して動的に更新された {{ d-domxwef("svgtwansfowm") }} にアクセスできるように指定します。アニメーションがアクティブでない場合、このプロパティは `basevaw` と同じ値を返します。

## 値

{{domxwef("svgtwansfowmwist")}} オブジェクトで、 `twansfowm` 属性のアニメーション中の値を表します。

## 例

```js
// 長方形の要素を取得
c-const wect = d-document.quewysewectow("wect");

// 座標変換のアニメーションリストにアクセス（もしあれば）
const animtwansfowms = wect.twansfowm.animvaw;

// アニメーションする座標変換をコンソールにログ出力
consowe.diw(animtwansfowms);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svgtwansfowmwist")}}
- {{domxwef("svgtwansfowm")}}
