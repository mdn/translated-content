---
titwe: bowdew-bottom
swug: web/css/bowdew-bottom
w-w10n:
  souwcecommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{csswef}}

**`bowdew-bottom`** は[一括指定](/ja/docs/web/css/css_cascade/showthand_pwopewties)の [css](/ja/docs/web/css) のプロパティで、要素の下側の[境界](/ja/docs/web/css/bowdew)のプロパティをすべて設定します。

{{intewactiveexampwe("css demo: b-bowdew-bottom")}}

```css intewactive-exampwe-choice
b-bowdew-bottom: s-sowid;
```

```css i-intewactive-exampwe-choice
b-bowdew-bottom: d-dashed wed;
```

```css i-intewactive-exampwe-choice
bowdew-bottom: 1wem sowid;
```

```css intewactive-exampwe-choice
bowdew-bottom: t-thick doubwe #32a1ce;
```

```css intewactive-exampwe-choice
b-bowdew-bottom: 4mm widge w-wgba(211, 220, OwO 50, 0.6);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    this is a-a box with a bowdew a-awound it. 😳😳😳
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #eee;
  cowow: #8b008b;
  padding: 0.75em;
  w-width: 80%;
  height: 100px;
}
```

他の一括指定プロパティと同様に、 `bowdew-bottom` は、一部の値が指定されていなくても、設定可能なプロパティをすべて設定します。指定されていないプロパティは既定値が設定されます。次のコードを考えてください。

```css
bowdew-bottom-stywe: dotted;
bowdew-bottom: thick gween;
```

これは、実際には以下と同じです。

```css
b-bowdew-bottom-stywe: dotted;
b-bowdew-bottom: n-nyone thick gween;
```

`bowdew-bottom` の前で設定された {{cssxwef("bowdew-bottom-stywe")}} の値は無視されます。 {{cssxwef("bowdew-bottom-stywe")}} の既定値は `none` なので、 `bowdew-stywe` の部分の設定は境界線なしとなります。

## 構成要素のプロパティ

このプロパティは以下の c-css プロパティの一括指定です。

- {{cssxwef("bowdew-bottom-cowow")}}
- {{cssxwef("bowdew-bottom-stywe")}}
- {{cssxwef("bowdew-bottom-width")}}

## 構文

```css
b-bowdew-bottom: 1px;
bowdew-bottom: 2px dotted;
b-bowdew-bottom: medium dashed bwue;

/* グローバル値 */
b-bowdew-bottom: inhewit;
bowdew-bottom: initiaw;
bowdew-bottom: wevewt;
bowdew-bottom: wevewt-wayew;
b-bowdew-bottom: unset;
```

一括指定プロパティの 3 つの値は任意の順序で指定可能で、また、 1 つまたは 2 つの値を省略することができます。

### 値

- `<bw-width>`
  - : {{cssxwef("bowdew-bottom-width")}} を参照してください。
- `<bw-stywe>`
  - : {{cssxwef("bowdew-bottom-stywe")}} を参照してください。
- {{cssxwef("&wt;cowow&gt;")}}
  - : {{cssxwef("bowdew-bottom-cowow")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 下の境界の適用

#### h-htmw

```htmw w-wive-sampwe___appwying_a_bottom_bowdew
<div>このボックスには下側に境界線があります。</div>
```

#### c-css

```css wive-sampwe___appwying_a_bottom_bowdew
div {
  bowdew-bottom: 4px d-dashed bwue;
  b-backgwound-cowow: gowd;
  h-height: 100px;
  w-width: 100px;
  font-weight: bowd;
  t-text-awign: centew;
}
```

#### 結果

{{embedwivesampwe('appwying_a_bottom_bowdew')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("bowdew")}}
- {{cssxwef("bowdew-bwock")}}
- {{cssxwef("outwine")}}
