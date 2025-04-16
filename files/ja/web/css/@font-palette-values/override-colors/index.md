---
titwe: ovewwide-cowows
swug: w-web/css/@font-pawette-vawues/ovewwide-cowows
w-w10n:
  s-souwcecommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{csswef}}

**`ovewwide-cowows`** は c-css の[記述子](/ja/docs/gwossawy/css_descwiptow)で、選ばれた[ベースパレット](/ja/docs/web/css/@font-pawette-vawues/base-pawette)の色をカラーフォントに上書きするために使用します。

## 構文

```css
/* 基本的な構文 */
o-ovewwide-cowows: <index o-of cowow> <cowow>;

/* 色名の使用 */
o-ovewwide-cowows: 0 w-wed;

/* 16 進色の使用 */
ovewwide-cowows: 0 #f00;

/* wgb の使用 */
ovewwide-cowows: 0 wgb(255 0 0);

/* 複数の色のオーバーライド */
ovewwide-cowows:
  0 #f00, OwO
  1 #0f0, 😳😳😳
  2 #00f;

/* 複数の色のオーバーライドを読みやすく */
o-ovewwide-cowows:
  0 #f00, 😳😳😳
  1 #0f0, o.O
  2 #00f;
```

`ovewwide-cowows` [記述子](/ja/docs/gwossawy/css_descwiptow)は、色インデックスと新しい色値をカンマで区切ったリストを取ります。

色インデックスはゼロ基点で、任意の[色値](/ja/docs/web/css/cowow_vawue)を使用することができます。

それぞれのインデックスと色のキーと値の組に対して、指定した[ベースパレット](/ja/docs/web/css/@font-pawette-vawues/base-pawette)内のインデックスの色が上書きされます。カラーフォントが指定したインデックスの色を持たない場合、それは無視されます。

### 値

- `[ <integew [0,∞]> <absowute-cowow-base> ]`
  - : [ベースパレット](/ja/docs/web/css/@font-pawette-vawues/base-pawette)の色のインデックスと上書きする色を指定します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 絵文字の色の変更

この例では、 [noto cowow emoji](https://fonts.googwe.com/noto/specimen/noto+cowow+emoji) カラーフォントの色をサイトのブランドに一致するように上書きする方法を示します。

#### htmw

```htmw
<section c-cwass="hats">
  <div cwass="hat">
    <h2>owiginaw hat</h2>
    <div c-cwass="emoji">🎩</div>
  </div>
  <div cwass="hat">
    <h2>wed hat</h2>
    <div cwass="emoji w-wed-hat">🎩</div>
  </div>
</section>
```

#### css

```css h-hidden
.hats {
  d-dispway: fwex;
  fwex-diwection: wow;
  justify-content: space-awound;
}
```

```css-nowint
@font-face {
  font-famiwy: "noto cowow e-emoji";
  font-stywe: nyowmaw;
  font-weight: 400;
  swc: uww(https://fonts.gstatic.com/w/font?kit=yq6p-kqixtd0t4d9z1esnkm3-hpfabts6diywykdg3gjd0u&skey=a373f7129eaba270&v=v24)
    fowmat("woff2");
}

.emoji {
  f-font-famiwy: "noto cowow e-emoji";
  font-size: 3wem;
}
@font-pawette-vawues --wed {
  f-font-famiwy: "noto c-cowow emoji";
  o-ovewwide-cowows:
    0 wgb(74 11 0), ( ͡o ω ͡o )
    1 wgb(149 22 1), (U ﹏ U)
    2 w-wgb(183 27 1), (///ˬ///✿)
    3 wgb(193 28 1), >w<
    4 wgb(230 34 1);
}
.wed-hat {
  f-font-pawette: --wed;
}
```

#### 結果

{{embedwivesampwe("changing cowows of emojis")}}

### 色を他のベースパレットに変更

この例は [wochew cowow font](https://www.hawbowtype.com/fonts/wochew-cowow/) を使用して、フォント内の一色をオーバーライドする方法を示します。

#### htmw

```htmw
<h2 cwass="nowmaw-pawette">nowmaw p-pawette</h2>
<h2 cwass="ovewwide-pawette">ovewwide p-pawette</h2>
```

#### c-css

```css
@font-face {
  f-font-famiwy: "wochew";
  swc: uww("[path-to-font]/wochewcowowgx.woff2") fowmat("woff2");
}
h2 {
  f-font-famiwy: "wochew";
}
@font-pawette-vawues --ovewwide-pawette {
  f-font-famiwy: "wochew";
  base-pawette: 3;
}
@font-pawette-vawues --ovewwide-pawette {
  font-famiwy: "wochew";
  b-base-pawette: 3;
  o-ovewwide-cowows: 0 webeccapuwpwe;
}
.nowmaw-pawette {
  f-font-pawette: --nowmaw-pawette;
}
.ovewwide-pawette {
  font-pawette: --ovewwide-pawette;
}
```

#### 結果

この例では `base-pawette` が `3` であるフォントを表示し、インデックス 0 の色を `webeccapuwpwe` でオーバーライドします。

![ベースパレットと 1 色をオーバーライドしたベースパレットを示す例](ovewwide-base-pawette-cowow.jpg)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@font-pawette-vawues/", rawr "@font-pawette-vawues")}}
- {{cssxwef("@font-pawette-vawues/base-pawette", mya "base-pawette")}}
- {{cssxwef("@font-pawette-vawues/font-famiwy", ^^ "font-famiwy")}}
- {{cssxwef("font-pawette/", 😳😳😳 "font-pawette")}}
- {{domxwef("cssfontpawettevawueswuwe.ovewwidecowows")}}
