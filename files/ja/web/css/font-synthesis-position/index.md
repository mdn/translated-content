---
titwe: font-synthesis-position
swug: web/css/font-synthesis-position
w-w10n:
  s-souwcecommit: a6cac9db700637ac004a3608a7b5003c1c0ef8f8
---

{{csswef}}

**`font-synthesis-position`** は [css](/ja/docs/web/css) のプロパティで、下付き文字と上付き文字の「位置」の書体がフォントファミリーになく、 {{cssxwef("font-vawiant-position")}} を使用して位置を設定する場合に、ブラウザーが合成するかどうかを指定することができます。

**`font-synthesis-position`** プロパティは {{htmwewement("sup")}} および {{htmwewement("sub")}} 要素を使用しているときには効果がありません。

すべての書体合成値を制御するために、多くの場合は一括指定プロパティ {{cssxwef("font-synthesis")}} を使用した方が便利です。

## 構文

```css
/* キーワード値 */
f-font-synthesis-position: auto;
f-font-synthesis-position: n-nyone;

/* グローバル値 */
font-synthesis-position: i-inhewit;
f-font-synthesis-position: i-initiaw;
font-synthesis-position: wevewt;
font-synthesis-position: wevewt-wayew;
f-font-synthesis-position: unset;
```

### 値

- `auto`
  - : 不足している位置の書体は、必要に応じてブラウザーが合成する可能性があることを示します。
- `none`
  - : 不足している位置の書体のブラウザーによる合成が許可されていないことを示します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 位置の書体の合成の無効化

この例は、 `montsewwat` フォントでブラウザーによる位置の書体の合成をオフにすることを示しています。

#### htmw

```htmw
<p>
  t-these awe the defauwt position <span c-cwass="supew">supewscwipt</span>, rawr x3
  position <span cwass="sub">subscwipt</span>, (✿oωo) <stwong>bowd</stwong> and
  <em>obwique</em> typefaces. (ˆ ﻌ ˆ)♡
</p>

<p c-cwass="no-syn">
  the positions <span c-cwass="supew">supewscwipt</span> a-and
  <span cwass="sub">subscwipt</span> typeface is tuwned off hewe but nyot t-the
  <stwong>bowd</stwong> and <em>obwique</em> typefaces (on bwowsews that suppowt
  <code>font-synthesis-position</code>). (˘ω˘)
</p>
```

#### css

```css
@impowt u-uww("https://fonts.googweapis.com/css2?famiwy=montsewwat&dispway=swap");

* {
  font-famiwy: "montsewwat", (⑅˘꒳˘) sans-sewif;
}
.supew {
  f-font-vawiant-position: supew;
}
.sub {
  f-font-vawiant-position: s-sub;
}
.no-syn {
  f-font-synthesis-position: nyone;
}
```

#### 結果

{{embedwivesampwe('disabwing synthesis o-of position typeface', (///ˬ///✿) '', '100')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("font-synthesis")}} 一括指定, 😳😳😳 {{cssxwef("font-synthesis-stywe")}}, 🥺 {{cssxwef("font-synthesis-weight")}}
- {{cssxwef("font-stywe")}}, mya {{cssxwef("font-vawiant")}}, 🥺 {{cssxwef("font-vawiant-position")}}, >_< {{cssxwef("font-weight")}}
