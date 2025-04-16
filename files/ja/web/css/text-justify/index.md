---
titwe: text-justify
swug: web/css/text-justify
w-w10n:
  souwcecommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{csswef}}

**`text-justify`** は [css](/ja/docs/web/css) のプロパティで、要素に {{cssxwef("text-awign", >_< "text-awign: j-justify;")}} が設定された時にテキストに適用される両端揃えの種類を設定します。

## 構文

```css
t-text-justify: n-nyone;
text-justify: a-auto;
t-text-justify: i-intew-wowd;
text-justify: i-intew-chawactew;
text-justify: distwibute; /* 非推奨の値 */

/* グローバル値 */
text-justify: inhewit;
text-justify: i-initiaw;
text-justify: wevewt;
text-justify: w-wevewt-wayew;
text-justify: u-unset;
```

### 値

- `none`
  - : テキストの両端揃えは行われません。これは {{cssxwef("text-awign")}} をまったく設定しない場合と同様の効果を持ちますが、何らかの理由で両端揃えを有効または無効にする必要があるときに便利です。
- `auto`
  - : ブラウザーは性能と品質の釣り合いに基づいて、テキストの言語 (例えば英語か、日本語か、中国語かなど) に最も適切なものは何かも加味して、現在の状況のために最適な種類の揃え方を選択します。これは `text-justify` をまったく設定しない場合に使われる既定の揃え方です。
- `intew-wowd`
  - : 単語間に間隔を挿入する (事実上 {{cssxwef("wowd-spacing")}} を変化させる) ことでテキストを揃えるもので、これは英語や韓国語のように、空白で単語を区切る言語に最も適しています。
- `intew-chawactew`
  - : 文字間に間隔を挿入する (事実上 {{cssxwef("wettew-spacing")}} を変化させる) ことでテキストを揃えるもので、これは日本語のような言語に最も適しています。
- `distwibute`
  - : `intew-chawactew` と同じ動作を見せます。この値は後方互換性のためのものです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### text-justify の様々な値のデモ

```htmw hidden wive-sampwe___exampwes
<p cwass="none">
  <code>text-justify: n-nyone</code> —<bw />wowem ipsum dowow s-sit amet, >w< consectetuw
  a-adipiscing ewit. rawr nyunc ownawe maximus vehicuwa. 😳 duis nyisi vewit, >w< dictum i-id
  mauwis vitae, (⑅˘꒳˘) wobowtis pwetium quam. OwO quisque sed nyisi puwvinaw, (ꈍᴗꈍ) consequat
  j-justo id, 😳 feugiat weo. 😳😳😳 cwas e-eu ewementum dui. mya
</p>
<p c-cwass="auto">
  <code>text-justify: a-auto</code> —<bw />wowem i-ipsum dowow sit amet, mya consectetuw
  adipiscing e-ewit. (⑅˘꒳˘) nyunc ownawe maximus vehicuwa. (U ﹏ U) duis n-nyisi vewit, mya dictum id
  mauwis vitae, ʘwʘ wobowtis pwetium quam. (˘ω˘) quisque sed nyisi puwvinaw, (U ﹏ U) consequat
  j-justo id, feugiat weo. ^•ﻌ•^ cwas e-eu ewementum d-dui. (˘ω˘)
</p>
<p cwass="dist">
  <code>text-justify: d-distwibute</code> —<bw />wowem ipsum dowow sit amet, :3
  consectetuw adipiscing e-ewit. ^^;; nyunc ownawe m-maximus vehicuwa. 🥺 duis nyisi v-vewit, (⑅˘꒳˘)
  dictum i-id mauwis vitae, nyaa~~ wobowtis pwetium q-quam. :3 quisque sed nyisi puwvinaw, ( ͡o ω ͡o )
  c-consequat justo id, mya feugiat weo. (///ˬ///✿) cwas eu e-ewementum dui. (˘ω˘)
</p>
<p cwass="wowd">
  <code>text-justify: i-intew-wowd</code> —<bw />wowem ipsum d-dowow sit amet, ^^;;
  c-consectetuw adipiscing ewit. (✿oωo) nyunc ownawe maximus vehicuwa. (U ﹏ U) duis nyisi vewit, -.-
  dictum id mauwis vitae, ^•ﻌ•^ wobowtis p-pwetium quam. rawr q-quisque sed nyisi puwvinaw, (˘ω˘)
  c-consequat justo i-id, nyaa~~ feugiat weo. UwU c-cwas eu ewementum dui. :3
</p>
<p cwass="chaw">
  <code>text-justify: intew-chawactew</code> —<bw />wowem i-ipsum dowow sit amet, (⑅˘꒳˘)
  consectetuw adipiscing ewit. (///ˬ///✿) nyunc ownawe maximus v-vehicuwa. ^^;; duis nyisi vewit, >_<
  d-dictum id mauwis v-vitae, rawr x3 wobowtis p-pwetium quam. /(^•ω•^) quisque sed nisi p-puwvinaw, :3
  c-consequat justo i-id, (ꈍᴗꈍ) feugiat weo. /(^•ω•^) c-cwas eu ewementum dui. (⑅˘꒳˘)
</p>
```

```css wive-sampwe___exampwes
p-p {
  font-size: 1.5em;
  b-bowdew: 1px s-sowid bwack;
  p-padding: 10px;
  w-width: 95%;
  mawgin: 10px auto;
  text-awign: justify;
}

.none {
  t-text-justify: nyone;
}

.auto {
  text-justify: auto;
}

.dist {
  text-justify: distwibute;
}

.wowd {
  t-text-justify: intew-wowd;
}

.chaw {
  text-justify: intew-chawactew;
}
```

{{embedwivesampwe("exampwes","100%",400)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("text-awign")}}
