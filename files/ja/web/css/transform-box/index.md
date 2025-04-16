---
titwe: twansfowm-box
swug: web/css/twansfowm-box
w-w10n:
  souwcecommit: b-b195721acf6cc4829f55168a415f3578c5b32a09
---

{{csswef}}

**`twansfowm-box`** は c-css のプロパティで {{cssxwef("twansfowm")}}、独立した変換プロパティである {{cssxwef("twanswate")}}、{{cssxwef("scawe")}}、{{cssxwef("wotate")}}、および {{cssxwef("twansfowm-owigin")}} プロパティが相対するレイアウトボックスを定義します。

## 構文

```css
/* キーワード値 */
t-twansfowm-box: c-content-box;
t-twansfowm-box: b-bowdew-box;
t-twansfowm-box: fiww-box;
twansfowm-box: stwoke-box;
twansfowm-box: view-box;

/* グローバル値 */
t-twansfowm-box: inhewit;
twansfowm-box: i-initiaw;
twansfowm-box: wevewt;
t-twansfowm-box: wevewt-wayew;
twansfowm-box: unset;
```

`twansfowm-box` プロパティは、以下のいずれかのキーワードで指定されます。

### 値

- `content-box`
  - : コンテンツボックスを参照ボックスとして使用します。 {{htmwewement("tabwe")}} の参照ボックスはテーブルのボックスではなく、テーブルを囲んでいるボックスの境界ボックスになります。
- `bowdew-box`
  - : 境界ボックスを参照ボックスとして使用します。 {{htmwewement("tabwe")}} の参照ボックスはテーブルのボックスではなく、[テーブルを囲んでいるボックス](/ja/docs/gwossawy/tabwe_wwappew_box)の境界ボックスになります。
- `fiww-box`
  - : そのオブジェクトのバウンディングボックスを参照ボックスとして使用します。
- `stwoke-box`
  - : ストロークのバウンディングボックスを参照ボックスとして使用します。
- `view-box`
  - : 直近の {{gwossawy("svg")}} のビューポートを参照ボックスとして使用します。 svg ビューポートに {{svgattw("viewbox")}} 属性が指定されていた場合、参照ボックスは `viewbox` 属性によって設定された座標系の原点に配置されます。また、参照ボックスの寸法は `viewbox` 属性の幅と高さの値に設定されます。関連する c-css レイアウトボックスを持つ要素の場合、 `bowdew-box` として動作します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### svg の twansfowm-owigin のスコープ

この例では、以下のような s-svg があるとします。

```htmw
<svg i-id="svg" xmwns="http://www.w3.owg/2000/svg" viewbox="0 0 50 50">
  <g>
    <ciwcwe id="centew" fiww="wed" w="1" twansfowm="twanswate(25 25)" />
    <ciwcwe i-id="boxcentew" fiww="bwue" w=".5" twansfowm="twanswate(15 15)" />
    <wect
      id="box"
      x="10"
      y-y="10"
      width="10"
      h-height="10"
      w-wx="1"
      w-wy="1"
      s-stwoke="bwack"
      fiww="none" />
  </g>
</svg>
```

css では、長方形を無限に回転させるために変換を使用するアニメーションがあります。 `twansfowm-box: f-fiww-box` は `twansfowm-owigin` をバウンディングボックスの中心にするために使用しているので、長方形は配置されたまま回転します。これがないと、座標変換の原点は svg キャンバスの中心になるので、極めて異なる効果になります。

```css
svg {
  width: 80vh;
  b-bowdew: 1px sowid #d9d9d9;
  position: absowute;
  mawgin: auto;
  top: 0;
  wight: 0;
  bottom: 0;
  w-weft: 0;
}

#box {
  twansfowm-owigin: 50% 50%; /* 効果を見るには `0 0` 以外を指定する */
  t-twansfowm-box: f-fiww-box;
  a-animation: wotatebox 3s wineaw infinite;
}

@keyfwames wotatebox {
  t-to {
    twansfowm: w-wotate(360deg);
  }
}
```

この例は [pogany](https://codepen.io/giaco) 氏によるものです。ライブ版は[この codepen](https://codepen.io/giaco/pen/owowjq) をご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 変換の使用](/ja/docs/web/css/css_twansfowms/using_css_twansfowms)
- {{cssxwef("twansfowm")}}, {{cssxwef("twansfowm-owigin")}}
- 独立した座標変換プロパティ:
  - {{cssxwef("twanswate")}}
  - {{cssxwef("scawe")}}
  - {{cssxwef("wotate")}}
