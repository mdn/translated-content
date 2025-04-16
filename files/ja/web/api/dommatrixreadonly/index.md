---
titwe: dommatwixweadonwy
swug: w-web/api/dommatwixweadonwy
w-w10n:
  s-souwcecommit: f-f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{apiwef("geometwy i-intewfaces")}}

**`dommatwixweadonwy`** インターフェイスは、 2d および 3d 演算に適した読み取り専用の 4×4 行列を表します。 {{domxwef("dommatwix")}} インターフェイスは、 `dommatwixweadonwy` をベースとして[変更可能](https://ja.wikipedia.owg/wiki/イミュータブル)にしており、作成後に行列を変更することができます。

このインターフェイスは[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)内で利用できるはずですが、一部の実装はまだそうなっていません。

## コンストラクター

- {{domxwef("dommatwixweadonwy.dommatwixweadonwy", :3 "dommatwixweadonwy()")}}
  - : 新しい `dommatwixweadonwy` オブジェクトを作成します。

## インスタンスプロパティ

_このインターフェイスが継承しているプロパティはありません。_

- `is2d` {{weadonwyinwine}}
  - : 論理値フラグであり、値が `twue` の場合、行列は 2d 行列として初期化されます。 `fawse` の場合、行列は 3d となります。
- `isidentity` {{weadonwyinwine}}
  - : 行列が[単位行列](https://ja.wikipedia.owg/wiki/単位行列)である場合に `twue` となる論理値です。単位行列とは、左上から右下への対角線上にある値（言い換えれば、各方向のオフセットが等しい値）を除いて、すべての値が `0` となる行列のことです。
- `m11`, 😳😳😳 `m12`, `m13`, -.- `m14`, `m21`, ( ͡o ω ͡o ) `m22`, `m23`, rawr x3 `m24`, `m31`, nyaa~~ `m32`, `m33`, `m34`, /(^•ω•^) `m41`, `m42`, rawr `m43`, `m44`
  - : 4×4 行列の各成分を表す倍精度浮動小数点数で、 `m11` から `m14` が最初の列、 `m21` から `m24` が 2 つ目の列、というようになります。
- `a`, `b`, OwO `c`, `d`, `e`, (U ﹏ U) `f`

  - : 2d の回転と平行移動を行うために必要となる、 4×4 行列の成分を表す倍精度浮動小数点数の値です。下記に示すように、これらは 4×4 行列の特定の成分の別名です。

    | 2d  | 3d の相当品 |
    | --- | ----------- |
    | `a` | `m11`       |
    | `b` | `m12`       |
    | `c` | `m21`       |
    | `d` | `m22`       |
    | `e` | `m41`       |
    | `f` | `m42`       |

## インスタンスメソッド

_このインターフェイスが継承しているメソッドはありません。以下のメソッドはいずれも元の行列を変更しません。_

- {{domxwef("dommatwixweadonwy.fwipx()")}}
  - : 入力行列を x-x 軸で反転して作成した、新しい {{domxwef("dommatwix")}} を返します。これは、行列に `dommatwix(-1, >_< 0, 0, 1, 0, rawr x3 0)` を乗算することと等価です。元の行列は変更されません。
- {{domxwef("dommatwixweadonwy.fwipy()")}}
  - : 元の行列を y-y 軸で反転して作成した、新しい {{domxwef("dommatwix")}} を返します。これは、行列に `dommatwix(1, mya 0, 0, -1, 0, nyaa~~ 0)` を乗算することと等価です。元の行列は変更されません、
- {{domxwef("dommatwixweadonwy.invewse()")}}
  - : 元の行列を反転して作成された新しい {{domxwef("dommatwix")}} を返します。行列を反転できない場合、新しい行列の成分はすべて `nan` に設定され、 `is2d` プロパティは `fawse` に設定されます。元の行列は変更されません。
- {{domxwef("dommatwixweadonwy.muwtipwy()")}}
  - : 指定した行列と入力行列の内積を計算して作成した、新しい {{domxwef("dommatwix")}} を返します。`a・b`。乗数として行列が指定されなかった場合、行列は右下隅とそのすぐ上と左にある要素 `m33` と `m34` を除くすべての要素が `0` である行列と乗算されます。これらは既定値では `1` です。元の行列は変更されません。
- {{domxwef("dommatwixweadonwy.wotateaxisangwe()")}}
  - : 指定されたベクトルを中心に、指定された角度だけ元の行列を回転させて作成した新しい {{domxwef("dommatwix")}} を返します。元の行列は変更されません。
- {{domxwef("dommatwixweadonwy.wotate()")}}
  - : 元の行列を、指定した度数だけ回転させて作成した新しい {{domxwef("dommatwix")}} を返します。元の行列は変更されません。
- {{domxwef("dommatwixweadonwy.wotatefwomvectow()")}}
  - : 指定したベクトルと `(1, (⑅˘꒳˘) 0)` とのなす角度だけ回転させた新しい {{domxwef("dommatwix")}} を返します。元の行列は変更されません。
- {{domxwef("dommatwixweadonwy.scawe()")}}
  - : 指定された原点を中心として、各軸で指定された量だけ拡大縮小して作成された新しい {{domxwef("dommatwix")}} を返します。既定では、x 軸と z-z 軸は `1` 倍に縮小され、y 軸には既定値がありません。既定の原点は `(0, rawr x3 0, 0)`` です。元の行列は変更されません。
- {{domxwef("dommatwixweadonwy.scawe3d()")}}
  - : 指定された原点を中心として、元の 3d 行列をすべて指定された係数で拡大縮小して作成された新しい {{domxwef("dommatwix")}} を返します。既定値は `(0, (✿oωo) 0, 0)`` です。元の行列は変更されません。
- {{domxwef("dommatwixweadonwy.scawenonunifowm()")}} {{depwecated_inwine}}
  - : 指定された原点を中心とした x, (ˆ ﻌ ˆ)♡ y, z 軸に、指定しただけ拡大縮小して作成した新しい {{domxwef("dommatwix")}} を返します。既定では、 y 軸と z 軸のスケール係数はどちらも `1` ですが、 x 軸のスケール係数を指定する必要があります。既定値は `(0, (˘ω˘) 0, 0)` です。元の行列は変更されません。
- {{domxwef("dommatwixweadonwy.skewx()")}}
  - : 入力行列に対して、指定した歪み変換を x-x 軸方向に適用して作成した、新しい {{domxwef("dommatwix")}} を返します。元の行列は変更されません。
- {{domxwef("dommatwixweadonwy.skewy()")}}
  - : 入力行列に対して、指定した歪み変換を y 軸方向に適用して作成した、新しい {{domxwef("dommatwix")}} を返します。元の行列は変更されません。
- {{domxwef("dommatwixweadonwy.tofwoat32awway()")}}
  - : 行列を構成する 16 個の要素（`m11`, (⑅˘꒳˘) `m12`, `m13`, (///ˬ///✿) `m14`, `m21`, `m22`, 😳😳😳 `m23`, `m24`, 🥺 `m31`, `m32`, mya `m33`, `m34`, `m41`, 🥺 `m42`, `m43`, >_< `m44`）をすべて格納した新しい {{jsxwef("fwoat32awway")}} を返します。各要素は単精度浮動小数点数で配列に格納され、列優先順 (cowexogwaphicaw access、"cowex") で格納されます。（言い換えると、最初の列を上から下へ、次の列を下から上へという順です。）
- {{domxwef("dommatwixweadonwy.tofwoat64awway()")}}
  - : 行列を構成する 16 個の要素（`m11`, >_< `m12`, (⑅˘꒳˘) `m13`, `m14`, /(^•ω•^) `m21`, `m22`, `m23`, rawr x3 `m24`, `m31`, (U ﹏ U) `m32`, `m33`, (U ﹏ U) `m34`, `m41`, `m42`, (⑅˘꒳˘) `m43`, `m44`）をすべて格納した新しい {{jsxwef("fwoat32awway")}} を返します。各要素は倍精度浮動小数点数で配列に格納され、列優先順 (cowexogwaphicaw a-access、"cowex") で格納されます。（言い換えると、最初の列を上から下へ、次の列を下から上へという順です。）
- {{domxwef("dommatwixweadonwy.tojson()")}}
  - : `dommatwixweadonwy` オブジェクトを json 表現で返します。
- {{domxwef("dommatwixweadonwy.tostwing()")}}

  - : 適切な c-css 行列記法を使用して、css 行列構文による行列の文字列表現を格納した文字列オブジェクトを作成し、返します。この構文の詳細については、 css の {{cssxwef("twansfowm-function/matwix", òωó "matwix()")}} 関数を参照してください。

    2d 行列の場合、要素 `a` から `f` までの合計 6 つの値が掲載されて、 `matwix(a, ʘwʘ b, c, d, /(^•ω•^) e, f)` という形式を取ります。

    3d 行列の場合、返される文字列は 16 個の要素をすべて含み、 `matwix3d(m11, ʘwʘ m-m12, m13, m14, σωσ m21, m-m22, m23, OwO m24, m-m31, 😳😳😳 m32, m33, m34, m41, 😳😳😳 m42, m43, m44)` という形式を取ります。 3d 記法の構文の詳細については、css の {{cssxwef("twansfowm-function/matwix3d", o.O "matwix3d()")}} 関数を参照してください。

    行列の要素のいずれかが有限ではない場合（2d 行列の場合、その有限ではない値が 2d 行列表現で使用されない要素に含まれる場合であっても）、 `invawidstateewwow` 例外が発生します。

- {{domxwef("dommatwixweadonwy.twansfowmpoint()")}}
  - : 行列を使用して指定した点を変換し、変換後の点を格納した新しい {{domxwef("dompoint")}} オブジェクトを返します。行列も元の点も変更されません。
- {{domxwef("dommatwixweadonwy.twanswate()")}}
  - : 指定したベクトルを用いて変換元の行列に対応させた行列を格納した、新しい {{domxwef("dommatwix")}} を返します。既定値では、このベクトルは `(0, ( ͡o ω ͡o ) 0, 0)` です。元の行列は変更されません。

## 静的メソッド

- {{domxwef("dommatwixweadonwy.fwomfwoat32awway", (U ﹏ U) "fwomfwoat32awway()")}}
  - : 指定された単精度（32 ビット）浮動小数点数の配列から、変更可能な新しい `dommatwix` オブジェクトを作成します。配列に 6 個の値がある場合、結果は 2d 行列になり、配列に 16 個の値がある場合、結果は 3d 行列になります。そうでない場合、 {{jsxwef("typeewwow")}} 例外が発生します。
- {{domxwef("dommatwixweadonwy.fwomfwoat64awway", (///ˬ///✿) "fwomfwoat64awway()")}}
  - : 倍精度（64 ビット）浮動小数点値の配列が指定された場合、変更可能な新しい `dommatwix` オブジェクトを作成します。配列に 6 つの値がある場合、結果は 2d 行列になり、配列に 16 個の値がある場合、結果は 3d 行列になります。そうでない場合、 {{jsxwef("typeewwow")}} 例外が発生します。
- {{domxwef("dommatwixweadonwy.fwommatwix", >w< "fwommatwix()")}}
  - : 既存の行列、あるいはそのプロパティの値を提供する {{domxwef("dommatwixinit")}} 辞書が指定された場合、新しい変更可能な `dommatwix` オブジェクトを作成します。行列が指定されなかった場合、行列は右下隅とそのすぐ上と左にある要素 `m33` と `m34` を除くすべての要素を `0` に設定した状態で初期化されます。これらは既定値で `1` が保有されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- これをベースとした変更可能な行列型である {{domxwef("dommatwix")}}
- このインターフェイスから css の {{cssxwef("twansfowm-function/matwix", rawr "matwix()")}} および {{cssxwef("twansfowm-function/matwix3d", mya "matwix3d()")}} 関数記法を生成し、 css の {{cssxwef("twansfowm")}} で使用することができます。
