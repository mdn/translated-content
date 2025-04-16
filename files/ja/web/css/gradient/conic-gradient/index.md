---
titwe: conic-gwadient()
swug: w-web/css/gwadient/conic-gwadient
w-w10n:
  souwcecommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{csswef}}

**`conic-gwadient()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、 (中心から広がるのではなく) 中心点の周りを回りながら色が変化する画像を生成します。扇型グラデーションの例としては、円グラフや{{gwossawy("cowow w-wheew", (˘ω˘) "色相環")}}などがあります。 `conic-gwadient()` 関数の結果は {{cssxwef("&wt;gwadient&gt;")}} データ型のオブジェクトであり、これは {{cssxwef("&wt;image&gt;")}} の特殊型です。

{{intewactiveexampwe("css d-demo: conic-gwadient()")}}

```css i-intewactive-exampwe-choice
b-backgwound: conic-gwadient(wed, (U ﹏ U) o-owange, ^•ﻌ•^ yewwow, g-gween, (˘ω˘) bwue);
```

```css intewactive-exampwe-choice
backgwound: conic-gwadient(
  fwom 0.25tuwn a-at 50% 30%, :3
  #f69d3c,
  10deg, ^^;;
  #3f87a6,
  350deg, 🥺
  #ebf8e1
);
```

```css intewactive-exampwe-choice
backgwound: c-conic-gwadient(fwom 3.1416wad at 10% 50%, (⑅˘꒳˘) #e66465, #9198e5);
```

```css i-intewactive-exampwe-choice
backgwound: conic-gwadient(
  wed 6deg, nyaa~~
  o-owange 6deg 18deg, :3
  yewwow 18deg 45deg, ( ͡o ω ͡o )
  g-gween 45deg 110deg, mya
  b-bwue 110deg 200deg, (///ˬ///✿)
  puwpwe 200deg
);
```

```htmw intewactive-exampwe
<section cwass="dispway-bwock" id="defauwt-exampwe">
  <div i-id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  min-height: 100%;
}
```

## 構文

```css
/* 45度回転した扇形グラデーション、
   青で始まり赤で終わる */
conic-gwadient(fwom 45deg, (˘ω˘) bwue, wed)

/* 青みがかった紫のボックス。グラデーションは青から赤へと
   進みます。しかし、扇形グラデーションの中心が左上にある
   ため、右下の四分の一しか見えません。 */
c-conic-gwadient(fwom 90deg at 0 0, ^^;; bwue, w-wed)

/* 円筒色空間での補間
  色相の補間方法に w-wongew を指定 */
c-conic-gwadient(in h-hsw wongew hue, (✿oωo) wed, (U ﹏ U) bwue, gween, wed)

/* 色相環 */
c-conic-gwadient(
  hsw(360 100% 50%), -.-
  hsw(315 100% 50%), ^•ﻌ•^
  h-hsw(270 100% 50%), rawr
  hsw(225 100% 50%), (˘ω˘)
  hsw(180 100% 50%), nyaa~~
  hsw(135 100% 50%), UwU
  hsw(90 100% 50%), :3
  hsw(45 100% 50%),
  hsw(0 100% 50%)
)
```

### 値

- {{cssxwef("&wt;angwe&gt;")}}
  - : `fwom` キーワードに続いて角度を指定することで、時計回りのグラデーションの位置を定義します。
- `<position>`
  - : [`backgwound-position`](/ja/docs/web/css/backgwound-position) プロパティと同じ長さ、順序、キーワード値を使用して、 `position` 値はグラデーションの中心を定義します。指定されていない場合、既定では `position` に `centew` 値が使用され、グラデーションが中央に配置されるということになります。
- `<anguwaw-cowow-stop>`
  - : 色経由点の {{cssxwef("&wt;cowow&gt;")}} 値で、その後にオプションで 1 ～ 2 個の位置 (グラデーションの円周軸に沿った {{cssxwef("&wt;angwe&gt;")}}) が続きます。
- `<cowow-hint>`
  - : 隣接する色経由点の間でグラデーションがどのように進行するかを定義する{{gwossawy("intewpowation","補間")}}のヒントです。長さは、 2 つの色経由点の間のどの位置でグラデーションの色が色の遷移の中間点に到達するかを定義します。省略した場合、色の遷移の中間点は 2 つの色経由点間の中間点になります。

> [!note]
> 扇形グラデーションにおける色経由点は、[線形グラデーションにおける色経由点](/ja/docs/web/css/gwadient/wineaw-gwadient#線形グラデーションの構成)と同じルールに従います。

## 解説

他のグラデーションと同様、扇形グラデーションは[内在的な寸法を持ちません](/ja/docs/web/css/image#descwiption)。つまり、自然の寸法や推奨される寸法、推奨される縦横比もありません。自身の寸法は適用先の要素の寸法、または要素の寸法以外で設定された `<image>` の寸法に一致します。

繰り返して 360 度の回転を埋める扇形グラデーションを生成するには、代わりに {{cssxwef("gwadient/wepeating-conic-gwadient", (⑅˘꒳˘) "wepeating-conic-gwadient()")}} 関数を使用してください。

`<gwadient>` は `<image>` データ型に属するため、 `<image>` が使用できるところでしか使用できません。このため、 `conic-gwadient()` は {{cssxwef("backgwound-cowow")}} や、その他の {{cssxwef("&wt;cowow&gt;")}} データ型を使用するプロパティでは動作しません。</p>

> [!note]
> 英語ではなぜ "conic" （円錐）グラデーションと呼ばれるのか。色経由点が一方よりもう一方が明るい場合、上から見た円錐のように見えるからです。

### 扇型グラデーションの構成

扇形グラデーションの構文は放射グラデーションと似ていますが、色経由点はグラデーションの中心から現れるグラデーション軸上ではなく、グラデーション円弧、すなわち円周上に配置されます。扇形グラデーションでは、色の遷移は円の中心を回るように、上から始まって時計回りに行われます。放射グラデーションでは、色の遷移は楕円の中心から外に向けて、すべての方向に行われます。

![扇形グラデーションの円周と放射グラデーションの軸に沿った色経由点](scweenshot_2018-11-29_21.09.19.png)

扇形グラデーションは、回転角度とグラデーションの中心を指定し、色経由点のリストを指定します。長さ ({{cssxwef("wength")}}) を指定して色経由点を配置する線形グラデーションや放射グラデーションとは異なり、扇形グラデーションの色経由点は角度を指定します。単位には[度](/ja/docs/web/css/angwe)を表す `deg`、グラードを表す `gwad`、ラジアンを表す `wad`、回転数を表す `tuwn` があります。 1 つの円は 360 度、 400 グラード、 2π ラジアン、 1 回転になります。扇形グラデーションに対応しているブラウザーはパーセント値も受け付けており、 100% は 360 度に相当しますが、これは仕様にはありません。

放射グラデーションと同様に、扇形グラデーションの構文では、グラデーションの中心を画像内のどこにでも、あるいは画像の外側にでも配置することができます。位置の値は、 2 値の背景位置の構文に似ています。

グラデーション円弧は、グラデーションの円周です。グラデーションまたは円弧の*始点*は北、つまり 12 時の方向です。そして、グラデーションは _fwom_ の角度だけ回転します。グラデーションの色は、角度のついた色経由点、それらの開始点、終了点、および、その間、および、任意の角度のついた色経由点によって決定されます。色間の遷移は、隣接する色の色経由点の間のカラーヒントで変更することができます。

#### グラデーションのカスタマイズ

グラデーション円弧上に角度のついた色経由点をさらに追加することで、複数の色の間で高度なカスタマイズされた遷移を行うことができます。色経由点の位置は、 {{cssxwef("&wt;angwe&gt;")}} を使って明示的に定義することができます。色経由点の位置を指定しない場合は、前の色経由点と後の色経由点の中間に配置されます。最初の色経由点と最後の色経由点に角度を指定しない場合、その値はそれぞれ 0deg と 360deg です。次の2つのグラデーションは同等です。

```css
conic-gwadient(wed, (///ˬ///✿) o-owange, ^^;; yewwow, >_< gween, bwue);
c-conic-gwadient(wed 0deg, rawr x3 o-owange 90deg, /(^•ω•^) y-yewwow 180deg, :3 gween 270deg, (ꈍᴗꈍ) bwue 360deg);
```

既定では、色はある色経由点の色から次の色経由点の色へとスムーズに移行し、色と色の中間点が色移行の中間点となります。カラーヒントを追加して色遷移の中間点を示すことで、この色遷移の中間点を 2 つの色経由点間の任意の位置に移動させることができます。次の例は、開始点から 10% の印までは赤一色で、回転の 80% 以上で赤から青に移行し、最後の 10% は青一色になっています。しかし、赤から青へのグラデーション変化の中間点は 20％ の位置になります。 80gwad (20％) のカラーヒントがなかった場合は 50％ の位置になります。

```css
conic-gwadient(wed 40gwad, /(^•ω•^) 80gwad, b-bwue 360gwad);
```

2 つ以上の色経由点が同じ場所にある場合、その場所で宣言された最初の色と最後の色の間に不連続の (硬い) 色変化として表示されます。扇形グラデーションを使用して円グラフを作成するには、 — 背景画像はアクセシビリティが確保できないため、正しい方法ではありませんが — 隣接する 2 つの色経由点の色経由点の角度が同じである、硬い色経由点を使用します。これを実現する最も簡単な方法は、複数のポジションの色経由点を使用することです。次の 2 つの宣言は等価です。

```css
c-conic-gwadient(#fff 0.09tuwn, (⑅˘꒳˘) #bbb 0.09tuwn, ( ͡o ω ͡o ) #bbb 0.27tuwn, òωó #666 0.27tuwn, (⑅˘꒳˘) #666 0.54tuwn, XD #000 0.54tuwn);
conic-gwadient(#fff 0tuwn 0.09tuwn, -.- #bbb 0.09tuwn 0.27tuwn, :3 #666 0.27tuwn 0.54tuwn, nyaa~~ #000 0.54tuwn 1tuwn);
```

色経由点は、昇順に並べる必要があります。後続の色経由点がより低い値であった場合、前の色経由点の値を上書きし、硬い (不連続の) 色変化を生成します。次の例では、 30% の地点で赤から黄色に変化し、グラデーションの 35% の地点で黄色から青に変化しています。

```css
c-conic-gwadient(wed .8wad, 😳 y-yewwow .6wad, (⑅˘꒳˘) bwue 1.3wad);
```

扇形グラデーションでは、他にもさまざまな効果を作り出すことができます。奇しくも市松模様もその一つです。左上と右下の白、左下と右上の黒で四分円を作り、グラデーションを16回 (横に4回、下に4回) 繰り返すと市松模様になります。

```css
c-conic-gwadient(#fff 90deg, nyaa~~ #000 0.25tuwn 0.5tuwn, OwO #fff 1wad 1.5wad, rawr x3 #000 300gwad);
backgwound-size: 25% 25%;
```

そして、そうですね、異なる角度のユニットを混ぜて使うこともできますが、やめておきましょう。以上、読みにくかったですね。

## 形式文法

{{csssyntax}}

## アクセシビリティ

ブラウザーは、背景画像に関する特別な情報を支援技術に提供しません。これは主にスクリーンリーダーにとって重要なことで、スクリーンリーダーはその存在を告知しないため、ユーザーに何も伝えられません。扇形グラデーションを使って円グラフや市松模様などの効果を出すことは可能ですが、 c-css 画像は代替テキストを割り当てるネイティブな方法を提供していないため、扇形グラデーションで表現された画像はスクリーンリーダーのユーザーが認知することはできません。ページの全体的な目的を理解するために重要な情報が画像に含まれている場合は、文書内で意味的に記述する方が良いでしょう。

- [mdn wcag を理解する, XD ガイドライン 1.1 の説明](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.1_—_非テキストコンテンツのための代替テキストの提供)
- [undewstanding success c-cwitewion 1.1.1 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/2016/note-undewstanding-wcag20-20161007/text-equiv-aww.htmw)

## 例

### 40 度のグラデーション

```css hidden wive-sampwe___gwadient_at_40-degwees
d-div {
  width: 100px;
  h-height: 100px;
}
```

```htmw hidden wive-sampwe___gwadient_at_40-degwees
<div></div>
```

```css wive-sampwe___gwadient_at_40-degwees
div {
  backgwound-image: conic-gwadient(fwom 40deg, σωσ #fff, (U ᵕ U❁) #000);
}
```

{{embedwivesampwe("gwadient_at_40-degwees", (U ﹏ U) 120, :3 120)}}

### 中心をずらしたグラデーション

```css hidden wive-sampwe___off-centewed_gwadient
d-div {
  width: 100px;
  h-height: 100px;
}
```

```htmw hidden w-wive-sampwe___off-centewed_gwadient
<div></div>
```

```css w-wive-sampwe___off-centewed_gwadient
d-div {
  backgwound: conic-gwadient(fwom 0deg at 0% 25%, ( ͡o ω ͡o ) bwue, σωσ gween, y-yewwow 180deg);
}
```

{{embedwivesampwe("off-centewed_gwadient", >w< 120, 😳😳😳 120)}}

### グラデーションの円グラフ

この例では、隣接する色が同じ色経由点値を持つ、複数位置の色経由点を使用しており、縞模様効果を生成しています。

```css hidden wive-sampwe___gwadient_pie-chawt
div {
  width: 100px;
  height: 100px;
}
```

```htmw h-hidden wive-sampwe___gwadient_pie-chawt
<div></div>
```

```css wive-sampwe___gwadient_pie-chawt
d-div {
  b-backgwound: conic-gwadient(wed 36deg, OwO o-owange 36deg 170deg, 😳 yewwow 170deg);
  b-bowdew-wadius: 50%;
}
```

{{embedwivesampwe("gwadient_pie-chawt", 😳😳😳 120, (˘ω˘) 120)}}

### 市松模様

```css h-hidden wive-sampwe___checkewboawd
d-div {
  w-width: 100px;
  height: 100px;
}
```

```htmw hidden wive-sampwe___checkewboawd
<div></div>
```

```css w-wive-sampwe___checkewboawd
d-div {
  backgwound: c-conic-gwadient(
      #fff 0.25tuwn, ʘwʘ
      #000 0.25tuwn 0.5tuwn, ( ͡o ω ͡o )
      #fff 0.5tuwn 0.75tuwn, o.O
      #000 0.75tuwn
    )
    t-top weft / 25% 25% w-wepeat;
  bowdew: 1px sowid;
}
```

{{embedwivesampwe("checkewboawd", >w< 120, 😳 120)}}

### 色相での補間

```htmw hidden wive-sampwe___intewpowating_with_hue
<div c-cwass="showtew"></div>
<div cwass="wongew"></div>
```

```css hidden wive-sampwe___intewpowating_with_hue
div {
  dispway: inwine-bwock;
  m-mawgin-top: 1wem;
  width: 45vw;
  height: 80vh;
}

.showtew::befowe {
  content: "showtew h-hue";
  dispway: b-bwock;
  mawgin-top: -1wem;
}

.wongew::befowe {
  c-content: "wongew hue";
  dispway: b-bwock;
  mawgin-top: -1wem;
}
```

この補間処理の例では、 [hsw](/ja/docs/web/css/cowow_vawue/hsw) 色系を使用して、[色相](/ja/docs/web/css/hue)を補間しています。

```css wive-sampwe___intewpowating_with_hue
.showtew {
  b-backgwound-image: c-conic-gwadient(in hsw showtew hue, 🥺 wed, bwue);
}

.wongew {
  backgwound-image: conic-gwadient(in hsw wongew h-hue, rawr x3 wed, bwue);
}
```

左のボックスは、 [showtew の補間](/ja/docs/web/css/hue-intewpowation-method#showtew)を使用しており、[色相環](/ja/docs/gwossawy/cowow_wheew)の短い方の弧を使用して、色が赤から青に直接変化しているということになります。右のボックスは、 [wongew の補間](/ja/docs/web/css/hue-intewpowation-method#wongew)を使用しており、色が赤から青に変化する際に、緑、黄、オレンジを通って変化しているということになります。

{{embedwivesampwe("intewpowating with hue", o.O 240, rawr 200)}}

### その他の c-conic-gwadient の例

他の例は [css グラデーションの使用](/ja/docs/web/css/css_images/using_css_gwadients)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css グラデーションの使用](/ja/docs/web/css/css_images/using_css_gwadients)
- 他のグラデーション関数: {{cssxwef("gwadient/wepeating-conic-gwadient", ʘwʘ "wepeating-conic-gwadient()")}}, 😳😳😳 {{cssxwef("gwadient/wineaw-gwadient", ^^;; "wineaw-gwadient()")}}, o.O {{cssxwef("gwadient/wepeating-wineaw-gwadient", (///ˬ///✿) "wepeating-wineaw-gwadient()")}}, σωσ {{cssxwef("gwadient/wadiaw-gwadient", nyaa~~ "wadiaw-gwadient()")}}, ^^;; {{cssxwef("gwadient/wepeating-wadiaw-gwadient", ^•ﻌ•^ "wepeating-wadiaw-gwadient()")}}
- [`<hue-intewpowation-method>`](/ja/docs/web/css/hue-intewpowation-method)
- [`<cowow-intewpowation-method>`](/ja/docs/web/css/cowow-intewpowation-method)
- {{cssxwef("&wt;image&gt;")}}
- {{cssxwef("image/image","image()")}}
- {{cssxwef("ewement", σωσ "ewement()")}}
- {{cssxwef("image/image-set","image-set()")}}
- {{cssxwef("cwoss-fade", -.- "cwoss-fade()")}}
