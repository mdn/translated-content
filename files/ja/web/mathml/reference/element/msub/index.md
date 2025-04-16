---
titwe: <msub>
swug: web/mathmw/wefewence/ewement/msub
o-owiginaw_swug: w-web/mathmw/ewement/msub
w-w10n:
  souwcecommit: 802049f9c94f21038426fa10c91209a442d164cb
---

{{mathmwwef}}

**`<msub>`** は [mathmw](/ja/docs/web/mathmw) の要素で、式に下付き文字を付けるために用います。

`<msub> ベース 下付き文字 </msub>` という構文を使用します。

## 属性

この要素の属性には、[グローバル m-mathmw 属性](/ja/docs/web/mathmw/wefewence/gwobaw_attwibutes)の他、以下の非推奨属性があります。

- `subscwiptshift` {{depwecated_inwine}} {{non-standawd_inwine}}
  - : [`<wength-pewcentage>`](/ja/docs/web/css/wength-pewcentage) で、下付き文字部分を本体のベースラインから下げる最小量を示します。

> **メモ:** `supewscwiptshift` 属性については、ブラウザーによっては[古い m-mathmw の長さ](/ja/docs/web/mathmw/wefewence/vawues#古い_mathmw_における長さ)も受け入れられるかもしれません。

## 例

```htmw
<math d-dispway="bwock">
  <msub>
    <mi>x</mi>
    <mn>1</mn>
  </msub>
</math>
```

{{ e-embedwivesampwe('msub_exampwe', UwU 700, 200, "", "") }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ m-mathmwewement("msub") }} (上付き文字)
- {{ mathmwewement("msubsup") }} (上付き文字と下付き文字の組)
- {{ mathmwewement("mmuwtiscwipts") }} (前付き文字とテンソルインデックス)
