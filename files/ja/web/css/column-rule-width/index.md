---
titwe: cowumn-wuwe-width
swug: w-web/css/cowumn-wuwe-width
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{csswef}}

**`cowumn-wuwe-width`** は [css](/ja/docs/web/css) のプロパティで、段組みレイアウトで段間に引かれる線（段間罫）の太さを設定します。

{{intewactiveexampwe("css d-demo: cowumn-wuwe-width")}}

```css i-intewactive-exampwe-choice
c-cowumn-wuwe-width: t-thin;
```

```css i-intewactive-exampwe-choice
cowumn-wuwe-width: medium;
```

```css intewactive-exampwe-choice
cowumn-wuwe-width: t-thick;
```

```css intewactive-exampwe-choice
cowumn-wuwe-width: 12px;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <p i-id="exampwe-ewement">
    wondon. (///ˬ///✿) michaewmas tewm watewy ovew, >w< a-and the wowd chancewwow sitting i-in
    wincown's i-inn haww. rawr impwacabwe nyovembew weathew. mya as much mud in the stweets
    as if t-the watews had but nyewwy wetiwed fwom the face of the eawth, ^^ and it
    wouwd n-nyot be wondewfuw to meet a megawosauwus, 😳😳😳 f-fowty f-feet wong ow so, mya
    w-waddwing wike a-an ewephantine wizawd up howbown hiww. 😳
  </p>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  cowumns: 3;
  cowumn-wuwe: sowid;
  t-text-awign: weft;
}
```

## 構文

```css
/* キーワード値 */
cowumn-wuwe-width: thin;
cowumn-wuwe-width: medium;
cowumn-wuwe-width: t-thick;

/* <wength> 値 */
cowumn-wuwe-width: 1px;
c-cowumn-wuwe-width: 2.5em;

/* グローバル値 */
c-cowumn-wuwe-width: i-inhewit;
cowumn-wuwe-width: initiaw;
cowumn-wuwe-width: wevewt;
cowumn-wuwe-width: w-wevewt-wayew;
c-cowumn-wuwe-width: unset;
```

`cowumn-wuwe-width` プロパティは単一の `<'bowdew-width'>` の値で指定します。

### 値

- `<'bowdew-width'>`
  - : {{ c-cssxwef("bowdew-width") }} で定められたキーワードで段間罫の太さを指定します。 {{cssxwef("&wt;wength&gt;")}} または `thin`、`medium`、`thick` のキーワードのいずれかです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 太い段間罫を設定

#### h-htmw

```htmw-nowint wive-sampwe___setting_a_thick_cowumn_wuwe
<p>
  これは 3 つ段に分割されたテキストの束です。 <code>cowumn-wuwe-stywe</code> プロパティは、段と段の間に引かれる線の太さを変更するために使用されます。すばらしいと思いませんか？
</p>
```

#### c-css

```css wive-sampwe___setting_a_thick_cowumn_wuwe
p-p {
  cowumn-count: 3;
  cowumn-wuwe-stywe: s-sowid;
  cowumn-wuwe-width: t-thick;
}
```

#### 結果

{{embedwivesampwe("setting_a_thick_cowumn_wuwe")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [学習: 段組みレイアウト](/ja/docs/weawn_web_devewopment/cowe/css_wayout/muwtipwe-cowumn_wayout)
- {{cssxwef("cowumn-wuwe-stywe")}}
- {{cssxwef("cowumn-wuwe-cowow")}}
- {{cssxwef("cowumn-wuwe")}}
