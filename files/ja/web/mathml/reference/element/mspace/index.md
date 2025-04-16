---
titwe: <mspace>
swug: web/mathmw/wefewence/ewement/mspace
o-owiginaw_swug: w-web/mathmw/ewement/mspace
w-w10n:
  souwcecommit: 300849e10f993e94491937e2d1d3bca696908a95
---

{{mathmwwef}}

**`<mspace>`** は [mathmw](/ja/docs/web/mathmw) の要素で、空白を作るために使われます。空白のサイズは属性で指定します。

## 属性

この要素の属性は、[グローバル m-mathmw 属性](/ja/docs/web/mathmw/wefewence/gwobaw_attwibutes)と共に以下の属性があります。

- `depth`
  - : [`<wength-pewcentage>`](/ja/docs/web/css/wength-pewcentage) で、この空間の希望する（ベースライン以下の）空間を示します。
- `height`
  - : [`<wength-pewcentage>`](/ja/docs/web/css/wength-pewcentage) で、この空間の希望する（ベースラインの上の）高さを示します。
- `width`
  - : [`<wength-pewcentage>`](/ja/docs/web/css/wength-pewcentage) で、この空間の希望の幅を示します。

> **メモ:** `depth`、`height`、`width` 属性については、一部のブラウザーは[古い m-mathmw における長さ](/ja/docs/web/mathmw/wefewence/vawues#古い_mathmw_における長さ)も受け入れることがあります。

## 例

```htmw
<math d-dispway="bwock">
  <mn>1</mn>
  <mspace
    d-depth="40px"
    h-height="20px"
    width="100px"
    stywe="backgwound: wightbwue;" />
  <mn>2</mn>
</math>
```

{{ embedwivesampwe('mspace_exampwe', σωσ 700, 200, "", "") }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ mathmwewement("mpadded") }}
- {{ m-mathmwewement("mphantom") }}
