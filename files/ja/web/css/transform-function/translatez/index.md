---
title: translateZ()
slug: Web/CSS/transform-function/translateZ
l10n:
  sourceCommit: 88e01e6f934ea5f2413cecfab1b5112cf819ba09
---

{{CSSRef}}

**`translateZ()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、三次元空間の z 軸に沿って、すなわち閲覧者に近づいたり遠ざかったりするように要素を移動させます。その結果は {{cssxref("&lt;transform-function&gt;")}} データ型となります。

{{EmbedInteractiveExample("pages/css/function-translateZ.html")}}

この変換は、 {{cssxref("&lt;length&gt;")}} によって定義され、要素または要素がどれだけ内側または外側に移動するかを指定します。

上記のデモでは、[`perspective: 550px;`](/ja/docs/Web/CSS/perspective) (3D 空間を作るため) と [`transform-style: preserve-3d;`](/ja/docs/Web/CSS/transform-style) (立方体の 6 つの面である子を 3D 空間に配置) を立方体に設定しました。

> **メモ:** `translateZ(tz)` は、`translate3d(0, 0, tz)` と等価です。

## 構文

```css
translateZ(tz)
```

### 値

- `tz`
  - : 変換ベクトルの z 成分を表す{{cssxref("&lt;length&gt;")}}。[直交座標系](/ja/docs/Web/CSS/transform-function#cartesian_coordinates)では Z 軸方向の移動量をを表します。正の値では要素が閲覧者に向かって移動し、負の値で移動すると遠ざかります。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/ja/docs/Web/CSS/transform-function#直交座標系">直交座標系</a> (<a href="https://ja.wikipedia.org/wiki/実数空間">ℝ^2</a>)</th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Homogeneous_coordinates">同次座標系</a> (<a href="https://en.wikipedia.org/wiki/Real_projective_plane">ℝℙ^2</a>)</th>
      <th scope="col">直交座標系 (<a href="https://ja.wikipedia.org/wiki/実数空間">ℝ^3</a>)</th>
      <th scope="col">同次座標系 (<a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3</a>)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">
        この変換は 3D 空間に適用されます。平面上では表現できません。
      </td>
      <td>
        この変換は ℝ^3 の線形変換ではなく、直交座標系の行列では表現できません。
      </td>
      <td>
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mi>t</mi> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

## 例

この例では、2 つのボックスが作成されます。1 つはページ上で通常の位置に配置され、座標変換されることはありません。もう一つは、遠近法を適用して三次元空間を作り、ユーザーの方に移動させます。

### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
```

### CSS

```css
div {
  position: relative;
  width: 60px;
  height: 60px;
  left: 100px;
  background-color: skyblue;
}

.moved {
  transform: perspective(500px) translateZ(200px);
  background-color: pink;
}
```

ここで重要なのは "moved" というクラスで、その機能を見てみましょう。まず、
[`perspective()`](</ja/docs/Web/CSS/transform-function/perspective()>) 関数は、 z=0 の位置にある平面 (要するに画面の表面) の相対位置に閲覧者を位置付けます。 `500px` という値は、ユーザーが z=0 にある画像の 500 ピクセル「前」にいることを意味します。

次に、`translateZ()` 関数は、要素を画面からユーザーの方に「外向きに」200 ピクセル移動します。 これは、二次元のディスプレイ上で見たときに要素を大きく見せる、または VR ヘッドセットや他の三次元ディスプレイ機器を使用して見たときに要素をより近く見せるという効果があります。

なお、 `perspective()` の値が `translateZ()` の値よりも小さい場合、例えば `transform: perspective(200px) translateZ(300px);` の場合、変換された要素はユーザーのビューポートよりも手前にあるため、表示されません。 perspective と translateZ の値の差が小さければ小さいほど、ユーザーは要素に近づき、変換された要素は大きく見えます。

> [!NOTE]
> 変換の合成は交換可能ではないので、異なる関数を書く順番は重要です。具体的な例として、一般的には `perspective()` を `translateZ()` の前に配置します。

### 結果

{{EmbedLiveSample("Examples", 250, 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("translate")}}
