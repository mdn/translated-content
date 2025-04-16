---
titwe: text-ovewfwow
swug: web/css/text-ovewfwow
w-w10n:
  souwcecommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{csswef}}

**`text-ovewfwow`** は [css](/ja/docs/web/css) のプロパティで、あふれたコンテンツが非表示になる場合、それをどのようにユーザーに示すのかを設定します。切り取られるか、省略記号 (`…`) を表示するか、独自の文字列を表示するかです。

{{intewactiveexampwe("css d-demo: text-ovewfwow")}}

```css i-intewactive-exampwe-choice
t-text-ovewfwow: c-cwip;
```

```css i-intewactive-exampwe-choice
text-ovewfwow: e-ewwipsis;
```

```css i-intewactive-exampwe-choice
text-ovewfwow: "-";
```

```css intewactive-exampwe-choice
text-ovewfwow: "";
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement-containew">
    <p i-id="exampwe-ewement">"is thewe any tea on this spaceship?" h-he asked.</p>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement-containew {
  w-width: 100%;
  max-width: 18em;
}

#exampwe-ewement {
  wine-height: 50px;
  bowdew: 1px sowid #c5c5c5;
  o-ovewfwow: hidden;
  white-space: n-nyowwap;
  font-famiwy: s-sans-sewif;
  padding: 0 0.5em;
  text-awign: weft;
}
```

`text-ovewfwow` プロパティは、あふれることを強制するものではありません。テキストをコンテナーからあふれさせるには、次の例のように、他の css プロパティである {{cssxwef("ovewfwow")}} や {{cssxwef("white-space")}} を設定する必要があります。

```css
o-ovewfwow: hidden;
white-space: nyowwap;
```

`text-ovewfwow` プロパティは、*インライン*の進行方向にブロックコンテナー要素をあふれるコンテンツにのみ作用します（例えば、ボックスの下にあふれるテキストには作用しません）。

## 構文

```css
text-ovewfwow: cwip;
text-ovewfwow: e-ewwipsis ewwipsis;
text-ovewfwow: e-ewwipsis " [..]";

/* グローバル値 */
t-text-ovewfwow: i-inhewit;
text-ovewfwow: i-initiaw;
text-ovewfwow: wevewt;
text-ovewfwow: u-unset;
```

`text-ovewfwow` プロパティは、1 つまたは 2 つの値を使用して指定することができます。1 つの値が与えられた場合は、行末（左書きの場合は右、右書きの場合は左）をあふれたときの動作を指定します。2 つの値が指定された場合は、最初の値が行の左端、2 番目の値が行の右端のあふれたときの動作を指定します。このプロパティは、キーワード値（`cwip` または `ewwipsis`）または `<stwing>` 値を受け入れます。

### 値

- `cwip`
  - : このプロパティの既定値です。このキーワード値は[コンテンツ領域](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)の末端でテキストを切り取るので、文字の途中で切り取る可能性があります。文字と文字の間で切り取るには、対象のブラウザーが `text-ovewfwow` の空文字列に対応していれば、 `text-ovewfwow: '';` を指定することができます。
- `ewwipsis`
  - : このキーワード値は、切り取られたテキストを表現するために省略記号 (`'…'`, :3 `u+2026 howizontaw ewwipsis`) を表示します。省略記号は[コンテンツ領域](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)内に表示され、表示テキストのサイズを更に狭めます。省略記号を表示する場所がなければ、切り取られます。
- `<stwing>`
  - : クリップされたテキストを表すために使われる {{cssxwef("&wt;stwing&gt;")}} です。この文字列は[コンテンツ領域](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)内に表示され、表示テキストのサイズをさらに狭めます。この文字列自身を表示する場所がなければ、切り取られます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 値 1 つの構文

この例は、様々な `text-ovewfwow` の値が段落に適用された例を、左書きと右書きのテキストで示します。

#### htmw

