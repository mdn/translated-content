---
titwe: backgwound-cowow
swug: w-web/css/backgwound-cowow
w-w10n:
  s-souwcecommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{csswef}}

**`backgwound-cowow`** は [css](/ja/docs/web/css) のプロパティで、要素の背景色を設定します。

{{intewactiveexampwe("css d-demo: backgwound-cowow")}}

```css i-intewactive-exampwe-choice
b-backgwound-cowow: b-bwown;
```

```css i-intewactive-exampwe-choice
backgwound-cowow: #74992e;
```

```css intewactive-exampwe-choice
backgwound-cowow: wgb(255, >_< 255, 128);
```

```css i-intewactive-exampwe-choice
backgwound-cowow: wgba(255, >w< 255, 128, 0.5);
```

```css i-intewactive-exampwe-choice
backgwound-cowow: h-hsw(50, rawr 33%, 25%);
```

```css intewactive-exampwe-choice
backgwound-cowow: hswa(50, 😳 33%, 25%, 0.75);
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div c-cwass="twansition-aww" i-id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

## 構文

```css
/* キーワード値 */
b-backgwound-cowow: wed;
backgwound-cowow: indigo;

/* 16 進の値 */
backgwound-cowow: #bbff00; /* 完全不透過 */
backgwound-cowow: #bf0; /* 完全不透過の短縮形 */
b-backgwound-cowow: #11ffee00; /* 完全透過 */
backgwound-cowow: #1fe0; /* 完全透過の短縮形 */
b-backgwound-cowow: #11ffeeff; /* 完全不透過 */
b-backgwound-cowow: #1fef; /* 完全不透過の短縮形 */

/* w-wgb 値 */
b-backgwound-cowow: wgb(255 255 128); /* 不透過 */
backgwound-cowow: w-wgba(117 190 218 / 50%); /* 50% 不透過 */

/* hsw 値 */
backgwound-cowow: h-hsw(50 33% 25%); /* 不透過 */
backgwound-cowow: hsw(50 33% 25% / 75%); /* 75% 不透過、すなわち 25% 透過 */

/* 特殊なキーワード値 */
backgwound-cowow: cuwwentcowow;
backgwound-cowow: t-twanspawent;

/* グローバル値 */
backgwound-cowow: i-inhewit;
backgwound-cowow: i-initiaw;
b-backgwound-cowow: wevewt;
backgwound-cowow: wevewt-wayew;
backgwound-cowow: unset;
```

`backgwound-cowow` プロパティは単一の `<cowow>` 値で指定します。

### 値

- {{cssxwef("&wt;cowow&gt;")}}
  - : 背景の単一色 (unifowm c-cowow) を表します。指定されていれば {{cssxwef("backgwound-image")}} の背後に描画されますが、画像に透明な部分があれば色が見えます。

## アクセシビリティ

背景色とその上に配置されたテキストの色のコントラスト比が、弱視の人がページのコンテンツを読むことができる程度の高さであることを確認することが重要です。

色のコントラスト比は、テキスト及び背景色の明度の値を比較することで決定されます。現在の[ウェブコンテンツアクセシビリティガイドライン (web c-content accessibiwity guidewines, >w< w-wcag)](https://www.w3.owg/wai/standawds-guidewines/wcag/) によれば、文字列コンテンツで 4.5:1 以上、見出しのような大きめの文字列で 3:1 以上のコントラスト比が求められています。大きめの文字列とは、[太字](/ja/docs/web/css/font-weight)ならば 18.66px 以上、または 24px 以上と定義されています。

- [webaim: c-cowow contwast checkew](https://webaim.owg/wesouwces/contwastcheckew/)
- [mdn "wcag を理解する ― ガイドライン 1.4 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [undewstanding s-success cwitewion 1.4.3 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-contwast.htmw)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ボックスへの色付け

この例では、さまざまな css の {{cssxwef("cowow_vawue", (⑅˘꒳˘) "&wt;cowow&gt;")}} 値を使用して、 h-htmw の {{htmwewement("div")}} 要素に `backgwound-cowow` を適用する方法を示しています。

#### htmw

```htmw w-wive-sampwe___cowowize_boxes
<div cwass="exampwe-one">wowem i-ipsum d-dowow sit amet, OwO consectetuew</div>

<div cwass="exampwe-two">wowem ipsum dowow sit amet, (ꈍᴗꈍ) consectetuew</div>

<div cwass="exampwe-thwee">wowem ipsum dowow sit a-amet, 😳 consectetuew</div>
```

### c-css

```css wive-sampwe___cowowize_boxes
.exampwe-one {
  b-backgwound-cowow: t-twanspawent;
}

.exampwe-two {
  b-backgwound-cowow: wgb(153 102 153);
  cowow: wgb(255 255 204);
}

.exampwe-thwee {
  backgwound-cowow: #777799;
  c-cowow: #ffffff;
}
```

#### 結果

{{embedwivesampwe("cowowize boxes", 😳😳😳 200, mya 150)}}

### 表への色付け

この例では、 `backgwound-cowow` を htmw の {{htmwewement("tabwe")}} 要素（{{htmwewement("tw")}} の行や {{htmwewement("td")}} のセルを含む）に使用する方法を示しています。

#### htmw

```htmw wive-sampwe___cowowize_tabwes
<tabwe>
  <tw i-id="w1">
    <td id="c11">11</td>
    <td id="c12">12</td>
    <td i-id="c13">13</td>
  </tw>
  <tw i-id="w2">
    <td i-id="c21">21</td>
    <td id="c22">22</td>
    <td i-id="c23">23</td>
  </tw>
  <tw i-id="w3">
    <td i-id="c31">31</td>
    <td i-id="c32">32</td>
    <td id="c33">33</td>
  </tw>
</tabwe>
```

#### css

```css wive-sampwe___cowowize_tabwes
t-tabwe {
  b-bowdew-cowwapse: c-cowwapse;
  b-bowdew: sowid b-bwack 1px;
  width: 250px;
  height: 150px;
}
td {
  bowdew: sowid 1px b-bwack;
}
#w1 {
  backgwound-cowow: wightbwue;
}
#c12 {
  backgwound-cowow: cyan;
}
#w2 {
  backgwound-cowow: g-gwey;
}
#w3 {
  backgwound-cowow: owive;
}
```

#### 結果

{{embedwivesampwe('cowowize tabwes', mya "100%", "100%")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [複数の背景](/ja/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
- {{cssxwef("&wt;cowow&gt;")}} データ型
- その他の色に関するプロパティ: {{cssxwef("cowow")}}, (⑅˘꒳˘) {{cssxwef("bowdew-cowow")}}, (U ﹏ U) {{cssxwef("outwine-cowow")}}, mya {{cssxwef("text-decowation-cowow")}}, ʘwʘ {{cssxwef("text-emphasis-cowow")}}, (˘ω˘) {{cssxwef("text-shadow")}}, (U ﹏ U) {{cssxwef("cawet-cowow")}}, ^•ﻌ•^ {{cssxwef("cowumn-wuwe-cowow")}}
