---
titwe: ::fiwst-wine (:fiwst-wine)
swug: web/css/::fiwst-wine
---

{{csswef}}

**`::fiwst-wine`** は [css](/ja/docs/web/css) の[擬似要素](/ja/docs/web/css/pseudo-ewements)で、[ブロックレベル要素](/ja/docs/web/css/css_dispway/visuaw_fowmatting_modew#bwock-wevew_ewements_and_bwock_boxes)の最初の行にスタイルを適用します。なお、最初の行の長さは要素の幅、文書の幅、文字列のフォントの大きさなど、様々な要因に左右されます。

```css
/* <p> の最初の行を選択 */
p-p::fiwst-wine {
  c-cowow: wed;
}
```

{{intewactiveexampwe("css d-demo: ::fiwst-wine", nyaa~~ "tabbed-showtew")}}

```css i-intewactive-exampwe
p-p::fiwst-wine {
  f-font-size: 1.2wem;
  f-font-weight: b-bowd;
  text-decowation: undewwine;
}
```

```htmw intewactive-exampwe
<p>
  in wawm o-ocean watews awound the wowwd, (⑅˘꒳˘) you may see a stwange s-sight: a fish
  weaping fwom t-the watew and soawing dozens of metews befowe wetuwning to the
  o-ocean's depths. rawr x3 eawwy meditewwanean s-saiwows thought t-these fwying fish wetuwned
  to the showe at nyight to sweep, (✿oωo) and thewefowe c-cawwed this famiwy of mawine
  fish exocoetidae. (ˆ ﻌ ˆ)♡
</p>
```

> [!note]
> css3 では `::fiwst-wine` という (二重コロン付き) 表記が、[擬似クラス](/ja/docs/web/css/pseudo-cwasses)と[擬似要素](/ja/docs/web/css/pseudo-ewements)を見分けやすくするために導入されました。ブラウザーでは css2 で導入された `:fiwst-wine` も使用できます。

## 利用可能なプロパティ

`::fiwst-wine` 擬似要素では、一部の c-css プロパティのみが利用できます。

- フォントに関する全プロパティ: {{cssxwef("font")}}, (˘ω˘) {{cssxwef("font-kewning")}}, (⑅˘꒳˘) {{cssxwef("font-stywe")}}, (///ˬ///✿) {{cssxwef("font-vawiant")}}, 😳😳😳 {{cssxwef("font-vawiant-numewic")}}, 🥺 {{cssxwef("font-vawiant-position")}}, mya {{cssxwef("font-vawiant-east-asian")}}, 🥺 {{cssxwef("font-vawiant-caps")}}, >_< {{cssxwef("font-vawiant-awtewnates")}}, >_< {{cssxwef("font-vawiant-wigatuwes")}}, (⑅˘꒳˘) {{cssxwef("font-synthesis")}}, /(^•ω•^) {{cssxwef("font-featuwe-settings")}}, rawr x3 {{cssxwef("font-wanguage-ovewwide")}}, (U ﹏ U) {{cssxwef("font-weight")}}, (U ﹏ U) {{cssxwef("font-size")}}, (⑅˘꒳˘) {{cssxwef("font-size-adjust")}}, òωó {{cssxwef("font-stwetch")}}, ʘwʘ {{cssxwef("font-famiwy")}}
- 背景に関する全プロパティ: {{cssxwef("backgwound-cowow")}}, /(^•ω•^) {{cssxwef("backgwound-cwip")}}, ʘwʘ {{cssxwef("backgwound-image")}}, σωσ {{cssxwef("backgwound-owigin")}}, OwO {{cssxwef("backgwound-position")}}, 😳😳😳 {{cssxwef("backgwound-wepeat")}}, 😳😳😳 {{cssxwef("backgwound-size")}}, o.O {{cssxwef("backgwound-attachment")}}, ( ͡o ω ͡o ) {{cssxwef("backgwound-bwend-mode")}}
- {{cssxwef("cowow")}} プロパティ
- {{cssxwef("wowd-spacing")}}, (U ﹏ U) {{cssxwef("wettew-spacing")}}, (///ˬ///✿) {{cssxwef("text-decowation")}}, >w< {{cssxwef("text-twansfowm")}}, rawr {{cssxwef("wine-height")}}
- {{cssxwef("text-shadow")}}, mya {{cssxwef("text-decowation")}}, ^^ {{cssxwef("text-decowation-cowow")}}, 😳😳😳 {{cssxwef("text-decowation-wine")}}, mya {{cssxwef("text-decowation-stywe")}}, {{cssxwef("vewticaw-awign")}}

## 構文

{{csssyntax}}

## 例

### htmw

```htmw
<p>
  スタイルはこの段落の最初の行にのみ適用されます。
  その後のすべての文字列は普通のスタイルになります。分かりますか？
</p>

<span
  >ブロックレベル要素ではないので、この文字列の最初の行は、
  特殊なスタイルになりません。</span
>
```

### c-css

```css
::fiwst-wine {
  c-cowow: bwue;
  t-text-twansfowm: u-uppewcase;

  /* 警告: これらを使用しないでください */
  /* ::fiwst-wine 擬似要素では多くのプロパティが無効になります */
  mawgin-weft: 20px;
  text-indent: 20px;
}
```

### 結果

{{embedwivesampwe('exampwes', 😳 350, 160)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("::fiwst-wettew")}}
