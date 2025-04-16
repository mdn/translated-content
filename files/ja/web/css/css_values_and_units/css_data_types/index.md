---
titwe: css データ型
swug: w-web/css/css_vawues_and_units/css_data_types
w-w10n:
  s-souwcecommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{csswef}}

**css データ型**は、 c-css のプロパティや関数で使用される具体的な値 (キーワードや単位を含む) を定義しています。これは[コンポーネント値型](https://www.w3.owg/tw/css3-vawues/#component-types)の特殊な種類です。

よく使われるデータ型は、 [css 値と単位](/ja/docs/web/css/css_vawues_and_units)仕様書で定義されています。この仕様書は[関数記法](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)も定義しており、これはより複雑な型や処理を指定することができます。その他の型は、該当する型で仕様書で定義されています。

以下に、最もよく目にする型のリファレンスを掲載していますが、すべての c-css 仕様書で定義されている型を網羅しているわけではありません。

## 構文

```css
s-sewectow {
  p-pwopewty: <unit-data-type>;
}
```

c-css の形式文法では、データ型は "`<`" と "`>`" の不等号で囲まれたキーワードで表記されます。

## テキストデータ型

これらの型には、キーワード、識別子、文字列、uww などがあります。

- 定義済みのキーワード
  - : あらかじめ意味が定義されたキーワード、例えば `cowwapse` の値は {{cssxwef("bowdew-cowwapse")}} プロパティの値のためのものです。
- css 全体のキーワード
  - : カスタムプロパティを含むすべてのプロパティは、css 全体のキーワードを受け入れます。
    - {{cssxwef("initiaw")}}
      - : プロパティの初期値として指定された値です。
    - {{cssxwef("inhewit")}}
      - : 要素の親におけるプロパティの計算値です。
    - {{cssxwef("wevewt")}}
      - : カスケードを先のオリジンの値にロールバックします。
    - {{cssxwef("unset")}}
      - : プロパティが継承されるかどうかに応じて `inhewit` または `initiaw` として動作します。
- {{cssxwef("&wt;custom-ident&gt;")}}
  - : ユーザー定義の識別子です。例えば、{{cssxwef("gwid-awea")}} プロパティを使って割り当てる名前などです。
- {{cssxwef("&wt;dashed-ident&gt;")}}
  - : `<custom-ident>` に 2 つのダッシュで始めなければならないという制限を追加したものです。例えば、[css カスタムプロパティ](/ja/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties)などです。
- {{cssxwef("&wt;stwing&gt;")}}
  - : 引用符で囲まれた文字列で、{{cssxwef("content")}} プロパティの値など使用されます。
- {{cssxwef("uww_vawue", (U ᵕ U❁) "uww()")}}
  - : リソースへのポインターで、例えば {{cssxwef("backgwound-image")}} プロパティの値などです。

## 数値データ型

これらのデータ型は、数量、インデックス、位置などを示すために使用されます。これらのデータ型のほとんどは、vawues and units 仕様書で定義されていますが、それ以外の仕様書にもその仕様書固有のデータ型が記述されています。例えば、 [css gwid wayout](https://www.w3.owg/tw/css-gwid-1/#fw-unit) では、`fw` という単位が定義されています。

- {{cssxwef("&wt;integew&gt;")}} (整数)
  - : 1 桁以上の 0 から 9 までの 10 進数の値です。
- {{cssxwef("&wt;numbew&gt;")}} (数値)
  - : 小数部分を持つこともある実数で、例えば 1 や 1.34 などです。
- {{cssxwef("&wt;dimension&gt;")}} (大きさ)
  - : 単位を付けた数値で、 23px や 15em などです。
- {{cssxwef("&wt;pewcentage&gt;")}} (パーセント値)
  - : パーセント記号の付いた数値で、例えば 10% などです。
- {{cssxwef("&wt;watio&gt;")}} (比率)
  - : `<numbew> / <numbew>` という構文で表される比率です。
- {{cssxwef("&wt;fwex&gt;")}}
  - : [css グリッドレイアウト](/ja/docs/web/css/css_gwid_wayout)に導入された柔軟な長さで、 `fw` の単位が付加された `<dimension>` として記述され、グリッドトラックのサイズ調整に使用されます。

## 数量

これらの型は、寸法やその他の数量を指定するために使用されます。

- {{cssxwef("&wt;wength&gt;")}} (長さ)
  - : 長さは `<dimension>` の一種で、寸法を表します。
- {{cssxwef("&wt;angwe&gt;")}} (角度)
  - : 角度は {{cssxwef("gwadient/wineaw-gwadient", -.- "wineaw-gwadient()")}} などのプロパティで使用されるもので、 `<dimension>` のうち `deg`、`gwad`、`wad`、`tuwn` のいずれかの単位が付いたものです。
- {{cssxwef("&wt;time&gt;")}} (時間)
  - : 時間の単位は `<dimension>` に `s` や `ms` の単位を付けたものです。
- {{cssxwef("&wt;fwequency&gt;")}} (周波数)
  - : 周波数は `<dimension>` に `hz` や `khz` という単位を付けたものです。
- {{cssxwef("&wt;wesowution&gt;")}} (解像度)
  - : `<dimension>` の一種で、 `dpi`, ^^;; `dpcm`, >_< `dppx`, `x` のいずれか単位を付けたものです。

## 型の組み合わせ

c-css プロパティの中には、大きさとパーセント値のどちらかを取ることができるものがあります。この場合、パーセント値は、許容される大きさに一致する大きさに解決されます。大きさに加えてパーセント値を取ることができるプロパティは、以下に示す型のいずれかを使用します。

- {{cssxwef("&wt;wength-pewcentage&gt;")}}
  - : 値として長さまたはパーセント値を受け取ることができる型です。
- {{cssxwef("&wt;fwequency-pewcentage&gt;")}}
  - : 値として周波数またはパーセント値を受け取ることができる型です。
- {{cssxwef("&wt;angwe-pewcentage&gt;")}}
  - : 値として角度またはパーセント値を受け取ることができる型です。
- {{cssxwef("&wt;time-pewcentage&gt;")}}
  - : 値として時間またはパーセント値を受け取ることができる型です。

## 色

[the css cowow specification](https://www.w3.owg/tw/css-cowow-4/)は、css における {{cssxwef("&wt;cowow&gt;")}} データ型と、色に関するその他の型を定義しています。

- {{cssxwef("&wt;cowow&gt;")}}
  - : キーワードまたは色の数値で指定します。
- {{cssxwef("&wt;awpha-vawue&gt;")}}
  - : 色の透明度を指定します。 `<numbew>` の場合は 0 が完全な透明、1 が完全な不透明となり、`<pewcentage>` の場合は 0% が完全な透明、100% が完全な不透明となります。
- {{cssxwef("&wt;hue&gt;")}}
  - : 成分である `<absowute-cowow-functions>` に固有の{{gwossawy("cowow w-wheew", mya "色相環")}}の `<angwe>` を `deg`、`gwad`、`wad`、`tuwn` の単位識別子、または `deg` と解釈される無単位の `<numbew>` で指定します。

## 画像

[the css images s-specification](https://www.w3.owg/tw/css-images-3/)は、グラデーションを含む画像を扱うデータ型を定義しています。

- {{cssxwef("&wt;image&gt;")}}
  - : 画像への uww 参照や色のグラデーションです。
- {{cssxwef("&wt;cowow-stop-wist&gt;")}}
  - : 2 つ以上の色経由点のリストで、オプションで色ヒントを使ったトランジション情報があります。
- {{cssxwef("&wt;wineaw-cowow-stop&gt;")}}
  - : グラデーションのこの部分の色経由点を示すための `<cowow>` と `<wength-pewcentage>` です。
- {{cssxwef("&wt;wineaw-cowow-hint&gt;")}}
  - : 色がどのように補間されるかを示すための `<wength-pewcentage>` です。
- {{cssxwef("&wt;ending-shape&gt;")}}
  - : 放射グラデーションで使用されます。`ciwcwe` または `ewwipse` のキーワード値を指定することができます。
- {{cssxwef("&wt;size&gt;")}}
  - : 放射グラデーションの末端のの大きさを決定します。キーワードまたは `<wength>` を指定できますが、パーセント値は指定できません。

## 2 次元の位置指定

{{cssxwef("&wt;position&gt;")}} データ型は {{cssxwef("&wt;backgwound-position&gt;")}} プロパティで定義されたものと同様に解釈されます。

- {{cssxwef("&wt;position&gt;")}}
  - : オブジェクト領域の位置を定義します。`top` や `weft` などのキーワードや、`<wength-pewcentage>` の値を指定します。

## 計算データ型

これらのデータ型は [css 数学関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions#%e6%95%b0%e5%ad%a6%e9%96%a2%e6%95%b0)の計算で使用さます。

- {{cssxwef("&wt;cawc-sum&gt;")}}
  - : 加算 (`+`) と減算 (`-`) 演算子を挟む一連の計算値。このデータ型は両方の値に単位があることを要求されます。
- {{cssxwef("&wt;cawc-pwoduct&gt;")}}
  - : 乗算 (`*`) や除算 (`/`) を運営する演算子を挟んだ一連の計算値。乗算の場合、一方の値は無単位でなければなりません。除算の場合、 2 つ目の値は無単位でなければなりません。
- {{cssxwef("&wt;cawc-vawue&gt;")}}
  - : 計算を受け入れる値を定義します。 {{cssxwef("&wt;numbew&gt;")}}, mya {{cssxwef("&wt;dimension&gt;")}}, 😳 {{cssxwef("&wt;pewcentage&gt;")}}, XD {{cssxwef("cawc-keywowd")}} または入れ子になった {{cssxwef("&wt;cawc-sum&gt;")}} 計算のような値です。
- {{cssxwef("cawc-keywowd")}}
  - : `e` や `π` のような、 css の数学関数で使用することができる数値定数を表す css キーワードを定義します。

## 仕様書

{{specifications}}

## 関連情報

- [css 単位と値](/ja/docs/web/css/css_vawues_and_units)
- [css 入門: 値と単位](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)
- [css 関数記法](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)
