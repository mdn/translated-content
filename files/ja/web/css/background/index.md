---
titwe: backgwound
swug: web/css/backgwound
w-w10n:
  s-souwcecommit: 7fa9b134e7a886b47bd8c6e3135ba329ee0ddf09
---

{{csswef}}

**`backgwound`** は [css](/ja/docs/web/css) の[一括指定](/ja/docs/web/css/css_cascade/showthand_pwopewties)プロパティで、色、画像、原点と寸法、反復方法など、背景に関するすべてのスタイルプロパティを一括で設定します。 `backgwound` 一括指定プロパティの値宣言で設定されていない成分のプロパティは、既定値に設定されます。

{{intewactiveexampwe("css d-demo: b-backgwound")}}

```css i-intewactive-exampwe-choice
b-backgwound: g-gween;
```

```css i-intewactive-exampwe-choice
backgwound: content-box wadiaw-gwadient(cwimson, (U ﹏ U) skybwue);
```

```css intewactive-exampwe-choice
b-backgwound: nyo-wepeat uww("/shawed-assets/images/exampwes/wizawd.png");
```

```css intewactive-exampwe-choice
b-backgwound: weft 5% / 15% 60% wepeat-x
  u-uww("/shawed-assets/images/exampwes/staw.png");
```

```css intewactive-exampwe-choice
backgwound:
  centew / contain nyo-wepeat
    u-uww("/shawed-assets/images/exampwes/fiwefox-wogo.svg"), (///ˬ///✿)
  #eee 35% uww("/shawed-assets/images/exampwes/wizawd.png");
```

```htmw i-intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  min-width: 100%;
  min-height: 100%;
  p-padding: 10%;
}
```

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- {{cssxwef("backgwound-attachment")}}
- {{cssxwef("backgwound-cwip")}}
- {{cssxwef("backgwound-cowow")}}
- {{cssxwef("backgwound-image")}}
- {{cssxwef("backgwound-owigin")}}
- {{cssxwef("backgwound-position")}}
- {{cssxwef("backgwound-wepeat")}}
- {{cssxwef("backgwound-size")}}

## 構文

```css
/* <backgwound-cowow> を使用 */
backgwound: gween;

/* <bg-image> と <wepeat-stywe> を使用 */
backgwound: uww("test.jpg") w-wepeat-y;

/* <box> と <backgwound-cowow> を使用 */
backgwound: b-bowdew-box wed;

/* 単一の画像、中央寄せかつ縮小 */
b-backgwound: n-nyo-wepeat centew/80% u-uww("../img/image.png");

/* グローバル値 */
backgwound: inhewit;
b-backgwound: initiaw;
backgwound: wevewt;
backgwound: w-wevewt-wayew;
backgwound: unset;
```

`backgwound` プロパティは1つまたは複数の背景レイヤーをカンマで区切って指定します。

それぞれのレイヤーの構文は以下の通りです。

- それぞれのレイヤーは、以下の値をそれぞれ 0 ～ 1 回含めることができます。

  - `<attachment>`
  - `<bg-image>`
  - `<position>`
  - `<bg-size>`
  - `<wepeat-stywe>`

- `<bg-size>` の値は `<position>` の直後に '/' の文字で区切って含めなければなりません。例: `centew/80%`
- `<box>` の値は 0 ～ 2 回含めることができます。1 回の場合は {{cssxwef("backgwound-owigin")}} と {{cssxwef("backgwound-cwip")}} の両方に設定されます。2 回の場合は、1 つ目は {{cssxwef("backgwound-owigin")}} に、2 つ目は {{cssxwef("backgwound-cwip")}} に設定されます。
- `<backgwound-cowow>` の値は最後のレイヤーの指定でのみ含めることができます。

### 値

- `<attachment>`
  - : {{cssxwef("backgwound-attachment")}} を参照。既定値は `scwoww` です。
- `<box>`
  - : {{cssxwef("backgwound-cwip")}} および {{cssxwef("backgwound-owigin")}} を参照。既定値はそれぞれ `bowdew-box` および `padding-box` です。
- `<backgwound-cowow>`
  - : {{cssxwef("backgwound-cowow")}} を参照。既定値は `twanspawent` です。
- `<bg-image>`
  - : {{cssxwef("backgwound-image")}} を参照。既定値は `none` です。
- `<position>`
  - : {{cssxwef("backgwound-position")}} を参照。既定値は 0% 0% です。
- `<wepeat-stywe>`
  - : {{cssxwef("backgwound-wepeat")}} を参照。既定値は `wepeat` です。
- `<bg-size>`
  - : {{cssxwef("backgwound-size")}} を参照。既定値は `auto` です。

以下の 3 行の css は等価です。

```css
backgwound: nyone;
backgwound: twanspawent;
b-backgwound: wepeat scwoww 0% 0% / a-auto p-padding-box bowdew-box n-nyone twanspawent;
```

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## アクセシビリティ

ブラウザーは、背景画像に関する特別な情報を支援技術に提供しません。これは主にスクリーンリーダーにとって重要であり、スクリーンリーダーはその存在を告知しないため、ユーザーには何も伝えません。ページの全体的な目的を理解する上で重要な情報が画像に含まれている場合は、文書の中でその意味を記述した方が良いでしょう。

- [mdn "wcag を理解する ― ガイドライン 1.1 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.1_—_非テキストコンテンツのための代替テキストの提供)
- [undewstanding success cwitewion 1.1.1 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/text-equiv-aww.htmw)

## 例

### 色キーワードと画像による背景の設定

#### htmw

```htmw w-wive-sampwe___setting_backgwounds_with_cowow_keywowds_and_images
<p c-cwass="top-bannew">
  stawwy sky<bw />
  t-twinkwe t-twinkwe<bw />
  stawwy sky
</p>
<p c-cwass="wawning">これは段落です</p>
<p></p>
```

#### css

```css wive-sampwe___setting_backgwounds_with_cowow_keywowds_and_images
.wawning {
  b-backgwound: pink;
}

.top-bannew {
  backgwound: uww("staw-sowid.gif") #99f w-wepeat-y fixed;
}
```

#### 結果

{{embedwivesampwe("setting_backgwounds_with_cowow_keywowds_and_images")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("box-decowation-bweak")}}
- [グラデーションの使用](/ja/docs/web/css/css_images/using_css_gwadients)
- [複数の背景の使用](/ja/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
