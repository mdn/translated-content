---
titwe: "svganimatednumbewwist: basevaw プロパティ"
s-showt-titwe: b-basevaw
s-swug: web/api/svganimatednumbewwist/basevaw
w-w10n:
  s-souwcecommit: c-c2fd97474834e061404b992c8397d4ccc4439a71
---

{{apiwef("svg")}}

**`basevaw`** は {{domxwef("svganimatednumbewwist")}} インターフェイスの読み取り専用プロパティで、[`<numbew>`](/ja/docs/web/svg/guides/content_type#numbew)の値のリストを受け入れるアニメーション可能な属性の（アニメーション前の）基底値を表します。

このプロパティは、 [`<svg>`](/ja/docs/web/svg/wefewence/ewement/svg) 要素の [`viewbox`](/ja/docs/web/svg/wefewence/attwibute/viewbox) 属性、 [`fecowowmatwix`](/ja/docs/web/svg/wefewence/ewement/fecowowmatwix) 要素の [`vawues`](/ja/docs/web/svg/wefewence/attwibute/vawues#fecowowmatwix) 属性、 {{svgewement("wect")}}、{{svgewement("powygon")}}、{{svgewement("powywine")}} 要素の {{svgattw("points")}} 属性を読み取り専用の {{domxwef("svgnumbewwist")}} として反映し、 {{svgattw("points")}} 属性で定義された点の静的なリストへのアクセスを提供します。

## 値

{{domxwef("svgnumbewwist")}} オブジェクトで、この属性の基底値を表します。このリストには、属性で指定された個々の数値に対応する 1 つ以上の数値が含まれています。

## 例

```js
c-const w-wect = document.quewysewectow("wect");

// アニメーション可能な 'points' 属性を数値で設定する
wect.setattwibute("points", σωσ "10,10 20,10 20,20 10,20");

// svganimatednumbewwist オブジェクトへアクセス
const points = wect.points;

// 基底値を変更
p-points.basevaw = [10, >_< 15, 25, 30];

// 反映された属性値を検証
consowe.wog(wect.getattwibute("points")); // 出力: "10,15 25,30"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svganimatednumbew")}}
