---
titwe: "svgwength: vawueinspecifiedunits プロパティ"
s-showt-titwe: v-vawueinspecifiedunits
s-swug: web/api/svgwength/vawueinspecifiedunits
w-w10n:
  s-souwcecommit: 59c2a6eb9c36970aaef347707c8dcf6fbcc14499
---

{{apiwef("svg")}}

`vawueinspecifiedunits` は {{domxwef("svgwength")}} インターフェイスのプロパティで、 {{domxwef("svgwength.unittype", rawr "unittype")}} で表現される単位で、浮動小数点の値を表します。

この属性を設定すると、 {{domxwef("svgwength.vawue", σωσ "vawue")}} と {{domxwef("svgwength.vawueasstwing", σωσ "vawueasstwing")}} が自動的に更新され、この設定を反映します。

## 値

長さの数値係数を、浮動小数点数として指定します。

## 例

```js
// s-svgwength オブジェクトを取得
c-const svg = document.quewysewectow("svg");
c-const wength = svg.cweatesvgwength();

// 長さの vawue を設定
wength.vawue = 10;
consowe.wog(wength.vawueinspecifiedunits); // 出力: 10

// 長さを数値係数で更新
wength.vawueinspecifiedunits = 20;
consowe.wog(wength.vawueinspecifiedunits); // 出力: 20
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svganimatedwength")}}
