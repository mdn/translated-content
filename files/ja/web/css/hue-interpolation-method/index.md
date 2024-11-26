---
title: <hue-interpolation-method>
slug: Web/CSS/hue-interpolation-method
l10n:
  sourceCommit: 0121647f4ef17c1e9cf31e9f27535f0c29f3c84f
---

{{CSSRef}}

**`<hue-interpolation-method>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、 {{CSSXref("&lt;hue&gt;")}} 値間の補間に用いるアルゴリズムを表します。
補間方法は、色相環に基づいて 2 つの色相値の中間点を探す方法を指定します。
これは {{CSSXref("&lt;color-interpolation-method&gt;")}} データ型の成分として使用します。

`<hue>` 値を補間する場合、色相補間アルゴリズムは [`shorter`](#shorter) が既定値です。

## 構文

`<hue-interpolation-method>` 値は色相補間アルゴリズムの名前にリテラルトークン `hue` が続くものです。

```plain
shorter hue
longer hue
increasing hue
decreasing hue
```

### 値

任意の色相角の組は{{Glossary("color wheel", "色相環")}}上の 2 つの半径に対応し、円周を補間可能な 2 つの弧に切り分けます。どちらの弧も最初の半径で始まり 2 つ目の半径で終わりますが、一方は時計回りに、もう一方は反時計回りに進みます。

> [!NOTE]
> 以下の説明と図は、色相角が時計回りに増加する色相環に基づいています。角度の増加が反時計回りの処理になる色相環があることに注意してください。

色相角 `θ1` と `θ2` のペアは範囲 `[0deg, 360deg)` に正規化され、 `θ1` から `θ2` への補間時にどの円弧を使用するかを決定するアルゴリズムが 4 つあります。

- `shorter`

  - : 短い方の弧を使用します。 2 つの角が一致すると、弧は単一の点に収れんします。両方の円弧の長さが同じ場合は次のようになります。

    - `θ1 < θ2` の場合は、時計回りの弧を使用します。
    - `θ1 > θ2` の場合は、反時計回りの弧を使用します。

    | `θ1 = 45deg`, `θ2 = 135deg`                                        | `θ1 = 135deg`, `θ2 = 45deg`                                        |
    | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
    | ![shorter with θ1 = 45deg and θ2 = 135deg](shorter_increasing.png) | ![shorter with θ1 = 135deg and θ2 = 45deg](shorter_decreasing.png) |

- `longer`

  - : 長い方の弧を使用します。 2 つの角が一致した場合は次のようになります。

    - `θ1 ≤ θ2`の場合、弧は時計回りの方向で全周となります。
    - `θ1 > θ2` の場合、弧は反時計回りの方向で全周となります。

    両方の弧の長さが同じである場合は次のようになります。

    - `θ1 < θ2` の場合は、時計回りの弧を使用します。
    - `θ1 > θ2` の場合は、反時計回りの弧を使用します。

    | `θ1 = 45deg`, `θ2 = 135deg`                                      | `θ1 = 135deg`, `θ2 = 45deg`                                      |
    | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
    | ![longer with θ1 = 45deg and θ2 = 135deg](longer_decreasing.png) | ![longer with θ1 = 135deg and θ2 = 45deg](longer_increasing.png) |

- `increasing`

  - : 時計回りの弧を使用します。 2 つの角が一致すると、弧は単一の点に収れんします。

    | `θ1 = 45deg`, `θ2 = 135deg`                                           | `θ1 = 135deg`, `θ2 = 45deg`                                          |
    | --------------------------------------------------------------------- | -------------------------------------------------------------------- |
    | ![increasing with θ1 = 45deg and θ2 = 135deg](shorter_increasing.png) | ![increasing with θ1 = 135deg and θ2 = 45deg](longer_increasing.png) |

- `decreasing`

  - : 反時計回りの弧を使用します。 2 つの角が一致すると、弧は単一の点に収れんします。

    | `θ1 = 45deg`, `θ2 = 135deg`                                          | `θ1 = 135deg`, `θ2 = 45deg`                                           |
    | -------------------------------------------------------------------- | --------------------------------------------------------------------- |
    | ![decreasing with θ1 = 45deg and θ2 = 135deg](longer_decreasing.png) | ![decreasing with θ1 = 135deg and θ2 = 45deg](shorter_decreasing.png) |

選べる弧が 2 つしかないため、これらのアルゴリズムはある状況下では対等です。特に次の場合です。

- `0deg < θ2 - θ1 < 180deg` または `θ2 - θ1 < -180deg` ならば、 `shorter` と `increasing` は等価で、`longer` と `decreasing` は等価です。
- `-180deg < θ2 - θ1 < 0deg` または `θ2 - θ1 > 180deg` ならば、`shorter` と `decreasing` は等価で、`longer` と `increasing` は等価です。

`increasing` と `decreasing` の特筆すべき特性は、トランジションやアニメーション中に色相角の差が `180deg` を通過するとき、 `shorter` と `longer` のように弧が反対側にならないことです。

### 形式文法

{{CSSSyntax}}

## 例

### 色相補間アルゴリズムの比較

次の例は、 {{CSSXref("gradient/linear-gradient", "linear-gradient()")}} で様々な色相補間アルゴリズムを使用した場合の効果を示しています。

#### HTML

```html
<div class="hsl">
  <p>HSL</p>
