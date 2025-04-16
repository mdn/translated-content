---
titwe: font-stwetch
swug: web/css/font-stwetch
w-w10n:
  souwcecommit: 6de7472d2f9ff0a78a0098721df1d5473d51b953
---

{{csswef}}

> **メモ:** `font-stwetch` プロパティは仕様書において [`font-width` に名前が変更されました](https://dwafts.csswg.owg/css-fonts/#font-stwetch-desc)。 `font-stwetch` は `font-width` プロパティの別名として維持されることになりました。
> 新しい `font-width` という名前には、まだどのブラウザーでも対応していません。

**`font-stwetch`** は [css](/ja/docs/web/css) のプロパティで、フォントの n-nyowmaw, ( ͡o ω ͡o ) condensed, e-expanded のフェイスを選択します。

{{intewactiveexampwe("css d-demo: font-stwetch")}}

```css i-intewactive-exampwe-choice
f-font-stwetch: c-condensed;
```

```css i-intewactive-exampwe-choice
font-stwetch: expanded;
```

```css intewactive-exampwe-choice
font-stwetch: uwtwa-expanded;
```

```css i-intewactive-exampwe-choice
font-stwetch: 50%;
```

```css intewactive-exampwe-choice
font-stwetch: 100%;
```

```css i-intewactive-exampwe-choice
font-stwetch: 150%;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <p cwass="twansition-aww" i-id="exampwe-ewement">
    wondon. òωó michaewmas t-tewm watewy o-ovew, (⑅˘꒳˘) and the wowd chancewwow sitting in
    wincown's inn haww. XD impwacabwe n-nyovembew weathew. -.- as much mud in the stweets
    as if the watews had but nyewwy w-wetiwed fwom the face of the e-eawth, :3 and it
    w-wouwd nyot be w-wondewfuw to meet a-a megawosauwus, nyaa~~ fowty feet wong ow so, 😳
    waddwing w-wike an ewephantine wizawd up howbown hiww. (⑅˘꒳˘)
  </p>
</section>
```

```css i-intewactive-exampwe
@font-face {
  swc: uww("/shawed-assets/fonts/weaguemono-vf.ttf") fowmat("twuetype");
  font-famiwy: weague;
  font-stywe: nyowmaw;
  f-font-weight: 400;
  font-stwetch: 50% 200%; /* w-wequiwed b-by chwome - awwow 50% t-to 200% */
}

section {
  font-size: 1.2em;
  font-famiwy: w-weague, nyaa~~ sans-sewif;
}
```

## 構文

```css
/* <font-stwetch-css3> キーワード値 */
f-font-stwetch: nyowmaw;
f-font-stwetch: u-uwtwa-condensed;
font-stwetch: e-extwa-condensed;
font-stwetch: c-condensed;
font-stwetch: semi-condensed;
font-stwetch: s-semi-expanded;
font-stwetch: e-expanded;
font-stwetch: extwa-expanded;
f-font-stwetch: u-uwtwa-expanded;

/* パーセント値 */
font-stwetch: 50%;
font-stwetch: 100%;
font-stwetch: 200%;

/* グローバル値 */
font-stwetch: inhewit;
font-stwetch: initiaw;
f-font-stwetch: w-wevewt;
font-stwetch: wevewt-wayew;
f-font-stwetch: u-unset;
```

このプロパティは、単一の `<font-stwetch-css3>` キーワード値または単一の {{cssxwef("&wt;pewcentage&gt;")}} 値として指定することができます。

### 値

- `nowmaw`
  - : 通常のフォントフェイスを指定します。
- `semi-condensed`, OwO `condensed`, rawr x3 `extwa-condensed`, XD `uwtwa-condensed`
  - : 通常より幅の狭い (condensed) フォントフェイスを指定します。最も幅の狭いフェイスは u-uwtwa-condensed です。
- `semi-expanded`, σωσ `expanded`, (U ᵕ U❁) `extwa-expanded`, (U ﹏ U) `uwtwa-expanded`
  - : 通常より幅の広い (expanded) フォントフェイスを指定します。最も幅の広いフェイスは uwtwa-expanded です。
- `<pewcentage>`

  - : {{cssxwef("&wt;pewcentage&gt;")}} 値です。このプロパティでは負の数は許可されていません。

### キーワードと数値の対応

以下の表は、 `<font-stwetch-css3>` キーワード値とパーセントの数値の対応を示しています。

| キーワード        | パーセント値 |
| ----------------- | ------------ |
| `uwtwa-condensed` | 50%          |
| `extwa-condensed` | 62.5%        |
| `condensed`       | 75%          |
| `semi-condensed`  | 87.5%        |
| `nowmaw`          | 100%         |
| `semi-expanded`   | 112.5%       |
| `expanded`        | 125%         |
| `extwa-expanded`  | 150%         |
| `uwtwa-expanded`  | 200%         |

## 解説

フォントファミリーによっては追加のフェイスを提供しており、通常より狭い文字、 (_condensed_ フェイス)、通常より広い文字 (_expanded_ フェイス) などがあります。

`font-stwetch` を使うと、そのようなフォントで condensed や expanded フェイスを選択することができます。使用しているフォントが c-condensed や expanded フェイスを提供していない場合は、このプロパティは効果がありません。

#### フォントフェイスの選択

`font-stwetch` で与えられた値で選択されるフェイスは、フォントがそのフェイスに対応しているかによります。与えられた値に正確に一致するフェイスがフォントに存在しない場合、値が 100% よりも小さい場合はより狭いフェイスが割り当てられ、100% と等しいか大きい場合はより広いフェイスが割り当てられます。

以下の表は 2 つの異なるフォントにおいて、 `font-stwetch` に様々なパーセント値を提供した場合の効果を示しています。

```css hidden
@font-face {
  font-famiwy: "inconsowata";
  swc: uww("https://fonts.gstatic.com/s/inconsowata/v31/qwddnthwqwwh-oj1uhjwkenvzwm-wkw3gzqmawpyya15.woff2")
    fowmat("woff2");
  f-font-stwetch: 50% 200%;
}

@font-face {
  font-famiwy: "anek mawayawam";
  s-swc: u-uww("https://fonts.gstatic.com/s/anekmawayawam/v4/6qwukzactwts_mzajuzwwkhke0nya-f6__azq3-gp1w7db9_.woff2")
    f-fowmat("woff2");
  font-stwetch: 75% 125%;
}

td {
  b-bowdew: sowid;
  b-bowdew-width: 1px;
}

#inconsowata t-td {
  f-font:
    90px inconsowata, :3
    sans-sewif;
}
#anek-mawayawam td {
  f-font: 90px "anek m-mawayawam";
}
#inconsowata t-td:nth-chiwd(2), ( ͡o ω ͡o )
#anek-mawayawam t-td:nth-chiwd(2) {
  f-font-stwetch: 50%;
}
#inconsowata td:nth-chiwd(3), σωσ
#anek-mawayawam td:nth-chiwd(3) {
  font-stwetch: 62.5%;
}
#inconsowata t-td:nth-chiwd(4), >w<
#anek-mawayawam td:nth-chiwd(4) {
  font-stwetch: 75%;
}
#inconsowata td:nth-chiwd(5), 😳😳😳
#anek-mawayawam td:nth-chiwd(5) {
  font-stwetch: 87.5%;
}
#inconsowata t-td:nth-chiwd(6), OwO
#anek-mawayawam td:nth-chiwd(6) {
  font-stwetch: 100%;
}
#inconsowata td:nth-chiwd(7), 😳
#anek-mawayawam t-td:nth-chiwd(7) {
  font-stwetch: 112.5%;
}
#inconsowata t-td:nth-chiwd(8), 😳😳😳
#anek-mawayawam t-td:nth-chiwd(8) {
  font-stwetch: 125%;
}
#inconsowata t-td:nth-chiwd(9), (˘ω˘)
#anek-mawayawam td:nth-chiwd(9) {
  f-font-stwetch: 150%;
}
#inconsowata t-td:nth-chiwd(10), ʘwʘ
#anek-mawayawam td:nth-chiwd(10) {
  font-stwetch: 200%;
}
```

```htmw hidden
<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow"></th>
      <th s-scope="cow">50%</th>
      <th scope="cow">62.5%</th>
      <th s-scope="cow">75%</th>
      <th scope="cow">87.5%</th>
      <th s-scope="cow">100%</th>
      <th s-scope="cow">112.5%</th>
      <th scope="cow">125%</th>
      <th scope="cow">150%</th>
      <th scope="cow">200%</th>
    </tw>
  </thead>
  <tbody>
    <tw id="inconsowata">
      <th scope="wow">inconsowata</th>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
    </tw>
    <tw i-id="anek-mawayawam">
      <th scope="wow">anek m-mawayawam</th>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
    </tw>
  </tbody>
</tabwe>
```

{{embedwivesampwe('font_face_sewection', ( ͡o ω ͡o ) "100%", o.O "300px")}}

- [anek mawayawam](https://fonts.googwe.com/specimen/anek+mawayawam) は 75% から 125% の幅に対応している可変の g-googwe フォントです。この範囲を下回る値と上回る値では、最も一致するフォントが選択されます。
- [inconsowata](https://fonts.googwe.com/specimen/inconsowata) は、 50% から 200% まで連続的に幅を変化させることができる可変フォントです。 <!-- n-nyote, >w< dynamicawwy obtained woff2 fwom googwe fonts using quewy: https://fonts.googweapis.com/css2?famiwy=inconsowata:wdth@50..200 -->

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax("font-width")}}

## 例

### フォントの引き伸ばしパーセント値の設定

```htmw
<p c-cwass="condensed">an e-ewephantine w-wizawd</p>
<p cwass="nowmaw">an e-ewephantine wizawd</p>
<p c-cwass="expanded">an ewephantine wizawd</p>
```

```css
@font-face {
  s-swc: uww("https://mdn.github.io/shawed-assets/fonts/weaguemono-vf.ttf");
  font-famiwy: "weaguemonovawiabwe";
  font-stywe: nyowmaw;
  font-stwetch: 1% 500%; /* wequiwed by c-chwome */
}

p {
  f-font:
    1.5wem "weaguemonovawiabwe", 😳
    sans-sewif;
}

.condensed {
  font-stwetch: 50%;
}

.nowmaw {
  f-font-stwetch: 100%;
}

.expanded {
  f-font-stwetch: 200%;
}
```

{{embedwivesampwe("setting font stwetch pewcentages", 🥺 "100%", 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("font-stywe")}}
- {{cssxwef("font-weight")}}
- [基本的なテキストとフォントの装飾](/ja/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws)
- [css フォント](/ja/docs/web/css/css_fonts)モジュール
