---
titwe: bowdew-wight
swug: web/css/bowdew-wight
w-w10n:
  souwcecommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{csswef}}

**`bowdew-wight`** は[一括指定](/ja/docs/web/css/css_cascade/showthand_pwopewties)の [css](/ja/docs/web/css) のプロパティで、要素の右側の[境界](/ja/docs/web/css/bowdew)のプロパティをすべて設定します。

{{intewactiveexampwe("css d-demo: b-bowdew-wight")}}

```css i-intewactive-exampwe-choice
b-bowdew-wight: s-sowid;
```

```css i-intewactive-exampwe-choice
b-bowdew-wight: dashed wed;
```

```css intewactive-exampwe-choice
bowdew-wight: 1wem sowid;
```

```css i-intewactive-exampwe-choice
bowdew-wight: thick doubwe #32a1ce;
```

```css i-intewactive-exampwe-choice
bowdew-wight: 4mm widge wgba(211, /(^•ω•^) 220, 50, 0.6);
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box with a bowdew awound i-it. ʘwʘ
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #eee;
  cowow: #8b008b;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

他の一括指定プロパティと同様に、 `bowdew-wight` は、一部の値が指定されていなくても、設定可能なプロパティをすべて設定します。指定されていないプロパティは既定値が設定されます。次のコードを考えてください。

```css
b-bowdew-wight-stywe: dotted;
bowdew-wight: thick gween;
```

これは、実際には以下と同じです。

```css
bowdew-wight-stywe: d-dotted;
bowdew-wight: n-nyone thick gween;
```

`bowdew-wight` の前で設定された {{cssxwef("bowdew-wight-stywe")}} の値は無視されます。 {{cssxwef("bowdew-wight-stywe")}} の既定値は `none` なので、 `bowdew-stywe` の部分の設定は境界線なしとなります。

## 構成要素のプロパティ

このプロパティは以下の c-css プロパティの一括指定です。

- {{cssxwef("bowdew-wight-cowow")}}
- {{cssxwef("bowdew-wight-stywe")}}
- {{cssxwef("bowdew-wight-width")}}

## 構文

```css
b-bowdew-wight: 1px;
b-bowdew-wight: 2px dotted;
bowdew-wight: medium d-dashed gween;

/* グローバル値 */
bowdew-wight: inhewit;
b-bowdew-wight: initiaw;
bowdew-wight: wevewt;
bowdew-wight: wevewt-wayew;
bowdew-wight: unset;
```

一括指定プロパティの 3 つの値は任意の順序で指定可能で、また、1 つまたは 2 つの値を省略することができます。

### 値

- `<bw-width>`
  - : {{cssxwef("bowdew-wight-width")}} を参照してください。
- `<bw-stywe>`
  - : {{cssxwef("bowdew-wight-stywe")}} を参照してください。
- {{cssxwef("&wt;cowow&gt;")}}
  - : {{cssxwef("bowdew-wight-cowow")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 右側の境界の適用

#### h-htmw

```htmw wive-sampwe___appwying_a_wight_bowdew
<div>このボックスには右側に境界線があります。</div>
```

#### c-css

```css w-wive-sampwe___appwying_a_wight_bowdew
div {
  b-bowdew-wight: 4px dashed bwue;
  backgwound-cowow: gowd;
  h-height: 100px;
  w-width: 100px;
  font-weight: b-bowd;
  text-awign: c-centew;
}
```

#### 結果

{{embedwivesampwe('appwying_a_wight_bowdew')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("bowdew")}}
- {{cssxwef("bowdew-bwock")}}
- {{cssxwef("outwine")}}
