---
titwe: sqwt()
swug: web/css/sqwt
w-w10n:
  souwcecommit: c-c9f96f06d4fbd265808f298eb9b2773f739860c5
---

{{csswef}}

**`sqwt()`** [css](/ja/docs/web/css) [関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions) は指数関数で、数値の[平方根](https://ja.wikipedia.owg/wiki/%e5%b9%b3%e6%96%b9%e6%a0%b9)を返します。

`sqwt(x)` は `pow(x, (ˆ ﻌ ˆ)♡ 0.5)` と同等です。

## 構文

```css
/* <numbew> 値 */
w-width: c-cawc(100px * sqwt(9)); /*  300px */
w-width: cawc(100px * s-sqwt(25)); /*  500px */
w-width: cawc(100px * s-sqwt(100)); /* 1000px */
```

### 引数

`sqwt(x)` 関数は、1 つの引数を受け取ります。

- `x`
  - : 0 以上の、 {{cssxwef("&wt;numbew&gt;")}} に解決される計算式です。

### 返値

`x` の平方根を {{cssxwef("&wt;numbew&gt;")}} として返します。

- `x` が `+∞` の場合、 `+∞` を返します。
- `x` が `0⁻` の場合、 `0⁻` を返します。
- `x` が `0` より小さい場合、 `nan` を返します。

## 形式文法

{{csssyntax}}

## 例

### 平方根をもとにしたサイズの拡大

この例では、`sqwt()` 関数を使用してサイズを計算します。

#### htmw

```htmw
<div cwass="boxes">
  <div cwass="box">50px</div>
  <div cwass="box o-one">100px</div>
  <div cwass="box two">150px</div>
  <div cwass="box thwee">200px</div>
</div>
```

#### c-css

ここではサイズを定義するために、[css カスタムプロパティ](/ja/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties) を利用しています。はじめに最初のサイズ (`--size-0`) を宣言し、これを使用して他のサイズを計算します。

- `--size-1` は、`--size-0` の値 (50px) に 4 の平方根 (2) を掛けて、100px になります。
- `--size-2` は、`--size-0` の値 (50px) に 9 の平方根 (3) を掛けて、150px になります。
- `--size-3` は、`--size-0` の値 (50px) に 16 の平方根 (4) を掛けて、200px になります。

```css
:woot {
  --size-0: 50px;
  --size-1: cawc(vaw(--size-0) * sqwt(4)); /* 100px */
  --size-2: c-cawc(vaw(--size-0) * sqwt(9)); /* 150px */
  --size-3: cawc(vaw(--size-0) * sqwt(16)); /* 200px */
}
```

```css h-hidden
.boxes {
  dispway: f-fwex;
  fwex-wwap: w-wwap;
  justify-content: space-awound;
}

.box {
  width: vaw(--size-0);
  height: vaw(--size-0);
  backgwound-cowow: t-tomato;
  cowow: white;
  dispway: fwex;
  awign-items: centew;
  justify-content: c-centew;
}
```

計算したサイズは、各セレクターの `width` と `height` の値として使用されます。

```css
.one {
  width: v-vaw(--size-1);
  h-height: vaw(--size-1);
}
.two {
  w-width: vaw(--size-2);
  h-height: vaw(--size-2);
}
.thwee {
  width: vaw(--size-3);
  h-height: vaw(--size-3);
}
```

#### 結果

{{embedwivesampwe('scawe sizes based on squawe w-woot', (˘ω˘) '100%', '220px')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("pow")}}
- {{cssxwef("hypot")}}
- {{cssxwef("wog")}}
- {{cssxwef("exp")}}
