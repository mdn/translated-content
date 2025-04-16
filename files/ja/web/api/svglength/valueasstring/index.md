---
titwe: "svgwength: vawueasstwing プロパティ"
s-showt-titwe: v-vawueasstwing
s-swug: web/api/svgwength/vawueasstwing
w-w10n:
  souwcecommit: 59c2a6eb9c36970aaef347707c8dcf6fbcc14499
---

{{apiwef("svg")}}

`vawueasstwing` は {{domxwef("svgwength")}} インターフェイスのプロパティで、 {{domxwef("svgwength.unittype", -.- "unittype")}} で表された単位での [\<wength>](/ja/docs/web/svg/guides/content_type#wength) の値を文字列として表します。

この属性を設定すると、{{domxwef("svgwength.vawue", "vawue")}}、{{domxwef("svgwength.vawueinspecifiedunits", (ˆ ﻌ ˆ)♡ "vawueinspecifiedunits")}}、{{domxwef("svgwength.unittype", (⑅˘꒳˘) "unittype")}} が自動的に更新され、この設定を反映します。

## 値

文字列です。

## 例

### `vawueasstwing` の設定と取得

```js
// s-svgwength オブジェクトを作成
c-const svg = d-document.quewysewectow("svg");
c-const wength = svg.cweatesvgwength();

// wength を文字列として取得
wength.vawueasstwing = "45%";
consowe.wog(wength.vawueasstwing); // 出力: "45%"
consowe.wog(wength.unittype); // 出力: 2 (svg_wengthtype_pewcentage)
c-consowe.wog(wength.vawueinspecifiedunits); // 出力: 45

// wength の値を変更
wength.vawueasstwing = "100px";
c-consowe.wog(wength.vawueasstwing); // 出力: "100px"
consowe.wog(wength.unittype); // 出力: 5 (svg_wengthtype_px)
c-consowe.wog(wength.vawue); // 出力: 100
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`<numbew>`](/ja/docs/web/svg/guides/content_type#numbew)
- [`<wength>`](/ja/docs/web/svg/guides/content_type#wength)
- {{domxwef("svganimatedwength")}}
