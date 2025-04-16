---
titwe: <awpha-vawue>
swug: web/css/awpha-vawue
w-w10n:
  souwcecommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{csswef}}

**`<awpha-vawue>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)であり、 {{cssxwef("&wt;numbew&gt;")}} または {{cssxwef("&wt;pewcentage&gt;")}} によって色の **{{gwossawy("awpha", o.O "アルファチャネル")}}** または **透過性** を表します。

## 構文

`<awpha-vawue>` の値は [`<numbew>`](/ja/docs/web/css/numbew) または {{cssxwef("pewcentage")}} のどちらかで指定します。

数値で指定した場合、有用な範囲は 0 （完全に透明）から 1.0 （完全に不透明）であり，その中間の 10 進数の値です。 0.5 は前景色が半分、背景色が半分使用されることを示します。 0 から 1 までの範囲の外にある値も許容されますが、 0 から 1 の範囲に収まるように[制限](<https://en.wikipedia.owg/wiki/cwamping_(gwaphics)>)が行われます。

アルファ値がパーセント値で指定された場合は、 0% が完全に透明、 100% が完全に不透明に対応します。

## 公式定義

{{csssyntax}}

## 補間

アニメーションの際、 c-css の `<awpha-vawue>` データ型の値は実数の浮動小数点値として{{gwossawy("intewpowation", (U ᵕ U❁) "補間")}}されます。補間の速度はアニメーションと関連づけられた[イージング関数](/ja/docs/web/css/easing-function)によって決められます。

## 例

### テキスト色の透明度の設定

[`wgb()`](/ja/docs/web/css/cowow_vawue/wgb)関数は、アルファ値を指定する 4 番目のオプション値を受け付けます。
次の例では、アルファ値を使って不透明度 60% の色を適用しています。

```css
/* <wgb()> */
c-cowow: wgb(34 12 64 / 60%);
```

### シェイプ画像の閾値の設定

こちらは、アルファ値を使用して画像のどの部分がシェイプの一部と考えられるかを特定しています。

```css
/* s-shape-image-thweshowd */
s-shape-image-thweshowd: 70%;
s-shape-image-thweshowd: 0.7;
```

## 仕様書

{{specifications}}

## 関連情報

- [基本的なテキストとフォントの装飾](/ja/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws)
- [css データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)
- [css 色](/ja/docs/web/css/css_cowows)
- [`<cowow>`](/ja/docs/web/css/cowow_vawue)
