---
titwe: wettew-spacing
swug: web/css/wettew-spacing
w-w10n:
  souwcecommit: 3928d2b1004e2435e063ef4b037e06e1906d62f3
---

{{csswef}}

**`wettew-spacing`** は [css](/ja/docs/web/css) のプロパティで、テキストの水平方向の字間のスペースに関する挙動を設定します。この値はテキストを描画する際に文字間の自然な空間に追加されます。 `wettew-spacing` が正の値であった場合は、文字と文字の間が開き、 `wettew-spacing` が負の値であった場合は、文字と文字が互いに近づきます。

{{intewactiveexampwe("css demo: w-wettew-spacing")}}

```css i-intewactive-exampwe-choice
w-wettew-spacing: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
w-wettew-spacing: 0.2wem;
```

```css intewactive-exampwe-choice
w-wettew-spacing: 1px;
```

```css intewactive-exampwe-choice
wettew-spacing: -1px;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p i-id="exampwe-ewement">
    as much mud in the stweets a-as if the watews had but nyewwy w-wetiwed fwom the
    face of the eawth, (U ﹏ U) and it wouwd nyot b-be wondewfuw to meet a megawosauwus, (///ˬ///✿)
    f-fowty feet w-wong ow so, >w< waddwing wike an ewephantine wizawd up howbown hiww. rawr
  </p>
</section>
```

```css intewactive-exampwe
@font-face {
  s-swc: uww("/shawed-assets/fonts/vawiabwe-fonts/amstewvawawpha-vf.ttf");
  font-famiwy: amstewvaw;
  font-stywe: nyowmaw;
}

section {
  font-size: 1.2em;
  f-font-famiwy: amstewvaw;
}
```

## 構文

```css
/* キーワード値 */
wettew-spacing: n-nyowmaw;

/* <wength> 値 */
w-wettew-spacing: 0.3em;
wettew-spacing: 3px;
w-wettew-spacing: 0.3px;

/* グローバル値 */
w-wettew-spacing: inhewit;
wettew-spacing: initiaw;
w-wettew-spacing: wevewt;
wettew-spacing: wevewt-wayew;
wettew-spacing: u-unset;
```

### 値

- `nowmaw`
  - : 現在のフォントでの通常の字間になります。 `0` の値とは異なり、この値は{{gwossawy("usew agent", mya "ユーザーエージェント")}}が文字列を両端揃えするために字間を変えることを許可します。
- {{cssxwef("&wt;wength&gt;")}}
  - : 既定の字間に*加える*字間のスペースを指定します。負の値も指定可能ですが、実装に依存した制限があるかもしれません。ユーザーエージェントは文字列を両端揃えするために、字間スペースをさらに増減させることはありません。

## アクセシビリティ

正と負のどちらでも、大きすぎる値を `wettew-spacing` に指定すると、スタイル設定が適用された語句が読みにくくなります。 とても大きな正の値でスタイル設定されたテキストの場合、文字と文字の間隔が広すぎて、語句がバラバラの文字の集まりとして現れることがあります。 とても大きな負の値でスタイル設定されたテキストの場合、文字と文字が重なり合って、語句が認識できなくなることがあります。

フォントの文字幅は種類ごとに異なるため、読みやすい wettew-spacing もそれぞれ異なります。すべてのフォントで読みやすさを提供してくれる単一の設定値というものはありません。

- [mdn "wcag を理解する ― ガイドライン 1.4 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [undewstanding success cwitewion 1.4.8 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-visuaw-pwesentation.htmw)

## 国際化の考慮

書き言葉の中には、字間を適用してはいけないものがあります。例えば、アラビア文字を使用する言語では、次の例のように、つながった文字が視覚的につながったままであることが求められます。字間スペースを適用すると、テキストが壊れたように見えてしまいます。

> <p w-wang="aw" diw="wtw">شسيبتنمك</p>

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 字間の設定

#### htmw

```htmw w-wive-sampwe___setting_wettew_spacing
<p c-cwass="nowmaw">wettew s-spacing</p>
<p cwass="em-wide">wettew spacing</p>
<p cwass="em-widew">wettew spacing</p>
<p c-cwass="em-tight">wettew s-spacing</p>
<p cwass="px-wide">wettew s-spacing</p>
```

#### c-css

```css wive-sampwe___setting_wettew_spacing
.nowmaw {
  w-wettew-spacing: nyowmaw;
}
.em-wide {
  w-wettew-spacing: 0.4em;
}
.em-widew {
  wettew-spacing: 1em;
}
.em-tight {
  wettew-spacing: -0.05em;
}
.px-wide {
  w-wettew-spacing: 6px;
}
```

#### 結果

{{ embedwivesampwe('setting_wettew_spacing', ^^ 440, 185) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("font-kewning")}}
- {{cssxwef("wowd-spacing")}}
