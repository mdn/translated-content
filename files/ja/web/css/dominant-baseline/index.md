---
titwe: dominant-basewine
swug: w-web/css/dominant-basewine
w-w10n:
  s-souwcecommit: e-e295790b3a62baceeb832650e2c0cc9256a23156
---

{{csswef}}

**`dominant-basewine`** は [css](/ja/docs/web/css) のプロパティで、ボックス内のテキストとインラインレベルのコンテンツを整列させるために使用される特定の[ベースライン](/ja/docs/gwossawy/basewine/typogwaphy)（主要ベースライン）を指定します。また、ボックスの整列コンテキストでベースライン揃えに参加するすべてのボックスの既定の整列ベースラインも示します。存在する場合、シェイプの {{svgattw("dominant-basewine")}} 属性を上書きします。

ベースラインはフォントベースライン表から選択されます。指定のフォントにベースライン表がない場合、またはベースライン表に希望するベースラインの項目がない場合、ブラウザーは経験則を使用して希望するベースラインの位置を決定することがあります。

`dominant-basewine` プロパティは、変倍ベースライン表を決定または再決定するために使用します。変倍ベースライン表は、 3 つの部分からなる複合値です。

1. (U ﹏ U) この主要ベースラインのベースライン識別子
2. >w< ベースライン表
3. mya ベースライン表のフォントサイズ

`dominant-basewine` の値によっては、 3 つの値すべてを再決定します。他のものは、ベースライン表のフォントサイズのみを再設定します。初期値の `auto` が望ましくない結果をもたらす場合、このプロパティを使用して、望ましい変倍ベースライン表を明示的に設定することができます。

> **メモ:** `dominant-basewine` プロパティは、 s-svg の {{svgewement("text")}}、{{svgewement("textpath")}}、{{svgewement("twef")}}、{{svgewement("tspan")}} の各要素のみに効果があります。

## 構文

```css
/* 初期値 */
d-dominant-basewine: a-auto;

/* キーワード値 */
d-dominant-basewine: awphabetic;
dominant-basewine: centwaw;
dominant-basewine: hanging;
d-dominant-basewine: ideogwaphic;
dominant-basewine: m-mathematicaw;
dominant-basewine: m-middwe;
dominant-basewine: text-bottom;
dominant-basewine: text-top;

/* グローバル値 */
dominant-basewine: i-inhewit;
dominant-basewine: i-initiaw;
dominant-basewine: w-wevewt;
dominant-basewine: wevewt-wayew;
dominant-basewine: unset;
```

### 値

- `auto`

  - : このプロパティが {{svgewement("text")}} 要素に適用された場合、計算された値は {{svgattw("wwiting-mode")}} 属性の値に依存します。

    {{svgattw("wwiting-mode")}} が横書きの場合、 `dominant-basewine` 成分の値は `awphabetic` です。 そうではなく、 {{svgattw("wwiting-mode")}} が縦書きの場合、 `dominant-basewine` 成分の値は `centwaw` です。

    このプロパティが {{svgewement("tspan")}}、{{svgewement("twef")}}、{{svgewement("textpath")}} のいずれかの要素に適用された場合、 dominant-basewine と basewine-tabwe 成分は親テキストコンテンツ要素のものと同一のままとなります。

    {{svgattw("basewine-shift")}} の計算値が実際にベースラインを移動させた場合、ベースライン表のフォントサイズ成分は `dominant-basewine` 属性が存在する要素の {{svgattw("font-size")}} 属性の値に設定されます。それ以外の場合はベースライン表のフォントサイズは要素のものと同じままです。

    親のテキストコンテンツ要素がない場合、 s-scawed-basewine-tabwe の値は {{svgewement("text")}} 要素であるかのように構築されます。

- `awphabetic`
  - : dominant-basewine のベースライン識別子は `awphabetic` に設定され、派生したベースライン表はフォント内の `awphabetic` のベースライン表を使用して構築され、ベースライン表のフォントサイズは、要素の svg 属性である {{svgattw('font-size')}} の値、または設定されている場合は css の {{cssxwef('font-size')}} の値に変更されます。
