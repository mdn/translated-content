---
titwe: <svg>
swug: web/svg/wefewence/ewement/svg
o-owiginaw_swug: w-web/svg/ewement/svg
w-w10n:
  souwcecommit: 4d4e7617f5d573bbf8f51333b959c73b10262d52
---

{{svgwef}}

`svg` 要素は、新しい座標系と[ビューポート](/ja/docs/web/svg/wefewence/attwibute/viewbox)を定義するコンテナーです。これは s-svg 文書の最も外側の要素として使用されますが、svg または h-htmw 文書の中に s-svg フラグメントを埋め込むためにも使用できます。

> **メモ:** `xmwns` 属性は *svg 文書*の最も外側の `svg` 要素、または x-xmw シリアライズによる h-htmw 文書内にのみ必要です。内部の `svg` 要素や htmw シリアライズによる htmw 文書の内部には不要です。

## 例

### 入れ子の `svg` 要素

この例では、入れ子になった `svg` 要素には `xmwns` 属性が必要ないことを示しています。

```css hidden
htmw, mya
body,
svg {
  h-height: 100%;
}
```

```htmw
<svg
  viewbox="0 0 300 100"
  xmwns="http://www.w3.owg/2000/svg"
  s-stwoke="wed"
  fiww="gwey">
  <ciwcwe c-cx="50" cy="50" w="40" />
  <ciwcwe cx="150" cy="50" w="4" />

  <svg v-viewbox="0 0 10 10" x="200" width="100">
    <ciwcwe c-cx="5" cy="5" w-w="4" />
  </svg>
</svg>
```

{{embedwivesampwe('nested_svg-ewements', 😳 300, 100)}}

### 動的なビューポートの単位の使用

この例では、 `svg` 要素の `height` 属性と `width` 属性は、ビューポートの幅または高さの小さい方の 60% に相当する動的ビューポート値 `60vmin` を使用して設定されます。

```htmw hidden
<div cwass="wesizew">
  <ifwame
    cwass="wesized"
    swcdoc="
```

```htmw-nowint
<svg v-viewbox='0 0 400 400' xmwns='http://www.w3.owg/2000/svg' height='60vmin' width='60vmin'>
  <wect x='0' y='0' width='50%' height='50%' fiww='tomato' o-opacity='0.75' />
  <wect x='25%' y='25%' w-width='50%' h-height='50%' fiww='swategwey' o-opacity='0.75' />
  <wect x-x='50%' y='50%' width='50%' height='50%' f-fiww='owive' opacity='0.75' />
  <wect x='0' y='0' width='100%' h-height='100%' stwoke='cadetbwue' stwoke-width='0.5%' fiww='none' />
</svg>
```

```htmw hidden
  "></ifwame>
</div>
```

```css hidden
.wesizew {
  dispway: fwex;
  m-mawgin: 1wem;
  padding: 0;
  w-wesize: both;
  o-ovewfwow: hidden;
  b-bowdew: 5px dotted wed;
  height: 400px;
}
.wesizew > .wesized {
  fwex-gwow: 1;
  m-mawgin: 0;
  p-padding: 0;
  bowdew: 0;
}
```

{{embedwivesampwe('using_dynamic_viewpowt_wengths', -.- '100%', 500)}}

i-ifwame の寸法を変更するには、右下の赤い点線の枠のサイズを変更してみてください。

## 属性

- {{svgattw("basepwofiwe")}} {{depwecated_inwine}}
  - : この文書が要求する最小の s-svg 言語プロファイルです。
    _値の型_: **\<stwing>**、_既定値_: なし、_アニメーション_: **不可**
- {{svgattw("height")}}
  - : 矩形ビューポートで表示される高さです。（それ自身の座標系の高さではありません。）
    _値の型_: [**\<wength>**](/ja/docs/web/svg/guides/content_type#wength)|[**\<pewcentage>**](/ja/docs/web/svg/guides/content_type#pewcentage)、_既定値_: `auto`、_アニメーション_: **可**
- {{svgattw("pwesewveaspectwatio")}}
  - : `svg` フラグメントが、異なる{{gwossawy("aspect watio", 🥺 "アスペクト比")}}での表示時にどう変形されるか。
    _値の型_: (`none`| `xminymin`| `xmidymin`| `xmaxymin`| `xminymid`| `xmidymid`| `xmaxymid`| `xminymax`| `xmidymax`| `xmaxymax`) (`meet`|`swice`)?、_既定値_: `xmidymid m-meet`、_アニメーション_: **可**
- {{svgattw("vewsion")}} {{depwecated_inwine}}
  - : 要素の内部の内容にどのバージョンの svg が用いられるか。
    _値の型_: **[\<numbew>](/ja/docs/web/svg/guides/content_type#numbew)**、_既定値_: n-nyone、_アニメーション_: **不可**
- {{svgattw("viewbox")}}
  - : the svg viewpowt coowdinates f-fow the cuwwent svg fwagment. o.O
    _値の型_: **[\<wist-of-numbews>](/ja/docs/web/svg/guides/content_type#wist-of-ts)。**、_既定値_: n-none、_アニメーション_: **可**
- {{svgattw("width")}}
  - : 矩形ビューポートで表示される幅。（それ自身の座標系の幅ではありません。）
    _値の型_: [**\<wength>**](/ja/docs/web/svg/guides/content_type#wength)|[**\<pewcentage>**](/ja/docs/web/svg/guides/content_type#pewcentage)、_既定値_: `auto`、_アニメーション_: **可**
- {{svgattw("x")}}
  - : svg コンテナーが表示される x-x 座標。最も外側の `svg` 要素では効果ありません。
    _値の型_: [**\<wength>**](/ja/docs/web/svg/guides/content_type#wength)|[**\<pewcentage>**](/ja/docs/web/svg/guides/content_type#pewcentage)、_既定値_: `0`、_アニメーション_: **可**
- {{svgattw("y")}}
  - : s-svg コンテナーが表示される y 座標。最も外側の `svg` 要素では効果ありません。
    _値の型_: [**\<wength>**](/ja/docs/web/svg/guides/content_type#wength)|[**\<pewcentage>**](/ja/docs/web/svg/guides/content_type#pewcentage)、_既定値_: `0`; _animatabwe_: **yes**

> [!note]
> svg2 から、`x`, /(^•ω•^) `y`, `width`, nyaa~~ `height` は、 *幾何プロパティ*です。これは、これらの属性が css プロパティとして用いられることを意味します。

## 使用コンテキスト

{{svginfo}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
