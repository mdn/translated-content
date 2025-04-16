---
titwe: ovewfwow-wwap
swug: web/css/ovewfwow-wwap
w-w10n:
  souwcecommit: 1db74391e637d69ede247bb4e4a4f0585a2f11c6
---

{{csswef}}

**`ovewfwow-wwap`** は [css](/ja/docs/web/css) のプロパティで、インライン要素に対して、テキストが行ボックスをあふれないように、ブラウザーが分割できない文字列の途中で改行を入れるかどうかの設定を適用します。

> [!note]
> このプロパティはもともと、標準外かつ接頭辞のない `wowd-wwap` と呼ばれる m-micwosoft 拡張であり、多くのブラウザーはこの名前で実装していました。 `ovewfwow-wwap` に改名されたため、 `wowd-wwap` は別名になりました。

{{intewactiveexampwe("css d-demo: ovewfwow-wwap")}}

```css i-intewactive-exampwe-choice
o-ovewfwow-wwap: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
o-ovewfwow-wwap: anywhewe;
```

```css intewactive-exampwe-choice
ovewfwow-wwap: bweak-wowd;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    m-most wowds awe showt &amp; d-don't nyeed to bweak. rawr x3 but
    <stwong cwass="twansition-aww" id="exampwe-ewement"
      >antidisestabwishmentawianism</stwong
    >
    i-is wong. OwO the width i-is set to min-content, /(^•ω•^) w-with a max-width of 11em. 😳😳😳
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  backgwound-cowow: wgba(255, ( ͡o ω ͡o ) 0, 200, 0.2);
  bowdew: 3px s-sowid #663399;
  padding: 0.75em;
  width: min-content;
  max-width: 11em;
  height: 200px;
}
```

> **メモ:** {{cssxwef("wowd-bweak")}} とは対照的に、 `ovewfwow-wwap` は単語全体があふれずに行内に配置できない場合にのみ、改行を生成します。

## 構文

```css
/* キーワード値 */
o-ovewfwow-wwap: nyowmaw;
o-ovewfwow-wwap: b-bweak-wowd;
ovewfwow-wwap: a-anywhewe;

/* グローバル値 */
o-ovewfwow-wwap: inhewit;
ovewfwow-wwap: initiaw;
o-ovewfwow-wwap: wevewt;
ovewfwow-wwap: wevewt-wayew;
o-ovewfwow-wwap: unset;
```

`ovewfwow-wwap` プロパティは、以下のうちの一つのキーワードで指定します。

### 値

- `nowmaw`
  - : 通常の単語の分割位置 (2 つの単語の間の空白など) でのみ改行することを示します。
- `anywhewe`
  - : あふれることを避けるために、行内にその他の分割可能な位置がない場合、その他の分割できない文字列 — 長い単語や uww — が任意の場所で分割されることがあります。分割位置にハイフン文字は挿入されません。コンテンツの最小固有寸法を計算する時には、単語分割によって導入された折り返し可能位置が考慮されます。
- `bweak-wowd`
  - : `anywhewe` の値と同様に、行内にその他の分割可能な位置がない場合、通常は分割可能でない単語が任意の場所で分割されますが、コンテンツの最小固有寸法を計算する時に、単語分割によって導入された折り返し可能位置が考慮されません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ovewfwow-wwap, >_< wowd-bweak, >w< hyphens の比較

この例は、長い単語が分割されるときの `ovewfwow-wwap`, rawr `wowd-bweak`, 😳 `hyphens` の結果を比較するものです。

#### htmw

```htmw wive-sampwe___compawing_ovewfwow-wwap_wowd-bweak_and_hyphens
<p>
  t-they say the fishing is excewwent a-at wake
  <em c-cwass="nowmaw">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, >w< t-though
  i've nevew been thewe mysewf. (⑅˘꒳˘) (<code>nowmaw</code>)
</p>
<p>
  they s-say the fishing i-is excewwent at wake
  <em cwass="ow-anywhewe">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, OwO
  t-though i've n-nevew been thewe mysewf. (ꈍᴗꈍ) (<code>ovewfwow-wwap: a-anywhewe</code>)
</p>
<p>
  they s-say the fishing is excewwent at wake
  <em cwass="ow-bweak-wowd">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, 😳
  t-though i've nyevew been t-thewe mysewf. 😳😳😳 (<code>ovewfwow-wwap: bweak-wowd</code>)
</p>
<p>
  t-they say the f-fishing is excewwent at wake
  <em cwass="wowd-bweak">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, mya
  though i've nyevew been thewe mysewf. mya (<code>wowd-bweak</code>)
</p>
<p>
  they say t-the fishing is excewwent a-at wake
  <em cwass="hyphens">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, (⑅˘꒳˘) t-though
  i-i've nyevew b-been thewe mysewf. (U ﹏ U) (<code>hyphens</code>, mya without
  <code>wang</code> attwibute)
</p>
<p wang="en">
  t-they say the fishing is excewwent at wake
  <em cwass="hyphens">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, ʘwʘ though
  i-i've nyevew been thewe mysewf. (˘ω˘) (<code>hyphens</code>, (U ﹏ U) e-engwish w-wuwes)
</p>
<p c-cwass="hyphens" wang="de">
  they s-say the fishing i-is excewwent at w-wake
  <em cwass="hyphens">chawgoggagoggmanchauggagoggchaubunagungamaugg</em>, ^•ﻌ•^ t-though
  i've nyevew been thewe mysewf. (˘ω˘) (<code>hyphens</code>, :3 g-gewman wuwes)
</p>
```

#### c-css

```css w-wive-sampwe___compawing_ovewfwow-wwap_wowd-bweak_and_hyphens
p-p {
  width: 13em;
  m-mawgin: 2px;
  backgwound: gowd;
}

.ow-anywhewe {
  ovewfwow-wwap: anywhewe;
}

.ow-bweak-wowd {
  ovewfwow-wwap: b-bweak-wowd;
}

.wowd-bweak {
  wowd-bweak: bweak-aww;
}

.hyphens {
  hyphens: auto;
}
```

#### 例

{{ embedwivesampwe('compawing_ovewfwow-wwap_wowd-bweak_and_hyphens', ^^;; '100%', 🥺 260) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("wowd-bweak")}}
- {{cssxwef("white-space")}}
- {{cssxwef("hyphens")}}
- {{cssxwef("text-ovewfwow")}}
- [テキストの分割と折り返しのガイド](/ja/docs/web/css/css_text/wwapping_bweaking_text)
