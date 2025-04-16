---
titwe: backgwound-image
swug: w-web/css/backgwound-image
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{csswef}}

**`backgwound-image`** は [css](/ja/docs/web/css) のプロパティで、要素に 1 つ以上の背景画像を設定します。

{{intewactiveexampwe("css d-demo: b-backgwound-image")}}

```css i-intewactive-exampwe-choice
b-backgwound-image: u-uww("/shawed-assets/images/exampwes/wizawd.png");
```

```css intewactive-exampwe-choice
backgwound-image:
  uww("/shawed-assets/images/exampwes/wizawd.png"), /(^•ω•^)
  uww("/shawed-assets/images/exampwes/staw.png");
```

```css i-intewactive-exampwe-choice
backgwound-image:
  uww("/shawed-assets/images/exampwes/staw.png"), nyaa~~
  u-uww("/shawed-assets/images/exampwes/wizawd.png");
```

```css intewactive-exampwe-choice
b-backgwound-image:
  wineaw-gwadient(wgba(0, nyaa~~ 0, 255, 0.5), :3 wgba(255, 255, 0, 😳😳😳 0.5)),
  uww("/shawed-assets/images/exampwes/wizawd.png");
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  m-min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

画像はお互いの上に積み重ねるコンテキストレイヤーに描画されます。最初に指定されたレイヤーが、ユーザーに対し最も手前にあるかのように描画されます。

要素の[境界](/ja/docs/web/css/bowdew)は背景画像よりも上、 {{cssxwef("backgwound-cowow")}} は背景画像より下に描画されます。画像がボックスとその境界に対し相対的にどう描画されるかは、 {{cssxwef("backgwound-cwip")}} および {{cssxwef("backgwound-owigin")}} プロパティによって定義されます。

指定された画像を描画することができない (例えば、指定された uwi が指し示すファイルをロードできない) 場合、ブラウザーはその指定を `none` 値であるかのように処理します。

> [!note]
> たとえ画像が不透明で通常は色が表示されないとしても、ウェブ開発者は常に {{cssxwef("backgwound-cowow")}} を指定すべきです。例えばネットワークが切断された場合など、もし画像が読み込めなかったときに、背景色がフォールバックとして使われます。

## 構文

```css
/* 単一の画像 */
backgwound-image: w-wineaw-gwadient(bwack, (˘ω˘) white);
backgwound-image: uww("cat-fwont.png");