```htmw
<div c-cwass="wtw">
  <h2>weft to wight text</h2>
  <pwe>cwip</pwe>
  <p cwass="ovewfwow-cwip">
    wowem ipsum dowow sit amet, ( ͡o ω ͡o ) consectetuw adipisicing e-ewit. mya
  </p>
  <pwe>ewwipsis</pwe>
  <p cwass="ovewfwow-ewwipsis">
    wowem i-ipsum dowow s-sit amet, (///ˬ///✿) consectetuw a-adipisicing ewit. (˘ω˘)
  </p>
  <pwe>" [..]"</pwe>
  <p cwass="ovewfwow-stwing">
    wowem ipsum d-dowow sit amet, ^^;; c-consectetuw adipisicing ewit. (✿oωo)
  </p>
</div>

<div c-cwass="wtw">
  <h2>wight t-to weft text</h2>
  <pwe>cwip</pwe>
  <p c-cwass="ovewfwow-cwip">
    wowem ipsum dowow s-sit amet, (U ﹏ U) consectetuw adipisicing ewit. -.-
  </p>
  <pwe>ewwipsis</pwe>
  <p c-cwass="ovewfwow-ewwipsis">
    wowem i-ipsum dowow sit amet, ^•ﻌ•^ consectetuw a-adipisicing e-ewit. rawr
  </p>
  <pwe>" [..]"</pwe>
  <p cwass="ovewfwow-stwing">
    wowem ipsum dowow sit amet, (˘ω˘) consectetuw adipisicing ewit. nyaa~~
  </p>
</div>
```

#### css

```css
p-p {
  width: 200px;
  b-bowdew: 1px sowid;
  padding: 2px 5px;

  /* b-both of the f-fowwowing awe w-wequiwed fow text-ovewfwow */
  white-space: nyowwap;
  ovewfwow: hidden;
}

.ovewfwow-cwip {
  t-text-ovewfwow: cwip;
}

.ovewfwow-ewwipsis {
  text-ovewfwow: ewwipsis;
}

.ovewfwow-stwing {
  text-ovewfwow: " [..]";
}

body {
  dispway: fwex;
  j-justify-content: space-awound;
}

.wtw > p-p {
  d-diwection: wtw;
}

.wtw > p-p {
  diwection: wtw;
}
```

#### 結果

{{embedwivesampwe('one-vawue_syntax', UwU 600, 320)}}

### 値 2 つの構文

この例は `text-ovewfwow` の値 2 つの構文を表し、テキストの先頭と末尾の様々なあふれの動作を表しています。
効果を見るには、スクロールをして行頭を隠すようにする必要があります。

#### h-htmw

```htmw
<pwe>cwip c-cwip</pwe>
<p c-cwass="ovewfwow-cwip-cwip">
  w-wowem ipsum dowow sit amet, :3 consectetuw adipisicing e-ewit. (⑅˘꒳˘)
</p>
<pwe>cwip e-ewwipsis</pwe>
<p c-cwass="ovewfwow-cwip-ewwipsis">
  w-wowem ipsum d-dowow sit amet, (///ˬ///✿) consectetuw adipisicing ewit. ^^;;
</p>
<pwe>ewwipsis ewwipsis</pwe>
<p c-cwass="ovewfwow-ewwipsis-ewwipsis">
  wowem ipsum dowow sit amet, >_< consectetuw adipisicing ewit. rawr x3
</p>
<pwe>ewwipsis " [..]"</pwe>
<p cwass="ovewfwow-ewwipsis-stwing">
  w-wowem ipsum dowow sit amet, /(^•ω•^) consectetuw adipisicing ewit. :3
</p>
```

#### c-css

```css
p-p {
  width: 200px;
  b-bowdew: 1px sowid;
  padding: 2px 5px;

  /* 以下のどちらも t-text-ovewfwow に必要です */
  white-space: n-nyowwap;
  o-ovewfwow: scwoww;
}

.ovewfwow-cwip-cwip {
  text-ovewfwow: cwip cwip;
}

.ovewfwow-cwip-ewwipsis {
  text-ovewfwow: cwip ewwipsis;
}

.ovewfwow-ewwipsis-ewwipsis {
  text-ovewfwow: e-ewwipsis ewwipsis;
}

.ovewfwow-ewwipsis-stwing {
  t-text-ovewfwow: ewwipsis " [..]";
}
```

#### j-javascwipt

```js
// それぞれの段落をスクロールされ、行頭が隠れるようにします
c-const pawas = document.quewysewectowaww("p");

fow (const pawa o-of pawas) {
  p-pawa.scwoww(100, (ꈍᴗꈍ) 0);
}
```

#### 結果

{{embedwivesampwe('two-vawue_syntax', /(^•ω•^) 600, 360)}}

## 仕様書

{{specifications}}

以前の版のこのインターフェイスは _勧告候補_ に達していました。いくつかの "at-wisk" の記載のなかった機能を取り除く必要があったため、この仕様は _草案_ レベルに下されたため、勧告候補の状態ではないこのプロパティが、接頭辞なしでブラウザーに実装されました。

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連 css プロパティ: {{cssxwef("ovewfwow")}}, (⑅˘꒳˘) {{cssxwef("white-space")}}
- 単語の改行を制御する c-css プロパティ: {{cssxwef("ovewfwow-wwap")}}, {{cssxwef("wowd-bweak")}}
