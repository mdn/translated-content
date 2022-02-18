---
title: offset-path
slug: Web/CSS/offset-path
tags:
  - CSS
  - CSS モーションパス
  - 実験的
  - モーションパス
  - リファレンス
  - motion-path
  - offset-path
  - recipe:css-property
browser-compat: css.properties.offset-path
translation_of: Web/CSS/offset-path
---
{{CSSRef}}

**`offset-path`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素がたどる移動経路と、親コンテナーまたは SVG 座標系の中での要素の配置を指定します。

{{EmbedInteractiveExample("pages/css/offset-path.html")}}

## 構文

```css
/* 既定値 */
offset-path: none;

/* 関数値 */
offset-path: ray(45deg closest-side contain);

/* URL */
offset-path: url(#path);

/* 図形 */
offset-path: circle(50% at 25% 25%);
offset-path: inset(50% 50% 50% 50%);
offset-path: polygon(30% 0%, 70% 0%, 100% 50%, 30% 100%, 0% 70%, 0% 30%);
offset-path: path('M 0,200 Q 200,200 260,80 Q 290,20 400,0 Q 300,100 400,200');

/* 位置ボックス */
offset-path: margin-box;
offset-path: stroke-box;

/* グローバル値 */
offset-path: inherit;
offset-path: initial;
offset-path: revert;
offset-path: unset;
```

### 値

- `ray()`
  - : 最大 3 つの値を取り、ボックスの位置から始まり、指定された角度で定義された方向に進む線分であるパスを定義します。定義は角度で、 CSS のグラデーションの角度と同様に、 `0deg` を上にして正の角度を時計回り方向に増加させます。続く寸法の値は CSS の半径方向のグラデーションの寸法の値に似ており、 `closest-side` から `farthest-corner` まで、そしてキーワード `contain` です。
- `url()`
  - : SVG 図形の ID の参照です。 -- `circle`, `ellipse`, `line`, `path`, `polygon`, `polyline`, `rect` -- のいずれかで、図形の形状をパスとして使用します。
- `<basic-shape>`

  - : [CSS シェイプ](/ja/docs/Web/CSS/CSS_Shapes/Basic_Shapes)、たとえば `circle()`, `ellipse()`, `inset()`, `polygon()`, `path()` を指定します。

    - `path()`
    - : SVG 座標の構文で定義されたパス文字列です。

- `none`
  - : モーションパスを全く定義しません。

## 解説

このプロパティは、移動する要素がたどることができる経路を定義します。オフセットの経路は 1 つまたは複数のサブ経路で指定された経路か、スタイル付けされていない基本図形の形状で指定します。オフセット経路上の要素の正確な位置は、 {{cssxref("offset-distance")}} プロパティで決定されます。それぞれの図形または経路は、初期位置を {{cssxref("offset-distance")}} の `0` の計算値で定義し、オブジェクトの回転方向を指定する初期方向を初期位置にします。

仕様書の初期の版では、このプロパティを `motion-path` と呼んでいました。これが `offset-path` と変更されたのは、このプロパティが動きではなく静的な位置を記述するからです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### offset-path を指定した要素のアニメーション

CSS コードサンプルの `offset-path` プロパティは、 SVG の `<path>` 要素と同じモーションパスを定義しています。このパスは、 SVG コードのレンダリングを見てもわかるように、煙突のある家の線画になっています。

#### SVG

ハサミの上半分と下半分は、 `offset-path` で定義されたモーションパスの始点に沿って配置されていなければ、キャンバスの左上に表示されます。

```html
<svg xmlns="http://www.w3.org/2000/svg"
     width="700"
     height="450"
     viewBox="350 0 1400 900">
  <title>House and Scissors</title>
  <rect x="595"
        y="423"
        width="610"
        height="377"
        fill="blue" />
  <polygon points="506,423 900,190 1294,423"
           fill="yellow" />
  <polygon points="993,245 993,190 1086,190 1086,300"
           fill="red" />
  <path id="house" d="M900,190 L993,245 V201 A11,11 0 0,1 1004,190 H1075 A11,11 0 0,1 1086,201 V300 L1294,423 H1216 A11,11 0 0,0 1205,434 V789 A11,11 0 0,1 1194,800 H606 A11,11 0 0,1 595,789 V434 A11,11 0 0,0 584,423 H506 L900,190"
        fill="none"
        stroke="black"
        stroke-width="13"
        stroke-linejoin="round"
        stroke-linecap="round" />
  <path id="firstScissorHalf" class="scissorHalf"
        d="M30,0 H-10 A10,10 0 0,0 -20,10 A20,20 0 1,1 -40,-10 H20 A10,10 0 0,1 30,0 M-40,20 A10,10 1 0,0 -40,0 A10,10 1 0,0 -40,20 M0,0"
        transform="translate(0,0)"
        fill="green"
        stroke="black"
        stroke-width="5"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill-rule="evenodd" />
  <path id="secondScissorHalf" class="scissorHalf"
        d="M30,0 H-10 A10,10 0 0,1 -20,-10 A20,20 0 1,0 -40,10 H20 A10,10 0 0,0 30,0 M-40,-20 A10,10 1 0,0 -40,0 A10,10 1 0,0 -40,-20 M0,0"
        transform="translate(0,0)"
        fill="forestgreen"
        stroke="black"
        stroke-width="5"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill-rule="evenodd" />
</svg>
```

#### CSS

```css
.scissorHalf {
  offset-path: path('M900,190  L993,245 V201  A11,11 0 0,1 1004,190  H1075  A11,11 0 0,1 1086,201  V300  L1294,423 H1216  A11,11 0 0,0 1205,434  V789  A11,11 0 0,1 1194,800  H606  A11,11 0 0,1 595,789  V434  A11,11 0 0,0 584,423  H506 L900,190');
  animation: followpath 4s linear infinite;
}

@keyframes followpath {
   to {
     motion-offset: 100%;
     offset-distance: 100%;
   }
}
```

#### 結果

{{EmbedLiveSample('Animating_an_element_with_offset-path', '100%', '450')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("offset")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-rotate")}}
- [SVG \<path>](/ja/docs/Web/SVG/Tutorial/Paths)

その他のデモ:

- [Examples of the various values](https://codepen.io/team/css-tricks/pen/WZdKMq)
- [Triangle](https://codepen.io/ericwilligers/pen/jrbJPp)
- [Scissors](https://codepen.io/ericwilligers/pen/bwVkNa)
- [Eyes](https://jsfiddle.net/ericwilligers/r1snqdan/)
