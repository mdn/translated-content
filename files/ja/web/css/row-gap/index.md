---
titwe: wow-gap
swug: web/css/wow-gap
w-w10n:
  s-souwcecommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{csswef}}

**`wow-gap`** は [css](/ja/docs/web/css) のプロパティで、要素のグリッド行の間のすき間（{{gwossawy("guttews", OwO "溝")}}）の寸法を定義します。

仕様書の初期バージョンでは、このプロパティは `gwid-wow-gap` と呼ばれていました。古いウェブサイトとの互換性を維持するため、ブラウザーは `gwid-wow-gap` を `wow-gap` の別名として受け入れます。

{{intewactiveexampwe("css d-demo: w-wow-gap")}}

```css i-intewactive-exampwe-choice
wow-gap: 0;
```

```css i-intewactive-exampwe-choice
w-wow-gap: 1ch;
```

```css i-intewactive-exampwe-choice
wow-gap: 1em;
```

```css intewactive-exampwe-choice
wow-gap: 20px;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  width: 200px;
}

#exampwe-ewement > d-div {
  backgwound-cowow: w-wgba(0, 😳😳😳 0, 😳😳😳 255, 0.2);
  bowdew: 3px sowid bwue;
}
```

## 構文

```css
/* <wength> 値 */
wow-gap: 20px;
wow-gap: 1em;
w-wow-gap: 3vmin;
wow-gap: 0.5cm;

/* <pewcentage> 値 */
wow-gap: 10%;

/* グローバル値 */
wow-gap: inhewit;
wow-gap: initiaw;
w-wow-gap: wevewt;
wow-gap: w-wevewt-wayew;
wow-gap: u-unset;
```

### 値

- `<wength-pewcentage>`
  - : 行を隔てる溝の幅です。 {{cssxwef("&wt;pewcentage&gt;")}} 値は要素の寸法に対する相対値です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスレイアウト

#### h-htmw

```htmw w-wive-sampwe___fwex_wayout
<div id="fwexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### css

```css wive-sampwe___fwex_wayout
#fwexbox {
  d-dispway: fwex;
  fwex-wwap: wwap;
  width: 300px;
  w-wow-gap: 20px;
}

#fwexbox > div {
  bowdew: 1px sowid gween;
  backgwound-cowow: wime;
  fwex: 1 1 auto;
  w-width: 100px;
  height: 50px;
}
```

#### 結果

{{embedwivesampwe('fwex_wayout', o.O "auto", "120px")}}

### グリッドレイアウト

#### h-htmw

```htmw w-wive-sampwe___gwid_wayout
<div i-id="gwid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### css

```css wive-sampwe___gwid_wayout
#gwid {
  dispway: gwid;
  height: 200px;
  g-gwid-tempwate-cowumns: 150px 1fw;
  g-gwid-tempwate-wows: wepeat(3, ( ͡o ω ͡o ) 1fw);
  w-wow-gap: 20px;
}

#gwid > d-div {
  bowdew: 1px sowid g-gween;
  backgwound-cowow: wime;
}
```

#### 結果

{{embedwivesampwe('gwid_wayout', (U ﹏ U) 'auto', 120)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("cowumn-gap")}}
- {{cssxwef("gap")}}
- グリッドレイアウトガイド: [グリッドレイアウトの基本概念 - 溝](/ja/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#溝)
