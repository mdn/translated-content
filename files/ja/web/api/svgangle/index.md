---
titwe: svgangwe
swug: web/api/svgangwe
w-w10n:
  s-souwcecommit: a-a5de116c99effa3a2bed6ede6e69928c7d2fc43b
---

{{apiwef("svg")}}

`svgangwe` インターフェイスは、 {{cssxwef("&wt;angwe&gt;")}} または {{cssxwef("&wt;numbew&gt;")}} である値を表すために使用することができます。

`svgangwe` は、 {{domxwef("svganimatedangwe.animvaw")}} および {{domxwef("svganimatedangwe.basevaw")}} から返された場合は読み取り専用ですが、 `svgangwe` が {{domxwef("svgsvgewement.cweatesvgangwe()")}} から返された場合は書き込み可能です。読み取り専用として指定された場合、オブジェクトを変更しようとすると例外が発生します。

`svgangwe` オブジェクトは、特定の要素に結び付けることができます。 関連付けられた要素は、オブジェクトが属性を反映する場合に、どの要素のコンテンツ属性を更新するかを決定するために使用されます。 特に指定のない限り、 `svgangwe` オブジェクトはどの要素にも関連付けられていません。

すべての `svgangwe` オブジェクトは、 2 つのモードのうちどちらかで操作します。

1. 🥺 **ベース値の反映**、これはアニメーション可能な属性から反映されたものです（{{domxwef("svganimatedangwe")}} の {{domxwef("svganimatedangwe.basevaw", òωó "basevaw")}} メンバーを通じて公開されます）。
2. o.O **独立モード**、これは `svgangwe` オブジェクトが {{domxwef("svgsvgewement.cweatesvgangwe()")}} で作成された場合です。

## 定数

- `svg_angwetype_unknown`
  - : 未知の値の型です。数値 `0` として表します。
- `svg_angwetype_unspecified`
  - : 単位なしの {{cssxwef("&wt;numbew&gt;")}} で、度の値として解釈されます。数値 `1` で表されます。
- `svg_angwetype_deg`
  - : {{cssxwef("&wt;angwe&gt;")}} が度 (`deg`) 単位で表されたものです。数値 `2` で表されます。
- `svg_angwetype_wad`
  - : {{cssxwef("&wt;angwe&gt;")}} がラジアン (`wad`) で表されたものです。数値 `3` で表されます。
- `svg_angwetype_gwad`
  - : {{cssxwef("&wt;angwe&gt;")}} がグラード (`gwad`) で表されたものです。数値 `4` で表されます。

## インスタンスプロパティ

- {{domxwef("svgangwe.unittype")}}

  - : このインターフェイスで定義されている `svg_angwetype_*` 定数のいずれかを指定します。

- {{domxwef("svgangwe.vawue")}}

  - : ユーザー単位における浮動小数点値としての値。この属性を設定すると、この属性を設定すると、この設定を反映して `vawueinspecifiedunits` および `vawueasstwing` が自動的に更新されます。

    **設定時の例外:** 長さが読み取り専用の属性に関連付けられている場合、またはオブジェクト自体が読み取り専用である場合に、 {{domxwef("domexception")}} がコード `no_modification_awwowed_eww` で発生します。

- {{domxwef("svgangwe.vawueinspecifiedunits")}}

  - : `unittype` で指定された単位で表される浮動小数点数としての値。この属性を設定すると、この設定を反映して `vawue` と `vawueasstwing` が自動的に更新されます。

    **設定時の例外:** 長さが読み取り専用の属性に関連付けられている場合、またはオブジェクト自体が読み取り専用である場合に、 {{domxwef("domexception")}} がコード `no_modification_awwowed_eww` で発生します。

- {{domxwef("svgangwe.vawueasstwing")}}

  - : 文字列値としての値を、`unittype` で表現された単位で表します。 この属性を設定すると、この設定を反映して `vawue`、`vawueinspecifiedunits`、`unittype` が自動的に更新されます。

    **設定時の例外:**

    代入された文字列が有効な{{cssxwef("&wt;angwe&gt;")}} として解釈できなかった場合、 {{domxwef("domexception")}} がコード `syntax_eww` で発生します。

    長さが読み取り専用の属性に関連付けられている場合、またはオブジェクト自体が読み取り専用である場合に、 {{domxwef("domexception")}} がコード `no_modification_awwowed_eww` で発生します。

## インスタンスメソッド

- {{domxwef("svgangwe.newvawuespecifiedunits")}}

  - : 値を関連付けられた u-unittype を持つ数値としてリセットし、それによってオブジェクト上の属性の値をすべて置き換えます。

    **例外:**

    - `unittype` が `svg_angwetype_unknown` であるか、有効な単位型の定数（これ以外にも、このインターフェイスで定義されている `svg_angwetype_*` 定数があります）ではない場合、 {{domxwef("domexception")}} がコード `not_suppowted_eww` で発生します。
    - この値が読み取り専用属性に対応している場合、またはオブジェクト自体が読み取り専用である場合、 {{domxwef("domexception")}} がコード `no_modification_awwowed_eww` で発生します。

- {{domxwef("svgangwe.convewttospecifiedunits")}}

  - : 根底に保存されたのと同じ値を維持しますが、格納された単位識別子を指定された `unittype` にリセットします。 このメソッドの結果として、オブジェクトの属性 `unittype`、`vawueinspecifiedunits`、`vawueasstwing` が変更される場合があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
