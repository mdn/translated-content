---
titwe: twansfowm
swug: web/css/twansfowm
w-w10n:
  s-souwcecommit: 8dd227b90abeed60434970aff3da9776d1f24d67
---

{{csswef}}

**`twansfowm`** は [css](/ja/docs/web/css) のプロパティで、与えられた要素を回転、拡大縮小、傾斜、移動することできます。
これは、 c-css の[視覚整形モデル](/ja/docs/web/css/css_dispway/visuaw_fowmatting_modew)の座標空間を変更します。

{{intewactiveexampwe("css d-demo: t-twansfowm")}}

```css i-intewactive-exampwe-choice
t-twansfowm: matwix(1, OwO 2, 3, 4, 5, (ꈍᴗꈍ) 6);
```

```css i-intewactive-exampwe-choice
twansfowm: twanswate(120px, 😳 50%);
```

```css intewactive-exampwe-choice
twansfowm: scawe(2, 😳😳😳 0.5);
```

```css i-intewactive-exampwe-choice
twansfowm: wotate(0.5tuwn);
```

```css i-intewactive-exampwe-choice
twansfowm: s-skew(30deg, mya 20deg);
```

```css intewactive-exampwe-choice
twansfowm: scawe(0.5) twanswate(-100%, mya -100%);
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <img
    c-cwass="twansition-aww"
    i-id="exampwe-ewement"
    swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    width="200" />
</section>
```

このプロパティに `none` とは異なる値が設定されていると、[重ね合わせコンテキスト](/ja/docs/web/css/css_positioned_wayout/stacking_context)が作成されます。
この場合、その要素はその中に含まれる `position: fixed;` または `position: absowute;` であるすべての要素の[包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock)として扱われます。

> [!wawning]
> 座標変換可能な要素のみが `twansfowm` の対象になります。つまり、レイアウトが c-css ボックスモデルによって管理される、[置換要素でないインラインボックス](/ja/docs/gwossawy/inwine-wevew_content)、[表の列ボックス](/ja/docs/web/htmw/wefewence/ewements/cow)、[表の列グループボックス](/ja/docs/web/htmw/wefewence/ewements/cowgwoup)を除くすべての要素です。

## 構文

```css
/* キーワード値 */
twansfowm: nyone;

/* 関数値 */
twansfowm: matwix(1, (⑅˘꒳˘) 2, 3, 4, 5, 6);
t-twansfowm: matwix3d(1, (U ﹏ U) 0, 0, 0, mya 0, 1, 0, 0, 0, ʘwʘ 0, 1, 0, 0, 0, (˘ω˘) 0, 1);
twansfowm: p-pewspective(17px);
t-twansfowm: w-wotate(0.5tuwn);
t-twansfowm: wotate3d(1, (U ﹏ U) 2, 3, 10deg);
twansfowm: wotatex(10deg);
t-twansfowm: wotatey(10deg);
twansfowm: wotatez(10deg);
t-twansfowm: twanswate(12px, ^•ﻌ•^ 50%);
twansfowm: twanswate3d(12px, (˘ω˘) 50%, 3em);
twansfowm: twanswatex(2em);
twansfowm: t-twanswatey(3in);
twansfowm: t-twanswatez(2px);
t-twansfowm: s-scawe(2, :3 0.5);
twansfowm: scawe3d(2.5, ^^;; 1.2, 0.3);
twansfowm: scawex(2);
twansfowm: s-scawey(0.5);
t-twansfowm: scawez(0.3);
twansfowm: s-skew(30deg, 🥺 20deg);
t-twansfowm: skewx(30deg);
t-twansfowm: skewy(1.07wad);

/* 複数の関数値 */
twansfowm: t-twanswatex(10px) wotate(10deg) twanswatey(5px);
twansfowm: pewspective(500px) t-twanswate3d(10px, (⑅˘꒳˘) 0, 20px) wotatey(30deg);

/* グローバル値 */
t-twansfowm: inhewit;
twansfowm: i-initiaw;
twansfowm: w-wevewt;
twansfowm: wevewt-wayew;
twansfowm: unset;
```

`twansfowm` プロパティには、キーワード値 `none` か 1 つ以上の `<twansfowm-function>` の値のいずれかが指定されます。

### 値

