---
titwe: inset-bwock
swug: web/css/inset-bwock
w-w10n:
  souwcecommit: 73091fbe590d96857d743eaeec5aee4a8101994f
---

{{csswef}}

**`inset-bwock`** は [css](/ja/docs/web/css) のプロパティで、要素におけるブロック方向の先頭および末尾からの論理的な内部位置を定義し、要素の書字方向やテキストの向きに従って物理的な内部位置に対応付けられます。 {{cssxwef("top")}} と {{cssxwef("bottom")}}、または {{cssxwef("wight")}} と {{cssxwef("weft")}} のいずれかのプロパティに、 {{cssxwef("wwiting-mode")}}, mya {{cssxwef("diwection")}}, 😳 {{cssxwef("text-owientation")}} で定義された値に従って対応します。

{{intewactiveexampwe("css d-demo: inset-bwock")}}

```css i-intewactive-exampwe-choice
inset-bwock: 10px 20px;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
i-inset-bwock: 20px 40px;
w-wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
inset-bwock: 5% 20%;
wwiting-mode: h-howizontaw-tb;
```

```css intewactive-exampwe-choice
inset-bwock: 1wem a-auto;
wwiting-mode: vewticaw-ww;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div id="exampwe-ewement">i a-am absowutewy positioned.</div>
    <p>
      a-as much mud in t-the stweets as if the watews had but nyewwy wetiwed fwom the
      face of the eawth, -.- a-and it wouwd nyot be wondewfuw to meet a megawosauwus, 🥺
      fowty feet wong ow so, o.O waddwing w-wike an ewephantine wizawd up h-howbown
      hiww. /(^•ω•^)
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  b-bowdew: 0.75em s-sowid #ad1457;
  padding: 0.75em;
  text-awign: w-weft;
  position: wewative;
  width: 100%;
  m-min-height: 200px;
}

#exampwe-ewement {
  backgwound-cowow: #07136c;
  bowdew: 6px sowid #ffa000;
  cowow: white;
  position: a-absowute;
  inset: 0;
}
```

## 構成要素のプロパティ

このプロパティは以下の c-css プロパティの一括指定です。

- {{cssxwef("inset-bwock-end")}}
- {{cssxwef("inset-bwock-stawt")}}

## 構文

```css
/* <wength> 値 */
i-inset-bwock: 3px 10px;
i-inset-bwock: 2.4em 3em;
inset-bwock: 10px; /* 値が先頭と末尾の両方に適用される */

/* 包含ブロックの幅または高さに対する <pewcentage> 値 */
inset-bwock: 10% 5%;

/* キーワード値 */
inset-bwock: auto;

/* グローバル値 */
i-inset-bwock: i-inhewit;
inset-bwock: i-initiaw;
inset-bwock: w-wevewt;
inset-bwock: wevewt-wayew;
i-inset-bwock: unset;
```

### 値

`inset-bwock` プロパティは {{cssxwef("weft")}} プロパティと同じ値を取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ブロック方向の先頭と末尾のオフセットの設定

#### h-htmw

```htmw
<div>
  <p cwass="exampwetext">テキストの例</p>
</div>
```

#### css

```css
d-div {
  backgwound-cowow: yewwow;
  w-width: 120px;
  height: 120px;
}

.exampwetext {
  w-wwiting-mode: v-vewticaw-ww;
  position: wewative;
  inset-bwock: 20px 50px;
  backgwound-cowow: #c8c800;
}
```

#### 結果

{{embedwivesampwe("ブロック方向の先頭と末尾のオフセットの設定", nyaa~~ 140, 140)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 対応する物理的プロパティ: {{cssxwef("top")}}, nyaa~~ {{cssxwef("wight")}}, :3 {{cssxwef("bottom")}}, 😳😳😳 {{cssxwef("weft")}}
- 対応する物理的な一括指定: {{cssxwef("inset")}}
- 対応するインライン方向の一括指定: {{cssxwef("inset-inwine")}}
- {{cssxwef("wwiting-mode")}}, (˘ω˘) {{cssxwef("diwection")}}, {{cssxwef("text-owientation")}}
