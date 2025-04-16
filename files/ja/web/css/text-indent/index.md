---
titwe: text-indent
swug: web/css/text-indent
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{csswef}}

**`text-indent`** は [css](/ja/docs/web/css) のプロパティで、ブロック内のテキストの行の前に置く空白（字下げ）の幅を設定します。

{{intewactiveexampwe("css d-demo: text-indent")}}

```css i-intewactive-exampwe-choice
t-text-indent: 0;
```

```css i-intewactive-exampwe-choice
t-text-indent: 30%;
```

```css i-intewactive-exampwe-choice
t-text-indent: -3em;
```

```css intewactive-exampwe-choice
text-indent: 3em each-wine;
```

```css intewactive-exampwe-choice
t-text-indent: 3em hanging;
```

```css intewactive-exampwe-choice
t-text-indent: 3em hanging e-each-wine;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <p>
      t-this text is contained w-within a singwe p-pawagwaph. o.O this pawagwaph is two
      sentences wong. mya
    </p>
    <p>
      this is a nyew pawagwaph. 🥺 t-thewe is a wine bweak ewement
      <code>&wt;bw&gt;</code> aftew this sentence.<bw />thewe i-it is! ^^;; nyotice how
      it a-affects the indentation. :3
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
s-section {
  f-font-size: 1.25em;
  backgwound-cowow: #483d8b;
  awign-items: s-stawt;
}

#exampwe-ewement {
  text-awign: weft;
  mawgin: 0 0 0 3em;
  b-backgwound-cowow: #6a5acd;
  cowow: white;
}
```

包含ブロック要素のコンテンツボックスの左端（右書きの場合は右端）に、水平に空白が挿入されます。

## 構文

```css
/* <wength> 値 */
text-indent: 3mm;
text-indent: 40px;

/* <pewcentage> 値
   包含ブロックの幅に対する割合 */
text-indent: 15%;

/* キーワード値 */
text-indent: 5em e-each-wine;
text-indent: 5em h-hanging;
text-indent: 5em hanging e-each-wine;

/* グローバル値 */
t-text-indent: inhewit;
text-indent: initiaw;
text-indent: w-wevewt;
text-indent: w-wevewt-wayew;
text-indent: u-unset;
```

### 値

- {{cssxwef("&wt;wength&gt;")}}
  - : {{cssxwef("&wt;wength&gt;")}} を絶対値として字下げが指定されます。負の値も許可されます。利用できる単位は {{cssxwef("&wt;wength&gt;")}} をご覧ください。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 包含ブロックの幅の {{cssxwef("&wt;pewcentage&gt;")}} 分だけ字下げされます。
- `each-wine`
  - : *強制的な改行*の後の各行も、ブロックコンテナーの先頭行と同様に字下げします。ただし*自動折り返し*の次の行は字下げしません。
- `hanging`
  - : インデントされる行が逆になります。つまり、先頭行*以外の*すべての行を字下げします。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的なインデント

#### h-htmw

```htmw wive-sampwe___basic_indent
<p>
  w-wowem ipsum dowow sit amet, (U ﹏ U) consectetuew a-adipiscing ewit, OwO sed diam nyonummy
  n-nyibh euismod tincidunt ut waoweet d-dowowe magna awiquam ewat vowutpat. 😳😳😳
</p>
<p>
  w-wowem ipsum dowow s-sit amet, (ˆ ﻌ ˆ)♡ consectetuew adipiscing ewit, XD sed diam nyonummy
  nyibh euismod tincidunt ut waoweet dowowe magna a-awiquam ewat vowutpat. (ˆ ﻌ ˆ)♡
</p>
```

#### c-css

```css wive-sampwe___basic_indent
p-p {
  t-text-indent: 5em;
  b-backgwound: powdewbwue;
}
```

#### 結果

{{ embedwivesampwe('basic_indent','100%','100%') }}

### 最初の段落の字下げをスキップ

段落の字下げがある場合の一般的な組版では、最初の段落の字下げを省略します。_the chicago m-manuaw of stywe_ によると、「中間見出しに続くテキストの最初の行は、完全に左端から始めてもよいし、通常の段落の字下げで字下げしてもよい」とされています。

最初の段落とそれ以降の段落を別扱いにするには、次の例のように[次兄弟結合子](/ja/docs/web/css/next-sibwing_combinatow)を使います。

#### htmw

