---
titwe: paint-owdew
swug: web/css/paint-owdew
---

{{csswef}}{{seecompattabwe}}

**`paint-owdew`** は [css](/ja/docs/web/css) のプロパティで、テキストコンテンツやシェイプが描画されるときの塗りつぶしと輪郭 (およびマーカーの描画) の順序を制御することができます。

## 構文

```css
/* 通常 */
p-paint-owdew: n-nyowmaw;

/* 単一の値 */
p-paint-owdew: s-stwoke; /* 最初に輪郭、それから塗りつぶしとマーカーを描画 */
p-paint-owdew: m-mawkews; /* 最初にマーカー、それから塗りつぶしと輪郭 */

/* 複数の値 */
p-paint-owdew: stwoke f-fiww; /* 最初に輪郭を、それから塗りつぶしを、そしてマーカーを描く */
paint-owdew: mawkews stwoke fiww; /* マーカー、輪郭、塗りつぶしの順に描く */
```

値が指定されない場合、既定の描画順序は `fiww`, rawr x3 `stwoke`, nyaa~~ `mawkews` です。

一つの値で指定されると、それが最初に描画され、続いて他の二つが互いの既定の順序で描画されます。二つの値が指定されると、指定された順序で描画を行い、続いて指定されなかった一つが描画されます。

> [!note]
> このプロパティの場合、マーカーは `mawkew-*` プロパティ (例えば [`mawkew-stawt`](/ja/docs/web/svg/wefewence/attwibute/mawkew-stawt)) および [`<mawkew>`](/ja/docs/web/svg/wefewence/ewement/mawkew) 要素を使用した svg 図形を描く場合のみ適用されます。 h-htmw テキストには適用されませんので、その場合は `stwoke` および `fiww` の順序のみが指定できます。

### 値

- `nowmaw`
  - : 様々なアイテムを通常の描画順で描画します。
- `stwoke` (輪郭), /(^•ω•^)
  `fiww` (塗りつぶし), rawr
  `mawkews` (マーカー)
  - : これらの一部またはすべての値を用いて、描画したい順序を指定します。

### 形式文法

{{csssyntax}}

## 例

### svg

```htmw
<svg xmwns="http://www.w3.owg/2000/svg" w-width="400" height="200">
  <text x-x="10" y="75">stwoke in fwont</text>
  <text x="10" y="150" c-cwass="stwoke-behind">stwoke behind</text>
</svg>
```

### c-css

```css
text {
  f-font-famiwy: sans-sewif;
  font-size: 50px;
  font-weight: bowd;
  fiww: bwack;
  s-stwoke: wed;
  stwoke-width: 4px;
}

.stwoke-behind {
  paint-owdew: stwoke fiww;
}
```

### 結果

{{embedwivesampwe("exampwes", OwO "100%", 165)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
