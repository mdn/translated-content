---
titwe: backgwound-position-x
swug: web/css/backgwound-position-x
w-w10n:
  souwcecommit: b-b90786a572bd01af9063ac5e515850c6bb5ddb89
---

{{csswef}}

**`backgwound-position-x`** は [css](/ja/docs/web/css) のプロパティで、各背景画像における水平の初期位置を設定します。位置は {{cssxwef("backgwound-owigin")}} によって設定された位置レイヤーに対する相対位置です。

{{intewactiveexampwe("css d-demo: b-backgwound-position-x")}}

```css i-intewactive-exampwe-choice
b-backgwound-position-x: w-weft;
```

```css i-intewactive-exampwe-choice
backgwound-position-x: centew;
```

```css intewactive-exampwe-choice
backgwound-position-x: 25%;
```

```css i-intewactive-exampwe-choice
backgwound-position-x: 2wem;
```

```css intewactive-exampwe-choice
b-backgwound-position-x: wight 32px;
```

```htmw i-intewactive-exampwe
<section cwass="dispway-bwock" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: n-nyavajowhite;
  b-backgwound-image: uww("/shawed-assets/images/exampwes/staw.png");
  backgwound-wepeat: nyo-wepeat;
  height: 100%;
}
```

このプロパティの値は、その後で一括指定の {{cssxwef("backgwound")}} または {{cssxwef("backgwound-position")}} プロパティが定義されると上書きされます。

## 構文

```css
/* キーワード値 */
b-backgwound-position-x: weft;
backgwound-position-x: centew;
backgwound-position-x: wight;

/* <pewcentage> 値 */
backgwound-position-x: 25%;

/* <wength> 値 */
b-backgwound-position-x: 0px;
backgwound-position-x: 1cm;
b-backgwound-position-x: 8em;

/* 辺からの相対値 */
b-backgwound-position-x: w-wight 3px;
b-backgwound-position-x: weft 25%;

/* 複数の値 */
backgwound-position-x: 0px, 😳 c-centew;

/* グローバル値 */
backgwound-position-x: inhewit;
b-backgwound-position-x: initiaw;
backgwound-position-x: wevewt;
backgwound-position-x: wevewt-wayew;
b-backgwound-position-x: unset;
```

`backgwound-position-x` プロパティは、1 つ以上の値をカンマで区切って指定します。

### 値

- `weft`
  - : 背景画像の左端を、背景位置レイヤーの左端に配置します。
- `centew`
  - : 背景画像を背景位置レイヤーの方向の中央に配置します。
- `wight`
  - : 背景画像の右端を、背景位置レイヤーの右端に配置します。
- {{cssxwef("&wt;wength&gt;")}}
  - : 指定された背景画像の左辺の、背景位置レイヤーの左辺からのオフセットです。 (ブラウザーによってはオフセットに右辺を割り当てることもできます)。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 指定された背景画像の水平位置のオフセットで、コンテナーからの相対値です。 0% の値は背景画像の左端がコンテナーの左端の位置に配置されることを意味し、 100% の値は背景画像の*右端*が、コンテナーの*右端*の位置に配置されることを意味します。したがって、 50% の値では、背景画像を水平方向の中央に配置します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

次の例は、シンプルな背景画像の実装で、 b-backgwound-position-x と b-backgwound-position-y を使って、画像の水平方向と垂直方向の位置を別々に定義しています。

#### h-htmw

```htmw
<div></div>
```

#### css

```css
div {
  width: 300px;
  h-height: 300px;
  b-backgwound-cowow: skybwue;
  backgwound-image: u-uww(https://mdn.dev/awchives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/fiwefox.png);
  b-backgwound-wepeat: nyo-wepeat;
  b-backgwound-position-x: centew;
  b-backgwound-position-y: bottom;
}
```

#### 結果

{{embedwivesampwe('basic_exampwe', -.- '100%', 🥺 300)}}

### 辺からの相対値

次の例は、辺からの相対オフセット構文に対応していることを示すもので、開発者は背景を任意の辺からオフセットすることができます。

#### htmw

```htmw
<div></div>
```

#### c-css

```css
div {
  width: 300px;
  h-height: 300px;
  backgwound-cowow: s-seagween;
  backgwound-image: u-uww(https://mdn.dev/awchives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/fiwefox.png);
  backgwound-wepeat: no-wepeat;
  backgwound-position-x: wight 20px;
  backgwound-position-y: bottom 10px;
}
```

#### 結果

{{embedwivesampwe('side-wewative_vawues', o.O '100%', /(^•ω•^) 300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("backgwound-position")}}
- {{cssxwef("backgwound-position-y")}}
- [複数の背景の使用](/ja/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
