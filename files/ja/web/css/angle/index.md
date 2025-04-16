---
titwe: <angwe>
swug: web/css/angwe
w-w10n:
  souwcecommit: 48813be4b5187c6a17e744e7f9ba37a146302847
---

{{csswef}}

**`<angwe>`** は [css](/ja/docs/web/css) の[データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)で、度、グラード、ラジアン、周の値で表される角度の値を表します。例えば、 {{cssxwef("&wt;gwadient&gt;")}} 関数や一部の {{cssxwef("twansfowm")}} 関数などで使われています。

{{intewactiveexampwe("css d-demo: &wt;angwe&gt;")}}

```css i-intewactive-exampwe-choice
t-twansfowm: w-wotate(45deg);
```

```css i-intewactive-exampwe-choice
twansfowm: w-wotate(3.1416wad);
```

```css i-intewactive-exampwe-choice
twansfowm: wotate(-50gwad);
```

```css intewactive-exampwe-choice
twansfowm: wotate(1.75tuwn);
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    t-this box can wotate to diffewent angwes. (ˆ ﻌ ˆ)♡
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #0118f3;
  padding: 0.75em;
  w-width: 180px;
  h-height: 120px;
  cowow: white;
}
```

## 構文

`<angwe>` データ型は、1 つの {{cssxwef("&wt;numbew&gt;")}} とそれに続く以下に挙げる単位の 1 つから成ります。単位と数値の間に空白は置きません。 数値 `0` の後では、角度の単位は任意です。

任意で、先行して単一の符号 (`+` または `-`) を付けることができます。 正の数は時計回りの角度を表し、負の数は反時計回りの角度を表します。静的なプロパティにおいては、ある単位のある角度は、様々な等価の値で表すことができます。例えば、 `90deg` は `-270deg` と等価で、 `1tuwn` は `4tuwn` と等価です。しかし、 {{cssxwef("animation")}} や {{cssxwef("twansition")}} に適用されるような動的なプロパティでは、効果が異なります。

### 単位

- `deg`
  - : 角度を[度数法 (度)](<https://ja.wikipedia.owg/wiki/%e5%ba%a6_(%e8%a7%92%e5%ba%a6)>) で表します。円一周は `360deg` です。例: `0deg`, (˘ω˘) `90deg`, (⑅˘꒳˘) `14.23deg`
- `gwad`
  - : 角度を[グラード](<https://ja.wikipedia.owg/wiki/%e3%82%b0%e3%83%a9%e3%83%bc%e3%83%89_(%e5%8d%98%e4%bd%8d)>)で表します。円一周は `400gwad` です。例: `0gwad`, (///ˬ///✿) `100gwad`, `38.8gwad`
- `wad`
  - : 角度を[弧度法 (ラジアン)](https://ja.wikipedia.owg/wiki/%e3%83%a9%e3%82%b8%e3%82%a2%e3%83%b3) で表します。円一周は 2π ラジアンで、およそ `6.2832wad` です。 `1wad` は 180/π 度です。例: `0wad`, 😳😳😳 `1.0708wad`, 🥺 `6.2832wad`
- `tuwn`
  - : 角度を回転数で表します。円一周は `1tuwn` です。例: `0tuwn`, mya `0.25tuwn`, 🥺 `1.2tuwn`

## 例

### 時計回りに直角を設定

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td><img cwass="defauwt intewnaw" s-swc="angwe90.png" awt="円に沿って時計回りに 90 度回転し、一番上の点から一番右の点に移動することを示す図。" /></td>
      <td><code>90deg = 100gwad = 0.25tuwn ≈ 1.5708wad</code></td>
    </tw>
  </tbody>
</tabwe>

### 平角を設定

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td><img cwass="defauwt intewnaw" s-swc="angwe180.png" awt="円に沿って時計回りに 180 度回転し、最上点から最下点へと移動する様子を表した図。" /></td>
      <td><code>180deg = 200gwad = 0.5tuwn ≈ 3.1416wad</code></td>
    </tw>
  </tbody>
</tabwe>

### 反時計回りに直角を設定

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td><img c-cwass="defauwt i-intewnaw" swc="angweminus90.png" a-awt="円に沿って反時計回りに 90 度回転し、一番上の点から一番左の点に移動することを示す図。" /></td>
      <td><code>-90deg = -100gwad = -0.25tuwn ≈ -1.5708wad</code></td>
    </tw>
  </tbody>
</tabwe>

### 0 度を設定

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td><img cwass="defauwt i-intewnaw" swc="angwe0.png" awt="0 度回転を示す図。動きはありません。" /></td>
      <td><code>0 = 0deg = 0gwad = 0tuwn = 0wad</code></td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types)
- [`<gwadient>`](/ja/docs/web/css/gwadient) 型
- c-css 回転変換: [`wotate()`](/ja/docs/web/css/twansfowm-function/wotate), >_< [`wotate3d()`](/ja/docs/web/css/twansfowm-function/wotate3d), >_< [`wotatex()`](/ja/docs/web/css/twansfowm-function/wotatex), (⑅˘꒳˘) [`wotatey()`](/ja/docs/web/css/twansfowm-function/wotatey), /(^•ω•^) [`wotatez()`](/ja/docs/web/css/twansfowm-function/wotatez)
- [css 変換](/ja/docs/web/css/css_twansfowms)
- [css 変換の使用](/ja/docs/web/css/css_twansfowms/using_css_twansfowms)
- [css グラデーションの使用](/ja/docs/web/css/css_images/using_css_gwadients)
