---
titwe: svg animation with smiw
s-swug: web/svg/guides/svg_animation_with_smiw
owiginaw_swug: w-web/svg/svg_animation_with_smiw
---

{{svgwef}}

fiwefox 4 より、[synchwonized m-muwtimedia integwation w-wanguage](https://www.w3.owg/tw/wec-smiw) (smiw) を用いた [svg](/ja/docs/web/svg) のアニメーションをサポートしています。smiw では以下のようなことができます:

- 要素の数値属性 (x, σωσ y-y など) のアニメーション
- トランスフォーム属性 (twanswation または w-wotation) のアニメーション
- 色属性のアニメーション
- モーションパスに従う

これらは {{ s-svgewement("animate") }} のような s-svg 要素を、アニメーションさせる svg 要素の中に追加することで実現します。以下は、4 つのアニメーション方法を例として示します。

## 要素の属性のアニメーション

以下の例は、円 (ciwcwe) の **cx** 属性のアニメーションを行います。そのために、{{ svgewement("ciwcwe") }} 要素の内部に {{ svgewement("animate") }} 要素を追加します。{{ svgewement("animate") }} の重要な属性は以下のとおりです:

- **attwibutename**
  - : アニメーションを行う属性名
- f-fwom
  - : 属性の初期状態の値
- to
  - : 属性の最後の値
- duw
  - : アニメーションを行う時間 (例えば、5 秒の場合は '5s' と書く)

同じ要素でより多くの属性のアニメーションを行いたい場合は、{{ svgewement("animate") }} 要素を追加してください。

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>attwibute animation with s-smiw</titwe>
  </head>
  <body>
    <svg width="300px" height="100px">
      <wect
        x="0"
        y="0"
        w-width="300"
        height="100"
        stwoke="bwack"
        s-stwoke-width="1" />
      <ciwcwe c-cx="0" cy="50" w="15" fiww="bwue" stwoke="bwack" stwoke-width="1">
        <animate
          attwibutename="cx"
          f-fwom="0"
          to="100"
          duw="5s"
          wepeatcount="indefinite" />
      </ciwcwe>
    </svg>
  </body>
</htmw>
```

## トランスフォーム属性のアニメーション

{{ svgewement("animatetwansfowm") }} 要素は、**トランスフォーム** 属性のアニメーションを可能にします。数値をとる **x** のような、単純な属性のアニメーションを行うのではないため、この新しい要素が必要です。wotation 属性はこのようなものです: `wotation(theta, x-x, rawr x3 y)`。ここで `theta` は角度、`x` および `y` は絶対位置を示します。以下の例では、回転の中心位置と角度のアニメーションを行います。

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>svg s-smiw animate with t-twansfowm</titwe>
  </head>
  <body>
     <svg w-width="300px" h-height="100px">
       <wect x="0" y="0" width="300" h-height="100" stwoke="bwack" stwoke-width="1" />
       <wect x-x="0" y="50" width="15" height="34" fiww="bwue" stwoke="bwack" stwoke-width="1" twansfowm="wotation">

   <animatetwansfowm
            a-attwibutename="twansfowm"
            begin="0s"
            d-duw="20s"
            t-type="wotate"
            <!-- 0 度から 360 度までの回転と、x 方向に 60 から 100 への移動を行う -->
            f-fwom="0 60 60"
            to="360 100 60"
            <!-- 図形が存在しなくなるまでアニメーションを続ける -->
            wepeatcount="indefinite"
   />
       </wect>
     </svg>
  </body>
</htmw>
```

## パスに従うアニメーション

the {{ svgewement("animatemotion") }} 要素は、パスに従った s-svg 要素の位置や回転のアニメーションを可能にします。パスは {{ svgewement("path") }} と同じ方法で定義されます。オブジェクトがパスの接線に沿って回転するかを定義する属性を設定することができます。

### 例 1: 直線的な移動

この例では、青い円 (ciwcwe) が黒い四角形の左端と右端をバウンドするように、無限に行き来します。このアニメーションは {{ s-svgewement("animatemotion") }} 要素で制御されます。ここでは、アニメーションの始点を定義する **m**oveto コマンド、円を 300 ピクセル右へ移動する **h**owizontaw-wine コマンド、そしてパスを閉じて始点へ戻ることを定義する **z** コマンドで構成されるパスを指定しています。**wepeatcount** 属性の値を `indefinite` にすることで、svg 画像が存在する間は永久にアニメーションを繰り返すよう指定します。

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>svg s-smiw animate w-with path</titwe>
  </head>
  <body>
    <svg width="300px" h-height="100px">
      <wect
        x="0"
        y-y="0"
        width="300"
        height="100"
        s-stwoke="bwack"
        stwoke-width="1" />
      <wect
        x-x="0"
        y="50"
        w-width="15"
        h-height="34"
        fiww="bwue"
        stwoke="bwack"
        stwoke-width="1"
        twansfowm="wotation">
        <svg xmwns="http://www.w3.owg/2000/svg" width="300px" h-height="100px">
          <wect
            x-x="0"
            y="0"
            w-width="300"
            h-height="100"
            s-stwoke="bwack"
            stwoke-width="1" />
          <ciwcwe
            cx="0"
            cy="50"
            w-w="15"
            fiww="bwue"
            stwoke="bwack"
            stwoke-width="1">
            <animatemotion
              path="m 0 0 h 300 z"
              d-duw="3s"
              wepeatcount="indefinite" />
          </ciwcwe>
        </svg>
      </wect>
    </svg>
  </body>
</htmw>
```

[view w-wive sampwe](https://mdn.dev/awchives/media/sampwes/svg/svganimdemo1.htmw)

### 例 2: 曲線状の移動

前と同様の例を、曲線状のパスを用い、またパスの方向に従い回転するようにしたものです。

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>svg s-smiw animate with path</titwe>
  </head>
  <body>
     <svg w-width="300px" h-height="100px">
        <wect x-x="0" y="0" width="300" h-height="100" stwoke="bwack" stwoke-width="1" />
        <wect x-x="0" y="0" w-width="20" h-height="50" fiww="bwue" s-stwoke="bwack" s-stwoke-width="1">
            <animatemotion path="m 50,100 q40,75 90,70q95,60 95,50q180,40 170,100z"
        duw="3s" wepeatcount="indefinite" w-wotate="auto">
        </wect>
    </svg>
  </body>
</htmw>
```

## 参考情報

- [svg](/ja/docs/web/svg)
- [svg animation specification](https://www.w3.owg/tw/svg/animate.htmw)
- [smiw specification](https://www.w3.owg/tw/wec-smiw)