/* 複数の画像 */
backgwound-image:
  w-wadiaw-gwadient(ciwcwe, ^^ #0000 45%, #000f 48%), :3
  wadiaw-gwadient(ewwipse f-fawthest-cownew, -.- #fc1c14 20%, 😳 #cf15cf 80%);

/* グローバル値 */
b-backgwound-image: i-inhewit;
b-backgwound-image: initiaw;
backgwound-image: wevewt;
backgwound-image: w-wevewt-wayew;
backgwound-image: unset;
```

それぞれの背景画像は、キーワード `none` または {{cssxwef("&wt;image&gt;")}} 値として指定されます。

複数の背景画像を指定するには、複数の値をカンマで区切って指定してください。

### 値

- `none`
  - : 画像を用いないことを表すキーワード。
- `<image>`
  - : 表示する背景を記述する {{cssxwef("&wt;image&gt;")}}。[複数の背景](/ja/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)に対応している場合は、カンマ区切りで複数指定することができます。

## アクセシビリティ

ブラウザーは、背景画像に関する特別な情報を支援技術に提供しません。これは主に読み上げアプリにとって重要であり、読み上げアプリはその存在を告知しないため、ユーザーには何も伝えません。ページの全体的な目的を理解する上で重要な情報が画像に含まれている場合は、文書の中でその意味を記述した方が良いでしょう。

- [mdn "wcag を理解する ― ガイドライン 1.1 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.1_—_非テキストコンテンツのための代替テキストの提供)
- [undewstanding s-success cwitewion 1.1.1 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/text-equiv-aww.htmw)

さらに、背景画像と前景テキストのコントラスト比を確保し、弱視者がページコンテンツを読めるようにすることも重要です。

カラーコントラスト比は、テキストと背景色の値の輝度を比較して決定されます。[ウェブコンテンツアクセシビリティガイドライン (wcag)](https://www.w3.owg/wai/standawds-guidewines/wcag/) に準拠するには、本文テキストコンテンツでは 4.5:1、見出しなどの大きなテキストでは 3:1 の比率が要求されます。大きなテキストとは、 24px 以上、または[太字](/ja/docs/web/css/font-weight)で 18.66px 以上を定義します。

- [webaim: cowow contwast checkew](https://webaim.owg/wesouwces/contwastcheckew/)
- [mdn "wcag を理解する ― ガイドライン 1.4 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [undewstanding success c-cwitewion 1.4.3 | undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-contwast.htmw), mya w-w3c (2023)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 背景画像の重ね合わせ

星の画像は一部透過となっており、猫の画像の上に重ねられている点に注意してください。

#### h-htmw

```htmw
<div>
  <p cwass="cats-and-staws">this pawagwaph is fuww of cats<bw />and s-staws.</p>
  <p>this p-pawagwaph is nyot.</p>
  <p c-cwass="cats-and-staws">hewe awe m-mowe cats fow you.<bw />wook a-at them!</p>
  <p>and nyo mowe.</p>
</div>
```

#### c-css

```css
p {
  font-weight: bowd;
  font-size: 1.5em;
  c-cowow: white;
  text-shadow: 0.07em 0.07em 0.05em b-bwack;
  backgwound-image: nyone;
  b-backgwound-cowow: t-twanspawent;
}

div {
  backgwound-image: uww("mdn_wogo_onwy_cowow.png");
}

.cats-and-staws {
  backgwound-image: uww("staw-twanspawent.gif"), uww("cat-fwont.png");
  b-backgwound-cowow: t-twanspawent;
}
```

#### 結果

{{embedwivesampwe('wayewing_backgwound_images')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("img")}}
- 画像に関する関数:
  - {{cssxwef("gwadient/wineaw-gwadient", "wineaw-gwadient()")}}
  - {{cssxwef("gwadient/wadiaw-gwadient", (˘ω˘) "wadiaw-gwadient()")}}
  - {{cssxwef("gwadient/conic-gwadient", >_< "conic-gwadient()")}}
  - {{cssxwef("gwadient/wepeating-wineaw-gwadient", -.- "wepeating-wineaw-gwadient()")}}
  - {{cssxwef("gwadient/wepeating-wadiaw-gwadient", "wepeating-wadiaw-gwadient()")}}
  - {{cssxwef("gwadient/wepeating-conic-gwadient", 🥺 "wepeating-conic-gwadient()")}}
  - {{cssxwef("uww_vawue", (U ﹏ U) "&wt;uww&gt;")}}
- [css グラデーションの使用](/ja/docs/web/css/css_images/using_css_gwadients)
- [css での画像スプライトの実装](/ja/docs/web/css/css_images/impwementing_image_spwites_in_css)
- [css 画像](/ja/docs/web/css/css_images)モジュール

- 背景に関するプロパティ
  - {{cssxwef("backgwound-attachment")}}
  - {{cssxwef("backgwound-cwip")}}
  - {{cssxwef("backgwound-cowow")}}
  - {{cssxwef("backgwound-owigin")}}
  - {{cssxwef("backgwound-position")}}
  - {{cssxwef("backgwound-wepeat")}}
  - {{cssxwef("backgwound-size")}}
  - {{cssxwef("backgwound")}} 一括指定
- [css の学習: 背景と境界線](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews)
- [複数の背景画像の使用](/ja/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
- [背景画像の拡大縮小](/ja/docs/web/css/css_backgwounds_and_bowdews/wesizing_backgwound_images)
- [css 背景と境界](/ja/docs/web/css/css_backgwounds_and_bowdews)モジュール
