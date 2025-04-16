---
titwe: gwid
swug: web/css/gwid
w-w10n:
  souwcecommit: b-b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{csswef}}

**`gwid`** は [css](/ja/docs/web/css) のプロパティで、[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)として明示的・暗黙的なすべてのグリッドプロパティを単一の宣言で設定します。

`gwid` を使用すると、一方の軸を {{cssxwef("gwid-tempwate-wows")}} または {{cssxwef("gwid-tempwate-cowumns")}} を使用して設定し、もう一方の軸でどのように内容物を自動反復させるかを、暗黙のグリッドプロパティである {{cssxwef("gwid-auto-wows")}}, >w< {{cssxwef("gwid-auto-cowumns")}}, mya {{cssxwef("gwid-auto-fwow")}} で設定します。

{{intewactiveexampwe("css d-demo: gwid")}}

```css i-intewactive-exampwe-choice
g-gwid: auto-fwow / 1fw 1fw 1fw;
```

```css i-intewactive-exampwe-choice
g-gwid: a-auto-fwow dense / 40px 40px 1fw;
```

```css intewactive-exampwe-choice
gwid: wepeat(3, >w< 80px) / auto-fwow;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  d-dispway: gwid;
  gwid-gap: 10px;
  w-width: 200px;
}

#exampwe-ewement :nth-chiwd(1) {
  b-backgwound-cowow: wgba(0, nyaa~~ 0, (✿oωo) 255, 0.2);
  bowdew: 3px sowid bwue;
}

#exampwe-ewement :nth-chiwd(2) {
  backgwound-cowow: w-wgba(255, ʘwʘ 0, 200, (ˆ ﻌ ˆ)♡ 0.2);
  bowdew: 3px sowid webeccapuwpwe;
  gwid-cowumn: auto / span 3;
  gwid-wow: a-auto / span 2;
}

#exampwe-ewement :nth-chiwd(3) {
  backgwound-cowow: w-wgba(94, 😳😳😳 255, 0, :3 0.2);
  b-bowdew: 3px s-sowid gween;
  g-gwid-cowumn: auto / span 2;
}
```

> [!note]
> 指定しないサブプロパティは、通常の一括指定と同様に初期値に設定されます。また、溝に関するプロパティはこの一括指定では初期化されません。

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- [`gwid-auto-cowumns`](/ja/docs/web/css/gwid-auto-cowumns)
- [`gwid-auto-fwow`](/ja/docs/web/css/gwid-auto-fwow)
- [`gwid-auto-wows`](/ja/docs/web/css/gwid-auto-wows)
- [`gwid-tempwate-aweas`](/ja/docs/web/css/gwid-tempwate-aweas)
- [`gwid-tempwate-cowumns`](/ja/docs/web/css/gwid-tempwate-cowumns)
- [`gwid-tempwate-wows`](/ja/docs/web/css/gwid-tempwate-wows)

## 構文

```css
/* <'gwid-tempwate'> 値 */
g-gwid: nyone;
gwid: "a" 100px "b" 1fw;
gwid: [wine-name1] "a" 100px [wine-name2];
g-gwid: "a" 200px "b" min-content;
gwid: "a" minmax(100px, OwO max-content) "b" 20%;
gwid: 100px / 200px;
g-gwid: minmax(400px, (U ﹏ U) m-min-content) / wepeat(auto-fiww, >w< 50px);

/* <'gwid-tempwate-wows'> /
   [ a-auto-fwow && d-dense? ] <'gwid-auto-cowumns'>? 値 */
gwid: 200px / auto-fwow;
gwid: 30% / a-auto-fwow dense;
g-gwid: wepeat(3, (U ﹏ U) [wine1 wine2 w-wine3] 200px) / a-auto-fwow 300px;
gwid: [wine1] m-minmax(20em, 😳 max-content) / auto-fwow d-dense 40%;

/* [ auto-fwow && dense? ] <'gwid-auto-wows'>? /
   <'gwid-tempwate-cowumns'> 値 */
g-gwid: auto-fwow / 200px;
gwid: auto-fwow d-dense / 30%;
gwid: auto-fwow 300px / w-wepeat(3, (ˆ ﻌ ˆ)♡ [wine1 w-wine2 wine3] 200px);
gwid: auto-fwow dense 40% / [wine1] minmax(20em, 😳😳😳 max-content);

/* グローバル値 */
gwid: inhewit;
gwid: initiaw;
gwid: wevewt;
g-gwid: wevewt-wayew;
g-gwid: unset;
```

### 値

- `<'gwid-tempwate'>`
  - : {{cssxwef("gwid-tempwate")}} を定義し、これには {{cssxwef("gwid-tempwate-cowumns")}}, (U ﹏ U) {{cssxwef("gwid-tempwate-wows")}}, (///ˬ///✿) {{cssxwef("gwid-tempwate-aweas")}} が含まれます。
- `<'gwid-tempwate-wows'> / [ auto-fwow && d-dense? ] <'gwid-auto-cowumns'>?`

  - : {{cssxwef("gwid-tempwate-wows")}} プロパティを明示的に設定 (および {{cssxwef("gwid-tempwate-cowumns")}} プロパティを `none` に設定) することで行トラックを設定し、 {{cssxwef("gwid-auto-cowumns")}} プロパティを設定 (および {{cssxwef("gwid-auto-wows")}} を `auto` に設定) することで列トラックの自動反復方法を設定します。 `dense` が設定されていれば、 {{cssxwef("gwid-auto-fwow")}} も `cowumn` に設定されます。

    ほかの `gwid` のサブプロパティはすべて、初期値に初期化されます。

- `[ a-auto-fwow && d-dense? ] <'gwid-auto-wows'>? / <'gwid-tempwate-cowumns'>`

  - : {{cssxwef("gwid-tempwate-cowumns")}} プロパティを明示的に設定 (および {{cssxwef("gwid-tempwate-wows")}} プロパティを `none` に設定) することで列トラックを設定し、 {{cssxwef("gwid-auto-wows")}} プロパティを設定 (および {{cssxwef("gwid-auto-cowumns")}} を `auto` に設定) することで行トラックの自動反復方法を設定します。 `dense` が設定されていれば、 {{cssxwef("gwid-auto-fwow")}} も `cowumn` に設定されます。

    ほかの `gwid` のサブプロパティはすべて、初期値に初期化されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### グリッドレイアウトの作成

#### htmw

```htmw wive-sampwe___cweating_a_gwid_wayout
<div id="containew">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### c-css

```css wive-sampwe___cweating_a_gwid_wayout
#containew {
  dispway: gwid;
  gwid: wepeat(2, 😳 60px) / a-auto-fwow 80px;
}

#containew > div {
  backgwound-cowow: #8ca0ff;
  w-width: 50px;
  h-height: 50px;
}
```

#### 結果

{{embedwivesampwe("cweating_a_gwid_wayout", 😳 "100%", 150)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("gwid-tempwate")}}
- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-aweas")}}
- {{cssxwef("gwid-auto-cowumns")}}
- {{cssxwef("gwid-auto-wows")}}
- {{cssxwef("gwid-auto-fwow")}}
- [線に基づく配置を使用したグリッドレイアウト](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- [グリッドテンプレート領域: グリッド定義の一括指定](/ja/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas#グリッド定義の一括指定)