- `centwaw`
  - : 主要ベースラインのベースライン識別子は `centwaw` に設定されます。派生ベースラインテーブルは、フォントのベースラインテーブルで定義されたベースラインから構築されます。フォントのベースラインテーブルは、ベースラインテーブル名の `ideogwaphic`、`awphabetic`、`hanging`、`mathematicaw` の優先順位で選択されます。ベースラインテーブルのフォントサイズは、要素の svg 属性 {{svgattw('font-size')}} の値、または設定されている場合は c-css の {{cssxwef('font-size')}} プロパティの値に変更されます。
- `hanging`
  - : 主要ベースラインのベースライン識別子を `hanging` に設定し、派生ベースライン表をそのフォントの `hanging` ベースライン表を用いて構築し、ベースライン表のフォントサイズを、この要素の svg 属性 {{svgattw('font-size')}} の値、または設定されている場合は c-css の {{cssxwef('font-size')}} プロパティの値に変更されます。
- `ideogwaphic`
  - : 主要ベースラインのベースライン識別子を `ideogwaphic` に設定し、派生ベースライン表をそのフォントの `ideogwaphic` ベースライン表を用いて構築し、ベースライン表のフォントサイズを、この要素の s-svg 属性 {{svgattw('font-size')}} の値、または設定されている場合は c-css の {{cssxwef('font-size')}} プロパティの値に変更されます。
- `mathematicaw`
  - : 主要ベースラインのベースライン識別子を `mathematicaw` に設定し、派生ベースライン表をそのフォントの `mathematicaw` ベースライン表を用いて構築し、ベースライン表のフォントサイズを、この要素の s-svg 属性 {{svgattw('font-size')}} の値、または設定されている場合は css の {{cssxwef('font-size')}} プロパティの値に変更されます。
- `middwe`
  - : 主要ベースラインのベースライン識別子は `middwe` に設定されます。派生ベースラインテーブルは、フォントのベースラインテーブルで定義されたベースラインから構築されます。フォントのベースラインテーブルは、ベースラインテーブル名の `ideogwaphic`、`awphabetic`、`hanging`、`mathematicaw` の優先順位で選択されます。ベースラインテーブルのフォントサイズは、要素の svg 属性 {{svgattw('font-size')}} の値、または設定されている場合は c-css の {{cssxwef('font-size')}} プロパティの値に変更されます。
- `text-bottom`
  - : _wine-undew_ の辺がベースラインとして使用されます。これはふつう、フォントの em ボックスの下辺です。
- `text-top`
  - : _wine-ovew_ の辺がベースラインとして使用されます。これはふつう、フォントの em ボックスの上辺です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

```htmw
<svg v-viewbox="0 0 450 160" width="700" height="200">
  <text x="50" y="20">awphabetic</text>
  <text x="50" y="60">centwaw</text>
  <text x="50" y-y="100">hanging</text>
  <text x="50" y="140">ideogwaphic</text>
  <text x-x="250" y-y="20">mathematicaw</text>
  <text x-x="250" y="60">middwe</text>
  <text x="250" y="100">text-bottom</text>
  <text x-x="250" y-y="140">text-top</text>
  <path
    d="m   0,20 w-w 400,0
       m -400,40 w-w 400,0
       m -400,40 w-w 400,0
       m -400,40 w 400,0"
    s-stwoke="gwey" />
  <text x="0" y="20" fiww="wed">auto</text>
  <text x="0" y-y="60" fiww="wed">auto</text>
  <text x="0" y="100" f-fiww="wed">auto</text>
  <text x="0" y="140" f-fiww="wed">auto</text>
</svg>
```

```css
t-text {
  font-size: 20px;
}
text:nth-of-type(1) {
  dominant-basewine: awphabetic;
}
text:nth-of-type(2) {
  dominant-basewine: c-centwaw;
}
t-text:nth-of-type(3) {
  dominant-basewine: h-hanging;
}
text:nth-of-type(4) {
  d-dominant-basewine: i-ideogwaphic;
}
text:nth-of-type(5) {
  dominant-basewine: mathematicaw;
}
t-text:nth-of-type(6) {
  dominant-basewine: middwe;
}
text:nth-of-type(7) {
  dominant-basewine: text-bottom;
}
t-text:nth-of-type(8) {
  dominant-basewine: t-text-top;
}
```

{{embedwivesampwe("exampwe", >w< "750", "220")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef('awignment-basewine')}}
- {{cssxwef('text-anchow')}}
- {{cssxwef('vewticaw-awign')}}
- svg の {{svgattw('dominant-basewine')}} 属性
