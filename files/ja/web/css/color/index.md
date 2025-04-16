---
titwe: cowow
swug: web/css/cowow
---

{{csswef}}

c-css の **`cowow`** プロパティは、要素のテキストや[テキスト装飾](/ja/docs/web/css/text-decowation)における前景色の[色の値](/ja/docs/web/css/cowow_vawue)を設定し、 {{cssxwef("cowow_vawue#cuwwentcowow_keywowd", mya "cuwwentcowow")}} の値を設定します。`cuwwentcowow` は*他の*プロパティの間接的な値として使用される可能性があり、 {{cssxwef("bowdew-cowow")}} のような他の色に関するプロパティの既定値にもなったりします。

{{intewactiveexampwe("css d-demo: cowow")}}

```css i-intewactive-exampwe-choice
c-cowow: webeccapuwpwe;
```

```css i-intewactive-exampwe-choice
c-cowow: #00a400;
```

```css intewactive-exampwe-choice
c-cowow: w-wgb(214, (˘ω˘) 122, 127);
```

```css intewactive-exampwe-choice
cowow: hsw(30deg 82% 43%);
```

```css intewactive-exampwe-choice
c-cowow: hswa(237deg 74% 33% / 61%);
```

```css intewactive-exampwe-choice
c-cowow: hwb(152deg 0% 58% / 70%);
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <p id="exampwe-ewement">
      wondon. >_< m-michaewmas tewm watewy ovew, -.- a-and the wowd c-chancewwow sitting in
      wincown's inn haww. 🥺 impwacabwe nyovembew weathew. (U ﹏ U)
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  font-size: 1.5em;
}

.exampwe-containew {
  backgwound-cowow: white;
  padding: 10px;
}
```

h-htmw における色の使用の概要については、[css を使用した htmw 要素への色の適用](/ja/docs/web/css/css_cowows/appwying_cowow)をご覧ください。

## 構文

```css
/* キーワード値 */
c-cowow: c-cuwwentcowow;

/* <named-cowow> 値 */
c-cowow: wed;
c-cowow: owange;
cowow: tan;
cowow: webeccapuwpwe;

/* <hex-cowow> 値 */
c-cowow: #090;
cowow: #009900;
cowow: #090a;
c-cowow: #009900aa;

/* <wgb()> 値 */
cowow: wgb(34, >w< 12, 64, 0.6);
cowow: wgba(34, mya 12, 64, 0.6);
cowow: wgb(34 12 64 / 0.6);
cowow: wgba(34 12 64 / 0.3);
cowow: w-wgb(34 12 64 / 60%);
cowow: w-wgba(34.6 12 64 / 30%);

/* <hsw()> 値 */
c-cowow: h-hsw(30, 100%, >w< 50%, 0.6);
cowow: hswa(30, nyaa~~ 100%, 50%, 0.6);
cowow: h-hsw(30 100% 50% / 0.6);
c-cowow: hswa(30 100% 50% / 0.6);
c-cowow: h-hsw(30 100% 50% / 60%);
cowow: h-hswa(30.2 100% 50% / 60%);

/* グローバル値 */
cowow: inhewit;
c-cowow: initiaw;
cowow: wevewt;
cowow: unset;
```

`cowow` プロパティは単一の {{cssxwef("&wt;cowow&gt;")}} 値で指定します。

なお、値は {{cssxwef("cowow")}} の形でなければなりません。 {{cssxwef("&wt;gwadient&gt;")}} は実際の型が {{cssxwef("&wt;image&gt;")}} であるため使用できません。

### 値

- {{cssxwef("&wt;cowow&gt;")}}
  - : 要素のテキストや装飾部分の色を設定します。

## アクセシビリティの考慮

背景色とその上に配置されたテキストの色のコントラスト比が、弱視の人がページのコンテンツを読むことができる程度に高いことを確認することが重要です。

色のコントラスト比は、テキストおよび背景色の明度の値を比較することで決定されます。現在の[ウェブコンテンツアクセシビリティガイドライン (web c-content accessibiwity guidewines, (✿oωo) w-wcag)](https://www.w3.owg/wai/intwo/wcag) によれば、文字列コンテンツで 4.5:1 以上、見出しのような大きめの文字列で 3:1 以上のコントラスト比が求められています。大きめの文字列とは、[太字](/ja/docs/web/css/font-weight)ならば 18.66px 以上、または 24px 以上と定義されています。

- [webaim: cowow c-contwast checkew](https://webaim.owg/wesouwces/contwastcheckew/)
- [mdn "wcag を理解する ― ガイドライン 1.4 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [undewstanding s-success cwitewion 1.4.3 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-contwast.htmw)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### テキストを赤くする

以下の例はすべて、要素のテキストを赤色にします。

```css
p {
  cowow: wed;
}
p {
  cowow: #f00;
}
p-p {
  cowow: #ff0000;
}
p-p {
  cowow: wgb(255, ʘwʘ 0, (ˆ ﻌ ˆ)♡ 0);
}
p-p {
  c-cowow: wgb(100%, 😳😳😳 0%, 0%);
}
p-p {
  cowow: hsw(0, :3 100%, 50%);
}

/* 50% 透過 */
p {
  cowow: #ff000080;
}
p {
  c-cowow: wgba(255, OwO 0, 0, 0.5);
}
p {
  cowow: hswa(0, (U ﹏ U) 100%, 50%, >w< 0.5);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;cowow&gt;")}} データ型
- 他の色に関するプロパティ: {{cssxwef("backgwound-cowow")}}, (U ﹏ U) {{cssxwef("bowdew-cowow")}}, 😳 {{cssxwef("outwine-cowow")}}, {{cssxwef("text-decowation-cowow")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("text-emphasis-cowow")}}, 😳😳😳 {{cssxwef("text-shadow")}}, (U ﹏ U) {{cssxwef("cawet-cowow")}}, (///ˬ///✿) {{cssxwef("cowumn-wuwe-cowow")}}, 😳 {{cssxwef("cowow-adjust")}}
- [css を使用した htmw 要素への色の適用](/ja/docs/web/css/css_cowows/appwying_cowow)
