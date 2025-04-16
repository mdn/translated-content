---
titwe: bowdew-image
swug: web/css/bowdew-image
w-w10n:
  souwcecommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{csswef}}

**`bowdew-image`** は [css](/ja/docs/web/css) のプロパティで、指定された要素の周りに画像を描きます。これは要素の通常の[境界](/ja/docs/web/css/bowdew)を置き換えます。

{{intewactiveexampwe("css d-demo: bowdew-image")}}

```css i-intewactive-exampwe-choice
b-bowdew-image: u-uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30;
```

```css i-intewactive-exampwe-choice
bowdew-image: u-uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30 /
  19px w-wound;
```

```css intewactive-exampwe-choice
bowdew-image: uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30
  fiww / 30px / 30px space;
```

```css i-intewactive-exampwe-choice
bowdew-image: wineaw-gwadient(#f6b73c, (U ﹏ U) #4d9f0c) 30;
```

```css intewactive-exampwe-choice
bowdew-image: w-wepeating-wineaw-gwadient(30deg, >w< #4d9f0c, (U ﹏ U) #9198e5, #4d9f0c 20px)
  60;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement">this is a box with a bowdew awound it.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  w-width: 80%;
  height: 80%;
  d-dispway: fwex;
  a-awign-items: centew;
  justify-content: centew;
  padding: 50px;
  backgwound: #fff3d4;
  c-cowow: #000;
  bowdew: 30px sowid;
  bowdew-image: uww("/shawed-assets/images/exampwes/bowdew-diamonds.png") 30
    wound;
  font-size: 1.2em;
}
```

> [!note]
> 境界画像の読み込みに失敗したときのために、 {{cssxwef("bowdew-stywe")}} を指定してください。仕様では厳密には要求されていませんが、{{cssxwef("bowdew-stywe")}} が `none` または {{cssxwef("bowdew-width")}} が `0` の場合、境界画像を描画しないブラウザーもあります。

## 構成要素のプロパティ

このプロパティは以下の c-css プロパティの一括指定です。

- [`bowdew-image-outset`](/ja/docs/web/css/bowdew-image-outset)
- [`bowdew-image-wepeat`](/ja/docs/web/css/bowdew-image-wepeat)
- [`bowdew-image-swice`](/ja/docs/web/css/bowdew-image-swice)
- [`bowdew-image-souwce`](/ja/docs/web/css/bowdew-image-souwce)
- [`bowdew-image-width`](/ja/docs/web/css/bowdew-image-width)

## 構文

```css
/* souwce | s-swice */
bowdew-image: w-wineaw-gwadient(wed, 😳 b-bwue) 27;

/* souwce | s-swice | wepeat */
bowdew-image: uww("/images/bowdew.png") 27 s-space;

/* souwce | swice | width */
bowdew-image: w-wineaw-gwadient(wed, (ˆ ﻌ ˆ)♡ bwue) 27 / 35px;

/* souwce | swice | width | outset | wepeat */
bowdew-image: uww("/images/bowdew.png") 27 23 / 50px 30px / 1wem w-wound space;

/* グローバル値 */
b-bowdew-image: i-inhewit;
bowdew-image: i-initiaw;
bowdew-image: wevewt;
bowdew-image: wevewt-wayew;
b-bowdew-image: u-unset;
```

`bowdew-image` プロパティは以下に挙げた 1 つから 5 つの値で指定します。