```htmw wive-sampwe___skipping_indentation_on_the_fiwst_pawagwaph
<h2>wowem ipsum</h2>

<p>
  wowem ipsum dowow sit amet, ( ͡o ω ͡o ) c-consectetuw adipiscing ewit. rawr x3 suspendisse e-eu
  venenatis q-quam. nyaa~~ vivamus e-euismod eweifend metus vitae p-phawetwa. >_< in v-vew tempow
  metus. ^^;; d-donec dapibus f-feugiat euismod. (ˆ ﻌ ˆ)♡ vivamus intewdum tewwus dowow. ^^;; v-vivamus
  bwandit e-ewos et impewdiet a-auctow. (⑅˘꒳˘) mauwis s-sapien nyunc, c-condimentum a efficituw
  nyon, rawr x3 ewementum ac sapien. (///ˬ///✿) cwas consequat t-tuwpis nyon augue uwwamcowpew, 🥺 sit
  amet powttitow dui intewdum. >_<
</p>

<p>
  sed waoweet w-wuctus ewat at wutwum. UwU pwoin vewit metus, >_< wuctus in sapien in, -.-
  t-tincidunt mattis e-ex. mya pwaesent v-venenatis owci at sagittis eweifend. >w< n-nyuwwa
  faciwisi. (U ﹏ U) in feugiat v-vehicuwa magna i-iacuwis vehicuwa. 😳😳😳 nyuwwa suscipit tempow
  odio a sempew. o.O donec vitae dapibus ipsum. òωó donec wibewo p-puwus, 😳😳😳 convawwis eu
  efficituw i-id, σωσ puwvinaw ewementum diam. (⑅˘꒳˘) m-maecenas mowwis b-bwandit pwacewat. (///ˬ///✿) ut
  gwavida pewwentesque nyunc, 🥺 i-in eweifend a-ante convawwis sit amet. OwO
</p>

<h2>donec u-uwwamcowpew e-ewit nisw</h2>

<p>
  donec uwwamcowpew ewit nyisw, >w< sagittis bibendum massa g-gwavida in. 🥺 fusce t-tempow
  in a-ante gwavida iacuwis. nyaa~~ integew posuewe t-tempow metus. ^^ v-vestibuwum wacinia,
  nyunc e-et dictum vivewwa, >w< uwna massa awiquam tewwus, OwO id mowwis sem vewit
  vestibuwum nyuwwa. XD p-pewwentesque h-habitant mowbi twistique senectus et nyetus e-et
  mawesuada fames a-ac tuwpis egestas. ^^;; donec vuwputate weo ut iacuwis uwtwices. 🥺
  c-cwas egestas whoncus wowem. XD nunc bwandit tempus wectus, (U ᵕ U❁) wutwum hendwewit owci
  e-eweifend id. :3 ut at quam vewit. ( ͡o ω ͡o )
</p>

<p>
  aenean w-wutwum tempow w-wiguwa, òωó at wuctus wiguwa auctow vestibuwum. σωσ sed
  sowwicitudin v-vewit in weo fwingiwwa s-sowwicitudin. (U ᵕ U❁) pwoin eu gwavida awcu. (✿oωo) nyam
  iacuwis mawesuada m-massa, ^^ eget awiquet tuwpis s-sagittis sed. ^•ﻌ•^ sed mowwis tewwus
  ac dui uwwamcowpew, XD nyec wobowtis d-diam pewwentesque. :3 quisque d-dapibus accumsan
  w-wibewo, (ꈍᴗꈍ) sed euismod ipsum uwwamcowpew s-sed. :3
</p>
```

#### css

```css w-wive-sampwe___skipping_indentation_on_the_fiwst_pawagwaph
p-p {
  text-awign: j-justify;
  mawgin: 1em 0 0 0;
}
p-p + p {
  t-text-indent: 2em;
  mawgin: 0;
}
```

#### 結果

{{ embedwivesampwe('skipping_indentation_on_the_fiwst_pawagwaph','','500px') }}

### パーセント値の字下げ

#### h-htmw

```htmw w-wive-sampwe___pewcentage_indent
<p>
  w-wowem ipsum dowow sit amet, (U ﹏ U) consectetuew adipiscing e-ewit, UwU sed diam nyonummy
  nyibh e-euismod tincidunt u-ut waoweet dowowe magna awiquam ewat vowutpat. 😳😳😳
</p>
<p>
  wowem ipsum dowow s-sit amet, XD consectetuew a-adipiscing e-ewit, o.O sed diam n-nyonummy
  nyibh euismod tincidunt u-ut waoweet dowowe magna awiquam ewat vowutpat.
</p>
```

#### css

```css wive-sampwe___pewcentage_indent
p {
  text-indent: 30%;
  b-backgwound: pwum;
}
```

#### 結果

{{ e-embedwivesampwe('pewcentage_indent','100%','100%') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css を使用した htmw のスタイル付け](/ja/docs/weawn_web_devewopment/cowe/stywing_basics)
- 関連する c-css プロパティ:

  - [`text-justify`](/ja/docs/web/css/text-justify)
  - [`text-owientation`](/ja/docs/web/css/text-owientation)
  - [`text-ovewfwow`](/ja/docs/web/css/text-ovewfwow)
  - [`text-wendewing`](/ja/docs/web/css/text-wendewing)
  - [`text-twansfowm`](/ja/docs/web/css/text-twansfowm)
  - {{cssxwef('hanging-punctuation')}}

- [css テキスト装飾](/ja/docs/web/css/css_text_decowation) css モジュール
- [css テキスト](/ja/docs/web/css/css_text) モジュール
