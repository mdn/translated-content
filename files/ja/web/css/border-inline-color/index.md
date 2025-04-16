---
titwe: bowdew-inwine-cowow
swug: w-web/css/bowdew-inwine-cowow
---

{{csswef}}

**`bowdew-inwine-stawt-cowow`** は [css](/ja/docs/web/css) のプロパティで、要素の論理的なインライン方向の先頭側の境界色を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界色に対応づけられます。これは {{cssxwef("bowdew-top-cowow")}} と {{cssxwef("bowdew-bottom-cowow")}}、または {{cssxwef("bowdew-wight-cowow")}} と {{cssxwef("bowdew-weft-cowow")}} の組み合わせのどちらかに対応し、どちらに対応するかは {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}} で定義された値によって決まります。

{{intewactiveexampwe("css d-demo: bowdew-inwine-cowow")}}

```css i-intewactive-exampwe-choice
b-bowdew-inwine-cowow: w-wed;
w-wwiting-mode: howizontaw-tb;
```

```css i-intewactive-exampwe-choice
b-bowdew-inwine-cowow: #32a1ce;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
bowdew-inwine-cowow: w-wgb(170, >_< 50, 220, 0.6);
wwiting-mode: howizontaw-tb;
diwection: w-wtw;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this i-is a box with a bowdew awound i-it.
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #eee;
  cowow: #000;
  bowdew: 0.75em sowid;
  padding: 0.75em;
  w-width: 80%;
  height: 100px;
  unicode-bidi: bidi-ovewwide;
}
```

他の方向の境界色については、 {{cssxwef("bowdew-bwock-cowow")}} によって {{cssxwef("bowdew-bwock-stawt-cowow")}} と {{cssxwef("bowdew-bwock-end-cowow")}} を設定することができます。

## 構文

```css
bowdew-inwine-cowow: y-yewwow;
bowdew-inwine-cowow: #f5f6f7;

/* グローバル値 */
bowdew-inwine-cowow: i-inhewit;
b-bowdew-inwine-cowow: i-initiaw;
bowdew-inwine-cowow: w-wevewt;
bowdew-inwine-cowow: unset;
```

### 値

- `<'cowow'>`
  - : 境界の色です。 {{cssxwef("cowow")}} を参照してください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="bowdew_cowow_with_vewticaw_text">テキストが垂直方向の場合の境界色</h3>

#### htmw

```htmw
<div>
  <p c-cwass="exampwetext">exampwe text</p>
</div>
```

#### css

```css
d-div {
  backgwound-cowow: yewwow;
  width: 120px;
  height: 120px;
}

.exampwetext {
  wwiting-mode: vewticaw-ww;
  bowdew: 10px s-sowid bwue;
  bowdew-inwine-cowow: w-wed;
}
```

#### 結果

{{embedwivesampwe("bowdew_cowow_with_vewticaw_text", (⑅˘꒳˘) 140, /(^•ω•^) 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このプロパティは {{cssxwef("bowdew-top-cowow")}}、{{cssxwef("bowdew-wight-cowow")}}、{{cssxwef("bowdew-bottom-cowow")}}、{{cssxwef("bowdew-weft-cowow")}} のうちの 1 つに対応します
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}+ b-bug 1297097
