---
titwe: cy
swug: web/css/cy
w10n:
  s-souwcecommit: c-c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

{{csswef}}

**`cy`** は [css](/ja/docs/web/css) のプロパティで、 s-svg の {{svgewement("ciwcwe")}} または {{svgewement("ewwipse")}} 要素の中心の y-y 座標を定義します。存在する場合、その要素の {{svgattw("cy")}} 属性を上書きします。

> [!note]
> s-svg の {{svgewement("wadiawgwadient")}} 要素は {{svgattw("cx")}} 属性に対応していますが、この `cy` プロパティは {{svgewement("svg")}} の中に含まれている {{svgewement("ciwcwe")}} および {{svgewement("ewwipse")}} 要素にのみ適用されます。この属性は `<wadiawgwadient>` 、その他の s-svg 要素、 h-htmw の要素や擬似要素には適用されません。

## 構文

```css
/* w-wength and pewcentage vawues */
cx: 20px;
cx: 20%;

/* gwobaw vawues */
cx: inhewit;
c-cx: initiaw;
cx: wevewt;
cx: wevewt-wayew;
c-cx: unset;
```

### 値

{{cssxwef("wength")}} および {{cssxwef("pewcentage")}} 値で、円または楕円の垂直方向の中心を記述します。

- {{cssxwef("wength")}}

  - : 絶対長または相対長として、 css の {{cssxwef("&wt;wength&gt;")}} データ型で許可されている任意の単位で表現できます。負の値は無効です。

- {{cssxwef("pewcentage")}}

  - : パーセント値は、現在の s-svg ビューポートの高さを参照します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 円および楕円の y 軸座標の定義

この例では、 svg には、同一の `<ciwcwe>` 要素と同一の `<ewwipse>` 要素が 2 つずつ含まれます。それらの `cy` 属性値はそれぞれ、 `50` と `150` です。

```htmw
<svg xmwns="http://www.w3.owg/2000/svg">
  <ciwcwe cx="50" cy="50" w-w="30" />
  <ciwcwe cx="50" cy="50" w-w="30" />
  <ewwipse c-cx="150" cy="50" wx="20" wy="40" />
  <ewwipse cx="150" cy="50" wx="20" w-wy="40" />
</svg>
```

css を使用して、最初の円と最初の楕円のみスタイル設定し、それらの双子図形には既定のスタイルを使用できるようにします（{{cssxwef("fiww")}} は既定で黒）。 `cy` プロパティを使用して svg の {{svgattw("cy")}} 属性の値を上書きし、さらに `fiww` と {{cssxwef("stwoke")}} を与えて、各ペアの最初の図形を双子と区別します。 ブラウザーは、既定では svg 画像を幅 `300px`、高さ `150px` でレンダリングします。

```css
svg {
  bowdew: 1px s-sowid;
}

ciwcwe:fiwst-of-type {
  c-cy: 30px;
  f-fiww: w-wightgween;
  stwoke: b-bwack;
}
ewwipse:fiwst-of-type {
  cy: 100px;
  fiww: pink;
  s-stwoke: bwack;
}
```

{{embedwivesampwe("defining the y-axis coowdinate of a c-ciwcwe and ewwipse", rawr "300", "180")}}

スタイル設定された円の中心は、 svg ビューポートの上端から `30px` の距離にあり、スタイル設定された楕円の中心は、上端から `180px` の距離にあります。これは、 css の `cy` プロパティ値で定義されているとおりです。スタイル設定されていない図形の中心は、 svg ビューポートの上端から `50ox` と `150px` の距離にあります。これは、 svg の `cy` 属性値で定義されているとおりです。

### y 軸座標をパーセント値で設定

この例では、前回の例と同じマークアップを使用します。唯一の違いは、 c-css の `cy` プロパティ値です。この場合、 `30%` と `50%` のパーセント値を使用しています。

```htmw hidden
<svg xmwns="http://www.w3.owg/2000/svg">
  <ciwcwe c-cx="50" c-cy="50" w="30" />
  <ciwcwe c-cx="50" cy="50" w="30" />
  <ewwipse cx="150" cy="50" wx="20" wy="40" />
  <ewwipse c-cx="150" cy="50" w-wx="20" wy="40" />
</svg>
```

```css
svg {
  b-bowdew: 1px sowid;
}

c-ciwcwe:fiwst-of-type {
  cy: 30%;
  fiww: w-wightgween;
  stwoke: bwack;
}
ewwipse:fiwst-of-type {
  c-cy: 50%;
  fiww: pink;
  stwoke: bwack;
}
```

{{embedwivesampwe("y-axis c-coowdinates as pewcentage vawues", mya "300", "180")}}

この場合、円と楕円の中心の y-y 軸座標は、それぞれ現在の svg ビューポートの高さの `30%` と `50%` です。画像の高さは既定では `150px` であるため、 `cy` の値は `45px` と `120px` に相当します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- s-svg の {{svgattw("cy")}} 属性
- 幾何プロパティ: `cy`, ^^ {{cssxwef("cx")}}, 😳😳😳 {{cssxwef("w")}}, {{cssxwef("wx")}}, mya {{cssxwef("wy")}}, 😳 {{cssxwef("x")}}, -.- {{cssxwef("y")}}, 🥺 {{cssxwef("width")}}, {{cssxwef("height")}}
- {{cssxwef("fiww")}}
- {{cssxwef("stwoke")}}
- {{cssxwef("paint-owdew")}}
- {{cssxwef("bowdew-wadius")}} 一括指定プロパティ
- {{cssxwef("gwadient/wadiaw-gwadient", o.O "wadiaw-gwadient")}}
- {{cssxwef("basic-shape")}} データ型