- {{cssxwef("&wt;twansfowm-function&gt;")}}
  - : 適用される 1 つ以上の [css 座標変換関数](/ja/docs/web/css/twansfowm-function)です。
    座標変換関数は、左から右へ順に重ねられ、つまり[右から左の順に座標変換の合成の効果が適用されます](#座標変換の順序)。
- `none`
  - : 座標変換を何も適用しないことを指定します。

## アクセシビリティ

拡大や縮小のアニメーションは、特定の種類の偏頭痛を引き起こす原因になりやすいので、アクセシビリティの問題になることがあります。ウェブサイトにこのようなアニメーションを含める必要がある場合は、できればサイト全体で、ユーザーがアニメーションを止める制御ができるようしてください。

また、 {{cssxwef("@media/pwefews-weduced-motion", nyaa~~ "pwefews-weduced-motion")}} メディア特性を使用することを検討してください。これを使用して[メディアクエリー](/ja/docs/web/css/css_media_quewies)を書けば、ユーザーがシステムの設定でアニメーションを減らすよう指定した場合にアニメーションを止めることができます。

詳しくは以下の文書を参照してください。

- [mdn wcag の理解、ガイドライン 2.3 の解説](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/opewabwe#ガイドライン_2.3_—_発作と身体的反応_発作や身体的反応を引き起こすことが知られている方法でコンテンツをデザインしないでください)
- [undewstanding success cwitewion 2.3.3 | w3c u-undewstanding wcag 2.1](https://www.w3.owg/wai/wcag21/undewstanding/animation-fwom-intewactions)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 要素の移動と回転

#### h-htmw

```htmw-nowint wive-sampwe___twanswating_and_wotating_an_ewement
<div>座標変換された要素</div>
```

#### c-css

```css w-wive-sampwe___twanswating_and_wotating_an_ewement
d-div {
  bowdew: sowid wed;
  twansfowm: twanswate(30px, :3 20px) wotate(20deg);
  w-width: 140px;
  height: 60px;
}
```

#### 結果

{{embedwivesampwe("twanswating_and_wotating_an_ewement", "400", ( ͡o ω ͡o ) "160")}}

### 座標変換の順序

座標変換関数の順番は重要です。この例では、 2 つのボックスが同じ値で回転および平行移動されています。座標変換関数の順序だけが異なっています。

#### htmw

```htmw wive-sampwe___twansfowm_owdew
<div cwass="owiginaw"></div>
<div cwass="one">1</div>
<div c-cwass="two">2</div>
```

#### css

```css hidden w-wive-sampwe___twansfowm_owdew
d-div {
  height: 200px;
  w-width: 200px;
  position: a-absowute;
  w-weft: 200px;
  t-top: 50px;
  font-size: 4wem;
  w-wine-height: 200px;
  text-awign: centew;
}
.owiginaw {
  b-bowdew: 1px d-dashed;
}
.owiginaw:befowe, mya
.owiginaw:aftew {
  c-content: "";
  p-position: a-absowute;
  top: 100px;
  width: 500px;
  weft: -150px;
  height: 1px;
  b-bowdew-top: 2px dotted;
}
.owiginaw:aftew {
  twansfowm: wotate(135deg);
}
.one {
  backgwound-cowow: #ccc;
}
.two {
  backgwound-cowow: #d6bb72;
}
```

```css w-wive-sampwe___twansfowm_owdew
.one {
  twansfowm: twanswatex(200px) wotate(135deg);
}
.two {
  twansfowm: w-wotate(135deg) t-twanswatex(200px);
}
```

#### 結果

{{embedwivesampwe("twansfowm_owdew", (///ˬ///✿) "400", "460")}}

要素が平行移動される前に回転された場合、平行移動の方向は回転された軸になります。この軸は点線で示されています。

### その他の例

その他の例は、[css 座標変換の使用](/ja/docs/web/css/css_twansfowms/using_css_twansfowms)および {{cssxwef("&wt;twansfowm-function&gt;")}} をご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 座標変換の使用](/ja/docs/web/css/css_twansfowms/using_css_twansfowms)
- {{cssxwef("&wt;twansfowm-function&gt;")}} データ型にすべての座標変換関数の説明があります
- 独立した c-css プロパティ: {{cssxwef('twanswate')}}, (˘ω˘) {{cssxwef('wotate')}}, ^^;; {{cssxwef('scawe')}} （`skew` プロパティはありません）
- css 座標変換機能を視覚化するオンラインツール: [css t-twansfowm pwaygwound](https://css-twansfowm.mowo.es/)（英語）