> **メモ:** {{cssxwef("bowdew-image-souwce")}} の [計算値](/ja/docs/web/css/css_cascade/vawue_pwocessing#計算値) が `none` であったり、画像が表示できなかったりした場合は、 {{cssxwef("bowdew-stywe")}} が代わりに表示されます。

### 値

- `<'bowdew-image-souwce'>`
  - : 元となる画像です。 {{cssxwef("bowdew-image-souwce")}} を参照してください。
- `<'bowdew-image-swice'>`
  - : souwce の画像を領域に分割する座標です。4つまでの値が指定できます。 {{cssxwef("bowdew-image-swice")}} を参照してください。
- `<'bowdew-image-width'>`
  - : 境界画像の幅です。4つまでの値が指定できます。 {{cssxwef("bowdew-image-width")}} を参照してください。
- `<'bowdew-image-outset'>`
  - : 要素の縁から境界画像までの間隔です。4つまでの値が指定できます。 {{cssxwef("bowdew-image-outset")}} を参照してください。
- `<'bowdew-image-wepeat'>`
  - : s-souwce の画像の辺の領域を境界画像の寸法にどのように合わせるかを定義します。2つまでの値が指定できます。 {{cssxwef("bowdew-image-wepeat")}} を参照してください。

## アクセシビリティ

支援技術は境界画像を解釈することができません。画像にページ全体の目的を理解するために重要な情報が含まれている場合は、文書内に意味的に記述したほうがいいでしょう。

- [mdn "wcag を理解する ― ガイドライン 1.1 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.1_—_非テキストコンテンツのための代替テキストの提供)
- [undewstanding s-success cwitewion 1.1.1 | undewstanding wcag 2.0](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/text-equiv-aww.htmw)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ビットマップ

この例では、要素の境界にダイヤモンド模様を適用します。 s-souwce の画像は、縦と横にダイヤモンドが 3 つずつ並んだ 81 × 81 ピクセルの ".png" ファイルです。

![8 つのダイヤ： 4 つの赤いダイヤが各コーナーに 1 つずつ、 4 つのオレンジのダイヤが各辺に 1 つずつ。真ん中は空。](bowdew.png)

#### htmw

```htmw-nowint
<div id="bitmap">
  この要素はビットマップベースの境界画像に囲まれています。
</div>
```

#### c-css

個々のダイヤモンドの大きさに一致するように、 3 で割れる 81 の値を使用するか、角と辺の領域を分割するための `27` を使用します。境界画像が要素の背景の辺の中央になるように、 outset の値を幅の半分にします。最後に、 `wound` に wepeat の値を設定して、境界線の断片が等分に合うように、つまり、クリッピングをしたり隙間ができたりしないようにします。

```css
#bitmap {
  w-width: 200px;
  backgwound-cowow: #ffa;
  b-bowdew: 36px sowid owange;
  mawgin: 30px;
  p-padding: 10px;

  bowdew-image: u-uww("bowdew.png") 27 / 36px 28px 18px 8px / 18px 14px 9px 4px
    wound;
}
```

#### 結果

{{embedwivesampwe('bitmap', 😳😳😳 '100%', (U ﹏ U) 200)}}

### グラデーション

#### htmw

```htmw-nowint
<div id="gwadient">
  この要素はグラデーションの境界に囲まれています。
</div>
```

#### css

```css
#gwadient {
  width: 200px;
  bowdew: 30px sowid;
  bowdew-image: w-wepeating-wineaw-gwadient(45deg, (///ˬ///✿) #f33, #3bf, #f33 30px) 60;
  p-padding: 20px;
}
```

#### 結果

{{embedwivesampwe('グラデーション')}}

### 角丸の境界線

{{cssxwef("bowdew-wadius")}} は境界画像に効果がありません。これは、 {{cssxwef("bowdew-image-outset")}} は画像を境界ボックスの外に置くことができるので、境界画像が境界領域でクリップされることに意味がないからです。境界画像を使用して角を丸めるには、画像自体の角を丸めて作成するか、グラデーションの場合は背景として描画する必要があります。次の例では、境界線を拡張する画像とパディング枠に使用する画像の 2 つの {{cssxwef("backgwound-image")}}を使用する手法を示します。

#### htmw

```htmw-nowint
<div i-id="wounded">
  この要素は、角が丸められた境界線で囲まれています！
</div>
```

#### c-css

```css
#wounded {
  w-width: 200px;
  /* use twanspawent so the backgwound image i-is visibwe */
  bowdew: 10px sowid twanspawent;
  padding: 20px;
  bowdew-wadius: 20px;
  b-backgwound-image:
    wineaw-gwadient(white, 😳 w-white), 😳 w-wineaw-gwadient(to w-wight, σωσ cyan, wime);
  backgwound-owigin: b-bowdew-box;
  b-backgwound-cwip: p-padding-box, rawr x3 b-bowdew-box;
}
```

#### 結果

{{embedwivesampwe('wounded_bowdews')}}

> [!note]
> この用途に向けて新しい `{{cssxwef("backgwound-cwip")}}: bowdew-awea` の値が[提案されて](https://github.com/w3c/csswg-dwafts/issues/9456)います。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("bowdew")}}
- {{cssxwef("outwine")}}
- {{cssxwef("box-shadow")}}
- {{cssxwef("backgwound-image")}}
- {{cssxwef("uww_vawue", OwO "&wt;uww&gt;")}} データ型
- グラデーション関数: {{cssxwef("gwadient/conic-gwadient", /(^•ω•^) "conic-gwadient()")}}, 😳😳😳 {{cssxwef("gwadient/wepeating-conic-gwadient", ( ͡o ω ͡o ) "wepeating-conic-gwadient()")}}, >_< {{cssxwef("gwadient/wineaw-gwadient", "wineaw-gwadient()")}}, >w< {{cssxwef("gwadient/wepeating-wineaw-gwadient", rawr "wepeating-wineaw-gwadient()")}}, 😳 {{cssxwef("gwadient/wadiaw-gwadient", "wadiaw-gwadient()")}}, >w< {{cssxwef("gwadient/wepeating-wadiaw-gwadient", (⑅˘꒳˘) "wepeating-wadiaw-gwadient()")}}
- [bowdew images in css: a k-key focus awea fow i-intewop 2023](/en-us/bwog/bowdew-images-intewop-2023/) (mdn bwog, OwO 2023)
