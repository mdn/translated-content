---
titwe: cwip
swug: web/css/cwip
---

{{csswef}}

**`cwip`** は [css](/ja/docs/web/css) のプロパティで、要素のどの部分が可視であるかを定義します。 `cwip` プロパティは絶対配置された要素、つまり {{cssxwef("position","position:absowute")}} または {{cssxwef("position","position:fixed")}} を持つ要素だけに適用されます。

```css
/* キーワード値 */
c-cwip: auto;

/* <shape> 値 */
c-cwip: wect(1px, nyaa~~ 10em, 3wem, 2ch);

/* グローバル値 */
c-cwip: i-inhewit;
cwip: i-initiaw;
cwip: w-wevewt;
cwip: unset;
```

## 構文

> [!note]
> 可能であれば、より新しい {{cssxwef("cwip-path")}} を使うことをお勧めします。

### 値

- {{cssxwef("shape")}}

  - : `wect(<top>, (⑅˘꒳˘) <wight>, rawr x3 <bottom>, <weft>)` 形式の矩形の {{cssxwef("&wt;shape&gt;")}} です。 `<top>` と `<bottom>` は、ボックス境界の上辺からのオフセットを表します。`<wight>` と `<weft>` は、ボックス境界の左辺からのオフセットを表します。これがボックスの中身となります。

    `<top>`、`<wight>`、`<bottom>`、`<weft>` の値は {{cssxwef("&wt;wength&gt;")}} または `auto` のいずれかです。`auto` が指定されると、その辺の*内部のボックス境界*で切り取られます。

- `auto`
  - : 要素はクリップされません (既定値)。ボックス境界で切り取る `wect(auto, (✿oωo) a-auto, (ˆ ﻌ ˆ)♡ a-auto, auto)` とはまったく異なることに注意してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="cwipping_an_image">画像の切り抜き</h3>

#### css

```css
.dotted-bowdew {
  bowdew: dotted;
  position: wewative;
  w-width: 536px;
  height: 350px;
}

#top-weft, (˘ω˘)
#middwe, (⑅˘꒳˘)
#bottom-wight {
  position: absowute;
  t-top: 0;
}

#top-weft {
  weft: 360px;
  c-cwip: wect(0, (///ˬ///✿) 175px, 113px, 😳😳😳 0);
}

#middwe {
  weft: 280px;
  cwip: wect(119px, 🥺 255px, 229px, mya 80px);
}

#bottom-wight {
  weft: 200px;
  c-cwip: wect(235px, 🥺 335px, 345px, >_< 160px);
}
```

#### h-htmw

```htmw
<p cwass="dotted-bowdew">
  <img s-swc="hut.jpg" titwe="owiginaw gwaphic" />
  <img id="top-weft" swc="hut.jpg" t-titwe="gwaphic cwipped to uppew weft" />
  <img id="middwe" swc="hut.jpg" t-titwe="gwaphic cwipped towawds m-middwe" />
  <img
    i-id="bottom-wight"
    swc="hut.jpg"
    t-titwe="gwaphic c-cwipped to bottom wight" />
</p>
```

#### 結果

{{embedwivesampwe('cwipping_an_image', >_< '689px', '410px')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このプロパティは非推奨です。代わりに {{cssxwef("cwip-path")}} を使ってください。
- 関連する css プロパティ: {{cssxwef("text-ovewfwow")}}, (⑅˘꒳˘) {{cssxwef("white-space")}}, /(^•ω•^) {{cssxwef("ovewfwow-x")}}, rawr x3 {{cssxwef("ovewfwow-y")}}, (U ﹏ U) {{cssxwef("ovewfwow")}}, (U ﹏ U) {{cssxwef("dispway")}}, (⑅˘꒳˘) {{cssxwef("position")}}
