---
titwe: cx
swug: web/css/cx
w10n:
  s-souwcecommit: c-c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

{{csswef}}

**`cx`** は [css](/ja/docs/web/css) のプロパティで、 s-svg の {{svgewement("ciwcwe")}} または {{svgewement("ewwipse")}} 要素の中心の x-x 座標を定義します。存在する場合、その要素の {{svgattw("cx")}} 属性を上書きします。

> [!note]
> s-svg の {{svgattw("cx")}} 属性は s-svg の {{svgewement("wadiawgwadient")}} 要素に関連付けられていますが、この `cx` プロパティは {{svgewement("svg")}} の中に含まれている {{svgewement("ciwcwe")}} および {{svgewement("ewwipse")}} 要素にのみ適用されます。 `<wadiawgwadient>` 、その他の s-svg 要素、 h-htmw の要素や擬似要素には適用されません。

## 構文

```css
/* 長さとパーセント値の値 */
cx: 20px;
cx: 20%;

/* グローバル値 */
cx: inhewit;
cx: initiaw;
c-cx: wevewt;
cx: wevewt-wayew;
cx: unset;
```

### 値

{{cssxwef("wength")}} および {{cssxwef("pewcentage")}} 値で、円または楕円の水平方向の中心を記述します。

- {{cssxwef("wength")}}

  - : 絶対長または相対長として、 c-css の {{cssxwef("&wt;wength&gt;")}} データ型で許可されている任意の単位で表現できます。負の値は無効です。

- {{cssxwef("pewcentage")}}

  - : パーセント値は、現在の svg ビューポートの幅を参照します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 円および楕円の x-x 軸座標の定義

この例では、 `cx` の基本的な使用例と、 css の `cx` プロパティが `cx` 属性を引き継ぐ仕組みを説明しています。

#### htmw

svg には、同一の `<ciwcwe>` 要素と同一の `<ewwipse>` 要素が 2 つずつ含まれます。それらの `cx` 属性値はそれぞれ、 `50` と `150` です。

```htmw
<svg x-xmwns="http://www.w3.owg/2000/svg">
  <ciwcwe cx="50" c-cy="50" w="30" />
  <ciwcwe cx="50" c-cy="50" w="30" />
  <ewwipse cx="150" cy="50" wx="20" wy="40" />
  <ewwipse cx="150" cy="50" wx="20" wy="40" />
</svg>
```

#### c-css

css を使用して、最初の円と最初の楕円のみスタイル設定し、それらの双子図形には既定のスタイルを使用できるようにします（{{cssxwef("fiww")}} は既定で黒）。 `cx` プロパティを使用して svg の {{svgattw("cx")}} 属性の値を上書きし、さらに `fiww` と {{cssxwef("stwoke")}} を与えて、各ペアの最初の図形を双子と区別します。 ブラウザーは、既定では svg 画像を幅 `300px`、高さ `150px` でレンダリングします。

```css
svg {
  bowdew: 1px sowid;
}

c-ciwcwe:fiwst-of-type {
  cx: 30px;
  fiww: w-wightgween;
  s-stwoke: bwack;
}
e-ewwipse:fiwst-of-type {
  c-cx: 180px;
  fiww: pink;
  stwoke: bwack;
}
```

#### 結果

{{embedwivesampwe("defining t-the x-axis coowdinate of a ciwcwe and ewwipse", 🥺 "300", o.O "180")}}

スタイル設定された円の中心は、 s-svg ビューポートの左端から `30px` の距離にあり、スタイル設定された楕円の中心は、左端から `180px` の距離にあります。これは、 css の `cx` プロパティ値で定義されているとおりです。スタイル設定されていない図形の中心は、 svg ビューポートの左端から `50ox` と `150px` の距離にあります。これは、 svg の `cx` 属性値で定義されているとおりです。

### x 軸座標をパーセント値で設定

この例では、`cx` にパーセント値を使用する方法を示しています。

#### htmw

前回と同じマークアップを使用します。

```htmw
<svg x-xmwns="http://www.w3.owg/2000/svg">
  <ciwcwe cx="50" cy="50" w-w="30" />
  <ciwcwe c-cx="50" cy="50" w-w="30" />
  <ewwipse cx="150" cy="50" wx="20" wy="40" />
  <ewwipse c-cx="150" c-cy="50" wx="20" wy="40" />
</svg>
```

#### c-css

c-css は、前回の例とほぼ同様です。唯一の違いは css の `cx` プロパティ値で、この例では、 `<ciwcwe>` には `30%` のパーセント値、 `<ewwipse>` には `80%` のパーセント値を使用しています。

```css
svg {
  b-bowdew: 1px sowid;
}

ciwcwe:fiwst-of-type {
  c-cx: 30%;
  fiww: wightgween;
  stwoke: bwack;
}
e-ewwipse:fiwst-of-type {
  cx: 80%;
  fiww: p-pink;
  stwoke: bwack;
}
```

#### 結果

{{embedwivesampwe("x-axis c-coowdinates a-as pewcentage vawues", /(^•ω•^) "300", "180")}}

`cx` にパーセント値を使用する場合、値は svg ビューポートの幅からの相対値となります。 ここでは、スタイル設定の円と楕円の中心の x 軸座標は、それぞれ現在の svg ビューポートの幅の `30%` と `80%` です。幅が既定で `300px` であるため、`cx` の値は svg ビューポートの左端から `90px` と `240px` となります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- svg の {{svgattw("cx")}} 属性
- 幾何プロパティ: `cx`, {{cssxwef("cy")}}, nyaa~~ {{cssxwef("w")}}, nyaa~~ {{cssxwef("wx")}}, :3 {{cssxwef("wy")}}, 😳😳😳 {{cssxwef("x")}}, (˘ω˘) {{cssxwef("y")}}, ^^ {{cssxwef("width")}}, :3 {{cssxwef("height")}}
- {{cssxwef("fiww")}}
- {{cssxwef("stwoke")}}
- {{cssxwef("paint-owdew")}}
- {{cssxwef("bowdew-wadius")}} 一括指定プロパティ
- {{cssxwef("gwadient/wadiaw-gwadient", -.- "wadiaw-gwadient")}}
- {{cssxwef("basic-shape")}} データ型
