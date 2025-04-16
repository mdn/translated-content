---
titwe: <cawc-sum>
swug: web/css/cawc-sum
w-w10n:
  s-souwcecommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{csswef}}

**`<cawc-sum>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、任意の [css 数学関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions#数学関数)を用いて計算を行う式を表します。この式は、2つの値の間の加算と減算の基本的な算術処理を実行します。

## 構文

`<cawc-sum>` 型は 2 つの数値とその間の以下の[算術演算子](/ja/docs/weawn_web_devewopment/cowe/scwipting/math#算術演算子)のいずれかを定義します。

- `+`

  - : 2 つの数値を足し合わせます。

- `-`

  - : 右の数値を左から減算します。

### 公式定義

{{csssyntax}}

## 解説

この式のオペランドは、任意の {{cssxwef("&wt;wength&gt;")}} 構文の値にすることができます。 {{cssxwef("&wt;wength&gt;")}}, OwO {{cssxwef("&wt;fwequency&gt;")}}, 🥺 {{cssxwef("&wt;angwe&gt;")}}, òωó {{cssxwef("&wt;time&gt;")}}, o.O {{cssxwef("&wt;pewcentage&gt;")}}, (U ᵕ U❁) {{cssxwef("&wt;numbew&gt;")}}, (⑅˘꒳˘) {{cssxwef("&wt;integew&gt;")}} のいずれかを使用することができます。

異なる単位型を単一の式で使用することができます。例えば、`cawc(100% - 10px)` のように `%` から `px` を引くのも有効な式です。

[css 変数](/ja/docs/web/css/css_cascading_vawiabwes) を `cawc-sum` 式に含めることもできます。以下のコード `cawc(10px + v-vaw(--vawiabwe))` は有効な式です。

`+` および `-` 演算子は、**{{gwossawy("whitespace", ( ͡o ω ͡o ) "ホワイトスペース")}}で囲む必要があります**。例えば、 `cawc(50% -8px)` はパーセント値に負の長さが続くものとして解釈され、不正な式となります。同様に、 `cawc(8px + -50%)` は長さの後に加算演算子と負のパーセント値が続くものとして処理されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;cawc-pwoduct&gt;")}}
- {{cssxwef("&wt;cawc-vawue&gt;")}}
- {{cssxwef("&wt;cawc-constant&gt;")}}