</div>
<div class="hsl-increasing">
  <p>HSL increasing</p>
</div>
<div class="hsl-decreasing">
  <p>HSL decreasing</p>
</div>
<div class="hsl-shorter">
  <p>HSL shorter</p>
</div>
<div class="hsl-longer">
  <p>HSL longer</p>
</div>
<div class="hsl-named">
  <p>HSL named</p>
</div>
<div class="hsl-named-longer">
  <p>HSL named (longer)</p>
</div>
```

#### CSS

```css hidden
div {
  border: 1px solid black;
  height: 50px;
  margin: 10px;
  width: 90%;
}
p {
  color: white;
  margin: 6px;
}

/* Fallback styles */
.hsl,
.hsl-shorter,
.hsl-named {
  background: linear-gradient(
    to right,
    hsl(39 100% 50%),
    hsl(46 100% 50%),
    hsl(53 100% 50%),
    hsl(60 100% 50%)
  );
}
.hsl-increasing {
  background: linear-gradient(
    to right,
    hsl(190 100% 50%),
    hsl(225 100% 50%),
    hsl(260 100% 50%),
    hsl(295 100% 50%),
    hsl(330 100% 50%),
    hsl(365 100% 50%),
    hsl(400 100% 50%),
    hsl(435 100% 50%),
    hsl(470 100% 50%),
    hsl(505 100% 50%),
    hsl(540 100% 50%)
  );
}
.hsl-decreasing,
.hsl-longer,
.hsl-named-longer {
  background: linear-gradient(
    to right,
    hsl(399 100% 50%),
    hsl(368 100% 50%),
    hsl(337 100% 50%),
    hsl(307 100% 50%),
    hsl(276 100% 50%),
    hsl(245 100% 50%),
    hsl(214 100% 50%),
    hsl(183 100% 50%),
    hsl(152 100% 50%),
    hsl(122 100% 50%),
    hsl(91 100% 50%),
    hsl(60 100% 50%)
  );
}
```

```css
.hsl {
  background: linear-gradient(
    to right in hsl,
    hsl(39deg 100% 50%),
    hsl(60deg 100% 50%)
  );
}
.hsl-increasing {
  background: linear-gradient(
    to right in hsl increasing hue,
    hsl(190deg 100% 50%),
    hsl(180deg 100% 50%)
  );
}
.hsl-decreasing {
  background: linear-gradient(
    to right in hsl decreasing hue,
    hsl(39deg 100% 50%),
    hsl(60deg 100% 50%)
  );
}
.hsl-shorter {
  background: linear-gradient(
    to right in hsl shorter hue,
    hsl(39deg 100% 50%),
    hsl(60deg 100% 50%)
  );
}
.hsl-longer {
  background: linear-gradient(
    to right in hsl longer hue,
    hsl(39deg 100% 50%),
    hsl(60deg 100% 50%)
  );
}
.hsl-named {
  background: linear-gradient(to right in hsl, orange, yellow);
}
.hsl-named-longer {
  background: linear-gradient(to right in hsl longer hue, orange, yellow);
}
```

#### 結果

{{EmbedLiveSample("comparing_hue_interpolation_methods", "100%", 500)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{CSSXref("&lt;hue&gt;")}} データ型
