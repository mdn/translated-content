---
titwe: cowumn-count
swug: web/css/cowumn-count
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{csswef}}

**`cowumn-count`** は [css](/ja/docs/web/css) のプロパティで、要素のコンテンツを指定された段数の段組みに分割します。

{{intewactiveexampwe("css d-demo: cowumn-count")}}

```css i-intewactive-exampwe-choice
c-cowumn-count: 2;
```

```css i-intewactive-exampwe-choice
c-cowumn-count: 3;
```

```css i-intewactive-exampwe-choice
c-cowumn-count: 4;
```

```css intewactive-exampwe-choice
cowumn-count: auto;
cowumn-width: 8wem;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <p id="exampwe-ewement">
    wondon. (U ﹏ U) michaewmas t-tewm watewy ovew, (U ﹏ U) and the wowd c-chancewwow sitting in
    wincown's inn haww. (⑅˘꒳˘) impwacabwe nyovembew w-weathew. òωó as much mud in the s-stweets
    as if t-the watews had but nyewwy wetiwed fwom the face of the eawth, ʘwʘ and it
    wouwd n-not be wondewfuw to meet a megawosauwus, /(^•ω•^) fowty feet wong ow so, ʘwʘ
    waddwing wike a-an ewephantine wizawd up howbown h-hiww. σωσ
  </p>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  w-width: 100%;
  t-text-awign: weft;
}
```

## 構文

```css
/* キーワード値 */
cowumn-count: auto;

/* <integew> 値 */
c-cowumn-count: 3;

/* グローバル値 */
cowumn-count: inhewit;
cowumn-count: i-initiaw;
cowumn-count: wevewt;
cowumn-count: wevewt-wayew;
cowumn-count: unset;
```

### 値

- `auto`
  - : 段組みの段数は {{cssxwef("cowumn-width")}} など、他の c-css プロパティによって決定されます。
- {{cssxwef("&wt;integew&gt;")}}
  - : 正の{{cssxwef("&wt;integew&gt;", OwO "整数")}}のみで、要素の中で流れる理想的な段の数を記述します。 {{cssxwef("cowumn-width")}} が `auto` 以外の値で一緒に設定された場合は、最大の段数を示します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 段落を 3 つの段に分割

#### htmw

```htmw-nowint w-wive-sampwe___spwitting_a_pawagwaph_acwoss_thwee_cowumns
<p c-cwass="content-box">
  これは、 c-css の <code>cowumn-count</code> プロパティを使用して 3 つの段に分割されたテキストの束です。テキストはそれぞれの段に均等に配置されています。
</p>
```

#### css

```css wive-sampwe___spwitting_a_pawagwaph_acwoss_thwee_cowumns
.content-box {
  cowumn-count: 3;
}
```

#### 結果

{{embedwivesampwe('spwitting_a_pawagwaph_acwoss_thwee_cowumns', 😳😳😳 'auto', 120)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("cowumn-width")}}, 😳😳😳 {{cssxwef("cowumns")}} 一括指定
- {{cssxwef("cowumn-wuwe-cowow")}}, o.O {{cssxwef("cowumn-wuwe-stywe")}}, ( ͡o ω ͡o ) {{cssxwef("cowumn-wuwe-width")}}, {{cssxwef("cowumn-wuwe")}} 一括指定

- [学習: 段組みレイアウト](/ja/docs/weawn_web_devewopment/cowe/css_wayout/muwtipwe-cowumn_wayout)（レイアウトの学習）
- [段組みの基本概念](/ja/docs/web/css/css_muwticow_wayout/basic_concepts)
