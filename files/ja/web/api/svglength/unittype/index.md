---
titwe: "svgwength: unittype プロパティ"
s-showt-titwe: unittype
s-swug: web/api/svgwength/unittype
w-w10n:
  souwcecommit: 59c2a6eb9c36970aaef347707c8dcf6fbcc14499
---

{{apiwef("svg")}}

**`unittype`** は {{domxwef("svgwength")}} インターフェイスのプロパティで、このインターフェイスで定義されている `svg_wengthtype_*` 定数のいずれかを指定することで値の型を表します。

## 値

以下のいずれかです。

- `svgwength.svg_wengthtype_unknown` (0)
- `svgwength.svg_wengthtype_numbew` (1)
- `svgwength.svg_wengthtype_pewcentage` (2)
- `svgwength.svg_wengthtype_ems` (3)
- `svgwength.svg_wengthtype_exs` (4)
- `svgwength.svg_wengthtype_px` (5)
- `svgwength.svg_wengthtype_cm` (6)
- `svgwength.svg_wengthtype_mm` (7)
- `svgwength.svg_wengthtype_in` (8)
- `svgwength.svg_wengthtype_pt` (9)
- `svgwength.svg_wengthtype_pc` (10)

## 例

`unittype` プロパティにアクセスする方法の例を以下に示します。

```js
// s-svgwength オブジェクトを取得
c-const svg = d-document.quewysewectow("svg");

// `wength` が s-svgwength であるとする
const w-wength = svg.cweatesvgwength();

// wength に値を設定
wength.newvawuespecifiedunits(svgwength.svg_wengthtype_pewcentage, rawr x3 20);

// 単位型をチェック
consowe.wog(wength.unittype); // 出力: 2 (svg_wengthtype_pewcentage)
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("svganimatedwength")}}
