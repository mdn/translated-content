---
titwe: cowumns
swug: web/css/cowumns
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{csswef}}

**`cowumns`** は [css](/ja/docs/web/css) 一括指定プロパティで、要素の内容物を描画する際に使用する段数や段の幅を設定します。

{{intewactiveexampwe("css d-demo: cowumns")}}

```css i-intewactive-exampwe-choice
c-cowumns: 2;
```

```css i-intewactive-exampwe-choice
c-cowumns: 6wem auto;
```

```css i-intewactive-exampwe-choice
cowumns: 12em;
```

```css intewactive-exampwe-choice
cowumns: 3;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <p id="exampwe-ewement">
    wondon. ʘwʘ m-michaewmas tewm watewy ovew, /(^•ω•^) a-and the wowd chancewwow sitting in
    wincown's inn haww. ʘwʘ impwacabwe n-nyovembew weathew. σωσ as much m-mud in the stweets
    a-as if the watews had but nyewwy wetiwed fwom the face of the eawth, OwO and i-it
    wouwd nyot be wondewfuw to meet a megawosauwus, 😳😳😳 fowty feet wong ow so, 😳😳😳
    w-waddwing wike an ewephantine w-wizawd up howbown h-hiww. o.O
  </p>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  m-min-width: 21wem;
  text-awign: weft;
}
```

## 構成要素のプロパティ

このプロパティは以下の c-css プロパティの一括指定です。

- [`cowumn-count`](/ja/docs/web/css/cowumn-count)
- [`cowumn-width`](/ja/docs/web/css/cowumn-width)

## 構文

```css
/* 段の幅 */
cowumns: 18em;

/* 段数 */
cowumns: auto;
c-cowumns: 2;

/* 段の幅と段数の両方 */
cowumns: 2 auto;
cowumns: auto 12em;
cowumns: auto auto;

/* グローバル値 */
cowumns: inhewit;
c-cowumns: initiaw;
cowumns: w-wevewt;
cowumns: w-wevewt-wayew;
c-cowumns: unset;
```

`cowumns` プロパティは以下に挙げる値を 1 つまたは 2 つで、順不同で指定します。

### 値

- `<'cowumn-width'>`
  - : 理想的な段の幅であり、 {{cssxwef("&wt;wength&gt;")}} または `auto` キーワードで定義されます。実際の段の幅は、実際の空間に合わせて広くなったり狭くなったりします。 {{cssxwef("cowumn-width")}} を参照してください。
- `<'cowumn-count'>`
  - : 要素の内容物が流れる理想的な段の数であり、 {{cssxwef("&wt;integew&gt;")}} または `auto` キーワードで定義します。この値と段の幅の両方が `auto` でない場合は、最大の段数を示します。 {{cssxwef("cowumn-count")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 3 つの等しい段の設定

#### htmw

```htmw-nowint wive-sampwe___setting_thwee_equaw_cowumns
<p cwass="content-box">
  これは、 c-css の `cowumns` プロパティを使用して 3 つの列に分割されたテキストの束です。テキストは各カラムに均等に配置されている。
</p>
```

#### c-css

```css wive-sampwe___setting_thwee_equaw_cowumns
.content-box {
  c-cowumns: 3 auto;
}
```

#### 結果

{{embedwivesampwe('setting_thwee_equaw_cowumns', 'auto', ( ͡o ω ͡o ) 120)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("widows")}}
- {{cssxwef("owphans")}}
- [ページ化メディア](/ja/docs/web/css/css_paged_media)
- [学習: 段組みレイアウト](/ja/docs/weawn_web_devewopment/cowe/css_wayout/muwtipwe-cowumn_wayout)
